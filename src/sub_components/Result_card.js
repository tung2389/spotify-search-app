import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const styles = {
    result_card: {
      'border-radius': '8px',
      'padding-top': '10px',
      'padding-bottom': '10px',
      'padding-right': '20px',
      'padding-left': '20px'
    }
  };
  
class ResultCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className = "result_card">
        <Paper elevation = {4} classes={{ root: classes.partner_message }}>
        test
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(ResultCard);