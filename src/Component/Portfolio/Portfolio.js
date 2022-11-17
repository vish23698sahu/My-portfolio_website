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
                    <h4>VISIT MY PORTFOLIO!</h4>
                    <h1>My Work</h1>
                </div>

                <div className='content grid'>
                    {
                        Portfolio_data.map((val, index) => {
                            return <Card key={index} projectUrl={val.projectUrl} image={val.image} category={val.category} totalLike={val.totalLike} title={val.title} desc={val.desc1} />
                        })
                    }
                </div>

            </div>
        </section>
    </>
  )
}

export default Portfolio;