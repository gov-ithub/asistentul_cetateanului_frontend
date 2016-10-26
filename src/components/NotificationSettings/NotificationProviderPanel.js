// @flow
import React, { Component } from 'react';
import {
  Panel,
  Col,
  Form,
  FormGroup,
  Button,
  Image,
} from 'react-bootstrap';

type NotificationProvider = {
  id: number,
  name: string,
  image: string,
  description: string
}

type Props = {
  provider: NotificationProvider
}

export default class NotificationProviderPanel extends Component {
  props: Props;

  subscribe(e) {
    e.preventDefault();
  }

  render() {
    const { name, image, description } = this.props.provider;
    return (
      <Panel header={name}>
        <Image src={image} responsive />
        <Form horizontal>
          <p>{description}</p>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button 
                type="submit" 
                onClick={this.subscribe.bind(this)}>
                Abonează-te
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}
