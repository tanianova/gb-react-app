import {
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

const ChatList = ({ chatList }) => {
  return (
    <List className="list">
      {chatList.map((item) => (
        <ListItem className="list-item" key={item.id}>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            className="list-item__text"
          ></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
