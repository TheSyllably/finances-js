"use strict";

import { convertStringNumber } from "./convertStringNumber.js";

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount')

let amount = 1000;
financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
e.preventDefault()

const typeOperation = e.submitter.dataset.typeOperation;

const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));

let totalAmount = 0;

if (typeOperation === 'income') {
    amount += changeAmount;
}

if (typeOperation === 'expenses') {
    amount -= changeAmount;
}

  financeAmount.textContent = `${amount.toLocaleString()} ₽`;
});

const reportForm = document.querySelector('.finance__report');
const report = document.querySelector('.report');

const closeReport = ({ target}) => {
    if (target.closest('.report__close') || (!target.closest('.report') && target !== reportForm))

    report.classList.remove('report__open')
}

const openReport = () => {
    report.classList.add('report__open')
    console.log('gi')

    document.addEventListener('click', closeReport)
}
reportForm.addEventListener('click', openReport);


OverlayScrollbars(report, {});



