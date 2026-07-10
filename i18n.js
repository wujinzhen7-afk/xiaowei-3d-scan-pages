(function () {
  var preferZh = (navigator.language || navigator.userLanguage || "en")
    .toLowerCase()
    .indexOf("zh") === 0;
  document.documentElement.lang = preferZh ? "zh-Hans" : "en";
  var nodes = document.querySelectorAll("[data-zh][data-en]");
  for (var i = 0; i < nodes.length; i++) {
    var el = nodes[i];
    var text = preferZh ? el.getAttribute("data-zh") : el.getAttribute("data-en");
    if (text != null) el.textContent = text;
  }
})();
