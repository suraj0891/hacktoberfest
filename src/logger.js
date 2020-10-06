/* eslint-disable no-console */
export default function log() {
  global.console.log = (()=> {
    const orig = console.log;
    return (...args)=> {
      const _args= args;
      try {
        _args[0] = `[${  new Date().toUTCString()  }] ${  _args[0]}`;
        orig.apply(console, args);
      } catch (err) {
        orig.apply(console, _args);
      }
    };
  })();

  global.console.error = (()=> {
    const orig = console.error;
    return (...args)=>{
      if (process.env.REACT_APP_NODE_ENV === 'local' ||
          process.env.REACT_APP_NODE_ENV === 'development') {
        orig.apply(console, args);
      }
    }
  })();

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }
};
