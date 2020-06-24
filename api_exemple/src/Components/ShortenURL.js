import React from "react";
import Button from "react-bootstrap/Button";

export class ShortenURL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shortURL : "", longURL : "https://www.youtube.com/watch?v=3VmtibKpmXI"};
    this.getData = this.getData.bind(this);  
  }

  async getData(){ 
      const apiKey = "35768e03791444ae8db11e881d18a92e"; 
      try{ 
          const response = await fetch('https://api.rebrandly.com/v1/links', { 
            method:'POST', 
            headers: {'Content-Type': 'application/json','apikey': apiKey  }, 
            body:JSON.stringify({destination:  this.state.longURL}) 
          }); 
          if(response.ok){ 
            const jsonResponse = await response.json(); 
            console.log(jsonResponse);
            this.setState({shortURL : jsonResponse.shortUrl});
            return jsonResponse; 
          } 
          throw new Error('Request failed!'); 
      } 
      catch(error){ 
          console.log(error); 
      } 
} 
  
  
  render() {
    return (
      <>
      <h1>rebrandly</h1>
      <h2>{this.state.shortURL}</h2>
      <Button onClick={this.getData}>Call API</Button>

      </>
    );
  }
}
