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
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createRadialGradient(crc2.canvas.width / 2, crc2.canvas.height / 2, // Mittelpunkt
        0, // Radius des Startkreises
        crc2.canvas.width / 2, crc2.canvas.height / 2, // Mittelpunkt
        Math.max(crc2.canvas.width, crc2.canvas.height) // Radius des Endkreises (maximaler Abstand zum Mittelpunkt)
        );
        gradient.addColorStop(0.4, "black");
        gradient.addColorStop(0.9, "blue");
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
        let nParticles = 10;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "blue");
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
        let nParticles = 7;
        let radiusParticle = 13;
        let particle = new Path2D();
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        crc2.save();
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = Math.random() * _position.x;
            let y = Math.random() * _position.y;
            crc2.translate(x, y);
            // Generate a random number to determine the color
            let color = Math.random();
            // Set up the gradient based on the color
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            gradient.addColorStop(0, "white");
            if (color > 0.5) {
                gradient.addColorStop(1, "yellow");
            }
            else {
                gradient.addColorStop(1, "rgb(185, 7, 173)"); // pink
            }
            crc2.fillStyle = gradient;
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawDonut(_position) {
        console.log("Circles", _position);
        let nParticles = 3;
        let radiusParticle = 80;
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
})(A08_GenerativeArt || (A08_GenerativeArt = {}));
//# sourceMappingURL=GenerativeArt.js.map