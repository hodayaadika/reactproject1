function StyleChar(props){

    return(
        <>
        <h2>choose font size:</h2>
        <button onClick={()=>props.changeFont(100)}>bigger font</button>
        <button onClick={()=>props.changeFont(20)}>smaller font</button>
        <h2>choose font color:</h2>
      </>
    )
}
export default StyleChar;