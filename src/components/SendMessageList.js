import { AUTHOR } from "../variables";
import PropTypes from "prop-types";

const SendMessageList = ({ messages = [] }) => {
  return (
    <ul className="message-container">
      {messages.map((message) => {
        const messageClassnames =
          message.author === AUTHOR.bot ? "message-answer" : "";
        return (
          <li key={message.id} className={`message-item ${messageClassnames}`}>
            <p className="message-author">{message.author}</p>
            <p className="message-text">{message.message}</p>
          </li>
        );
      })}
    </ul>
  );
};

SendMessageList.propTypes = {
  messagesList: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};
export default SendMessageList;
