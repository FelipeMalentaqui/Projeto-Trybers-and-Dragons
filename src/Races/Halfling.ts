import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _quantity = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._quantity += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._quantity;
  }
}

export default Halfling;
