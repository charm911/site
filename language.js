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
    var elements = document.getElementsByClassName(key);
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = languageContent[lang][key];
    }
  }

  //flip la visibilité du bouton pour changer la langue
  if (lang == "fr") {
    var elements = document.getElementsByClassName("langFr");
    setElementsHidden(elements, true);
    elements = document.getElementsByClassName("langEn");
    setElementsHidden(elements, false);
  } else {
    var elements = document.getElementsByClassName("langFr");
    setElementsHidden(elements, false);
    elements = document.getElementsByClassName("langEn");
    setElementsHidden(elements, true);
  }
}

function setElementsHidden(elements, hidden) {
  for (var i = 0; i < elements.length; i++) {
    elements[i].hidden = hidden;
  }
}