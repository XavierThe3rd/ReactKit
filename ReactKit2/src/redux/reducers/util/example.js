import { SETUP_EXAMPLE } from '../../actions/names'

const structure = {
  example: ''
}

const setupExample = (state = structure, action) => {
  switch (action.type) {
    case SETUP_EXAMPLE:
      return {
        ...state,
        example: action.payload
      }
    default:
      return state
  }
}

export default setupExample
