<style lang="scss">
@import './header.scss';

.iconDivs {
	@include iconDivs;
}

.navBarContainer {
	@include navBarContainer;
}

.customNav {
	@include customNav;
}

.containerFluidDiv {
	height: 11vh !important;
	display: flex;
	flex-direction: row-reverse;
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
	position: relative;
	top: -1.4em;
	align-items: center;
	display: grid;
	width: 100%;
	color: #72a7b1;
	grid-template-columns: 30% 20% 50%;
}

.avatar {
	grid-column: 3 / span 1;
	margin-left: 3px;
	width: 75px;
	border-radius: 50%;
	height: 70px;
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
	width: 52%;
	height: 100%;
	background: #1a499a;
	border-radius: 12px 12px 12px 14px;
}
</style>

<script type="ts">
import { HEADEROBJ, MODELLIST } from './header-comp';
import { onMount } from 'svelte';
import { Button } from 'sveltestrap';

let url = HEADEROBJ['imageUrl'];
</script>

<div class="containerFluidDiv container-fluid">
	<nav class="customNav navbar navbar-expand-lg navbar-dark bg-primary">
		<div class=" container-fluid navBarContainer">
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
			<div class="portfolioDiv" id="portfolio">
				<section class="titleSection">
					<!-- <h3>{headerObj['title']}</h3> -->
				</section>
				<section class="verticalSection"></section>
				<section class="avatar" style="background-image: url({url});"></section>
			</div>
		</div>
	</nav>
</div>
