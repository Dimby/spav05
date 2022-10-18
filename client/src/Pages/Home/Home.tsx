import React from 'react'
import styles from './style'
const Home = () => {
  const classes = styles()
  return (
    <div className={classes.container}>
      <div className={classes.leftDiv}>A</div>
      <div className={classes.rightDiv}>B</div>
    </div>
  )
}

export default Home
