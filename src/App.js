// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



const authors = {
  Max: "Max",
  BOT: "BOT"
}

function Message(props) {
  return <p>{props.author}-{props.text}</p>
}


function App() {
  const [chats, setChats] = React.useState([
    { id: 'chat1', name: 'Chat 1' },
    { id: 'chat2', name: 'Chat 2' },
    { id: 'chat3', name: 'Chat 3' },
  ])

  const [currentChat, setCurrentChat] = React.useState(chats[0])
  const changeChat = (chat) => setCurrentChat(chat)

  const [messageList, setMessageList] = React.useState([])

  const [inputValue, setInputValue] = React.useState('')


  React.useEffect(
    () => {
      if (
        messageList.length && messageList[messageList.length - 1].author !== authors.BOT
      ) {
        setTimeout(() => {
          setMessageList(currentMessageList => ([...currentMessageList, { author: authors.BOT, text: "Hello Friend" }]))
        }, 1500)
      }
    }
  )

  const changeFunc = (e) => {
    setInputValue(e.target.value)
  }

  const messageSub = (e) => {
    e.preventDefault()
    setMessageList(currentMessageList => ([...currentMessageList, { author: authors.Max, text: inputValue }]))
    setInputValue('')
  }

  return (
    <div className="App">

      <div>
        <List>
          {chats.map((chat) =>
            <ListItem button
              key={chat.id}
              selected={chat.id === currentChat.id}
              onClick={() => changeChat(chat)} />
          )}
        </List>
      </div>





      {messageList.map((message, index) => (
        <Message key={index} text={message.text} author={message.author} />
      ))}



      <form className="formR" onSubmit={messageSub}>
        <TextField
          autoFocus
          required
          fullWidth
          className="input"
          placeholder="Enter your message"
          label="Сообщение"
          value={inputValue}
          onChange={changeFunc} />

        <button>Submit</button>
      </form>

    </div>
  )
}

export default App;
