var story = alert('Let’s make a story together!');
var color = prompt('A colour (orange, indigo, etc.)');
var creature = prompt('A creature (dragon, moth, etc.)');
var adj = prompt('An adjective (beautiful, super, etc.)');
var pastTense = prompt('A past tense verb (ran, burped, etc.)');
var whichStory = prompt('Which story would you like?\na) Snacking\nb) Escaping\nc) Winning\n\nEnter the letter below:');

var writeAStoryA = function (color, creature, adj, pastTense) {
  document.write('After snacking on ' + adj + ' treats, the ' + color + ' bellied ' + creature + ' ' + pastTense + ' for hours.');
};

var writeAStoryB = function (color, creature, adj, pastTense) {
  document.write('Ameilia ' + pastTense + ' through the ' adj + ' ' + color + ' nebula escaping the space ' + creature + '.');
};

var writeAStoryC = function (color, creature, adj, pastTense) {
  document.write('Jackson chose his ' + adj + ', ' + color + creature + ' card and ' + pastTense + ' it to the table knowing he won.');
};

if (whichStory === 'a') {
  writeAStoryA(color, creature, adj, pastTense);
}

if (whichStory === 'b') {
  writeAStoryB(color, creature, adj, pastTense);
}

if (whichStory === 'c') {
  writeAStoryC(color, creature, adj, pastTense);
}
