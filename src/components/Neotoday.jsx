import NeoHome from '../imgs/Neotoday.png'

export default function Neotoday(){
    return(
        <div className="info-wrapper">  
                <h2 className="info-header">High Horse</h2>
                <div className="info-body">
                    <p>NEO Today uses a Nasa Open API to display the five closest Near Earth Objects passing by our planet today</p>
                    <div className="row d-flex justify-content-around">
                        <div className='features'>
                            <h5>App Features</h5>
                            <ul>
                                <li>React</li>
                                <li>Nasa Open Api</li>
                                <li>Custom SVG</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <img src={NeoHome} alt="" className="img-fluid portfolio-img" />
                    </div>
                    <div>
                            <a href="http://neotoday.madmagic.art"><button>NEO Today</button></a>
                            <a href="https://github.com/Mad-Magic-Design/NEO-today"><button>Github</button></a>
                        </div>
                </div>
        </div>
    )
}