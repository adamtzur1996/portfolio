import './education.scss'

function Education() {
    return (
        <section className='education-section'>
            <div className='left'>
                <div className='heading'>
                    <h3>Education</h3>
                    <h6>ACADEMIC CAREER</h6>
                </div>
            </div>
            <div className='right'>
                <div className='education-details'>
                    <div className='education'>
                        <h3>Bachelors of Computer Application</h3>
                        <h6>St. Xavier's College, Goa</h6>
                        <p>Graduated in May 2019 (3 Year Degree)</p>
                        <article>
                            BCA is a 3 year course:
                            The basic course curriculum of BCA, typically lays emphasis on database management systems, operating systems, software engineering, computer architecture, web technology and languages such as C, C++, HTML, Java etc.
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;