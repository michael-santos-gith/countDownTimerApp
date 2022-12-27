let days = document.querySelector('#days');
let hours = document.querySelector('#hour');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let dateDayMonthYear = document.querySelector('#dateDayMonthYear');
let optionalTime = document.querySelector('#optionalTime');
let buttonStart = document.querySelector('#buttonStart');
let eventName = document.querySelector('#event-name');
let displayNameEvent = document.querySelector('h4');

function clearInputs() {
  dateDayMonthYear.value = '';
  optionalTime.value= '';
  diferenceTime = '';
  eventName.value = '';
  displayNameEvent.innerHTML = '';
}

addEventListener("load", () => {

  clearInputs();

  buttonStart.addEventListener('click', () => {

    let optionalDate = new Date(`${dateDayMonthYear.value.slice(0, 4)}-${dateDayMonthYear.value.slice(5, 7)}-${dateDayMonthYear.value.slice(8, 10)} ${optionalTime.value.slice(0, 2)}:${optionalTime.value.slice(3, 5)}`);
  
    if (!eventName.value || !dateDayMonthYear.value || optionalDate == "Invalid Date") {
      alert("Preencha os campos para lançar o evento!");
    } else {
      let intervalTime = setInterval(function() {
        let actualTime = new Date().getTime();
    
        let diferenceTime = optionalDate - actualTime;
        
        if (diferenceTime < 0) {
          clearInterval(intervalTime);
          alert("Por favor coloque um dia ou uma hora maiores!!!");
          clearInputs();
        } else {
          let actualDay = Math.floor(diferenceTime / (1000 * 60 * 60 * 24));
          let actualHour = Math.floor((diferenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let actualMinute = Math.floor((diferenceTime % (1000 * 60 * 60)) / (1000 * 60));
          let actualSecond = Math.floor((diferenceTime % (1000 * 60)) / 1000);
          
          days.innerHTML = actualDay;
          hours.innerHTML = actualHour;
          minutes.innerHTML = actualMinute;
          seconds.innerHTML = actualSecond;
    
          if (actualDay === 0 && actualHour === 0 && actualMinute === 0 && actualSecond === 0) {
            alert(`O EVENTO ${eventName.value} CHEGOU AO FIM!!!`)
            clearInterval(intervalTime);
            clearInputs();
          }
        }
      
      }, 1000);
    }
    displayNameEvent.innerHTML = `${eventName.value.toUpperCase()}`;
  });
});