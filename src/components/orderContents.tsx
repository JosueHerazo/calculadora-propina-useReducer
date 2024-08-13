import { Dispatch } from "react";
import {  OrderItem } from "../types";
import { formatCurrency } from "./helpers";
import { OrderActions } from "./reducer/order-reducer";

type OrderContentsProps = {
    order: OrderItem[]
  dispatch: Dispatch<OrderActions>
  } 

export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl ">Consumo</h2>

        <div className="space-y-3 mt-10 ">
            {
              order.map(item => (
                <div key={item.id}
                className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b item-center">
                  <div>
                  <p className="text-lg">
                    {item.name} - {formatCurrency(item.price)}
                  </p>
                  <p className="font-black">
                      cantidad: {item.quantity} -
                       {formatCurrency(item.price * item.quantity)}
                  </p>
                  </div>
                  
                  <button className="bg-red-600 w-8 h-8 rounded-full text-white font-black"
                  onClick={() => dispatch({type: "removeitem", payload:{id : item.id}})}>X</button>
                </div>
            ))}
        </div>
    </div>
  )
}
