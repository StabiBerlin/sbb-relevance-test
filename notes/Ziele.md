# Ziele des Ranking

1. Aktuellere Literatur wird bevorzugt (absteigend chronologisch) 
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
2. ~~Bestand der Staatsbibliothek hat höhere Relevanz~~
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [x] NO-FIX
3. ~~Monographien haben Vorrang vor Aufsätzen (bei Suche ohne Einschränkungen)?~~
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [x] NO-FIX
4. ~~Gedruckte Publikationen werden als Voreinstellung bevorzugt. Sind Online-Publikationen explizit gewünscht, wird der entsprechende Filter ausgewählt.~~
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [x] Nutzer konfigurierbar
    - [x] NO-FIX
5. Zeitschriftentitel vor Zeitschriftenband
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
6. Rezensionen runterranken,
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
7. Schlagwörter werden höher gerankt als (Stichwörter) / Wort in Inhaltsangabe
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
8. Verlagsorte runterranken (gegenüber SW),
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
9.  Vorkommen im Inhaltsverz. Niedriger ranken als Titel
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
10. Sacherschlossene Titel boosten,`Title-Feld + BK + SW-Feld` insges. Boosten
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE  
11. Bei Suche im Autorenfeld:  Autorenfeld boosten (Titel und SW diskriminieren)
    - [ ] Query 
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
12. Autor mit den meisten Publikationen im Index boosten (dann als obersten Treffer). 
    - [ ] Query
    - [ ] Index
    - [x] Ranking
    - [ ] Nutzer konfigurierbar
    - [ ] DONE
13. Peer reviewte Titel boosten
    - [ ] Query
    - [ ] Index 
    - [x] Ranking 
    - [ ] Nutzer konfigurierbar
    - [ ] DONE


## TBD

- Sollten sacherschlossene Bücher eine höhere Relevanz haben?
- "Welche Datensatz-Quelle sollte bevorzugt werden? (s. thematische Suche nach ""Osmanisches Reich im Ersten Weltkrieg"", Aufsatz-Dubletten)",
  - Thema ist hier: Dedublizierung
- "Wie soll innerhalb der SOLR-Daten gewichtet werden? Welche Gewichtung sollen Daten aus dem Feld ""fulltext"" im Verhältnis zu anderen Feldern erhalten (s. Nr. 3 known item searches)?",
- Beurteilung des erreichten Ranking
  - Abgleich: sind die Ziele erreicht / ist das Ergebnis der erreichten Ziele das, was für Nutzende bedarfsgerecht ist?
- Abstand zw. den Suchtermini berücksichtigen
  - je näher desto relevant
- Ranking je nach ausgewähltem Suchindex: Ziele evtl. verfeinern
  - sollte möglich sein, s. Workshop
- Ranking je nach Suchsprache
  - Ist im 2. Schritt entsprechend individueller Recherchebedürfnisse anpassbar

### Zusammenspiel mit Facetten, z.B. Schlagwort

- Titel hat nicht Merkmal "Schlagwort": wird ggf. doppelt diskriminiert durch 1. Facette UND 2. Boosten von Schlagwörtern