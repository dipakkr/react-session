function Header(props){
    

    console.log(props.data, 'HEADER');

    return(
      <>
        <h1> Header Component - {props.data} </h1>
      </>
    )
}

export default Header;

