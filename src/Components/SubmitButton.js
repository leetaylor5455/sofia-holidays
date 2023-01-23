import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function SubmitButton(props) {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('sofia-holidays', 'template_SH', form.current, 'NxH4wqVjupThwJaeX')
        .then((result) => {
            console.log(result);
            if (result.status === 200) {
                navigate('/receipt', { replace: true });
            }
        }, (error) => {
            console.log(error.text);
        });
    
    
  }

  return (
    <div className='submit-button'>     
        <form ref={form} onSubmit={sendEmail}>
            <input style={{display: 'none'}} type='text' name='date' value={props.date}/>
            <input style={{display: 'none'}} type='text' name='hotel' value={props.hotel}/>
            <input type='submit' value='Okay!'/>
        </form>
    </div>
  )
}

export default SubmitButton