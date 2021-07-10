import React, {Component, useState, useEffect} from 'react';
import { Navbar, NavLink, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, FormFeedback} from 'reactstrap';
import { CodeSlash, Award, Briefcase, Inbox } from 'react-bootstrap-icons';
import gsap from 'gsap';
import emailjs from 'emailjs-com';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-scroll';

class Header extends Component{

    

    constructor(props){
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            username: '',
            email: '',
            message: '',
            touched: {
                username: false,
                email: false,
                message: false,
            }
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(username, email, message) {

        const errors = {
            username: '',
            email: '',
            message: ''
        };

        if (this.state.touched.username && username.length < 2)
            errors.username = 'Your name is too short!';
        else if (this.state.touched.username && username.length > 16)
            errors.username = 'Your name is too long!';

        if (this.state.touched.message && message.length < 10)
            errors.message = 'Please introduce a longer message.';
        else if (this.state.touched.message && message.length > 150)
            errors.message = 'Your message is too long!';

        const reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (this.state.touched.email && !reg.test(email))
            errors.email = 'Your email is not valid.';
        

        return errors;
    }

    handleInputChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

    
        this.setState({
          [name]: value
        });
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.toggleModal();
        
        emailjs.sendForm('service_w3pyczd', 'template_nsp9vb4', e.target, 'user_5rkCK6Jz2z5AoSm0S2t4E')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        alert("Thank you for your feedback "+ this.username.value);
        
    };

    render(){
        
        setTimeout(()=>{
            const tl = gsap.timeline();
            tl.to("#logo", {duration: 2, y: 150, ease: "slow"});
            tl.to("#logo", {duration: 1, scale: "0.2"});
            tl.to("#logo", {duration: 1, scale: 0.8, rotation:360});
        

        }, 1000)

        const errors = this.validate(this.state.username, this.state.email, this.state.message);
        return(
            <>  
                <Navbar color="dark" dark expand="md" className="navbar-static-top">
                    <div className="container">

                        <div className="container">
                            <div className="row">
                                <NavbarToggler onClick={this.toggleNav} />
                                    <Collapse className="text-center mt-2 mb-1" isOpen={this.state.isNavOpen} navbar> 
                                        <Nav navbar>
                                            <NavItem>
                                                <Link className="nav-link" to="portfolio"
                                                smooth={true} 
                                                duration={700} 
                                                spy={true} 
                                                exact='true'>
                                                    <Briefcase /> Portfolio
                                                </Link>
                                            </NavItem>
                                            
                                            <NavItem>
                                                <Link className="nav-link" to="education"
                                                smooth={true} 
                                                duration={700} 
                                                spy={true} 
                                                exact='true'>
                                                    <Award /> Education
                                                </Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="nav-link" to="skillset"
                                                smooth={true} 
                                                duration={700} 
                                                spy={true} 
                                                exact='true'>
                                                    <CodeSlash /> Skill Set
                                                </Link>
                                            </NavItem>
                                        </Nav>
                                        <Nav className="ml-auto" navbar>                                          
                                            <NavItem>
                                                <Button className="mt-4" style={{color: '#98fa94'}} outline onClick={this.toggleModal}>
                                                    <Inbox /> Contact me
                                                </Button>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                            </div>
                        </div>
                    </div>
                </Navbar>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Contact me</ModalHeader>
                    <ModalBody>
                       <Form onSubmit={this.handleSubmit} method="post" action="/">
                           <FormGroup>
                               <Label htmlFor="username">Name</Label>
                               <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} 
                                onChange={this.handleInputChange}
                                valid={errors.username === ''}
                                invalid={errors.username !== ''}
                                onBlur={this.handleBlur('username')}
                                value={this.state.username}
                                required/>
                                <FormFeedback>{errors.username}</FormFeedback>
                           </FormGroup>
                           <FormGroup>
                               <Label htmlFor="email">Email</Label>
                               <Input type="email" id="email" name="email" innerRef={(input) => this.email = input}
                                onChange={this.handleInputChange}
                                valid={errors.email === ''}
                                invalid={errors.email !== ''}
                                onBlur={this.handleBlur('email')}
                                value={this.state.email}
                                required/>
                                <FormFeedback>{errors.email}</FormFeedback>
                           </FormGroup>
                           <FormGroup>
                               <Label htmlFor="message">Message</Label>
                               <Input type="textarea" id="message" name="message" innerRef={(input) => this.message = input} 
                                onChange={this.handleInputChange}
                                valid={errors.message === ''}
                                invalid={errors.message !== ''}
                                onBlur={this.handleBlur('message')}
                                value={this.state.message} 
                                required/>
                                <FormFeedback>{errors.message}</FormFeedback>
                           </FormGroup>
                           <FormGroup >
                                <Button type="submit" name="submit" color="primary">Submit</Button>
                           </FormGroup>
                       </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;