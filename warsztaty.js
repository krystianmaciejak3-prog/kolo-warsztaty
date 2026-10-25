const warsztaty = [
  { nazwa: 'Git', limit: 12, zapisy: 11 },
  { nazwa: 'API', limit: 10, zapisy: 9 },
  { nazwa: 'HTML', limit: 16, zapisy: 14 },
  { nazwa: 'Python', limit: 14, zapisy: 12 }
];

function wolneMiejscaLiczba(limit, zapisy) {
  return limit - zapisy;
}

function wyswietlWarsztaty() {
  const wiersze = document.getElementById('warsztaty-wiersze');
  const stopka = document.getElementById('warsztaty-razem');
  wiersze.replaceChildren();
  stopka.replaceChildren();

  let sumaLimit = 0;
  let sumaZapisy = 0;
  let sumaWolne = 0;

  for (const warsztat of warsztaty) {
    const wolne = wolneMiejscaLiczba(warsztat.limit, warsztat.zapisy);
    const wiersz = document.createElement('tr');
    const nazwa = document.createElement('td');
    nazwa.textContent = warsztat.nazwa;

    if (wolne === 1) {
      wiersz.className = 'ostatnie';
      const znacznik = document.createElement('span');
      znacznik.className = 'znacznik';
      znacznik.textContent = 'ostatnie miejsce';
      nazwa.append(' ', znacznik);
    }

    wiersz.appendChild(nazwa);
    for (const wartosc of [warsztat.limit, warsztat.zapisy, wolne]) {
      const komorka = document.createElement('td');
      komorka.textContent = wartosc;
      wiersz.appendChild(komorka);
    }
    wiersze.appendChild(wiersz);

    sumaLimit += warsztat.limit;
    sumaZapisy += warsztat.zapisy;
    sumaWolne += wolne;
  }

  const razem = document.createElement('tr');
  for (const wartosc of ['Razem', sumaLimit, sumaZapisy, sumaWolne]) {
    const komorka = document.createElement('td');
    komorka.textContent = wartosc;
    razem.appendChild(komorka);
  }
  stopka.appendChild(razem);
}

