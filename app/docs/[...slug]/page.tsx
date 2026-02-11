export default async function docs({ params }: { params: Promise<{ slug: string[] }> }) {
    const {slug} = await params;
    if (slug?.length === 2){
        return(
            <div>
                <h1>Docs page for feature {slug[0]} and concept {slug[1]}</h1>
            </div>
        )}
    if (slug?.length === 1){
        return (
            <div>
                <h1>Docs page for feature {slug[0]}</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Docs Home Page</h1>
        </div>
    )
}