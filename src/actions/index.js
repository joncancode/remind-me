export const ADD_REMINDER = 'ADD_REMINDER';
export const addReminder = text => {
  const action = {
    type: ADD_REMINDER,
    text
  };
  console.log('action in addreminder fun', action);
  return action;
};

export const DELETE_REMINDER = 'DELETE_REMINDER';
export const deleteReminder = id => {
  const action = {
    type: DELETE_REMINDER,
    id
  };
  console.log('delete in actions', action)
  return action;
};
