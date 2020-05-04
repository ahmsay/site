import React, { Component } from 'react'
import { AppBar, Toolbar, Button, Typography, ButtonGroup } from '@material-ui/core'
import { connect } from 'react-redux'
import { changeActiveTab } from '../actions/tabActions'
import { withStyles } from '@material-ui/core/styles'

const useStyles = () => ({
  title: {
    flexGrow: 1
  },
  toolBar: {
    minHeight: 75
  }
})

const CustomButton = withStyles((theme) => ({
  root: theme.button
}))(Button)

class Navbar extends Component {
  changeTab = (id) => {
    this.props.changeTab(id)
  }
  render() {
    const { classes, tabs } = this.props
    const buttons = tabs.map(tab => {
      return (
        <CustomButton key={ tab.id } onClick={ () => this.changeTab(tab.id) }>
          <Typography variant="subtitle1">
            { tab.title }
          </Typography>
        </CustomButton>
      )
    })
    return (
      <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
        <Toolbar className={ classes.toolBar }>
          <div className={ classes.title }/>
          <ButtonGroup variant="text">
            { buttons }
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => {
  return { tabs: state.tabs }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: (id) => {
      dispatch(changeActiveTab(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Navbar))
