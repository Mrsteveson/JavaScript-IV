/* 
Prototype Refactor

1. Copy and paste your code or the solution from yesterday
2. Your goal is to refactor all of this code to use ES6 Classes. 
The console.log() statements should still return what is expected of them.
*/

// Parent Function Original.

// function GameObject(params) {
//     this.createdAt = params.createdAt;
//     this.name = params.name;
//     this.dimensions = params.dimensions;
// }

// GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
// }

// Parent Function Refactored.

class GameObject {
    constructor(params) {
        this.createdAt = params.createdAt;
        this.name = params.name;
        this.dimensions = params.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}


// Child Function Original.

// CharacterStats.prototype = Object.create(GameObject.prototype)

// function CharacterStats(charParams) {
//     GameObject.call(this,charParams); 
//     this.healthPoints = charParams.healthPoints;
// }

// CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`
// }

// Child Function Refactored.

class CharacterStats extends GameObject {
    constructor(charParams) {
        super(charParams)
        this.healthPoints = charParams.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`
    }
}


// GrandChild Function Original.

// Humanoid.prototype = Object.create(CharacterStats.prototype)

// function Humanoid (humanParams) {
//     CharacterStats.call(this, humanParams);
//     this.team = humanParams.team;
//     this.weapons = humanParams.weapons;
//     this.language = humanParams.language;
// }

// Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
// }


// GrandChild Function Refactored.

class Humanoid extends CharacterStats {
    constructor(humanParams) {
        super(humanParams)
        this.team = humanParams.team;
        this.weapons = humanParams.weapons;
        this.language = humanParams.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}


// Hero GreatGrandChild Function Original.

// function Hero(heroParams) {
//     Humanoid.call(this, heroParams);
//     this.damage = heroParams.damage;
//     }
// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.attack = function(villain) {
//     villain.healthPoints = villain.healthPoints - hero.damage;
//     return `${this.name} attacked Count Chocula for ${this.damage}, Count Chocula winces.`
// }

// Hero GreatGrandChild Function Refactored.

class Hero extends Humanoid {
    constructor(heroParams) {
        super(heroParams)
        this.damage = heroParams.damage;
    }

    attack() {
        return `${this.name} attacked Count Chocula for ${this.damage}, Count Chocula winces.`
    }
}


// Villain GreatGrandChild Function Original.

// function Villain(villainParams) {
//     Humanoid.call(this, villainParams);
//     this.damage = villainParams.damage;
// }

// Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.attack = function(villain) {
//     hero.healthPoints = hero.healthPoints - villain.damage;
//     return `${this.name} attacked for Katelyn ${this.damage}.`
// }

// Villain GreatGrandChild Function Refactored.

class Villain extends Humanoid {
    constructor(villainParams) {
        super(villainParams)
        this.damage = villainParams.damage;
    }

    attack() {
        return `${this.name} attacked for Katelyn ${this.damage}.`
    }
}


/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/


const mage = new Humanoid({
createdAt: new Date(),
dimensions: {
    length: 2,
    width: 1,
    height: 1,
},
healthPoints: 5,
name: 'Bruce',
team: 'Mage Guild',
weapons: [
    'Staff of Shamalama',
],
language: 'Common Tongue',
});

const swordsman = new Humanoid({
createdAt: new Date(),
dimensions: {
    length: 2,
    width: 2,
    height: 2,
},
healthPoints: 15,
name: 'Sir Mustachio',
team: 'The Round Table',
weapons: [
    'Giant Sword',
    'Shield',
],
language: 'Common Tongue',
});

const archer = new Humanoid({
createdAt: new Date(),
dimensions: {
    length: 1,
    width: 2,
    height: 4,
},
healthPoints: 10,
name: 'Lilith',
team: 'Forest Kingdom',
weapons: [
    'Bow',
    'Dagger',
],
language: 'Elvish',
});

const hero = new Hero({
createdAt: new Date(),
dimensions: {
    length: 1,
    width: 2,
    height: 4,
},
healthPoints: 150,
name: 'Katelyn',
team: 'Celestial Isle',
weapons: [
    "Sword of a Thousand Truths",
    "Thunderfury, Blessed Blade of the Windseeker",
    "Celestial Spirit: Ifrit",
],
language: 'Common Tongue',
damage: 10,
});

const villain = new Villain({
createdAt: new Date(),
dimensions: {
    length: 1,
    width: 2,
    height: 4,
},
healthPoints: 100,
name: "Count Chocula",
team: "Dark Kingdom",
weapons: [
    "Enki, Sword of The End",
    "Legendary Spear, Gáe Bolg",
],
language: 'Sylvanian',
damage: 10,
});

// Test you work by un-commenting these 3 objects and the list of console logs below:
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Hero and Villain meet.
console.log(hero.name);
console.log(hero.greet());
console.log(villain.name);
console.log(villain.greet());

// Trying to get Katelyn to beat up Count Chocula.
console.log(hero.attack(villain));
console.log(hero.attack(villain));
console.log(hero.attack(villain));
console.log(hero.attack(villain));
console.log(hero.attack(villain));
