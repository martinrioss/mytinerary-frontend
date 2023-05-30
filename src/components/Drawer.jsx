// import cart from '../assets/cart.svg'
import close from '../assets/close.png'
function Drawer() {
  return (
    <div>
      <div className='drawer absolute'>
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label htmlFor="my-drawer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-9 h-9 md:h-14 md:w-14 stroke-current mt-4 md:mt-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu-vertical  p-4 w-60 bg-base-100 text-base-content ">
            <li className=' flex justify-center items-end'><label htmlFor="my-drawer"><img src={close} alt="close" className='h-5 w-5 ' /></label></li>
            <li className='p-4 rounded-xl border-2 hover:bg-blue-100'><a>Home</a></li>
            <li className='p-4 rounded-xl border-2 hover:bg-blue-100'><a>Cities</a></li>
            <li className='p-4 rounded-xl border-2 hover:bg-blue-100'><a>Cotact</a></li>
            <li className='p-4 rounded-xl border-2 hover:bg-blue-100'><a>Login/Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Drawer