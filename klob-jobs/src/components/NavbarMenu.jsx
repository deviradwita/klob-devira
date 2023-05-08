import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {  useDispatch , useSelector} from "react-redux";
// import { addFile, fetchUser } from "../store/actions/actionCreator";

// import { fetchitems } from "../store/actions/actionCreator";



export default function NavbarMenu() {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
 

 
  // const [show, setShow] = useState(false);


  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);



  
  
  
  
  
  


    

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
        id="mainNav"
      >
        <div className="container px-5">
       
          <Link to={"/"} className="navbar-brand fw-bold" href="#page-top">
          <img src="https://static.klob.id/img/logo-klob-text-og.png" alt="Klob Logo" width="100" height="45" />
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
              {/* <li className="nav-item"><a className="nav-link me-lg-3" href="#features">Recent</a></li> */}
              <li className="nav-item">
                <Link to={"/bookshelf"} className="nav-link me-lg-3" href="#download">
                  Buat Lowongan
                </Link>
              </li>
            </ul>

            
          

            
          </div>
        </div>
      </nav>

      {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
               
                type="text"
                placeholder="Type your Title here"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
             
              <input 
      
                type="file"
                id="avatar"
                name="avatar"
           
              ></input>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"  onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal> */}


      
    </header>
  );
}
