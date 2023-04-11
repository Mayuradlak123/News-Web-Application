import React, { Component } from 'react'
// import './social.css'
export default class Contact_us extends Component {
  render() {
    return (
      <div>
<div className="mt-5 conatiner ">
            <div className="text-center ">
         
            </div>
            <div className=" d-flex align-items-center  justify-content-center">

                <div className="bg-white col-md-4">
                    <div className="p-4  shadow-md">
                    <h3 className="text-primary">How Can We Help You?</h3>
                        <div>
                            <label>  Your_Name </label>
                            <input type="text" name="name" className="form-control" placeholder=" Enter your Name" required/>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="email" className="form-label">Your_Email  </label>
                            <input type="text" name="email" className="form-control" placeholder="Enter your Email" required/>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" name="subject" className="form-control" placeholder="Regarding " required/>
                        </div>
                        <div className="mt-2 mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" cols="20" rows="6" className="form-control"
                                placeholder="message"></textarea>
                        </div>
                        <button className="btn btn-primary">
                            Submit Form
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center ' style={{fontSize:'30px'}}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a href="https://www.facebook.com/mayur.adlak.10/"  className="fa fa-facebook"></a>
&nbsp; &nbsp;

<a href="https://twitter.com/MayurAdlak" className="fa fa-twitter"></a>
&nbsp; &nbsp;

<a href="https://www.linkedin.com/in/mayur-adlak-31b962220/" className="fa fa-linkedin"></a>
&nbsp; &nbsp;
<a href="https://www.instagram.com/mayur.adlak.10/" className="fa fa-instagram"></a> &nbsp; &nbsp;
<a href="https://www.github.com/Mayuradlak123" className="fa fa-github" style={{Color:'black'}}></a>
 </div> <br />
 <h3 className='text-center'>Contact me on Social Media </h3>
      </div>
    )
  }
}
