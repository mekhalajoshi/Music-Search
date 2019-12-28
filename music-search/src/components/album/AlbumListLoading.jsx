import React from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function AlbumListLoading() {
  const classes = useStyles();

  return (
    <Backdrop
      className={classes.backdrop}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default AlbumListLoading
