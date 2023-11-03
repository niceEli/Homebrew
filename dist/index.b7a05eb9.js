// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8lhj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jeorp":[function(require,module,exports) {
// Imports
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _kaboom = require("./kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
// Import Scenes
var _helloworld = require("./scenes/helloworld");
var _helloworldDefault = parcelHelpers.interopDefault(_helloworld);
var _kMatterTest = require("./scenes/kMatterTest");
var _kMatterTestDefault = parcelHelpers.interopDefault(_kMatterTest);
// Add Scenes
(0, _kaboomDefault.default).scene("Hello-World-EX", (0, _helloworldDefault.default));
(0, _kaboomDefault.default).scene("kMatter-Test", (0, _kMatterTestDefault.default));
// Run Scenes
//k.go('Hello-World-EX'); // This is a template scene
(0, _kaboomDefault.default).go("kMatter-Test") // This is a physics (matter) template scene
;

},{"./kaboom":"9gZzR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./scenes/helloworld":"cT3RO","./scenes/kMatterTest":"pJz7m"}],"9gZzR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "k", ()=>k);
var _kaboom = require("kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
const k = (0, _kaboomDefault.default)({
    background: [
        0,
        0,
        0,
        0
    ]
});
exports.default = k;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","kaboom":"larQu"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"larQu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>jo);
var gi = Object.defineProperty;
var i = (n, e)=>gi(n, "name", {
        value: e,
        configurable: !0
    });
var fr = (()=>{
    for(var n = new Uint8Array(128), e = 0; e < 64; e++)n[e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e * 4 - 205] = e;
    return (o)=>{
        for(var h = o.length, p = new Uint8Array((h - (o[h - 1] == "=") - (o[h - 2] == "=")) * 3 / 4 | 0), m = 0, R = 0; m < h;){
            var I = n[o.charCodeAt(m++)], F = n[o.charCodeAt(m++)], v = n[o.charCodeAt(m++)], z = n[o.charCodeAt(m++)];
            p[R++] = I << 2 | F >> 4, p[R++] = F << 4 | v >> 2, p[R++] = v << 6 | z;
        }
        return p;
    };
})();
function Me(n) {
    return n * Math.PI / 180;
}
i(Me, "deg2rad");
function at(n) {
    return n * 180 / Math.PI;
}
i(at, "rad2deg");
function Fe(n, e, o) {
    return e > o ? Fe(n, o, e) : Math.min(Math.max(n, e), o);
}
i(Fe, "clamp");
function Ie(n, e, o) {
    if (typeof n == "number" && typeof e == "number") return n + (e - n) * o;
    if (n instanceof y && e instanceof y) return n.lerp(e, o);
    if (n instanceof Y && e instanceof Y) return n.lerp(e, o);
    throw new Error(`Bad value for lerp(): ${n}, ${e}. Only number, Vec2 and Color is supported.`);
}
i(Ie, "lerp");
function Le(n, e, o, h, p) {
    return h + (n - e) / (o - e) * (p - h);
}
i(Le, "map");
function pr(n, e, o, h, p) {
    return Fe(Le(n, e, o, h, p), h, p);
}
i(pr, "mapc");
var y = class n {
    static #_ = i(this, "Vec2");
    x = 0;
    y = 0;
    constructor(e = 0, o = e){
        this.x = e, this.y = o;
    }
    static fromAngle(e) {
        let o = Me(e);
        return new n(Math.cos(o), Math.sin(o));
    }
    static LEFT = new n(-1, 0);
    static RIGHT = new n(1, 0);
    static UP = new n(0, -1);
    static DOWN = new n(0, 1);
    clone() {
        return new n(this.x, this.y);
    }
    add(...e) {
        let o = T(...e);
        return new n(this.x + o.x, this.y + o.y);
    }
    sub(...e) {
        let o = T(...e);
        return new n(this.x - o.x, this.y - o.y);
    }
    scale(...e) {
        let o = T(...e);
        return new n(this.x * o.x, this.y * o.y);
    }
    dist(...e) {
        let o = T(...e);
        return this.sub(o).len();
    }
    sdist(...e) {
        let o = T(...e);
        return this.sub(o).slen();
    }
    len() {
        return Math.sqrt(this.dot(this));
    }
    slen() {
        return this.dot(this);
    }
    unit() {
        let e = this.len();
        return e === 0 ? new n(0) : this.scale(1 / e);
    }
    normal() {
        return new n(this.y, -this.x);
    }
    reflect(e) {
        return this.sub(e.scale(2 * this.dot(e)));
    }
    project(e) {
        return e.scale(e.dot(this) / e.len());
    }
    reject(e) {
        return this.sub(this.project(e));
    }
    dot(e) {
        return this.x * e.x + this.y * e.y;
    }
    cross(e) {
        return this.x * e.y - this.y * e.x;
    }
    angle(...e) {
        let o = T(...e);
        return at(Math.atan2(this.y - o.y, this.x - o.x));
    }
    angleBetween(...e) {
        let o = T(...e);
        return at(Math.atan2(this.cross(o), this.dot(o)));
    }
    lerp(e, o) {
        return new n(Ie(this.x, e.x, o), Ie(this.y, e.y, o));
    }
    slerp(e, o) {
        let h = this.dot(e), p = this.cross(e), m = Math.atan2(p, h);
        return this.scale(Math.sin((1 - o) * m)).add(e.scale(Math.sin(o * m))).scale(1 / p);
    }
    isZero() {
        return this.x === 0 && this.y === 0;
    }
    toFixed(e) {
        return new n(Number(this.x.toFixed(e)), Number(this.y.toFixed(e)));
    }
    transform(e) {
        return e.multVec2(this);
    }
    eq(e) {
        return this.x === e.x && this.y === e.y;
    }
    bbox() {
        return new le(this, 0, 0);
    }
    toString() {
        return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
};
function T(...n) {
    if (n.length === 1) {
        if (n[0] instanceof y) return new y(n[0].x, n[0].y);
        if (Array.isArray(n[0]) && n[0].length === 2) return new y(...n[0]);
    }
    return new y(...n);
}
i(T, "vec2");
var Y = class n {
    static #_ = i(this, "Color");
    r = 255;
    g = 255;
    b = 255;
    constructor(e, o, h){
        this.r = Fe(e, 0, 255), this.g = Fe(o, 0, 255), this.b = Fe(h, 0, 255);
    }
    static fromArray(e) {
        return new n(e[0], e[1], e[2]);
    }
    static fromHex(e) {
        if (typeof e == "number") return new n(e >> 16 & 255, e >> 8 & 255, e >> 0 & 255);
        if (typeof e == "string") {
            let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return new n(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
        } else throw new Error("Invalid hex color format");
    }
    static fromHSL(e, o, h) {
        if (o == 0) return new n(255 * h, 255 * h, 255 * h);
        let p = i((z, S, $)=>($ < 0 && ($ += 1), $ > 1 && ($ -= 1), $ < 1 / 6 ? z + (S - z) * 6 * $ : $ < 0.5 ? S : $ < 2 / 3 ? z + (S - z) * (2 / 3 - $) * 6 : z), "hue2rgb"), m = h < .5 ? h * (1 + o) : h + o - h * o, R = 2 * h - m, I = p(R, m, e + 1 / 3), F = p(R, m, e), v = p(R, m, e - 1 / 3);
        return new n(Math.round(I * 255), Math.round(F * 255), Math.round(v * 255));
    }
    static RED = new n(255, 0, 0);
    static GREEN = new n(0, 255, 0);
    static BLUE = new n(0, 0, 255);
    static YELLOW = new n(255, 255, 0);
    static MAGENTA = new n(255, 0, 255);
    static CYAN = new n(0, 255, 255);
    static WHITE = new n(255, 255, 255);
    static BLACK = new n(0, 0, 0);
    clone() {
        return new n(this.r, this.g, this.b);
    }
    lighten(e) {
        return new n(this.r + e, this.g + e, this.b + e);
    }
    darken(e) {
        return this.lighten(-e);
    }
    invert() {
        return new n(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e) {
        return new n(this.r * e.r / 255, this.g * e.g / 255, this.b * e.b / 255);
    }
    lerp(e, o) {
        return new n(Ie(this.r, e.r, o), Ie(this.g, e.g, o), Ie(this.b, e.b, o));
    }
    toHSL() {
        let e = this.r / 255, o = this.g / 255, h = this.b / 255, p = Math.max(e, o, h), m = Math.min(e, o, h), R = (p + m) / 2, I = R, F = R;
        if (p == m) R = I = 0;
        else {
            let v = p - m;
            switch(I = F > .5 ? v / (2 - p - m) : v / (p + m), p){
                case e:
                    R = (o - h) / v + (o < h ? 6 : 0);
                    break;
                case o:
                    R = (h - e) / v + 2;
                    break;
                case h:
                    R = (e - o) / v + 4;
                    break;
            }
            R /= 6;
        }
        return [
            R,
            I,
            F
        ];
    }
    eq(e) {
        return this.r === e.r && this.g === e.g && this.b === e.b;
    }
    toString() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
        return "#" + (16777216 + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
};
function ee(...n) {
    if (n.length === 0) return new Y(255, 255, 255);
    if (n.length === 1) {
        if (n[0] instanceof Y) return n[0].clone();
        if (typeof n[0] == "string") return Y.fromHex(n[0]);
        if (Array.isArray(n[0]) && n[0].length === 3) return Y.fromArray(n[0]);
    }
    return new Y(...n);
}
i(ee, "rgb");
var gr = i((n, e, o)=>Y.fromHSL(n, e, o), "hsl2rgb"), ae = class n {
    static #_ = i(this, "Quad");
    x = 0;
    y = 0;
    w = 1;
    h = 1;
    constructor(e, o, h, p){
        this.x = e, this.y = o, this.w = h, this.h = p;
    }
    scale(e) {
        return new n(this.x + this.w * e.x, this.y + this.h * e.y, this.w * e.w, this.h * e.h);
    }
    pos() {
        return new y(this.x, this.y);
    }
    clone() {
        return new n(this.x, this.y, this.w, this.h);
    }
    eq(e) {
        return this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h;
    }
    toString() {
        return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
};
function ce(n, e, o, h) {
    return new ae(n, e, o, h);
}
i(ce, "quad");
var Ue = class n {
    static #_ = i(this, "Mat4");
    m = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ];
    constructor(e){
        e && (this.m = e);
    }
    static translate(e) {
        return new n([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            e.x,
            e.y,
            0,
            1
        ]);
    }
    static scale(e) {
        return new n([
            e.x,
            0,
            0,
            0,
            0,
            e.y,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    static rotateX(e) {
        e = Me(-e);
        let o = Math.cos(e), h = Math.sin(e);
        return new n([
            1,
            0,
            0,
            0,
            0,
            o,
            -h,
            0,
            0,
            h,
            o,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    static rotateY(e) {
        e = Me(-e);
        let o = Math.cos(e), h = Math.sin(e);
        return new n([
            o,
            0,
            h,
            0,
            0,
            1,
            0,
            0,
            -h,
            0,
            o,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    static rotateZ(e) {
        e = Me(-e);
        let o = Math.cos(e), h = Math.sin(e);
        return new n([
            o,
            -h,
            0,
            0,
            h,
            o,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    translate(e) {
        return this.m[12] += this.m[0] * e.x + this.m[4] * e.y, this.m[13] += this.m[1] * e.x + this.m[5] * e.y, this.m[14] += this.m[2] * e.x + this.m[6] * e.y, this.m[15] += this.m[3] * e.x + this.m[7] * e.y, this;
    }
    scale(e) {
        return this.m[0] *= e.x, this.m[4] *= e.y, this.m[1] *= e.x, this.m[5] *= e.y, this.m[2] *= e.x, this.m[6] *= e.y, this.m[3] *= e.x, this.m[7] *= e.y, this;
    }
    rotate(e) {
        e = Me(-e);
        let o = Math.cos(e), h = Math.sin(e), p = this.m[0], m = this.m[1], R = this.m[4], I = this.m[5];
        return this.m[0] = p * o + m * h, this.m[1] = -p * h + m * o, this.m[4] = R * o + I * h, this.m[5] = -R * h + I * o, this;
    }
    mult(e) {
        let o = [];
        for(let h = 0; h < 4; h++)for(let p = 0; p < 4; p++)o[h * 4 + p] = this.m[0 + p] * e.m[h * 4 + 0] + this.m[4 + p] * e.m[h * 4 + 1] + this.m[8 + p] * e.m[h * 4 + 2] + this.m[12 + p] * e.m[h * 4 + 3];
        return new n(o);
    }
    multVec2(e) {
        return new y(e.x * this.m[0] + e.y * this.m[4] + this.m[12], e.x * this.m[1] + e.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
        return new y(this.m[12], this.m[13]);
    }
    getScale() {
        if (this.m[0] != 0 || this.m[1] != 0) {
            let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
            return new y(o, e / o);
        } else if (this.m[4] != 0 || this.m[5] != 0) {
            let e = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
            return new y(e / o, o);
        } else return new y(0, 0);
    }
    getRotation() {
        if (this.m[0] != 0 || this.m[1] != 0) {
            let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
            return at(this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e));
        } else if (this.m[4] != 0 || this.m[5] != 0) {
            let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
            return at(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / e) : -Math.acos(this.m[4] / e)));
        } else return 0;
    }
    getSkew() {
        if (this.m[0] != 0 || this.m[1] != 0) {
            let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
            return new y(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e), 0);
        } else if (this.m[4] != 0 || this.m[5] != 0) {
            let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
            return new y(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e));
        } else return new y(0, 0);
    }
    invert() {
        let e = [], o = this.m[10] * this.m[15] - this.m[14] * this.m[11], h = this.m[9] * this.m[15] - this.m[13] * this.m[11], p = this.m[9] * this.m[14] - this.m[13] * this.m[10], m = this.m[8] * this.m[15] - this.m[12] * this.m[11], R = this.m[8] * this.m[14] - this.m[12] * this.m[10], I = this.m[8] * this.m[13] - this.m[12] * this.m[9], F = this.m[6] * this.m[15] - this.m[14] * this.m[7], v = this.m[5] * this.m[15] - this.m[13] * this.m[7], z = this.m[5] * this.m[14] - this.m[13] * this.m[6], S = this.m[4] * this.m[15] - this.m[12] * this.m[7], $ = this.m[4] * this.m[14] - this.m[12] * this.m[6], ie = this.m[5] * this.m[15] - this.m[13] * this.m[7], U = this.m[4] * this.m[13] - this.m[12] * this.m[5], W = this.m[6] * this.m[11] - this.m[10] * this.m[7], de = this.m[5] * this.m[11] - this.m[9] * this.m[7], ne = this.m[5] * this.m[10] - this.m[9] * this.m[6], j = this.m[4] * this.m[11] - this.m[8] * this.m[7], C = this.m[4] * this.m[10] - this.m[8] * this.m[6], Te = this.m[4] * this.m[9] - this.m[8] * this.m[5];
        e[0] = this.m[5] * o - this.m[6] * h + this.m[7] * p, e[4] = -(this.m[4] * o - this.m[6] * m + this.m[7] * R), e[8] = this.m[4] * h - this.m[5] * m + this.m[7] * I, e[12] = -(this.m[4] * p - this.m[5] * R + this.m[6] * I), e[1] = -(this.m[1] * o - this.m[2] * h + this.m[3] * p), e[5] = this.m[0] * o - this.m[2] * m + this.m[3] * R, e[9] = -(this.m[0] * h - this.m[1] * m + this.m[3] * I), e[13] = this.m[0] * p - this.m[1] * R + this.m[2] * I, e[2] = this.m[1] * F - this.m[2] * v + this.m[3] * z, e[6] = -(this.m[0] * F - this.m[2] * S + this.m[3] * $), e[10] = this.m[0] * ie - this.m[1] * S + this.m[3] * U, e[14] = -(this.m[0] * z - this.m[1] * $ + this.m[2] * U), e[3] = -(this.m[1] * W - this.m[2] * de + this.m[3] * ne), e[7] = this.m[0] * W - this.m[2] * j + this.m[3] * C, e[11] = -(this.m[0] * de - this.m[1] * j + this.m[3] * Te), e[15] = this.m[0] * ne - this.m[1] * C + this.m[2] * Te;
        let q = this.m[0] * e[0] + this.m[1] * e[4] + this.m[2] * e[8] + this.m[3] * e[12];
        for(let Ae = 0; Ae < 4; Ae++)for(let ye = 0; ye < 4; ye++)e[Ae * 4 + ye] *= 1 / q;
        return new n(e);
    }
    clone() {
        return new n([
            ...this.m
        ]);
    }
    toString() {
        return this.m.toString();
    }
};
function In(n, e, o, h = (p)=>-Math.cos(p)) {
    return n + (h(o) + 1) / 2 * (e - n);
}
i(In, "wave");
var wi = 1103515245, bi = 12345, mr = 2147483648, bt = class {
    static #_ = i(this, "RNG");
    seed;
    constructor(e){
        this.seed = e;
    }
    gen() {
        return this.seed = (wi * this.seed + bi) % mr, this.seed / mr;
    }
    genNumber(e, o) {
        return e + this.gen() * (o - e);
    }
    genVec2(e, o) {
        return new y(this.genNumber(e.x, o.x), this.genNumber(e.y, o.y));
    }
    genColor(e, o) {
        return new Y(this.genNumber(e.r, o.r), this.genNumber(e.g, o.g), this.genNumber(e.b, o.b));
    }
    genAny(...e) {
        if (e.length === 0) return this.gen();
        if (e.length === 1) {
            if (typeof e[0] == "number") return this.genNumber(0, e[0]);
            if (e[0] instanceof y) return this.genVec2(T(0, 0), e[0]);
            if (e[0] instanceof Y) return this.genColor(ee(0, 0, 0), e[0]);
        } else if (e.length === 2) {
            if (typeof e[0] == "number" && typeof e[1] == "number") return this.genNumber(e[0], e[1]);
            if (e[0] instanceof y && e[1] instanceof y) return this.genVec2(e[0], e[1]);
            if (e[0] instanceof Y && e[1] instanceof Y) return this.genColor(e[0], e[1]);
        }
    }
}, Bn = new bt(Date.now());
function wr(n) {
    return n != null && (Bn.seed = n), Bn.seed;
}
i(wr, "randSeed");
function xt(...n) {
    return Bn.genAny(...n);
}
i(xt, "rand");
function Ln(...n) {
    return Math.floor(xt(...n));
}
i(Ln, "randi");
function br(n) {
    return xt() <= n;
}
i(br, "chance");
function vr(n) {
    return n[Ln(n.length)];
}
i(vr, "choose");
function yr(n, e) {
    return n.pos.x + n.width > e.pos.x && n.pos.x < e.pos.x + e.width && n.pos.y + n.height > e.pos.y && n.pos.y < e.pos.y + e.height;
}
i(yr, "testRectRect");
function vi(n, e) {
    if (n.p1.x === n.p2.x && n.p1.y === n.p2.y || e.p1.x === e.p2.x && e.p1.y === e.p2.y) return null;
    let o = (e.p2.y - e.p1.y) * (n.p2.x - n.p1.x) - (e.p2.x - e.p1.x) * (n.p2.y - n.p1.y);
    if (o === 0) return null;
    let h = ((e.p2.x - e.p1.x) * (n.p1.y - e.p1.y) - (e.p2.y - e.p1.y) * (n.p1.x - e.p1.x)) / o, p = ((n.p2.x - n.p1.x) * (n.p1.y - e.p1.y) - (n.p2.y - n.p1.y) * (n.p1.x - e.p1.x)) / o;
    return h < 0 || h > 1 || p < 0 || p > 1 ? null : h;
}
i(vi, "testLineLineT");
function ot(n, e) {
    let o = vi(n, e);
    return o ? T(n.p1.x + o * (n.p2.x - n.p1.x), n.p1.y + o * (n.p2.y - n.p1.y)) : null;
}
i(ot, "testLineLine");
function xr(n, e) {
    if (vt(n, e.p1) || vt(n, e.p2)) return !0;
    let o = n.points();
    return !!ot(e, new Be(o[0], o[1])) || !!ot(e, new Be(o[1], o[2])) || !!ot(e, new Be(o[2], o[3])) || !!ot(e, new Be(o[3], o[0]));
}
i(xr, "testRectLine");
function vt(n, e) {
    return e.x > n.pos.x && e.x < n.pos.x + n.width && e.y > n.pos.y && e.y < n.pos.y + n.height;
}
i(vt, "testRectPoint");
function Ur(n, e) {
    let o = e.sub(n.p1), h = n.p2.sub(n.p1);
    if (Math.abs(o.cross(h)) > Number.EPSILON) return !1;
    let p = o.dot(h) / h.dot(h);
    return p >= 0 && p <= 1;
}
i(Ur, "testLinePoint");
function Vn(n, e) {
    let o = n.p2.sub(n.p1), h = o.dot(o), p = n.p1.sub(e.center), m = 2 * o.dot(p), R = p.dot(p) - e.radius * e.radius, I = m * m - 4 * h * R;
    if (h <= Number.EPSILON || I < 0) return !1;
    if (I == 0) {
        let F = -m / (2 * h);
        if (F >= 0 && F <= 1) return !0;
    } else {
        let F = (-m + Math.sqrt(I)) / (2 * h), v = (-m - Math.sqrt(I)) / (2 * h);
        if (F >= 0 && F <= 1 || v >= 0 && v <= 1) return !0;
    }
    return Er(e, n.p1);
}
i(Vn, "testLineCircle");
function Er(n, e) {
    return n.center.sdist(e) < n.radius * n.radius;
}
i(Er, "testCirclePoint");
function Sr(n, e) {
    let o = e.pts[e.pts.length - 1];
    for (let h of e.pts){
        if (Vn(new Be(o, h), n)) return !0;
        o = h;
    }
    return Er(n, e.pts[0]) ? !0 : _n(e, n.center);
}
i(Sr, "testCirclePolygon");
function _n(n, e) {
    let o = !1, h = n.pts;
    for(let p = 0, m = h.length - 1; p < h.length; m = p++)h[p].y > e.y != h[m].y > e.y && e.x < (h[m].x - h[p].x) * (e.y - h[p].y) / (h[m].y - h[p].y) + h[p].x && (o = !o);
    return o;
}
i(_n, "testPolygonPoint");
var Be = class n {
    static #_ = i(this, "Line");
    p1;
    p2;
    constructor(e, o){
        this.p1 = e.clone(), this.p2 = o.clone();
    }
    transform(e) {
        return new n(e.multVec2(this.p1), e.multVec2(this.p2));
    }
    bbox() {
        return le.fromPoints(this.p1, this.p2);
    }
    area() {
        return this.p1.dist(this.p2);
    }
    clone() {
        return new n(this.p1, this.p2);
    }
}, le = class n {
    static #_ = i(this, "Rect");
    pos;
    width;
    height;
    constructor(e, o, h){
        this.pos = e.clone(), this.width = o, this.height = h;
    }
    static fromPoints(e, o) {
        return new n(e.clone(), o.x - e.x, o.y - e.y);
    }
    center() {
        return new y(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
        return [
            this.pos,
            this.pos.add(this.width, 0),
            this.pos.add(this.width, this.height),
            this.pos.add(0, this.height)
        ];
    }
    transform(e) {
        return new ze(this.points().map((o)=>e.multVec2(o)));
    }
    bbox() {
        return this.clone();
    }
    area() {
        return this.width * this.height;
    }
    clone() {
        return new n(this.pos.clone(), this.width, this.height);
    }
    distToPoint(e) {
        return Math.sqrt(this.sdistToPoint(e));
    }
    sdistToPoint(e) {
        let o = this.pos, h = this.pos.add(this.width, this.height), p = Math.max(o.x - e.x, 0, e.x - h.x), m = Math.max(o.y - e.y, 0, e.y - h.y);
        return p * p + m * m;
    }
}, yt = class n {
    static #_ = i(this, "Circle");
    center;
    radius;
    constructor(e, o){
        this.center = e.clone(), this.radius = o;
    }
    transform(e) {
        return new Fn(this.center, this.radius, this.radius).transform(e);
    }
    bbox() {
        return le.fromPoints(this.center.sub(T(this.radius)), this.center.add(T(this.radius)));
    }
    area() {
        return this.radius * this.radius * Math.PI;
    }
    clone() {
        return new n(this.center, this.radius);
    }
}, Fn = class n {
    static #_ = i(this, "Ellipse");
    center;
    radiusX;
    radiusY;
    constructor(e, o, h){
        this.center = e.clone(), this.radiusX = o, this.radiusY = h;
    }
    transform(e) {
        return new n(e.multVec2(this.center), e.m[0] * this.radiusX, e.m[5] * this.radiusY);
    }
    bbox() {
        return le.fromPoints(this.center.sub(T(this.radiusX, this.radiusY)), this.center.add(T(this.radiusX, this.radiusY)));
    }
    area() {
        return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
        return new n(this.center, this.radiusX, this.radiusY);
    }
}, ze = class n {
    static #_ = i(this, "Polygon");
    pts;
    constructor(e){
        if (e.length < 3) throw new Error("Polygons should have at least 3 vertices");
        this.pts = e;
    }
    transform(e) {
        return new n(this.pts.map((o)=>e.multVec2(o)));
    }
    bbox() {
        let e = T(Number.MAX_VALUE), o = T(-Number.MAX_VALUE);
        for (let h of this.pts)e.x = Math.min(e.x, h.x), o.x = Math.max(o.x, h.x), e.y = Math.min(e.y, h.y), o.y = Math.max(o.y, h.y);
        return le.fromPoints(e, o);
    }
    area() {
        let e = 0, o = this.pts.length;
        for(let h = 0; h < o; h++){
            let p = this.pts[h], m = this.pts[(h + 1) % o];
            e += p.x * m.y * .5, e -= m.x * p.y * .5;
        }
        return Math.abs(e);
    }
    clone() {
        return new n(this.pts.map((e)=>e.clone()));
    }
};
function Cr(n, e) {
    let o = Number.MAX_VALUE, h = T(0);
    for (let p of [
        n,
        e
    ])for(let m = 0; m < p.pts.length; m++){
        let R = p.pts[m], F = p.pts[(m + 1) % p.pts.length].sub(R).normal().unit(), v = Number.MAX_VALUE, z = -Number.MAX_VALUE;
        for(let U = 0; U < n.pts.length; U++){
            let W = n.pts[U].dot(F);
            v = Math.min(v, W), z = Math.max(z, W);
        }
        let S = Number.MAX_VALUE, $ = -Number.MAX_VALUE;
        for(let U = 0; U < e.pts.length; U++){
            let W = e.pts[U].dot(F);
            S = Math.min(S, W), $ = Math.max($, W);
        }
        let ie = Math.min(z, $) - Math.max(v, S);
        if (ie < 0) return null;
        if (ie < Math.abs(o)) {
            let U = $ - v, W = S - z;
            o = Math.abs(U) < Math.abs(W) ? U : W, h = F.scale(o);
        }
    }
    return h;
}
i(Cr, "sat");
var Ut = class extends Map {
    static #_ = i(this, "Registry");
    lastID;
    constructor(...e){
        super(...e), this.lastID = 0;
    }
    push(e) {
        let o = this.lastID;
        return this.set(o, e), this.lastID++, o;
    }
    pushd(e) {
        let o = this.push(e);
        return ()=>this.delete(o);
    }
}, Ve = class n {
    static #_ = i(this, "EventController");
    paused = !1;
    cancel;
    constructor(e){
        this.cancel = e;
    }
    static join(e) {
        let o = new n(()=>e.forEach((h)=>h.cancel()));
        return Object.defineProperty(o, "paused", {
            get: ()=>e[0].paused,
            set: (h)=>e.forEach((p)=>p.paused = h)
        }), o.paused = !1, o;
    }
}, be = class {
    static #_ = i(this, "Event");
    handlers = new Ut;
    add(e) {
        let o = this.handlers.pushd((...p)=>{
            h.paused || e(...p);
        }), h = new Ve(o);
        return h;
    }
    addOnce(e) {
        let o = this.add((...h)=>{
            o.cancel(), e(...h);
        });
        return o;
    }
    next() {
        return new Promise((e)=>this.addOnce(e));
    }
    trigger(...e) {
        this.handlers.forEach((o)=>o(...e));
    }
    numListeners() {
        return this.handlers.size;
    }
    clear() {
        this.handlers.clear();
    }
}, _e = class {
    static #_ = i(this, "EventHandler");
    handlers = {};
    on(e, o) {
        return this.handlers[e] || (this.handlers[e] = new be), this.handlers[e].add(o);
    }
    onOnce(e, o) {
        let h = this.on(e, (...p)=>{
            h.cancel(), o(...p);
        });
        return h;
    }
    next(e) {
        return new Promise((o)=>{
            this.onOnce(e, (...h)=>o(h[0]));
        });
    }
    trigger(e, ...o) {
        this.handlers[e] && this.handlers[e].trigger(...o);
    }
    remove(e) {
        delete this.handlers[e];
    }
    clear() {
        this.handlers = {};
    }
    numListeners(e) {
        return this.handlers[e]?.numListeners() ?? 0;
    }
};
function Kt(n, e) {
    if (n === e) return !0;
    let o = typeof n, h = typeof e;
    if (o !== h) return !1;
    if (o === "object" && h === "object" && n !== null && e !== null) {
        if (Array.isArray(n) !== Array.isArray(e)) return !1;
        let p = Object.keys(n), m = Object.keys(e);
        if (p.length !== m.length) return !1;
        for (let R of p){
            let I = n[R], F = e[R];
            if (!Kt(I, F)) return !1;
        }
        return !0;
    }
    return !1;
}
i(Kt, "deepEq");
function yi(n) {
    let e = window.atob(n), o = e.length, h = new Uint8Array(o);
    for(let p = 0; p < o; p++)h[p] = e.charCodeAt(p);
    return h.buffer;
}
i(yi, "base64ToArrayBuffer");
function Ar(n) {
    return yi(n.split(",")[1]);
}
i(Ar, "dataURLToArrayBuffer");
function Yt(n, e) {
    let o = document.createElement("a");
    o.href = e, o.download = n, o.click();
}
i(Yt, "download");
function kn(n, e) {
    Yt(n, "data:text/plain;charset=utf-8," + e);
}
i(kn, "downloadText");
function Or(n, e) {
    kn(n, JSON.stringify(e));
}
i(Or, "downloadJSON");
function Nn(n, e) {
    let o = URL.createObjectURL(e);
    Yt(n, o), URL.revokeObjectURL(o);
}
i(Nn, "downloadBlob");
var Wt = i((n)=>n.match(/^data:\w+\/\w+;base64,.+/), "isDataURL"), Rr = i((n)=>n.split(".").pop(), "getExt");
function Ee(n, e) {
    return (...o)=>{
        let h = o.length;
        if (h === n.length) return n(...o);
        if (h === e.length) return e(...o);
    };
}
i(Ee, "overload2");
var Pr = (()=>{
    let n = 0;
    return ()=>n++;
})(), Dr = i((n)=>n instanceof Error ? n.message : String(n), "getErrorMessage");
var zt = class {
    static #_ = i(this, "BinaryHeap");
    _items;
    _compareFn;
    constructor(e = (o, h)=>o < h){
        this._compareFn = e, this._items = [];
    }
    insert(e) {
        this._items.push(e), this.moveUp(this._items.length - 1);
    }
    remove() {
        if (this._items.length === 0) return null;
        let e = this._items[0], o = this._items.pop();
        return this._items.length !== 0 && (this._items[0] = o, this.moveDown(0)), e;
    }
    clear() {
        this._items.splice(0, this._items.length);
    }
    moveUp(e) {
        for(; e > 0;){
            let o = Math.floor((e - 1) / 2);
            if (!this._compareFn(this._items[e], this._items[o]) && this._items[e] >= this._items[o]) break;
            this.swap(e, o), e = o;
        }
    }
    moveDown(e) {
        for(; e < Math.floor(this._items.length / 2);){
            let o = 2 * e + 1;
            if (o < this._items.length - 1 && !this._compareFn(this._items[o], this._items[o + 1]) && ++o, this._compareFn(this._items[e], this._items[o])) break;
            this.swap(e, o), e = o;
        }
    }
    swap(e, o) {
        [this._items[e], this._items[o]] = [
            this._items[o],
            this._items[e]
        ];
    }
    get length() {
        return this._items.length;
    }
};
var xi = Object.freeze([
    776,
    2359,
    2367,
    2984,
    3007,
    3021,
    3633,
    3635,
    3648,
    3657,
    4352,
    4449,
    4520
]);
function Mr(n) {
    if (typeof n != "string") throw new TypeError("string cannot be undefined or null");
    let e = [], o = 0, h = 0;
    for(; o < n.length;){
        if (h += Ui(o + h, n), Ri(n[o + h]) && h++, Ti(n[o + h]) && h++, Ai(n[o + h]) && h++, Pi(n[o + h])) {
            h++;
            continue;
        }
        e.push(n.substring(o, o + h)), o += h, h = 0;
    }
    return e;
}
i(Mr, "runes");
function Ui(n, e) {
    let o = e[n];
    if (!Ei(o) || n === e.length - 1) return 1;
    let h = o + e[n + 1], p = e.substring(n + 2, n + 5);
    return Tr(h) && Tr(p) ? 4 : Si(h) && Oi(p) ? e.slice(n).indexOf(String.fromCodePoint(917631)) + 2 : Ci(p) ? 4 : 2;
}
i(Ui, "nextUnits");
function Ei(n) {
    return n && tt(n[0].charCodeAt(0), 55296, 56319);
}
i(Ei, "isFirstOfSurrogatePair");
function Tr(n) {
    return tt(jn(n), 127462, 127487);
}
i(Tr, "isRegionalIndicator");
function Si(n) {
    return tt(jn(n), 127988, 127988);
}
i(Si, "isSubdivisionFlag");
function Ci(n) {
    return tt(jn(n), 127995, 127999);
}
i(Ci, "isFitzpatrickModifier");
function Ti(n) {
    return typeof n == "string" && tt(n.charCodeAt(0), 65024, 65039);
}
i(Ti, "isVariationSelector");
function Ai(n) {
    return typeof n == "string" && tt(n.charCodeAt(0), 8400, 8447);
}
i(Ai, "isDiacriticalMark");
function Oi(n) {
    let e = n.codePointAt(0);
    return typeof n == "string" && typeof e == "number" && tt(e, 917504, 917631);
}
i(Oi, "isSupplementarySpecialpurposePlane");
function Ri(n) {
    return typeof n == "string" && xi.includes(n.charCodeAt(0));
}
i(Ri, "isGrapheme");
function Pi(n) {
    return typeof n == "string" && n.charCodeAt(0) === 8205;
}
i(Pi, "isZeroWidthJoiner");
function jn(n) {
    let e = n.charCodeAt(0) - 55296, o = n.charCodeAt(1) - 56320;
    return (e << 10) + o + 65536;
}
i(jn, "codePointFromSurrogatePair");
function tt(n, e, o) {
    return n >= e && n <= o;
}
i(tt, "betweenInclusive");
var Hn = {
    "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "6": "ltrigger",
            "7": "rtrigger",
            "8": "select",
            "9": "start",
            "10": "lstick",
            "11": "rstick",
            "12": "dpad-up",
            "13": "dpad-down",
            "14": "dpad-left",
            "15": "dpad-right",
            "16": "home",
            "17": "capture"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            },
            right: {
                x: 2,
                y: 3
            }
        }
    },
    "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "9": "select",
            "10": "lstick",
            "16": "start"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            }
        }
    },
    "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "9": "start",
            "10": "lstick",
            "16": "select"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            }
        }
    },
    "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "6": "ltrigger",
            "7": "rtrigger",
            "8": "select",
            "9": "start",
            "10": "lstick",
            "11": "rstick",
            "12": "dpad-up",
            "13": "dpad-down",
            "14": "dpad-left",
            "15": "dpad-right",
            "16": "home",
            "17": "capture"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            },
            right: {
                x: 2,
                y: 3
            }
        }
    },
    default: {
        buttons: {
            "0": "south",
            "1": "east",
            "2": "west",
            "3": "north",
            "4": "lshoulder",
            "5": "rshoulder",
            "6": "ltrigger",
            "7": "rtrigger",
            "8": "select",
            "9": "start",
            "10": "lstick",
            "11": "rstick",
            "12": "dpad-up",
            "13": "dpad-down",
            "14": "dpad-left",
            "15": "dpad-right",
            "16": "home"
        },
        sticks: {
            left: {
                x: 0,
                y: 1
            },
            right: {
                x: 2,
                y: 3
            }
        }
    }
};
var ut = class {
    static #_ = i(this, "ButtonState");
    pressed = new Set([]);
    pressedRepeat = new Set([]);
    released = new Set([]);
    down = new Set([]);
    update() {
        this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(e) {
        this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
    }
    pressRepeat(e) {
        this.pressedRepeat.add(e);
    }
    release(e) {
        this.down.delete(e), this.pressed.delete(e), this.released.add(e);
    }
}, qn = class {
    static #_ = i(this, "GamepadState");
    buttonState = new ut;
    stickState = new Map;
}, $n = class {
    static #_ = i(this, "FPSCounter");
    dts = [];
    timer = 0;
    fps = 0;
    tick(e) {
        this.dts.push(e), this.timer += e, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((o, h)=>o + h) / this.dts.length)), this.dts = []);
    }
}, Gr = i((n)=>{
    if (!n.canvas) throw new Error("Please provide a canvas");
    let e = {
        canvas: n.canvas,
        loopID: null,
        stopped: !1,
        dt: 0,
        time: 0,
        realTime: 0,
        fpsCounter: new $n,
        timeScale: 1,
        skipTime: !1,
        numFrames: 0,
        mousePos: new y(0),
        mouseDeltaPos: new y(0),
        keyState: new ut,
        mouseState: new ut,
        mergedGamepadState: new qn,
        gamepadStates: new Map,
        gamepads: [],
        charInputted: [],
        isMouseMoved: !1,
        lastWidth: n.canvas.offsetWidth,
        lastHeight: n.canvas.offsetHeight,
        events: new _e
    };
    function o() {
        return e.canvas;
    }
    i(o, "canvas");
    function h() {
        return e.dt * e.timeScale;
    }
    i(h, "dt");
    function p() {
        return e.time;
    }
    i(p, "time");
    function m() {
        return e.fpsCounter.fps;
    }
    i(m, "fps");
    function R() {
        return e.numFrames;
    }
    i(R, "numFrames");
    function I() {
        return e.canvas.toDataURL();
    }
    i(I, "screenshot");
    function F(d) {
        e.canvas.style.cursor = d;
    }
    i(F, "setCursor");
    function v() {
        return e.canvas.style.cursor;
    }
    i(v, "getCursor");
    function z(d) {
        if (d) try {
            let x = e.canvas.requestPointerLock();
            x.catch && x.catch((O)=>console.error(O));
        } catch (x) {
            console.error(x);
        }
        else document.exitPointerLock();
    }
    i(z, "setCursorLocked");
    function S() {
        return !!document.pointerLockElement;
    }
    i(S, "isCursorLocked");
    function $(d) {
        d.requestFullscreen ? d.requestFullscreen() : d.webkitRequestFullscreen && d.webkitRequestFullscreen();
    }
    i($, "enterFullscreen");
    function ie() {
        document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    i(ie, "exitFullscreen");
    function U() {
        return document.fullscreenElement || document.webkitFullscreenElement;
    }
    i(U, "getFullscreenElement");
    function W(d = !0) {
        d ? $(e.canvas) : ie();
    }
    i(W, "setFullscreen");
    function de() {
        return !!U();
    }
    i(de, "isFullscreen");
    function ne() {
        e.stopped = !0;
        for(let d in X)e.canvas.removeEventListener(d, X[d]);
        for(let d in he)document.removeEventListener(d, he[d]);
        for(let d in Ce)window.removeEventListener(d, Ce[d]);
        He.disconnect();
    }
    i(ne, "quit");
    function j(d) {
        e.loopID !== null && cancelAnimationFrame(e.loopID);
        let x = 0, O = i((k)=>{
            if (e.stopped) return;
            if (document.visibilityState !== "visible") {
                e.loopID = requestAnimationFrame(O);
                return;
            }
            let te = k / 1e3, J = te - e.realTime, Oe = n.maxFPS ? 1 / n.maxFPS : 0;
            e.realTime = te, x += J, x > Oe && (e.skipTime || (e.dt = x, e.time += h(), e.fpsCounter.tick(e.dt)), x = 0, e.skipTime = !1, e.numFrames++, vn(), d(), yn()), e.loopID = requestAnimationFrame(O);
        }, "frame");
        O(0);
    }
    i(j, "run");
    function C() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    i(C, "isTouchscreen");
    function Te() {
        return e.mousePos.clone();
    }
    i(Te, "mousePos");
    function q() {
        return e.mouseDeltaPos.clone();
    }
    i(q, "mouseDeltaPos");
    function Ae(d = "left") {
        return e.mouseState.pressed.has(d);
    }
    i(Ae, "isMousePressed");
    function ye(d = "left") {
        return e.mouseState.down.has(d);
    }
    i(ye, "isMouseDown");
    function Se(d = "left") {
        return e.mouseState.released.has(d);
    }
    i(Se, "isMouseReleased");
    function st() {
        return e.isMouseMoved;
    }
    i(st, "isMouseMoved");
    function sn(d) {
        return d === void 0 ? e.keyState.pressed.size > 0 : e.keyState.pressed.has(d);
    }
    i(sn, "isKeyPressed");
    function Ct(d) {
        return d === void 0 ? e.keyState.pressedRepeat.size > 0 : e.keyState.pressedRepeat.has(d);
    }
    i(Ct, "isKeyPressedRepeat");
    function Tt(d) {
        return d === void 0 ? e.keyState.down.size > 0 : e.keyState.down.has(d);
    }
    i(Tt, "isKeyDown");
    function At(d) {
        return d === void 0 ? e.keyState.released.size > 0 : e.keyState.released.has(d);
    }
    i(At, "isKeyReleased");
    function Ke(d) {
        return d === void 0 ? e.mergedGamepadState.buttonState.pressed.size > 0 : e.mergedGamepadState.buttonState.pressed.has(d);
    }
    i(Ke, "isGamepadButtonPressed");
    function on(d) {
        return d === void 0 ? e.mergedGamepadState.buttonState.down.size > 0 : e.mergedGamepadState.buttonState.down.has(d);
    }
    i(on, "isGamepadButtonDown");
    function an(d) {
        return d === void 0 ? e.mergedGamepadState.buttonState.released.size > 0 : e.mergedGamepadState.buttonState.released.has(d);
    }
    i(an, "isGamepadButtonReleased");
    function un(d) {
        return e.events.on("resize", d);
    }
    i(un, "onResize");
    let cn = Ee((d)=>e.events.on("keyDown", d), (d, x)=>e.events.on("keyDown", (O)=>O === d && x(d))), hn = Ee((d)=>e.events.on("keyPress", d), (d, x)=>e.events.on("keyPress", (O)=>O === d && x(d))), ln = Ee((d)=>e.events.on("keyPressRepeat", d), (d, x)=>e.events.on("keyPressRepeat", (O)=>O === d && x(d))), Ot = Ee((d)=>e.events.on("keyRelease", d), (d, x)=>e.events.on("keyRelease", (O)=>O === d && x(d))), Rt = Ee((d)=>e.events.on("mouseDown", (x)=>d(x)), (d, x)=>e.events.on("mouseDown", (O)=>O === d && x(O))), Pt = Ee((d)=>e.events.on("mousePress", (x)=>d(x)), (d, x)=>e.events.on("mousePress", (O)=>O === d && x(O))), Dt = Ee((d)=>e.events.on("mouseRelease", (x)=>d(x)), (d, x)=>e.events.on("mouseRelease", (O)=>O === d && x(O)));
    function Mt(d) {
        return e.events.on("mouseMove", ()=>d(Te(), q()));
    }
    i(Mt, "onMouseMove");
    function dn(d) {
        return e.events.on("charInput", d);
    }
    i(dn, "onCharInput");
    function ht(d) {
        return e.events.on("touchStart", d);
    }
    i(ht, "onTouchStart");
    function fn(d) {
        return e.events.on("touchMove", d);
    }
    i(fn, "onTouchMove");
    function mn(d) {
        return e.events.on("touchEnd", d);
    }
    i(mn, "onTouchEnd");
    function Gt(d) {
        return e.events.on("scroll", d);
    }
    i(Gt, "onScroll");
    function pn(d) {
        return e.events.on("hide", d);
    }
    i(pn, "onHide");
    function Bt(d) {
        return e.events.on("show", d);
    }
    i(Bt, "onShow");
    function Ft(d, x) {
        if (typeof d == "function") return e.events.on("gamepadButtonDown", d);
        if (typeof d == "string" && typeof x == "function") return e.events.on("gamepadButtonDown", (O)=>O === d && x(d));
    }
    i(Ft, "onGamepadButtonDown");
    function gn(d, x) {
        if (typeof d == "function") return e.events.on("gamepadButtonPress", d);
        if (typeof d == "string" && typeof x == "function") return e.events.on("gamepadButtonPress", (O)=>O === d && x(d));
    }
    i(gn, "onGamepadButtonPress");
    function lt(d, x) {
        if (typeof d == "function") return e.events.on("gamepadButtonRelease", d);
        if (typeof d == "string" && typeof x == "function") return e.events.on("gamepadButtonRelease", (O)=>O === d && x(d));
    }
    i(lt, "onGamepadButtonRelease");
    function wn(d, x) {
        return e.events.on("gamepadStick", (O, k)=>O === d && x(k));
    }
    i(wn, "onGamepadStick");
    function dt(d) {
        e.events.on("gamepadConnect", d);
    }
    i(dt, "onGamepadConnect");
    function Pe(d) {
        e.events.on("gamepadDisconnect", d);
    }
    i(Pe, "onGamepadDisconnect");
    function It(d) {
        return e.mergedGamepadState.stickState.get(d) || new y(0);
    }
    i(It, "getGamepadStick");
    function bn() {
        return [
            ...e.charInputted
        ];
    }
    i(bn, "charInputted");
    function ft() {
        return [
            ...e.gamepads
        ];
    }
    i(ft, "getGamepads");
    function vn() {
        e.events.trigger("input"), e.keyState.down.forEach((d)=>e.events.trigger("keyDown", d)), e.mouseState.down.forEach((d)=>e.events.trigger("mouseDown", d)), je();
    }
    i(vn, "processInput");
    function yn() {
        e.keyState.update(), e.mouseState.update(), e.mergedGamepadState.buttonState.update(), e.mergedGamepadState.stickState.forEach((d, x)=>{
            e.mergedGamepadState.stickState.set(x, new y(0));
        }), e.charInputted = [], e.isMouseMoved = !1, e.gamepadStates.forEach((d)=>{
            d.buttonState.update(), d.stickState.forEach((x, O)=>{
                d.stickState.set(O, new y(0));
            });
        });
    }
    i(yn, "resetInput");
    function re(d) {
        let x = {
            index: d.index,
            isPressed: (O)=>e.gamepadStates.get(d.index).buttonState.pressed.has(O),
            isDown: (O)=>e.gamepadStates.get(d.index).buttonState.down.has(O),
            isReleased: (O)=>e.gamepadStates.get(d.index).buttonState.released.has(O),
            getStick: (O)=>e.gamepadStates.get(d.index).stickState.get(O)
        };
        return e.gamepads.push(x), e.gamepadStates.set(d.index, {
            buttonState: new ut,
            stickState: new Map([
                [
                    "left",
                    new y(0)
                ],
                [
                    "right",
                    new y(0)
                ]
            ])
        }), x;
    }
    i(re, "registerGamepad");
    function Ne(d) {
        e.gamepads = e.gamepads.filter((x)=>x.index !== d.index), e.gamepadStates.delete(d.index);
    }
    i(Ne, "removeGamepad");
    function je() {
        for (let d of navigator.getGamepads())d && !e.gamepadStates.has(d.index) && re(d);
        for (let d of e.gamepads){
            let x = navigator.getGamepads()[d.index], k = (n.gamepads ?? {})[x.id] ?? Hn[x.id] ?? Hn.default, te = e.gamepadStates.get(d.index);
            for(let J = 0; J < x.buttons.length; J++)x.buttons[J].pressed ? (te.buttonState.down.has(k.buttons[J]) || (e.mergedGamepadState.buttonState.press(k.buttons[J]), te.buttonState.press(k.buttons[J]), e.events.trigger("gamepadButtonPress", k.buttons[J])), e.events.trigger("gamepadButtonDown", k.buttons[J])) : te.buttonState.down.has(k.buttons[J]) && (e.mergedGamepadState.buttonState.release(k.buttons[J]), te.buttonState.release(k.buttons[J]), e.events.trigger("gamepadButtonRelease", k.buttons[J]));
            for(let J in k.sticks){
                let Oe = k.sticks[J], qe = new y(x.axes[Oe.x], x.axes[Oe.y]);
                te.stickState.set(J, qe), e.mergedGamepadState.stickState.set(J, qe), e.events.trigger("gamepadStick", J, qe);
            }
        }
    }
    i(je, "processGamepad");
    let X = {}, he = {}, Ce = {}, Ye = n.pixelDensity || window.devicePixelRatio || 1;
    X.mousemove = (d)=>{
        let x = new y(d.offsetX, d.offsetY), O = new y(d.movementX, d.movementY);
        if (de()) {
            let k = e.canvas.width / Ye, te = e.canvas.height / Ye, J = window.innerWidth, Oe = window.innerHeight, qe = J / Oe, Vt = k / te;
            if (qe > Vt) {
                let pe = Oe / te, it = (J - k * pe) / 2;
                x.x = Le(d.offsetX - it, 0, k * pe, 0, k), x.y = Le(d.offsetY, 0, te * pe, 0, te);
            } else {
                let pe = J / k, it = (Oe - te * pe) / 2;
                x.x = Le(d.offsetX, 0, k * pe, 0, k), x.y = Le(d.offsetY - it, 0, te * pe, 0, te);
            }
        }
        e.events.onOnce("input", ()=>{
            e.isMouseMoved = !0, e.mousePos = x, e.mouseDeltaPos = O, e.events.trigger("mouseMove");
        });
    };
    let Lt = [
        "left",
        "middle",
        "right",
        "back",
        "forward"
    ];
    X.mousedown = (d)=>{
        e.events.onOnce("input", ()=>{
            let x = Lt[d.button];
            x && (e.mouseState.press(x), e.events.trigger("mousePress", x));
        });
    }, X.mouseup = (d)=>{
        e.events.onOnce("input", ()=>{
            let x = Lt[d.button];
            x && (e.mouseState.release(x), e.events.trigger("mouseRelease", x));
        });
    };
    let We = new Set([
        " ",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab"
    ]), ge = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        " ": "space"
    };
    X.keydown = (d)=>{
        We.has(d.key) && d.preventDefault(), e.events.onOnce("input", ()=>{
            let x = ge[d.key] || d.key.toLowerCase();
            x.length === 1 ? (e.events.trigger("charInput", x), e.charInputted.push(x)) : x === "space" && (e.events.trigger("charInput", " "), e.charInputted.push(" ")), d.repeat ? (e.keyState.pressRepeat(x), e.events.trigger("keyPressRepeat", x)) : (e.keyState.press(x), e.events.trigger("keyPressRepeat", x), e.events.trigger("keyPress", x));
        });
    }, X.keyup = (d)=>{
        e.events.onOnce("input", ()=>{
            let x = ge[d.key] || d.key.toLowerCase();
            e.keyState.release(x), e.events.trigger("keyRelease", x);
        });
    }, X.touchstart = (d)=>{
        d.preventDefault(), e.events.onOnce("input", ()=>{
            let x = [
                ...d.changedTouches
            ], O = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y), e.mouseState.press("left"), e.events.trigger("mousePress", "left")), x.forEach((k)=>{
                e.events.trigger("touchStart", new y(k.clientX - O.x, k.clientY - O.y), k);
            });
        });
    }, X.touchmove = (d)=>{
        d.preventDefault(), e.events.onOnce("input", ()=>{
            let x = [
                ...d.changedTouches
            ], O = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y), e.events.trigger("mouseMove")), x.forEach((k)=>{
                e.events.trigger("touchMove", new y(k.clientX - O.x, k.clientY - O.y), k);
            });
        });
    }, X.touchend = (d)=>{
        e.events.onOnce("input", ()=>{
            let x = [
                ...d.changedTouches
            ], O = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((k)=>{
                e.events.trigger("touchEnd", new y(k.clientX - O.x, k.clientY - O.y), k);
            });
        });
    }, X.touchcancel = (d)=>{
        e.events.onOnce("input", ()=>{
            let x = [
                ...d.changedTouches
            ], O = e.canvas.getBoundingClientRect();
            n.touchToMouse !== !1 && (e.mousePos = new y(x[0].clientX - O.x, x[0].clientY - O.y), e.mouseState.release("left"), e.events.trigger("mouseRelease", "left")), x.forEach((k)=>{
                e.events.trigger("touchEnd", new y(k.clientX - O.x, k.clientY - O.y), k);
            });
        });
    }, X.wheel = (d)=>{
        d.preventDefault(), e.events.onOnce("input", ()=>{
            e.events.trigger("scroll", new y(d.deltaX, d.deltaY));
        });
    }, X.contextmenu = (d)=>d.preventDefault(), he.visibilitychange = ()=>{
        document.visibilityState === "visible" ? (e.skipTime = !0, e.events.trigger("show")) : e.events.trigger("hide");
    }, Ce.gamepadconnected = (d)=>{
        let x = re(d.gamepad);
        e.events.onOnce("input", ()=>{
            e.events.trigger("gamepadConnect", x);
        });
    }, Ce.gamepaddisconnected = (d)=>{
        let x = ft().filter((O)=>O.index === d.gamepad.index)[0];
        Ne(d.gamepad), e.events.onOnce("input", ()=>{
            e.events.trigger("gamepadDisconnect", x);
        });
    };
    for(let d in X)e.canvas.addEventListener(d, X[d]);
    for(let d in he)document.addEventListener(d, he[d]);
    for(let d in Ce)window.addEventListener(d, Ce[d]);
    let He = new ResizeObserver((d)=>{
        for (let x of d)if (x.target === e.canvas) {
            if (e.lastWidth === e.canvas.offsetWidth && e.lastHeight === e.canvas.offsetHeight) return;
            e.lastWidth = e.canvas.offsetWidth, e.lastHeight = e.canvas.offsetHeight, e.events.onOnce("input", ()=>{
                e.events.trigger("resize");
            });
        }
    });
    return He.observe(e.canvas), {
        dt: h,
        time: p,
        run: j,
        canvas: o,
        fps: m,
        numFrames: R,
        quit: ne,
        setFullscreen: W,
        isFullscreen: de,
        setCursor: F,
        screenshot: I,
        getGamepads: ft,
        getCursor: v,
        setCursorLocked: z,
        isCursorLocked: S,
        isTouchscreen: C,
        mousePos: Te,
        mouseDeltaPos: q,
        isKeyDown: Tt,
        isKeyPressed: sn,
        isKeyPressedRepeat: Ct,
        isKeyReleased: At,
        isMouseDown: ye,
        isMousePressed: Ae,
        isMouseReleased: Se,
        isMouseMoved: st,
        isGamepadButtonPressed: Ke,
        isGamepadButtonDown: on,
        isGamepadButtonReleased: an,
        getGamepadStick: It,
        charInputted: bn,
        onResize: un,
        onKeyDown: cn,
        onKeyPress: hn,
        onKeyPressRepeat: ln,
        onKeyRelease: Ot,
        onMouseDown: Rt,
        onMousePress: Pt,
        onMouseRelease: Dt,
        onMouseMove: Mt,
        onCharInput: dn,
        onTouchStart: ht,
        onTouchMove: fn,
        onTouchEnd: mn,
        onScroll: Gt,
        onHide: pn,
        onShow: Bt,
        onGamepadButtonDown: Ft,
        onGamepadButtonPress: gn,
        onGamepadButtonRelease: lt,
        onGamepadStick: wn,
        onGamepadConnect: dt,
        onGamepadDisconnect: Pe,
        events: e.events
    };
}, "default");
var Re = class n {
    static #_ = i(this, "Texture");
    ctx;
    src = null;
    glTex;
    width;
    height;
    constructor(e, o, h, p = {}){
        this.ctx = e;
        let m = e.gl;
        this.glTex = e.gl.createTexture(), e.onDestroy(()=>this.free()), this.width = o, this.height = h;
        let R = {
            linear: m.LINEAR,
            nearest: m.NEAREST
        }[p.filter ?? e.opts.texFilter] ?? m.NEAREST, I = {
            repeat: m.REPEAT,
            clampToEadge: m.CLAMP_TO_EDGE
        }[p.wrap] ?? m.CLAMP_TO_EDGE;
        this.bind(), o && h && m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, o, h, 0, m.RGBA, m.UNSIGNED_BYTE, null), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, R), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, R), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, I), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, I), this.unbind();
    }
    static fromImage(e, o, h = {}) {
        let p = new n(e, o.width, o.height, h);
        return p.update(o), p.src = o, p;
    }
    update(e, o = 0, h = 0) {
        let p = this.ctx.gl;
        this.bind(), p.texSubImage2D(p.TEXTURE_2D, 0, o, h, p.RGBA, p.UNSIGNED_BYTE, e), this.unbind();
    }
    bind() {
        this.ctx.pushTexture2D(this.glTex);
    }
    unbind() {
        this.ctx.popTexture2D();
    }
    free() {
        this.ctx.gl.deleteTexture(this.glTex);
    }
}, rt = class {
    static #_ = i(this, "FrameBuffer");
    ctx;
    tex;
    glFramebuffer;
    glRenderbuffer;
    constructor(e, o, h, p = {}){
        this.ctx = e;
        let m = e.gl;
        e.onDestroy(()=>this.free()), this.tex = new Re(e, o, h, p), this.glFramebuffer = m.createFramebuffer(), this.glRenderbuffer = m.createRenderbuffer(), this.bind(), m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, o, h), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, m.TEXTURE_2D, this.tex.glTex, 0), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, this.glRenderbuffer), this.unbind();
    }
    get width() {
        return this.tex.width;
    }
    get height() {
        return this.tex.height;
    }
    toImageData() {
        let e = this.ctx.gl, o = new Uint8ClampedArray(this.width * this.height * 4);
        this.bind(), e.readPixels(0, 0, this.width, this.height, e.RGBA, e.UNSIGNED_BYTE, o), this.unbind();
        let h = this.width * 4, p = new Uint8Array(h);
        for(let m = 0; m < (this.height / 2 | 0); m++){
            let R = m * h, I = (this.height - m - 1) * h;
            p.set(o.subarray(R, R + h)), o.copyWithin(R, I, I + h), o.set(p, I);
        }
        return new ImageData(o, this.width, this.height);
    }
    toDataURL() {
        let e = document.createElement("canvas"), o = e.getContext("2d");
        return e.width = this.width, e.height = this.height, o.putImageData(this.toImageData(), 0, 0), e.toDataURL();
    }
    draw(e) {
        this.bind(), e(), this.unbind();
    }
    bind() {
        this.ctx.pushFramebuffer(this.glFramebuffer), this.ctx.pushRenderbuffer(this.glRenderbuffer), this.ctx.pushViewport({
            x: 0,
            y: 0,
            w: this.width,
            h: this.height
        });
    }
    unbind() {
        this.ctx.popFramebuffer(), this.ctx.popRenderbuffer(), this.ctx.popViewport();
    }
    free() {
        let e = this.ctx.gl;
        e.deleteFramebuffer(this.glFramebuffer), e.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
    }
}, Xt = class {
    static #_ = i(this, "Shader");
    ctx;
    glProgram;
    constructor(e, o, h, p){
        this.ctx = e, e.onDestroy(()=>this.free());
        let m = e.gl, R = m.createShader(m.VERTEX_SHADER), I = m.createShader(m.FRAGMENT_SHADER);
        m.shaderSource(R, o), m.shaderSource(I, h), m.compileShader(R), m.compileShader(I);
        let F = m.createProgram();
        if (this.glProgram = F, m.attachShader(F, R), m.attachShader(F, I), p.forEach((v, z)=>m.bindAttribLocation(F, z, v)), m.linkProgram(F), !m.getProgramParameter(F, m.LINK_STATUS)) {
            let v = m.getShaderInfoLog(R);
            if (v) throw new Error("VERTEX SHADER " + v);
            let z = m.getShaderInfoLog(I);
            if (z) throw new Error("FRAGMENT SHADER " + z);
        }
        m.deleteShader(R), m.deleteShader(I);
    }
    bind() {
        this.ctx.pushProgram(this.glProgram);
    }
    unbind() {
        this.ctx.popProgram();
    }
    send(e) {
        let o = this.ctx.gl;
        for(let h in e){
            let p = e[h], m = o.getUniformLocation(this.glProgram, h);
            typeof p == "number" ? o.uniform1f(m, p) : p instanceof Ue ? o.uniformMatrix4fv(m, !1, new Float32Array(p.m)) : p instanceof Y ? o.uniform3f(m, p.r, p.g, p.b) : p instanceof y && o.uniform2f(m, p.x, p.y);
        }
    }
    free() {
        this.ctx.gl.deleteProgram(this.glProgram);
    }
}, Jt = class {
    static #_ = i(this, "BatchRenderer");
    ctx;
    glVBuf;
    glIBuf;
    vqueue = [];
    iqueue = [];
    stride;
    maxVertices;
    maxIndices;
    vertexFormat;
    numDraws = 0;
    curPrimitive = null;
    curTex = null;
    curShader = null;
    curUniform = {};
    constructor(e, o, h, p){
        let m = e.gl;
        this.vertexFormat = o, this.ctx = e, this.stride = o.reduce((R, I)=>R + I.size, 0), this.maxVertices = h, this.maxIndices = p, this.glVBuf = m.createBuffer(), e.pushArrayBuffer(this.glVBuf), m.bufferData(m.ARRAY_BUFFER, h * 4, m.DYNAMIC_DRAW), e.popArrayBuffer(), this.glIBuf = m.createBuffer(), e.pushElementArrayBuffer(this.glIBuf), m.bufferData(m.ELEMENT_ARRAY_BUFFER, p * 4, m.DYNAMIC_DRAW), e.popElementArrayBuffer();
    }
    push(e, o, h, p, m = null, R = {}) {
        (e !== this.curPrimitive || m !== this.curTex || p !== this.curShader || !Kt(this.curUniform, R) || this.vqueue.length + o.length * this.stride > this.maxVertices || this.iqueue.length + h.length > this.maxIndices) && this.flush();
        let I = this.vqueue.length / this.stride;
        for (let F of o)this.vqueue.push(F);
        for (let F of h)this.iqueue.push(F + I);
        this.curPrimitive = e, this.curShader = p, this.curTex = m, this.curUniform = R;
    }
    flush() {
        if (!this.curPrimitive || !this.curShader || this.vqueue.length === 0 || this.iqueue.length === 0) return;
        let e = this.ctx.gl;
        this.ctx.pushArrayBuffer(this.glVBuf), e.bufferSubData(e.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)), this.ctx.pushElementArrayBuffer(this.glIBuf), e.bufferSubData(e.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(this.iqueue)), this.ctx.setVertexFormat(this.vertexFormat), this.curShader.bind(), this.curShader.send(this.curUniform), this.curTex?.bind(), e.drawElements(this.curPrimitive, this.iqueue.length, e.UNSIGNED_SHORT, 0), this.curTex?.unbind(), this.curShader.unbind(), this.ctx.popArrayBuffer(), this.ctx.popElementArrayBuffer(), this.vqueue = [], this.iqueue = [], this.numDraws++;
    }
    free() {
        let e = this.ctx.gl;
        e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
    }
};
function nt(n) {
    let e = [], o = i((m)=>{
        e.push(m), n(m);
    }, "push"), h = i(()=>{
        e.pop(), n(p() ?? null);
    }, "pop"), p = i(()=>e[e.length - 1], "cur");
    return [
        o,
        h,
        p
    ];
}
i(nt, "genStack");
function zn(n, e = {}) {
    let o = [];
    function h(q) {
        o.push(q);
    }
    i(h, "onDestroy");
    function p() {
        o.forEach((q)=>q()), n.getExtension("WEBGL_lose_context").loseContext();
    }
    i(p, "destroy");
    let m = null;
    function R(q) {
        if (Kt(q, m)) return;
        m = q;
        let Ae = q.reduce((ye, Se)=>ye + Se.size, 0);
        q.reduce((ye, Se, st)=>(n.vertexAttribPointer(st, Se.size, n.FLOAT, !1, Ae * 4, ye), n.enableVertexAttribArray(st), ye + Se.size * 4), 0);
    }
    i(R, "setVertexFormat");
    let [I, F] = nt((q)=>n.bindTexture(n.TEXTURE_2D, q)), [v, z] = nt((q)=>n.bindBuffer(n.ARRAY_BUFFER, q)), [S, $] = nt((q)=>n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, q)), [ie, U] = nt((q)=>n.bindFramebuffer(n.FRAMEBUFFER, q)), [W, de] = nt((q)=>n.bindRenderbuffer(n.RENDERBUFFER, q)), [ne, j] = nt(({ x: q, y: Ae, w: ye, h: Se })=>{
        n.viewport(q, Ae, ye, Se);
    }), [C, Te] = nt((q)=>n.useProgram(q));
    return ne({
        x: 0,
        y: 0,
        w: n.drawingBufferWidth,
        h: n.drawingBufferHeight
    }), {
        gl: n,
        opts: e,
        onDestroy: h,
        destroy: p,
        pushTexture2D: I,
        popTexture2D: F,
        pushArrayBuffer: v,
        popArrayBuffer: z,
        pushElementArrayBuffer: S,
        popElementArrayBuffer: $,
        pushFramebuffer: ie,
        popFramebuffer: U,
        pushRenderbuffer: W,
        popRenderbuffer: de,
        pushViewport: ne,
        popViewport: j,
        pushProgram: C,
        popProgram: Te,
        setVertexFormat: R
    };
}
i(zn, "initGfx");
var ve = class n {
    static #_ = i(this, "Asset");
    loaded = !1;
    data = null;
    error = null;
    onLoadEvents = new be;
    onErrorEvents = new be;
    onFinishEvents = new be;
    constructor(e){
        e.then((o)=>{
            this.data = o, this.onLoadEvents.trigger(o);
        }).catch((o)=>{
            if (this.error = o, this.onErrorEvents.numListeners() > 0) this.onErrorEvents.trigger(o);
            else throw o;
        }).finally(()=>{
            this.onFinishEvents.trigger(), this.loaded = !0;
        });
    }
    static loaded(e) {
        let o = new n(Promise.resolve(e));
        return o.data = e, o.loaded = !0, o;
    }
    onLoad(e) {
        return this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e), this;
    }
    onError(e) {
        return this.loaded && this.error ? e(this.error) : this.onErrorEvents.add(e), this;
    }
    onFinish(e) {
        return this.loaded ? e() : this.onFinishEvents.add(e), this;
    }
    then(e) {
        return this.onLoad(e);
    }
    catch(e) {
        return this.onError(e);
    }
    finally(e) {
        return this.onFinish(e);
    }
}, ke = class {
    static #_ = i(this, "AssetBucket");
    assets = new Map;
    lastUID = 0;
    add(e, o) {
        let h = e ?? this.lastUID++ + "", p = new ve(o);
        return this.assets.set(h, p), p;
    }
    addLoaded(e, o) {
        let h = e ?? this.lastUID++ + "", p = ve.loaded(o);
        return this.assets.set(h, p), p;
    }
    get(e) {
        return this.assets.get(e);
    }
    progress() {
        if (this.assets.size === 0) return 1;
        let e = 0;
        return this.assets.forEach((o)=>{
            o.loaded && e++;
        }), e / this.assets.size;
    }
}, Br = i(()=>{
    let n = {
        urlPrefix: "",
        loaded: !1
    };
    function e(F) {
        n.urlPrefix = F;
    }
    i(e, "setURLPrefix");
    function o() {
        return n.urlPrefix;
    }
    i(o, "getURLPrefix");
    function h(F) {
        let v = n.urlPrefix + F;
        return fetch(v).then((z)=>{
            if (!z.ok) throw new Error(`Failed to fetch "${v}"`);
            return z;
        });
    }
    i(h, "fetchURL");
    function p(F) {
        return h(F).then((v)=>v.json());
    }
    i(p, "fetchJSON");
    function m(F) {
        return h(F).then((v)=>v.text());
    }
    i(m, "fetchText");
    function R(F) {
        return h(F).then((v)=>v.arrayBuffer());
    }
    i(R, "fetchArrayBuffer");
    function I(F) {
        let v = new Image;
        return v.crossOrigin = "anonymous", v.src = Wt(F) ? F : n.urlPrefix + F, new Promise((z, S)=>{
            v.onload = ()=>z(v), v.onerror = ()=>S(new Error(`Failed to load image from "${F}"`));
        });
    }
    return i(I, "loadImg"), {
        setURLPrefix: e,
        getURLPrefix: o,
        loadImg: I,
        fetchURL: h,
        fetchJSON: p,
        fetchText: m,
        fetchArrayBuffer: R
    };
}, "default");
var Qt = 2.5949095, Fr = 2.70158, Ir = 2 * Math.PI / 3, Lr = 2 * Math.PI / 4.5, Zt = {
    linear: (n)=>n,
    easeInSine: (n)=>1 - Math.cos(n * Math.PI / 2),
    easeOutSine: (n)=>Math.sin(n * Math.PI / 2),
    easeInOutSine: (n)=>-(Math.cos(Math.PI * n) - 1) / 2,
    easeInQuad: (n)=>n * n,
    easeOutQuad: (n)=>1 - (1 - n) * (1 - n),
    easeInOutQuad: (n)=>n < .5 ? 2 * n * n : 1 - Math.pow(-2 * n + 2, 2) / 2,
    easeInCubic: (n)=>n * n * n,
    easeOutCubic: (n)=>1 - Math.pow(1 - n, 3),
    easeInOutCubic: (n)=>n < .5 ? 4 * n * n * n : 1 - Math.pow(-2 * n + 2, 3) / 2,
    easeInQuart: (n)=>n * n * n * n,
    easeOutQuart: (n)=>1 - Math.pow(1 - n, 4),
    easeInOutQuart: (n)=>n < .5 ? 8 * n * n * n * n : 1 - Math.pow(-2 * n + 2, 4) / 2,
    easeInQuint: (n)=>n * n * n * n * n,
    easeOutQuint: (n)=>1 - Math.pow(1 - n, 5),
    easeInOutQuint: (n)=>n < .5 ? 16 * n * n * n * n * n : 1 - Math.pow(-2 * n + 2, 5) / 2,
    easeInExpo: (n)=>n === 0 ? 0 : Math.pow(2, 10 * n - 10),
    easeOutExpo: (n)=>n === 1 ? 1 : 1 - Math.pow(2, -10 * n),
    easeInOutExpo: (n)=>n === 0 ? 0 : n === 1 ? 1 : n < .5 ? Math.pow(2, 20 * n - 10) / 2 : (2 - Math.pow(2, -20 * n + 10)) / 2,
    easeInCirc: (n)=>1 - Math.sqrt(1 - Math.pow(n, 2)),
    easeOutCirc: (n)=>Math.sqrt(1 - Math.pow(n - 1, 2)),
    easeInOutCirc: (n)=>n < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * n, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * n + 2, 2)) + 1) / 2,
    easeInBack: (n)=>Fr * n * n * n - 1.70158 * n * n,
    easeOutBack: (n)=>1 + Fr * Math.pow(n - 1, 3) + 1.70158 * Math.pow(n - 1, 2),
    easeInOutBack: (n)=>n < .5 ? Math.pow(2 * n, 2) * ((Qt + 1) * 2 * n - Qt) / 2 : (Math.pow(2 * n - 2, 2) * ((Qt + 1) * (n * 2 - 2) + Qt) + 2) / 2,
    easeInElastic: (n)=>n === 0 ? 0 : n === 1 ? 1 : -Math.pow(2, 10 * n - 10) * Math.sin((n * 10 - 10.75) * Ir),
    easeOutElastic: (n)=>n === 0 ? 0 : n === 1 ? 1 : Math.pow(2, -10 * n) * Math.sin((n * 10 - .75) * Ir) + 1,
    easeInOutElastic: (n)=>n === 0 ? 0 : n === 1 ? 1 : n < .5 ? -(Math.pow(2, 20 * n - 10) * Math.sin((20 * n - 11.125) * Lr)) / 2 : Math.pow(2, -20 * n + 10) * Math.sin((20 * n - 11.125) * Lr) / 2 + 1,
    easeInBounce: (n)=>1 - Zt.easeOutBounce(1 - n),
    easeOutBounce: (n)=>n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375,
    easeInOutBounce: (n)=>n < .5 ? (1 - Zt.easeOutBounce(1 - 2 * n)) / 2 : (1 + Zt.easeOutBounce(2 * n - 1)) / 2
}, Et = Zt;
var St = class {
    static #_ = i(this, "TexPacker");
    textures = [];
    canvas;
    c2d;
    x = 0;
    y = 0;
    curHeight = 0;
    gfx;
    constructor(e, o, h){
        this.gfx = e, this.canvas = document.createElement("canvas"), this.canvas.width = o, this.canvas.height = h, this.textures = [
            Re.fromImage(e, this.canvas)
        ], this.c2d = this.canvas.getContext("2d");
    }
    add(e) {
        if (e.width > this.canvas.width || e.height > this.canvas.height) throw new Error(`Texture size (${e.width} x ${e.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
        this.x + e.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + e.height > this.canvas.height && (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height), this.textures.push(Re.fromImage(this.gfx, this.canvas)), this.x = 0, this.y = 0, this.curHeight = 0);
        let o = this.textures[this.textures.length - 1], h = new y(this.x, this.y);
        return this.x += e.width, e.height > this.curHeight && (this.curHeight = e.height), e instanceof ImageData ? this.c2d.putImageData(e, h.x, h.y) : this.c2d.drawImage(e, h.x, h.y), o.update(this.canvas), [
            o,
            new ae(h.x / this.canvas.width, h.y / this.canvas.height, e.width / this.canvas.width, e.height / this.canvas.height)
        ];
    }
    free() {
        for (let e of this.textures)e.free();
    }
};
var Vr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
var _r = fr("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExZWVlZWVlnZ2dnZ3V1dXV1dYODg4ODkZGRkZGRn5+fn5+frKysrKy6urq6urrIyMjIyNbW1tbW1uTk5OTk8vLy8vLy//////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrQ9Xx7w37/D+PimYavV8elKUpT5fqx5VjV6vZ38eJR48eRKa9KUp7v396UgPHkQwMAAAAAA//8MAOp39CECAAhlIEEIIECBAgTT1oj///tEQYT0wgEIYxgDC09aIiE7u7u7uIiIz+LtoIQGE/+XAGYLjpTAIOGYYy0ZACgDgSNFxC7YYiINocwERjAEDhIy0mRoGwAE7lOTBsGhj1qrXNCU9GrgwSPr80jj0dIpT9DRUNHKJbRxiWSiifVHuD2b0EbjLkOUzSXztP3uE1JpHzV6NPq+f3P5T0/f/lNH7lWTavQ5Xz1yLVe653///qf93B7f/vMdaKJAAJAMAIwIMAHMpzDkoYwD8CR717zVb8/p54P3MikXGCEWhQOEAOAdP6v8b8oNL/EzdnROC8Zo+z+71O8VVAGIKFEglKbidkoLam0mAFiwo0ZoVExf/7kmQLgAQyZFxvPWAENcVKXeK0ABAk2WFMaSNIzBMptBYfArbkZgpWjEQpcmjxQoG2qREWQcvpzuuIm29THt3ElhDNlrXV///XTGbm7Kbx0ymcRX///x7GVvquf5vk/dPs0Wi5Td1vggDxqbNII4bAPTU3Ix5h9FJTe7zv1LHG/uPsPrvth0ejchVzVT3giirs6sQAACgQAAIAdaXbRAYra/2t0//3HwqLKIlBOJhOg4BzAOkt+MOL6H8nlNvKyi3rOnqP//zf6AATwBAKIcHKixxwjl1TjDVIrvTqdmKQOFQBUBDwZ1EhHlDEGEVyGQWBAHrcJgRSXYbkvHK/8/6rbYjs4Qj0C8mRy2hwRv/82opGT55fROgRoBTjanaiQiMRHUu1/P3V9yGFffaVv78U1/6l/kpo0cz73vuSv/9GeaqDVRA5bWdHRKQKIEAAAAoIktKeEmdQFKN5sguv/ZSC0oxCAR7CzcJgEsd8cA0M/x0tzv15E7//5L5KCqoIAAmBFIKM1UxYtMMFjLKESTE8lhaelUyCBYeA2IN4rK1iDt//+5JkEgAkZzlVq29D8DJDWo0YLLARwPFZrL0PyLsUazTAlpI+hKSx01VSOfbjXg0iW9/jVPDleLJ15QQA4Okdc5ByMDFIeuCCE5CvevwBGH8YibiX9FtaIIgUikF42wrZw6ZJ6WlHrA+Ki5++NNMeYH1lEkwwJAIJB4ugVFguXFc20Vd/FLlvq1GSiSwAFABABABA47k6BFeNvxEQZO9v3L1IE4iEVElfrXmEmlyWIyGslFA55gH/sW7////o9AAFIBIIAAIUMzYTTNkgsAmYObfwQyzplrOmYvq0BKCKNN+nUTbvD7cJzvHxrEWG5QqvP8U1vFx6CwE8NoRc2ADBeEb/HoXh60N7ST8nw9QiiGoYvf/r6GtC9+vLwXHjaSkIp3iupC5+Nii81Zhu85pNYbFvrf+UFThDOYYY26off+W6b//73GTiN9xDfl0AAwBAiMBO8qsDBPOZtuT/dTbjVVbY/KSGH6ppHwKv/6X+s8gUCN/lODzv////GQAGAMQAADlXAUCBJiY0wFQZusYQOaQzaTwDBTcx0IvVp8m7uxKp//uSZBMCBHRI1eNPLHAyxNqWGeoYUIEnWYyxD8DUFSn0l6iojcd+oEOkzV6uWqyHNzjqmv+7V5xGUfY9yEmbziTzjRscm9OqFQp1PKFrqu3PX/7YuGtDU6bt0OUTpv38rdc+37dVDQLKUchaJ853E9edNDGqWwsYz1VoiSStEJtZvw6+sNqFWqaIXJjQCGAAGWAYVwmag/x3BRJw1wYF7IzVqDcNzn85d//FzK7IgwbQwccLoB4AsF8Nj/1ESRUAAVJwAFh0YOFEhmSJEHKQRDyhszgLUpHIgFrb5cySFg5jv10ImlYuvaaGBItfXqnNPmic+XNkmb5fW49vdhq97nQMQyGIlM2v8oQSrxKSxE4F1WqrduqvuJCRof1R7Gsre9KszUVF1/t3PzH2tnp+iSUG3rDwGNcDzxCGA8atuQF0paZAAkAhAQAEAC240yJV+nJgUrqq8axAYtVpYjZyFGb13/17jwiClQDaCdytZpyHHf1R/EG/+lUAgAAAChhmJvioVGGBCFgqdpsGAkUUrbTstwTCJgLQpFIsELW7t/68Iv/7kmQUgAQ9NFO9aeAAPAU6RKwUABClY2e5hoARGpDvPydCAsY8WO10fSvUOnfT98+n/l/6/+hxslhQ1DEOaevNKGocvIYba8WJpaP/15pX0NQ1DUNn/////k6lPp/N61rBi8RJFfERV3IgrqDsJA64sjCoKxDDQ9xEcWDpMBDwVFDIAEIAAzryxsjGi4q/oWpixKjhklAF4pUrDPjFhFVupDFZ/t/t0YPAygUBhADPR/KLCKJ8h2Oxhpxz/zNRAAFl0MAZLAYEAiVbEiz36LSgZ5QoQVat69KNy8FyM5Z80ACHAzgnISEkxUSJIDyBSwi5KF4mjBl4xJdbrG9ComLrL8YATiodhQKCkj6ROdyg1y5XmZlvMVmpJzYppJDwLi/Lp9vT3TfmimOGpuezi2U/9FNav0zX9Oja2r//8+hvuihuQAAMAVmqFgAgCcuboAEAAAUcqy8ca0BHBmwbFkED0CNA1YYDPkhcQrRJxcY3BzfxxltAz9vX62Xl3plAzWmRO+FkZyH///1qAAEjQBAACUpgU5o2AIBmFBGMamrGg0b/+5JkC4ADxyLWb2ngAEEkGofsoACP7U1JLaxTkOqFaKhspGgnW3SGC56ZgUJGCRnLOmIJAkuNBgvwU4Ocf8CJK9UsafH9/Frj///365XSoME+DZMw5UNjrMbVoeIj9EL91IuQ5KHyl5V2LCpdIdESgafOHxVGkAlkHuakmix/gN8+BP/sKguLAAoAtUjtvaoeEADwr3OK11E4KBlojgeQNQBJ4MvCAd/4t/xMMzeLhQGQ1//6tQu5BaBOGCT6U4aafvXZ//4iAPAAAAbLkgIlQmMSLA2H1CVNAlWwyVvKIQIxOSK1NWxs4MBUATlKrAkIMPAjCAdS6MVFzuURWa/+/qQWEGsA6EEpiBEJb9Q21lAHoBoD0B6aAPhyt+bG3muoXIN3RLadXxUfr/ohjGFF/p97eqNI5noKAqYLNPpUTDSI9/TmA6B+YAAADgA0Y4lxTW1SQfOQuDDDI0KTTuIrF5qoJrUFhUFAsg+AT2hbkaRZYGIjBKVDIa5VgNN/9P/rCDsBJbYJRKpCA1ArAkigIeYY61AjE+jubyiZFZ3+L789//uSZBCABHVj2entNmw1JXokLycYEFTFVa0wz4DYjKs08J2Q+r4n3lgbWaaMwMLEjFW88F39brqPF83cv1mCSJeY3Q2uiQxhBJxCBeR1D2LQRsYQcZUTzdNll8+OwZBsIwSgl45ymaHX603Mz7JmZuvt71GDTN66zev/+cLn/b5imV8pAHkg61FIJchBSG+zycgAZgADD6F1iQQRXRWmWS6bDIIgyBCZEcdl/KgXGmVKFv/vl8ry/5bLypf//U5jhYDhL9X/pAA0AKBIAAKgGtGXGGWJgEoF2JNsHlKfSKLRhGBAgIuWZKIJCFpF1VBhkB+EfzEyMUJdWuMrEZoPZ5BfF3/Nu62riIdjoO4AAKD2sTrDmpZZaYysf/810TitAVvn9xtFucieiaEy54YqiIO6RqkGAm5wVO0bFB0sDTdNxYGekKktR4KAAfAwUIgI8Ci6aXgtwbhPWAC+CKExAFydNtYGXNZoQjUsXv/9vKjgmdwieb+h7kHvPoc//0FaCACAATKFC4Y9ammklidbaiJNPBhGWTNhFSgdtalK12lpl//7kmQRAFN2NFI7TBvwNKNaTRsFGBWdfV2tPNcYvBHpgPKJsc8IUcTCxY3HSvUVNTWe/Z3YWlrJ0yrNRUiT19aprA7E+mPP+ZmC3/CsheOJXhc/9VJb3UZnphUBcqZUZQth1i3XqtPYu2Sy1s8DV9ZYACAAASAAHgFkQcOqgB5utFHFh3kSi4USs0yk4iOClREmjvdG+upaiLcRA6/9QGbOfxF/8sEAQAVG0G07YFMihKR4EXJCkRdX9isueLqUMRAQdhDZmv3KeR0nPqRVrZmSIXDt+BBSR7qqbKQcB98W9qiMb55preHIStxFWPE4lAyI+BKz2iSxonpvMR5DgKxTH6vGGXAbYCaAnJUW4W07EesQqbfqdbo4qNnPxSpn1H8eahszc/y9//dn1V7D/OYpn1szQKAPXTMlO/rO//u7JriJXbld7aP33v6RXYg/COIDzTWkTspg6Ay1YaDSwKxrP/LfIikHjmO871POf/kEAseAgoPEi9/0ZziNwfxVKy9qAEGEEAAq1EcOamDEGHAA0iao8k31rz2MiLNEik6VQ37/+5JkEAgEYU5WU0M3MDjDe0o9IjiOzSVM7aCzEM2GqXD8pFB0zxMcHCQNHtZD+R+pMWZxOJ/otEZTvVN/MeU12xTVcL+f2YaiNJTVoPd6SvzEnKel5GXOzEaazgdChnP2jOAwpfyRpVlQwoJBwpN1L1DL////6TVWcoepf7CVWrpEWiym5lR5U0BSMlxQC4qByOyQIAEuJfIriWixDqRgMfVZWuvRowjR9BzP5lZlT/+YG50CsSBG////////liXDQVMxEaBkbzKAAACnDIAstY7iK7gGSF7SIDexaTtPOHABk9YcmJEACmo50pgWal22etroBpYoVqtU6OPqvlf0c4QCAfLk9P/FJs4KCQMf6ECZyA6BwqqyJ0rMYj56k1/UlTIx1V3Rt5NF71D4qlptDC8VMgQVHFDlQnDFi06qQgKQAAIK4TxxJGFGYJuZNGXRdpq7IW/DYpPIQRFJLAc+qn1E0XYdOkQVJT+z8Lvff//8vbKAWTIBBUUdM6cOhlDry7x4dAkJXIBhbO3HSMMMGBQ9K9/JNfu09PjTO64wYEcR//uSZBeABP5g11NPRVwzQ4r8PMJVj7j9UU2wUwDPjeq0Z5w675D9+uDdL2QsuIry2lZtwn/pJYyRRjANEOQxNWw8mU7Tq+vueV7JrX/Pg7VIkEuZT5dwd85MVoq5lpStNICkBAcFR88//58KO8Zjt2PIGxWl1cVfXeNGH18SReNT//hYliWtQuNluxyxONbm4U+lpkAgpyE7yAIYUjIaqHmARJ0GQTtmH60xdwFp/u253XBCxD0f/lBcguCALn//Y5nqEv//1h4BAAwgAA5gcHmpIplgeW9fAOM6RFZUywrsGAiRmKkanQnCFBjYoPDS7bjwtPTkVI8D/P8VVLcTUz65n7PW2s3tNYHgEul4tBaIz0A9RgJAyAMI4/i0fpQKjhX9S+qIa0vmc4CZit/0/3UTDGeKNpkk0nu2rUE2ag8WErhE/kgAiQCJKQEYBA5Wn6CxHoIUh6dQ46nLIuwFk4S/LaDQxXu7Yf/pf//lwJB0S/Ff/4C///EiBEiAAAIAMnpngiIABAdMpKigkXaUwhLEGvpiofmXW57h2XAZO3CMRv/7kmQUAEOHQlHraRTQMkQp6GWFZBTVU1lNPTPYyIyocYeUoNgLBWAs1jPkTv/tXBaeZ/tbD/nAGP8/xT0SNEi5zof0KIVEzVe9r5lZOol7kyaXMYS4J/ZS3djp//UaeVyR0mUMlTgfz8XqMzIEgAQQ6UNQ1DSE0/C16OvyaocF4ijAGFci0FSYqCUSaWs6t9F6/699DKvMgMoK1//kSbvxtyBN27I7mdXgNMAW75sRU1UwUHYG5axI2tFIFpkgx7nnK+1JmRKjqeAd5Ph0QAL4QAnirmiPlg0yBDlrb/d3ngtA65rb999+8vdDCfnJuJAYIl285zklpVbrKpk1PEzrOY9NZUgyz6OiOsKt5qG/g2ibxSZ+/eTI/NB8n4ev//n2nIw85GAdwuJL7kYnnAbpcf1RBKH6b2U4RWP8dmWH5snsAFYwADBgAopKdzFJq4Jlmotloh/m4QpTSvJRE3nYZHephoqBhVf+P7vQ9BPlwZCP+3//+hdy5uUwS3LDEgQx4cdIgvDEBR1YqymCsSbKzRy2aQmSv+AAcAgAkvzPfuX/+5JkFQAj6VFX00Zr5DllOhhgpn4MmSs+zSRRiO8U5tWklYgSLKfs+Xheb/+6WaAQCKTztNeJ382MUltZNnjSJoFrCqB6C4mFcwJpJD4Oc8dLDXMTh9k1/rmTopfzqv9AvHWfOuZJlEvHSVMjyjpkVucKSzxJVQBgAAIo8DGqRdYCXPckFYg+dH9A/qUyljrtpxH9RJX/Z3Vv6uFkPg4M2jf3CL09QrwOrMt69n//8UFEAAMHWdhg1CcjyVBwiArOYlDL5NPY6x8ZLFBCGi6SVTKX5nqdSEFjebnv2zHdt0dj6xvORsSFzwqRNTJSZIrrlpXcURNL9WW7krBgr5jPMaGcvJ5v0N1s19CV7+7fvQfjySX2QECWUgKgeJCIif4WRBZ/6archpDkzE7oWctK3zEHP9Smeai8oeHkM6AK7pGjtOgeFv40ugqNd+Iv///uAZAMgAAAUeSWhLPpdwk3iXpBw43hOVIp1gliUOSaeZcZeZhLAH9TtD56wUpBduzLF5v5qViTH6o+I0+8Z1asaLgKVAohlpB72DgAQBQxEd3g//uSZCiAA6k0UdMPQfA+xcnBYON8E3WDVU0w1ZjPDSmo8IniHAFDNnkXF3B94gicH5d8MFw+IHZwufxOf/8gsHw+XrD4Jn8T4RAyQiABNBQg/3giEWuZ42mVFB3kkXNjhqBg1CghEUbN3/7/KBhyqNueef/MIDBClP3YRnKLiIlEFzf//0g+4zKpRIKTpqQgUtnHGFw6RSLN421iGcYapqFxny/capK9r9v+2BSy/RU1yZxa2eGaWK07ijfcxeiO3iuHJvjbXzts+Ny+XyFnsne1h0qG4mAaN6xRGaLVxKPlrri0Bg9oXGyxcw8JRBPkUzC8v451vVd9liSX85JMrmkVNwxOCwUg298////7ks//L409/hwMRIozKiIckXtjzDaAMTBcAACAwLGargPSEgEJZN/EFjfF/VKgaMYKMbwtf/T0UCGGfjfOAZ2frCigYdwh/+sGlQBxhCAAAUHkDPqOdmmUdAVYl3IhrEfR8qZFjLYEPOyzVGvm6lNUJCk2PNazwFxaijk+ZEaiTehoJGuDh6zN/EVP8BCLD/88BoY7Xv/7kmQlgBNmMtNTL0FwOGZJ/WHiKAyhJU+soE3A3JnmAa2oaCIru/+RrEHMTphxQ0X/LzoVy4gKhYl6ZUlklW7CLRVoYmgABwCRMAAMA/poCiEEYLsBVodWcVZ18+CcAfH165U4Xgh7/X1/BAQF6GN/BwQ/+D9S9P6wII//CoANYFYCBAKlGQDKhVjjylKARw2mPAtp8JjcQHggQswVsOEKsF6AIBWvmpIFdSZvRVv/LHWEy0+txMxu+VK9gEqG5pWf6GNGU4UBVkfd+bsj/6lZE0fkOpAqAOvyUO9oo+IiEtcLKOGzhhSGa4MYINHWoQsFr8zzmow0tRILkqz5/+vFxl/oZX/+qGW//xiLjR3xcGn//0QLkTQJh1UA8MAQAEXC/YxODKTDUEhrASs1512GRp+dRFFdTWIRaOXrve1eNjTNpreqQYrC9NBlQc1f8YO2po8bnH6qffuRvU7taiNF3baokE0YpmjRCHRclWBb9NCHKHpERwHRG3pqgXklq4sBpLjGvmekg8Y7SjM1FZopIM8IhB6dtMr8aKsdovh4FW//+5JkQ4CjTDdSU0gtIDiE+YBrKgwNbSVJTCBPwN8N5ZW8NKDnhRB8AXCm//KAsBUCwKU//oJQnET+UP3/zpYRocAAABJkVzzIuoLGEaDoxfsNva12EUdxhJMGFQioSg8GxKsLm8kWEmExJuNidarkk+OTXc0i2OZEq2v+tZr/MDZRS0I7LfRpHdlsiF6m/mEjk+XlK10UqtKYUwNgMx24hUtCJLfpM3ExUeKDYjClgZAzAjQ0qlNQBTsGpk9zSRkCiKkRGp572VXsPYChGvxhAuYkDYZK//jSRgto2mTf6+PJqgAAgIAAAACYZE6aZOHhYkYlcbpeYQq1RgLO4U8TIlL1sGw+iKZi5Kzc/bKT0yXrIUMES89RCWy8oWlxqIQlKANLFpT/KjUrK+UCYbZqGnjVj29aO5dzofWAskRX5eJWPi4kf/aRVjy3Wlyg2AnMYIDSTLwZUTASIzflPWUwwlUnIFMnGiyABeaXJcN91PmQJCLzmvUJkFOHCrX/+6O///IHnT4tT9YYBoNMQ09GfKIErwdwChNz1Qy5+5S/wWeY//uSZF+C03UyT2tMO0A3RRkhY20KzQjDMszhA8DjlGOBp5y4ZCS3ica52GIGiryv7FAaSDVZSXKFTiir+GvGiuK4rjgwPVTddso+W/42a4ueJJHDYtfj6YoKknnjzRgKA0fBIRZOSsprJqnoNN73ps/Z9DVgbKNbMGmRzrYBMAZCPUANkAZQ0syAC2ubK1NF90+WoesBpnhY8qwVDkNb/5Uof6//418TgElCSgAIgyAAQBHEmiaQFPIRmfAMELffpo0IflyEuAAQnSnKvwTlVlnIgOAAGS3P3IydjXPSh/CaVRqpSNCjQqDvPM+fLcuN+WgqNix6CoHomUWTT86JjziRSZ3yjnq+dIldKPU11KUuf6wAASMAAJxE+MlyktgE9UGSxjEx6RR0v1s9bWZ+EJSrGtjqUIhklG3J8eLRn/2U/nv7f///+7/6gBQgEAMUijVMwweWWMyYM/PLXuc7DptIQmBARMRCxXjEIcTNDQgSSeHpUNXO7dRSOllJPvnY7yzaO1hmUjsKvHe99fOxrabMX7mGTi5tsNkZVZLndzxse//7kmR7ABM2O0pbKTvQN4NI+WGFPA2ZESs1pYAAvA0jVrJwAHfbr/c6//vW790dzX36QNBRlDv/6QQAU3V64yUgBEAYc/lI8e5bm+Z9+j+4aaj4tFrb//iker/4a12b/V//q//9v+7vAEAAAAMqZTGd5gL4f54o6ZebKNrR/zWVYUEVYVVv8BuAV2OUT+DUQgkJ8J1Ey4ZbFCiAwgwzMSdHV4jQR+OoPWEASaPkyYq+PsQFFJCsEEJtOiUjI/+GRhtC2DnizTMXATJig9Ey/kAJMrkHGYJ8gpLjmJOYoskpav+ShRJInyGGZVJMihDi6pIxRZJJel/8iZPkYiREnyKE0akTL5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
var kr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABdRJREFUeJzt3d3N3TYMgGG16ADdoAhyl7UyV9bqXRB0g2zQXgRGDcOWSIoUaX3vAwQBknMk/4gWLcnHrQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDEb9kb8FH99eeXf6Wf/efn35ynDyj1pEsb6G6NUxOYZ7sdB/QtPdnWRnn29gbKMYDUspPs0SgPb22cHANo/JG9AZF6wWBp3JLgeir36bvff3x9LOvzp2/dbSFA97bk5I4a9VMD7TXOUcP0uJ+d6emu5d6V1QvMs5nj8FZPx37X/b2TFpzShtnafeP0DipJMFnLnN3/w1OQ7tZgP+pA4VVKcHo0TG36KNULKGt5XsHZmi1APS5WM2Vqg0i7vbsG6YcIznN9vRTxXHavgdxtv6Tc3vc1pAHqdaG6ipwKYprpf1sFp6aH0gRTrxxLubPB2avHu+c/l3mICvqnsr//+Cq+qGrK1Xw/wzbBaRkNvSv3yew9cq+cu89L6nu6F/cMzCgzF1ftANlbe+Otp1IkDVxyVfbo6Z481f3507dhvXfbrk3HpdtjKTNqKuio8678c7mzF6ns6arfMyrVNoA75wMfNU2hKSeCx3Fq7dc+SPfDc39H9Vqn2CT//4bsYeT1PecOJyGSJdh6PZOlbElPZz2PHtlD1cUeS4LT4z5IOihwfNaD5ERm9qxH/dZ7Vmt9M999CtCZbdLUP/p3r2zFQ0paG8lr4Eb6+ZWBcSeq/qhyK6bXUfXOSgtO7/tOb9eT1NveqKttpYbiyXu/euV51JV16/T6e86zyF5TUp731V5Sp+Z7M71h9QvFNWWuvr0Sy4LzLfNvrel6zRX1e+hN2VzrnNlfaYD0xhCs++851lDh3vNV95xe6YvHgb8bwbNcuc+f09wbaUj2dzYgjz93//5kh94t0quCM8OKK6glKKuM0EYHfhUZWd8WwenZa0rLsp6s2YY66o0k9WUvS4NManBaGuo1eDIHgUZ1ePdkntsfFaCz5VZJdStsxyt7ziMNXHEAK5yk1mqmhrMPf1fcp57Vqe3SqZTMEduZhqAZyaywFne0DVHngHTZ11bznE88l/1lBZ9meP8851plWkBCO7drmQvWnL/sY/fKtFaqN3iy6iofsQxNktJnTMgfPXJUz3w3VaP5vOQ7Iyszvy2DczSi+aYFET2jINUEqFcAS4+rV480WlwRWXe07dLa0YGvfl9kmbTvPZJ1TXGvn4t4yuRp+2aMgk27wkm63DIztU3vOVfueC8wK4zKWtK0M+nvJXmOdlt65MgFFCva06qsKz044SvjIiN5TjLaaHxhtNyyouXBGZ1WSn66Ivt+M7pRZAWoZsDq+t2emeM1am/WtHxFG9runrO1/n1CxLK7CilxJM/H4bwuTJJBvWtgvm0gcNu01uvpd8la1soLE7xkpYDea4Ot6W3GOSzRc3o/qHw2M9qmXWA+uw+jbd0hyO9Yz0+vJ9QGcO/8ZV2YUqYVPN8dImXp3aJ/w1XTGGYfKZN+P7IXiXqO1uINLzFOm/Pz+BV4C03PNEqpZl//ELXP1ro8nhLyKLPHMyAiXyvh4cMFZ2uyAJXc62gzgJl1nhrSLMEzcLx+5qQnIhgqv6qhTHC2Zmus1tUuowCVDkRU6j0jgiJqhLPSSq2q7wMtMSBkdbcQWjNCq2nMlRrTnajAPP/t+c5Sj3K8VNueQ+pGzaa2MyOb2sZseW2dpL6ZnjMzfeQFt/Fe3XP2WIfGvRY6a569jCJ9TaIlcCS9KQE5p1TP2VrMbwLNDlZEvpE5AkGxh9f2nLO/QOetytIwAnMf6SfS2ns+jaZ6B4i2sWvSvF0HWOAj/aRGNFAaPXbw2rS2Rzr0T/ChshKNM3qd4135BCaqK9VAKy+lAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4DBC0k0jFtF9wAAAAASUVORK5CYII=";
var Nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABqxJREFUeJztnU1yFDkQRtMEB+AG7Fk6fBPO6ZsQLGc/N5gbMAtosJvqKv2kpPxS763A0W5XSXqVqZ+SngzgF58/fflx/7N///vnacW1gBkFD2Z2LOYNBF3Dx9UXAGs5kxLWwhNxU2qlJHrOhwLfkNZoiaBzIa3dCFJYLXgSboKXmETPeVDQyamR8vX55fe/v37/9vBzCDoH0tqktEpZ+t0IOh4KOBm16euZmETPtVDAiRgRLRF0HRRuEkrFrE1hzR4Lipxj+bD6AqCPz5++/Bgp5tXfdv1CeAdPPmFmSkn0nE+a0drdFm6XiOkdKWEuKRptTXqlLuqqFNaM6Dkb+T5nbb+npo8WjZVinqFantFJk9bWojaRThq7HzKN8wiPJ7aCoJHEZN5zHvJp7RE1DTV6SnZ1fa/PL1MjJtF5HmnT2tJF3GZ/BIj05I8ULUtR6ypER7ogjxpw61rRGxEal4KYjNyORzatbUlHSxr06tFcBTHPiN5NUEJWzlZKG/aKRqYk5tl1IKgPafucZ7w+vxSluLP6olHnL6MQQfYV6bpk/+BRZXm+cXHEiApSipZHlE6tRBDMkxmyysl5VsmtjXiFoJmiZU35ZWK0oNv1OY+omSv0GDDKJCaMI42cHg25dvFCi6QZxVS6ViVSpLUz38A4oiS9ySjlW2althGWKZrN6XNuOVpbwq0ReIzqZhfTrHwE/PZZuEYqcnqO0tZQGxVqRylprLGIEDXNkLOKEakbYsYiiphmiQaEZuD9BghixiKSmGYJIueqBt4TRZEyHtHENCNyNtMaRREzHhHFNBOKnKv7myVcVXKka4WfRBXTjMjpypl8iBmP6MsOmed0Bgk1UHjxXlpORIAWIqeybyGtha1QEdNMRM5s7wLCGpTENBORE6AXNTHNkBM2QFFMM4F5ToX5TYiLqphmRE7YmMhimiEnJEb9XBdJOUlp4Qp1Mc1E5QQ4I/qyvFJCy8n8JnijEjXNAi3fQ0TwIEM6e2OqnAgII8kkptkgOZEQZlN6BquZjqhVFxlBOkZq4Z6WASAFQQ8jZwQJ70FK8CTiaeb3fDSLJyMiwiwiS/q0SkwEBE+85jYjSTpcTiSE2WQRtVlOpAMVemVdtjXmlZxICFlQk/TJjHcmYS96JJ0p6KmcZggKeWmVdPopYwgKuxJVUuQE+EU0Sd99KYICxJH0ry9DUIA/rFy3WyWnGYLCnqyQ9PCXERTgmJmSPvwlBAU4p1bUWklPP1yytA9JYWdGRtLLDyEowDUjomiRwQgKUIZnJC3OgREUoByPSDpkDyEkBfhJj6RNQ7xEUYA6aiS9Cdo8SUoUBaijVtCuFQwICtBGiajdawARFKCNK0HdVtEjKUAd0+Q0q9v/FklhJ1rmP4e8JEoUBejfq2jYNgtEUdgJzwN7u6dSSkBQyMSME7O7FyHUQpoLCqw8rv5o+d6Uw3NvfzjagUkAZvOlLH1lLMyx8wCzWBEhW3ZDmLZ7NTsrwCpmyui5A1+IPidigjcjhZy14/vytBYxwRsPMVcf/2c2QU72wQUVIgj5lqFyIiZEJ5qQb1me1gLMJLKM93wY9cVETYiGkphmg+RETFhJljY2LHICQB/uchI1AXxwlRMxAfwgrYVtUHvxwk1OoiaAL8MjJ2ICtOEip1q6APnJEBS6VwiRzp4vtM5YBvf3m/EeI8DyvUZK33z4+v1bqsZ7dN+3n2W6zwgMO44hY0X1vIqkXh419x7lXh9ds8oyviFyRqmcXrxf2FUtF89ymFkG6nI2p7WZB4FGvUWfLcVt4ahsdy+TR7ifz6lc0F5v0GfalmXldpE3esrr6PrTR84sjNjS4kpQhQhaUi4lD6KR1xK9DHupfoKoR02vSFDy9FWNoKVivv1/lG7OfZkqR043OZUbWgmtFaomaGl51ZTHCnFv5bqNnFGjZvRtEFUEHSHmI1ZHWgVBXZ5+sxvX7ANlPChpjKsknSllKaPlRU4nZo0Yjq6wiIJGFPMML2mj3M8ZRRe4QkzF6FhCJEFbBn4i0iKswn11yenZiLLKeMRqQdWiZSmlkqrcV9d0gPfksAcqBW+2ZqAoq5gZGSrnTtGwlVmCIqUepxWxerj7iIyNZ7SgiKmJhJw7NJpRgiKmLuHl3KnReA4UIaU+y+WkcbzHQ1DEzMGQ9aJH0BDK6RE0y9wlTDp2HuppERQxc0FFBaZGUMTMB5UlQG/fHyk1odJEaBUUMXWh4oSoFRQxtaHyxMi2uBseQwUKciUoYuaAShTlkaCImQcqUph7QREzF/8DSS/2GZ2/N/sAAAAASUVORK5CYII=";
var Ii = "3000.1.14", jr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~", en = "topleft", Hr = 64, Li = "monospace", tn = "monospace", Vi = 32, nn = 64, rn = 256, qr = 2048, $r = 2048, zr = 2048, Kr = 2048, Yr = .1, _i = 64, Kn = "linear", ki = 8, Ni = 4, Xn = [
    {
        name: "a_pos",
        size: 2
    },
    {
        name: "a_uv",
        size: 2
    },
    {
        name: "a_color",
        size: 4
    }
], ji = Xn.reduce((n, e)=>n + e.size, 0), Wr = 2048, Hi = Wr * 4 * ji, qi = Wr * 6, $i = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`, zi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`, Yn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`, Wn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`, Ki = new Set([
    "id",
    "require"
]), Yi = new Set([
    "add",
    "update",
    "draw",
    "destroy",
    "inspect",
    "drawInspect"
]);
function ct(n) {
    switch(n){
        case "topleft":
            return new y(-1, -1);
        case "top":
            return new y(0, -1);
        case "topright":
            return new y(1, -1);
        case "left":
            return new y(-1, 0);
        case "center":
            return new y(0, 0);
        case "right":
            return new y(1, 0);
        case "botleft":
            return new y(-1, 1);
        case "bot":
            return new y(0, 1);
        case "botright":
            return new y(1, 1);
        default:
            return n;
    }
}
i(ct, "anchorPt");
function Wi(n) {
    switch(n){
        case "left":
            return 0;
        case "center":
            return .5;
        case "right":
            return 1;
        default:
            return 0;
    }
}
i(Wi, "alignPt");
function Xi(n) {
    return n.createBuffer(1, 1, 44100);
}
i(Xi, "createEmptyAudioBuffer");
var jo = i((n = {})=>{
    let e = n.root ?? document.body;
    e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let o = n.canvas ?? (()=>{
        let t1 = document.createElement("canvas");
        return e.appendChild(t1), t1;
    })(), h = n.scale ?? 1, p = n.width && n.height && !n.stretch && !n.letterbox;
    p ? (o.width = n.width * h, o.height = n.height * h) : (o.width = o.parentElement.offsetWidth, o.height = o.parentElement.offsetHeight);
    let m = [
        "outline: none",
        "cursor: default"
    ];
    if (p) {
        let t1 = o.width, r = o.height;
        m.push(`width: ${t1}px`), m.push(`height: ${r}px`);
    } else m.push("width: 100%"), m.push("height: 100%");
    n.crisp && (m.push("image-rendering: pixelated"), m.push("image-rendering: crisp-edges")), o.style.cssText = m.join(";");
    let R = n.pixelDensity || window.devicePixelRatio;
    o.width *= R, o.height *= R, o.tabIndex = 0;
    let I = document.createElement("canvas");
    I.width = rn, I.height = rn;
    let F = I.getContext("2d", {
        willReadFrequently: !0
    }), v = Gr({
        canvas: o,
        touchToMouse: n.touchToMouse,
        gamepads: n.gamepads,
        pixelDensity: n.pixelDensity,
        maxFPS: n.maxFPS
    }), z = [], S = v.canvas().getContext("webgl", {
        antialias: !0,
        depth: !0,
        stencil: !0,
        alpha: !0,
        preserveDrawingBuffer: !0
    }), $ = zn(S, {
        texFilter: n.texFilter
    }), ie = Br(), U = (()=>{
        let t1 = lt(Yn, Wn), r = Re.fromImage($, new ImageData(new Uint8ClampedArray([
            255,
            255,
            255,
            255
        ]), 1, 1)), s1 = n.width && n.height ? new rt($, n.width * R * h, n.height * R * h) : new rt($, S.drawingBufferWidth, S.drawingBufferHeight), a = null, u1 = 1;
        n.background && (a = Y.fromArray(n.background), u1 = n.background[3] ?? 1, S.clearColor(a.r / 255, a.g / 255, a.b / 255, u1)), S.enable(S.BLEND), S.blendFuncSeparate(S.SRC_ALPHA, S.ONE_MINUS_SRC_ALPHA, S.ONE, S.ONE_MINUS_SRC_ALPHA);
        let c1 = new Jt($, Xn, Hi, qi), f = Re.fromImage($, new ImageData(new Uint8ClampedArray([
            128,
            128,
            128,
            255,
            190,
            190,
            190,
            255,
            190,
            190,
            190,
            255,
            128,
            128,
            128,
            255
        ]), 2, 2), {
            wrap: "repeat",
            filter: "nearest"
        });
        return {
            lastDrawCalls: 0,
            defShader: t1,
            defTex: r,
            frameBuffer: s1,
            postShader: null,
            postShaderUniform: null,
            renderer: c1,
            transform: new Ue,
            transformStack: [],
            bgTex: f,
            bgColor: a,
            bgAlpha: u1,
            width: n.width ?? S.drawingBufferWidth / R / h,
            height: n.height ?? S.drawingBufferHeight / R / h,
            viewport: {
                x: 0,
                y: 0,
                width: S.drawingBufferWidth,
                height: S.drawingBufferHeight
            },
            fixed: !1
        };
    })();
    class W {
        static #_ = i(this, "SpriteData");
        tex;
        frames = [
            new ae(0, 0, 1, 1)
        ];
        anims = {};
        slice9 = null;
        constructor(r, s1, a = {}, u1 = null){
            this.tex = r, s1 && (this.frames = s1), this.anims = a, this.slice9 = u1;
        }
        get width() {
            return this.tex.width * this.frames[0].w;
        }
        get height() {
            return this.tex.height * this.frames[0].h;
        }
        static from(r, s1 = {}) {
            return typeof r == "string" ? W.fromURL(r, s1) : Promise.resolve(W.fromImage(r, s1));
        }
        static fromImage(r, s1 = {}) {
            let [a, u1] = j.packer.add(r), c1 = s1.frames ? s1.frames.map((f)=>new ae(u1.x + f.x * u1.w, u1.y + f.y * u1.h, f.w * u1.w, f.h * u1.h)) : Ct(s1.sliceX || 1, s1.sliceY || 1, u1.x, u1.y, u1.w, u1.h);
            return new W(a, c1, s1.anims, s1.slice9);
        }
        static fromURL(r, s1 = {}) {
            return ie.loadImg(r).then((a)=>W.fromImage(a, s1));
        }
    }
    class de {
        static #_ = i(this, "SoundData");
        buf;
        constructor(r){
            this.buf = r;
        }
        static fromArrayBuffer(r) {
            return new Promise((s1, a)=>ne.ctx.decodeAudioData(r, s1, a)).then((s1)=>new de(s1));
        }
        static fromURL(r) {
            return Wt(r) ? de.fromArrayBuffer(Ar(r)) : ie.fetchArrayBuffer(r).then((s1)=>de.fromArrayBuffer(s1));
        }
    }
    let ne = (()=>{
        let t1 = new (window.AudioContext || window.webkitAudioContext), r = t1.createGain();
        r.connect(t1.destination);
        let s1 = new de(Xi(t1));
        return t1.decodeAudioData(_r.buffer.slice(0)).then((a)=>{
            s1.buf = a;
        }).catch((a)=>{
            console.error("Failed to load burp: ", a);
        }), {
            ctx: t1,
            masterNode: r,
            burpSnd: s1
        };
    })(), j = {
        sprites: new ke,
        fonts: new ke,
        bitmapFonts: new ke,
        sounds: new ke,
        shaders: new ke,
        custom: new ke,
        packer: new St($, zr, Kr),
        loaded: !1
    }, C = {
        events: new _e,
        objEvents: new _e,
        root: Un([]),
        gravity: 0,
        scenes: {},
        logs: [],
        cam: {
            pos: null,
            scale: new y(1),
            angle: 0,
            shake: 0,
            transform: new Ue
        }
    };
    C.root.use(Tn());
    function Te(t1) {
        return j.custom.add(null, t1);
    }
    i(Te, "load");
    function q() {
        let t1 = [
            j.sprites,
            j.sounds,
            j.shaders,
            j.fonts,
            j.bitmapFonts,
            j.custom
        ];
        return t1.reduce((r, s1)=>r + s1.progress(), 0) / t1.length;
    }
    i(q, "loadProgress");
    function Ae(t1) {
        return t1 !== void 0 && ie.setURLPrefix(t1), ie.getURLPrefix();
    }
    i(Ae, "loadRoot");
    function ye(t1, r) {
        return j.custom.add(t1, ie.fetchJSON(r));
    }
    i(ye, "loadJSON");
    class Se {
        static #_ = i(this, "FontData");
        fontface;
        filter = Kn;
        outline = null;
        size = nn;
        constructor(r, s1 = {}){
            if (this.fontface = r, this.filter = s1.filter ?? Kn, this.size = s1.size ?? nn, this.size > rn) throw new Error(`Max font size: ${rn}`);
            s1.outline && (this.outline = {
                width: 1,
                color: ee(0, 0, 0)
            }, typeof s1.outline == "number" ? this.outline.width = s1.outline : typeof s1.outline == "object" && (s1.outline.width && (this.outline.width = s1.outline.width), s1.outline.color && (this.outline.color = s1.outline.color)));
        }
    }
    function st(t1, r, s1 = {}) {
        let a = new FontFace(t1, typeof r == "string" ? `url(${r})` : r);
        return document.fonts.add(a), j.fonts.add(t1, a.load().catch((u1)=>{
            throw new Error(`Failed to load font from "${r}": ${u1}`);
        }).then((u1)=>new Se(u1, s1)));
    }
    i(st, "loadFont");
    function sn(t1, r, s1, a, u1 = {}) {
        return j.bitmapFonts.add(t1, ie.loadImg(r).then((c1)=>wn(Re.fromImage($, c1, u1), s1, a, u1.chars ?? jr)));
    }
    i(sn, "loadBitmapFont");
    function Ct(t1 = 1, r = 1, s1 = 0, a = 0, u1 = 1, c1 = 1) {
        let f = [], b1 = u1 / t1, g1 = c1 / r;
        for(let l1 = 0; l1 < r; l1++)for(let w = 0; w < t1; w++)f.push(new ae(s1 + w * b1, a + l1 * g1, b1, g1));
        return f;
    }
    i(Ct, "slice");
    function Tt(t1, r) {
        return Te(typeof r == "string" ? new Promise((s1, a)=>{
            ie.fetchJSON(r).then((u1)=>{
                Tt(t1, u1).then(s1).catch(a);
            });
        }) : W.from(t1).then((s1)=>{
            let a = {};
            for(let u1 in r){
                let c1 = r[u1], f = s1.frames[0], b1 = zr * f.w, g1 = Kr * f.h, l1 = c1.frames ? c1.frames.map((A)=>new ae(f.x + (c1.x + A.x) / b1 * f.w, f.y + (c1.y + A.y) / g1 * f.h, A.w / b1 * f.w, A.h / g1 * f.h)) : Ct(c1.sliceX || 1, c1.sliceY || 1, f.x + c1.x / b1 * f.w, f.y + c1.y / g1 * f.h, c1.width / b1 * f.w, c1.height / g1 * f.h), w = new W(s1.tex, l1, c1.anims);
                j.sprites.addLoaded(u1, w), a[u1] = w;
            }
            return a;
        }));
    }
    i(Tt, "loadSpriteAtlas");
    function At(t1, r = {}) {
        let s1 = document.createElement("canvas"), a = t1[0].width, u1 = t1[0].height;
        s1.width = a * t1.length, s1.height = u1;
        let c1 = s1.getContext("2d");
        t1.forEach((b1, g1)=>{
            b1 instanceof ImageData ? c1.putImageData(b1, g1 * a, 0) : c1.drawImage(b1, g1 * a, 0);
        });
        let f = c1.getImageData(0, 0, t1.length * a, u1);
        return W.fromImage(f, {
            ...r,
            sliceX: t1.length,
            sliceY: 1
        });
    }
    i(At, "createSpriteSheet");
    function Ke(t1, r, s1 = {
        sliceX: 1,
        sliceY: 1,
        anims: {}
    }) {
        return Array.isArray(r) ? r.some((a)=>typeof a == "string") ? j.sprites.add(t1, Promise.all(r.map((a)=>typeof a == "string" ? ie.loadImg(a) : Promise.resolve(a))).then((a)=>At(a, s1))) : j.sprites.addLoaded(t1, At(r, s1)) : typeof r == "string" ? j.sprites.add(t1, W.from(r, s1)) : j.sprites.addLoaded(t1, W.fromImage(r, s1));
    }
    i(Ke, "loadSprite");
    function on(t1, r) {
        return j.sprites.add(t1, new Promise(async (s1)=>{
            let a = typeof r == "string" ? await ie.fetchJSON(r) : r, u1 = await Promise.all(a.frames.map(ie.loadImg)), c1 = document.createElement("canvas");
            c1.width = a.width, c1.height = a.height * a.frames.length;
            let f = c1.getContext("2d");
            u1.forEach((g1, l1)=>{
                f.drawImage(g1, 0, l1 * a.height);
            });
            let b1 = await Ke(null, c1, {
                sliceY: a.frames.length,
                anims: a.anims
            });
            s1(b1);
        }));
    }
    i(on, "loadPedit");
    function an(t1, r, s1) {
        typeof r == "string" && !s1 && (s1 = r.replace(new RegExp(`${Rr(r)}$`), "json"));
        let a = typeof s1 == "string" ? ie.fetchJSON(s1) : Promise.resolve(s1);
        return j.sprites.add(t1, a.then((u1)=>{
            let c1 = u1.meta.size, f = u1.frames.map((g1)=>new ae(g1.frame.x / c1.w, g1.frame.y / c1.h, g1.frame.w / c1.w, g1.frame.h / c1.h)), b1 = {};
            for (let g1 of u1.meta.frameTags)g1.from === g1.to ? b1[g1.name] = g1.from : b1[g1.name] = {
                from: g1.from,
                to: g1.to,
                speed: 10,
                loop: !0,
                pingpong: g1.direction === "pingpong"
            };
            return W.from(r, {
                frames: f,
                anims: b1
            });
        }));
    }
    i(an, "loadAseprite");
    function un(t1, r, s1) {
        return j.shaders.addLoaded(t1, lt(r, s1));
    }
    i(un, "loadShader");
    function cn(t1, r, s1) {
        let a = i((c1)=>c1 ? ie.fetchText(c1) : Promise.resolve(null), "resolveUrl"), u1 = Promise.all([
            a(r),
            a(s1)
        ]).then(([c1, f])=>lt(c1, f));
        return j.shaders.add(t1, u1);
    }
    i(cn, "loadShaderURL");
    function hn(t1, r) {
        return j.sounds.add(t1, typeof r == "string" ? de.fromURL(r) : de.fromArrayBuffer(r));
    }
    i(hn, "loadSound");
    function ln(t1 = "bean") {
        return Ke(t1, Vr);
    }
    i(ln, "loadBean");
    function Ot(t1) {
        return j.sprites.get(t1);
    }
    i(Ot, "getSprite");
    function Rt(t1) {
        return j.sounds.get(t1);
    }
    i(Rt, "getSound");
    function Pt(t1) {
        return j.fonts.get(t1);
    }
    i(Pt, "getFont");
    function Dt(t1) {
        return j.bitmapFonts.get(t1);
    }
    i(Dt, "getBitmapFont");
    function Mt(t1) {
        return j.shaders.get(t1);
    }
    i(Mt, "getShader");
    function dn(t1) {
        return j.custom.get(t1);
    }
    i(dn, "getAsset");
    function ht(t1) {
        if (typeof t1 == "string") {
            let r = Ot(t1);
            if (r) return r;
            if (q() < 1) return null;
            throw new Error(`Sprite not found: ${t1}`);
        } else {
            if (t1 instanceof W) return ve.loaded(t1);
            if (t1 instanceof ve) return t1;
            throw new Error(`Invalid sprite: ${t1}`);
        }
    }
    i(ht, "resolveSprite");
    function fn(t1) {
        if (typeof t1 == "string") {
            let r = Rt(t1);
            if (r) return r;
            if (q() < 1) return null;
            throw new Error(`Sound not found: ${t1}`);
        } else {
            if (t1 instanceof de) return ve.loaded(t1);
            if (t1 instanceof ve) return t1;
            throw new Error(`Invalid sound: ${t1}`);
        }
    }
    i(fn, "resolveSound");
    function mn(t1) {
        if (!t1) return U.defShader;
        if (typeof t1 == "string") {
            let r = Mt(t1);
            if (r) return r.data ?? r;
            if (q() < 1) return null;
            throw new Error(`Shader not found: ${t1}`);
        } else if (t1 instanceof ve) return t1.data ? t1.data : t1;
        return t1;
    }
    i(mn, "resolveShader");
    function Gt(t1) {
        if (!t1) return Gt(n.font ?? Li);
        if (typeof t1 == "string") {
            let r = Dt(t1), s1 = Pt(t1);
            if (r) return r.data ?? r;
            if (s1) return s1.data ?? s1;
            if (document.fonts.check(`${nn}px ${t1}`)) return t1;
            if (q() < 1) return null;
            throw new Error(`Font not found: ${t1}`);
        } else if (t1 instanceof ve) return t1.data ? t1.data : t1;
        return t1;
    }
    i(Gt, "resolveFont");
    function pn(t1) {
        return t1 !== void 0 && (ne.masterNode.gain.value = t1), ne.masterNode.gain.value;
    }
    i(pn, "volume");
    function Bt(t1, r = {}) {
        let s1 = ne.ctx, a = r.paused ?? !1, u1 = s1.createBufferSource(), c1 = new be, f = s1.createGain(), b1 = r.seek ?? 0, g1 = 0, l1 = 0, w = !1;
        u1.loop = !!r.loop, u1.detune.value = r.detune ?? 0, u1.playbackRate.value = r.speed ?? 1, u1.connect(f), u1.onended = ()=>{
            N() >= u1.buffer?.duration && c1.trigger();
        }, f.connect(ne.masterNode), f.gain.value = r.volume ?? 1;
        let A = i((M1)=>{
            u1.buffer = M1.buf, a || (g1 = s1.currentTime, u1.start(0, b1), w = !0);
        }, "start"), D = fn(t1);
        D instanceof ve && D.onLoad(A);
        let N = i(()=>{
            if (!u1.buffer) return 0;
            let M1 = a ? l1 - g1 : s1.currentTime - g1, P = u1.buffer.duration;
            return u1.loop ? M1 % P : Math.min(M1, P);
        }, "getTime"), _ = i((M1)=>{
            let P = s1.createBufferSource();
            return P.buffer = M1.buffer, P.loop = M1.loop, P.playbackRate.value = M1.playbackRate.value, P.detune.value = M1.detune.value, P.onended = M1.onended, P.connect(f), P;
        }, "cloneNode");
        return {
            stop () {
                this.paused = !0, this.seek(0);
            },
            set paused (M){
                if (a !== M) {
                    if (a = M, M) w && (u1.stop(), w = !1), l1 = s1.currentTime;
                    else {
                        u1 = _(u1);
                        let P = l1 - g1;
                        u1.start(0, P), w = !0, g1 = s1.currentTime - P, l1 = 0;
                    }
                }
            },
            get paused () {
                return a;
            },
            play (M1 = 0) {
                this.seek(M1), this.paused = !1;
            },
            seek (M1) {
                u1.buffer?.duration && (M1 > u1.buffer.duration || (a ? (u1 = _(u1), g1 = l1 - M1) : (u1.stop(), u1 = _(u1), g1 = s1.currentTime - M1, u1.start(0, M1), w = !0, l1 = 0)));
            },
            set speed (M){
                u1.playbackRate.value = M;
            },
            get speed () {
                return u1.playbackRate.value;
            },
            set detune (M){
                u1.detune.value = M;
            },
            get detune () {
                return u1.detune.value;
            },
            set volume (M){
                f.gain.value = Math.max(M, 0);
            },
            get volume () {
                return f.gain.value;
            },
            set loop (M){
                u1.loop = M;
            },
            get loop () {
                return u1.loop;
            },
            duration () {
                return u1.buffer?.duration ?? 0;
            },
            time () {
                return N() % this.duration();
            },
            onEnd (M1) {
                return c1.add(M1);
            },
            then (M1) {
                return this.onEnd(M1);
            }
        };
    }
    i(Bt, "play");
    function Ft(t1) {
        return Bt(ne.burpSnd, t1);
    }
    i(Ft, "burp");
    function gn(t1, r) {
        return new rt($, t1, r);
    }
    i(gn, "makeCanvas");
    function lt(t1 = Yn, r = Wn) {
        let s1 = $i.replace("{{user}}", t1 ?? Yn), a = zi.replace("{{user}}", r ?? Wn);
        try {
            return new Xt($, s1, a, Xn.map((u1)=>u1.name));
        } catch (u1) {
            let f = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/, b1 = Dr(u1).match(f), g1 = Number(b1.groups.line) - 14, l1 = b1.groups.msg.trim(), w = b1.groups.type.toLowerCase();
            throw new Error(`${w} shader line ${g1}: ${l1}`);
        }
    }
    i(lt, "makeShader");
    function wn(t1, r, s1, a) {
        let u1 = t1.width / r, c1 = {}, f = a.split("").entries();
        for (let [b1, g1] of f)c1[g1] = new ae(b1 % u1 * r, Math.floor(b1 / u1) * s1, r, s1);
        return {
            tex: t1,
            map: c1,
            size: s1
        };
    }
    i(wn, "makeFont");
    function dt(t1, r, s1, a = U.defTex, u1 = U.defShader, c1 = {}) {
        let f = mn(u1);
        if (!f || f instanceof ve) return;
        let b1 = U.fixed || s1 ? U.transform : C.cam.transform.mult(U.transform), g1 = [];
        for (let l1 of t1){
            let w = vn(b1.multVec2(l1.pos));
            g1.push(w.x, w.y, l1.uv.x, l1.uv.y, l1.color.r / 255, l1.color.g / 255, l1.color.b / 255, l1.opacity);
        }
        U.renderer.push(S.TRIANGLES, g1, r, f, a, c1);
    }
    i(dt, "drawRaw");
    function Pe() {
        U.renderer.flush();
    }
    i(Pe, "flush");
    function It() {
        S.clear(S.COLOR_BUFFER_BIT), U.frameBuffer.bind(), S.clear(S.COLOR_BUFFER_BIT), U.bgColor || pe(()=>{
            Ce({
                width: we(),
                height: xe(),
                quad: new ae(0, 0, we() / Hr, xe() / Hr),
                tex: U.bgTex,
                fixed: !0
            });
        }), U.renderer.numDraws = 0, U.fixed = !1, U.transformStack.length = 0, U.transform = new Ue;
    }
    i(It, "frameStart");
    function bn(t1, r) {
        U.postShader = t1, U.postShaderUniform = r ?? null;
    }
    i(bn, "usePostEffect");
    function ft() {
        Pe(), U.lastDrawCalls = U.renderer.numDraws, U.frameBuffer.unbind(), S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
        let t1 = U.width, r = U.height;
        U.width = S.drawingBufferWidth / R, U.height = S.drawingBufferHeight / R, Ye({
            flipY: !0,
            tex: U.frameBuffer.tex,
            pos: new y(U.viewport.x, U.viewport.y),
            width: U.viewport.width,
            height: U.viewport.height,
            shader: U.postShader,
            uniform: typeof U.postShaderUniform == "function" ? U.postShaderUniform() : U.postShaderUniform,
            fixed: !0
        }), Pe(), U.width = t1, U.height = r;
    }
    i(ft, "frameEnd");
    function vn(t1) {
        return new y(t1.x / we() * 2 - 1, -t1.y / xe() * 2 + 1);
    }
    i(vn, "screen2ndc");
    function yn(t1) {
        U.transform = t1.clone();
    }
    i(yn, "pushMatrix");
    function re(...t1) {
        if (t1[0] === void 0) return;
        let r = T(...t1);
        r.x === 0 && r.y === 0 || U.transform.translate(r);
    }
    i(re, "pushTranslate");
    function Ne(...t1) {
        if (t1[0] === void 0) return;
        let r = T(...t1);
        r.x === 1 && r.y === 1 || U.transform.scale(r);
    }
    i(Ne, "pushScale");
    function je(t1) {
        t1 && U.transform.rotate(t1);
    }
    i(je, "pushRotate");
    function X() {
        U.transformStack.push(U.transform.clone());
    }
    i(X, "pushTransform");
    function he() {
        U.transformStack.length > 0 && (U.transform = U.transformStack.pop());
    }
    i(he, "popTransform");
    function Ce(t1) {
        if (t1.width === void 0 || t1.height === void 0) throw new Error('drawUVQuad() requires property "width" and "height".');
        if (t1.width <= 0 || t1.height <= 0) return;
        let r = t1.width, s1 = t1.height, u1 = ct(t1.anchor || en).scale(new y(r, s1).scale(-0.5)), c1 = t1.quad || new ae(0, 0, 1, 1), f = t1.color || ee(255, 255, 255), b1 = t1.opacity ?? 1, g1 = t1.tex ? Yr / t1.tex.width : 0, l1 = t1.tex ? Yr / t1.tex.height : 0, w = c1.x + g1, A = c1.y + l1, D = c1.w - g1 * 2, N = c1.h - l1 * 2;
        X(), re(t1.pos), je(t1.angle), Ne(t1.scale), re(u1), dt([
            {
                pos: new y(-r / 2, s1 / 2),
                uv: new y(t1.flipX ? w + D : w, t1.flipY ? A : A + N),
                color: f,
                opacity: b1
            },
            {
                pos: new y(-r / 2, -s1 / 2),
                uv: new y(t1.flipX ? w + D : w, t1.flipY ? A + N : A),
                color: f,
                opacity: b1
            },
            {
                pos: new y(r / 2, -s1 / 2),
                uv: new y(t1.flipX ? w : w + D, t1.flipY ? A + N : A),
                color: f,
                opacity: b1
            },
            {
                pos: new y(r / 2, s1 / 2),
                uv: new y(t1.flipX ? w : w + D, t1.flipY ? A : A + N),
                color: f,
                opacity: b1
            }
        ], [
            0,
            1,
            3,
            1,
            2,
            3
        ], t1.fixed, t1.tex, t1.shader, t1.uniform), he();
    }
    i(Ce, "drawUVQuad");
    function Ye(t1) {
        if (!t1.tex) throw new Error('drawTexture() requires property "tex".');
        let r = t1.quad ?? new ae(0, 0, 1, 1), s1 = t1.tex.width * r.w, a = t1.tex.height * r.h, u1 = new y(1);
        if (t1.tiled) {
            let c1 = Math.ceil((t1.width || s1) / s1), f = Math.ceil((t1.height || a) / a), g1 = ct(t1.anchor || en).add(new y(1, 1)).scale(.5).scale(c1 * s1, f * a);
            for(let l1 = 0; l1 < c1; l1++)for(let w = 0; w < f; w++)Ce(Object.assign({}, t1, {
                pos: (t1.pos || new y(0)).add(new y(s1 * l1, a * w)).sub(g1),
                scale: u1.scale(t1.scale || new y(1)),
                tex: t1.tex,
                quad: r,
                width: s1,
                height: a,
                anchor: "topleft"
            }));
        } else t1.width && t1.height ? (u1.x = t1.width / s1, u1.y = t1.height / a) : t1.width ? (u1.x = t1.width / s1, u1.y = u1.x) : t1.height && (u1.y = t1.height / a, u1.x = u1.y), Ce(Object.assign({}, t1, {
            scale: u1.scale(t1.scale || new y(1)),
            tex: t1.tex,
            quad: r,
            width: s1,
            height: a
        }));
    }
    i(Ye, "drawTexture");
    function Lt(t1) {
        if (!t1.sprite) throw new Error('drawSprite() requires property "sprite"');
        let r = ht(t1.sprite);
        if (!r || !r.data) return;
        let s1 = r.data.frames[t1.frame ?? 0];
        if (!s1) throw new Error(`Frame not found: ${t1.frame ?? 0}`);
        Ye(Object.assign({}, t1, {
            tex: r.data.tex,
            quad: s1.scale(t1.quad ?? new ae(0, 0, 1, 1))
        }));
    }
    i(Lt, "drawSprite");
    function We(t1, r, s1, a, u1, c1 = 1) {
        a = Me(a % 360), u1 = Me(u1 % 360), u1 <= a && (u1 += Math.PI * 2);
        let f = [], b1 = Math.ceil((u1 - a) / Me(8) * c1), g1 = (u1 - a) / b1;
        for(let l1 = a; l1 < u1; l1 += g1)f.push(t1.add(r * Math.cos(l1), s1 * Math.sin(l1)));
        return f.push(t1.add(r * Math.cos(u1), s1 * Math.sin(u1))), f;
    }
    i(We, "getArcPts");
    function ge(t1) {
        if (t1.width === void 0 || t1.height === void 0) throw new Error('drawRect() requires property "width" and "height".');
        if (t1.width <= 0 || t1.height <= 0) return;
        let r = t1.width, s1 = t1.height, u1 = ct(t1.anchor || en).add(1, 1).scale(new y(r, s1).scale(-0.5)), c1 = [
            new y(0, 0),
            new y(r, 0),
            new y(r, s1),
            new y(0, s1)
        ];
        if (t1.radius) {
            let f = Math.min(Math.min(r, s1) / 2, t1.radius);
            c1 = [
                new y(f, 0),
                new y(r - f, 0),
                ...We(new y(r - f, f), f, f, 270, 360),
                new y(r, f),
                new y(r, s1 - f),
                ...We(new y(r - f, s1 - f), f, f, 0, 90),
                new y(r - f, s1),
                new y(f, s1),
                ...We(new y(f, s1 - f), f, f, 90, 180),
                new y(0, s1 - f),
                new y(0, f),
                ...We(new y(f, f), f, f, 180, 270)
            ];
        }
        te(Object.assign({}, t1, {
            offset: u1,
            pts: c1,
            ...t1.gradient ? {
                colors: t1.horizontal ? [
                    t1.gradient[0],
                    t1.gradient[1],
                    t1.gradient[1],
                    t1.gradient[0]
                ] : [
                    t1.gradient[0],
                    t1.gradient[0],
                    t1.gradient[1],
                    t1.gradient[1]
                ]
            } : {}
        }));
    }
    i(ge, "drawRect");
    function He(t1) {
        let { p1: r, p2: s1 } = t1;
        if (!r || !s1) throw new Error('drawLine() requires properties "p1" and "p2".');
        let a = t1.width || 1, u1 = s1.sub(r).unit().normal().scale(a * .5), c1 = [
            r.sub(u1),
            r.add(u1),
            s1.add(u1),
            s1.sub(u1)
        ].map((f)=>({
                pos: new y(f.x, f.y),
                uv: new y(0),
                color: t1.color ?? Y.WHITE,
                opacity: t1.opacity ?? 1
            }));
        dt(c1, [
            0,
            1,
            3,
            1,
            2,
            3
        ], t1.fixed, U.defTex, t1.shader, t1.uniform);
    }
    i(He, "drawLine");
    function d(t1) {
        let r = t1.pts;
        if (!r) throw new Error('drawLines() requires property "pts".');
        if (!(r.length < 2)) {
            if (t1.radius && r.length >= 3) {
                let s1 = r[0].sdist(r[1]);
                for(let u1 = 1; u1 < r.length - 1; u1++)s1 = Math.min(r[u1].sdist(r[u1 + 1]), s1);
                let a = Math.min(t1.radius, Math.sqrt(s1) / 2);
                He(Object.assign({}, t1, {
                    p1: r[0],
                    p2: r[1]
                }));
                for(let u1 = 1; u1 < r.length - 2; u1++){
                    let c1 = r[u1], f = r[u1 + 1];
                    He(Object.assign({}, t1, {
                        p1: c1,
                        p2: f
                    }));
                }
                He(Object.assign({}, t1, {
                    p1: r[r.length - 2],
                    p2: r[r.length - 1]
                }));
            } else for(let s1 = 0; s1 < r.length - 1; s1++)He(Object.assign({}, t1, {
                p1: r[s1],
                p2: r[s1 + 1]
            })), t1.join !== "none" && O(Object.assign({}, t1, {
                pos: r[s1],
                radius: t1.width / 2
            }));
        }
    }
    i(d, "drawLines");
    function x(t1) {
        if (!t1.p1 || !t1.p2 || !t1.p3) throw new Error('drawTriangle() requires properties "p1", "p2" and "p3".');
        return te(Object.assign({}, t1, {
            pts: [
                t1.p1,
                t1.p2,
                t1.p3
            ]
        }));
    }
    i(x, "drawTriangle");
    function O(t1) {
        if (typeof t1.radius != "number") throw new Error('drawCircle() requires property "radius".');
        t1.radius !== 0 && k(Object.assign({}, t1, {
            radiusX: t1.radius,
            radiusY: t1.radius,
            angle: 0
        }));
    }
    i(O, "drawCircle");
    function k(t1) {
        if (t1.radiusX === void 0 || t1.radiusY === void 0) throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
        if (t1.radiusX === 0 || t1.radiusY === 0) return;
        let r = t1.start ?? 0, s1 = t1.end ?? 360, a = ct(t1.anchor ?? "center").scale(new y(-t1.radiusX, -t1.radiusY)), u1 = We(a, t1.radiusX, t1.radiusY, r, s1, t1.resolution);
        u1.unshift(a);
        let c1 = Object.assign({}, t1, {
            pts: u1,
            radius: 0,
            ...t1.gradient ? {
                colors: [
                    t1.gradient[0],
                    ...Array(u1.length - 1).fill(t1.gradient[1])
                ]
            } : {}
        });
        if (s1 - r >= 360 && t1.outline) {
            t1.fill !== !1 && te(Object.assign(c1, {
                outline: null
            })), te(Object.assign(c1, {
                pts: u1.slice(1),
                fill: !1
            }));
            return;
        }
        te(c1);
    }
    i(k, "drawEllipse");
    function te(t1) {
        if (!t1.pts) throw new Error('drawPolygon() requires property "pts".');
        let r = t1.pts.length;
        if (!(r < 3)) {
            if (X(), re(t1.pos), Ne(t1.scale), je(t1.angle), re(t1.offset), t1.fill !== !1) {
                let s1 = t1.color ?? Y.WHITE, a = t1.pts.map((c1, f)=>({
                        pos: new y(c1.x, c1.y),
                        uv: new y(0, 0),
                        color: t1.colors && t1.colors[f] ? t1.colors[f].mult(s1) : s1,
                        opacity: t1.opacity ?? 1
                    })), u1 = [
                    ...Array(r - 2).keys()
                ].map((c1)=>[
                        0,
                        c1 + 1,
                        c1 + 2
                    ]).flat();
                dt(a, t1.indices ?? u1, t1.fixed, U.defTex, t1.shader, t1.uniform);
            }
            t1.outline && d({
                pts: [
                    ...t1.pts,
                    t1.pts[0]
                ],
                radius: t1.radius,
                width: t1.outline.width,
                color: t1.outline.color,
                join: t1.outline.join,
                uniform: t1.uniform,
                fixed: t1.fixed,
                opacity: t1.opacity
            }), he();
        }
    }
    i(te, "drawPolygon");
    function J(t1, r, s1) {
        Pe(), S.clear(S.STENCIL_BUFFER_BIT), S.enable(S.STENCIL_TEST), S.stencilFunc(S.NEVER, 1, 255), S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE), r(), Pe(), S.stencilFunc(s1, 1, 255), S.stencilOp(S.KEEP, S.KEEP, S.KEEP), t1(), Pe(), S.disable(S.STENCIL_TEST);
    }
    i(J, "drawStenciled");
    function Oe(t1, r) {
        J(t1, r, S.EQUAL);
    }
    i(Oe, "drawMasked");
    function qe(t1, r) {
        J(t1, r, S.NOTEQUAL);
    }
    i(qe, "drawSubtracted");
    function Vt() {
        return (U.viewport.width + U.viewport.height) / (U.width + U.height);
    }
    i(Vt, "getViewportScale");
    function pe(t1) {
        Pe();
        let r = U.width, s1 = U.height;
        U.width = U.viewport.width, U.height = U.viewport.height, t1(), Pe(), U.width = r, U.height = s1;
    }
    i(pe, "drawUnscaled");
    function it(t1, r) {
        r.pos && (t1.pos = t1.pos.add(r.pos)), r.scale && (t1.scale = t1.scale.scale(T(r.scale))), r.angle && (t1.angle += r.angle), r.color && t1.ch.length === 1 && (t1.color = t1.color.mult(r.color)), r.opacity && (t1.opacity *= r.opacity);
    }
    i(it, "applyCharTransform");
    let Jn = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
    function Xr(t1) {
        let r = {}, s1 = t1.replace(Jn, "$2"), a = 0;
        for (let u1 of t1.matchAll(Jn)){
            let c1 = u1.index - a;
            for(let f = 0; f < u1.groups.text.length; f++)r[f + c1] = [
                u1.groups.style
            ];
            a += u1[0].length - u1.groups.text.length;
        }
        return {
            charStyleMap: r,
            text: s1
        };
    }
    i(Xr, "compileStyledText");
    let xn = {};
    function Xe(t1) {
        if (t1.text === void 0) throw new Error('formatText() requires property "text".');
        let r = Gt(t1.font);
        if (t1.text === "" || r instanceof ve || !r) return {
            width: 0,
            height: 0,
            chars: [],
            opt: t1
        };
        let { charStyleMap: s1, text: a } = Xr(t1.text + ""), u1 = Mr(a);
        if (r instanceof Se || typeof r == "string") {
            let Q = r instanceof Se ? r.fontface.family : r, H = r instanceof Se ? {
                outline: r.outline,
                filter: r.filter
            } : {
                outline: null,
                filter: Kn
            }, V = xn[Q] ?? {
                font: {
                    tex: new Re($, qr, $r, {
                        filter: H.filter
                    }),
                    map: {},
                    size: nn
                },
                cursor: new y(0),
                outline: H.outline
            };
            xn[Q] || (xn[Q] = V), r = V.font;
            for (let fe of u1)if (!V.font.map[fe]) {
                let E = F;
                E.clearRect(0, 0, I.width, I.height), E.font = `${r.size}px ${Q}`, E.textBaseline = "top", E.textAlign = "left", E.fillStyle = "#ffffff";
                let G = E.measureText(fe), B = Math.ceil(G.width), L = r.size;
                V.outline && (E.lineJoin = "round", E.lineWidth = V.outline.width * 2, E.strokeStyle = V.outline.color.toHex(), E.strokeText(fe, V.outline.width, V.outline.width), B += V.outline.width * 2, L += V.outline.width * 3), E.fillText(fe, V.outline?.width ?? 0, V.outline?.width ?? 0);
                let K = E.getImageData(0, 0, B, L);
                if (V.cursor.x + B > qr && (V.cursor.x = 0, V.cursor.y += L, V.cursor.y > $r)) throw new Error("Font atlas exceeds character limit");
                r.tex.update(K, V.cursor.x, V.cursor.y), r.map[fe] = new ae(V.cursor.x, V.cursor.y, B, L), V.cursor.x += B;
            }
        }
        let c1 = t1.size || r.size, f = T(t1.scale ?? 1).scale(c1 / r.size), b1 = t1.lineSpacing ?? 0, g1 = t1.letterSpacing ?? 0, l1 = 0, w = 0, A = 0, D = [], N = [], _ = 0, M1 = null, P = null;
        for(; _ < u1.length;){
            let Q = u1[_];
            if (Q === `
`) A += c1 + b1, D.push({
                width: l1 - g1,
                chars: N
            }), M1 = null, P = null, l1 = 0, N = [];
            else {
                let H = r.map[Q];
                if (H) {
                    let V = H.w * f.x;
                    t1.width && l1 + V > t1.width && (A += c1 + b1, M1 != null && (_ -= N.length - M1, Q = u1[_], H = r.map[Q], V = H.w * f.x, N = N.slice(0, M1 - 1), l1 = P), M1 = null, P = null, D.push({
                        width: l1 - g1,
                        chars: N
                    }), l1 = 0, N = []), N.push({
                        tex: r.tex,
                        width: H.w,
                        height: H.h,
                        quad: new ae(H.x / r.tex.width, H.y / r.tex.height, H.w / r.tex.width, H.h / r.tex.height),
                        ch: Q,
                        pos: new y(l1, A),
                        opacity: t1.opacity ?? 1,
                        color: t1.color ?? Y.WHITE,
                        scale: T(f),
                        angle: 0
                    }), Q === " " && (M1 = N.length, P = l1), l1 += V, w = Math.max(w, l1), l1 += g1;
                }
            }
            _++;
        }
        D.push({
            width: l1 - g1,
            chars: N
        }), A += c1, t1.width && (w = t1.width);
        let oe = [];
        for (let Q of D){
            let H = (w - Q.width) * Wi(t1.align ?? "left");
            for (let V of Q.chars){
                let fe = r.map[V.ch], E = oe.length;
                if (V.pos = V.pos.add(H, 0).add(fe.w * f.x * .5, fe.h * f.y * .5), t1.transform) {
                    let G = typeof t1.transform == "function" ? t1.transform(E, V.ch) : t1.transform;
                    G && it(V, G);
                }
                if (s1[E]) {
                    let G = s1[E];
                    for (let B of G){
                        let L = t1.styles[B], K = typeof L == "function" ? L(E, V.ch) : L;
                        K && it(V, K);
                    }
                }
                oe.push(V);
            }
        }
        return {
            width: w,
            height: A,
            chars: oe,
            opt: t1
        };
    }
    i(Xe, "formatText");
    function Qn(t1) {
        Je(Xe(t1));
    }
    i(Qn, "drawText");
    function Je(t1) {
        X(), re(t1.opt.pos), je(t1.opt.angle), re(ct(t1.opt.anchor ?? "topleft").add(1, 1).scale(t1.width, t1.height).scale(-0.5)), t1.chars.forEach((r)=>{
            Ce({
                tex: r.tex,
                width: r.width,
                height: r.height,
                pos: r.pos,
                scale: r.scale,
                angle: r.angle,
                color: r.color,
                opacity: r.opacity,
                quad: r.quad,
                anchor: "center",
                uniform: t1.opt.uniform,
                shader: t1.opt.shader,
                fixed: t1.opt.fixed
            });
        }), he();
    }
    i(Je, "drawFormattedText");
    function we() {
        return U.width;
    }
    i(we, "width");
    function xe() {
        return U.height;
    }
    i(xe, "height");
    function Jr(t1) {
        return new y((t1.x - U.viewport.x) * we() / U.viewport.width, (t1.y - U.viewport.y) * xe() / U.viewport.height);
    }
    i(Jr, "windowToContent");
    function Qr(t1) {
        return new y(t1.x * U.viewport.width / U.width, t1.y * U.viewport.height / U.height);
    }
    i(Qr, "contentToView");
    function _t() {
        return Jr(v.mousePos());
    }
    i(_t, "mousePos");
    let Zn = !1, se = {
        inspect: !1,
        timeScale: 1,
        showLog: !0,
        fps: ()=>v.fps(),
        numFrames: ()=>v.numFrames(),
        stepFrame: cr,
        drawCalls: ()=>U.lastDrawCalls,
        clearLog: ()=>C.logs = [],
        log: (t1)=>{
            let r = n.logMax ?? ki;
            C.logs.unshift({
                msg: t1,
                time: v.time()
            }), C.logs.length > r && (C.logs = C.logs.slice(0, r));
        },
        error: (t1)=>se.log(new Error(t1.toString ? t1.toString() : t1)),
        curRecording: null,
        numObjects: ()=>On("*", {
                recursive: !0
            }).length,
        get paused () {
            return Zn;
        },
        set paused (t){
            Zn = t, t ? ne.ctx.suspend() : ne.ctx.resume();
        }
    };
    function De() {
        return v.dt() * se.timeScale;
    }
    i(De, "dt");
    function Zr(...t1) {
        return t1.length > 0 && (C.cam.pos = T(...t1)), C.cam.pos ? C.cam.pos.clone() : qt();
    }
    i(Zr, "camPos");
    function es(...t1) {
        return t1.length > 0 && (C.cam.scale = T(...t1)), C.cam.scale.clone();
    }
    i(es, "camScale");
    function ts(t1) {
        return t1 !== void 0 && (C.cam.angle = t1), C.cam.angle;
    }
    i(ts, "camRot");
    function ns(t1 = 12) {
        C.cam.shake += t1;
    }
    i(ns, "shake");
    function er(t1) {
        return C.cam.transform.multVec2(t1);
    }
    i(er, "toScreen");
    function tr(t1) {
        return C.cam.transform.invert().multVec2(t1);
    }
    i(tr, "toWorld");
    function kt(t1) {
        let r = new Ue;
        return t1.pos && r.translate(t1.pos), t1.scale && r.scale(t1.scale), t1.angle && r.rotate(t1.angle), t1.parent ? r.mult(t1.parent.transform) : r;
    }
    i(kt, "calcTransform");
    function Un(t1 = []) {
        let r = new Map, s1 = {}, a = new _e, u1 = [], c1 = null, f = !1, b1 = {
            id: Pr(),
            hidden: !1,
            transform: new Ue,
            children: [],
            parent: null,
            set paused (l){
                if (l !== f) {
                    f = l;
                    for (let w of u1)w.paused = l;
                }
            },
            get paused () {
                return f;
            },
            add (l1 = []) {
                let w = Array.isArray(l1) ? Un(l1) : l1;
                if (w.parent) throw new Error("Cannot add a game obj that already has a parent.");
                return w.parent = this, w.transform = kt(w), this.children.push(w), w.trigger("add", w), C.events.trigger("add", w), w;
            },
            readd (l1) {
                let w = this.children.indexOf(l1);
                return w !== -1 && (this.children.splice(w, 1), this.children.push(l1)), l1;
            },
            remove (l1) {
                let w = this.children.indexOf(l1);
                if (w !== -1) {
                    l1.parent = null, this.children.splice(w, 1);
                    let A = i((D)=>{
                        D.trigger("destroy"), C.events.trigger("destroy", D), D.children.forEach((N)=>A(N));
                    }, "trigger");
                    A(l1);
                }
            },
            removeAll (l1) {
                if (l1) this.get(l1).forEach((w)=>this.remove(w));
                else for (let w of [
                    ...this.children
                ])this.remove(w);
            },
            update () {
                this.paused || (this.children.sort((l1, w)=>(l1.z ?? 0) - (w.z ?? 0)).forEach((l1)=>l1.update()), this.trigger("update"));
            },
            draw () {
                if (this.hidden) return;
                this.canvas && this.canvas.bind();
                let l1 = U.fixed;
                this.fixed && (U.fixed = !0), X(), re(this.pos), Ne(this.scale), je(this.angle);
                let w = this.children.sort((A, D)=>(A.z ?? 0) - (D.z ?? 0));
                if (this.mask) {
                    let A = {
                        intersect: Oe,
                        subtract: qe
                    }[this.mask];
                    if (!A) throw new Error(`Invalid mask func: "${this.mask}"`);
                    A(()=>{
                        w.forEach((D)=>D.draw());
                    }, ()=>{
                        this.trigger("draw");
                    });
                } else this.trigger("draw"), w.forEach((A)=>A.draw());
                he(), U.fixed = l1, this.canvas && this.canvas.unbind();
            },
            drawInspect () {
                this.hidden || (X(), re(this.pos), Ne(this.scale), je(this.angle), this.children.sort((l1, w)=>(l1.z ?? 0) - (w.z ?? 0)).forEach((l1)=>l1.drawInspect()), this.trigger("drawInspect"), he());
            },
            use (l1) {
                if (!l1) return;
                if (typeof l1 == "string") return this.use({
                    id: l1
                });
                let w = [];
                l1.id && (this.unuse(l1.id), s1[l1.id] = [], w = s1[l1.id], r.set(l1.id, l1));
                for(let D in l1){
                    if (Ki.has(D)) continue;
                    let N = Object.getOwnPropertyDescriptor(l1, D);
                    if (typeof N.value == "function" && (l1[D] = l1[D].bind(this)), N.set && Object.defineProperty(l1, D, {
                        set: N.set.bind(this)
                    }), N.get && Object.defineProperty(l1, D, {
                        get: N.get.bind(this)
                    }), Yi.has(D)) {
                        let _ = D === "add" ? ()=>{
                            c1 = i((M1)=>w.push(M1), "onCurCompCleanup"), l1[D](), c1 = null;
                        } : l1[D];
                        w.push(this.on(D, _).cancel);
                    } else if (this[D] === void 0) Object.defineProperty(this, D, {
                        get: ()=>l1[D],
                        set: (_)=>l1[D] = _,
                        configurable: !0,
                        enumerable: !0
                    }), w.push(()=>delete this[D]);
                    else throw new Error(`Duplicate component property: "${D}"`);
                }
                let A = i(()=>{
                    if (l1.require) {
                        for (let D of l1.require)if (!this.c(D)) throw new Error(`Component "${l1.id}" requires component "${D}"`);
                    }
                }, "checkDeps");
                l1.destroy && w.push(l1.destroy.bind(this)), this.exists() ? (A(), l1.add && (c1 = i((D)=>w.push(D), "onCurCompCleanup"), l1.add.call(this), c1 = null)) : l1.require && w.push(this.on("add", A).cancel);
            },
            unuse (l1) {
                s1[l1] && (s1[l1].forEach((w)=>w()), delete s1[l1]), r.has(l1) && r.delete(l1);
            },
            c (l1) {
                return r.get(l1);
            },
            get (l1, w = {}) {
                let A = w.recursive ? this.children.flatMap(i(function D(N) {
                    return [
                        N,
                        ...N.children.flatMap(D)
                    ];
                }, "recurse")) : this.children;
                if (A = A.filter((D)=>l1 ? D.is(l1) : !0), w.liveUpdate) {
                    let D = i((_)=>w.recursive ? this.isAncestorOf(_) : _.parent === this, "isChild"), N = [];
                    N.push(En((_)=>{
                        D(_) && _.is(l1) && A.push(_);
                    })), N.push(nr((_)=>{
                        if (D(_) && _.is(l1)) {
                            let M1 = A.findIndex((P)=>P.id === _.id);
                            M1 !== -1 && A.splice(M1, 1);
                        }
                    })), this.onDestroy(()=>{
                        for (let _ of N)_.cancel();
                    });
                }
                return A;
            },
            isAncestorOf (l1) {
                return l1.parent ? l1.parent === this || this.isAncestorOf(l1.parent) : !1;
            },
            exists () {
                return C.root.isAncestorOf(this);
            },
            is (l1) {
                if (l1 === "*") return !0;
                if (Array.isArray(l1)) {
                    for (let w of l1)if (!this.c(w)) return !1;
                    return !0;
                } else return this.c(l1) != null;
            },
            on (l1, w) {
                let A = a.on(l1, w.bind(this));
                return c1 && c1(()=>A.cancel()), A;
            },
            trigger (l1, ...w) {
                a.trigger(l1, ...w), C.objEvents.trigger(l1, this, ...w);
            },
            destroy () {
                this.parent && this.parent.remove(this);
            },
            inspect () {
                let l1 = {};
                for (let [w, A] of r)l1[w] = A.inspect ? A.inspect() : null;
                return l1;
            },
            onAdd (l1) {
                return this.on("add", l1);
            },
            onUpdate (l1) {
                return this.on("update", l1);
            },
            onDraw (l1) {
                return this.on("draw", l1);
            },
            onDestroy (l1) {
                return this.on("destroy", l1);
            },
            clearEvents () {
                a.clear();
            }
        }, g1 = [
            "onKeyPress",
            "onKeyPressRepeat",
            "onKeyDown",
            "onKeyRelease",
            "onMousePress",
            "onMouseDown",
            "onMouseRelease",
            "onMouseMove",
            "onCharInput",
            "onMouseMove",
            "onTouchStart",
            "onTouchMove",
            "onTouchEnd",
            "onScroll",
            "onGamepadButtonPress",
            "onGamepadButtonDown",
            "onGamepadButtonRelease",
            "onGamepadStick"
        ];
        for (let l1 of g1)b1[l1] = (...w)=>{
            let A = v[l1](...w);
            return u1.push(A), b1.onDestroy(()=>A.cancel()), A;
        };
        for (let l1 of t1)b1.use(l1);
        return b1;
    }
    i(Un, "make");
    function $e(t1, r, s1) {
        return C.objEvents[t1] || (C.objEvents[t1] = new Ut), C.objEvents.on(t1, (a, ...u1)=>{
            a.is(r) && s1(a, ...u1);
        });
    }
    i($e, "on");
    let rs = Ee((t1)=>{
        let r = gt([
            {
                update: t1
            }
        ]);
        return {
            get paused () {
                return r.paused;
            },
            set paused (s){
                r.paused = s;
            },
            cancel: ()=>r.destroy()
        };
    }, (t1, r)=>$e("update", t1, r)), ss = Ee((t1)=>{
        let r = gt([
            {
                draw: t1
            }
        ]);
        return {
            get paused () {
                return r.hidden;
            },
            set paused (s){
                r.hidden = s;
            },
            cancel: ()=>r.destroy()
        };
    }, (t1, r)=>$e("draw", t1, r)), En = Ee((t1)=>C.events.on("add", t1), (t1, r)=>$e("add", t1, r)), nr = Ee((t1)=>C.events.on("destroy", t1), (t1, r)=>$e("destroy", t1, r));
    function is(t1, r, s1) {
        return $e("collide", t1, (a, u1, c1)=>u1.is(r) && s1(a, u1, c1));
    }
    i(is, "onCollide");
    function os(t1, r, s1) {
        return $e("collideUpdate", t1, (a, u1, c1)=>u1.is(r) && s1(a, u1, c1));
    }
    i(os, "onCollideUpdate");
    function as(t1, r, s1) {
        return $e("collideEnd", t1, (a, u1, c1)=>u1.is(r) && s1(a, u1, c1));
    }
    i(as, "onCollideEnd");
    function Nt(t1, r) {
        On(t1, {
            recursive: !0
        }).forEach(r), En(t1, r);
    }
    i(Nt, "forAllCurrentAndFuture");
    let us = Ee((t1)=>v.onMousePress(t1), (t1, r)=>{
        let s1 = [];
        return Nt(t1, (a)=>{
            if (!a.area) throw new Error("onClick() requires the object to have area() component");
            s1.push(a.onClick(()=>r(a)));
        }), Ve.join(s1);
    });
    function cs(t1, r) {
        let s1 = [];
        return Nt(t1, (a)=>{
            if (!a.area) throw new Error("onHover() requires the object to have area() component");
            s1.push(a.onHover(()=>r(a)));
        }), Ve.join(s1);
    }
    i(cs, "onHover");
    function hs(t1, r) {
        let s1 = [];
        return Nt(t1, (a)=>{
            if (!a.area) throw new Error("onHoverUpdate() requires the object to have area() component");
            s1.push(a.onHoverUpdate(()=>r(a)));
        }), Ve.join(s1);
    }
    i(hs, "onHoverUpdate");
    function ls(t1, r) {
        let s1 = [];
        return Nt(t1, (a)=>{
            if (!a.area) throw new Error("onHoverEnd() requires the object to have area() component");
            s1.push(a.onHoverEnd(()=>r(a)));
        }), Ve.join(s1);
    }
    i(ls, "onHoverEnd");
    function ds(t1) {
        C.gravity = t1;
    }
    i(ds, "setGravity");
    function fs() {
        return C.gravity;
    }
    i(fs, "getGravity");
    function ms(...t1) {
        t1.length === 1 || t1.length === 2 ? (U.bgColor = ee(t1[0]), t1[1] && (U.bgAlpha = t1[1])) : (t1.length === 3 || t1.length === 4) && (U.bgColor = ee(t1[0], t1[1], t1[2]), t1[3] && (U.bgAlpha = t1[3])), S.clearColor(U.bgColor.r / 255, U.bgColor.g / 255, U.bgColor.b / 255, U.bgAlpha);
    }
    i(ms, "setBackground");
    function ps() {
        return U.bgColor.clone();
    }
    i(ps, "getBackground");
    function jt(...t1) {
        return {
            id: "pos",
            pos: T(...t1),
            moveBy (...r) {
                this.pos = this.pos.add(T(...r));
            },
            move (...r) {
                this.moveBy(T(...r).scale(De()));
            },
            moveTo (...r) {
                if (typeof r[0] == "number" && typeof r[1] == "number") return this.moveTo(T(r[0], r[1]), r[2]);
                let s1 = r[0], a = r[1];
                if (a === void 0) {
                    this.pos = T(s1);
                    return;
                }
                let u1 = s1.sub(this.pos);
                if (u1.len() <= a * De()) {
                    this.pos = T(s1);
                    return;
                }
                this.move(u1.unit().scale(a));
            },
            worldPos () {
                return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
            },
            screenPos () {
                let r = this.worldPos();
                return pt(this) ? r : er(r);
            },
            inspect () {
                return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
            },
            drawInspect () {
                O({
                    color: ee(255, 0, 0),
                    radius: 4 / Vt()
                });
            }
        };
    }
    i(jt, "pos");
    function Ht(...t1) {
        return t1.length === 0 ? Ht(1) : {
            id: "scale",
            scale: T(...t1),
            scaleTo (...r) {
                this.scale = T(...r);
            },
            scaleBy (...r) {
                this.scale.scale(T(...r));
            },
            inspect () {
                return `(${mt(this.scale.x, 2)}, ${mt(this.scale.y, 2)})`;
            }
        };
    }
    i(Ht, "scale");
    function gs(t1) {
        return {
            id: "rotate",
            angle: t1 ?? 0,
            rotateBy (r) {
                this.angle += r;
            },
            rotateTo (r) {
                this.angle = r;
            },
            inspect () {
                return `${Math.round(this.angle)}`;
            }
        };
    }
    i(gs, "rotate");
    function ws(...t1) {
        return {
            id: "color",
            color: ee(...t1),
            inspect () {
                return this.color.toString();
            }
        };
    }
    i(ws, "color");
    function mt(t1, r) {
        return Number(t1.toFixed(r));
    }
    i(mt, "toFixed");
    function bs(t1) {
        return {
            id: "opacity",
            opacity: t1 ?? 1,
            inspect () {
                return `${mt(this.opacity, 1)}`;
            },
            fadeOut (r = 1, s1 = Et.linear) {
                return Rn(this.opacity, 0, r, (a)=>this.opacity = a, s1);
            }
        };
    }
    i(bs, "opacity");
    function Sn(t1) {
        if (!t1) throw new Error("Please define an anchor");
        return {
            id: "anchor",
            anchor: t1,
            inspect () {
                return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
            }
        };
    }
    i(Sn, "anchor");
    function vs(t1) {
        return {
            id: "z",
            z: t1,
            inspect () {
                return `${this.z}`;
            }
        };
    }
    i(vs, "z");
    function ys(t1, r) {
        return {
            id: "follow",
            require: [
                "pos"
            ],
            follow: {
                obj: t1,
                offset: r ?? T(0)
            },
            add () {
                t1.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
            },
            update () {
                t1.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
            }
        };
    }
    i(ys, "follow");
    function xs(t1, r) {
        let s1 = typeof t1 == "number" ? y.fromAngle(t1) : t1.unit();
        return {
            id: "move",
            require: [
                "pos"
            ],
            update () {
                this.move(s1.scale(r));
            }
        };
    }
    i(xs, "move");
    let Us = 200;
    function Es(t1 = {}) {
        let r = t1.distance ?? Us, s1 = !1;
        return {
            id: "offscreen",
            require: [
                "pos"
            ],
            isOffScreen () {
                let a = this.screenPos(), u1 = new le(T(0), we(), xe());
                return !vt(u1, a) && u1.sdistToPoint(a) > r * r;
            },
            onExitScreen (a) {
                return this.on("exitView", a);
            },
            onEnterScreen (a) {
                return this.on("enterView", a);
            },
            update () {
                this.isOffScreen() ? (s1 || (this.trigger("exitView"), s1 = !0), t1.hide && (this.hidden = !0), t1.pause && (this.paused = !0), t1.destroy && this.destroy()) : (s1 && (this.trigger("enterView"), s1 = !1), t1.hide && (this.hidden = !1), t1.pause && (this.paused = !1));
            }
        };
    }
    i(Es, "offscreen");
    function pt(t1) {
        return t1.fixed ? !0 : t1.parent ? pt(t1.parent) : !1;
    }
    i(pt, "isFixed");
    function Ss(t1 = {}) {
        let r = {}, s1 = new Set;
        return {
            id: "area",
            collisionIgnore: t1.collisionIgnore ?? [],
            add () {
                this.area.cursor && this.onHover(()=>v.setCursor(this.area.cursor)), this.onCollideUpdate((a, u1)=>{
                    r[a.id] || this.trigger("collide", a, u1), r[a.id] = u1, s1.add(a.id);
                });
            },
            update () {
                for(let a in r)s1.has(Number(a)) || (this.trigger("collideEnd", r[a].target), delete r[a]);
                s1.clear();
            },
            drawInspect () {
                let a = this.localArea();
                X(), Ne(this.area.scale), re(this.area.offset);
                let u1 = {
                    outline: {
                        width: 4 / Vt(),
                        color: ee(0, 0, 255)
                    },
                    anchor: this.anchor,
                    fill: !1,
                    fixed: pt(this)
                };
                a instanceof le ? ge({
                    ...u1,
                    pos: a.pos,
                    width: a.width,
                    height: a.height
                }) : a instanceof ze ? te({
                    ...u1,
                    pts: a.pts
                }) : a instanceof yt && O({
                    ...u1,
                    pos: a.center,
                    radius: a.radius
                }), he();
            },
            area: {
                shape: t1.shape ?? null,
                scale: t1.scale ? T(t1.scale) : T(1),
                offset: t1.offset ?? T(0),
                cursor: t1.cursor ?? null
            },
            isClicked () {
                return v.isMousePressed() && this.isHovering();
            },
            isHovering () {
                let a = pt(this) ? _t() : tr(_t());
                return this.hasPoint(a);
            },
            checkCollision (a) {
                return r[a.id] ?? null;
            },
            getCollisions () {
                return Object.values(r);
            },
            isColliding (a) {
                return !!r[a.id];
            },
            isOverlapping (a) {
                let u1 = r[a.id];
                return u1 && u1.hasOverlap();
            },
            onClick (a) {
                let u1 = v.onMousePress("left", ()=>{
                    this.isHovering() && a();
                });
                return this.onDestroy(()=>u1.cancel()), u1;
            },
            onHover (a) {
                let u1 = !1;
                return this.onUpdate(()=>{
                    u1 ? u1 = this.isHovering() : this.isHovering() && (u1 = !0, a());
                });
            },
            onHoverUpdate (a) {
                return this.onUpdate(()=>{
                    this.isHovering() && a();
                });
            },
            onHoverEnd (a) {
                let u1 = !1;
                return this.onUpdate(()=>{
                    u1 ? this.isHovering() || (u1 = !1, a()) : u1 = this.isHovering();
                });
            },
            onCollide (a, u1) {
                if (typeof a == "function" && u1 === void 0) return this.on("collide", a);
                if (typeof a == "string") return this.onCollide((c1, f)=>{
                    c1.is(a) && u1(c1, f);
                });
            },
            onCollideUpdate (a, u1) {
                if (typeof a == "function" && u1 === void 0) return this.on("collideUpdate", a);
                if (typeof a == "string") return this.on("collideUpdate", (c1, f)=>c1.is(a) && u1(c1, f));
            },
            onCollideEnd (a, u1) {
                if (typeof a == "function" && u1 === void 0) return this.on("collideEnd", a);
                if (typeof a == "string") return this.on("collideEnd", (c1)=>c1.is(a) && u1(c1));
            },
            hasPoint (a) {
                return _n(this.worldArea(), a);
            },
            resolveCollision (a) {
                let u1 = this.checkCollision(a);
                u1 && !u1.resolved && (this.pos = this.pos.add(u1.displacement), u1.resolved = !0);
            },
            localArea () {
                return this.area.shape ? this.area.shape : this.renderArea();
            },
            worldArea () {
                let a = this.localArea();
                if (!(a instanceof ze || a instanceof le)) throw new Error("Only support polygon and rect shapes for now");
                let u1 = this.transform.clone().scale(T(this.area.scale ?? 1)).translate(this.area.offset);
                if (a instanceof le) {
                    let c1 = ct(this.anchor || en).add(1, 1).scale(-0.5).scale(a.width, a.height);
                    u1.translate(c1);
                }
                return a.transform(u1);
            },
            screenArea () {
                let a = this.worldArea();
                return pt(this) ? a : a.transform(C.cam.transform);
            }
        };
    }
    i(Ss, "area");
    function Qe(t1) {
        return {
            color: t1.color,
            opacity: t1.opacity,
            anchor: t1.anchor,
            outline: t1.outline,
            shader: t1.shader,
            uniform: t1.uniform
        };
    }
    i(Qe, "getRenderProps");
    function Cn(t1, r = {}) {
        let s1 = null, a = null, u1 = null, c1 = new be;
        if (!t1) throw new Error("Please pass the resource name or data to sprite()");
        let f = i((b1, g1, l1, w)=>{
            let A = T(1, 1);
            return l1 && w ? (A.x = l1 / (b1.width * g1.w), A.y = w / (b1.height * g1.h)) : l1 ? (A.x = l1 / (b1.width * g1.w), A.y = A.x) : w && (A.y = w / (b1.height * g1.h), A.x = A.y), A;
        }, "calcTexScale");
        return {
            id: "sprite",
            width: 0,
            height: 0,
            frame: r.frame || 0,
            quad: r.quad || new ae(0, 0, 1, 1),
            animSpeed: r.animSpeed ?? 1,
            flipX: r.flipX ?? !1,
            flipY: r.flipY ?? !1,
            draw () {
                if (!s1) return;
                let b1 = s1.frames[this.frame ?? 0];
                if (!b1) throw new Error(`Frame not found: ${this.frame ?? 0}`);
                if (s1.slice9) {
                    let { left: g1, right: l1, top: w, bottom: A } = s1.slice9, D = s1.tex.width * b1.w, N = s1.tex.height * b1.h, _ = this.width - g1 - l1, M1 = this.height - w - A, P = g1 / D, oe = l1 / D, Q = 1 - P - oe, H = w / N, V = A / N, fe = 1 - H - V, E = [
                        ce(0, 0, P, H),
                        ce(P, 0, Q, H),
                        ce(P + Q, 0, oe, H),
                        ce(0, H, P, fe),
                        ce(P, H, Q, fe),
                        ce(P + Q, H, oe, fe),
                        ce(0, H + fe, P, V),
                        ce(P, H + fe, Q, V),
                        ce(P + Q, H + fe, oe, V),
                        ce(0, 0, g1, w),
                        ce(g1, 0, _, w),
                        ce(g1 + _, 0, l1, w),
                        ce(0, w, g1, M1),
                        ce(g1, w, _, M1),
                        ce(g1 + _, w, l1, M1),
                        ce(0, w + M1, g1, A),
                        ce(g1, w + M1, _, A),
                        ce(g1 + _, w + M1, l1, A)
                    ];
                    for(let G = 0; G < 9; G++){
                        let B = E[G], L = E[G + 9];
                        Ye(Object.assign(Qe(this), {
                            pos: L.pos(),
                            tex: s1.tex,
                            quad: b1.scale(B),
                            flipX: this.flipX,
                            flipY: this.flipY,
                            tiled: r.tiled,
                            width: L.w,
                            height: L.h
                        }));
                    }
                } else Ye(Object.assign(Qe(this), {
                    tex: s1.tex,
                    quad: b1.scale(this.quad ?? new ae(0, 0, 1, 1)),
                    flipX: this.flipX,
                    flipY: this.flipY,
                    tiled: r.tiled,
                    width: this.width,
                    height: this.height
                }));
            },
            add () {
                let b1 = i((l1)=>{
                    let w = l1.frames[0].clone();
                    r.quad && (w = w.scale(r.quad));
                    let A = f(l1.tex, w, r.width, r.height);
                    this.width = l1.tex.width * w.w * A.x, this.height = l1.tex.height * w.h * A.y, r.anim && this.play(r.anim), s1 = l1, c1.trigger(s1);
                }, "setSpriteData"), g1 = ht(t1);
                g1 ? g1.onLoad(b1) : An(()=>b1(ht(t1).data));
            },
            update () {
                if (!a) return;
                let b1 = s1.anims[a.name];
                if (typeof b1 == "number") {
                    this.frame = b1;
                    return;
                }
                if (b1.speed === 0) throw new Error("Sprite anim speed cannot be 0");
                a.timer += De() * this.animSpeed, a.timer >= 1 / a.speed && (a.timer = 0, this.frame += u1, (this.frame < Math.min(b1.from, b1.to) || this.frame > Math.max(b1.from, b1.to)) && (a.loop ? a.pingpong ? (this.frame -= u1, u1 *= -1, this.frame += u1) : this.frame = b1.from : (this.frame = b1.to, a.onEnd(), this.stop())));
            },
            play (b1, g1 = {}) {
                if (!s1) {
                    c1.add(()=>this.play(b1, g1));
                    return;
                }
                let l1 = s1.anims[b1];
                if (l1 === void 0) throw new Error(`Anim not found: ${b1}`);
                a && this.stop(), a = typeof l1 == "number" ? {
                    name: b1,
                    timer: 0,
                    loop: !1,
                    pingpong: !1,
                    speed: 0,
                    onEnd: ()=>{}
                } : {
                    name: b1,
                    timer: 0,
                    loop: g1.loop ?? l1.loop ?? !1,
                    pingpong: g1.pingpong ?? l1.pingpong ?? !1,
                    speed: g1.speed ?? l1.speed ?? 10,
                    onEnd: g1.onEnd ?? (()=>{})
                }, u1 = typeof l1 == "number" ? null : l1.from < l1.to ? 1 : -1, this.frame = typeof l1 == "number" ? l1 : l1.from, this.trigger("animStart", b1);
            },
            stop () {
                if (!a) return;
                let b1 = a.name;
                a = null, this.trigger("animEnd", b1);
            },
            numFrames () {
                return s1?.frames.length ?? 0;
            },
            curAnim () {
                return a?.name;
            },
            onAnimEnd (b1) {
                return this.on("animEnd", b1);
            },
            onAnimStart (b1) {
                return this.on("animStart", b1);
            },
            renderArea () {
                return new le(T(0), this.width, this.height);
            },
            inspect () {
                if (typeof t1 == "string") return `"${t1}"`;
            }
        };
    }
    i(Cn, "sprite");
    function Cs(t1, r = {}) {
        function s1(u1) {
            let c1 = Xe(Object.assign(Qe(u1), {
                text: u1.text + "",
                size: u1.textSize,
                font: u1.font,
                width: r.width && u1.width,
                align: u1.align,
                letterSpacing: u1.letterSpacing,
                lineSpacing: u1.lineSpacing,
                transform: u1.textTransform,
                styles: u1.textStyles
            }));
            return r.width || (u1.width = c1.width / (u1.scale?.x || 1)), u1.height = c1.height / (u1.scale?.y || 1), c1;
        }
        i(s1, "update");
        let a = {
            id: "text",
            set text (u){
                t1 = u, s1(this);
            },
            get text () {
                return t1;
            },
            textSize: r.size ?? Vi,
            font: r.font,
            width: r.width ?? 0,
            height: 0,
            align: r.align,
            lineSpacing: r.lineSpacing,
            letterSpacing: r.letterSpacing,
            textTransform: r.transform,
            textStyles: r.styles,
            add () {
                An(()=>s1(this));
            },
            draw () {
                Je(s1(this));
            },
            renderArea () {
                return new le(T(0), this.width, this.height);
            }
        };
        return s1(a), a;
    }
    i(Cs, "text");
    function Ts(t1, r = {}) {
        if (t1.length < 3) throw new Error(`Polygon's need more than two points, ${t1.length} points provided`);
        return {
            id: "polygon",
            pts: t1,
            colors: r.colors,
            radius: r.radius,
            draw () {
                te(Object.assign(Qe(this), {
                    pts: this.pts,
                    colors: this.colors,
                    radius: this.radius,
                    fill: r.fill
                }));
            },
            renderArea () {
                return new ze(this.pts);
            },
            inspect () {
                return this.pts.map((s1)=>`[${s1.x},${s1.y}]`).join(",");
            }
        };
    }
    i(Ts, "polygon");
    function As(t1, r, s1 = {}) {
        return {
            id: "rect",
            width: t1,
            height: r,
            radius: s1.radius || 0,
            draw () {
                ge(Object.assign(Qe(this), {
                    width: this.width,
                    height: this.height,
                    radius: this.radius,
                    fill: s1.fill
                }));
            },
            renderArea () {
                return new le(T(0), this.width, this.height);
            },
            inspect () {
                return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
            }
        };
    }
    i(As, "rect");
    function Os(t1, r) {
        return {
            id: "rect",
            width: t1,
            height: r,
            draw () {
                Ce(Object.assign(Qe(this), {
                    width: this.width,
                    height: this.height
                }));
            },
            renderArea () {
                return new le(T(0), this.width, this.height);
            },
            inspect () {
                return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
            }
        };
    }
    i(Os, "uvquad");
    function Rs(t1, r = {}) {
        return {
            id: "circle",
            radius: t1,
            draw () {
                O(Object.assign(Qe(this), {
                    radius: this.radius,
                    fill: r.fill
                }));
            },
            renderArea () {
                return new le(new y(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
            },
            inspect () {
                return `${Math.ceil(this.radius)}`;
            }
        };
    }
    i(Rs, "circle");
    function Ps(t1 = 1, r = ee(0, 0, 0)) {
        return {
            id: "outline",
            outline: {
                width: t1,
                color: r
            }
        };
    }
    i(Ps, "outline");
    function Tn() {
        return {
            id: "timer",
            wait (t1, r) {
                let s1 = [];
                r && s1.push(r);
                let a = 0, u1 = this.onUpdate(()=>{
                    a += De(), a >= t1 && (s1.forEach((c1)=>c1()), u1.cancel());
                });
                return {
                    get paused () {
                        return u1.paused;
                    },
                    set paused (c){
                        u1.paused = c;
                    },
                    cancel: u1.cancel,
                    onEnd (c1) {
                        s1.push(c1);
                    },
                    then (c1) {
                        return this.onEnd(c1), this;
                    }
                };
            },
            loop (t1, r) {
                let s1 = null, a = i(()=>{
                    s1 = this.wait(t1, a), r();
                }, "newAction");
                return s1 = this.wait(0, a), {
                    get paused () {
                        return s1.paused;
                    },
                    set paused (u){
                        s1.paused = u;
                    },
                    cancel: ()=>s1.cancel()
                };
            },
            tween (t1, r, s1, a, u1 = Et.linear) {
                let c1 = 0, f = [], b1 = this.onUpdate(()=>{
                    c1 += De();
                    let g1 = Math.min(c1 / s1, 1);
                    a(Ie(t1, r, u1(g1))), g1 === 1 && (b1.cancel(), a(r), f.forEach((l1)=>l1()));
                });
                return {
                    get paused () {
                        return b1.paused;
                    },
                    set paused (g){
                        b1.paused = g;
                    },
                    onEnd (g1) {
                        f.push(g1);
                    },
                    then (g1) {
                        return this.onEnd(g1), this;
                    },
                    cancel () {
                        b1.cancel();
                    },
                    finish () {
                        b1.cancel(), a(r), f.forEach((g1)=>g1());
                    }
                };
            }
        };
    }
    i(Tn, "timer");
    let Ds = 640, Ms = 65536;
    function Gs(t1 = {}) {
        let r = T(0), s1 = null, a = null, u1 = !1;
        return {
            id: "body",
            require: [
                "pos",
                "area"
            ],
            jumpForce: t1.jumpForce ?? Ds,
            gravityScale: t1.gravityScale ?? 1,
            isStatic: t1.isStatic ?? !1,
            mass: t1.mass ?? 1,
            add () {
                if (this.mass === 0) throw new Error("Can't set body mass to 0");
                this.onCollideUpdate((c1, f)=>{
                    if (c1.is("body") && !f.resolved && (this.trigger("beforePhysicsResolve", f), c1.trigger("beforePhysicsResolve", f.reverse()), !f.resolved && !(this.isStatic && c1.isStatic))) {
                        if (!this.isStatic && !c1.isStatic) {
                            let b1 = this.mass + c1.mass;
                            this.pos = this.pos.add(f.displacement.scale(c1.mass / b1)), c1.pos = c1.pos.add(f.displacement.scale(-this.mass / b1)), this.transform = kt(this), c1.transform = kt(c1);
                        } else {
                            let b1 = !this.isStatic && c1.isStatic ? f : f.reverse();
                            b1.source.pos = b1.source.pos.add(b1.displacement), b1.source.transform = kt(b1.source);
                        }
                        f.resolved = !0, this.trigger("physicsResolve", f), c1.trigger("physicsResolve", f.reverse());
                    }
                }), this.onPhysicsResolve((c1)=>{
                    C.gravity && (c1.isBottom() && this.isFalling() ? (r.y = 0, s1 = c1.target, a = c1.target.pos, u1 ? u1 = !1 : this.trigger("ground", s1)) : c1.isTop() && this.isJumping() && (r.y = 0, this.trigger("headbutt", c1.target)));
                });
            },
            update () {
                if (!C.gravity || this.isStatic) return;
                if (u1 && (s1 = null, a = null, this.trigger("fallOff"), u1 = !1), s1) {
                    if (!this.isColliding(s1) || !s1.exists() || !s1.is("body")) u1 = !0;
                    else {
                        !s1.pos.eq(a) && t1.stickToPlatform !== !1 && this.moveBy(s1.pos.sub(a)), a = s1.pos;
                        return;
                    }
                }
                let c1 = r.y;
                r.y += C.gravity * this.gravityScale * De(), r.y = Math.min(r.y, t1.maxVelocity ?? Ms), c1 < 0 && r.y >= 0 && this.trigger("fall"), this.move(r);
            },
            onPhysicsResolve (c1) {
                return this.on("physicsResolve", c1);
            },
            onBeforePhysicsResolve (c1) {
                return this.on("beforePhysicsResolve", c1);
            },
            curPlatform () {
                return s1;
            },
            isGrounded () {
                return s1 !== null;
            },
            isFalling () {
                return r.y > 0;
            },
            isJumping () {
                return r.y < 0;
            },
            jump (c1) {
                s1 = null, a = null, r.y = -c1 || -this.jumpForce;
            },
            onGround (c1) {
                return this.on("ground", c1);
            },
            onFall (c1) {
                return this.on("fall", c1);
            },
            onFallOff (c1) {
                return this.on("fallOff", c1);
            },
            onHeadbutt (c1) {
                return this.on("headbutt", c1);
            }
        };
    }
    i(Gs, "body");
    function Bs(t1 = 2) {
        let r = t1;
        return {
            id: "doubleJump",
            require: [
                "body"
            ],
            numJumps: t1,
            add () {
                this.onGround(()=>{
                    r = this.numJumps;
                });
            },
            doubleJump (s1) {
                r <= 0 || (r < this.numJumps && this.trigger("doubleJump"), r--, this.jump(s1));
            },
            onDoubleJump (s1) {
                return this.on("doubleJump", s1);
            },
            inspect () {
                return `${r}`;
            }
        };
    }
    i(Bs, "doubleJump");
    function Fs(t1, r) {
        return {
            id: "shader",
            shader: t1,
            ...typeof r == "function" ? {
                uniform: r(),
                update () {
                    this.uniform = r();
                }
            } : {
                uniform: r
            }
        };
    }
    i(Fs, "shader");
    function Is() {
        return {
            id: "fixed",
            fixed: !0
        };
    }
    i(Is, "fixed");
    function rr(t1) {
        return {
            id: "stay",
            stay: !0,
            scenesToStay: t1
        };
    }
    i(rr, "stay");
    function Ls(t1, r) {
        if (t1 == null) throw new Error("health() requires the initial amount of hp");
        return {
            id: "health",
            hurt (s1 = 1) {
                this.setHP(t1 - s1), this.trigger("hurt", s1);
            },
            heal (s1 = 1) {
                let a = t1;
                this.setHP(t1 + s1), this.trigger("heal", t1 - a);
            },
            hp () {
                return t1;
            },
            maxHP () {
                return r ?? null;
            },
            setMaxHP (s1) {
                r = s1;
            },
            setHP (s1) {
                t1 = r ? Math.min(r, s1) : s1, t1 <= 0 && this.trigger("death");
            },
            onHurt (s1) {
                return this.on("hurt", s1);
            },
            onHeal (s1) {
                return this.on("heal", s1);
            },
            onDeath (s1) {
                return this.on("death", s1);
            },
            inspect () {
                return `${t1}`;
            }
        };
    }
    i(Ls, "health");
    function Vs(t1, r = {}) {
        if (t1 == null) throw new Error("lifespan() requires time");
        let s1 = r.fade ?? 0;
        return {
            id: "lifespan",
            async add () {
                await ar(t1), s1 > 0 && this.opacity && await Rn(this.opacity, 0, s1, (a)=>this.opacity = a, Et.linear), this.destroy();
            }
        };
    }
    i(Vs, "lifespan");
    function _s(t1, r, s1) {
        if (!t1) throw new Error("state() requires an initial state");
        let a = {};
        function u1(g1) {
            a[g1] || (a[g1] = {
                enter: new be,
                end: new be,
                update: new be,
                draw: new be
            });
        }
        i(u1, "initStateEvents");
        function c1(g1, l1, w) {
            return u1(l1), a[l1][g1].add(w);
        }
        i(c1, "on");
        function f(g1, l1, ...w) {
            u1(l1), a[l1][g1].trigger(...w);
        }
        i(f, "trigger");
        let b1 = !1;
        return {
            id: "state",
            state: t1,
            enterState (g1, ...l1) {
                if (b1 = !0, r && !r.includes(g1)) throw new Error(`State not found: ${g1}`);
                let w = this.state;
                if (s1) {
                    if (!s1?.[w]) return;
                    let A = typeof s1[w] == "string" ? [
                        s1[w]
                    ] : s1[w];
                    if (!A.includes(g1)) throw new Error(`Cannot transition state from "${w}" to "${g1}". Available transitions: ${A.map((D)=>`"${D}"`).join(", ")}`);
                }
                f("end", w, ...l1), this.state = g1, f("enter", g1, ...l1), f("enter", `${w} -> ${g1}`, ...l1);
            },
            onStateTransition (g1, l1, w) {
                return c1("enter", `${g1} -> ${l1}`, w);
            },
            onStateEnter (g1, l1) {
                return c1("enter", g1, l1);
            },
            onStateUpdate (g1, l1) {
                return c1("update", g1, l1);
            },
            onStateDraw (g1, l1) {
                return c1("draw", g1, l1);
            },
            onStateEnd (g1, l1) {
                return c1("end", g1, l1);
            },
            update () {
                b1 || (f("enter", t1), b1 = !0), f("update", this.state);
            },
            draw () {
                f("draw", this.state);
            },
            inspect () {
                return this.state;
            }
        };
    }
    i(_s, "state");
    function ks(t1 = 1) {
        let r = 0, s1 = !1;
        return {
            require: [
                "opacity"
            ],
            add () {
                this.opacity = 0;
            },
            update () {
                s1 || (r += De(), this.opacity = Le(r, 0, t1, 0, 1), r >= t1 && (this.opacity = 1, s1 = !0));
            }
        };
    }
    i(ks, "fadeIn");
    function Ns(t1 = "intersect") {
        return {
            id: "mask",
            mask: t1
        };
    }
    i(Ns, "mask");
    function js(t1) {
        return {
            add () {
                this.canvas = t1;
            }
        };
    }
    i(js, "drawon");
    function An(t1) {
        j.loaded ? t1() : C.events.on("load", t1);
    }
    i(An, "onLoad");
    function Hs(t1, r) {
        C.scenes[t1] = r;
    }
    i(Hs, "scene");
    function qs(t1, ...r) {
        if (!C.scenes[t1]) throw new Error(`Scene not found: ${t1}`);
        C.events.onOnce("frameEnd", ()=>{
            C.events.trigger("sceneLeave", t1), v.events.clear(), C.events.clear(), C.objEvents.clear(), [
                ...C.root.children
            ].forEach((s1)=>{
                (!s1.stay || s1.scenesToStay && !s1.scenesToStay.includes(t1)) && C.root.remove(s1);
            }), C.root.clearEvents(), dr(), C.cam = {
                pos: null,
                scale: T(1),
                angle: 0,
                shake: 0,
                transform: new Ue
            }, C.scenes[t1](...r);
        });
    }
    i(qs, "go");
    function $s(t1) {
        return C.events.on("sceneLeave", t1);
    }
    i($s, "onSceneLeave");
    function zs(t1, r) {
        try {
            return JSON.parse(window.localStorage[t1]);
        } catch  {
            return r ? (sr(t1, r), r) : null;
        }
    }
    i(zs, "getData");
    function sr(t1, r) {
        window.localStorage[t1] = JSON.stringify(r);
    }
    i(sr, "setData");
    function ir(t1, ...r) {
        let s1 = t1(Ze), a;
        typeof s1 == "function" ? a = s1(...r)(Ze) : a = s1;
        for(let u1 in a)Ze[u1] = a[u1], n.global !== !1 && (window[u1] = a[u1]);
        return Ze;
    }
    i(ir, "plug");
    function qt() {
        return T(we() / 2, xe() / 2);
    }
    i(qt, "center");
    let Ks;
    ((P)=>(P[P.None = 0] = "None", P[P.Left = 1] = "Left", P[P.Top = 2] = "Top", P[P.LeftTop = 3] = "LeftTop", P[P.Right = 4] = "Right", P[P.Horizontal = 5] = "Horizontal", P[P.RightTop = 6] = "RightTop", P[P.HorizontalTop = 7] = "HorizontalTop", P[P.Bottom = 8] = "Bottom", P[P.LeftBottom = 9] = "LeftBottom", P[P.Vertical = 10] = "Vertical", P[P.LeftVertical = 11] = "LeftVertical", P[P.RightBottom = 12] = "RightBottom", P[P.HorizontalBottom = 13] = "HorizontalBottom", P[P.RightVertical = 14] = "RightVertical", P[P.All = 15] = "All"))(Ks ||= {});
    function or(t1 = {}) {
        let r = T(0), s1 = t1.isObstacle ?? !1, a = t1.cost ?? 0, u1 = t1.edges ?? [], c1 = i(()=>{
            let b1 = {
                left: 1,
                top: 2,
                right: 4,
                bottom: 8
            };
            return u1.map((g1)=>b1[g1] || 0).reduce((g1, l1)=>g1 | l1, 0);
        }, "getEdgeMask"), f = c1();
        return {
            id: "tile",
            tilePosOffset: t1.offset ?? T(0),
            set tilePos (b){
                let g1 = this.getLevel();
                r = b.clone(), this.pos = T(this.tilePos.x * g1.tileWidth(), this.tilePos.y * g1.tileHeight()).add(this.tilePosOffset);
            },
            get tilePos () {
                return r;
            },
            set isObstacle (b){
                s1 !== b && (s1 = b, this.getLevel().invalidateNavigationMap());
            },
            get isObstacle () {
                return s1;
            },
            set cost (b){
                a !== b && (a = b, this.getLevel().invalidateNavigationMap());
            },
            get cost () {
                return a;
            },
            set edges (b){
                u1 = b, f = c1(), this.getLevel().invalidateNavigationMap();
            },
            get edges () {
                return u1;
            },
            get edgeMask () {
                return f;
            },
            getLevel () {
                return this.parent;
            },
            moveLeft () {
                this.tilePos = this.tilePos.add(T(-1, 0));
            },
            moveRight () {
                this.tilePos = this.tilePos.add(T(1, 0));
            },
            moveUp () {
                this.tilePos = this.tilePos.add(T(0, -1));
            },
            moveDown () {
                this.tilePos = this.tilePos.add(T(0, 1));
            }
        };
    }
    i(or, "tile");
    function Ys(t1, r) {
        if (!r.tileWidth || !r.tileHeight) throw new Error("Must provide tileWidth and tileHeight.");
        let s1 = gt([
            jt(r.pos ?? T(0))
        ]), a = t1.length, u1 = 0, c1 = null, f = null, b1 = null, g1 = null, l1 = i((E)=>E.x + E.y * u1, "tile2Hash"), w = i((E)=>T(Math.floor(E % u1), Math.floor(E / u1)), "hash2Tile"), A = i(()=>{
            c1 = [];
            for (let E of s1.children)D(E);
        }, "createSpatialMap"), D = i((E)=>{
            let G = l1(E.tilePos);
            c1[G] ? c1[G].push(E) : c1[G] = [
                E
            ];
        }, "insertIntoSpatialMap"), N = i((E)=>{
            let G = l1(E.tilePos);
            if (c1[G]) {
                let B = c1[G].indexOf(E);
                B >= 0 && c1[G].splice(B, 1);
            }
        }, "removeFromSpatialMap"), _ = i(()=>{
            let E = !1;
            for (let G of s1.children){
                let B = s1.pos2Tile(G.pos);
                (G.tilePos.x != B.x || G.tilePos.y != B.y) && (E = !0, N(G), G.tilePos.x = B.x, G.tilePos.y = B.y, D(G));
            }
            E && s1.trigger("spatial_map_changed");
        }, "updateSpatialMap"), M1 = i(()=>{
            let E = s1.getSpatialMap(), G = s1.numRows() * s1.numColumns();
            f ? f.length = G : f = new Array(G), f.fill(1, 0, G);
            for(let B = 0; B < E.length; B++){
                let L = E[B];
                if (L) {
                    let K = 0;
                    for (let Z of L)if (Z.isObstacle) {
                        K = 1 / 0;
                        break;
                    } else K += Z.cost;
                    f[B] = K || 1;
                }
            }
        }, "createCostMap"), P = i(()=>{
            let E = s1.getSpatialMap(), G = s1.numRows() * s1.numColumns();
            b1 ? b1.length = G : b1 = new Array(G), b1.fill(15, 0, G);
            for(let B = 0; B < E.length; B++){
                let L = E[B];
                if (L) {
                    let K = L.length, Z = 15;
                    for(let ue = 0; ue < K; ue++)Z |= L[ue].edgeMask;
                    b1[B] = Z;
                }
            }
        }, "createEdgeMap"), oe = i(()=>{
            let E = s1.numRows() * s1.numColumns(), G = i((L, K)=>{
                let Z = [];
                for(Z.push(L); Z.length > 0;){
                    let ue = Z.pop();
                    V(ue).forEach((me)=>{
                        g1[me] < 0 && (g1[me] = K, Z.push(me));
                    });
                }
            }, "traverse");
            g1 ? g1.length = E : g1 = new Array(E), g1.fill(-1, 0, E);
            let B = 0;
            for(let L = 0; L < f.length; L++){
                if (g1[L] >= 0) {
                    B++;
                    continue;
                }
                G(L, B), B++;
            }
        }, "createConnectivityMap"), Q = i((E, G)=>f[G], "getCost"), H = i((E, G)=>{
            let B = w(E), L = w(G);
            return B.dist(L);
        }, "getHeuristic"), V = i((E, G)=>{
            let B = [], L = Math.floor(E % u1), K = L > 0 && b1[E] & 1 && f[E - 1] !== 1 / 0, Z = E >= u1 && b1[E] & 2 && f[E - u1] !== 1 / 0, ue = L < u1 - 1 && b1[E] & 4 && f[E + 1] !== 1 / 0, me = E < u1 * a - u1 - 1 && b1[E] & 8 && f[E + u1] !== 1 / 0;
            return G ? (K && (Z && B.push(E - u1 - 1), B.push(E - 1), me && B.push(E + u1 - 1)), Z && B.push(E - u1), ue && (Z && B.push(E - u1 + 1), B.push(E + 1), me && B.push(E + u1 + 1)), me && B.push(E + u1)) : (K && B.push(E - 1), Z && B.push(E - u1), ue && B.push(E + 1), me && B.push(E + u1)), B;
        }, "getNeighbours"), fe = {
            id: "level",
            tileWidth () {
                return r.tileWidth;
            },
            tileHeight () {
                return r.tileHeight;
            },
            spawn (E, ...G) {
                let B = T(...G), L = (()=>{
                    if (typeof E == "string") {
                        if (r.tiles[E]) {
                            if (typeof r.tiles[E] != "function") throw new Error("Level symbol def must be a function returning a component list");
                            return r.tiles[E](B);
                        } else if (r.wildcardTile) return r.wildcardTile(E, B);
                    } else {
                        if (Array.isArray(E)) return E;
                        throw new Error("Expected a symbol or a component list");
                    }
                })();
                if (!L) return null;
                let K = !1, Z = !1;
                for (let me of L)me.id === "tile" && (Z = !0), me.id === "pos" && (K = !0);
                K || L.push(jt()), Z || L.push(or());
                let ue = s1.add(L);
                return K && (ue.tilePosOffset = ue.pos.clone()), ue.tilePos = B, c1 && (D(ue), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), ue;
            },
            numColumns () {
                return u1;
            },
            numRows () {
                return a;
            },
            levelWidth () {
                return u1 * this.tileWidth();
            },
            levelHeight () {
                return a * this.tileHeight();
            },
            tile2Pos (...E) {
                return T(...E).scale(this.tileWidth(), this.tileHeight());
            },
            pos2Tile (...E) {
                let G = T(...E);
                return T(Math.floor(G.x / this.tileWidth()), Math.floor(G.y / this.tileHeight()));
            },
            getSpatialMap () {
                return c1 || A(), c1;
            },
            onSpatialMapChanged (E) {
                return this.on("spatial_map_changed", E);
            },
            onNavigationMapInvalid (E) {
                return this.on("navigation_map_invalid", E);
            },
            getAt (E) {
                c1 || A();
                let G = l1(E);
                return c1[G] || [];
            },
            update () {
                c1 && _();
            },
            invalidateNavigationMap () {
                f = null, b1 = null, g1 = null;
            },
            onNavigationMapChanged (E) {
                return this.on("navigation_map_changed", E);
            },
            getTilePath (E, G, B = {}) {
                if (f || M1(), b1 || P(), g1 || oe(), E.x < 0 || E.x >= u1 || E.y < 0 || E.y >= a || G.x < 0 || G.x >= u1 || G.y < 0 || G.y >= a) return null;
                let L = l1(E), K = l1(G);
                if (f[K] === 1 / 0) return null;
                if (L === K) return [];
                if (g1[L] != -1 && g1[L] !== g1[K]) return null;
                let Z = new zt((Ge, Mn)=>Ge.cost < Mn.cost);
                Z.insert({
                    cost: 0,
                    node: L
                });
                let ue = new Map;
                ue.set(L, L);
                let me = new Map;
                for(me.set(L, 0); Z.length !== 0;){
                    let Ge = Z.remove()?.node;
                    if (Ge === K) break;
                    let Mn = V(Ge, B.allowDiagonals);
                    for (let et of Mn){
                        let Gn = (me.get(Ge) || 0) + Q(Ge, et) + H(et, K);
                        (!me.has(et) || Gn < me.get(et)) && (me.set(et, Gn), Z.insert({
                            cost: Gn,
                            node: et
                        }), ue.set(et, Ge));
                    }
                }
                let Dn = [], wt = K, pi = w(wt);
                for(Dn.push(pi); wt !== L;){
                    wt = ue.get(wt);
                    let Ge = w(wt);
                    Dn.push(Ge);
                }
                return Dn.reverse();
            },
            getPath (E, G, B = {}) {
                let L = this.tileWidth(), K = this.tileHeight(), Z = this.getTilePath(this.pos2Tile(E), this.pos2Tile(G), B);
                return Z ? [
                    E,
                    ...Z.slice(1, -1).map((ue)=>ue.scale(L, K).add(L / 2, K / 2)),
                    G
                ] : null;
            }
        };
        return s1.use(fe), s1.onNavigationMapInvalid(()=>{
            s1.invalidateNavigationMap(), s1.trigger("navigation_map_changed");
        }), t1.forEach((E, G)=>{
            let B = E.split("");
            u1 = Math.max(B.length, u1), B.forEach((L, K)=>{
                s1.spawn(L, T(K, G));
            });
        }), s1;
    }
    i(Ys, "addLevel");
    function Ws(t1 = {}) {
        let r = null, s1 = null, a = null, u1 = null;
        return {
            id: "agent",
            require: [
                "pos",
                "tile"
            ],
            agentSpeed: t1.speed ?? 100,
            allowDiagonals: t1.allowDiagonals ?? !0,
            getDistanceToTarget () {
                return r ? this.pos.dist(r) : 0;
            },
            getNextLocation () {
                return s1 && a ? s1[a] : null;
            },
            getPath () {
                return s1 ? s1.slice() : null;
            },
            getTarget () {
                return r;
            },
            isNavigationFinished () {
                return s1 ? a === null : !0;
            },
            isTargetReachable () {
                return s1 !== null;
            },
            isTargetReached () {
                return r ? this.pos.eq(r) : !0;
            },
            setTarget (c1) {
                r = c1, s1 = this.getLevel().getPath(this.pos, r, {
                    allowDiagonals: this.allowDiagonals
                }), a = s1 ? 0 : null, s1 ? (u1 || (u1 = this.getLevel().onNavigationMapChanged(()=>{
                    s1 && a !== null && (s1 = this.getLevel().getPath(this.pos, r, {
                        allowDiagonals: this.allowDiagonals
                    }), a = s1 ? 0 : null, s1 ? this.trigger("navigation-next", this, s1[a]) : this.trigger("navigation-ended", this));
                }), this.onDestroy(()=>u1.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s1[a])) : this.trigger("navigation-ended", this);
            },
            update () {
                if (s1 && a !== null) {
                    if (this.pos.sdist(s1[a]) < 2) {
                        if (a === s1.length - 1) {
                            this.pos = r.clone(), a = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
                            return;
                        } else a++, this.trigger("navigation-next", this, s1[a]);
                    }
                    this.moveTo(s1[a], this.agentSpeed);
                }
            },
            onNavigationStarted (c1) {
                return this.on("navigation-started", c1);
            },
            onNavigationNext (c1) {
                return this.on("navigation-next", c1);
            },
            onNavigationEnded (c1) {
                return this.on("navigation-ended", c1);
            },
            onTargetReached (c1) {
                return this.on("target-reached", c1);
            },
            inspect () {
                return JSON.stringify({
                    target: JSON.stringify(r),
                    path: JSON.stringify(s1)
                });
            }
        };
    }
    i(Ws, "agent");
    function Xs(t1) {
        let r = v.canvas().captureStream(t1), s1 = ne.ctx.createMediaStreamDestination();
        ne.masterNode.connect(s1);
        let a = new MediaRecorder(r), u1 = [];
        return a.ondataavailable = (c1)=>{
            c1.data.size > 0 && u1.push(c1.data);
        }, a.onerror = ()=>{
            ne.masterNode.disconnect(s1), r.getTracks().forEach((c1)=>c1.stop());
        }, a.start(), {
            resume () {
                a.resume();
            },
            pause () {
                a.pause();
            },
            stop () {
                return a.stop(), ne.masterNode.disconnect(s1), r.getTracks().forEach((c1)=>c1.stop()), new Promise((c1)=>{
                    a.onstop = ()=>{
                        c1(new Blob(u1, {
                            type: "video/mp4"
                        }));
                    };
                });
            },
            download (c1 = "kaboom.mp4") {
                this.stop().then((f)=>Nn(c1, f));
            }
        };
    }
    i(Xs, "record");
    function Js() {
        return document.activeElement === v.canvas();
    }
    i(Js, "isFocused");
    function Qs(t1) {
        t1.destroy();
    }
    i(Qs, "destroy");
    let gt = C.root.add.bind(C.root), Zs = C.root.readd.bind(C.root), ei = C.root.removeAll.bind(C.root), On = C.root.get.bind(C.root), ar = C.root.wait.bind(C.root), ti = C.root.loop.bind(C.root), Rn = C.root.tween.bind(C.root);
    function ur(t1 = 2, r = 1) {
        let s1 = 0;
        return {
            require: [
                "scale"
            ],
            update () {
                let a = Math.sin(s1 * t1) * r;
                a < 0 && this.destroy(), this.scale = T(a), s1 += De();
            }
        };
    }
    i(ur, "boom");
    let ni = Ke(null, kr), ri = Ke(null, Nr);
    function si(t1, r = {}) {
        let s1 = gt([
            jt(t1),
            rr()
        ]), a = (r.speed || 1) * 5, u1 = r.scale || 1;
        s1.add([
            Cn(ri),
            Ht(0),
            Sn("center"),
            ur(a, u1),
            ...r.comps ?? []
        ]);
        let c1 = s1.add([
            Cn(ni),
            Ht(0),
            Sn("center"),
            Tn(),
            ...r.comps ?? []
        ]);
        return c1.wait(.4 / a, ()=>c1.use(ur(a, u1))), c1.onDestroy(()=>s1.destroy()), s1;
    }
    i(si, "addKaboom");
    function cr() {
        C.root.update();
    }
    i(cr, "updateFrame");
    class Pn {
        static #_ = i(this, "Collision");
        source;
        target;
        displacement;
        resolved = !1;
        constructor(r, s1, a, u1 = !1){
            this.source = r, this.target = s1, this.displacement = a, this.resolved = u1;
        }
        reverse() {
            return new Pn(this.target, this.source, this.displacement.scale(-1), this.resolved);
        }
        hasOverlap() {
            return !this.displacement.isZero();
        }
        isLeft() {
            return this.displacement.x > 0;
        }
        isRight() {
            return this.displacement.x < 0;
        }
        isTop() {
            return this.displacement.y > 0;
        }
        isBottom() {
            return this.displacement.y < 0;
        }
        preventResolution() {
            this.resolved = !0;
        }
    }
    function ii() {
        let t1 = {}, r = n.hashGridSize || _i, s1 = new Ue, a = [];
        function u1(c1) {
            if (a.push(s1.clone()), c1.pos && s1.translate(c1.pos), c1.scale && s1.scale(c1.scale), c1.angle && s1.rotate(c1.angle), c1.transform = s1.clone(), c1.c("area") && !c1.paused) {
                let f = c1, g1 = f.worldArea().bbox(), l1 = Math.floor(g1.pos.x / r), w = Math.floor(g1.pos.y / r), A = Math.ceil((g1.pos.x + g1.width) / r), D = Math.ceil((g1.pos.y + g1.height) / r), N = new Set;
                for(let _ = l1; _ <= A; _++)for(let M1 = w; M1 <= D; M1++)if (!t1[_]) t1[_] = {}, t1[_][M1] = [
                    f
                ];
                else if (!t1[_][M1]) t1[_][M1] = [
                    f
                ];
                else {
                    let P = t1[_][M1];
                    e: for (let oe of P){
                        if (oe.paused || !oe.exists() || N.has(oe.id)) continue;
                        for (let H of f.collisionIgnore)if (oe.is(H)) continue e;
                        for (let H of oe.collisionIgnore)if (f.is(H)) continue e;
                        let Q = Cr(f.worldArea(), oe.worldArea());
                        if (Q) {
                            let H = new Pn(f, oe, Q);
                            f.trigger("collideUpdate", oe, H);
                            let V = H.reverse();
                            V.resolved = H.resolved, oe.trigger("collideUpdate", f, V);
                        }
                        N.add(oe.id);
                    }
                    P.push(f);
                }
            }
            c1.children.forEach(u1), s1 = a.pop();
        }
        i(u1, "checkObj"), u1(C.root);
    }
    i(ii, "checkFrame");
    function oi() {
        let t1 = C.cam, r = y.fromAngle(xt(0, 360)).scale(t1.shake);
        t1.shake = Ie(t1.shake, 0, 5 * De()), t1.transform = new Ue().translate(qt()).scale(t1.scale).rotate(t1.angle).translate((t1.pos ?? qt()).scale(-1).add(r)), C.root.draw(), Pe();
    }
    i(oi, "drawFrame");
    function ai() {
        let t1 = q();
        C.events.numListeners("loading") > 0 ? C.events.trigger("loading", t1) : pe(()=>{
            let r = we() / 2, s1 = 24, a = T(we() / 2, xe() / 2).sub(T(r / 2, s1 / 2));
            ge({
                pos: T(0),
                width: we(),
                height: xe(),
                color: ee(0, 0, 0)
            }), ge({
                pos: a,
                width: r,
                height: s1,
                fill: !1,
                outline: {
                    width: 4
                }
            }), ge({
                pos: a,
                width: r * t1,
                height: s1
            });
        });
    }
    i(ai, "drawLoadScreen");
    function hr(t1, r) {
        pe(()=>{
            let s1 = T(8);
            X(), re(t1);
            let a = Xe({
                text: r,
                font: tn,
                size: 16,
                pos: s1,
                color: ee(255, 255, 255),
                fixed: !0
            }), u1 = a.width + s1.x * 2, c1 = a.height + s1.x * 2;
            t1.x + u1 >= we() && re(T(-u1, 0)), t1.y + c1 >= xe() && re(T(0, -c1)), ge({
                width: u1,
                height: c1,
                color: ee(0, 0, 0),
                radius: 4,
                opacity: .8,
                fixed: !0
            }), Je(a), he();
        });
    }
    i(hr, "drawInspectText");
    function ui() {
        if (se.inspect) {
            let t1 = null;
            for (let r of C.root.get("*", {
                recursive: !0
            }))if (r.c("area") && r.isHovering()) {
                t1 = r;
                break;
            }
            if (C.root.drawInspect(), t1) {
                let r = [], s1 = t1.inspect();
                for(let a in s1)s1[a] ? r.push(`${a}: ${s1[a]}`) : r.push(`${a}`);
                hr(Qr(_t()), r.join(`
`));
            }
            hr(T(8), `FPS: ${se.fps()}`);
        }
        se.paused && pe(()=>{
            X(), re(we(), 0), re(-8, 8);
            let t1 = 32;
            ge({
                width: t1,
                height: t1,
                anchor: "topright",
                color: ee(0, 0, 0),
                opacity: .8,
                radius: 4,
                fixed: !0
            });
            for(let r = 1; r <= 2; r++)ge({
                width: 4,
                height: t1 * .6,
                anchor: "center",
                pos: T(-t1 / 3 * r, t1 * .5),
                color: ee(255, 255, 255),
                radius: 2,
                fixed: !0
            });
            he();
        }), se.timeScale !== 1 && pe(()=>{
            X(), re(we(), xe()), re(-8, -8);
            let t1 = 8, r = Xe({
                text: se.timeScale.toFixed(1),
                font: tn,
                size: 16,
                color: ee(255, 255, 255),
                pos: T(-t1),
                anchor: "botright",
                fixed: !0
            });
            ge({
                width: r.width + t1 * 2 + t1 * 4,
                height: r.height + t1 * 2,
                anchor: "botright",
                color: ee(0, 0, 0),
                opacity: .8,
                radius: 4,
                fixed: !0
            });
            for(let s1 = 0; s1 < 2; s1++){
                let a = se.timeScale < 1;
                x({
                    p1: T(-r.width - t1 * (a ? 2 : 3.5), -t1),
                    p2: T(-r.width - t1 * (a ? 2 : 3.5), -t1 - r.height),
                    p3: T(-r.width - t1 * (a ? 3.5 : 2), -t1 - r.height / 2),
                    pos: T(-s1 * t1 * 1 + (a ? -t1 * .5 : 0), 0),
                    color: ee(255, 255, 255),
                    fixed: !0
                });
            }
            Je(r), he();
        }), se.curRecording && pe(()=>{
            X(), re(0, xe()), re(24, -24), O({
                radius: 12,
                color: ee(255, 0, 0),
                opacity: In(0, 1, v.time() * 4),
                fixed: !0
            }), he();
        }), se.showLog && C.logs.length > 0 && pe(()=>{
            X(), re(0, xe()), re(8, -8);
            let t1 = 8, r = [];
            for (let a of C.logs){
                let u1 = "", c1 = a.msg instanceof Error ? "error" : "info";
                u1 += `[time]${a.time.toFixed(2)}[/time]`, u1 += " ", u1 += `[${c1}]${a.msg?.toString ? a.msg.toString() : a.msg}[/${c1}]`, r.push(u1);
            }
            C.logs = C.logs.filter((a)=>v.time() - a.time < (n.logTime || Ni));
            let s1 = Xe({
                text: r.join(`
`),
                font: tn,
                pos: T(t1, -t1),
                anchor: "botleft",
                size: 16,
                width: we() * .6,
                lineSpacing: t1 / 2,
                fixed: !0,
                styles: {
                    time: {
                        color: ee(127, 127, 127)
                    },
                    info: {
                        color: ee(255, 255, 255)
                    },
                    error: {
                        color: ee(255, 0, 127)
                    }
                }
            });
            ge({
                width: s1.width + t1 * 2,
                height: s1.height + t1 * 2,
                anchor: "botleft",
                color: ee(0, 0, 0),
                radius: 4,
                opacity: .8,
                fixed: !0
            }), Je(s1), he();
        });
    }
    i(ui, "drawDebug");
    function ci(t1) {
        C.events.on("loading", t1);
    }
    i(ci, "onLoading");
    function hi(t1) {
        v.onResize(t1);
    }
    i(hi, "onResize");
    function li(t1) {
        C.events.on("error", t1);
    }
    i(li, "onError");
    function di(t1) {
        ne.ctx.suspend(), v.run(()=>{
            pe(()=>{
                let a = we(), u1 = xe(), c1 = {
                    size: 36,
                    width: a - 64,
                    letterSpacing: 4,
                    lineSpacing: 4,
                    font: tn,
                    fixed: !0
                };
                ge({
                    width: a,
                    height: u1,
                    color: ee(0, 0, 255),
                    fixed: !0
                });
                let f = Xe({
                    ...c1,
                    text: "Error",
                    pos: T(32),
                    color: ee(255, 128, 0),
                    fixed: !0
                });
                Je(f), Qn({
                    ...c1,
                    text: t1.message,
                    pos: T(32, 32 + f.height + 16),
                    fixed: !0
                }), he(), C.events.trigger("error", t1);
            });
        });
    }
    i(di, "handleErr");
    function fi(t1) {
        z.push(t1);
    }
    i(fi, "onCleanup");
    function mi() {
        C.events.onOnce("frameEnd", ()=>{
            v.quit(), S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT);
            let t1 = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
            for(let r = 0; r < t1; r++)S.activeTexture(S.TEXTURE0 + r), S.bindTexture(S.TEXTURE_2D, null), S.bindTexture(S.TEXTURE_CUBE_MAP, null);
            S.bindBuffer(S.ARRAY_BUFFER, null), S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null), S.bindRenderbuffer(S.RENDERBUFFER, null), S.bindFramebuffer(S.FRAMEBUFFER, null), $.destroy(), z.forEach((r)=>r());
        });
    }
    i(mi, "quit");
    let $t = !0;
    v.run(()=>{
        try {
            j.loaded || q() === 1 && !$t && (j.loaded = !0, C.events.trigger("load")), !j.loaded && n.loadingScreen !== !1 || $t ? (It(), ai(), ft()) : (se.paused || cr(), ii(), It(), oi(), n.debug !== !1 && ui(), ft()), $t && ($t = !1), C.events.trigger("frameEnd");
        } catch (t1) {
            di(t1);
        }
    });
    function lr() {
        let t1 = R, r = S.drawingBufferWidth / t1, s1 = S.drawingBufferHeight / t1;
        if (n.letterbox) {
            if (!n.width || !n.height) throw new Error("Letterboxing requires width and height defined.");
            let a = r / s1, u1 = n.width / n.height;
            if (a > u1) {
                let c1 = s1 * u1, f = (r - c1) / 2;
                U.viewport = {
                    x: f,
                    y: 0,
                    width: c1,
                    height: s1
                };
            } else {
                let c1 = r / u1, f = (s1 - c1) / 2;
                U.viewport = {
                    x: 0,
                    y: f,
                    width: r,
                    height: c1
                };
            }
            return;
        }
        if (n.stretch && (!n.width || !n.height)) throw new Error("Stretching requires width and height defined.");
        U.viewport = {
            x: 0,
            y: 0,
            width: r,
            height: s1
        };
    }
    i(lr, "updateViewport");
    function dr() {
        v.onHide(()=>{
            n.backgroundAudio || ne.ctx.suspend();
        }), v.onShow(()=>{
            n.backgroundAudio || ne.ctx.resume();
        }), v.onResize(()=>{
            if (v.isFullscreen()) return;
            let t1 = n.width && n.height;
            t1 && !n.stretch && !n.letterbox || (o.width = o.offsetWidth * R, o.height = o.offsetHeight * R, lr(), t1 || (U.frameBuffer.free(), U.frameBuffer = new rt($, S.drawingBufferWidth, S.drawingBufferHeight), U.width = S.drawingBufferWidth / R, U.height = S.drawingBufferHeight / R));
        }), n.debug !== !1 && (v.onKeyPress("f1", ()=>se.inspect = !se.inspect), v.onKeyPress("f2", ()=>se.clearLog()), v.onKeyPress("f8", ()=>se.paused = !se.paused), v.onKeyPress("f7", ()=>{
            se.timeScale = mt(Fe(se.timeScale - .2, 0, 2), 1);
        }), v.onKeyPress("f9", ()=>{
            se.timeScale = mt(Fe(se.timeScale + .2, 0, 2), 1);
        }), v.onKeyPress("f10", ()=>se.stepFrame())), n.burp && v.onKeyPress("b", ()=>Ft());
    }
    i(dr, "initEvents"), lr(), dr();
    let Ze = {
        VERSION: Ii,
        loadRoot: Ae,
        loadProgress: q,
        loadSprite: Ke,
        loadSpriteAtlas: Tt,
        loadSound: hn,
        loadBitmapFont: sn,
        loadFont: st,
        loadShader: un,
        loadShaderURL: cn,
        loadAseprite: an,
        loadPedit: on,
        loadBean: ln,
        loadJSON: ye,
        load: Te,
        getSprite: Ot,
        getSound: Rt,
        getFont: Pt,
        getBitmapFont: Dt,
        getShader: Mt,
        getAsset: dn,
        Asset: ve,
        SpriteData: W,
        SoundData: de,
        width: we,
        height: xe,
        center: qt,
        dt: De,
        time: v.time,
        screenshot: v.screenshot,
        record: Xs,
        isFocused: Js,
        setCursor: v.setCursor,
        getCursor: v.getCursor,
        setCursorLocked: v.setCursorLocked,
        isCursorLocked: v.isCursorLocked,
        setFullscreen: v.setFullscreen,
        isFullscreen: v.isFullscreen,
        isTouchscreen: v.isTouchscreen,
        onLoad: An,
        onLoading: ci,
        onResize: hi,
        onGamepadConnect: v.onGamepadConnect,
        onGamepadDisconnect: v.onGamepadDisconnect,
        onError: li,
        onCleanup: fi,
        camPos: Zr,
        camScale: es,
        camRot: ts,
        shake: ns,
        toScreen: er,
        toWorld: tr,
        setGravity: ds,
        getGravity: fs,
        setBackground: ms,
        getBackground: ps,
        getGamepads: v.getGamepads,
        add: gt,
        make: Un,
        destroy: Qs,
        destroyAll: ei,
        get: On,
        readd: Zs,
        pos: jt,
        scale: Ht,
        rotate: gs,
        color: ws,
        opacity: bs,
        anchor: Sn,
        area: Ss,
        sprite: Cn,
        text: Cs,
        polygon: Ts,
        rect: As,
        circle: Rs,
        uvquad: Os,
        outline: Ps,
        body: Gs,
        doubleJump: Bs,
        shader: Fs,
        timer: Tn,
        fixed: Is,
        stay: rr,
        health: Ls,
        lifespan: Vs,
        z: vs,
        move: xs,
        offscreen: Es,
        follow: ys,
        state: _s,
        fadeIn: ks,
        mask: Ns,
        drawon: js,
        tile: or,
        agent: Ws,
        on: $e,
        onUpdate: rs,
        onDraw: ss,
        onAdd: En,
        onDestroy: nr,
        onClick: us,
        onCollide: is,
        onCollideUpdate: os,
        onCollideEnd: as,
        onHover: cs,
        onHoverUpdate: hs,
        onHoverEnd: ls,
        onKeyDown: v.onKeyDown,
        onKeyPress: v.onKeyPress,
        onKeyPressRepeat: v.onKeyPressRepeat,
        onKeyRelease: v.onKeyRelease,
        onMouseDown: v.onMouseDown,
        onMousePress: v.onMousePress,
        onMouseRelease: v.onMouseRelease,
        onMouseMove: v.onMouseMove,
        onCharInput: v.onCharInput,
        onTouchStart: v.onTouchStart,
        onTouchMove: v.onTouchMove,
        onTouchEnd: v.onTouchEnd,
        onScroll: v.onScroll,
        onHide: v.onHide,
        onShow: v.onShow,
        onGamepadButtonDown: v.onGamepadButtonDown,
        onGamepadButtonPress: v.onGamepadButtonPress,
        onGamepadButtonRelease: v.onGamepadButtonRelease,
        onGamepadStick: v.onGamepadStick,
        mousePos: _t,
        mouseDeltaPos: v.mouseDeltaPos,
        isKeyDown: v.isKeyDown,
        isKeyPressed: v.isKeyPressed,
        isKeyPressedRepeat: v.isKeyPressedRepeat,
        isKeyReleased: v.isKeyReleased,
        isMouseDown: v.isMouseDown,
        isMousePressed: v.isMousePressed,
        isMouseReleased: v.isMouseReleased,
        isMouseMoved: v.isMouseMoved,
        isGamepadButtonPressed: v.isGamepadButtonPressed,
        isGamepadButtonDown: v.isGamepadButtonDown,
        isGamepadButtonReleased: v.isGamepadButtonReleased,
        getGamepadStick: v.getGamepadStick,
        charInputted: v.charInputted,
        loop: ti,
        wait: ar,
        play: Bt,
        volume: pn,
        burp: Ft,
        audioCtx: ne.ctx,
        Line: Be,
        Rect: le,
        Circle: yt,
        Polygon: ze,
        Vec2: y,
        Color: Y,
        Mat4: Ue,
        Quad: ae,
        RNG: bt,
        rand: xt,
        randi: Ln,
        randSeed: wr,
        vec2: T,
        rgb: ee,
        hsl2rgb: gr,
        quad: ce,
        choose: vr,
        chance: br,
        lerp: Ie,
        tween: Rn,
        easings: Et,
        map: Le,
        mapc: pr,
        wave: In,
        deg2rad: Me,
        rad2deg: at,
        clamp: Fe,
        testLineLine: ot,
        testRectRect: yr,
        testRectLine: xr,
        testRectPoint: vt,
        testCirclePolygon: Sr,
        testLinePoint: Ur,
        testLineCircle: Vn,
        drawSprite: Lt,
        drawText: Qn,
        formatText: Xe,
        drawRect: ge,
        drawLine: He,
        drawLines: d,
        drawTriangle: x,
        drawCircle: O,
        drawEllipse: k,
        drawUVQuad: Ce,
        drawPolygon: te,
        drawFormattedText: Je,
        drawMasked: Oe,
        drawSubtracted: qe,
        pushTransform: X,
        popTransform: he,
        pushTranslate: re,
        pushScale: Ne,
        pushRotate: je,
        pushMatrix: yn,
        usePostEffect: bn,
        makeCanvas: gn,
        debug: se,
        scene: Hs,
        go: qs,
        onSceneLeave: $s,
        addLevel: Ys,
        getData: zs,
        setData: sr,
        download: Yt,
        downloadJSON: Or,
        downloadText: kn,
        downloadBlob: Nn,
        plug: ir,
        ASCII_CHARS: jr,
        canvas: v.canvas(),
        addKaboom: si,
        LEFT: y.LEFT,
        RIGHT: y.RIGHT,
        UP: y.UP,
        DOWN: y.DOWN,
        RED: Y.RED,
        GREEN: Y.GREEN,
        BLUE: Y.BLUE,
        YELLOW: Y.YELLOW,
        MAGENTA: Y.MAGENTA,
        CYAN: Y.CYAN,
        WHITE: Y.WHITE,
        BLACK: Y.BLACK,
        quit: mi,
        Event: be,
        EventHandler: _e,
        EventController: Ve
    };
    if (n.plugins && n.plugins.forEach(ir), n.global !== !1) for(let t1 in Ze)window[t1] = Ze[t1];
    return n.focus !== !1 && v.canvas().focus(), Ze;
}, "default");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cT3RO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HelloWorld);
var _kaboom = require("../kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
function HelloWorld() {
    var RB = (0, _kaboomDefault.default).add([
        (0, _kaboomDefault.default).pos((0, _kaboomDefault.default).center()),
        (0, _kaboomDefault.default).anchor("center"),
        (0, _kaboomDefault.default).rect(32, 32),
        (0, _kaboomDefault.default).color(255, 0, 0),
        (0, _kaboomDefault.default).rotate(0)
    ]);
    (0, _kaboomDefault.default).onMouseMove(()=>{
        RB.pos = (0, _kaboomDefault.default).mousePos();
        if ((0, _kaboomDefault.default).isMouseDown()) (0, _kaboomDefault.default).addKaboom((0, _kaboomDefault.default).mousePos());
    });
}

},{"../kaboom":"9gZzR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pJz7m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>kMatterTest);
var _kaboom = require("../kaboom");
var _kaboomDefault = parcelHelpers.interopDefault(_kaboom);
var _matterJs = require("matter-js");
var _matterJsDefault = parcelHelpers.interopDefault(_matterJs);
var _kMatter = require("../kMatter");
var _kMatterDefault = parcelHelpers.interopDefault(_kMatter);
function kMatterTest() {
    // Setup Engine
    const engine = (0, _matterJsDefault.default).Engine.create();
    (0, _matterJsDefault.default).Composite.create(engine);
    (0, _kaboomDefault.default).onUpdate(()=>{
        (0, _matterJsDefault.default).Engine.update(engine, (0, _kaboomDefault.default).dt() * 1000);
    });
    // Actors
    var RigidBody = (0, _kaboomDefault.default).add([
        (0, _kaboomDefault.default).pos((0, _kaboomDefault.default).center().x, (0, _kaboomDefault.default).center().y),
        (0, _kaboomDefault.default).anchor("center"),
        (0, _kaboomDefault.default).rect(32, 32),
        (0, _kaboomDefault.default).color(255, 0, 0),
        (0, _kaboomDefault.default).rotate(0),
        // Matter For Rectangles
        (0, _kMatterDefault.default)(engine)
    ]);
    var PlatForm = (0, _kaboomDefault.default).add([
        (0, _kaboomDefault.default).pos((0, _kaboomDefault.default).center().x - 64, (0, _kaboomDefault.default).center().y + 64),
        (0, _kaboomDefault.default).anchor("center"),
        (0, _kaboomDefault.default).rect(128, 32),
        (0, _kaboomDefault.default).color(0, 0, 0),
        (0, _kaboomDefault.default).rotate(0),
        // Matter For Rectangles
        (0, _kMatterDefault.default)(engine, {
            isStatic: true
        })
    ]);
    var PlatForm2 = (0, _kaboomDefault.default).add([
        (0, _kaboomDefault.default).pos((0, _kaboomDefault.default).center().x + 105, (0, _kaboomDefault.default).center().y + 128),
        (0, _kaboomDefault.default).anchor("center"),
        (0, _kaboomDefault.default).rect(128, 32),
        (0, _kaboomDefault.default).color(0, 0, 0),
        (0, _kaboomDefault.default).rotate(0),
        // Matter For Rectangles
        (0, _kMatterDefault.default)(engine, {
            isStatic: true
        })
    ]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../kaboom":"9gZzR","../kMatter":"ku9yr","matter-js":"2oYKU"}],"ku9yr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>matterRect);
var _matterJs = require("matter-js");
var _matterJsDefault = parcelHelpers.interopDefault(_matterJs);
function matterRect(engine, options = {}) {
    return {
        add () {
            const { x, y } = this.pos;
            const { width, height } = this;
            this.body = (0, _matterJsDefault.default).Bodies.rectangle(x, y, width, height, options);
            (0, _matterJsDefault.default).Composite.add(engine.world, this.body);
        },
        update () {
            if (!this.body) return;
            this.pos.x = this.body.position.x;
            this.pos.y = this.body.position.y;
            this.angle = this.body.angle * (180 / Math.PI);
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","matter-js":"2oYKU"}],"2oYKU":[function(require,module,exports) {
var global = arguments[3];
/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != "string") for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 20);
    /******/ }([
        /* 0 */ /***/ function(module1, exports) {
            /**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/ var Common = {};
            module1.exports = Common;
            (function() {
                Common._baseDelta = 1000 / 60;
                Common._nextId = 0;
                Common._seed = 0;
                Common._nowStartTime = +new Date();
                Common._warnedOnce = {};
                Common._decomp = null;
                /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */ Common.extend = function(obj, deep) {
                    var argsStart, args, deepClone;
                    if (typeof deep === "boolean") {
                        argsStart = 2;
                        deepClone = deep;
                    } else {
                        argsStart = 1;
                        deepClone = true;
                    }
                    for(var i = argsStart; i < arguments.length; i++){
                        var source = arguments[i];
                        if (source) {
                            for(var prop in source)if (deepClone && source[prop] && source[prop].constructor === Object) {
                                if (!obj[prop] || obj[prop].constructor === Object) {
                                    obj[prop] = obj[prop] || {};
                                    Common.extend(obj[prop], deepClone, source[prop]);
                                } else obj[prop] = source[prop];
                            } else obj[prop] = source[prop];
                        }
                    }
                    return obj;
                };
                /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */ Common.clone = function(obj, deep) {
                    return Common.extend({}, deep, obj);
                };
                /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */ Common.keys = function(obj) {
                    if (Object.keys) return Object.keys(obj);
                    // avoid hasOwnProperty for performance
                    var keys = [];
                    for(var key in obj)keys.push(key);
                    return keys;
                };
                /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */ Common.values = function(obj) {
                    var values = [];
                    if (Object.keys) {
                        var keys = Object.keys(obj);
                        for(var i = 0; i < keys.length; i++)values.push(obj[keys[i]]);
                        return values;
                    }
                    // avoid hasOwnProperty for performance
                    for(var key in obj)values.push(obj[key]);
                    return values;
                };
                /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */ Common.get = function(obj, path, begin, end) {
                    path = path.split(".").slice(begin, end);
                    for(var i = 0; i < path.length; i += 1)obj = obj[path[i]];
                    return obj;
                };
                /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */ Common.set = function(obj, path, val, begin, end) {
                    var parts = path.split(".").slice(begin, end);
                    Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
                    return val;
                };
                /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */ Common.shuffle = function(array) {
                    for(var i = array.length - 1; i > 0; i--){
                        var j = Math.floor(Common.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                    return array;
                };
                /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */ Common.choose = function(choices) {
                    return choices[Math.floor(Common.random() * choices.length)];
                };
                /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */ Common.isElement = function(obj) {
                    if (typeof HTMLElement !== "undefined") return obj instanceof HTMLElement;
                    return !!(obj && obj.nodeType && obj.nodeName);
                };
                /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */ Common.isArray = function(obj) {
                    return Object.prototype.toString.call(obj) === "[object Array]";
                };
                /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */ Common.isFunction = function(obj) {
                    return typeof obj === "function";
                };
                /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */ Common.isPlainObject = function(obj) {
                    return typeof obj === "object" && obj.constructor === Object;
                };
                /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */ Common.isString = function(obj) {
                    return toString.call(obj) === "[object String]";
                };
                /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */ Common.clamp = function(value, min, max) {
                    if (value < min) return min;
                    if (value > max) return max;
                    return value;
                };
                /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */ Common.sign = function(value) {
                    return value < 0 ? -1 : 1;
                };
                /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */ Common.now = function() {
                    if (typeof window !== "undefined" && window.performance) {
                        if (window.performance.now) return window.performance.now();
                        else if (window.performance.webkitNow) return window.performance.webkitNow();
                    }
                    if (Date.now) return Date.now();
                    return new Date() - Common._nowStartTime;
                };
                /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */ Common.random = function(min, max) {
                    min = typeof min !== "undefined" ? min : 0;
                    max = typeof max !== "undefined" ? max : 1;
                    return min + _seededRandom() * (max - min);
                };
                var _seededRandom = function() {
                    // https://en.wikipedia.org/wiki/Linear_congruential_generator
                    Common._seed = (Common._seed * 9301 + 49297) % 233280;
                    return Common._seed / 233280;
                };
                /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */ Common.colorToNumber = function(colorString) {
                    colorString = colorString.replace("#", "");
                    if (colorString.length == 3) colorString = colorString.charAt(0) + colorString.charAt(0) + colorString.charAt(1) + colorString.charAt(1) + colorString.charAt(2) + colorString.charAt(2);
                    return parseInt(colorString, 16);
                };
                /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @static
     * @property logLevel
     * @type {Number}
     * @default 1
     */ Common.logLevel = 1;
                /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */ Common.log = function() {
                    if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.log.apply(console, [
                        "matter-js:"
                    ].concat(Array.prototype.slice.call(arguments)));
                };
                /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */ Common.info = function() {
                    if (console && Common.logLevel > 0 && Common.logLevel <= 2) console.info.apply(console, [
                        "matter-js:"
                    ].concat(Array.prototype.slice.call(arguments)));
                };
                /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */ Common.warn = function() {
                    if (console && Common.logLevel > 0 && Common.logLevel <= 3) console.warn.apply(console, [
                        "matter-js:"
                    ].concat(Array.prototype.slice.call(arguments)));
                };
                /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */ Common.warnOnce = function() {
                    var message = Array.prototype.slice.call(arguments).join(" ");
                    if (!Common._warnedOnce[message]) {
                        Common.warn(message);
                        Common._warnedOnce[message] = true;
                    }
                };
                /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */ Common.deprecated = function(obj, prop, warning) {
                    obj[prop] = Common.chain(function() {
                        Common.warnOnce("\uD83D\uDD05 deprecated \uD83D\uDD05", warning);
                    }, obj[prop]);
                };
                /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */ Common.nextId = function() {
                    return Common._nextId++;
                };
                /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */ Common.indexOf = function(haystack, needle) {
                    if (haystack.indexOf) return haystack.indexOf(needle);
                    for(var i = 0; i < haystack.length; i++){
                        if (haystack[i] === needle) return i;
                    }
                    return -1;
                };
                /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */ Common.map = function(list, func) {
                    if (list.map) return list.map(func);
                    var mapped = [];
                    for(var i = 0; i < list.length; i += 1)mapped.push(func(list[i]));
                    return mapped;
                };
                /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */ Common.topologicalSort = function(graph) {
                    // https://github.com/mgechev/javascript-algorithms
                    // Copyright (c) Minko Gechev (MIT license)
                    // Modifications: tidy formatting and naming
                    var result = [], visited = [], temp = [];
                    for(var node in graph)if (!visited[node] && !temp[node]) Common._topologicalSort(node, visited, temp, graph, result);
                    return result;
                };
                Common._topologicalSort = function(node, visited, temp, graph, result) {
                    var neighbors = graph[node] || [];
                    temp[node] = true;
                    for(var i = 0; i < neighbors.length; i += 1){
                        var neighbor = neighbors[i];
                        if (temp[neighbor]) continue;
                        if (!visited[neighbor]) Common._topologicalSort(neighbor, visited, temp, graph, result);
                    }
                    temp[node] = false;
                    visited[node] = true;
                    result.push(node);
                };
                /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */ Common.chain = function() {
                    var funcs = [];
                    for(var i = 0; i < arguments.length; i += 1){
                        var func = arguments[i];
                        if (func._chained) // flatten already chained functions
                        funcs.push.apply(funcs, func._chained);
                        else funcs.push(func);
                    }
                    var chain = function() {
                        // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
                        var lastResult, args = new Array(arguments.length);
                        for(var i = 0, l = arguments.length; i < l; i++)args[i] = arguments[i];
                        for(i = 0; i < funcs.length; i += 1){
                            var result = funcs[i].apply(lastResult, args);
                            if (typeof result !== "undefined") lastResult = result;
                        }
                        return lastResult;
                    };
                    chain._chained = funcs;
                    return chain;
                };
                /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */ Common.chainPathBefore = function(base, path, func) {
                    return Common.set(base, path, Common.chain(func, Common.get(base, path)));
                };
                /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */ Common.chainPathAfter = function(base, path, func) {
                    return Common.set(base, path, Common.chain(Common.get(base, path), func));
                };
                /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */ Common.setDecomp = function(decomp) {
                    Common._decomp = decomp;
                };
                /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */ Common.getDecomp = function() {
                    // get user provided decomp if set
                    var decomp = Common._decomp;
                    try {
                        // otherwise from window global
                        if (!decomp && typeof window !== "undefined") decomp = window.decomp;
                        // otherwise from node global
                        if (!decomp && typeof global !== "undefined") decomp = global.decomp;
                    } catch (e) {
                        // decomp not available
                        decomp = null;
                    }
                    return decomp;
                };
            })();
        /***/ },
        /* 1 */ /***/ function(module1, exports) {
            /**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/ var Bounds = {};
            module1.exports = Bounds;
            (function() {
                /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */ Bounds.create = function(vertices) {
                    var bounds = {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        }
                    };
                    if (vertices) Bounds.update(bounds, vertices);
                    return bounds;
                };
                /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */ Bounds.update = function(bounds, vertices, velocity) {
                    bounds.min.x = Infinity;
                    bounds.max.x = -Infinity;
                    bounds.min.y = Infinity;
                    bounds.max.y = -Infinity;
                    for(var i = 0; i < vertices.length; i++){
                        var vertex = vertices[i];
                        if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
                        if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
                        if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
                        if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
                    }
                    if (velocity) {
                        if (velocity.x > 0) bounds.max.x += velocity.x;
                        else bounds.min.x += velocity.x;
                        if (velocity.y > 0) bounds.max.y += velocity.y;
                        else bounds.min.y += velocity.y;
                    }
                };
                /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */ Bounds.contains = function(bounds, point) {
                    return point.x >= bounds.min.x && point.x <= bounds.max.x && point.y >= bounds.min.y && point.y <= bounds.max.y;
                };
                /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */ Bounds.overlaps = function(boundsA, boundsB) {
                    return boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y;
                };
                /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */ Bounds.translate = function(bounds, vector) {
                    bounds.min.x += vector.x;
                    bounds.max.x += vector.x;
                    bounds.min.y += vector.y;
                    bounds.max.y += vector.y;
                };
                /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */ Bounds.shift = function(bounds, position) {
                    var deltaX = bounds.max.x - bounds.min.x, deltaY = bounds.max.y - bounds.min.y;
                    bounds.min.x = position.x;
                    bounds.max.x = position.x + deltaX;
                    bounds.min.y = position.y;
                    bounds.max.y = position.y + deltaY;
                };
            })();
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            /**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/ // TODO: consider params for reusing vector objects
            var Vector = {};
            module1.exports = Vector;
            (function() {
                /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */ Vector.create = function(x, y) {
                    return {
                        x: x || 0,
                        y: y || 0
                    };
                };
                /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */ Vector.clone = function(vector) {
                    return {
                        x: vector.x,
                        y: vector.y
                    };
                };
                /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */ Vector.magnitude = function(vector) {
                    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
                };
                /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */ Vector.magnitudeSquared = function(vector) {
                    return vector.x * vector.x + vector.y * vector.y;
                };
                /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */ Vector.rotate = function(vector, angle, output) {
                    var cos = Math.cos(angle), sin = Math.sin(angle);
                    if (!output) output = {};
                    var x = vector.x * cos - vector.y * sin;
                    output.y = vector.x * sin + vector.y * cos;
                    output.x = x;
                    return output;
                };
                /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */ Vector.rotateAbout = function(vector, angle, point, output) {
                    var cos = Math.cos(angle), sin = Math.sin(angle);
                    if (!output) output = {};
                    var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
                    output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
                    output.x = x;
                    return output;
                };
                /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */ Vector.normalise = function(vector) {
                    var magnitude = Vector.magnitude(vector);
                    if (magnitude === 0) return {
                        x: 0,
                        y: 0
                    };
                    return {
                        x: vector.x / magnitude,
                        y: vector.y / magnitude
                    };
                };
                /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */ Vector.dot = function(vectorA, vectorB) {
                    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
                };
                /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */ Vector.cross = function(vectorA, vectorB) {
                    return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
                };
                /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */ Vector.cross3 = function(vectorA, vectorB, vectorC) {
                    return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
                };
                /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */ Vector.add = function(vectorA, vectorB, output) {
                    if (!output) output = {};
                    output.x = vectorA.x + vectorB.x;
                    output.y = vectorA.y + vectorB.y;
                    return output;
                };
                /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */ Vector.sub = function(vectorA, vectorB, output) {
                    if (!output) output = {};
                    output.x = vectorA.x - vectorB.x;
                    output.y = vectorA.y - vectorB.y;
                    return output;
                };
                /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */ Vector.mult = function(vector, scalar) {
                    return {
                        x: vector.x * scalar,
                        y: vector.y * scalar
                    };
                };
                /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */ Vector.div = function(vector, scalar) {
                    return {
                        x: vector.x / scalar,
                        y: vector.y / scalar
                    };
                };
                /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */ Vector.perp = function(vector, negate) {
                    negate = negate === true ? -1 : 1;
                    return {
                        x: negate * -vector.y,
                        y: negate * vector.x
                    };
                };
                /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */ Vector.neg = function(vector) {
                    return {
                        x: -vector.x,
                        y: -vector.y
                    };
                };
                /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */ Vector.angle = function(vectorA, vectorB) {
                    return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
                };
                /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */ Vector._temp = [
                    Vector.create(),
                    Vector.create(),
                    Vector.create(),
                    Vector.create(),
                    Vector.create(),
                    Vector.create()
                ];
            })();
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/ var Vertices = {};
            module1.exports = Vertices;
            var Vector = __webpack_require__(2);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */ Vertices.create = function(points, body) {
                    var vertices = [];
                    for(var i = 0; i < points.length; i++){
                        var point = points[i], vertex = {
                            x: point.x,
                            y: point.y,
                            index: i,
                            body: body,
                            isInternal: false
                        };
                        vertices.push(vertex);
                    }
                    return vertices;
                };
                /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */ Vertices.fromPath = function(path, body) {
                    var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, points = [];
                    path.replace(pathPattern, function(match, x, y) {
                        points.push({
                            x: parseFloat(x),
                            y: parseFloat(y)
                        });
                    });
                    return Vertices.create(points, body);
                };
                /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */ Vertices.centre = function(vertices) {
                    var area = Vertices.area(vertices, true), centre = {
                        x: 0,
                        y: 0
                    }, cross, temp, j;
                    for(var i = 0; i < vertices.length; i++){
                        j = (i + 1) % vertices.length;
                        cross = Vector.cross(vertices[i], vertices[j]);
                        temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
                        centre = Vector.add(centre, temp);
                    }
                    return Vector.div(centre, 6 * area);
                };
                /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */ Vertices.mean = function(vertices) {
                    var average = {
                        x: 0,
                        y: 0
                    };
                    for(var i = 0; i < vertices.length; i++){
                        average.x += vertices[i].x;
                        average.y += vertices[i].y;
                    }
                    return Vector.div(average, vertices.length);
                };
                /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */ Vertices.area = function(vertices, signed) {
                    var area = 0, j = vertices.length - 1;
                    for(var i = 0; i < vertices.length; i++){
                        area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
                        j = i;
                    }
                    if (signed) return area / 2;
                    return Math.abs(area) / 2;
                };
                /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */ Vertices.inertia = function(vertices, mass) {
                    var numerator = 0, denominator = 0, v = vertices, cross, j;
                    // find the polygon's moment of inertia, using second moment of area
                    // from equations at http://www.physicsforums.com/showthread.php?t=25293
                    for(var n = 0; n < v.length; n++){
                        j = (n + 1) % v.length;
                        cross = Math.abs(Vector.cross(v[j], v[n]));
                        numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
                        denominator += cross;
                    }
                    return mass / 6 * (numerator / denominator);
                };
                /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */ Vertices.translate = function(vertices, vector, scalar) {
                    scalar = typeof scalar !== "undefined" ? scalar : 1;
                    var verticesLength = vertices.length, translateX = vector.x * scalar, translateY = vector.y * scalar, i;
                    for(i = 0; i < verticesLength; i++){
                        vertices[i].x += translateX;
                        vertices[i].y += translateY;
                    }
                    return vertices;
                };
                /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */ Vertices.rotate = function(vertices, angle, point) {
                    if (angle === 0) return;
                    var cos = Math.cos(angle), sin = Math.sin(angle), pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex, dx, dy, i;
                    for(i = 0; i < verticesLength; i++){
                        vertex = vertices[i];
                        dx = vertex.x - pointX;
                        dy = vertex.y - pointY;
                        vertex.x = pointX + (dx * cos - dy * sin);
                        vertex.y = pointY + (dx * sin + dy * cos);
                    }
                    return vertices;
                };
                /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */ Vertices.contains = function(vertices, point) {
                    var pointX = point.x, pointY = point.y, verticesLength = vertices.length, vertex = vertices[verticesLength - 1], nextVertex;
                    for(var i = 0; i < verticesLength; i++){
                        nextVertex = vertices[i];
                        if ((pointX - vertex.x) * (nextVertex.y - vertex.y) + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) return false;
                        vertex = nextVertex;
                    }
                    return true;
                };
                /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */ Vertices.scale = function(vertices, scaleX, scaleY, point) {
                    if (scaleX === 1 && scaleY === 1) return vertices;
                    point = point || Vertices.centre(vertices);
                    var vertex, delta;
                    for(var i = 0; i < vertices.length; i++){
                        vertex = vertices[i];
                        delta = Vector.sub(vertex, point);
                        vertices[i].x = point.x + delta.x * scaleX;
                        vertices[i].y = point.y + delta.y * scaleY;
                    }
                    return vertices;
                };
                /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */ Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
                    if (typeof radius === "number") radius = [
                        radius
                    ];
                    else radius = radius || [
                        8
                    ];
                    // quality defaults to -1, which is auto
                    quality = typeof quality !== "undefined" ? quality : -1;
                    qualityMin = qualityMin || 2;
                    qualityMax = qualityMax || 14;
                    var newVertices = [];
                    for(var i = 0; i < vertices.length; i++){
                        var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1], vertex = vertices[i], nextVertex = vertices[(i + 1) % vertices.length], currentRadius = radius[i < radius.length ? i : radius.length - 1];
                        if (currentRadius === 0) {
                            newVertices.push(vertex);
                            continue;
                        }
                        var prevNormal = Vector.normalise({
                            x: vertex.y - prevVertex.y,
                            y: prevVertex.x - vertex.x
                        });
                        var nextNormal = Vector.normalise({
                            x: nextVertex.y - vertex.y,
                            y: vertex.x - nextVertex.x
                        });
                        var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)), radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius), midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)), scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));
                        var precision = quality;
                        if (quality === -1) // automatically decide precision
                        precision = Math.pow(currentRadius, 0.32) * 1.75;
                        precision = Common.clamp(precision, qualityMin, qualityMax);
                        // use an even value for precision, more likely to reduce axes by using symmetry
                        if (precision % 2 === 1) precision += 1;
                        var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)), theta = alpha / precision;
                        for(var j = 0; j < precision; j++)newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
                    }
                    return newVertices;
                };
                /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */ Vertices.clockwiseSort = function(vertices) {
                    var centre = Vertices.mean(vertices);
                    vertices.sort(function(vertexA, vertexB) {
                        return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
                    });
                    return vertices;
                };
                /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */ Vertices.isConvex = function(vertices) {
                    // http://paulbourke.net/geometry/polygonmesh/
                    // Copyright (c) Paul Bourke (use permitted)
                    var flag = 0, n = vertices.length, i, j, k, z;
                    if (n < 3) return null;
                    for(i = 0; i < n; i++){
                        j = (i + 1) % n;
                        k = (i + 2) % n;
                        z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
                        z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);
                        if (z < 0) flag |= 1;
                        else if (z > 0) flag |= 2;
                        if (flag === 3) return false;
                    }
                    if (flag !== 0) return true;
                    else return null;
                };
                /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */ Vertices.hull = function(vertices) {
                    // http://geomalgorithms.com/a10-_hull-1.html
                    var upper = [], lower = [], vertex, i;
                    // sort vertices on x-axis (y-axis for ties)
                    vertices = vertices.slice(0);
                    vertices.sort(function(vertexA, vertexB) {
                        var dx = vertexA.x - vertexB.x;
                        return dx !== 0 ? dx : vertexA.y - vertexB.y;
                    });
                    // build lower hull
                    for(i = 0; i < vertices.length; i += 1){
                        vertex = vertices[i];
                        while(lower.length >= 2 && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0)lower.pop();
                        lower.push(vertex);
                    }
                    // build upper hull
                    for(i = vertices.length - 1; i >= 0; i -= 1){
                        vertex = vertices[i];
                        while(upper.length >= 2 && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0)upper.pop();
                        upper.push(vertex);
                    }
                    // concatenation of the lower and upper hulls gives the convex hull
                    // omit last points because they are repeated at the beginning of the other list
                    upper.pop();
                    lower.pop();
                    return upper.concat(lower);
                };
            })();
        /***/ },
        /* 4 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/ var Body = {};
            module1.exports = Body;
            var Vertices = __webpack_require__(3);
            var Vector = __webpack_require__(2);
            var Sleeping = __webpack_require__(7);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            var Axes = __webpack_require__(11);
            (function() {
                Body._timeCorrection = true;
                Body._inertiaScale = 4;
                Body._nextCollidingGroupId = 1;
                Body._nextNonCollidingGroupId = -1;
                Body._nextCategory = 0x0001;
                Body._baseDelta = 1000 / 60;
                /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */ Body.create = function(options) {
                    var defaults = {
                        id: Common.nextId(),
                        type: "body",
                        label: "Body",
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: Vertices.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                        position: {
                            x: 0,
                            y: 0
                        },
                        force: {
                            x: 0,
                            y: 0
                        },
                        torque: 0,
                        positionImpulse: {
                            x: 0,
                            y: 0
                        },
                        constraintImpulse: {
                            x: 0,
                            y: 0,
                            angle: 0
                        },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: {
                            x: 0,
                            y: 0
                        },
                        angularVelocity: 0,
                        isSensor: false,
                        isStatic: false,
                        isSleeping: false,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: {
                            category: 0x0001,
                            mask: 0xFFFFFFFF,
                            group: 0
                        },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                            visible: true,
                            opacity: 1,
                            strokeStyle: null,
                            fillStyle: null,
                            lineWidth: null,
                            sprite: {
                                xScale: 1,
                                yScale: 1,
                                xOffset: 0,
                                yOffset: 0
                            }
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        deltaTime: 1000 / 60,
                        _original: null
                    };
                    var body = Common.extend(defaults, options);
                    _initProperties(body, options);
                    return body;
                };
                /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */ Body.nextGroup = function(isNonColliding) {
                    if (isNonColliding) return Body._nextNonCollidingGroupId--;
                    return Body._nextCollidingGroupId++;
                };
                /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */ Body.nextCategory = function() {
                    Body._nextCategory = Body._nextCategory << 1;
                    return Body._nextCategory;
                };
                /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */ var _initProperties = function(body, options) {
                    options = options || {};
                    // init required properties (order is important)
                    Body.set(body, {
                        bounds: body.bounds || Bounds.create(body.vertices),
                        positionPrev: body.positionPrev || Vector.clone(body.position),
                        anglePrev: body.anglePrev || body.angle,
                        vertices: body.vertices,
                        parts: body.parts || [
                            body
                        ],
                        isStatic: body.isStatic,
                        isSleeping: body.isSleeping,
                        parent: body.parent || body
                    });
                    Vertices.rotate(body.vertices, body.angle, body.position);
                    Axes.rotate(body.axes, body.angle);
                    Bounds.update(body.bounds, body.vertices, body.velocity);
                    // allow options to override the automatically calculated properties
                    Body.set(body, {
                        axes: options.axes || body.axes,
                        area: options.area || body.area,
                        mass: options.mass || body.mass,
                        inertia: options.inertia || body.inertia
                    });
                    // render properties
                    var defaultFillStyle = body.isStatic ? "#14151f" : Common.choose([
                        "#f19648",
                        "#f5d259",
                        "#f55a3c",
                        "#063e7b",
                        "#ececd1"
                    ]), defaultStrokeStyle = body.isStatic ? "#555" : "#ccc", defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
                    body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
                    body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
                    body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
                    body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
                    body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
                };
                /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */ Body.set = function(body, settings, value) {
                    var property;
                    if (typeof settings === "string") {
                        property = settings;
                        settings = {};
                        settings[property] = value;
                    }
                    for(property in settings){
                        if (!Object.prototype.hasOwnProperty.call(settings, property)) continue;
                        value = settings[property];
                        switch(property){
                            case "isStatic":
                                Body.setStatic(body, value);
                                break;
                            case "isSleeping":
                                Sleeping.set(body, value);
                                break;
                            case "mass":
                                Body.setMass(body, value);
                                break;
                            case "density":
                                Body.setDensity(body, value);
                                break;
                            case "inertia":
                                Body.setInertia(body, value);
                                break;
                            case "vertices":
                                Body.setVertices(body, value);
                                break;
                            case "position":
                                Body.setPosition(body, value);
                                break;
                            case "angle":
                                Body.setAngle(body, value);
                                break;
                            case "velocity":
                                Body.setVelocity(body, value);
                                break;
                            case "angularVelocity":
                                Body.setAngularVelocity(body, value);
                                break;
                            case "speed":
                                Body.setSpeed(body, value);
                                break;
                            case "angularSpeed":
                                Body.setAngularSpeed(body, value);
                                break;
                            case "parts":
                                Body.setParts(body, value);
                                break;
                            case "centre":
                                Body.setCentre(body, value);
                                break;
                            default:
                                body[property] = value;
                        }
                    }
                };
                /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */ Body.setStatic = function(body, isStatic) {
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        part.isStatic = isStatic;
                        if (isStatic) {
                            part._original = {
                                restitution: part.restitution,
                                friction: part.friction,
                                mass: part.mass,
                                inertia: part.inertia,
                                density: part.density,
                                inverseMass: part.inverseMass,
                                inverseInertia: part.inverseInertia
                            };
                            part.restitution = 0;
                            part.friction = 1;
                            part.mass = part.inertia = part.density = Infinity;
                            part.inverseMass = part.inverseInertia = 0;
                            part.positionPrev.x = part.position.x;
                            part.positionPrev.y = part.position.y;
                            part.anglePrev = part.angle;
                            part.angularVelocity = 0;
                            part.speed = 0;
                            part.angularSpeed = 0;
                            part.motion = 0;
                        } else if (part._original) {
                            part.restitution = part._original.restitution;
                            part.friction = part._original.friction;
                            part.mass = part._original.mass;
                            part.inertia = part._original.inertia;
                            part.density = part._original.density;
                            part.inverseMass = part._original.inverseMass;
                            part.inverseInertia = part._original.inverseInertia;
                            part._original = null;
                        }
                    }
                };
                /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */ Body.setMass = function(body, mass) {
                    var moment = body.inertia / (body.mass / 6);
                    body.inertia = moment * (mass / 6);
                    body.inverseInertia = 1 / body.inertia;
                    body.mass = mass;
                    body.inverseMass = 1 / body.mass;
                    body.density = body.mass / body.area;
                };
                /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */ Body.setDensity = function(body, density) {
                    Body.setMass(body, density * body.area);
                    body.density = density;
                };
                /**
     * Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */ Body.setInertia = function(body, inertia) {
                    body.inertia = inertia;
                    body.inverseInertia = 1 / body.inertia;
                };
                /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
     * 
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */ Body.setVertices = function(body, vertices) {
                    // change vertices
                    if (vertices[0].body === body) body.vertices = vertices;
                    else body.vertices = Vertices.create(vertices, body);
                    // update properties
                    body.axes = Axes.fromVertices(body.vertices);
                    body.area = Vertices.area(body.vertices);
                    Body.setMass(body, body.density * body.area);
                    // orient vertices around the centre of mass at origin (0, 0)
                    var centre = Vertices.centre(body.vertices);
                    Vertices.translate(body.vertices, centre, -1);
                    // update inertia while vertices are at origin (0, 0)
                    Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));
                    // update geometry
                    Vertices.translate(body.vertices, body.position);
                    Bounds.update(body.bounds, body.vertices, body.velocity);
                };
                /**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param {body[]} parts
     * @param {bool} [autoHull=true]
     */ Body.setParts = function(body, parts, autoHull) {
                    var i;
                    // add all the parts, ensuring that the first part is always the parent body
                    parts = parts.slice(0);
                    body.parts.length = 0;
                    body.parts.push(body);
                    body.parent = body;
                    for(i = 0; i < parts.length; i++){
                        var part = parts[i];
                        if (part !== body) {
                            part.parent = body;
                            body.parts.push(part);
                        }
                    }
                    if (body.parts.length === 1) return;
                    autoHull = typeof autoHull !== "undefined" ? autoHull : true;
                    // find the convex hull of all parts to set on the parent body
                    if (autoHull) {
                        var vertices = [];
                        for(i = 0; i < parts.length; i++)vertices = vertices.concat(parts[i].vertices);
                        Vertices.clockwiseSort(vertices);
                        var hull = Vertices.hull(vertices), hullCentre = Vertices.centre(hull);
                        Body.setVertices(body, hull);
                        Vertices.translate(body.vertices, hullCentre);
                    }
                    // sum the properties of all compound parts of the parent body
                    var total = Body._totalProperties(body);
                    body.area = total.area;
                    body.parent = body;
                    body.position.x = total.centre.x;
                    body.position.y = total.centre.y;
                    body.positionPrev.x = total.centre.x;
                    body.positionPrev.y = total.centre.y;
                    Body.setMass(body, total.mass);
                    Body.setInertia(body, total.inertia);
                    Body.setPosition(body, total.centre);
                };
                /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */ Body.setCentre = function(body, centre, relative) {
                    if (!relative) {
                        body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
                        body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
                        body.position.x = centre.x;
                        body.position.y = centre.y;
                    } else {
                        body.positionPrev.x += centre.x;
                        body.positionPrev.y += centre.y;
                        body.position.x += centre.x;
                        body.position.y += centre.y;
                    }
                };
                /**
     * Sets the position of the body. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     * @param {boolean} [updateVelocity=false]
     */ Body.setPosition = function(body, position, updateVelocity) {
                    var delta = Vector.sub(position, body.position);
                    if (updateVelocity) {
                        body.positionPrev.x = body.position.x;
                        body.positionPrev.y = body.position.y;
                        body.velocity.x = delta.x;
                        body.velocity.y = delta.y;
                        body.speed = Vector.magnitude(delta);
                    } else {
                        body.positionPrev.x += delta.x;
                        body.positionPrev.y += delta.y;
                    }
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        part.position.x += delta.x;
                        part.position.y += delta.y;
                        Vertices.translate(part.vertices, delta);
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                };
                /**
     * Sets the angle of the body. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     * @param {boolean} [updateVelocity=false]
     */ Body.setAngle = function(body, angle, updateVelocity) {
                    var delta = angle - body.angle;
                    if (updateVelocity) {
                        body.anglePrev = body.angle;
                        body.angularVelocity = delta;
                        body.angularSpeed = Math.abs(delta);
                    } else body.anglePrev += delta;
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        part.angle += delta;
                        Vertices.rotate(part.vertices, delta, body.position);
                        Axes.rotate(part.axes, delta);
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                        if (i > 0) Vector.rotateAbout(part.position, delta, body.position, part.position);
                    }
                };
                /**
     * Sets the current linear velocity of the body.  
     * Affects body speed.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */ Body.setVelocity = function(body, velocity) {
                    var timeScale = body.deltaTime / Body._baseDelta;
                    body.positionPrev.x = body.position.x - velocity.x * timeScale;
                    body.positionPrev.y = body.position.y - velocity.y * timeScale;
                    body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
                    body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
                    body.speed = Vector.magnitude(body.velocity);
                };
                /**
     * Gets the current linear velocity of the body.
     * @method getVelocity
     * @param {body} body
     * @return {vector} velocity
     */ Body.getVelocity = function(body) {
                    var timeScale = Body._baseDelta / body.deltaTime;
                    return {
                        x: (body.position.x - body.positionPrev.x) * timeScale,
                        y: (body.position.y - body.positionPrev.y) * timeScale
                    };
                };
                /**
     * Gets the current linear speed of the body.  
     * Equivalent to the magnitude of its velocity.
     * @method getSpeed
     * @param {body} body
     * @return {number} speed
     */ Body.getSpeed = function(body) {
                    return Vector.magnitude(Body.getVelocity(body));
                };
                /**
     * Sets the current linear speed of the body.  
     * Direction is maintained. Affects body velocity.
     * @method setSpeed
     * @param {body} body
     * @param {number} speed
     */ Body.setSpeed = function(body, speed) {
                    Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
                };
                /**
     * Sets the current rotational velocity of the body.  
     * Affects body angular speed.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */ Body.setAngularVelocity = function(body, velocity) {
                    var timeScale = body.deltaTime / Body._baseDelta;
                    body.anglePrev = body.angle - velocity * timeScale;
                    body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
                    body.angularSpeed = Math.abs(body.angularVelocity);
                };
                /**
     * Gets the current rotational velocity of the body.
     * @method getAngularVelocity
     * @param {body} body
     * @return {number} angular velocity
     */ Body.getAngularVelocity = function(body) {
                    return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
                };
                /**
     * Gets the current rotational speed of the body.  
     * Equivalent to the magnitude of its angular velocity.
     * @method getAngularSpeed
     * @param {body} body
     * @return {number} angular speed
     */ Body.getAngularSpeed = function(body) {
                    return Math.abs(Body.getAngularVelocity(body));
                };
                /**
     * Sets the current rotational speed of the body.  
     * Direction is maintained. Affects body angular velocity.
     * @method setAngularSpeed
     * @param {body} body
     * @param {number} speed
     */ Body.setAngularSpeed = function(body, speed) {
                    Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
                };
                /**
     * Moves a body by a given vector relative to its current position. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     * @param {boolean} [updateVelocity=false]
     */ Body.translate = function(body, translation, updateVelocity) {
                    Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
                };
                /**
     * Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     * @param {boolean} [updateVelocity=false]
     */ Body.rotate = function(body, rotation, point, updateVelocity) {
                    if (!point) Body.setAngle(body, body.angle + rotation, updateVelocity);
                    else {
                        var cos = Math.cos(rotation), sin = Math.sin(rotation), dx = body.position.x - point.x, dy = body.position.y - point.y;
                        Body.setPosition(body, {
                            x: point.x + (dx * cos - dy * sin),
                            y: point.y + (dx * sin + dy * cos)
                        }, updateVelocity);
                        Body.setAngle(body, body.angle + rotation, updateVelocity);
                    }
                };
                /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */ Body.scale = function(body, scaleX, scaleY, point) {
                    var totalArea = 0, totalInertia = 0;
                    point = point || body.position;
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        // scale vertices
                        Vertices.scale(part.vertices, scaleX, scaleY, point);
                        // update properties
                        part.axes = Axes.fromVertices(part.vertices);
                        part.area = Vertices.area(part.vertices);
                        Body.setMass(part, body.density * part.area);
                        // update inertia (requires vertices to be at origin)
                        Vertices.translate(part.vertices, {
                            x: -part.position.x,
                            y: -part.position.y
                        });
                        Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
                        Vertices.translate(part.vertices, {
                            x: part.position.x,
                            y: part.position.y
                        });
                        if (i > 0) {
                            totalArea += part.area;
                            totalInertia += part.inertia;
                        }
                        // scale position
                        part.position.x = point.x + (part.position.x - point.x) * scaleX;
                        part.position.y = point.y + (part.position.y - point.y) * scaleY;
                        // update bounds
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                    // handle parent body
                    if (body.parts.length > 1) {
                        body.area = totalArea;
                        if (!body.isStatic) {
                            Body.setMass(body, body.density * totalArea);
                            Body.setInertia(body, totalInertia);
                        }
                    }
                    // handle circles
                    if (body.circleRadius) {
                        if (scaleX === scaleY) body.circleRadius *= scaleX;
                        else // body is no longer a circle
                        body.circleRadius = null;
                    }
                };
                /**
     * Performs an update by integrating the equations of motion on the `body`.
     * This is applied every update by `Matter.Engine` automatically.
     * @method update
     * @param {body} body
     * @param {number} [deltaTime=16.666]
     */ Body.update = function(body, deltaTime) {
                    deltaTime = (typeof deltaTime !== "undefined" ? deltaTime : 1000 / 60) * body.timeScale;
                    var deltaTimeSquared = deltaTime * deltaTime, correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;
                    // from the previous step
                    var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta), velocityPrevX = (body.position.x - body.positionPrev.x) * correction, velocityPrevY = (body.position.y - body.positionPrev.y) * correction;
                    // update velocity with Verlet integration
                    body.velocity.x = velocityPrevX * frictionAir + body.force.x / body.mass * deltaTimeSquared;
                    body.velocity.y = velocityPrevY * frictionAir + body.force.y / body.mass * deltaTimeSquared;
                    body.positionPrev.x = body.position.x;
                    body.positionPrev.y = body.position.y;
                    body.position.x += body.velocity.x;
                    body.position.y += body.velocity.y;
                    body.deltaTime = deltaTime;
                    // update angular velocity with Verlet integration
                    body.angularVelocity = (body.angle - body.anglePrev) * frictionAir * correction + body.torque / body.inertia * deltaTimeSquared;
                    body.anglePrev = body.angle;
                    body.angle += body.angularVelocity;
                    // transform the body geometry
                    for(var i = 0; i < body.parts.length; i++){
                        var part = body.parts[i];
                        Vertices.translate(part.vertices, body.velocity);
                        if (i > 0) {
                            part.position.x += body.velocity.x;
                            part.position.y += body.velocity.y;
                        }
                        if (body.angularVelocity !== 0) {
                            Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                            Axes.rotate(part.axes, body.angularVelocity);
                            if (i > 0) Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                        }
                        Bounds.update(part.bounds, part.vertices, body.velocity);
                    }
                };
                /**
     * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
     * @method updateVelocities
     * @param {body} body
     */ Body.updateVelocities = function(body) {
                    var timeScale = Body._baseDelta / body.deltaTime, bodyVelocity = body.velocity;
                    bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
                    bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
                    body.speed = Math.sqrt(bodyVelocity.x * bodyVelocity.x + bodyVelocity.y * bodyVelocity.y);
                    body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
                    body.angularSpeed = Math.abs(body.angularVelocity);
                };
                /**
     * Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
     * 
     * Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
     * 
     * The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
     * 
     * Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
     * 
     * If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
     * 
     * The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
     * 
     * The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
     * @method applyForce
     * @param {body} body
     * @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
     * @param {vector} force
     */ Body.applyForce = function(body, position, force) {
                    var offset = {
                        x: position.x - body.position.x,
                        y: position.y - body.position.y
                    };
                    body.force.x += force.x;
                    body.force.y += force.y;
                    body.torque += offset.x * force.y - offset.y * force.x;
                };
                /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */ Body._totalProperties = function(body) {
                    // from equations at:
                    // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
                    // http://output.to/sideway/default.asp?qno=121100087
                    var properties = {
                        mass: 0,
                        area: 0,
                        inertia: 0,
                        centre: {
                            x: 0,
                            y: 0
                        }
                    };
                    // sum the properties of all compound parts of the parent body
                    for(var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++){
                        var part = body.parts[i], mass = part.mass !== Infinity ? part.mass : 1;
                        properties.mass += mass;
                        properties.area += part.area;
                        properties.inertia += part.inertia;
                        properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
                    }
                    properties.centre = Vector.div(properties.centre, properties.mass);
                    return properties;
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * _Read only_. Set by `Body.create`.
     * 
     * A `String` denoting the type of object.
     *
     * @readOnly
     * @property type
     * @type string
     * @default "body"
     */ /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */ /**
     * _Read only_. Use `Body.setParts` to set. 
     * 
     * An array of bodies that make up this body. 
     * The first body in the array must always be a self reference to the current body instance.
     * All bodies in the `parts` array together form a single rigid compound body.
     * Parts are allowed to overlap, have gaps or holes or even form concave bodies.
     * Parts themselves should never be added to a `World`, only the parent body should be.
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.
     *
     * @readOnly
     * @property parts
     * @type body[]
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * _Read only_. Updated by `Body.setParts`.
     * 
     * A reference to the body that this is a part of. See `body.parts`.
     * This is a self reference if the body is not a part of another body.
     *
     * @readOnly
     * @property parent
     * @type body
     */ /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */ /**
     * _Read only_. Use `Body.setVertices` or `Body.setParts` to set. See also `Bodies.fromVertices`.
     * 
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     * `[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]`
     * 
     * Vertices must always be convex, in clockwise order and must not contain any duplicate points.
     * 
     * Concave vertices should be decomposed into convex `parts`, see `Bodies.fromVertices` and `Body.setParts`.
     *
     * When set the vertices are translated such that `body.position` is at the centre of mass.
     * Many other body properties are automatically calculated from these vertices when set including `density`, `area` and `inertia`.
     * 
     * The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @readOnly
     * @property vertices
     * @type vector[]
     */ /**
     * _Read only_. Use `Body.setPosition` to set. 
     * 
     * A `Vector` that specifies the current world-space position of the body.
     * 
     * @readOnly
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that accumulates the total force applied to the body for a single update.
     * Force is zeroed after every `Engine.update`, so constant forces should be applied for every update they are needed. See also `Body.applyForce`.
     * 
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that accumulates the total torque (turning force) applied to the body for a single update. See also `Body.applyForce`.
     * Torque is zeroed after every `Engine.update`, so constant torques should be applied for every update they are needed.
     *
     * Torques result in angular acceleration on every update, which depends on body inertia and the engine update delta.
     * 
     * @property torque
     * @type number
     * @default 0
     */ /**
     * _Read only_. Use `Body.setSpeed` to set. 
     * 
     * See `Body.getSpeed` for details.
     * 
     * Equivalent to the magnitude of `body.velocity` (always positive).
     * 
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */ /**
     * _Read only_. Use `Body.setVelocity` to set. 
     * 
     * See `Body.getVelocity` for details.
     * 
     * Equivalent to the magnitude of `body.angularVelocity` (always positive).
     * 
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * _Read only_. Use `Body.setAngularSpeed` to set. 
     * 
     * See `Body.getAngularSpeed` for details.
     * 
     * 
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */ /**
     * _Read only_. Use `Body.setAngularVelocity` to set. 
     * 
     * See `Body.getAngularVelocity` for details.
     * 
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */ /**
     * _Read only_. Use `Body.setStatic` to set. 
     * 
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     *
     * @readOnly
     * @property isStatic
     * @type boolean
     * @default false
     */ /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */ /**
     * _Read only_. Use `Sleeping.set` to set. 
     * 
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     *
     * @readOnly
     * @property isSleeping
     * @type boolean
     * @default false
     */ /**
     * _Read only_. Calculated during engine update only when sleeping is enabled.
     * 
     * A `Number` that loosely measures the amount of movement a body currently has.
     *
     * Derived from `body.speed^2 + body.angularSpeed^2`. See `Sleeping.update`.
     * 
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */ /**
     * A `Number` that defines the length of time during which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     * 
     * @property sleepThreshold
     * @type number
     * @default 60
     */ /**
     * _Read only_. Use `Body.setDensity` to set. 
     * 
     * A `Number` that defines the density of the body (mass per unit area).
     * 
     * Mass will also be updated when set.
     *
     * @readOnly
     * @property density
     * @type number
     * @default 0.001
     */ /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the mass of the body.
     * 
     * Density will also be updated when set.
     * 
     * @readOnly
     * @property mass
     * @type number
     */ /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     *
     * @readOnly
     * @property inverseMass
     * @type number
     */ /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or set through `Body.setInertia`.
     * 
     * A `Number` that defines the moment of inertia of the body. This is the second moment of area in two dimensions.
     * 
     * Can be manually set to `Infinity` to prevent rotation of the body. See `Body.setInertia`.
     * 
     * @readOnly
     * @property inertia
     * @type number
     */ /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or calculated by `Body.setInertia`.
     * 
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * 
     * @readOnly
     * @property inverseInertia
     * @type number
     */ /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     * `Math.max(bodyA.restitution, bodyB.restitution)`
     *
     * @property restitution
     * @type number
     * @default 0
     */ /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     * `Math.min(bodyA.friction, bodyB.friction)`
     *
     * @property friction
     * @type number
     * @default 0.1
     */ /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */ /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */ /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */ /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */ /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */ /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */ /**
     * A `Number` that specifies a thin boundary around the body where it is allowed to slightly sink into other bodies.
     * 
     * This is required for proper collision response, including friction and restitution effects.
     * 
     * The default should generally suffice in most cases. You may need to decrease this value for very small bodies that are nearing the default value in scale.
     *
     * @property slop
     * @type number
     * @default 0.05
     */ /**
     * A `Number` that specifies per-body time scaling.
     *
     * @property timeScale
     * @type number
     * @default 1
     */ /**
     * _Read only_. Updated during engine update.
     * 
     * A `Number` that records the last delta time value used to update this body.
     * Used to calculate speed and velocity.
     *
     * @readOnly
     * @property deltaTime
     * @type number
     * @default 1000 / 60
     */ /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */ /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */ /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */ /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */ /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */ /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */ /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */ /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */ /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */ /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */ /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */ /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */ /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated when vertices are set.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @readOnly
     * @property axes
     * @type vector[]
     */ /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * A `Number` that measures the area of the body's convex hull.
     * 
     * @readOnly
     * @property area
     * @type string
     * @default 
     */ /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated when vertices are set and constantly updated by `Body.update` during simulation.
     * 
     * @property bounds
     * @type bounds
     */ })();
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/ var Events = {};
            module1.exports = Events;
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */ Events.on = function(object, eventNames, callback) {
                    var names = eventNames.split(" "), name;
                    for(var i = 0; i < names.length; i++){
                        name = names[i];
                        object.events = object.events || {};
                        object.events[name] = object.events[name] || [];
                        object.events[name].push(callback);
                    }
                    return callback;
                };
                /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */ Events.off = function(object, eventNames, callback) {
                    if (!eventNames) {
                        object.events = {};
                        return;
                    }
                    // handle Events.off(object, callback)
                    if (typeof eventNames === "function") {
                        callback = eventNames;
                        eventNames = Common.keys(object.events).join(" ");
                    }
                    var names = eventNames.split(" ");
                    for(var i = 0; i < names.length; i++){
                        var callbacks = object.events[names[i]], newCallbacks = [];
                        if (callback && callbacks) {
                            for(var j = 0; j < callbacks.length; j++)if (callbacks[j] !== callback) newCallbacks.push(callbacks[j]);
                        }
                        object.events[names[i]] = newCallbacks;
                    }
                };
                /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */ Events.trigger = function(object, eventNames, event) {
                    var names, name, callbacks, eventClone;
                    var events = object.events;
                    if (events && Common.keys(events).length > 0) {
                        if (!event) event = {};
                        names = eventNames.split(" ");
                        for(var i = 0; i < names.length; i++){
                            name = names[i];
                            callbacks = events[name];
                            if (callbacks) {
                                eventClone = Common.clone(event, false);
                                eventClone.name = name;
                                eventClone.source = object;
                                for(var j = 0; j < callbacks.length; j++)callbacks[j].apply(object, [
                                    eventClone
                                ]);
                            }
                        }
                    }
                };
            })();
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/ var Composite = {};
            module1.exports = Composite;
            var Events = __webpack_require__(5);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            var Body = __webpack_require__(4);
            (function() {
                /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */ Composite.create = function(options) {
                    return Common.extend({
                        id: Common.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: false,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite",
                        plugin: {},
                        cache: {
                            allBodies: null,
                            allConstraints: null,
                            allComposites: null
                        }
                    }, options);
                };
                /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */ Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
                    composite.isModified = isModified;
                    if (isModified && composite.cache) {
                        composite.cache.allBodies = null;
                        composite.cache.allConstraints = null;
                        composite.cache.allComposites = null;
                    }
                    if (updateParents && composite.parent) Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
                    if (updateChildren) for(var i = 0; i < composite.composites.length; i++){
                        var childComposite = composite.composites[i];
                        Composite.setModified(childComposite, isModified, updateParents, updateChildren);
                    }
                };
                /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */ Composite.add = function(composite, object) {
                    var objects = [].concat(object);
                    Events.trigger(composite, "beforeAdd", {
                        object: object
                    });
                    for(var i = 0; i < objects.length; i++){
                        var obj = objects[i];
                        switch(obj.type){
                            case "body":
                                // skip adding compound parts
                                if (obj.parent !== obj) {
                                    Common.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                    break;
                                }
                                Composite.addBody(composite, obj);
                                break;
                            case "constraint":
                                Composite.addConstraint(composite, obj);
                                break;
                            case "composite":
                                Composite.addComposite(composite, obj);
                                break;
                            case "mouseConstraint":
                                Composite.addConstraint(composite, obj.constraint);
                                break;
                        }
                    }
                    Events.trigger(composite, "afterAdd", {
                        object: object
                    });
                    return composite;
                };
                /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */ Composite.remove = function(composite, object, deep) {
                    var objects = [].concat(object);
                    Events.trigger(composite, "beforeRemove", {
                        object: object
                    });
                    for(var i = 0; i < objects.length; i++){
                        var obj = objects[i];
                        switch(obj.type){
                            case "body":
                                Composite.removeBody(composite, obj, deep);
                                break;
                            case "constraint":
                                Composite.removeConstraint(composite, obj, deep);
                                break;
                            case "composite":
                                Composite.removeComposite(composite, obj, deep);
                                break;
                            case "mouseConstraint":
                                Composite.removeConstraint(composite, obj.constraint);
                                break;
                        }
                    }
                    Events.trigger(composite, "afterRemove", {
                        object: object
                    });
                    return composite;
                };
                /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */ Composite.addComposite = function(compositeA, compositeB) {
                    compositeA.composites.push(compositeB);
                    compositeB.parent = compositeA;
                    Composite.setModified(compositeA, true, true, false);
                    return compositeA;
                };
                /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */ Composite.removeComposite = function(compositeA, compositeB, deep) {
                    var position = Common.indexOf(compositeA.composites, compositeB);
                    if (position !== -1) Composite.removeCompositeAt(compositeA, position);
                    if (deep) for(var i = 0; i < compositeA.composites.length; i++)Composite.removeComposite(compositeA.composites[i], compositeB, true);
                    return compositeA;
                };
                /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */ Composite.removeCompositeAt = function(composite, position) {
                    composite.composites.splice(position, 1);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */ Composite.addBody = function(composite, body) {
                    composite.bodies.push(body);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */ Composite.removeBody = function(composite, body, deep) {
                    var position = Common.indexOf(composite.bodies, body);
                    if (position !== -1) Composite.removeBodyAt(composite, position);
                    if (deep) for(var i = 0; i < composite.composites.length; i++)Composite.removeBody(composite.composites[i], body, true);
                    return composite;
                };
                /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */ Composite.removeBodyAt = function(composite, position) {
                    composite.bodies.splice(position, 1);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */ Composite.addConstraint = function(composite, constraint) {
                    composite.constraints.push(constraint);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */ Composite.removeConstraint = function(composite, constraint, deep) {
                    var position = Common.indexOf(composite.constraints, constraint);
                    if (position !== -1) Composite.removeConstraintAt(composite, position);
                    if (deep) for(var i = 0; i < composite.composites.length; i++)Composite.removeConstraint(composite.composites[i], constraint, true);
                    return composite;
                };
                /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */ Composite.removeConstraintAt = function(composite, position) {
                    composite.constraints.splice(position, 1);
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */ Composite.clear = function(composite, keepStatic, deep) {
                    if (deep) for(var i = 0; i < composite.composites.length; i++)Composite.clear(composite.composites[i], keepStatic, true);
                    if (keepStatic) composite.bodies = composite.bodies.filter(function(body) {
                        return body.isStatic;
                    });
                    else composite.bodies.length = 0;
                    composite.constraints.length = 0;
                    composite.composites.length = 0;
                    Composite.setModified(composite, true, true, false);
                    return composite;
                };
                /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */ Composite.allBodies = function(composite) {
                    if (composite.cache && composite.cache.allBodies) return composite.cache.allBodies;
                    var bodies = [].concat(composite.bodies);
                    for(var i = 0; i < composite.composites.length; i++)bodies = bodies.concat(Composite.allBodies(composite.composites[i]));
                    if (composite.cache) composite.cache.allBodies = bodies;
                    return bodies;
                };
                /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */ Composite.allConstraints = function(composite) {
                    if (composite.cache && composite.cache.allConstraints) return composite.cache.allConstraints;
                    var constraints = [].concat(composite.constraints);
                    for(var i = 0; i < composite.composites.length; i++)constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));
                    if (composite.cache) composite.cache.allConstraints = constraints;
                    return constraints;
                };
                /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */ Composite.allComposites = function(composite) {
                    if (composite.cache && composite.cache.allComposites) return composite.cache.allComposites;
                    var composites = [].concat(composite.composites);
                    for(var i = 0; i < composite.composites.length; i++)composites = composites.concat(Composite.allComposites(composite.composites[i]));
                    if (composite.cache) composite.cache.allComposites = composites;
                    return composites;
                };
                /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */ Composite.get = function(composite, id, type) {
                    var objects, object;
                    switch(type){
                        case "body":
                            objects = Composite.allBodies(composite);
                            break;
                        case "constraint":
                            objects = Composite.allConstraints(composite);
                            break;
                        case "composite":
                            objects = Composite.allComposites(composite).concat(composite);
                            break;
                    }
                    if (!objects) return null;
                    object = objects.filter(function(object) {
                        return object.id.toString() === id.toString();
                    });
                    return object.length === 0 ? null : object[0];
                };
                /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */ Composite.move = function(compositeA, objects, compositeB) {
                    Composite.remove(compositeA, objects);
                    Composite.add(compositeB, objects);
                    return compositeA;
                };
                /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */ Composite.rebase = function(composite) {
                    var objects = Composite.allBodies(composite).concat(Composite.allConstraints(composite)).concat(Composite.allComposites(composite));
                    for(var i = 0; i < objects.length; i++)objects[i].id = Common.nextId();
                    return composite;
                };
                /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */ Composite.translate = function(composite, translation, recursive) {
                    var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                    for(var i = 0; i < bodies.length; i++)Body.translate(bodies[i], translation);
                    return composite;
                };
                /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */ Composite.rotate = function(composite, rotation, point, recursive) {
                    var cos = Math.cos(rotation), sin = Math.sin(rotation), bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                        Body.setPosition(body, {
                            x: point.x + (dx * cos - dy * sin),
                            y: point.y + (dx * sin + dy * cos)
                        });
                        Body.rotate(body, rotation);
                    }
                    return composite;
                };
                /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */ Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
                    var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], dx = body.position.x - point.x, dy = body.position.y - point.y;
                        Body.setPosition(body, {
                            x: point.x + dx * scaleX,
                            y: point.y + dy * scaleY
                        });
                        Body.scale(body, scaleX, scaleY);
                    }
                    return composite;
                };
                /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */ Composite.bounds = function(composite) {
                    var bodies = Composite.allBodies(composite), vertices = [];
                    for(var i = 0; i < bodies.length; i += 1){
                        var body = bodies[i];
                        vertices.push(body.bounds.min, body.bounds.max);
                    }
                    return Bounds.create(vertices);
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */ /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */ /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */ /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */ /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */ /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */ })();
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/ var Sleeping = {};
            module1.exports = Sleeping;
            var Body = __webpack_require__(4);
            var Events = __webpack_require__(5);
            var Common = __webpack_require__(0);
            (function() {
                Sleeping._motionWakeThreshold = 0.18;
                Sleeping._motionSleepThreshold = 0.08;
                Sleeping._minBias = 0.9;
                /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} delta
     */ Sleeping.update = function(bodies, delta) {
                    var timeScale = delta / Common._baseDelta, motionSleepThreshold = Sleeping._motionSleepThreshold;
                    // update bodies sleeping status
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], speed = Body.getSpeed(body), angularSpeed = Body.getAngularSpeed(body), motion = speed * speed + angularSpeed * angularSpeed;
                        // wake up bodies if they have a force applied
                        if (body.force.x !== 0 || body.force.y !== 0) {
                            Sleeping.set(body, false);
                            continue;
                        }
                        var minMotion = Math.min(body.motion, motion), maxMotion = Math.max(body.motion, motion);
                        // biased average motion estimation between frames
                        body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;
                        if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                            body.sleepCounter += 1;
                            if (body.sleepCounter >= body.sleepThreshold / timeScale) Sleeping.set(body, true);
                        } else if (body.sleepCounter > 0) body.sleepCounter -= 1;
                    }
                };
                /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     */ Sleeping.afterCollisions = function(pairs) {
                    var motionSleepThreshold = Sleeping._motionSleepThreshold;
                    // wake up bodies involved in collisions
                    for(var i = 0; i < pairs.length; i++){
                        var pair = pairs[i];
                        // don't wake inactive pairs
                        if (!pair.isActive) continue;
                        var collision = pair.collision, bodyA = collision.bodyA.parent, bodyB = collision.bodyB.parent;
                        // don't wake if at least one body is static
                        if (bodyA.isSleeping && bodyB.isSleeping || bodyA.isStatic || bodyB.isStatic) continue;
                        if (bodyA.isSleeping || bodyB.isSleeping) {
                            var sleepingBody = bodyA.isSleeping && !bodyA.isStatic ? bodyA : bodyB, movingBody = sleepingBody === bodyA ? bodyB : bodyA;
                            if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) Sleeping.set(sleepingBody, false);
                        }
                    }
                };
                /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */ Sleeping.set = function(body, isSleeping) {
                    var wasSleeping = body.isSleeping;
                    if (isSleeping) {
                        body.isSleeping = true;
                        body.sleepCounter = body.sleepThreshold;
                        body.positionImpulse.x = 0;
                        body.positionImpulse.y = 0;
                        body.positionPrev.x = body.position.x;
                        body.positionPrev.y = body.position.y;
                        body.anglePrev = body.angle;
                        body.speed = 0;
                        body.angularSpeed = 0;
                        body.motion = 0;
                        if (!wasSleeping) Events.trigger(body, "sleepStart");
                    } else {
                        body.isSleeping = false;
                        body.sleepCounter = 0;
                        if (wasSleeping) Events.trigger(body, "sleepEnd");
                    }
                };
            })();
        /***/ },
        /* 8 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/ var Collision = {};
            module1.exports = Collision;
            var Vertices = __webpack_require__(3);
            var Pair = __webpack_require__(9);
            (function() {
                var _supports = [];
                var _overlapAB = {
                    overlap: 0,
                    axis: null
                };
                var _overlapBA = {
                    overlap: 0,
                    axis: null
                };
                /**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */ Collision.create = function(bodyA, bodyB) {
                    return {
                        pair: null,
                        collided: false,
                        bodyA: bodyA,
                        bodyB: bodyB,
                        parentA: bodyA.parent,
                        parentB: bodyB.parent,
                        depth: 0,
                        normal: {
                            x: 0,
                            y: 0
                        },
                        tangent: {
                            x: 0,
                            y: 0
                        },
                        penetration: {
                            x: 0,
                            y: 0
                        },
                        supports: []
                    };
                };
                /**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */ Collision.collides = function(bodyA, bodyB, pairs) {
                    Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);
                    if (_overlapAB.overlap <= 0) return null;
                    Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);
                    if (_overlapBA.overlap <= 0) return null;
                    // reuse collision records for gc efficiency
                    var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)], collision;
                    if (!pair) {
                        collision = Collision.create(bodyA, bodyB);
                        collision.collided = true;
                        collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
                        collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
                        collision.parentA = collision.bodyA.parent;
                        collision.parentB = collision.bodyB.parent;
                    } else collision = pair.collision;
                    bodyA = collision.bodyA;
                    bodyB = collision.bodyB;
                    var minOverlap;
                    if (_overlapAB.overlap < _overlapBA.overlap) minOverlap = _overlapAB;
                    else minOverlap = _overlapBA;
                    var normal = collision.normal, supports = collision.supports, minAxis = minOverlap.axis, minAxisX = minAxis.x, minAxisY = minAxis.y;
                    // ensure normal is facing away from bodyA
                    if (minAxisX * (bodyB.position.x - bodyA.position.x) + minAxisY * (bodyB.position.y - bodyA.position.y) < 0) {
                        normal.x = minAxisX;
                        normal.y = minAxisY;
                    } else {
                        normal.x = -minAxisX;
                        normal.y = -minAxisY;
                    }
                    collision.tangent.x = -normal.y;
                    collision.tangent.y = normal.x;
                    collision.depth = minOverlap.overlap;
                    collision.penetration.x = normal.x * collision.depth;
                    collision.penetration.y = normal.y * collision.depth;
                    // find support points, there is always either exactly one or two
                    var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1), supportCount = 0;
                    // find the supports from bodyB that are inside bodyA
                    if (Vertices.contains(bodyA.vertices, supportsB[0])) supports[supportCount++] = supportsB[0];
                    if (Vertices.contains(bodyA.vertices, supportsB[1])) supports[supportCount++] = supportsB[1];
                    // find the supports from bodyA that are inside bodyB
                    if (supportCount < 2) {
                        var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);
                        if (Vertices.contains(bodyB.vertices, supportsA[0])) supports[supportCount++] = supportsA[0];
                        if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) supports[supportCount++] = supportsA[1];
                    }
                    // account for the edge case of overlapping but no vertex containment
                    if (supportCount === 0) supports[supportCount++] = supportsB[0];
                    // update supports array size
                    supports.length = supportCount;
                    return collision;
                };
                /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */ Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
                    var verticesALength = verticesA.length, verticesBLength = verticesB.length, verticesAX = verticesA[0].x, verticesAY = verticesA[0].y, verticesBX = verticesB[0].x, verticesBY = verticesB[0].y, axesLength = axes.length, overlapMin = Number.MAX_VALUE, overlapAxisNumber = 0, overlap, overlapAB, overlapBA, dot, i, j;
                    for(i = 0; i < axesLength; i++){
                        var axis = axes[i], axisX = axis.x, axisY = axis.y, minA = verticesAX * axisX + verticesAY * axisY, minB = verticesBX * axisX + verticesBY * axisY, maxA = minA, maxB = minB;
                        for(j = 1; j < verticesALength; j += 1){
                            dot = verticesA[j].x * axisX + verticesA[j].y * axisY;
                            if (dot > maxA) maxA = dot;
                            else if (dot < minA) minA = dot;
                        }
                        for(j = 1; j < verticesBLength; j += 1){
                            dot = verticesB[j].x * axisX + verticesB[j].y * axisY;
                            if (dot > maxB) maxB = dot;
                            else if (dot < minB) minB = dot;
                        }
                        overlapAB = maxA - minB;
                        overlapBA = maxB - minA;
                        overlap = overlapAB < overlapBA ? overlapAB : overlapBA;
                        if (overlap < overlapMin) {
                            overlapMin = overlap;
                            overlapAxisNumber = i;
                            if (overlap <= 0) break;
                        }
                    }
                    result.axis = axes[overlapAxisNumber];
                    result.overlap = overlapMin;
                };
                /**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */ Collision._projectToAxis = function(projection, vertices, axis) {
                    var min = vertices[0].x * axis.x + vertices[0].y * axis.y, max = min;
                    for(var i = 1; i < vertices.length; i += 1){
                        var dot = vertices[i].x * axis.x + vertices[i].y * axis.y;
                        if (dot > max) max = dot;
                        else if (dot < min) min = dot;
                    }
                    projection.min = min;
                    projection.max = max;
                };
                /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */ Collision._findSupports = function(bodyA, bodyB, normal, direction) {
                    var vertices = bodyB.vertices, verticesLength = vertices.length, bodyAPositionX = bodyA.position.x, bodyAPositionY = bodyA.position.y, normalX = normal.x * direction, normalY = normal.y * direction, nearestDistance = Number.MAX_VALUE, vertexA, vertexB, vertexC, distance, j;
                    // find deepest vertex relative to the axis
                    for(j = 0; j < verticesLength; j += 1){
                        vertexB = vertices[j];
                        distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);
                        // convex hill-climbing
                        if (distance < nearestDistance) {
                            nearestDistance = distance;
                            vertexA = vertexB;
                        }
                    }
                    // measure next vertex
                    vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
                    nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);
                    // compare with previous vertex
                    vertexB = vertices[(vertexA.index + 1) % verticesLength];
                    if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
                        _supports[0] = vertexA;
                        _supports[1] = vertexB;
                        return _supports;
                    }
                    _supports[0] = vertexA;
                    _supports[1] = vertexC;
                    return _supports;
                };
            /*
    *
    *  Properties Documentation
    *
    */ /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */ /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */ /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */ /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */ /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */ /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */ /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */ /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * An array of body vertices that represent the support points in the collision.
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */ })();
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/ var Pair = {};
            module1.exports = Pair;
            var Contact = __webpack_require__(16);
            (function() {
                /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */ Pair.create = function(collision, timestamp) {
                    var bodyA = collision.bodyA, bodyB = collision.bodyB;
                    var pair = {
                        id: Pair.id(bodyA, bodyB),
                        bodyA: bodyA,
                        bodyB: bodyB,
                        collision: collision,
                        contacts: [],
                        activeContacts: [],
                        separation: 0,
                        isActive: true,
                        confirmedActive: true,
                        isSensor: bodyA.isSensor || bodyB.isSensor,
                        timeCreated: timestamp,
                        timeUpdated: timestamp,
                        inverseMass: 0,
                        friction: 0,
                        frictionStatic: 0,
                        restitution: 0,
                        slop: 0
                    };
                    Pair.update(pair, collision, timestamp);
                    return pair;
                };
                /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */ Pair.update = function(pair, collision, timestamp) {
                    var contacts = pair.contacts, supports = collision.supports, activeContacts = pair.activeContacts, parentA = collision.parentA, parentB = collision.parentB, parentAVerticesLength = parentA.vertices.length;
                    pair.isActive = true;
                    pair.timeUpdated = timestamp;
                    pair.collision = collision;
                    pair.separation = collision.depth;
                    pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
                    pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
                    pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
                    pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
                    pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;
                    collision.pair = pair;
                    activeContacts.length = 0;
                    for(var i = 0; i < supports.length; i++){
                        var support = supports[i], contactId = support.body === parentA ? support.index : parentAVerticesLength + support.index, contact = contacts[contactId];
                        if (contact) activeContacts.push(contact);
                        else activeContacts.push(contacts[contactId] = Contact.create(support));
                    }
                };
                /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */ Pair.setActive = function(pair, isActive, timestamp) {
                    if (isActive) {
                        pair.isActive = true;
                        pair.timeUpdated = timestamp;
                    } else {
                        pair.isActive = false;
                        pair.activeContacts.length = 0;
                    }
                };
                /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */ Pair.id = function(bodyA, bodyB) {
                    if (bodyA.id < bodyB.id) return "A" + bodyA.id + "B" + bodyB.id;
                    else return "A" + bodyB.id + "B" + bodyA.id;
                };
            })();
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/ var Constraint = {};
            module1.exports = Constraint;
            var Vertices = __webpack_require__(3);
            var Vector = __webpack_require__(2);
            var Sleeping = __webpack_require__(7);
            var Bounds = __webpack_require__(1);
            var Axes = __webpack_require__(11);
            var Common = __webpack_require__(0);
            (function() {
                Constraint._warming = 0.4;
                Constraint._torqueDampen = 1;
                Constraint._minLength = 0.000001;
                /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */ Constraint.create = function(options) {
                    var constraint = options;
                    // if bodies defined but no points, use body centre
                    if (constraint.bodyA && !constraint.pointA) constraint.pointA = {
                        x: 0,
                        y: 0
                    };
                    if (constraint.bodyB && !constraint.pointB) constraint.pointB = {
                        x: 0,
                        y: 0
                    };
                    // calculate static length using initial world space points
                    var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA, initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB, length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
                    constraint.length = typeof constraint.length !== "undefined" ? constraint.length : length;
                    // option defaults
                    constraint.id = constraint.id || Common.nextId();
                    constraint.label = constraint.label || "Constraint";
                    constraint.type = "constraint";
                    constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
                    constraint.damping = constraint.damping || 0;
                    constraint.angularStiffness = constraint.angularStiffness || 0;
                    constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
                    constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
                    constraint.plugin = {};
                    // render
                    var render = {
                        visible: true,
                        lineWidth: 2,
                        strokeStyle: "#ffffff",
                        type: "line",
                        anchors: true
                    };
                    if (constraint.length === 0 && constraint.stiffness > 0.1) {
                        render.type = "pin";
                        render.anchors = false;
                    } else if (constraint.stiffness < 0.9) render.type = "spring";
                    constraint.render = Common.extend(render, constraint.render);
                    return constraint;
                };
                /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */ Constraint.preSolveAll = function(bodies) {
                    for(var i = 0; i < bodies.length; i += 1){
                        var body = bodies[i], impulse = body.constraintImpulse;
                        if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
                        body.position.x += impulse.x;
                        body.position.y += impulse.y;
                        body.angle += impulse.angle;
                    }
                };
                /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} delta
     */ Constraint.solveAll = function(constraints, delta) {
                    var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);
                    // Solve fixed constraints first.
                    for(var i = 0; i < constraints.length; i += 1){
                        var constraint = constraints[i], fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic, fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                        if (fixedA || fixedB) Constraint.solve(constraints[i], timeScale);
                    }
                    // Solve free constraints last.
                    for(i = 0; i < constraints.length; i += 1){
                        constraint = constraints[i];
                        fixedA = !constraint.bodyA || constraint.bodyA && constraint.bodyA.isStatic;
                        fixedB = !constraint.bodyB || constraint.bodyB && constraint.bodyB.isStatic;
                        if (!fixedA && !fixedB) Constraint.solve(constraints[i], timeScale);
                    }
                };
                /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */ Constraint.solve = function(constraint, timeScale) {
                    var bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointA = constraint.pointA, pointB = constraint.pointB;
                    if (!bodyA && !bodyB) return;
                    // update reference angle
                    if (bodyA && !bodyA.isStatic) {
                        Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
                        constraint.angleA = bodyA.angle;
                    }
                    // update reference angle
                    if (bodyB && !bodyB.isStatic) {
                        Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
                        constraint.angleB = bodyB.angle;
                    }
                    var pointAWorld = pointA, pointBWorld = pointB;
                    if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
                    if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);
                    if (!pointAWorld || !pointBWorld) return;
                    var delta = Vector.sub(pointAWorld, pointBWorld), currentLength = Vector.magnitude(delta);
                    // prevent singularity
                    if (currentLength < Constraint._minLength) currentLength = Constraint._minLength;
                    // solve distance constraint with Gauss-Siedel method
                    var difference = (currentLength - constraint.length) / currentLength, isRigid = constraint.stiffness >= 1 || constraint.length === 0, stiffness = isRigid ? constraint.stiffness * timeScale : constraint.stiffness * timeScale * timeScale, damping = constraint.damping * timeScale, force = Vector.mult(delta, difference * stiffness), massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0), inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0), resistanceTotal = massTotal + inertiaTotal, torque, share, normal, normalVelocity, relativeVelocity;
                    if (damping > 0) {
                        var zero = Vector.create();
                        normal = Vector.div(delta, currentLength);
                        relativeVelocity = Vector.sub(bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero, bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero);
                        normalVelocity = Vector.dot(normal, relativeVelocity);
                    }
                    if (bodyA && !bodyA.isStatic) {
                        share = bodyA.inverseMass / massTotal;
                        // keep track of applied impulses for post solving
                        bodyA.constraintImpulse.x -= force.x * share;
                        bodyA.constraintImpulse.y -= force.y * share;
                        // apply forces
                        bodyA.position.x -= force.x * share;
                        bodyA.position.y -= force.y * share;
                        // apply damping
                        if (damping > 0) {
                            bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                            bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
                        }
                        // apply torque
                        torque = Vector.cross(pointA, force) / resistanceTotal * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
                        bodyA.constraintImpulse.angle -= torque;
                        bodyA.angle -= torque;
                    }
                    if (bodyB && !bodyB.isStatic) {
                        share = bodyB.inverseMass / massTotal;
                        // keep track of applied impulses for post solving
                        bodyB.constraintImpulse.x += force.x * share;
                        bodyB.constraintImpulse.y += force.y * share;
                        // apply forces
                        bodyB.position.x += force.x * share;
                        bodyB.position.y += force.y * share;
                        // apply damping
                        if (damping > 0) {
                            bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                            bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
                        }
                        // apply torque
                        torque = Vector.cross(pointB, force) / resistanceTotal * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
                        bodyB.constraintImpulse.angle += torque;
                        bodyB.angle += torque;
                    }
                };
                /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */ Constraint.postSolveAll = function(bodies) {
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], impulse = body.constraintImpulse;
                        if (body.isStatic || impulse.x === 0 && impulse.y === 0 && impulse.angle === 0) continue;
                        Sleeping.set(body, false);
                        // update geometry and reset
                        for(var j = 0; j < body.parts.length; j++){
                            var part = body.parts[j];
                            Vertices.translate(part.vertices, impulse);
                            if (j > 0) {
                                part.position.x += impulse.x;
                                part.position.y += impulse.y;
                            }
                            if (impulse.angle !== 0) {
                                Vertices.rotate(part.vertices, impulse.angle, body.position);
                                Axes.rotate(part.axes, impulse.angle);
                                if (j > 0) Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                            }
                            Bounds.update(part.bounds, part.vertices, body.velocity);
                        }
                        // dampen the cached impulse for warming next step
                        impulse.angle *= Constraint._warming;
                        impulse.x *= Constraint._warming;
                        impulse.y *= Constraint._warming;
                    }
                };
                /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */ Constraint.pointAWorld = function(constraint) {
                    return {
                        x: (constraint.bodyA ? constraint.bodyA.position.x : 0) + (constraint.pointA ? constraint.pointA.x : 0),
                        y: (constraint.bodyA ? constraint.bodyA.position.y : 0) + (constraint.pointA ? constraint.pointA.y : 0)
                    };
                };
                /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */ Constraint.pointBWorld = function(constraint) {
                    return {
                        x: (constraint.bodyB ? constraint.bodyB.position.x : 0) + (constraint.pointB ? constraint.pointB.x : 0),
                        y: (constraint.bodyB ? constraint.bodyB.position.y : 0) + (constraint.pointB ? constraint.pointB.y : 0)
                    };
                };
            /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */ /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */ /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */ /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */ /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */ /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */ /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */ /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */ /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */ /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */ /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */ /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */ /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */ /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ })();
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/ var Axes = {};
            module1.exports = Axes;
            var Vector = __webpack_require__(2);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */ Axes.fromVertices = function(vertices) {
                    var axes = {};
                    // find the unique axes, using edge normal gradients
                    for(var i = 0; i < vertices.length; i++){
                        var j = (i + 1) % vertices.length, normal = Vector.normalise({
                            x: vertices[j].y - vertices[i].y,
                            y: vertices[i].x - vertices[j].x
                        }), gradient = normal.y === 0 ? Infinity : normal.x / normal.y;
                        // limit precision
                        gradient = gradient.toFixed(3).toString();
                        axes[gradient] = normal;
                    }
                    return Common.values(axes);
                };
                /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */ Axes.rotate = function(axes, angle) {
                    if (angle === 0) return;
                    var cos = Math.cos(angle), sin = Math.sin(angle);
                    for(var i = 0; i < axes.length; i++){
                        var axis = axes[i], xx;
                        xx = axis.x * cos - axis.y * sin;
                        axis.y = axis.x * sin + axis.y * cos;
                        axis.x = xx;
                    }
                };
            })();
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/ // TODO: true circle bodies
            var Bodies = {};
            module1.exports = Bodies;
            var Vertices = __webpack_require__(3);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(4);
            var Bounds = __webpack_require__(1);
            var Vector = __webpack_require__(2);
            (function() {
                /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */ Bodies.rectangle = function(x, y, width, height, options) {
                    options = options || {};
                    var rectangle = {
                        label: "Rectangle Body",
                        position: {
                            x: x,
                            y: y
                        },
                        vertices: Vertices.fromPath("L 0 0 L " + width + " 0 L " + width + " " + height + " L 0 " + height)
                    };
                    if (options.chamfer) {
                        var chamfer = options.chamfer;
                        rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                        delete options.chamfer;
                    }
                    return Body.create(Common.extend({}, rectangle, options));
                };
                /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */ Bodies.trapezoid = function(x, y, width, height, slope, options) {
                    options = options || {};
                    slope *= 0.5;
                    var roof = (1 - slope * 2) * width;
                    var x1 = width * slope, x2 = x1 + roof, x3 = x2 + x1, verticesPath;
                    if (slope < 0.5) verticesPath = "L 0 0 L " + x1 + " " + -height + " L " + x2 + " " + -height + " L " + x3 + " 0";
                    else verticesPath = "L 0 0 L " + x2 + " " + -height + " L " + x3 + " 0";
                    var trapezoid = {
                        label: "Trapezoid Body",
                        position: {
                            x: x,
                            y: y
                        },
                        vertices: Vertices.fromPath(verticesPath)
                    };
                    if (options.chamfer) {
                        var chamfer = options.chamfer;
                        trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                        delete options.chamfer;
                    }
                    return Body.create(Common.extend({}, trapezoid, options));
                };
                /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */ Bodies.circle = function(x, y, radius, options, maxSides) {
                    options = options || {};
                    var circle = {
                        label: "Circle Body",
                        circleRadius: radius
                    };
                    // approximate circles with polygons until true circles implemented in SAT
                    maxSides = maxSides || 25;
                    var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));
                    // optimisation: always use even number of sides (half the number of unique axes)
                    if (sides % 2 === 1) sides += 1;
                    return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
                };
                /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */ Bodies.polygon = function(x, y, sides, radius, options) {
                    options = options || {};
                    if (sides < 3) return Bodies.circle(x, y, radius, options);
                    var theta = 2 * Math.PI / sides, path = "", offset = theta * 0.5;
                    for(var i = 0; i < sides; i += 1){
                        var angle = offset + i * theta, xx = Math.cos(angle) * radius, yy = Math.sin(angle) * radius;
                        path += "L " + xx.toFixed(3) + " " + yy.toFixed(3) + " ";
                    }
                    var polygon = {
                        label: "Polygon Body",
                        position: {
                            x: x,
                            y: y
                        },
                        vertices: Vertices.fromPath(path)
                    };
                    if (options.chamfer) {
                        var chamfer = options.chamfer;
                        polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
                        delete options.chamfer;
                    }
                    return Body.create(Common.extend({}, polygon, options));
                };
                /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */ Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
                    var decomp = Common.getDecomp(), canDecomp, body, parts, isConvex, isConcave, vertices, i, j, k, v, z;
                    // check decomp is as expected
                    canDecomp = Boolean(decomp && decomp.quickDecomp);
                    options = options || {};
                    parts = [];
                    flagInternal = typeof flagInternal !== "undefined" ? flagInternal : false;
                    removeCollinear = typeof removeCollinear !== "undefined" ? removeCollinear : 0.01;
                    minimumArea = typeof minimumArea !== "undefined" ? minimumArea : 10;
                    removeDuplicatePoints = typeof removeDuplicatePoints !== "undefined" ? removeDuplicatePoints : 0.01;
                    // ensure vertexSets is an array of arrays
                    if (!Common.isArray(vertexSets[0])) vertexSets = [
                        vertexSets
                    ];
                    for(v = 0; v < vertexSets.length; v += 1){
                        vertices = vertexSets[v];
                        isConvex = Vertices.isConvex(vertices);
                        isConcave = !isConvex;
                        if (isConcave && !canDecomp) Common.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.");
                        if (isConvex || !canDecomp) {
                            if (isConvex) vertices = Vertices.clockwiseSort(vertices);
                            else // fallback to convex hull when decomposition is not possible
                            vertices = Vertices.hull(vertices);
                            parts.push({
                                position: {
                                    x: x,
                                    y: y
                                },
                                vertices: vertices
                            });
                        } else {
                            // initialise a decomposition
                            var concave = vertices.map(function(vertex) {
                                return [
                                    vertex.x,
                                    vertex.y
                                ];
                            });
                            // vertices are concave and simple, we can decompose into parts
                            decomp.makeCCW(concave);
                            if (removeCollinear !== false) decomp.removeCollinearPoints(concave, removeCollinear);
                            if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints) decomp.removeDuplicatePoints(concave, removeDuplicatePoints);
                            // use the quick decomposition algorithm (Bayazit)
                            var decomposed = decomp.quickDecomp(concave);
                            // for each decomposed chunk
                            for(i = 0; i < decomposed.length; i++){
                                var chunk = decomposed[i];
                                // convert vertices into the correct structure
                                var chunkVertices = chunk.map(function(vertices) {
                                    return {
                                        x: vertices[0],
                                        y: vertices[1]
                                    };
                                });
                                // skip small chunks
                                if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea) continue;
                                // create a compound part
                                parts.push({
                                    position: Vertices.centre(chunkVertices),
                                    vertices: chunkVertices
                                });
                            }
                        }
                    }
                    // create body parts
                    for(i = 0; i < parts.length; i++)parts[i] = Body.create(Common.extend(parts[i], options));
                    // flag internal edges (coincident part edges)
                    if (flagInternal) {
                        var coincident_max_dist = 5;
                        for(i = 0; i < parts.length; i++){
                            var partA = parts[i];
                            for(j = i + 1; j < parts.length; j++){
                                var partB = parts[j];
                                if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                                    var pav = partA.vertices, pbv = partB.vertices;
                                    // iterate vertices of both parts
                                    for(k = 0; k < partA.vertices.length; k++)for(z = 0; z < partB.vertices.length; z++){
                                        // find distances between the vertices
                                        var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])), db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));
                                        // if both vertices are very close, consider the edge concident (internal)
                                        if (da < coincident_max_dist && db < coincident_max_dist) {
                                            pav[k].isInternal = true;
                                            pbv[z].isInternal = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (parts.length > 1) {
                        // create the parent body to be returned, that contains generated compound parts
                        body = Body.create(Common.extend({
                            parts: parts.slice(0)
                        }, options));
                        // offset such that body.position is at the centre off mass
                        Body.setPosition(body, {
                            x: x,
                            y: y
                        });
                        return body;
                    } else return parts[0];
                };
            })();
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/ var Detector = {};
            module1.exports = Detector;
            var Common = __webpack_require__(0);
            var Collision = __webpack_require__(8);
            (function() {
                /**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */ Detector.create = function(options) {
                    var defaults = {
                        bodies: [],
                        pairs: null
                    };
                    return Common.extend(defaults, options);
                };
                /**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */ Detector.setBodies = function(detector, bodies) {
                    detector.bodies = bodies.slice(0);
                };
                /**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */ Detector.clear = function(detector) {
                    detector.bodies = [];
                };
                /**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */ Detector.collisions = function(detector) {
                    var collisions = [], pairs = detector.pairs, bodies = detector.bodies, bodiesLength = bodies.length, canCollide = Detector.canCollide, collides = Collision.collides, i, j;
                    bodies.sort(Detector._compareBoundsX);
                    for(i = 0; i < bodiesLength; i++){
                        var bodyA = bodies[i], boundsA = bodyA.bounds, boundXMax = bodyA.bounds.max.x, boundYMax = bodyA.bounds.max.y, boundYMin = bodyA.bounds.min.y, bodyAStatic = bodyA.isStatic || bodyA.isSleeping, partsALength = bodyA.parts.length, partsASingle = partsALength === 1;
                        for(j = i + 1; j < bodiesLength; j++){
                            var bodyB = bodies[j], boundsB = bodyB.bounds;
                            if (boundsB.min.x > boundXMax) break;
                            if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) continue;
                            if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) continue;
                            if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) continue;
                            var partsBLength = bodyB.parts.length;
                            if (partsASingle && partsBLength === 1) {
                                var collision = collides(bodyA, bodyB, pairs);
                                if (collision) collisions.push(collision);
                            } else {
                                var partsAStart = partsALength > 1 ? 1 : 0, partsBStart = partsBLength > 1 ? 1 : 0;
                                for(var k = partsAStart; k < partsALength; k++){
                                    var partA = bodyA.parts[k], boundsA = partA.bounds;
                                    for(var z = partsBStart; z < partsBLength; z++){
                                        var partB = bodyB.parts[z], boundsB = partB.bounds;
                                        if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) continue;
                                        var collision = collides(partA, partB, pairs);
                                        if (collision) collisions.push(collision);
                                    }
                                }
                            }
                        }
                    }
                    return collisions;
                };
                /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */ Detector.canCollide = function(filterA, filterB) {
                    if (filterA.group === filterB.group && filterA.group !== 0) return filterA.group > 0;
                    return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
                };
                /**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */ Detector._compareBoundsX = function(bodyA, bodyB) {
                    return bodyA.bounds.min.x - bodyB.bounds.min.x;
                };
            /*
    *
    *  Properties Documentation
    *
    */ /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */ /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */ })();
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/ var Mouse = {};
            module1.exports = Mouse;
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */ Mouse.create = function(element) {
                    var mouse = {};
                    if (!element) Common.log("Mouse.create: element was undefined, defaulting to document.body", "warn");
                    mouse.element = element || document.body;
                    mouse.absolute = {
                        x: 0,
                        y: 0
                    };
                    mouse.position = {
                        x: 0,
                        y: 0
                    };
                    mouse.mousedownPosition = {
                        x: 0,
                        y: 0
                    };
                    mouse.mouseupPosition = {
                        x: 0,
                        y: 0
                    };
                    mouse.offset = {
                        x: 0,
                        y: 0
                    };
                    mouse.scale = {
                        x: 1,
                        y: 1
                    };
                    mouse.wheelDelta = 0;
                    mouse.button = -1;
                    mouse.pixelRatio = parseInt(mouse.element.getAttribute("data-pixel-ratio"), 10) || 1;
                    mouse.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null
                    };
                    mouse.mousemove = function(event) {
                        var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                        if (touches) {
                            mouse.button = 0;
                            event.preventDefault();
                        }
                        mouse.absolute.x = position.x;
                        mouse.absolute.y = position.y;
                        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        mouse.sourceEvents.mousemove = event;
                    };
                    mouse.mousedown = function(event) {
                        var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                        if (touches) {
                            mouse.button = 0;
                            event.preventDefault();
                        } else mouse.button = event.button;
                        mouse.absolute.x = position.x;
                        mouse.absolute.y = position.y;
                        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        mouse.mousedownPosition.x = mouse.position.x;
                        mouse.mousedownPosition.y = mouse.position.y;
                        mouse.sourceEvents.mousedown = event;
                    };
                    mouse.mouseup = function(event) {
                        var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio), touches = event.changedTouches;
                        if (touches) event.preventDefault();
                        mouse.button = -1;
                        mouse.absolute.x = position.x;
                        mouse.absolute.y = position.y;
                        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                        mouse.mouseupPosition.x = mouse.position.x;
                        mouse.mouseupPosition.y = mouse.position.y;
                        mouse.sourceEvents.mouseup = event;
                    };
                    mouse.mousewheel = function(event) {
                        mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
                        event.preventDefault();
                    };
                    Mouse.setElement(mouse, mouse.element);
                    return mouse;
                };
                /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */ Mouse.setElement = function(mouse, element) {
                    mouse.element = element;
                    element.addEventListener("mousemove", mouse.mousemove);
                    element.addEventListener("mousedown", mouse.mousedown);
                    element.addEventListener("mouseup", mouse.mouseup);
                    element.addEventListener("mousewheel", mouse.mousewheel);
                    element.addEventListener("DOMMouseScroll", mouse.mousewheel);
                    element.addEventListener("touchmove", mouse.mousemove);
                    element.addEventListener("touchstart", mouse.mousedown);
                    element.addEventListener("touchend", mouse.mouseup);
                };
                /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */ Mouse.clearSourceEvents = function(mouse) {
                    mouse.sourceEvents.mousemove = null;
                    mouse.sourceEvents.mousedown = null;
                    mouse.sourceEvents.mouseup = null;
                    mouse.sourceEvents.mousewheel = null;
                    mouse.wheelDelta = 0;
                };
                /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */ Mouse.setOffset = function(mouse, offset) {
                    mouse.offset.x = offset.x;
                    mouse.offset.y = offset.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */ Mouse.setScale = function(mouse, scale) {
                    mouse.scale.x = scale.x;
                    mouse.scale.y = scale.y;
                    mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
                    mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
                };
                /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */ Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
                    var elementBounds = element.getBoundingClientRect(), rootNode = document.documentElement || document.body.parentNode || document.body, scrollX = window.pageXOffset !== undefined ? window.pageXOffset : rootNode.scrollLeft, scrollY = window.pageYOffset !== undefined ? window.pageYOffset : rootNode.scrollTop, touches = event.changedTouches, x, y;
                    if (touches) {
                        x = touches[0].pageX - elementBounds.left - scrollX;
                        y = touches[0].pageY - elementBounds.top - scrollY;
                    } else {
                        x = event.pageX - elementBounds.left - scrollX;
                        y = event.pageY - elementBounds.top - scrollY;
                    }
                    return {
                        x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
                        y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
                    };
                };
            })();
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/ var Plugin = {};
            module1.exports = Plugin;
            var Common = __webpack_require__(0);
            (function() {
                Plugin._registry = {};
                /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */ Plugin.register = function(plugin) {
                    if (!Plugin.isPlugin(plugin)) Common.warn("Plugin.register:", Plugin.toString(plugin), "does not implement all required fields.");
                    if (plugin.name in Plugin._registry) {
                        var registered = Plugin._registry[plugin.name], pluginVersion = Plugin.versionParse(plugin.version).number, registeredVersion = Plugin.versionParse(registered.version).number;
                        if (pluginVersion > registeredVersion) {
                            Common.warn("Plugin.register:", Plugin.toString(registered), "was upgraded to", Plugin.toString(plugin));
                            Plugin._registry[plugin.name] = plugin;
                        } else if (pluginVersion < registeredVersion) Common.warn("Plugin.register:", Plugin.toString(registered), "can not be downgraded to", Plugin.toString(plugin));
                        else if (plugin !== registered) Common.warn("Plugin.register:", Plugin.toString(plugin), "is already registered to different plugin object");
                    } else Plugin._registry[plugin.name] = plugin;
                    return plugin;
                };
                /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */ Plugin.resolve = function(dependency) {
                    return Plugin._registry[Plugin.dependencyParse(dependency).name];
                };
                /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */ Plugin.toString = function(plugin) {
                    return typeof plugin === "string" ? plugin : (plugin.name || "anonymous") + "@" + (plugin.version || plugin.range || "0.0.0");
                };
                /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */ Plugin.isPlugin = function(obj) {
                    return obj && obj.name && obj.version && obj.install;
                };
                /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */ Plugin.isUsed = function(module1, name) {
                    return module1.used.indexOf(name) > -1;
                };
                /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */ Plugin.isFor = function(plugin, module1) {
                    var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
                    return !plugin.for || module1.name === parsed.name && Plugin.versionSatisfies(module1.version, parsed.range);
                };
                /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */ Plugin.use = function(module1, plugins) {
                    module1.uses = (module1.uses || []).concat(plugins || []);
                    if (module1.uses.length === 0) {
                        Common.warn("Plugin.use:", Plugin.toString(module1), "does not specify any dependencies to install.");
                        return;
                    }
                    var dependencies = Plugin.dependencies(module1), sortedDependencies = Common.topologicalSort(dependencies), status = [];
                    for(var i = 0; i < sortedDependencies.length; i += 1){
                        if (sortedDependencies[i] === module1.name) continue;
                        var plugin = Plugin.resolve(sortedDependencies[i]);
                        if (!plugin) {
                            status.push("\u274C " + sortedDependencies[i]);
                            continue;
                        }
                        if (Plugin.isUsed(module1, plugin.name)) continue;
                        if (!Plugin.isFor(plugin, module1)) {
                            Common.warn("Plugin.use:", Plugin.toString(plugin), "is for", plugin.for, "but installed on", Plugin.toString(module1) + ".");
                            plugin._warned = true;
                        }
                        if (plugin.install) plugin.install(module1);
                        else {
                            Common.warn("Plugin.use:", Plugin.toString(plugin), "does not specify an install function.");
                            plugin._warned = true;
                        }
                        if (plugin._warned) {
                            status.push("\uD83D\uDD36 " + Plugin.toString(plugin));
                            delete plugin._warned;
                        } else status.push("\u2705 " + Plugin.toString(plugin));
                        module1.used.push(plugin.name);
                    }
                    if (status.length > 0) Common.info(status.join("  "));
                };
                /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */ Plugin.dependencies = function(module1, tracked) {
                    var parsedBase = Plugin.dependencyParse(module1), name = parsedBase.name;
                    tracked = tracked || {};
                    if (name in tracked) return;
                    module1 = Plugin.resolve(module1) || module1;
                    tracked[name] = Common.map(module1.uses || [], function(dependency) {
                        if (Plugin.isPlugin(dependency)) Plugin.register(dependency);
                        var parsed = Plugin.dependencyParse(dependency), resolved = Plugin.resolve(dependency);
                        if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                            Common.warn("Plugin.dependencies:", Plugin.toString(resolved), "does not satisfy", Plugin.toString(parsed), "used by", Plugin.toString(parsedBase) + ".");
                            resolved._warned = true;
                            module1._warned = true;
                        } else if (!resolved) {
                            Common.warn("Plugin.dependencies:", Plugin.toString(dependency), "used by", Plugin.toString(parsedBase), "could not be resolved.");
                            module1._warned = true;
                        }
                        return parsed.name;
                    });
                    for(var i = 0; i < tracked[name].length; i += 1)Plugin.dependencies(tracked[name][i], tracked);
                    return tracked;
                };
                /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */ Plugin.dependencyParse = function(dependency) {
                    if (Common.isString(dependency)) {
                        var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                        if (!pattern.test(dependency)) Common.warn("Plugin.dependencyParse:", dependency, "is not a valid dependency string.");
                        return {
                            name: dependency.split("@")[0],
                            range: dependency.split("@")[1] || "*"
                        };
                    }
                    return {
                        name: dependency.name,
                        range: dependency.range || dependency.version
                    };
                };
                /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */ Plugin.versionParse = function(range) {
                    var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    if (!pattern.test(range)) Common.warn("Plugin.versionParse:", range, "is not a valid version or range.");
                    var parts = pattern.exec(range);
                    var major = Number(parts[4]);
                    var minor = Number(parts[5]);
                    var patch = Number(parts[6]);
                    return {
                        isRange: Boolean(parts[1] || parts[2]),
                        version: parts[3],
                        range: range,
                        operator: parts[1] || parts[2] || "",
                        major: major,
                        minor: minor,
                        patch: patch,
                        parts: [
                            major,
                            minor,
                            patch
                        ],
                        prerelease: parts[7],
                        number: major * 1e8 + minor * 1e4 + patch
                    };
                };
                /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */ Plugin.versionSatisfies = function(version, range) {
                    range = range || "*";
                    var r = Plugin.versionParse(range), v = Plugin.versionParse(version);
                    if (r.isRange) {
                        if (r.operator === "*" || version === "*") return true;
                        if (r.operator === ">") return v.number > r.number;
                        if (r.operator === ">=") return v.number >= r.number;
                        if (r.operator === "~") return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
                        if (r.operator === "^") {
                            if (r.major > 0) return v.major === r.major && v.number >= r.number;
                            if (r.minor > 0) return v.minor === r.minor && v.patch >= r.patch;
                            return v.patch === r.patch;
                        }
                    }
                    return version === range || version === "*";
                };
            })();
        /***/ },
        /* 16 */ /***/ function(module1, exports) {
            /**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/ var Contact = {};
            module1.exports = Contact;
            (function() {
                /**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */ Contact.create = function(vertex) {
                    return {
                        vertex: vertex,
                        normalImpulse: 0,
                        tangentImpulse: 0
                    };
                };
            })();
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/ var Engine = {};
            module1.exports = Engine;
            var Sleeping = __webpack_require__(7);
            var Resolver = __webpack_require__(18);
            var Detector = __webpack_require__(13);
            var Pairs = __webpack_require__(19);
            var Events = __webpack_require__(5);
            var Composite = __webpack_require__(6);
            var Constraint = __webpack_require__(10);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(4);
            (function() {
                /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */ Engine.create = function(options) {
                    options = options || {};
                    var defaults = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: false,
                        events: [],
                        plugin: {},
                        gravity: {
                            x: 0,
                            y: 1,
                            scale: 0.001
                        },
                        timing: {
                            timestamp: 0,
                            timeScale: 1,
                            lastDelta: 0,
                            lastElapsed: 0
                        }
                    };
                    var engine = Common.extend(defaults, options);
                    engine.world = options.world || Composite.create({
                        label: "World"
                    });
                    engine.pairs = options.pairs || Pairs.create();
                    engine.detector = options.detector || Detector.create();
                    // for temporary back compatibility only
                    engine.grid = {
                        buckets: []
                    };
                    engine.world.gravity = engine.gravity;
                    engine.broadphase = engine.grid;
                    engine.metrics = {};
                    return engine;
                };
                /**
     * Moves the simulation forward in time by `delta` milliseconds.
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     */ Engine.update = function(engine, delta) {
                    var startTime = Common.now();
                    var world = engine.world, detector = engine.detector, pairs = engine.pairs, timing = engine.timing, timestamp = timing.timestamp, i;
                    delta = typeof delta !== "undefined" ? delta : Common._baseDelta;
                    delta *= timing.timeScale;
                    // increment timestamp
                    timing.timestamp += delta;
                    timing.lastDelta = delta;
                    // create an event object
                    var event = {
                        timestamp: timing.timestamp,
                        delta: delta
                    };
                    Events.trigger(engine, "beforeUpdate", event);
                    // get all bodies and all constraints in the world
                    var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world);
                    // if the world has changed
                    if (world.isModified) {
                        // update the detector bodies
                        Detector.setBodies(detector, allBodies);
                        // reset all composite modified flags
                        Composite.setModified(world, false, false, true);
                    }
                    // update sleeping if enabled
                    if (engine.enableSleeping) Sleeping.update(allBodies, delta);
                    // apply gravity to all bodies
                    Engine._bodiesApplyGravity(allBodies, engine.gravity);
                    // update all body position and rotation by integration
                    if (delta > 0) Engine._bodiesUpdate(allBodies, delta);
                    // update all constraints (first pass)
                    Constraint.preSolveAll(allBodies);
                    for(i = 0; i < engine.constraintIterations; i++)Constraint.solveAll(allConstraints, delta);
                    Constraint.postSolveAll(allBodies);
                    // find all collisions
                    detector.pairs = engine.pairs;
                    var collisions = Detector.collisions(detector);
                    // update collision pairs
                    Pairs.update(pairs, collisions, timestamp);
                    // wake up bodies involved in collisions
                    if (engine.enableSleeping) Sleeping.afterCollisions(pairs.list);
                    // trigger collision events
                    if (pairs.collisionStart.length > 0) Events.trigger(engine, "collisionStart", {
                        pairs: pairs.collisionStart
                    });
                    // iteratively resolve position between collisions
                    var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
                    Resolver.preSolvePosition(pairs.list);
                    for(i = 0; i < engine.positionIterations; i++)Resolver.solvePosition(pairs.list, delta, positionDamping);
                    Resolver.postSolvePosition(allBodies);
                    // update all constraints (second pass)
                    Constraint.preSolveAll(allBodies);
                    for(i = 0; i < engine.constraintIterations; i++)Constraint.solveAll(allConstraints, delta);
                    Constraint.postSolveAll(allBodies);
                    // iteratively resolve velocity between collisions
                    Resolver.preSolveVelocity(pairs.list);
                    for(i = 0; i < engine.velocityIterations; i++)Resolver.solveVelocity(pairs.list, delta);
                    // update body speed and velocity properties
                    Engine._bodiesUpdateVelocities(allBodies);
                    // trigger collision events
                    if (pairs.collisionActive.length > 0) Events.trigger(engine, "collisionActive", {
                        pairs: pairs.collisionActive
                    });
                    if (pairs.collisionEnd.length > 0) Events.trigger(engine, "collisionEnd", {
                        pairs: pairs.collisionEnd
                    });
                    // clear force buffers
                    Engine._bodiesClearForces(allBodies);
                    Events.trigger(engine, "afterUpdate", event);
                    // log the time elapsed computing this update
                    engine.timing.lastElapsed = Common.now() - startTime;
                    return engine;
                };
                /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */ Engine.merge = function(engineA, engineB) {
                    Common.extend(engineA, engineB);
                    if (engineB.world) {
                        engineA.world = engineB.world;
                        Engine.clear(engineA);
                        var bodies = Composite.allBodies(engineA.world);
                        for(var i = 0; i < bodies.length; i++){
                            var body = bodies[i];
                            Sleeping.set(body, false);
                            body.id = Common.nextId();
                        }
                    }
                };
                /**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */ Engine.clear = function(engine) {
                    Pairs.clear(engine.pairs);
                    Detector.clear(engine.detector);
                };
                /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */ Engine._bodiesClearForces = function(bodies) {
                    var bodiesLength = bodies.length;
                    for(var i = 0; i < bodiesLength; i++){
                        var body = bodies[i];
                        // reset force buffers
                        body.force.x = 0;
                        body.force.y = 0;
                        body.torque = 0;
                    }
                };
                /**
     * Applies gravitational acceleration to all `bodies`.
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
     * 
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */ Engine._bodiesApplyGravity = function(bodies, gravity) {
                    var gravityScale = typeof gravity.scale !== "undefined" ? gravity.scale : 0.001, bodiesLength = bodies.length;
                    if (gravity.x === 0 && gravity.y === 0 || gravityScale === 0) return;
                    for(var i = 0; i < bodiesLength; i++){
                        var body = bodies[i];
                        if (body.isStatic || body.isSleeping) continue;
                        // add the resultant force of gravity
                        body.force.y += body.mass * gravity.y * gravityScale;
                        body.force.x += body.mass * gravity.x * gravityScale;
                    }
                };
                /**
     * Applies `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} delta The amount of time elapsed between updates
     */ Engine._bodiesUpdate = function(bodies, delta) {
                    var bodiesLength = bodies.length;
                    for(var i = 0; i < bodiesLength; i++){
                        var body = bodies[i];
                        if (body.isStatic || body.isSleeping) continue;
                        Body.update(body, delta);
                    }
                };
                /**
     * Applies `Body.updateVelocities` to all given `bodies`.
     * @method _bodiesUpdateVelocities
     * @private
     * @param {body[]} bodies
     */ Engine._bodiesUpdateVelocities = function(bodies) {
                    var bodiesLength = bodies.length;
                    for(var i = 0; i < bodiesLength; i++)Body.updateVelocities(bodies[i]);
                };
            /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */ /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */ /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */ /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */ /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */ /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */ /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */ /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     * 
     * @property timing.timestamp
     * @type number
     * @default 0
     */ /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     * 
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */ /**
     * A `Number` that represents the `delta` value used in the last engine update.
     * 
     * @property timing.lastDelta
     * @type number
     * @default 0
     */ /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */ /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */ /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */ /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */ /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */ /**
     * An optional gravitational acceleration applied to all bodies in `engine.world` on every update.
     * 
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet. For gravity in other contexts, disable this and apply forces as needed.
     * 
     * To disable set the `scale` component to `0`.
     * 
     * This is split into three components for ease of use:  
     * a normalised direction (`x` and `y`) and magnitude (`scale`).
     *
     * @property gravity
     * @type object
     */ /**
     * The gravitational direction normal `x` component, to be multiplied by `gravity.scale`.
     * 
     * @property gravity.x
     * @type object
     * @default 0
     */ /**
     * The gravitational direction normal `y` component, to be multiplied by `gravity.scale`.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */ /**
     * The magnitude of the gravitational acceleration.
     * 
     * @property gravity.scale
     * @type object
     * @default 0.001
     */ })();
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/ var Resolver = {};
            module1.exports = Resolver;
            var Vertices = __webpack_require__(3);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            (function() {
                Resolver._restingThresh = 2;
                Resolver._restingThreshTangent = Math.sqrt(6);
                Resolver._positionDampen = 0.9;
                Resolver._positionWarming = 0.8;
                Resolver._frictionNormalMultiplier = 5;
                Resolver._frictionMaxStatic = Number.MAX_VALUE;
                /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */ Resolver.preSolvePosition = function(pairs) {
                    var i, pair, activeCount, pairsLength = pairs.length;
                    // find total contacts on each body
                    for(i = 0; i < pairsLength; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        activeCount = pair.activeContacts.length;
                        pair.collision.parentA.totalContacts += activeCount;
                        pair.collision.parentB.totalContacts += activeCount;
                    }
                };
                /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} delta
     * @param {number} [damping=1]
     */ Resolver.solvePosition = function(pairs, delta, damping) {
                    var i, pair, collision, bodyA, bodyB, normal, contactShare, positionImpulse, positionDampen = Resolver._positionDampen * (damping || 1), slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1), pairsLength = pairs.length;
                    // find impulses required to resolve penetration
                    for(i = 0; i < pairsLength; i++){
                        pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        collision = pair.collision;
                        bodyA = collision.parentA;
                        bodyB = collision.parentB;
                        normal = collision.normal;
                        // get current separation between body edges involved in collision
                        pair.separation = normal.x * (bodyB.positionImpulse.x + collision.penetration.x - bodyA.positionImpulse.x) + normal.y * (bodyB.positionImpulse.y + collision.penetration.y - bodyA.positionImpulse.y);
                    }
                    for(i = 0; i < pairsLength; i++){
                        pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        collision = pair.collision;
                        bodyA = collision.parentA;
                        bodyB = collision.parentB;
                        normal = collision.normal;
                        positionImpulse = pair.separation - pair.slop * slopDampen;
                        if (bodyA.isStatic || bodyB.isStatic) positionImpulse *= 2;
                        if (!(bodyA.isStatic || bodyA.isSleeping)) {
                            contactShare = positionDampen / bodyA.totalContacts;
                            bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                            bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
                        }
                        if (!(bodyB.isStatic || bodyB.isSleeping)) {
                            contactShare = positionDampen / bodyB.totalContacts;
                            bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                            bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
                        }
                    }
                };
                /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */ Resolver.postSolvePosition = function(bodies) {
                    var positionWarming = Resolver._positionWarming, bodiesLength = bodies.length, verticesTranslate = Vertices.translate, boundsUpdate = Bounds.update;
                    for(var i = 0; i < bodiesLength; i++){
                        var body = bodies[i], positionImpulse = body.positionImpulse, positionImpulseX = positionImpulse.x, positionImpulseY = positionImpulse.y, velocity = body.velocity;
                        // reset contact count
                        body.totalContacts = 0;
                        if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                            // update body geometry
                            for(var j = 0; j < body.parts.length; j++){
                                var part = body.parts[j];
                                verticesTranslate(part.vertices, positionImpulse);
                                boundsUpdate(part.bounds, part.vertices, velocity);
                                part.position.x += positionImpulseX;
                                part.position.y += positionImpulseY;
                            }
                            // move the body without changing velocity
                            body.positionPrev.x += positionImpulseX;
                            body.positionPrev.y += positionImpulseY;
                            if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                                // reset cached impulse if the body has velocity along it
                                positionImpulse.x = 0;
                                positionImpulse.y = 0;
                            } else {
                                // warm the next iteration
                                positionImpulse.x *= positionWarming;
                                positionImpulse.y *= positionWarming;
                            }
                        }
                    }
                };
                /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */ Resolver.preSolveVelocity = function(pairs) {
                    var pairsLength = pairs.length, i, j;
                    for(i = 0; i < pairsLength; i++){
                        var pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        var contacts = pair.activeContacts, contactsLength = contacts.length, collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, normal = collision.normal, tangent = collision.tangent;
                        // resolve each contact
                        for(j = 0; j < contactsLength; j++){
                            var contact = contacts[j], contactVertex = contact.vertex, normalImpulse = contact.normalImpulse, tangentImpulse = contact.tangentImpulse;
                            if (normalImpulse !== 0 || tangentImpulse !== 0) {
                                // total impulse from contact
                                var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse, impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                                // apply impulse from contact
                                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                                    bodyA.anglePrev += bodyA.inverseInertia * ((contactVertex.x - bodyA.position.x) * impulseY - (contactVertex.y - bodyA.position.y) * impulseX);
                                }
                                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                                    bodyB.anglePrev -= bodyB.inverseInertia * ((contactVertex.x - bodyB.position.x) * impulseY - (contactVertex.y - bodyB.position.y) * impulseX);
                                }
                            }
                        }
                    }
                };
                /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} delta
     */ Resolver.solveVelocity = function(pairs, delta) {
                    var timeScale = delta / Common._baseDelta, timeScaleSquared = timeScale * timeScale, timeScaleCubed = timeScaleSquared * timeScale, restingThresh = -Resolver._restingThresh * timeScale, restingThreshTangent = Resolver._restingThreshTangent, frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale, frictionMaxStatic = Resolver._frictionMaxStatic, pairsLength = pairs.length, tangentImpulse, maxFriction, i, j;
                    for(i = 0; i < pairsLength; i++){
                        var pair = pairs[i];
                        if (!pair.isActive || pair.isSensor) continue;
                        var collision = pair.collision, bodyA = collision.parentA, bodyB = collision.parentB, bodyAVelocity = bodyA.velocity, bodyBVelocity = bodyB.velocity, normalX = collision.normal.x, normalY = collision.normal.y, tangentX = collision.tangent.x, tangentY = collision.tangent.y, contacts = pair.activeContacts, contactsLength = contacts.length, contactShare = 1 / contactsLength, inverseMassTotal = bodyA.inverseMass + bodyB.inverseMass, friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier;
                        // update body velocities
                        bodyAVelocity.x = bodyA.position.x - bodyA.positionPrev.x;
                        bodyAVelocity.y = bodyA.position.y - bodyA.positionPrev.y;
                        bodyBVelocity.x = bodyB.position.x - bodyB.positionPrev.x;
                        bodyBVelocity.y = bodyB.position.y - bodyB.positionPrev.y;
                        bodyA.angularVelocity = bodyA.angle - bodyA.anglePrev;
                        bodyB.angularVelocity = bodyB.angle - bodyB.anglePrev;
                        // resolve each contact
                        for(j = 0; j < contactsLength; j++){
                            var contact = contacts[j], contactVertex = contact.vertex;
                            var offsetAX = contactVertex.x - bodyA.position.x, offsetAY = contactVertex.y - bodyA.position.y, offsetBX = contactVertex.x - bodyB.position.x, offsetBY = contactVertex.y - bodyB.position.y;
                            var velocityPointAX = bodyAVelocity.x - offsetAY * bodyA.angularVelocity, velocityPointAY = bodyAVelocity.y + offsetAX * bodyA.angularVelocity, velocityPointBX = bodyBVelocity.x - offsetBY * bodyB.angularVelocity, velocityPointBY = bodyBVelocity.y + offsetBX * bodyB.angularVelocity;
                            var relativeVelocityX = velocityPointAX - velocityPointBX, relativeVelocityY = velocityPointAY - velocityPointBY;
                            var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY, tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;
                            // coulomb friction
                            var normalOverlap = pair.separation + normalVelocity;
                            var normalForce = Math.min(normalOverlap, 1);
                            normalForce = normalOverlap < 0 ? 0 : normalForce;
                            var frictionLimit = normalForce * friction;
                            if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                                maxFriction = tangentVelocity > 0 ? tangentVelocity : -tangentVelocity;
                                tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                                if (tangentImpulse < -maxFriction) tangentImpulse = -maxFriction;
                                else if (tangentImpulse > maxFriction) tangentImpulse = maxFriction;
                            } else {
                                tangentImpulse = tangentVelocity;
                                maxFriction = frictionMaxStatic;
                            }
                            // account for mass, inertia and contact offset
                            var oAcN = offsetAX * normalY - offsetAY * normalX, oBcN = offsetBX * normalY - offsetBY * normalX, share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);
                            // raw impulses
                            var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                            tangentImpulse *= share;
                            // handle high velocity and resting collisions separately
                            if (normalVelocity < restingThresh) // high normal velocity so clear cached contact normal impulse
                            contact.normalImpulse = 0;
                            else {
                                // solve resting collision constraints using Erin Catto's method (GDC08)
                                // impulse constraint tends to 0
                                var contactNormalImpulse = contact.normalImpulse;
                                contact.normalImpulse += normalImpulse;
                                if (contact.normalImpulse > 0) contact.normalImpulse = 0;
                                normalImpulse = contact.normalImpulse - contactNormalImpulse;
                            }
                            // handle high velocity and resting collisions separately
                            if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) // high tangent velocity so clear cached contact tangent impulse
                            contact.tangentImpulse = 0;
                            else {
                                // solve resting collision constraints using Erin Catto's method (GDC08)
                                // tangent impulse tends to -tangentSpeed or +tangentSpeed
                                var contactTangentImpulse = contact.tangentImpulse;
                                contact.tangentImpulse += tangentImpulse;
                                if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                                if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                                tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                            }
                            // total impulse from contact
                            var impulseX = normalX * normalImpulse + tangentX * tangentImpulse, impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                            // apply impulse from contact
                            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                                bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                                bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                                bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                            }
                            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                                bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                                bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                                bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                            }
                        }
                    }
                };
            })();
        /***/ },
        /* 19 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/ var Pairs = {};
            module1.exports = Pairs;
            var Pair = __webpack_require__(9);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */ Pairs.create = function(options) {
                    return Common.extend({
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    }, options);
                };
                /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */ Pairs.update = function(pairs, collisions, timestamp) {
                    var pairsList = pairs.list, pairsListLength = pairsList.length, pairsTable = pairs.table, collisionsLength = collisions.length, collisionStart = pairs.collisionStart, collisionEnd = pairs.collisionEnd, collisionActive = pairs.collisionActive, collision, pairIndex, pair, i;
                    // clear collision state arrays, but maintain old reference
                    collisionStart.length = 0;
                    collisionEnd.length = 0;
                    collisionActive.length = 0;
                    for(i = 0; i < pairsListLength; i++)pairsList[i].confirmedActive = false;
                    for(i = 0; i < collisionsLength; i++){
                        collision = collisions[i];
                        pair = collision.pair;
                        if (pair) {
                            // pair already exists (but may or may not be active)
                            if (pair.isActive) // pair exists and is active
                            collisionActive.push(pair);
                            else // pair exists but was inactive, so a collision has just started again
                            collisionStart.push(pair);
                            // update the pair
                            Pair.update(pair, collision, timestamp);
                            pair.confirmedActive = true;
                        } else {
                            // pair did not exist, create a new pair
                            pair = Pair.create(collision, timestamp);
                            pairsTable[pair.id] = pair;
                            // push the new pair
                            collisionStart.push(pair);
                            pairsList.push(pair);
                        }
                    }
                    // find pairs that are no longer active
                    var removePairIndex = [];
                    pairsListLength = pairsList.length;
                    for(i = 0; i < pairsListLength; i++){
                        pair = pairsList[i];
                        if (!pair.confirmedActive) {
                            Pair.setActive(pair, false, timestamp);
                            collisionEnd.push(pair);
                            if (!pair.collision.bodyA.isSleeping && !pair.collision.bodyB.isSleeping) removePairIndex.push(i);
                        }
                    }
                    // remove inactive pairs
                    for(i = 0; i < removePairIndex.length; i++){
                        pairIndex = removePairIndex[i] - i;
                        pair = pairsList[pairIndex];
                        pairsList.splice(pairIndex, 1);
                        delete pairsTable[pair.id];
                    }
                };
                /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */ Pairs.clear = function(pairs) {
                    pairs.table = {};
                    pairs.list.length = 0;
                    pairs.collisionStart.length = 0;
                    pairs.collisionActive.length = 0;
                    pairs.collisionEnd.length = 0;
                    return pairs;
                };
            })();
        /***/ },
        /* 20 */ /***/ function(module1, exports, __webpack_require__) {
            var Matter = module1.exports = __webpack_require__(21);
            Matter.Axes = __webpack_require__(11);
            Matter.Bodies = __webpack_require__(12);
            Matter.Body = __webpack_require__(4);
            Matter.Bounds = __webpack_require__(1);
            Matter.Collision = __webpack_require__(8);
            Matter.Common = __webpack_require__(0);
            Matter.Composite = __webpack_require__(6);
            Matter.Composites = __webpack_require__(22);
            Matter.Constraint = __webpack_require__(10);
            Matter.Contact = __webpack_require__(16);
            Matter.Detector = __webpack_require__(13);
            Matter.Engine = __webpack_require__(17);
            Matter.Events = __webpack_require__(5);
            Matter.Grid = __webpack_require__(23);
            Matter.Mouse = __webpack_require__(14);
            Matter.MouseConstraint = __webpack_require__(24);
            Matter.Pair = __webpack_require__(9);
            Matter.Pairs = __webpack_require__(19);
            Matter.Plugin = __webpack_require__(15);
            Matter.Query = __webpack_require__(25);
            Matter.Render = __webpack_require__(26);
            Matter.Resolver = __webpack_require__(18);
            Matter.Runner = __webpack_require__(27);
            Matter.SAT = __webpack_require__(28);
            Matter.Sleeping = __webpack_require__(7);
            Matter.Svg = __webpack_require__(29);
            Matter.Vector = __webpack_require__(2);
            Matter.Vertices = __webpack_require__(3);
            Matter.World = __webpack_require__(30);
            // temporary back compatibility
            Matter.Engine.run = Matter.Runner.run;
            Matter.Common.deprecated(Matter.Engine, "run", "Engine.run \u27A4 use Matter.Runner.run(engine) instead");
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/ var Matter = {};
            module1.exports = Matter;
            var Plugin = __webpack_require__(15);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */ Matter.name = "matter-js";
                /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */ Matter.version = "0.19.0";
                /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */ Matter.uses = [];
                /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */ Matter.used = [];
                /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */ Matter.use = function() {
                    Plugin.use(Matter, Array.prototype.slice.call(arguments));
                };
                /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */ Matter.before = function(path, func) {
                    path = path.replace(/^Matter./, "");
                    return Common.chainPathBefore(Matter, path, func);
                };
                /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */ Matter.after = function(path, func) {
                    path = path.replace(/^Matter./, "");
                    return Common.chainPathAfter(Matter, path, func);
                };
            })();
        /***/ },
        /* 22 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/ var Composites = {};
            module1.exports = Composites;
            var Composite = __webpack_require__(6);
            var Constraint = __webpack_require__(10);
            var Common = __webpack_require__(0);
            var Body = __webpack_require__(4);
            var Bodies = __webpack_require__(12);
            var deprecated = Common.deprecated;
            (function() {
                /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */ Composites.stack = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                    var stack = Composite.create({
                        label: "Stack"
                    }), x = xx, y = yy, lastBody, i = 0;
                    for(var row = 0; row < rows; row++){
                        var maxHeight = 0;
                        for(var column = 0; column < columns; column++){
                            var body = callback(x, y, column, row, lastBody, i);
                            if (body) {
                                var bodyHeight = body.bounds.max.y - body.bounds.min.y, bodyWidth = body.bounds.max.x - body.bounds.min.x;
                                if (bodyHeight > maxHeight) maxHeight = bodyHeight;
                                Body.translate(body, {
                                    x: bodyWidth * 0.5,
                                    y: bodyHeight * 0.5
                                });
                                x = body.bounds.max.x + columnGap;
                                Composite.addBody(stack, body);
                                lastBody = body;
                                i += 1;
                            } else x += columnGap;
                        }
                        y += maxHeight + rowGap;
                        x = xx;
                    }
                    return stack;
                };
                /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */ Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
                    var bodies = composite.bodies;
                    for(var i = 1; i < bodies.length; i++){
                        var bodyA = bodies[i - 1], bodyB = bodies[i], bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y, bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y, bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
                        var defaults = {
                            bodyA: bodyA,
                            pointA: {
                                x: bodyAWidth * xOffsetA,
                                y: bodyAHeight * yOffsetA
                            },
                            bodyB: bodyB,
                            pointB: {
                                x: bodyBWidth * xOffsetB,
                                y: bodyBHeight * yOffsetB
                            }
                        };
                        var constraint = Common.extend(defaults, options);
                        Composite.addConstraint(composite, Constraint.create(constraint));
                    }
                    composite.label += " Chain";
                    return composite;
                };
                /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */ Composites.mesh = function(composite, columns, rows, crossBrace, options) {
                    var bodies = composite.bodies, row, col, bodyA, bodyB, bodyC;
                    for(row = 0; row < rows; row++){
                        for(col = 1; col < columns; col++){
                            bodyA = bodies[col - 1 + row * columns];
                            bodyB = bodies[col + row * columns];
                            Composite.addConstraint(composite, Constraint.create(Common.extend({
                                bodyA: bodyA,
                                bodyB: bodyB
                            }, options)));
                        }
                        if (row > 0) for(col = 0; col < columns; col++){
                            bodyA = bodies[col + (row - 1) * columns];
                            bodyB = bodies[col + row * columns];
                            Composite.addConstraint(composite, Constraint.create(Common.extend({
                                bodyA: bodyA,
                                bodyB: bodyB
                            }, options)));
                            if (crossBrace && col > 0) {
                                bodyC = bodies[col - 1 + (row - 1) * columns];
                                Composite.addConstraint(composite, Constraint.create(Common.extend({
                                    bodyA: bodyC,
                                    bodyB: bodyB
                                }, options)));
                            }
                            if (crossBrace && col < columns - 1) {
                                bodyC = bodies[col + 1 + (row - 1) * columns];
                                Composite.addConstraint(composite, Constraint.create(Common.extend({
                                    bodyA: bodyC,
                                    bodyB: bodyB
                                }, options)));
                            }
                        }
                    }
                    composite.label += " Mesh";
                    return composite;
                };
                /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */ Composites.pyramid = function(xx, yy, columns, rows, columnGap, rowGap, callback) {
                    return Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y, column, row, lastBody, i) {
                        var actualRows = Math.min(rows, Math.ceil(columns / 2)), lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
                        if (row > actualRows) return;
                        // reverse row order
                        row = actualRows - row;
                        var start = row, end = columns - 1 - row;
                        if (column < start || column > end) return;
                        // retroactively fix the first body's position, since width was unknown
                        if (i === 1) Body.translate(lastBody, {
                            x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth,
                            y: 0
                        });
                        var xOffset = lastBody ? column * lastBodyWidth : 0;
                        return callback(xx + xOffset + column * columnGap, y, column, row, lastBody, i);
                    });
                };
                /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */ Composites.newtonsCradle = function(xx, yy, number, size, length) {
                    var newtonsCradle = Composite.create({
                        label: "Newtons Cradle"
                    });
                    for(var i = 0; i < number; i++){
                        var separation = 1.9, circle = Bodies.circle(xx + i * (size * separation), yy + length, size, {
                            inertia: Infinity,
                            restitution: 1,
                            friction: 0,
                            frictionAir: 0.0001,
                            slop: 1
                        }), constraint = Constraint.create({
                            pointA: {
                                x: xx + i * (size * separation),
                                y: yy
                            },
                            bodyB: circle
                        });
                        Composite.addBody(newtonsCradle, circle);
                        Composite.addConstraint(newtonsCradle, constraint);
                    }
                    return newtonsCradle;
                };
                deprecated(Composites, "newtonsCradle", "Composites.newtonsCradle \u27A4 moved to newtonsCradle example");
                /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */ Composites.car = function(xx, yy, width, height, wheelSize) {
                    var group = Body.nextGroup(true), wheelBase = 20, wheelAOffset = -width * 0.5 + wheelBase, wheelBOffset = width * 0.5 - wheelBase, wheelYOffset = 0;
                    var car = Composite.create({
                        label: "Car"
                    }), body = Bodies.rectangle(xx, yy, width, height, {
                        collisionFilter: {
                            group: group
                        },
                        chamfer: {
                            radius: height * 0.5
                        },
                        density: 0.0002
                    });
                    var wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
                        collisionFilter: {
                            group: group
                        },
                        friction: 0.8
                    });
                    var wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
                        collisionFilter: {
                            group: group
                        },
                        friction: 0.8
                    });
                    var axelA = Constraint.create({
                        bodyB: body,
                        pointB: {
                            x: wheelAOffset,
                            y: wheelYOffset
                        },
                        bodyA: wheelA,
                        stiffness: 1,
                        length: 0
                    });
                    var axelB = Constraint.create({
                        bodyB: body,
                        pointB: {
                            x: wheelBOffset,
                            y: wheelYOffset
                        },
                        bodyA: wheelB,
                        stiffness: 1,
                        length: 0
                    });
                    Composite.addBody(car, body);
                    Composite.addBody(car, wheelA);
                    Composite.addBody(car, wheelB);
                    Composite.addConstraint(car, axelA);
                    Composite.addConstraint(car, axelB);
                    return car;
                };
                deprecated(Composites, "car", "Composites.car \u27A4 moved to car example");
                /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */ Composites.softBody = function(xx, yy, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
                    particleOptions = Common.extend({
                        inertia: Infinity
                    }, particleOptions);
                    constraintOptions = Common.extend({
                        stiffness: 0.2,
                        render: {
                            type: "line",
                            anchors: false
                        }
                    }, constraintOptions);
                    var softBody = Composites.stack(xx, yy, columns, rows, columnGap, rowGap, function(x, y) {
                        return Bodies.circle(x, y, particleRadius, particleOptions);
                    });
                    Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);
                    softBody.label = "Soft Body";
                    return softBody;
                };
                deprecated(Composites, "softBody", "Composites.softBody \u27A4 moved to softBody and cloth examples");
            })();
        /***/ },
        /* 23 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/ var Grid = {};
            module1.exports = Grid;
            var Pair = __webpack_require__(9);
            var Common = __webpack_require__(0);
            var deprecated = Common.deprecated;
            (function() {
                /**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */ Grid.create = function(options) {
                    var defaults = {
                        buckets: {},
                        pairs: {},
                        pairsList: [],
                        bucketWidth: 48,
                        bucketHeight: 48
                    };
                    return Common.extend(defaults, options);
                };
                /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */ /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */ /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */ Grid.update = function(grid, bodies, engine, forceUpdate) {
                    var i, col, row, world = engine.world, buckets = grid.buckets, bucket, bucketId, gridChanged = false;
                    for(i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (body.isSleeping && !forceUpdate) continue;
                        // temporary back compatibility bounds check
                        if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y)) continue;
                        var newRegion = Grid._getRegion(grid, body);
                        // if the body has changed grid region
                        if (!body.region || newRegion.id !== body.region.id || forceUpdate) {
                            if (!body.region || forceUpdate) body.region = newRegion;
                            var union = Grid._regionUnion(newRegion, body.region);
                            // update grid buckets affected by region change
                            // iterate over the union of both regions
                            for(col = union.startCol; col <= union.endCol; col++)for(row = union.startRow; row <= union.endRow; row++){
                                bucketId = Grid._getBucketId(col, row);
                                bucket = buckets[bucketId];
                                var isInsideNewRegion = col >= newRegion.startCol && col <= newRegion.endCol && row >= newRegion.startRow && row <= newRegion.endRow;
                                var isInsideOldRegion = col >= body.region.startCol && col <= body.region.endCol && row >= body.region.startRow && row <= body.region.endRow;
                                // remove from old region buckets
                                if (!isInsideNewRegion && isInsideOldRegion) {
                                    if (isInsideOldRegion) {
                                        if (bucket) Grid._bucketRemoveBody(grid, bucket, body);
                                    }
                                }
                                // add to new region buckets
                                if (body.region === newRegion || isInsideNewRegion && !isInsideOldRegion || forceUpdate) {
                                    if (!bucket) bucket = Grid._createBucket(buckets, bucketId);
                                    Grid._bucketAddBody(grid, bucket, body);
                                }
                            }
                            // set the new region
                            body.region = newRegion;
                            // flag changes so we can update pairs
                            gridChanged = true;
                        }
                    }
                    // update pairs list only if pairs changed (i.e. a body changed region)
                    if (gridChanged) grid.pairsList = Grid._createActivePairsList(grid);
                };
                deprecated(Grid, "update", "Grid.update \u27A4 replaced by Matter.Detector");
                /**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */ Grid.clear = function(grid) {
                    grid.buckets = {};
                    grid.pairs = {};
                    grid.pairsList = [];
                };
                deprecated(Grid, "clear", "Grid.clear \u27A4 replaced by Matter.Detector");
                /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */ Grid._regionUnion = function(regionA, regionB) {
                    var startCol = Math.min(regionA.startCol, regionB.startCol), endCol = Math.max(regionA.endCol, regionB.endCol), startRow = Math.min(regionA.startRow, regionB.startRow), endRow = Math.max(regionA.endRow, regionB.endRow);
                    return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */ Grid._getRegion = function(grid, body) {
                    var bounds = body.bounds, startCol = Math.floor(bounds.min.x / grid.bucketWidth), endCol = Math.floor(bounds.max.x / grid.bucketWidth), startRow = Math.floor(bounds.min.y / grid.bucketHeight), endRow = Math.floor(bounds.max.y / grid.bucketHeight);
                    return Grid._createRegion(startCol, endCol, startRow, endRow);
                };
                /**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */ Grid._createRegion = function(startCol, endCol, startRow, endRow) {
                    return {
                        id: startCol + "," + endCol + "," + startRow + "," + endRow,
                        startCol: startCol,
                        endCol: endCol,
                        startRow: startRow,
                        endRow: endRow
                    };
                };
                /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */ Grid._getBucketId = function(column, row) {
                    return "C" + column + "R" + row;
                };
                /**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */ Grid._createBucket = function(buckets, bucketId) {
                    var bucket = buckets[bucketId] = [];
                    return bucket;
                };
                /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */ Grid._bucketAddBody = function(grid, bucket, body) {
                    var gridPairs = grid.pairs, pairId = Pair.id, bucketLength = bucket.length, i;
                    // add new pairs
                    for(i = 0; i < bucketLength; i++){
                        var bodyB = bucket[i];
                        if (body.id === bodyB.id || body.isStatic && bodyB.isStatic) continue;
                        // keep track of the number of buckets the pair exists in
                        // important for Grid.update to work
                        var id = pairId(body, bodyB), pair = gridPairs[id];
                        if (pair) pair[2] += 1;
                        else gridPairs[id] = [
                            body,
                            bodyB,
                            1
                        ];
                    }
                    // add to bodies (after pairs, otherwise pairs with self)
                    bucket.push(body);
                };
                /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */ Grid._bucketRemoveBody = function(grid, bucket, body) {
                    var gridPairs = grid.pairs, pairId = Pair.id, i;
                    // remove from bucket
                    bucket.splice(Common.indexOf(bucket, body), 1);
                    var bucketLength = bucket.length;
                    // update pair counts
                    for(i = 0; i < bucketLength; i++){
                        // keep track of the number of buckets the pair exists in
                        // important for _createActivePairsList to work
                        var pair = gridPairs[pairId(body, bucket[i])];
                        if (pair) pair[2] -= 1;
                    }
                };
                /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */ Grid._createActivePairsList = function(grid) {
                    var pair, gridPairs = grid.pairs, pairKeys = Common.keys(gridPairs), pairKeysLength = pairKeys.length, pairs = [], k;
                    // iterate over grid.pairs
                    for(k = 0; k < pairKeysLength; k++){
                        pair = gridPairs[pairKeys[k]];
                        // if pair exists in at least one bucket
                        // it is a pair that needs further collision testing so push it
                        if (pair[2] > 0) pairs.push(pair);
                        else delete gridPairs[pairKeys[k]];
                    }
                    return pairs;
                };
            })();
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/ var MouseConstraint = {};
            module1.exports = MouseConstraint;
            var Vertices = __webpack_require__(3);
            var Sleeping = __webpack_require__(7);
            var Mouse = __webpack_require__(14);
            var Events = __webpack_require__(5);
            var Detector = __webpack_require__(13);
            var Constraint = __webpack_require__(10);
            var Composite = __webpack_require__(6);
            var Common = __webpack_require__(0);
            var Bounds = __webpack_require__(1);
            (function() {
                /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */ MouseConstraint.create = function(engine, options) {
                    var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);
                    if (!mouse) {
                        if (engine && engine.render && engine.render.canvas) mouse = Mouse.create(engine.render.canvas);
                        else if (options && options.element) mouse = Mouse.create(options.element);
                        else {
                            mouse = Mouse.create();
                            Common.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected");
                        }
                    }
                    var constraint = Constraint.create({
                        label: "Mouse Constraint",
                        pointA: mouse.position,
                        pointB: {
                            x: 0,
                            y: 0
                        },
                        length: 0.01,
                        stiffness: 0.1,
                        angularStiffness: 1,
                        render: {
                            strokeStyle: "#90EE90",
                            lineWidth: 3
                        }
                    });
                    var defaults = {
                        type: "mouseConstraint",
                        mouse: mouse,
                        element: null,
                        body: null,
                        constraint: constraint,
                        collisionFilter: {
                            category: 0x0001,
                            mask: 0xFFFFFFFF,
                            group: 0
                        }
                    };
                    var mouseConstraint = Common.extend(defaults, options);
                    Events.on(engine, "beforeUpdate", function() {
                        var allBodies = Composite.allBodies(engine.world);
                        MouseConstraint.update(mouseConstraint, allBodies);
                        MouseConstraint._triggerEvents(mouseConstraint);
                    });
                    return mouseConstraint;
                };
                /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */ MouseConstraint.update = function(mouseConstraint, bodies) {
                    var mouse = mouseConstraint.mouse, constraint = mouseConstraint.constraint, body = mouseConstraint.body;
                    if (mouse.button === 0) {
                        if (!constraint.bodyB) for(var i = 0; i < bodies.length; i++){
                            body = bodies[i];
                            if (Bounds.contains(body.bounds, mouse.position) && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) for(var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++){
                                var part = body.parts[j];
                                if (Vertices.contains(part.vertices, mouse.position)) {
                                    constraint.pointA = mouse.position;
                                    constraint.bodyB = mouseConstraint.body = body;
                                    constraint.pointB = {
                                        x: mouse.position.x - body.position.x,
                                        y: mouse.position.y - body.position.y
                                    };
                                    constraint.angleB = body.angle;
                                    Sleeping.set(body, false);
                                    Events.trigger(mouseConstraint, "startdrag", {
                                        mouse: mouse,
                                        body: body
                                    });
                                    break;
                                }
                            }
                        }
                        else {
                            Sleeping.set(constraint.bodyB, false);
                            constraint.pointA = mouse.position;
                        }
                    } else {
                        constraint.bodyB = mouseConstraint.body = null;
                        constraint.pointB = null;
                        if (body) Events.trigger(mouseConstraint, "enddrag", {
                            mouse: mouse,
                            body: body
                        });
                    }
                };
                /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */ MouseConstraint._triggerEvents = function(mouseConstraint) {
                    var mouse = mouseConstraint.mouse, mouseEvents = mouse.sourceEvents;
                    if (mouseEvents.mousemove) Events.trigger(mouseConstraint, "mousemove", {
                        mouse: mouse
                    });
                    if (mouseEvents.mousedown) Events.trigger(mouseConstraint, "mousedown", {
                        mouse: mouse
                    });
                    if (mouseEvents.mouseup) Events.trigger(mouseConstraint, "mouseup", {
                        mouse: mouse
                    });
                    // reset the mouse state ready for the next step
                    Mouse.clearSourceEvents(mouse);
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */ /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */ /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */ /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */ /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */ })();
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/ var Query = {};
            module1.exports = Query;
            var Vector = __webpack_require__(2);
            var Collision = __webpack_require__(8);
            var Bounds = __webpack_require__(1);
            var Bodies = __webpack_require__(12);
            var Vertices = __webpack_require__(3);
            (function() {
                /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */ Query.collides = function(body, bodies) {
                    var collisions = [], bodiesLength = bodies.length, bounds = body.bounds, collides = Collision.collides, overlaps = Bounds.overlaps;
                    for(var i = 0; i < bodiesLength; i++){
                        var bodyA = bodies[i], partsALength = bodyA.parts.length, partsAStart = partsALength === 1 ? 0 : 1;
                        if (overlaps(bodyA.bounds, bounds)) for(var j = partsAStart; j < partsALength; j++){
                            var part = bodyA.parts[j];
                            if (overlaps(part.bounds, bounds)) {
                                var collision = collides(part, body);
                                if (collision) {
                                    collisions.push(collision);
                                    break;
                                }
                            }
                        }
                    }
                    return collisions;
                };
                /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */ Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
                    rayWidth = rayWidth || 1e-100;
                    var rayAngle = Vector.angle(startPoint, endPoint), rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)), rayX = (endPoint.x + startPoint.x) * 0.5, rayY = (endPoint.y + startPoint.y) * 0.5, ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, {
                        angle: rayAngle
                    }), collisions = Query.collides(ray, bodies);
                    for(var i = 0; i < collisions.length; i += 1){
                        var collision = collisions[i];
                        collision.body = collision.bodyB = collision.bodyA;
                    }
                    return collisions;
                };
                /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */ Query.region = function(bodies, bounds, outside) {
                    var result = [];
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i], overlaps = Bounds.overlaps(body.bounds, bounds);
                        if (overlaps && !outside || !overlaps && outside) result.push(body);
                    }
                    return result;
                };
                /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */ Query.point = function(bodies, point) {
                    var result = [];
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (Bounds.contains(body.bounds, point)) for(var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++){
                            var part = body.parts[j];
                            if (Bounds.contains(part.bounds, point) && Vertices.contains(part.vertices, point)) {
                                result.push(body);
                                break;
                            }
                        }
                    }
                    return result;
                };
            })();
        /***/ },
        /* 26 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/ var Render = {};
            module1.exports = Render;
            var Body = __webpack_require__(4);
            var Common = __webpack_require__(0);
            var Composite = __webpack_require__(6);
            var Bounds = __webpack_require__(1);
            var Events = __webpack_require__(5);
            var Vector = __webpack_require__(2);
            var Mouse = __webpack_require__(14);
            (function() {
                var _requestAnimationFrame, _cancelAnimationFrame;
                if (typeof window !== "undefined") {
                    _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
                        window.setTimeout(function() {
                            callback(Common.now());
                        }, 1000 / 60);
                    };
                    _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                }
                Render._goodFps = 30;
                Render._goodDelta = 1000 / 60;
                /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */ Render.create = function(options) {
                    var defaults = {
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                            historySize: 60,
                            delta: 0,
                            deltaHistory: [],
                            lastTime: 0,
                            lastTimestamp: 0,
                            lastElapsed: 0,
                            timestampElapsed: 0,
                            timestampElapsedHistory: [],
                            engineDeltaHistory: [],
                            engineElapsedHistory: [],
                            elapsedHistory: []
                        },
                        options: {
                            width: 800,
                            height: 600,
                            pixelRatio: 1,
                            background: "#14151f",
                            wireframeBackground: "#14151f",
                            hasBounds: !!options.bounds,
                            enabled: true,
                            wireframes: true,
                            showSleeping: true,
                            showDebug: false,
                            showStats: false,
                            showPerformance: false,
                            showBounds: false,
                            showVelocity: false,
                            showCollisions: false,
                            showSeparations: false,
                            showAxes: false,
                            showPositions: false,
                            showAngleIndicator: false,
                            showIds: false,
                            showVertexNumbers: false,
                            showConvexHulls: false,
                            showInternalEdges: false,
                            showMousePosition: false
                        }
                    };
                    var render = Common.extend(defaults, options);
                    if (render.canvas) {
                        render.canvas.width = render.options.width || render.canvas.width;
                        render.canvas.height = render.options.height || render.canvas.height;
                    }
                    render.mouse = options.mouse;
                    render.engine = options.engine;
                    render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
                    render.context = render.canvas.getContext("2d");
                    render.textures = {};
                    render.bounds = render.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: render.canvas.width,
                            y: render.canvas.height
                        }
                    };
                    // for temporary back compatibility only
                    render.controller = Render;
                    render.options.showBroadphase = false;
                    if (render.options.pixelRatio !== 1) Render.setPixelRatio(render, render.options.pixelRatio);
                    if (Common.isElement(render.element)) render.element.appendChild(render.canvas);
                    return render;
                };
                /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */ Render.run = function(render) {
                    (function loop(time) {
                        render.frameRequestId = _requestAnimationFrame(loop);
                        _updateTiming(render, time);
                        Render.world(render, time);
                        if (render.options.showStats || render.options.showDebug) Render.stats(render, render.context, time);
                        if (render.options.showPerformance || render.options.showDebug) Render.performance(render, render.context, time);
                    })();
                };
                /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */ Render.stop = function(render) {
                    _cancelAnimationFrame(render.frameRequestId);
                };
                /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */ Render.setPixelRatio = function(render, pixelRatio) {
                    var options = render.options, canvas = render.canvas;
                    if (pixelRatio === "auto") pixelRatio = _getPixelRatio(canvas);
                    options.pixelRatio = pixelRatio;
                    canvas.setAttribute("data-pixel-ratio", pixelRatio);
                    canvas.width = options.width * pixelRatio;
                    canvas.height = options.height * pixelRatio;
                    canvas.style.width = options.width + "px";
                    canvas.style.height = options.height + "px";
                };
                /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */ Render.lookAt = function(render, objects, padding, center) {
                    center = typeof center !== "undefined" ? center : true;
                    objects = Common.isArray(objects) ? objects : [
                        objects
                    ];
                    padding = padding || {
                        x: 0,
                        y: 0
                    };
                    // find bounds of all objects
                    var bounds = {
                        min: {
                            x: Infinity,
                            y: Infinity
                        },
                        max: {
                            x: -Infinity,
                            y: -Infinity
                        }
                    };
                    for(var i = 0; i < objects.length; i += 1){
                        var object = objects[i], min = object.bounds ? object.bounds.min : object.min || object.position || object, max = object.bounds ? object.bounds.max : object.max || object.position || object;
                        if (min && max) {
                            if (min.x < bounds.min.x) bounds.min.x = min.x;
                            if (max.x > bounds.max.x) bounds.max.x = max.x;
                            if (min.y < bounds.min.y) bounds.min.y = min.y;
                            if (max.y > bounds.max.y) bounds.max.y = max.y;
                        }
                    }
                    // find ratios
                    var width = bounds.max.x - bounds.min.x + 2 * padding.x, height = bounds.max.y - bounds.min.y + 2 * padding.y, viewHeight = render.canvas.height, viewWidth = render.canvas.width, outerRatio = viewWidth / viewHeight, innerRatio = width / height, scaleX = 1, scaleY = 1;
                    // find scale factor
                    if (innerRatio > outerRatio) scaleY = innerRatio / outerRatio;
                    else scaleX = outerRatio / innerRatio;
                    // enable bounds
                    render.options.hasBounds = true;
                    // position and size
                    render.bounds.min.x = bounds.min.x;
                    render.bounds.max.x = bounds.min.x + width * scaleX;
                    render.bounds.min.y = bounds.min.y;
                    render.bounds.max.y = bounds.min.y + height * scaleY;
                    // center
                    if (center) {
                        render.bounds.min.x += width * 0.5 - width * scaleX * 0.5;
                        render.bounds.max.x += width * 0.5 - width * scaleX * 0.5;
                        render.bounds.min.y += height * 0.5 - height * scaleY * 0.5;
                        render.bounds.max.y += height * 0.5 - height * scaleY * 0.5;
                    }
                    // padding
                    render.bounds.min.x -= padding.x;
                    render.bounds.max.x -= padding.x;
                    render.bounds.min.y -= padding.y;
                    render.bounds.max.y -= padding.y;
                    // update mouse
                    if (render.mouse) {
                        Mouse.setScale(render.mouse, {
                            x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                            y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
                        });
                        Mouse.setOffset(render.mouse, render.bounds.min);
                    }
                };
                /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */ Render.startViewTransform = function(render) {
                    var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                    render.context.setTransform(render.options.pixelRatio / boundsScaleX, 0, 0, render.options.pixelRatio / boundsScaleY, 0, 0);
                    render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
                };
                /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */ Render.endViewTransform = function(render) {
                    render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                };
                /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */ Render.world = function(render, time) {
                    var startTime = Common.now(), engine = render.engine, world = engine.world, canvas = render.canvas, context = render.context, options = render.options, timing = render.timing;
                    var allBodies = Composite.allBodies(world), allConstraints = Composite.allConstraints(world), background = options.wireframes ? options.wireframeBackground : options.background, bodies = [], constraints = [], i;
                    var event = {
                        timestamp: engine.timing.timestamp
                    };
                    Events.trigger(render, "beforeRender", event);
                    // apply background if it has changed
                    if (render.currentBackground !== background) _applyBackground(render, background);
                    // clear the canvas with a transparent fill, to allow the canvas background to show
                    context.globalCompositeOperation = "source-in";
                    context.fillStyle = "transparent";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    context.globalCompositeOperation = "source-over";
                    // handle bounds
                    if (options.hasBounds) {
                        // filter out bodies that are not in view
                        for(i = 0; i < allBodies.length; i++){
                            var body = allBodies[i];
                            if (Bounds.overlaps(body.bounds, render.bounds)) bodies.push(body);
                        }
                        // filter out constraints that are not in view
                        for(i = 0; i < allConstraints.length; i++){
                            var constraint = allConstraints[i], bodyA = constraint.bodyA, bodyB = constraint.bodyB, pointAWorld = constraint.pointA, pointBWorld = constraint.pointB;
                            if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                            if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);
                            if (!pointAWorld || !pointBWorld) continue;
                            if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld)) constraints.push(constraint);
                        }
                        // transform the view
                        Render.startViewTransform(render);
                        // update mouse
                        if (render.mouse) {
                            Mouse.setScale(render.mouse, {
                                x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                                y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                            });
                            Mouse.setOffset(render.mouse, render.bounds.min);
                        }
                    } else {
                        constraints = allConstraints;
                        bodies = allBodies;
                        if (render.options.pixelRatio !== 1) render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
                    }
                    if (!options.wireframes || engine.enableSleeping && options.showSleeping) // fully featured rendering of bodies
                    Render.bodies(render, bodies, context);
                    else {
                        if (options.showConvexHulls) Render.bodyConvexHulls(render, bodies, context);
                        // optimised method for wireframes only
                        Render.bodyWireframes(render, bodies, context);
                    }
                    if (options.showBounds) Render.bodyBounds(render, bodies, context);
                    if (options.showAxes || options.showAngleIndicator) Render.bodyAxes(render, bodies, context);
                    if (options.showPositions) Render.bodyPositions(render, bodies, context);
                    if (options.showVelocity) Render.bodyVelocity(render, bodies, context);
                    if (options.showIds) Render.bodyIds(render, bodies, context);
                    if (options.showSeparations) Render.separations(render, engine.pairs.list, context);
                    if (options.showCollisions) Render.collisions(render, engine.pairs.list, context);
                    if (options.showVertexNumbers) Render.vertexNumbers(render, bodies, context);
                    if (options.showMousePosition) Render.mousePosition(render, render.mouse, context);
                    Render.constraints(constraints, context);
                    if (options.hasBounds) // revert view transforms
                    Render.endViewTransform(render);
                    Events.trigger(render, "afterRender", event);
                    // log the time elapsed computing this update
                    timing.lastElapsed = Common.now() - startTime;
                };
                /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */ Render.stats = function(render, context, time) {
                    var engine = render.engine, world = engine.world, bodies = Composite.allBodies(world), parts = 0, width = 55, height = 44, x = 0, y = 0;
                    // count parts
                    for(var i = 0; i < bodies.length; i += 1)parts += bodies[i].parts.length;
                    // sections
                    var sections = {
                        "Part": parts,
                        "Body": bodies.length,
                        "Cons": Composite.allConstraints(world).length,
                        "Comp": Composite.allComposites(world).length,
                        "Pair": engine.pairs.list.length
                    };
                    // background
                    context.fillStyle = "#0e0f19";
                    context.fillRect(x, y, width * 5.5, height);
                    context.font = "12px Arial";
                    context.textBaseline = "top";
                    context.textAlign = "right";
                    // sections
                    for(var key in sections){
                        var section = sections[key];
                        // label
                        context.fillStyle = "#aaa";
                        context.fillText(key, x + width, y + 8);
                        // value
                        context.fillStyle = "#eee";
                        context.fillText(section, x + width, y + 26);
                        x += width;
                    }
                };
                /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */ Render.performance = function(render, context) {
                    var engine = render.engine, timing = render.timing, deltaHistory = timing.deltaHistory, elapsedHistory = timing.elapsedHistory, timestampElapsedHistory = timing.timestampElapsedHistory, engineDeltaHistory = timing.engineDeltaHistory, engineElapsedHistory = timing.engineElapsedHistory, lastEngineDelta = engine.timing.lastDelta;
                    var deltaMean = _mean(deltaHistory), elapsedMean = _mean(elapsedHistory), engineDeltaMean = _mean(engineDeltaHistory), engineElapsedMean = _mean(engineElapsedHistory), timestampElapsedMean = _mean(timestampElapsedHistory), rateMean = timestampElapsedMean / deltaMean || 0, fps = 1000 / deltaMean || 0;
                    var graphHeight = 4, gap = 12, width = 60, height = 34, x = 10, y = 69;
                    // background
                    context.fillStyle = "#0e0f19";
                    context.fillRect(0, 50, gap * 4 + width * 5 + 22, height);
                    // show FPS
                    Render.status(context, x, y, width, graphHeight, deltaHistory.length, Math.round(fps) + " fps", fps / Render._goodFps, function(i) {
                        return deltaHistory[i] / deltaMean - 1;
                    });
                    // show engine delta
                    Render.status(context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length, lastEngineDelta.toFixed(2) + " dt", Render._goodDelta / lastEngineDelta, function(i) {
                        return engineDeltaHistory[i] / engineDeltaMean - 1;
                    });
                    // show engine update time
                    Render.status(context, x + (gap + width) * 2, y, width, graphHeight, engineElapsedHistory.length, engineElapsedMean.toFixed(2) + " ut", 1 - engineElapsedMean / Render._goodFps, function(i) {
                        return engineElapsedHistory[i] / engineElapsedMean - 1;
                    });
                    // show render time
                    Render.status(context, x + (gap + width) * 3, y, width, graphHeight, elapsedHistory.length, elapsedMean.toFixed(2) + " rt", 1 - elapsedMean / Render._goodFps, function(i) {
                        return elapsedHistory[i] / elapsedMean - 1;
                    });
                    // show effective speed
                    Render.status(context, x + (gap + width) * 4, y, width, graphHeight, timestampElapsedHistory.length, rateMean.toFixed(2) + " x", rateMean * rateMean * rateMean, function(i) {
                        return (timestampElapsedHistory[i] / deltaHistory[i] / rateMean || 0) - 1;
                    });
                };
                /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */ Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
                    // background
                    context.strokeStyle = "#888";
                    context.fillStyle = "#444";
                    context.lineWidth = 1;
                    context.fillRect(x, y + 7, width, 1);
                    // chart
                    context.beginPath();
                    context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
                    for(var i = 0; i < width; i += 1)context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
                    context.stroke();
                    // indicator
                    context.fillStyle = "hsl(" + Common.clamp(25 + 95 * indicator, 0, 120) + ",100%,60%)";
                    context.fillRect(x, y - 7, 4, 4);
                    // label
                    context.font = "12px Arial";
                    context.textBaseline = "middle";
                    context.textAlign = "right";
                    context.fillStyle = "#eee";
                    context.fillText(label, x + width, y - 5);
                };
                /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */ Render.constraints = function(constraints, context) {
                    var c = context;
                    for(var i = 0; i < constraints.length; i++){
                        var constraint = constraints[i];
                        if (!constraint.render.visible || !constraint.pointA || !constraint.pointB) continue;
                        var bodyA = constraint.bodyA, bodyB = constraint.bodyB, start, end;
                        if (bodyA) start = Vector.add(bodyA.position, constraint.pointA);
                        else start = constraint.pointA;
                        if (constraint.render.type === "pin") {
                            c.beginPath();
                            c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                            c.closePath();
                        } else {
                            if (bodyB) end = Vector.add(bodyB.position, constraint.pointB);
                            else end = constraint.pointB;
                            c.beginPath();
                            c.moveTo(start.x, start.y);
                            if (constraint.render.type === "spring") {
                                var delta = Vector.sub(end, start), normal = Vector.perp(Vector.normalise(delta)), coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)), offset;
                                for(var j = 1; j < coils; j += 1){
                                    offset = j % 2 === 0 ? 1 : -1;
                                    c.lineTo(start.x + delta.x * (j / coils) + normal.x * offset * 4, start.y + delta.y * (j / coils) + normal.y * offset * 4);
                                }
                            }
                            c.lineTo(end.x, end.y);
                        }
                        if (constraint.render.lineWidth) {
                            c.lineWidth = constraint.render.lineWidth;
                            c.strokeStyle = constraint.render.strokeStyle;
                            c.stroke();
                        }
                        if (constraint.render.anchors) {
                            c.fillStyle = constraint.render.strokeStyle;
                            c.beginPath();
                            c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                            c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                            c.closePath();
                            c.fill();
                        }
                    }
                };
                /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodies = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options, showInternalEdges = options.showInternalEdges || !options.wireframes, body, part, i, k;
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible) continue;
                        // handle compound parts
                        for(k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++){
                            part = body.parts[k];
                            if (!part.render.visible) continue;
                            if (options.showSleeping && body.isSleeping) c.globalAlpha = 0.5 * part.render.opacity;
                            else if (part.render.opacity !== 1) c.globalAlpha = part.render.opacity;
                            if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                                // part sprite
                                var sprite = part.render.sprite, texture = _getTexture(render, sprite.texture);
                                c.translate(part.position.x, part.position.y);
                                c.rotate(part.angle);
                                c.drawImage(texture, texture.width * -sprite.xOffset * sprite.xScale, texture.height * -sprite.yOffset * sprite.yScale, texture.width * sprite.xScale, texture.height * sprite.yScale);
                                // revert translation, hopefully faster than save / restore
                                c.rotate(-part.angle);
                                c.translate(-part.position.x, -part.position.y);
                            } else {
                                // part polygon
                                if (part.circleRadius) {
                                    c.beginPath();
                                    c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                                } else {
                                    c.beginPath();
                                    c.moveTo(part.vertices[0].x, part.vertices[0].y);
                                    for(var j = 1; j < part.vertices.length; j++){
                                        if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y);
                                        else c.moveTo(part.vertices[j].x, part.vertices[j].y);
                                        if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                                    }
                                    c.lineTo(part.vertices[0].x, part.vertices[0].y);
                                    c.closePath();
                                }
                                if (!options.wireframes) {
                                    c.fillStyle = part.render.fillStyle;
                                    if (part.render.lineWidth) {
                                        c.lineWidth = part.render.lineWidth;
                                        c.strokeStyle = part.render.strokeStyle;
                                        c.stroke();
                                    }
                                    c.fill();
                                } else {
                                    c.lineWidth = 1;
                                    c.strokeStyle = "#bbb";
                                    c.stroke();
                                }
                            }
                            c.globalAlpha = 1;
                        }
                    }
                };
                /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyWireframes = function(render, bodies, context) {
                    var c = context, showInternalEdges = render.options.showInternalEdges, body, part, i, j, k;
                    c.beginPath();
                    // render all bodies
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible) continue;
                        // handle compound parts
                        for(k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++){
                            part = body.parts[k];
                            c.moveTo(part.vertices[0].x, part.vertices[0].y);
                            for(j = 1; j < part.vertices.length; j++){
                                if (!part.vertices[j - 1].isInternal || showInternalEdges) c.lineTo(part.vertices[j].x, part.vertices[j].y);
                                else c.moveTo(part.vertices[j].x, part.vertices[j].y);
                                if (part.vertices[j].isInternal && !showInternalEdges) c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                            c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        }
                    }
                    c.lineWidth = 1;
                    c.strokeStyle = "#bbb";
                    c.stroke();
                };
                /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyConvexHulls = function(render, bodies, context) {
                    var c = context, body, part, i, j, k;
                    c.beginPath();
                    // render convex hulls
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible || body.parts.length === 1) continue;
                        c.moveTo(body.vertices[0].x, body.vertices[0].y);
                        for(j = 1; j < body.vertices.length; j++)c.lineTo(body.vertices[j].x, body.vertices[j].y);
                        c.lineTo(body.vertices[0].x, body.vertices[0].y);
                    }
                    c.lineWidth = 1;
                    c.strokeStyle = "rgba(255,255,255,0.2)";
                    c.stroke();
                };
                /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.vertexNumbers = function(render, bodies, context) {
                    var c = context, i, j, k;
                    for(i = 0; i < bodies.length; i++){
                        var parts = bodies[i].parts;
                        for(k = parts.length > 1 ? 1 : 0; k < parts.length; k++){
                            var part = parts[k];
                            for(j = 0; j < part.vertices.length; j++){
                                c.fillStyle = "rgba(255,255,255,0.2)";
                                c.fillText(i + "_" + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                            }
                        }
                    }
                };
                /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */ Render.mousePosition = function(render, mouse, context) {
                    var c = context;
                    c.fillStyle = "rgba(255,255,255,0.8)";
                    c.fillText(mouse.position.x + "  " + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
                };
                /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyBounds = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options;
                    c.beginPath();
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (body.render.visible) {
                            var parts = bodies[i].parts;
                            for(var j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                                var part = parts[j];
                                c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                            }
                        }
                    }
                    if (options.wireframes) c.strokeStyle = "rgba(255,255,255,0.08)";
                    else c.strokeStyle = "rgba(0,0,0,0.1)";
                    c.lineWidth = 1;
                    c.stroke();
                };
                /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyAxes = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options, part, i, j, k;
                    c.beginPath();
                    for(i = 0; i < bodies.length; i++){
                        var body = bodies[i], parts = body.parts;
                        if (!body.render.visible) continue;
                        if (options.showAxes) // render all axes
                        for(j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                            part = parts[j];
                            for(k = 0; k < part.axes.length; k++){
                                var axis = part.axes[k];
                                c.moveTo(part.position.x, part.position.y);
                                c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                            }
                        }
                        else for(j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                            part = parts[j];
                            for(k = 0; k < part.axes.length; k++){
                                // render a single axis indicator
                                c.moveTo(part.position.x, part.position.y);
                                c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length - 1].x) / 2, (part.vertices[0].y + part.vertices[part.vertices.length - 1].y) / 2);
                            }
                        }
                    }
                    if (options.wireframes) {
                        c.strokeStyle = "indianred";
                        c.lineWidth = 1;
                    } else {
                        c.strokeStyle = "rgba(255, 255, 255, 0.4)";
                        c.globalCompositeOperation = "overlay";
                        c.lineWidth = 2;
                    }
                    c.stroke();
                    c.globalCompositeOperation = "source-over";
                };
                /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyPositions = function(render, bodies, context) {
                    var c = context, engine = render.engine, options = render.options, body, part, i, k;
                    c.beginPath();
                    // render current positions
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (!body.render.visible) continue;
                        // handle compound parts
                        for(k = 0; k < body.parts.length; k++){
                            part = body.parts[k];
                            c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                            c.closePath();
                        }
                    }
                    if (options.wireframes) c.fillStyle = "indianred";
                    else c.fillStyle = "rgba(0,0,0,0.5)";
                    c.fill();
                    c.beginPath();
                    // render previous positions
                    for(i = 0; i < bodies.length; i++){
                        body = bodies[i];
                        if (body.render.visible) {
                            c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                            c.closePath();
                        }
                    }
                    c.fillStyle = "rgba(255,165,0,0.8)";
                    c.fill();
                };
                /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyVelocity = function(render, bodies, context) {
                    var c = context;
                    c.beginPath();
                    for(var i = 0; i < bodies.length; i++){
                        var body = bodies[i];
                        if (!body.render.visible) continue;
                        var velocity = Body.getVelocity(body);
                        c.moveTo(body.position.x, body.position.y);
                        c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
                    }
                    c.lineWidth = 3;
                    c.strokeStyle = "cornflowerblue";
                    c.stroke();
                };
                /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */ Render.bodyIds = function(render, bodies, context) {
                    var c = context, i, j;
                    for(i = 0; i < bodies.length; i++){
                        if (!bodies[i].render.visible) continue;
                        var parts = bodies[i].parts;
                        for(j = parts.length > 1 ? 1 : 0; j < parts.length; j++){
                            var part = parts[j];
                            c.font = "12px Arial";
                            c.fillStyle = "rgba(255,255,255,0.5)";
                            c.fillText(part.id, part.position.x + 10, part.position.y - 10);
                        }
                    }
                };
                /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */ Render.collisions = function(render, pairs, context) {
                    var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                    c.beginPath();
                    // render collision positions
                    for(i = 0; i < pairs.length; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        collision = pair.collision;
                        for(j = 0; j < pair.activeContacts.length; j++){
                            var contact = pair.activeContacts[j], vertex = contact.vertex;
                            c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
                        }
                    }
                    if (options.wireframes) c.fillStyle = "rgba(255,255,255,0.7)";
                    else c.fillStyle = "orange";
                    c.fill();
                    c.beginPath();
                    // render collision normals
                    for(i = 0; i < pairs.length; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        collision = pair.collision;
                        if (pair.activeContacts.length > 0) {
                            var normalPosX = pair.activeContacts[0].vertex.x, normalPosY = pair.activeContacts[0].vertex.y;
                            if (pair.activeContacts.length === 2) {
                                normalPosX = (pair.activeContacts[0].vertex.x + pair.activeContacts[1].vertex.x) / 2;
                                normalPosY = (pair.activeContacts[0].vertex.y + pair.activeContacts[1].vertex.y) / 2;
                            }
                            if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                            else c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                            c.lineTo(normalPosX, normalPosY);
                        }
                    }
                    if (options.wireframes) c.strokeStyle = "rgba(255,165,0,0.7)";
                    else c.strokeStyle = "orange";
                    c.lineWidth = 1;
                    c.stroke();
                };
                /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */ Render.separations = function(render, pairs, context) {
                    var c = context, options = render.options, pair, collision, corrected, bodyA, bodyB, i, j;
                    c.beginPath();
                    // render separations
                    for(i = 0; i < pairs.length; i++){
                        pair = pairs[i];
                        if (!pair.isActive) continue;
                        collision = pair.collision;
                        bodyA = collision.bodyA;
                        bodyB = collision.bodyB;
                        var k = 1;
                        if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                        if (bodyB.isStatic) k = 0;
                        c.moveTo(bodyB.position.x, bodyB.position.y);
                        c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);
                        k = 1;
                        if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
                        if (bodyA.isStatic) k = 0;
                        c.moveTo(bodyA.position.x, bodyA.position.y);
                        c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
                    }
                    if (options.wireframes) c.strokeStyle = "rgba(255,165,0,0.5)";
                    else c.strokeStyle = "orange";
                    c.stroke();
                };
                /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */ Render.inspector = function(inspector, context) {
                    var engine = inspector.engine, selected = inspector.selected, render = inspector.render, options = render.options, bounds;
                    if (options.hasBounds) {
                        var boundsWidth = render.bounds.max.x - render.bounds.min.x, boundsHeight = render.bounds.max.y - render.bounds.min.y, boundsScaleX = boundsWidth / render.options.width, boundsScaleY = boundsHeight / render.options.height;
                        context.scale(1 / boundsScaleX, 1 / boundsScaleY);
                        context.translate(-render.bounds.min.x, -render.bounds.min.y);
                    }
                    for(var i = 0; i < selected.length; i++){
                        var item = selected[i].data;
                        context.translate(0.5, 0.5);
                        context.lineWidth = 1;
                        context.strokeStyle = "rgba(255,165,0,0.9)";
                        context.setLineDash([
                            1,
                            2
                        ]);
                        switch(item.type){
                            case "body":
                                // render body selections
                                bounds = item.bounds;
                                context.beginPath();
                                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3), Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                                context.closePath();
                                context.stroke();
                                break;
                            case "constraint":
                                // render constraint selections
                                var point = item.pointA;
                                if (item.bodyA) point = item.pointB;
                                context.beginPath();
                                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                                context.closePath();
                                context.stroke();
                                break;
                        }
                        context.setLineDash([]);
                        context.translate(-0.5, -0.5);
                    }
                    // render selection region
                    if (inspector.selectStart !== null) {
                        context.translate(0.5, 0.5);
                        context.lineWidth = 1;
                        context.strokeStyle = "rgba(255,165,0,0.6)";
                        context.fillStyle = "rgba(255,165,0,0.1)";
                        bounds = inspector.selectBounds;
                        context.beginPath();
                        context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y), Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
                        context.closePath();
                        context.stroke();
                        context.fill();
                        context.translate(-0.5, -0.5);
                    }
                    if (options.hasBounds) context.setTransform(1, 0, 0, 1, 0, 0);
                };
                /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */ var _updateTiming = function(render, time) {
                    var engine = render.engine, timing = render.timing, historySize = timing.historySize, timestamp = engine.timing.timestamp;
                    timing.delta = time - timing.lastTime || Render._goodDelta;
                    timing.lastTime = time;
                    timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
                    timing.lastTimestamp = timestamp;
                    timing.deltaHistory.unshift(timing.delta);
                    timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);
                    timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
                    timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);
                    timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
                    timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);
                    timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
                    timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);
                    timing.elapsedHistory.unshift(timing.lastElapsed);
                    timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
                };
                /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */ var _mean = function(values) {
                    var result = 0;
                    for(var i = 0; i < values.length; i += 1)result += values[i];
                    return result / values.length || 0;
                };
                /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */ var _createCanvas = function(width, height) {
                    var canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;
                    canvas.oncontextmenu = function() {
                        return false;
                    };
                    canvas.onselectstart = function() {
                        return false;
                    };
                    return canvas;
                };
                /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */ var _getPixelRatio = function(canvas) {
                    var context = canvas.getContext("2d"), devicePixelRatio = window.devicePixelRatio || 1, backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
                    return devicePixelRatio / backingStorePixelRatio;
                };
                /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */ var _getTexture = function(render, imagePath) {
                    var image = render.textures[imagePath];
                    if (image) return image;
                    image = render.textures[imagePath] = new Image();
                    image.src = imagePath;
                    return image;
                };
                /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */ var _applyBackground = function(render, background) {
                    var cssBackground = background;
                    if (/(jpg|gif|png)$/.test(background)) cssBackground = "url(" + background + ")";
                    render.canvas.style.background = cssBackground;
                    render.canvas.style.backgroundSize = "contain";
                    render.currentBackground = background;
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A back-reference to the `Matter.Render` module.
     *
     * @deprecated
     * @property controller
     * @type render
     */ /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */ /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */ /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */ /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */ /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */ /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */ /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */ /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */ /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */ /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */ /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */ /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */ /**
     * A CSS background color string to use when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */ /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */ /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */ /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */ /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */ /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */ })();
        /***/ },
        /* 27 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/ var Runner = {};
            module1.exports = Runner;
            var Events = __webpack_require__(5);
            var Engine = __webpack_require__(17);
            var Common = __webpack_require__(0);
            (function() {
                var _requestAnimationFrame, _cancelAnimationFrame;
                if (typeof window !== "undefined") {
                    _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
                    _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
                }
                if (!_requestAnimationFrame) {
                    var _frameTimeout;
                    _requestAnimationFrame = function(callback) {
                        _frameTimeout = setTimeout(function() {
                            callback(Common.now());
                        }, 1000 / 60);
                    };
                    _cancelAnimationFrame = function() {
                        clearTimeout(_frameTimeout);
                    };
                }
                /**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */ Runner.create = function(options) {
                    var defaults = {
                        fps: 60,
                        deltaSampleSize: 60,
                        counterTimestamp: 0,
                        frameCounter: 0,
                        deltaHistory: [],
                        timePrev: null,
                        frameRequestId: null,
                        isFixed: false,
                        enabled: true
                    };
                    var runner = Common.extend(defaults, options);
                    runner.delta = runner.delta || 1000 / runner.fps;
                    runner.deltaMin = runner.deltaMin || 1000 / runner.fps;
                    runner.deltaMax = runner.deltaMax || 1000 / (runner.fps * 0.5);
                    runner.fps = 1000 / runner.delta;
                    return runner;
                };
                /**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */ Runner.run = function(runner, engine) {
                    // create runner if engine is first argument
                    if (typeof runner.positionIterations !== "undefined") {
                        engine = runner;
                        runner = Runner.create();
                    }
                    (function run(time) {
                        runner.frameRequestId = _requestAnimationFrame(run);
                        if (time && runner.enabled) Runner.tick(runner, engine, time);
                    })();
                    return runner;
                };
                /**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */ Runner.tick = function(runner, engine, time) {
                    var timing = engine.timing, delta;
                    if (runner.isFixed) // fixed timestep
                    delta = runner.delta;
                    else {
                        // dynamic timestep based on wall clock between calls
                        delta = time - runner.timePrev || runner.delta;
                        runner.timePrev = time;
                        // optimistically filter delta over a few frames, to improve stability
                        runner.deltaHistory.push(delta);
                        runner.deltaHistory = runner.deltaHistory.slice(-runner.deltaSampleSize);
                        delta = Math.min.apply(null, runner.deltaHistory);
                        // limit delta
                        delta = delta < runner.deltaMin ? runner.deltaMin : delta;
                        delta = delta > runner.deltaMax ? runner.deltaMax : delta;
                        // update engine timing object
                        runner.delta = delta;
                    }
                    // create an event object
                    var event = {
                        timestamp: timing.timestamp
                    };
                    Events.trigger(runner, "beforeTick", event);
                    // fps counter
                    runner.frameCounter += 1;
                    if (time - runner.counterTimestamp >= 1000) {
                        runner.fps = runner.frameCounter * ((time - runner.counterTimestamp) / 1000);
                        runner.counterTimestamp = time;
                        runner.frameCounter = 0;
                    }
                    Events.trigger(runner, "tick", event);
                    // update
                    Events.trigger(runner, "beforeUpdate", event);
                    Engine.update(engine, delta);
                    Events.trigger(runner, "afterUpdate", event);
                    Events.trigger(runner, "afterTick", event);
                };
                /**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */ Runner.stop = function(runner) {
                    _cancelAnimationFrame(runner.frameRequestId);
                };
                /**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */ Runner.start = function(runner, engine) {
                    Runner.run(runner, engine);
                };
            /*
    *
    *  Events Documentation
    *
    */ /**
    * Fired at the start of a tick, before any updates to the engine or timing
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after engine timing updated, but just before update
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired at the end of a tick, after engine update and after rendering
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired before update
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /**
    * Fired after update
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */ /*
    *
    *  Properties Documentation
    *
    */ /**
     * A flag that specifies whether the runner is running or not.
     *
     * @property enabled
     * @type boolean
     * @default true
     */ /**
     * A `Boolean` that specifies if the runner should use a fixed timestep (otherwise it is variable).
     * If timing is fixed, then the apparent simulation speed will change depending on the frame rate (but behaviour will be deterministic).
     * If the timing is variable, then the apparent simulation speed will be constant (approximately, but at the cost of determininism).
     *
     * @property isFixed
     * @type boolean
     * @default false
     */ /**
     * A `Number` that specifies the time step between updates in milliseconds.
     * If `engine.timing.isFixed` is set to `true`, then `delta` is fixed.
     * If it is `false`, then `delta` can dynamically change to maintain the correct apparent simulation speed.
     *
     * @property delta
     * @type number
     * @default 1000 / 60
     */ })();
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/ var SAT = {};
            module1.exports = SAT;
            var Collision = __webpack_require__(8);
            var Common = __webpack_require__(0);
            var deprecated = Common.deprecated;
            (function() {
                /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */ SAT.collides = function(bodyA, bodyB) {
                    return Collision.collides(bodyA, bodyB);
                };
                deprecated(SAT, "collides", "SAT.collides \u27A4 replaced by Collision.collides");
            })();
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/ var Svg = {};
            module1.exports = Svg;
            var Bounds = __webpack_require__(1);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */ Svg.pathToVertices = function(path, sampleLength) {
                    if (typeof window !== "undefined" && !("SVGPathSeg" in window)) Common.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                    // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
                    var i, il, total, point, segment, segments, segmentsQueue, lastSegment, lastPoint, segmentIndex, points = [], lx, ly, length = 0, x = 0, y = 0;
                    sampleLength = sampleLength || 15;
                    var addPoint = function(px, py, pathSegType) {
                        // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
                        var isRelative = pathSegType % 2 === 1 && pathSegType > 1;
                        // when the last point doesn't equal the current point add the current point
                        if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                            if (lastPoint && isRelative) {
                                lx = lastPoint.x;
                                ly = lastPoint.y;
                            } else {
                                lx = 0;
                                ly = 0;
                            }
                            var point = {
                                x: lx + px,
                                y: ly + py
                            };
                            // set last point
                            if (isRelative || !lastPoint) lastPoint = point;
                            points.push(point);
                            x = lx + px;
                            y = ly + py;
                        }
                    };
                    var addSegmentPoint = function(segment) {
                        var segType = segment.pathSegTypeAsLetter.toUpperCase();
                        // skip path ends
                        if (segType === "Z") return;
                        // map segment to x and y
                        switch(segType){
                            case "M":
                            case "L":
                            case "T":
                            case "C":
                            case "S":
                            case "Q":
                                x = segment.x;
                                y = segment.y;
                                break;
                            case "H":
                                x = segment.x;
                                break;
                            case "V":
                                y = segment.y;
                                break;
                        }
                        addPoint(x, y, segment.pathSegType);
                    };
                    // ensure path is absolute
                    Svg._svgPathToAbsolute(path);
                    // get total length
                    total = path.getTotalLength();
                    // queue segments
                    segments = [];
                    for(i = 0; i < path.pathSegList.numberOfItems; i += 1)segments.push(path.pathSegList.getItem(i));
                    segmentsQueue = segments.concat();
                    // sample through path
                    while(length < total){
                        // get segment at position
                        segmentIndex = path.getPathSegAtLength(length);
                        segment = segments[segmentIndex];
                        // new segment
                        if (segment != lastSegment) {
                            while(segmentsQueue.length && segmentsQueue[0] != segment)addSegmentPoint(segmentsQueue.shift());
                            lastSegment = segment;
                        }
                        // add points in between when curving
                        // TODO: adaptive sampling
                        switch(segment.pathSegTypeAsLetter.toUpperCase()){
                            case "C":
                            case "T":
                            case "S":
                            case "Q":
                            case "A":
                                point = path.getPointAtLength(length);
                                addPoint(point.x, point.y, 0);
                                break;
                        }
                        // increment by sample value
                        length += sampleLength;
                    }
                    // add remaining segments not passed by sampling
                    for(i = 0, il = segmentsQueue.length; i < il; ++i)addSegmentPoint(segmentsQueue[i]);
                    return points;
                };
                Svg._svgPathToAbsolute = function(path) {
                    // http://phrogz.net/convert-svg-path-to-all-absolute-commands
                    // Copyright (c) Gavin Kistner
                    // http://phrogz.net/js/_ReuseLicense.txt
                    // Modifications: tidy formatting and naming
                    var x0, y0, x1, y1, x2, y2, segs = path.pathSegList, x = 0, y = 0, len = segs.numberOfItems;
                    for(var i = 0; i < len; ++i){
                        var seg = segs.getItem(i), segType = seg.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(segType)) {
                            if ("x" in seg) x = seg.x;
                            if ("y" in seg) y = seg.y;
                        } else {
                            if ("x1" in seg) x1 = x + seg.x1;
                            if ("x2" in seg) x2 = x + seg.x2;
                            if ("y1" in seg) y1 = y + seg.y1;
                            if ("y2" in seg) y2 = y + seg.y2;
                            if ("x" in seg) x += seg.x;
                            if ("y" in seg) y += seg.y;
                            switch(segType){
                                case "m":
                                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                                    break;
                                case "l":
                                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                                    break;
                                case "h":
                                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                                    break;
                                case "v":
                                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                                    break;
                                case "c":
                                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                                    break;
                                case "s":
                                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                                    break;
                                case "q":
                                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                                    break;
                                case "t":
                                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                                    break;
                                case "a":
                                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                                    break;
                                case "z":
                                case "Z":
                                    x = x0;
                                    y = y0;
                                    break;
                            }
                        }
                        if (segType == "M" || segType == "m") {
                            x0 = x;
                            y0 = y;
                        }
                    }
                };
            })();
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            /**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/ var World = {};
            module1.exports = World;
            var Composite = __webpack_require__(6);
            var Common = __webpack_require__(0);
            (function() {
                /**
     * See above, aliases for back compatibility only
     */ World.create = Composite.create;
                World.add = Composite.add;
                World.remove = Composite.remove;
                World.clear = Composite.clear;
                World.addComposite = Composite.addComposite;
                World.addBody = Composite.addBody;
                World.addConstraint = Composite.addConstraint;
            })();
        /***/ }
    ]);
});

},{}]},["d8lhj","jeorp"], "jeorp", "parcelRequirecd79")

//# sourceMappingURL=index.b7a05eb9.js.map
