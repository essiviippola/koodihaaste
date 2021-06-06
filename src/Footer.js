import React from "react";

function Footer(){
    return(
        <footer className="footer page-footer">
            <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <h6 className="text-uppercase">Lisätietoa</h6>
                <p>Web-sovellus käyttää Solidabiksen kevään 2021 koodihaasteessa annettuja autojen kulutustietoja ja laskee käyttäjän antamien tietojen (matka mökille, nopeus ja vertailtava nopeus) perusteella kuinka paljon vähemmän aikaa matkassa kestää ja kuinka paljon kulutus kasvaa. Näiden päätietojen lisäksi sovellus antaa kummankin nopeuden polttoainekulutuksen, matka-ajan ja keskikulutuksen (per 100 kilometriä).</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <h6 className="text-uppercase">Yhteystiedot</h6>
                <p>Essi Viippola
                    <br/><i className="bi bi-envelope" role="img" aria-label="email"></i> essi.viippola@live.fi
                    <br/><i className="bi-github" role="img" aria-label="GitHub"></i> <a className="url" href="https://github.com/essiviippola" target="_blank">essiviippola</a>
                    <br/><br/>Sami Määttä
                    <br/><i className="bi bi-envelope" role="img" aria-label="email"></i> saomaatta@gmail.com
                    <br/><i className="bi-github" role="img" aria-label="GitHub"></i> <a className="url" href="https://github.com/samimaat" target="_blank">samimaat</a>
                    <br/>
                </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
