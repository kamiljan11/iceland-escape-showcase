# GLOSSARY — słownik domeny (PL / EN / IS)

<!-- Nazwy w kodzie MUSZĄ pochodzić stąd. Nowy termin w diffie = nowy wiersz tutaj. -->

| Termin w kodzie (EN) | PL | IS | Znaczenie / reguła biznesowa |
|---|---|---|---|
| `Norðan Travel` | Norðan Travel (fikcyjna marka) | — | wymyślony operator wycieczek użyty jako demo dla realnych klientów Reykjawwwik z branży travel |
| `small-group` (max 8) | mała grupa | smáhópur | rdzeń pozycjonowania — przeciwieństwo wycieczek autokarowych |
| `Booking` | rezerwacja | bókun | rekord w `localStorage` (`src/lib/store.ts`): typ, data, dane kontaktowe, liczba osób, status |
| `BookingStatus` (`new`/`confirmed`/`completed`/`cancelled`) | nowa/potwierdzona/zakończona/anulowana | ný/staðfest/lokið/hætt við | cykl życia rezerwacji zarządzany w panelu `/admin` |
| `BlockedDate` | zablokowany termin | lokaður dagur | data wyłączona z rezerwacji dla danej wycieczki (`itemIndex`) |
| `tour` (Golden Circle, ice cave, northern lights) | wycieczka | ferð | pozycja katalogu w `translations.ts` (`tours.items`) |
| `Admin` | panel administracyjny | stjórnborð | `/admin` — logowanie demo (dane wpisane w kod), lista rezerwacji, blokada dat |
