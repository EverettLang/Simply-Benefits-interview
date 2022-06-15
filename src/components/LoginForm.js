import React from 'react'

function LoginForm() {
  return (
    <>
        <form>
            <input type="text" name="username" autoComplete="off" required/>
            <input type="password" name="password" autoComplete="off" required/>
            <input type="submit"/>
        </form>
    </>
  )
}

export default LoginForm