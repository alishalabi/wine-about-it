let grapeName = document.getElementById('grape-name').innerHTML;

function pronounce() {
  var utterThis = new SpeechSynthesisUtterance(grapeName);
  utterThis.lang = "fr-CA";
  window.speechSynthesis.speak(utterThis);
}
