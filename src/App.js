import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import { Add } from './components/Add'
import Book from './components/Book';

function App() {
  let linit = [];
  let rinit = [];
  if (localStorage.getItem("cleft") === null) {
    linit = []
  }
  else {
    linit = JSON.parse(localStorage.getItem("cleft"))
  }
  if (localStorage.getItem("cright") === null) {
    rinit = []
  }
  else {
    rinit = JSON.parse(localStorage.getItem("cright"))
  }

  const addleft = (title, amount) => {
    const myob = {
      title: title,
      amount: amount,
    }
    setCleft([...cleft, myob])
  }
  const addright = (title, amount) => {
    const myob = {
      title: title,
      amount: amount,
    }
    setCright([...cright, myob])
  }
  const [cleft, setCleft] = useState(linit)
  const [cright, setCright] = useState(rinit)
  useEffect(() => {
    localStorage.setItem("cright", JSON.stringify(cright))
  }, [cright])
  useEffect(() => {
    localStorage.setItem("cleft", JSON.stringify(cleft))
  }, [cleft])

  return (
    <>
      <Navbar />
      <Add addleft={addleft} addright={addright} />
      <Book cleft={cleft} cright={cright} />
    </>
  );
}

export default App;
