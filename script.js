window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  }, 2000);
});
