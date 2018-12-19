function Welcome(props) {
    return <h1>{props.name}</h1>
  }
  
  function App(props) {
    return (
      <div>
        <Welcome name="Mayank" />
        <Welcome name="Meha" />
     </div>
    );
  }
  
  ReactDOM.render(
    <App name="Mayank" />,
    document.getElementById("reactBootstrap")
  )