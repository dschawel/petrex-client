import React from 'react'
import { Link, Redirect } from 'react-router-dom'


const Nav = props => {
  const handleLogout = e => {
    e.preventDefault()
    // Remove the token from localstorage (or cookies)
    localStorage.removeItem('userToken')
    // Update the state of the App
    props.updateUser(null)

    //Redirect back to Login Page
    return <Redirect to="/" />
  }

  let links = (
    <span>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </span>
  )

  // If the user is logged in, show profile page and logout links
  if (props.user) {
    links = (
      <span>
        <li>Hi {props.user.firstname}!</li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/pets/new">Add A Pet</Link>
        </li>
        <li>
          <Link to="">See a Vet</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>Logout</Link>
        </li>
      </span>
    )
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {links}
      </ul>
    </nav>
  )
}

export default Nav
