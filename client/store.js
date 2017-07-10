import {createStore} from 'redux';
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';

const initialState = {
  messages: []
};

export const gotMessagesFromServer = function (messages) {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages
  };
};

function reducer(prevState = initialState, action)  {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return Object.assign({}, prevState, {
        messages: action.messages
      });
    default:
      return prevState;
  }
}


const messageStore = createStore(reducer);
export default messageStore;
