

function $$(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
    else {
        return 'undefined'
    }
}


var button = $$('myButton');

function addNumbers() {

    var fnum = parseInt($$('firstNumber').value);
    var snum = parseInt($$('secondNumber').value);

    if (isNaN(fnum) === false && isNaN(snum) === false) {
        $$('output').innerHTML = fnum + snum;
        showDivs('scorewrapper');
        return false;
    }

    else if (isNaN(fnum) === true && isNaN(snum) === false) {
        showBackground('firstNumber');
        showDivs('firstNumberTip');
        return false;
    }

    else if (isNaN(snum) === true && isNaN(fnum) === false) {
        showBackground('secondNumber');
        showDivs('secondNumberTip');
        return false;
    }

    else {
        showBackground('firstNumber');
        showBackground('secondNumber');
        showDivs('firstNumberTip');
        showDivs('secondNumberTip');
        return false;
    }
}

function showDivs(arg) {
    $$(arg).style.visibility = 'visible';
}

function hideDivs(arg) {
    $$(arg).style.visibility = 'hidden';
}

function showBackground(arg) {
    $('#' + arg).css('background-color', '#f7bebe');
}


$(document).ready(function () {

    $('#firstNumber').focus(function () {
        $('#firstNumber').css('background-color', '#fff');
        hideDivs('firstNumberTip');
        hideDivs('scorewrapper');
    });

    $('#secondNumber').focus(function () {
        $('#secondNumber').css('background-color', '#fff');
        hideDivs('secondNumberTip');
        hideDivs('scorewrapper');
    });

    button.onclick = function () {
        addNumbers();
        $('#dragpara').hide().fadeIn(2000);
        return false;

    };

});