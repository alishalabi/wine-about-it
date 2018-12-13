<h1>Front-End</h1>

This project utilizes the "SpeechSythnesisUtterance" method of the browser API to generate a pronunciation of a grape's name.

An example of the pronounce of the html and js script are available bellow.

More information can be found via the following documentation: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance

*****

<!-- HTML Markup -->
<div class="one-grape-card">
  <div class="one-grape-image">
    <img src={{grape.image}} alt="Image">
  </div>
  <div class="one-grape-text">
    <h1 id="grape-name">{{grape.name}}</h1>
    <h2>{{grape.type}}</h2>
    <p>{{grape.description}}</p>
    <button id="speak" onclick="pronounce()">Pronounce</button>
  </div>
</div>

<!-- JS Script -->
<script>
  let grapeName = document.getElementById('grape-name').innerHTML;

  function pronounce() {
    var utterThis = new SpeechSynthesisUtterance(grapeName);
    utterThis.lang = "fr-CA";
    window.speechSynthesis.speak(utterThis);
  }
</script>


*****
