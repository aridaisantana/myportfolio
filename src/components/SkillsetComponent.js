import React from 'react';

const SkillSet = (props) => {

    const skillsets = props.skillsets;

    if(props.language === "en"){
        return(
            <div id="skillset" className="skillset">
                <div className="container mt-10">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h3  className="text-center">SKILLSET</h3>
                                <hr id="hr"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            {skillsets.map( (skillset) => {
                                return(
                                    <div key={skillset.id} className="col-sm-4 col-xs-3 mb-2">
                                            <img className="rounded images" object src={skillset.image} alt={skillset.name} title={skillset.name}/>
                                            <p>{skillset.name}</p>
                                     </div>
                                );
                            })}
                        </div>
                </div>
            </div>
        );
    }else if(props.language === "es"){
        return(
            <div id="skillset" className="skillset">
                <div className="container mt-10">
                        <div className="row">
                            <div className="col-12 mt-5">
                                <h3  className="text-center">HABILIDADES</h3>
                                <hr id="hr"/>
                            </div>
                        </div>
                        <div className="row text-center">
                            {skillsets.map( (skillset) => {
                                return(
                                    <div key={skillset.id} className="col-sm-4 col-xs-3 mb-2">
                                            <img className="rounded images" object src={skillset.image} alt={skillset.name} title={skillset.name}/>
                                            <p>{skillset.name}</p>
                                     </div>
                                );
                            })}
                        </div>
                </div>
            </div>
        );
    }
}

export default SkillSet;