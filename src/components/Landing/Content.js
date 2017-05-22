import React from 'react';
import { Grid, Container, Header, Image } from 'semantic-ui-react';
import Waypoint from 'react-waypoint';
import Chat from './Chat';
const avatar = require('../../assets/avatar.jpg');


class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showChat: false
    }

    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(){
    setTimeout(() => {
      this.setState({
        showChat: true
      })
    }, 500);
  }

  render(){
    const { showChat } = this.state;
    return (
      <Grid className='Content' divided='vertically' >
        <Header
          className='Content__header'
          as='h2'
          textAlign='center' content={'What I Do'}
        />
        <Waypoint onEnter={this.handleEnter} />
        <Grid.Row columns={2} >
          <Grid.Column>
            <Image
              src={avatar}
              shape='circular'
              size='small'
            />
          </Grid.Column>
          <Grid.Column>
            {
              this.state.showChat ? <Chat showChat={showChat}/> : <div />
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}


export default Content;
