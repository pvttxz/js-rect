function setup() {
    createCanvas(500, 500);
    background("violet");
  }
    
  function draw() {
   
     stroke("blue")
      fill("purple")  
     
    //console. log(mouseIsPressed)
    
     if(mouseIsPressed){
       
        rect(mouseX, mouseY, 50, 50);
    
     }
    
  }