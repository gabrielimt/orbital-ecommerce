import productsData from '../data/products.json';

export default function ProductCard() {
  return (
    <section className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 bg-[#03042C] min-h-screen font-sans">
      {productsData.map((product, index) => (
        <article 
          key={index} 
          className="product_card flex flex-col bg-[#03042C] border border-[#483ACC]/30 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,151,254,0.15)]"
        >
          {/* Contêiner da imagem atualizado com aspect-square */}
          <div className="w-full aspect-square overflow-hidden rounded-xl mb-4 relative bg-[#172090]/20">
            <img 
              src={product.imagem} 
              alt={product.nome} 
              className="w-full h-full object-cover mix-blend-lighten"
            />
            <button className="absolute top-3 right-3 text-[#483ACC] hover:text-[#F897FE] transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col flex-grow">
            <h3 className="text-white font-semibold text-base leading-tight mb-2 line-clamp-1">
              {product.nome}
            </h3>
            
            <p className="text-[#993FC5] font-bold text-lg mb-4">
              R$ {product.preco.toFixed(2)}
            </p>
          </div>

          <button className="w-full bg-[#935AF0] hover:bg-[#F897FE] text-white text-sm font-medium py-2.5 rounded-full transition-colors duration-300">
            Adicionar ao Carrinho
          </button>
        </article>
      ))}
    </section>
  );
}