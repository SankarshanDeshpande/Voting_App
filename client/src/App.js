
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import VotingApp from './Components/VotingApp';
import PageNotFound from './Components/PageNotFound';
import './App.css';
import PollCreate from './Components/PollCreate';
import axios from 'axios';
import Home from './Components/Home';
import VotingAppDev from './Components/VotingAppDev';
import Results from './Components/Results';
import Results2 from './Components/Results2';
import Results3 from './Components/Results3';

function App() {

  var [user,getUser] = useState()

  function handleUser() {
    axios.get('http://localhost:3001/getCurrentUser')
    .then(user => getUser(user.data))
    .catch((err) => console.log(err));
    return user
  }

  handleUser()


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cIwlOCkod6zV31z8UyrHbcKj6YFD1JRiDJIqwOMSEQsZtjjPfUlxs9Vg1o8ZJdZQUKz/app' element={<VotingApp/>}></Route>
        <Route path='/pSHRSr2yS7wWddWoaqHEkjGfqK8QmtcKrg6MKpHRf6IXPhLX4p4Rmm14K5I3qIAroi/app' element={<VotingAppDev/>}></Route>
        <Route path='/ELAdv6w7LhMmGPOByz1x0Q32rf7fQI7joV0SDJEgliM1hMIo7YLctui6z3RaPUD8yUB/create-poll' element={<PollCreate/>}></Route>
        <Route path='/tpYp326veQiDjPw18SaI7wZclgKRGJwPcDj0WMF3a8hW94b12ZLipWPdzO2LkZ2maQf/results' element={<Results/>}></Route>
        <Route path='/results2' element={<Results2/>}></Route>
        <Route path='/results3' element={<Results3/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;