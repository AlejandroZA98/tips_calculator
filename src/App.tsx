
import MenuItem from "./components/MenuItem"
import OrderContest from "./components/OrderContest"
import OrderTotals from "./components/OrderTotals"
import TipPercentajeForm from "./components/TipPercentajeForm"

import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
function App() {
  const{
    addItem,
    order,
    removeItem,
    tip,
    setTip,
    cleanOrder
  }=useOrder()

  // console.log(menuItems)

  return (
    <>
    <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
    </header> 

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2" >
      <div className="p-5">
      <h2 className="text-4xl font-black">Menú</h2>
      <div className="space-y-3">
        {menuItems.map(item =>(
          <MenuItem
          key={item.id}
          item={item}
          addItem={addItem}/>
        ))}
      </div>
    
      </div>

      <div className=" border  border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            order.length > 0? (
            <>
              <OrderContest
            order={order}
            removeItem={removeItem}/>

            <TipPercentajeForm
            setTip={setTip}
            tip={tip}/>


            <OrderTotals
            order={order}
            tip={tip}
            cleanOrder={cleanOrder}/>
            
            </>)
            :(<p className=" text-center"> Orden Vacia</p>)
          }
        

      </div>
      

    </main>

    </>
  )
}

export default App
