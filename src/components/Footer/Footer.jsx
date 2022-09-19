import React from 'react'
import "./footer.scss"
function Footer() {
    let year = new Date().getFullYear()
  return (
      <footer>
          <h4>Developed By Anwar & Sangeetha {year}</h4>
    </footer>
  )
}

export default Footer