import React from 'react'

function Subscribe() {
  return (
    <>
      <div className="container my-5 py-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="mb-3 fw-bold fs-4" style={{color:'#374151',}}>Subscribe now & get 20% off</p>
                <p className="text-secondary fw-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="d-flex mt-3">
                  <form >
                    <input type="text" className="form-control" />
                  </form>
                  <button className='btn btn-dark m-0'>Subscribe</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Subscribe