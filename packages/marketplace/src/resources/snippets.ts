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
    "title": "Always show forward button",
    "description": "The navigate forward button hides itself when the window width is smaller. This snipppet makes it so that it is always shown.",
    "code": ".main-topBar-historyButtons .main-topBar-forward {\n    display: inline-flex !important;\n}",
    "preview": "resources/assets/snippets/always-show-forward.png",
  },
  {
    "title": "Right Side Cover Art",
    "description": "Cover art on right side with animation",
    "code": ".main-nowPlayingWidget-nowPlaying > .ellipsis-one-line,\n.main-trackInfo-container {\n margin-left: 74px;\n}\n.main-coverSlotExpanded-container {\n position: fixed;\n top: calc(100% - 305px);\n left: calc(100% - 220px);\n width: 200px;\n height: 200px;\n visibility: hidden;\n transform-origin: center;\n animation: 1s coverExpandedIn;\n animation-fill-mode: forwards;\n}\n.Q4cc5RktWgz2H8_vDrIS {\n display: none;\n}\n.main-coverSlotCollapsed-container {\n position: fixed;\n top: -12px;\n left: 0px;\n width: 56px;\n height: 56px;\n visibility: visible;\n z-index: 1;\n}\n.cover-art .cover-art-image,\n.main-coverSlotCollapsed-container {\n transform-origin: center;\n transition-timing-function: ease-in;\n transition: width 0.5s 0.2s, height 0.5s 0.2s, top 0.3s, left 0.5s,\n box-shadow 0.5s;\n}\n.main-coverSlotCollapsed-container[aria-hidden='true'] {\n left: calc(100vw - 164px);\n top: -240px;\n width: 200px;\n height: 200px;\n visibility: hidden;\n animation: 1s coverExpandedOut;\n}\n.main-coverSlotCollapsed-container[aria-hidden='false'] {\n transition-timing-function: ease-out !important;\n transition: width 0.5s 0.2s, height 0.5s 0.2s, top 0.5s 0.1s, left 0.3s,\n box-shadow 0.5s !important;\n}\n.main-coverSlotCollapsed-container[aria-hidden='true']\n .cover-art\n .cover-art-image,\n.main-nowPlayingWidget-coverExpanded\n .main-coverSlotCollapsed-container\n .cover-art\n .cover-art-image {\n width: 200px;\n height: 200px;\n}\n.main-nowPlayingBar-left {\n z-index: 2;\n}\n.main-nowPlayingBar-center {\n z-index: 1;\n}\n.cover-art.shadow {\n box-shadow: 0 0 10px rgba(var(--spice-rgb-shadow), 1) !important;\n}\n@keyframes coverExpandedIn {\n 99% {\n visibility: hidden;\n }\n 100% {\n visibility: visible;\n }\n}\n@keyframes coverExpandedOut {\n 99% {\n visibility: visible;\n }\n 100% {\n visibility: hidden;\n }\n}",
    "preview": "resources/assets/snippets/right-cover-art.png",
  },
  {
    "title": "Better lyrics style",
    "description": "Spotify lyrics are focused and beautified",
    "code": ".lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric.lyrics-lyricsContent-highlight { filter: blur(1.5px); padding: 15px; font-size: 110%; } .lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric.lyrics-lyricsContent-active { filter: none; padding: 20px; font-size: 130%; } .lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric { filter: blur(1.5px); padding: 15px; font-size: 110%; } .lyrics-lyrics-contentContainer .lyrics-lyricsContent-lyric.lyrics-lyricsContent-unsynced { filter: none; padding: 10px; font-size: 100%; }",
    "preview": "resources/assets/snippets/better-lyrics-style.png",
  },
  {
    "title": "Fix now playing icon color",
    "description": "Fixes the now playing icon color",
    "code": `.main-trackList-playingIcon { -webkit-mask-image: url("data:image/svg+xml,%3Csvg id='playing-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 24'%3E%3Cdefs%3E%3Cstyle%3E %23playing-icon %7B fill: %2320BC54; %7D @keyframes play %7B 0%25 %7Btransform: scaleY(1);%7D 3.3%25 %7Btransform: scaleY(0.9583);%7D 6.6%25 %7Btransform: scaleY(0.9166);%7D 9.9%25 %7Btransform: scaleY(0.8333);%7D 13.3%25 %7Btransform: scaleY(0.7083);%7D 16.6%25 %7Btransform: scaleY(0.5416);%7D 19.9%25 %7Btransform: scaleY(0.4166);%7D 23.3%25 %7Btransform: scaleY(0.25);%7D 26.6%25 %7Btransform: scaleY(0.1666);%7D 29.9%25 %7Btransform: scaleY(0.125);%7D 33.3%25 %7Btransform: scaleY(0.125);%7D 36.6%25 %7Btransform: scaleY(0.1666);%7D 39.9%25 %7Btransform: scaleY(0.1666);%7D 43.3%25 %7Btransform: scaleY(0.2083);%7D 46.6%25 %7Btransform: scaleY(0.2916);%7D 49.9%25 %7Btransform: scaleY(0.375);%7D 53.3%25 %7Btransform: scaleY(0.5);%7D 56.6%25 %7Btransform: scaleY(0.5833);%7D 59.9%25 %7Btransform: scaleY(0.625);%7D 63.3%25 %7Btransform: scaleY(0.6666);%7D 66.6%25 %7Btransform: scaleY(0.6666);%7D 69.9%25 %7Btransform: scaleY(0.6666);%7D 73.3%25 %7Btransform: scaleY(0.6666);%7D 76.6%25 %7Btransform: scaleY(0.7083);%7D 79.9%25 %7Btransform: scaleY(0.75);%7D 83.3%25 %7Btransform: scaleY(0.8333);%7D 86.6%25 %7Btransform: scaleY(0.875);%7D 89.9%25 %7Btransform: scaleY(0.9166);%7D 93.3%25 %7Btransform: scaleY(0.9583);%7D 96.6%25 %7Btransform: scaleY(1);%7D %7D %23bar1 %7B transform-origin: bottom; animation: play 0.9s -0.51s infinite; %7D %23bar2 %7B transform-origin: bottom; animation: play 0.9s infinite; %7D %23bar3 %7B transform-origin: bottom; animation: play 0.9s -0.15s infinite; %7D %23bar4 %7B transform-origin: bottom; animation: play 0.9s -0.75s infinite; %7D %3C/style%3E%3C/defs%3E%3Ctitle%3Eplaying-icon%3C/title%3E%3Crect id='bar1' class='cls-1' width='4' height='24'/%3E%3Crect id='bar2' class='cls-1' x='6' width='4' height='24'/%3E%3Crect id='bar3' class='cls-1' x='12' width='4' height='24'/%3E%3Crect id='bar4' class='cls-1' x='18' width='4' height='24'/%3E%3C/svg%3E"); background: var(--spice-button); content-visibility: hidden; -webkit-mask-repeat: no-repeat; }`,
    "preview": "resources/assets/snippets/fix-now-playing-icon.png",
  },
  {
    "title": "Hide playing gif",
    "description": "Hides the gif that shows the music playing",
    "code": ".main-trackList-playingIcon{display: none}",
    "preview": "resources/assets/snippets/hide-playing-gif.png",
  },
  {
    "title": "Pointers",
    "description": "Clickable elements are now a pointer",
    "code": "button, .show-followButton-button, .main-dropDown-dropDown, .x-toggle-wrapper, .main-playlistEditDetailsModal-closeBtn, .main-trackList-rowPlayPauseButton, .main-rootlist-rootlistItemLink:link, .main-rootlist-rootlistItemLink:visited, .x-sortBox-sortDropdown, .main-contextMenu-menuItemButton, .main-trackList-column, .main-moreButton-button, .x-downloadButton-button, .main-playButton-PlayButton, .main-coverSlotExpandedCollapseButton-chevron, .main-coverSlotCollapsed-chevron, .control-button:focus, .control-button:hover, .main-repeatButton-button, .main-skipForwardButton-button, .main-playPauseButton-button, .main-skipBackButton-button, .main-shuffleButton-button, .main-addButton-button, .progress-bar__slider, .playback-bar, .main-editImageButton-image, .X1lXSiVj0pzhQCUo_72A { cursor: pointer !important; }",
    "preview": "resources/assets/snippets/pointer.png",
  },
  {
    "title": "Remove Top gradient",
    "description": "Removes gradient from home page and playlist page",
    "code": ".main-entityHeader-backgroundColor { display: none !important; } .main-actionBarBackground-background { display: none !important; } .main-home-homeHeader { display: none !important; }",
    "preview": "resources/assets/snippets/remove-gradient.png",
  },
  {
    "title": "Fix Liked Button",
    "description": "Fixes Liked Button colors",
    "code": `#_R_G *:not([fill="none"]) { fill: var(--spice-button) !important; } #_R_G *:not([stroke="none"]) { stroke: var(--spice-button); } .main-addButton-button[aria-checked="false"] { color: rgba(var(--spice-rgb-selected-row), 0.7); } .control-button-heart[aria-checked="true"], .main-addButton-button, .main-addButton-active:focus, .main-addButton-active:hover { color: var(--spice-button); }`,
    "preview": "resources/assets/snippets/fix-liked-button.png",
  },
  {
    "title": "Hide Sidebar ScrollBar",
    "description": "Hides Sidebar ScrollBar near playlist section",
    "code": ".os-scrollbar:nth-child(6) .os-scrollbar-handle { visibility: hidden; }",
    "preview": "resources/assets/snippets/hide-sidebar-scrollbar.png",
  },
  {
    "title": "Modern ScrollBar",
    "description": "Thin rounded modern scrollbar",
    "code": ".os-theme-spotify.os-host-transition > .os-scrollbar-vertical > .os-scrollbar-track > .os-scrollbar-handle { border-radius: 4px; width: 6px; background-color: var(--spice-button-disabled); } .os-theme-spotify.os-host-transition > .os-scrollbar-vertical > .os-scrollbar-track { width: 6px; }",
    "preview": "resources/assets/snippets/modern-scrollbar.png",
  },
  {
    "title": "Remove liked and Episodes icon",
    "description": "Removes the liked and episodes icon from the sidebar",
    "code": `.main-collectionLinkButton-collectionLinkButton[href="/collection/tracks"], .main-collectionLinkButton-collectionLinkButton[href="/collection/episodes"] {display: none;}`,
    "preview": "resources/assets/snippets/remove-ep-likes.png",
  },
  {
    "title": "Rotating Cover Art",
    "description": "Adds circular mask to cover art and rotation",
    "code": `@keyframes rotating { from { transform: rotate(0deg); } to { transform: rotate(360deg); }} .cover-art { animation: rotating 2s linear infinite; clip-path: circle(50% at 50% 50%);}`,
    "preview": "resources/assets/snippets/rotating-coverart",
  },
  {
    "title": "Hide liked songs card",
    "description": "Hides the sometimes unfitting liked Songs card in the Your Libary tab",
    "code":".collection-collectionEntityHeroCard-likedSongs{ display: none; }",
    "preview":"resources/assets/snippets/hide-likedSongs-card.png"
  }
];
