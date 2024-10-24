import { useState } from 'react'
import Precess from './components/Precess'
import Recipis from './components/Recipis'

function App() {
  const [btn, setBtn] = useState([])
  const [prepare, setPrepare] =useState([])

  const [total, setTotla] =useState(0)
  const [calore, setCalore] = useState(0);

  const calculate = (totalId, caloreId) => {
    setTotla(total + totalId)
    setCalore(calore + caloreId)
  }

  const handleDelete = id => {
    const deletedItem = btn.find(prev => prev.id === id)
    const curent = btn.filter(prev => prev.id !== id)
    setBtn(curent)
    setPrepare([...prepare, deletedItem])
  }
  const handelCooked = cooked => {
    const isExist = btn.find(prev => prev.id === cooked.id)
    if(!isExist){
      setBtn([...btn, cooked])
    }
    else{
      alert('already add this item')
    }
  }

  return (
    <div className='flex flex-col md:flex-row mx-3 md:mx-20 mt-4 md:mt-10 gap-6'>
      <Recipis handelCooked={handelCooked}/>
      <Precess btn={btn} handleDelete={handleDelete} prepare={prepare} calculate={calculate} total={total} calore={calore} />
    </div>
  )
}

export default App
