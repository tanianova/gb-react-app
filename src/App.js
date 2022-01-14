import Message from "./components/Message";
import "./styles/app.scss";

function App() {
  const text = "Message";
  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;
