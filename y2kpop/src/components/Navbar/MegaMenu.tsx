import "./megamenu.css";
import React, { useState, useEffect, useRef } from "react";
import { MegaMenuProps } from "../../assets/types/types";

const MegaMenu: React.FC<MegaMenuProps> = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    // Update dropdown position based on .mega-menu height
    if (navRef.current) {
      setDropdownTop(navRef.current.getBoundingClientRect().height);
    }
  }, [isDropdownOpen]);

  return (
    <nav className="mega-menu" ref={navRef}>
      <span className="logo">y2kpop</span>
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
