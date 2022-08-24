import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { CSVBoxButton } from '@csvbox/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CSVBoxButton
    licenseKey="9Tdf9jexsXaEgEq2jr6sO8dv9USYaV"
    user={{
      user_id: "default123"
    }}
    onImport={(result, data) => {
      if(result){
        console.log("success");
        console.log(data.row_success + " rows uploaded");
        //custom code
      }else{
        console.log("fail");
        //custom code
      }
    }}
    render={(launch)=>{
      return <button data-csvbox onClick={launch}>Upload file</button>;
    }}
  >
    Import
  </CSVBoxButton>
  )
}

export default App
