// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import { Input } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { changeName } from './action/profile'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react';
import { ADD_MESSAGE, addMessage } from './HW/chats/actions';



// import Component from 'react';

// //Декораторы
// function sum(a, b) {
//   return a + b;
// }

// const withLogger = (func) => {
//   return function (...args) {
//     console.log({ args })
//     return func(...args)
//   }
// }

// sum(1, 4)

// const sumWithLogger = withLogger(sum)

// sumWithLogger(3, 5)

// //Конец

// //Контекст
// export const ChatContext = React.createContext({ ChatId: undefined })

// class ExampleClass extends React.Component {
//   static contextType = ChatContext
//   render() {
//     console.log({ context: this.context })
//     return <div>ExampleClass</div>
//   }
// }
// //Конец

// const withChatContext = (Component) => {
//   return (props) => {
//     const contextProps = useContext(ChatContext)

//     return <Component {...contextProps} {...props} />
//   }
// }

// const ChatWithContext = withChatContext(Chat)


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

  ///lesson 6

  const profileName = useSelector(state => state.profile.name);

  const renderMessage = useCallback((message, i) => (
    <div key={i}>
      <span>
        {message.author === authors.MAX ? profileName : message.author}:
      </span>
      <span>{message.text}</span>
    </div>
  ), [profileName]);

  ///////

  const [messageList, setMessageList] = React.useState([])

  const [inputValue, setInputValue] = React.useState('')


  // React.useEffect(
  //   () => {
  //     if (
  //       messageList.length && messageList[messageList.length - 1].author !== authors.BOT
  //     ) {
  //       setTimeout(() => {
  //         setMessageList(currentMessageList => ([...currentMessageList, { author: authors.BOT, text: "Hello Friend" }]))
  //       }, 1500)
  //     }
  //   }
  // )


  const middleware = store => next => (action) => {
    if (action.type === ADD_MESSAGE && action.message.author !== authors.BOT) {
      const botMessage = { text: "Hello Friend" }
      setTimeout(() => store.dispatch(addMessage(botMessage)), 1500);
    }

    return next(action)
  }






  const changeFunc = (e) => {
    setInputValue(e.target.value)
  }

  const messageSub = (e) => {
    e.preventDefault()
    setMessageList(currentMessageList => ([...currentMessageList, { author: authors.Max, text: inputValue }]))
    setInputValue('')
  }

  const dispatch = useDispatch()

  const { name, age } = useSelector(state => state.profile)

  const nameSubmit = (newName) => {
    dispatch(changeName(newName))
  }

  return (
    <>
      <div className="App">

        <div>
          <List>
            {chats.map((chat) =>
              <ListItem button
                key={chat.id}
                selected={chat.id === currentChat.id}
                onClick={() => changeChat(chat)} >
                {chat.name}
              </ListItem>
            )}
          </List>
        </div>


        {/* <div>
        <Chat />
      </div> */}


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
            onChange={changeFunc} >
          </TextField>
          <button>Submit</button>
        </form>
        {/* <ExampleClass /> */}

        {/* <Component /> */}

      </div>

      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
      {/* 
      <input placeholder="Name" />
      <input type={'button'} onSubmit={nameSubmit} value={"Push"} /> */}
      <Input onSubmit={nameSubmit} />
    </>



  )
}

export default App;
