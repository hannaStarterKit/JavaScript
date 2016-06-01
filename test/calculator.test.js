/*
 * Unit tests for js/main.js
 */

describe('calculator', function() {
    'use strict'
    //inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture"><input id="firstNumber" type="number">' +
            '<input id="secondNumber" type="number">' +
            '<input id="+" type="button" value="+">' + '<span id="alertNotNumber">' +
            'Result: <span id="result" /></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });



    it('should return 3 for 1 + 2 version 1', function() {
        document.getElementById('firstNumber').value = 1;
        document.getElementById('secondNumber').value = 2;
        calculator.add();
        expect(document.getElementById('result').innerHTML).toBe('3');
    });

    it('should return -1 for 1 - 2 version 1', function() {
        document.getElementById('firstNumber').value = 1;
        document.getElementById('secondNumber').value = 2;
        calculator.subtraction();
        expect(document.getElementById('result').innerHTML).toBe('-1');
    });

    it('should return 2 for 1 * 2 version 1', function() {
        document.getElementById('firstNumber').value = 1;
        document.getElementById('secondNumber').value = 2;
        calculator.multiplication();
        expect(document.getElementById('result').innerHTML).toBe('2');
    });

    it('should return 0.5 for 1 / 2 version 1', function() {
        document.getElementById('firstNumber').value = 1;
        document.getElementById('secondNumber').value = 2;
        calculator.division();
        expect(document.getElementById('result').innerHTML).toBe('0.5');
    });

    it('should return 6 for 3! version 1', function() {
        document.getElementById('firstNumber').value = 3;
        calculator.factorial1();
        expect(document.getElementById('result').innerHTML).toBe('6');
    });

    it('should return 24 for 4! version 1', function() {
        document.getElementById('secondNumber').value = 4;
        calculator.factorial2();
        expect(document.getElementById('result').innerHTML).toBe('24');
    });

    it('should return nothing for 1eee + 2 version 1', function() {
        document.getElementById('firstNumber').value = '1eeee';
        document.getElementById('secondNumber').value = 2;
        calculator.add();
        expect(document.getElementById('result').innerHTML).toBe('');
    });

    it('should return nothing for 1eeee3ed - 2 version 1', function() {
        document.getElementById('firstNumber').value = '1eeee3ed';
        document.getElementById('secondNumber').value = 2;
        calculator.subtraction();
        expect(document.getElementById('result').innerHTML).toBe('');
    });

    it('should return nothing for 1 * 1eerrffee version 1', function() {
        document.getElementById('firstNumber').value = 1;
        document.getElementById('secondNumber').value = '1eerrffee';
        calculator.multiplication();
        expect(document.getElementById('result').innerHTML).toBe('');
    });

    it('should return nothing for 1 / 1eeeejk version 1', function() {
        document.getElementById('firstNumber').value = 1;
        document.getElementById('secondNumber').value = '1eeeejk';
        calculator.division();
        expect(document.getElementById('result').innerHTML).toBe('');
    });

    it('should return nothing for 1edddeeejk version 1', function() {
        document.getElementById('firstNumber').value = '1edddeeejk';
        calculator.factorial1();
        expect(document.getElementById('result').innerHTML).toBe('');
    });

    it('should return nothing for nothing version 1', function() {
        calculator.factorial2();
        expect(document.getElementById('result').innerHTML).toBe('');
    });

});