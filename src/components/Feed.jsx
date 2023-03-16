const Feed = ({title, link, date, creator, snippet}) =>{
    
    let formatted ={day:"numeric", month:"long", year:"numeric"}
    let articleDate= new Date(date).toLocaleDateString("en-GB", formatted)
    return (
        <>
         <div class="relative flex flex-wrap items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid">
        <div class="p-6">                
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">{date}</h2>
                <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{title}</h1>
                <p class="mx-auto max-h-12 overflow-hidden text-base font-medium leading-relaxed text-gray-500"> {snippet}</p>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500"> {creator}</p>
                <div class="mt-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" class="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                </div>
            </div>
            </div>
            </div>
        
        </>
    )
}
export default Feed;