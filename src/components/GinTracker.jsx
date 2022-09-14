import GinMenu from '../imgs/GinHome.png'


export default function GinTracker(){
    return(
        <div className="info-wrapper">  
        <h2 className="info-header">Gin Tracker</h2>
        <div className="info-body">
                    <p>Gin Score Tracker is a web app used to keep track of the score in a game of Gin Rummy. Once the game is over, the winner and the score are saved so that the players can keep a running tally of who is domianted in thier overall games of Gin Rummy</p>
                    <div className="row d-flex justify-content-around">
                        <div className='features'>
                            <h5>App Features</h5>
                            <ul>
                                <li>React</li>
                                <li>Firebase Auth</li>
                                <li>Firestore Database</li>
                                <li>After Effects Animation</li>
                            </ul>
                        </div>
                        <img src={GinMenu} alt="" className="img-fluid portfolio-img" />
                    </div>
                        <div>
                            <a href="http://gintracker.madmagic.art"><button>Gin Score Tracker</button></a>
                            <a href="https://github.com/Mad-Magic-Design/ginscoretracker"><button>Github</button></a>
                        </div>
                </div>
        </div>
    )
}