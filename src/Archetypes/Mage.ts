import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _quantity = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._quantity += 1;
    // console.log(Mage._quantity);
  }

  static createdArchetypeInstances(): number {
    return Mage._quantity;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

// const mage1 = new Mage('Felipe');
// const mage2 = new Mage('Malentaqui');

// console.log(mage2);
// console.log(mage1);

export default Mage;
