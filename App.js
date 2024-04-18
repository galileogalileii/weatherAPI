
const inputValue = document.querySelector(".inputValue");
const button = document.querySelector(".button");
const name = document.querySelector(".name");//city name
const temp = document.querySelector(".temp");//temperature 
const desc = document.querySelector(".desc");//description
const city = document.querySelector(".city");//city name
const country = document.querySelector(".country");//country name



button.addEventListener(`click`, function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=921c7356f7f7e2b4c6192186a8d34c80`)
        .then(function (response) {
            return response.json();
        })
        .then(displayData) //displayData fonksiyonunu çağırdık ve data'yı parametre olarak gönderdik.
    // console.log(data);
    //console.log(data.main.temp);
    //temp = console.log(data.main.temp);//main objesinin içindeki temp'i aldık.
    //desc = console.log(data.weather[0].description);//weather arrayinin 0. indexindeki description'ı aldık.

})

displayData = function (data) {
    temp.innerText = ` ${data.main.temp}°C`;
    desc.innerText = ` ${data.weather[0].description}`;

    city.innerText = ` ${data.name}`;
    country.innerText = ` ${data.sys.country}`;

}

// const weather = function getShowPage() {

//     temp.innerText = ` ${getShowPage.main.temp}°C`;
//     desc.innerText = ` ${getShowPage.weather[0].description}`;
// }