import React from 'react';
import './Subject.css';
import { Card } from 'react-bootstrap';

const Subject = (props) => {
    const {name, img, instructor, price, } = props.subject;
    return (
       <div className="subject">

        <Card> 
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="subject-reviwer">
                with {instructor}
                </Card.Text>
            </Card.Body>
                <h3 className="subject-price">${price}</h3>
            <Card.Footer>
                <button onClick={()=> props.handleAddSubject(props.subject)} className="btn btn-danger"> Enroll Now </button>
            </Card.Footer>
        </Card>



            {/* <div>
            <img src={img} alt=""/>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
            <p>with {instructor}</p>
            <h3>{price}</h3>
            <button className="btn btn-danger">Enroll Now</button> */}
       </div>
    )
};

export default Subject;