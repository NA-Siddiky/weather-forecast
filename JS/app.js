const API_KEY = `48e4a7bd866f1f754f5f9acdc2959b9d`


const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = temperature => {
    console.log(temperature)
}