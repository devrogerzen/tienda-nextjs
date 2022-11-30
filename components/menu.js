import Link from "next/link";

import style from '../styles/menu.module.css'

export default function Menu() {
  return (
    <nav className={style.menu}>
      <div>
        <Link className={style.link} href="/" >Home</Link>
        <Link className={style.link} href="/store" >Tienda</Link>
        <Link className={style.link} href="/faq" >FAQ</Link>
      </div>
      <div>
        <a className={style.link} href="#">Car (0)</a>
      </div>
    </nav>
  )

}