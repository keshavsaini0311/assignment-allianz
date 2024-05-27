/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState ,useMemo, useEffect, useRef} from 'react'
import { FaChartBar,FaChartLine } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Home() {
  const stocks = [
    { rank: 1, name: 'AAPL', avgDailyProfit: '1.2%', overallProfit: '30%', calmarRatio: 2.5, winRate: '65%', price: '150', action: 'view' },
    { rank: 2, name: 'GOOGL', avgDailyProfit: '0.8%', overallProfit: '20%', calmarRatio: 3.0, winRate: '70%', price: '2800', action: 'buy' },
    { rank: 3, name: 'MSFT', avgDailyProfit: '1.5%', overallProfit: '25%', calmarRatio: 2.8, winRate: '68%', price: '250', action: 'sell' },
    { rank: 4, name: 'TSLA', avgDailyProfit: '2.0%', overallProfit: '40%', calmarRatio: 4.5, winRate: '75%', price: '600', action: 'view' },
    { rank: 5, name: 'AMZN', avgDailyProfit: '0.5%', overallProfit: '15%', calmarRatio: 1.5, winRate: '60%', price: '3300', action: 'buy' },
    { rank: 6, name: 'FB', avgDailyProfit: '1.1%', overallProfit: '22%', calmarRatio: 2.7, winRate: '67%', price: '300', action: 'sell' },
    { rank: 7, name: 'NFLX', avgDailyProfit: '0.9%', overallProfit: '18%', calmarRatio: 2.1, winRate: '63%', price: '500', action: 'view' },
    { rank: 8, name: 'NVDA', avgDailyProfit: '1.3%', overallProfit: '28%', calmarRatio: 3.3, winRate: '70%', price: '750', action: 'buy' },
    { rank: 9, name: 'BABA', avgDailyProfit: '0.7%', overallProfit: '19%', calmarRatio: 2.0, winRate: '62%', price: '200', action: 'sell' },
    { rank: 10, name: 'ORCL', avgDailyProfit: '0.6%', overallProfit: '17%', calmarRatio: 1.8, winRate: '61%', price: '75', action: 'view' },
    { rank: 11, name: 'ADBE', avgDailyProfit: '1.0%', overallProfit: '20%', calmarRatio: 2.6, winRate: '64%', price: '500', action: 'buy' },
    { rank: 12, name: 'INTC', avgDailyProfit: '0.4%', overallProfit: '12%', calmarRatio: 1.2, winRate: '58%', price: '60', action: 'sell' },
    { rank: 13, name: 'CSCO', avgDailyProfit: '0.5%', overallProfit: '15%', calmarRatio: 1.5, winRate: '59%', price: '55', action: 'view' },
    { rank: 14, name: 'IBM', avgDailyProfit: '0.6%', overallProfit: '16%', calmarRatio: 1.6, winRate: '60%', price: '140', action: 'buy' },
    { rank: 15, name: 'SAP', avgDailyProfit: '0.7%', overallProfit: '18%', calmarRatio: 1.8, winRate: '61%', price: '120', action: 'sell' },
    { rank: 16, name: 'AAPL', avgDailyProfit: '1.2%', overallProfit: '30%', calmarRatio: 2.5, winRate: '65%', price: '150', action: 'view' },
    { rank: 17, name: 'GOOGL', avgDailyProfit: '0.8%', overallProfit: '20%', calmarRatio: 3.0, winRate: '70%', price: '2800', action: 'buy' },
    { rank: 18, name: 'MSFT', avgDailyProfit: '1.5%', overallProfit: '25%', calmarRatio: 2.8, winRate: '68%', price: '250', action: 'sell' },
    { rank: 19, name: 'TSLA', avgDailyProfit: '2.0%', overallProfit: '40%', calmarRatio: 4.5, winRate: '75%', price: '600', action: 'view' },
    { rank: 20, name: 'AMZN', avgDailyProfit: '0.5%', overallProfit: '15%', calmarRatio: 1.5, winRate: '60%', price: '3300', action: 'buy' },
    { rank: 21, name: 'FB', avgDailyProfit: '1.1%', overallProfit: '22%', calmarRatio: 2.7, winRate: '67%', price: '300', action: 'sell' },
    { rank: 22, name: 'NFLX', avgDailyProfit: '0.9%', overallProfit: '18%', calmarRatio: 2.1, winRate: '63%', price: '500', action: 'view' },
    { rank: 23, name: 'NVDA', avgDailyProfit: '1.3%', overallProfit: '28%', calmarRatio: 3.3, winRate: '70%', price: '750', action: 'buy' },
    { rank: 24, name: 'BABA', avgDailyProfit: '0.7%', overallProfit: '19%', calmarRatio: 2.0, winRate: '62%', price: '200', action: 'sell' },
    { rank: 25, name: 'ORCL', avgDailyProfit: '0.6%', overallProfit: '17%', calmarRatio: 1.8, winRate: '61%', price: '75', action: 'view' },
    { rank: 26, name: 'ADBE', avgDailyProfit: '1.0%', overallProfit: '20%', calmarRatio: 2.6, winRate: '64%', price: '500', action: 'buy' },
    { rank: 27, name: 'INTC', avgDailyProfit: '0.4%', overallProfit: '12%', calmarRatio: 1.2, winRate: '58%', price: '60', action: 'sell' },
    { rank: 28, name: 'CSCO', avgDailyProfit: '0.5%', overallProfit: '15%', calmarRatio: 1.5, winRate: '59%', price: '55', action: 'view' },
    { rank: 29, name: 'IBM', avgDailyProfit: '0.6%', overallProfit: '16%', calmarRatio: 1.6, winRate: '60%', price: '140', action: 'buy' },
    { rank: 30, name: 'SAP', avgDailyProfit: '0.7%', overallProfit: '18%', calmarRatio: 1.8, winRate: '61%', price: '120', action: 'sell' },
    
  ];

  
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const itemsPerPage = 10;

  const sortedStocks = useMemo(() => {
    let sortableStocks = [...stocks];
    if (sortConfig !== null) {
      sortableStocks.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStocks;
  }, [stocks, sortConfig]);

  const currentStocks = sortedStocks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(stocks.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return faSort;
    }
    return sortConfig.direction === 'ascending' ? faSortUp : faSortDown;
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <div className="hidden  sm:flex gap-2 flex-wrap justify-center font-semibold">
      <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        <FaChartBar size={20} className='mt-1' />
        Leaderboard
        </button>
        <div ref={dropdownRef} className="mt-2 hover:scale-105 transition-all ease-in-out duration-200 relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Historical Trading
          <svg
            className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.7.3l5 5a1 1 0 01-1.4 1.4L10 5.42 5.7 9.7a1 1 0 11-1.4-1.4l5-5A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Historical Charts
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Scanners
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Alerts
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Basic BackTest
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Advanced BackTest
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Pricing
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        My Earing
        </button>
    </div>

    <nav className="sm:hidden flex flex-col  gap-1 font-semibold ">
    <button
      onClick={() => setShowMenu(!showMenu)}
      className=" mt-2 w-10 mx-auto ml-3 hover:scale-105 transition-all ease-in-out duration-300 sm:hidden font-bold text-xl hover:bg-gray-500 hover:bg-opacity-50 p-2 rounded-lg"
      >
      {showMenu ? <GrClose /> : <GiHamburgerMenu />}
    </button>
    {showMenu && (
      <>
        <div className=" flex gap-2 flex-wrap justify-center font-semibold">
      <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        <FaChartBar size={20} className='mt-1' />
        Leaderboard
        </button>
        <div ref={dropdownRef} className="mt-2 hover:scale-105 transition-all ease-in-out duration-200 relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Historical Trading
          <svg
            className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.7.3l5 5a1 1 0 01-1.4 1.4L10 5.42 5.7 9.7a1 1 0 11-1.4-1.4l5-5A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Historical Charts
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Scanners
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Alerts
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Basic BackTest
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Advanced BackTest
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        Pricing
        </button>
        <button className="flex gap-1 hover:bg-gray-100 hover:scale-105 transition-all ease-in-out duration-200 text-black py-2 px-4 rounded-lg m-2">
        My Earing
        </button>
    </div>
      </>
    )}
  </nav>
    
   <div className="container mx-auto p-4">
      <div className=" text-slate-700 p-4 rounded-lg  mb-6 ">
        <h1 className="text-4xl font-bold text-center">Leaderboard</h1>
      </div>
      <div className="sm:mx-10 overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-zinc-300 border-b-2 border-neutral-400">
              <th onClick={() => requestSort('rank')} className="py-2 px-4  text-left text-gray-600 font-semibold cursor-pointer">
                Rank <FontAwesomeIcon icon={getSortIcon('overallProfit')} /></th>
              <th className="py-2 px-4  text-left text-gray-600 font-semibold">Name</th>
              <th onClick={() => requestSort('avgDailyProfit')} className="py-2 px-4  text-left text-gray-600 font-semibold cursor-pointer">
                Avg Daily Profit <FontAwesomeIcon icon={getSortIcon('avgDailyProfit')} />
              </th>
              <th onClick={() => requestSort('overallProfit')} className="py-2 px-4  text-left text-gray-600 font-semibold cursor-pointer">
                Overall Profit <FontAwesomeIcon icon={getSortIcon('overallProfit')} />
              </th>
              <th onClick={() => requestSort('calmarRatio')} className="py-2 px-4  text-left text-gray-600 font-semibold cursor-pointer">
                Calmar Ratio <FontAwesomeIcon icon={getSortIcon('calmarRatio')} />
              </th>
              <th onClick={() => requestSort('winRate')} className="py-2 px-4  text-left text-gray-600 font-semibold cursor-pointer">
                Win%(Day) <FontAwesomeIcon icon={getSortIcon('winRate')} />
              </th>
              <th onClick={() => requestSort('price')} className="py-2 px-4  text-left text-gray-600 font-semibold cursor-pointer">
                Price (Rs) <FontAwesomeIcon icon={getSortIcon('price')} />
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentStocks.map((stock, index) => (
              <tr key={index} className="bg-neutral-100 hover:bg-gray-200 rounded-lg  hover:scale-105 transition-transform duration-300 hover:shadow-md">
                <td className="py-2 px-6 border-b border-gray-200 ">{stock.rank}</td>
                <td className="py-2 px-4 border-b border-gray-200 ">{stock.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 ">{stock.avgDailyProfit}</td>
                <td className="py-2 px-4 border-b border-gray-200 ">{stock.overallProfit}</td>
                <td className="py-2 px-4 border-b border-gray-200 ">{stock.calmarRatio}</td>
                <td className="py-2 px-4 border-b border-gray-200 ">{stock.winRate}</td>
                <td className="py-2 px-4 border-b border-gray-200 ">{stock.price}</td>
                <td className="py-2 px-4 border-b border-gray-200 ">
                  {stock.action === 'view' && <button className="text-blue-500 hover:underline">View</button>}
                  {stock.action === 'buy' && <button className="text-green-500 hover:underline">Buy</button>}
                  {stock.action === 'sell' && <button className="text-red-500 hover:underline">Sell</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 w-24 mx-1 rounded-xl ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 w-24 rounded-xl ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
        >
          Next
        </button>
      </div>
    </div>
    </>
  
  )
}
