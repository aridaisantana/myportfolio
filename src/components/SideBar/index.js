import React from 'react';
import {SidebarContainer,SidebarMenu, Icon, CloseIcon, SidebarLink, SidebarWrapper} from './SidebarElements';
import ContactMe from '../Navbar/ContactMe';
import {Button} from 'reactstrap';
import {Download } from 'react-bootstrap-icons';


const Sidebar = ({isOpen, toggle, language, setLanguage}) => {

    const handleClick = (e, lang) => {
        e.preventDefault();
        setLanguage(lang);
    }

    if(language === "en"){

        const downloadLink = "https://drive.google.com/uc?export=download" + "&" + "id=1ThDgf3eOCGTbCjLKqsSam8M7dmsbLWMh";

        return(
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="portfolio" onClick={toggle}
                        smooth={true} 
                        duration={700} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                            Portfolio
                        </SidebarLink>
                        <SidebarLink to="education" onClick={toggle}
                        smooth={true} 
                        duration={700} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                            Education
                        </SidebarLink>
                        <SidebarLink to="skillset" onClick={toggle}
                        smooth={true} 
                        duration={700} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                            Skill Set
                        </SidebarLink>
                        <SidebarLink><img onClick={(e) => handleClick(e, "es")} src="/myportfolio/assets/images/espana.png" alt="Español" width="50px" height="50px"/><img className="ml-2" onClick={(e) => handleClick(e, "en")} src="/myportfolio/assets/images/inglaterra.png" alt="English" width="50px" height="50px"/></SidebarLink>
                        <SidebarLink><ContactMe language={language}/></SidebarLink>
                        <SidebarLink>
                            <Button className="mt-4 ml-2" style={{color: '#98fa94'}} outline>
                                <a style={{textDecoration: 'none'}} href={downloadLink} download><Download /> Curriculum</a>
                            </Button>
                        </SidebarLink>
                        <p style={{color:'#01bf71', marginTop:'30px'}}>Aridai Santana. ©2021</p>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        );
    }else if(language === "es"){

        const downloadLink = "https://drive.google.com/uc?export=download" + "&" + "id=1kpSsX1ID2Moz47aoc7pvFtaMoGs4EGlN";

        return(
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="portfolio" onClick={toggle}
                        smooth={true} 
                        duration={700} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                            Portafolio
                        </SidebarLink>
                        <SidebarLink to="education" onClick={toggle}
                        smooth={true} 
                        duration={700} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                            Educación
                        </SidebarLink>
                        <SidebarLink to="skillset" onClick={toggle}
                        smooth={true} 
                        duration={700} 
                        spy={true} 
                        exact='true' 
                        offset={-80}>
                            Habilidades
                        </SidebarLink>
                        <SidebarLink><img onClick={(e) => handleClick(e, "es")} src="/myportfolio/assets/images/espana.png" alt="Español" width="50px" height="50px"/><img className="ml-2" onClick={(e) => handleClick(e, "en")} src="/myportfolio/assets/images/inglaterra.png" alt="English" width="50px" height="50px"/></SidebarLink>
                        
                        <SidebarLink><ContactMe language={language}/></SidebarLink>
                        <SidebarLink>
                            <Button className="mt-4 ml-2" style={{color: '#98fa94'}} outline>
                                <a style={{textDecoration: 'none'}} href={downloadLink} download><Download /> Curriculum</a>
                            </Button>
                        </SidebarLink>
                        <p style={{color:'#01bf71', marginTop:'30px'}}>Aridai Santana. ©2021</p>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        );
    }else{
        return(<div></div>);
    }
}

export default Sidebar;