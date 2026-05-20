import { CiShoppingCart } from "react-icons/ci";

export default function Header({ onOpenCart, cartCount }) {
    return (
        <header className="flex items-center justify-between px-8 py-5 bg-[#03042C] border-b border-[#483ACC]/30 shadow-lg shadow-[#03042C]/50 w-full z-30 relative">
            
            <div id="logo" className="cursor-pointer flex items-center gap-2">
                <h1 className="text-3xl font-bold text-white tracking-wide drop-shadow-[0_0_8px_rgba(248,151,254,0.3)]">
                    Orbital
                </h1>
            </div>

            <div id="cart" onClick={onOpenCart} className="relative cursor-pointer text-gray-300 hover:text-[#F897FE] transition-colors duration-300">
                <CiShoppingCart size={32} />
                {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#935AF0] text-[10px] font-bold text-white">
                        {cartCount}
                    </span>
                )}
            </div>
            
        </header>
    );
}