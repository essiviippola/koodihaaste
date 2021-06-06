# Autoilumittarisovellus

# Johdanto
Autoilumittarisovellus on vastaus Solidabiksen kevään 2021 koodihaasteeseen. Koodihaasteen vaatimukset löydät koodihaasteen osoitteesta https://koodihaaste.solidabis.com/.

Tehtävänä oli suunnitella ja toteuttaa web-sovellus, jonka avulla käyttäjä voisi vertailla kahden eri nopeuden vaikutusta autonsa polttoainekulutukseen mökkimatkallaan. Autovaihtoehtoja on kolme ja jokaisella on oma polttoainekulutuksensa, johon vaikuttaa nopeus, jolla matkustetaan.

## Kuvaus
Web-sovellus käyttää koodihaasteessa annettuja autojen kulutustietoja ja laskee käyttäjän antamien tietojen (matka mökille, nopeus ja vertailtava nopeus) perusteella kuinka paljon vähemmän aikaa matkassa kestää ja kuinka paljon kulutus kasvaa. Näiden päätietojen lisäksi sovellus antaa kummankin nopeuden polttoainekulutuksen, matka-ajan ja keskikulutuksen (per 100 kilometriä).

## Käytetyt teknologiat
- HTML
- CSS
- React
- JavaScript

Kehitetty Windows 10 -käyttöjärjestelmällä.

## Käyttö
### Vaatimukset
Reactin käyttöä varten tarvitaan Node.js tai npm, joten lataa se [Node.js lataussivulta (englanniksi, 500 mb)](https://www.npmjs.com/get-npm).

### Web-sovelluksen käynnistäminen
1. Lataa repositorio ja pura se haluamaasi kansioon.
2. Avaa komentorivi ja siirry kansioon, johon purit tiedoston.
3. Aja `npm install`.
4. Asennuksen valmistuttua, aja `npm start`.
5. Web-sovelluksen pitäisi aueta selainikkunassa.