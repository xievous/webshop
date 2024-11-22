import React, { useState, useEffect, useRef } from "react";
import "./megamenu.css";
import { MegaMenuProps } from "../../assets/types/types";
import { useNavigate } from "react-router-dom";

const MegaMenu: React.FC<MegaMenuProps> = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleToggleSearch = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSearchActive((prev) => !prev);
  };

  useEffect(() => {
    if (navRef.current) {
      setDropdownTop(navRef.current.getBoundingClientRect().height);
    }
  }, [isDropdownOpen]);

  return (
    <nav className="mega-menu" ref={navRef}>
      <span onClick={() => navigate("/")} className="logo">
        y2kpop
      </span>
      <div className="main-menu-components">
        <ul className="main-menu">
          {items.map((item) => (
            <li key={item.id} className="menu-item">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleDropdown();
                }}
                className="menu-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <svg
          onClick={() => navigate("/overview")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M528.12 301.319l47.273-189.09C580.259 93.567 567.979 80 552.651 80H132.84L123.12 33.52C120.519 19.735 108.041 10 94.121 10H24C10.746 10 0 20.746 0 34c0 13.254 10.746 24 24 24h60.121l65.92 263.68c.024.096.049.192.075.287 5.733 22.094 26.188 37.033 48.918 37.033H455.13c21.96 0 42.3-13.777 48.523-34.418l24.467-97.868c6.896-27.552-13.848-54.637-41.7-54.637H185.87L178.63 199.5h306.6c8.826 0 16.677 6.14 19.07 14.671l47.42 189.09zM200 400c-26.509 0-48 21.491-48 48s21.491 48 48 48 48-21.491 48-48-21.491-48-48-48zm240 0c-26.509 0-48 21.491-48 48s21.491 48 48 48 48-21.491 48-48-21.491-48-48-48z" />
        </svg>

        <div
          className={`search-wrapper ${isSearchActive ? "active" : ""}`}
          onClick={handleToggleSearch}
        >
          <span className="search-icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>

      <div
        className={`dropdown ${isDropdownOpen ? "open" : ""}`}
        style={{ top: dropdownTop }}
      >
        <div className="dropdown-content">
          {items[0].sections.map((section) => (
            <div key={section.id} className="dropdown-section">
              <h4>{section.title}</h4>
              <ul>
                {section.items.map((subItem) => (
                  <li key={subItem.id}>
                    <a href={subItem.link}>{subItem.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
