function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            func2(this);
        }
    };
    xhttp.open("GET", "https://api.carbonintensity.org.uk/xml/intensity", true);
    xhttp.send();
}

function func2(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("forecast")[0];
    var forecast = x.childNodes[0];
    var y = xmlDoc.getElementsByTagName("actual")[0];
    var actual = y.childNodes[0];
    var z = xmlDoc.getElementsByTagName("index")[0];
    var index = z.childNodes[0];
    var box2 = document.getElementById("box2");
    var box1 = document.getElementById("box1");
    var box3 = document.getElementById("box3");
    box1.innerHTML += forecast.nodeValue;
    box2.innerHTML += actual.nodeValue;
    box3.innerHTML = index.nodeValue;
    var bigbox = document.getElementById("bigbox")
    if (index.nodeValue == "low") {
        bigbox.style.backgroundColor = "green"
    }
    if (index.nodeValue == "moderate") {
        bigbox.style.backgroundColor = "orange"
    }
    if (index.nodeValue == "high") {
        bigbox.style.backgroundColor = "red"
    }
}