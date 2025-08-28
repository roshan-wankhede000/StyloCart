import React from 'react'
import exchangeIcon from '../assets/frontend_assets/exchange_icon.png'
import qualityIcon from '../assets/frontend_assets/quality_icon.png'
import supportIcon from '../assets/frontend_assets/support_img.png'

function OurPolicy() {
  return (
    <>
     <div className="container my-5">
        <div className="row">
            
            <div className="col-md-4 mt-5">
                <div className="d-flex flex-column jusify-content-center align-items-center">
                <img src={exchangeIcon} className='mb-3'  width="50" alt='exchange_icon' />
                <p className="mb-0 fw-bold" style={{color:'#374151',}}>Easy Exchange Policy</p>
                <p style={{color:'#9ca3af'}}>We offer hassle free exchange policy</p>
                </div>
            </div>

            <div className="col-md-4 mt-5">
                <div className="d-flex flex-column jusify-content-center align-items-center">
                <img src={qualityIcon} className='mb-3'  width="50" alt='exchange_icon' />
                <p className="mb-0 fw-bold" style={{color:'#374151',}}>7 Days Return Policy</p>
                <p style={{color:'#9ca3af'}}>We provide 7 days free return policy</p>
                </div>
            </div>

            <div className="col-md-4 mt-5">
                <div className="d-flex flex-column jusify-content-center align-items-center">
                <img src={supportIcon} className='mb-3' width="50" alt='exchange_icon' />
                <p className="mb-0 fw-bold" style={{color:'#374151',}}>Best Customer Support</p>
                <p style={{color:'#9ca3af'}}>We provide 24/7 customer support</p>
                </div>
            </div>

        </div>
     </div>
    </>
  )
}

export default OurPolicy