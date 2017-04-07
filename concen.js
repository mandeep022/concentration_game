

// An array with all the string characters


var concen = ["image/i.png","image/a.png","image/f.png","image/h.png","image/v.png","image/n.png","image/ho.png","image/j.png","image/m.png","image/t.png","image/w.png","image/r.png","image/i.png","image/a.png","image/f.png","image/h.png","image/v.png","image/n.png","image/ho.png","image/j.png","image/m.png","image/t.png","image/w.png","image/r.png"];









//Shuffle array and store the array into a new varibale


var titanic = rand(concen);


// coloms and rows labeling using for loop

    
    

var label = 0;
    
    
 

//draw the table using for loop 4*6
    


document.write("<div id = 'div1'><table id='tableID' >");
    
for ( var row = 1 ; row<= 4;row++)
        
        
        

    {document.write("<tr>");
            
       for(var col = 1  ;col<=6;col++) 



{
document.write("<td id="+(label++)+" style='width: 90px;height: 90px; background: #c2c2d6; border-style: outset;'><td>");
}


document.write("&nbsp;</tr>");
}



 document.write("</table></div>")
    
  
    

 
	

//variables
    
    

    var memory = 1;
    
    var lastcardid = '';
    
    var score = 0;
    
    var tries = 0;
    
    var lastcard = '';
    
    var leveltime;
    
    var storeflipcard=[];
    
    var s = 0;
    
    var logic;
    
    var resetflip=0;
   
	

	

		
		
	

//Handling all the events
	
    
     var solution = document.getElementById("sol").addEventListener("click", function(){

	
for ( var s = 0 ; s<titanic.length;s++)
			
  

   {
    document.getElementById(s).innerHTML = '<img src='+titanic[s]+' width="84" height="84">';}})
		
		
	

     var reset = document.getElementById("reset").addEventListener("click",resetfn);
	
	

     var start = document.getElementById("start").addEventListener("click",startfn);
	
	

     var inst = document.getElementById("inst").addEventListener("click",instfn);
	
		
	
    

//FUNCTIONS 
		

   

     function resetfn() {location.reload();
}


   
   function startfn(){
		
   

       var list = document.getElementById("level");
   
       var level = list.options[list.selectedIndex].value;
	
	
   

            if(level=='h'){
	  
	               
                leveltime = 300;
	                
                 min=5;
	                
                 sec = 0;
	                
                 timer(min,sec);
                                    
               }
	

             if(level=="l")
	             
               {
	                
                 leveltime = 550;
	                 
                 min=9;
                    
                 sec = 0;
	                
                 timer(min,sec);
	                                
               }
          
	

              touchidcard();  }
	
	
	
	
	
	

              function instfn() {
		
		
                alert("Concentraion is a Match Match Game, There are 24 cards. You have to flip two cards if both were same ,they will not flippd down. Best OF Luck")
	
               }
	




//Shuffling the cards


              function rand(z) {
    
                  var j, x, i;
    
                  for (i = z.length; i; i--) {
        
                  j = Math.floor(Math.random() * i);
        
                  x = z[i - 1];
        
                  z[i - 1] = z[j];
        
                  z[j] = x;
    
                }
    
    
    

                     return z;

}


	

	







//GETTING THE TOUCH ID FROM ROWS AND COLOUMS AND GET THE ID OF A SPECIFIC CELL   



              
                function touchidcard(){
	
	
	
	
      
                  var table = document.getElementById("tableID");
    
                  if (table!=null) {
        
                     for (var i = 0; i < table.rows.length; i++) {
            
                     for (var j = 0; j < table.rows[i].cells.length; j++)
            
                     table.rows[i].cells[j].onclick = function () {
                
                        tableid(this);
            
                      };
              	
                          }
					
                              }
						
                                 }
			
			
			





			

//Fliping logic behinds here



                   function tableid(tableCell) {
       
                      var cardid = tableCell.id;
        

	
	
	
	

//this for loop store all the flipped card so that , when you next tim cliclk on that cell you got alert
	
                
     
                   for (var g =0 ; g<storeflipcard.length ;g++)
					
            
               
                   {
                
                
                      if(cardid == storeflipcard[g])
                    
                    
                        { alert("you click on a fliped card") 
                       
                       
                       
           
                           logic = false;
                       
                       
                        
                             
                            break; }

                    
                        }


      
                
                
 
if (logic!==false)
        
       {

          		var card = titanic[cardid];
            
				

                        if(cardid!=NaN && cardid>=0 && cardid<=23){
    
				
                        
                        document.getElementById(cardid).innerHTML='<img src='+card+' width="84" height="84">'
         
                     }
    
   

       if (memory<2)   
        
        
          

           { memory+=1;
            
             lastcardid = cardid;
        
             
             lastcard = card;
		     
             tries++;
    
              
           }
    
    

  else{
        
        
         if(card==lastcard && cardid!=lastcardid)
        
       {
             
             score++;
            
            
             memory=1; 
            
             storeflipcard[s++] = cardid;
            
             storeflipcard[s++] = lastcardid;
            
           
        }
       
        
        
     

  else{
       
       setTimeout(function(){
                 
       document.getElementById(cardid).innerHTML='';
                 
       document.getElementById(lastcardid).innerHTML='';
            
                  
      }, leveltime);   
       
       
         

      memory=1;
        
         }
        
    
       }
    
    
  
     }  
	
	

     logic=true;
	
	
	

        document.getElementById("tries").innerHTML =  tries;
	
        document.getElementById("score").innerHTML =  score;
    
}










//Timer , this keep recrod for the game
	


function timer(min,sec,clearInter)




{
 
   clearinter = setInterval(function(){
		
		
			
                  if (sec==0)
	
  {   document.getElementById("myTime").value=(min+":00");
		
       sec=59;
		
       min--;
	
}
		
	
		

      if(sec>=0 && sec <=9)
	
     
         {  document.getElementById("myTime").value=(min+":0"+sec);
	    
             sec--;
	 
         }




     

      if(sec>=10 && sec<=59)

    
     {
	    
        if(min===0)
		
        {min=0+"0";} 
	    
        document.getElementById("myTime").value=(min+":"+sec);
	
	   
        sec--;
	 
      }
		
		
		
	  

     if(min==0 && sec==0)
		
	
      {
	  
        clearInterval(clearinter);
		
	
        alert("You lose the Game! Time Is Over");
		
      
		
	
      }
		
		
	
	

      },200);
	
	

      }
	





