import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../lib/utils";
import style from "../styles/product.module.css";

export default function Product({ item, showAs }) {
  if (showAs === "Page") {
    return <div>{item.title}</div>;
  }

  if (showAs === "ListItem") {
    return <div>List item</div>;
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
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
