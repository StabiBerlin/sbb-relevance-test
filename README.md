# sbb-relevance-test

Relevanztests für die Discovery Suche im K10+. 

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

Dieses Repo Klonen, und dann denn geklonten Ordner in Powershell öffnen:

```powershell
npm i
```

### Konfiguration

Um direkt mit dem [Findex](https://github.com/gbv/findex-config) zu kommunizieren müssen die [Proxy Einstellungen](https://docs.cypress.io/guides/references/proxy-configuration) der Cypress Umgebung manuell angepasst werden. 

```powershell
$env:HTTP_PROXY = "http://proxy.spk-berlin.de:3128"
$env:HTTPS_PROXY = "HTTPS_PROXY=http://proxy-dev.spk-berlin.de:3128"
$env:NO_PROXY = "b-dev20220203-vufind-6, localhost, 127.0.0.1, 10.0.0.0/8, 172.16.200.0/24, 194.94.132.0/22, .sbb.spk-berlin.de, .staatsbibliothek-berlin.de, .dev.sbb.berlin, smb.museum, .pk.de"
```

Permanente Einrichtung des `http_proxy`:
```powershell
setx HTTP_PROXY http://proxy.spk-berlin.de:3128
```

Zugangsdaten für den `vf6_user` müssen in der  `cypress.env.json` eingetragen werden:

```json
{
    "vf6_user": {
        "vf6_name": "root",
        "vf6_pw": ""
    },
    "NO_PROXY": "b-dev20220203-vufind-6, localhost, 127.0.0.1, 10.0.0.0/8, 172.16.200.0/24, 194.94.132.0/22, .sbb.spk-berlin.de, .staatsbibliothek-berlin.de, .dev.sbb.berlin, smb.museum, .pk.de",
    "HTTP_PROXY": "http://proxy.spk-berlin.de:3128"
}
```

## Benutzung

Zum ausführen der Tests:

Entweder in der Kommandozeile:

```powershell
npx cypress run
```

Oder via Browser GUI modus:


```powershell
npx cypress open
```

Für die Reproduktion der CI Testläufe gegen den produktiven Stabikat der `simple.cs.js` spec:

```bash
CYPRESS_BASE_URL=https://stabikat.de/search/ npx cypress run --spec cypress/e2e/simple.cy.js --env grepUntagged=true   
```

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

### Yaml Prüfung

Um die yaml Dateien im `vufind/` Ordner auf Syntaxfehler zu überprüfen:

```powershell
npm run lint
```

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

### NPM Installations Probleme

Da der Proxy über `http` aufgerufen wird, muss uneter Umständen der strikte ssl modus deaktiviert werden.

```powershell
npm set strict-ssl false
```