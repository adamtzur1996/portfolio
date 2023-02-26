import './about-me.scss'
import aboutMe from './images/about-me.png'
import React, { useState } from 'react';

function AboutMe () {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('AdamTzur.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF files
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AdamTzur.pdf';
                alink.click();
            })
        })
    }

    return (
        <section className='about-me-section' id='about-me'>
            <div className='main-container'>
                <div className='about-wrapper'>
                    <div class="about-me">
                        <h4>About me</h4>

                        <p>Software Engineer at <a href='https://www.turtlemint.com/' target="_blank" className='company-name'>Turtlemint</a></p>

                        <p>Experience in revamping large scale live projects from ReactJS to NextJS. <br />
                            Currently working on a project using ReactJS with TypeScript, NodeJS, MaterialUI and React Redux. 
                        </p>
                    
                        <hr />
                        <h4>TOP EXPERTISE</h4>
                        <p className='title'>Frontend Web Developer: 
                            <a onClick={onButtonClick} download>Download Resume</a> 
                        </p>

                        <div id="skills" className='skills'>
                            <ul>
                                <li>ReactJS</li>
                                <li>NextJS</li>
                                <li>JavaScript</li>
                                <li>NodeJS</li>
                            </ul>
                            <ul>
                                <li>Heroku</li>
                                <li>TailwindCSS</li>
                                <li>AWS (S3, EC2, Lightsail)</li>
                                <li>Firebase</li>
                            </ul>

                        </div>
                    </div>
                    <div class="social-links">
                        <img id="social_img" src={aboutMe} className="social-img" />
                        <h3> Follow me on GitHub to learn more! </h3>
                        <a target="_blank" href="https://github.com/adamtzur1996">GitHub: @adamtzur1996</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
