import React, { Component } from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import { Container, createMuiTheme } from '@material-ui/core';

import VoteProvider from './AppProvider';
import VoteArea from './components/voteArea/VoteArea';
import TitleArea from './components/titleArea/TitleArea';
import HistoryArea from './components/historyArea/HistoryArea';

import { Colors } from './constants/Colors';

/**
 * 親component
 * 通信を行う
 */
class App extends Component {
	render() {
    const classes = this.props.classes;

    return (
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" className={classes.root}>
          <VoteProvider>
            <TitleArea />
            <VoteArea />
            <HistoryArea />
          </VoteProvider>
        </Container>
      </ThemeProvider>
    )
  }
}

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FF6D00' },
    secondary: { main: '#350052' },
    info: { main: '#f4f4f3' }
  }
});

export default withStyles({
  root: {
  }
})(App);
