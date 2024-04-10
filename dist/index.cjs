var Vue = require('vue');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return n;
}

var Vue__namespace = /*#__PURE__*/_interopNamespace(Vue);

const Spinner = Vue__namespace.defineComponent(()=>()=>{
        return /*#__PURE__*/ Vue__namespace.h("svg", {
            class: "z-10 block h-5 w-5 animate-spin align-middle text-white",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 576 512"
        }, /*#__PURE__*/ Vue__namespace.h("path", {
            fill: "currentColor",
            d: "M256 32C256 14.33 270.3 0 288 0C429.4 0 544 114.6 544 256C544 302.6 531.5 346.4 509.7 384C500.9 399.3 481.3 404.6 465.1 395.7C450.7 386.9 445.5 367.3 454.3 351.1C470.6 323.8 480 291 480 255.1C480 149.1 394 63.1 288 63.1C270.3 63.1 256 49.67 256 31.1V32z"
        }));
    });

exports.Spinner = Spinner;
