export default [
  // {
  //   "title": "Fix 'Episodes' Icon",
  //   "description": "Fix the color of the Episodes icon",
  //   "code": ".main-yourEpisodesButton-yourEpisodesIcon { background: var(--spice-text); } .main-yourEpisodesButton-yourEpisodesIcon path { fill: var(--spice-player); opacity: 0.7; }",
  //   "preview": "https://i.imgur.com/n3EwrTL.png",
  // },
  // {
  //   "title": "Fix 'Made For You' Icon",
  //   "description": "Fix the colours of the Made For You icon",
  //   "code": ".utp540VMXpC3bYIxo9wy {\n  color: var(--spice-sidebar);\n  background: var(--spice-text);\n  opacity: 1;\n}\n.t6d9Hf7maqFPHp1Y02VR {\n  color: var(--spice-text);\n}",
  //   "preview": "https://placekitten.com/200/200",
  // },
  {
    "title": "Fix 'Liked' Icon",
    "description": "Fix the colours of the Liked icon in sidebar",
    "code": ".main-likedSongsButton-likedSongsIcon {\n  color: var(--spice-sidebar);\n  background: var(--spice-text);\n}",
    "preview": "resources/assets/snippets/fix-liked-icon.png",
  },
  {
    "title": "Hide Upgrade Button",
    "description": "Makes the upgrade button hidden",
    "code": ".main-topBar-UpgradeButton {\n  display: none !important;\n}",
    "preview": "resources/assets/snippets/hide-upgrade-button.png",
  },
  {
    "title": "Auto-hide Friends",
    "description": "Collapse the friends activity sidebar on small screens",
    "code": "[aria-label='Friend Activity'] {\n  transition: width 0.3s;\n}\n@media screen and (max-width: 1200px) {\n  [aria-label='Friend Activity'] {\n    width: 0;\n  }\n  [aria-label='Friend Activity'] .LayoutResizer__resize-bar {\n    display: none;\n  }\n}",
    "preview": "resources/assets/snippets/auto-hide-friends.png",
  },
  {
    "title": "Smooth Reveal Playlist Gradient",
    "description": "Reveals the playlist gradient header gradient with a fade in effect",
    "code": ".main-entityHeader-overlay,\n.main-actionBarBackground-background,\n.main-entityHeader-overlay,\n.main-entityHeader-backgroundColor {\n  -webkit-transition: 3s;\n}",
    "preview": "resources/assets/snippets/smooth-playlist-reveal-gradient.png",
  },
  {
    "title": "Remove connect bar",
    "description": "Remove connect bar that causes progress bar displacement when listening on different devices",
    "code": ".main-connectBar-connectBar {\n  color: transparent !important;\n  overflow: visible !important;\n  --triangle-position: 147px !important;\n  align-items: unset !important;\n  height: 0px !important;\n  position: absolute !important;\n  left: 80% !important;\n  display: flex !important;\n  bottom: 2% !important;\n  padding: unset !important;\n}",
    "preview": "resources/assets/snippets/remove-connect-bar.png",
  },
  {
    "title": "Fix playlist arrows",
    "description": "Fixes the opened and closed orientation of the playlist folder arrows",
    "code": ".main-rootlist-expandArrow {\n  -webkit-transform: rotate(-90deg) !important;\n  transform: rotate(-90deg) !important;\n}\n.main-rootlist-expandArrow:hover {\n  -webkit-transform: rotate(-90deg) !important;\n  transform: rotate(-90deg) !important;\n}\n.qAAhQw9dXNB7DbPgDDxy {\n  -webkit-transform: rotate(0deg) !important;\n  transform: rotate(0deg) !important;\n}\n.qAAhQw9dXNB7DbPgDDxy:hover {\n  -webkit-transform: rotate(0deg) !important;\n  transform: rotate(0deg) !important;\n}",
    "preview": "resources/assets/snippets/fix-playlist-arrows.png",
  },
  {
    "title": "Fix main view width",
    "description": "Makes main view fill up all available space",
    "code": ".contentSpacing {\n  max-width: 100% !important;\n}",
    "preview": "resources/assets/snippets/fix-main-view-width.png",
  },
  {
    "title": "Left aligned heart icons",
    "description": "Moves the heart icon to the left side of the track title in track views",
    "code": ".main-trackList-rowSectionStart {\n  margin-left: 38px !important;\n}\n.main-addButton-button.main-trackList-rowHeartButton,\n.main-addButton-button.main-trackList-rowHeartButton {\n  position: absolute !important;\n  left: 48px !important;\n}",
    "preview": "resources/assets/snippets/left-aligned-heart-icons.png",
  },
  {
    "title": "Hover Panels",
    "description": "Have your playlist, friend activity, and controls bar be hoverable.",
    "code": ".Root__nav-bar {\n  position: absolute;\n  width: 40px;\n  opacity: 0;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\nnav.Root__nav-bar:hover {\n  position: inherit;\n  width: 225px;\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n}\n.LayoutResizer__resize-bar {\n  cursor: none;\n}\n.Root__top-bar {\n  opacity: 0;\n  transition: visibility 5s, opacity 1s linear;\n}\n.Root__top-bar:hover {\n  transition-delay: 0.5s;\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n}\n.main-topBar-container {\n  -webkit-padding-end: 32px;\n  padding: 16px 85px;\n  padding-inline-end: 32px;\n  max-width: none;\n}\naside.main-buddyFeed-buddyFeedRoot:hover {\n  position: inherit;\n  width: var(--buddy-feed-width);\n  opacity: 1;\n  transition: visibility 5s, opacity 0.5s linear;\n  left: 0;\n}\naside.main-buddyFeed-buddyFeedRoot {\n  position: absolute;\n  width: 65px;\n  opacity: 0;\n  bottom: 0;\n  left: -30px;\n  top: 0;\n  z-index: 1;\n}",
    "preview": "resources/assets/snippets/hover-panels.png",
  },
  {
    "title": "Fix progress bar displacement",
    "description": "Fixes the progress bar displacement for a few themes. Better version of @CharlieS1103 Snippet",
    "code": ".main-connectBar-connectBar {\n  overflow: visible !important;\n  position: absolute !important;\n  display: flex !important;\n  align-items: unset !important;\n  left: 80% !important;\n  height: 20px !important;\n  bottom: 1% !important;\n  padding: 2px !important;\n  background-color: transparent !important;\n  color: var(--spice-text) !important;\n}\n.control-button::after {\n  display: none !important;\n}",
    "preview": "resources/assets/snippets/fix-progress-bar.png",
  },
  {
    "title": "Fix playlist hover effect",
    "description": "Fixes the hover effect on the playlist titles in some themes",
    "code": ".main-rootlist-rootlistItemOverlay {\n  display: none;\n}",
    "preview": "resources/assets/snippets/fix-playlist-hover.png",
  },
  {
    "title": "Disable Homepage Recommendation",
    "description": "Disable Homepage Recommendation charts",
    "code": "section[data-testid='home-page'] .main-shelf-shelf:not([aria-label='Recently played'], [aria-label='Your playlists']) {\n	display: none !important;\n}",
    "preview": "resources/assets/snippets/disable-recommendation.png",
  },
  {
    "title": "Circular Album Art",
    "description": "Makes the now playing album art be circular (like a vinyl)",
    "code": ".cover-art .cover-art-image {\n    border-radius: 100% !important;\n}",
    "preview": "resources/assets/snippets/circular-album-art.png",
  },
  {
    "title": "Right Side Cover Art",
    "description": "Cover art on right side with animation",
    "code": ".main-nowPlayingWidget-nowPlaying > .ellipsis-one-line,\n.main-trackInfo-container {\n margin-left: 74px;\n}\n.main-coverSlotExpanded-container {\n position: fixed;\n top: calc(100% - 305px);\n left: calc(100% - 220px);\n width: 200px;\n height: 200px;\n visibility: hidden;\n transform-origin: center;\n animation: 1s coverExpandedIn;\n animation-fill-mode: forwards;\n}\n.Q4cc5RktWgz2H8_vDrIS {\n display: none;\n}\n.main-coverSlotCollapsed-container {\n position: fixed;\n top: -12px;\n left: 0px;\n width: 56px;\n height: 56px;\n visibility: visible;\n z-index: 1;\n}\n.cover-art .cover-art-image,\n.main-coverSlotCollapsed-container {\n transform-origin: center;\n transition-timing-function: ease-in;\n transition: width 0.5s 0.2s, height 0.5s 0.2s, top 0.3s, left 0.5s,\n box-shadow 0.5s;\n}\n.main-coverSlotCollapsed-container[aria-hidden='true'] {\n left: calc(100vw - 164px);\n top: -240px;\n width: 200px;\n height: 200px;\n visibility: hidden;\n animation: 1s coverExpandedOut;\n}\n.main-coverSlotCollapsed-container[aria-hidden='false'] {\n transition-timing-function: ease-out !important;\n transition: width 0.5s 0.2s, height 0.5s 0.2s, top 0.5s 0.1s, left 0.3s,\n box-shadow 0.5s !important;\n}\n.main-coverSlotCollapsed-container[aria-hidden='true']\n .cover-art\n .cover-art-image,\n.main-nowPlayingWidget-coverExpanded\n .main-coverSlotCollapsed-container\n .cover-art\n .cover-art-image {\n width: 200px;\n height: 200px;\n}\n.main-nowPlayingBar-left {\n z-index: 2;\n}\n.main-nowPlayingBar-center {\n z-index: 1;\n}\n.cover-art.shadow {\n box-shadow: 0 0 10px rgba(var(--spice-rgb-shadow), 1) !important;\n}\n@keyframes coverExpandedIn {\n 99% {\n visibility: hidden;\n }\n 100% {\n visibility: visible;\n }\n}\n@keyframes coverExpandedOut {\n 99% {\n visibility: visible;\n }\n 100% {\n visibility: hidden;\n }\n}",
    "preview": "resources/assets/snippets/right-cover-art.png",
  },
  {
    "title": "Fancy Lyrics",
    "description": "Patches Spotify's lyrics feature to make it look fancier, and prettier.",
    "code": ".Q2RPoHcoxygOoPLXLMww .NHVfxGs2HwmI_fly2JC4.H2J92dVdr0ykdOX5azL1 { color: var(--lyrics-color-active); opacity: .7; filter: blur(2px); padding-top: 15px; padding-bottom: 15px; -webkit-transition: all .3s ease-out; transition: all .2s ease-out; font-size: 120%; } .Q2RPoHcoxygOoPLXLMww .NHVfxGs2HwmI_fly2JC4.TDPh45khCfG51fNwNIiw { color: var(--lyrics-color-active); padding-top: 15px; padding-bottom: 15px; filter: blur(0px); -webkit-transition: all .3s ease-out; transition: all .2s ease-out; font-size: 130% } .Q2RPoHcoxygOoPLXLMww .NHVfxGs2HwmI_fly2JC4 { color: rgb(0 0 0 / 50%) cursor: pointer; -webkit-transition: all .3s ease-out; transition: all .2s ease-out; padding-top: 15px; padding-bottom: 15px; filter: blur(2px); font-size: 120% }",
    "preview": "https://i.imgur.com/I91TWuG.png"
  },
];
