import React from 'react';
import Portfolio_data from './Portfolio_data';
import Card from './Card';
import './Portfolio.css';


const Portfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>VISTI MY PORTFOLIO AND DO SHARE YOUR VALUABLE FEEDBACK !</h4>
                    <h1>Few of my Work</h1>
                </div>

                <div className='content grid'>
                    {
                        Portfolio_data.map((val, index) => {
                            return <Card key={index} projectUrl={val.projectUrl} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} />
                        })
                    }
                </div>

            </div>
        </section>
    </>
  )
}

export default Portfolio;