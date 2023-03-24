import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _quantity = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._quantity += 1;
    // console.log(Warrior._quantity);
  }

  static createdArchetypeInstances(): number {
    return Warrior._quantity;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;