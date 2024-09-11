// Create a concatenated string variable with embedded variables
let wizardName = "Merlin";
let title = "the Wise";
let spellPower = 9001;
let concatenatedString = "Wizard: " + wizardName + " " + title + ", Power Level: " + spellPower;

// Display concatenated string
document.getElementById('output').innerHTML += `<p>${concatenatedString}</p>`;

// If Conditional Statement (Wizard's Power Evaluation)
let powerEvaluation;
if (spellPower > 9000) {
    powerEvaluation = wizardName + " is a legendary wizard with unmatched power!";
} else if (spellPower >= 5000) {
    powerEvaluation = wizardName + " is a powerful wizard but not quite legendary.";
} else {
    powerEvaluation = wizardName + " still has much to learn.";
}

// Display power evaluation
document.getElementById('output').innerHTML += `<p>${powerEvaluation}</p>`;

// Switch Statement (Choosing a Spell Based on the Day)
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

// Display spell of the day
document.getElementById('output').innerHTML += `<p>Today's spell for ${wizardName}: ${spellOfTheDay}</p>`;

// String Method (Manipulate Wizard's Title)
let magicAnnouncement = "Behold, " + wizardName + " " + title + " casts a mighty spell!";
document.getElementById('output').innerHTML += `<p>${magicAnnouncement.toLowerCase()}</p>`; // Make the announcement lower case for a dramatic whisper effect

// Number Method (Adjust Wizard's Power)
let powerIncrease = 1.245;  // A magic potion increases the power level by 24.5%
let boostedPower = spellPower * powerIncrease;
document.getElementById('output').innerHTML += `<p>After drinking the magic potion, ${wizardName}'s new power level is ${boostedPower.toFixed(2)}!</p>`;
