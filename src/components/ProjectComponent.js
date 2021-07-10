import React, {Component} from 'react';
import { Card, CardImg, Modal, ModalHeader, ModalBody,  } from 'reactstrap';
import { InfoCircle } from 'react-bootstrap-icons';
import gsap from 'gsap';

class Projects extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedProject:null,
            isModalOpen: false,
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    onProjectSelect(project) {
        this.setState({ selectedProject: project});
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleFocus(){
        setTimeout(()=>{
            const tl = gsap.timeline();
            tl.to(".circle", {duration: 1, rotation:360});
        }, 1000)
    }

    handleCardMouseOver(e){
        if (e.target.id){
            var element = document.querySelector("#" + e.target.id.toString());
            const timeline = gsap.timeline();
            timeline.to(element, {scale:1.10});
        }
    }

    handleCardMouseLeave(e){
        if (e.target.id){
            var element = document.querySelector("#" + e.target.id.toString());
            const timeline = gsap.timeline();
            timeline.to(element, {scale:1});
        }
    }

    renderProject(project){
       if(project != null){ 
            return(
                <Modal size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} cssModule={{'modal-title': 'w-100 text-center'}}>
                        {project.title}    
                    </ModalHeader>
                    <ModalBody>
                        <div className="cointainer">
                            <div className="row justify-content-center col-xs-12">
                                <img className="img-fluid" src={project.image} alt={project.title} width="400" height="350"/>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <a href={project.moreInformation}> <InfoCircle onFocus={this.handleFocus()} className="circle" size={54}/></a>
                            </div>
                            <div className="row m-5">
                                {project.description}
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

    cardFocus(e){
        console.log(e);
    }

    render(){

        const projects = this.props.projects.map( (project) => {
            return(
                <div className="col-sm-4 col-xs-12 image-container mb-4 mt-2">
                    <Card key={project.id} onClick={() => {
                        this.onProjectSelect(project); this.toggleModal();}} onFocus={(e) => this.cardFocus(e)}
                        onMouseOver={(e) => this.handleCardMouseOver(e)}
                        onMouseLeave={(e) => this.handleCardMouseLeave(e)}
                        onTouchStart={(e) => this.handleCardMouseOver(e)}
                        onTouchEnd={(e) => this.handleCardMouseLeave(e)}>
                        <CardImg id={"card" + project.id.toString()} className="image-fluid" width="100%" object src={project.image} alt={project.title} />
                    </Card>
                </div>
            );
        });

        const proyectos = this.props.proyectos.map( (project) => {
            return(
                <div className="col-sm-4 col-xs-12 image-container mb-4 mt-2">
                    <Card key={project.id} onClick={() => {
                        this.onProjectSelect(project); this.toggleModal();}} onFocus={(e) => this.cardFocus(e)}
                        onMouseOver={(e) => this.handleCardMouseOver(e)}
                        onMouseLeave={(e) => this.handleCardMouseLeave(e)}
                        onTouchStart={(e) => this.handleCardMouseOver(e)}
                        onTouchEnd={(e) => this.handleCardMouseLeave(e)}>
                        <CardImg id={"card" + project.id.toString()} className="image-fluid" width="100%" object src={project.image} alt={project.title} />
                    </Card>
                </div>
            );
        });

        if(this.props.language === "en"){
            return (
                <div id="portfolio" className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h3  className="text-center">PORTFOLIO</h3>
                                <hr id="hr"/>
                            </div>
                        </div>
                        <div className="row">
                            {projects}
                        </div>
                        <div className="row">
                          <div  className="col-12 col-md-5 m-1">
                            {this.renderProject(this.state.selectedProject)}
                          </div>
                        </div>
                    </div>
                </div>
            );
        }else if(this.props.language === "es"){
            return (
                <div id="portfolio" className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h3  className="text-center">PORTAFOLIO</h3>
                                <hr id="hr"/>
                            </div>
                        </div>
                        <div className="row">
                            {proyectos}
                        </div>
                        <div className="row">
                          <div  className="col-12 col-md-5 m-1">
                            {this.renderProject(this.state.selectedProject)}
                          </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }
    }

}

export default Projects;