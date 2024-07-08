function unfade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

function animateNumbers(target) {
    const targetValue = parseInt(target.textContent);
    let currentValue = 0;
    var timeDelay = 0;

    // Set the main interval to update the currentValue
    const interval = setInterval(() => {
        if (currentValue >= targetValue) {
            clearInterval(interval);
        } else {
            currentValue++;
            target.textContent = currentValue;
        }
        // Condition to slow the counter anumation
        if (currentValue >= targetValue - 5) {
            clearInterval(interval);
            setTimeout(() => {
                const slowInterval = setInterval(() => {
                    if (currentValue >= targetValue) {
                        clearInterval(slowInterval);
                    } else {
                        currentValue++;
                        target.textContent = currentValue;
                    }
                }, 100); // The slow interval updates the currentValue every x milliseconds
            }, timeDelay); // Wait for x milliseconds before starting the slow interval
        }
    }, 1000 / targetValue); // The main interval for every element
}

function isElementVisible(className, action) {
    const elements = document.querySelectorAll(className);
    console.log(elements)
    
    elements.forEach(element => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                console.log("Element is now visible on the screen");
                observer.disconnect();
                setTimeout(() => {
                    action(element);
                }, 250);
                }
            });
        });
    observer.observe(element);
    });
}

window.onload = function () {
    isElementVisible('.fader', unfade)
    isElementVisible('.run-counter', animateNumbers)
}