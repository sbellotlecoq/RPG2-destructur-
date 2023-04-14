import readlineSync from 'readline-sync';

import Paladin from "./paladin.js";
import Fighter from "./fighter.js";

// creation des deux joueurs
const ulder = new Paladin("Ulder");
const grace = new Fighter("Grace");

// définir une loop, 10 tours max.
for (let i = 0; i < 10; i++) {
  console.log(`tour ${i}`);

  // deux personnages = attaque chacun son tour
  let attacker;
  if (i % 2 === 1) {
    attacker = ulder;
  } else {
    attacker = grace;
  }

  // afficher les options possibles. 
  console.log(`${attacker.nom}, que voulez-vous faire?`);
  console.log(`1. Attaquer l'adversaire`);
  if (attacker instanceof Paladin) {
    console.log(`2. Utiliser Healing Lightning (coûte 40 mana)`);
  } else if (attacker instanceof Fighter) {
    console.log(`2. Utiliser dark vision (coûte 20 mana)`);
  }

  // Choose an action.
  let action = readlineSync.question('Choisissez une action en tapant 1 ou 2: ');

  // Execute the chosen action.
  if (action === "1") {
    attacker.dealDamage(attacker === ulder ? grace : ulder);
  } else if (action === "2") {
    if (attacker instanceof Paladin) {
      attacker.healingLightning(attacker === ulder ? grace : ulder);
    } else if (attacker instanceof Fighter) {
      attacker.darkVision(attacker === ulder ? grace : ulder);
    }
  } else {
    console.log("Action invalide. Vous passez votre tour.");
  }

  // Check if a character has lost.
  if (grace.state === "loser") {
    console.log(`${ulder.nom} a gagné!`);
    break;
  } else if (ulder.state === "loser") {
    console.log(`${grace.nom} a gagné!`);
    break;
  }
}

// Determine the winner based on remaining hp if neither character has lost.
if (ulder.hp > grace.hp) {
  console.log(
    `${ulder.nom} a gagné grâce à ses ${ulder.hp} points de vie restants.`
  );
} else if (grace.hp > ulder.hp) {
  console.log(
    `${grace.nom} a gagné grâce à ses ${grace.hp} points de vie restants.`
  );
} else {
  console.log("Match nul!");
}
