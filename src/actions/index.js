import { API_BASE_URL } from '../config'


const recieveUsers = (users) => ({
  type: 'RECIEVE_USERS',
  users
})

export const fetchUsers = () => dispatch => {
  fetch(`${API_BASE_URL}/users`)
    .then(response => response.json())
    .then(users => dispatch(recieveUsers(users)))
    .catch(err => console.log(err))
}

// export const fetchUsers = () => {
//   return (dispatch) => {
//
//   }
// }
