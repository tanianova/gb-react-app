const SendMessageList = ({ messages }) => {
  return (
    <ul className="message-container">
      {messages.map((message, index) => {
        const messageClassnames = message.author === "bot" ? "message-answer" : "";
        return (
          <li key={index} className={`message-item ${messageClassnames}`}>
            <p className="message-author">{message.author}</p>
            <p className="message-text">{message.message}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SendMessageList;
