import IntrospectionIMG from '../imgs/Introspection.png'


export default function Introspection(){
    return(
        <div className="info-wrapper">  
                <h2 className="info-header">Daily Introspection</h2>
                <div className="info-body">
                    <p>Daily Introspection is a wellness app where the user takes a moment to have some introspection on how their day went, express graditude, and set good intentions for tomorrow</p>
                    <div className="row d-flex justify-content-around">
                        <div className='features'>
                            <h5>App Features</h5>
                            <ul>
                                <li>jQuery</li>
                                <li>Local Storage</li>
                            </ul>
                        </div>
                        <img src={IntrospectionIMG} alt="a screenshot of an introspection prayer card" className="img-fluid portfolio-img" />
                    </div>
                        <div>
                            <a href="http://introspection.madmagic.art"><button>Introspection</button></a>
                            <a href="https://github.com/Mad-Magic-Design/daily_introspection"><button>Github</button></a>
                        </div>
                </div>
        </div>
    )
}