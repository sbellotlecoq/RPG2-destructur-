import Character from "./character.js";

export default class Paladin extends Character {
    constructor(nom) {
      super(nom, 16, 160, 3);
    }
  
    // Healing Lightning --> si 40 mana attaque si < 40 non (RAJOUT DE LA VICTIME EN PARAM)
    healingLightning(victim) {
      if (this.mana < 40) {
        console.log("pas de mana, mec");
      } else {
        this.mana -= 40;
        victim.takeDamage(this.dmg);
        console.log(
          `${this.nom} inflige ${this.dmg} points de dégâts à ${victim.nom}`
        );
      }
    }
  }