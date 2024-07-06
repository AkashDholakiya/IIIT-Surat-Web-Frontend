export default function Info({title,children}){
    return (
        <div >
            <h1 className="text-[1.3rem]  mt-[1.5rem] text-[#003482] font-semibold">{title}</h1>
            <p className="text-[1.2rem] font-normal text-gray-700 text-justify">{children}</p>
        </div>
    )
}