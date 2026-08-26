import logo_icon from "../assets/logo.png"
import menu_icon from "../assets/menu.png"
import search_icon from "../assets/search.png"
import upload_icon from "../assets/upload.png"
import menu_icon from "../assets/menu"
import notification_icon from "../assets/notification.png"
import jack_icon from "../assets/jack.png"

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 shadow-xl shadow-gray-300 flex items-center justify-between px-5">
        <div className="flex items-center gap-5">
            <img className="w-10" src={menu_icon} alt="" />
            <img className="w-30 hidden md:block" src={logo_icon} alt="" />
        </div>
        <div className="max-w-100 w-full h-10 flex items-center gap-5 object-cover">
            <div className="w-full h-full relative border-2 border-gray-300 rounded-xl">
                <input className="w-full h-full" type="text" />
                <img className="absolute top-2 right-2"src={search_icon} alt="" />
            </div>
        </div>
        <div className="flex items-center gap-5">
            <img className="w-10 hidden md:block" src={upload_icon} alt="" />
            <img className="w-10 hidden md:block" src={more_icon} alt="" />
            <img className="w-10 hidden md:block" src={notification_icon} alt="" />
            <img className="w-10 rounded-full" src={jack_icon} alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar
