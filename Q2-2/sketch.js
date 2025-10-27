function setup() {
  createCanvas(200, 200);
  background(220)
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i%2!=j%2){
          fill("black");
          rect(size * i,size * j,size,size)
        if(j<3){
          fill("red");
    ellipse(size*i+size*0.5,size*j+size*0.5,size*0.9); 
        }if(j>4){
          fill("black")
    ellipse(size*i+size*0.5,size*j+size*0.5,size*0.9); 
        }}
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
    }
  }
}