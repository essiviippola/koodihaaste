import React from "react";

function Header() {
    return (
        <header className="jumbotron vertical-center bg-success">
            <h1>Autoilumittarisovellus</h1>
            <p>Autoilumittarin avulla voit verrata kahden eri nopeuden vaikutusta ajoneuvon kulutukseen.</p>

            <div className="car-icon-line">
                <div className="car-line"></div>
                <div className="car-icon">
                    <i className="fas fa-car-side fa-2x"></i>
                </div>
            </div>

        </header >
    );
}

export default Header;