let age = document.getElementById('age'),
    weight = document.getElementById('weight'),
    height = document.getElementById('height'),
    inhale = document.getElementById('inhale'),
    exhalation = document.getElementById('exhalation'),
    bp1 = document.getElementById('bp1'),
    bp2 = document.getElementById('bp2'),
    pulseCalm = document.getElementById('pulse-calm'),
    breathingRate = document.getElementById('brathing-rate');

const takeIt = document.getElementById('takeIt');

let results = document.querySelector('.results');

let ketle = document.getElementById('ketle'),
    excurtion = document.getElementById('excurtion'),
    rufie = document.getElementById('rufie'),
    oap = document.getElementById('oap');

const hideResults = document.getElementById('hide');

takeIt.addEventListener('click', (e) => {
    e.preventDefault();
    results.classList.remove('hidden');
    ketle.textContent = (weight.value / ((height.value * height.value) / 10000)).toFixed(2);
    if (ketle.textContent === 'NaN'){
        ketle.textContent = '0';
    }
    excurtion.textContent = inhale.value - exhalation.value;
    rufie.textContent = ((4 * (pulseCalm.value + (pulseCalm.value + 22) + (pulseCalm.value + 10)) - 200) / 10000000000).toFixed(2);
    oap.textContent = (0.011 * pulseCalm.value + 0.014 * bp1.value + 0.008 * bp2.value + 0.014 * age.value + 0.009 * weight.value - 0.009 * height.value - 0.27).toFixed(2);
    if (oap.textContent < 0){
        oap.textContent = '0';
    }
});

hideResults.addEventListener('click', () => {
    results.classList.add('hidden');
});