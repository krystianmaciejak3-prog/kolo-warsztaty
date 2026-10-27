
const test = require('node:test');
const assert = require('node:assert/strict');
const { policzKartki } = require('./kalkulator.js');

test('8 uczestników, 2 kartki', () => {
  assert.equal(policzKartki('8', '2'), 'Potrzebujemy 16 kartek.');
});

test('0 uczestników', () => {
  assert.equal(policzKartki('0', '2'), 'Nie trzeba drukować kartek.');
});

test('16 uczestników', () => {
  assert.equal(policzKartki('16', '2'), 'Potrzebujemy 32 kartek.');
});

test('Spacje zamiast liczby kartek', () => {
  assert.match(policzKartki('8', '   '), /dodatnią/);
});

test('17 uczestników - błąd', () => {
  assert.match(policzKartki('17', '2'), /0 do 16/);
});

test('Ułamkowa liczba uczestników', () => {

  assert.match(policzKartki('2.5', '2'), /0 do 16/);
});

test('Puste pole uczestników', () => {
  assert.match(policzKartki('', '2'), /0 do 16/);

});

test('0 kartek na osobę', () => {
  assert.match(policzKartki('8', '0'), /dodatnią/);
});

test('Spacje zamiast liczby uczestników', () => {
  assert.match(policzKartki('   ', '2'), /0 do 16/);
});

