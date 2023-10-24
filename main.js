function increment() {
  const divElement = document.getElementById("clicks");
  var clicks = parseInt(divElement.innerHTML);
  console.log("nbClicks = ", clicks);
  divElement.innerHTML = ++clicks;
}

let languageContent = {
  "en": {
    greeting: "Welcome to the site stored in the not FRC repo!",
    clickme: "Click me!"
  },
  "fr": {
    greeting: "Bienvenue sur le site depuis le repo not FRC site!",
    clickme: "Clickez moi!"
  }
}


function switchLang(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }
}