const npt = document.querySelector('.npt');
let op = "";
let first = "";
document.querySelectorAll('.num').forEach((el) => {
    el.addEventListener('click', () => {
        if (npt.textContent.includes('На 0 делить нельзя')) {
                el.removeEventListener('click', () => console.log('fck'));
            } else {
            if ((npt.textContent.includes('+')) || (npt.textContent.includes('-')) || (npt.textContent.includes('*')) || (npt.textContent.includes('/'))){
                npt.innerHTML = '';
                let inner = npt.textContent + el.textContent;
                npt.innerHTML = inner;
            } else {
                if (npt.textContent.includes('На ноль делить нельзя')) {
                    el.removeEventListener('click', () => console.log('fck'));
                } else {
                let inner = npt.textContent + el.textContent;
                npt.innerHTML = inner;
                }
            }
        }
    });
});
document.querySelectorAll('.dot').forEach((el) => {
    el.addEventListener('click', () => {
        if ((npt.textContent.includes(',')) || (npt.textContent === '') || (npt.textContent.includes('На 0 делить нельзя')) || (npt.textContent.includes('+')) || (npt.textContent.includes('-')) || (npt.textContent.includes('*')) || (npt.textContent.includes('/'))){
            el.removeEventListener('click', () => console.log('fck'));
        } else {
            npt.textContent = npt.textContent + el.textContent;
        }
    });
});
document.querySelectorAll('.back').forEach((el) => {
    el.addEventListener('click', () => {
        if ((npt.textContent !== '+') && (npt.textContent !== '-') && (npt.textContent !== '*') && (npt.textContent !== '/') && (npt.textContent !== 'На 0 делить нельзя')) {
            npt.innerHTML = npt.textContent.slice(0, -1);
        }
    })
});
document.querySelectorAll('.op').forEach((el) => {
    el.addEventListener('click', () => {
        if (npt.textContent.includes('На 0 делить нельзя')) {
            el.removeEventListener('click', () => console.log('fck'));
        } else {
            if (first == '') {
            first = Number(npt.textContent.replaceAll(',', '.'));
            npt.innerHTML = el.textContent;
            op = el.textContent;
            console.log(first);
            console.log(op);
            }
        };
    });
});
document.querySelectorAll('.equally').forEach((el) => {
    el.addEventListener('click', () => {
        if ((npt.textContent !== '+') && (npt.textContent !== '-') && (npt.textContent !== '*') && (npt.textContent !== '/') && (npt.textContent !== 'На 0 делить нельзя')) {
            second = Number(npt.textContent.replaceAll(',', '.'));
            console.log(second);
            if (op === '+') {
                npt.innerHTML = first + second;
                first = '';
                second = '';
                op = '';
            }
            if (op === '-') {
                npt.innerHTML = first - second;
                first = '';
                second = '';
                op = '';
            }
            if (op === '*') {
                npt.innerHTML = first * second;
                first = '';
                second = '';
                op = '';
            }
            if (op === '/') {
                if (second !== 0) {
                    npt.innerHTML = first / second;
                    first = '';
                    second = '';
                    op = '';
                } else {
                    npt.innerHTML = 'На 0 делить нельзя'
                    first = '';
                    second = '';
                    op = '';
                }
            }
        }
        if (op === "") {
            npt.innerHTML = npt.textContent;
        }
    })
});

document.querySelectorAll('.clear').forEach((el) => {
    el.addEventListener('click', () => {
        npt.innerHTML = '';
        first = '';
    })
});