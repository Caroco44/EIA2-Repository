"use strict";
var L09_Ententeich;
(function (L09_Ententeich) {
    class Cloud {
        positionX;
        positionY;
        color;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;
            this.draw();
        }
        move() {
            //this.positionX += 2
            this.positionX = this.positionX + 0.5;
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            if (this.positionX < 0)
                this.positionX = 0;
            if (this.positionX > screenWidth)
                this.positionX = screenWidth;
            if (this.positionY < 0)
                this.positionY = 0;
            if (this.positionY > screenHeight)
                this.positionY = screenHeight;
            this.draw();
        }
        draw() {
            L09_Ententeich.crc2.save();
            L09_Ententeich.crc2.translate(this.positionX, this.positionY);
            L09_Ententeich.crc2.beginPath();
            L09_Ententeich.crc2.moveTo(75, 0);
            L09_Ententeich.crc2.lineTo(0, 0);
            L09_Ententeich.crc2.ellipse(10, 0, 40, 35, 0, Math.PI, 0, false);
            L09_Ententeich.crc2.ellipse(40, 0, 45, 50, 0, Math.PI, 0, false);
            L09_Ententeich.crc2.ellipse(100, 0, 40, 35, 0, Math.PI, 0, false);
            L09_Ententeich.crc2.closePath();
            L09_Ententeich.crc2.fillStyle = this.color;
            L09_Ententeich.crc2.fill();
            L09_Ententeich.crc2.restore();
        }
    }
    L09_Ententeich.Cloud = Cloud;
})(L09_Ententeich || (L09_Ententeich = {}));
// function drawCloud(_position: Vector, _size: Vector): void {
//   console.log("Cloud", _position, _size);
//# sourceMappingURL=Cloud.js.map