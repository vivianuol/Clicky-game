import React from "react";
import "./style.css";


import { Col } from 'react-bootstrap';
import { Navbar as BSNavbar } from 'react-bootstrap';



const Navbar = ({score=0, topScore=0}) => 
        
         (
            
            
            
            <BSNavbar>
                        <Col xs={6} md={4}>
                            <h2>Clicky Game</h2>
                        </Col>
                        <Col xs={6} md={4}>
                            <h3>Click an image to begin!</h3>
                        </Col>
                        <Col xsHidden md={4}>
                            <h3> score: {score} </h3>
                            <h3> topScore: {topScore }</h3>
                            
                        </Col>
                    
            </BSNavbar>
        );
    

export default Navbar