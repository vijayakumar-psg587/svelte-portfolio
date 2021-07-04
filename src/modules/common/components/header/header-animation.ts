import gsap from 'gsap';
export function loadAnimation() {
	const t1 = gsap.timeline();
	const loadNavTimeLineAnimation = t1.from('.customNav', {
		keyframes: [
			{
				css: {
					translateY: '-120%',
					borderBottomLeftRadius: '0.2em',
					borderBottomRightRadius: '0.2em'
				},
				duration: 0.5
			},
			{
				css: {
					translateY: '-80%',
					borderBottomLeftRadius: '0.8em',
					borderBottomRightRadius: '0.8em'
				},
				display: 'none',
				background:
					'linear-gradient(315deg, rgb(72 154 156) 0%, rgb(169, 244, 253) 35%, rgb(146 185 195) 100%)',
				duration: 0.5
			},
			{
				css: {
					translateY: '0%',
					borderBottomLeftRadius: '0.8em',
					borderBottomRightRadius: '0.8em'
				},
				display: 'none',
				background:
					'linear-gradient(315deg, rgb(72 154 156) 0%, rgb(169, 244, 253) 35%, rgb(146 185 195) 100%)',
				duration: 0.5
			},
			{
				background:
					'linear-gradient(315deg, rgb(72 154 156) 0%, rgb(169, 244, 253) 35%, rgb(146 185 195) 100%)',
				css: {
					translateY: '70%',
					borderBottomLeftRadius: '1em',
					borderBottomRightRadius: '1em'
				},
				duration: 0.5
			},
			{
				css: {
					translateY: '40%',
					borderBottomLeftRadius: '2em',
					borderBottomRightRadius: '2em',
					background: 'linear-gradient(315deg, #cefcfd 0%, #a9f4fd 35%, #61ddfc 100%)'
				},
				duration: 0.5
			},
			{
				css: {
					translateY: '70%',
					borderBottomLeftRadius: '2.5em',
					borderBottomRightRadius: '2.5em',
					background: 'linear-gradient(315deg, #cefcfd 0%, #a9f4fd 35%, #61ddfc 100%)'
				},
				duration: 0.5
			}
		],
		ease: 'bounce.easeOut'
	});
}
