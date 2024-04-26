import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (

    <>
      <h1 className='text-4xl p-4'>Expresso Emporium</h1>
      <h3 className='text-center text-2xl mt-10'>Coffees : {coffees.length}</h3>
      <div className='w-fit mx-auto grid grid-cols-2 gap-4 mt-10'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
