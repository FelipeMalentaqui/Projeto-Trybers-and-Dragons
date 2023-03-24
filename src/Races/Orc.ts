import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _quantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._quantity += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._quantity;
  }
}

export default Orc;
