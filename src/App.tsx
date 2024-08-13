import MenuItem from "./components/menuItem";
import { menuItems } from "./data/db";
import OrderContents from "./components/orderContents";
import OrderTotal from "./components/OrderTotal";
import TipPorcentageForm from "./components/TipPorcentageForm";
import { useReducer } from "react";
import { initialState, orderReducer } from "./components/reducer/order-reducer";
 
function App() {

    const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className="bg-teal-400 py-5 ">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="mt-10 space-y-3">
          {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
             ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            {state.order.length ? (
              <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />
  
              <TipPorcentageForm
                dispatch={dispatch}
                tip={state.tip}
              />
  
               <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
               />
              
              </>
            ) : (
              <p className="text-center">La orden esta vacia</p> 

            )}
             
             
        </div>
      </main>
    </>
  )
}
export default App;
