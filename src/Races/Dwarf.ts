import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _quantity = 0;
  
  constructor(nome: string, dexterity: number) {
    super(nome, dexterity);
    this._maxLifePoints = 80;
    Dwarf._quantity += 1;
    // console.log(Dwarf._quantity);
  }
  
  static createdRacesInstances(): number {
    return Dwarf._quantity;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  // set maxLifePoints(value: number) {
  //   this._maxLifePoints = value;
  // }
}

// const dwarf1 = new Dwarf('Felipe', 80);
// const dwarf2 = new Dwarf('Felipeeeee', 5580);

// console.log(dwarf1.);
console.log(Dwarf.createdRacesInstances());

// console.log(dwarf2.dexterity);
// console.log(dwarf2.maxLifePoints);

export default Dwarf;
