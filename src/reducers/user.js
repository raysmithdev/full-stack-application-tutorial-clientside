const initialState = {
  data: []
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_USERS':
      return {
        ...state,
        data: action.users
      }

      // return Object.assign({}, state, {
      //   users: action.users
      // })

    default:
      return state
  }
}

export default user
