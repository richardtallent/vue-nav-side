<template>
  <div id="app">
    <nav-side :value="value" :class="{ 'nav-is-overlay': isOverlay }">
		<p>Here's the sidebar.</p>
		<p>You can put anything you like here.</p>
		<p>There's very little default styling, other than the background color, right border, flexbox, and vertical auto-scroll.</p>

		<p>Here's another button to change the visibility mode.</p>
		<center><button class="button is-info" @click="changeNavVisibility">{{ navVisibilityMode }}</button></center>

	</nav-side>
	<div>
		<div class="hero">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">vue-nav-side 0.1</h1>
					<h2 class="subtitle">Highly-configurable, minimalist sidebar navigation control for VueJS applications.</h2>
				</div>
			</div>
		</div>
		<div class="container is-fluid">
			<article class="message is-info">
				<div class="message-body">
					This demo page uses Bulma as a CSS baseline. The component does not rely on Bulma, but works reasonably well
					with it. The exception is that Bulma assumes it controls the entire page, which can cause its breakpoints to
					not work well when the nagivation is present, as you can see from the content here. I recommend not using
					Bulma's responsive layout classes when using this component in auto-open mode.
				</div>
			</article>

			<article class="message is-info">
				<div class="message-body">
					<a href="https://www.github.com/richardtallent/vue-nav-side">Here's the repository on GitHub</a>, which is where you'll find the documentation.
				</div>
			</article>

			<div class="card">
				<div class="card-content">
					<h3 class="subtitle">Visibility Mode</h3>
					<p>Using the button below, you can toggle between the three supported states: open, closed, and auto-open (1, -1, and 0).</p>
					<center><br>
						<button class="button is-info" @click="changeNavVisibility">{{ navVisibilityMode }}</button>
					</center><br>
					<p>For most applications, you would use a hamburger menu or similar interaction to change the mode.</p>
				</div>
			</div>

			<div class="card">
				<div class="card-content">
					<h3 class="subtitle">Overlay Mode</h3>
					<p>Using the button below, you can toggle the "overlay" mode.</p>
					<center><br>
						<button class="button is-info" @click="changeIsOverlay">{{ isOverlay }}</button>
					</center>
				</div>
			</div>
	
		</div>
	</div>
  </div>
</template>

<script>
import NavSide from "./components/vue-nav-side.vue"

export default {
	name: "App",
	components: {
		NavSide,
	},
	data: () => ({
		value: 0,
		isOverlay: false,
	}),
	computed: {
		navVisibilityMode() {
			if (this.value === 0) return "Auto"
			if (this.value === -1) return "Closed"
			if (this.value === 1) return "Open"
		},
	},
	methods: {
		changeIsOverlay() {
			this.isOverlay = !this.isOverlay
		},
		changeNavVisibility() {
			if (this.value === 0) {
				this.value = 1
			} else if (this.value === -1) {
				this.value = 0
			} else {
				this.value = -1
			}
		},
	},
}
</script>