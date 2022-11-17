import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import { Github } from './Github';
import { VscGithub } from "react-icons/vsc";
import { DiGit } from "react-icons/di";
import styles from './TechStacks.module.css';
import { SiChakraui, SiCypress, SiHeroku } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import {
	
	SiNetlify,
	
	SiJest,
  } from "react-icons/si";
import Statistics from './Statistics';
const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
		id="techstacks"
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'

		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Skills
			</h1>
			
			<div className={styles.borderBottom} />
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Front End
			</h1>
			<div className={styles.borderBottom} />
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-html5-plain colored' />
					<span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-css3-plain colored' />
					<span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-javascript-plain colored' />
					<span>Javascript</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-react-original colored' />
					<span>React</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					<span>Redux</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						className='devicon-npm-original-wordmark colored'
					/>
					
					<span>Npm</span>
				</div>
				
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					 <SiChakraui />
					<span>Chakra Ui</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					  <SiNetlify />
					<span>Netlify</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<TbBrandVercel />
					<span>Vercel</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					 <SiJest/>
					<span>Jest</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					  <DiGit />
					<span>Git</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<VscGithub />
					<span>Github</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<SiHeroku  />
					<span>Heroku</span>
				</div>
				
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<SiCypress   />
					<span>Cypress</span>
				</div>
				
				</div>
				
			  
			   <h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			    >
				Back End
			   </h1>
			<div className={styles.borderBottom} />
				<div className={styles.container}>
				
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/>
					<span>Node</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-express-original' />
					<span>Express</span>
				</div>
				<div
					style={{
						color: `${newTheme.buttonColor}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i className='devicon-mongodb-plain colored' />
					<span>MongoDB</span>
				</div>
								
			</div>
			   
			 <div>
			 <h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			    >
				
				<Statistics/>
			   </h1>
			  
				<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			    >
				
				<Github/>
			   </h1>
			 </div>

		</div>
	)
};

export default TechStacks;

