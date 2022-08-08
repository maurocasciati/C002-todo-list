import React, { useEffect, useState } from 'react';
import { Task } from '../domain/task';
import { Col, Container, FloatingLabel, Form, FormLabel, ListGroup, Row } from 'react-bootstrap';
import { TaskComponent } from './TaskItem';
import { TaskDetailsComponent } from './TaskDetails';
import { mockData } from '../utils/mocks';

export const TaskListComponent = () => {
  const [taskList, setTaskList] = useState<Task[]>(mockData);
  const [filteredTaskList, setFilteredTaskList] = useState<Task[]>();
  const [titleFilter, setTitleFilter] = useState<string>();
  const [priorityFilter, setPriorityFilter] = useState<string>();
  const [statusFilter, setStatusFilter] = useState<string>();

  const addNewTask = (newTask: Task) => setTaskList([ newTask, ...taskList ]);
  const updateTask = (updatedTask: Task) =>
    setTaskList(taskList.map((task) => task.name === updatedTask.name ? updatedTask : task));
  const deleteTask = (taskToDelete: Task) =>
    setTaskList(taskList.filter((task) => task.name !== taskToDelete.name));

  useEffect(() => {
    filterTasks();
  }, [taskList, statusFilter, priorityFilter, titleFilter]);
  
  const filterTasks = () => setFilteredTaskList(taskList.filter((task) =>
      (!statusFilter || task.status === statusFilter) &&
      (!priorityFilter || task.priority === priorityFilter) &&
      (!titleFilter || task.name.toLowerCase().includes(titleFilter.toLowerCase()))
    ));

  return (
    <Container className='p-5 mb-4 bg-light rounded-3'>
      <TaskDetailsComponent create={addNewTask} />

      <Row className='p-1 mb-4 bg-light rounded-3'>
        <FloatingLabel as={Col} md='6' controlId='formName' label='Filter by name:'>
          <Form.Control type='text' value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)}/>
        </FloatingLabel>

        <FloatingLabel as={Col} md='3' controlId='formPriority' label='Filter by priority:'>
          <Form.Select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <option value={undefined}></option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel as={Col} md='3' controlId='formStatus' label='Filter by status:'>
        <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value={undefined}></option>
            <option value='new'>New</option>
            <option value='inprogress'>In progress</option>
            <option value='done'>Done</option>
          </Form.Select>
        </FloatingLabel>
      </Row>

      <ListGroup className={'p-1 mb-4 bg-light rounded-3'}>
        { filteredTaskList && filteredTaskList.map((task, index) => 
          <ListGroup.Item action key={index}>
            <TaskComponent task={task} update={updateTask} updateDelete={deleteTask}/>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Container>
  );
}