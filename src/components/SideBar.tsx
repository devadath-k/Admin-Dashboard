import SidebarHeader from "./sidebar/SidebarHeader"
import SidebarBody from "./sidebar/SidebarBody"
import SidebarFooter from "./sidebar/SidebarFooter"


function SideBar() {
  return (
    <div className="w-fit min-h-[100%] h-auto p-[20px]" >
        <div className="bar h-[100%] w-[300px] bg-[#336F7E] rounded-[25px] p-[15px]">
            <SidebarHeader/>
            <SidebarBody/>
            <SidebarFooter/>
        </div>
    </div>
  )
}

export default SideBar
