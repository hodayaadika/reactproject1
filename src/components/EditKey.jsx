function EditKey(props) {
  return (
    <>
      <button onClick={() => props.ChangePosition("upper")}>upper Case</button>
      <button onClick={() => props.ChangePosition("lower")}>lower Case</button>
      <br />
      <button onClick={() => props.deleteChar()}>Delete</button>
      <button onClick={() => props.space()}>Space</button>
      <button onClick={() => props.reset()}>Reset</button>
      <button onClick={() => props.enter()}>Enter</button>
      <br />
    </>
  );
}
export default EditKey;
