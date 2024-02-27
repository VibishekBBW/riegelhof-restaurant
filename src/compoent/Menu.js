import React from "react"
import pdf from '../pdf/logo.pdf';

const Menu = () => {
  return (
    <div className="main-div">
          <iframe src={pdf} width="100%" style={{ height: '90vh' }} title="riegelhof-menu"/>
    </div>
  )
}
export default Menu
