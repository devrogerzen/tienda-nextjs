import Link from "next/link";
import { useAppContext } from "./stateWrapper";

import style from '../styles/menu.module.css'

export default function Menu() {
const cart = useAppContext()
function handleOpenCart() {
cart.openCart()
}


  return (
    <nav className={style.menu}>
      <div>
        <Link className={style.link} href="/" >Home</Link>
        <Link className={style.link} href="/store" >Tienda</Link>
        <Link className={style.link} href="/faq" >FAQ</Link>
      </div>
      <div>
        <a className={style.link} href="#" onClick={handleOpenCart}>
        Cart ({cart.getNumberOfItems()})
        </a>
      </div>
    </nav>
  )

}