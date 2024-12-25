import React from 'react'
import githubLinkIcon from '../assets/external-link.png';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-3 md:py-2 sm:py-1 mt-10">
      <div className="mb-2 md:mb-0 flex items-center">
        {/* Developed By Text */}
        <h4 className="font-semibold text-md pl-3 md:text-sm mr-2 ">Developed by Parth Desai</h4>
        
        {/* GitHub Icon Link */}
        <a 
          href="https://github.com/your-github-username" // Replace with your GitHub link
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={githubLinkIcon} alt="GitHub Link" className="w-4 h-4" />
        </a>
      </div>
    </footer>

  )
}

export default Footer