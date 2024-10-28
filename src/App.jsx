import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'

import './App.css'

function App() {

  const[principle,setPrinciple]=useState(0)
    console.log(principle);
   const[isInvalidPrinciple,setisInvalidPrinciple]=useState(false) 

    const[inerest,setInterest]=useState(0)
    console.log(inerest);
    
    const[isInvalidInterest,setisInvalidInterest]=useState(false) 


    const[year,setYear]=useState(0)
      console.log(year);
      
    const[isInvalidYear,setisInvalidYear]=useState(false) 

    const [simpleInterest,setSimpleInterest]=useState(0)


    const validUserInput=(tag)=>{
      const{name,value}=tag
      console.log(name,value);
      console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
      if(!!value.match(/^[0-9]*.?[0-9]+$/)){
        if(name=='principle'){
          setPrinciple(value)
          setisInvalidPrinciple(false)
        }
        else if(name=='interest'){
          setInterest(value)
          setisInvalidInterest(false)
        }
        else{
          setYear(value)
          setisInvalidYear(false)
        }
      }
      else{
        if(name=='principle'){
          setisInvalidPrinciple(true)
          }
          else if(name=='interest'){
            setisInvalidInterest(true)

          }
          else{
            setisInvalidYear(true)

          }
      }
      
    }

  const handleCalculate=(e)=>{

    e.preventDefault()
    console.log("button clicked");
    if(principle && inerest && year){
    setSimpleInterest(principle*inerest*year/100)
    }
    else{
      alert("fill all fields")
    }
        
  }
  const handleReset=(e)=>{
    e.preventDefault()
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setisInvalidPrinciple(false)
    setisInvalidInterest(false)
    setisInvalidYear(false)
    setSimpleInterest(0)


  }


  return (
    
    <div className=" bg-dark d-flex justify-content-center align-item-center  p-3  " style={{minHeight:"100vh",width:"100%"}}>
          <div className="main   ms-5 shadow rounded p-3 bg-light"style={{width:"550px"}}>
                  <h1 className='d-block'>Simple interest calculator</h1>
                  <h3 className='mt-3 fw-light d-block'>Calculae your simple interest Easily</h3>
                  <div className='shadow rounded bg-warning  d-flex justify-content-center align-item-center p-5 fs-5 fw-bold flex-column text-light mt-5' style={{height:"200px"}}> <h3> ₹ {simpleInterest}</h3>
                    <h3>total simple interest</h3>
                  </div>
            <form className='mt-5'>
                    <div className="mb-3">
                      <TextField name='principle' value={principle || ""} onChange={e=>validUserInput(e.target)} className='w-100' id="outlined-basic" label="₹ Principle Amount" variant="outlined" />
                    </div>
                    {
                      isInvalidPrinciple &&
                      <p className='text-danger'>Invalid principle amount</p>

                    }

                    <div className="mb-3">
                      <TextField name='interest'  value={inerest || ""} onChange={e=>validUserInput(e.target)} className='w-100' id="outlined-basic" label="Rate of interest (p.a) %" variant="outlined" />
                    </div>
                    {
                      isInvalidInterest &&
                      <p className='text-danger'>Invalid Interest </p>

                    }

                    <div className="mb-3">
                      <TextField name='year'  value={year || ""} onChange={e=>validUserInput(e.target)} className='w-100' id="outlined-basic" label="Time period (Yr)" variant="outlined" />
                    </div>
                    {
                      isInvalidYear &&
                      <p className='text-danger'>Invalid Year </p>

                    }
            </form>

            <Stack direction="row" spacing={2}>
                <Button type='submit' disabled={isInvalidPrinciple || isInvalidInterest || isInvalidYear} onClick={handleCalculate} variant="contained" style={{backgroundColor:"black",width:'50%'}}>Calculate</Button>
                <Button variant="outlined" onClick={handleReset} style={{width:'50%'}}>Reset</Button>
            </Stack>

          </div>
    </div>
   
     
    
  )
}

export default App
