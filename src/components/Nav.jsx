import Drawer from "./Drawer"
import Cart from "./Cart"
import logo from "../assets/logo.png"
function Nav() {
  return (
    <nav className="absolute border-b-2 border-black w-full h-[10vh] ">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <Drawer />
        </div>
        <div className="col-span-2 flex ">
          <img src={logo} alt="logo" className="object-contain w-full h-[10vh] items-center" />
        </div>
        <div className="flex justify-end">
          <Cart />
        </div>
      </div>
    </nav>
  )
}
export default Nav