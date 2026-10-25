/**
 * Liczy, ile kartek trzeba wydrukować na warsztat.
 * @param {string} uczestnicy Liczba uczestników wpisana w pole formularza (0–16).
 * @param {string} kartkiNaOsobe Liczba kartek na osobę wpisana w pole formularza (co najmniej 1).
 * @returns {string} Komunikat do wyświetlenia na stronie.
 */
function policzKartki(uczestnicy, kartkiNaOsobe) {
  const u = Number(uczestnicy);
  const k = Number(kartkiNaOsobe);
  if (uczestnicy === '' || kartkiNaOsobe === '' || !Number.isInteger(u) || !Number.isInteger(k) || u < 0 || u > 16 || k < 1) {
    return 'Podaj od 0 do 16 uczestników i dodatnią całkowitą liczbę kartek na osobę.';
  }
  if (u === 0) {
    return 'Nie trzeba drukować kartek.';
  }
  return 'Potrzebujemy ' + (u * k) + ' kartek.';
}
