import React from 'react';
import Section from './Section';

import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPalette, faBookOpen, faBrain, faComment} from '@fortawesome/free-solid-svg-icons';

function Icon(props) {
    return <FontAwesomeIcon
            icon={props.icon}
            style={{color:props.color}}
            className="fa-fw fa-3x"
        />
}

function SoftSkill(props) {
    return (
        <Col md={6} xs={12}>
            <div className="mx-lg-5 mx-4 mb-lg-5 mb-4">
            <Row>
                {/*icon*/}
                <Col xs="auto ml-lg-3 ml-md-1 ml-3" className="pl-0">
                    <Icon icon={props.icon} color={props.iconColor}/>
                </Col>
                {/*title*/}
                <Col xs="auto" className="px-0 pl-lg-2 text-center">
                    <h2 className="main-font">{props.title}</h2>
                </Col>
                {/*description*/}
                <Col xs={12} className="mt-lg-3 mt-2 mt-md-2 secondary-font" style={{fontSize:'1.05em'}}>
                    {props.children}
                </Col>
            </Row>
            </div>
        </Col>
    );
}

function SectionSoftSkills() {
    return (
        <Section id="softskills" heading="Soft Skills" >
            <Row className="mb-n5"> 
                <SoftSkill title="Kreativ" icon={faPalette} iconColor="orange">
                    Ich zeichne, singe gerne und spiele Klarinette und Ukulele.
                    Kniffelige Aufgaben begeistern mich und ich denke gerne über den Tellerrand hinaus.
                </SoftSkill> 

                <SoftSkill title="Autodidaktisch" icon={faBookOpen} iconColor="forestgreen">
                    Mich zeichnet eine hohe Wissbegierigkeit aus und
                    die Fähigkeit mich schnell in Sachverhältnisse einarbeiten zu können.
                </SoftSkill>
                
                <SoftSkill title="Mitdenkend" icon={faBrain} iconColor="darkred">
                    Ich bin kein Roboter! Ich versuche stets meinen eigenen hinterfragenden Geist in
                    das Projekt miteinfließen zu lassen, um das Endresultat so wertig wie möglich zu gestalten. 
                </SoftSkill>
                
                <SoftSkill title="Kommunikativ" icon={faComment} iconColor="royalblue">
                    Als Mathe-Nachhilfelehrer und Programmier-Workshop-Leiter, 
                    bin ich geübt komplexe Gedanken und Ideen zu kommunizieren und vermitteln.
                </SoftSkill>
            </Row>
        </Section>
    )
}


export default SectionSoftSkills;