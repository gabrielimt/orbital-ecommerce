import { CiShoppingCart } from "react-icons/ci";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-5 bg-[#03042C] border-b border-[#483ACC]/30 shadow-lg shadow-[#03042C]/50 w-full">
            
            {/* Logo */}
            <div id="logo" className="cursor-pointer flex items-center gap-2">
                <h1 className="text-3xl font-bold text-white tracking-wide drop-shadow-[0_0_8px_rgba(248,151,254,0.3)]">
                    Orbital
                </h1>
            </div>

            {/* Navegação */}
            <nav id="navegation" className="hidden md:block">
                <ul className="flex items-center gap-8 text-sm font-medium">
                    <li>
                        <a href="#" className="text-gray-300 hover:text-[#F897FE] transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(248,151,254,0.6)]">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-[#F897FE] transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(248,151,254,0.6)]">
                            Roupas
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-[#F897FE] transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(248,151,254,0.6)]">
                            Acessórios
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-[#F897FE] transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(248,151,254,0.6)]">
                            Telescópios
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-[#F897FE] transition-colors duration-300 hover:drop-shadow-[0_0_5px_rgba(248,151,254,0.6)]">
                            Decoração
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Carrinho */}
            <div id="cart" className="relative cursor-pointer text-gray-300 hover:text-[#F897FE] transition-colors duration-300">
                <CiShoppingCart size={32} />
                {/* Opcional: Bolinha de notificação de item no carrinho inspirada nos botões da imagem */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#935AF0] text-[10px] font-bold text-white">
                    2
                </span>
            </div>
            
        </header>
    );
}