import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Task } from '../domain/task';

export const TaskComponent = ({ task, update, updateDelete }: { task: Task, update: (task: Task) => void, updateDelete: (task: Task) => void }) => {
  const changePriority = (event: any) => {
    update({
      ...task,
      priority: event.target.value
    });
  };

  const changeStatus = (event: any) => {
    update({
      ...task,
      status: event.target.value
    });
  };

  const deleteTask = () => updateDelete(task);

  return (
    <Card style={{ marginInline: '2rem' }}>
      <Card.Header>
        <Row>
          <Col>
            <Form.Select
              value={task.priority}
              onChange={changePriority}
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </Form.Select>
          </Col>
          <Col xs={6}/>
          <Col>
            <Form.Select
              value={task.status}
              onChange={changeStatus}
            >
              <option value='new'>New</option>
              <option value='inprogress'>In progress</option>
              <option value='done'>Done</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Button style={{float: 'right'}} variant='outline-danger' onClick={deleteTask}>Delete</Button>
      </Card.Body>
    </Card>
  );
}