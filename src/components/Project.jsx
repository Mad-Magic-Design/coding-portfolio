

export default function Project(props){
     const data = props.data

    return(
        <div className="info-wrapper">  
        <h2 className="info-header">{data.title}</h2>
        <div className="info-body">
                    <p>{data.description}</p>
                    <div className="row d-flex justify-content-around">
                        <div className='features'>
                            <h5>App Features</h5>
                            <ul>
                                {data.features.map(feature=>
                                <li>{feature}</li>)}
                            </ul>
                        </div>
                        <img src={props.image} alt="" className="img-fluid portfolio-img" />
                    </div>
                        <div>
                            <a href={data.link}><button>{data.title}</button></a>
                            <a href={data.github}><button>Github</button></a>
                        </div>
                </div>
        </div>
    )
}