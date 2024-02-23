const rune = ['fehu', 'uruz', 'thurisaz', 'ansuz', 'raidho', 'kenaz', 'gebo', 'wunjo', 'haglaz', 'naudhiz', 'isa', 'jera', 'eihwaz', 'perthro', 'algiz', 'sowilo', 'tiwaz', 'berkano', 'ehwaz', 'mannaz', 'laguz', 'ingwaz', 'dagaz', 'othala', 'blank'];

const meaning = ['cattle', 'auroch', 'thorn', 'god', 'ride', 'torch', 'gift', 'joy', 'hail', 'need', 'ice', 'year', 'yew', 'dice-cup', 'elk-sedge', 'sun', 'creator', 'birch-tree', 'horse', 'man', 'water', 'fertility', 'day', 'home', 'blank'];

const randomRune = rune[Math.floor(Math.random() * rune.length)];

const runeIndex = rune.indexOf(randomRune);

const meaningMatchingRuneIndex = meaning[runeIndex];

console.log(`Your Rune of the Day is ${randomRune} and its meaning is ${meaningMatchingRuneIndex}!`);
