
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import resume from "../src/Assests/Resume/Parikshit-Holey-Resume.pdf"
import Home from './Pages/Home/Homepage';
import { ThemeContext } from './ThemeContext/ThemeContext';

function App() {
	const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		useContext(ThemeContext);
	const scrollRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setState(true);
		}, 2000);
	}, []);

	return (
		<>
			{!state ? (
				<div
					style={{
						background: `${newTheme.background}`,
					}}
					className='logoStart'
				>
					<img
						src='https://th.bing.com/th?q=Ph+Com+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
						alt='logo'
					/>
				</div>
			) : (
				<div className='components'>
           
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<a onClick={handleMenu} href='#home'>
							Home
						</a>
						<a onClick={handleMenu} href='#about'>
							About
						</a>
						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						<a onClick={handleMenu} href='#techstacks'>
							Skills
						</a>
						<a onClick={handleMenu} href='#contact'>
							Contact
						</a>
						<a
              href={resume}
              download
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			)}
		</>
  );
}

export default App;
