import oe, { useState as J, useRef as hr, useEffect as De } from "react";
import mr from "react-dom";
var ae = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function yr() {
  if (Pe) return M;
  Pe = 1;
  var v = oe, c = Symbol.for("react.element"), y = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, d = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(C, f, T) {
    var m, x = {}, l = null, k = null;
    T !== void 0 && (l = "" + T), f.key !== void 0 && (l = "" + f.key), f.ref !== void 0 && (k = f.ref);
    for (m in f) j.call(f, m) && !w.hasOwnProperty(m) && (x[m] = f[m]);
    if (C && C.defaultProps) for (m in f = C.defaultProps, f) x[m] === void 0 && (x[m] = f[m]);
    return { $$typeof: c, type: C, key: l, ref: k, props: x, _owner: d.current };
  }
  return M.Fragment = y, M.jsx = R, M.jsxs = R, M;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function gr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var v = oe, c = Symbol.for("react.element"), y = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), C = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), N = Symbol.iterator, F = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[F];
      return typeof r == "function" ? r : null;
    }
    var D = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var a = D.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, Fe = !1, $e = !1, We = !1, Me = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === j || e === w || Me || e === d || e === T || e === m || We || e === k || Ae || Fe || $e || typeof e == "object" && e !== null && (e.$$typeof === l || e.$$typeof === x || e.$$typeof === R || e.$$typeof === C || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case j:
          return "Fragment";
        case y:
          return "Portal";
        case w:
          return "Profiler";
        case d:
          return "StrictMode";
        case T:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return se(r) + ".Consumer";
          case R:
            var t = e;
            return se(t._context) + ".Provider";
          case f:
            return Ve(e, e.render, "ForwardRef");
          case x:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case l: {
            var s = e, u = s._payload, i = s._init;
            try {
              return S(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, $ = 0, le, ue, ce, fe, de, ve, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ye() {
      {
        if ($ === 0) {
          le = console.log, ue = console.info, ce = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Ue() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: le
            }),
            info: O({}, e, {
              value: ue
            }),
            warn: O({}, e, {
              value: ce
            }),
            error: O({}, e, {
              value: fe
            }),
            group: O({}, e, {
              value: de
            }),
            groupCollapsed: O({}, e, {
              value: ve
            }),
            groupEnd: O({}, e, {
              value: pe
            })
          });
        }
        $ < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = D.ReactCurrentDispatcher, X;
    function U(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            X = a && a[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, B;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Be();
    }
    function me(e, r) {
      if (!e || Z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      Z = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = G.current, G.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (E) {
              a = E;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (E) {
              a = E;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            a = E;
          }
          e();
        }
      } catch (E) {
        if (E && a && typeof E.stack == "string") {
          for (var o = E.stack.split(`
`), b = a.stack.split(`
`), p = o.length - 1, h = b.length - 1; p >= 1 && h >= 0 && o[p] !== b[h]; )
            h--;
          for (; p >= 1 && h >= 0; p--, h--)
            if (o[p] !== b[h]) {
              if (p !== 1 || h !== 1)
                do
                  if (p--, h--, h < 0 || o[p] !== b[h]) {
                    var _ = `
` + o[p].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, _), _;
                  }
                while (p >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        Z = !1, G.current = u, Ue(), Error.prepareStackTrace = s;
      }
      var A = e ? e.displayName || e.name : "", P = A ? U(A) : "";
      return typeof e == "function" && B.set(e, P), P;
    }
    function ze(e, r, t) {
      return me(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ke(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case T:
          return U("Suspense");
        case m:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return ze(e.render);
          case x:
            return z(e.type, r, t);
          case l: {
            var a = e, s = a._payload, u = a._init;
            try {
              return z(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, ye = {}, ge = D.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function qe(e, r, t, a, s) {
      {
        var u = Function.call.bind(W);
        for (var i in e)
          if (u(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              o = p;
            }
            o && !(o instanceof Error) && (K(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), K(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, K(s), g("Failed %s type: %s", t, o.message), K(null));
          }
      }
    }
    var Je = Array.isArray;
    function Q(e) {
      return Je(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function xe(e) {
      if (Ge(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), be(e);
    }
    var Ee = D.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, we;
    function Ze(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && Ee.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          je || (je = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          we || (we = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, a, s, u, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, a, s) {
      {
        var u, i = {}, o = null, b = null;
        t !== void 0 && (xe(t), o = "" + t), Qe(r) && (xe(r.key), o = "" + r.key), Ze(r) && (b = r.ref, er(r, s));
        for (u in r)
          W.call(r, u) && !Xe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (u in p)
            i[u] === void 0 && (i[u] = p[u]);
        }
        if (o || b) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, h), b && tr(i, h);
        }
        return nr(e, o, b, s, a, Ee.current, i);
      }
    }
    var ee = D.ReactCurrentOwner, Re = D.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function _e() {
      {
        if (ee.current) {
          var e = S(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var Ce = {};
    function ir(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var a = "";
        e && e._owner && e._owner !== ee.current && (a = " It was passed a child from " + S(e._owner.type) + "."), I(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), I(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            te(a) && Te(a, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = H(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              te(i.value) && Te(i.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = S(r);
          qe(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var s = S(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            I(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Se = {};
    function Oe(e, r, t, a, s, u) {
      {
        var i = Le(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = or();
          b ? o += b : o += _e();
          var p;
          e === null ? p = "null" : Q(e) ? p = "array" : e !== void 0 && e.$$typeof === c ? (p = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, o);
        }
        var h = ar(e, r, t, s, u);
        if (h == null)
          return h;
        if (i) {
          var _ = r.children;
          if (_ !== void 0)
            if (a)
              if (Q(_)) {
                for (var A = 0; A < _.length; A++)
                  ke(_[A], e);
                Object.freeze && Object.freeze(_);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(_, e);
        }
        if (W.call(r, "key")) {
          var P = S(e), E = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ne = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[P + ne]) {
            var vr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, P, vr, P), Se[P + ne] = !0;
          }
        }
        return e === j ? lr(h) : sr(h), h;
      }
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var fr = cr, dr = ur;
    L.Fragment = j, L.jsx = fr, L.jsxs = dr;
  }()), L;
}
process.env.NODE_ENV === "production" ? ae.exports = yr() : ae.exports = gr();
var n = ae.exports, Y = {}, V = mr;
if (process.env.NODE_ENV === "production")
  Y.createRoot = V.createRoot, Y.hydrateRoot = V.hydrateRoot;
else {
  var q = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Y.createRoot = function(v, c) {
    q.usingClientEntryPoint = !0;
    try {
      return V.createRoot(v, c);
    } finally {
      q.usingClientEntryPoint = !1;
    }
  }, Y.hydrateRoot = function(v, c, y) {
    q.usingClientEntryPoint = !0;
    try {
      return V.hydrateRoot(v, c, y);
    } finally {
      q.usingClientEntryPoint = !1;
    }
  };
}
const br = ({ onClick: v, isOpen: c, config: y }) => /* @__PURE__ */ n.jsx(
  "div",
  {
    onClick: v,
    className: `
        w-14 h-14 rounded-full shadow-lg cursor-pointer transition-all duration-300
        hover:scale-110 hover:shadow-xl flex items-center justify-center
        ${c ? "bg-gray-500" : ""}
      `,
    style: {
      backgroundColor: c ? "#6b7280" : y.theme.primaryColor,
      color: "#ffffff"
    },
    children: c ? (
      // Icono de cerrar (X)
      /* @__PURE__ */ n.jsxs(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ n.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            /* @__PURE__ */ n.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          ]
        }
      )
    ) : (
      // Icono de chat
      /* @__PURE__ */ n.jsx(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /* @__PURE__ */ n.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
        }
      )
    )
  }
), xr = ({ value: v, onChange: c, onSend: y, onKeyPress: j, isLoading: d, config: w }) => /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
  /* @__PURE__ */ n.jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ n.jsx(
    "textarea",
    {
      value: v,
      onChange: (R) => c(R.target.value),
      onKeyPress: j,
      placeholder: "Escribe tu mensaje...",
      disabled: d,
      className: "w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      style: {
        borderColor: w.theme.primaryColor,
        minHeight: "40px",
        maxHeight: "100px"
      },
      rows: "1"
    }
  ) }),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: y,
      disabled: !v.trim() || d,
      className: `
          p-2 rounded-lg transition-all duration-200 flex items-center justify-center
          ${!v.trim() || d ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "hover:scale-105 hover:shadow-md"}
        `,
      style: {
        backgroundColor: !v.trim() || d ? "#d1d5db" : w.theme.primaryColor,
        color: "#ffffff"
      },
      children: d ? (
        // Loading spinner
        /* @__PURE__ */ n.jsxs(
          "svg",
          {
            className: "animate-spin w-5 h-5",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
              /* @__PURE__ */ n.jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ n.jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }
              )
            ]
          }
        )
      ) : (
        // Send icon
        /* @__PURE__ */ n.jsxs(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ n.jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
              /* @__PURE__ */ n.jsx("polygon", { points: "22,2 15,22 11,13 2,9" })
            ]
          }
        )
      )
    }
  )
] }), Er = ({ messages: v, onSendMessage: c, isLoading: y, onClose: j, config: d }) => {
  const [w, R] = J(""), C = hr(null), f = () => {
    var l;
    (l = C.current) == null || l.scrollIntoView({ behavior: "smooth" });
  };
  De(() => {
    f();
  }, [v]);
  const T = () => {
    w.trim() && !y && (c(w.trim()), R(""));
  }, m = (l) => {
    l.key === "Enter" && !l.shiftKey && (l.preventDefault(), T());
  }, x = (l) => new Date(l).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit"
  });
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col mb-4",
      style: {
        backgroundColor: d.theme.backgroundColor,
        color: d.theme.textColor
      },
      children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center justify-between p-4 border-b border-gray-200 rounded-t-lg",
            style: { backgroundColor: d.theme.primaryColor, color: "#ffffff" },
            children: [
              /* @__PURE__ */ n.jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ n.jsx("div", { className: "w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center", children: /* @__PURE__ */ n.jsx(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /* @__PURE__ */ n.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
                  }
                ) }),
                /* @__PURE__ */ n.jsxs("div", { children: [
                  /* @__PURE__ */ n.jsx("h3", { className: "font-semibold text-sm", children: "NNIA" }),
                  /* @__PURE__ */ n.jsx("p", { className: "text-xs opacity-80", children: "Asistente virtual" })
                ] })
              ] }),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: j,
                  className: "text-white hover:text-gray-200 transition-colors",
                  children: /* @__PURE__ */ n.jsxs(
                    "svg",
                    {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [
                        /* @__PURE__ */ n.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                        /* @__PURE__ */ n.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: "flex-1 overflow-y-auto p-4 custom-scrollbar", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "space-y-3", children: [
            v.map((l) => /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `flex ${l.type === "user" ? "justify-end" : "justify-start"}`,
                children: /* @__PURE__ */ n.jsxs(
                  "div",
                  {
                    className: `max-w-xs px-3 py-2 rounded-lg text-sm ${l.type === "user" ? "bg-blue-500 text-white rounded-br-none" : "bg-gray-100 text-gray-800 rounded-bl-none"}`,
                    style: {
                      backgroundColor: l.type === "user" ? d.theme.primaryColor : "#f3f4f6",
                      color: l.type === "user" ? "#ffffff" : d.theme.textColor
                    },
                    children: [
                      /* @__PURE__ */ n.jsx("p", { className: "whitespace-pre-wrap", children: l.content }),
                      /* @__PURE__ */ n.jsx("p", { className: `text-xs mt-1 ${l.type === "user" ? "text-blue-100" : "text-gray-500"}`, children: x(l.timestamp) })
                    ]
                  }
                )
              },
              l.id
            )),
            y && /* @__PURE__ */ n.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ n.jsx("div", { className: "bg-gray-100 text-gray-800 rounded-lg rounded-bl-none px-3 py-2", children: /* @__PURE__ */ n.jsxs("div", { className: "flex space-x-1", children: [
              /* @__PURE__ */ n.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce" }),
              /* @__PURE__ */ n.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.1s" } }),
              /* @__PURE__ */ n.jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce", style: { animationDelay: "0.2s" } })
            ] }) }) })
          ] }),
          /* @__PURE__ */ n.jsx("div", { ref: C })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "p-4 border-t border-gray-200", children: /* @__PURE__ */ n.jsx(
          xr,
          {
            value: w,
            onChange: R,
            onSend: T,
            onKeyPress: m,
            isLoading: y,
            config: d
          }
        ) })
      ]
    }
  );
}, jr = ({ config: v }) => {
  const [c, y] = J(!1), [j, d] = J([]), [w, R] = J(!1), f = { ...{
    position: "bottom-right",
    theme: {
      primaryColor: "#3b82f6",
      backgroundColor: "#ffffff",
      textColor: "#1f2937"
    },
    welcomeMessage: "¡Hola! Soy NNIA, tu asistente virtual. ¿En qué puedo ayudarte?",
    apiUrl: "https://api.nnia.com",
    businessId: "default"
  }, ...v }, T = () => {
    switch (f.position) {
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-center":
        return "bottom-4 left-1/2 transform -translate-x-1/2";
      case "top-right":
        return "top-4 right-4";
      case "top-left":
        return "top-4 left-4";
      case "top-center":
        return "top-4 left-1/2 transform -translate-x-1/2";
      default:
        return "bottom-4 right-4";
    }
  };
  De(() => {
    j.length === 0 && d([
      {
        id: 1,
        type: "assistant",
        content: f.welcomeMessage,
        timestamp: /* @__PURE__ */ new Date()
      }
    ]);
  }, [f.welcomeMessage]);
  const m = async (x) => {
    const l = {
      id: Date.now(),
      type: "user",
      content: x,
      timestamp: /* @__PURE__ */ new Date()
    };
    d((k) => [...k, l]), R(!0);
    try {
      const N = await (await fetch(`${f.apiUrl}/api/nnia/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: x,
          businessId: f.businessId,
          origin: "widget"
        })
      })).json(), F = {
        id: Date.now() + 1,
        type: "assistant",
        content: N.message,
        timestamp: /* @__PURE__ */ new Date()
      };
      d((H) => [...H, F]);
    } catch (k) {
      console.error("Error al enviar mensaje:", k);
      const N = {
        id: Date.now() + 1,
        type: "assistant",
        content: "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.",
        timestamp: /* @__PURE__ */ new Date()
      };
      d((F) => [...F, N]);
    } finally {
      R(!1);
    }
  };
  return /* @__PURE__ */ n.jsxs("div", { className: `fixed ${T()} z-50`, children: [
    c && /* @__PURE__ */ n.jsx("div", { className: "slide-in", children: /* @__PURE__ */ n.jsx(
      Er,
      {
        messages: j,
        onSendMessage: m,
        isLoading: w,
        onClose: () => y(!1),
        config: f
      }
    ) }),
    /* @__PURE__ */ n.jsx(
      br,
      {
        onClick: () => y(!c),
        isOpen: c,
        config: f
      }
    )
  ] });
};
window.initNNIAWidget = function(v = {}) {
  const c = document.createElement("div");
  c.id = "nnia-widget-container", document.body.appendChild(c), Y.createRoot(c).render(
    /* @__PURE__ */ n.jsx(oe.StrictMode, { children: /* @__PURE__ */ n.jsx(jr, { config: v }) })
  );
};
