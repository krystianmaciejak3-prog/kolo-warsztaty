---
name: testy-w-przegladarce
description: Pisanie testów funkcji JavaScript jako strony testy.html otwieranej w przeglądarce, bez instalowania bibliotek. Użyj, gdy ktoś prosi o testy, przypadki testowe albo sprawdzenie funkcji w projekcie bez Node.js.
---

# Testy w przeglądarce

## Kroki

1. Znajdź funkcję do przetestowania i jej wymagania (komentarz dokumentacyjny, opis w README albo prośba użytkownika).
2. Jeśli w projekcie nie ma testy.html, utwórz go na podstawie [szablon-testow.html](szablon-testow.html): podmień NAZWA_FUNKCJI i plik.js.
3. Dopisz testy przez istniejącą funkcję sprawdz(opis, otrzymane, oczekiwane).
4. Uwzględnij przypadki brzegowe: zero, granica limitu, wartość tuż za granicą, ułamek, puste pole.
5. Na końcu napisz, ile testów dodałeś i jak je uruchomić (otwórz testy.html w przeglądarce).

## Zasady

- Oczekiwany wynik bierz z wymagań, nie z tego, co zwraca obecny kod.
- Nie zmieniaj testowanej funkcji. Jeśli test nie przechodzi, opisz rozbieżność.
