export class Color {

  //properties
  id: number;
  color: string;


  constructor(id?: number, color?: string) {
    this.setId(id);
    this.setColor(color);
  }

  //Methods
  getId(): number {
    return this.id;
  }

  getColor(): string {
    return this.color;
  }

  setId(id: number): void {
    this.id = id;
  }


  setColor(color: string): void {
    this.color = color;
  }


}