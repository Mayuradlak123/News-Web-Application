import React, { Component } from 'react'

import Newsitem from './Newsitem'

export default   class News extends Component {
  
constructor (props){
    super();
    // var con=prompt("Select Country");?
    console.log("Hello I'm a Constructor ");
    this.props={
      category: props.category
    };
News.defaultProps={
  category:'general'
};
    this.state={
        articles:[],
        page:1,
        loading:false
    }

}

async componentDidMount(){
    console.log("Hello Im React Life Cycle Method of React ");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=eda196e3c0c54659ac84bb709da3d3db&page=1`;
    let data= await fetch(url);
    let parseData= await data.json();
    console.log(parseData);
    
    this.setState({
        page:this.state.page=1,
            articles:parseData.articles
        });
    

}
handlePrevclick =async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=eda196e3c0c54659ac84bb709da3d3db&page=${this.state.page-1}`;
    let data=await fetch(url);
let parseData=await data.json();
console.log(parseData.description);
this.setState({
page:this.state.page-1,
    articles:parseData.articles
});
}
handleNextclick=async()=>{
    let url=`https:newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=eda196e3c0c54659ac84bb709da3d3db&page=${this.state.page+1}`;
    let data= await fetch(url);
let parseData=await data.json();
console.log(parseData);
this.setState({
page:this.state.page+1,
    articles:parseData.articles
});
}
  render() {
    return (
      <div  className='w-100' style={{paddingLeft:"3%",marginTop:"6%"}}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        {/* <h3 className="text-center " style={{ marginTop: "70px" }}>Today's Top headline </h3> */}
       <div className='row  w-100' >
        {this.state.articles.map((element)=>{
           return <div className="col-md-3 ">
            
            <Newsitem key={element.title} title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} date={element.publishedAt}/>
            &nbsp; &nbsp;
           </div> 

        })}
       </div>
       <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<0} onClick={this.handlePrevclick} className='btn btn-success'> &larr; Previous</button>
        <button className='btn btn-info' onClick={this.handleNextclick}>Next &rarr;</button>
       </div>
         </div>
        
    )
  }

}
