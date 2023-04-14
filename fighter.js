import Character from "./character.js";

export default class Fighter extends Character {
    constructor(nom) {
        super(nom, 12, 40, 4);
      }
    
      // Dark Vision --> si 20 mana attaque si < 20 non (RAJOUT DE LA VICTIME EN PARAM)
      darkVision(victim) {
        if (this.mana < 20) {
          console.log("pas de mana, mec");
        } else {
          this.mana -= 20;
          victim.takeDamage(this.dmg);
          console.log(
            `${this.nom} inflige ${this.dmg} points de dégâts à ${victim.nom}`
          );
        }
      }
    }
    