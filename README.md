# Koodihaaste

## Linkki koodihaasteeseen
https://koodihaaste.solidabis.com/#/

## Tehtävänanto
Kesälomat lähestyvät ja monien katseet kääntyvät kohti kesämökkejä. Osalla nämä löytyvät lähempää, osalla taas matkustukseen kuluu pitkiäkin aikoja. Monesti tien päällä ollessa tuntuu siltä, että jos hieman vielä kiihdyttäisi, olisi perillä merkittävästi nopeammin… vai olisiko sittenkään? Ovatko voitetut minuutit kasvaneiden matkakustannusten arvoisia? Entä kuinka paljon matkustusajoneuvon tyyppi vaikuttaa tähän?

Tehtävänäsi on toteuttaa autoilumittari-sovellus. Sovelluksen tulee pystyä suorittamaan vertailu matka-ajan ja polttoaineen kulutuksen välillä kahden eri valitun nopeuden mukaan: käyttäjä ilmoittaa saman matkustettavan etäisyyden samalla kulkuneuvotyypillä eri nopeuksilla ja sovellus laskee miten paljon nopeammin käyttäjä on perillä ja kuinka paljon enemmän polttoainetta tähän kuluu. Etäisyyden sekä kulkuneuvotyypin tulee siis olla molemmissa samat. Sovelluksen tulee pystyä näyttämään web-käyttöliittymässä molemmista annetuista matkanopeuksista käytetty aika ja polttoaine, sekä näiden kahden ero.

Sovelluksessa tulee pystyä tarkastelemaan kolmen erilaisen auton tuloksia. Autojen bensankulutus kasvaa 1.009 kulmakertoimella. Eli jos auton nopeus kasvaa 1km/h, niin bensankulutus kasvaa 1.009 kertaiseksi. Eri autojen bensakulutus 1km/h nopeudella on seuraava:<br>
Auto A: 3l / 100km<br>
Auto B: 3.5l / 100km<br>
Auto C: 4l / 100km<br>

Toteutuksessa käytettävät teknologiat ovat vapaasti päätettävissäsi. Tehtävässä ei välttämättä ole tarpeen tehdä erillistä backend-toteutusta, mutta voit sen halutessasi tehdä. Tehtävässä ei saa käyttää mitään kolmannen osapuolen palvelua tai kirjastoa, mikä toteuttaa vaaditut vertailutoimenpiteet.

Katso vielä lisätiedot tehtävän arviointikriteereistä sekä tarkempi ohje siitä, mitä palautuksessa tulee huomioida.

Onnea koodihaasteeseen ja mukavaa (kesä)koodailua!

## Suunnitelma
Essi ottaa haltuun javascriptiä.

Sami ottaa haltuun HTML ja CSS.

### Apuja
- Chrome DevTools
- Nettiin: AWS, Heroku tai Samin sivu (Wordpress)
- Google fonts: Josefin sans, Playfair display, Roboto, Helvetica (isona)
- Javascript best practices:
  - Älä käytä var, vaan let tai const;
  - Funktioiden nimet alkaa pienellä ja käytetään camelCase;
  - Käytä mieluummin null;
  - Käytetään ===, eikä ==.
