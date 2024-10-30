function EditKey(props) {
  return (
    <>
      <button>delete</button>
      <button>space</button>
      <button onClick={() => props.ChangePosition("upper")}>upper Case</button>
      <button onClick={() => props.ChangePosition("lower")}>lower Case</button>
    </>
  );
}
export default EditKey;
