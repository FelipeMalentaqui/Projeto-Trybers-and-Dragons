import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _quantity = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._quantity += 1;
    // console.log(Necromancer._quantity);
  }

  static createdArchetypeInstances(): number {
    return Necromancer._quantity;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
