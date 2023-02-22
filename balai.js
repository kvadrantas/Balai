const maxTaskai = document.getElementById('maxTaskai');
const kiekTaskuSurinkai = document.getElementById('kiekTaskuSurinkai');
const rezultatas = document.getElementById('rezultatas');
const printListDom = document.getElementById('printList');


maxTaskai.addEventListener('keyup', (evt) => {
    kiekTaskuSurinkai.max = evt.target.value
    calculate();
    printList();
    if (!maxTaskai.value || maxTaskai.value < 0) { printListDom.innerHTML = '' }
})
kiekTaskuSurinkai.addEventListener('keyup', () => {
    calculate();
})
maxTaskai.addEventListener('input', (evt) => {
    kiekTaskuSurinkai.max = evt.target.value
    calculate();
    printList();
    if (!maxTaskai.value || maxTaskai.value < 0) { printListDom.innerHTML = '' }
})
kiekTaskuSurinkai.addEventListener('input', () => {
    calculate();
})

calculate = (surinktiTaskai) => {
    if (surinktiTaskai) {
        return 10 * surinktiTaskai / Number(maxTaskai.value)
    } else {
        surinktiTaskai = Number(kiekTaskuSurinkai.value);
        const balai = 10 * surinktiTaskai / Number(maxTaskai.value);

        if (balai == 0) { rezultatas.style.background = 'white' }
        else if (balai > 0 && balai <= 4) { rezultatas.style.background = '#e53655' }
        else if (balai <= 6) { rezultatas.style.background = '#ece844' }
        else if (balai <= 8) { rezultatas.style.background = 'rgb(110 242 110)' }
        else if (balai <= 10) { rezultatas.style.background = '#3bb203' }

        if (Number(maxTaskai.value) >= Number(kiekTaskuSurinkai.value)) {
            rezultatas.innerHTML = balai.toFixed(2);
        } else {
            rezultatas.innerHTML = 0;
            rezultatas.style.background = 'white'
        }

        if (!maxTaskai.value || !kiekTaskuSurinkai.value) {
            rezultatas.innerHTML = 0;
            rezultatas.style.background = 'white'
        }
    }
}

printList = () => {
    let html = `
    <div class="table">
    <div class="row sticky">
        <div class="cell th">Taškai</div>
        <div class="cell th">Balai</div>
    </div>
    `

    for (let i = maxTaskai.value; i > 0; i--) {
        html += `
            <div class="row">
                <div class="cell">
                    ${i}
                </div>
                <div class="cell">
                    ${calculate(i).toFixed(2)}
                </div>
            </div>
        `
    }

    html += '</div>'
    printListDom.innerHTML = html;
}