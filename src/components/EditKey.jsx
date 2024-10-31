function EditKey(props) {
  return (
    <>
    <button onClick={() => props.ChangePosition("upper")}>upper Case</button>
      <button onClick={() => props.ChangePosition("lower")}>lower Case</button>
   <br />
     <button onClick={()=>props.deleteChar()}>delete</button>
      <button onClick={()=>props.space()}>space</button>
      <button onClick={()=>props.reset()}>reset</button>
      <br />
      
       </>
  );
}
export default EditKey;
