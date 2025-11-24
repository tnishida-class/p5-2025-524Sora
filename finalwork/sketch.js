const cycle = 60; // 1周期のフレーム数（定数）
let count = 0;
let vx = 0;
let o = 0;
const Omikuji = ["大吉", "吉", "中吉", "小吉", "凶", "大凶"];

function setup(){
  createCanvas(windowWidth, windowHeight); // キャンバスの大きさをウィンドウの大きさと同じにする
}

function windowResized(){ // ウィンドウがリサイズされるたびに呼び出される関数
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}

// 市松模様の設定
function drawChecker(){
  const w = width / 16 //画面を16+16の256個にわけた市松模様
  for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
      if(i%2!=j%2){
        fill(0, 128, 0) //緑
      }else{
        fill(0)
      }
      rect(w*i, w*j, w, w);
   }
 }
}
function draw(){
  background(255); // 背景を白に設定
  noStroke(); // 枠線を描かない
  drawChecker(); // 市松模様の表示
  
  // おみくじの揺れの設定
  if(mouseIsPressed){
    count = (count + 3) % cycle;
    if (count < cycle / 2) {
      vx = cycle - count;
    }
    else {
      vx = count;
    }
  }

  // おみくじの設定
  stroke(0);
  fill(231, 195, 134)
  beginShape(); // 点つなぎを始める
  vertex(width / 2 - 50 + vx, height / 2 -200);
  vertex(width / 2 - 100 + vx, height / 2 - 160);
  vertex(width / 2 - 100 + vx, height / 2 + 150);
  vertex(width / 2 - 50 + vx, height / 2 + 190);
  vertex(width / 2 + 50 + vx, height / 2 + 190);
  vertex(width / 2 + 100 + vx, height / 2 + 150);
  vertex(width / 2 + 100 + vx, height / 2 - 160);
  vertex(width / 2 + 50 + vx, height / 2 - 200);
  endShape(CLOSE); // 点つなぎを終わる
  
  beginShape();
  vertex(width / 2 - 100 + vx, height / 2 - 160);
  vertex(width / 2 - 50 + vx, height / 2 - 120);
  vertex(width / 2 + 50 + vx, height / 2 - 120);
  vertex(width / 2 + 100 + vx, height / 2 - 160);
  vertex(width / 2 + 50 + vx, height / 2 - 200);
  vertex(width / 2 - 50 + vx, height / 2 -200);
  endShape(CLOSE); // 点つなぎを終わる
  
  beginShape();
  vertex(width / 2 - 50 + vx, height / 2 - 120);
  vertex(width / 2 - 50 + vx, height / 2 + 190);
  vertex(width / 2 + 50 + vx, height / 2 + 190);
  vertex(width / 2 + 50 + vx, height / 2 - 120);
  endShape(CLOSE); // 点つなぎを終わる
  
  fill(0);
  textSize(60);
  textAlign(CENTER, CENTER); // 文字の基準位置を中央に設定
  text("お\nみ\nく\nじ", width / 2 + vx, height / 2 + 30);

  fill(255);
  if(mouseIsPressed){
    o = (o + 1) % Omikuji.length;
  }
  textSize(48);
  text(Omikuji[o], width / 2, height / 2 + 250);
}