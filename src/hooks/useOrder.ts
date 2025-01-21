import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


export default function useOrder(){
    const [order,setOrder]= useState<OrderItem[]>([])// generic para definir state tipo OrderItem
    const[tip,setTip]= useState(0)

    const addItem=(item:MenuItem)=>{
        //console.log("agregando",item)
        //const newItem:OrderItem={...item,quantity:1} no es necesario :OrderItem por el generic 
        const itemExist= order.find(orderItem => orderItem.id==item.id)
        if(itemExist){
            //console.log("Elemento existente")
            const updatedItem= order.map(orderItem => orderItem.id==item.id ?
            {...orderItem,quantity: orderItem.quantity+1} : orderItem)
            setOrder(updatedItem)

        }else{
        const newItem={...item,quantity:1}
        setOrder([...order,newItem])// agrego el item al array de order
        }
    }
    //console.log(order)

    const removeItem=(id:MenuItem['id'])=>{
        //console.log("Eliminando",id)
        setOrder(order.filter(orderItem => orderItem.id!==id))
    }

    const cleanOrder=()=>{
        console.log("Save order")
        setOrder([])
        setTip(0)
    }

    return{
        addItem,
        order,
        removeItem,
        tip,
        setTip,
        cleanOrder
    }   
}