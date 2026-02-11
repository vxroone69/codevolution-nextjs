"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productID = pathname.split("/")[2];
    const specsDet = pathname.split("/")[4];
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>Sorry, the specs ({specsDet}) for product ({productID}) does not exist.</p>
        </div>
    );
}
