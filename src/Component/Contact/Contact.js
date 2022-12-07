import React, { useState } from 'react';
import './Contact.css';
import ResumePDF from './medias/Vishakha.pdf';

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
    });
    const InputEvent = (event) => {
        const { name, value } = event.target
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault();

        if (data.fullname === '' || data.phone === '' || data.email === '' || data.subject === '' || data.message === '') {
            alert(
                "Please enter valid data to submit form"
            )
        }

        else
            alert(`
            Name: ${data.fullname}.
            Phone: ${data.phone}.
            Email: ${data.email}.
            Subject: ${data.subject}.
            Message: ${data.message}.
        `)
    }

    return (
        <div>
            <section className='Contact' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>Contact Me</h4>
                        <h1>Get In Touch !</h1>
                    </div>

                    <div className='content d_flex'>
                        <div className='left'>
                            <div className='box box_shadow'>
                                <div className='img'>
                                    <img src='https://tse3.mm.bing.net/th?id=OIP.8sJyH-4awpaExIPf1rGlvAHaDl&pid=Api&P=0' alt='' />
                                </div>
                                <div className='details'>
                                    <h1>Vishakha Sahu</h1>
                                    <p>Enjoy connecting to new people and share valuable thoughts </p>
                                </div>
                                <span>Let's Catch Up !</span>
                                <div className='button f-flex'>
                                    <button className='btn_shadow'>
                                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                                            <i className='fab fa-facebook-f'></i>
                                        </a>
                                    </button>
                                    <button className='btn_shadow'>
                                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                                            <i className='fab fa-instagram'></i>
                                        </a>
                                    </button>
                                    <button className='btn_shadow'>
                                        <a href='https://twitter.com/?lang=en-in' target='_blank' rel='noreferrer'>
                                            <i className='fab fa-twitter'></i>
                                        </a>
                                    </button>
                                </div>
                                <a href={ResumePDF} download class="btn btn-resume">Download Resume</a>
                            </div>
                        </div>

                        <div className='right box_shadow'>
                            <form onSubmit={formSubmit}>
                                <div className=''>
                                    <div className='input row'>
                                        <span>YOUR NAME</span>
                                        <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                                    </div>
                                    <div className='input row'>
                                        <span>YOUR NUMBER</span>
                                        <input type='phone' name='phone' value={data.phone} onChange={InputEvent} />
                                    </div>
                                    <div className='input'>
                                        <span>EMAIL</span>
                                        <input type='email' name='email' value={data.email} onChange={InputEvent} />
                                    </div>
                                    <div className='input'>
                                        <span>SUBJECT</span>
                                        <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                                    </div>
                                    <div className='input'>
                                        <span>YOUR MESSAGE</span>
                                        <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                                    </div>
                                    <button className='btn_shadow'>
                                        SEND MESSAGE <i className='fa fa-long-arrow-down'></i>
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;