import React from "react"
function CustomerNav(){
    return(
        <div className="flex">
                <div className="flex space-x-1">
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white ">Sign Up</a>
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white bg-[#ff8f26] hover:bg-[#ff8f26]">Sign In</a>
            </div>
        </div>
    )
}
export default CustomerNav;
