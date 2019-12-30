import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

import './artist.css'

function ArtistCard(props) {
  const { strArtistThumb, strArtist } = props
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }
  let defaultImage = "https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-2.png"

  if (strArtistThumb !== "" && strArtistThumb !== null) {
    defaultImage = strArtistThumb
  }

  return (
    <div>
      <Card style={useStyles.card}>
        <CardActionArea onClick={handleClickOpen} style={{ padding: '5px' }}>
          <CardMedia
            className="artist-card__media"
            component="img"
            alt={strArtist}
            image={defaultImage}
            title={strArtist}
          />
          <CardContent style={{ padding: '0' }}>
            <Typography variant="subtitle1">{strArtist}</Typography>
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
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {strArtist}
            </Typography>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  )
}
export default ArtistCard

ArtistCard.propTypes = {
  strArtist: PropTypes.string.isRequired,
  strArtistThumb: PropTypes.string.isRequired
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
