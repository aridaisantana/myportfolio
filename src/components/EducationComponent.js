import { useState } from 'react';
import { Card, CardImg, Modal, ModalHeader, ModalBody  } from 'reactstrap';
import { InfoCircle } from 'react-bootstrap-icons';
import gsap from 'gsap';

const Education = (props) => {

    const [educationState, setEducationState] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const educations = props.educations;
    const educaciones = props.educaciones;

    const handleFocus = () => {
        
        setTimeout(()=>{
            const tl = gsap.timeline();
            tl.to(".circle", {duration: 1, rotation:360});
        }, 1000)
    }

    const handleCardMouseOver = (e) => {
        if (e.target.id){
            var element = document.querySelector("#" + e.target.id.toString());
            const timeline = gsap.timeline();
            timeline.to(element, {scale:1.10});
        }
    }

    const handleCardMouseLeave = (e) => {
        if (e.target.id){
            var element = document.querySelector("#" + e.target.id.toString());
            const timeline = gsap.timeline();
            timeline.to(element, {scale:1});
        }
    }

    const renderEducation = (education) =>{
        if(education != null){ 
             return(
                 <Modal size="lg" isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
                     <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)} cssModule={{'modal-title': 'w-100 text-center'}}>
                         {education.title}    
                     </ModalHeader>
                     <ModalBody>
                         <div className="cointainer">
                             <div className="row justify-content-center col-xs-12">
                                 <img className="img-fluid" src={education.image} alt={education.title} width="400" height="350"/>
                             </div>
                             <div className="row justify-content-center mt-5">
                                 <a href={education.link}> <InfoCircle onFocus={handleFocus()} className="circle" size={54}/></a>
                             </div>
                             <div className="row m-5">
                                 {education.description}
                             </div>
                         </div>
                     </ModalBody>
                 </Modal>
             );
        }else{
            return(
                <div></div>
            );
        }
    }

    if(props.language === "en"){
        return(
            <div id="education" className="education">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h3 className="text-center">EDUCATION</h3>
                                <hr id="hr"/>
                            </div>
                        </div>
                        <div className="row">
                            {educations.map( (education) => {
                                return(
                                    <div className="col-sm-4 col-xs-12 image-container mb-4 mt-2">
                                        <Card key={education.id} onClick={() => {
                                            setEducationState(education);
                                            setIsModalOpen(!isModalOpen);}} 
                                            onMouseOver={(e) => handleCardMouseOver(e)}
                                            onMouseLeave={(e) => handleCardMouseLeave(e)}
                                            onTouchStart={(e) => handleCardMouseOver(e)}
                                            onTouchEnd={(e) => handleCardMouseLeave(e)}>
                                            <CardImg id={"card" + education.id.toString()}  width="100%" object src={education.image} alt={education.title} />
                                        </Card>
                                     </div>
                                );
                            })}
                        </div>
                        <div className="row">
                          <div  className="col-12 col-md-5 m-1">
                            {renderEducation(educationState)}
                          </div>
                        </div>
                </div>
            </div>
        );
    }else if(props.language === "es"){
        return(
            <div id="education" className="education">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h3 className="text-center">EDUCACIÓN</h3>
                                <hr id="hr"/>
                            </div>
                        </div>
                        <div className="row">
                            {educaciones.map( (education) => {
                                return(
                                    <div className="col-sm-4 col-xs-12 image-container mb-4 mt-2">
                                        <Card key={education.id} onClick={() => {
                                            setEducationState(education);
                                            setIsModalOpen(!isModalOpen);}} 
                                            onMouseOver={(e) => handleCardMouseOver(e)}
                                            onMouseLeave={(e) => handleCardMouseLeave(e)}
                                            onTouchStart={(e) => handleCardMouseOver(e)}
                                            onTouchEnd={(e) => handleCardMouseLeave(e)}>
                                            <CardImg id={"card" + education.id.toString()}  width="100%" object src={education.image} alt={education.title} />
                                        </Card>
                                     </div>
                                );
                            })}
                        </div>
                        <div className="row">
                          <div  className="col-12 col-md-5 m-1">
                            {renderEducation(educationState)}
                          </div>
                        </div>
                </div>
            </div>
        );
    }
    
}

export default Education;