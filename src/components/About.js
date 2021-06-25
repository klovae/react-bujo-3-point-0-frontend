import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About BuJo 3.0</h1>
        <p>
          BuJo 3.0 is a React application with a Rails API backend created by Elyse Klova for the final project of the Flatiron School's Self-Paced Software Engineering Course.
        </p>

        <p>
          The application itself is designed to follow the standard conventions of bullet journaling, especially as it pertains to creating and working with daily task lists. BuJo 3.0 lets you create, edit, and delete tasks. You can also migrate incomplete tasks forward to the current day.
        </p>

        <p>
          For more information about the bullet journal methodology, the best source is the original <a href="http://bulletjournal.com">BulletJournal.com</a>.
        </p>

      <h2>Credits</h2>
        <p>
          Bullet Journal is &#169; Ryder Carroll.
        </p>
        <p>
          All icons were sourced from <a href="http://flaticon.com">Flaticon.com</a>.
        </p>
    </div>
  )
}

export default About