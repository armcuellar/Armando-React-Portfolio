import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
    }

    // JSX
    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form className='m-5' id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="form-control" type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email address:</label>
                    <input className="form-control" type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label className="form-label" htmlFor="message">Message:</label>
                    <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" utype="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;