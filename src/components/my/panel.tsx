import useMenuStore from "@/store/usePanel";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function Panel() {
  const activeMenu = useMenuStore((state) => state.activeMenu);
  const removeActiveMenu = useMenuStore((state) => state.removeActiveMenu);
  const location = useLocation();
  const lastMenuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [indexRoute, setIndexRoute] = useState(0);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    if (lastMenuRef.current) {
      lastMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeMenu]);

  useEffect(() => {
    if (isDelete) {
      if (indexRoute > 0) {
        const previousMenu = activeMenu[indexRoute - 1];
        navigate("/dashboard/" + previousMenu.href);
      }
      if (activeMenu.length === 0) {
        navigate("/dashboard");
      }
    }
  }, [activeMenu, navigate, indexRoute, isDelete]);

  const handleRemoveMenu = (menu: any, index: number) => {
    setIsDelete(true);
    removeActiveMenu(menu);
    setIndexRoute(index);
    setInterval(() => {
      setIsDelete(false);
    }, 100);
  };

  return (
    <div className="mt-[-30px] ml-[-25px] flex gap-1">
      <Link to="/dashboard">
        <div
          className={`h-[30px] w-[150px] text-center flex items-center justify-center rounded shadow mb-2 ${
            location.pathname === "/dashboard"
              ? "bg-emerald-500 text-white"
              : "bg-zinc-100"
          }`}
        >
          <span
            className={
              location.pathname === "/dashboard"
                ? "text-white"
                : "text-gray-800"
            }
            style={{ fontSize: 12 }}
          >
            Dashboard
          </span>
        </div>
      </Link>

      {activeMenu.length > 0 &&
        activeMenu.map((menu, index) => (
          <Link to={menu.href} key={index}>
            <div
              className={`h-[30px] w-auto text-center pr-8 flex items-center justify-between rounded shadow mb-2 px-2 ${
                location.pathname === `/dashboard/${menu.href}`
                  ? "bg-emerald-500 text-white"
                  : "bg-zinc-100"
              }`}
              style={{ position: "relative" }}
              ref={index === activeMenu.length - 1 ? lastMenuRef : null}
            >
              <span
                className={
                  location.pathname === `/dashboard/${menu.href}`
                    ? "text-white"
                    : "text-gray-800"
                }
                style={{ fontSize: 12 }}
              >
                {menu.label}
              </span>
              <button
                className="ml-2"
                style={{ position: "absolute", right: 5, top: -5 }}
                onClick={() => handleRemoveMenu(menu, index)}
              >
                <span className="hover:text-red-500" style={{ fontSize: 10 }}>
                  X
                </span>
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
}
