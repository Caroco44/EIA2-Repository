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
    drawDonut({ x: canvas.width, y: canvas.height });
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

    let nParticles: number = 3;

    let gradient: CanvasGradient = crc2.createLinearGradient(100, 100, 120, 150);

    gradient.addColorStop(0, "rgba(11, 203, 139, 0.5)");
    gradient.addColorStop(1, "rgba(41, 148, 231, 0.5)");

    crc2.fillStyle = gradient;

    crc2.save();

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
      crc2.save();
      let x: number = Math.random() * _position.x;
      let y: number = Math.random() * _position.y;
      crc2.translate(x, y);

      crc2.beginPath();
      crc2.moveTo(98, 98);
      crc2.lineTo(118, 145);
      crc2.lineTo(98, 185);
      crc2.lineTo(78, 145);
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

  function drawDonut(_position: Vector): void {
    console.log("Circles", _position);

    let nParticles: number = 3;
    let radiusParticle: number = 80;
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
    gradient.addColorStop(0.3, "transparent");
    gradient.addColorStop(1, "purple");

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

}