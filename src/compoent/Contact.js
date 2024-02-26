import React from "react"

const Contact = () => {
  return (
    <div className="home-div">
      <div className='main-div'>
        <h1>Adresse</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.0918025025003!2d8.50387507680811!3d47.60490458809398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479070a9b94d00f1%3A0xd0c5e72038c53b07!2sGasthaus%20zum%20Riegelhof!5e0!3m2!1sde!2sch!4v1708982769722!5m2!1sde!2sch" width="400" height="450" className="map" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <br/>
        <div className='adr'>
        <h2>Restaurant Riegelhof</h2>
        <h2>Kirchweg 12</h2>
        <h2>8196 Wil ZH</h2>
        </div>
      </div>
    </div>
  )
}
export default Contact
