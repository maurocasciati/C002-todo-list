import { Task } from "../domain/task";

export const mockData: Task[] = [
  {
    name: 'Terminar maquetado del TODO List',
    description: 'Seguir codificando el maquetado de la aplicación react para avanzar con el resto de los requerimientos del ejercicio de COR',
    status: 'done',
    priority: 'high',
  },
  {
    name: 'Agregar formulario para crear tarea',
    description: 'Agregar nuevo componente para crear una tarea nueva desde la UI',
    status: 'done',
    priority: 'high',
  },
  {
    name: 'Agregar validaciones de formulario',
    description: 'Usar react hook form para validar los datos ingresados al crear una tarea',
    status: 'done',
    priority: 'low',
  },
  {
    name: 'Agregar filtros en listado',
    description: 'Agregar inputs en el componente de lista de tareas para filtrar por los distintos campos',
    status: 'done',
    priority: 'high',
  },
  {
    name: 'Agregar Router',
    description: 'Agregar react router para cambiar entre listado, detalle de tarea y crear tarea nueva',
    status: 'inprogress',
    priority: 'medium',
  },
  {
    name: 'Agregar Redux',
    description: 'Usar redux para manejar estado global de tareas y modificarlo al crear una nueva tarea o actualizar el estado de una existente',
    status: 'inprogress',
    priority: 'medium',
  },
  {
    name: 'Mejorar UI',
    description: 'Cambiar estilos para hacer la UI mas atractiva',
    status: 'new',
    priority: 'low',
  },
  {
    name: 'Agregar UTs',
    description: 'Agregar tests unitarios en los distintos componentes para cubrir su funcionamiento',
    status: 'new',
    priority: 'medium',
  },
]
