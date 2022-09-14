import LocalSceneIMG from '../imgs/LocalScene.png'


export default function LocalScene(){
    return(
        <div className="info-wrapper">  
                <h2 className="info-header">Local Scene</h2>
                <div className="info-body">
                    <p>Local Scene is a demo app for a local arts and event calender</p>
                    <div className="row d-flex justify-content-around">
                        <div className='features'>
                            <h5>App Features</h5>
                            <ul>
                                <li>Dynamic Page using PHP</li>
                                <li>Database Using phpMyAdmin</li>
                                <li>Neomorphism CSS Animations</li>
                            </ul>
                        </div>
                        <img src={LocalSceneIMG} alt="" className="img-fluid portfolio-img" />
                    </div>
                        <div>
                            <a href="http://gintracker.madmagic.art"><button>Local Scene</button></a>
                            <a href="https://github.com/Mad-Magic-Design/local_scene_php"><button>Github</button></a>
                        </div>
                </div>
        </div>
    )
}