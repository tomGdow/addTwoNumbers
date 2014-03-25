var mymodule = (function () {
//Private

//Public
    return {

        showDivs: function (arg) {
        document.getElementById(arg).style.visibility = 'visible';
        },

        hideDivs: function (arg) {
        document.getElementById(arg).style.visibility = 'hidden';
    },

        showBackground: function (arg) {
        $('#' + arg).css('background-color', '#f7bebe');
    },


    $$: function (id) {
        'use strict';
        if (typeof id != 'undefined') {
            return document.getElementById(id);
        }
        else {
            return 'undefined'
        }
        },
        addNumbers:  function () {

        var fnum = parseInt(this.$$('firstNumber').value);
        var snum = parseInt(this.$$('secondNumber').value);

        if (isNaN(fnum) === false && isNaN(snum) === false) {
            this.$$('output').innerHTML = fnum + snum;
            this.showDivs('scorewrapper');
            return false;
        }

        else if (isNaN(fnum) === true && isNaN(snum) === false) {
            this.showBackground('firstNumber');
            this.showDivs('firstNumberTip');
            return false;
        }

        else if (isNaN(snum) === true && isNaN(fnum) === false) {
            this.showBackground('secondNumber');
            this.showDivs('secondNumberTip');
            return false;
        }

        else {
            this.showBackground('firstNumber');
            this.showBackground('secondNumber');
            this.showDivs('firstNumberTip');
            this.showDivs('secondNumberTip');
            return false;
        }
    }
    }
})();

//jQuery
$(document).ready(function () {

    $('#firstNumber').focus(function () {
        $('#firstNumber').css('background-color', '#fff');
        mymodule.hideDivs('firstNumberTip');
        mymodule.hideDivs('scorewrapper');
    });

    $('#secondNumber').focus(function () {
        $('#secondNumber').css('background-color', '#fff');
        mymodule.hideDivs('secondNumberTip');
        mymodule.hideDivs('scorewrapper');
    });
});


//AddEventListener
mymodule.$$('myButton').addEventListener("click",function () {
    mymodule.addNumbers();
    $('#dragpara').hide().fadeIn(2000);
    return false;
}, false);