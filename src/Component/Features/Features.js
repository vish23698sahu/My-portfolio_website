import React from 'react';
import Card from './Card';
import data from './FeaturesApi';
import './Features.css';


const Features = () => {
  return (
    <div>
        <section className='features top' id='features'>
            <div className='container'>
                <div className='heading'>
                    <h4>Features</h4>
                    <h1>Few of my Works</h1>
                </div>

                <div className='content grid'>
                    {
                        data.map((val, index) => {
                            return <Card key={index} classes={val.classes} title={val.title} desc={val.desc} />
                        })
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Features;
