(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{210:function(e,t,n){},492:function(e,t,n){},513:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(1),s=n.n(a),o=n(45),r=n.n(o),c=(n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(237),n(238),n(95),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(255),n(256),n(258),n(259),n(260),n(130),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(288),n(289),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(312),n(313),n(314),n(315),n(316),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(183),n(329),n(330),n(185),n(331),n(332),n(333),n(334),n(186),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(138),n(395),n(396),n(398),n(399),n(400),n(401),n(402),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(439),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(473),n(475),n(476),n(477),n(478),n(479),n(480),n(481),n(482),n(483),n(484),n(485),n(486),n(487),n(488),n(489),n(491),n(197),n.p,n(492),n(46)),l=n(55),d=n(69),u=n(65),m=n(66),h=n(30),p=n(68),j=n(67),g=n(6),b=n(514),f=n(515),x=n(516),O=n(517),v=n(47),y=n(112),w=n.n(y),S=n(39),k=(a.Component,n(518)),N=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).state={selectedProject:null,isModalOpen:!1},i.toggleModal=i.toggleModal.bind(Object(h.a)(i)),i}return Object(m.a)(n,[{key:"onProjectSelect",value:function(e){this.setState({selectedProject:e})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleFocus",value:function(){setTimeout((function(){v.a.timeline().to(".circle",{duration:1,rotation:360})}),1e3)}},{key:"handleCardMouseOver",value:function(e){if(e.target.id){var t=document.querySelector("#"+e.target.id.toString());v.a.timeline().to(t,{scale:1.1})}}},{key:"handleCardMouseLeave",value:function(e){if(e.target.id){var t=document.querySelector("#"+e.target.id.toString());v.a.timeline().to(t,{scale:1})}}},{key:"renderProject",value:function(e){return null!=e?Object(i.jsxs)(g.k,{size:"lg",isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(i.jsx)(g.m,{toggle:this.toggleModal,cssModule:{"modal-title":"w-100 text-center"},children:e.title}),Object(i.jsx)(g.l,{children:Object(i.jsxs)("div",{className:"cointainer",children:[Object(i.jsx)("div",{className:"row justify-content-center col-xs-12",children:Object(i.jsx)("img",{className:"img-fluid",src:e.image,alt:e.title,width:"400",height:"350"})}),Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:Object(i.jsxs)("a",{href:e.moreInformation,children:[" ",Object(i.jsx)(k.a,{onFocus:this.handleFocus(),className:"circle",size:54})]})}),Object(i.jsx)("div",{className:"row m-5",children:e.description})]})})]}):Object(i.jsx)("div",{})}},{key:"cardFocus",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,t=this.props.projects.map((function(t){return Object(i.jsx)("div",{className:"col-sm-4 col-xs-12 image-container mb-4 mt-2",children:Object(i.jsx)(g.b,{onClick:function(){e.onProjectSelect(t),e.toggleModal()},onFocus:function(t){return e.cardFocus(t)},onMouseOver:function(t){return e.handleCardMouseOver(t)},onMouseLeave:function(t){return e.handleCardMouseLeave(t)},children:Object(i.jsx)(g.c,{id:"card"+t.id.toString(),width:"100%",object:!0,src:t.image,alt:t.title})},t.id)})}));return Object(i.jsx)("div",{id:"portfolio",className:"project",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-12 mt-5",children:[Object(i.jsx)("h3",{className:"text-center",children:"PORTFOLIO"}),Object(i.jsx)("hr",{id:"hr"})]})}),Object(i.jsx)("div",{className:"row",children:t}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12 col-md-5 m-1",children:this.renderProject(this.state.selectedProject)})})]})})}}]),n}(a.Component),C=function(e){var t,n=Object(a.useState)(null),s=Object(c.a)(n,2),o=s[0],r=s[1],l=Object(a.useState)(!1),d=Object(c.a)(l,2),u=d[0],m=d[1],h=e.educations;return Object(i.jsx)("div",{id:"education",className:"education",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-12 mt-5",children:[Object(i.jsx)("h3",{className:"text-center",children:"EDUCATION"}),Object(i.jsx)("hr",{id:"hr"})]})}),Object(i.jsx)("div",{className:"row",children:h.map((function(e){return Object(i.jsx)("div",{className:"col-sm-4 col-xs-12 image-container mb-4 mt-2",children:Object(i.jsx)(g.b,{onClick:function(){r(e),m(!u)},onMouseOver:function(e){return function(e){if(e.target.id){var t=document.querySelector("#"+e.target.id.toString());v.a.timeline().to(t,{scale:1.1})}}(e)},onMouseLeave:function(e){return function(e){if(e.target.id){var t=document.querySelector("#"+e.target.id.toString());v.a.timeline().to(t,{scale:1})}}(e)},children:Object(i.jsx)(g.c,{id:"card"+e.id.toString(),width:"100%",object:!0,src:e.image,alt:e.title})},e.id)})}))}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12 col-md-5 m-1",children:(t=o,null!=t?Object(i.jsxs)(g.k,{size:"lg",isOpen:u,toggle:function(){return m(!u)},children:[Object(i.jsx)(g.m,{toggle:function(){return m(!u)},cssModule:{"modal-title":"w-100 text-center"},children:t.title}),Object(i.jsx)(g.l,{children:Object(i.jsxs)("div",{className:"cointainer",children:[Object(i.jsx)("div",{className:"row justify-content-center col-xs-12",children:Object(i.jsx)("img",{className:"img-fluid",src:t.image,alt:t.title,width:"400",height:"350"})}),Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:Object(i.jsxs)("a",{href:t.link,children:[" ",Object(i.jsx)(k.a,{onFocus:void setTimeout((function(){v.a.timeline().to(".circle",{duration:1,rotation:360})}),1e3),className:"circle",size:54})]})}),Object(i.jsx)("div",{className:"row m-5",children:t.description})]})})]}):Object(i.jsx)("div",{}))})})]})})},R=function(e){var t=e.skillsets;return Object(i.jsx)("div",{id:"skillset",className:"skillset",children:Object(i.jsxs)("div",{className:"container mt-10",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-12 mt-5",children:[Object(i.jsx)("h3",{className:"text-center",children:"SKILLSET"}),Object(i.jsx)("hr",{id:"hr"})]})}),Object(i.jsx)("div",{className:"row text-center",children:t.map((function(e){return Object(i.jsxs)("div",{className:"col-sm-4 col-xs-3 mb-2",children:[Object(i.jsx)("img",{className:"rounded images",object:!0,src:e.image,alt:e.name,title:e.name}),Object(i.jsx)("p",{children:e.name})]},e.id)}))})]})})},M=n(519),I=n(520),T=function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row justify-content-center",children:Object(i.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"https://linkedin.com/in/aridai-santana-gil-4834051b3",children:Object(i.jsx)(M.a,{})}),Object(i.jsx)("a",{className:"btn btn-social-icon btn-github",href:"https://github.com/aridaisantana/",children:Object(i.jsx)(I.a,{})}),Object(i.jsx)("a",{className:"btn btn-social-icon",href:"mailto:aridaitecnologia@gmail.com",children:Object(i.jsx)("i",{className:"fa fa-envelope-o"})})]})})}),Object(i.jsx)("div",{className:"row justify-content-center mt-2 footer",children:Object(i.jsx)("div",{className:"col-12 text-center",children:Object(i.jsx)("p",{style:{color:"#98fa94"},children:"Developed and designed by Aridai Santana. \xa92021."})})})]})})},z=[{id:"p0",title:"Confusion Restaurant",image:"/myportfolio/assets/images/project1.png",description:"This project was developed using the next technologies: React library, JavaScript ES6, Reactstrap for Bootstrap 4-based responsive UI design, React router, Redux",moreInformation:"https://github.com/aridaisantana/confusion"},{id:"p1",title:"Confusion Restaurant",image:"/myportfolio/assets/images/project1.png",description:"This project was developed using the next technologies: React library, JavaScript ES6, Reactstrap for Bootstrap 4-based responsive UI design, React router, Redux",moreInformation:"https://github.com/aridaisantana/confusion"},{id:"p2",title:"Confusion Restaurant",image:"/myportfolio/assets/images/project1.png",description:"This project was developed using the next technologies: React library, JavaScript ES6, Reactstrap for Bootstrap 4-based responsive UI design, React router, Redux",moreInformation:"https://github.com/aridaisantana/confusion"},{id:"p3",title:"Confusion Restaurant",image:"/myportfolio/assets/images/project1.png",description:"This project was developed using the next technologies: React library, JavaScript ES6, Reactstrap for Bootstrap 4-based responsive UI design, React router, Redux",moreInformation:"https://github.com/aridaisantana/confusion"},{id:"p4",title:"Confusion Restaurant",image:"/myportfolio/assets/images/project1.png",description:"This project was developed using the next technologies: React library, JavaScript ES6, Reactstrap for Bootstrap 4-based responsive UI design, React router, Redux",moreInformation:"https://github.com/aridaisantana/confusion"},{id:"p5",title:"Confusion Restaurant",image:"/myportfolio/assets/images/project1.png",description:"This project was developed using the next technologies: React library, JavaScript ES6, Reactstrap for Bootstrap 4-based responsive UI design, React router, Redux",moreInformation:"https://github.com/aridaisantana/confusion"}],E=[{id:0,title:"Graduate in computer engineering",description:"The degree in Computer Science Engineering allows the student to apply his or her imagination and creativity to the development of quality computing solutions, to provide support to all sectors in our society, and to participate in the creation of large (and the most visited) engineering works. Furthermore, it allows the student to innovate and decide on his or her professional work space. This degree is comprised of five specialisations that address all professional outlets: Software Engineering, Computer Engineering, Computing, Information Technologies and Information Systems.",image:"/myportfolio/assets/images/ulpgc.jpeg",link:"https://www2.ulpgc.es/plan-estudio/4008/40"},{id:1,title:"Front-End web developing with React",description:"This course explores Javascript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. You will be introduced to various aspects of React components. You will learn about React router and its use in developing single-page applications. You will also learn about designing controlled forms. You will be introduced to the Flux architecture and Redux. You will explore various aspects of Redux and use it to develop React-Redux powered applications. You will then learn to use Fetch for client-server communication and the use of REST API on the server side. A quick tour through React animation support and testing rounds off the course.",image:"/myportfolio/assets/images/reactcertificate.png",link:"https://coursera.org/share/b9ac8aad6b71b886f9e666000518ab76"},{id:2,title:"Web application Development with JavaScript and MongoDB",description:"In this course, you will develop more advanced web application programming skills. You will learn how to control data read and write access using methods, publish and subscribe. You will learn how to access your database and server shells using command line tools. You will use the SimpleSchema system to validate data and generate input forms automatically. You will see a complete collaborative code editing environment, TextCircle, being built from scratch. ",image:"/myportfolio/assets/images/meteor.png",link:"https://coursera.org/share/3420b160dd01cc00df1b28ee140f36f9"},{id:3,title:"Identifying Security Vulnerabilities in C/C++ Programming",description:"This course builds upon the skills and coding practices learned in both Principles of Secure Coding and Identifying Security Vulnerabilities, courses one and two, in this specialization.  This course uses the focusing technique that asks you to think about:  \u201cwhat to watch out for\u201d and \u201cwhere to look\u201d to evaluate and ultimately remediate fragile C++ library code.",image:"/myportfolio/assets/images/cpp.png",link:"https://coursera.org/share/47fdbb6d512eb536a8090b1d9926fa54"},{id:4,title:"Identifying Security Vulnerabilities",description:"This course will help you build a foundation of some of the fundamental concepts in secure programming. We will learn about the concepts of threat modeling and cryptography and you will be able to start to create threat models, and think critically about the threat models created by other people. We will learn the basics of applying cryptography, such as encryption and secure hashing. We will learn how attackers can exploit application vulnerabilities through the improper handling user-controlled data. We will gain a fundamental understanding of injection problems in web applications, including the three most common types of injection problems: SQL injection, cross-site scripting, and command injection. We will also cover application authentication and session management where authentication is a major component of a secure web application and session management is the other side of the same coin, since the authenticated state of user requests need to be properly handled and run as one session. We will learn about sensitive data exposure issues and how you can help protect your customers data. We will cover how to effectively store password-related information, and not to store the actual plaintext passwords.",image:"/myportfolio/assets/images/securityvulnerabilities.png",link:"https://coursera.org/share/cdd6b80d555aa29bce89591486429f10"},{id:5,title:"Principles of Secure Coding",description:"This course introduces you to the principles of secure programming. It begins by discussing the philosophy and principles of secure programming, and then presenting robust programming and the relationship between it and secure programming",image:"/myportfolio/assets/images/principles.png",link:"https://coursera.org/share/cdd6b80d555aa29bce89591486429f10"}],F=[{id:0,name:"HTML5",image:"/myportfolio/assets/images/html5.png"},{id:1,name:"CSS3",image:"/myportfolio/assets/images/css3.jpeg"},{id:2,name:"JavaScript (ES6)",image:"/myportfolio/assets/images/javascript.png"},{id:3,name:"React",image:"/myportfolio/assets/images/react.png"},{id:4,name:"Git, Github",image:"/myportfolio/assets/images/git.png"},{id:5,name:"Npm, yarn",image:"/myportfolio/assets/images/npm.png"},{id:6,name:"Bootstrap",image:"/myportfolio/assets/images/bootstrap.png"},{id:7,name:"Java",image:"/myportfolio/assets/images/java.png"},{id:8,name:"NodeJS, Express",image:"/myportfolio/assets/images/node.png"},{id:9,name:"Bash",image:"/myportfolio/assets/images/bash.png"},{id:10,name:"Php",image:"/myportfolio/assets/images/php.png"},{id:11,name:"SQL",image:"/myportfolio/assets/images/sql.png"}],B=n(23),P=n(24);function L(){var e=Object(B.a)(["\n    margin-top:10px;\n    background: #01bf71;\n    padding: 10px 22px;\n    color: #010606;\n    font-size: 16px;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n\n    &:hover{\n        transition: all 0.2s ease-in-out\n        background: #fff;\n        color: #010606;\n    }\n\n"]);return L=function(){return e},e}function Y(){var e=Object(B.a)(["\n    align-items: center;\n\n    @media screen and (max-width: 768px){\n        display: none;\n    }\n"]);return Y=function(){return e},e}function J(){var e=Object(B.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    cursor: pointer;\n\n    &.active{\n        border-bottom: 3px solid #01bf71;\n    }\n"]);return J=function(){return e},e}function q(){var e=Object(B.a)(["\n    height: 80px;\n    color: #fff;\n\n"]);return q=function(){return e},e}function W(){var e=Object(B.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n    margin-right: -22px;\n\n    @media screen and (max-width: 768px){\n        display: none;\n    }\n"]);return W=function(){return e},e}function U(){var e=Object(B.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px){\n        display: inline;\n        position: absolute;\n        top: 0;\n        right: 70px;\n        font-size: 1.8rem;\n        cursor: pointer;\n        color: #fff;\n    }\n"]);return U=function(){return e},e}function A(){var e=Object(B.a)(["\n    display: none;\n\n    @media screen and (max-width: 768px){\n        display:block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n        color: #fff;\n    }\n"]);return A=function(){return e},e}function D(){var e=Object(B.a)(["\n    justify-self: flex-start;\n    cursor: pointer;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    font-weight: bold;\n    text-decoration: none;\n"]);return D=function(){return e},e}function _(){var e=Object(B.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 80px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 24px;\n    max-width: 1100px;\n"]);return _=function(){return e},e}function V(){var e=Object(B.a)(["\n    background: ",";\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1 rem;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n    @media screen and (max-width: 960px){\n        transition: 0.8s all ease;\n    }\n"]);return V=function(){return e},e}var G=P.a.nav(V(),(function(e){return e.scrollNav?"#000":"#323133"})),$=P.a.div(_()),H=Object(P.a)(S.Link)(D()),K=P.a.div(A()),Q=P.a.div(U()),X=P.a.ul(W()),Z=P.a.li(q()),ee=Object(P.a)(S.Link)(J()),te=P.a.nav(Y()),ne=(P.a.button(L()),n(521)),ie=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).handleBlur=function(e){return function(t){i.setState({touched:Object(d.a)(Object(d.a)({},i.state.touched),{},Object(l.a)({},e,!0))})}},i.handleSubmit=function(e){e.preventDefault(),i.toggleModal(),w.a.sendForm("service_w3pyczd","template_nsp9vb4",e.target,"user_5rkCK6Jz2z5AoSm0S2t4E").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),alert("Thank you for your feedback "+i.username.value)},i.state={isNavOpen:!1,isModalOpen:!1,username:"",email:"",message:"",touched:{username:!1,email:!1,message:!1}},i.toggleNav=i.toggleNav.bind(Object(h.a)(i)),i.toggleModal=i.toggleModal.bind(Object(h.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(h.a)(i)),i.handleInputChange=i.handleInputChange.bind(Object(h.a)(i)),i.handleBlur=i.handleBlur.bind(Object(h.a)(i)),i}return Object(m.a)(n,[{key:"validate",value:function(e,t,n){var i={username:"",email:"",message:""};this.state.touched.username&&e.length<2?i.username="Your name is too short!":this.state.touched.username&&e.length>16&&(i.username="Your name is too long!"),this.state.touched.message&&n.length<10?i.message="Please introduce a longer message.":this.state.touched.message&&n.length>150&&(i.message="Your message is too long!");return this.state.touched.email&&!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(t)&&(i.email="Your email is not valid."),i}},{key:"handleInputChange",value:function(e){var t=e.target,n=t.value,i=t.name;this.setState(Object(l.a)({},i,n))}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e=this,t=this.validate(this.state.username,this.state.email,this.state.message);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(g.a,{className:"mt-4",style:{color:"#98fa94"},outline:!0,onClick:this.toggleModal,children:[Object(i.jsx)(O.a,{})," Contact me"]}),Object(i.jsxs)(g.k,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(i.jsx)(g.m,{toggle:this.toggleModal,children:"Contact me"}),Object(i.jsx)(g.l,{children:Object(i.jsxs)(g.e,{onSubmit:this.handleSubmit,method:"post",action:"/",children:[Object(i.jsxs)(g.g,{children:[Object(i.jsx)(g.j,{htmlFor:"username",children:"Name"}),Object(i.jsx)(g.h,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t},onChange:this.handleInputChange,valid:""===t.username,invalid:""!==t.username,onBlur:this.handleBlur("username"),value:this.state.username,required:!0}),Object(i.jsx)(g.f,{children:t.username})]}),Object(i.jsxs)(g.g,{children:[Object(i.jsx)(g.j,{htmlFor:"email",children:"Email"}),Object(i.jsx)(g.h,{type:"email",id:"email",name:"email",innerRef:function(t){return e.email=t},onChange:this.handleInputChange,valid:""===t.email,invalid:""!==t.email,onBlur:this.handleBlur("email"),value:this.state.email,required:!0}),Object(i.jsx)(g.f,{children:t.email})]}),Object(i.jsxs)(g.g,{children:[Object(i.jsx)(g.j,{htmlFor:"message",children:"Message"}),Object(i.jsx)(g.h,{type:"textarea",id:"message",name:"message",innerRef:function(t){return e.message=t},onChange:this.handleInputChange,valid:""===t.message,invalid:""!==t.message,onBlur:this.handleBlur("message"),value:this.state.message,required:!0}),Object(i.jsx)(g.f,{children:t.message})]}),Object(i.jsx)(g.g,{children:Object(i.jsx)(g.a,{type:"submit",name:"submit",color:"primary",children:"Submit"})})]})})]})]})}}]),n}(a.Component),ae=function(e){var t=e.toggle,n=Object(a.useState)(!1),s=Object(c.a)(n,2),o=s[0],r=s[1],l=function(){window.scrollY>=80?r(!0):r(!1)};Object(a.useEffect)((function(){window.addEventListener("scroll",l)}),[]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(G,{id:"nav",scrollNav:o,children:Object(i.jsxs)($,{children:[Object(i.jsx)(H,{id:"navLogo",to:"home",onClick:function(){S.animateScroll.scrollToTop()},children:"portfolio"}),Object(i.jsx)(Q,{children:Object(i.jsx)(ie,{})}),Object(i.jsx)(K,{onClick:t,children:Object(i.jsx)(ne.a,{})}),Object(i.jsxs)(X,{children:[Object(i.jsx)(Z,{children:Object(i.jsx)(ee,{to:"portfolio",smooth:!0,duration:700,spy:!0,exact:"true",offset:-80,children:"Portfolio"})}),Object(i.jsx)(Z,{children:Object(i.jsx)(ee,{to:"education",smooth:!0,duration:700,spy:!0,exact:"true",offset:-80,children:"Education"})}),Object(i.jsx)(Z,{children:Object(i.jsx)(ee,{to:"skillset",smooth:!0,duration:700,spy:!0,exact:"true",offset:-200,children:"Skill Set"})})]}),Object(i.jsx)(te,{children:Object(i.jsx)(ie,{})})]})}),Object(i.jsx)(g.i,{className:"mb-0",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row row-header",children:Object(i.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(i.jsx)("h1",{id:"uno",children:"Welcome to my portfolio."}),Object(i.jsx)("p",{id:"dos",style:{color:"#98fa94"},children:"Here you will find part of my work as Front-End developer."})]})})})})]})},se=n(522);function oe(){var e=Object(B.a)(["\n    display: in-line;\n    align-items: center;\n    jutify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n"]);return oe=function(){return e},e}function re(){var e=Object(B.a)(["\n    display: grid;\n    grid-template-colums: 1fr;\n    grid-template-rows: repeat(6, 120px);\n    text-align: center;\n\n    @media screen and (max-width: 480px){\n        grid-template-rows: repeat(6, 80px);\n    }\n"]);return re=function(){return e},e}function ce(){var e=Object(B.a)(["\n    text-align:center;\n    margin-right:25px;\n    color: #fff;\n"]);return ce=function(){return e},e}function le(){var e=Object(B.a)(["\n    position: aboslute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-size: 2rem;\n    cursor: pointer;\n    outline: none;\n"]);return le=function(){return e},e}function de(){var e=Object(B.a)(["\n    color: #fff;\n"]);return de=function(){return e},e}function ue(){var e=Object(B.a)(["\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    background: #0d0d0d;\n    display: grid;\n    align-items: center;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-in-out;\n    opacitiy: ",";\n    top: ",";\n"]);return ue=function(){return e},e}var me=P.a.aside(ue(),(function(e){return e.isOpen?"100%":"0"}),(function(e){return e.isOpen?"0":"-100%"})),he=Object(P.a)(se.a)(de()),pe=P.a.div(le()),je=P.a.div(ce()),ge=P.a.ul(re()),be=Object(P.a)(S.Link)(oe()),fe=function(e){var t=e.isOpen,n=e.toggle;return Object(i.jsxs)(me,{isOpen:t,onClick:n,children:[Object(i.jsx)(pe,{onClick:n,children:Object(i.jsx)(he,{})}),Object(i.jsx)(je,{children:Object(i.jsxs)(ge,{children:[Object(i.jsx)(be,{to:"portfolio",onClick:n,smooth:!0,duration:700,spy:!0,exact:"true",offset:-80,children:"Portfolio"}),Object(i.jsx)(be,{to:"education",onClick:n,smooth:!0,duration:700,spy:!0,exact:"true",offset:-80,children:"Education"}),Object(i.jsx)(be,{to:"skillset",onClick:n,smooth:!0,duration:700,spy:!0,exact:"true",offset:-80,children:"Skill Set"}),Object(i.jsx)("p",{style:{color:"#01bf71",marginTop:"30px"},children:"Aridai Santana. \xa92021"})]})})]})},xe=function(){var e=Object(a.useState)(z),t=Object(c.a)(e,1)[0],n=Object(a.useState)(E),s=Object(c.a)(n,1)[0],o=Object(a.useState)(F),r=Object(c.a)(o,1)[0],l=Object(a.useState)(!1),d=Object(c.a)(l,2),u=d[0],m=d[1],h=function(){m(!u)};return Object(i.jsxs)("div",{children:[Object(i.jsx)(fe,{isOpen:u,toggle:h}),Object(i.jsx)(ae,{toggle:h}),Object(i.jsx)(N,{projects:t}),Object(i.jsx)(C,{educations:s}),Object(i.jsx)(R,{skillsets:r}),Object(i.jsx)(T,{})]})};var Oe=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(xe,{})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,523)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))};n(511),n(512);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(Oe,{})}),document.getElementById("root")),ve()}},[[513,1,2]]]);
//# sourceMappingURL=main.3ac9a698.chunk.js.map