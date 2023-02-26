import './collab.scss'
import Message  from './images/message.svg'

function Collaboration() {

    const Scroll =()=> {
        var Scroll = document.getElementById("contact-section");
        Scroll.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }

    return(
        <section className='collab-section'>
            <div className='collab-wrapper'>
                <h1>Interested in collaborating with me?</h1>
                <p>If you're interested click on the link below, Let's Connect!</p>
                <button id='btn-collab' onClick={Scroll}><img src={Message} className="msg-icon"/> Start a conversation </button>
            </div>
        </section>
    )
}

export default Collaboration