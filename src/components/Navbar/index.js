import {useState, useEffect} from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, MobileContact} from './NavbarElements';
import {Button} from 'reactstrap';
import {List, Download } from 'react-bootstrap-icons';
import {Jumbotron} from 'reactstrap';
import { animateScroll as scroll } from 'react-scroll';
import ContactMe from './ContactMe';

const  Navbar = ({ toggle, language, setLanguage}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    const handleClick = (e, lang) => {
        e.preventDefault();
        setLanguage(lang);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
 
    if(language === "es"){

        const downloadLink = "https://drive.google.com/uc?export=download" + "&" + "id=1kpSsX1ID2Moz47aoc7pvFtaMoGs4EGlN";

        return(
            <>
                <Nav id="nav" scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo id="navLogo" to="home" onClick={toggleHome}>portafolio</NavLogo>
                        <MobileContact>
                            <ContactMe />
                        </MobileContact>
                        <MobileIcon onClick={toggle}>
                            <List />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="portfolio"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Portafolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="education"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-80}>Educación</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skillset"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-200}>Habilidades</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks> <img onClick={(e) => handleClick(e, "es")} src="/myportfolio/assets/images/espana.png" alt="Español" width="50px" height="50px"/> </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks> <img onClick={(e) => handleClick(e, "en")} src="/myportfolio/assets/images/inglaterra.png" alt="English" width="50px" height="50px"/> </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <ContactMe language={language}/>
                            <Button className="mt-4 ml-2" style={{color: '#98fa94'}} outline>
                                <a style={{textDecoration: 'none'}} href={downloadLink} download><Download /> Curriculum</a>
                            </Button>
                        </NavBtn>
                        

                    </NavbarContainer>
                </Nav>
                <Jumbotron className="mb-0">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 id="uno">Bienvenido a mi portafolio.</h1> 
                                <p id="dos" style={{color: '#98fa94'}}>Aquí encontrarás parte de mi trabajo como desarrollador web.</p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }else if(language === "en"){

        const downloadLink = "https://drive.google.com/uc?export=download" + "&" + "id=1ThDgf3eOCGTbCjLKqsSam8M7dmsbLWMh";

        return(
            <>
                <Nav id="nav" scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo id="navLogo" to="home" onClick={toggleHome}>portfolio</NavLogo>
                        <MobileContact>
                            <ContactMe />
                        </MobileContact>
                        <MobileIcon onClick={toggle}>
                            <List />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="portfolio"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                >Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="education"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-80}>Education</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skillset"
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-200}>Skill Set</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks> <img onClick={(e) => handleClick(e, "es")} src="/myportfolio/assets/images/espana.png" alt="Español" width="50px" height="50px"/> </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks> <img onClick={(e) => handleClick(e, "en")} src="/myportfolio/assets/images/inglaterra.png" alt="English" width="50px" height="50px"/> </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <ContactMe language={language}/>
                            <Button className="mt-4 ml-2" style={{color: '#98fa94'}} outline>
                                <a style={{textDecoration: 'none'}} href={downloadLink} download><Download /> Curriculum</a>
                            </Button>
                        </NavBtn>


                    </NavbarContainer>
                </Nav>
                <Jumbotron className="mb-0">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 id="uno">Welcome to my portfolio.</h1> 
                                <p id="dos" style={{color: '#98fa94'}}>Here you will find part of my work as Front-End developer.</p>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }else{
        return(
            <div></div>
        )
    }
    
}
 
export default Navbar ;