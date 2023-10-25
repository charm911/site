function increment() {
  const divElement = document.getElementById("clicks");
  var clicks = parseInt(divElement.innerHTML);
  console.log("nbClicks = ", clicks);
  divElement.innerHTML = ++clicks;
}

let languageContent = {
  "en": {
    navhome: "Home",
    navinfo: "Info",
    navgifts: "Gifts",
    main_text: "Main Text",
    sub_text: "Sub text",
    gift_title: "data:gifts",
    linkbox_title: "Informations",
    linkbox_text: "Our school"
  },
  "fr": {
    navhome: "Accueil",
    navinfo: "Info",
    navgifts: "Cadeaux",
    main_text: "Texte principal",
    sub_text: "Sous-texte",
    gift_title: "data:cadeaux",
    linkbox_title: "Informations",
    linkbox_text: "Notre école"
  }
}


function switchLang(lang) {
  for (let key in languageContent[lang]) {
    document.getElementById(key).innerHTML = languageContent[lang][key];
  }

  //flip la visibilité du bouton pour changer la langue
  if (lang == "fr") {
    document.getElementById("langFr").hidden = true;
    document.getElementById("langEn").hidden = false;
  } else {
    document.getElementById("langEn").hidden = true;
    document.getElementById("langFr").hidden = false;
  }
}