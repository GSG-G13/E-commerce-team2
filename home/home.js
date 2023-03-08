// Start Landing Page
let counter = 1

setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter ++

    if(counter > 5){
        counter = 1;
    }
}, 5000)

// End Landing Page