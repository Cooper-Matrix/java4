// 1. Create a concatenated string variable with embedded variables
let wizardName = "Merlin";
let title = "the Wise";
let spellPower = 9001;
let concatenatedString = "Wizard: " + wizardName + " " + title + ", Power Level: " + spellPower;
console.log(concatenatedString);

// 2. If Conditional Statement (Wizard's Power Evaluation)
if (spellPower > 9000) {
    console.log(wizardName + " is a legendary wizard with unmatched power!");
} else if (spellPower >= 5000) {
    console.log(wizardName + " is a powerful wizard but not quite legendary.");
} else {
    console.log(wizardName + " still has much to learn.");
}

// 3. Switch Statement (Choosing a Spell Based on the Day)
let dayOfWeek = 5;
let spellOfTheDay;

switch (dayOfWeek) {
    case 1:
        spellOfTheDay = "Fireball";
        break;
    case 2:
        spellOfTheDay = "Ice Storm";
        break;
    case 3:
        spellOfTheDay = "Lightning Bolt";
        break;
    case 4:
        spellOfTheDay = "Invisibility";
        break;
    case 5:
        spellOfTheDay = "Healing Aura";
        break;
    default:
        spellOfTheDay = "Restoration Ritual";
}

console.log("Today's spell for " + wizardName + ": " + spellOfTheDay);

// 4. String Method (Manipulate Wizard's Title)
let magicAnnouncement = "Behold, " + wizardName + " " + title + " casts a mighty spell!";
console.log(magicAnnouncement.toLowerCase()); // Make the announcement lower case for a dramatic whisper effect

// 5. Number Method (Adjust Wizard's Power)
let powerIncrease = 1.245;  // A magic potion increases the power level by 24.5%
let boostedPower = spellPower * powerIncrease;
console.log("After drinking the magic potion, " + wizardName + "'s new power level is " + boostedPower.toFixed(2) + "!");
