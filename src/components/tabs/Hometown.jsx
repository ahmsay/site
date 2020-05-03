import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  card: theme.card
}))

const Hometown = () => {
  const classes = useStyles()
  return (
    <Card className={ classes.card } variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Eskişehir"
          height="140"
          image="/static/images/cards/eskisehir.jpg"
          title="Eskişehir"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Eskişehir
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quasi, sapiente, repellendus iste natus officiis ipsa, ad ipsam sunt placeat voluptatem? Natus, magni. Vero labore quaerat assumenda consequatur nostrum hic!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Hometown