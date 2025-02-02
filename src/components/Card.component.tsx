import React from "react";
import mobileImage from "/images/image-product-mobile.jpg";
import desktopImage from "/images/image-product-desktop.jpg";

const Card: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row rounded-lg border border-transparent w-full h-full overflow-hidden">
      <img className="max-w-full object-cover lg:hidden" src={mobileImage} />
      <img className="hidden lg:block" src={desktopImage} />
      <div className="flex flex-col py-4 bg-white px-4 space-y-3 justify-between">
        <span className="text-gray-400 text-sm">P E R F U M E</span>
        <p className="text-3xl font-bold">Gabrielle Essence Eau De Parfum</p>
        <p className="text-gray-400">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex flex-row items-center space-x-3 flex-wrap">
          <span className="text-green-800 text-3xl font-semibold">$149.99</span>
          <span className="text-xs line-through text-gray-400">$169.99</span>
        </div>
        <button className="flex items-center justify-center gap-2 py-3 bg-green-800 text-white border rounded-lg">
          <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
              fill="#FFF"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
