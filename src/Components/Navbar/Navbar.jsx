import React, { useState, useRef, useContext } from 'react';

import { Link } from "react-scroll";
import styled from 'styled-components';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import resume from "../../Assests/Resume/Parikshit-Holey-Resume.pdf";
import styles from './Navbar.module.css';

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		transform: 'rotate(-45deg)',
	},
};

const Navbar = () => {
	// const [preScrollPos, setPreScrollPos] = useState(
	// 	window.pageYOffset,
	// );
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	// window.onscroll = () => {
	// 	let currentScrollPos = window.pageYOffset;
	// 	if (preScrollPos > currentScrollPos) {
	// 		navRef.current.style.top = '0';
	// 	} else {
	// 		navRef.current.style.top = '-80px';
	// 	}
	// 	setPreScrollPos(currentScrollPos);
	// };

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
		>
			<div className={styles.navbar}>
				<a href="">
					<div className={styles.logo}>
						<img
							src='https://th.bing.com/th?q=Ph+Com+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'
							alt='Logo'
						/>
					</div>
				</a>

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					<Link
					to='home' activeClass="active" spy={true} smooth={true} offset={-200} duration={500} >Home</Link>
					<Link 
					to='about'
					activeClass="active" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
					<Link spy={true} smooth={true} offset={-70} duration={500} to="techstacks">Skills</Link>
					<Link 
					to='projects'
					activeClass="active"spy={true} smooth={true} offset={-70} duration={500} >Projects</Link>

					<Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >Contact</Link>
					<a
              href={resume}
              download={"Parikshit-Holey-Resume"}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
				</div>
				<button
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					{mode === 'light' ? (
						<i class="fas fa-lightbulb"></i>
						) : (
							<i class="far fa-lightbulb"></i>
					)}
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					></div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;


const Home=styled.div`

`