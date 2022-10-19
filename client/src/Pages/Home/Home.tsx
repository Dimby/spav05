import React from 'react'
import styles from './style'
import background from '../../Images/backroundHome.png'

const Home = () => {
  const classes = styles()
  return (
    <div className={classes.container}>
      <div
        className={classes.leftDiv}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        A
      </div>
      <div className={classes.rightDiv}>B</div>
    </div>
  )
}

export default Home
