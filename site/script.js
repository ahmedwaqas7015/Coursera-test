// --------------------- Module-4 Assignment Solution

(function () {

var names = ["Waqas", "Ahmed", "Javed", "Adil", "Qamar", "Jameel", "Kamran", "Jaleel", "Jawad", "Bilal"];

for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();

if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();