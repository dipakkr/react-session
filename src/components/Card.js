function Card(props){
    return(
        <>
            <div style={{border : '1px solid red'}}>
                <img src={''} /> 

                <h3> {props.data.v_model_name} </h3>

                <p> Price  </p>

            </div>
        </>
    )
}

export default Card;