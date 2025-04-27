import React, { useEffect, useState, useRef } from "react";
import NavLink from "../NavLink";
import "./styles.css";

interface Link {
  path: string;
  title: string;
}

type MenuOverlayProps = {
  isVisible: boolean;
  links: Link[];
};

const MenuOverlay = ({ isVisible, links }: MenuOverlayProps) => {
  const [show, setShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
    }
  }, [isVisible]);

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (!isVisible) {
        setShow(false);
      }
    };

    const node = menuRef.current;
    if (node) {
      node.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (node) {
        node.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [isVisible]);

  if (!show) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className={`bg-opacity-80 backdrop-blur z-10 md:hidden ${isVisible ? "menu-overlay--visible" : "menu-overlay--hide"}`}
    >
      <ul className="flex flex-col py-4 items-center">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
