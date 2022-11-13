import React, { useState } from 'react';
import './Portfolio.css';

const Card = (props) => {
    const [modal, setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!modal);
    }

  return (
    <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} alt='' onClick={toggleModal} />
            </div>
            <div className='category d_flex'>
                <span onClick={toggleModal}>{props.category}</span>
                <label>
                    <i className='far fa-heart'></i>{props.totalLike}
                </label>
            </div>
            <div className='title'>
                <h2 onClick={toggleModal}>{props.title}</h2>
                <a href='#popup' className='arrow' onClick={toggleModal} >
                    <i className='fas fa-arrow-right'></i> 
                </a>
            </div>
        </div>

        {/* POPUP MODAL */}
        {modal && (
            <div className='modal'>
                <div onClick={toggleModal} className='overlay'></div>
                <div className='modal-content d_flex' >
                    <div className='modal-img left'>
                        <img src={props.image} alt='' />
                    </div>
                    <div className='modal-text right'>
                        <span>Featured - Design</span>
                        <h1>{props.title}</h1>
                        <p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.</p>
                        <p>What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries.</p>
                        <div className='button f_flex mtop'>
                            <button className='btn_shadow'>
                                Like this <i className='far fa-thumbs-up'></i>
                            </button>
                            <a href={props.projectUrl} target="_blank" rel='noreferrer'>
                            <button className='btn_shadow' >
                                View on Web <i className='fas fa-chevron-right'></i>
                            </button>
                            </a>
                        </div>
                        <button className='close-modal btn_shadow' onClick={toggleModal}>
                            <i className='fas fa-times'></i>
                        </button>
                    </div>
                </div>
            </div>
        ) }
    </>
  )
}

export default Card;