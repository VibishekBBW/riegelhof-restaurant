import React from "react"
import pdf from '../pdf/logo.pdf';

const Menu = () => {
  return (
    <>
          <iframe src={pdf} width="100%" style={{ height: '90vh' }} title="riegelhof-menu"/>
    </>
  )
}
export default Menu
