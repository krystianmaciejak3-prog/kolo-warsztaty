
# Poprawki projektu Koło

## 1. Testowanie niepoprawnego limitu miejsc

Zgodnie z uwagami prowadzącego rozdzielono jeden przypadek testowy na trzy niezależne testy.

### Test 1 – limit równy 0
- Dane wejściowe: 0
- Oczekiwany wynik: system odrzuca wartość i informuje, że limit musi być dodatnią liczbą całkowitą.

### Test 2 – limit ujemny
- Dane wejściowe: -5
- Oczekiwany wynik: system odrzuca wartość ujemną.

### Test 3 – limit niecałkowity
- Dane wejściowe: 2,5
- Oczekiwany wynik: system odrzuca wartość niecałkowitą.

Są to zaplanowane przypadki testowe. Ich wykonanie i wyniki wymagają osobnego potwierdzenia.
## 2. Jednoczesny zapis dwóch osób na ostatnie miejsce

### Test 4 – jednoczesna rejestracja
- Warunek początkowy: limit 12 miejsc, zapisanych 11 osób.
- Działanie: dwie osoby próbują zapisać się w tym samym czasie.
- Oczekiwany wynik: system przyjmuje tylko jedną osobę.
- Druga osoba otrzymuje komunikat: Brak wolnych miejsc.
- Kontrola danych: liczba zapisanych wynosi 12, a nie 13.

Cel testu: sprawdzenie, czy system nie przekracza limitu miejsc podczas jednoczesnych zapisów.

Status: test zaplanowany, wymaga implementacji i wykonania.
