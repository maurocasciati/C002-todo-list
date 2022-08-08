import React from 'react';
import { Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { TaskListComponent } from './components/TaskList';

function App() {
  return (
    <Container className='p-5 mb-4 bg-light rounded-3'>
      <TaskListComponent/>
    </Container>
  );
}

export default App;
