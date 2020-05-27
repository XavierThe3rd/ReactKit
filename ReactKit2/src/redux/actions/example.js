import { SETUP_EXAMPLE } from './names'

export const setExample = data => {
  return {
    type: SETUP_EXAMPLE,
    payload: data
  }
}
