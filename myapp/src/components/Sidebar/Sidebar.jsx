import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isExpand, setIsExpand] = useState(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  return (
    <nav
    role='navigation'
    className={[
      "bg-slate-50 border-r border-slate-100 shadow-sm absolute inset-y-0 left-0",
      "duration-300 ease-in-out md:fixed md:translate-x-0",
      `${
        isExpand ? "bg-slate-50 w-72" : isExpandOnHover
        ? "bg-slate-50/70 w-72 backdrop-blur-md"
        : "bg-slate-50 w-20"
      }`  
    ]}
    >
      <button>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isExpand ? "rotate-0" : "rotate-180"
          } transform duration-500 h-4 w-4`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />

        </svg>
      </button>
      <Link to='/graph'>Graph</Link>
      <Link to='/pie-chart'>Pie chart</Link>
    </nav>
  )
}

export default Sidebar