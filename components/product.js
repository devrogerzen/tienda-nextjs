import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../lib/utils";
import style from "../styles/product.module.css";
import CartButton from "./cartButton";

export default function Product({ item, showAs, qty }) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div>
          <Image
            className={style.image}
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
          />
        </div>
        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={style.price}>${item.price}</div>
          <div>{item.description}</div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image src={item.image} alt={item.title} width={50} height={50} />
        </div>
        <div>
          <div>{item.title}</div>
          <div>${item.price}</div>
          {qty === 0 ? "" : <div>{item.qty} units</div>}
          {qty === 0 ? "" : <div> Subtotal ${qty * item.price} </div>}
        </div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <Image src={item.image} alt={item.title} width={200} height={200} />
        </Link>
      </div>

      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>{item.title}</Link>
        </h3>
      </div>

      <div>${item.price}</div>
      <div>
        <CartButton item={item} />
      </div>
    </div>
  );
}
