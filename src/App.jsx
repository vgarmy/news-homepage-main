import { useState } from 'react';
import './App.css';
import data from './data';
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen" role="main">
      <div className='w-[90rem] px-[10rem] pb-[8rem] pt-[5rem] flex gap-[3rem] flex-col'>
        <nav class="flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" class="h-10" />
          </div>
          <ul class="flex space-x-6">
            <li><a href="#" class="hover:text-gray-500">Home</a></li>
            <li><a href="#" class="hover:text-gray-500">New</a></li>
            <li><a href="#" class="hover:text-gray-500">Popular</a></li>
            <li><a href="#" class="hover:text-gray-500">Trending</a></li>
            <li><a href="#" class="hover:text-gray-500">Categories</a></li>
          </ul>
        </nav>
        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6">
          {/* First row */}
          <div className="col-span-2 mb-8">
            <img src={data.main_article.image} alt={data.main_article.title} className="w-full h-auto mb-4" />
            <div className='grid grid-cols-2 gap-6'>
              <div className="col-span-1">
                <h1 className='text-6xl font-extrabold text-[var(--Very-dark-blue)]'>{data.main_article.title}</h1>
              </div>
              <div className="col-span-1 flex flex-col justify-between h-full">
                <p className='text-[var(--Dark-grayish-blue)] text-sm mb-4 leading-[1.5rem]'>{data.main_article.description}</p>
                <a
                  href="#"
                  className="w-1/2 text-center bg-[var(--Soft-red)] font-bold text-black py-2 px-4 self-start"
                >
                  {data.main_article.link}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[var(--Very-dark-blue)] p-6 mb-8">
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
          {/* Second row */}
          {data.featured_articles.map((article) => (
              <div className='grid grid-cols-3 gap-6' key={article.id}>
              <div className="col-span-1">
              <img src={article.image} alt={article.title} className="w-full h-auto mb-4" />
              </div>
              <div className="col-span-2 flex flex-col gap-2">
              <p className='text-[var(--Soft-orange)] font-extrabold text-4xl'>{article.id}</p>
              <h3 className='text-[var(--Very-dark-blue)] font-bold text-xl '>{article.title}</h3>
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
