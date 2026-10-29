# Lista bezpieczeństwa przed publikacją

## Sekrety
- Klucze API, tokeny, hasła wpisane w kod, konfigurację albo logi.
- Plik .env w repozytorium. Brak .gitignore dla .env i logów.
- Sekret, który kiedyś był w repozytorium, trzeba unieważnić (rotacja), samo usunięcie z pliku nie wystarcza.

## Dane osobowe
- Imiona i nazwiska, e-maile, telefony, numery PESEL, adresy w plikach danych i logach.
- Czy te dane są potrzebne? Jeśli nie: usuń albo zanonimizuj.

## Odpowiedzi modelu w aplikacji (OWASP LLM05: Improper Output Handling)
- Odpowiedź modelu wstawiana przez innerHTML, eval albo do zapytań bez sprawdzenia.

## Treści niezaufane (OWASP LLM01: Prompt Injection)
- Pliki z treścią od użytkowników (opinie, e-maile, strony WWW), które agent czyta. Szukaj zdań skierowanych do AI.

## Uprawnienia agenta (OWASP LLM06: Excessive Agency)
- Czy agent, który czyta niezaufane treści, może też zmieniać pliki albo wysyłać dane na zewnątrz?
