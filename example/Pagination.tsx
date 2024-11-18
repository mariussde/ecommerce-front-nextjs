import React from 'react';

const Pagination: React.FC = () => {
  return (
    <nav className="self-center mt-5 ml-20 max-w-full w-[764px]" aria-label="Pagination">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <div className="text-3xl text-stone-500 max-md:mt-10">$100.00</div>
        </div>
        <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-3xl whitespace-nowrap max-md:mt-10">
            <div className="text-stone-500">$101.00</div>
            <div className="flex gap-6 mt-28 ml-5 text-right text-zinc-400 max-md:mt-10 max-md:ml-2.5">
              <button aria-label="Previous page">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a85530663fb55cbdd3eb5fbc0af749a036fb5d108b20a87a900b17121270eb?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" alt="" className="object-contain shrink-0 self-start mt-2.5 aspect-[0.61] w-[11px]" />
              </button>
              <button aria-label="Page 1">1</button>
              <button aria-label="Page 2">2</button>
              <button aria-label="Page 3" className="font-semibold text-black">3</button>
              <button aria-label="Page 4">4</button>
              <button aria-label="Next page">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/215a3bbd76634995364a133a8569f0b02332225ec6e641b8204e40cd410f1fd6?placeholderIfAbsent=true&apiKey=3e0ca2b741a9481882c84317ce8bde37" alt="" className="object-contain shrink-0 self-start mt-2.5 aspect-[0.61] w-[11px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="text-3xl text-stone-500 max-md:mt-10">$101.00</div>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;