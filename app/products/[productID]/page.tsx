export default async function ProdDetails({params, }: {params: Promise<{productID: string}>}) {
    const {productID} = await params;
    return(
        <div>
            <h1>Product Details for {productID} </h1>
            <p>This is the product details page.</p>
        </div>
    )
}