const somarDoisNumeros = require('../src/calculadora');
const { expect } = require('chai');

describe('Resultado da soma de dois numeros', function () {
    it('A função deve fazer a soma de dois numeros zerados', function () {
        const resultado = somarDoisNumeros(0, 0);
        expect(resultado).to.equal(0);
    });

    it('A função deve fazer a soma de dois numeros negativos', function () {
        const resultado = somarDoisNumeros(-7, -5);
        expect(resultado).to.equal(-12);
    });
});
