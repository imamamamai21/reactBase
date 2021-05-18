import { URI, RESULT } from '../constants/Servers'
import { NET_ACTION_TYPES, VOTE_ACTION_TYPES } from '../constants/DispatchTypes'
import Connect from '../common/Connect'

/**
 * データの更新をdispatchする
 * @param {json}} response
 * @param {dispatch} dispatch
 */
const dispatchUpdateData = (response, dispatch) => {
  if (response.type === RESULT.success) dispatch({ type: VOTE_ACTION_TYPES.updateData, payload: response.data })
  else dispatch({ type: NET_ACTION_TYPES.error, payload: response.error })
}

/**
 * dispatchにつながるアクションを定義
 */
const VoteAction = {

  /**
   * サーバーからデータを取得し、dispatchする
   * @param {*} dispatch 
   */
  getData: (dispatch) => {
    Connect
      .get(URI.test)
        .then(response => {
          dispatchUpdateData(response, dispatch)
        })
  },

  /**
   * 投票する
   * @param {dispatch} dispatch
   * @param {投票結果} target string
   * @returns 
   */
  postWithVoteTarget: (dispatch, target) => {
    Connect
      .post(URI.test, { text: `${ target }が押されたよ〜`, voted: target })
        .then(response => {
          dispatchUpdateData(response, dispatch)
        })
  }
}

export default VoteAction

