"use strict";
var A08_GenerativeArt;
(function (A08_GenerativeArt) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawBackground();
        drawRhombus({ x: canvas.width, y: canvas.height });
        drawCircles({ x: canvas.width, y: canvas.height });
        drawLights({ x: canvas.width, y: canvas.height });
        drawDonut({ x: canvas.width, y: canvas.height });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createRadialGradient(crc2.canvas.width / 2, crc2.canvas.height / 2, 0, crc2.canvas.width / 2, crc2.canvas.height / 2, Math.max(crc2.canvas.width, crc2.canvas.height));
        let z = Math.floor(Math.random() * 4);
        switch (z) {
            case 0:
                gradient.addColorStop(0.8, "pink");
                break;
            case 1:
                gradient.addColorStop(0.8, "limegreen");
                break;
            case 2:
                gradient.addColorStop(0.8, "blue");
                break;
            default:
                gradient.addColorStop(0.8, "blue");
        }
        gradient.addColorStop(0.4, "black");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawRhombus(_position) {
        console.log("Rhombus", _position);
        let nParticles = 3;
        let gradient = crc2.createLinearGradient(100, 100, 120, 150);
        gradient.addColorStop(0, "rgba(11, 203, 139, 0.5)");
        gradient.addColorStop(1, "rgba(41, 148, 231, 0.5)");
        crc2.fillStyle = gradient;
        crc2.save();
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = Math.random() * _position.x;
            let y = Math.random() * _position.y;
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
    function drawCircles(_position) {
        console.log("Circles", _position);
        let nParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        let z = Math.floor(Math.random() * 4);
        gradient.addColorStop(0, "black");
        switch (z) {
            case 0:
                gradient.addColorStop(1, "pink");
                break;
            case 1:
                gradient.addColorStop(1, "limegreen");
                break;
            case 2:
                gradient.addColorStop(1, "blue");
                break;
            default:
                gradient.addColorStop(1, "red");
        }
        crc2.save();
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = Math.random() * _position.x;
            let y = Math.random() * _position.y;
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawLights(_position) {
        console.log("Lights", _position);
        let nParticles = 30;
        let radiusParticle = 13;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        crc2.save();
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = Math.random() * _position.x;
            let y = Math.random() * _position.y;
            crc2.translate(x, y);
            let color = Math.random();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            gradient.addColorStop(0, "white");
            if (color > 0.5) {
                gradient.addColorStop(1, "yellow");
            }
            else {
                gradient.addColorStop(1, "rgb(185, 7, 173)");
            }
            crc2.fillStyle = gradient;
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawDonut(_position) {
        console.log("Circles", _position);
        let nParticles = 4;
        let radiusParticle = 120;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0.3, "transparent");
        gradient.addColorStop(1, "purple");
        crc2.save();
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = Math.random() * _position.x;
            let y = Math.random() * _position.y;
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    // let strokeColor: string = "purple";
    // let fillColor: string;
    // for (let i: number = 0; i < 4; i++) {
    //   for (let z: number = 0; z < 3; z++) {
    //     let x: number = Math.random() * 200;
    //     let y: number = (i + 30) * z;
    //     switch (i) {
    //       case 0:
    //         strokeColor = "blue";
    //         break;
    //       case 1:
    //         strokeColor = "red";
    //         break;
    //       case 2:
    //         strokeColor = "yellow";
    //         break;
    //       case 3:
    //         strokeColor = "green";
    //         break;
    //     }
    //     switch (z) {
    //       case 0:
    //         fillColor = "orange";
    //         break;
    //       case 1:
    //         fillColor = "apricot";
    //         break;
    //       case 2:
    //         fillColor = "limegreen"
    //         break;
    //       default:
    //         fillColor = "pink"
    //     }
    //     drawRectangle(x, y, strokeColor, fillColor);
    //   }
    // }
    // function drawRectangle(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
    //   crc2.fillStyle = _fillColor;
    //   crc2.strokeStyle = _strokeColor;
    //   crc2.fillRect(_x, _y, 20, 40);
    //   crc2.strokeRect(_x, _y, 20, 40);
    // }
})(A08_GenerativeArt || (A08_GenerativeArt = {}));
//# sourceMappingURL=GenerativeArt.js.map