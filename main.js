function increment() {
  const divElement = document.getElementById("clicks");
  var clicks = parseInt(divElement.innerHTML);
  console.log("nbClicks = ", clicks);
  divElement.innerHTML = ++clicks;
}

let languageContent = {
  "en": {
    greeting: "Welcome to our domain!",
    clickme: "Click me!"
  },
  "fr": {
    greeting: "Bienvenue dans notre domaine!",
    clickme: "Clickez moi!"
  }
}


function switchLang(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}