  
$(document).ready(function () {
    let test = false;
    const apiKey = "e97e1f1a41885ee662d1b4b7c7091f25";
    let url = 'https://api.openweathermap.org/data/2.5/';
    let requestType = ""; 
    let query ="";
    //
  
    // pull current location
      $('#getWeather,#past-cities').on('click', function () {
      if (test) console.log("on click");
      // get location from user input box
      let e = $(event.target)[0];
      let location = "";
  
      if (e.id === "getWeather" || e.id === "getWeatherId") {
        if (test) console.log("getWeather");
        location = $('#city-search').val().trim().toUpperCase();
      } else if ( e.className === ("cityList") ) {
        if (test) console.log("cityList");
        location = e.innerText;
      }
  
      // should make this generic to use this on the area clicked
      // let location = $(this).val().trim().toUpperCase();
      if (test) { console.log('location:' + location); }
      if (location == "") return;
  
      updateCityStore(location);
      getCurWeather(location);
      getForecastWeather(location);
     });
  
    function convertDate(epoch) {
      // function to convert unix epoch to local time
      // returns arr ["MM/DD/YYYY, HH:MM:SS AM", "MM/DD/YYYY", "HH:MM:SS AM"]
      if (test) { console.log(`convertData - epoch: ${epoch}`); }
      let readable = [];
      let myDate = new Date(epoch * 1000);
  
      // local time
      // returns string "MM/DD/YYYY, HH:MM:SS AM"
      readable[0] = (myDate.toLocaleString());
      readable[1] = ((myDate.toLocaleString().split(", "))[0]);
      readable[2] = ((myDate.toLocaleString().split(", "))[1]);
  
      if (test) { console.log(` readable[0]: ${readable[0]}`); }
      return readable;
    }
});