import RenderContentComponent from "../components/cards/renderContent"
const Group=({childContent , parentContent})=>{
     console.log(childContent );
    return(
        <div className="h-full w-full mx-auto">
                <div className="flex items-center pl-10 pr-16 pb-4">
                    <h1 className="lg:text-xl md:text-l sm:text:base font-semibold text-red-800">About department</h1>
                    <div className="flex-grow ml-4 border-t border-red-800 border-bold"></div>
                </div>
            <RenderContentComponent childContent={childContent} parentContent={parentContent} />
        </div>
    )
}

export default Group; 