import type { MenuItem} from "../types"
import { Dispatch } from "react"
import { OrderActions } from "./reducer/order-reducer"
type menuItemProp = {
  item: MenuItem,
   dispatch: Dispatch<OrderActions>

}
export default function MenuItem({item, dispatch} : menuItemProp) {
  return (
    <>
      <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"  
      onClick={() => dispatch({type: "add-item", payload :{item}})}
      >

      <p>{item.name}</p>
      <p>${item.price}</p>
      </button>
      

    </>
  )
}
