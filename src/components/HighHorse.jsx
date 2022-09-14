import HighHorseIMG from '../imgs/HighHorse.png'


export default function HighHorse(){
    return(
        <div className="info-wrapper">  
                <h2 className="info-header">High Horse</h2>
                <div className="info-body">
                    <p>Info page for my local band</p>
                    <div className="row d-flex justify-content-around">
                        <div className='features'>
                            <h5>App Features</h5>
                            <ul>
                                <li>Dynamic Styling using media queries</li>
                                <li>Custom Audio Player using<br/> Lottie/After Effects animation</li>
                                <li>SVG Animated Decoration</li>
                            </ul>
                        </div>
                        <img src={HighHorseIMG} alt="screenshot of High Horse Site" className="img-fluid portfolio-img" />
                    </div>
                        <div>
                            <a href="http://highhorse.madmagic.art"><button>High Horse</button></a>
                            <a href="https://github.com/Mad-Magic-Design/high-horse-band"><button>Github</button></a>
                        </div>
                </div>
        </div>
    )
}