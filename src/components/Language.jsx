function Language(props) {
  return (
    <>
      <button onClick={() => props.ChangeLanguage(props.en)}>English</button>
      <button onClick={() => props.ChangeLanguage(props.he)}>עברית</button>
    </>
  );
}

export default Language;
