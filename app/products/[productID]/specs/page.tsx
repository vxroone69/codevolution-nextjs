export default async function specs({params,}: 
    {params: Promise<{productID: string}>}){
    const {productID} = await params;
 
    return (
        <div>
            <h1>specs page for product no. {productID}</h1>
            <h2>list of specs details:</h2>
            <h3>colors</h3>
            <h3>cc</h3>
            <h3>mileage</h3>
        </div>
    );
}