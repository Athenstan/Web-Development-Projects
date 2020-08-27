var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2"); 
var p1display = document.querySelector("#p1display"); 
var p2display= document.querySelector("#p2display");
var numinput =document.querySelector("input");
var reset = document.getElementById("reset");
var maxscoredisplay = document.getElementById("maxscore");
var p1score = 0; 
var p2score =0;
var winningscore = 5; 
var gameover = false; 





//var maxscore = document.querySelector(input);

p1.addEventListener("click", function(){

    if(!gameover){
        p1score++; 
        if(p1score === winningscore){
            p1display.classList.add("winner"); 
            gameover =true; 
            
        }
        p1display.textContent = p1score;
    
    }
  
});

p2.addEventListener("click", function(){

    if(!gameover){
     
        p2score++; 
        if(p2score === winningscore){
            p2display.classList.add("winner"); 
            gameover =true; 
            
        }
        
        p2display.textContent = p2score;
        
    }
  
});

reset.addEventListener("click", function(){
    p1score = 0;
    p2score = 0; 
    p1display.textContent =p1score;
    p2display.textContent =p2score;
    p1display.classList.remove("winner"); 
    p2display.classList.remove("winner");  
    gameover =false;
});




numinput.addEventListener("change", function(){
    maxscoredisplay.textContent = numinput.value; 
    winningscore = Number(numinput.value);
    p1score = 0;
    p2score = 0; 
    p1display.textContent =p1score;
    p2display.textContent =p2score;
    p1display.classList.remove("winner"); 
    p2display.classList.remove("winner");  
    gameover =false;

});