import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, FormFeedback} from 'reactstrap';
import { Inbox } from 'react-bootstrap-icons';
import emailjs from 'emailjs-com';

class ContactMe extends Component{

    

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

        if(this.props.langauge === "es"){
            if (this.state.touched.username && username.length < 2)
                errors.username = 'Tú nombre es muy corto';
            else if (this.state.touched.username && username.length > 16)
                errors.username = 'Tú nombre es muy largo';

            if (this.state.touched.message && message.length < 10)
                errors.message = 'Porfavor, introduce un mensaje más largo.';
            else if (this.state.touched.message && message.length > 150)
                errors.message = 'Tú mensaje es demasiado corto.';

            const reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            if (this.state.touched.email && !reg.test(email))
                errors.email = 'Correo inválido.';
            
        }else{
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
            }

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
        
        const errors = this.validate(this.state.username, this.state.email, this.state.message);

        if(this.props.language === "en"){
            return(
                <>  

                    <Button className="mt-4" style={{color: '#98fa94'}} outline onClick={this.toggleModal}>
                        <Inbox /> Contact me
                    </Button>

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
        }else if(this.props.language === "es"){
            return(
                <>  

                    <Button className="mt-4" style={{color: '#98fa94'}} outline onClick={this.toggleModal}>
                        <Inbox /> Contáctame
                    </Button>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Contáctame</ModalHeader>
                        <ModalBody>
                           <Form onSubmit={this.handleSubmit} method="post" action="/">
                               <FormGroup>
                                   <Label htmlFor="username">Nombre</Label>
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
                                   <Label htmlFor="email">Correo</Label>
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
                                   <Label htmlFor="message">Mensaje</Label>
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
                                    <Button type="submit" name="submit" color="primary">Enviar</Button>
                               </FormGroup>
                           </Form>
                        </ModalBody>
                    </Modal>
                </>
            );
        }else{
            return(<div></div>);
        }
    }
}

export default ContactMe;