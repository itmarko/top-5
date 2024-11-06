import { createContext, useContext, useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import {
  LuArrowLeftToLine,
  LuArrowRightToLine,
  LuMoreVertical,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const SidebarContext = createContext();
const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <aside className="h-screen flex ">
        <nav
          className=" flex flex-col bg-gray-800 border-r 
        shadow-sm"
        >
          <div className="p-4 pb-2 flex  items-center relative">
            <img
              src={logo}
              alt="img"
              className={`overflow-hidden transition-all
                ${expanded ? "w-36" : "w-0"}`}
            />
            <img
              src={profile}
              alt="img"
              className={`overflow-hidden transition-all
                ${expanded ? "w-0" : "w-8"}`}
            />
            <button
              className="p-1 ml-2 rounded-full bg-gray-50 hover:bg-gray-100  text-gray-800 absolute -right-3 border border-gray-800 top-5"
              onClick={() => setExpanded((curr) => !curr)}
            >
              {expanded ? <LuArrowRightToLine /> : <LuArrowLeftToLine />}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 overflow-y-auto scrollbar-hide overflow-x-hidden">
              {children}
            </ul>
          </SidebarContext.Provider>
          <div className="bordet-t flex p-3">
            <img src={profile} alt="img" className=" w-10 h-10 rounded-md" />
            <div
              className={`flex
                    justify-between items-center overflow-hidden transition-all ${
                      expanded ? "w-36" : "w-0"
                    }`}
            >
              <div className="leading-4">
                <h3 className=" ml-4 font-semibold text-white">Genius</h3>
                <span className="text-xs text-gray-100">genius@genius.com</span>
              </div>
              <LuMoreVertical size={24} className="text-gray-50" />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
// Icons for dropdown

export function SidebarItem({ icon, text, active, alert, dropdownItems }) {
  const { expanded } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-gray-600 text-gray-300"
          }`}
        >
          {icon}
          <span
            className={`overflow-hidden transition-all text-white text-sm ml-3 ${
              expanded ? "w-32 ml-2" : "w-0"
            }`}
          >
            {text}
          </span>

          {/* Dropdown indicator icon - only show when expanded */}
          {expanded && dropdownItems && (
            <span className="ml-0">
              {isOpen ? <LuChevronUp size={16} /> : <LuChevronDown size={16} />}
            </span>
          )}

          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                expanded ? "" : "top-2"
              }`}
            ></div>
          )}

          {!expanded && (
            <div
              className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
            >
              {text}
            </div>
          )}
        </li>

        {/* Dropdown for Sub-items */}
        {isOpen && dropdownItems && (
          <ul
            className={`ml-6 pl-4 ${
              expanded ? "block" : "hidden"
            } bg-gray-700 rounded-md shadow-md transition-all`}
          >
            {dropdownItems.map((item, index) => (
              <Link to={item.link} key={index}>
                <li className="py-2 px-3 my-1 text-gray-300 hover:bg-gray-600 cursor-pointer rounded-md">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  alert: PropTypes.bool,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};
