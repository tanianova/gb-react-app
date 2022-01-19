import { useEffect, useState } from "react";
import SendMessageForm from "./components/SendMessageForm";
import SendMessageList from "./components/SendMessageList";

import Title from "./components/Title";
import "./styles/app.scss";

const App = () => {
  const text = "Messenger";
  const [messagesList, setMessagesList] = useState([]);

  const sendMessage = (message, author) => {
    const newMessage = {
      message,
      author: author,
    };
    if (message) {
      setMessagesList((state) => [...state, newMessage]);
    }
  };

  useEffect(() => {
    let autoAnswerTimer;
     
    if (
      messagesList.length > 0 &&
      messagesList[messagesList.length - 1].author === "me"
    ) {
      autoAnswerTimer = setTimeout(() => {
        sendMessage("автоматическое сообщение", "bot");
      }, 2000);
    }
    return () => clearInterval(autoAnswerTimer);
  }, [messagesList]);

  return (
    <div className="App">
      <Title text={text} />
      <SendMessageForm sendMessage={sendMessage} />
      <SendMessageList messages={messagesList} />
    </div>
  );
};

export default App;

