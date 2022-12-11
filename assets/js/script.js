'use strict'
const inputTakeNum = document.querySelector('input');
const buttonReady = document.querySelector('button');

//функция для рассчета суммы
function getMassiveSum() {
    const inputStr = inputTakeNum.value;
    const massive = inputStr.split(','); 
    //сортировка массива на пустые элементы 
    const sortMassive = massive.filter(function (item) {
        return item
    });
    //сортировка по возрастанию
    const sortSmallToBig = sortMassive.sort(function (a,b) {
        return a-b
    })
    // вывод отсортированных чисел в див
    document.getElementById('div_filtered').innerHTML = sortSmallToBig;
    //функция для подсчета чисел в массиве
    function returnSum(items) {
        let sum = 0;
        for (let i = 0; i < items.length; i++){
            sum += +items[i];
        }
        return sum;
    }
    const resultSum = returnSum(sortMassive);
    document.getElementById('div_result').innerHTML = resultSum;
    inputTakeNum.value = '';
}
buttonReady.addEventListener('click', getMassiveSum);
