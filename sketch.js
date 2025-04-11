let polygons = [];
const colors = ['#E39761', '#E3BDA8', '#CB7B71']; // 指定顏色

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#7D9AD7'); // 設定背景顏色

  // 生成 40 個隨機正多邊形
  for (let i = 0; i < 40; i++) {
    polygons.push({
      x: random(width), // 中心點 x
      y: random(height), // 中心點 y
      sides: int(random(5, 9)), // 隨機邊數 (5 到 8 邊)
      size: random(10, 15), // 初始大小
      color: random(colors), // 隨機顏色
    });
  }
}

function draw() {
  background('#7D9AD7'); // 每次重繪背景

  let sizeFactor = map(mouseY, 0, height, 40, 120); // 根據滑鼠上下移動計算大小變化

  // 繪製正多邊形
  for (let p of polygons) {
    fill(p.color);
    noStroke();
    drawPolygon(p.x, p.y, p.size * (sizeFactor / 15), p.sides); // 根據滑鼠位置調整大小
  }
}

function drawPolygon(x, y, radius, sides) {
  beginShape();
  for (let i = 0; i < TWO_PI; i += TWO_PI / sides) {
    let px = x + cos(i) * radius;
    let py = y + sin(i) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
