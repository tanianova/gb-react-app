import { useState } from "react";

const SendMessageForm = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const author = "me";

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(inputValue, author);
    setInputValue("");
  };

  return (
    <form action="" className="send-message-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Введите сообщение"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="button" type="submit">
        Отправить
      </button>
    </form>
  );
};

export default SendMessageForm;
