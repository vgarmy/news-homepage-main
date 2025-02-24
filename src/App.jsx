import { useState } from 'react';
import './App.css';
import data from './data';
import logo from './assets/logo.svg'
import menu from './assets/icon-menu.svg'
import close from './assets/icon-menu-close.svg'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center w-screen min-h-screen pt-4 md:pt-0" role="main">
      <div className="w-full max-w-[90rem] px-6 md:px-[10rem] pb-[8rem] md:pt-[5rem] flex gap-[3rem] flex-col">
        <nav className="flex justify-between items-center p-4 bg-white relative">
          <div>
            <img src={logo} alt="Logo" className="h-10" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl z-50"
          >
            {isOpen ? <img src={close} /> : <img src={menu} />}
          </button>
          {isOpen && (
            <div
              className={`fixed top-0 left-0 w-full h-screen bg-black/50 transition-opacity duration-500 md:hidden`}
              onClick={() => setIsOpen(false)}
            ></div>

          )}
          <div
            className={`pt-[10rem] text-4xl fixed top-0 right-0 w-full h-screen bg-white shadow-lg transform ${isOpen ? "translate-x-[25%]" : "translate-x-[100%]"
              } transition-transform duration-300 md:hidden`}
          >
            <ul className="flex flex-col p-6 space-y-4">
              <li><a href="#" className="hover:text-gray-500">Home</a></li>
              <li><a href="#" className="hover:text-gray-500">New</a></li>
              <li><a href="#" className="hover:text-gray-500">Popular</a></li>
              <li><a href="#" className="hover:text-gray-500">Trending</a></li>
              <li><a href="#" className="hover:text-gray-500">Categories</a></li>
            </ul>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:text-gray-500">Home</a></li>
            <li><a href="#" className="hover:text-gray-500">New</a></li>
            <li><a href="#" className="hover:text-gray-500">Popular</a></li>
            <li><a href="#" className="hover:text-gray-500">Trending</a></li>
            <li><a href="#" className="hover:text-gray-500">Categories</a></li>
          </ul>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          <div className="col-span-2 mb-8">
            <img src={data.main_article.image} alt={data.main_article.title} className="hidden md:block w-full h-[20rem] md:h-auto mb-4" />
            <img src={data.main_article.mobileimage} alt={data.main_article.title} className="md:hidden w-full h-[20rem] md:h-auto mb-4" />
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6'>
              <div className="col-span-1">
                <h1 className='text-6xl font-extrabold text-[var(--Very-dark-blue)]'>{data.main_article.title}</h1>
              </div>
              <div className="col-span-1 flex flex-col justify-between h-full">
                <p className='text-[var(--Dark-grayish-blue)] text-sm mb-4 leading-[1.5rem]'>{data.main_article.description}</p>
                <a
                  href="#"
                  className="uppercase w-1/2 text-center hover:bg-[var(--Very-dark-blue)] hover:text-[var(--Soft-red)] bg-[var(--Soft-red)] font-bold text-[var(--Very-dark-blue)] py-3 px-4 self-start"
                >
                  {data.main_article.link}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[var(--Very-dark-blue)] p-6 mb-8 col-span-1">
            <h2 className='text-[var(--Soft-orange)] font-extrabold text-4xl mb-4'>News</h2>
            <div className="flex flex-col justify-between">
              {data.new_articles.map((article, index) => (
                <div className="mb-4" key={index}>
                  <h3 className='text-lg text-[var(--Off-white)] font-bold mb-1'>{article.title}</h3>
                  <p className='text-[var(--Grayish-blue)] text-sm leading-[1.5rem]'>{article.description}</p>
                  {index !== data.new_articles.length - 1 && (
                    <hr className="border-t border-[var(--Grayish-blue)] my-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          {data.featured_articles.map((article) => (
            <div className='grid grid-cols-3 md:gap-6' key={article.id}>
              <div className="col-span-1">
                <img src={article.image} alt={article.title} className="w-full h-[9rem] md:h-auto mb-4" />
              </div>
              <div className="ml-4 md:ml-0 col-span-2 flex flex-col gap-2">
                <p className='text-[var(--Soft-red)] font-extrabold text-3xl md:text-4xl'>{article.id}</p>
                <h3 className='text-[var(--Very-dark-blue)] font-bold text-base md:text-xl '>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
