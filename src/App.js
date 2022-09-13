import React,{useState} from 'react'
import './App.css '
const App =() => {
  
  const [data,setData] = useState({
    email : '',
    password : ''
})
const changeHandler = e => {
  setData({...data,[e.target.name]:[e.target.value]})
}
//test
const submitHandler = e => {
  e.preventDefault();
  data.password[0].length < 5 ? alert('please enter > 5') : 

  console.log(data)
}
  //whhshs
  return(
    <div className='App'>
      
        <form onSubmit={submitHandler}>
          <label style={{'color':'blue','fontFamily':'Tahoma'}}>E-Mail</label><br/>
          <input type='text' name="email" onChange={changeHandler}></input><br/>
          <label>Password</label><br />
          <input type='password' name="password" onChange={changeHandler}></input><br/>
          <input type='submit' value='LOGIN' className='btn-btn-primary'></input>
        </form>
      
    </div>
  )
  }

export default App