import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div className="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='footer_ranjeet' target='_ranjeet' >Ranjeet Verma</a></p>
        </div>
    </>
  )
}

export default Footer