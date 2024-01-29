# sbb-relevance-test

Relevanztests für die Discovery Suche der SBB. 

See [Ziele.md](notes/Ziele.md)

## Systemanforderung

- [nodejs](https://nodejs.org/en): `18+`

Zur Überprüfung ob `node` vorhanden ist:

```powershell
node -v
```

Erwartetes Ergebnis (Beispiel):

```powershell
v18.16.0
```

## Installation

Dieses Repo klonen, und dann denn geklonten Ordner in der Kommandozeile öffnen:

```powershell
npm i
```

### Installation (SBB)

1. Für die Installation via NPM müssen die [Proxy Einstellungen](https://docs.cypress.io/guides/references/proxy-configuration) der lokalen Umgebung manuell angepasst werden. 

```powershell
$env:HTTP_PROXY = "http://proxy.spk-berlin.de:3128"
$env:HTTPS_PROXY = "HTTPS_PROXY=http://proxy.spk-berlin.de:3128"
$env:NO_PROXY = "b-dev20220203-vufind-6, localhost, 127.0.0.1, 10.0.0.0/8, 172.16.200.0/24, 194.94.132.0/22, .sbb.spk-berlin.de, .staatsbibliothek-berlin.de, .dev.sbb.berlin, smb.museum, .pk.de"
```

1.1 Strikten SSL modus deaktivieren (einmalig)

Da der Proxy über `http` aufgerufen wird, muss unter Umständen der strikte ssl modus deaktiviert werden.

```powershell
npm set strict-ssl false
```

2. 
Dieses Repo klonen, und dann die Kommandozeile in dem geklonten Ordner öffnen:

```powershell
npm i
```

## Benutzung

Zum Ausführen der Tests den geklonten Ordner in der Kommandozeile öffnen:

Ohne GUI:

```powershell
npx cypress run
```

Mit GUI:

```powershell
npx cypress open
```

Per Default laufen die Tests gegen den [Vufind6 Server](http://b-dev20220203-vufind-6/). Die `searchspecs.yml` befindet sich im Verzeichnis: `/var/www/vufind/local/config/vufind` 

Für die Reproduktion der CI Testläufe gegen den produktiven Stabikat der `simple.cs.js` spec:

```bash
CYPRESS_BASE_URL=https://stabikat.de/search/ npx cypress run --spec cypress/e2e/simple.cy.js --env grepUntagged=true   
```

Für weitere Optionen siehe [Cypress command-line](https://docs.cypress.io/guides/guides/command-line)

### Yaml Prüfung

Um die yaml Dateien im `vufind/` Ordner auf Syntaxfehler zu überprüfen:

```powershell
npm run lint
```

Dieser Test wird auf GitHub automatisch ausgeführt.

### Tagging

Zur besseren Organisation der Tests via tags:

- `@next` für Tests die in der Testinstanz `Vufind-6` laufen, aber noch nicht im produktivem Stabikat

  ```js
  // This works on Vufind6 but not on stabi
  it('CJK author search should return translations', {tags: ['@next']}, () => {
    cy.get('.record-list')
      .contains('Yan, Lianke')
    })

  // This works on both
  it('CJK author search should match latinized family name', () => {
    cy.get('.record-list')
      .contains('Yan')
    })  
  ```

Wenn die nötigen Änderungen der `searchpsec.yaml` im Stabikat live gegangen sind, müssen die entsprechenden `@next` Tags entfernt werden.

Für Tests die in beiden Instanzen (noch) nicht laufen: `.skip`

## Troubleshooting

### Cypress Browser Warning

Sollte ein eine Browser spezifische Warnung erscheinen, verhindern Windows Systemeinstellungen die automatisierte Nutzung des gewählten Browsers. 

```powershell
Cypress detected policy settings on your computer that may cause issues.

The following policies were detected that may prevent Cypress from automating Chrome:

 - HKEY_CURRENT_USER\Software\Policies\Google\Chrome\ProxySettings

For more information, see https://on.cypress.io/bad-browser-policy
```

In diese Fällen müssen Tests in `Electron` ausgeführt werden.

### Findex Availability

Die Proxy Einstellungen für die direkte Kommunikation mit dem [Findex](https://github.com/gbv/findex-config) können in einer `cypress.env.json` hinterlegt werden. 

```json
{
    "NO_PROXY": "b-dev20220203-vufind-6, localhost, 127.0.0.1, 10.0.0.0/8, 172.16.200.0/24, 194.94.132.0/22, .sbb.spk-berlin.de, .staatsbibliothek-berlin.de, .dev.sbb.berlin, smb.museum, .pk.de",
    "HTTP_PROXY": "http://proxy.spk-berlin.de:3128",
    "HTTPS_PROXY": "http://proxy.spk-berlin.de:3128"
}
```