import React from 'react';
import {Row} from 'react-bootstrap';
import "./Footer.css";

function Footer() {
    return (
        <div>
        <footer id="footer">
            <div class="container">
                <div class="row">

                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p></p>
                        <img class="ksulogo" src="assets/images/MB_Vert_white (3).png">
                        </img><span>
                        <img class="gtlogo" src="assets/images/gatech.png">
                        </img></span>
                        
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p class="foot">Contact Me</p>
                        <p>(770)596-7176</p>
                        <p>erika@beasleys.com</p>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p class="foot">Social Media</p>
                        <a class="socialBtnfoot" class="btn-linkedin"
                            href="https://www.linkedin.com/in/erika-b-4bb94695/" target="_blank">
                            <i class="fab fa-linkedin-in"></i></a>
                        <a class="socialBtnfoot" class="btn-instagram" href="#" target="_blank">
                            <i class="fab fa-instagram"></i></a>
                        <a class="socialBtnfoot" class="btn-github" href="https://github.com/erikabeasley" target="_blank">
                            <i class="fab fa-github"></i></a>
                    </div>

                </div>
            </div>
        </footer>
        <footer class="subFooter">
            <p>Made with <i class="far fa-heart"></i> by Erika Beasley</p>
        </footer>
        </div>



    );
}
export default Footer;