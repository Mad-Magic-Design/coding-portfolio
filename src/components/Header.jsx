import Resume from '../Resume.pdf';

export default function Header () {

    const lineOne = '{Live to Love}'
    const lineTwo = '{Love to Code}'
    const lineThree = '{Code to Live}'
    return (
        <div className="container">
            <div className="row">
                <h1>Brian Looney</h1>
            </div>
            <div className="row flex-column">
                <p>{lineOne}</p>
                <p>{lineTwo}</p>
                <p>{lineThree}</p>
            </div>
            <div className="row">
                <a href={Resume}>
                    <button type='button' className="btn btn-outline-green">Resume</button>
                </a>
                <button type='button' className="btn btn-outline-green selectable">madmagicdesign@gmail.com</button>
                <button type='button' className="btn btn-outline-green selectable">250-870-6735</button>
            </div>
        </div>
)

        /*<p>"I am passionate about beautifully 
                    functional design and eliquently perfromant code. 
                    I love to build apps that inform and inspire. I love to form comunity and postive interpersonal relationships.
                    I love to learn and I learn to love."</p>*/
}