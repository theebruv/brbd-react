import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="container mx-auto px-4 py-5 block">
                <div className="float-left">
                    <span className="text-black text-xl font-bold py-2">Breaking Bad</span>
                </div>
                <div className="float-right">
                    <a href="https://github.com/tankip/brbd-react" target="_blank" rel="noopener noreferrer" className="bg-white-500 hover:bg-white-800 text-black font-bold py-2 px-4 border">Github</a>
                </div>
            </header>
        </div>
    )
}

export default Header;
