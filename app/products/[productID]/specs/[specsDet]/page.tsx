import { notFound } from "next/navigation";


export default async function specsDet({params,}: 
    {params: Promise<{specsDet: string, productID: string}>}){
    const {specsDet, productID} = await params;
    if (parseInt(productID) > 100 || parseInt(specsDet) > 100){
        notFound();
    }
    
    return<>
    <div>
        <h1>specs detail {specsDet} for product {productID} </h1>
    </div>

    </>


}