import styles from './Resume.module.css'
import Image from 'next/image'

const Resume = () => {
	return (
		<div className={styles.main}>
			<section className={styles.header}>
				<div className={styles.headerInfo}>
					<h1>{'артем'}</h1>
					<p>{'11.05.2003 - ???'}</p>
					<p>
						{'88005553535'}<span>{' — мобила'}</span>
					</p>
					<a href="аек5цф2sobaka.меил.ру">{'ftr5wa2@gmail.com'}</a>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'работа'}</h2>
				<p>{'дизайнер'}</p>
			</section>

			<section className={styles.section}>
				<h2>{'Опыт работы — 1 год 6 месяцев'}</h2>
				<p>{'Октябрь 2023 — настоящее время'}</p>
				<div>
					<h3>{'iSpring'}</h3>
					<p>{'Йошкар - Ола'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Образование'}</h2>
				<p>{'Неоконченное высшее — 2025'}</p>
				<p>{'Поволжский государственный технологический университет, Йошкар-Ола'}</p>
				<p>{'Факультет информатики и вычислительной техники, Программная инженерия'}</p>
			</section>

			<section className={styles.section}>
				<h2>{'Навыки'}</h2>
				<ul>
					<li>{'А'}</li>
					<li>{'Б'}</li>
					<li>{'Тык'}</li>
					<li>{'Мык'}</li>
					<li>{'Пык'}</li>
					<li>{'Ни бе'}</li>
					<li>{'Ни ме'}</li>
					<li>{'Дизайн'}</li>
				</ul>
			</section>
		</div>
	)
}

export {
	Resume,
}