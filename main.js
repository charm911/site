function increment() {
  const divElement = document.getElementById("clicks");

  var clicks = parseInt(divElement.innerHTML);

  console.log("nbClicks = ", clicks);

  divElement.innerHTML = ++clicks;

}