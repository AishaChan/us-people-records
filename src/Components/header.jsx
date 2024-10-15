import React from "react";
//import Logo from "../../../public/logo.png";
import links from "../utils/links";

export default function Header() {
    return (
      <header className="bg-[#FFFFFF] py-4 shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center w-[94%] mx-auto">
          
          {/* Logo Section (Smaller) */}
          <div className="flex-shrink-0">
            <img
              src={require("../Assets/images/US-01-01.png")}
              alt="Waypoint Warranty Logo"
              className="w-[100px]"  
            />
          </div>
  
          {/* Left-Aligned Navigation Links */}
          <div className="flex-grow flex justify-center ml-6">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#trending-names"
                  className="text-[#06416b] hover:bg-[#06416b] hover:text-white transition px-4 py-2 border border-[#06416b] rounded-full"
                >
                  Trending Names
                </a>
              </li>
              <li>
                <a
                  href="#popular-full-names"
                  className="text-[#06416b] hover:bg-[#06416b] hover:text-white transition px-4 py-2 border border-[#06416b] rounded-full"
                >
                  Popular Full Names
                </a>
              </li>
              <li>
                <a
                  href="#popular-last-names"
                  className="text-[#06416b] hover:bg-[#06416b] hover:text-white transition px-4 py-2 border border-[#06416b] rounded-full"
                >
                  Popular Last Names
                </a>
              </li>
              <li>
                <a
                  href="#phone-search"
                  className="text-[#06416b] hover:bg-[#06416b] hover:text-white transition px-4 py-2 border border-[#06416b] rounded-full"
                >
                  Phone Search
                </a>
              </li>
              <li>
                <a
                  href="#people-search"
                  className="text-[#06416b] hover:bg-[#06416b] hover:text-white transition px-4 py-2 border border-[#06416b] rounded-full"
                >
                  People Search
                </a>
              </li>
              <li>
                <a
                  href="#address-search"
                  className="text-[#06416b] hover:bg-[#06416b] hover:text-white transition px-4 py-2 border border-[#06416b] rounded-full"
                >
                  Address Search
                </a>
              </li>
            </ul>
          </div>
  
          {/* Responsive Dropdown Menu (Right-Aligned for Mobile) */}
          <div className="lg:hidden">
            <button className="text-[#06416b] focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    );
  }