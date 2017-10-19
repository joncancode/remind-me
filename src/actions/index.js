export const ADD_REMINDER = 'ADD_REMINDER';
export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  return action;
};

export const DELETE_REMINDER = 'DELETE_REMINDER';
export const deleteReminder = id => {
  const action = {
    type: DELETE_REMINDER,
    id
  };
  return action;
};

export const CLEAR_REMINDERS = 'CLEAR_REMINDERS'
export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
  };
