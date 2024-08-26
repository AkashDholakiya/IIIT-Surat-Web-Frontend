export default function info({title,email}){
    return (
        <div className="flex items-center mb-2">
            <div className="w-1 bg-red-800 h-8 rounded mr-4"></div>

            <div className="w-full mx-auto">
                <h1 className="text-2xl font-semibold text-red-800">{title}</h1> 
                <p className="text-red-800  text-base">{email}</p>
            </div>
        </div>
    )
}