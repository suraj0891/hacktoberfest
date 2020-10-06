export default {
  paddingMain: window.screen.width && window.screen.width < 500 ? 20 : 0,
  paddingSecond: window.screen.width && window.screen.width < 500 ? 20 : 0,
  screenaMaxWidth: window.screen.width > 1440 ? 1440 : window.screen.width,
  screenMinHeightForContent:
    window.innerHeight > 1024 ? window.innerHeight - 310 : 615,
};
