import React, { useState } from 'react';
import '../Portfolio/Portfolio.css';


const Card = (props) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [comment, setComment] = useState('');

    const toggleModal = ()=>{
        setModal(!modal);
    }

    const onSubmitClick=(event)=>{
        event.preventDefault();
        if(name === '' || email==='' || comment==='' ){
            alert('Please enter valid Reply');
            return;
        }
        alert('Thanks for your response, will contact you asap');
        setName('');
        setEmail('');
        setWebsite('');
        setComment('');
    }

  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} alt='' onClick={toggleModal} />
            </div>
            <div className='category d_flex'>
                <span onClick={toggleModal}>{props.date}</span>
            </div>
            <div className='title'>
                <h2 onClick={toggleModal}>{props.title_one}</h2>
                <a href='#popup' className='arrow' onClick={toggleModal} >
                    <i className='fas fa-arrow-right'></i> 
                </a>
            </div>
        </div>

        {/* POPUP MODAL */}
        {modal && (
            <div className='modal modal-blog'>
                <div onClick={toggleModal} className='overlay'></div>
                <div className='modal-content' >
                    <div className='modal-img left'>
                        <img src={props.image} alt='' />
                    </div>
                    <div className='modal-text right'>
                        <span>{props.date}</span>
                        <h1>{props.title_one}</h1>
                        <p>{props.desc_one}</p>
                        {/* <h1>{props.title_one}</h1> */}
                        <p>{props.desc_two}</p>
                        {/* <h1>{props.title_three}</h1> */}
                        <p>{props.desc_three}</p>
                        
                        <button className='close-modal btn_shadow' onClick={toggleModal}>
                            <i className='fas fa-times'></i>
                        </button>

                        <div className='contact mtop'>
                            <h1>Leave a reply</h1>
                            <form className='blog_contact d_flex'>
                                <div className='left'>
                                    <input type='text' placeholder='Name' value={name} onChange={(e) => {setName(e.target.value)}} />
                                    <input type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                                    <input type='text' placeholder='Website' value={website} onChange={(e) => {setWebsite(e.target.value)}} />
                                    <button className='btn_shadow' onClick={onSubmitClick}>Submit</button>
                                </div>
                                <div className='right'>
                                    <textarea cols='30' rows='12' placeholder='Comment' value={comment} onChange={(e) => {setComment(e.target.value)}} ></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        ) }
    </>
  )
}

export default Card;