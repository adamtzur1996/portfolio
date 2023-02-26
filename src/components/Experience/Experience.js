import React, { useState } from 'react';
import './exp.scss';

const Details = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <React.Fragment>
        <div className='job'>
          <h3 className='job-title' onClick={toggle}>{isOpen ? true : false}{data.company} </h3>
          {isOpen && (
            <div className='description'>
              <p className='position'>{data.position}</p>
              <p className='job-duration'>{data.duration}</p>
              <p>{data.description}</p>
              {data.projectList && data.projectList.length > 0 && (
                <ul className='projects-list'>
                  {data.projectList.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              )}
              {data.link && (
                <a target="_blank" href={data.link}>Learn more</a>
              )}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  };

function Experience() {
    const details = [
        {
            company: 'Freelance Software Developer',
            position: 'Self-employed',
            duration: '2019 - Currently Working',
            description: 'Designed and developed websites for small businesses and worked as a hired professional for short durations for companies looking for specific skills sets. Tools I currently use to develop websites are as follows: ReactJS or NextJS with either TailwindCSS or Sass for frontend, domain and hosting done either with GoDaddy or Firebase depending on clients requirements and budget. Usage of free tier Amazon S3 for image storage and Photoshop to increase quality of images.',
            projectList: [
                'Back2thebody.com'
            ]
        },
        {
            company: 'Turtlemint',
            link : 'https://www.turtlemint.com/',
            position: 'Software Engineer',
            duration: '2023 - Currently Working',
            description: 'Working as a Fullstack Developer. Turtlemint is a product based company, I am currently working on one of their inhouse Software Applications called Mintpro.'
        },
        {
            company: 'Ajency.in',
            link: 'https://ajency.in/',
            position: 'Frontend Developer',
            duration: 'January 2022 - January 31st 2023',
            description: 'Developing and designing websites for ecommerce websites. Revamping of large ReactJS based projects to NextJS. Usage of click stream events and analytics for ecommerce projects.',
            projectList: [
                'Truebasics',
                'HKVitals',
                'Healthkart',
                'Muscleblaze'
            ]
        },
        {
            company: 'Remote Software Solutions Pvt. Ltd.',
            link: 'https://www.remotesoftwaresolutions.com/',
            position: 'Junior Software Developer / Fullstack Developer',
            duration: 'February 2021 - November 2021',
            description: 'Developing and designing websites for ecommerce websites.Revamping of large ReactJS based projects to NextJS.Usage of click stream events and analytics for ecommerce projects',
            projectList: [
                'Straive.com'
            ]
        },
        {
            company: 'Shunya.ek',
            link: 'https://www.instagram.com/shunya.ek',
            position: 'AppScript Developer (Internship)',
            duration: 'September 2019 - December 2019',
            description: 'Internship project. Worked with Google AppScript and connected Google Apps to Google Spreadsheet, development of a central base to use and create a one of a kind software providing multidisciplinary platform, connecting people through content, community, and convergence to provide optimized solutions for advertising, film and event industry.'
        }
      ];

    return(
        <section className='experience-container' id='works'>
        <div className='inner-container'>
            <div className='left-side'>
                <div className='pill-shape'></div>
                <div className='heading'>
                    <h1>Work Experience</h1>
                    <p>PREVIOUS JOBS</p>
                </div>
            </div> 
            <div className='right-side'>
            {details.map((detail, index) => (
                <Details key={index} data={detail} />
            ))}
            </div>
        </div>
        </section>
    )
}

export default Experience;