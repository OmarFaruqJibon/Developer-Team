import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMoneyCheckAlt, faMapMarkerAlt, faUserPlus, faVenusMars } from '@fortawesome/free-solid-svg-icons'

import './Developer.css';

const Developer = (props) => {
    const {name, salary, address, picture, phone, role, email, gender} = props.member;
    return (
        <div>
            <div className="developer">
                <img src={picture} alt="" />
                <h2>{name}</h2>
                <p className="role">{role}</p>
                <div className="members-info">
                    <p><span className="icons"><FontAwesomeIcon icon={faPhone} /></span> {phone}</p>
                    <p><span className="icons"><FontAwesomeIcon icon={faEnvelope} /></span> {email}</p>
                    <p><span className="icons"><FontAwesomeIcon icon={faVenusMars} /></span> {gender}</p>
                    <p><span className="icons"><FontAwesomeIcon icon={faMoneyCheckAlt} /></span>$ {salary}</p>
                    <p><span className="icons"><FontAwesomeIcon icon={faMapMarkerAlt} /></span> {address}</p>
                </div>
                <button onClick={() =>props.handleHireMe(props.member)} className="btn-regular"><span className="user-icon"><FontAwesomeIcon icon={faUserPlus} /></span> Hire Me</button>
            </div>
        </div>
    );
};

export default Developer;