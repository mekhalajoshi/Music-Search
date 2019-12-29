import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'


function TrackCard(props) {
  const { strTrackThumb, strTrack, } = props
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }
  return (
    <div>
      <Card style={useStyles.card}>
        <CardActionArea
          onClick={handleClickOpen}
          style={{ padding: '5px' }}
        >
          <CardMedia
            className="album-card__media"
            component="img"
            alt={strTrack}
            image={strTrackThumb}
            title={strTrack}
          />
          <CardContent style={{ padding: '0' }}>
            <Typography variant="subtitle1">
              {strTrack}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {strTrack}
            </Typography>
          </Toolbar>
        </AppBar>
      </Dialog>

    </div>
  )
}
export default TrackCard



const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})