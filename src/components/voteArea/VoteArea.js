import { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

import { VoteContext } from '../../AppProvider'
import VoteAction from '../../actions/VoteAction'
import { Colors } from '../../constants/Colors'

/**
 * 投票Area
 */
 export default function VoteArea() {
  const { state, dispatch } = useContext(VoteContext)
  const classes = makeStyles((theme) => ({
    voteButton: {
      backgroundColor: Colors.button.accent.dark,
      margin: '10px'
    }
  }))();
  console.log('@VoteArea: @ value = ', state)

  return (
    <div>
      <p>{ 'text = ' + state.vote?.text }</p>
      <Button 
        className={ classes.voteButton }
        onClick={() => VoteAction.postWithVoteTarget(dispatch, 'A')}
      >A</Button>
      <Button 
        className={ classes.voteButton }
        onClick={() => VoteAction.postWithVoteTarget(dispatch, 'B')}
      >B</Button>
      <p>【{ state.vote?.voted }】に投票中</p>
    </div> 
  );
}
