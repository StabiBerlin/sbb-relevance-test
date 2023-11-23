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

Um direkt mit dem Findex zu kommunizieren müssen die [Proxy Einstellungen](https://docs.cypress.io/guides/references/proxy-configuration) der cypress Umgebung manuel angepasst werden. 

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

### Benutzung

Zum ausführen der Tests:

```powershell
npx cypress run
```