
import Link from "next/link"
import Nav from "../../../component/navbar"
export default function Products(){
    return (
        <div>
        < Nav />
        <h3>Products List</h3>
        <ol>
            <li>
                <Link href="/products/product">Product</Link>
                </li>
                <li>
                    <Link href="/products/product">Product</Link>
                    </li>
            <li>
                <Link href="/products/product">Product</Link>
                </li>
            <li>
                <Link href="/products/product">Product</Link>
                </li> 
        </ol>
        </div>
    )
}