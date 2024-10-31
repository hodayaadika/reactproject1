function Language(props) {
  return (
    <>
    <h2>choose language:</h2>
      <button onClick={() => props.ChangeLanguage(props.en)}>English</button>
      <button onClick={() => props.ChangeLanguage(props.he)}>עברית</button>
    </>
  );
}

export default Language;
