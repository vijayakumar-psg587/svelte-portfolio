<style lang="scss">
@import './user-rel.scss';

.linkIconsDiv {
	@include linkIconsDiv();
}

.styleIconClass {
	border-radius: 50%;
	border: 5px solid currentColor;
}

.svgRotate {
	transform: rotate3d(360);
}

svg {
	color: transparent;
	/* fill-opacity: 99; */
	fill: #2994a9;
}
</style>

<script lang="ts">
export let LINKS = [];

function changeIconStylesOnMouseOver(event, i: number = 0) {
	console.log('getting event:', event);
	const sectionEl = document.getElementsByClassName('customSectionLinkIconId' + i)[0];
	sectionEl.classList.add('styleIconClass');
}

function changeIconStylesOnMouseOut(event, i: number = 0) {
	const sectionEl = document.getElementsByClassName('customSectionLinkIconId' + i)[0];
	sectionEl.classList.remove('styleIconClass');
}
</script>

<ul class="linkIconsDiv">
	{#each LINKS as link, i}
		<section
			class="customSectionLinkIconId{i}"
			on:mouseover="{(ev) => changeIconStylesOnMouseOver(ev, i)}"
			on:mouseleave="{(ev) => changeIconStylesOnMouseOut(ev, i)}">
			<li>
				{@html link.icon}
			</li>
		</section>
	{/each}
</ul>
