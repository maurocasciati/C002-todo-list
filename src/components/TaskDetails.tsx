import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { Task } from '../domain/task';

export const TaskDetailsComponent = ({ create }: { create: (task: Task) => void }) => {
  const {control, handleSubmit, reset, formState: {errors}} = useForm<Task>({
    defaultValues: {
      name: '',
      description: '',
      priority: '',
      status: '',
    }
  });

  const onSubmit = async (taskData: Task) => {
    create(taskData);
    reset();
  };

  return (
    <Container className='p-5 mb-4 bg-light rounded-3'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className='mb-3'>
          <FloatingLabel as={Col} md='6' controlId='formName' label='Task title:'>
            <Controller
              control={control}
              rules={{ required: true }}
              name='name'
              render={({ field: { onChange, value } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  isInvalid={!!errors.name}
                />
              )}
            />
            <Form.Control.Feedback type='invalid'>Please enter the task name.</Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel as={Col} md='3' controlId='formPriority' label='Priority:'>
            <Controller
              control={control}
              rules={{ required: true }}
              name='priority'
              render={({ field: { onChange, value } }) => (
                <Form.Select
                  value={value}
                  onChange={onChange}
                  isInvalid={!!errors.priority}
                >
                  <option></option>
                  <option value='low'>Low</option>
                  <option value='medium'>Medium</option>
                  <option value='high'>High</option>
                </Form.Select>
              )}
            />
            <Form.Control.Feedback type='invalid'>Please select.</Form.Control.Feedback>
          </FloatingLabel>

          <FloatingLabel as={Col} md='3' controlId='formStatus' label='Status:'>
            <Controller
              control={control}
              rules={{ required: true }}
              name='status'
              render={({ field: { onChange, value } }) => (
                <Form.Select
                  value={value}
                  onChange={onChange}
                  isInvalid={!!errors.status}
                >
                  <option></option>
                  <option value='new'>New</option>
                  <option value='inprogress'>In progress</option>
                  <option value='done'>Done</option>
                </Form.Select>
              )}
            />
            <Form.Control.Feedback type='invalid'>Please select.</Form.Control.Feedback>
          </FloatingLabel>
        </Row>

        <FloatingLabel controlId='formDescription' label='Description:'>
          <Controller
            control={control}
            rules={{ required: true }}
            name='description'
            render={({ field: { onChange, value } }) => (
              <Form.Control
                as='textarea'
                onChange={onChange}
                value={value}
                isInvalid={!!errors.description}
                style={{ height: '8rem' }}
              />)}
          />
          <Form.Control.Feedback type='invalid'>Please add a brief description.</Form.Control.Feedback>
        </FloatingLabel>
        
        <Button style={{ marginTop: '1rem' }} type='submit'>Create new task</Button>
      </Form>
    </Container>
  );
}