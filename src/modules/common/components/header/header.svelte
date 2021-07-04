<style lang="scss">
@import './header.scss';

.iconDivs {
	@include iconDivs;
}

.navBarContainer {
	@include navBarContainer;
}

// .customNav {
// 	@include customNav;
// 	display: grid;
// 	grid-template-columns: 3fr 0.5fr 1fr;
// 	place-content: center;
// }

.mainNavDiv {
	grid-column: 1 / span 1;
}

.rightNavDiv {
	grid-column: 3 / span 1;
}

.containerFluidDiv {
	height: 11vh !important;
	//display: flex;
	//flex-direction: row-reverse;
}

.gitHubImage {
	@include imageIcon;
}

.twitterImage {
	@include imageIcon;
}

.linkedInImage {
	@include imageIcon;
}
.portfolioDiv {
	position: initial;
	top: -1.4em;
	align-items: center;
	place-content: center;
	display: inline-grid;
	width: 100%;
	color: #72a7b1;
	grid-template-columns: 65% 8% 27%;
}

.avatar {
	grid-column: 3 / span 1;
	margin-left: 3px;
	width: 75px;
	border-radius: 50%;
	height: 70px;
	transform: translateX(2em);
	// background-image: url(./static/image/my-image.JPG);
	background-size: cover;
	//  this is
	border: 3px inset #738f90;
	border-radius: 50%;
}

.titleSection {
	grid-column: 1 / span 1;
}

.noBorderClass {
	border: none !important;
	background: none !important;
}
.verticalSection {
	grid-column: 2 / span 1;
	backdrop-filter: blueviolet;
	border-left: 10px;
	width: 15%;
	height: 100%;
	background: #1a499a;
	border-radius: 12px 12px 12px 14px;
}
</style>

<script type="ts">
import { HEADEROBJ, MODELLIST, LINKS } from './header-comp';
import { onMount } from 'svelte';
import gsap from 'gsap';
import { Button } from 'sveltestrap';
import UserRel from '../user-rel-links/user-rel.svelte';

let url = HEADEROBJ['imageUrl'];

onMount(() => {
	// duration: navDurationStart,
	// 	ease: 'bounce.out',
	// 	y: '-132%',

	// 	css: {
	// 		translateY: '10%',
	// 		opacity: 0.8,
	// 		borderBottomLeftRadius: '3em',
	// 		borderBottomRightRadius: '3em',
	// 		height: '20vh',
	// 		background: 'linear-gradient(315deg, #cefcfd 0%, #cefcfd 35%, #61ddfc 100%) !important'
	const navDurationStart = 1;
	const t1 = gsap.timeline();
	const duration = 3.5;

	t1.from('.customNav', {
		transformOrigin: 'center',

		keyframes: [
			{
				css: {
					translateY: '-100%',
					borderBottomLeftRadius: '0.2em',
					borderBottomRightRadius: '0.2em'
				},
				duration: 0.5,
				display: 'none'
			},
			{
				css: {
					translateY: '0%',
					borderBottomLeftRadius: '0.8em',
					borderBottomRightRadius: '0.8em'
				},
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
});
</script>

<div class="containerFluidDiv container-fluid">
	<nav id="headerNav" class="customNav navbar navbar-expand-lg navbar-dark">
		<div class="mainNavDiv container-fluid navBarContainer">
			<ul class="headerIconUl navbar-nav">
				{#each MODELLIST as m}
					<li>
						<div class="iconDivs">
							<Button style="background:none; border:none">
								<img
									class="{m.class}"
									style="{m.customStyle}"
									src="{m.src}"
									alt="{m.altImageName}" />
							</Button>
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div class="rightNavDiv container-fluid navBarContainer">
			<div class="portfolioDiv" id="portfolio">
				<section class="titleSection">
					<!-- TO Make it more interesting u can pass the links from the parent i.e header -->
					<UserRel LINKS="{LINKS}" />
					<!-- <h3>{headerObj['title']}</h3> -->
				</section>
				<section class="verticalSection"></section>
				<section class="avatar" style="background-image: url({url});"></section>
			</div>
		</div>
	</nav>
</div>
