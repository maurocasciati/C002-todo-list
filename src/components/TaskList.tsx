import React, { useState } from 'react';
import { Task } from '../domain/task';
import { ListGroup } from 'react-bootstrap';
import { TaskComponent } from './Task';
import './TaskList.styles.css';

const mockData: Task[] = [
  {
    name: 'Terminar maquetado del TODO List',
    description: 'Seguir codificando la aplicación react para terminar el requerimiento de COR',
    status: 'en proceso',
    priority: 'alta',
  },
  {
    name: 'Agregar pantalla para crear tarea',
    description: 'Agregar nuevo componente para crear una tarea nueva desde la UI',
    status: 'en proceso',
    priority: 'alta',
  },
  {
    name: 'Agregar Router',
    description: 'Agregar react router para cambiar entre listado, detalle de tarea y crear tarea nueva',
    status: 'nueva',
    priority: 'media',
  },
  {
    name: 'Agregar Redux',
    description: 'Usar redux para manejar estado global de tareas y modificarlo al crear una nueva tarea o actualizar el estado de una existente',
    status: 'nueva',
    priority: 'media',
  },
  {
    name: 'Agregar calidaciones de formulario',
    description: 'Usar react hook form para validar los datos ingresados al crear una tarea',
    status: 'nueva',
    priority: 'media',
  }
]

export const TaskListComponent = () => {
  const [taskList, setTaskList] = useState<Task[]>(mockData);

  return (
    <ListGroup className={'List'}>
      { taskList && taskList.map((task, index) => 
        <ListGroup.Item action key={index}><TaskComponent task={task}/></ListGroup.Item>
      )}
    </ListGroup>
  );
}