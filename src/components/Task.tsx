import React from 'react';
import { Card } from 'react-bootstrap';
import { Task } from '../domain/task';
import './Task.styles.css';

export const TaskComponent = ({ task }: { task: Task }) => {
  return (
    <Card className={'Task'}>
      <Card.Header>{task.priority}</Card.Header>
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{task.status}</Card.Subtitle>
        <Card.Text>{task.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}