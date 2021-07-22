function suggest(name) {
  var ourRequest = new XMLHttpRequest();
  if (name.length != 0) {
    ourRequest.open("GET", "ajax.php?name=" + name, true);
    ourRequest.onload = function () {
      if (ourRequest.status >= 200) {
        var ourData = JSON.parse(ourRequest.responseText);
        var suggestion = document.getElementById("suggest");
        var htmlText = "";
        for (i = 0; i < ourData.length; i++) {
          htmlText =
            htmlText +
            "<button onclick='action(this.value)' " +
            " value='" +
            ourData[i] +
            "'>" +
            ourData[i] +
            "</button><br>";
        }
        suggestion.innerHTML = htmlText;
      }
    };
    ourRequest.send();
  }
}
function action(name) {
  var ourRequest = new XMLHttpRequest();
  console.log(name);
  ourRequest.open("GET", "ajax.php?ip=" + name, true);
  ourRequest.onreadystatechange = function () {
    if (ourRequest.readyState == 4 && ourRequest.status >= 200) {
      var ourData = JSON.parse(ourRequest.responseText);
      var details = document.getElementById("details");
      var htmltext = "<p>" + ourData + "</p>";
      details.innerHTML = createHTML(ourData);
    }
  };
  ourRequest.send();
}
function createHTML(ourData) {
  var rawTemplate = document.getElementById("nameTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  console.log(compiledTemplate);
  var testData = [{ name: "Sam", address: "f", class: 1 }];
  console.log(testData);
  return compiledTemplate(ourData);
}
