"use strict";
var L09_Ententeich;
(function (L09_Ententeich) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let line = 0.46;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon = crc2.canvas.height * line;
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        // drawStreet({ x: crc2.canvas.width / 2, y: horizon }, 100, 600);
        drawMountains({ x: 0, y: horizon }, 75, 200, "rgb(193, 12, 139)", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "rgb(149, 20, 154)", "rgb(255, 236, 255)");
        drawTree();
        drawTreeBlossom();
        drawLake();
        drawReed();
        drawHouse();
        drawBlossom();
        drawDuck();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "purple");
        gradient.addColorStop(0.3, "rgb(215, 27, 222)");
        gradient.addColorStop(0.75, "rgb(16, 138, 110)");
        gradient.addColorStop(1, "rgb(11, 203, 139)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 50;
        let r2 = 150;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "rgba(238, 182, 188, 0.6)");
        gradient.addColorStop(1, "rgba(223, 131, 226, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "rgba(240, 227, 240, 0.5)");
        gradient.addColorStop(1, "rgba(240, 227, 240, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
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
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.9, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTree() {
        console.log("Baum malen");
    }
    function drawTreeBlossom() {
        console.log("Baumblüten malen");
    }
    function drawLake() {
        console.log("Baumblüten malen");
    }
    function drawReed() {
        console.log("Schilfrohr malen");
    }
    function drawHouse() {
        console.log("Haus malen");
    }
    function drawBlossom() {
        console.log("Blumen malen");
    }
    function drawDuck() {
        console.log("Ente malen");
        crc2.save();
        crc2.translate(100, 300);
        // Set stroke and fill styles to white
        crc2.strokeStyle = "lightblue";
        crc2.fillStyle = "lightblue";
        crc2.beginPath();
        crc2.moveTo(15, 5);
        crc2.lineTo(35, 5);
        crc2.lineTo(35, 25);
        crc2.lineTo(45, 35);
        crc2.lineTo(55, 35);
        crc2.lineTo(65, 25);
        crc2.lineTo(65, 45);
        crc2.lineTo(55, 55);
        crc2.lineTo(25, 55);
        crc2.lineTo(15, 35);
        crc2.lineTo(15, 25);
        crc2.lineTo(5, 20);
        crc2.lineTo(15, 15);
        crc2.lineTo(15, 5);
        crc2.stroke();
        crc2.fill(); // Fill the inside of the duck with white
        crc2.restore();
    }
})(L09_Ententeich || (L09_Ententeich = {}));
//# sourceMappingURL=Main.js.map