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
import { loadAnimation } from './header-animation';

let url = HEADEROBJ['imageUrl'];

let isLoading: boolean = false;
onMount(async () => {
	// prefer loading for 0.4 sec
	setTimeout(() => {
		loadAnimation();
	}, 500);
});
</script>

{#if !isLoading}
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
{/if}
