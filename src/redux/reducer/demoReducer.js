export default function reducer(
  state = {
    demoData: ''
  },
  action
) {
  switch (action.type) {
    case 'DEMO_STARTED': {
      return { ...state, changingStatus: 'ongoing' }
    }
    case 'DEMO_SUCCESS': {
      return {
        ...state,
        changingStatus: 'success',
        demoData: action.payload
      }
    }
    case 'DEMO_FAILED': {
      return {
        ...state,
        changingStatus: 'failed',
        demoData: action.payload
      }
    }
    default: {
      return state
    }
  }
}
