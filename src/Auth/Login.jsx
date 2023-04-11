import React, { Component } from 'react'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      pass:"",
    }
  }
  
  render() {
   const Admin=()=>{
     
   
  }
    return (
        <div> 
          <i className="fa-sharp fa-solid fa-user"></i>

          <div className="user">
<strong id='showemail'>    </strong>
</div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
    <form action="/">
     <section className="vh-70" >
  <div className="container py-2 h-100" style={{marginTop:'50px'}}>
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">

            <h2 className="mb-5 text-center">Sign in</h2>
            <p id='war' style={{color: 'red'}}></p>
            <div className="form-outline mb-4">
              <p id='ewar' style={{color:'red'}} className='float-left'> </p>
              <input type="email" name='email' id="email"  className="form-control form-control-lg" required/>
              <label className="form-label" htmlFor="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
            <p id='pwar' style={{color:'red'}} className='float-left'> </p>
              <input type="password" name='pass'  minLength='6' id="pass" className="form-control form-control-lg" required />
              <label className="form-label" htmlFor="typePasswordX-2" >Password</label>
            </div>


           
            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={Admin} >Login</button>
            <br /> <br />
           <p> <strong> New user ? <a href='/register'>Register</a> </strong> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
        </div> 
        
    )
  }
}
