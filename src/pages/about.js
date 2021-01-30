import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"


export default function About() {
  return (
    <div style={{ color: `teal` }}>
        <Link to="/">index</Link>
        <p></p>
        <Link to="/contact">contact</Link>
        <Header headerText="123 probando"/>
        <Header headerText="houston"/>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
    </div>
  )
}