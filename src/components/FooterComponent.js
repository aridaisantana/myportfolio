import React from 'react';
import { Linkedin, Github } from 'react-bootstrap-icons';

const Footer = ({language}) => {

    if(language === "en"){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">          
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-linkedin" href="https://linkedin.com/in/aridai-santana-gil-4834051b3"><Linkedin /></a>
                                <a className="btn btn-social-icon btn-github" href="https://github.com/aridaisantana/"><Github /></a>
                                <a className="btn btn-social-icon" href="mailto:aridaitecnologia@gmail.com"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2 footer">             
                        <div className="col-12 text-center">
                            <p style={{color:"#98fa94"}}>Developed and designed by Aridai Santana. ©2021.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else if(language === "es"){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">          
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-linkedin" href="https://linkedin.com/in/aridai-santana-gil-4834051b3"><Linkedin /></a>
                                <a className="btn btn-social-icon btn-github" href="https://github.com/aridaisantana/"><Github /></a>
                                <a className="btn btn-social-icon" href="mailto:aridaitecnologia@gmail.com"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-2 footer">             
                        <div className="col-12 text-center">
                            <p style={{color:"#98fa94"}}>Desarrollado y diseñado por Aridai Santana ©2021.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return(<div></div>);
    }
}

export default Footer;