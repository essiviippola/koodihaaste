import React from "react";

function Footer(){
    return(
        <footer className="page-footer">
            <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <h6 className="text-uppercase">Lisätietoa</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat
                    ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <h6 className="text-uppercase">Yhteystiedot</h6>
                <p>Sami Määttä
                    <br/><i className="bi bi-envelope" role="img" aria-label="email"></i> saomaatta@gmail.com
                    <br/><i className="bi-github" role="img" aria-label="GitHub"></i> Samin GitHub
                    <br/>
                    <br/>Essi Viippola
                    <br/><i className="bi bi-envelope" role="img" aria-label="email"></i> essi.viippola@live.fi
                    <br/><i className="bi-github" role="img" aria-label="GitHub"></i> Essin GitHub
                </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
