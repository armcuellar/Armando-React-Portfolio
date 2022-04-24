import React from "react";

function Footer() {
    return (
        <section>
            <div className="d-flex w-100 ">
                <ul className="mx-auto">
                    <li className="list-inline-item"><a href="mailto:Cuelarmando@yahoo.com"><img
                        src={require(`../../assets/images/mail.png`)}
                        className="img-fluid rounded d-block logo"
                        alt='LinkedIn Profile'
                        key='LinkedIn Profile'
                    /></a></li>
                    <li className="list-inline-item "><a href="https://github.com/armcuellar" target="_blank" rel="noreferrer"><img
                        src={require(`../../assets/images/GitHub-Mark-64px.png`)}
                        className="img-fluid rounded d-block logo"
                        alt='LinkedIn Profile'
                        key='LinkedIn Profile'
                    /></a></li>
                    <li className="list-inline-item "><a href="http://linkedin.com/in/armando-cuellar" target="_blank" rel="noreferrer"><img
                        src={require(`../../assets/images/In-Blue-Logo.png`)}
                        className="img-fluid rounded d-block logo"
                        alt='LinkedIn Profile'
                        key='LinkedIn Profile'
                    /></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;