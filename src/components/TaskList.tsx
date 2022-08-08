import React, { useEffect, useState } from 'react';
import { Task } from '../domain/task';
import { Col, FloatingLabel, Form, ListGroup, Row } from 'react-bootstrap';
import { TaskComponent } from './TaskItem';
import './TaskList.styles.css';
import { TaskDetailsComponent } from './TaskDetails';
import { mockData } from '../utils/mocks';

export const TaskListComponent = () => {
  const [taskList, setTaskList] = useState<Task[]>(mockData);
  const [filteredTaskList, setFilteredTaskList] = useState<Task[]>();
  const [titleFilter, setTitleFilter] = useState<string>();
  const [priorityFilter, setPriorityFilter] = useState<string>();
  const [statusFilter, setStatusFilter] = useState<string>();

  const addNewTask = (newTask: Task) => setTaskList([ newTask, ...taskList ]);

  useEffect(() => {
    filterTasks();
  }, [taskList, statusFilter, priorityFilter, titleFilter]);
  
  const filterTasks = () => setFilteredTaskList(taskList.filter((task) =>
      (!statusFilter || task.status === statusFilter) &&
      (!priorityFilter || task.priority === priorityFilter) &&
      (!titleFilter || task.name.toLowerCase().includes(titleFilter.toLowerCase()))
    ));

  return (
    <>
      <TaskDetailsComponent create={addNewTask} />

      <Row className='Filters'>
        <FloatingLabel as={Col} md='6' controlId='formName' label='Name:'>
          <Form.Control type='text' value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel as={Col} md='3' controlId='formPriority' label='Priority:'>
          <Form.Select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <option value={undefined}></option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel as={Col} md='3' controlId='formStatus' label='Status:'>
        <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value={undefined}></option>
            <option value='new'>New</option>
            <option value='inprogress'>In progress</option>
            <option value='done'>Done</option>
          </Form.Select>
        </FloatingLabel>
      </Row>

      <ListGroup className={'List'}>
        { filteredTaskList && filteredTaskList.map((task, index) => 
          <ListGroup.Item action key={index}><TaskComponent task={task}/></ListGroup.Item>
        )}
      </ListGroup>
    </>
  );
}