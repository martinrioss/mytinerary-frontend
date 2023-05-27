import menu from '../assets/menu.svg'
import close from '../assets/close.png'
function Drawer() {
  return (
    <div>


      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <label htmlFor="my-drawer"><img src={menu} alt="menu" className='h-10 w-10' />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu-vertical  p-4 w-60 bg-base-100 text-base-content ">
            {/* <!-- Sidebar content here --> */}
            <li className=' flex justify-center items-end'><label htmlFor="my-drawer"><img src={close} alt="close" className='h-5 w-5' /></label></li>
            <li className='p-4 rounded-xl border-2 hover:bg-blue-100'><a>Home</a></li>
            <li className='p-4 rounded-xl border-2 hover:bg-blue-100'><a>Cities</a></li>

          </ul>
        </div>
      </div>


    </div>
  )
}
export default Drawer