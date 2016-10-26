// @flow
import React, { Component } from 'react';
import {
  Panel,
  Col,
  Form,
  FormGroup,
  Checkbox,
  Button,
  Image,
} from 'react-bootstrap';

type NotificationType = {
  id: number,
  name: string
}

type NotificationSource = {
  id: number,
  name: string,
  image: string,
  types: Array<NotificationType>
}

type Props = {
  source: NotificationSource
}

export default class EditNotificationSourcePanel extends Component {
  props: Props;

  unsubscribe(e) {
    e.preventDefault();
  }

  render() {
    const { name, image, types } = this.props.source;

    let options = [];
    for (let i = 0, len = types.length; i < len; i++) {
      const type = types[i];
      options.push(
        <Checkbox 
          key={'NotificationSource-' + type.id + '-' + i}>
          {type.name}
        </Checkbox>
      );
    }
    
    return (
      <Panel header={name}>
        <Image src={image} responsive />
        <Form horizontal>
          <FormGroup controlId="tip">
            <Col smOffset={2} sm={10}>
              {options}
            </Col> 
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button 
                type="submit" 
                onClick={this.unsubscribe.bind(this)}>
                Dezabonează-te
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Panel>
    );
  }
}
