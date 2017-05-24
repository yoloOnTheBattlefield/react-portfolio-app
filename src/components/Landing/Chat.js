import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

const messages = [
  'Hey there!',
  'I always learn something new',
  'My current stack is made of React and Redux',
  'Right now I work on backend technologies',
  'Node, Express and Mongo are my favourite',
  'If you have any questions you can contact me here'
];


class Item extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showMessage: false
    }
  }

  timeout(){
    if(!this.state.showMessage){
      setTimeout(() => {
        this.setState({
          showMessage: true
        })
      }, 1000)
    }
  }

  componentDidMount(){
    this.timeout();
  }



  render(){
    const { key, message } = this.props;
    const { showMessage } = this.state;
      return (
          <li className='Chat__message' key={key}>
            <span>{ showMessage ? message : 'loading' }</span>
          </li>
      )
  }
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
        });
      }, 2000 * index)
    });
  }


  componentDidMount(){
    this.addMessages(messages);
  }

  render(){
    const messages = this.state.messages.map((message, key) => {
      return <Item key={message} message={message} />
    });
    return(
      <div className='Content__chat'>
        <ul className='Chat__list'>
          <CSSTransitionGroup
            transitionName='Chat__animation'
            transitionEnterTimeout={100}
          >
            {messages}
          </CSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

export default Chat;
