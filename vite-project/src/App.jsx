import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { CSVBoxButton } from '@csvbox/react'

function App() {
  const [ready, setReady] = useState(false)

  return (
    <div className='container'>
      <h1>Demo By Kanhaiya(for Upwork)</h1>
    <CSVBoxButton
    licenseKey="9Tdf9jexsXaEgEq2jr6sO8dv9USYaV"
    user={{
      user_id: "default123"
    }}
    onReady={()=>{
      setReady(true)
    }}
    onImport={(result, data) => {
      if(result){
        console.log("success");
        console.log(data.row_success + " rows uploaded");
        alert("File uploaded successfully!")
        //custom code
      }else{
        console.log("fail");
        //custom code
      }
    }}
    render={(launch)=>{
      return <button className={`upload-btn ${ready && "ready"}`} disabled={!ready} data-csvbox onClick={launch}>{ready ? "Upload file" : "Loading.."}</button>;
    }}
  >
    Import
  </CSVBoxButton>
  <a href="/saved" target="_blank" className="link">View Uploaded Files Data</a>
  </div>
  )
}

export default App
