import { useCallback, useState, useRef, useEffect } from "react";
import { TextField, Button, FormGroup } from "@material-ui/core";
import PropTypes from "prop-types";

import { AUTHOR } from "../variables";

const SendMessageForm = ({ sendMessage }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    sendMessage(value, AUTHOR.me);
    setValue(""); //очистка поля после ввода
    inputRef.current?.focus() //фокусировка на инпуте после отправки сообщения
  };

  return (
    <FormGroup row>
      <TextField
        style={{ width: "80%" }}
        inputRef={inputRef}
        id="outlined-basic"
        label="Cообщение"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <Button
        style={{ width: "20%" }}
        aria-label="edit"
        variant="contained"
        color="primary"
        onClick={handleSend}
        onKeyPress={(e) => {
          if (e.key === " " || e.key === "Enter") {
            handleSend();
          }
        }}
      >
        Отправить
      </Button>
    </FormGroup>
  );
};

SendMessageForm.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default SendMessageForm;
