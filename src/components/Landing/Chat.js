import React from 'react';
import { TransitionMotion } from 'react-motion';

const messages = [
  'Hey there!',
  'I always learn something new',
  'My current stack is made of React and Redux',
  'Right now I work on backend technologies',
  'Node, Express and Mongo are my favourite',
  'If you have any questions you can contact me here'
];

const Item = ({key, message}) => {
  return <li className='Chat__message' key={key}><span>{message}</span></li>
}

class Chat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messages: [],
    }
  }

  addMessages(arr){
    arr.forEach((message, index) => {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat(message)
        })
      }, 2000 * index)
    });
  }

  willEnter(){
    return{
      width: '100%'
    }
  }

  componentDidMount(){
    this.addMessages(messages);
  }

  render(){
    const { messages } = this.state;
    return(
      <div className='Content__chat'>
        <ul className='Chat__list'>
          {
            messages.map((message, key) => {
              return <Item key={key} message={message} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default Chat;
