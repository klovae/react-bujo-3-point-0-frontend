import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Welcome to BuJo 3.0!</h1>
      <h3><em>The digital version of the analog system for the digital world</em></h3>

      <p>BuJo 3.0 is designed to mimic standard Bullet Journaling conventions, with tasks organized by day that can be added, completed, deleted, edited, and migrated. Get started by checking out the <Link to='/help'>Help section</Link> for more information.</p>

      <p>
        <em>Bullet Journal was created by Ryder Carroll. More information on the Bullet Journal methodology and community can be found at <a href="http://bulletjournal.com">BulletJournal.com</a></em>
      </p>
    </div>
  )
}

export default Home;