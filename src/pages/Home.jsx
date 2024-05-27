/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState ,useMemo} from 'react'
import { FaChartArea,FaChartBar,FaChartLine } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <>
   <div className="container mx-auto p-4">
      <div className=" text-slate-700 p-4 rounded-lg  mb-6 ">
        <h1 className="text-4xl font-bold text-center">Leaderboard</h1>
      </div>
      <div className="overflow-x-auto">
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
