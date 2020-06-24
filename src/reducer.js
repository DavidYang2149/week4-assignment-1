const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reduce = {
  updateTaskTitle: (state, { taskTitle }) => (taskTitle ? {
    ...state,
    taskTitle,
  } : state),

  addTask: (state) => (state.taskTitle ? {
    ...state,
    newId: state.newId + 1,
    taskTitle: '',
    tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
  } : state),

  deleteTask: (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  }),
};

export default function reducer(state = initialState, action) {
  return reduce[action.type](state, action.payload);
}
