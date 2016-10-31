// @flow
import { notifications as notificationsData } from '../data';
import { notification as notificationType } from '../types';

export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS';
export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

const requestNotifications = () => ({
  type: REQUEST_NOTIFICATIONS,
});

const receiveNotifications: Function = (json: notificationType) => ({
  type: RECEIVE_NOTIFICATIONS,
  notifications: json,
})

export const fetchNotifications: Promise = () => dispatch => {
  dispatch(requestNotifications());

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(notificationsData);
    }, 1000)
  }).then(json => dispatch(receiveNotifications(json)));
}