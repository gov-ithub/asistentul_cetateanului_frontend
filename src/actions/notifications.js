import { notifications as notificationsData } from '../data';

export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

const requestNotifications = () => ({
  type: REQUEST_NOTIFICATIONS,
});

const receiveNotifications = (json) => ({
  type: RECEIVE_NOTIFICATIONS,
  notifications: json,
})

export const fetchNotifications = () => dispatch => {
  dispatch(requestNotifications());

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(notificationsData);
    }, 1000)
  }).then(json => dispatch(receiveNotifications(json)));
}