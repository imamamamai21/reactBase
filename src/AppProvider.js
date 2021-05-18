import { createContext, useReducer, useEffect } from 'react'

import VoteAction from './actions/VoteAction'
import { NET_ACTION_TYPES, VOTE_ACTION_TYPES } from './constants/DispatchTypes'

const initialState = {
  loadState: {
    isLoading: false,
    post: {},
    isError: ''
  },
  vote: null
};


export const VoteContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loadState: {
          isLoading: true,
          post: {},
          isError: ''
        }
      }
    case NET_ACTION_TYPES.success:
      return {
        ...state,
        loadState: {
          isLoading: false,
          post: action.payload,
          isError: ''
        }
      }
    case NET_ACTION_TYPES.error:
      return {
        ...state,
        loadState: {
          isLoading: false,
          post: action.payload,
          isError: '読み込みに失敗しました'
        }
      }
    case VOTE_ACTION_TYPES.updateData:
      return { ...state, vote: action.payload }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

/**
 * dispacher, stateを管理します。
 */
const VoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.vote === null) { // 初回データ取得
      VoteAction.getData(dispatch)
    }
  })

  return (
    <VoteContext.Provider　value={ { state, dispatch } }>
      { children }
    </VoteContext.Provider>
  )
}

export default VoteProvider