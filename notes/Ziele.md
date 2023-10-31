# Ziele für das Ranking

## Aktuelle Treffer oben (absteigend chronologisch) 

Zeitraum: 10 Jahre (als Start) 

Massnahmen:
- ist entlang der Bedarfe echter Anfragen entwickelt `Matomo-Analyse`
- bezieht vorrangig die mentalen Modelle der Nutzenden ein `Kurze Befragung von Nutzenden zu Erwartungshaltungen bei der Treffermengensortierung`
- nutzt die Expertise in der Stabi `Know-How der Fachreferent*innen fließt bei Thematischen Suchen ein`

Meta-Ebene: 
- Sichtbarmachung des hinterlegten Ranking/Boosting: `Warum erscheint ein Treffer oben?,lt. Anne Christensen am 28.8. intern relevant (Anm. AK)`

## Ziele des Ranking

1.  Aktuellere Literatur wird bevorzugt (absteigend chronologisch) 
  - Zeitraum: 10 Jahre (als Start) 
2.  Bestand der Staatsbibliothek hat höhere Relevanz
  - Alle Datenkollektionen sind ausschließlich SBB-Bestand
3. Monographien haben Vorrang vor Aufsätzen (bei Suche ohne Einschränkungen)?
  - Ist im 2. Schritt entsprechend individueller Recherchebedürfnisse anpassbar
4. Gedruckte Publikationen werden als Voreinstellung bevorzugt. Sind Online-Publikationen explizit gewünscht, wird der entsprechende Filter ausgewählt.
  - Ist im 2. Schritt entsprechend individueller Recherchebedürfnisse anpassbar

### Beziehungen der Felder untereinander

6. Zeitschriftentitel vor Zeitschriftenband
7. Rezensionen runterranken,
8. Schlagwörter werden höher gerankt als (Stichwörter) / Wort in Inhaltsangabe
9. Verlagsorte runterranken (gegenüber SW),
10. Vorkommen im Inhaltsverz. Niedriger ranken als Titel
  - Fulltext-Feld niedriger ranken als Titelfeld
11. Sacherschlossene Titel boosten,`Title-Feld + BK + SW-Feld` insges. Boosten
  - Alternative: Filter `sacherschlossene Titel` einführen
12. Bei Suche im Autorenfeld:  Autorenfeld boosten (Titel und SW diskriminieren)
13. `Erscheinungsjahr` als erstes Relevanzkriterium sowie ergänzend als zweites – falls möglich – die Anzeige des Autors mit den meisten Publikationen im Index (dann als obersten Treffer). 
  - Beim Test auf Interaktion achten mit `Sacherschlossene Titel boosten`
15. Peer reviewte Titel boosten
  - Ranking nach Zitationen möglich? Nachnutzen entspr. Entwicklungen im FID Recht. Stand bei DG erfragen: AK
16. Abstand zw. den Suchtermini berücksichtigen
  - je näher desto relevant
17. Ranking je nach ausgewähltem Suchindex: Ziele evtl. verfeinern
  - sollte möglich sein, s. Workshop
18. Ranking je nach Suchsprache
  - Ist im 2. Schritt entsprechend individueller Recherchebedürfnisse anpassbar

### Fragen
- Sollten sacherschlossene Bücher eine höhere Relevanz haben?
- "Welche Datensatz-Quelle sollte bevorzugt werden? (s. thematische Suche nach ""Osmanisches Reich im Ersten Weltkrieg"", Aufsatz-Dubletten)",
  - Thema ist hier: Dedublizierung
- "Wie soll innerhalb der SOLR-Daten gewichtet werden? Welche Gewichtung sollen Daten aus dem Feld ""fulltext"" im Verhältnis zu anderen Feldern erhalten (s. Nr. 3 known item searches)?",
- Beurteilung des erreichten Ranking
  - Abgleich: sind die Ziele erreicht / ist das Ergebnis der erreichten Ziele das, was für Nutzende bedarfsgerecht ist?

### Zusammenspiel mit Facetten, z.B. Schlagwort
- Titel hat nicht Merkmal "Schlagwort": wird ggf. doppelt diskriminiert durch 1. Facette UND 2. Boosten von Schlagwörtern