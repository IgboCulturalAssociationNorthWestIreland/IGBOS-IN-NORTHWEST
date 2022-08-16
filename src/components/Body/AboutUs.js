import React from 'react'
import {BsFillPencilFill, BsFillHandThumbsUpFill} from 'react-icons/bs';
import styled from 'styled-components';


const AboutUs = () => {
  return (

    <div className="section-2-container position-relative mt-5">
    <div className="container">
    
        <div className="row">
          <div className="col-sm-12 col-lg-8 " style={{maxWidth:'60%'}}>
                <h3 color='#1e154e'>About Us</h3>
                <p className="medium-paragraph">
                Igbo cultural Association Northwest Ireland is a cultural organised group founded in 2010 with the shared goal of promoting equality, diversity, peace and unity through cultural integration, community engagement,  participation and volunteering
                </p>
                <p>
                  At the heart of our purpose is our commitment to Inclusion and charitable Activites, fostering an inclusive and diverse social environment where everyone has the voice and support to embrace  social life with purpose and respect. Through hard working, self-support and development -we do what we do
                </p>
        <div className="buttons wow px-0" style={{maxWidth:'260px'}}>			
        
        <a className="reg-btn btn w-auto d-flex " style={{background:'lightgray'}}>
         <span>Register to join the group</span> <span className='mx-3'><BsFillPencilFill/></span>
        </a>
      </div>
     </div>

          <div className="col-sm-12 col-lg-4 section-2-box text" style={{width:'40%'}}>
            <div className="text ">
              <h5 className="mt d-flex" style={{color:'#1e154e'}}><BsFillHandThumbsUpFill color='red' /><span className='mx-2'>
                Igbo Enviable Cultural Values</span></h5>
              <div className="mt-4 culture-envi p-3" style={{ color: 'rgb(248, 245, 245)', background: '#1e154e', width:'100%' }}>

                <li className="mt-n1 text-light">Special care to visitors</li>
                <li className="mt-n1">Community raise Children not only the parents</li>
                <li className="mt-n1">Respect to elders</li>
                <li className="mt-n1">Mandatory care for old people</li>
                <li className="mt-n1">Compulsory support to new born and mother </li>
                <li className = "dame"> Mandatory Breast Feeding</li>
              </div>
            </div>
          </div> 
          </div>
        </div>
        <hr className="" style={{ marginTop: '1rem', marginBottom: '1rem',  borderTop: '1px solid rgba(0, 0, 0, 0.9)'}}/>

    </div>
    


   
  )
}

export default AboutUs

/* STYLING START HERE */

/* const ROW = styled.div`
display:grid;
grid-template-columns: repeat(2, auto)

` */