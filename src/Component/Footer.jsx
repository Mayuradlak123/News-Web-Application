import React, { Component } from 'react';
import '../Component/style.css';
 export default class Footer extends Component {
  
    render() {
      
        return (
            <div>
                
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"></link>
<div className="d-flex flex-column bg-dark">

    

  
    <footer className="w-100 py-4 flex-shrink-0">
        <div className="container ">
            <div className="row gx-5">
                <div className="col-md-6">
                    <h5 className="h1 text-white">FB.</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white mb-3">Quick links</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="/dashboard">Home</a></li>
                        <li><a href="/about">About</a></li>
                        {/* <li><a href="#">Get started</a></li> */}
                        <li><a href="/contact">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-3">Newsletter</h5>
                    <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <form action="#">
                        <div className="input-group mb-3">
                            <input className="form-control w-50" type="text" placeholder="Recipient's username" /> <br /> <br />
                            <button className="btn btn-primary" id="button-addon2" type="button">Write Somthing</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
            </div>
        );
    }
}

