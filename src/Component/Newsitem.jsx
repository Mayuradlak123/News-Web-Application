import React, { Component } from "react";
import NewsImage from "../NewsImage.jpg";
export default class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, date } = this.props;
    var newData = "";
   const style={
    'display':"flex",
    "flexDirection":"column",
    "alignItems":"center",
    "justifyContent":"center"
   }
    return (
      <div className="container d-flex justify-content-center ">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>

        <div className="card" style={{ width: "100%" }}>
          <img
            className="card-img-top"
            src={imageurl ? imageurl : NewsImage}
            alt="Card image cap"
            height="150"
            width="280"
          />

          <div className="card-body w-100" style={style}>
            <p className="m-0 p-0"> Date: {date.slice(0, 10)} </p>
            <p className="m-0 p-0">
              
              <b> {title.slice(30)} </b>
            </p>
            <span className=" m-0 p-0">{}</span>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark ">
              
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Newsitem.defaultProps = {
  title: "Newspepar",
  description: "daily news",
  imageurl:
    "https://media.gettyimages.com/vectors/live-breaking-news-headline-with-blue-and-red-color-background-vector-id1221950506?s=2048x2048",
  newsUrl: "shorturl.at/jmpIZ",
};
