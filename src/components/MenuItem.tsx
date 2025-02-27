import type { MenuItem } from '../types'

type MenuItemProps={
item: MenuItem
addItem: (item:MenuItem) => void
}

export default function MenuItem({item,addItem}:MenuItemProps) {
  return (
    <button
    onClick={()=>addItem(item)}
    className='border-2 hover:bg-teal-400 border-teal-400 w-full p-3 flex justify-between'>
    <p>{item.name}</p>
    <p className='font-black'>${item.price}</p>
    </button>
  )
}
