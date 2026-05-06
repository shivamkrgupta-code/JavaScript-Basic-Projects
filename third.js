//taking reference of clock

const clock = document.getElementById('clock');

setInterval(function(){// setInterval is a method that executes a function repeatedly after a certain interval of time. The first argument is the function to be executed and the second argument is the interval in milliseconds.
        let date = new Date()
        console.log(date.toLocaleTimeString());
        clock.innerHTML=date.toLocaleTimeString();

},1000);
