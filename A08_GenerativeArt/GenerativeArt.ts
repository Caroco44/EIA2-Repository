namespace A08_GenerativeArt {
  interface Vector {
    x: number;
    y: number;
  }

  window.addEventListener("load", handleLoad);
  let crc2: CanvasRenderingContext2D;

  function handleLoad(_event: Event): void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if (!canvas)
      return;
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

    // let horizon: number = crc2.canvas.height * golden


    drawBackground();
    drawRhombus({ x: canvas.width, y: canvas.height });
    drawCircles({ x: canvas.width, y: canvas.height });
    drawLights({ x: canvas.width, y: canvas.height });
    // drawSun({ x: 100, y: 75 });
    // drawStreet({ x: crc2.canvas.width / 2, y: horizon }, 100, 600);
    // drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
    // drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
  }

  function drawBackground(): void {
    console.log("Background");

    let gradient: CanvasGradient = crc2.createRadialGradient(
      crc2.canvas.width / 2, crc2.canvas.height / 2, // Mittelpunkt
      0, // Radius des Startkreises
      crc2.canvas.width / 2, crc2.canvas.height / 2, // Mittelpunkt
      Math.max(crc2.canvas.width, crc2.canvas.height) // Radius des Endkreises (maximaler Abstand zum Mittelpunkt)
    );
    gradient.addColorStop(0.4, "black");
    gradient.addColorStop(0.9, "blue");

    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
  }

  function drawRhombus(_position: Vector): void {
    console.log("Rhombus", _position);

    let nParticles: number = 6;

    let gradient: CanvasGradient = crc2.createLinearGradient(100, 100, 120, 150);

    gradient.addColorStop(0, "rgb(11, 203, 139)");
    gradient.addColorStop(1, "rgb(41, 148, 231)");

    crc2.fillStyle = gradient;

    crc2.save();

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
      crc2.save();
      let x: number = Math.random() * _position.x;
      let y: number = Math.random() * _position.y;
      crc2.translate(x, y);

      crc2.beginPath();
      crc2.moveTo(100, 100);
      crc2.lineTo(120, 150);
      crc2.lineTo(100, 190);
      crc2.lineTo(80, 150);
      crc2.closePath();
      crc2.fill();

      crc2.restore();
    }
    crc2.restore();
  }

  function drawCircles(_position: Vector): void {
    console.log("Circles", _position);

    let nParticles: number = 10;
    let radiusParticle: number = 40;
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
    gradient.addColorStop(0, "black");
    gradient.addColorStop(1, "blue");

    crc2.save();
    crc2.fillStyle = gradient;

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
      crc2.save();
      let x: number = Math.random() * _position.x;
      let y: number = Math.random() * _position.y;
      crc2.translate(x, y);
      crc2.fill(particle);
      crc2.restore();
    }
    crc2.restore();
  }

  function drawLights(_position: Vector): void {
    console.log("Lights", _position);

    let nParticles: number = 7;
    let radiusParticle: number = 13;
    let particle: Path2D = new Path2D();

    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);

    crc2.save();

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
      crc2.save();
      let x: number = Math.random() * _position.x;
      let y: number = Math.random() * _position.y;
      crc2.translate(x, y);

      // Generate a random number to determine the color
      let color: number = Math.random();

      // Set up the gradient based on the color
      let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
      gradient.addColorStop(0, "white");

      if (color > 0.5) {
        gradient.addColorStop(1, "yellow");
      } else {
        gradient.addColorStop(1, "rgb(185, 7, 173)"); // pink
      }

      crc2.fillStyle = gradient;
      crc2.fill(particle);
      crc2.restore();
    }
    crc2.restore();
  }






  // function drawSun(_position: Vector): void {
  //   console.log("Sun", _position);

  //   let r1: number = 30;
  //   let r2: number = 150;
  //   let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

  //   gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
  //   gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

  //   crc2.save();
  //   crc2.translate(_position.x, _position.y);
  //   crc2.fillStyle = gradient;
  //   crc2.arc(0, 0, r2, 0, 2 * Math.PI);
  //   crc2.fill();
  //   crc2.restore();
  // }

  // function drawStreet(_position: Vector, _widthBack: number, _widthFront: number): void {
  //   console.log("Street");
  //   crc2.beginPath();
  //   crc2.moveTo(_position.x + _widthBack / 2, _position.y);
  //   crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
  //   crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
  //   crc2.lineTo(_position.x - _widthBack / 2, _position.y);
  //   crc2.closePath();

  //   let gradient: CanvasGradient = crc2.createLinearGradient(0, _position.y, 0, crc2.canvas.height);
  //   gradient.addColorStop(0, "darkgrey");
  //   gradient.addColorStop(0.6, "black");

  //   crc2.fillStyle = gradient;
  //   crc2.fill();
  // }

  // function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
  //   console.log("Mountains");
  //   let stepMin: number = 50;
  //   let stepMax: number = 150;
  //   let x: number = 0;

  //   crc2.save();
  //   crc2.translate(_position.x, _position.y);

  //   crc2.beginPath();
  //   crc2.moveTo(0, 0);
  //   crc2.lineTo(0, - _max);

  //   do {
  //     x += stepMin + Math.random() * (stepMax - stepMin);
  //     let y: number = - _min - Math.random() * (_max - _min);

  //     crc2.lineTo(x, y);
  //   } while (x < crc2.canvas.width);

  //   crc2.lineTo(x, 0);
  //   crc2.closePath();

  //   let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, - _max);
  //   gradient.addColorStop(0, _colorLow);
  //   gradient.addColorStop(0.7, _colorHigh);

  //   crc2.fillStyle = gradient;
  //   crc2.fill();

  //   crc2.restore();
  // }

}