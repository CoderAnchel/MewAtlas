import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar';
import Header from './components/Header';
import images from '../src/assets/images.jpeg';
import Card from './components/Card';
import { context } from './data';

function App() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [edad, setEdad] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState<Array<object>>([]);

  let lastID:number = 0;

  useEffect(() => {
      fetch("http://localhost:8080/api/Cats")
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
  })

  data.map((data) => {
    lastID = ++lastID;
    console.log(lastID);
  });

  lastID = lastID + 1;

  const putData = ( raza: string, color: string, edad: string) => {
    const objectCat = {
      catBreed: raza,
      catColor: color,
      catName: edad
    }

    fetch("http://localhost:8080/api/Cats/introduce", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(objectCat),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Response", data);
      setName("");
      setColor("");
      setEdad("");
      setShow(false);
    })
  }

  return (
    <>
      <Navbar />
      <Header />
      <button className='button' onClick={() => setShow(!show)}>
          <span>Add Cat!</span>
      </button>
      <span className='by'>By CoderAnchel 🚀</span>
      <div className='cardsContainer'>
        {data.map((data) => {
          return <Card picture={data.catImage} name={data.catBreed} color={data.catColor} age={data.catName}/>
        })}
      </div>
      <div>
        {show && <div className='popUp' >
          <div className='popUpContainer'>
          <div >
            <input className='cosa' type="file" accept='image/*' onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}/>
          </div>
            <div className="popUpRow">
              <span>Introduce breed</span>
              <input type="text" placeholder="Breed" value={name} onChange={(e) =>  setName(e.target.value)}/>
            </div>
            <div className="popUpRow">
              <span>Introduce Color</span>
              <input type="text" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)}/>
            </div>
            <div className="popUpRow">
              <span>Introduce Age</span>
              <input type="number" placeholder="Age" value={edad} onChange={(e) => setEdad( e.target.value)}/>
            </div>
            <button className='send' onClick={() => putData(name, color, edad)}>ADD</button>
          </div>
        </div>}
      </div>
    </>
  )
}

export default App
