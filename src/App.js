import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { AUTHOR } from "./variables";
import SendMessageForm from "./components/SendMessageForm";
import SendMessageList from "./components/SendMessageList";
import ChatList from "./components/ChatList";
import Title from "./components/Title";
import "./styles/app.scss";


const App = () => {
  const text = "Messenger";
  const [messagesList, setMessagesList] = useState([]);
  const chatList = [
    { id: nanoid(), name: "John" },
    { id: nanoid(), name: "Jane" },
    { id: nanoid(), name: "Mark" },
  ];

  const sendMessage = (message, author) => {
    const newMessage = {
      id: nanoid(),
      message,
      author,
    };
    if (message) {
      setMessagesList((messagesList) => [...messagesList, newMessage]);
    }
  };

  useEffect(() => {
    let autoAnswerTimer;

    if (
      messagesList.length > 0 &&
      messagesList[messagesList.length - 1].author === AUTHOR.me
    ) {
      autoAnswerTimer = setTimeout(() => {
        sendMessage("автоматическое сообщение", "bot");
      }, 2000);
    }
    return () => clearInterval(autoAnswerTimer);
  }, [messagesList]);

  return (
    <div className="app">
      <Title text={text} />
      <div className="app-wrapper">
        <ChatList chatList={chatList} />
        <div className="messages-wrapper">
          <SendMessageList messages={messagesList} />
          <SendMessageForm sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
