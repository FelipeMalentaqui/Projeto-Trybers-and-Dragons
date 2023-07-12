import { SimpleFighter } from './Fighter';

class Monsters implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._lifePoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return damage;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monsters;