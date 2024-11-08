/* ==UserStyle==
@name           Gitsha
@namespace      github.com/openstyles/stylus
@version        1.0.0
@description    A new userstyle
@author         Snesh
@preprocessor	less
@var select		gradType    "Gradient style" ["animated:Animated*", "flouss: Static", "nouss:None"]
@var checkbox	grain "Grainy texture" 1
@var color   	gradcolor1 "Gradient Color 1" rgb(8, 19, 54)
@var color   	gradcolor2 "Gradient Color 2" rgb(26, 58, 102)
@var color   	gradcolor3 "Gradient Color 3" rgb(43, 1, 91)
@var color   	gradcolor4 "Gradient Color 4" rgb(122, 2, 54)
==/UserStyle== */
@-moz-document domain("github.com") {



	/*SECTION [SNESHLIB - Start] */
	/*ANCHOR [VARIABLES]*/
	@hap				: url('https://github.com/senshastic/sneshGPT/blob/main/assets/Hap.png?raw=true');
	@borderRadius		: 12px;
	@creamColor			: #d0b575;
	@creamColorMuted	: #4f4733;



	/*ANCHOR [DETACHED RULESETS] */
	@gradientBackground: {
		background: linear-gradient(109.6deg, @gradcolor1 0%, @gradcolor2 25%, @gradcolor3 50%, @gradcolor4 100%);
	}

	@gradientAnimation: {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0% 0%;
		}
	}

	@buttons: {
		background-color: rgba(5, 5, 5, .18) !important;
		border-radius: 12px !important;
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.37);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}

	@buttonsHover: {
		background-color: rgba(5, 5, 5, 0) !important;
		border-radius: 12px;
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.37);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		transform: translateY(-4px);
	}

	@transparentButtons: {
		border-radius: 12px !important;
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.37);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}

	@buttonsFlat: {
		border-radius: 12px !important;
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}


	@transparentButtonsHover: {
		border-radius: 12px;
		box-shadow: 0 8px 15px rgba(0, 0, 0, 0.37);
		-webkit-backdrop-filter: blur(100px);
		backdrop-filter: blur(100px) saturate(110%);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		transform: translateY(-4px);
	}


	@buttonsHoverWhite: {
		background-color: rgba(5, 5, 5, 0) !important;
		border-radius: 12px;
		box-shadow: 0 8px 15px rgba(255, 255, 255, .37) !important;
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transform: translateY(-4px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, transform box-shadow 0.3s ease-in-out;
	}

	@menuItemHover: {
		border: 1px solid rgba(0, 204, 255, 0.6);
		background-color: rgba(5, 5, 5, 0.35) !important;
		box-shadow: 0 0 10px 2px rgba(0, 204, 255, 0.3);
		transform: translateY(-2px);
		transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
		border-radius: 12px;
	}

	@grainyTexture: {
		content: "" !important;
		position: absolute !important;
		top: 0 !important;
		left: 0 !important;
		width: 100% !important;
		height: 100% !important;
		pointer-events: none !important;
		z-index: 0 !important;
		background: url("https://raw.githubusercontent.com/senshastic/sensha-betterer-todoist/refs/heads/main/assets/noise.svg") repeat !important;
		opacity: 0.23 !important;
	}

	@backdrop: {
		background-color: rgba(5, 5, 5, .18) !important;
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		padding: 5px;
	}

	@disappear: {
		background: transparent !important;
		border: 0px;
		box-shadow: none;
	}

	@transparent: {
		background: transparent;
	}

	@noise: {
		content: "" !important;
		background: url("https://raw.githubusercontent.com/senshastic/sensha-betterer-todoist/refs/heads/main/assets/noise.svg") repeat !important;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		position: fixed;
		top: 0 !important;
		left: 0 !important;
		width: 100% !important;
		height: 100% !important;
		pointer-events: none !important;
		z-index: -1 !important;
		opacity: 0.23 !important;
	}


	@boxShadowHover: {
		box-shadow: 0 0px 10px rgba(0, 204, 255, 0.6);
		background-color: rgba(0, 81, 255, 0.1);
	}

	@textArea: {
		border: 1.5px solid @creamColor !important;
		background-color: transparent !important;
	}

	/* ANCHOR [ANIMATIONS] */
	@hoverChannelSlide: {
		margin-left: 10px !important;
		transition: margin-left 0.2s ease;
		background-color: transparent;
	}

	/* Snake */
	@snakeTarget: {
		position: relative;
		padding: 16px;
		border-radius: 18px;
		background: rgba(0, 0, 0, 0.7);
		z-index: 1;
		overflow: hidden;
	}


	@snakeBefore: {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: inherit;
		padding: 3px;
		background: linear-gradient(90deg, transparent 0%, transparent 40%, white 50%, transparent 60%, transparent 100%);
		background-size: 200% 200%;
		animation: smoothSnakeLine 6s linear infinite;
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		z-index: -1;
	}

	@keyframes smoothSnakeLine {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 200% 50%;
		}
	}

	/*!SECTION [SNESHLIB - End]*/
	/*ANCHOR [ROOT] */
	:root {
		--fgColor-accent: @creamColor !important;
		--borderColor-default: @creamColor !important;
		--borderColor-muted: @creamColorMuted !important;
	}

	.Button--secondary {
		background: transparent;
		border: none;
		color: @creamColor;
	}

	.Button--secondary:hover {
		@buttonsHover();
		color: @creamColor;
	}

	.Button--danger {
		background: transparent !important;
		border: none;
	}

	.Button--danger:hover {
		@transparentButtonsHover();
		background-color: var(--button-danger-iconColor-rest) !important;
	}


	/*ANCHOR [Top bar] */
	/* Replaces with hap */
	#js-logo-nav {
		display: block;
		width: 150px;
		height: 35px;
		background-image: @hap;
		background-size: contain;
		background-repeat: no-repeat;
		margin-left: 20px;
	}

	.pz-nav__logo {
		display: none;
		/* Hides the original SVG */
	}

	.AppHeader-button,
	.AppHeader .AppHeader-globalBar .AppHeader-search input[type=search],
	.AppHeader .AppHeader-globalBar .AppHeader-search .AppHeader-searchButton {
		border: 1px solid @creamColorMuted !important;
	}


	/* modals */
	/*ANCHOR [Gradient background options and grain] */
	body when (@gradType =flouss) {
		@gradientBackground();
	}


	body when (@gradType =animated) {
		@gradientBackground();
		background-size: 400% 400%;
		animation: gradientAnimation 20s ease infinite;
	}


	body when (@gradType =nouss) {
		background-color: @gradcolor1 !important;
	}

	div[itemscope][itemtype="http://schema.org/Organization"] when (@gradType =flouss) {
		@gradientBackground();
	}


	div[itemscope][itemtype="http://schema.org/Organization"] when (@gradType =animated) {
		@gradientBackground();
		background-size: 400% 400%;
		animation: gradientAnimation 20s ease infinite;
	}


	div[itemscope][itemtype="http://schema.org/Organization"] when (@gradType =nouss) {
		background-color: @gradcolor1 !important;
	}


	@keyframes gradientAnimation {
		@gradientAnimation();
	}


	.AppHeader::before when (@grain =1) {
		@noise();
		z-index: 0 !important;
	}

	/* Dashboard */
	.feed-background when (@gradType =flouss) {
		@gradientBackground();
	}


	.feed-background when (@gradType =animated) {
		@gradientBackground();
		background-size: 400% 400%;
		animation: gradientAnimation 20s ease infinite;
	}


	.feed-background when (@gradType =nouss) {
		background-color: @gradcolor1 !important;
	}

	.select-menu-header,
	.select-menu-divider,
	.select-menu-filters {
		background-color: transparent;
	}



	/*ANCHOR [Header] */
	.AppHeader-logo::before {
		content: "";
		display: block;
		width: 32px;
		height: 32px;
		background: @hap no-repeat center center;
		background-size: contain;
	}

	/* Hide the existing SVG logo */
	.AppHeader-logo svg {
		display: none !important;
	}


	.AppHeader {
		@gradientBackground();
	}


	.AppHeader-context-item:hover {
		@buttonsHover();
	}

	/*ANCHOR [Transparenting shit] */
	/*ANCHOR [Sidebar Styling] */
	/*ANCHOR [USER PAGE] */
	.Box,
	.graph-before-activity-overview {
		@backdrop();
		border: none !important;
	}

	.Box:hover {
		@boxShadowHover();
	}

	.btn,
	.drIBIt {
		@disappear();
		border: none !important
	}

	.btn:hover,
	.drIBIt:hover {
		@buttonsHover();
		border: none !important
	}

	.color-bg-default,
	.bgColor-default {
		@disappear();
		border: none !important
	}

	.user-status-circle-badge,
	.TimelineItem-badge {
		@gradientBackground();
		border: none !important
	}

	.js-year-link {
		@buttons();
	}

	.js-year-link:hover {
		@buttonsHover();
	}

	.Box-body {
		border: none !important;
	}

	/* Fix line */
	.h6.pr-2.py-1.border-bottom.mb-3 {
		padding-bottom: 19px !important;
	}


	body > div.logged-in.env-production.page-responsive.full-width > div.application-main > div > div > aside > div > div > loading-context > div > div.Details.js-repos-container.mt-5 > div > ul > li:hover {
		@hoverChannelSlide();
	}

	/*ANCHOR [EDIT PROFILE] */
	textarea[id="user_profile_bio"],
	input[id="user_profile_name"],
	input[aria-label="Company"],
	input[aria-label="Location"],
	select[id="user_profile_email"],
	input[aria-label="Website"],
	input[aria-label="Link to social profile"],
	select[aria-label="Time zone"],
	select[name="user[profile_pronouns]"],
	input[id="dashboard-repos-filter-left"] {
		@textArea();
	}


	/*ANCHOR [MOSAIC] */
	/* Targeting the mosaic element */
	.graph-before-activity-overview {
		@snakeTarget();
	}

	/* Adding the animated glowing gradient border using a pseudo-element  div.relative.max-w-\[70\%\].rounded-3xl::before, */
	.graph-before-activity-overview::before {
		@snakeBefore();
	}

	/*colors mosaic gradient */
	:root {
		--color-calendar-graph-day-L1-bg: @gradcolor1 !important;
		--color-calendar-graph-day-L2-bg: @gradcolor3 !important;
		--color-calendar-graph-day-L3-bg: @gradcolor2 !important;
		--color-calendar-graph-day-L4-bg: @gradcolor4 !important;
		--color-calendar-graph-day-bg: @creamColorMuted !important;
	}




	/*ANCHOR [DASHBOARD] */
	.p-3.mt-2.border.color-border-muted.rounded-1.color-shadow-medium.height-full.color-bg-overlay,
	.feed-item-content.rounded-2,
	.color-bg-subtle,
	.bgColor-muted,
	{
		@backdrop();
		border: none !important;
	}

	.feed-item-content.rounded-1 {
		@disappear();
	}

	.py-3.border-bottom:hover,
	.py-3.border-0:hover {
		@boxShadowHover();
		padding: 7px;
	}


	.py-3.border-bottom,
	.py-3.border-0 {
		padding: 7px;
	}

	/* Modal */
	.SelectMenu-modal,
	.gAwGiF {
		@backdrop();
		border: 1px solid @creamColor !important;
	}

	.gfgFTT {
		border: 1.5px solid @creamColor !important;
		background-color: transparent !important;
	}

	.topic-tag:hover {
		@buttonsHover();
	}


	button[aria-label="master branch"],
	.fJiNYL {
		@backdrop();
		border: 1px solid @creamColor !important;
	}


	.jqwEBk.selected,
	.gJSxwI.selected,
	.fQHyfn.selected {
		background-color: @creamColorMuted !important;
	}

	button[aria-controls="branches"][aria-selected="false"].hover {
		background-color: none !important;
	}

	.cBcJJc,
	.gFTAHK {
		@disappear();
	}

	.bOZZCe {
		@backdrop();
		border: 1px solid @creamColor !important;
	}

	.SelectMenu-footer.px-2 {
		@disappear();
	}

	.bOuPbH {
		box-shadow: @creamColor 0px 0px 0px 2px !important;
	}

	.SelectMenu-item,
	.SelectMenu-list,
	.jxcXqM,
	.dlnypB {
		@disappear();
	}

	/*ANCHOR [REPO PAGE] */
	.Box-sc-g0xbh4-0.QkQOb.js-snippet-clipboard-copy-unpositioned {
		@backdrop();
	}

	.react-directory-row:hover {
		@menuItemHover();
	}

	.react-directory-row td {
		border-top: max(0.5px, 0.0625rem) solid @creamColor !important;
	}


	.kRIEXD {
		border: 2px solid @creamColor !important;
	}

	.mb-2.p-3.border.rounded-2:hover {
		@boxShadowHover();
	}

	.dJnomT {
		background-color: rgba(5, 5, 5, .18) !important;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}

	.kgetqy {
		@disappear();
	}

	.List__ListBox-sc-1x7olzq-0.eoXvfR.react-overview-code-button-action-list {
		@backdrop();
		border: 1px solid @creamColor !important;
	}


	/*ANCHOR [FILE PAGE] */
	.gpHFJV {
		background-color: rgba(5, 5, 5, .18) !important;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}


	.cDbgyb,
	.XlAvl,
	.fnqFQe,
	.jBaPmj,
	.hfIjLs,
	.dRyOTG {
		@disappear();
	}


	.cDbgyb:hover,
	.XlAvl:hover,
	.fnqFQe:hover,
	.jBaPmj:hover,
	.hfIjLs:hover,
	.dRyOTG:hover {
		@buttonsHover();
	}

	.fXBJSr {
		@disappear();
	}

	.Box-sc-g0xbh4-0.tOISc {
		@disappear();
	}

	.jodZGf,
	.cOgqet,
	.bourBp {
		background-color: rgba(5, 5, 5, .18) !important;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
	}

	.segmentedControl-content {
		@disappear();
	}

	.gUrqbU .segmentedControl-content,
	.dyQa-dS .segmentedControl-content {
		border: 1px solid @creamColor !important;
	}

	.eYPFoP {
		background-color: rgba(5, 5, 5, .18) !important;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		border: none !important;
	}

	/*ANCHOR [REPO LIST] */
	.col-12.d-flex.flex-justify-between.width-full.py-4.border-bottom.color-border-muted:hover {
		@boxShadowHover();
	}

	.col-12.d-flex.flex-justify-between.width-full.py-4.border-bottom.color-border-muted {
		@backdrop();
		margin-top: 10px;
		border: none !important;
	}

	/*ANCHOR [STARS MENU] */
	.ActionListWrap--inset.ActionListWrap {
		@backdrop();
	}

	/*NOTE [THIS IS A BIG ONE NGL] */
	.Overlay {
		@disappear();
	}

	/*ANCHOR [NOTIFICATIONS PAGE ] */
	.Box-header {
		@disappear();
	}

	.notifications-list-item.notification-read,
	.notifications-list-item.notification-archived {
		@disappear();
	}


	.ActionListContent:hover {
		@hoverChannelSlide();
	}

	/*ANCHOR [SEARCH BAR] */
	/* When the search bar is clicked or focused */
	.AppHeader-searchButton:focus,
	.AppHeader-searchButton:active,
	.AppHeader-searchButton:hover {
		z-index: 1000;
		position: fixed !important;
		top: 20vh !important;
		left: 20vw !important;
		right: 20vw !important;
		width: 60vw !important;

		background-color: white;
		border: 1px solid #ccc;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* The search suggestions dropdown */
	.search-suggestions {
		position: fixed !important;
		top: 20% !important;
		left: 20vw !important;
		right: 20vw !important;
		width: 60vw !important;

		z-index: 1000;
		border-radius: 12px;
		background-color: white;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* Blur the background when the search bar is active */
	body.search-active::after {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);
		z-index: 999;
	}

	/* Optionally remove the fixed position and blur effect when search loses focus */
	body:not(.search-active) .AppHeader-searchButton {
		position: static !important;
		left: auto !important;
		right: auto !important;
		top: auto !important;
		z-index: 1;
		box-shadow: none;
		width: 100% !important;
		/* Reset width */
		transition: width 0.3s ease;
		/* Smooth shrinking */
	}


	.search-suggestions {
		@backdrop();
	}

	.QueryBuilder-StyledInput {
		@backdrop();
		border: none;
	}

	.QueryBuilder-focus {
		outline: none;
	}

	.search-input.expanded > div > div.AppHeader-search-whenRegular {
		display: none !important;
	}
	.search-suggestions {
		border: 0.5px solid @creamColor !important;
	}

	/*ANCHOR [SETTINGS] */
	dialog {
		@backdrop();
	}

	.flash-banner,
	.flash-full {
		@backdrop();
	}

	/*ANCHOR [NOTIFICATIONS] */
	.btn.selected,
	.btn[aria-selected=true] {
		@disappear();
	}

	.btn.selected:hover,
	.btn[aria-selected=true]:hover {
		@buttonsHover();
	}

	.ActionList-sectionDivider {
		@backdrop();
	}

	.FormControl-input {
		@disappear();
	}

	/*ANCHOR [PROJECTS] */
	.border-top {
		border: none!important;
	}

	/*ANCHOR [CODE FILE PAGE] */
	.panel-content-narrow-styles {
		@backdrop();
	}

	.kexQoK,
	.haQWCL,
	.eEsVFK:disabled {
		@disappear();
	}

	[aria-label="Previous reference"]:hover,
	[aria-label="Next reference"]:hover {
		@buttonsHover();
	}

	.Box-sc-g0xbh4-0.kTMYBM:hover {

		background-color: var(--control-transparent-bgColor-hover) !important;
	}

	.PRIVATE_TreeView-item:hover {
		@hoverChannelSlide();
	}


	.jAlLSY th {
		@disappear();
	}

	.eWEbRA:hover {
		@menuItemHover();
	}

	.TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0.TextInputWrapper-sc-1mqhpbi-1.fgiTUz.klSCQM.TextInput-wrapper {
		@textArea();
	}



	/*ANCHOR [CREATE A REPO PAGE] */
	.iBpOGA {
		@backdrop();
	}

	.cujkRS {
		@textArea();
	}

	/*ANCHOR [GITHUB DOCS] */
	.fDlMNy,
	.jXUMlK,
	.dA-dVZO {
		@backdrop();
	}

	.markdown-body table tr {
		@backdrop();
		border-top: none !important;
	}

	.MarkdownContent_markdownBody__v5MYy table thead td,
	.MarkdownContent_markdownBody__v5MYy table thead th {
		box-shadow: inset 0 -2px @creamColor;
	}

	.MarkdownContent_markdownBody__v5MYy table tbody td,
	.MarkdownContent_markdownBody__v5MYy table tbody th {
		box-shadow: inset 0 -1px @creamColorMuted;
	}


	table {
		@backdrop();
		border-color: @creamColor !important;
	}

	.TableHeader {
		@disappear();
	}


	.hNkDDR,
	.crArEc {
		background-color: transparent !important
	}

	.cHTOlv:hover,
	.cXuGuz:hover,
	.biIjJG:hover {
		@hoverChannelSlide();
	}

	.dYDZmW {
		@textArea();
	}


	/*ANCHOR [COMMUNITY] */
	.list-style-none.border.px-3.color-bg-overlay.rounded-2 {
		@backdrop();
	}

	.select-menu-modal,
	.timeline-comment {
		@backdrop();
	}
	.select-menu-item {
		@disappear();
	}

	.ActionList-item:hover {
		@hoverChannelSlide();
	}

	body > div.logged-in.env-production.page-responsive.color-bg-inset > div.application-main > main > div > div.container-xl.p-responsive.clearfix > div.clearfix.container-xl > div > div.Layout-main > div > div.Layout-main > ul.list-style-none.border.px-3.mb-2.color-bg-overlay.rounded-2,
	body > div.logged-in.env-production.page-responsive.color-bg-inset > div.application-main > main > div > div.container-xl.p-responsive.clearfix > div.clearfix.container-xl > div > div.Layout-main > div > div.Layout-main > ul:nth-child(5) {
		@backdrop()
	}


	.Box-row:hover {
		@boxShadowHover();
	}

	.bg-discussions-row-emoji-box,
	.bg-discussions-row-emoji-box-small,
	.review-thread-reply,
	.CommentBox-header,
	.discussion-timeline-actions,
	.color-bg-inset,
	.bgColor-inset {
		@disappear();
	}

	.gh-header .gh-header-sticky.is-stuck + .gh-header-shadow {
		@gradientBackground();
	}

	.tabnav-tab.selected,
	.tabnav-tab[aria-current]:not([aria-current=false]),
	.tabnav-tab[aria-selected=true] {
		background-color: @creamColorMuted;
	}


	.review-thread-reply-button.form-control.js-discussions-previewable-comment-form.btn-link.btn-block.no-underline.color-fg-muted.text-left.text-normal.ml-0 {
		@transparentButtons();
		border: 0px solid @creamColor !important;
		background: @creamColorMuted;
		color: white !important;
	}

	.review-thread-reply-button.form-control.js-discussions-previewable-comment-form.btn-link.btn-block.no-underline.color-fg-muted.text-left.text-normal.ml-0:hover {
		@buttonsHover();
		color: white !important;
	}


	/*ANCHOR [COMMITS] */
	.Panel-module__container--i4g9d {
		@disappear();
	}

	button[aria-label="Go to previous month"],
	button[aria-label="Go to next month"] {
		@disappear();
	}

	button[aria-label="Go to previous month"]:hover,
	button[aria-label="Go to next month"]:hover {
		@buttonsHover();
	}

	.Day-module__day--ZcbvX:hover {
		@buttonsHover();
	}

	.Day-module__day--ZcbvX.Day-module__selected--DfMaK {
		background-color: @creamColor !important;
	}

	.Day-module__day--ZcbvX.Day-module__selected--DfMaK.Day-module__rangeMiddle--gfg7k {
		background-color: @creamColorMuted !important;
	}

	.Panel-module__picker--gTDgA {
		@backdrop();
	}

	.ListItem-module__listItem--kHali:hover {
		@boxShadowHover();
	}

	/*ANCHOR [COPILOT] */
	.ivKSmi {
		@backdrop();
		border: 1px solid @creamColor !important;
	}

	.leXapx {
		@textArea();
	}

	.ivKSmi,
	.dgBfwJ {
		@disappear();
	}

	.menu,
	.kAsnol {
		@backdrop();
		border: 1px solid @creamColor !important;
	}
	.menu-item.selected,
	.menu-item[aria-current]:not([aria-current=false]),
	.menu-item[aria-selected=true] {
		@disappear();
	}
	input[name="query"] {
		@textArea();
	}

	/*ANCHOR [PULL REQUESTS] */
	.subnav-item.selected,
	.subnav-item[aria-selected=true],
	.subnav-item[aria-current]:not([aria-current=false]) {
		background-color: @creamColor !important;
		border: 1px solid @creamColor !important;
	}

	.subnav-item:hover {
		background-color: @creamColorMuted !important;
	}


	.subnav-item,
	input[id="js-issues-search"] {
		border: 1px solid @creamColor !important;
	}

	.SelectMenu-modal {
		z-index: 1000;
	}

	.SelectMenu-divider {
		@disappear();
	}

	.dropdown-menu {
		@backdrop();
	}

	.dropdown-menu:after {
		@disappear();
	}

	/*ANCHOR [COMMIT DETAILS] */
	.TextInputWrapper__TextInputBaseWrapper-sc-1mqhpbi-0.TextInputWrapper-sc-1mqhpbi-1.gvtfsN.fCHmyD.TextInput-wrapper {
		@textArea();
	}


	.hDaTHW {
		@disappear();
	}

	.gClVUD,
	.drELTT {
		background-color: transparent;
		border: 1px solid @creamColor !important;
	}

	.Diff-module__diffHeaderWrapper--rsdD4:before,
	.Diff-module__diffHeaderWrapper--rsdD4 {
		background-color: transparent;
	}

	.DiffFileHeader-module__diff-file-header--TjXyn,
	.d-flex.flex-items-center.flex-justify-between.gap-2.pt-3.pt-lg-4.pb-2.position-sticky.top-0.color-bg-default {
		background-color: rgba(5, 5, 5, .18) !important;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(100px) saturate(110%);
		-webkit-backdrop-filter: blur(100px);
		transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
		border: 1px solid @creamColor !important;
	}

	.dRfQdO {
		@transparentButtons();
		border: 0px solid @creamColor !important;
		background: @creamColorMuted;
		color: white !important;
	}

	.dRfQdO:hover {
		@transparentButtonsHover();
		background: @creamColor;
		color: white !important;
	}

	/* ANCHOR [JS Sidebars Styling] */
.SidePanel,
.jBUQU {
    opacity: 1;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(25px) saturate(200%) contrast(90%);
    -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%);
    color: white;
    z-index: 1001;
    overflow-y: auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


.SidePanel button,
.SidePanel a {
    color: white;
    opacity: 0.9;
    transition: color 0.3s ease, opacity 0.3s ease;
}

.SidePanel button:hover,
.SidePanel a:hover {
    color: rgba(255, 255, 255, 1);
    opacity: 1;
}

.Overlay-closeButton.close-button:hover{
	@buttonsHover();
}

.Overlay-closeButton:focus, .Overlay-closeButton:hover{
	background: transparent !important;
}

.Item__LiBox-sc-yeql7o-0.imEANS:hover {
	@hoverChannelSlide();
}

}

/* .feed-item-content.d-flex.flex-column.pt-2.pb-2.border.color-border-default.rounded-2.color-shadow-small.width-full.height-fit 


background-color: var(--control-transparent-bgColor-hover) !important;
    color: var(--fgColor-default,var(--color-fg-default,#e6edf3));
    box-shadow: inset 0 0 0 max(1px,0.0625rem) var(--control-transparent-borderColor-active,var(--color-action-list-item-default-active-border,transparent));
	
*/