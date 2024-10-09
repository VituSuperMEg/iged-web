import useMenuStore from "@/store/usePanel";

export function Panel() {
  const activeMenu = useMenuStore((state) => state.activeMenu);
  const removeActiveMenu = useMenuStore((state) => state.removeActiveMenu);

  return (
    <div className="mt-[-30px] ml-[-25px] flex gap-1">
      {/* Sempre renderiza o Dashboard */}
      <div className="h-[30px] bg-indigo-100 w-[150px] text-center flex items-center justify-center rounded shadow mb-2">
        <span className="text-gray-800" style={{ fontSize: 12 }}>
          Dashboard
        </span>
      </div>

      {/* Renderiza as outras opções com botão de remover */}
      {activeMenu.length > 0
        ? activeMenu.map((menu, index) => (
            <div
              key={index}
              className="h-[30px] bg-indigo-100 w-[200px] text-center flex items-center justify-between rounded shadow mb-2 px-2"
            >
              <span className="text-gray-800" style={{ fontSize: 12 }}>
                {menu}
              </span>
              <button
                className="text-red-500 ml-2"
                onClick={() => removeActiveMenu(menu)}
              >
                X
              </button>
            </div>
          ))
        : null}
    </div>
  );
}
