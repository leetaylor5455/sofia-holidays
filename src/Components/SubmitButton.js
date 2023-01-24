import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function SubmitButton(props) {
  const form = useRef();
  const navigate = useNavigate();

  const [waiting, setWaiting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setWaiting(true);

    emailjs.sendForm('sofia-holidays', 'template_SH', form.current, 'NxH4wqVjupThwJaeX')
        .then((result) => {
            console.log(result);
            if (result.status === 200) {
                setWaiting(false);
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
            <input style={{display: 'none'}} type='text' name='website' value={props.website}/>
            <input type='submit' value={ waiting ? 'Confirming...' : 'Okay!'}/>
        </form>
    </div>
  )
}

export default SubmitButton