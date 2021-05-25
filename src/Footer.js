import React from "react";

function Footer(){
    return(
        <footer class="page-footer">
            <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
                <h6 class="text-uppercase font-weight-bold">Lisätietoa</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum quam odio, quis placerat
                    ante luctus eu. Sed aliquet dolor id sapien rutrum, id vulputate quam iaculis.</p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
                <h6 class="text-uppercase font-weight-bold">Yhteystiedot</h6>
                <p>Sami Määttä
                    <br/><i class="bi bi-envelope"></i> saomaatta@gmail.com
                    <br/><i class="bi-github" role="img" aria-label="GitHub"></i> Samin GitHub
                    <br/>
                    <br/>Essi Viippola
                    <br/><i class="bi bi-envelope"></i> essi.viippola@live.fi
                    <br/><i class="bi-github" role="img" aria-label="GitHub"></i> Essin GitHub
                </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
