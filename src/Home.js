import React from 'react';
import './Home.css';
import Banner from './Banner';
import './Banner.css';
import Card from './Card';

function Home() {
	return (
		<div>
			<Banner />
			<div className="home__section">
				<Card
					src={'https://i.pinimg.com/originals/c7/ce/6c/c7ce6c083a5d52daf39175604fe61e26.jpg'}
					title={'CatWalk Loft'}
					description={'A greate place to talk your cat for a walk'}
					price={200}
				/>
				<Card
					src={'https://i.ytimg.com/vi/Bn79zefOjFw/maxresdefault.jpg '}
					title={'Sqaure Mansion'}
					description={'did Someone say geometry?'}
					price={3000}
				/>
				<Card
					src={'https://miro.medium.com/max/2560/1*dXqlLsZjfFwfAW-jyWGmxw.jpeg '}
					title={'WaterWay Mansion'}
					description={'You wanna go for a Swim'}
					price={2400}
				/>
			</div>

			<div className="home__section">
				<Card
					src={
						'https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/09/PRI_86925433.jpg?quality=90&strip=all&zoom=1&resize=964%2C482&ssl=1'
					}
					title={'Mountain Mansion'}
					description={'Can you see me from Here?'}
					price={2300}
				/>
				<Card
					src={
						'https://assets.architecturaldesigns.com/plan_assets/325006142/large/915047CHP_001_1597759086.jpg?1597759086 '
					}
					title={'Country Mansion'}
					description={'Were your the president'}
					price={3200}
				/>
				<Card
					src={
						'https://www.luxxu.net/blog/wp-content/uploads/2017/08/Luxury-Homes-That-Give-Modern-Living-A-Whole-New-Meaning-Heber-Utah.jpg'
					}
					title={'Hillside View'}
					description={'where hills dont have eyes'}
					price={2100}
				/>
			</div>
		</div>
	);
}

export default Home;
