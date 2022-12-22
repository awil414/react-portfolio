import React, { useState } from "react";
import "./style.css";
import { MDBInput, MDBBtn, MDBCard, MDBTextArea } from "mdb-react-ui-kit";
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

const styles = {
  backgroundStyle: {
    background: "#3E5E82",
  },
  headingStyle: {
    fontSize: "30px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "60px",
    color: "white",
    padding: "10px",
    marginBottom: "0",
  },
};

export default function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const  [status, setStatus] = useState(false);

  const handleName = (e) => {
    setValues({...values, name: e.target.value});
  };
  const handleEmail = (e) => {
    setValues({...values, email: e.target.value});
  };
  const handleMessage = (e) => {
    setValues({...values, message: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //   if (input === 'name') {
    //     setInput(value);
    //   } else if (input === 'email') {
    //     setInput(value);
    //   } else {
    //     setInput(value);
    //   }
    // };
    const { name, email, message } = e.target.elements;
    // let conForm = {
    //   name : name.value,
    //   email: email.value,
    //   message: message.value,
    // };

    setStatus("");
  };
  

  return (
    <div fluid style={styles.backgroundStyle} className='contact-page'>
      <h2 style={styles.headingStyle}>Want to Connect?</h2>
      <p className='info'>
        Email:{" "}
        <a href='mailto:amber.wilson.code@gmail.com'>
          {" "}
          amber.wilson.code@gmail.com
        </a>
      </p>
      <p className='info'>
        GitHub:{" "}
        <a href='https://github.com/awil414'>
          awil414
        </a>
      </p>
      <p className='info'>
        <a href='https://www.linkedin.com/in/amber-wilson-255272217/'>
          LinkedIn
        </a>
      </p>

      <div className='row justify-content-center'>
        <MDBCard className='contact-card' onSubmit={handleSubmit}>
          <div className='form-outline mb-4'>
            <MDBInput
              type='text'
              placeholder='Your name'
              value={status.name}
              name='text'
              className='contact-input'
              // onChange={handleChange}
            ></MDBInput>
          </div>
          <div className='form-outline mb-4'>
            <MDBInput
              type='email'
              placeholder='Email address'
              value={status.email}
              name='text'
              className='contact-input'
              // onChange={handleChange}
            ></MDBInput>
          </div>
          <div className='form-outline mb-4'>
            <MDBTextArea
              rows='4'
              type='text'
              placeholder='Message'
              value={status.message}
              name='text'
              className='contact-input'
              // onChange={handleChange}>
            ></MDBTextArea>
          </div>

          <MDBBtn type='submit' className='mb-4' block>
            {setStatus} Send
          </MDBBtn>
        </MDBCard>
      </div>
    </div>
  );
}
