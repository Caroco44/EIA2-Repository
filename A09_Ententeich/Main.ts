namespace L09_Ententeich {
  export interface Vector {
    x: number;
    y: number;
  }

  window.addEventListener("load", handleLoad);
  export let crc2: CanvasRenderingContext2D;
  let line: number = 0.46;

  let ducks: Duck[] = [];
  let insects: Insect[] = [];
  let clouds: Cloud[] = [];
  let imgData: ImageData;



  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let horizon: number = crc2.canvas.height * line

    drawBackground();
    drawSun({ x: 100, y: 75 });
    // drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
    drawMountains({ x: 0, y: horizon }, 75, 200, "rgb(193, 12, 139)", "white");
    drawMountains({ x: 0, y: horizon }, 50, 150, "rgb(149, 20, 154)", "rgb(255, 236, 255)");
    drawPond();
    // drawTree();
    // drawTreeBlossom();
    // drawLake();
    // drawReed();
    // drawHouse();
    // drawBlossom();
    imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    new Duck(100, 100, "lightblue");

    ducks.push(new Duck(1000, 420, "yellow"));
    ducks.push(new Duck(1200, 320, "lightblue"));

    new Insect(100, 100, "purple");

    insects.push(new Insect(1000, 100, "purple"));
    insects.push(new Insect(700, 150, "purple"));
    insects.push(new Insect(600, 80, "purple"));
    insects.push(new Insect(500, 200, "purple"));
    insects.push(new Insect(200, 150, "purple"));

    new Cloud(10, 100, "white");

    clouds.push(new Cloud(10, 80, "white"));
    clouds.push(new Cloud(300, 100, "white"));
    clouds.push(new Cloud(600, 80, "white"));

    window.setInterval(function (): void {
      animation();
    }, 24)
  }

  function drawBackground(): void {
    console.log("Background");

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "purple");
    gradient.addColorStop(0.3, "rgb(215, 27, 222)");
    gradient.addColorStop(0.75, "rgb(16, 138, 110)");
    gradient.addColorStop(1, "rgb(11, 203, 139)");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

  }

  function drawSun(_position: Vector): void {
    console.log("Sun", _position);

    let r1: number = 50;
    let r2: number = 150;
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

    gradient.addColorStop(0, "rgba(238, 182, 188, 0.6)");
    gradient.addColorStop(1, "rgba(223, 131, 226, 0)");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;
    crc2.arc(0, 0, r2, 0, 2 * Math.PI);
    crc2.fill();
    crc2.restore();
  }


  function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
    console.log("Mountains");
    let stepMin: number = 50;
    let stepMax: number = 150;
    let x: number = 0;

    crc2.save();
    crc2.translate(_position.x, _position.y);

    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(0, - _max);

    do {
      x += stepMin + Math.random() * (stepMax - stepMin);
      let y: number = - _min - Math.random() * (_max - _min);

      crc2.lineTo(x, y);
    } while (x < crc2.canvas.width);

    crc2.lineTo(x, 0);
    crc2.closePath();

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, - _max);
    gradient.addColorStop(0, _colorLow);
    gradient.addColorStop(0.9, _colorHigh);

    crc2.fillStyle = gradient;
    crc2.fill();

    crc2.restore();
  }

  function drawPond(): void {

    let centerX = 920;
    let centerY = 430;
    let radiusX = 500;
    let radiusY = 120;

    crc2.save();
    crc2.beginPath();
    crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fillStyle = "rgb(95, 31, 192)";
    crc2.fill();
    crc2.restore();
}


  // function drawTree() {
  //   console.log("Baum malen")
  // }

  // function drawTreeBlossom() {
  //   console.log("Baumblüten malen")
  // }

  // function drawLake() {
  //   console.log("Baumblüten malen")
  // }

  // function drawReed() {
  //   console.log("Schilfrohr malen")
  // }

  // function drawHouse() {
  //   console.log("Haus malen")
  // }

  // function drawBlossom() {
  //   console.log("Blumen malen")
  // }

  function animation(): void {
    drawBackground();
    crc2.putImageData(imgData, 0, 0);

    for (let duck of ducks) {
      duck.move();
    }

    for (let insect of insects) {
      insect.move();
    }

    for (let cloud of clouds) {
      cloud.move();
    }
  }

}