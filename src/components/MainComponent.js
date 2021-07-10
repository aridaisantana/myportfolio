import { useState } from 'react';
import Projects from './ProjectComponent';
import Education from './EducationComponent';
import SkillSet from './SkillsetComponent';
import Footer from './FooterComponent';
import { PROJECTS } from '../shared/projects';
import { PROYECTOS } from '../shared/proyectos';
import { EDUCATION } from '../shared/education';
import { EDUCACION } from '../shared/educacion';
import { SKILLSET } from '../shared/skillset'
import Navbar from './Navbar';
import Sidebar from './SideBar';


const Main = ({language, setLanguage}) =>{

    const [projects] = useState(PROJECTS);
    const [proyectos] = useState(PROYECTOS);
    const [education] = useState(EDUCATION);
    const [educacion] = useState(EDUCACION);
    const [skillsets] = useState(SKILLSET);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} language={language} setLanguage={setLanguage}/>
            <Navbar toggle={toggle} language={language} setLanguage={setLanguage}/>
            <Projects projects={projects} proyectos={proyectos} language={language}/>
            <Education educations={education} educaciones={educacion} language={language}/>
            <SkillSet skillsets={skillsets} language={language}/>
            <Footer language={language}/>
        </div>
    );
}

export default Main;