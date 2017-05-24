import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Header, Title, Code } from './Code.style';

const signup = require('../../assets/work/signup.png')
const creditcard = require('../../assets/work/creditcard.png')

const navbar = require('../../assets/work/navbar.png')
const buttons = require('../../assets/work/buttons.png')
const form = require('../../assets/work/form.png')

const animation = require('../../assets/work/animation.png')
const light = require('../../assets/work/light.png')
const clock = require('../../assets/work/clock.png')

export default () => {
  return(
    <Code>
      <Header>Code</Header>
      <Title>React</Title>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column>
            <Image src={signup} />
          </Grid.Column>
          <Grid.Column>
            <Image src={creditcard} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={3} stackable>
        <Grid.Column>
          <Image src={navbar} />
        </Grid.Column>
        <Grid.Column>
          <Image src={buttons} />
        </Grid.Column>
        <Grid.Column>
          <Image src={form} />
        </Grid.Column>
      </Grid>
      <Title>CSS Studies</Title>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Image src={animation} />
          </Grid.Column>
          <Grid.Column>
            <Image src={light} />
          </Grid.Column>
          <Grid.Column>
            <Image src={clock} />
          </Grid.Column>
        </Grid>
    </Code>
  )
}
