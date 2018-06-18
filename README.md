## Introduction

**vue-nav-side** is a **minimalist**, responsive side navigation component for Vue. The current version is **0.1.0**.

Sidebar navigation is a common need, and there are some great components out there, but most are either too opinionated, or are part of large UI libraries, or both.

I wanted something lightweight, responsive, and as customizable as possible. This component is the result.

Features:

* Almost everything is CSS-driven
* Minimal styling of the component contents
* Most hard-coded style decisions can be overridden by CSS variables
* Any other style decisions are up to you, using normal CSS rules
* Slotted content
* You can have multiple sidebars (left and right, for example).

## Demo
Here's a live demo page:
https://www.tallent.us/vue-nav-side/

Note that in the demo, the *contents* of the sidebar are purposefully bare -- this is where you would add and style your own content, such as a navigation tree or accordion, a configuration/property panel, or whatever else you like. The component is simply a wrapper to enforce the open/closed state and provides a minimal default style.

## Example

```HTML
<div id="app">
	<nav-side>
		Navigation contents go here...
	</nav-side>
	<div>
		Remainder of the page goes here...
	</div>
</div>
```

## Props
There is a single prop: `value`, which requires a **Number** value:
* A *negative* value will *force* the navigation to be closed (hidden)
* A *positive* value will *force* the navigation to be open (visible)
* A *zero* value will open the navigation on wider devices and close it on others (this is the default value)

This allows you to configure your interface to either be the same on mobile and desktop devices, or allows the option of keeping the menu open (if there's room) on desktop devices.

You are responsible for programming a "hamburger" menu or other interaction to change this prop to open and close the menu (especially on mobile devices, where it is closed by default). Note that because this property always expects a number, you will need to use the `v-bind:value` or shorthand `:value` to set it. If you try to use, say, `<vue-nav-side value="0"/>` (no ":"), you'll get an error, as unbound attribute values are passed as strings.

## Events
This component emits no events.

## Classes
There is one optional class: `nav-is-overlay`. If you set this class on your component instance, the menu will *overlay* your page when the `value` is `1` rather than taking up room on the side. It is important to note that this class has *no effect* on the component if you have the `value` set to `0` (auto-open) -- an auto-open navigation *always* appears beside the other page content.

## Required parent environment
This component is **flexbox-based**, so it expects its parent element to have the following styles:

```CSS
{
	/* Required, unless you use the `nav-is-overlay` class and never set `value` to "0". "row-reverse" also works. You may also need to set the grow, shrink, basis, height, and width. */
	display: flex;
	flex-direction: row;
	overflow: hidden;

	/* This is required if you use nav-is-overlay. "absolute" also works. */
	position: relative;

	/* While not strictly required, these are usually a good idea */
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
```

The navigation will appear on either the left or the right depending whether you place it before or after your other content in the parent, and depending on the user's RTL setting.

## CSS Variables
You can use the `style` attribute to override any of the following CSS variables:

### --nav-side-hidden-width
This is the width of the component when in the "closed" state. By default, this is `0`. Some sidebar menus are never actually hidden, they simply collapse so only some primary icons are visible. If you want that sort of sidebar, you can set this value to the "collapsed" width. Note that in auto-visible mode, the component has the same class assigned (`nav-is-auto`) whether it is "visible" or "hidden" -- the width is controlled by a media query. Keep this in mind if you want the contents of the sidebar to show up differently in the "closed" and "open" state.

### --nav-side-visible-width
This is the width of the component when in the "open" state. The default is `20rem`. I have an aversion to pixel-based measurements, and this is a decent width for most sidebar contents and looks good on both mobile and desktop devices. However, if you prefer some other value or unit of measure, you can use what you want here. Just be sure your chosen width isn't wider than a mobile screen in portrait mode.

### --nav-side-animation-timing
This is the transition time for moving between the "closed" and "open" state. The default is `0.1s`. IMHO, 100ms is snappy and responsive, while still giving the impression of movement rather than having the sidebar jarringly blink in and out of existence. YMMV, especially if the contents of the menu have complicated reflows or you're targeting very slow devices. Set to `0s` to effectively disable the animation.

## Default style
In addition to the variables above, the component has a default off-white background color (#f0f0f0) and small right border in light grey (1px #e0e0e0), scrolls vertically if needed, and renders its children using flexbox (each child as a row). These were chosen as sensible defaults for a side navigation component, but you can override them using normal CSS. I suggest targeting something like `.vue-nav-side.my-class` to override the styling rather than using `style` attributes or using `!important` directives.

## Browser compatibility
This component does not support Internet Explorer 11 or below, due to the use of CSS variables. I'm no longer targeting IE11 in any of my personal or projects, and don't have a means of testing it easily. Other than that, any browser with flexbox support should work fine.

### Localization
This component requires no special considerations for localization. Note that flexbox renders components based on the user's locale left-to-right or right-to-left setting, so for some users, this component may appear on the opposite side of the browser than your own browser.

## Installation and Usage
_(This assumes you already have a web application set up for using Vue. If you're starting a new project, look up the documentation for the Vue CLI, which will allow you to initialize a new project with webpack, etc.)_

Install the component using npm:

```
npm i --save vue-nav-side
```

In your application, you'll need to:
* import the component
* create the `nav-side` custom element
* ensure the parent of the element has the required styling
* wire up the `value` property to your logic
* fill the component's default slot with your sidebar content

## Future plans

I've just created this component, I haven't used it in a production web site yet. Changes may be needed as I figure out real-world situations.

That said, my goal is to keep this as simple as possible in its state, DOM, and default CSS.
