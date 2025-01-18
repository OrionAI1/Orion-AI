(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3454: function (a, b, c) {
      "use strict";
      var d, e;
      a.exports =
        (null === (d = c.g.process) || void 0 === d ? void 0 : d.env) &&
        "object" ==
          typeof (null === (e = c.g.process) || void 0 === e ? void 0 : e.env)
          ? c.g.process
          : c(7663);
    },
    6363: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return c(7877);
        },
      ]);
    },
    8024: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return f;
        },
      });
      var d = c(5893);
      function e(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      c(7294);
      var f = function (a) {
        return (0, d.jsx)(
          "i",
          (function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = null != arguments[b] ? arguments[b] : {},
                d = Object.keys(c);
              "function" == typeof Object.getOwnPropertySymbols &&
                (d = d.concat(
                  Object.getOwnPropertySymbols(c).filter(function (a) {
                    return Object.getOwnPropertyDescriptor(c, a).enumerable;
                  })
                )),
                d.forEach(function (b) {
                  e(a, b, c[b]);
                });
            }
            return a;
          })({ "data-feather": a.name }, a, { className: "icon" })
        );
      };
    },
    3275: function (a, b, c) {
      "use strict";
      var d = c(7294);
      b.Z = function () {
        var a = (0, d.useState)(!1),
          b = a[0],
          c = a[1],
          e = function () {
            var a,
              b = Math.floor(10 * Math.random()),
              c = Math.floor(10 * Math.random()),
              d = 0.5 > Math.random() ? "addition" : "multiplication";
            return (
              (a = "addition" === d ? b + c : b * c),
              { n1: b, n2: c, result: a, type: d }
            );
          },
          f = function () {
            var a = e(),
              b = "";
            return ((b =
              "addition" === a.type
                ? "".concat(a.n1, " + ").concat(a.n2, " = ?")
                : "multiplication" === a.type
                ? "".concat(a.n1, " * ").concat(a.n2, " = ?")
                : "".concat(a.n1, " + ").concat(a.n2, " = ?")),
            prompt("Please verify you are human: ".concat(b)) ===
              a.result.toString())
              ? (c(!0), !0)
              : (alert("You are not human!"), c(!1), !1);
          };
        return {
          isHuman: b,
          handleFormSubmit: function (a, b) {
            if (f()) {
              var c = document.createElement("form");
              (c.method = "post"),
                (c.action = "https://newsletter.getleon.ai/subscription/form"),
                (c.target = "_blank"),
                (c.style.display = "none");
              var d = document.createElement("input");
              (d.type = "email"),
                (d.name = "email"),
                (d.value = a),
                c.appendChild(d);
              var e = document.createElement("input");
              (e.type = "hidden"),
                (e.name = "l"),
                (e.value = b),
                c.appendChild(e),
                document.body.appendChild(c),
                c.submit();
            }
          },
        };
      };
    },
    8045: function (a, b, c) {
      "use strict";
      function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
        return d;
      }
      function e(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      function f(a) {
        return (
          (function (a) {
            if (Array.isArray(a)) return d(a);
          })(a) ||
          (function (a) {
            if (
              ("undefined" != typeof Symbol && null != a[Symbol.iterator]) ||
              null != a["@@iterator"]
            )
              return Array.from(a);
          })(a) ||
          g(a) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function g(a, b) {
        if (a) {
          if ("string" == typeof a) return d(a, b);
          var c = Object.prototype.toString.call(a).slice(8, -1);
          if (
            ("Object" === c && a.constructor && (c = a.constructor.name),
            "Map" === c || "Set" === c)
          )
            return Array.from(c);
          if (
            "Arguments" === c ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return d(a, b);
        }
      }
      b.default = function (a) {
        var b,
          c,
          d = a.src,
          h = a.sizes,
          s = a.unoptimized,
          x = void 0 !== s && s,
          y = a.priority,
          z = void 0 !== y && y,
          A = a.loading,
          B = a.lazyRoot,
          C = void 0 === B ? null : B,
          D = a.lazyBoundary,
          E = void 0 === D ? "200px" : D,
          F = a.className,
          G = a.quality,
          H = a.width,
          I = a.height,
          J = a.objectFit,
          K = a.objectPosition,
          L = a.onLoadingComplete,
          M = a.loader,
          N = void 0 === M ? w : M,
          O = a.placeholder,
          P = void 0 === O ? "empty" : O,
          Q = a.blurDataURL,
          R = (function (a, b) {
            if (null == a) return {};
            var c,
              d,
              e = o(a, b);
            if (Object.getOwnPropertySymbols) {
              var f = Object.getOwnPropertySymbols(a);
              for (d = 0; d < f.length; d++)
                (c = f[d]),
                  !(b.indexOf(c) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(a, c) &&
                    (e[c] = a[c]);
            }
            return e;
          })(a, [
            "src",
            "sizes",
            "unoptimized",
            "priority",
            "loading",
            "lazyRoot",
            "lazyBoundary",
            "className",
            "quality",
            "width",
            "height",
            "objectFit",
            "objectPosition",
            "onLoadingComplete",
            "loader",
            "placeholder",
            "blurDataURL",
          ]),
          S = i.useRef(null),
          T = i.useContext(m.ImageConfigContext),
          U = i.useMemo(
            function () {
              var a = p || T || k.imageConfigDefault,
                b = f(a.deviceSizes)
                  .concat(f(a.imageSizes))
                  .sort(function (a, b) {
                    return a - b;
                  }),
                c = a.deviceSizes.sort(function (a, b) {
                  return a - b;
                });
              return n({}, a, { allSizes: b, deviceSizes: c });
            },
            [T]
          ),
          V = R,
          W = h ? "responsive" : "intrinsic";
        "layout" in V && (V.layout && (W = V.layout), delete V.layout);
        var X,
          Y = "";
        if ("object" == typeof (X = d) && (t(X) || void 0 !== X.src)) {
          var Z = t(d) ? d.default : d;
          if (!Z.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                JSON.stringify(Z)
              )
            );
          if (
            ((Q = Q || Z.blurDataURL),
            (Y = Z.src),
            (!W || "fill" !== W) &&
              ((I = I || Z.height), (H = H || Z.width), !Z.height || !Z.width))
          )
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                JSON.stringify(Z)
              )
            );
        }
        d = "string" == typeof d ? d : Y;
        var $ = v(H),
          _ = v(I),
          aa = v(G),
          ba = !z && ("lazy" === A || void 0 === A);
        (d.startsWith("data:") || d.startsWith("blob:")) &&
          ((x = !0), (ba = !1)),
          q.has(d) && (ba = !1);
        var ca,
          da,
          ea =
            ((da = 2),
            (function (a) {
              if (Array.isArray(a)) return a;
            })(
              (ca = l.useIntersection({
                rootRef: C,
                rootMargin: E,
                disabled: !ba,
              }))
            ) ||
              (function (a, b) {
                var c,
                  d,
                  e =
                    null == a
                      ? null
                      : ("undefined" != typeof Symbol && a[Symbol.iterator]) ||
                        a["@@iterator"];
                if (null != e) {
                  var f = [],
                    g = !0,
                    h = !1;
                  try {
                    for (
                      e = e.call(a);
                      !(g = (c = e.next()).done) &&
                      (f.push(c.value), !b || f.length !== b);
                      g = !0
                    );
                  } catch (i) {
                    (h = !0), (d = i);
                  } finally {
                    try {
                      g || null == e.return || e.return();
                    } finally {
                      if (h) throw d;
                    }
                  }
                  return f;
                }
              })(ca, da) ||
              g(ca, da) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          fa = ea[0],
          ga = ea[1],
          ha = !ba || ga,
          ia = {
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          ja = {
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          ka = !1,
          la = {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: J,
            objectPosition: K,
          },
          ma =
            "blur" === P
              ? {
                  filter: "blur(20px)",
                  backgroundSize: J || "cover",
                  backgroundImage: 'url("'.concat(Q, '")'),
                  backgroundPosition: K || "0% 0%",
                }
              : {};
        if ("fill" === W)
          (ia.display = "block"),
            (ia.position = "absolute"),
            (ia.top = 0),
            (ia.left = 0),
            (ia.bottom = 0),
            (ia.right = 0);
        else if (void 0 !== $ && void 0 !== _) {
          var na = _ / $,
            oa = isNaN(na) ? "100%" : "".concat(100 * na, "%");
          "responsive" === W
            ? ((ia.display = "block"),
              (ia.position = "relative"),
              (ka = !0),
              (ja.paddingTop = oa))
            : "intrinsic" === W
            ? ((ia.display = "inline-block"),
              (ia.position = "relative"),
              (ia.maxWidth = "100%"),
              (ka = !0),
              (ja.maxWidth = "100%"),
              (b =
                "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                  .concat($, "%27%20height=%27")
                  .concat(_, "%27/%3e")))
            : "fixed" === W &&
              ((ia.display = "inline-block"),
              (ia.position = "relative"),
              (ia.width = $),
              (ia.height = _));
        }
        var pa = { src: r, srcSet: void 0, sizes: void 0 };
        ha &&
          (pa = u({
            config: U,
            src: d,
            unoptimized: x,
            layout: W,
            width: $,
            quality: aa,
            sizes: h,
            loader: N,
          }));
        var qa = d,
          ra =
            (e((c = {}), "imagesrcset", pa.srcSet),
            e(c, "imagesizes", pa.sizes),
            c),
          sa = i.default.useLayoutEffect,
          ta = i.useRef(L);
        return (
          i.useEffect(
            function () {
              ta.current = L;
            },
            [L]
          ),
          sa(
            function () {
              fa(S.current);
            },
            [fa]
          ),
          i.useEffect(
            function () {
              var a, b, c, d, e;
              (a = S),
                (b = qa),
                (c = P),
                (d = ta),
                (e = function () {
                  var e = a.current;
                  e &&
                    e.src !== r &&
                    ("decode" in e ? e.decode() : Promise.resolve())
                      .catch(function () {})
                      .then(function () {
                        if (
                          a.current &&
                          (q.add(b),
                          "blur" === c &&
                            ((e.style.filter = ""),
                            (e.style.backgroundSize = ""),
                            (e.style.backgroundImage = ""),
                            (e.style.backgroundPosition = "")),
                          d.current)
                        ) {
                          var f = e.naturalWidth,
                            g = e.naturalHeight;
                          d.current({ naturalWidth: f, naturalHeight: g });
                        }
                      });
                }),
                a.current &&
                  (a.current.complete ? e() : (a.current.onload = e));
            },
            [qa, W, P, ha]
          ),
          i.default.createElement(
            "span",
            { style: ia },
            ka
              ? i.default.createElement(
                  "span",
                  { style: ja },
                  b
                    ? i.default.createElement("img", {
                        style: {
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        },
                        alt: "",
                        "aria-hidden": !0,
                        src: b,
                      })
                    : null
                )
              : null,
            i.default.createElement(
              "img",
              Object.assign({}, V, pa, {
                decoding: "async",
                "data-nimg": W,
                className: F,
                ref: S,
                style: n({}, la, ma),
              })
            ),
            ba &&
              i.default.createElement(
                "noscript",
                null,
                i.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    V,
                    u({
                      config: U,
                      src: d,
                      unoptimized: x,
                      layout: W,
                      width: $,
                      quality: aa,
                      sizes: h,
                      loader: N,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": W,
                      style: la,
                      className: F,
                      loading: A || "lazy",
                    }
                  )
                )
              ),
            z
              ? i.default.createElement(
                  j.default,
                  null,
                  i.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + pa.src + pa.srcSet + pa.sizes,
                        rel: "preload",
                        as: "image",
                        href: pa.srcSet ? void 0 : pa.src,
                      },
                      ra
                    )
                  )
                )
              : null
          )
        );
      };
      var h,
        i = (function (a) {
          if (a && a.__esModule) return a;
          var b = {};
          if (null != a) {
            for (var c in a)
              if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(a, c)
                    : {};
                d.get || d.set ? Object.defineProperty(b, c, d) : (b[c] = a[c]);
              }
          }
          return (b.default = a), b;
        })(c(7294)),
        j = (h = c(5443)) && h.__esModule ? h : { default: h },
        k = c(5809),
        l = c(7190),
        m = c(9977);
      function n(a) {
        for (var b = arguments, c = 1; c < arguments.length; c++)
          !(function (c) {
            var d = null != b[c] ? b[c] : {},
              e = Object.keys(d);
            "function" == typeof Object.getOwnPropertySymbols &&
              (e = e.concat(
                Object.getOwnPropertySymbols(d).filter(function (a) {
                  return Object.getOwnPropertyDescriptor(d, a).enumerable;
                })
              )),
              e.forEach(function (b) {
                var c, e, f;
                (c = a),
                  (e = b),
                  (f = d[b]),
                  e in c
                    ? Object.defineProperty(c, e, {
                        value: f,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (c[e] = f);
              });
          })(c);
        return a;
      }
      function o(a, b) {
        if (null == a) return {};
        var c,
          d,
          e = {},
          f = Object.keys(a);
        for (d = 0; d < f.length; d++)
          (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c]);
        return e;
      }
      var p = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
        },
        q = new Set();
      new Map();
      var r =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        s = new Map([
          [
            "default",
            function (a) {
              var b = a.config,
                c = a.src,
                d = a.width,
                e = a.quality;
              return c.endsWith(".svg") && !b.dangerouslyAllowSVG
                ? c
                : ""
                    .concat(b.path, "?url=")
                    .concat(encodeURIComponent(c), "&w=")
                    .concat(d, "&q=")
                    .concat(e || 75);
            },
          ],
          [
            "imgix",
            function (a) {
              var b = a.config,
                c = a.src,
                d = a.width,
                e = a.quality,
                f = new URL("".concat(b.path).concat(x(c))),
                g = f.searchParams;
              return (
                g.set("auto", g.get("auto") || "format"),
                g.set("fit", g.get("fit") || "max"),
                g.set("w", g.get("w") || d.toString()),
                e && g.set("q", e.toString()),
                f.href
              );
            },
          ],
          [
            "cloudinary",
            function (a) {
              var b = a.config,
                c = a.src,
                d = a.width,
                e = a.quality,
                f =
                  ["f_auto", "c_limit", "w_" + d, "q_" + (e || "auto")].join(
                    ","
                  ) + "/";
              return "".concat(b.path).concat(f).concat(x(c));
            },
          ],
          [
            "akamai",
            function (a) {
              var b = a.config,
                c = a.src,
                d = a.width;
              return "".concat(b.path).concat(x(c), "?imwidth=").concat(d);
            },
          ],
          [
            "custom",
            function (a) {
              var b = a.src;
              throw new Error(
                'Image with src "'.concat(b, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
            },
          ],
        ]);
      function t(a) {
        return void 0 !== a.default;
      }
      function u(a) {
        var b = a.config,
          c = a.src,
          d = a.unoptimized,
          e = a.layout,
          g = a.width,
          h = a.quality,
          i = a.sizes,
          j = a.loader;
        if (d) return { src: c, srcSet: void 0, sizes: void 0 };
        var k = (function (a, b, c, d) {
            var e = a.deviceSizes,
              g = a.allSizes;
            if (d && ("fill" === c || "responsive" === c)) {
              for (var h = /(^|\s)(1?\d?\d)vw/g, i = []; (j = h.exec(d)); j)
                i.push(parseInt(j[2]));
              if (i.length) {
                var j,
                  k,
                  l = 0.01 * (k = Math).min.apply(k, f(i));
                return {
                  widths: g.filter(function (a) {
                    return a >= e[0] * l;
                  }),
                  kind: "w",
                };
              }
              return { widths: g, kind: "w" };
            }
            return "number" != typeof b || "fill" === c || "responsive" === c
              ? { widths: e, kind: "w" }
              : {
                  widths: f(
                    new Set(
                      [b, 2 * b].map(function (a) {
                        return (
                          g.find(function (b) {
                            return b >= a;
                          }) || g[g.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(b, g, e, i),
          l = k.widths,
          m = k.kind,
          n = l.length - 1;
        return {
          sizes: i || "w" !== m ? i : "100vw",
          srcSet: l
            .map(function (a, d) {
              return ""
                .concat(j({ config: b, src: c, quality: h, width: a }), " ")
                .concat("w" === m ? a : d + 1)
                .concat(m);
            })
            .join(", "),
          src: j({ config: b, src: c, quality: h, width: l[n] }),
        };
      }
      function v(a) {
        return "number" == typeof a
          ? a
          : "string" == typeof a
          ? parseInt(a, 10)
          : void 0;
      }
      function w(a) {
        var b,
          c =
            (null === (b = a.config) || void 0 === b ? void 0 : b.loader) ||
            "default",
          d = s.get(c);
        if (d) return d(a);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(k.VALID_LOADERS.join(", "), ". Received: ")
            .concat(c)
        );
      }
      function x(a) {
        return "/" === a[0] ? a.slice(1) : a;
      }
    },
    8418: function (a, b, c) {
      "use strict";
      function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
        return d;
      }
      function e(a, b) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a;
          })(a) ||
          (function (a, b) {
            var c,
              d,
              e =
                null == a
                  ? null
                  : ("undefined" != typeof Symbol && a[Symbol.iterator]) ||
                    a["@@iterator"];
            if (null != e) {
              var f = [],
                g = !0,
                h = !1;
              try {
                for (
                  e = e.call(a);
                  !(g = (c = e.next()).done) &&
                  (f.push(c.value), !b || f.length !== b);
                  g = !0
                );
              } catch (i) {
                (h = !0), (d = i);
              } finally {
                try {
                  g || null == e.return || e.return();
                } finally {
                  if (h) throw d;
                }
              }
              return f;
            }
          })(a, b) ||
          f(a, b) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(a, b) {
        if (a) {
          if ("string" == typeof a) return d(a, b);
          var c = Object.prototype.toString.call(a).slice(8, -1);
          if (
            ("Object" === c && a.constructor && (c = a.constructor.name),
            "Map" === c || "Set" === c)
          )
            return Array.from(c);
          if (
            "Arguments" === c ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return d(a, b);
        }
      }
      b.default = void 0;
      var g,
        h = (g = c(7294)) && g.__esModule ? g : { default: g },
        i = c(6273),
        j = c(387),
        k = c(7190),
        l = {};
      function m(a, b, c, d) {
        if (a && i.isLocalURL(b)) {
          a.prefetch(b, c, d).catch(function (a) {});
          var e = d && void 0 !== d.locale ? d.locale : a && a.locale;
          l[b + "%" + c + (e ? "%" + e : "")] = !0;
        }
      }
      b.default = function (a) {
        var b,
          c = !1 !== a.prefetch,
          d = j.useRouter(),
          f = h.default.useMemo(
            function () {
              var b = e(i.resolveHref(d, a.href, !0), 2),
                c = b[0],
                f = b[1];
              return { href: c, as: a.as ? i.resolveHref(d, a.as) : f || c };
            },
            [d, a.href, a.as]
          ),
          g = f.href,
          n = f.as,
          o = a.children,
          p = a.replace,
          q = a.shallow,
          r = a.scroll,
          s = a.locale;
        "string" == typeof o && (o = h.default.createElement("a", null, o));
        var t =
            (b = h.default.Children.only(o)) && "object" == typeof b && b.ref,
          u = e(k.useIntersection({ rootMargin: "200px" }), 2),
          v = u[0],
          w = u[1],
          x = h.default.useCallback(
            function (a) {
              v(a),
                t &&
                  ("function" == typeof t
                    ? t(a)
                    : "object" == typeof t && (t.current = a));
            },
            [t, v]
          );
        h.default.useEffect(
          function () {
            var a = w && c && i.isLocalURL(g),
              b = void 0 !== s ? s : d && d.locale,
              e = l[g + "%" + n + (b ? "%" + b : "")];
            a && !e && m(d, g, n, { locale: b });
          },
          [n, g, w, s, c, d]
        );
        var y = {
          ref: x,
          onClick: function (a) {
            var c, e, f, h, j, k, l, m, o, t;
            b.props &&
              "function" == typeof b.props.onClick &&
              b.props.onClick(a),
              a.defaultPrevented ||
                ((c = a),
                (e = d),
                (f = g),
                (h = n),
                (j = p),
                (k = q),
                (l = r),
                (m = s),
                ("A" === c.currentTarget.nodeName.toUpperCase() &&
                  (((t = (o = c).currentTarget.target) && "_self" !== t) ||
                    o.metaKey ||
                    o.ctrlKey ||
                    o.shiftKey ||
                    o.altKey ||
                    (o.nativeEvent && 2 === o.nativeEvent.which) ||
                    !i.isLocalURL(f))) ||
                  (c.preventDefault(),
                  e[j ? "replace" : "push"](f, h, {
                    shallow: k,
                    locale: m,
                    scroll: l,
                  })));
          },
        };
        if (
          ((y.onMouseEnter = function (a) {
            b.props &&
              "function" == typeof b.props.onMouseEnter &&
              b.props.onMouseEnter(a),
              i.isLocalURL(g) && m(d, g, n, { priority: !0 });
          }),
          a.passHref || ("a" === b.type && !("href" in b.props)))
        ) {
          var z = void 0 !== s ? s : d && d.locale,
            A =
              d &&
              d.isLocaleDomain &&
              i.getDomainLocale(n, z, d && d.locales, d && d.domainLocales);
          y.href = A || i.addBasePath(i.addLocale(n, z, d && d.defaultLocale));
        }
        return h.default.cloneElement(b, y);
      };
    },
    7190: function (a, b, c) {
      "use strict";
      function d(a, b) {
        (null == b || b > a.length) && (b = a.length);
        for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
        return d;
      }
      function e(a, b) {
        return (
          (function (a) {
            if (Array.isArray(a)) return a;
          })(a) ||
          (function (a, b) {
            var c,
              d,
              e =
                null == a
                  ? null
                  : ("undefined" != typeof Symbol && a[Symbol.iterator]) ||
                    a["@@iterator"];
            if (null != e) {
              var f = [],
                g = !0,
                h = !1;
              try {
                for (
                  e = e.call(a);
                  !(g = (c = e.next()).done) &&
                  (f.push(c.value), !b || f.length !== b);
                  g = !0
                );
              } catch (i) {
                (h = !0), (d = i);
              } finally {
                try {
                  g || null == e.return || e.return();
                } finally {
                  if (h) throw d;
                }
              }
              return f;
            }
          })(a, b) ||
          f(a, b) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(a, b) {
        if (a) {
          if ("string" == typeof a) return d(a, b);
          var c = Object.prototype.toString.call(a).slice(8, -1);
          if (
            ("Object" === c && a.constructor && (c = a.constructor.name),
            "Map" === c || "Set" === c)
          )
            return Array.from(c);
          if (
            "Arguments" === c ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
          )
            return d(a, b);
        }
      }
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.useIntersection = function (a) {
          var b = a.rootRef,
            c = a.rootMargin,
            d = a.disabled || !i,
            f = g.useRef(),
            k = e(g.useState(!1), 2),
            l = k[0],
            m = k[1],
            n = e(g.useState(b ? b.current : null), 2),
            o = n[0],
            p = n[1],
            q = g.useCallback(
              function (a) {
                f.current && (f.current(), (f.current = void 0)),
                  !d &&
                    !l &&
                    a &&
                    a.tagName &&
                    (f.current = j(
                      a,
                      function (a) {
                        return a && m(a);
                      },
                      { root: o, rootMargin: c }
                    ));
              },
              [d, o, c, l]
            );
          return (
            g.useEffect(
              function () {
                if (!i && !l) {
                  var a = h.requestIdleCallback(function () {
                    return m(!0);
                  });
                  return function () {
                    return h.cancelIdleCallback(a);
                  };
                }
              },
              [l]
            ),
            g.useEffect(
              function () {
                b && p(b.current);
              },
              [b]
            ),
            [q, l]
          );
        });
      var g = c(7294),
        h = c(9311),
        i = "undefined" != typeof IntersectionObserver;
      function j(a, b, c) {
        var d = m(c),
          e = d.id,
          f = d.observer,
          g = d.elements;
        return (
          g.set(a, b),
          f.observe(a),
          function () {
            if ((g.delete(a), f.unobserve(a), 0 === g.size)) {
              f.disconnect(), k.delete(e);
              var b = l.findIndex(function (a) {
                return a.root === e.root && a.margin === e.margin;
              });
              b > -1 && l.splice(b, 1);
            }
          }
        );
      }
      var k = new Map(),
        l = [];
      function m(a) {
        var b,
          c = { root: a.root || null, margin: a.rootMargin || "" },
          d = l.find(function (a) {
            return a.root === c.root && a.margin === c.margin;
          });
        if ((d ? (b = k.get(d)) : ((b = k.get(c)), l.push(c)), b)) return b;
        var e = new Map(),
          f = new IntersectionObserver(function (a) {
            a.forEach(function (a) {
              var b = e.get(a.target),
                c = a.isIntersecting || a.intersectionRatio > 0;
              b && c && b(c);
            });
          }, a);
        return k.set(c, (b = { id: c, observer: f, elements: e })), b;
      }
    },
    7877: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return t;
          },
        });
      var d = c(5893),
        e = c(4298),
        f = c(4304);
      c(7785);
      var g = c(7294),
        h = c(1664),
        i = c(5675),
        j = c(7342),
        k = c.n(j),
        l = c(8024),
        m = function (a) {
          var b = a.starsNb,
            c = (0, g.useRef)(null),
            e = (0, g.useRef)(null),
            f = (0, g.useRef)(null);
          return (
            (0, g.useEffect)(function () {
              var a = function () {
                var a = window.scrollY;
                c &&
                  c.current &&
                  (a > 0
                    ? c.current.classList.remove(k().noBorder)
                    : c.current.classList.add(k().noBorder));
              };
              return (
                window.addEventListener("scroll", a),
                function () {
                  return window.removeEventListener("scroll", a);
                }
              );
            }, []),
            (0, d.jsx)("header", {
              ref: c,
              className: "".concat(k().header, " ").concat(k().noBorder),
              children: (0, d.jsx)("div", {
                className: "container",
                children: (0, d.jsxs)("div", {
                  className: k().wrapper,
                  children: [
                    (0, d.jsx)(h.default, {
                      href: "/",
                      children: (0, d.jsx)("a", {
                        "aria-label": "Leon homepage",
                        children: (0, d.jsx)(i.default, {
                          src: "/img/orionlogo.svg",
                          alt: "Leon: open-source personal and virtual assistant",
                          width: 86,
                          height: 44,
                        }),
                      }),
                    }),
                    (0, d.jsx)("button", {
                      ref: e,
                      "aria-label": "Menu button",
                      className: k().mobileMenuBtn,
                      onClick: function () {
                        var a, b;
                        null === (a = e.current) ||
                          void 0 === a ||
                          a.classList.toggle(k().mobileMenuBtnClicked),
                          null === (b = f.current) ||
                            void 0 === b ||
                            b.classList.toggle(k().mobileMenuBtnClicked);
                      },
                    }),
                    (0, d.jsxs)("div", {
                      ref: f,
                      className: k().menu,
                      children: [
                        (0, d.jsx)("nav", {
                          children: (0, d.jsxs)("ul", {
                            children: [
                              ,
                              (0, d.jsx)("li", {
                                
                              }),
                              ,
                            ],
                          }),
                        }),
                        (0, d.jsxs)("div", {
                          className: k().social,
                          children: [
                            (0, d.jsx)("button", {
                              className: "text-center w-full",  // Add text-center
                              onClick: function () {
                                window.location.href = "https://x.com/Orionn_official";
                              },
                              children: "Follow on X"
                            })
                        ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        n = c(3275),
        o = c(4910),
        p = c.n(o),
        q = function () {
          var a = (0, n.Z)().handleFormSubmit;
          return (0, d.jsx)("footer", {
            className: p().footer,
            children: (0, d.jsxs)("div", {
              className: "container",
              children: [
                (0, d.jsxs)("div", {
                  id: "thanks",
                  className: p().thanksContainer,
                  children: [
                    (0, d.jsx)("h4", { children: "Thanks" }),
                    (0, d.jsxs)("div", {
                      className: p().thanks,
                      children: [
                        (0, d.jsx)("a", {
                          href: "https://appwrite.io/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, d.jsx)(i.default, {
                            src: "/img/thanks/appwrite.svg",
                            width: 164,
                            height: 46,
                            alt: "Appwrite",
                          }),
                        }),
                        (0, d.jsx)("a", {
                          href: "https://vercel.com/?utm_source=leon-ai&utm_campaign=oss",
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, d.jsx)(i.default, {
                            src: "/img/thanks/vercel.svg",
                            width: 132,
                            height: 30,
                            alt: "Vercel",
                          }),
                        }),
                        (0, d.jsx)("a", {
                          href: "https://www.macstadium.com/",
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, d.jsx)(i.default, {
                            src: "/img/thanks/mac-stadium.svg",
                            width: 143,
                            height: 56,
                            alt: "MacStadium",
                          }),
                        }),
                        (0, d.jsx)("a", {
                          href: "https://www.aoz.studio/",
                          target: "_blank",
                          rel: "noreferrer",
                          
                        }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: p().newsletterContainer,
                  children: (0, d.jsxs)("div", {
                    className: p().newsletter,
                    children: [
                      (0, d.jsx)("span", {
                        className: p().title,
                        children: "Get the latest news from Leon",
                      }),
                      (0, d.jsx)("form", {
                        onSubmit: function (b) {
                          b.preventDefault();
                          var c = b.currentTarget,
                            d = new FormData(c),
                            e = d.get("email"),
                            f = d.get("l");
                          a(e, f);
                        },
                        children: (0, d.jsxs)("div", {
                          className: p().inputContainer,
                          children: [
                            (0, d.jsx)("input", {
                              type: "email",
                              placeholder: "Enter your email address...",
                              name: "email",
                              required: !0,
                            }),
                            (0, d.jsx)("input", {
                              type: "hidden",
                              value: "1908b2a9-155b-40b8-ab99-569a9463e7bd",
                              name: "l",
                              required: !0,
                            }),
                            (0, d.jsx)("button", {
                              type: "submit",
                              children: "Stay updated",
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)("i", {
                        children: "No spam. Unsubscribe at any time.",
                      }),
                    ],
                  }),
                }),
                (0, d.jsxs)("div", {
                  className: p().wrapper,
                  children: [
                    (0, d.jsxs)("div", {
                      className: p().licenseContainer,
                      children: [
                        (0, d.jsxs)("div", {
                          className: p().license,
                          children: [
                            (0, d.jsx)(i.default, {
                              src: "/img/logo-stroke.svg",
                              width: 58,
                              height: 60,
                              alt: "Leon logo",
                            }),
                            (0, d.jsxs)("p", {
                              children: [
                                "Released under the ",
                                (0, d.jsx)("a", {
                                  href: "https://opensource.org/licenses/MIT",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: "MIT License",
                                }),
                                (0, d.jsx)("br", {}),
                                "Copyright \xa9 2019 - present",
                                (0, d.jsx)("br", {}),
                                (0, d.jsx)("strong", {
                                  children: (0, d.jsx)("a", {
                                    href: "https://twitter.com/grenJohn",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "John Grenard",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, d.jsxs)("p", {
                          className: p().credits,
                          children: [
                            "Credits: space assets designed by ",
                            (0, d.jsx)("a", {
                              href: "https://www.flaticon.com/authors/monkik",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "monkik",
                            }),
                            ",",
                            (0, d.jsx)("br", {}),
                            (0, d.jsx)("a", {
                              href: "https://www.flaticon.com/authors/smashicons",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Smashicons",
                            }),
                            ", ",
                            (0, d.jsx)("a", {
                              href: "https://www.flaticon.com/authors/freepik",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Freepik",
                            }),
                            " from ",
                            (0, d.jsx)("a", {
                              href: "https://www.flaticon.com",
                              target: "_blank",
                              rel: "noreferrer",
                              children: "Flaticon",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      className: p().links,
                      children: [
                        (0, d.jsxs)("div", {
                          className: p().col,
                          children: [
                            (0, d.jsx)("span", { children: "Stay Tuned" }),
                            (0, d.jsxs)("ul", {
                              children: [
                                (0, d.jsx)("li", {
                                  children: (0, d.jsx)("a", {
                                    href: "https://x.com/Orionn_official",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "Twitter",
                                  }),
                                }),
                                (0, d.jsx)("li", {
                                  
                                }),
                                (0, d.jsx)("li", {
                                  
                                }),
                                (0, d.jsx)("li", {
                                  
                                }),
                                (0, d.jsx)("li", {
                                  
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, d.jsxs)("div", {
                          className: p().col,
                          children: [],
                        }),
                        (0, d.jsxs)("div", {
                          className: p().col,
                          children: [],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: p().poweredByContainer,
                  children: (0, d.jsx)("a", {
                    href: "https://vercel.com?utm_source=orion-ai&utm_campaign=oss",
                    target: "_blank",
                    rel: "noreferrer",
                    children: (0, d.jsx)(i.default, {
                      src: "/img/powered-by-vercel.svg",
                      width: 172,
                      height: 36,
                      alt: "Powered by Vercel",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        r = function (a) {
          var b = a.children;
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)(m, { starsNb: b.props.starsNb }),
              (0, d.jsx)("main", { children: b }),
              (0, d.jsx)(q, {}),
            ],
          });
        };
      function s(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }
      var t = function (a) {
        var b = a.Component,
          c = a.pageProps;
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(f.Wi, {
              trackPageViews: !0,
              gaMeasurementId: "G-K40ZKDM3R3",
            }),
            (0, d.jsx)(r, {
              children: (0, d.jsx)(
                b,
                (function (a) {
                  for (var b = 1; b < arguments.length; b++) {
                    var c = null != arguments[b] ? arguments[b] : {},
                      d = Object.keys(c);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (d = d.concat(
                        Object.getOwnPropertySymbols(c).filter(function (a) {
                          return Object.getOwnPropertyDescriptor(
                            c,
                            a
                          ).enumerable;
                        })
                      )),
                      d.forEach(function (b) {
                        s(a, b, c[b]);
                      });
                  }
                  return a;
                })({}, c)
              ),
            }),
            (0, d.jsx)(e.default, {
              strategy: "afterInteractive",
              src: "https://unpkg.com/feather-icons@4.28.0/dist/feather.min.js",
              onLoad: function () {
                window.feather.replace();
              },
            }),
          ],
        });
      };
    },
    4910: function (a) {
      a.exports = {
        footer: "Footer_footer__7FEep",
        thanksContainer: "Footer_thanksContainer__LgFqJ",
        thanks: "Footer_thanks__49qfh",
        radius: "Footer_radius__46hHc",
        newsletterContainer: "Footer_newsletterContainer__lBJh1",
        newsletter: "Footer_newsletter__8Qei_",
        inputContainer: "Footer_inputContainer__mSwXN",
        wrapper: "Footer_wrapper__FoBuu",
        licenseContainer: "Footer_licenseContainer__wSyuf",
        poweredByContainer: "Footer_poweredByContainer__HryGp",
        license: "Footer_license__XOLPl",
        credits: "Footer_credits__kXaw_",
        links: "Footer_links__tOq_W",
      };
    },
    7342: function (a) {
      a.exports = {
        header: "Header_header__c7sEG",
        noBorder: "Header_noBorder__vviKt",
        wrapper: "Header_wrapper__YaZq_",
        mobileMenuBtn: "Header_mobileMenuBtn__z70CE",
        menu: "Header_menu__oC7Qi",
        social: "Header_social__B5DPQ",
        discord: "Header_discord__IjOup",
        github: "Header_github___JO1_",
        mobileMenuBtnClicked: "Header_mobileMenuBtnClicked__1hx4F",
      };
    },
    7785: function () {},
    7663: function (a) {
      !(function () {
        var b = {
            162: function (a) {
              var b,
                c,
                d,
                e = (a.exports = {});
              function f() {
                throw new Error("setTimeout has not been defined");
              }
              function g() {
                throw new Error("clearTimeout has not been defined");
              }
              function h(a) {
                if (b === setTimeout) return setTimeout(a, 0);
                if ((b === f || !b) && setTimeout)
                  return (b = setTimeout), setTimeout(a, 0);
                try {
                  return b(a, 0);
                } catch (c) {
                  try {
                    return b.call(null, a, 0);
                  } catch (d) {
                    return b.call(this, a, 0);
                  }
                }
              }
              !(function () {
                try {
                  b = "function" == typeof setTimeout ? setTimeout : f;
                } catch (a) {
                  b = f;
                }
                try {
                  c = "function" == typeof clearTimeout ? clearTimeout : g;
                } catch (d) {
                  c = g;
                }
              })();
              var i = [],
                j = !1,
                k = -1;
              function l() {
                j &&
                  d &&
                  ((j = !1),
                  d.length ? (i = d.concat(i)) : (k = -1),
                  i.length && m());
              }
              function m() {
                if (!j) {
                  var a = h(l);
                  j = !0;
                  for (var b = i.length; b; ) {
                    for (d = i, i = []; ++k < b; ) d && d[k].run();
                    (k = -1), (b = i.length);
                  }
                  (d = null),
                    (j = !1),
                    (function (a) {
                      if (c === clearTimeout) return clearTimeout(a);
                      if ((c === g || !c) && clearTimeout)
                        return (c = clearTimeout), clearTimeout(a);
                      try {
                        c(a);
                      } catch (b) {
                        try {
                          return c.call(null, a);
                        } catch (d) {
                          return c.call(this, a);
                        }
                      }
                    })(a);
                }
              }
              function n(a, b) {
                (this.fun = a), (this.array = b);
              }
              function o() {}
              (e.nextTick = function (a) {
                var b = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var c = 1; c < arguments.length; c++)
                    b[c - 1] = arguments[c];
                i.push(new n(a, b)), 1 !== i.length || j || h(m);
              }),
                (n.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (e.title = "browser"),
                (e.browser = !0),
                (e.env = {}),
                (e.argv = []),
                (e.version = ""),
                (e.versions = {}),
                (e.on = o),
                (e.addListener = o),
                (e.once = o),
                (e.off = o),
                (e.removeListener = o),
                (e.removeAllListeners = o),
                (e.emit = o),
                (e.prependListener = o),
                (e.prependOnceListener = o),
                (e.listeners = function (a) {
                  return [];
                }),
                (e.binding = function (a) {
                  throw new Error("process.binding is not supported");
                }),
                (e.cwd = function () {
                  return "/";
                }),
                (e.chdir = function (a) {
                  throw new Error("process.chdir is not supported");
                }),
                (e.umask = function () {
                  return 0;
                });
            },
          },
          c = {};
        function d(a) {
          var e = c[a];
          if (void 0 !== e) return e.exports;
          var f = (c[a] = { exports: {} }),
            g = !0;
          try {
            b[a](f, f.exports, d), (g = !1);
          } finally {
            g && delete c[a];
          }
          return f.exports;
        }
        d.ab = "//";
        var e = d(162);
        a.exports = e;
      })();
    },
    5675: function (a, b, c) {
      a.exports = c(8045);
    },
    1664: function (a, b, c) {
      a.exports = c(8418);
    },
    1163: function (a, b, c) {
      a.exports = c(387);
    },
    4298: function (a, b, c) {
      a.exports = c(699);
    },
    1462: function (a, b, c) {
      "use strict";
      var d = c(3454);
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.GoogleAnalytics = void 0);
      const e = c(655),
        f = e.__importDefault(c(7294)),
        g = e.__importDefault(c(4298)),
        h = c(8816);
      b.GoogleAnalytics = function ({
        debugMode: a = !1,
        gaMeasurementId: b,
        gtagUrl: c = "https://www.googletagmanager.com/gtag/js",
        strategy: e = "afterInteractive",
        defaultConsent: i = "granted",
        trackPageViews: j,
      }) {
        var k;
        const l =
          null !== (k = d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && void 0 !== k
            ? k
            : b;
        return ((0, h.usePageViews)({
          gaMeasurementId: l,
          ignoreHashChange:
            "object" == typeof j && (null == j ? void 0 : j.ignoreHashChange),
          disabled: !j,
        }),
        l)
          ? f.default.createElement(
              f.default.Fragment,
              null,
              f.default.createElement(g.default, {
                src: `${c}?id=${l}`,
                strategy: e,
              }),
              f.default.createElement(
                g.default,
                { id: "nextjs-google-analytics" },
                `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${
              "denied" === i &&
              `gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });`
            }
            gtag('config', '${l}', {
              page_path: window.location.pathname,
              ${a ? `debug_mode: ${a},` : ""}
            });
          `
              )
            )
          : null;
      };
    },
    7270: function (a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.GoogleAnalytics = void 0);
      var d = c(1462);
      Object.defineProperty(b, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return d.GoogleAnalytics;
        },
      });
    },
    8816: function (a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.usePageViews = b.usePagesViews = void 0);
      var d = c(7015);
      Object.defineProperty(b, "usePagesViews", {
        enumerable: !0,
        get: function () {
          return d.usePagesViews;
        },
      });
      var e = c(9412);
      Object.defineProperty(b, "usePageViews", {
        enumerable: !0,
        get: function () {
          return e.usePageViews;
        },
      });
    },
    9412: function (a, b, c) {
      "use strict";
      var d = c(3454);
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.usePageViews = void 0);
      const e = c(7294),
        f = c(1163),
        g = c(8396);
      b.usePageViews = function ({
        gaMeasurementId: a,
        ignoreHashChange: b,
        disabled: c,
      } = {}) {
        (0, e.useEffect)(() => {
          if (c) return;
          const e = (b) => {
            var c;
            const e =
              null !== (c = d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && void 0 !== c
                ? c
                : a;
            (0, g.pageView)({ path: b.toString() }, e);
          };
          return (
            f.Router.events.on("routeChangeComplete", e),
            b || f.Router.events.on("hashChangeComplete", e),
            () => {
              f.Router.events.off("routeChangeComplete", e),
                b || f.Router.events.off("hashChangeComplete", e);
            }
          );
        }, [f.Router.events, a, b]);
      };
    },
    7015: function (a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.usePagesViews = void 0);
      const d = c(9412);
      b.usePagesViews = function (a) {
        console.warn(
          "Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme"
        ),
          (0, d.usePageViews)(a);
      };
    },
    4304: function (a, b, c) {
      "use strict";
      b.Wi = void 0;
      var d = c(7270);
      Object.defineProperty(b, "Wi", {
        enumerable: !0,
        get: function () {
          return d.GoogleAnalytics;
        },
      }),
        c(8816),
        c(8396);
    },
    5146: function (a, b) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.consent = void 0),
        (b.consent = function ({ arg: a, params: b }) {
          window.gtag && window.gtag("consent", a, b);
        });
    },
    9633: function (a, b, c) {
      "use strict";
      var d = c(3454);
      Object.defineProperty(b, "__esModule", { value: !0 }), (b.event = void 0);
      const e = c(655);
      b.event = function (a, b = {}, c) {
        var f,
          { category: g, label: h, value: i, nonInteraction: j, userId: k } = b,
          l = e.__rest(b, [
            "category",
            "label",
            "value",
            "nonInteraction",
            "userId",
          ]);
        const m =
          null !== (f = d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && void 0 !== f
            ? f
            : c;
        if (!m || !window.gtag) return;
        const n = Object.assign({}, l);
        void 0 !== g && (n.event_category = g),
          void 0 !== h && (n.event_label = h),
          void 0 !== i && (n.value = i),
          void 0 !== j && (n.non_interaction = j),
          void 0 !== k && (n.user_id = k),
          window.gtag("event", a, n);
      };
    },
    8396: function (a, b, c) {
      "use strict";
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.consent = b.event = b.pageView = void 0);
      var d = c(3371);
      Object.defineProperty(b, "pageView", {
        enumerable: !0,
        get: function () {
          return d.pageView;
        },
      });
      var e = c(9633);
      Object.defineProperty(b, "event", {
        enumerable: !0,
        get: function () {
          return e.event;
        },
      });
      var f = c(5146);
      Object.defineProperty(b, "consent", {
        enumerable: !0,
        get: function () {
          return f.consent;
        },
      });
    },
    3371: function (a, b, c) {
      "use strict";
      var d = c(3454);
      Object.defineProperty(b, "__esModule", { value: !0 }),
        (b.pageView = void 0),
        (b.pageView = function (
          { title: a, location: b, path: c, sendPageView: e, userId: f } = {},
          g
        ) {
          var h;
          const i =
            null !== (h = d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && void 0 !== h
              ? h
              : g;
          if (!i || !window.gtag) return;
          const j = {};
          void 0 !== a && (j.page_title = a),
            void 0 !== b && (j.page_location = b),
            void 0 !== c && (j.page_path = c),
            void 0 !== e && (j.send_page_view = e),
            void 0 !== f && (j.user_id = f),
            window.gtag("config", i, j);
        });
    },
    655: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __extends: function () {
            return e;
          },
          __assign: function () {
            return f;
          },
          __rest: function () {
            return g;
          },
          __decorate: function () {
            return h;
          },
          __param: function () {
            return i;
          },
          __metadata: function () {
            return j;
          },
          __awaiter: function () {
            return k;
          },
          __generator: function () {
            return l;
          },
          __createBinding: function () {
            return m;
          },
          __exportStar: function () {
            return n;
          },
          __values: function () {
            return o;
          },
          __read: function () {
            return p;
          },
          __spread: function () {
            return q;
          },
          __spreadArrays: function () {
            return r;
          },
          __await: function () {
            return s;
          },
          __asyncGenerator: function () {
            return t;
          },
          __asyncDelegator: function () {
            return u;
          },
          __asyncValues: function () {
            return v;
          },
          __makeTemplateObject: function () {
            return w;
          },
          __importStar: function () {
            return x;
          },
          __importDefault: function () {
            return y;
          },
          __classPrivateFieldGet: function () {
            return z;
          },
          __classPrivateFieldSet: function () {
            return A;
          },
        });
      var d = function (a, b) {
        return (d =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (a, b) {
              a.__proto__ = b;
            }) ||
          function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
          })(a, b);
      };
      function e(a, b) {
        function c() {
          this.constructor = a;
        }
        d(a, b),
          (a.prototype =
            null === b
              ? Object.create(b)
              : ((c.prototype = b.prototype), new c()));
      }
      var f = function () {
        return (f =
          Object.assign ||
          function (a) {
            for (var b, c = 1, d = arguments.length; c < d; c++)
              for (var e in (b = arguments[c]))
                Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
            return a;
          }).apply(this, arguments);
      };
      function g(a, b) {
        var c = {};
        for (var d in a)
          Object.prototype.hasOwnProperty.call(a, d) &&
            0 > b.indexOf(d) &&
            (c[d] = a[d]);
        if (null != a && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var e = 0, d = Object.getOwnPropertySymbols(a);
            e < d.length;
            e++
          )
            0 > b.indexOf(d[e]) &&
              Object.prototype.propertyIsEnumerable.call(a, d[e]) &&
              (c[d[e]] = a[d[e]]);
        return c;
      }
      function h(a, b, c, d) {
        var e,
          f = arguments.length,
          g =
            f < 3
              ? b
              : null === d
              ? (d = Object.getOwnPropertyDescriptor(b, c))
              : d;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          g = Reflect.decorate(a, b, c, d);
        else
          for (var h = a.length - 1; h >= 0; h--)
            (e = a[h]) &&
              (g = (f < 3 ? e(g) : f > 3 ? e(b, c, g) : e(b, c)) || g);
        return f > 3 && g && Object.defineProperty(b, c, g), g;
      }
      function i(a, b) {
        return function (c, d) {
          b(c, d, a);
        };
      }
      function j(a, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(a, b);
      }
      function k(a, b, c, d) {
        return new (c || (c = Promise))(function (e, f) {
          function g(a) {
            try {
              i(d.next(a));
            } catch (b) {
              f(b);
            }
          }
          function h(a) {
            try {
              i(d.throw(a));
            } catch (b) {
              f(b);
            }
          }
          function i(a) {
            var b;
            a.done
              ? e(a.value)
              : ((b = a.value) instanceof c
                  ? b
                  : new c(function (a) {
                      a(b);
                    })
                ).then(g, h);
          }
          i((d = d.apply(a, b || [])).next());
        });
      }
      function l(a, b) {
        var c,
          d,
          e,
          f,
          g = {
            label: 0,
            sent: function () {
              if (1 & e[0]) throw e[1];
              return e[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (f = { next: h(0), throw: h(1), return: h(2) }),
          "function" == typeof Symbol &&
            (f[Symbol.iterator] = function () {
              return this;
            }),
          f
        );
        function h(a) {
          return function (b) {
            return i([a, b]);
          };
        }
        function i(f) {
          if (c) throw new TypeError("Generator is already executing.");
          for (; g; )
            try {
              if (
                ((c = 1),
                d &&
                  (e =
                    2 & f[0]
                      ? d.return
                      : f[0]
                      ? d.throw || ((e = d.return) && e.call(d), 0)
                      : d.next) &&
                  !(e = e.call(d, f[1])).done)
              )
                return e;
              switch (((d = 0), e && (f = [2 & f[0], e.value]), f[0])) {
                case 0:
                case 1:
                  e = f;
                  break;
                case 4:
                  return g.label++, { value: f[1], done: !1 };
                case 5:
                  g.label++, (d = f[1]), (f = [0]);
                  continue;
                case 7:
                  (f = g.ops.pop()), g.trys.pop();
                  continue;
                default:
                  if (
                    !(e = (e = g.trys).length > 0 && e[e.length - 1]) &&
                    (6 === f[0] || 2 === f[0])
                  ) {
                    g = 0;
                    continue;
                  }
                  if (3 === f[0] && (!e || (f[1] > e[0] && f[1] < e[3]))) {
                    g.label = f[1];
                    break;
                  }
                  if (6 === f[0] && g.label < e[1]) {
                    (g.label = e[1]), (e = f);
                    break;
                  }
                  if (e && g.label < e[2]) {
                    (g.label = e[2]), g.ops.push(f);
                    break;
                  }
                  e[2] && g.ops.pop(), g.trys.pop();
                  continue;
              }
              f = b.call(a, g);
            } catch (h) {
              (f = [6, h]), (d = 0);
            } finally {
              c = e = 0;
            }
          if (5 & f[0]) throw f[1];
          return { value: f[0] ? f[1] : void 0, done: !0 };
        }
      }
      function m(a, b, c, d) {
        void 0 === d && (d = c), (a[d] = b[c]);
      }
      function n(a, b) {
        for (var c in a)
          "default" === c || b.hasOwnProperty(c) || (b[c] = a[c]);
      }
      function o(a) {
        var b = "function" == typeof Symbol && Symbol.iterator,
          c = b && a[b],
          d = 0;
        if (c) return c.call(a);
        if (a && "number" == typeof a.length)
          return {
            next: function () {
              return (
                a && d >= a.length && (a = void 0),
                { value: a && a[d++], done: !a }
              );
            },
          };
        throw new TypeError(
          b ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function p(a, b) {
        var c = "function" == typeof Symbol && a[Symbol.iterator];
        if (!c) return a;
        var d,
          e,
          f = c.call(a),
          g = [];
        try {
          for (; (void 0 === b || b-- > 0) && !(d = f.next()).done; )
            g.push(d.value);
        } catch (h) {
          e = { error: h };
        } finally {
          try {
            d && !d.done && (c = f.return) && c.call(f);
          } finally {
            if (e) throw e.error;
          }
        }
        return g;
      }
      function q() {
        for (var a = [], b = 0; b < arguments.length; b++)
          a = a.concat(p(arguments[b]));
        return a;
      }
      function r() {
        for (var a = 0, b = 0, c = arguments.length; b < c; b++)
          a += arguments[b].length;
        for (var d = Array(a), e = 0, b = 0; b < c; b++)
          for (var f = arguments[b], g = 0, h = f.length; g < h; g++, e++)
            d[e] = f[g];
        return d;
      }
      function s(a) {
        return this instanceof s ? ((this.v = a), this) : new s(a);
      }
      function t(a, b, c) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var d,
          e = c.apply(a, b || []),
          f = [];
        return (
          (d = {}),
          g("next"),
          g("throw"),
          g("return"),
          (d[Symbol.asyncIterator] = function () {
            return this;
          }),
          d
        );
        function g(a) {
          e[a] &&
            (d[a] = function (b) {
              return new Promise(function (c, d) {
                f.push([a, b, c, d]) > 1 || h(a, b);
              });
            });
        }
        function h(a, b) {
          try {
            i(e[a](b));
          } catch (c) {
            l(f[0][3], c);
          }
        }
        function i(a) {
          a.value instanceof s
            ? Promise.resolve(a.value.v).then(j, k)
            : l(f[0][2], a);
        }
        function j(a) {
          h("next", a);
        }
        function k(a) {
          h("throw", a);
        }
        function l(a, b) {
          a(b), f.shift(), f.length && h(f[0][0], f[0][1]);
        }
      }
      function u(a) {
        var b, c;
        return (
          (b = {}),
          d("next"),
          d("throw", function (a) {
            throw a;
          }),
          d("return"),
          (b[Symbol.iterator] = function () {
            return this;
          }),
          b
        );
        function d(d, e) {
          b[d] = a[d]
            ? function (b) {
                return (c = !c)
                  ? { value: s(a[d](b)), done: "return" === d }
                  : e
                  ? e(b)
                  : b;
              }
            : e;
        }
      }
      function v(a) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var b,
          c = a[Symbol.asyncIterator];
        return c
          ? c.call(a)
          : ((a = o(a)),
            (b = {}),
            d("next"),
            d("throw"),
            d("return"),
            (b[Symbol.asyncIterator] = function () {
              return this;
            }),
            b);
        function d(c) {
          b[c] =
            a[c] &&
            function (b) {
              return new Promise(function (d, f) {
                e(d, f, (b = a[c](b)).done, b.value);
              });
            };
        }
        function e(a, b, c, d) {
          Promise.resolve(d).then(function (b) {
            a({ value: b, done: c });
          }, b);
        }
      }
      function w(a, b) {
        return (
          Object.defineProperty
            ? Object.defineProperty(a, "raw", { value: b })
            : (a.raw = b),
          a
        );
      }
      function x(a) {
        if (a && a.__esModule) return a;
        var b = {};
        if (null != a)
          for (var c in a) Object.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return (b.default = a), b;
      }
      function y(a) {
        return a && a.__esModule ? a : { default: a };
      }
      function z(a, b) {
        if (!b.has(a))
          throw new TypeError("attempted to get private field on non-instance");
        return b.get(a);
      }
      function A(a, b, c) {
        if (!b.has(a))
          throw new TypeError("attempted to set private field on non-instance");
        return b.set(a, c), c;
      }
    },
  },
  function (a) {
    var b = function (b) {
      return a((a.s = b));
    };
    a.O(0, [774, 179], function () {
      return b(6363), b(387);
    }),
      (_N_E = a.O());
  },
]);
