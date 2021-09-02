

// need div with id = output 
function display(element, data, id) {
    let someEl = document.createElement(element);
    let text = document.createTextNode(data);
    someEl.appendChild(text);
    document.getElementById(id).appendChild(someEl);
}


function get_data(city) {
    document.getElementById("icon").setAttribute("width", 60);
    document.getElementById("icon").setAttribute("height", 60);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + #KEY, true);
    xhr.send();
    xhr.onload = function () {
        let Text_data = xhr.responseText;
        let data = JSON.parse(Text_data);
        if (xhr.status == 200) {
            let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            let temp = data.main.temp;
            let weather = data.weather[0].main;
            document.getElementById("temp").innerHTML = temp + "°C";
            if(weather === "Clear")
            {
                weather = "נעים וחמים";
                document.getElementById("icon").setAttribute("src", "https://www.pinclipart.com/picdir/middle/115-1155947_sun-logo-clip-art-at-clker-transparent-background.png");
            }
            if(weather === "Clouds")
            {
                weather = "מעונן";
                document.getElementById("icon").setAttribute("src", icon);
            }
            if(weather === "Rain")
            {
                weather = "גשום";
                document.getElementById("icon").setAttribute("src", icon);
            }

            document.getElementById("weather").innerHTML = weather;

        }


    }
}
