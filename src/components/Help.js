import React from 'react'

const Help = () => {
  return (
    <div>
      <h1>Using BuJo 3.0</h1>

        <p>
          BuJo 3.0 was designed to mimic the everyday functions of the standard Bullet Journal methodology. You can think of it as your collection of Daily Logs: just like if you were using a physical paper journal, you can add, edit, delete, and migrate your tasks.
        </p>

        <p>
          If you're unfamiliar with Bullet Journaling, be sure to check out the <a href="http://bulletjournal.com/pages/learn/">"Get Started" section</a> on Bulletjournal.com.
        </p>

        <h2>What BuJo 3.0 Can Do</h2>
        <p>
          When you log into BuJo 3.0 for the first time, you'll see the daily log for today. All you need to do to get started is to create your first task: click the line under Tasks, fill in the content, and press the "+" button to add it.
        </p>

        <p>
          Examples of Tasks:
        </p>
        <ul>
          <li>Send invoice to client</li>
          <li>Finish HTML and CSS for Rails application</li>
          <li>Create playlist for next week's party</li>
          <li>Push app to Heroku</li>
        </ul>

        <p>
          A task in BuJo 3.0 looks like this:
        </p>
        <div className="task-container">
          <button className="icon complete"></button>
          Task content here
          <button className="icon migrate"></button>
          <button className="icon edit"></button>
          <button className="icon delete"></button>
        </div>

        <p>
          To complete a task, click <button className='icon complete'></button> and it will become an <button className='icon completed'></button>.
        </p>

        <p>
          If you aren't able to complete a task on the day it's listed, use the <button className='icon migrate'></button> to migrate the task. If you're migrating a past task, it will migrate to the current day, and if you migrate a task from today, it will move to tomorrow. You can see tasks that have been migrated are marked with a <button className='icon migrated'></button> instead of a <button className='icon complete'></button>. The actual task has been moved to the current date (where it can be completed).
        </p>

        <p>
          Click <button className="icon edit"></button> to edit a task description
        </p>

        <p>
          Click <button className="icon delete"></button> to completely delete a task
        </p>

        <h2>What BuJo 3.0 Can't Do</h2>

        <p>
          Because BuJo 3.0 primarily deals with the daily log, it doesn't currently have the ability to do anything that involves scheduling; there's no monthly log and no way to schedule specific tasks on specific days other than today and tomorrow.
        </p>
    </div>
  )
}

export default Help