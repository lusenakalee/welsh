const Feed = ({title, link, date}) =>{
    
    let formatted ={day:"numeric", month:"long", year:"numeric"}
    let articleDate= new Date(date).toLocaleDateString("en-GB", formatted)
    return (
        <>
        <a href={link} className="hover:text-red-600" target="_blank" rel="noopener noreferrer">
        <h3 className="text-xl underline decoration-red-400 mb-1">{title}</h3>
        <p>{date}</p>
        </a>
        
        </>
    )
}
export default Feed;