import Drawer from "./Drawer"
import Cart from "./Cart"
function Nav() {
  return (
    <nav className="absolute border-b-2 border-black w-full h-[9vh] ">
      <div className="grid grid-cols-5 gap-5">
        <div>
          <Drawer />
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <img src='./assets/logo.png' alt="logo" className="object-contain md:h-12 xl:h-16"/>
        </div>
        <div className="flex justify-end">
          <Cart />
        </div>
      </div>
    </nav>
  )
}
export default Nav