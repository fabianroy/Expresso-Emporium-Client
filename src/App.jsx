import { NavLink, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (

    <>
      <nav className='w-full px-20 py-10 flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-semibold'>Expresso Emporium</h1>
        </div>
        <div className='flex items-center gap-4'>
          <NavLink to='/addCoffee' className='btn'>Add Coffee</NavLink>
        </div>
      </nav>
      <h3 className='text-center text-2xl mt-10'>Coffees : {coffees.length}</h3>
      <div className='w-fit mx-auto grid grid-cols-2 gap-4 mt-10'>
        {
          loadedCoffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
