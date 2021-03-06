import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, Box, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mainCard: theme.mainCard,
  about: theme.about
}))

const About = ({ aboutContent }) => {
  const classes = useStyles()
  const { mainTitle, mainContent, whatElse, developerMessage } = aboutContent
  return (
    <Container maxWidth="md" className={ classes.about }>
      <Card className={ classes.mainCard } variant="outlined" align="center">
        <CardContent>
          <Typography variant="h4">{ mainTitle }</Typography>
          <br/>
          <Typography variant="body2">{ mainContent }</Typography>
          <br/>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightMedium">{ whatElse.title }</Box>
          </Typography>
          <Typography variant="body2">{ whatElse.content }</Typography>
          <br/>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightMedium">{ developerMessage.title }</Box>
          </Typography>
          <Typography variant="body2">{ developerMessage.content }</Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default About
