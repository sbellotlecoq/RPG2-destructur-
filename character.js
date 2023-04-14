export default class Character {
    constructor(nom, hp, mana, dmg) {
      this.nom = nom;
      this.hp = hp;
      this.mana = mana;
      this.dmg = dmg;
      this.state = "playing";
    }
  
    takeDamage(dmg) {
      this.hp -= dmg;
      if (this.hp <= 0) {
        this.state = "loser";
        console.log(`${this.nom} a perdu`);
      }
    }
  

    dealDamage(victim) {
      victim.takeDamage(this.dmg);
      console.log(
        `${this.nom} inflige ${this.dmg} points de dégâts à ${victim.nom}`
      );
    }
  }