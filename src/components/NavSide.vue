<template>
	<nav :class="visibilityMode" class="nav-side">
		<slot/>
	</nav>
</template>
<script>
export default {
	name: "NavSide",
	props: {
		value: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		visibilityMode() {
			if (this.value < 0) return "nav-is-closed"
			if (this.value > 0) return "nav-is-open"
			return "nav-is-auto"
		},
	},
}
</script>
<style>
/* By default, the nav is *closed*. */
.nav-side {
	--nav-side-hidden-width: 0;
	--nav-side-visible-width: 20rem;
	--nav-side-animation-timing: 0.1s;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
	box-sizing: border-box;
	background-color: #f0f0f0;
	border-right: 1px none #e0e0e0;
	min-width: var(--nav-side-hidden-width);
	max-width: var(--nav-side-hidden-width);
	transition: min-width var(--nav-side-animation-timing),
		max-width var(--nav-side-animation-timing);
}

/*
	If in overlay mode, the menu overlaps the other content when visible. This has no effect
	if set to auto-open mode, because auto-open mode only activates when the display
	is wide enough that an overlay is not needed.
*/
.nav-side.nav-is-overlay:not(.nav-is-auto) {
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: 1;
}

/* Auto-open on wide devices */
@media only screen and (min-width: 1025px) {
	.nav-side.nav-is-auto {
		border-right-style: solid;
		min-width: var(--nav-side-visible-width);
		max-width: var(--nav-side-visible-width);
		transition: min-width var(--nav-side-animation-timing),
			max-width var(--nav-side-animation-timing);
	}
}

/* Open on any device if hard-set to open state */
.nav-side.nav-is-open {
	border-right-style: solid;
	min-width: var(--nav-side-visible-width);
	max-width: var(--nav-side-visible-width);
	transition: min-width var(--nav-side-animation-timing),
		max-width var(--nav-side-animation-timing);
}
</style>
