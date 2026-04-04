
## Plan: Strona + symulacja Bokun

### Etap 1: Baza danych (Lovable Cloud)
- Tabela `tours` — wycieczki (nazwa, opis, cena, czas trwania, max osób, zdjęcie)
- Tabela `vehicles` — auta do wypożyczenia (nazwa, model, cena/dzień, cechy, zdjęcie)
- Tabela `bookings` — rezerwacje (typ: tour/car, daty, dane klienta, status, liczba osób)
- Tabela `blocked_dates` — zablokowane terminy (np. auto w naprawie)
- RLS policies + admin role

### Etap 2: Formularz rezerwacji na stronie
- Modal/drawer po kliknięciu "Zarezerwuj" na karcie wycieczki lub auta
- Wybór daty (kalendarz z dostępnością)
- Formularz: imię, email, telefon, liczba osób, uwagi
- Potwierdzenie rezerwacji (ekran sukcesu)

### Etap 3: Panel admina
- Logowanie admina (email + hasło)
- Dashboard z listą rezerwacji (filtrowanie po statusie, dacie)
- Zarządzanie wycieczkami i autami (CRUD)
- Zmiana statusu rezerwacji (nowa → potwierdzona → zakończona / anulowana)

### Etap 4: Dane demo
- Seed danych — 3 wycieczki + 3 auta (te same co teraz na stronie)
- Kilka przykładowych rezerwacji

### Czego NIE robimy:
- Płatności online (brak Stripe)
- Emailing (brak powiadomień)
- GPS/tracking
