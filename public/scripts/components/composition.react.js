function Welcome(props) {
    return <h1>{props.name}</h1>
  }
  
  function App(props) {
    return (
      <div>
        <h1>This is the usage of JSX Templates</h1>
        <Welcome name="Mayank" />
        <Welcome name="Meha" />
     </div>
    );
  }
  
  ReactDOM.render(
    <App name="Mayank" />,
    document.getElementById("reactBootstrap")
  )