import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _quantity = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._quantity += 1;
    // console.log(Ranger._quantity);
  }

  static createdArchetypeInstances(): number {
    return Ranger._quantity;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;