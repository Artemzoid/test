
'use strict';

let money, time;


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

let optExp;

function chooseOptExpenses(){
    for (let i = 0; i <3; i++) {
        optExp = prompt("Введите необязательную статью расходов в этом месяце");
                if (q2ewrqeoptExp == "" || optExp == null) {
            optExp = +prompt("Введите необязательную статью расходов в этом месяце", '');
            }
            else {
                appData.optionalExpenses[i] = optExp;
            }
    }
}
chooseOptExpenses();
console.log(appData);
