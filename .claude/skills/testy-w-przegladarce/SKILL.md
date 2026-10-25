# Koło – strona warsztatów

## Opis projektu

Strona internetowa koła naukowego Koło, przygotowana w ramach kursu „Praktyczne AI w IT”.

Projekt zawiera tabelę warsztatów, kalkulator kartek do druku oraz testy automatyczne.

## Automatyczna tabela warsztatów

Dane warsztatów znajdują się w pliku `warsztaty.js`.

Funkcja `wolneMiejscaLiczba(limit, zapisy)` oblicza liczbę dostępnych miejsc.

Tabela automatycznie wyświetla dane, sumuje limity i zapisy oraz wyróżnia warsztaty, na których pozostało ostatnie miejsce.

Początkowe dane: 52 miejsca, 46 zapisów i 6 wolnych miejsc.

## Praca z Copilotem

Podczas wcześniejszych ćwiczeń korzystałem z pomocy AI przy przygotowaniu i poprawianiu strony internetowej.

W lekcji 5 wybrałem agenta **OpenAI Codex w Visual Studio Code**.

Najpierw poprosiłem agenta o plan zmian. Po jego przeanalizowaniu zatwierdziłem wykonanie zadania.

## Co poprawiłem po pracy agenta

Po sprawdzeniu projektu i uruchomieniu skilli wprowadzono następujące poprawki:

- Oddzielono uruchamianie tabeli od definicji funkcji.
- Dodano testy sumowania i oznaczeń „ostatnie miejsce”.
- Zaktualizowano tytuł oraz nagłówek strony testowej.
- Zachowano dotychczasowy wygląd strony i działanie kalkulatora.

## Skille AI

**testy-w-przegladarce** – pomaga przygotowywać testy funkcji JavaScript uruchamiane w przeglądarce.

**recenzja-strony-kola** – sprawdza projekt według listy kontrolnej i wskazuje elementy wymagające poprawy, nie zmieniając samodzielnie plików.

Skille znajdują się w folderze `.claude/skills`.

## Testowanie

Testy można uruchomić, otwierając plik `testy.html` w przeglądarce.

**Wynik: 22 z 22 testów zaliczonych.**

## Wykorzystane technologie

HTML, CSS, JavaScript, Visual Studio Code, Codex i GitHub.

Projekt nie wymaga dodatkowych bibliotek JavaScript.
