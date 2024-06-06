namespace L09_Ententeich {

export class Moveable {

  positionX: number;
  positionY: number;
  color: string;

  constructor(_positionX: number, _positionY: number, _color: string) {
    this.positionX = _positionX;
    this.positionY = _positionY;
    this.color = _color;

    this.draw();
  }

  move(): void {}


  draw(): void {}

}

}

