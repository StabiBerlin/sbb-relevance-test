Beispiel UB Frankfurt am Main
```yml
allfields:
  DismaxFields:
	- author
	- author_lc_word^5
	- other
	- other_lc_word^2.5
	- test_title_stemm
	- test_title_sound
	- title_lc_word^4
	- id
	- isxn
	- topic^0.6
	- topic_lc_word^0.6
	- topic_lc_word_3^0.6
	- topic_3^0.5
	- rvk_full^0.5
	- kls_3^0.5
	- kls_lc_word_3^0.5
	- misc^0.01
	- shelfmark_word_3
	- series_statement^0.01
	- retroocr
	- retroocr_lc_word
  DismaxParams:
	- [mm, 4<-1 7<80%]
	- [enableElevation, "false"]
	- [boost, if(exists(query({!v='id:HEBr*'})),0.4,1)]
	- [boost, sum(product(max(0,sum(product(abs(ms(NOW/YEAR,pub_date_max)),-5.285e-13),1)),6.5),1)]
	- [ps, 3]
	- [pf, title_lc_word^3 kls_lc_word_3]
```

Themen 
Größe der Multiplikatoren
Mehrer Varianten eines Attributes
MM
Elevation
Boost

Boost für neuere Titel:

```
sum(
   product(
      max(
         0,
         sum(
            product(
               abs(
                  ms(NOW/YEAR,pub_date_max)
                  # 1. Millisekunden zwischen jetzt
                  # und neuestem Erscheinungsjahr.
                  # (Je Älter um so größer wird die Zahl)
               ),
               # 2. Absolutwert weil Erscheinungsjahr in
               # Zukunft liegen kann.
               -5.285e-13
            ),
            # 3. ms * negativen Korrekturfaktor
            # * negativ, um aus je älter um so besser,
            # ... um so schlechter zu machen
            # * Sehr kleiner Korrekturfaktor, um im folgenden
            # mit 'normalen Zahlen arbeiten zu können.
            # * Korrekturfaktor bestimmt auch die Grenze der
            # Wirksamkeit. (Ab wann ist es egal)
            1
         )
         # Funktion um '1' nach oben verschieben.
      ),
      # 4. Bei Werten unter '0' nicht weiter abschwächen
      6.5
   ),
   # 5. Die Stärke der Auswirkung einstellen.
   1
)
# 6. Bis jetzt liefert die Funktion Werte zwischen 'n' und '0'.
# Werte kleiner 1 würden nicht verstärken sondern abschwächen.
# durch die Summe liegt der boost zwischen 'n+1' und '1'
```

see: https://solr.apache.org/guide/7_7/function-queries.html#ms-function
