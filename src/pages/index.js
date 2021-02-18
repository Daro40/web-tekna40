import React, { useEffect} from "react"


export default function Home() {

  useEffect(function(){
    fetch('https://h4i4akpmka.execute-api.us-east-1.amazonaws.com/Stage/shoes') //, {contentType: 'application/json'}
  .then(response => response.json())
  .then(responseData => {window.data = responseData; responseData.price = Number(responseData.price); let filtrado = responseData.filter(element => element.price < 400); console.log(filtrado)},
  )},[])

  return <div style={{ color: `purple`}}>
    <h1>FORTI TESTING</h1>
    <h2>shot down</h2>
    <p>f*cking shit</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
}