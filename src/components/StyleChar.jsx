
import Keyboard from "./Keyboard";
function StyleChar(props){
    const colors=["red","orange","yellow","green","blue","purple","black"];

    return(
        <>
       
        <h2>choose font size:</h2>
        <button onClick={()=>props.changeFont(100)}>bigger font size</button>
        <button onClick={()=>props.changeFont(20)}>smaller font size</button>
        <button onClick={()=>props.changeFont(50)}>normal font size</button>
        
        <h2>choose color:</h2>
        {colors.map(((item, i) => (
          <button onClick={()=>props.changeColor(item)} style={{backgroundColor:item}}></button>
        )))}
      </>
    )
}
export default StyleChar;