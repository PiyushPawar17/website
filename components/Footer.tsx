const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container footer__content">
				<p className="footer__copyright type__info">Designed and Developed by Piyush Pawar</p>
				<div className="footer__social-icons">
					<a href="https://github.com/PiyushPawar17" target="_blank" rel="noreferrer noopener">
						<img src="/img/logos/github.svg" alt="GitHub" />
					</a>
					<a href="https://www.linkedin.com/in/piyush-pawar" target="_blank" rel="noreferrer noopener">
						<img src="/img/logos/linkedin.svg" alt="LinkedIn" />
					</a>
					<a href="https://dribbble.com/PiyushPawar17" target="_blank" rel="noreferrer noopener">
						<img src="/img/logos/dribbble.svg" alt="Dribbble" />
					</a>
					<a href="https://twitter.com/PiyushPawar_17" target="_blank" rel="noreferrer noopener">
						<img src="/img/logos/twitter.svg" alt="Twitter" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
