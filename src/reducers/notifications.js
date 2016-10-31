import { REQUEST_NOTIFICATIONS, RECEIVE_NOTIFICATIONS } from '../actions';

const notifications = (state = {
  isFetching: false,
  notifications: [],
}, action) => {
  switch (action.type) {
    case REQUEST_NOTIFICATIONS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_NOTIFICATIONS:
      return {
        ...state,
        isFetching: false,
        notifications: action.notifications,
      }
    default:
      return state;
  }
}

export default notifications;