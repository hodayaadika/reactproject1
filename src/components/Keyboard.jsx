function Keyboard(props) {
  return (
    <>
      <button onClick={() => props.displayText(props.thisChar)}>
        {props.thisChar}
      </button>
    </>
  );
}
export default Keyboard;
