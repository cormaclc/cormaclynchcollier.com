import React, { useState } from 'react';
import { InputField } from '../inputField/InputField';

// styles
import '../../../styles/wedding/base.scss';
import './RsvpContent.scss';

// 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/1eTsvaopONAcF7cVMir96_gZi8WJu7ZqXOqiB0TcT1gM/formResponse';

export const RSVPContent = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    
    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      // TODO: error handling...
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      // TODO: success messaging
      <div className='content-wrapper'>
        <h3>Thank you for your RSVP! 💕</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="content-wrapper">
      <InputField loading={loading} id="name" />

      <InputField loading={loading} id="welcomeParty" inputType='radio' />

      <InputField loading={loading} id="rsvp" inputType='radio' />

      <InputField loading={loading} id="dietaryRestrictions" inputType='textarea' />

      <InputField loading={loading} id="otherComments" inputType='textarea' />

      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send RSVP'}
      </button>
    </form>
  );
};