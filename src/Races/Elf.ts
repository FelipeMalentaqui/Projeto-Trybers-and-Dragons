import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _quantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._quantity += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._quantity;
  }
}

export default Elf;
