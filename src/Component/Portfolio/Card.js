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
            <div className='img portfolio__card'>
                <img src={props.image} alt='' onClick={toggleModal} />
            </div>
            <div className='category d_flex'>
                <span onClick={toggleModal} className='portfolio__title'>{props.category}</span>
                <label>
                    <i className='far fa-heart portfolio__heart'></i>{props.totalLike}
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
                        <p>{props.desc}</p>
                        <p></p>
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