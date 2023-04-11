import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css';
export  class Navbar
extends Component {
   
   render() {
    const style={
      'text-decoration': 'none',
      'font-size':'17px',
      'color':'white'
    };
    function fun(){
      var con=document.getElementsByClassName('mr-sm-1').value;
    console.log(con);
    }
    return (
      <div>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <nav   className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{'padding':'10px'}}>
  <a  style={style} href="/dashboard"> <i className="fa fa-home" aria-hidden="true"></i> </a>
  <button   className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span   className="navbar-toggler-icon"></span>
  </button>

  <div   className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul   className="navbar-nav mr-auto">
     <li className="p-2" >
        <a   href="/contact" style={style}>Contact us </a>
      </li> 
      <li className="p-2"  >
        <a   href="/" style={style}>News</a>
      </li>
    
      <li className="p-2" >
        <a   href="/business" style={style}>Bussiness</a>
      </li>
      <li className="p-2" >
        <a  href="/sports" style={style}>Sports</a>
      </li>
      <li  className="p-2" >
        <a   href="/health" style={style}>Health</a>
      </li>
      <li className="p-2" >
        <a    href="/science" style={style}>Science</a>
      </li>
      <li className="p-2" >
        <a    href="/technology" style={style}>Technology</a>
      </li>
      <li  className="p-2" >
        <a    href="/entertainment" style={style}>Entertainment</a>
      </li> 
      
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <input className="mr-sm-1" onChange={fun} type="search" placeholder="Search" aria-label="Search" style={{'backgroundColor':'white','borderRadius':'none','width':'170px','height':'38px','padding':'10px'}}></input>
       </div>   
     
    <form  className="form-inline my-2 my-lg-0" style={{textDecoration: 'none'}} id='login-container'>
    
      <div><a  href="/login" className='btn btn-outline-primary mx-2 btn-sm' style={style} >Login </a> </div>   
       
      <div> <a href="/register" className='btn-sm btn btn-outline-success' style={style} >Register </a> </div>  
    </form>
  </div>
</nav>
    
       </div>
    )
  }
}
export default Navbar;