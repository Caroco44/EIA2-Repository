namespace L09_Ententeich {
  export class Insect {
    positionX: number;
    positionY: number;
    color: string;

    constructor(_positionX: number, _positionY: number, _color: string) {
      this.positionX = _positionX;
      this.positionY = _positionY;
      this.color = _color;

      this.draw();
    }

    move() {
      const movementRange = 2;
  
      let randomX = (Math.random() - 0.5) * movementRange;
      let randomY = (Math.random() - 0.5) * movementRange;
  
      this.positionX += randomX;
      this.positionY += randomY;
  
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
  
      if (this.positionX < 0) this.positionX = 0;
      if (this.positionX > screenWidth) this.positionX = screenWidth;
      if (this.positionY < 0) this.positionY = 0;
      if (this.positionY > screenHeight) this.positionY = screenHeight;
  
      this.draw();
    }

    draw(): void {
      crc2.save();
      crc2.beginPath();
      crc2.translate(this.positionX, this.positionY);

      crc2.fillStyle = this.color;

      crc2.ellipse(35, 35, 10, 5, 0, 0, 2 * Math.PI);
      crc2.fill();

      crc2.closePath();
      crc2.restore();
    }
  }
}