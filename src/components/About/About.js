import React from 'react';
import { Route, Link } from 'react-router-dom';
// import FAQ from './FAQ/FAQ';
// import Company from './Company/Company'

export default function About(props) {
  return (
    <div>
      <h1>About</h1>
      <Link to='/about/faq'><h3>FAQ</h3></Link>
      <Link to='/about/company'><h3>Company</h3></Link>
      {/* <Route path='/about/faq' component={ FAQ }/>
      <Route path='/about/company' component={ Company }/> */}
      {props.children}
    </div>
  )
}