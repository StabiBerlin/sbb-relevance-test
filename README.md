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

Caveat: Sollte ein eine Browser spezifische Warnung erscheinen verhindern Windows Systemeinstellungen die automatisierte Nutzung des gewählten Browsers. 


```powershell
Cypress detected policy settings on your computer that may cause issues.

The following policies were detected that may prevent Cypress from automating Chrome:

 - HKEY_CURRENT_USER\Software\Policies\Google\Chrome\ProxySettings

For more information, see https://on.cypress.io/bad-browser-policy
```

In diese Fällen müssen Tests in `Electron` ausgeführt werden.