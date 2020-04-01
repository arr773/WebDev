var button = document.getElementsByTagName("button");
isPurple = true;
button[0].addEventListener("click", function() {
  if (isPurple) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "purple";
  }
  isPurple = !isPurple;
});
