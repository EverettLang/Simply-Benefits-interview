import React, {useContext} from 'react';

import {emailContext, passwordContext, firstnameContext, lastnameContext} from "../components/Context";

function Home() {
  const {email} = useContext(emailContext);
  const {password} = useContext(passwordContext);
  const {firstname} = useContext(firstnameContext);
  const {lastname} = useContext(lastnameContext);
  return (
    <div>
      <div>First Name: {firstname}</div>
      <div>{lastname}</div>
      <div>{email}</div>
      <div>{password}</div>
    </div>
    
  )
}

export default Home