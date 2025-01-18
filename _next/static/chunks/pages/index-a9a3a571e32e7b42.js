(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(2179);
        },
      ]);
    },
    2179: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSG: function () {
            return S;
          },
          default: function () {
            return T;
          },
        });
      var d = c(5893),
        e = c(7294),
        f = c(9008),
        g = c(9222),
        h = c.n(g),
        i = c(6988),
        j = c.n(i),
        k = function () {
          return (0, d.jsxs)("div", {
            className: j().container,
            children: [
              (0, d.jsx)("h2", { children: "Meet your virtual brain" }),
              (0, d.jsxs)("p", {
                children: [
                  "Orion is your ",
                  (0, d.jsx)("strong", {
                    children: "open-source personal assistant",
                  }),
                  " who can live on your server.",
                  (0, d.jsx)("br", {}),
                  "He does stuff when you ask him to.",
                ],
              }),
            ],
          });
        },
        l = c(4051),
        m = c.n(l),
        n = c(3275),
        o = c(502),
        p = c.n(o);
      function q(a, b, c, d, e, f, g) {
        try {
          var h = a[f](g),
            i = h.value;
        } catch (j) {
          c(j);
          return;
        }
        h.done ? b(i) : Promise.resolve(i).then(d, e);
      }
      var r = function () {
          var a,
            b,
            c = (0, n.Z)().handleFormSubmit,
            e =
              ((a = m().mark(function a(b) {
                var d, e, f, g;
                return m().wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        b.preventDefault(),
                          (d = b.currentTarget),
                          (f = (e = new FormData(d)).get("email")),
                          (g = e.get("l")),
                          c(f, g);
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })),
              (b = function () {
                var b = this,
                  c = arguments;
                return new Promise(function (d, e) {
                  var f = a.apply(b, c);
                  function g(a) {
                    q(f, d, e, g, h, "next", a);
                  }
                  function h(a) {
                    q(f, d, e, g, h, "throw", a);
                  }
                  g(void 0);
                });
              }),
              function (a) {
                return b.apply(this, arguments);
              });
          return (0, d.jsxs)("div", {
            className: p().container,
            children: [
              (0, d.jsx)("span", {
                className: p().title,
                children: "Get the latest news from Orion",
              }),
              (0, d.jsx)("form", {
                onSubmit: e,
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
          });
        },
        s = c(8814),
        t = c.n(s),
        u = 0,
        v = function () {
          var a = (0, e.useRef)(null),
            b = function () {
              var b = null == a ? void 0 : a.current,
                c = setInterval(function () {
                  (u += 1) >= 6
                    ? null == b || b.classList.remove(t().turnedOff)
                    : null == b || b.classList.toggle(t().turnedOff);
                }, 200);
              setTimeout(function () {
                clearInterval(c);
              }, 2e3);
            };
          return (
            (0, e.useEffect)(function () {
              a &&
                setTimeout(function () {
                  b();
                }, 4e3);
            }, []),
            (0, d.jsxs)("div", {
              className: t().container,
              children: [
                (0, d.jsxs)("svg", {
                  ref: a,
                  className: "".concat(t().hero, " ").concat(t().turnedOff),
                  "data-pausable-animation": !0,
                  version: "1.1",
                  viewBox: "0 0 610.63 413.49",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, d.jsxs)("defs", {
                      children: [
                        (0, d.jsxs)("g", {
                          id: "Orion-stroke",
                          children: [
                            (0, d.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M108.168 62.4606C108.17 56.0625 103.916 50.4368 97.7396 48.6708C91.5633 46.9049 84.9592 49.4258 81.5515 54.8502L78.772 53.1205C82.4603 47.2534 89.2535 44.0758 96.1436 44.9946C98.7806 42.3171 100.251 38.7126 100.236 34.9626C100.236 27.0435 93.7888 20.6238 85.8353 20.6238C85.3166 20.6228 84.7982 20.6494 84.2823 20.7034L83.8167 20.7587C82.3573 27.0203 76.8963 31.5534 70.4476 31.8562L70.3051 28.5733C75.2252 28.363 79.4201 24.9549 80.6142 20.1979C81.8084 15.4409 79.7172 10.4685 75.4751 7.97809C71.2329 5.48763 65.8508 6.0726 62.2482 9.41567V20.5269H58.9406V8.09076C62.8767 3.60863 69.1847 2.0139 74.7915 4.08346C80.3983 6.15303 84.1379 11.4565 84.1885 17.4101C84.7513 17.3582 85.3003 17.3306 85.8388 17.3306C92.6163 17.3378 98.7959 21.1938 101.758 27.2636C104.719 33.3335 103.944 40.5536 99.7604 45.8629C106.718 48.3589 111.387 54.8948 111.472 62.2576C111.557 69.6205 107.04 76.2616 100.143 78.9165L100.163 79.1172C100.216 79.6983 100.247 80.2449 100.247 80.7499C100.243 89.8863 93.2348 97.5083 84.0947 98.3163C84.7859 104.539 81.6706 110.569 76.1847 113.627C70.6988 116.686 63.9073 116.179 58.9406 112.34V101.167H62.2482V110.614C66.069 112.854 70.8018 112.884 74.6515 110.694C78.5013 108.504 80.8783 104.429 80.8809 100.015C80.8824 99.5246 80.8534 99.0347 80.7941 98.5481L80.7628 98.2955C76.2537 97.8408 72.091 95.6831 69.1308 92.266L71.6254 90.1177C75.5591 94.6469 81.9049 96.2661 87.5416 94.179C93.1783 92.0919 96.9196 86.7378 96.9254 80.7499C96.9254 80.404 96.9254 80.1031 96.901 79.8159C87.3316 81.5232 78.1677 75.2345 76.3643 65.7227L79.6093 65.1174C80.9886 72.3899 87.6991 77.4232 95.1003 76.7365C102.501 76.0498 108.162 69.8686 108.168 62.4675",
                              fill: "white",
                            }),
                            (0, d.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M6.50616 62.5641C6.50408 56.166 10.7586 50.5403 16.9349 48.7744C23.1111 47.0084 29.7152 49.5293 33.1229 54.9537L35.9024 53.224C32.2114 47.3507 25.4094 44.1721 18.5134 45.0981C15.8765 42.4206 14.4059 38.8161 14.4207 35.0661C14.4216 31.2626 15.9402 27.6154 18.6423 24.9269C21.3444 22.2384 25.0087 20.7289 28.8287 20.7308C29.3485 20.7288 29.868 20.7542 30.3852 20.8069L30.8472 20.8657C32.3091 27.1295 37.7752 31.6618 44.2269 31.9597L44.3693 28.6768C39.4492 28.4665 35.2543 25.0585 34.0602 20.3014C32.866 15.5444 34.9572 10.5721 39.1994 8.0816C43.4415 5.59115 48.8237 6.17612 52.4263 9.51918V20.627H55.7338V8.19427C51.7977 3.71215 45.4898 2.11742 39.8829 4.18698C34.2761 6.25654 30.5365 11.56 30.4859 17.5136C29.9266 17.4617 29.3741 17.4341 28.8356 17.4341C22.0563 17.4354 15.8732 21.2917 12.9135 27.3645C9.95377 33.4372 10.7374 40.6597 14.9314 45.9629C7.97127 48.4569 3.29952 54.9935 3.21361 62.3582C3.12769 69.7228 7.64568 76.3657 14.5457 79.02L14.5249 79.2207C14.4728 79.8018 14.445 80.3484 14.445 80.8535C14.4472 89.9789 21.4381 97.5967 30.5658 98.4198C29.8746 104.642 32.9899 110.672 38.4758 113.731C43.9617 116.789 50.7532 116.282 55.7199 112.444V101.27H52.4124V110.718C48.5915 112.957 43.8587 112.988 40.009 110.798C36.1593 108.608 33.7823 104.533 33.7796 100.118C33.7798 99.6281 33.8088 99.1384 33.8664 98.6516L33.8977 98.399C38.4133 97.9451 42.5818 95.7831 45.5436 92.3591L43.0491 90.2074C39.1191 94.7483 32.7669 96.376 27.1236 94.2881C21.4803 92.2001 17.7369 86.8374 17.7386 80.8431C17.7386 80.4971 17.7386 80.1962 17.763 79.9091C27.3383 81.6224 36.5101 75.3284 38.3101 65.8089L35.0824 65.214C33.7114 72.4953 26.9965 77.5388 19.5882 76.8515C12.18 76.1642 6.51646 69.9723 6.52006 62.5641",
                              fill: "white",
                            }),
                            (0, d.jsx)("path", {
                              d: "M55.7373 17.6797H52.4263V103.962H55.7373V17.6797Z",
                              fill: "white",
                            }),
                            (0, d.jsx)("path", {
                              d: "M62.2516 14.8262H58.9406V103.962H62.2516V14.8262Z",
                              fill: "white",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          id: "mail-icon",
                          children: [
                            (0, d.jsx)("path", {
                              d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
                            }),
                            (0, d.jsx)("polyline", {
                              points: "22,6 12,13 2,6",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          id: "music-icon",
                          children: [
                            (0, d.jsx)("path", { d: "M9 18V5l12-2v13" }),
                            (0, d.jsx)("circle", { cx: "6", cy: "18", r: "3" }),
                            (0, d.jsx)("circle", {
                              cx: "18",
                              cy: "16",
                              r: "3",
                            }),
                          ],
                        }),
                        (0, d.jsx)("g", {
                          id: "chat-icon",
                          children: (0, d.jsx)("path", {
                            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                          }),
                        }),
                        (0, d.jsxs)("g", {
                          id: "video-icon",
                          children: [
                            (0, d.jsx)("path", {
                              d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
                            }),
                            (0, d.jsx)("polygon", {
                              points:
                                "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          id: "forecast-icon",
                          children: [
                            (0, d.jsx)("path", {
                              d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9",
                            }),
                            (0, d.jsx)("polyline", {
                              points: "13 11 9 17 15 17 11 23",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          id: "check-icon",
                          children: [
                            (0, d.jsx)("path", {
                              d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
                            }),
                            (0, d.jsx)("polyline", {
                              points: "22 4 12 14.01 9 11.01",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient8696",
                          children: [
                            (0, d.jsx)("stop", { offset: "0" }),
                            (0, d.jsx)("stop", {
                              stopOpacity: ".24069",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient7775",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#f9fafc",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#1c75db",
                              stopOpacity: ".29452",
                              offset: ".5402",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#22222f",
                              stopOpacity: "0",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient1482",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#0a3666",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#7f1641",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient1854",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#092c54",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#6a1237",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient1665-9-2",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#1c75db",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#ec297a",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1576",
                          x: "-.21335",
                          y: "-.36954",
                          width: "1.4267",
                          height: "1.7391",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "3.8493806",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1576-6",
                          x: "-.21335",
                          y: "-.36954",
                          width: "1.4267",
                          height: "1.7391",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "3.8493806",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1576-6-3",
                          x: "-.21335",
                          y: "-.36954",
                          width: "1.4267",
                          height: "1.7391",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "3.8493806",
                          }),
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient1667",
                          x1: "-627.08",
                          x2: "-540.48",
                          y1: "95.114",
                          y2: "145.11",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient1665-9-2",
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1760",
                          x: "-.055825",
                          y: "-.096692",
                          width: "1.1262",
                          height: "1.2205",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.1840452",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1800",
                          x: "-.051872",
                          y: "-.089846",
                          width: "1.1037",
                          height: "1.1797",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.5090734",
                          }),
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient1812",
                          x1: "-627.08",
                          x2: "-540.48",
                          y1: "134.4",
                          y2: "134.4",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient1854",
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter6519",
                          x: "-.033073",
                          y: "-.057284",
                          width: "1.0661",
                          height: "1.1146",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.0794527",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter6899",
                          x: "-.10594",
                          y: "-.11635",
                          width: "1.2119",
                          height: "1.2327",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.70775223",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter6903",
                          x: "-.11806",
                          y: "-.10456",
                          width: "1.2361",
                          height: "1.2091",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.64470118",
                          }),
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient6913",
                          x1: "247.3",
                          x2: "359.88",
                          y1: "291.71",
                          y2: "266.71",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient1665-9-2",
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8162",
                          x: "-.11345",
                          y: "-.1965",
                          width: "1.2269",
                          height: "1.393",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "2.8656072",
                          }),
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient8246",
                          x1: "247.3",
                          x2: "359.88",
                          y1: "291.71",
                          y2: "266.71",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient1854",
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8382",
                          x: "-.034303",
                          y: "-.090559",
                          width: "1.0686",
                          height: "1.1849",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.4877837",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8162-5",
                          x: "-.11345",
                          y: "-.1965",
                          width: "1.2269",
                          height: "1.393",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "2.8656072",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8655",
                          x: "-.038627",
                          y: "-.058748",
                          width: "1.0773",
                          height: "1.1175",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.99176582",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9031",
                          x: "-.043257",
                          y: "-.082723",
                          width: "1.0865",
                          height: "1.1654",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "13.011684",
                          }),
                        }),
                        (0, d.jsxs)("radialGradient", {
                          id: "radialGradient1255",
                          cx: "307.66",
                          cy: "133.9",
                          r: "413.53",
                          gradientTransform:
                            "matrix(.58625 -.004568 .0035564 .45643 127.18 171.88)",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#44444f",
                              stopOpacity: ".99965",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#11111f",
                              offset: ".61762",
                            }),
                            (0, d.jsx)("stop", { offset: "1" }),
                          ],
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter4871",
                          x: "-.21985",
                          y: "-.29735",
                          width: "1.4475",
                          height: "1.5908",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "6.5999088",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter4875",
                          x: "-.036748",
                          y: "-.056271",
                          width: "1.0735",
                          height: "1.1125",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.7604253",
                          }),
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient4885",
                          x1: "43.535",
                          x2: "87.885",
                          y1: "49.927",
                          y2: "13.28",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#306998",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#4b8bbe",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient4893",
                          x1: "34.291",
                          x2: "78.119",
                          y1: "110.6",
                          y2: "77.669",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#ffe873",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#ffd43b",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient4901",
                          x1: "-7.7022",
                          x2: "41.428",
                          y1: "77.71",
                          y2: "42.154",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#102535",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#203a50",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "linearGradient4927",
                          x1: "14.418",
                          x2: "75.522",
                          y1: "100.82",
                          y2: "75.923",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", {
                              stopColor: "#5e552a",
                              offset: "0",
                            }),
                            (0, d.jsx)("stop", {
                              stopColor: "#5f4f16",
                              offset: "1",
                            }),
                          ],
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter5495",
                          x: "-.60808",
                          y: "-1.3216",
                          width: "2.2162",
                          height: "3.6432",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "4.7353943",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter5495-9",
                          x: "-.60808",
                          y: "-1.3216",
                          width: "2.2162",
                          height: "3.6432",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "4.7353943",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter5670",
                          x: "-.070102",
                          y: "-.12142",
                          width: "1.1402",
                          height: "1.2428",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.7236975",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1382",
                          x: "-.32292",
                          y: "-.28638",
                          width: "1.6458",
                          height: "1.5728",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.29792608",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1386",
                          x: "-.29954",
                          y: "-.30787",
                          width: "1.5991",
                          height: "1.6157",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.2987472",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1390",
                          x: "-.30215",
                          y: "-.30516",
                          width: "1.6043",
                          height: "1.6103",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.29895206",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1394",
                          x: "-.30215",
                          y: "-.30516",
                          width: "1.6043",
                          height: "1.6103",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.29895206",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1398",
                          x: "-.30215",
                          y: "-.30516",
                          width: "1.6043",
                          height: "1.6103",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.29895206",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1402",
                          x: "-.29954",
                          y: "-.30787",
                          width: "1.5991",
                          height: "1.6157",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.2987472",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1406",
                          x: "-.32292",
                          y: "-.28638",
                          width: "1.6458",
                          height: "1.5728",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.29792608",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1517",
                          x: "-.26231",
                          y: "-.23263",
                          width: "1.5246",
                          height: "1.4653",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.23004879",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1521",
                          x: "-.24334",
                          y: "-.25011",
                          width: "1.4867",
                          height: "1.5002",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.23068284",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1525",
                          x: "-.24546",
                          y: "-.24791",
                          width: "1.4909",
                          height: "1.4958",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.23084102",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1529",
                          x: "-.24546",
                          y: "-.24791",
                          width: "1.4909",
                          height: "1.4958",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.23084102",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1533",
                          x: "-.24546",
                          y: "-.24791",
                          width: "1.4909",
                          height: "1.4958",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.23084102",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1537",
                          x: "-.24334",
                          y: "-.25011",
                          width: "1.4867",
                          height: "1.5002",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.23068284",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1541",
                          x: "-.26231",
                          y: "-.23263",
                          width: "1.5246",
                          height: "1.4653",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.23004879",
                          }),
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient1398",
                          x1: "91.799",
                          x2: "102.19",
                          y1: "155",
                          y2: "137",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient1665-9-2",
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient1422",
                          x1: "86.603",
                          x2: "102.19",
                          y1: "155",
                          y2: "138.5",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient1482",
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient1430",
                          x1: "86.603",
                          x2: "102.19",
                          y1: "152",
                          y2: "137",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient1482",
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1626",
                          x: "-.068529",
                          y: "-.17805",
                          width: "1.1371",
                          height: "1.3561",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.44511278",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1999",
                          x: "-.16413",
                          y: "-.42641",
                          width: "1.3283",
                          height: "1.8528",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.0660338",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1999-5",
                          x: "-.16413",
                          y: "-.42641",
                          width: "1.3283",
                          height: "1.8528",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.0660338",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter1626-5",
                          x: "-.068529",
                          y: "-.17805",
                          width: "1.1371",
                          height: "1.3561",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.44511278",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter2614",
                          x: "-.020289",
                          y: "-.048983",
                          width: "1.0406",
                          height: "1.1007",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.1494121",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter2618",
                          x: "-.07101",
                          y: "-.094467",
                          width: "1.1639",
                          height: "1.1889",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.1494121",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter2622",
                          x: "-.088763",
                          y: "-.16532",
                          width: "1.1775",
                          height: "1.3306",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.1494121",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7712",
                          x: "-.073056",
                          y: "-.15396",
                          width: "1.1461",
                          height: "1.3079",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7716",
                          x: "-.87098",
                          y: "-.094399",
                          width: "2.742",
                          height: "1.1888",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7720",
                          x: "-2.9118",
                          y: "-.45823",
                          width: "6.8236",
                          height: "1.9165",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7724",
                          x: "-.1235",
                          y: "-.14894",
                          width: "1.247",
                          height: "1.2979",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7728",
                          x: "-.078526",
                          y: "-.16806",
                          width: "1.1571",
                          height: "1.3361",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7732",
                          x: "-.088833",
                          y: "-.07057",
                          width: "1.1777",
                          height: "1.1395",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7736",
                          x: "-.044613",
                          y: "-.093189",
                          width: "1.0892",
                          height: "1.1864",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7740",
                          x: "-.046583",
                          y: "-.11603",
                          width: "1.0915",
                          height: "1.2433",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7744",
                          x: "-.044383",
                          y: "-.14449",
                          width: "1.087",
                          height: "1.2976",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter7748",
                          x: "-.039291",
                          y: "-.15396",
                          width: "1.0819",
                          height: "1.3128",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.59760585",
                          }),
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient7777",
                          x1: "218.34",
                          x2: "219.13",
                          y1: "213.69",
                          y2: "131.87",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient7775",
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8045",
                          x: "-.045354",
                          y: "-.042819",
                          width: "1.0907",
                          height: "1.0856",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.6894805",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8045-9",
                          x: "-.054308",
                          y: "-.03518",
                          width: "1.1086",
                          height: "1.0704",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "1.6894805",
                          }),
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient8084",
                          x1: "218.34",
                          x2: "218.57",
                          y1: "213.69",
                          y2: "170.76",
                          gradientTransform: "translate(179.61 27.853)",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient7775",
                        }),
                        (0, d.jsx)("linearGradient", {
                          id: "linearGradient8698",
                          x1: "32.756",
                          x2: "95.738",
                          y1: "-17.694",
                          y2: "-21.935",
                          gradientUnits: "userSpaceOnUse",
                          href: "#linearGradient8696",
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8900",
                          x: "-.18196",
                          y: "-.15468",
                          width: "1.3639",
                          height: "1.3094",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "4.942039",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter8900-5",
                          x: "-.18196",
                          y: "-.15468",
                          width: "1.3639",
                          height: "1.3094",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "4.942039",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-5",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-4",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-43",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-8",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-84",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-49",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-89",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-9",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                        (0, d.jsx)("filter", {
                          id: "filter9310-3-7",
                          x: "-.66169",
                          y: "-.40895",
                          width: "2.3234",
                          height: "1.8179",
                          colorInterpolationFilters: "sRGB",
                          children: (0, d.jsx)("feGaussianBlur", {
                            stdDeviation: "0.37737108",
                          }),
                        }),
                      ],
                    }),
                    (0, d.jsx)("g", {
                      transform: "translate(216.22 144.03)",
                      children: (0, d.jsxs)("g", {
                        transform: "translate(-203.23 -130.02)",
                        children: [
                          (0, d.jsx)("rect", {
                            x: "-12.987",
                            y: "-14.008",
                            width: "610.63",
                            height: "413.49",
                            ry: "13.055",
                          }),
                          (0, d.jsxs)("g", {
                            transform:
                              "matrix(.1115 .029875 -.029875 .1115 43.564 4.6515)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m404.07 404.24c-51.805 52.906-111.67 97.266-177.36 131.44 137.77 32.75 276-52.387 308.75-190.16 9.2695-39.004 9.2695-79.637-8e-3 -118.64-34.152 65.691-78.5 125.55-131.39 177.36z",
                                fill: "#e38700",
                              }),
                              (0, d.jsx)("path", {
                                d: "m145.01 369.84c57.793-32.656 104.54-81.805 134.23-141.18 16.027-32.051 37.121-61.32 62.457-86.664l72.543-72.523 3.4023-3.1875c-3.3242-1.9727-6.5976-4.043-10.012-5.918-4.4844-2.4141-9.0625-4.6758-13.695-6.8125-0.8789-0.41797-1.7656-0.80078-2.6445-1.2031-4.3203-1.9727-8.6758-3.7773-13.117-5.4844l-1.0625-0.34375c-26.727-10.141-54.973-15.723-83.539-16.488l-0.83984 0.98438c-41.34 42.871-78.035 89.98-109.47 140.56-40.148 64.566-88.824 123.42-144.7 174.97l-1.3594 1.2031c2.4453 10.008 5.4922 19.863 9.1211 29.508 0.13672 0.35547 0.28516 0.71094 0.41406 1.0625 1.707 4.4297 3.5508 8.7969 5.4844 13.109 0.39453 0.875 0.78906 1.7656 1.2031 2.6406 2.1406 4.6367 4.3984 9.2227 6.8164 13.699 2.1367 3.9453 4.4844 7.7812 6.8242 11.617 14.715-11.254 30.008-21.715 45.816-31.371z",
                                fill: "#f09c23",
                              }),
                              (0, d.jsx)("path", {
                                d: "m183.25 171.54c31.43-50.582 68.125-97.691 109.46-140.56l0.83984-0.98438c-2.5039-0.05859-5-0.22656-7.5234-0.22656-141.58-0.050781-256.38 114.67-256.44 256.25-0.0078 20.039 2.3359 40 6.9727 59.488 0.1875 0.75781 0.43359 1.4883 0.62109 2.2578l1.3633-1.2031c55.887-51.57 104.55-110.45 144.7-175.02z",
                                fill: "#f5ae45",
                              }),
                              (0, d.jsx)("path", {
                                d: "m456.35 183.4-48.41 32.922c-59.52 40.461-108.54 94.523-143 157.71-20.719 38.008-46.773 72.84-77.375 103.46l-32.09 29.25c2.957 1.7656 5.918 3.6172 8.9531 5.2656 60.059-20.93 135.36-71.074 205.83-141.55 70.473-70.473 120.62-145.81 141.55-205.87-3.0742-5.7031-6.3594-11.266-9.8594-16.699-14.43 12.793-29.656 24.656-45.594 35.504z",
                                fill: "#f09c23",
                              }),
                              (0, d.jsx)("path", {
                                d: "m264.95 374.03c34.457-63.184 83.48-117.25 143-157.71l48.414-32.918c15.938-10.859 31.152-22.711 45.582-35.504-21.449-33.344-50.305-61.281-84.32-81.645l-3.3828 3.2227-72.523 72.523c-25.336 25.348-46.43 54.617-62.457 86.668-29.703 59.367-76.449 108.52-134.25 141.17l-32.176 18.188c-15.781 9.6523-31.047 20.125-45.73 31.367 21.902 35.891 52.258 65.859 88.41 87.309l32.051-29.211c30.602-30.609 56.656-65.453 77.387-103.46z",
                                fill: "#f5ae45",
                              }),
                              (0, d.jsx)("path", {
                                d: "m546.44 25.816c-39.004-39.047-115.3-31.875-201.11 10.926 10.797 2.5547 21.41 5.8086 31.785 9.7422l1.043 0.41797c4.4297 1.7031 8.7969 3.5273 13.117 5.4805 0.87891 0.40625 1.7656 0.78906 2.6445 1.2031 4.6328 2.1484 9.2109 4.3984 13.695 6.8164 44.016-15.336 79.883-15.012 99.527 4.6641 19.645 19.676 20 55.512 4.6641 99.527-20.926 60.059-71.074 135.38-141.55 205.82-70.473 70.445-145.77 120.62-205.83 141.59-44.012 15.344-79.883 15.008-99.527-4.6641-19.645-19.676-20.008-55.551-4.7031-99.566-2.4141-4.4766-4.6641-9.0625-6.8164-13.699-0.41406-0.875-0.80859-1.7656-1.2031-2.6406-1.9727-4.3125-3.7969-8.6797-5.4805-13.109-0.12891-0.35156-0.27734-0.70703-0.41406-1.0625-3.9375-10.367-7.1914-20.977-9.7461-31.766-42.801 85.797-49.969 162.1-10.973 201.1 38.992 39.004 115.34 31.824 201.15-10.926 65.691-34.172 125.55-78.531 177.36-131.44 52.891-51.805 97.238-111.67 131.39-177.36 42.812-85.809 49.969-162.11 10.977-201.06z",
                                fill: "#faba5e",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#e38700",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m191.66 176.7c31.184-50.121 67.551-96.797 108.53-139.28l5.918-6.8047c-6.6367-0.51172-13.312-0.85938-20.066-0.85938-1.9141 0-3.8008 0.10156-5.6914 0.14844-39.645 41.816-74.98 87.516-105.46 136.41-39.016 62.742-86.172 120.03-140.25 170.36 1.4688 7.3672 3.293 14.598 5.3828 21.695l5.2461-4.6133c56.531-52.168 105.78-111.72 146.4-177.06z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m149.94 378.41c59.527-33.57 107.63-84.191 138.14-145.34 15.543-31.113 36.008-59.516 60.613-84.102l72.305-72.316 5.3672-5.0391c-5.7031-3.7383-11.539-7.2891-17.547-10.574l-1.5469 1.4609-72.535 72.523c-26.094 26.086-47.809 56.215-64.297 89.223-28.738 57.641-74.074 105.35-130.18 137l-32.188 18.188c-15.887 9.6641-31.254 20.156-46.047 31.43 3.2266 5.7773 6.668 11.418 10.305 16.922 14.598-11.164 29.754-21.566 45.426-31.152z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m273.62 378.73c33.777-61.754 81.715-114.62 139.88-154.27l48.41-32.969c15.781-10.789 30.879-22.547 45.219-35.188-3.3633-5.7109-6.9336-11.273-10.711-16.688-14.41 12.832-29.645 24.715-45.602 35.562l-48.41 32.961c-60.75 41.41-110.82 96.637-146.11 161.14-20.188 37.043-45.562 71.008-75.363 100.86l-34.254 31.211c5.75 3.7383 11.641 7.2891 17.691 10.562l30.18-27.512c31.262-31.266 57.887-66.855 79.062-105.67z",
                                  }),
                                ],
                              }),
                              (0, d.jsx)("path", {
                                d: "m345.32 36.742c10.797 2.5547 21.41 5.8086 31.785 9.7422l1.043 0.41797c4.4297 1.7031 8.7969 3.5273 13.117 5.4805 0.87891 0.40625 1.7656 0.78906 2.6445 1.2031 4.6328 2.1484 9.2109 4.3984 13.695 6.8164 38.039-13.254 69.922-14.746 90.594-2.2188 19.141-7.4648 38.648-13.945 58.461-19.398-2.9375-4.6758-6.3711-9.0234-10.227-12.969-39.004-39.047-115.3-31.875-201.11 10.926z",
                                fill: "#f5ae45",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            children: [
                              (0, d.jsx)("path", {
                                d: "m301.94 55.144-294.45 170 294.45 170 285.79-175z",
                                display: "none",
                                fill: "#eeeeef",
                              }),
                              (0, d.jsx)("path", {
                                d: "m665.28 313.6a360.96 188.75 0 0 1-360.94 188.75 360.96 188.75 0 0 1-360.97-188.73 360.96 188.75 0 0 1 360.91-188.77 360.96 188.75 0 0 1 361 188.72",
                                fill: "#f9fafc",
                                filter: "url(#filter9031)",
                                opacity: ".78",
                              }),
                              (0, d.jsx)("ellipse", {
                                cx: "304.33",
                                cy: "313.6",
                                rx: "413.53",
                                ry: "188.75",
                                fill: "url(#radialGradient1255)",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().energyTurnedOffStrokeOnly,
                            fill: "none",
                            stroke: "#b173ff",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m446 242.5 34.641-20",
                                filter: "url(#filter2622)",
                                strokeWidth: "1.265",
                              }),
                              (0, d.jsx)("path", {
                                d: "m450.33 240 34.641-20",
                                strokeWidth: ".465",
                              }),
                              (0, d.jsx)("path", {
                                d: "m246.82 202.5 43.301-25-17.321-10",
                                filter: "url(#filter2618)",
                                strokeWidth: "1.265",
                              }),
                              (0, d.jsx)("path", {
                                d: "m251.15 200 38.971-22.5-17.321-10",
                                strokeWidth: ".465",
                              }),
                              (0, d.jsx)("path", {
                                d: "m225.17 250 116.91 67.5 34.641-20",
                                filter: "url(#filter2614)",
                                strokeWidth: "1.265",
                              }),
                              (0, d.jsx)("path", {
                                d: "m229.5 252.5 112.58 65 34.641-20",
                                strokeWidth: ".465",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            transform: "translate(103.44 -24.291)",
                            children: [
                              (0, d.jsx)("path", {
                                className: t().energyTurnedOff,
                                d: "m246.98 316.06 34.96 20.733 80.012-47.096-45.37-27.988z",
                                fill: "none",
                                filter: "url(#filter4871)",
                                stroke: "#00000f",
                                strokeWidth: "10.665",
                              }),
                              (0, d.jsx)("path", {
                                className: t().energyTurnedOff,
                                d: "m246.98 316.06 34.96 20.733 80.012-47.096-45.37-27.988z",
                                fill: "#f9fafc",
                                filter: "url(#filter4875)",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "url(#linearGradient8246)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m247.3 291.71v10l34.641 20v-10z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m281.94 311.71v10l77.942-45v-10z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m247.3 301.71v10l34.641 20v-10z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m281.94 321.71v10l77.942-45v-10z",
                                  }),
                                ],
                              }),
                              (0, d.jsx)("path", {
                                d: "m247.3 291.71 34.641 20 77.942-45-34.641-20z",
                                fill: "url(#linearGradient6913)",
                              }),
                              (0, d.jsx)("path", {
                                className: t().energyTurnedOffStrokeOnly,
                                d: "m247.3 301.79 34.641 20 77.942-45",
                                fill: "none",
                                filter: "url(#filter8382)",
                                stroke: "#f9fafc",
                                strokeWidth: "1.165",
                              }),
                              (0, d.jsx)("path", {
                                className: t().energyTurnedOffStrokeOnly,
                                d: "m247.3 301.71 34.641 20 77.942-45",
                                fill: "none",
                                stroke: "#f9fafc",
                                strokeWidth: "1.165",
                              }),
                              (0, d.jsxs)("g", {
                                className: t().energyTurnedOff,
                                fill: "#f9fafc",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m273.28 286.71 17.32 10 43.301-25-17.32-10z",
                                    filter: "url(#filter8162-5)",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m273.28 286.71 17.32 10 43.301-25-17.32-10z",
                                    filter: "url(#filter8162)",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m273.28 286.71 17.32 10 43.301-25-17.32-10z",
                                  }),
                                ],
                              }),
                              (0, d.jsx)("path", {
                                d: "m316.58 261.71 0.27424 19.842 17.046-9.8417-17.32-10",
                                display: "none",
                                fill: "#33333f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m320.91 253.73-60.622 35 25.981 15 60.622-35z",
                                fill: "none",
                                filter: "url(#filter8655)",
                                stroke: "#f9fafc",
                                strokeWidth: ".965",
                              }),
                              (0, d.jsx)("path", {
                                className: t().energyTurnedOff,
                                d: "m320.91 254.29-60.622 35 25.981 15 60.622-35z",
                                fill: "none",
                                stroke: "#f9fafc",
                                strokeWidth: ".965",
                              }),
                            ],
                          }),
                          (0, d.jsx)("path", {
                            className: ""
                              .concat(t().haloHidden, " ")
                              .concat(t().halo),
                            "data-pausable-animation": !0,
                            transform: "matrix(1 -.51223 0 1 8.8593 204.35)",
                            d: "m367.86 246.5-14.611-73.198c16.635-13.801 59.183-29.061 72.235-10.697l2.4243 99.984c0.41656 15.852-59.189 1.3843-60.049-16.089z",
                            fill: "url(#linearGradient8084)",
                            filter: "url(#filter8045-9)",
                            opacity: ".58636",
                          }),
                          (0, d.jsxs)("g", {
                            transform: "matrix(-1 0 0 1 577.41 69.092)",
                            children: [
                              (0, d.jsxs)("g", {
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m86.603 154.65 5.1962 3 10.392-6z",
                                    fill: "#00000f",
                                    filter: "url(#filter1999-5)",
                                  }),
                                  (0, d.jsx)("path", {
                                    className: t().energyTurnedOff,
                                    d: "m86.603 153.06 5.1962 3 10.392-6z",
                                    fill: "#f9fafc",
                                    filter: "url(#filter1626-5)",
                                  }),
                                  (0, d.jsxs)("g", {
                                    stroke: "#f9fafc",
                                    strokeWidth: ".1",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m86.603 140v12l5.1962 3v-12z",
                                        fill: "url(#linearGradient1422)",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m86.603 140 10.392-6 5.1962 3-10.392 6z",
                                        fill: "url(#linearGradient1430)",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m102.19 137v12l-10.392 6v-12z",
                                        fill: "url(#linearGradient1398)",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, d.jsx)("path", {
                                d: "m91.791 140.56-1e-6 -5 5.1962-3v5",
                                fill: "none",
                                stroke: "#f9fafc",
                                strokeWidth: ".865",
                              }),
                              (0, d.jsxs)("g", {
                                className: t().energyTurnedOff,
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m97.517 144.99-0.72516 0.67397 0.06984 3.0897c0.28808-0.0166 0.51779-0.30779 0.73052-0.67885z",
                                    color: "#000000",
                                    colorRendering: "auto",
                                    dominantBaseline: "auto",
                                    fill: "#f9fafc",
                                    imageRendering: "auto",
                                    shapeRendering: "auto",
                                    stopColor: "#000000",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(-.58978 .80756 -.84562 -.53378 0 0)",
                                    cx: "71.151",
                                    cy: "-164.39",
                                    rx: "1.1259",
                                    ry: ".80261",
                                    fill: "#f9fafc",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m97.538 145.85-0.01004-1.6283c0.30524 0.0883 0.4805 0.2703 0.46745 0.70996-0.03837 0.44867-0.18795 0.70273-0.45737 0.91838z",
                                    display: "none",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            transform:
                              "matrix(.53857 .070833 .099838 .57021 88.632 43.563)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z",
                                fill: "#33333f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z",
                                fill: "#44444f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z",
                                fill: "#22222f",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            transform: "translate(802.12 93.576)",
                            children: [
                              (0, d.jsxs)("g", {
                                transform: "translate(8.139 -10.856)",
                                fill: "none",
                                stroke: "#cda5ff",
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.49721 .86763 -.94189 .33593 0 0)",
                                    cx: "-16.832",
                                    cy: "632.47",
                                    rx: "1.344",
                                    ry: "1.5155",
                                    filter: "url(#filter1541)",
                                    strokeWidth: ".30598",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.64379 .7652 -.89326 .44954 0 0)",
                                    cx: "-103.32",
                                    cy: "612.02",
                                    rx: "1.4534",
                                    ry: "1.414",
                                    filter: "url(#filter1537)",
                                    strokeWidth: ".30734",
                                  }),
                                  (0, d.jsxs)("g", {
                                    strokeWidth: ".30758",
                                    children: [
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.72771 -.68589 .82338 .56749 0 0)",
                                        cx: "-533.49",
                                        cy: "-298.2",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        filter: "url(#filter1533)",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.9512 -.30857 .50139 .86522 0 0)",
                                        cx: "-670.39",
                                        cy: "-23.955",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        filter: "url(#filter1529)",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.72771 -.68589 .82338 .56749 0 0)",
                                        cx: "-526.52",
                                        cy: "-329.62",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        filter: "url(#filter1525)",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.64379 .7652 -.89326 .44954 -.36438 .28966)",
                                    cx: "-156.07",
                                    cy: "622.18",
                                    rx: "1.4534",
                                    ry: "1.414",
                                    filter: "url(#filter1521)",
                                    strokeWidth: ".30734",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.49721 .86763 -.94189 .33593 .52917 -.52917)",
                                    cx: "-76.258",
                                    cy: "657.81",
                                    rx: "1.344",
                                    ry: "1.5155",
                                    filter: "url(#filter1517)",
                                    strokeWidth: ".30598",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform: "translate(8.139 -10.856)",
                                fill: "none",
                                stroke: "#cda5ff",
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.49721 .86763 -.94189 .33593 0 0)",
                                    cx: "-16.832",
                                    cy: "632.47",
                                    rx: "1.344",
                                    ry: "1.5155",
                                    filter: "url(#filter1406)",
                                    strokeWidth: ".30598",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.64379 .7652 -.89326 .44954 0 0)",
                                    cx: "-103.32",
                                    cy: "612.02",
                                    rx: "1.4534",
                                    ry: "1.414",
                                    filter: "url(#filter1402)",
                                    strokeWidth: ".30734",
                                  }),
                                  (0, d.jsxs)("g", {
                                    strokeWidth: ".30758",
                                    children: [
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.72771 -.68589 .82338 .56749 0 0)",
                                        cx: "-533.49",
                                        cy: "-298.2",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        filter: "url(#filter1398)",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.9512 -.30857 .50139 .86522 0 0)",
                                        cx: "-670.39",
                                        cy: "-23.955",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        filter: "url(#filter1394)",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.72771 -.68589 .82338 .56749 0 0)",
                                        cx: "-526.52",
                                        cy: "-329.62",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        filter: "url(#filter1390)",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.64379 .7652 -.89326 .44954 -.36438 .28966)",
                                    cx: "-156.07",
                                    cy: "622.18",
                                    rx: "1.4534",
                                    ry: "1.414",
                                    filter: "url(#filter1386)",
                                    strokeWidth: ".30734",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.49721 .86763 -.94189 .33593 .52917 -.52917)",
                                    cx: "-76.258",
                                    cy: "657.81",
                                    rx: "1.344",
                                    ry: "1.5155",
                                    filter: "url(#filter1382)",
                                    strokeWidth: ".30598",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform: "translate(7.878 -11.097)",
                                fill: "none",
                                children: [
                                  (0, d.jsxs)("g", {
                                    transform: "translate(1.0583 1.0583)",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m-615.88 163.86-22.056 11.518-15.725-2.0821",
                                        stroke: "#b173ff",
                                        strokeWidth: ".365",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.72771 -.68589 .82338 .56749 0 0)",
                                        cx: "-526.3",
                                        cy: "-330.78",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        stroke: "#cda5ff",
                                        strokeWidth: ".30758",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    transform: "translate(.52917 .52917)",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m-617.83 162.52-20.495 10.557-3.2852-0.62164-13.971-11.359",
                                        stroke: "#b173ff",
                                        strokeWidth: ".365",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.64379 .7652 -.89326 .44954 0 0)",
                                        cx: "-156.37",
                                        cy: "622.68",
                                        rx: "1.4534",
                                        ry: "1.414",
                                        stroke: "#cda5ff",
                                        strokeWidth: ".30734",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    transform: "translate(.261 .24096)",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m-619.83 160.01-18.135 10.095-17.905-14.895",
                                        stroke: "#b173ff",
                                        strokeWidth: ".365",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.49721 .86763 -.94189 .33593 0 0)",
                                        cx: "-76.584",
                                        cy: "657.08",
                                        rx: "1.344",
                                        ry: "1.5155",
                                        stroke: "#cda5ff",
                                        strokeWidth: ".30598",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform: "translate(9.4655 -9.5099)",
                                fill: "none",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m-613.6 165.17-36.142 19.023",
                                    stroke: "#b173ff",
                                    strokeWidth: ".365",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(.9512 -.30857 .50139 .86522 0 0)",
                                    cx: "-670.87",
                                    cy: "-25.683",
                                    rx: "1.4418",
                                    ry: "1.4276",
                                    stroke: "#cda5ff",
                                    strokeWidth: ".30758",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform: "translate(7.878 -11.097)",
                                fill: "none",
                                children: [
                                  (0, d.jsxs)("g", {
                                    transform: "translate(37.262 24.408)",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m-641.95 147.81-18.239 10.15zm-18.038 10.165 17.905 14.895z",
                                        stroke: "#b173ff",
                                        strokeWidth: ".365",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.49721 .86763 -.94189 .33593 0 0)",
                                        cx: "-52.588",
                                        cy: "652.88",
                                        rx: "1.344",
                                        ry: "1.5155",
                                        stroke: "#cda5ff",
                                        strokeWidth: ".30598",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    transform: "translate(-16.364 -12.359)",
                                    children: [
                                      (0, d.jsx)("path", {
                                        transform: "translate(27.628 20.13)",
                                        d: "m-617.83 162.52-20.495 10.557",
                                        stroke: "#b173ff",
                                        strokeWidth: ".365",
                                      }),
                                      (0, d.jsxs)("g", {
                                        transform: "translate(23.369 32.672)",
                                        children: [
                                          (0, d.jsx)("path", {
                                            d: "m-633.97 160.4-0.62164 3.2852",
                                            stroke: "#b173ff",
                                            strokeWidth: ".365",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-621.02 175.11-13.62-11.586",
                                            stroke: "#b173ff",
                                            strokeWidth: ".365",
                                          }),
                                          (0, d.jsx)("ellipse", {
                                            transform:
                                              "matrix(.64379 .7652 -.89326 .44954 0 0)",
                                            cx: "-124.86",
                                            cy: "604.05",
                                            rx: "1.4534",
                                            ry: "1.414",
                                            stroke: "#cda5ff",
                                            strokeWidth: ".30734",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    className: t().energyTurnedOffStrokeOnly,
                                    transform: "translate(6.486 14.734)",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m-615.85 153.74-22.056 11.518",
                                        stroke: "#b173ff",
                                        strokeWidth: ".365",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m-637.81 165.12-2.0821 15.725",
                                        stroke: "#b173ff",
                                        strokeWidth: ".365",
                                      }),
                                      (0, d.jsx)("ellipse", {
                                        transform:
                                          "matrix(.72771 -.68589 .82338 .56749 0 0)",
                                        cx: "-524.89",
                                        cy: "-313.35",
                                        rx: "1.4418",
                                        ry: "1.4276",
                                        stroke: "#cda5ff",
                                        strokeWidth: ".30758",
                                      }),
                                      (0, d.jsxs)("g", {
                                        stroke: "#b173ff",
                                        strokeWidth: ".765",
                                        children: [
                                          (0, d.jsx)("path", {
                                            d: "m-621.3 150.18-22.056 11.518-15.725-2.0821",
                                            filter: "url(#filter7748)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-623.79 148.31-20.495 10.557-3.2852-0.62164-13.971-11.359",
                                            filter: "url(#filter7744)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-626.06 145.52-18.135 10.095-17.905-14.895",
                                            filter: "url(#filter7740)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-618.5 152.02-36.142 19.023",
                                            filter: "url(#filter7736)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-611.17 157.49-18.239 10.15zm-18.038 10.165 17.905 14.895z",
                                            filter: "url(#filter7732)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-613.05 155.55-20.495 10.557",
                                            filter: "url(#filter7728)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-633.45 165.98-0.62164 3.2852",
                                            filter: "url(#filter7720)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-620.5 180.69-13.62-11.586",
                                            filter: "url(#filter7724)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-615.85 153.74-22.056 11.518",
                                            filter: "url(#filter7712)",
                                          }),
                                          (0, d.jsx)("path", {
                                            d: "m-637.81 165.12-2.0821 15.725",
                                            filter: "url(#filter7716)",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, d.jsx)("ellipse", {
                                className: t().energyTurnedOff,
                                transform:
                                  "matrix(.97263 0 0 .95021 -16.453 5.7817)",
                                cx: "-583.78",
                                cy: "144.7",
                                rx: "43.949",
                                ry: "25.374",
                                fill: "none",
                                filter: "url(#filter5670)",
                                opacity: ".60148",
                                stroke: "#00000f",
                                strokeWidth: "4.05",
                              }),
                              (0, d.jsx)("ellipse", {
                                className: t().energyTurnedOff,
                                cx: "-583.78",
                                cy: "143.53",
                                rx: "39.166",
                                ry: "22.613",
                                display: "none",
                                fill: "none",
                                stroke: "#000",
                                strokeWidth: "3.14",
                              }),
                              (0, d.jsxs)("g", {
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    className: t().energyTurnedOff,
                                    cx: "-583.78",
                                    cy: "141.94",
                                    rx: "39.166",
                                    ry: "22.613",
                                    fill: "#f9fafc",
                                    filter: "url(#filter6519)",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.78",
                                    cy: "134.4",
                                    rx: "43.301",
                                    ry: "24.128",
                                    fill: "url(#linearGradient1812)",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m-627.08 119.39h86.603v16.598h-86.603z",
                                    fill: "url(#linearGradient1812)",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.78",
                                    cy: "120.11",
                                    rx: "43.301",
                                    ry: "25",
                                    fill: "url(#linearGradient1667)",
                                  }),
                                ],
                              }),
                              (0, d.jsx)("ellipse", {
                                className: t().energyTurnedOff,
                                cx: "-583.78",
                                cy: "120.11",
                                rx: "38.766",
                                ry: "22.382",
                                fill: "none",
                                filter: "url(#filter1800)",
                                stroke: "#f9fafc",
                                strokeWidth: ".8",
                              }),
                              (0, d.jsx)("ellipse", {
                                className: t().energyTurnedOff,
                                cx: "-583.78",
                                cy: "120.11",
                                rx: "38.766",
                                ry: "22.382",
                                fill: "none",
                                stroke: "#f9fafc",
                                strokeWidth: ".8",
                              }),
                              (0, d.jsxs)("g", {
                                className: t().energyTurnedOff,
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.25",
                                    cy: "120.11",
                                    rx: "21.651",
                                    ry: "12.5",
                                    fill: "#f9fcfb",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m-611.68 141.33 0.10676 10.165c5.3636 1.996 10.598 3.2766 15.928 4.4343l-0.0357-9.638c-5.6145-2.1074-11.07-3.3612-15.999-4.9609z",
                                    fill: "#f9fafc",
                                    filter: "url(#filter6899)",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m-561.13 144.54 0.0873 8.2372c4.4767-1.7758 8.9978-3.8061 13.018-6.9447l-0.0291-7.8539c-4.7443 1.6197-9.229 4.1526-13.076 6.5614z",
                                    fill: "#f9fafc",
                                    filter: "url(#filter6903)",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                className: t().energyTurnedOff,
                                transform: "translate(.044003 .052855)",
                                fill: "none",
                                filter: "url(#filter1760)",
                                stroke: "#f9fafc",
                                children: [
                                  (0, d.jsxs)("g", {
                                    strokeWidth: "2.985",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m-555.96 112.51a30.311 17.5 0 0 1 0.14748 15.036",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m-580.52 137.54a30.311 17.5 0 0 1-13.887-1.156",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m-611.81 114.24a30.311 17.5 0 0 1 12.291-8.8958",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.25",
                                    cy: "120.11",
                                    rx: "30.311",
                                    ry: "17.5",
                                    strokeWidth: "1.085",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                className: t().energyTurnedOff,
                                fill: "none",
                                stroke: "#f9fafc",
                                children: [
                                  (0, d.jsxs)("g", {
                                    strokeWidth: "2.985",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m-555.96 112.51a30.311 17.5 0 0 1 0.14748 15.036",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m-580.52 137.54a30.311 17.5 0 0 1-13.887-1.156",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m-611.81 114.24a30.311 17.5 0 0 1 12.291-8.8958",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.25",
                                    cy: "120.11",
                                    rx: "30.311",
                                    ry: "17.5",
                                    strokeWidth: "1.085",
                                  }),
                                ],
                              }),
                              (0, d.jsx)("path", {
                                d: "m-574.11 131.44c0.96944-6.5162 1.9508-13.021-0.11696-22.545 6.5416 1.3227 11.509 4.2902 12.623 10.355 0.49557 7.2576-7.8498 10.95-12.506 12.19z",
                                display: "none",
                                fill: "#dfe1e1",
                              }),
                              (0, d.jsxs)("g", {
                                className: t().energyTurnedOff,
                                fill: "#f9fcfb",
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.25",
                                    cy: "120.11",
                                    rx: "21.651",
                                    ry: "12.5",
                                    filter: "url(#filter1576-6-3)",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.25",
                                    cy: "120.11",
                                    rx: "21.651",
                                    ry: "12.5",
                                    filter: "url(#filter1576-6)",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    cx: "-583.25",
                                    cy: "120.11",
                                    rx: "21.651",
                                    ry: "12.5",
                                    display: "none",
                                    filter: "url(#filter1576)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().voiceWaves,
                            fill: "none",
                            stroke: "#1c75db",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m62.369 147.13a7.8811 7.8811 0 0 1-6.055 7.6666",
                                strokeWidth: ".64709",
                              }),
                              (0, d.jsx)("path", {
                                d: "m70.086 146.42a15.437 15.437 0 0 1-11.86 15.017",
                                strokeWidth: "1.2675",
                              }),
                              (0, d.jsx)("path", {
                                d: "m78.409 145.13a27.163 27.163 0 0 1-20.87 26.424",
                                strokeWidth: "2.2303",
                              }),
                            ],
                          }),
                          (0, d.jsx)("path", {
                            className: ""
                              .concat(t().haloHidden, " ")
                              .concat(t().halo),
                            "data-pausable-animation": !0,
                            d: "m197.21 213.69-23.577-68.246c16.635-13.801 76.351-21.474 89.403-3.1093l-22.524 71.355c0.41656 15.852-42.441 17.474-43.301 0z",
                            fill: "url(#linearGradient7777)",
                            filter: "url(#filter8045)",
                            opacity: ".58636",
                          }),
                          
                          (0, d.jsxs)("g", {
                            transform: "translate(100.21 -24.418)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m237.54 59.418 121.24 60 0.0484 91.25-121.29-61.25z",
                                fill: "#22222f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m228.88 64.418 121.24 60 0.0484 91.25-121.29-61.25z",
                                fill: "#11111f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m220.22 69.418 121.24 60 0.0484 91.25-121.29-61.25z",
                                fill: "#00000f",
                              }),
                              (0, d.jsx)("use", {
                                className: t().screenStrokeLogo,
                                "data-pausable-animation": !0,
                                href: "#Orion-stroke",
                                x: "0",
                                y: "60",
                              }),
                              (0, d.jsx)("g", {
                                children: (0, d.jsx)("use", {
                                  className: t().screenMailIcon,
                                  "data-pausable-animation": !0,
                                  href: "#mail-icon",
                                  x: "0",
                                  y: "0",
                                }),
                              }),
                              (0, d.jsx)("g", {
                                children: (0, d.jsx)("use", {
                                  className: t().screenMusicIcon,
                                  "data-pausable-animation": !0,
                                  href: "#music-icon",
                                  x: "0",
                                  y: "0",
                                }),
                              }),
                              (0, d.jsx)("g", {
                                children: (0, d.jsx)("use", {
                                  className: t().screenChatIcon,
                                  "data-pausable-animation": !0,
                                  href: "#chat-icon",
                                  x: "0",
                                  y: "0",
                                }),
                              }),
                              (0, d.jsx)("g", {
                                children: (0, d.jsx)("use", {
                                  className: t().screenVideoIcon,
                                  "data-pausable-animation": !0,
                                  href: "#video-icon",
                                  x: "0",
                                  y: "0",
                                }),
                              }),
                              (0, d.jsx)("g", {
                                children: (0, d.jsx)("use", {
                                  className: t().screenForecastIcon,
                                  "data-pausable-animation": !0,
                                  href: "#forecast-icon",
                                  x: "0",
                                  y: "0",
                                }),
                              }),
                              (0, d.jsx)("g", {
                                children: (0, d.jsx)("use", {
                                  className: t().screenCheckIcon,
                                  "data-pausable-animation": !0,
                                  href: "#check-icon",
                                  x: "0",
                                  y: "0",
                                }),
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            transform: "translate(180.99 17.779)",
                            children: [
                              (0, d.jsxs)("g", {
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m86.603 154.65 5.1962 3 10.392-6z",
                                    fill: "#00000f",
                                    filter: "url(#filter1999)",
                                  }),
                                  (0, d.jsx)("path", {
                                    className: t().energyTurnedOff,
                                    d: "m86.603 153.06 5.1962 3 10.392-6z",
                                    fill: "#f9fafc",
                                    filter: "url(#filter1626)",
                                  }),
                                  (0, d.jsxs)("g", {
                                    stroke: "#f9fafc",
                                    strokeWidth: ".1",
                                    children: [
                                      (0, d.jsx)("path", {
                                        d: "m86.603 140v12l5.1962 3v-12z",
                                        fill: "url(#linearGradient1422)",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m86.603 140 10.392-6 5.1962 3-10.392 6z",
                                        fill: "url(#linearGradient1430)",
                                      }),
                                      (0, d.jsx)("path", {
                                        d: "m102.19 137v12l-10.392 6v-12z",
                                        fill: "url(#linearGradient1398)",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, d.jsx)("path", {
                                d: "m91.791 140.56-1e-6 -5 5.1962-3v5",
                                fill: "none",
                                stroke: "#f9fafc",
                                strokeWidth: ".865",
                              }),
                              (0, d.jsxs)("g", {
                                className: t().energyTurnedOff,
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m97.517 144.99-0.72516 0.67397 0.06984 3.0897c0.28808-0.0166 0.51779-0.30779 0.73052-0.67885z",
                                    color: "#000000",
                                    colorRendering: "auto",
                                    dominantBaseline: "auto",
                                    fill: "#f9fafc",
                                    imageRendering: "auto",
                                    shapeRendering: "auto",
                                    stopColor: "#000000",
                                  }),
                                  (0, d.jsx)("ellipse", {
                                    transform:
                                      "matrix(-.58978 .80756 -.84562 -.53378 0 0)",
                                    cx: "71.151",
                                    cy: "-164.39",
                                    rx: "1.1259",
                                    ry: ".80261",
                                    fill: "#f9fafc",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m97.538 145.85-0.01004-1.6283c0.30524 0.0883 0.4805 0.2703 0.46745 0.70996-0.03837 0.44867-0.18795 0.70273-0.45737 0.91838z",
                                    display: "none",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsx)("ellipse", {
                            transform:
                              "matrix(.94032 -.34029 0 1 836.32 103.95)",
                            cx: "-555.02",
                            cy: "10.645",
                            rx: "9.345",
                            ry: "4.2997",
                            fill: "#00000f",
                            filter: "url(#filter5495-9)",
                            opacity: ".99962",
                          }),
                          (0, d.jsxs)("g", {
                            className: t().pythonLogo,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m33.124 30.533-11.321-10.392 1.6784-7.3827 11.759 1.0077 0.05687 6.0995z",
                                fill: "#203a50",
                              }),
                              (0, d.jsx)("path", {
                                d: "m46.719 116.14c4.9806-0.0231 10.535 2.9016 14.72 2.1611 12.329-2.1781-6.0066-24.822-0.33552-28.81l11.549-8.1216h-29.134v-3.7012l29.134-1e-5h10.934c8.4672 0 29.432-0.0634 31.751-9.7449 2.6366-10.938-4.072-19.321-7.0536-30.716-15.408-10.313-12.781-7.726-25.174-9.0828-5.2751-0.76242 9.1833 4.8443 3.6792-0.2318l-11.471-10.579 0.96785 14.514c0.66216 9.9302-8.3201 18.098-18.2 18.098l-29.1 3e-6c-8.1005 0-14.567 6.6697-14.567 14.805v27.742c0 7.8955 22.276 21.022 30.182 22.34 5.0048 0.83311-2.8618 1.3498 2.1186 1.3266z",
                                fill: "url(#linearGradient4927)",
                                strokeWidth: "1.0866",
                              }),
                              (0, d.jsx)("path", {
                                d: "m91.229 35.054v11.906c0 9.2308-7.8259 17-16.75 17h-26.781c-7.3358 0-13.406 6.2785-13.406 13.625v25.531c0 7.2663 6.3186 11.54 13.406 13.625 8.4873 2.4956 16.626 2.9466 26.781 0 6.7502-1.9544 13.406-5.8876 13.406-13.625v-10.219h-26.781v-3.4062h40.188c7.7925 0 10.696-5.4354 13.406-13.594 2.7993-8.3989 2.6802-16.476 0-27.25-1.9258-7.7574-5.6039-13.594-13.406-13.594zm-15.062 64.656c2.7795 3e-6 5.0312 2.2774 5.0312 5.0937-2e-6 2.8264-2.2518 5.125-5.0312 5.125-2.7696 0-5.0312-2.2986-5.0312-5.125 2e-6 -2.8163 2.2617-5.0937 5.0312-5.0937z",
                                fill: "url(#linearGradient4893)",
                              }),
                              (0, d.jsx)("path", {
                                d: "m51.972-5.7701c-4.9806 0.02314-9.7369 0.44791-13.922 1.1885-12.329 2.1781-14.567 6.737-14.567 15.144l-1.6935 9.5794 28.452-8.1031 2.3752 13.328h-40.068c-8.4672 0-15.881 5.0893-18.2 14.771-2.675 11.097-2.7936 18.022 0 29.61 2.071 8.6252 6.2608 9.6305 15.903 15.855l7.7874 3.4162 1.811-17.812c0.92719-9.119 8.3201-18.098 18.2-18.098h29.1c8.1005 0 20.825-6.7533 20.735-14.933l-0.2162-19.54c-0.08784-7.9391-12.612-21.9-20.519-23.217-5.0048-0.83311-10.198-1.2116-15.178-1.1885z",
                                fill: "url(#linearGradient4901)",
                                strokeWidth: "1.0866",
                              }),
                              (0, d.jsx)("path", {
                                d: "m60.51 6.398c-4.5837 0.021298-8.9609 0.41222-12.812 1.0938-11.346 2.0045-13.406 6.2001-13.406 13.938v10.219h26.812v3.4062h-36.875c-7.7925 0-14.616 4.6837-16.75 13.594-2.4618 10.213-2.571 16.586 0 27.25 1.9059 7.9379 6.4575 13.594 14.25 13.594h9.2188v-12.25c0-8.8499 7.6571-16.656 16.75-16.656h26.781c7.455 0 13.406-6.1382 13.406-13.625v-25.531c0-7.2663-6.13-12.725-13.406-13.938-4.606-0.76673-9.3851-1.115-13.969-1.0938zm-14.5 8.2188c2.7695 0 5.0312 2.2986 5.0312 5.125-2e-6 2.8163-2.2617 5.0938-5.0312 5.0938-2.7795-1e-6 -5.0312-2.2774-5.0312-5.0938-1e-6 -2.8264 2.2518-5.125 5.0312-5.125z",
                                fill: "url(#linearGradient4885)",
                              }),
                              (0, d.jsx)("path", {
                                d: "m49.14 15.733c-2.3199-1.7574-5.066-1.5917-7.1292 0.89958-1.1228 1.3763-1.5455 3.3981-0.37962 5.6209 1.7091 2.811 5.0629 3.6205 7.8981 1.1259 1.7666-1.9108 2.4511-5.2097-0.38927-7.6463z",
                                display: "none",
                                fill: "#77777f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m79.375 100.79c-2.3303-1.7735-5.1378-1.6212-7.2102 0.92971-1.1278 1.4091-1.5032 3.5061-0.33214 5.7615 1.7167 2.8505 5.0855 3.6517 7.9334 1.092 1.7745-1.9578 2.4621-5.3217-0.39101-7.7832z",
                                display: "none",
                                fill: "#77777f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m87.885 92.898-26.781-9.4e-5v-3.4062h20.854l5.9271 3.4063",
                                fill: "#5f4f16",
                              }),
                            ],
                          }),
                          (0, d.jsx)("ellipse", {
                            transform: "matrix(.94032 -.34029 0 1 802.45 81.4)",
                            cx: "-555.02",
                            cy: "10.645",
                            rx: "9.345",
                            ry: "4.2997",
                            fill: "#00000f",
                            filter: "url(#filter5495)",
                            opacity: ".99962",
                          }),
                          (0, d.jsxs)("g", {
                            className: t().nodeJsLogo,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m174.4 246.99-9.5116 11.831c-0.97702 2.0002-2.0876 9.2614-1.1604 12.925l8.4395 0.51545 1.9323-0.79666 8.88-11.311 0.14533-12.585-8.4317-0.74886c-0.39941-0.35683-0.25906 0.0259-0.29338 0.16933z",
                                display: "none",
                                fill: "#204720",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#204620",
                                children: [
                                  (0, d.jsxs)("g", {
                                    transform:
                                      "matrix(.23825 -.13755 0 -.27511 101.82 339.29)",
                                    children: [
                                      (0, d.jsx)("g", {
                                        transform: "translate(305.3 125.06)",
                                        children: (0, d.jsx)("path", {
                                          d: "m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.514 1.151 1.154 1.151h5.165c0.577 0 1.058-0.415 1.148-0.978 0.78-5.258 3.105-7.912 13.677-7.912 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 6.6444 0 22.638-12.235 25.928-14.72 3.0469-2.3015-6.3801 5.3306-5.9945 0.74835 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.524-0.369-0.846-0.369h-5.185c-0.537 0-1.012 0.382-1.121 0.903-1.244 5.533-4.269 7.301-12.476 7.301-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69",
                                          fill: "#204620",
                                        }),
                                      }),
                                      (0, d.jsx)("g", {
                                        transform: "translate(292.96 93.301)",
                                        children: (0, d.jsx)("path", {
                                          d: "m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644 0.517 1.151 1.161 1.151h5.065c0.634 0 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-5.6208 0.86724c-2.588 1.496-9.0452 9.4568-9.0452 12.452v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l39.947-23.085c2.587-1.496 15.488-11.12 14.796-13.708l-10.6-39.677c-0.69161-2.5887 2.2256-7.6487-0.36137-9.1547-15.978-6.9889-30.681-13.338-43.782-21.198-1.277-0.74-2.726-1.121-4.206-1.121",
                                          fill: "#204620",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    transform:
                                      "matrix(.23825 -.13755 0 -.27511 102.7 340.05)",
                                    children: [
                                      (0, d.jsx)("g", {
                                        transform: "translate(305.3 125.06)",
                                        children: (0, d.jsx)("path", {
                                          d: "m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.514 1.151 1.154 1.151h5.165c0.577 0 5.4027-3.3555 5.4927-3.9185 0.78-5.258-1.2397-4.9715 9.3323-4.9715 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 12.798 0 19.131-4.442 19.933-13.972 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.524-0.369-0.846-0.369h-5.185c-0.537 0-1.012 0.382-1.121 0.903-1.244 5.533-4.269 7.301-12.476 7.301-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69",
                                          fill: "#204620",
                                        }),
                                      }),
                                      (0, d.jsx)("g", {
                                        transform: "translate(292.96 93.301)",
                                        children: (0, d.jsx)("path", {
                                          d: "m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644 0.517 1.151 1.161 1.151h5.065c0.634 0 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-6.1013 2.8468c-2.588 1.496-8.5647 7.4772-8.5647 10.472v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l45.192-26.729c2.587-1.496-1.0485-0.6416-1.0485-3.6366v-46.104c0-2.995-1.609-5.782-4.196-7.288l-39.947-23.065c-1.277-0.74-2.726-1.121-4.206-1.121",
                                          fill: "#204620",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    transform:
                                      "matrix(.23825 -.13755 0 -.27511 103.74 340.29)",
                                    children: [
                                      (0, d.jsx)("g", {
                                        transform: "translate(305.3 125.06)",
                                        children: (0, d.jsx)("path", {
                                          d: "m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.47658 1.2339 1.154 1.151l4.9195-0.60216c0.61073-0.07476 4.3897-2.9975 4.4797-3.5605 0.78-5.258 0.018812-4.7274 10.591-4.7274 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 12.798 0 19.131-4.442 19.933-13.972 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.70269-0.14353-0.846-0.369l-2.0718-3.2596c-0.23899-0.37601-7.3752 5.8014-7.4842 6.3224-1.244 5.533-1.019 5.1412-9.226 5.1412-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69",
                                          fill: "#204620",
                                        }),
                                      }),
                                      (0, d.jsx)("g", {
                                        transform: "translate(292.96 93.301)",
                                        children: (0, d.jsx)("path", {
                                          d: "m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644-1.3323 8.3069-0.67138 7.6812l6.8974-6.5302c0.65061-0.61597 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-10.476 6.031c-2.588 1.496-4.19 4.293-4.19 7.288v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l39.947-23.085c2.587-1.496 4.196-4.286 4.196-7.281v-46.104c0-2.995 2.2256-7.6487-0.36137-9.1547-15.978-6.9889-30.681-13.338-43.782-21.198-1.277-0.74-2.726-1.121-4.206-1.121",
                                          fill: "#204620",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.23825 -.13755 0 -.27511 103.79 361.15)",
                                fill: "#68a063",
                                children: [
                                  (0, d.jsx)("g", {
                                    transform: "translate(309.29 196.82)",
                                    children: (0, d.jsx)("path", {
                                      d: "m0 0c-17.482 0-21.144 8.024-21.144 14.755 0 0.64 0.514 1.151 1.154 1.151h5.165c0.577 0 1.058-0.415 1.148-0.978 0.78-5.258 3.105-7.912 13.677-7.912 8.416 0 11.999 1.904 11.999 6.369 0 2.574-1.016 4.485-14.095 5.766-10.931 1.081-17.692 3.496-17.692 12.24 0 8.061 6.794 12.868 18.186 12.868 12.798 0 19.131-4.442 19.933-13.972 0.03-0.329-0.086-0.644-0.305-0.889-0.219-0.229-0.524-0.369-0.846-0.369h-5.185c-0.537 0-1.012 0.382-1.121 0.903-1.244 5.533-4.269 7.301-12.476 7.301-9.189 0-10.257-3.201-10.257-5.6 0-2.906 1.26-3.751 13.667-5.393 12.277-1.623 18.109-3.921 18.109-12.55 0-8.704-7.258-13.69-19.917-13.69",
                                      fill: "#68a063",
                                    }),
                                  }),
                                  (0, d.jsx)("g", {
                                    transform: "translate(296.95 165.06)",
                                    children: (0, d.jsx)("path", {
                                      d: "m0 0c-1.46 0-2.912 0.381-4.19 1.121l-13.338 7.892c-1.991 1.114-1.019 1.509-0.362 1.738 2.657 0.922 3.195 1.135 6.031 2.743 0.295 0.167 0.687 0.103 0.992-0.076l10.247-6.083c0.371-0.206 0.895-0.206 1.237 0l39.95 23.058c0.372 0.212 0.61 0.64 0.61 1.081v46.104c0 0.451-0.238 0.872-0.62 1.101l-39.933 23.038c-0.369 0.216-0.859 0.216-1.231 0l-39.923-23.045c-0.388-0.222-0.634-0.657-0.634-1.094v-46.104c0-0.441 0.246-0.859 0.63-1.068l10.944-6.323c5.938-2.969 9.574 0.528 9.574 4.041v45.519c0 0.644 0.517 1.151 1.161 1.151h5.065c0.634 0 1.158-0.507 1.158-1.151v-45.519c0-7.925-4.316-12.47-11.829-12.47-2.309 0-4.127 0-9.202 2.501l-10.476 6.031c-2.588 1.496-4.19 4.293-4.19 7.288v46.104c0 2.995 1.602 5.792 4.19 7.281l39.949 23.085c2.528 1.429 5.888 1.429 8.396 0l39.947-23.085c2.587-1.496 4.196-4.286 4.196-7.281v-46.104c0-2.995-1.609-5.782-4.196-7.288l-39.947-23.065c-1.277-0.74-2.726-1.121-4.206-1.121",
                                      fill: "#68a063",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            transform:
                              "matrix(.56827 -.004248 .004248 .56827 186.57 -82.858)",
                            children: [
                              (0, d.jsx)("ellipse", {
                                cx: "237.36",
                                cy: "389.12",
                                rx: "8.6333",
                                ry: "3.6493",
                                fill: "#33333f",
                                stroke: "#22222f",
                                strokeWidth: "1.168",
                              }),
                              (0, d.jsx)("path", {
                                d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z",
                                fill: "#33333f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z",
                                fill: "#22222f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z",
                                fill: "#22222f",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            transform:
                              "matrix(.36532 .029394 .051638 .37368 287.84 44.179)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z",
                                fill: "#33333f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z",
                                fill: "#22222f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z",
                                fill: "#44444f",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().staticPkg1,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#8d134d",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#ec297a",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#6a1237",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().staticPkg2,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#165dab",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#1c75db",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#092c54",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().pkg1,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#165dab",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#1c75db",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#092c54",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().pkg2,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#8d134d",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#ec297a",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#6a1237",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().pkg3,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#165dab",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#1c75db",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#092c54",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().pkg4,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#8d134d",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#ec297a",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#6a1237",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().pkg5,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#165dab",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#1c75db",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#092c54",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            className: t().pkg6,
                            "data-pausable-animation": !0,
                            children: [
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5v10l8.6603 5v-10z",
                                fill: "#8d134d",
                              }),
                              (0, d.jsx)("path", {
                                d: "m281.46 217.5 8.6603-5 8.6603 5-8.6603 5z",
                                fill: "#ec297a",
                              }),
                              (0, d.jsx)("path", {
                                d: "m298.78 217.5v10l-8.6603 5v-10z",
                                fill: "#6a1237",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            id: "012---Astronaut-with-Flag",
                            transform:
                              "matrix(.73707 0 0 .73707 300.84 171.08)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m40.41 46-0.79 9.53c-0.05497 0.67614-0.36619 1.3057-0.87 1.76-0.76423 0.69544-1.8584 0.89372-2.818 0.5107s-1.6166-1.2802-1.692-2.3107l-0.79-11.91z",
                                fill: "#e57e25",
                              }),
                              (0, d.jsx)("path", {
                                d: "m49.36 43.74-0.78 11.75c-0.12048 1.396-1.2888 2.4678-2.69 2.4678s-2.5695-1.0718-2.69-2.4678l-0.79-9.49z",
                                fill: "#e57e25",
                              }),
                              (0, d.jsx)("path", {
                                d: "m33.45 43.58 7 2.42-0.16 2c-2.337-0.05348-4.6058-0.79815-6.52-2.14-0.24-0.2-0.16 0.14-0.32-2.28z",
                                fill: "#d25627",
                              }),
                              (0, d.jsx)("path", {
                                d: "m49.36 43.74-0.14 2.11c-1.9059 1.3371-4.1627 2.0848-6.49 2.15h-0.16l-0.16-2z",
                                fill: "#d25627",
                              }),
                              (0, d.jsx)("path", {
                                d: "m52 34-0.46 6.76c-0.42799 1.1862-1.184 2.2266-2.18 3l-0.09 0.08c-5.24 4-20.82 3.29-17.92-8.58l1.65-6.26 4-4 11 1z",
                                fill: "#f29c1f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m47.75 28.43h-12.68c-0.50473-0.13933-0.99138-0.33735-1.45-0.59-2.39-1.28-2.35-3.57 0.18-4.63h15.2c2.72 1.12 2.85 4.03-1.25 5.22z",
                                fill: "#f29c1f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m46.41 33v2c0 0.55228-0.44772 1-1 1h-3c-0.55228 0-1-0.44772-1-1v-2c0-0.55228 0.44772-1 1-1h3c0.55228 0 1 0.44772 1 1z",
                                fill: "#35495e",
                              }),
                              (0, d.jsx)("path", {
                                d: "m37 27-3 6-2.65 2.24-1.21 1c-0.74086 0.63496-1.7442 0.86995-2.69 0.63-0.49-0.13 0.18 0.24-7.66-4.78-1.1762-0.96388-1.4452-2.6554-0.62593-3.9366 0.81924-1.2812 2.4675-1.7467 3.8359-1.0834l5 3.2 4.24-3.66z",
                                fill: "#f29c1f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m52 34-0.46 6.76c-0.17656 0.48981-0.41159 0.95652-0.7 1.39-0.58017-0.30651-1.0439-0.79478-1.32-1.39-0.19-0.35-0.1 0.19-0.64-7.66l0.12-5.1z",
                                fill: "#e57e25",
                              }),
                              (0, d.jsx)("path", {
                                d: "m54.57 41.94c-1.1427 0.20559-2.3036-0.25104-3-1.18-0.24-0.28-0.07 0.19-2.13-7.38l-3.44-4.38-1-3c1.9352-0.0914 3.8746 0.0091 5.79 0.3 1.05 0.15 2.49 0.81 3.62 3.07 1.236 2.9147 2.106 5.9713 2.59 9.1 0.28456 1.6287-0.80221 3.1805-2.43 3.47z",
                                fill: "#f29c1f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m50.66 24.47c-4.92 3.32-13.28 3.45-18.45-0.08 0.40466-0.53466 0.95246-0.94378 1.58-1.18h15.21c0.67031 0.23825 1.2503 0.67846 1.66 1.26z",
                                fill: "#e57e25",
                              }),
                              (0, d.jsx)("path", {
                                d: "m29 29.36v7.53c-0.50775 0.13578-1.0423 0.13578-1.55 0-0.48-0.13-0.18 0-4.45-2.7v-7.12l5 3.2z",
                                fill: "#e57e25",
                              }),
                              (0, d.jsx)("path", {
                                d: "m24 3v21.48c-0.8-5.72-6.85-7.24-12.6-6.48-7.56 1-8.4-12-8.4-12 10 3.09 15.23 2.2 18 0.61 1.4443-0.75147 2.5256-2.0525 3-3.61z",
                                fill: "#1c75db",
                              }),
                              (0, d.jsx)("path", {
                                d: "m27 2v54c0 1.1046-0.89543 2-2 2-1.1046 0-2-0.89543-2-2v-54c0-1.1046 0.89543-2 2-2 1.1046 0 2 0.89543 2 2z",
                                fill: "#547580",
                              }),
                              (0, d.jsx)("path", {
                                d: "m23 4.93v16.73c-0.50935-0.82088-1.1919-1.5205-2-2.05v-13c0.76417-0.43245 1.4421-1.0019 2-1.68z",
                                fill: "#092c54",
                              }),
                              (0, d.jsx)("path", {
                                d: "m56 13c0 7.5-6.87 12-14.5 12s-14.5-4.51-14.5-12c0-6.76 6.17-13 14.5-13s14.5 6.27 14.5 13z",
                                fill: "#d25627",
                              }),
                              (0, d.jsx)("path", {
                                d: "m56 12c-0.74 9.74-13.63 13.63-22.34 9.22-3.6928-1.6712-6.2128-5.1862-6.61-9.22 0.57-6.72 6.81-12 14.45-12s13.88 5.28 14.5 12z",
                                fill: "#e57e25",
                              }),
                              (0, d.jsx)("path", {
                                d: "m56 13.28c0 4-6.49 6.72-14.5 6.72s-14.5-2.7-14.5-6.72c0-7.23 19.06-10.09 26.81-3.85 1.2816 0.87974 2.0888 2.2988 2.19 3.85z",
                                fill: "#2c3e50",
                              }),
                              (0, d.jsx)("path", {
                                d: "m53.81 9.43c-2.13 6.48-20.18 7.27-26.58 2.57 2.33-6.55 19.57-8.21 26.58-2.57z",
                                fill: "#35495e",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#fff",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m38 11.14c-0.55228 0.027614-1.0224-0.39772-1.05-0.95-0.027614-0.55228 0.39772-1.0224 0.95-1.05 1-0.09 2-0.14 3.1-0.14 0.55228 0 1 0.44772 1 1 0 0.55228-0.44772 1-1 1-1.93 0-2.78 0.14-3 0.14z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m32 13c-0.40371 0.0024-0.76924-0.23824-0.92669-0.60999-0.15745-0.37175-0.075916-0.80171 0.20669-1.09 0.69873-0.59317 1.5124-1.0357 2.39-1.3 0.33762-0.1179 0.71248-0.046724 0.98339 0.18671 0.27091 0.23344 0.39671 0.59367 0.33 0.945s-0.31578 0.64039-0.65339 0.75829c-1.86 0.66-1.61 1.11-2.33 1.11z",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            id: "008---Astronaut",
                            transform:
                              "matrix(.65519 0 0 .65519 250.37 103.55)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m15 45s-1 6 2 7c1.3379 0.5177 2.844 0.35227 4.0377-0.44349 1.1936-0.79576 1.9256-2.1224 1.9623-3.5565z",
                                fill: "#2c3e50",
                              }),
                              (0, d.jsx)("path", {
                                d: "m35 51s-0.39 7.88-6 6.89c-5.27-0.92-3.28-7.08-3-7.81z",
                                fill: "#2c3e50",
                              }),
                              (0, d.jsx)("path", {
                                d: "m36 45c0.09494 2.0482-0.2459 4.0933-1 6-0.55096 1.5658-1.8515 2.7502-3.4618 3.1528-1.6103 0.40258-3.3152-0.030487-4.5382-1.1528-0.9-0.9-1-3.27-1-2.93-0.11338-1.6881-0.11338-3.3819 0-5.07-0.73711 1.2322-1.7678 2.2629-3 3-2 1-7 0-8-3-0.86-2.59 2.66-10.16 3.81-12.62l16.85 3.78c0.34 2.61 0.34 6.26 0.34 8.84z",
                                fill: "#35495e",
                              }),
                              (0, d.jsx)("path", {
                                d: "m35.8 37.74c-3.0428 1.102-6.3482 1.2554-9.48 0.44-3.0522-0.71881-5.8731-2.198-8.2-4.3 0.25874-0.47942 0.48914-0.9736 0.69-1.48l16.78 3.06c0.05 0.45 0.16 1.69 0.21 2.28z",
                                fill: "#2c3e50",
                              }),
                              (0, d.jsx)("path", {
                                d: "m36 28 3.41 11.8c0.4271 1.3486 1.7382 2.2155 3.1464 2.0805 1.4081-0.13503 2.5306-1.2354 2.6936-2.6405 0.39-5.62-2.91-14.78-5.12-20l-4.13-0.24z",
                                fill: "#3f5c6c",
                              }),
                              (0, d.jsx)("path", {
                                d: "m47.81 12.27c0 0.22-9.78 4.52-9.81 4.73v18c-0.60932 0.35881-1.2524 0.6569-1.92 0.89-2.6371 0.9521-5.4754 1.207-8.24 0.74-3.3228-0.4382-6.4481-1.8272-9-4-0.61882-4.1108 0.08138-8.3121 2-12 0 0-4.92-9-3.62-17.42 0.28691-1.5762 1.7309-2.6717 3.3261-2.5233s2.8125 1.4913 2.8039 3.0933c-0.14867 2.8117 0.72512 5.5823 2.46 7.8-0.01419-0.59898 0.06682-1.1964 0.24-1.77 0.23106-1.4029 0.65859-2.7663 1.27-4.05 2-4.12 6.62-6.09 11-5.71 6.08 0.52 9.86 6.31 9.49 12.22z",
                                fill: "#3f5c6c",
                              }),
                              (0, d.jsx)("path", {
                                d: "m47.58 13.8c-1.1 4.2-5.89 6.47-10.69 5.2-4-1.06-6.78-4.31-6.93-7.77-0.23-5.12 5.13-8.77 10.9-7.23 4.89 1.28 7.79 5.76 6.72 9.8z",
                                fill: "#f29c1f",
                              }),
                              (0, d.jsx)("path", {
                                d: "m45.91 7.14c0.23 5-5.1 8.76-10.91 7.21-1.9448-0.50829-3.6887-1.5965-5-3.12-0.38-7.71 10.71-10.33 15.91-4.09z",
                                fill: "#f0c419",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#35495e",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m33.44 33.59c-1.8939-0.02751-3.7814-0.22497-5.64-0.59-0.35727-0.06967-0.65023-0.32464-0.76853-0.66888-0.1183-0.34423-0.04397-0.72543 0.195-1 0.23897-0.27457 0.60626-0.40079 0.96352-0.33112 1.738 0.32645 3.5017 0.49712 5.27 0.51 0.55228 0 1 0.44772 1 1s-0.44772 1-1 1z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m24 31.78c-0.8646-0.25383-1.6564-0.70971-2.31-1.33-0.3866-0.39764-0.37764-1.0334 0.02-1.42s1.0334-0.37764 1.42 0.02c0.39462 0.33803 0.8358 0.61756 1.31 0.83 0.42022 0.20351 0.64368 0.67074 0.53835 1.1256-0.10534 0.45488-0.51144 0.77631-0.97835 0.77438z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m37.78 23.47c-9.62-0.53-11.45-7.18-11.53-7.47-0.13807-0.53572 0.18428-1.0819 0.72-1.22s1.0819 0.18428 1.22 0.72c0.06 0.24 1.61 5.53 9.7 6 0.55228 0.03038 0.97538 0.50272 0.945 1.055-0.03038 0.55228-0.50272 0.97538-1.055 0.945z",
                                  }),
                                ],
                              }),
                              (0, d.jsx)("path", {
                                d: "m30.24 24.34 2 0.5c0.45718 0.11282 0.77371 0.5293 0.76 1v1.94c0.0092 0.31257-0.1284 0.61144-0.37182 0.80775-0.24342 0.1963-0.56465 0.26744-0.86818 0.19225l-2-0.5c-0.45718-0.11282-0.77371-0.5293-0.76-1v-1.97c2.37e-4 -0.30734 0.14179-0.5975 0.38386-0.78687 0.24207-0.18936 0.55778-0.2569 0.85614-0.18313z",
                                fill: "#f0c419",
                              }),
                              (0, d.jsx)("path", {
                                d: "m34 12c-0.55228 0-1-0.44772-1-1 0-3.95 3.92-5 6-5 0.55228 0 1 0.44772 1 1 0 0.55228-0.44772 1-1 1-0.18 0-4 0.07-4 3 0 0.55228-0.44772 1-1 1z",
                                fill: "#f9eab0",
                              }),
                              (0, d.jsx)("path", {
                                d: "m38 35c-0.60932 0.35881-1.2524 0.6569-1.92 0.89l-0.08-7.82c2.11 7.27 2 6.83 2 6.93z",
                                fill: "#35495e",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            children: [
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.54887 -.0071931 .0071931 .54887 115.06 88.05)",
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    cx: "237.36",
                                    cy: "389.12",
                                    rx: "8.6333",
                                    ry: "3.6493",
                                    fill: "#33333f",
                                    stroke: "#22222f",
                                    strokeWidth: "1.168",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z",
                                    fill: "#22222f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.69918 -.0052266 .0052266 .69918 170.01 -60.336)",
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    cx: "237.36",
                                    cy: "389.12",
                                    rx: "8.6333",
                                    ry: "3.6493",
                                    fill: "#33333f",
                                    stroke: "#44444f",
                                    strokeWidth: "1.168",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.33393 0 0 .33393 222.93 38.564)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m96.841 295.5 25.994 0.396 1.7256 10.413-4.4564 4.4515-23.228-0.26327-5.7635-12.953z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m91.112 297.54 6.6627-6.6411 5.9153-2.8037 5.8954 1.5897 20.964 1.42-7.7141 4.787-25.994-0.396z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m130.55 291.11 0.48167 8.6524-1.2504 2.9371-5.2198 3.6108-1.7256-10.413z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.68176 0 0 .68176 196.3 -38.754)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.33393 0 0 .33393 212.4 34.236)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m96.841 295.5 25.994 0.396 1.7256 10.413-4.4564 4.4515-23.228-0.26327-5.7635-12.953z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m91.112 297.54 6.6627-6.6411 5.9153-2.8037 5.8954 1.5897 20.964 1.42-7.7141 4.787-25.994-0.396z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m130.55 291.11 0.48167 8.6524-1.2504 2.9371-5.2198 3.6108-1.7256-10.413z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(1.1019 0 0 1.1019 72.192 -35.317)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m151.3 312.47 0.70384-1.0843-0.0955-1.5895z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.68899 .27768 -.27768 .68899 224.53 51.421)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m151.3 312.47 0.70384-1.0843-0.0955-1.5895z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(1.0907 .21424 -.15652 1.0824 50.22 -166.99)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m151.3 312.47 0.70384-1.0843-0.0955-1.5895z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.39846 .032061 .056323 .40759 243.06 117.17)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z",
                                    fill: "#55555f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z",
                                    fill: "#33333f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.81455 -.0073489 -.0032203 .7979 167.89 -17.539)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z",
                                    fill: "#55555f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m151.3 312.47 0.70384-1.0843-0.0955-1.5895z",
                                    fill: "#33333f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.27459 .022094 .038813 .28087 290.48 144.39)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z",
                                    fill: "#55555f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z",
                                    fill: "#33333f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(1.0357 -.40856 .38692 1.0196 44.09 -38.124)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53-0.0978 2.328 5.021-0.38888 0.26319-1.0754z",
                                    fill: "#44444f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m146.38 310.53 2.8356-0.69096 2.6959-0.0437-0.34511 1.5985z",
                                    fill: "#55555f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m151.3 312.47 0.70384-1.0843-0.0955-1.5895z",
                                    fill: "#33333f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.56226 .087376 -.082561 .56155 384.46 -68.96)",
                                children: [
                                  (0, d.jsx)("ellipse", {
                                    cx: "237.36",
                                    cy: "389.12",
                                    rx: "8.6333",
                                    ry: "3.6493",
                                    fill: "#33333f",
                                    stroke: "#22222f",
                                    strokeWidth: "1.168",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c-3.2054-0.58491-6.6158-1.0619-9.2714-2.1591-1.0764-0.44472-2.6284-1.1727-2.4924-2.4163 0.2212-0.24416 0.38781-0.45489 0.61699-0.68479 0.15621-0.15671 0.57563-0.25809 0.7359-0.4075 0.21083-0.19652 0.44993-0.1731 0.66841-0.35595 1.9752-1.6531 4.2772-2.7226 7.1576-2.7587l2.7312-1.9651 1.9745-2.3016 0.92117-2.3978c0.62682 0.86414 1.3599 1.7186 2.2012 2.14z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m233.77 392.95-3.3113 7.3785-5.1606 4.8956c9.118 0.71331 19.438 1.12 27.493-0.0776 1.8735-0.27856 3.9585-0.56911 5.7701-0.99221 4.5316-1.0583 8.2481-2.1982 5.8977-4.3216l-10.867-4.3368-3.1107-2.8522-4.201-4.6403c0.9578 5.1734-8.9131 5.3117-12.51 4.9466z",
                                    fill: "#22222f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m241.15 386.43c0.7513 2.1409 0.42072 3.757 0.0999 5.3778 7.3139-1.9732 3.5209-4.6745-0.0999-5.3778z",
                                    fill: "#22222f",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                transform:
                                  "matrix(.36211 .056532 .023652 .37649 437.49 71.142)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 4.5462 9.5256 13.375 0.14209 3.6147-10.484z",
                                    fill: "#22222f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m70.755 258.42 0.57518-3.2422 10.639-2.8808 15.91 0.94907-5.5887 4.3572z",
                                    fill: "#33333f",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m97.879 253.25-3.5608 6.9679-0.04903 5.3521-5.5935 2.5217 3.6147-10.484z",
                                    fill: "#33333f",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            id: "006---Astronaut",
                            transform:
                              "matrix(-.74332 .099242 0 .74332 166.76 143.39)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m22.35 43.68c0.65 1.52 2 4.87 2 7.11-0.08294 1.5645-0.54634 3.0851-1.35 4.43-0.72 1.3 0.35 2.79 2 2.79 0.66595 0.01395 1.3075-0.25065 1.77-0.73l5.34-3.39-0.55-10.89z",
                                fill: "#35495e",
                              }),
                              (0, d.jsx)("path", {
                                d: "m29.89 33.67 2.33-16.34 8.78 0.67 3.8 3.8c0.74584 0.74518 1.0458 1.8272 0.79 2.85l-4.9 19.57c-0.38574 1.5519-1.9209 2.5284-3.49 2.22l-2.2-0.44z",
                                fill: "#35495e",
                              }),
                              (0, d.jsx)("path", {
                                d: "m37.22 26.77c-14.6 0.24 0.8 0-13.22 0.23-0.807-0.098429-1.5344-0.5345-2.0015-1.1999-0.46711-0.66539-0.6301-1.4977-0.4485-2.2901 0.076066-0.52247 0.22765-1.0311 0.45-1.51l15 1c0.44924 0.16129 0.83716 0.45835 1.11 0.85 0.37 0.6 0.41 1.53-0.89 2.92z",
                                fill: "#3f5c6c",
                              }),
                              (0, d.jsx)("path", {
                                d: "m19.81 39.27-1.3 1.73c-0.53685 0.74386-1.4417 1.1289-2.35 1-0.88427-0.11848-1.6392-0.69744-1.9829-1.5207-0.34373-0.8233-0.2246-1.7672 0.31292-2.4793 7.39-10 5.11-7 8.23-11z",
                                fill: "#35495e",
                              }),
                              (0, d.jsx)("path", {
                                d: "m23 26s-5 7-3 14 9 5.17 9 5.17l1 7.77c0.05648 0.53355-0.12666 1.0647-0.5 1.45-1.55 1.65-0.93 0.87-1.46 1.82-0.23623 0.42597-0.28757 0.93013-0.14207 1.395 0.1455 0.46484 0.47514 0.84976 0.91207 1.065 0.97559 0.55944 2.2051 0.39551 3-0.4l2.7-2.9c0.37216-0.38561 0.55196-0.91768 0.49-1.45v-8.06s0-5.93 2-10.08c-3-5.54 1.62 3 4.64 8.63 0.56003 0.92704 1.7136 1.3055 2.7139 0.89033 1.0003-0.41514 1.547-1.4992 1.2861-2.5503-1-3.47-4-13.12-5.63-14.75-1.0708-1.0065-2.5508-1.4542-4-1.21z",
                                fill: "#3f5c6c",
                              }),
                              (0, d.jsx)("path", {
                                d: "m28 31c1.2527 0.59848 2.6131 0.93858 4 1v2.93c0.04423 0.99405-0.60883 1.8851-1.5701 2.1422-0.96124 0.25713-1.972-0.18886-2.4299-1.0722z",
                                fill: "#35495e",
                              }),
                              (0, d.jsx)("path", {
                                d: "m42 13c0 6.6274-5.3726 12-12 12s-12-5.3726-12-12 5.3726-12 12-12 12 5.3726 12 12z",
                                fill: "#2c3e50",
                              }),
                              (0, d.jsx)("path", {
                                d: "m29 23c-4.1389 0.001389-7.9864-2.1302-10.18-5.64-2.2624-5.7742 0.24769-12.321 5.7904-15.103 5.5427-2.7817 12.292-0.88185 15.57 4.3828 1.4401 3.6926 0.9639 7.8582-1.2724 11.131-2.2363 3.2724-5.9441 5.2295-9.9076 5.2294z",
                                fill: "#35495e",
                              }),
                              (0, d.jsx)("path", {
                                d: "m23.36 23c-2.6586-1.7606-4.5072-4.5069-5.1376-7.6327s0.009181-6.3739 1.7776-9.0273c3.061-1.7982 6.8239-1.9261 10-0.34 5 2.52 6.56 5.75 6.91 6.72 0.03833 0.09045 0.06845 0.18416 0.09 0.28 0 0 1 9.84-13.64 10z",
                                fill: "#f29c1f",
                              }),
                              (0, d.jsx)("g", {
                                fill: "#f0c419",
                                children: (0, d.jsx)("path", {
                                  d: "m36.91 12.72c-2.6766 2.4665-6.3279 3.5849-9.9267 3.0405s-6.756-2.6927-8.5833-5.8405c0.32868-1.2747 0.86957-2.4849 1.6-3.58 3.061-1.7982 6.8239-1.9261 10-0.34 5.05 2.52 6.56 5.75 6.91 6.72z",
                                }),
                              }),
                              (0, d.jsx)("path", {
                                d: "m31 12c-0.51 0-0.57-0.27-1.48-0.76-0.48601-0.27614-0.65614-0.89399-0.38-1.38 0.27614-0.48601 0.89399-0.65614 1.38-0.38 0.38946 0.21393 0.76369 0.4545 1.12 0.72 0.35099 0.26247 0.49017 0.72291 0.34334 1.1359-0.14683 0.41295-0.54544 0.68217-0.98334 0.66414z",
                                fill: "#f9eab0",
                              }),
                              (0, d.jsx)("path", {
                                d: "m22 11c-0.4806 0.0012-0.89407-0.3397-0.98456-0.81172-0.090489-0.47201 0.1676-0.94164 0.61456-1.1183 1.4029-0.49552 2.8823-0.73927 4.37-0.72 0.55228 0 1 0.44772 1 1 0 0.55228-0.44772 1-1 1-1.3585 0.0131-2.7072 0.23226-4 0.65z",
                                fill: "#f9eab0",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            transform:
                              "matrix(.028474 0 0 .028474 128.58 53.221)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m483.24 158c0-38.129-30.906-69.035-69.023-69.047-18.316 0-35.879 7.2695-48.828 20.23l-217.46 216.47 98.617 98.621 216.47-217.46c12.969-12.941 20.238-30.504 20.219-48.816z",
                                fill: "#cfd7de",
                              }),
                              (0, d.jsx)("path", {
                                d: "m483.24 158c0 38.125-30.906 69.035-69.035 69.035-38.125 0-69.035-30.91-69.035-69.035 0-38.129 30.91-69.035 69.035-69.035 38.129 0 69.035 30.906 69.035 69.035z",
                                fill: "#c2c7cf",
                              }),
                              (0, d.jsx)("path", {
                                d: "m0 88.969 88.758-88.758 157.79 157.79-88.758 88.758z",
                                fill: "#288fde",
                              }),
                              (0, d.jsx)("path", {
                                d: "m133.13 399.62 44.379-44.379 39.449 39.449-44.379 44.379z",
                                fill: "#c2c7cf",
                              }),
                              (0, d.jsx)("path", {
                                d: "m147.93 572.21-147.93-147.93 14.793-14.793c40.848-40.848 107.08-40.848 147.93 0 40.848 40.848 40.848 107.08 0 147.93z",
                                fill: "#cfd7de",
                              }),
                              (0, d.jsx)("path", {
                                d: "m166.6 409.48c-0.64062-0.64062-1.3398-1.1836-1.9726-1.8047 7.918 40.918-5.0195 83.098-34.516 112.54l-15.148 15.148 36.844 36.844 14.793-14.793c40.848-40.836 40.859-107.06 0.0195-147.91 0 0-8e-3 -0.0117-0.0195-0.0195z",
                                fill: "#c2c7cf",
                              }),
                              (0, d.jsx)("path", {
                                d: "m325.44 414.41 88.758-88.758 157.79 157.79-88.758 88.758z",
                                fill: "#288fde",
                              }),
                              (0, d.jsx)("path", {
                                d: "m355.04 444 128.21 128.21 88.758-88.758-39.449-39.449z",
                                fill: "#2178b8",
                              }),
                              (0, d.jsx)("path", {
                                d: "m39.449 128.42 118.35 118.34 88.758-88.758-29.586-29.586z",
                                fill: "#2178b8",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#c2c7cf",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m176.67 162.93 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.941-13.941-37.406 37.406-32.477-32.477-13.945 13.945 32.477 32.473-37.406 37.41 13.941 13.941 37.41-37.406 25.5 25.504-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.945 13.945 37.406-37.406 66.992 66.992 13.945-13.945z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m502.12 488.38 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.5 37.41-37.41-13.945-13.941-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-66.992-66.992-13.945 13.945 66.992 66.992-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.941 13.945 37.41-37.406 25.5 25.5-37.406 37.41 13.945 13.941 37.406-37.406 32.477 32.477 13.945-13.945z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m228.48 406.2 18.078 18.078 216.47-217.46-17.582-17.586z",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#a6b0bd",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m414.21 197.45c-21.785 0-39.445-17.66-39.445-39.445 0-21.785 17.66-39.449 39.445-39.449s39.449 17.664 39.449 39.449c0 21.785-17.664 39.445-39.449 39.445zm0-59.172c-10.898 0-19.723 8.8281-19.723 19.723 0 10.898 8.8242 19.727 19.723 19.727s19.727-8.8281 19.727-19.727c0-10.895-8.8281-19.723-19.727-19.723z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m348.06 322.77 13.945-13.941-98.621-98.621-13.945 13.945 17.684 17.684-25.504 25.5-17.68-17.68-13.945 13.941 98.617 98.621 13.945-13.945-17.68-17.684 25.5-25.5zm-66.992-66.992 10.711 10.711-25.504 25.504-10.711-10.711zm9.8633 60.871-10.711-10.711 25.504-25.504 10.711 10.711z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m170.54 303.05 13.945-13.945 98.617 98.617-13.945 13.945z",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsx)("ellipse", {
                            transform:
                              "matrix(.72425 .91288 -.8507 .76773 9.4408 3.2839)",
                            cx: "58.105",
                            cy: "-15.247",
                            rx: "32.592",
                            ry: "38.341",
                            fill: "url(#linearGradient8698)",
                            filter: "url(#filter8900)",
                          }),
                          (0, d.jsxs)("g", {
                            transform:
                              "matrix(.043841 .011747 -.011747 .043841 466.72 4.7904)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m572.21 286.21c0 158.02-128.09 286.11-286.11 286.11-158.02 0-286.11-128.09-286.11-286.11 0-158.01 128.09-286.11 286.11-286.11 158.01 0 286.11 128.09 286.11 286.11z",
                                fill: "#f04528",
                              }),
                              (0, d.jsx)("path", {
                                d: "m463.63 61.93c0 0.76953 0.0586 1.5273 0.0586 2.2969-0.01954 215.86-156.95 399.7-370.13 433.61 116.48 106.77 297.46 98.895 404.23-17.582 106.77-116.48 98.902-297.47-17.582-404.24-5.3477-4.9062-10.883-9.6016-16.586-14.078z",
                                fill: "#dc3519",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#c23017",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m381.07 434.2c-32.695 0-59.195-26.5-59.195-59.195s26.5-59.195 59.195-59.195c32.695 0 59.195 26.5 59.195 59.195-0.0312 32.676-26.52 59.156-59.195 59.195zm0-98.656c-21.793 0-39.461 17.668-39.461 39.461s17.668 39.465 39.461 39.465c21.793 0 39.465-17.672 39.465-39.465s-17.672-39.461-39.465-39.461z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m187.45 197.41c-21.793 0-39.461-17.668-39.461-39.461 0-21.793 17.668-39.465 39.461-39.465s39.465 17.672 39.465 39.465c0 21.793-17.672 39.461-39.465 39.461zm0-59.191c-10.902 0-19.73 8.8281-19.73 19.73 0 10.898 8.832 19.73 19.73 19.73 10.902 0 19.734-8.8281 19.734-19.73 0-10.902-8.832-19.73-19.734-19.73z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m556.25 236.05c-16.961-6.3242-32.805-15.324-46.934-26.637-33.711-26.875-75.52-41.539-118.63-41.598h-1.9766c-43.121 0.0586-84.953 14.73-118.66 41.625-30.191 24.094-67.648 37.242-106.27 37.301h-161c-0.89844 6.5117-1.5781 13.094-2.0234 19.734h163.02c43.121-0.0586 84.953-14.73 118.66-41.625 30.191-24.094 67.648-37.242 106.28-37.305h1.9727c38.645 0.0508 76.125 13.203 106.33 37.305 15.777 12.617 33.457 22.641 52.391 29.688 6.9844 2.5352 14.227 4.3203 21.586 5.3164-0.66406-6.8945-1.5312-13.723-2.625-20.473-4.1172-0.79687-8.1719-1.9141-12.117-3.332z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m58.031 126.76c19.465-1.6484 38.496-6.6914 56.234-14.887l17.168-8.5742c38.484-18.844 83.523-18.844 122.01 0l17.145 8.5742c21.676 10.801 45.562 16.445 69.781 16.484h184.34c-4.5078-6.7969-9.3047-13.367-14.367-19.73h-169.98c-21.172-0.0312-42.059-4.9531-61.012-14.406l-17.145-8.5742c-44.051-21.574-95.602-21.574-139.65 0l-17.164 8.5742c-13.145 6.1289-27.16 10.145-41.555 11.898-5.4062 6.6602-10.547 13.555-15.344 20.719h8.5352c0.33594-0.0117 0.66797-0.0391 0.99609-0.0781z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m449.97 304.48c-38.277-37.52-99.523-37.52-137.8 0-18.922 19.383-44.723 30.543-71.805 31.055h-236.04c1.1641 6.6602 2.5156 13.242 4.125 19.73h231.91c32.254-0.5 63.004-13.684 85.617-36.691 30.594-30.008 79.586-30.008 110.18 0 22.613 23.008 53.363 36.188 85.617 36.691h41.996c1.6094-6.4883 2.9609-13.07 4.125-19.73h-46.125c-27.078-0.51954-52.879-11.68-71.801-31.055z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m436.16 431.42c-30.594 30.012-79.586 30.012-110.18 0-22.613-23.008-53.363-36.188-85.617-36.691h-219c2.7617 6.7109 5.7734 13.289 9.0156 19.73h209.98c27.082 0.51562 52.883 11.672 71.805 31.059 38.277 37.52 99.523 37.52 137.8 0 18.922-19.375 44.723-30.535 71.805-31.059h20.066c3.2461-6.4414 6.2539-13.02 9.0156-19.73h-29.082c-32.254 0.5039-63.004 13.684-85.617 36.691z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m335.44 532.85c0-27.621-30.336-49.328-69.059-49.328-38.727 0-69.062 21.707-69.062 49.328 0.22656 11.168 5.0117 21.766 13.25 29.312 24.613 6.7383 50.02 10.152 75.543 10.152 8.1289 0 16.148-0.42188 24.102-1.0859 14.738-7.2812 24.387-21.961 25.227-38.379zm-69.059 29.598c-26.738 0-49.332-13.555-49.332-29.598 0-16.039 22.594-29.598 49.332-29.598 26.734 0 49.328 13.559 49.328 29.598 0 16.043-22.594 29.598-49.328 29.598z",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsx)("ellipse", {
                            transform:
                              "matrix(-.08239 .41042 -.40792 -.055247 475.34 -8.3621)",
                            cx: "58.105",
                            cy: "-15.247",
                            rx: "32.592",
                            ry: "38.341",
                            fill: "url(#linearGradient8698)",
                            filter: "url(#filter8900-5)",
                          }),
                          (0, d.jsxs)("g", {
                            transform:
                              "matrix(.019244 0 0 .019244 517.77 41.465)",
                            children: [
                              (0, d.jsx)("path", {
                                d: "m483.24 158c0-38.129-30.906-69.035-69.023-69.047-18.316 0-35.879 7.2695-48.828 20.23l-217.46 216.47 98.617 98.621 216.47-217.46c12.969-12.941 20.238-30.504 20.219-48.816z",
                                fill: "#cfd7de",
                              }),
                              (0, d.jsx)("path", {
                                d: "m483.24 158c0 38.125-30.906 69.035-69.035 69.035-38.125 0-69.035-30.91-69.035-69.035 0-38.129 30.91-69.035 69.035-69.035 38.129 0 69.035 30.906 69.035 69.035z",
                                fill: "#c2c7cf",
                              }),
                              (0, d.jsx)("path", {
                                d: "m0 88.969 88.758-88.758 157.79 157.79-88.758 88.758z",
                                fill: "#288fde",
                              }),
                              (0, d.jsx)("path", {
                                d: "m133.13 399.62 44.379-44.379 39.449 39.449-44.379 44.379z",
                                fill: "#c2c7cf",
                              }),
                              (0, d.jsx)("path", {
                                d: "m147.93 572.21-147.93-147.93 14.793-14.793c40.848-40.848 107.08-40.848 147.93 0 40.848 40.848 40.848 107.08 0 147.93z",
                                fill: "#cfd7de",
                              }),
                              (0, d.jsx)("path", {
                                d: "m166.6 409.48c-0.64062-0.64062-1.3398-1.1836-1.9726-1.8047 7.918 40.918-5.0195 83.098-34.516 112.54l-15.148 15.148 36.844 36.844 14.793-14.793c40.848-40.836 40.859-107.06 0.0195-147.91 0 0-8e-3 -0.0117-0.0195-0.0195z",
                                fill: "#c2c7cf",
                              }),
                              (0, d.jsx)("path", {
                                d: "m325.44 414.41 88.758-88.758 157.79 157.79-88.758 88.758z",
                                fill: "#288fde",
                              }),
                              (0, d.jsx)("path", {
                                d: "m355.04 444 128.21 128.21 88.758-88.758-39.449-39.449z",
                                fill: "#2178b8",
                              }),
                              (0, d.jsx)("path", {
                                d: "m39.449 128.42 118.35 118.34 88.758-88.758-29.586-29.586z",
                                fill: "#2178b8",
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#c2c7cf",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m176.67 162.93 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.504 37.406-37.406-13.941-13.941-37.406 37.406-32.477-32.477-13.945 13.945 32.477 32.473-37.406 37.41 13.941 13.941 37.41-37.406 25.5 25.504-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.945 13.945 37.406-37.406 66.992 66.992 13.945-13.945z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m502.12 488.38 37.406-37.406-13.945-13.945-37.406 37.406-25.504-25.5 37.41-37.41-13.945-13.941-37.406 37.406-25.504-25.504 37.406-37.406-13.945-13.945-37.406 37.406-66.992-66.992-13.945 13.945 66.992 66.992-37.406 37.406 13.945 13.945 37.406-37.406 25.504 25.504-37.406 37.406 13.941 13.945 37.41-37.406 25.5 25.5-37.406 37.41 13.945 13.941 37.406-37.406 32.477 32.477 13.945-13.945z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m228.48 406.2 18.078 18.078 216.47-217.46-17.582-17.586z",
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("g", {
                                fill: "#a6b0bd",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "m414.21 197.45c-21.785 0-39.445-17.66-39.445-39.445 0-21.785 17.66-39.449 39.445-39.449s39.449 17.664 39.449 39.449c0 21.785-17.664 39.445-39.449 39.445zm0-59.172c-10.898 0-19.723 8.8281-19.723 19.723 0 10.898 8.8242 19.727 19.723 19.727s19.727-8.8281 19.727-19.727c0-10.895-8.8281-19.723-19.727-19.723z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m348.06 322.77 13.945-13.941-98.621-98.621-13.945 13.945 17.684 17.684-25.504 25.5-17.68-17.68-13.945 13.941 98.617 98.621 13.945-13.945-17.68-17.684 25.5-25.5zm-66.992-66.992 10.711 10.711-25.504 25.504-10.711-10.711zm9.8633 60.871-10.711-10.711 25.504-25.504 10.711 10.711z",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "m170.54 303.05 13.945-13.945 98.617 98.617-13.945 13.945z",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, d.jsxs)("g", {
                            fill: "#fff",
                            children: [
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 3.5041 7.3897)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 -63.87 -15.134)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 287.02 79.036)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-5)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 189.41 -18.709)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-4)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 345.93 44.737)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-43)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 210.78 16.638)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-8)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 122.32 -11.96)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-84)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 -49.628 69.346)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-49)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 -191.98 87.141)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-89)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 70.792 -1.8071)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-9)",
                              }),
                              (0, d.jsx)("ellipse", {
                                transform:
                                  "matrix(.98338 0 0 .77423 19.317 42.829)",
                                cx: "219.8",
                                cy: "34.262",
                                rx: ".68438",
                                ry: "1.1073",
                                filter: "url(#filter9310-3-7)",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, d.jsxs)("svg", {
                  className: "backbone ".concat(t().backbone),
                  viewBox: "0 0 749 177",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, d.jsx)("g", {
                      filter: "url(#filter0_d_43_11)",
                      children: (0, d.jsx)("path", {
                        d: "M375 11.5V101M375 101H45C27.3269 101 13 115.327 13 133V165.5M375 101H704C721.673 101 736 115.327 736 133V165.5",
                        stroke: "#B173FF",
                        strokeWidth: "1.5",
                      }),
                    }),
                    (0, d.jsx)("defs", {
                      children: (0, d.jsxs)("filter", {
                        id: "filter0_d_43_11",
                        x: "0.5",
                        y: "0.5",
                        width: "748",
                        height: "176",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                          (0, d.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                          }),
                          (0, d.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                          }),
                          (0, d.jsx)("feOffset", {}),
                          (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                          (0, d.jsx)("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                          }),
                          (0, d.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_43_11",
                          }),
                          (0, d.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_43_11",
                            result: "shape",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        w = c(7390),
        x = c.n(w),
        y = function () {
          return (0, d.jsxs)("div", {
            className: x().container,
            children: [
              (0, d.jsxs)("div", {
                className: x().horizContainer,
                children: [
                  (0, d.jsxs)("div", {
                    className: x().openSource,
                    children: [
                      (0, d.jsx)("h2", { children: "Open source" }),
                      (0, d.jsxs)("p", {
                        children: [
                          "Under MIT license which is the most permissive license in the ",
                          (0, d.jsx)("strong", { children: "open-source" }),
                          " world, we want Orion be able to grow as much as possible with the least of restriction.",
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: ""
                          .concat(x().animationContainer, " ")
                          .concat(x().openSourceAnimation),
                        "data-pausable-animation": !0,
                        children: [
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to21),
                            style: { transform: "translate3d(60px, 220px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to21),
                            style: { transform: "translate3d(80px, 240px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to22),
                            style: { transform: "translate3d(60px, 220px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to22),
                            style: { transform: "translate3d(80px, 240px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to23),
                            style: { transform: "translate3d(60px, 220px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to23),
                            style: { transform: "translate3d(80px, 240px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to24),
                            style: { transform: "translate3d(60px, 220px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to24),
                            style: { transform: "translate3d(80px, 240px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to25),
                            style: { transform: "translate3d(60px, 220px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to25),
                            style: { transform: "translate3d(80px, 240px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to26),
                            style: { transform: "translate3d(60px, 220px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText1to26),
                            style: { transform: "translate3d(80px, 240px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to31),
                            style: {
                              transform: "translate3d(260px, 170px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to31),
                            style: {
                              transform: "translate3d(270px, 190px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to32),
                            style: {
                              transform: "translate3d(260px, 170px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to32),
                            style: {
                              transform: "translate3d(270px, 190px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to33),
                            style: {
                              transform: "translate3d(260px, 170px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to33),
                            style: {
                              transform: "translate3d(270px, 190px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to34),
                            style: {
                              transform: "translate3d(260px, 170px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to34),
                            style: {
                              transform: "translate3d(270px, 190px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to35),
                            style: {
                              transform: "translate3d(260px, 170px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to35),
                            style: {
                              transform: "translate3d(270px, 190px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to36),
                            style: {
                              transform: "translate3d(260px, 170px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText2to36),
                            style: {
                              transform: "translate3d(270px, 190px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop1),
                            style: { transform: "translate3d(80px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop1),
                            style: { transform: "translate3d(90px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop2),
                            style: { transform: "translate3d(80px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop2),
                            style: { transform: "translate3d(90px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop3),
                            style: { transform: "translate3d(80px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop3),
                            style: { transform: "translate3d(90px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop4),
                            style: { transform: "translate3d(80px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop4),
                            style: { transform: "translate3d(90px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop5),
                            style: { transform: "translate3d(80px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop5),
                            style: { transform: "translate3d(90px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop6),
                            style: { transform: "translate3d(80px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop6),
                            style: { transform: "translate3d(90px, 150px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop1),
                            style: { transform: "translate3d(150px, 70px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop1),
                            style: { transform: "translate3d(170px, 80px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop2),
                            style: { transform: "translate3d(180px, 70px, 0)" },
                            "data-pausable-animation": !0,
                            children: "1",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop2),
                            style: { transform: "translate3d(200px, 80px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop3),
                            style: { transform: "translate3d(220px, 70px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop3),
                            style: { transform: "translate3d(240px, 80px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop4),
                            style: { transform: "translate3d(150px, 90px, 0)" },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsx)("span", {
                            className: ""
                              .concat(x().osText, " ")
                              .concat(x().osText3toTop4),
                            style: {
                              transform: "translate3d(170px, 100px, 0)",
                            },
                            "data-pausable-animation": !0,
                            children: "0",
                          }),
                          (0, d.jsxs)("svg", {
                            viewBox: "0 0 741 763",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, d.jsxs)("g", {
                                mask: "url(#mask0_451:2)",
                                children: [
                                  (0, d.jsx)("path", {
                                    d: "M174.604 492.151C173.414 496.799 171.027 507.007 172.02 513.433C172.951 517.884 174.955 522.04 177.857 525.542C180.498 528.952 178.09 533.7 173.356 534.432C171.452 534.767 169.495 534.293 167.955 533.123L151.134 525.766L147.884 494.284L174.604 492.151Z",
                                    fill: "#35495E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M148.537 466.78L134.609 420.941L109.72 426.755L100.504 439.341C98.6952 441.809 98.3146 445.046 99.5018 447.866L122.235 501.831C124.029 506.112 128.866 508.232 133.23 506.652L139.346 504.414L148.537 466.78Z",
                                    fill: "#35495E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M124.451 450.236C166.439 444.451 122.157 450.591 162.476 445.035C164.747 444.395 166.64 442.821 167.685 440.705C168.73 438.589 168.828 436.13 167.956 433.937C167.506 432.472 166.846 431.08 165.996 429.805L123.411 439.324C122.194 439.986 121.213 441.01 120.604 442.255C119.808 444.14 120.106 446.826 124.451 450.236Z",
                                    fill: "#3F5C6C",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M179.935 478.374L184.431 482.76C186.301 484.656 189.068 485.36 191.616 484.587C194.1 483.855 196.009 481.86 196.63 479.346C197.251 476.831 196.49 474.177 194.633 472.372C169 446.964 176.871 454.558 166.147 444.467L179.935 478.374Z",
                                    fill: "#35495E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M164.901 441.723C164.901 441.723 182.347 459.586 179.714 480.552C177.08 501.519 156.189 499.373 156.189 499.373L156.766 522.105C156.84 523.661 157.601 525.103 158.843 526.043C164.021 530.089 161.896 528.126 163.838 530.616C164.704 531.733 165.075 533.157 164.864 534.555C164.653 535.953 163.878 537.203 162.72 538.014C160.169 540.052 156.57 540.127 153.937 538.197L144.906 531.075C143.668 530.134 142.916 528.688 142.858 527.133L139.284 504.013C139.284 504.013 136.655 487.002 129.077 475.985C135.227 458.763 125.761 485.309 119.594 502.798C118.398 505.705 115.257 507.302 112.204 506.555C109.15 505.807 107.101 502.94 107.384 499.809C108.714 489.412 113.041 460.4 116.994 455.002C119.619 451.64 123.666 449.699 127.931 449.757L164.901 441.723Z",
                                    fill: "#3F5C6C",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M152.775 458.283C149.447 460.555 145.695 462.134 141.744 462.925L143.043 471.33C143.357 474.201 145.626 476.467 148.497 476.779C151.368 477.09 154.07 475.362 154.992 472.625L152.775 458.283Z",
                                    fill: "#35495E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M104.634 412.856C107.573 431.867 125.367 444.897 144.378 441.958C163.389 439.02 176.418 421.226 173.48 402.215C170.541 383.204 152.747 370.175 133.736 373.113C114.725 376.052 101.696 393.845 104.634 412.856Z",
                                    fill: "#2C3E50",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M146.359 435.778C158.233 433.946 168.324 426.126 173.06 415.085C176.99 397.519 166.887 379.852 149.754 374.33C132.621 368.808 114.103 377.25 107.035 393.805C104.542 405.036 107.754 416.774 115.62 425.17C123.486 433.565 134.99 437.535 146.359 435.778Z",
                                    fill: "#35495E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M162.538 433.277C169.384 427.048 173.469 418.35 173.891 409.104C174.314 399.858 171.039 390.825 164.789 383.997C155.211 380.196 144.361 381.498 135.953 387.456C122.728 396.901 119.685 406.859 119.111 409.796C119.041 410.073 118.996 410.355 118.977 410.639C118.977 410.639 120.472 439.309 162.538 433.277Z",
                                    fill: "#F29C1F",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M135.745 405.11C137.208 404.884 137.26 404.083 139.654 402.274C140.925 401.266 141.139 399.419 140.132 398.147C139.124 396.875 137.276 396.661 136.005 397.669C134.982 398.455 134.015 399.311 133.111 400.231C132.221 401.139 132.026 402.522 132.63 403.641C133.234 404.761 134.497 405.356 135.745 405.11Z",
                                    fill: "#F9EAB0",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M161.119 398.251C162.498 398.042 163.533 396.88 163.583 395.486C163.633 394.092 162.685 392.86 161.324 392.551C157.08 391.752 152.728 391.708 148.469 392.423C146.885 392.668 145.799 394.151 146.044 395.735C146.289 397.319 147.772 398.405 149.356 398.16C153.259 397.596 157.225 397.626 161.119 398.251Z",
                                    fill: "#F9EAB0",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M26.1255 739.943C17.5364 689.432 28.3595 637.549 56.4171 594.686L57.4012 595.524C165.336 677.378 286.688 739.847 416.03 780.125C396.421 830.245 357.722 870.539 308.432 892.15C223.399 826.137 128.004 774.704 26.1255 739.943Z",
                                    fill: "#2683C9",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M57.4012 595.524L56.4164 594.683C70.8207 572.594 89.3913 553.523 111.091 538.534C207.185 611.044 315.094 666.416 430.052 702.182C430.553 728.838 425.796 755.335 416.046 780.149C286.695 739.868 165.34 677.391 57.4012 595.524Z",
                                    fill: "#2A90DE",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M111.064 538.542C128.587 526.435 147.912 517.165 168.317 511.065C173.747 509.44 179.193 508.117 184.661 506.955C255.417 555.755 332.165 595.243 413.006 624.447C416.311 631.994 419.163 639.729 421.544 647.613C426.849 665.335 429.715 683.691 430.052 702.182C315.086 666.419 207.168 611.058 111.064 538.542Z",
                                    fill: "#69CCD7",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M184.661 506.955C279.001 487.057 374.343 536.118 413.004 624.447C332.162 595.235 255.415 555.75 184.661 506.955Z",
                                    fill: "#2A90DE",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M59.9983 589.38C60.1552 589.904 60.2705 590.435 60.4274 590.958C104.456 737.992 248.833 831.215 400.958 810.843C343.385 907.322 218.502 938.861 122.025 881.293C25.5468 823.725 -5.99435 698.835 51.5745 602.359C54.2155 597.921 57.0208 593.595 59.9983 589.38Z",
                                    fill: "#2379BA",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M106.244 543.697C106.025 543.528 105.818 543.35 105.62 543.154L105.173 542.714C109.071 539.785 113.136 537.102 117.275 534.443C211.063 606.065 316.904 660.354 429.794 694.746C430.073 699.687 430.192 704.615 430.106 709.517C312.96 674.407 203.203 618.215 106.244 543.697Z",
                                    fill: "#2A669E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M53.1711 601.14L52.5779 600.697C55.0012 596.683 57.6036 592.783 60.2999 588.945L61.6234 589.94C168.981 671.454 289.753 733.592 418.499 773.55C416.93 777.972 415.221 782.337 413.367 786.639C283.44 746.189 161.549 683.418 53.1711 601.14Z",
                                    fill: "#2A669E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M179.435 511.889L175.872 509.006C182.078 507.406 188.28 506.112 194.48 505.123C261.18 550.42 333.143 587.445 408.782 615.378C411.592 621.048 414.149 626.872 416.445 632.855L412.435 631.696C329.891 602.052 251.567 561.779 179.435 511.889Z",
                                    fill: "#2A669E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M-24.0142 570.783C-10.6042 545.915 38.5253 552.216 77.0541 561.766L82.183 562.763C78.3572 566.632 74.7153 570.66 71.2316 574.83C18.1836 562.069 -6.41646 567.706 -11.6656 577.449C-25.8376 603.731 56.2473 685.798 196.693 761.531C337.138 837.264 450.785 860.73 464.976 834.466C470.182 824.771 461.476 801.147 421.622 763.754C423.155 758.595 424.475 753.372 425.596 748.088L429.89 752.258C458.874 779.174 490.629 816.439 477.323 841.123C472.995 848.437 465.871 853.667 457.602 855.615C408.946 870.18 292.232 828.965 190.03 773.887C68.4772 708.358 -47.8026 614.899 -24.0142 570.783Z",
                                    fill: "#69CCD7",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M528.567 370.62C529.082 370.656 529.58 370.43 529.891 370.018C530.203 369.607 530.285 369.066 530.11 368.581L522.452 347.524L523.657 329.382C523.713 328.541 523.076 327.813 522.235 327.758C521.394 327.702 520.667 328.338 520.611 329.18C519.277 349.256 519.372 347.824 519.466 348.259L527.229 369.583C527.425 370.167 527.953 370.576 528.567 370.62Z",
                                    fill: "#9FC9D3",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M510.288 369.406C510.896 369.448 511.47 369.126 511.75 368.585L522.268 348.445C522.478 348.046 522.312 349.626 523.657 329.382C523.713 328.541 523.076 327.813 522.235 327.758C521.394 327.702 520.667 328.338 520.611 329.18L519.405 347.322L509.028 367.18C508.791 367.638 508.801 368.185 509.055 368.634C509.31 369.083 509.773 369.373 510.288 369.406Z",
                                    fill: "#9FC9D3",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M587.97 360.828C589.521 360.329 590.69 359.043 591.04 357.452L596.207 333.789C596.699 331.543 595.449 329.279 593.284 328.5L582.852 324.319L581.118 362.622C583.471 362.329 585.775 361.725 587.97 360.828Z",
                                    fill: "#2C3E50",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M568.901 396.831C557.543 396.077 548.948 386.258 549.703 374.901C550.457 363.544 560.276 354.948 571.633 355.703C582.99 356.458 591.586 366.276 590.831 377.633C590.076 388.991 580.258 397.586 568.901 396.831Z",
                                    fill: "#95A5A5",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M551.742 367.233C551.49 371.026 551.233 372.141 551.853 373.621C552.371 374.936 553.394 375.99 554.693 376.548C555.992 377.105 557.46 377.12 558.771 376.59C560.679 375.827 561.985 374.043 562.136 371.994L561.94 374.949C561.734 377.506 563.345 379.858 565.803 380.591C567.364 381.04 569.045 380.752 570.368 379.809C571.691 378.866 572.512 377.371 572.596 375.749L573.253 365.863C573.28 365.144 573.804 364.542 574.512 364.416C582.455 363.001 581.695 363.149 582.023 363.049C583.035 362.778 583.945 362.216 584.64 361.433C579.89 356.833 573.222 354.789 566.711 355.937C560.199 357.086 554.633 361.286 551.742 367.233Z",
                                    fill: "#7F8C8D",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M573.114 390.991C570.59 390.823 568.68 388.641 568.847 386.118C569.015 383.594 571.197 381.684 573.721 381.851C576.245 382.019 578.155 384.201 577.987 386.725C577.819 389.249 575.637 391.159 573.114 390.991Z",
                                    fill: "#7F8C8D",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M552.643 353.676C551.567 369.869 551.382 369.657 552.012 371.229C552.527 372.547 553.548 373.604 554.848 374.165C556.147 374.725 557.616 374.743 558.928 374.213C560.837 373.451 562.143 371.667 562.294 369.617L562.101 372.512C561.896 375.068 563.507 377.42 565.965 378.154C567.516 378.6 569.185 378.319 570.505 377.389C571.824 376.46 572.652 374.983 572.754 373.372L573.412 363.471C573.439 362.753 573.963 362.15 574.671 362.025C582.517 360.679 581.85 360.819 582.178 360.718C584.394 360.113 585.987 358.178 586.156 355.888L587.262 339.238L563.338 335.935L554.234 350.217C553.295 351.134 552.728 352.366 552.643 353.676Z",
                                    fill: "#35495E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M560.209 354.944L558.928 374.213C560.846 373.463 562.157 371.672 562.294 369.617C563.359 353.577 563.108 354.371 563.951 353.188C564.371 352.751 564.492 352.106 564.26 351.546C564.027 350.986 563.485 350.616 562.879 350.605C562.272 350.593 561.717 350.942 561.463 351.493C560.738 352.507 560.304 353.701 560.209 354.944Z",
                                    fill: "#2C3E50",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M565.765 340.396C561.609 348.152 564.731 349.507 563.06 352.563C560.878 356.61 551.301 356.372 554.959 342.539C555.636 339.952 556.799 336.25 559.037 334.578L565.765 340.396Z",
                                    fill: "#3F5C6C",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M562.749 362.763C560.029 359.262 556.073 354.317 553.313 351.426C545.807 343.491 532.925 332.201 516.998 327.593C515.471 327.054 514.631 325.416 515.084 323.861C515.537 322.306 517.125 321.375 518.703 321.74C532.469 325.714 548.385 335.554 562.789 352.958C562.991 353.168 563.181 353.39 563.356 353.623L562.749 362.763Z",
                                    fill: "#A56A43",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M518.074 390.394C510.502 389.891 504.772 383.346 505.275 375.774C505.778 368.203 512.324 362.473 519.895 362.976C527.467 363.479 533.197 370.024 532.694 377.596C532.191 385.167 525.645 390.897 518.074 390.394Z",
                                    fill: "#95A5A5",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M524.024 381.426C521.921 381.286 520.33 379.468 520.469 377.365C520.609 375.262 522.427 373.67 524.53 373.81C526.634 373.949 528.225 375.768 528.086 377.871C527.946 379.974 526.128 381.566 524.024 381.426Z",
                                    fill: "#7F8C8D",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M551.924 385.682C553.846 389.387 556.844 392.424 560.525 394.393C562.931 392.018 562.955 388.142 560.58 385.737C558.205 383.331 554.33 383.307 551.924 385.682Z",
                                    fill: "#7F8C8D",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M580.37 373.878C580.208 376.364 581.404 378.743 583.497 380.095C585.589 381.448 588.249 381.561 590.449 380.393C591.34 376.119 590.836 371.672 589.012 367.705C587.026 367.17 584.905 367.553 583.232 368.749C581.558 369.944 580.508 371.826 580.37 373.878Z",
                                    fill: "#7F8C8D",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M586.909 334.426C587.437 335.456 587.392 335.896 587.655 338.622C588.251 344.624 584.863 350.312 579.303 352.648C569.073 356.925 569.14 357.067 567.724 356.973C566.073 356.862 564.61 355.869 563.898 354.376C563.185 352.883 563.334 351.121 564.286 349.768C565.301 348.306 566.462 348.107 570.366 346.454L575.748 344.196C577.097 343.632 578.096 342.46 578.437 341.039L586.909 334.426Z",
                                    fill: "#3F5C6C",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M589.652 326.3C589.037 335.554 581.036 342.558 571.782 341.943C562.528 341.328 555.525 333.328 556.14 324.074C556.755 314.82 564.755 307.816 574.009 308.431C583.263 309.046 590.266 317.046 589.652 326.3Z",
                                    fill: "#547580",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M557.716 332.364C563.73 336.711 573.241 336.563 578.554 332.142C586.389 325.671 580.337 314.972 568.273 314.17C565 313.906 561.718 314.562 558.799 316.065C555.641 320.945 555.232 327.11 557.716 332.364Z",
                                    fill: "#F0C419",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M560.608 325.901C561.45 325.956 562.177 325.32 562.233 324.478C562.536 319.909 568.386 320.297 568.629 320.313C569.471 320.369 570.198 319.733 570.254 318.891C570.31 318.05 569.673 317.323 568.832 317.267C565.664 317.056 559.586 318.259 559.186 324.276C559.13 325.117 559.767 325.845 560.608 325.901Z",
                                    fill: "#F9EAB0",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M556.461 328.685C556.739 329.969 557.169 331.215 557.744 332.397C562.052 335.302 567.375 336.282 572.436 335.102C580.345 333.271 584.092 326.849 581.006 321.259C575.786 326.588 567.661 331.434 556.461 328.685Z",
                                    fill: "#F29C1F",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M505.281 377.534C505.539 381.673 507.654 385.474 511.035 387.876C513.499 387.225 515.299 385.112 515.551 382.576C515.803 380.04 514.453 377.614 512.165 376.491C509.878 375.368 507.133 375.784 505.281 377.534Z",
                                    fill: "#7F8C8D",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M513.663 364.673C513.735 366.993 515.658 368.825 517.979 368.785C521.452 369.015 523.879 366.117 522.334 363.352C519.492 362.639 516.498 362.853 513.786 363.962C513.726 364.195 513.685 364.433 513.663 364.673Z",
                                    fill: "#7F8C8D",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M184.038 285.505C183.217 285.028 182.711 284.152 182.709 283.203L182.701 269.094C182.7 267.754 183.692 266.621 185.021 266.445L191.477 265.359L187.716 287.375C186.413 286.917 185.176 286.288 184.038 285.505Z",
                                    fill: "#2C3E50",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M203.13 298.568C203.004 299.43 202.778 300.274 202.458 301.084C194.892 301.263 187.353 300.139 180.169 297.759C179.889 294.142 181.323 290.604 184.041 288.203C192.041 281.106 204.727 287.863 203.13 298.568Z",
                                    fill: "#F29C1F",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M203.254 296.833C202.676 298.084 201.341 298.804 199.978 298.601C198.288 298.329 197.125 296.758 197.359 295.063L197.104 296.769C196.904 298.25 195.695 299.389 194.206 299.502C193.261 299.564 192.34 299.192 191.704 298.491C191.068 297.79 190.786 296.838 190.939 295.904L191.791 290.195C191.865 289.783 191.641 289.375 191.253 289.216C187.196 287.541 186.805 287.509 186.159 286.658C189.745 284.703 194.096 284.785 197.606 286.874C201.115 288.963 203.262 292.749 203.254 296.833Z",
                                    fill: "#E57E25",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M202.458 301.084C200.49 306.099 195.318 309.091 189.989 308.296C184.661 307.501 180.587 303.13 180.169 297.759C187.354 300.134 194.893 301.259 202.458 301.084Z",
                                    fill: "#F29C1F",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M213.685 300.142C213.091 304.118 206.895 305.63 199.394 305.527C193.472 305.407 187.589 304.53 181.89 302.916C174.597 300.811 169.113 297.556 169.706 293.581C170.299 289.605 176.495 288.093 184.041 288.203C183.064 289.064 182.24 290.084 181.603 291.22C172.34 291.537 171.65 294.77 180.169 297.758C187.354 300.134 194.893 301.259 202.458 301.084C211.092 300.708 211.861 297.658 203.712 294.662L204.161 291.654C210.065 293.731 214.21 296.624 213.685 300.142Z",
                                    fill: "#F9EAB0",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M205.033 285.814C203.638 295.164 203.769 295.066 203.216 295.883C202.759 296.569 202.047 297.044 201.238 297.202C200.429 297.36 199.59 297.188 198.909 296.724C197.917 296.053 197.395 294.876 197.563 293.691L197.314 295.362C197.114 296.843 195.905 297.982 194.416 298.095C193.477 298.156 192.562 297.789 191.926 297.097C191.29 296.404 191.003 295.461 191.144 294.531L191.997 288.814C192.071 288.402 191.847 287.994 191.459 287.835C187.165 286.061 187.528 286.223 187.354 286.125C186.181 285.511 185.515 284.231 185.683 282.918L187.118 273.304L201.144 274.39L204.555 283.648C204.977 284.286 205.147 285.058 205.033 285.814Z",
                                    fill: "#35495E",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M200.569 285.597L198.909 296.724C197.91 296.059 197.386 294.877 197.563 293.691C198.945 284.429 198.99 284.912 198.656 284.134C198.563 283.71 198.789 283.28 199.192 283.118C199.595 282.955 200.056 283.107 200.283 283.478C200.57 284.145 200.669 284.878 200.569 285.597Z",
                                    fill: "#2C3E50",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M187.915 270.609C187.487 271.129 187.459 271.377 186.97 272.904C185.887 276.247 187.11 279.905 189.986 281.923C195.278 285.626 195.222 285.699 196.04 285.821C196.993 285.962 197.949 285.578 198.54 284.817C199.13 284.055 199.264 283.034 198.89 282.146C198.494 281.187 197.857 280.931 195.84 279.506L193.056 277.553C192.359 277.065 191.936 276.274 191.918 275.423L187.915 270.609Z",
                                    fill: "#3F5C6C",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M199.21 276.628C200.614 281.558 198.669 281.942 199.241 283.889C199.981 286.463 205.462 287.514 205.095 279.187C205.032 277.622 204.827 275.38 203.76 274.151L199.21 276.628Z",
                                    fill: "#3F5C6C",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M187.361 265.644C186.564 270.987 190.25 275.965 195.593 276.763C200.937 277.56 205.915 273.874 206.712 268.531C207.509 263.187 203.824 258.209 198.48 257.412C193.137 256.615 188.158 260.3 187.361 265.644Z",
                                    fill: "#547580",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M204.787 273.054C200.826 274.774 195.43 273.519 192.954 270.345C189.297 265.69 194.067 260.35 201.034 261.39C202.929 261.645 204.716 262.425 206.191 263.643C207.383 266.811 206.852 270.371 204.787 273.054Z",
                                    fill: "#F0C419",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M203.942 269.017C203.456 268.944 203.121 268.492 203.194 268.006C203.587 265.367 200.21 264.863 200.069 264.842C199.583 264.77 199.248 264.317 199.321 263.831C199.393 263.346 199.846 263.011 200.331 263.083C202.161 263.356 205.478 264.75 204.953 268.268C204.88 268.754 204.428 269.089 203.942 269.017Z",
                                    fill: "#F9EAB0",
                                  }),
                                  (0, d.jsx)("path", {
                                    d: "M205.958 271.116C205.639 271.811 205.239 272.467 204.767 273.069C201.954 274.184 198.804 274.082 196.069 272.787C191.794 270.765 190.458 266.645 192.908 263.846C195.218 267.526 199.242 271.292 205.958 271.116Z",
                                    fill: "#F29C1F",
                                  }),
                                  (0, d.jsx)("g", {
                                    filter: "url(#filter1_f_451:2)",
                                    children: (0, d.jsx)("path", {
                                      d: "M186.5 217.5L285.5 33.5H425L532.5 217.5H186.5Z",
                                      fill: "url(#paint3_linear_451:2)",
                                    }),
                                  }),
                                  (0, d.jsxs)("g", {
                                    opacity: "0.5",
                                    children: [
                                      (0, d.jsx)("line", {
                                        x1: "557",
                                        y1: "111",
                                        x2: "557",
                                        y2: "119",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                      (0, d.jsx)("line", {
                                        x1: "553",
                                        y1: "115",
                                        x2: "561",
                                        y2: "115",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    opacity: "0.5",
                                    children: [
                                      (0, d.jsx)("line", {
                                        x1: "135",
                                        y1: "212",
                                        x2: "135",
                                        y2: "220",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                      (0, d.jsx)("line", {
                                        x1: "131",
                                        y1: "216",
                                        x2: "139",
                                        y2: "216",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    opacity: "0.5",
                                    children: [
                                      (0, d.jsx)("line", {
                                        x1: "557",
                                        y1: "488",
                                        x2: "557",
                                        y2: "496",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                      (0, d.jsx)("line", {
                                        x1: "553",
                                        y1: "492",
                                        x2: "561",
                                        y2: "492",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("g", {
                                    opacity: "0.5",
                                    children: [
                                      (0, d.jsx)("line", {
                                        x1: "371",
                                        y1: "448",
                                        x2: "371",
                                        y2: "456",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                      (0, d.jsx)("line", {
                                        x1: "367",
                                        y1: "452",
                                        x2: "375",
                                        y2: "452",
                                        stroke: "#EDF046",
                                        strokeWidth: "2",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, d.jsxs)("defs", {
                                children: [
                                  (0, d.jsxs)("filter", {
                                    id: "filter0_d_451:2",
                                    x: "-22",
                                    y: "0",
                                    width: "763",
                                    height: "763",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                      (0, d.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix",
                                      }),
                                      (0, d.jsx)("feColorMatrix", {
                                        in: "SourceAlpha",
                                        type: "matrix",
                                        values:
                                          "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                        result: "hardAlpha",
                                      }),
                                      (0, d.jsx)("feOffset", { dy: "50" }),
                                      (0, d.jsx)("feGaussianBlur", {
                                        stdDeviation: "50",
                                      }),
                                      (0, d.jsx)("feColorMatrix", {
                                        type: "matrix",
                                        values:
                                          "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0",
                                      }),
                                      (0, d.jsx)("feBlend", {
                                        mode: "normal",
                                        in2: "BackgroundImageFix",
                                        result: "effect1_dropShadow_451:2",
                                      }),
                                      (0, d.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "effect1_dropShadow_451:2",
                                        result: "shape",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("filter", {
                                    id: "filter1_f_451:2",
                                    x: "172.5",
                                    y: "19.5",
                                    width: "374",
                                    height: "212",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                      (0, d.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix",
                                      }),
                                      (0, d.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "BackgroundImageFix",
                                        result: "shape",
                                      }),
                                      (0, d.jsx)("feGaussianBlur", {
                                        stdDeviation: "7",
                                        result: "effect1_foregroundBlur_451:2",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("linearGradient", {
                                    id: "paint0_linear_451:2",
                                    x1: "78",
                                    y1: "50",
                                    x2: "739.715",
                                    y2: "449.487",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      (0, d.jsx)("stop", {
                                        stopColor: "#1CDBA2",
                                      }),
                                      (0, d.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#1C75DB",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("linearGradient", {
                                    id: "paint1_linear_451:2",
                                    x1: "78",
                                    y1: "50",
                                    x2: "739.715",
                                    y2: "449.487",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      (0, d.jsx)("stop", {
                                        stopColor: "#1CDBA2",
                                      }),
                                      (0, d.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#1C75DB",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("linearGradient", {
                                    id: "paint2_linear_451:2",
                                    x1: "78",
                                    y1: "50",
                                    x2: "641",
                                    y2: "613",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      (0, d.jsx)("stop", {
                                        stopColor: "#1CDBA2",
                                      }),
                                      (0, d.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#1C75DB",
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)("linearGradient", {
                                    id: "paint3_linear_451:2",
                                    x1: "359.5",
                                    y1: "33.5",
                                    x2: "359.5",
                                    y2: "217.5",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      (0, d.jsx)("stop", {
                                        stopColor: "#393939",
                                      }),
                                      (0, d.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#1C75DB",
                                        stopOpacity: "0",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: x().privacy,
                    children: [
                      (0, d.jsx)("h2", { children: "Privacy matters" }),
                      (0, d.jsx)("p", {
                        children:
                          "You are in control of your data. Orion lives on your server and you decide if you wish to make use of any third party.",
                      }),
                      (0, d.jsx)("div", {
                        className: ""
                          .concat(x().animationContainer, " ")
                          .concat(x().privacyAnimation),
                        children: (0, d.jsxs)("svg", {
                          viewBox: "0 0 601 886",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          "data-pausable-animation": !0,
                          children: [
                            (0, d.jsx)("path", {
                              d: "M398.633 449.812L390.937 448.842L426.39 397.887L421.682 397.294L422.541 390.474L439.589 392.623L441.738 375.574L448.128 379.844L446.409 393.482L463.458 395.631L462.598 402.45L457.729 401.837L479.43 459.994L471.731 459.024L450.03 400.866L445.273 400.267L438.398 454.823L431.578 453.964L438.453 399.407L434.086 398.857L398.633 449.812Z",
                              fill: "#C3C9D1",
                            }),
                            (0, d.jsx)("path", {
                              d: "M440.449 385.804L447.269 386.663L448.128 379.844L441.738 375.574L440.449 385.804Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M478.256 404.424L494.758 382.188L423.302 328.221L406.8 350.457L478.256 404.424Z",
                              fill: "#D0D7DF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M494.758 382.188L505.748 390.49L497.499 401.609L482.382 398.864L494.758 382.188Z",
                              fill: "#B7BDC4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M514.001 379.371L505.748 390.49L494.758 382.188L503.007 371.069L514.001 379.371Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M486.529 358.594L481.008 354.497L472.757 365.617L478.278 369.714L486.529 358.594Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M494.089 360.031L477.596 347.58L473.454 353.066L489.949 365.517L494.089 360.031Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M439.807 340.638L434.287 336.541L417.784 358.777L423.303 362.874L439.807 340.638Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M434.769 371.25L451.261 383.703L467.763 361.465L451.276 349.013L434.769 371.25Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M434.086 398.857L429.656 405.227L421.958 404.257L426.39 397.887L434.086 398.857Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M457.729 401.837L460.44 409.106L452.744 408.137L450.03 400.866L457.729 401.837Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M445.273 400.267L438.453 399.407L437.594 406.227L444.414 407.087L445.273 400.267Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsxs)("g", {
                              className: x().privacyRays,
                              "data-pausable-animation": !0,
                              children: [
                                (0, d.jsx)("line", {
                                  x1: "400.641",
                                  y1: "345.933",
                                  x2: "387.641",
                                  y2: "340.933",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "417.181",
                                  y1: "326.573",
                                  x2: "410.181",
                                  y2: "316.573",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "407.293",
                                  y1: "335.707",
                                  x2: "394.293",
                                  y2: "322.707",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                              ],
                            }),
                            (0, d.jsx)("path", {
                              d: "M727.3 654.148C727.3 781.811 623.811 885.3 496.152 885.3C368.489 885.3 265 781.811 265 654.148C265 526.489 368.489 423 496.152 423C623.811 423 727.3 526.489 727.3 654.148Z",
                              fill: "#F04729",
                            }),
                            (0, d.jsx)("path", {
                              d: "M639.575 472.952C639.575 473.573 639.623 474.186 639.623 474.807C639.607 649.206 512.824 797.727 340.594 825.123C434.703 911.38 580.92 905.021 667.18 810.918C753.438 716.815 747.085 570.586 652.975 484.326C648.655 480.362 644.183 476.568 639.575 472.952Z",
                              fill: "#DD381A",
                            }),
                            (0, d.jsx)("path", {
                              d: "M572.869 773.71C546.454 773.71 525.044 752.3 525.044 725.885C525.044 699.47 546.454 678.061 572.869 678.061C599.284 678.061 620.693 699.47 620.693 725.885C620.668 752.284 599.268 773.678 572.869 773.71ZM572.869 694.004C555.262 694.004 540.988 708.278 540.988 725.885C540.988 743.492 555.262 757.769 572.869 757.769C590.476 757.769 604.753 743.492 604.753 725.885C604.753 708.278 590.476 694.004 572.869 694.004Z",
                              fill: "#C43117",
                            }),
                            (0, d.jsx)("path", {
                              d: "M416.443 582.411C398.836 582.411 384.562 568.137 384.562 550.53C384.562 532.924 398.836 518.646 416.443 518.646C434.05 518.646 448.327 532.924 448.327 550.53C448.327 568.137 434.05 582.411 416.443 582.411ZM416.443 534.59C407.635 534.59 400.502 541.722 400.502 550.53C400.502 559.335 407.638 566.471 416.443 566.471C425.251 566.471 432.386 559.339 432.386 550.53C432.386 541.722 425.251 534.59 416.443 534.59Z",
                              fill: "#C43117",
                            }),
                            (0, d.jsx)("path", {
                              d: "M714.405 613.627C700.702 608.517 687.902 601.246 676.487 592.107C649.251 570.394 615.474 558.547 580.642 558.499H579.045C544.207 558.547 510.41 570.4 483.175 592.129C458.782 611.594 428.52 622.217 397.315 622.264H267.241C266.515 627.525 265.966 632.843 265.606 638.208H397.315C432.153 638.161 465.95 626.307 493.185 604.579C517.577 585.113 547.839 574.49 579.048 574.44H580.642C611.863 574.481 642.144 585.107 666.549 604.579C679.296 614.772 693.579 622.87 708.876 628.564C714.519 630.612 720.37 632.054 726.315 632.859C725.779 627.289 725.078 621.772 724.195 616.319C720.868 615.675 717.593 614.772 714.405 613.627Z",
                              fill: "#C43117",
                            }),
                            (0, d.jsx)("path", {
                              d: "M311.884 525.327C327.61 523.996 342.986 519.921 357.317 513.3L371.187 506.373C402.279 491.149 438.667 491.149 469.762 506.373L483.613 513.3C501.125 522.026 520.424 526.587 539.99 526.618H688.924C685.282 521.127 681.407 515.819 677.317 510.678H539.99C522.885 510.652 506.011 506.676 490.698 499.039L476.847 492.111C441.258 474.681 399.609 474.681 364.02 492.111L350.153 499.039C339.533 503.99 328.21 507.235 316.58 508.652C312.212 514.032 308.059 519.603 304.184 525.39H311.08C311.351 525.381 311.619 525.359 311.884 525.327Z",
                              fill: "#C43117",
                            }),
                            (0, d.jsx)("path", {
                              d: "M628.536 668.912C597.611 638.599 548.13 638.599 517.202 668.912C501.914 684.571 481.07 693.588 459.19 694.001H268.491C269.431 699.382 270.523 704.7 271.823 709.942H459.19C485.248 709.538 510.091 698.886 528.361 680.298C553.078 656.054 592.66 656.054 617.377 680.298C635.646 698.886 660.49 709.535 686.548 709.942H720.477C721.777 704.7 722.869 699.382 723.81 694.001H686.545C664.668 693.581 643.823 684.565 628.536 668.912Z",
                              fill: "#C43117",
                            }),
                            (0, d.jsx)("path", {
                              d: "M617.377 771.47C592.659 795.717 553.078 795.717 528.361 771.47C510.091 752.881 485.248 742.233 459.19 741.826H282.257C284.488 747.248 286.921 752.563 289.54 757.767H459.19C481.07 758.183 501.914 767.197 517.202 782.859C548.126 813.172 597.608 813.172 628.536 782.859C643.823 767.206 664.668 758.19 686.548 757.767H702.76C705.382 752.563 707.812 747.248 710.044 741.826H686.548C660.489 742.233 635.646 752.881 617.377 771.47Z",
                              fill: "#C43117",
                            }),
                            (0, d.jsx)("path", {
                              d: "M536.004 853.416C536.004 831.1 511.496 813.563 480.211 813.563C448.923 813.563 424.415 831.1 424.415 853.416C424.598 862.438 428.464 871 435.119 877.098C455.005 882.542 475.531 885.3 496.152 885.3C502.719 885.3 509.198 884.959 515.624 884.422C527.531 878.54 535.326 866.68 536.004 853.416ZM480.211 877.328C458.609 877.328 440.355 866.377 440.355 853.416C440.355 840.457 458.609 829.503 480.211 829.503C501.81 829.503 520.064 840.457 520.064 853.416C520.064 866.377 501.81 877.328 480.211 877.328Z",
                              fill: "#C43117",
                            }),
                            (0, d.jsx)("circle", {
                              className: x().privacyShield,
                              "data-pausable-animation": !0,
                              cx: "240",
                              cy: "185",
                              r: "177",
                              fill: "white",
                              fillOpacity: "0.15",
                              stroke: "white",
                              strokeWidth: "4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M284.255 192.006L278.609 199.665L290.34 205.91L293.459 196.907L284.255 192.006Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M332.355 112.851C324.682 115.193 318.252 120.487 314.482 127.568L280.817 190.803L296.459 199.131L330.124 135.896C333.894 128.814 334.696 120.524 332.355 112.851Z",
                              fill: "#F5AE45",
                            }),
                            (0, d.jsx)("path", {
                              d: "M332.362 112.881C332.583 118.586 331.291 124.252 328.617 129.297L292.548 197.048L296.459 199.13L330.124 135.895C333.889 128.824 334.695 120.546 332.362 112.881Z",
                              fill: "#F09E26",
                            }),
                            (0, d.jsx)("path", {
                              d: "M307.88 139.969L323.522 148.297L321.44 152.207L305.798 143.88L307.88 139.969Z",
                              fill: "#E38800",
                            }),
                            (0, d.jsx)("path", {
                              d: "M297.471 159.521L313.113 167.848L311.031 171.758L295.39 163.431L297.471 159.521Z",
                              fill: "#E38800",
                            }),
                            (0, d.jsx)("path", {
                              d: "M316.428 124.447C315.717 125.448 315.066 126.49 314.482 127.568L314.125 128.239L329.767 136.566L330.124 135.896C330.693 134.808 331.194 133.687 331.627 132.539L316.428 124.447Z",
                              fill: "#E38800",
                            }),
                            (0, d.jsx)("path", {
                              d: "M291.808 201.673L293.459 196.907L284.255 192.006L281.266 196.06L291.808 201.673Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M281.521 85.7881C273.848 88.1296 267.419 93.4242 263.649 100.505L229.984 163.74L245.625 172.068L279.29 108.833C283.06 101.751 283.863 93.4612 281.521 85.7881Z",
                              fill: "#F5AE45",
                            }),
                            (0, d.jsx)("path", {
                              d: "M281.528 85.8179C281.75 91.5235 280.458 97.1895 277.785 102.235L241.715 169.986L245.625 172.068L279.29 108.833C283.055 101.761 283.861 93.4833 281.528 85.8179Z",
                              fill: "#F09E26",
                            }),
                            (0, d.jsx)("path", {
                              d: "M257.046 112.907L272.688 121.234L270.606 125.145L254.964 116.818L257.046 112.907Z",
                              fill: "#E38800",
                            }),
                            (0, d.jsx)("path", {
                              d: "M246.638 132.458L262.279 140.785L260.198 144.695L244.556 136.368L246.638 132.458Z",
                              fill: "#E38800",
                            }),
                            (0, d.jsx)("path", {
                              d: "M265.595 97.384C264.883 98.3847 264.233 99.427 263.649 100.505L263.292 101.176L278.933 109.503L279.29 108.833C279.859 107.745 280.36 106.624 280.794 105.476L265.595 97.384Z",
                              fill: "#E38800",
                            }),
                            (0, d.jsx)("path", {
                              d: "M233.421 164.944L227.775 172.602L239.506 178.848L242.626 169.844L233.421 164.944Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M240.975 174.61L242.626 169.844L233.421 164.944L230.432 168.998L240.975 174.61Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M319.428 75.8583C304.533 77.3338 291.362 86.1573 284.328 99.3703L248.748 166.202L283.94 184.938L319.52 118.106C326.554 104.893 326.52 89.0392 319.428 75.8583Z",
                              fill: "#F06529",
                            }),
                            (0, d.jsx)("path", {
                              d: "M319.428 75.8582L319.417 75.8521C319.626 84.7387 317.543 93.5291 313.371 101.377L272.209 178.693L283.94 184.938L319.52 118.106C326.554 104.893 326.52 89.0392 319.428 75.8582Z",
                              fill: "#DE591F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M281.015 105.594L316.207 124.329L314.125 128.239L278.933 109.503L281.015 105.594Z",
                              fill: "#D45119",
                            }),
                            (0, d.jsx)("path", {
                              d: "M275.079 182.73L255.527 172.321L283.807 119.202C287.572 112.131 294.773 107.55 302.774 107.14C306.901 114.008 307.122 122.539 303.358 129.61L275.078 182.73L275.079 182.73Z",
                              fill: "#D0D7DF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M225.286 153.712L256.568 170.366L281.549 123.443L255.246 144.569L238.297 145.438C232.808 145.72 227.87 148.86 225.286 153.712Z",
                              fill: "#B7BDC4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M307.401 197.428L276.12 180.775L301.101 133.852L298.259 167.468L307.001 182.015C309.832 186.726 309.985 192.576 307.401 197.428Z",
                              fill: "#B7BDC4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M263.221 181.436L253.446 176.231L255.527 172.321C257.827 168.003 263.192 166.365 267.511 168.664L269.466 169.705L263.221 181.436Z",
                              fill: "#B7BDC4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M263.221 181.436L272.997 186.64L275.078 182.73C277.377 178.411 275.741 173.045 271.422 170.746L269.466 169.705L263.221 181.436Z",
                              fill: "#B7BDC4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M272.715 158.888L276.626 160.97L265.177 182.477L261.266 180.395L272.715 158.888Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M253.446 176.231L263.221 181.436L259.058 189.256L249.282 184.052L253.446 176.231Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M263.221 181.436L272.996 186.64L268.833 194.46L259.058 189.256L263.221 181.436Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M295.113 127.037C294.867 125.288 293.25 124.069 291.501 124.314C291.17 124.362 290.846 124.46 290.546 124.606L288.448 120.704C292.107 118.727 296.676 120.091 298.652 123.75C299.129 124.631 299.423 125.601 299.522 126.6L295.113 127.037Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M252.405 178.187L222.164 159.577L225.286 153.712L256.568 170.366L252.405 178.187Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M271.956 188.596L304.279 203.294L307.401 197.428L276.12 180.775L271.956 188.596Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M261.266 180.395L265.176 182.477L261.013 190.297L257.102 188.215L261.266 180.395Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M300.153 145.057L301.101 133.852L276.12 180.775L280.03 182.856L300.153 145.057Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M276.12 180.775L271.956 188.596L275.997 190.433L280.03 182.856L276.12 180.775Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M194.192 130.397C193.841 138.353 193.79 142.343 192.937 146.71C192.561 148.668 192.347 149.069 192.347 149.22C193.246 149.885 193.802 150.915 193.866 152.031V153.286C193.866 154.672 192.742 155.795 191.356 155.795H183.827C183.134 155.795 182.572 155.233 182.572 154.54C182.572 155.233 182.01 155.795 181.317 155.795H173.788C172.402 155.795 171.278 154.672 171.278 153.286V152.031C171.344 150.935 171.884 149.922 172.759 149.257C171.127 143.347 171.278 136.357 171.115 130.121L182.66 124.612L194.192 130.397Z",
                              fill: "#F29C1F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M194.192 130.397C194.192 130.397 193.866 137.637 193.866 138.089C188.558 141.327 176.172 141.113 171.278 138.089C171.278 137.098 171.278 140.524 171.102 130.121L182.647 124.612L194.192 130.397Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M200.717 101.911C201.097 101.99 201.451 102.162 201.746 102.413C204.908 105.048 209.05 112.452 202.6 121.55L200.09 120.91L198.421 118.701C202.6 112.778 200.579 108.775 199.249 107.094L200.717 101.911Z",
                              fill: "#35495E",
                            }),
                            (0, d.jsx)("path", {
                              d: "M204.858 126.657L200.265 137.361C199.732 138.638 198.487 139.473 197.103 139.482C195.249 139.444 193.744 137.971 193.665 136.119C188.445 139.469 176.31 139.256 171.491 136.119C171.432 137.437 170.643 138.613 169.446 139.168C168.605 139.555 167.642 139.58 166.782 139.239C165.921 138.897 165.238 138.219 164.891 137.361L160.298 126.657C159.614 125.077 160.139 123.234 161.553 122.252L168.455 117.496C169.543 116.746 170.969 116.697 172.106 117.371C172.884 115.94 173.512 114.861 173.725 114.522H191.444C191.657 114.886 192.285 115.928 193.075 117.371C194.213 116.697 195.638 116.746 196.727 117.496L203.629 122.252C205.033 123.242 205.547 125.083 204.858 126.657Z",
                              fill: "#F29C1F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M185.722 115.639H179.359C175.138 115.654 171.105 113.896 168.242 110.795C165.379 107.693 163.949 103.532 164.301 99.326C164.301 99.0374 164.376 98.548 165.142 91.8847C165.731 86.7954 170.058 82.9662 175.181 83.0002H189.913C195.007 83.0046 199.291 86.8241 199.877 91.8847L200.68 98.8367C201.177 103.105 199.828 107.383 196.97 110.594C194.112 113.804 190.019 115.64 185.722 115.639Z",
                              fill: "#D25627",
                            }),
                            (0, d.jsx)("path", {
                              d: "M200.717 99.326C200.063 107.149 193.509 113.157 185.659 113.13H179.359C171.509 113.157 164.955 107.149 164.301 99.326C164.301 99.0374 164.376 98.548 165.142 91.8847C165.731 86.7954 170.058 82.9662 175.181 83.0002H189.913C195.007 83.0046 199.291 86.8241 199.877 91.8847C200.655 98.6359 200.717 99.0876 200.717 99.326Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M185.722 110.62H179.359C176.591 110.624 173.944 109.486 172.044 107.474C170.143 105.462 169.158 102.754 169.32 99.991C169.32 99.4514 169.32 99.7024 170.174 92.4618C170.473 89.9317 172.62 88.0272 175.168 88.0321H189.913C192.474 88.0151 194.638 89.9297 194.932 92.4743L195.735 99.4263C196.066 102.278 195.159 105.135 193.245 107.274C191.331 109.414 188.592 110.632 185.722 110.62Z",
                              fill: "#2C3E50",
                            }),
                            (0, d.jsx)("path", {
                              d: "M195.359 96.4774C187.815 101.921 178.051 103.239 169.333 99.991C169.333 99.4514 169.333 99.7024 170.186 92.4618C170.485 89.9365 172.625 88.0336 175.168 88.0321H189.913C192.474 88.0151 194.638 89.9297 194.932 92.4743L195.359 96.4774Z",
                              fill: "#35495E",
                            }),
                            (0, d.jsx)("path", {
                              d: "M196.877 128.565L193.665 136.094C193.045 137.268 191.701 137.864 190.415 137.537C190.553 136.884 190.415 137.248 194.581 127.498C194.828 126.923 194.614 126.254 194.079 125.929L192.448 124.963C192.011 124.766 191.725 124.337 191.71 123.858C191.695 123.38 191.954 122.934 192.378 122.71C192.801 122.486 193.315 122.523 193.703 122.805L195.334 123.784C196.992 124.751 197.657 126.81 196.877 128.565Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M174.754 137.574C173.374 138.44 172.395 137.574 171.479 136.119L168.317 128.753C167.572 127.019 168.227 125.001 169.848 124.034L171.466 123.068C171.854 122.786 172.368 122.75 172.791 122.974C173.214 123.198 173.473 123.643 173.459 124.122C173.444 124.601 173.158 125.029 172.721 125.227L171.09 126.193C170.555 126.517 170.341 127.186 170.588 127.761C174.817 137.524 174.654 137.085 174.754 137.574Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M187.591 119.404H177.552C176.859 119.404 176.298 119.966 176.298 120.659V129.443C176.298 130.136 176.859 130.698 177.552 130.698H187.591C188.284 130.698 188.846 130.136 188.846 129.443V120.659C188.846 119.966 188.284 119.404 187.591 119.404Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M202.148 132.969L201.156 135.278L198.496 134.462C197.863 134.229 197.527 133.537 197.737 132.895C197.946 132.254 198.625 131.893 199.274 132.078L202.148 132.969Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M204.344 127.849L203.352 130.158L201.006 129.443C200.564 129.317 200.226 128.959 200.126 128.511C200.025 128.062 200.178 127.595 200.523 127.292C200.869 126.989 201.353 126.9 201.784 127.059L204.344 127.849Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M166.648 134.462L163.987 135.341L162.996 133.032L165.87 132.078C166.518 131.893 167.198 132.254 167.407 132.895C167.616 133.537 167.281 134.229 166.648 134.462Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M164.138 129.443L161.791 130.221L160.8 127.912L163.31 127.059C163.959 126.874 164.638 127.235 164.847 127.876C165.056 128.518 164.721 129.21 164.088 129.443H164.138Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M176.298 94.3066C175.788 94.3095 175.327 94.0038 175.131 93.5329C174.936 93.0621 175.045 92.5197 175.407 92.1607C175.642 91.9232 175.963 91.7896 176.298 91.7896C176.632 91.7896 176.953 91.9232 177.188 92.1607C177.55 92.5197 177.659 93.0621 177.464 93.5329C177.268 94.0038 176.807 94.3095 176.298 94.3066Z",
                              fill: "white",
                            }),
                            (0, d.jsx)("path", {
                              d: "M188.846 94.3066H181.317C180.624 94.3066 180.062 93.7448 180.062 93.0517C180.062 92.3587 180.624 91.7969 181.317 91.7969H188.846C189.539 91.7969 190.101 92.3587 190.101 93.0517C190.101 93.7448 189.539 94.3066 188.846 94.3066Z",
                              fill: "white",
                            }),
                            (0, d.jsx)("path", {
                              d: "M185.082 124.423H183.827C183.134 124.423 182.572 123.861 182.572 123.168C182.572 122.475 183.134 121.914 183.827 121.914H185.082C185.775 121.914 186.337 122.475 186.337 123.168C186.337 123.861 185.775 124.423 185.082 124.423Z",
                              fill: "#F29C1F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M185.082 128.188H183.827C183.134 128.188 182.572 127.626 182.572 126.933C182.572 126.24 183.134 125.678 183.827 125.678H185.082C185.775 125.678 186.337 126.24 186.337 126.933C186.337 127.626 185.775 128.188 185.082 128.188Z",
                              fill: "#F29C1F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M182.572 155.795C181.879 155.795 181.317 155.233 181.317 154.54V144.501C181.317 143.808 181.879 143.246 182.572 143.246C183.265 143.246 183.827 143.808 183.827 144.501V154.54C183.827 155.233 183.265 155.795 182.572 155.795Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M176.298 147.563C176.298 148.256 175.736 148.818 175.043 148.818C174.278 148.795 173.517 148.931 172.809 149.219C172.583 148.429 172.382 147.601 172.219 146.71C173.129 146.411 174.085 146.275 175.043 146.308C175.736 146.308 176.298 146.87 176.298 147.563Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M192.925 146.735C192.761 147.576 192.573 148.404 192.335 149.245C191.633 148.931 190.87 148.777 190.101 148.793C189.408 148.793 188.846 148.231 188.846 147.538C188.846 146.845 189.408 146.283 190.101 146.283C191.062 146.266 192.017 146.419 192.925 146.735Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M291.768 226.384C291.768 272.989 253.989 310.768 207.385 310.768C160.78 310.768 123 272.989 123 226.384C123 179.78 160.78 142 207.385 142C253.989 142 291.768 179.78 291.768 226.384Z",
                              fill: "#F06529",
                            }),
                            (0, d.jsx)("path", {
                              d: "M259.743 160.236C259.743 160.463 259.761 160.686 259.761 160.913C259.755 224.579 213.471 278.799 150.596 288.8C184.952 320.289 238.33 317.968 269.821 283.614C301.31 249.261 298.991 195.878 264.635 164.388C263.058 162.941 261.425 161.556 259.743 160.236Z",
                              fill: "#E0561A",
                            }),
                            (0, d.jsx)("path", {
                              d: "M230.663 275.851C224.235 275.851 219.023 270.64 219.023 264.212C219.023 257.784 224.235 252.572 230.663 252.572C237.091 252.572 242.302 257.784 242.302 264.212C242.302 270.64 237.091 275.851 230.663 275.851ZM230.663 258.392C227.448 258.392 224.844 260.996 224.844 264.211C224.844 267.426 227.448 270.031 230.663 270.031C233.879 270.031 236.482 267.426 236.482 264.211C236.482 260.996 233.879 258.392 230.663 258.392Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M202.657 217.017C212.596 224.947 224.93 229.273 237.647 229.294H291.696C291.728 228.325 291.77 227.358 291.77 226.383C291.77 225.409 291.728 224.442 291.696 223.474H237.646C226.248 223.459 215.195 219.58 206.284 212.472C196.348 204.542 184.015 200.216 171.303 200.195H127.164C126.542 202.107 125.983 204.047 125.491 206.014H171.303C182.697 206.029 193.75 209.908 202.657 217.017Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M145.144 237.47L149.349 231.237C153.89 224.539 161.465 220.538 169.557 220.564C182.316 220.488 192.731 230.757 192.836 243.517C192.768 248.315 190.674 252.86 187.071 256.03C182.732 260.539 176.258 262.282 170.243 260.56C165.532 258.969 162.055 254.95 161.157 250.062C160.373 245.454 162.623 240.86 166.743 238.657C169.373 237.001 172.696 236.906 175.42 238.405C177.777 239.772 179.238 242.283 179.258 245.006H185.078C185.057 240.208 182.497 235.779 178.351 233.368C173.846 230.795 168.3 230.879 163.877 233.585C157.594 236.993 154.196 244.037 155.439 251.077C156.709 258.046 161.659 263.781 168.37 266.056C170.438 266.763 172.61 267.124 174.794 267.121C180.84 266.949 186.608 264.529 190.967 260.333C195.788 256.064 198.582 249.956 198.654 243.517C198.547 227.545 185.528 214.675 169.557 214.744C159.532 214.721 150.154 219.682 144.532 227.982L140.322 234.211C137.601 238.23 133.059 240.627 128.205 240.612H124.219C124.551 242.574 124.949 244.514 125.415 246.431H128.205C134.991 246.45 141.34 243.089 145.144 237.47Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M206.988 253.766C200.75 267.209 187.29 275.822 172.467 275.851V281.67C189.559 281.639 205.079 271.704 212.273 256.2C215.762 248.676 223.295 243.858 231.588 243.843H289.95C290.351 241.928 290.681 239.985 290.951 238.024H231.592C221.028 238.041 211.432 244.181 206.988 253.766Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M160.01 296.22H254.759C257.39 294.425 259.915 292.48 262.325 290.4H152.439C154.851 292.48 157.379 294.424 160.01 296.22Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M227.753 200.195C219.719 200.195 213.204 193.68 213.204 185.646C213.204 177.613 219.719 171.097 227.753 171.097C235.788 171.097 242.302 177.613 242.302 185.646C242.294 193.678 235.784 200.183 227.753 200.195ZM227.753 176.917C222.931 176.917 219.023 180.825 219.023 185.646C219.023 190.468 222.931 194.376 227.753 194.376C232.574 194.376 236.482 190.468 236.482 185.646C236.482 180.825 232.574 176.917 227.753 176.917Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M205.304 174.616C211.43 166.858 220.778 162.341 230.663 162.368V156.549C219 156.519 207.972 161.847 200.747 170.998C194.877 178.433 185.919 182.76 176.444 182.737H135.155C134.011 184.625 132.954 186.575 131.953 188.556H176.445C187.694 188.585 198.335 183.443 205.304 174.616Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M251.919 191.976C251.843 192.083 251.777 192.196 251.718 192.316C246.658 202.524 236.236 208.966 224.844 208.926V214.745C238.365 214.791 250.752 207.185 256.829 195.104C259.703 191 264.399 188.557 269.411 188.557H282.796C281.8 186.575 280.759 184.626 279.595 182.737H269.411C262.412 182.734 255.862 186.191 251.919 191.976Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M204.955 152.906C208.516 149.734 212.578 147.175 216.981 145.34L222.96 143.454C218.814 142.683 214.615 142.22 210.399 142.073C207.053 143.862 203.931 146.036 201.087 148.55C193.187 155.58 182.98 159.461 172.406 159.458H156.011C153.648 161.277 151.382 163.221 149.223 165.278H172.406C184.406 165.281 195.987 160.879 204.955 152.906Z",
                              fill: "#D44A0F",
                            }),
                            (0, d.jsxs)("g", {
                              className: x().privacySatellite,
                              "data-pausable-animation": !0,
                              children: [
                                (0, d.jsx)("path", {
                                  d: "M0 50.1251L10.3705 39.7546L24.1978 53.5824L13.8273 63.9524L0 50.1251Z",
                                  fill: "#F5AE45",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M14.3344 43.7185V63.4471L24.1987 53.5828L14.3344 43.7185Z",
                                  fill: "#F09E26",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M17.2846 29.3845L29.3837 17.2854L46.6683 34.57L34.5692 46.6691L17.2846 29.3845Z",
                                  fill: "#F5AE45",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M46.6687 34.5689L29.7715 17.6721V41.8708L34.5691 46.6684L46.6687 34.5689Z",
                                  fill: "#F09E26",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M26.7912 26.7907L32.841 20.741L43.2115 31.1114L37.1617 37.1612L26.7912 26.7907Z",
                                  fill: "#E38800",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M25.1464 37.2464L31.1957 31.197L32.7549 32.7562L26.7056 38.8055L25.1464 37.2464Z",
                                  fill: "#E38800",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M34.5705 53.1638C33.3057 53.166 32.0915 52.6642 31.1975 51.7689L12.1843 32.7561C10.3242 30.8925 10.3242 27.8746 12.1843 26.011L26.0116 12.1841C27.8752 10.3227 30.8931 10.3227 32.7562 12.1841L51.7694 31.1969C53.6295 33.0601 53.6295 36.0784 51.7694 37.9415L37.9421 51.7689C37.049 52.6642 35.8353 53.166 34.5705 53.1638ZM29.3881 12.9934C28.7076 12.9921 28.056 13.2625 27.5751 13.7429L13.7435 27.5658C12.7446 28.5681 12.7446 30.1902 13.7435 31.1925L32.7562 50.2097C33.7586 51.209 35.3806 51.209 36.383 50.2097L50.2103 36.3872C51.2091 35.3848 51.2091 33.7628 50.2103 32.7605L31.1975 13.7429C30.7166 13.2625 30.0637 12.9921 29.3833 12.9934C29.3837 12.9934 29.3881 12.9934 29.3881 12.9934Z",
                                  fill: "#B7BDC4",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M39.7538 10.3705L50.1238 0L63.9515 13.8278L53.5811 24.1982L39.7538 10.3705Z",
                                  fill: "#F5AE45",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M54.03 3.90405V23.7519L63.9537 13.8282L54.03 3.90405Z",
                                  fill: "#F09E26",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M37.2459 25.1478L56.2587 6.13501L57.8183 7.69419L38.8051 26.7074L37.2459 25.1478Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M45.8882 4.23564L47.4479 2.67603L61.276 16.5046L59.7164 18.0638L45.8882 4.23564Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M42.4327 7.6937L43.9919 6.13452L57.8188 19.9614L56.2596 21.5206L42.4327 7.6937Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M42.4327 13.0486L52.8036 2.67725L54.3628 4.23642L43.9919 14.6078L42.4327 13.0486Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M49.3459 19.9622L59.7173 9.59082L61.2765 11.15L50.9051 21.5214L49.3459 19.9622Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M6.13406 56.2591L25.1473 37.2458L26.7065 38.805L7.69324 57.8182L6.13406 56.2591Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M2.67551 47.4478L4.23468 45.8887L18.0633 59.7169L16.5037 61.2765L2.67551 47.4478Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M6.13406 43.9898L7.69368 42.4307L21.5201 56.2575L19.9609 57.8167L6.13406 43.9898Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M2.67767 52.8025L13.049 42.4312L14.6082 43.9903L4.23685 54.3617L2.67767 52.8025Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M9.59134 59.7156L19.9623 49.3447L21.5214 50.9039L11.1505 61.2753L9.59134 59.7156Z",
                                  fill: "#8C6348",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M24.114 17.1998L22.5548 15.6406L15.6411 22.5543L19.8775 26.7907L26.7912 19.877L24.114 17.1998Z",
                                  fill: "#E38800",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M46.7534 39.8393L44.0762 37.1621L37.1625 44.0758L41.399 48.3122L48.3126 41.3985L46.7534 39.8393Z",
                                  fill: "#E38800",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M21.5315 23.3339C21.5315 24.2475 20.7912 24.9878 19.8775 24.9878C18.9643 24.9878 18.2236 24.2475 18.2236 23.3339C18.2236 22.4206 18.9643 21.6799 19.8775 21.6799C20.7912 21.6799 21.5315 22.4206 21.5315 23.3339Z",
                                  fill: "#FABC5F",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M24.9883 19.8771C24.9883 20.7908 24.248 21.531 23.3344 21.531C22.4211 21.531 21.6804 20.7908 21.6804 19.8771C21.6804 18.9639 22.4211 18.2231 23.3344 18.2231C24.248 18.2231 24.9883 18.9639 24.9883 19.8771Z",
                                  fill: "#FABC5F",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M42.2733 44.0758C42.2733 44.9895 41.533 45.7298 40.6194 45.7298C39.7061 45.7298 38.9654 44.9895 38.9654 44.0758C38.9654 43.1626 39.7061 42.4219 40.6194 42.4219C41.533 42.4219 42.2733 43.1626 42.2733 44.0758Z",
                                  fill: "#FABC5F",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M45.7301 40.619C45.7301 41.5327 44.9899 42.273 44.0762 42.273C43.1625 42.273 42.4222 41.5327 42.4222 40.619C42.4222 39.7058 43.1625 38.9651 44.0762 38.9651C44.9899 38.9651 45.7301 39.7058 45.7301 40.619Z",
                                  fill: "#FABC5F",
                                }),
                                (0, d.jsxs)("g", {
                                  className: x().privacyRays,
                                  "data-pausable-animation": !0,
                                  children: [
                                    (0, d.jsx)("line", {
                                      y1: "-1",
                                      x2: "9.37468",
                                      y2: "-1",
                                      transform:
                                        "matrix(0.387503 0.921869 0.921869 -0.387503 43.3517 53.0369)",
                                      stroke: "#EDF046",
                                      strokeWidth: "2",
                                    }),
                                    (0, d.jsx)("line", {
                                      y1: "-1",
                                      x2: "8.21578",
                                      y2: "-1",
                                      transform:
                                        "matrix(0.836474 0.548006 0.548006 -0.836474 55.7822 41.207)",
                                      stroke: "#EDF046",
                                      strokeWidth: "2",
                                    }),
                                    (0, d.jsx)("line", {
                                      y1: "-1",
                                      x2: "12.3741",
                                      y2: "-1",
                                      transform:
                                        "matrix(0.728511 0.685034 0.685034 -0.728511 49.9344 48.1206)",
                                      stroke: "#EDF046",
                                      strokeWidth: "2",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, d.jsx)("circle", {
                              cx: "408",
                              cy: "133",
                              r: "14",
                              fill: "white",
                              children: (0, d.jsx)("animateTransform", {
                                attributeName: "transform",
                                attributeType: "XML",
                                type: "rotate",
                                from: "00 240 185",
                                to: "360 240 185",
                                dur: "25s",
                                repeatCount: "indefinite",
                              }),
                            }),
                            (0, d.jsx)("circle", {
                              cx: "408",
                              cy: "133",
                              r: "7",
                              fill: "white",
                              children: (0, d.jsx)("animateTransform", {
                                attributeName: "transform",
                                attributeType: "XML",
                                type: "rotate",
                                from: "360 240 185",
                                to: "0 240 185",
                                dur: "15s",
                                repeatCount: "indefinite",
                              }),
                            }),
                            (0, d.jsx)("circle", {
                              cx: "408",
                              cy: "133",
                              r: "14",
                              fill: "white",
                              children: (0, d.jsx)("animateTransform", {
                                attributeName: "transform",
                                attributeType: "XML",
                                type: "rotate",
                                from: "360 240 185",
                                to: "0 240 185",
                                dur: "20s",
                                repeatCount: "indefinite",
                              }),
                            }),
                            (0, d.jsxs)("g", {
                              opacity: "0.5",
                              children: [
                                (0, d.jsx)("line", {
                                  x1: "42",
                                  y1: "395",
                                  x2: "42",
                                  y2: "403",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "38",
                                  y1: "399",
                                  x2: "46",
                                  y2: "399",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("g", {
                              opacity: "0.5",
                              children: [
                                (0, d.jsx)("line", {
                                  x1: "223",
                                  y1: "471",
                                  x2: "223",
                                  y2: "479",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "219",
                                  y1: "475",
                                  x2: "227",
                                  y2: "475",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("g", {
                              opacity: "0.5",
                              children: [
                                (0, d.jsx)("line", {
                                  x1: "481",
                                  y1: "43",
                                  x2: "481",
                                  y2: "51",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "477",
                                  y1: "47",
                                  x2: "485",
                                  y2: "47",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("g", {
                              opacity: "0.5",
                              children: [
                                (0, d.jsx)("line", {
                                  x1: "349",
                                  y1: "237",
                                  x2: "349",
                                  y2: "245",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "345",
                                  y1: "241",
                                  x2: "353",
                                  y2: "241",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("g", {
                              opacity: "0.5",
                              children: [
                                (0, d.jsx)("line", {
                                  x1: "113",
                                  y1: "146",
                                  x2: "113",
                                  y2: "154",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "109",
                                  y1: "150",
                                  x2: "117",
                                  y2: "150",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("g", {
                              opacity: "0.5",
                              children: [
                                (0, d.jsx)("line", {
                                  x1: "246",
                                  y1: "37",
                                  x2: "246",
                                  y2: "45",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                                (0, d.jsx)("line", {
                                  x1: "242",
                                  y1: "41",
                                  x2: "250",
                                  y2: "41",
                                  stroke: "#EDF046",
                                  strokeWidth: "2",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("svg", {
                className: "backbone ".concat(x().backbone),
                viewBox: "0 0 749 288",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsx)("g", {
                    filter: "url(#filter0_d_43_23)",
                    children: (0, d.jsx)("path", {
                      d: "M13 11.5V130C13 147.673 27.3269 162 45 162H360.5H736M736 162V11.5M736 162V277",
                      stroke: "#B173FF",
                      strokeWidth: "1.5",
                    }),
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsxs)("filter", {
                      id: "filter0_d_43_23",
                      x: "0.5",
                      y: "0.5",
                      width: "748",
                      height: "287.5",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, d.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, d.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, d.jsx)("feOffset", {}),
                        (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                        (0, d.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_43_23",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_43_23",
                          result: "shape",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, d.jsx)("div", { className: x().asteroid }),
              (0, d.jsxs)("div", {
                className: x().automate,
                children: [
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsxs)("h2", {
                        children: [
                          "Automate your",
                          (0, d.jsx)("br", {}),
                          "virtual life",
                        ],
                      }),
                      (0, d.jsxs)("p", {
                        children: [
                          "Remove the hassle of your ",
                          (0, d.jsx)("strong", { children: "virtual" }),
                          " life by ",
                          (0, d.jsx)("strong", { children: "automating" }),
                          " stuff. You can think of Orion as your virtual brain.",
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)("div", {
                    className: ""
                      .concat(x().animationContainer, " ")
                      .concat(x().automateAnimation),
                    children: (0, d.jsxs)("svg", {
                      viewBox: "0 0 693 579",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      "data-pausable-animation": !0,
                      children: [
                        (0, d.jsx)("g", {
                          className: x().automateWires,
                          "data-pausable-animation": !0,
                          filter: "url(#filter0_d_304:24)",
                          children: (0, d.jsx)("path", {
                            d: "M192.5 213H294.152C300.823 213 305.624 219.408 303.749 225.81L258.251 381.19C256.376 387.592 261.177 394 267.848 394H352.5",
                            stroke: "#B173FF",
                            strokeWidth: "2",
                          }),
                        }),
                        (0, d.jsx)("g", {
                          className: x().automateWires,
                          "data-pausable-animation": !0,
                          filter: "url(#filter1_d_304:24)",
                          children: (0, d.jsx)("path", {
                            d: "M389.5 416.5L376.695 466.52C375.076 472.845 379.853 479 386.382 479H473.346C482.541 479 490.552 472.731 492.761 463.805L575.5 129.5",
                            stroke: "#B173FF",
                            strokeWidth: "2",
                          }),
                        }),
                        (0, d.jsxs)("g", {
                          className: x().automateRocket,
                          "data-pausable-animation": !0,
                          children: [
                            (0, d.jsx)("path", {
                              d: "M182.801 127.19V219.478H156.523V146.544C156.523 141.566 158.502 136.791 162.021 133.272L165.908 129.385L169.444 123.491C170.744 121.326 173.084 120.001 175.61 120.001C179.582 120 182.801 123.219 182.801 127.19Z",
                              fill: "#D0D7DF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M173.416 219.478L175.293 228.863H164.031L165.908 219.478H173.416Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M156.523 191.324V217.601L134 226.986V217.601L156.523 191.324Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M205.324 204.463V219.479H177.17V164.307C177.17 160.079 179.284 156.131 182.801 153.786L190.309 178.185L205.324 204.463Z",
                              fill: "#C3C9D1",
                            }),
                            (0, d.jsx)("path", {
                              d: "M167.785 146.277V198.832H156.523V195.078H164.031V150.031H156.523V146.277H167.785Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M184.678 219.478V210.093H205.324V219.478H184.678Z",
                              fill: "#B7BDC4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M194.062 219.478V210.093H197.816V219.478H194.062Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M169.444 123.491L167.035 127.508H173.416V140.647H182.801V127.191C182.801 123.219 179.582 120 175.61 120C173.084 120 170.743 121.326 169.444 123.491Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M150.892 219.948L156.523 217.601V191.324L150.892 197.893V219.948Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M160.278 200.709C158.956 200.716 157.659 201.075 156.523 201.75V219.478H167.785V208.216C167.785 204.07 164.424 200.709 160.278 200.709Z",
                              fill: "#C3C9D1",
                            }),
                            (0, d.jsx)("path", {
                              d: "M164.031 210.093V221.355H152.77V210.093C152.77 206.983 155.291 204.462 158.4 204.462C161.51 204.462 164.031 206.983 164.031 210.093Z",
                              fill: "#D0D7DF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M152.77 228.863V221.355H164.031V228.863H152.77Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M165.158 223.232H174.166L173.416 219.479H165.908L165.158 223.232Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M167.785 142.523V126.256L165.908 129.385L164.031 131.262V142.523H167.785Z",
                              fill: "#2A90DE",
                            }),
                          ],
                        }),
                        (0, d.jsx)("path", {
                          d: "M117 409C181.617 409 234 356.617 234 292C234 227.383 181.617 175 117 175C52.3827 175 0 227.383 0 292C0 356.617 52.3827 409 117 409Z",
                          fill: "#F1F1F4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M117 175V409C181.617 409 234 356.617 234 292C234 227.383 181.617 175 117 175Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M162.703 288.801C176.564 288.801 187.84 277.524 187.84 263.664C187.84 249.804 176.564 238.527 162.703 238.527C148.843 238.527 137.566 249.804 137.566 263.664C137.566 277.524 148.843 288.801 162.703 288.801Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M126.141 330.848C112.28 330.848 101.004 342.124 101.004 355.984C101.004 369.845 112.28 381.121 126.141 381.121C140.001 381.121 151.277 369.845 151.277 355.984C151.277 342.124 140.001 330.848 126.141 330.848Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M57.5859 294.285C43.7256 294.285 32.4492 305.561 32.4492 319.422C32.4492 333.282 43.7256 344.559 57.5859 344.559C71.4463 344.559 82.7227 333.282 82.7227 319.422C82.7227 305.561 71.4463 294.285 57.5859 294.285Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M117 244.012C128.34 244.012 137.566 234.786 137.566 223.445C137.566 212.105 128.34 202.879 117 202.879C105.66 202.879 96.4336 212.105 96.4336 223.445C96.4336 234.786 105.66 244.012 117 244.012Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M64.8984 234.871C53.5581 234.871 44.332 244.097 44.332 255.438C44.332 266.778 53.5581 276.004 64.8984 276.004C76.2388 276.004 85.4648 266.778 85.4648 255.438C85.4648 244.097 76.2388 234.871 64.8984 234.871Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M180.984 303.426C169.644 303.426 160.418 312.652 160.418 323.992C160.418 335.333 169.644 344.559 180.984 344.559C192.325 344.559 201.551 335.333 201.551 323.992C201.551 312.652 192.325 303.426 180.984 303.426Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M130.254 285.602C130.254 274.261 121.028 265.035 109.688 265.035C98.3472 265.035 89.1211 274.261 89.1211 285.602C89.1211 296.942 98.3472 306.168 109.688 306.168C121.028 306.168 130.254 296.942 130.254 285.602Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M126.141 330.848C122.916 330.848 119.835 331.465 117 332.576V379.393C119.835 380.504 122.916 381.121 126.141 381.121C140.001 381.121 151.277 369.845 151.277 355.984C151.277 342.124 140.001 330.848 126.141 330.848Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M137.566 223.445C137.566 212.105 128.34 202.879 117 202.879V244.012C128.34 244.012 137.566 234.786 137.566 223.445Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M130.254 285.601C130.254 276.836 124.74 269.338 117 266.383V304.82C124.74 301.865 130.254 294.367 130.254 285.601Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M78.1523 369.695C81.9385 369.695 85.0078 366.626 85.0078 362.84C85.0078 359.054 81.9385 355.984 78.1523 355.984C74.3662 355.984 71.2969 359.054 71.2969 362.84C71.2969 366.626 74.3662 369.695 78.1523 369.695Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M98.7188 330.848C102.505 330.848 105.574 327.778 105.574 323.992C105.574 320.206 102.505 317.137 98.7188 317.137C94.9326 317.137 91.8633 320.206 91.8633 323.992C91.8633 327.778 94.9326 330.848 98.7188 330.848Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M142.137 318.508C145.923 318.508 148.992 315.439 148.992 311.652C148.992 307.866 145.923 304.797 142.137 304.797C138.351 304.797 135.281 307.866 135.281 311.652C135.281 315.439 138.351 318.508 142.137 318.508Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M155.848 228.016C159.634 228.016 162.703 224.946 162.703 221.16C162.703 217.374 159.634 214.305 155.848 214.305C152.061 214.305 148.992 217.374 148.992 221.16C148.992 224.946 152.061 228.016 155.848 228.016Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M34.7344 289.715C38.5205 289.715 41.5898 286.646 41.5898 282.859C41.5898 279.073 38.5205 276.004 34.7344 276.004C30.9482 276.004 27.8789 279.073 27.8789 282.859C27.8789 286.646 30.9482 289.715 34.7344 289.715Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M75.8672 225.73C79.6534 225.73 82.7227 222.661 82.7227 218.875C82.7227 215.089 79.6534 212.02 75.8672 212.02C72.081 212.02 69.0117 215.089 69.0117 218.875C69.0117 222.661 72.081 225.73 75.8672 225.73Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M201.551 287.43C205.337 287.43 208.406 284.36 208.406 280.574C208.406 276.788 205.337 273.719 201.551 273.719C197.765 273.719 194.695 276.788 194.695 280.574C194.695 284.36 197.765 287.43 201.551 287.43Z",
                          fill: "#BEBCDD",
                        }),
                        (0, d.jsx)("path", {
                          d: "M596.316 116.002C596.316 126.668 587.669 135.315 577.003 135.315C566.337 135.315 557.69 126.668 557.69 116.002C557.69 105.334 566.337 96.6873 577.003 96.6873C587.669 96.6873 596.316 105.334 596.316 116.002Z",
                          fill: "#FABC5F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M531.13 208.663C518.514 209.223 506.209 204.65 497.019 195.986C484.319 183.285 481.029 162.937 487.748 138.694C494.262 115.218 509.468 90.6661 530.566 69.5529C551.664 48.4397 576.216 33.244 599.709 26.735C623.961 20.0152 644.303 23.301 657 36.0056C669.697 48.7102 672.99 69.0547 666.27 93.2963C659.757 116.774 644.55 141.324 623.452 162.439C602.354 183.552 577.802 198.748 554.31 205.255C546.771 207.427 538.975 208.575 531.13 208.663ZM622.861 31.0662C615.719 31.1548 608.619 32.2093 601.758 34.1946C579.549 40.3749 556.206 54.86 536.036 75.0348C515.866 95.2097 501.361 118.547 495.196 140.757C489.248 162.202 491.837 179.878 502.481 190.524C513.127 201.169 530.799 203.753 552.248 197.808C574.457 191.627 597.8 177.142 617.97 156.968C638.141 136.793 652.646 113.456 658.811 91.2453C664.759 69.8005 662.17 52.1244 651.525 41.4799C643.765 34.2878 633.429 30.5297 622.861 31.0662Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M533.834 185.656C526.669 186.028 519.659 183.485 514.402 178.603C497.557 161.759 511.856 121.05 546.96 85.9573C582.063 50.8649 622.76 36.5586 639.605 53.3988C656.45 70.2405 642.151 110.952 607.046 146.045C581.909 171.187 553.897 185.656 533.834 185.656ZM620.153 53.9719C602.555 53.9719 575.671 68.1696 552.421 91.4194C521.45 122.395 506.54 159.815 519.864 173.141C533.186 186.468 570.615 171.558 601.586 140.583C632.556 109.609 647.466 72.1875 634.144 58.8609C630.327 55.4161 625.282 53.654 620.153 53.9719Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M529.107 232.005C509.041 232.005 491.952 225.667 479.666 213.368C462.619 196.346 457.006 170.148 463.828 139.587C470.51 109.655 488.394 78.9706 514.185 53.1839C539.976 27.3972 570.657 9.50862 600.589 2.82697C631.151 -3.9907 657.37 1.61657 674.366 18.6355C691.362 35.6545 696.997 61.8553 690.176 92.4133C683.493 122.345 665.609 153.03 639.819 178.816C614.028 204.603 583.35 222.495 553.418 229.178C545.441 231.004 537.288 231.955 529.107 232.005ZM624.9 7.72817C617.291 7.7786 609.704 8.66195 602.289 10.366C573.77 16.7328 544.425 33.8786 519.662 58.649C494.898 83.4209 477.734 112.753 471.367 141.271C465.141 169.159 470.008 192.823 485.099 207.906C500.19 222.99 523.845 227.86 551.733 221.637C580.251 215.272 609.596 198.126 634.36 173.354C659.123 148.582 676.273 119.25 682.638 90.7322C688.866 62.8441 683.986 39.1817 668.907 24.0976C658.119 13.2942 642.892 7.72817 624.9 7.72817Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M526.789 56.13C526.789 61.4638 522.465 65.7873 517.133 65.7873C511.799 65.7873 507.476 61.4638 507.476 56.13C507.476 50.7979 511.799 46.4744 517.133 46.4744C522.465 46.4744 526.789 50.7979 526.789 56.13Z",
                          fill: "#8C6348",
                        }),
                        (0, d.jsx)("circle", {
                          r: "10",
                          fill: "#F06529",
                          children: (0, d.jsx)("animateMotion", {
                            dur: "15s",
                            repeatCount: "indefinite",
                            path: "M531.13 208.663C518.514 209.223 506.209 204.65 497.019 195.986C484.319 183.285 481.029 162.937 487.748 138.694C494.262 115.218 509.468 90.6661 530.566 69.5529C551.664 48.4397 576.216 33.244 599.709 26.735C623.961 20.0152 644.303 23.301 657 36.0056C669.697 48.7102 672.99 69.0547 666.27 93.2963C659.757 116.774 644.55 141.324 623.452 162.439C602.354 183.552 577.802 198.748 554.31 205.255C546.771 207.427 538.975 208.575 531.13 208.663ZM622.861",
                          }),
                        }),
                        (0, d.jsx)("circle", {
                          r: "10",
                          fill: "#2A90DE",
                          children: (0, d.jsx)("animateMotion", {
                            dur: "7.5s",
                            repeatCount: "indefinite",
                            path: "M533.834 185.656C526.669 186.028 519.659 183.485 514.402 178.603C497.557 161.759 511.856 121.05 546.96 85.9573C582.063 50.8649 622.76 36.5586 639.605 53.3988C656.45 70.2405 642.151 110.952 607.046 146.045C581.909 171.187 553.897 185.656 533.834 185.656ZM620.153 53.9719C602.555 53.9719 575.671 68.1696",
                          }),
                        }),
                        ,
                        (0, d.jsx)("path", {
                          className: x().automateLeft3rdWave,
                          "data-pausable-animation": !0,
                          d: "M206.503 511.3C272.214 505.613 307.47 515.06 364.915 553.747",
                          stroke: "#1C75DB",
                          strokeWidth: "4",
                        }),
                        (0, d.jsx)("path", {
                          className: x().automateLeft2ndWave,
                          "data-pausable-animation": !0,
                          d: "M230.669 529.293C273.538 525.595 296.541 531.759 334.023 556.987",
                          stroke: "#1C75DB",
                          strokeWidth: "4",
                        }),
                        (0, d.jsx)("path", {
                          className: x().automateLeft1stWave,
                          "data-pausable-animation": !0,
                          d: "M243.467 547.216C273.25 544.153 289.158 548.416 314.945 566.368",
                          stroke: "#1C75DB",
                          strokeWidth: "4",
                        }),
                        (0, d.jsx)("path", {
                          className: x().automateRight3rdWave,
                          "data-pausable-animation": !0,
                          d: "M417.368 553.747C471.431 515.966 506.688 506.519 575.779 511.3",
                          stroke: "#1C75DB",
                          strokeWidth: "4",
                        }),
                        (0, d.jsx)("path", {
                          className: x().automateRight2ndWave,
                          "data-pausable-animation": !0,
                          d: "M447.293 557.245C482.57 532.609 505.572 526.445 550.647 529.552",
                          stroke: "#1C75DB",
                          strokeWidth: "4",
                        }),
                        (0, d.jsx)("path", {
                          className: x().automateRight1stWave,
                          "data-pausable-animation": !0,
                          d: "M467.337 566.368C491.599 548.824 507.507 544.562 538.816 547.216",
                          stroke: "#1C75DB",
                          strokeWidth: "4",
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "335",
                              y1: "104",
                              x2: "335",
                              y2: "112",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "331",
                              y1: "108",
                              x2: "339",
                              y2: "108",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "611",
                              y1: "384",
                              x2: "611",
                              y2: "392",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "607",
                              y1: "388",
                              x2: "615",
                              y2: "388",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "186",
                              y1: "475",
                              x2: "186",
                              y2: "483",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "182",
                              y1: "479",
                              x2: "190",
                              y2: "479",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "425",
                              y1: "224",
                              x2: "425",
                              y2: "232",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "421",
                              y1: "228",
                              x2: "429",
                              y2: "228",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("defs", {
                          children: [
                            (0, d.jsxs)("filter", {
                              id: "filter0_d_304:24",
                              x: "181.5",
                              y: "201",
                              width: "182",
                              height: "205",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  in: "SourceAlpha",
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                  result: "hardAlpha",
                                }),
                                (0, d.jsx)("feOffset", {}),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "5.5",
                                }),
                                (0, d.jsx)("feComposite", {
                                  in2: "hardAlpha",
                                  operator: "out",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in2: "BackgroundImageFix",
                                  result: "effect1_dropShadow_304:24",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "effect1_dropShadow_304:24",
                                  result: "shape",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter1_d_304:24",
                              x: "364.377",
                              y: "118.26",
                              width: "223.094",
                              height: "372.74",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  in: "SourceAlpha",
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                  result: "hardAlpha",
                                }),
                                (0, d.jsx)("feOffset", {}),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "5.5",
                                }),
                                (0, d.jsx)("feComposite", {
                                  in2: "hardAlpha",
                                  operator: "out",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in2: "BackgroundImageFix",
                                  result: "effect1_dropShadow_304:24",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "effect1_dropShadow_304:24",
                                  result: "shape",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, d.jsxs)("svg", {
                className: "backbone ".concat(x().backbone),
                viewBox: "0 0 749 298",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsx)("g", {
                    filter: "url(#filter0_d_43_24)",
                    children: (0, d.jsx)("path", {
                      d: "M13 286.5V184.5C13 166.827 27.3269 152.5 45 152.5H351H704C721.673 152.5 736 138.173 736 120.5V11.5",
                      stroke: "#B173FF",
                      strokeWidth: "1.5",
                    }),
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsxs)("filter", {
                      id: "filter0_d_43_24",
                      x: "0.5",
                      y: "0.5",
                      width: "748",
                      height: "297",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, d.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, d.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, d.jsx)("feOffset", {}),
                        (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                        (0, d.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_43_24",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_43_24",
                          result: "shape",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                className: x().imagination,
                children: [
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsxs)("h2", {
                        children: [
                          "Imagination is",
                          (0, d.jsx)("br", {}),
                          "the only limit",
                        ],
                      }),
                      (0, d.jsxs)("p", {
                        children: [
                          "Orion is built on a ",
                          (0, d.jsx)("strong", { children: "modular" }),
                          " architecture that gives you the flexibility to create or use ",
                          (0, d.jsx)("strong", {
                            children: "packages/modules (skills)",
                          }),
                          " that fit your need. There is no barrier, only an infinity of possibilities. Be creative.",
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)("div", {
                    className: ""
                      .concat(x().animationContainer, " ")
                      .concat(x().imaginationAnimation),
                    children: (0, d.jsxs)("svg", {
                      viewBox: "0 0 919 696",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      "data-pausable-animation": !0,
                      children: [
                        (0, d.jsxs)("g", {
                          className: x().imaginationRocket,
                          "data-pausable-animation": !0,
                          children: [
                            (0, d.jsx)("path", {
                              d: "M153.035 45.0995V84.8799H141.709V53.4416C141.709 51.2962 142.561 49.2379 144.078 47.7209L145.754 46.0455L147.278 43.505C147.838 42.5715 148.847 42.0004 149.936 42.0004C151.648 42.0001 153.035 43.3877 153.035 45.0995Z",
                              fill: "#D0D7DF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M148.99 84.8799L149.799 88.925H144.945L145.754 84.8799H148.99Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M141.709 72.744V84.0709L132 88.116V84.0709L141.709 72.744Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M162.744 78.4073V84.8799H150.608V61.0986C150.608 59.2758 151.519 57.5742 153.035 56.5632L156.272 67.0805L162.744 78.4073Z",
                              fill: "#C3C9D1",
                            }),
                            (0, d.jsx)("path", {
                              d: "M146.563 53.3269V75.9802H141.709V74.3622H144.945V54.9449H141.709V53.3269H146.563Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M153.844 84.8799V80.8345H162.744V84.8799H153.844Z",
                              fill: "#B7BDC4",
                            }),
                            (0, d.jsx)("path", {
                              d: "M157.89 84.8799V80.8345H159.508V84.8799H157.89Z",
                              fill: "#808B96",
                            }),
                            (0, d.jsx)("path", {
                              d: "M147.278 43.5051L146.239 45.2365H148.99V50.8999H153.035V45.0997C153.035 43.3878 151.648 42.0002 149.936 42.0002C148.847 42.0002 147.838 42.5716 147.278 43.5051Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M139.281 85.0823L141.709 84.0709V72.7441L139.281 75.576V85.0823Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M143.327 76.7893C142.757 76.7926 142.198 76.947 141.709 77.2383V84.8799H146.563V80.0253C146.563 78.2381 145.114 76.7893 143.327 76.7893Z",
                              fill: "#C3C9D1",
                            }),
                            (0, d.jsx)("path", {
                              d: "M144.945 80.8345V85.6887H140.091V80.8345C140.091 79.494 141.177 78.4073 142.518 78.4073C143.858 78.4073 144.945 79.494 144.945 80.8345Z",
                              fill: "#D0D7DF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M140.091 88.925V85.6888H144.945V88.925H140.091Z",
                              fill: "#A8B2BF",
                            }),
                            (0, d.jsx)("path", {
                              d: "M145.43 86.4978H149.314L148.99 84.8798H145.754L145.43 86.4978Z",
                              fill: "#576573",
                            }),
                            (0, d.jsx)("path", {
                              d: "M146.563 51.7087V44.6968L145.754 46.0456L144.945 46.8545V51.7087H146.563Z",
                              fill: "#2A90DE",
                            }),
                          ],
                        }),
                        (0, d.jsx)("rect", {
                          className: x().imaginationIdea,
                          "data-pausable-animation": !0,
                          x: "143",
                          y: "75",
                          width: "31",
                          height: "31",
                          fill: "url(#pattern0)",
                        }),
                        (0, d.jsx)("path", {
                          d: "M538.006 185.395L543.495 197.371L525.83 202.521L524.145 189.436L538.006 185.395Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M495.175 64.5153C504.914 69.857 512.133 78.85 515.242 89.5132L543.005 184.735L519.452 191.603L491.688 96.3807C488.579 85.7175 489.833 74.254 495.175 64.5153Z",
                          fill: "#F5AE45",
                        }),
                        (0, d.jsx)("path", {
                          d: "M495.157 64.5535C493.245 72.2244 493.395 80.2694 495.594 87.8627L525.341 189.886L519.452 191.603L491.688 96.3807C488.583 85.7315 489.829 74.2843 495.157 64.5535Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M520.687 108.188L497.133 115.055L498.85 120.944L522.404 114.077L520.687 108.188Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M529.271 137.629L505.717 144.497L507.434 150.384L530.987 143.517L529.271 137.629Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M513.486 84.7325C514.168 86.2899 514.755 87.8864 515.242 89.5132L515.536 90.5231L491.982 97.3906L491.688 96.3807C491.224 94.7459 490.861 93.0853 490.598 91.4058L513.486 84.7325Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M525.038 196.363L524.145 189.436L538.006 185.395L540.912 191.734L525.038 196.363Z",
                          fill: "#576573",
                        }),
                        (0, d.jsx)("path", {
                          d: "M571.723 42.1964C581.461 47.5382 588.68 56.5312 591.789 67.1943L619.553 162.417L595.999 169.284L568.236 74.0618C565.127 63.3986 566.381 51.9352 571.723 42.1964Z",
                          fill: "#F5AE45",
                        }),
                        (0, d.jsx)("path", {
                          d: "M571.705 42.2346C569.793 49.9055 569.943 57.9506 572.141 65.5442L601.887 167.567L595.999 169.284L568.236 74.0619C565.131 63.4127 566.377 51.9655 571.705 42.2346Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M597.234 85.8689L573.681 92.7364L575.398 98.6254L598.951 91.7579L597.234 85.8689Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M605.818 115.31L582.265 122.178L583.981 128.066L607.535 121.198L605.818 115.31Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M590.034 62.4136C590.715 63.971 591.302 65.5675 591.789 67.1944L592.084 68.2042L568.53 75.0717L568.236 74.0619C567.772 72.427 567.409 70.7665 567.146 69.087L590.034 62.4136Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M614.554 163.076L620.042 175.052L602.378 180.202L600.693 167.117L614.554 163.076Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M601.584 174.044L600.693 167.117L614.554 163.076L617.46 169.415L601.584 174.044Z",
                          fill: "#576573",
                        }),
                        (0, d.jsx)("path", {
                          d: "M523.148 18.0265C542.92 24.2349 558.28 39.916 564.081 59.8127L593.424 160.452L540.43 175.903L511.087 75.2641C505.286 55.3674 509.811 33.8884 523.148 18.0265Z",
                          fill: "#F06529",
                        }),
                        (0, d.jsx)("path", {
                          d: "M523.148 18.0266L523.166 18.0215C520.371 30.0075 520.71 42.5107 524.149 54.3265L558.095 170.753L540.43 175.903L511.087 75.2642C505.286 55.3675 509.811 33.8885 523.148 18.0266Z",
                          fill: "#DE591F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M566.813 69.1841L513.819 84.6354L515.536 90.5233L568.53 75.0719L566.813 69.1841Z",
                          fill: "#D45119",
                        }),
                        (0, d.jsx)("path", {
                          d: "M553.064 175.414L582.506 166.83L559.183 86.8399C556.079 76.1919 547.612 67.9487 536.883 65.1327C529.348 73.275 526.638 84.7757 529.743 95.4237L553.066 175.414L553.064 175.414Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M628.753 150.151L581.647 163.886L561.046 93.2268L590.728 129.294L613.456 135.26C620.816 137.193 626.623 142.844 628.753 150.151Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M505.101 186.204L552.206 172.47L531.604 101.811L525.957 148.179L509.998 165.425C504.83 171.011 502.97 178.897 505.101 186.204Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M569.502 177.01L584.223 172.718L582.506 166.83C580.61 160.327 573.8 156.59 567.296 158.487L564.352 159.345L569.502 177.01Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M569.502 177.01L554.782 181.302L553.065 175.414C551.169 168.91 554.904 162.1 561.407 160.203L564.352 159.345L569.502 177.01Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M563.005 143.767L557.116 145.484L566.558 177.869L572.447 176.151L563.005 143.767Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M584.223 172.718L569.502 177.01L572.936 188.787L587.656 184.495L584.223 172.718Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M569.502 177.01L554.782 181.301L558.216 193.078L572.936 188.786L569.502 177.01Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M541.646 94.2662C542.473 91.9651 545.009 90.7689 547.31 91.5961C547.746 91.7538 548.157 91.9781 548.522 92.2612L552.469 87.5653C548.067 83.852 541.49 84.4096 537.778 88.8108C536.882 89.8703 536.209 91.1016 535.793 92.4274L541.646 94.2662Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M585.081 175.662L631.329 158.983L628.753 150.151L581.647 163.886L585.081 175.662Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M555.64 184.246L507.676 195.036L505.101 186.204L552.206 172.469L555.64 184.246Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M572.447 176.151L566.558 177.868L569.992 189.645L575.881 187.928L572.447 176.151Z",
                          fill: "#576573",
                        }),
                        (0, d.jsx)("path", {
                          d: "M529.722 117.267L531.604 101.811L552.206 172.47L546.318 174.186L529.722 117.267Z",
                          fill: "#A8B2BF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M552.206 172.469L555.64 184.246L549.644 185.595L546.318 174.186L552.206 172.469Z",
                          fill: "#576573",
                        }),
                        (0, d.jsx)("path", {
                          d: "M662.028 74.5928L844.437 210.489C849.022 230.859 849.934 251.885 847.128 272.58L601.763 89.7811C620.788 81.1694 641.198 76.0278 662.028 74.5928Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M830.753 310.418C819.621 298.836 806.657 289.177 792.373 281.825L770.359 270.503C756.075 263.151 743.111 253.493 731.979 241.91L714.832 224.056C703.7 212.473 690.736 202.815 676.452 195.463L654.438 184.141C640.154 176.789 627.19 167.13 616.058 155.548L598.911 137.693C589.161 127.545 577.987 118.86 565.742 111.918L565.637 111.839C576.728 103.039 588.865 95.6294 601.763 89.7807L847.128 272.58C845.126 287.314 841.236 301.72 835.556 315.463L835.096 314.939L830.753 310.418Z",
                          fill: "#FABC5F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M778.42 108.731C811.922 133.628 835.358 169.746 844.437 210.489L662.028 74.5927C703.664 71.6325 744.979 83.7552 778.42 108.731Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M638.177 267.263C623.915 246.797 603.397 231.511 579.706 223.701C567.939 219.818 556.871 214.064 546.936 206.663L512.942 181.336C518.434 168.228 525.506 155.841 533.995 144.447L814.136 353.155C805.648 364.549 795.802 374.87 784.814 383.884L663.88 293.787C653.95 286.38 645.266 277.427 638.177 267.263Z",
                          fill: "#FABC5F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M546.936 206.663C556.871 214.064 567.94 219.816 579.706 223.702C603.397 231.511 623.915 246.798 638.177 267.263C645.267 277.426 653.945 286.386 663.88 293.788L784.814 383.884C761.383 403.096 733.346 415.857 703.476 420.927L617.101 356.577C607.167 349.175 596.098 343.424 584.33 339.54C560.641 331.728 540.123 316.442 525.859 295.978C518.908 286.021 510.423 277.228 500.728 269.916C497.028 239.827 501.236 209.298 512.942 181.337C512.943 181.338 546.936 206.663 546.936 206.663Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M525.859 295.979C540.123 316.443 560.641 331.729 584.33 339.54C596.098 343.424 607.167 349.176 617.102 356.577L703.476 420.927C608.482 437.223 518.267 373.42 501.972 278.429C501.487 275.603 501.07 272.762 500.728 269.916C510.426 277.225 518.908 286.021 525.859 295.979Z",
                          fill: "#FABC5F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M565.623 111.859L565.728 111.937C577.973 118.88 589.145 127.566 598.897 137.713L616.044 155.567C627.176 167.15 640.14 176.808 654.424 184.161L676.438 195.482C690.722 202.835 703.686 212.493 714.818 224.075L731.965 241.93C743.097 253.512 756.061 263.171 770.345 270.523L792.359 281.845C806.643 289.197 819.607 298.855 830.739 310.438L835.096 314.939L835.547 315.456C829.998 328.859 822.812 341.524 814.136 353.156L533.995 144.448C543.078 132.256 553.706 121.3 565.623 111.859Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M668.959 74.2516C668.678 74.6283 668.372 74.9799 668.091 75.3566C589.368 181.044 599.145 328.277 691.143 422.633C595.175 432.416 509.443 362.552 499.655 266.586C489.867 170.624 559.734 84.8796 655.704 75.0943C660.11 74.6448 664.532 74.3649 668.959 74.2516Z",
                          fill: "#E6941E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M530.801 292.538C544.356 311.897 563.782 326.37 586.211 333.819C598.597 337.902 610.246 343.952 620.699 351.748L711.474 419.376C706.044 420.565 700.567 421.495 695.052 422.163L613.503 361.407C604.088 354.385 593.599 348.937 582.443 345.259C557.539 336.989 535.969 320.919 520.919 299.423C515.537 291.735 509.187 284.774 502.027 278.711C501.052 273.101 500.347 267.453 499.921 261.767L503.745 264.616C514.21 272.404 523.349 281.836 530.801 292.538Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M633.234 270.7C619.679 251.341 600.253 236.869 577.825 229.42C565.441 225.338 553.791 219.288 543.337 211.494L510.653 187.143C512.108 183.285 513.679 179.453 515.434 175.684L550.534 201.834C559.949 208.855 570.437 214.304 581.595 217.981C606.501 226.247 628.067 242.322 643.118 263.816C649.832 273.454 658.056 281.946 667.478 288.959L789.528 379.888C786.409 382.641 783.187 385.242 779.916 387.748L660.281 298.618C649.824 290.828 640.691 281.4 633.234 270.7Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M533.995 144.448C535.2 142.83 536.464 141.277 537.716 139.708L817.615 348.235C816.47 349.884 815.343 351.536 814.136 353.156C812.931 354.774 811.67 356.326 810.418 357.895L530.52 149.368C531.665 147.719 532.79 146.065 533.995 144.448Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M608.147 87.0278L847.937 265.674C847.501 270.223 846.844 274.765 846.053 279.291L595.648 92.7364C599.751 90.6781 603.915 88.7488 608.147 87.0278Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M826.41 314.591C815.742 303.488 803.308 294.224 789.616 287.179L767.603 275.855C752.722 268.215 739.217 258.154 727.64 246.082L710.491 228.23C699.821 217.125 687.389 207.863 673.695 200.816L651.682 189.493C636.81 181.845 623.305 171.783 611.719 159.72L594.57 141.868C585.276 132.193 574.64 123.909 562.983 117.273L560.583 116.041C563.892 113.204 567.258 110.498 570.748 107.933C582.696 114.94 593.633 123.546 603.252 133.523L620.401 151.376C631.069 162.479 643.502 171.741 657.195 178.788L679.208 190.111C694.089 197.751 707.593 207.811 719.171 219.884L736.32 237.737C746.99 248.841 759.423 258.103 773.114 265.149L795.127 276.472C810.006 284.116 823.515 294.18 835.096 306.249L837.898 309.366C836.382 313.464 834.708 317.52 832.883 321.53L830.753 319.117L826.41 314.591Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M671.556 74.1818L842.102 201.241C843.776 207.181 845.136 213.211 846.176 219.296L653.092 75.4466C659.22 74.7011 665.385 74.2774 671.556 74.1818Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M619.078 309.425L616.587 300.539C612.094 288.779 604.112 278.672 593.719 271.562C575.588 258.054 556.548 255.321 551.64 261.91C550.463 263.489 550.606 267.56 553.564 273.106C562.122 289.082 579.386 299.61 587.51 299.839C588.238 299.887 588.968 299.786 589.656 299.537C587.004 292.905 581.283 287.991 574.325 286.373L576.448 274.51C586.792 276.736 595.53 283.629 600.093 293.179C602.304 296.958 602.403 301.614 600.356 305.481C597.486 309.9 592.402 312.364 587.16 311.881C578.365 310.931 570.044 307.435 563.213 301.823C554.894 295.678 547.986 287.834 542.947 278.799C537.92 269.415 537.567 260.633 541.971 254.721C552.014 241.241 577.347 244.341 600.917 261.901C613.475 270.558 623.011 282.935 628.185 297.281L630.676 306.176C632.285 312.746 636.232 318.509 641.778 322.385L752.419 404.814C748.298 406.876 744.117 408.769 739.874 410.491L634.581 332.046C626.907 326.57 621.415 318.559 619.078 309.425Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M127 396C146.52 396 162.344 411.825 162.344 431.345V435.586H91.6551V431.345C91.6551 411.824 107.48 396 127 396Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M150.8 405.215C136.54 422.342 110.754 428.868 91.6551 431.325V435.586H162.345V431.345C162.356 421.396 158.163 411.905 150.8 405.215Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M91.6551 441.241H162.344V466.689H91.6551V441.241Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M91.6551 441.241H162.344V445.483H91.6551V441.241Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M86 435.586H168V441.241H86V435.586Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M86 466.689H168V478H86V466.689Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M110.034 470.931H112.862V473.758H110.034V470.931Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M141.138 470.931H143.966V473.758H141.138V470.931Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M111.448 396H119.931V435.586H111.448V396Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M101.552 429.931H111.448V435.586H101.552V429.931Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M134.069 396H142.551V435.586H134.069V396Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M142.551 429.931H152.448V435.586H142.551V429.931Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M119.931 401.655H134.069V427.103H119.931V401.655Z",
                          fill: "#2683C9",
                        }),
                        (0, d.jsx)("path", {
                          d: "M134.069 414.379C134.069 418.283 130.904 421.448 127 421.448C123.096 421.448 119.931 418.283 119.931 414.379C119.931 410.475 123.096 407.31 127 407.31C130.904 407.31 134.069 410.475 134.069 414.379Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M129.828 414.38C129.828 415.941 128.562 417.207 127 417.207C125.438 417.207 124.172 415.941 124.172 414.38C124.172 412.818 125.438 411.552 127 411.552C128.562 411.552 129.828 412.818 129.828 414.38Z",
                          fill: "#A8B2BF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M91.6551 445.483H162.344V448.311H91.6551V445.483Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M91.6551 461.034H162.344V466.689H91.6551V461.034Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M117.103 455.379H136.896V478H117.103V455.379Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M122.758 461.034H131.241V478H122.758V461.034Z",
                          fill: "#8C6348",
                        }),
                        (0, d.jsx)("path", {
                          d: "M122.758 461.034H131.241V465.276H122.758V461.034Z",
                          fill: "#634129",
                        }),
                        (0, d.jsx)("path", {
                          d: "M265 362C284.52 362 300.344 377.825 300.344 397.345V401.586H229.655V397.345C229.655 377.824 245.48 362 265 362Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M288.8 371.215C274.54 388.342 248.754 394.868 229.655 397.325V401.586H300.345V397.345C300.356 387.396 296.163 377.905 288.8 371.215Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M229.655 407.241H300.344V432.689H229.655V407.241Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M229.655 407.241H300.344V411.483H229.655V407.241Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M224 401.586H306V407.241H224V401.586Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M224 432.689H306V444H224V432.689Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M248.034 436.931H250.862V439.758H248.034V436.931Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M279.138 436.931H281.966V439.758H279.138V436.931Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M249.448 362H257.931V401.586H249.448V362Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M239.552 395.931H249.448V401.586H239.552V395.931Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M272.069 362H280.551V401.586H272.069V362Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M280.551 395.931H290.448V401.586H280.551V395.931Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M257.931 367.655H272.069V393.103H257.931V367.655Z",
                          fill: "#2683C9",
                        }),
                        (0, d.jsx)("path", {
                          d: "M272.069 380.379C272.069 384.283 268.904 387.448 265 387.448C261.096 387.448 257.931 384.283 257.931 380.379C257.931 376.475 261.096 373.31 265 373.31C268.904 373.31 272.069 376.475 272.069 380.379Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M267.828 380.38C267.828 381.941 266.562 383.207 265 383.207C263.438 383.207 262.172 381.941 262.172 380.38C262.172 378.818 263.438 377.552 265 377.552C266.562 377.552 267.828 378.818 267.828 380.38Z",
                          fill: "#A8B2BF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M229.655 411.483H300.344V414.311H229.655V411.483Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M229.655 427.034H300.344V432.689H229.655V427.034Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M255.103 421.379H274.896V444H255.103V421.379Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M260.758 427.034H269.241V444H260.758V427.034Z",
                          fill: "#8C6348",
                        }),
                        (0, d.jsx)("path", {
                          d: "M260.758 427.034H269.241V431.276H260.758V427.034Z",
                          fill: "#634129",
                        }),
                        (0, d.jsx)("path", {
                          d: "M403 396C422.52 396 438.344 411.825 438.344 431.345V435.586H367.655V431.345C367.655 411.824 383.48 396 403 396Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M426.8 405.215C412.54 422.342 386.754 428.868 367.655 431.325V435.586H438.345V431.345C438.356 421.396 434.163 411.905 426.8 405.215Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M367.655 441.241H438.344V466.689H367.655V441.241Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M367.655 441.241H438.344V445.483H367.655V441.241Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M362 435.586H444V441.241H362V435.586Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M362 466.689H444V478H362V466.689Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M386.034 470.931H388.862V473.758H386.034V470.931Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M417.138 470.931H419.966V473.758H417.138V470.931Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M387.448 396H395.931V435.586H387.448V396Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M377.552 429.931H387.448V435.586H377.552V429.931Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M410.069 396H418.551V435.586H410.069V396Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M418.551 429.931H428.448V435.586H418.551V429.931Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M395.931 401.655H410.069V427.103H395.931V401.655Z",
                          fill: "#2683C9",
                        }),
                        (0, d.jsx)("path", {
                          d: "M410.069 414.379C410.069 418.283 406.904 421.448 403 421.448C399.096 421.448 395.931 418.283 395.931 414.379C395.931 410.475 399.096 407.31 403 407.31C406.904 407.31 410.069 410.475 410.069 414.379Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M405.828 414.38C405.828 415.941 404.562 417.207 403 417.207C401.438 417.207 400.172 415.941 400.172 414.38C400.172 412.818 401.438 411.552 403 411.552C404.562 411.552 405.828 412.818 405.828 414.38Z",
                          fill: "#A8B2BF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M367.655 445.483H438.344V448.311H367.655V445.483Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M367.655 461.034H438.344V466.689H367.655V461.034Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M393.103 455.379H412.896V478H393.103V455.379Z",
                          fill: "#D0D7DF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M398.758 461.034H407.241V478H398.758V461.034Z",
                          fill: "#8C6348",
                        }),
                        (0, d.jsx)("path", {
                          d: "M398.758 461.034H407.241V465.276H398.758V461.034Z",
                          fill: "#634129",
                        }),
                        (0, d.jsx)("path", {
                          d: "M64.2811 486.593L64.2811 651.755C85.0099 663.262 109.887 672.913 137.746 680.257V458.092C109.887 465.434 85.0099 475.087 64.2811 486.593Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M198.925 687.136C194.903 675.63 194.903 663.891 198.925 652.385L205.135 634.656C209.156 623.149 209.156 611.411 205.135 599.905L198.925 582.175C194.903 570.669 194.903 558.931 198.925 547.425L205.135 529.695C209.156 518.189 209.156 506.451 205.135 494.944L198.925 477.215C195.398 467.135 194.958 456.862 197.623 446.72V446.625C176.76 449.266 156.645 453.118 137.746 458.091V680.256C157.584 685.482 178.741 689.467 200.717 692.121L200.495 691.626L198.925 687.136Z",
                          fill: "#FABC5F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M0.000191058 569.174C-0.0761644 599.481 22.7361 628.795 64.2809 651.755L64.2809 486.593C22.7361 509.552 -0.0761644 538.868 0.000191058 569.174Z",
                          fill: "#E38800",
                        }),
                        (0, d.jsx)("path", {
                          d: "M321.577 556.284C309.546 539.101 309.546 520.523 321.577 503.341C327.548 494.805 330.595 485.864 330.595 476.869V446.089C309.564 443.6 287.977 442.345 266.314 442.345V695.999C287.977 695.999 309.564 694.743 330.595 692.255V582.756C330.584 573.76 327.548 564.82 321.577 556.284Z",
                          fill: "#FABC5F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M330.596 476.87C330.596 485.866 327.545 494.806 321.578 503.343C309.547 520.525 309.547 539.103 321.578 556.285C327.545 564.822 330.596 573.762 330.596 582.757V692.256C375.427 686.947 416.569 676.158 449.976 660.965V582.757C449.976 573.762 453.027 564.822 458.997 556.285C471.025 539.103 471.025 520.525 458.997 503.343C453.154 494.976 450.133 486.221 450.023 477.404C416.605 462.197 375.446 451.404 330.596 446.09C330.596 446.092 330.596 476.87 330.596 476.87Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M458.997 503.343C471.025 520.525 471.025 539.103 458.997 556.285C453.027 564.822 449.976 573.762 449.976 582.757V660.965C556.431 612.722 560.598 532.516 459.299 481.821C456.285 480.313 453.191 478.838 450.024 477.404C450.125 486.221 453.154 494.976 458.997 503.343Z",
                          fill: "#FABC5F",
                        }),
                        (0, d.jsx)("path", {
                          d: "M197.66 446.625V446.72C194.995 456.862 195.439 467.136 198.962 477.215L205.172 494.944C209.194 506.451 209.194 518.189 205.172 529.695L198.962 547.425C194.941 558.931 194.941 570.669 198.962 582.176L205.172 599.905C209.194 611.411 209.194 623.15 205.172 634.656L198.962 652.385C194.941 663.892 194.941 675.63 198.962 687.136L200.496 691.626L200.718 692.113C222.16 694.696 244.19 696.005 266.315 696L266.315 442.346C243.136 442.346 220.058 443.782 197.66 446.625Z",
                          fill: "#F09E26",
                        }),
                        (0, d.jsx)("path", {
                          d: "M57.5508 490.48C58.2671 490.48 58.9762 490.454 59.6924 490.454C260.621 490.463 431.731 560.025 463.295 654.523C562.674 602.888 555.347 522.663 446.929 475.334C338.515 428.007 170.038 431.493 70.655 483.128C66.0918 485.498 61.7213 487.952 57.5508 490.48Z",
                          fill: "#E6941E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M450.288 504.728C461.611 521.018 461.611 538.607 450.288 554.898C443.998 563.881 440.784 573.289 440.795 582.757V664.949C447.194 662.303 453.321 659.517 459.16 656.596V582.757C459.149 574.229 462.043 565.758 467.708 557.667C480.282 539.579 480.282 520.048 467.708 501.96C463.211 495.491 460.484 488.775 459.593 481.975C453.622 478.974 447.358 476.113 440.795 473.398V476.861C440.784 486.333 443.991 495.746 450.288 504.728Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M330.283 554.898C318.96 538.607 318.96 521.018 330.283 504.727C336.573 495.746 339.787 486.338 339.78 476.87V447.276C333.737 446.45 327.621 445.702 321.415 445.089V476.87C321.422 485.398 318.531 493.869 312.863 501.96C300.282 520.048 300.293 539.579 312.863 557.666C318.531 565.756 321.422 574.229 321.415 582.757V693.267C327.621 692.645 333.737 691.897 339.78 691.08V582.757C339.78 573.289 336.573 563.881 330.283 554.898Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M266.315 442.345C263.239 442.345 260.188 442.407 257.131 442.456V695.889C260.188 695.938 263.235 695.999 266.315 695.999C269.391 695.999 272.438 695.938 275.496 695.889V442.456C272.438 442.407 269.391 442.345 266.315 442.345Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M128.565 460.614V677.731C134.524 679.451 140.676 681.039 146.93 682.542V455.812C140.676 457.308 134.524 458.896 128.565 460.614Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M207.982 686.417C204.125 675.389 204.125 664.13 207.982 653.102L214.189 635.372C218.403 623.393 218.403 611.165 214.189 599.188L207.982 581.458C204.125 570.428 204.125 559.171 207.982 548.141L214.189 530.412C218.385 518.435 218.385 506.206 214.189 494.227L207.982 476.498C204.619 466.889 204.179 457.103 206.684 447.437L207.364 445.505C200.881 446.201 194.507 446.987 188.192 447.906C185.876 457.903 186.436 468.005 189.872 477.933L196.078 495.663C199.936 506.691 199.936 517.948 196.078 528.978L189.872 546.708C185.657 558.687 185.657 570.913 189.872 582.892L196.078 600.622C199.936 611.652 199.936 622.909 196.078 633.937L189.872 651.666C185.665 663.645 185.665 675.877 189.872 687.856L191.13 690.84C197.522 691.735 204.005 692.519 210.571 693.196L209.56 690.909L207.982 686.417Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M55.0996 491.962L55.0996 646.383C60.8372 649.935 66.9711 653.342 73.465 656.587L73.465 481.76C66.9711 485.005 60.8372 488.411 55.0996 491.962Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsx)("path", {
                          d: "M390.524 563.454L381.929 558.148C371.643 550.431 366.556 541.399 367.33 532.263C367.33 515.846 381.333 503.575 393.859 503.575C396.862 503.575 401.709 505.424 405.796 509.552C417.533 521.465 414.678 536.085 407.559 540.914C406.955 541.359 406.166 541.74 405.236 542.033C399.542 537.612 398.745 532.149 403.105 527.396L386.667 523.486C379.965 530.475 380.435 538.552 387.954 545.352C390.561 548.279 396.164 550.356 402.756 550.841C410.773 551.087 418.416 549.196 422.601 545.934C429.451 540.402 432.756 534.04 432.117 527.628C432.182 520.118 428.884 512.693 422.427 505.84C415.533 498.842 405.116 494.827 393.877 494.827C368.247 494.827 348.961 510.922 348.961 532.263C348.107 543.331 354.554 554.252 367.381 563.489L375.988 568.798C382.554 572.585 386.005 577.383 385.692 582.293V682.473C391.968 680.968 398.091 679.355 404.061 677.632V582.293C404.356 575.45 399.563 568.777 390.524 563.454Z",
                          fill: "#DB8300",
                        }),
                        (0, d.jsxs)("g", {
                          className: x().imaginationAstronaut,
                          "data-pausable-animation": !0,
                          children: [
                            (0, d.jsx)("path", {
                              d: "M155.813 179.293C154.567 177.963 154.122 176.072 154.644 174.326L162.433 148.39C163.171 145.927 165.622 144.393 168.16 144.806L180.627 146.38L161.537 184.764C159.396 183.201 157.471 181.361 155.813 179.293Z",
                              fill: "#2C3E50",
                            }),
                            (0, d.jsx)("path", {
                              d: "M183.676 213.86C182.968 215.375 182.086 216.802 181.049 218.113C167.045 214.259 153.81 208.021 141.924 199.674C143.409 192.873 148.001 187.163 154.324 184.252C172.953 175.634 192.532 195.07 183.676 213.86Z",
                              fill: "#F29C1F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M184.863 210.74C183.109 212.721 180.258 213.306 177.864 212.178C174.91 210.745 173.641 207.213 175.007 204.227L173.596 207.223C172.409 209.833 169.558 211.258 166.757 210.642C164.987 210.233 163.5 209.04 162.718 207.4C161.937 205.76 161.946 203.853 162.744 202.221L167.467 192.201C167.83 191.484 167.645 190.611 167.021 190.104C160.491 184.781 159.79 184.507 159.073 182.584C166.745 180.975 174.697 183.533 179.991 189.313C185.286 195.094 187.138 203.239 184.863 210.74Z",
                              fill: "#E57E25",
                            }),
                            (0, d.jsx)("path", {
                              d: "M181.049 218.113C174.658 226.243 163.499 228.88 154.144 224.472C144.79 220.063 139.721 209.777 141.924 199.674C153.814 208.014 167.048 214.251 181.049 218.113Z",
                              fill: "#F29C1F",
                            }),
                            (0, d.jsx)("path", {
                              d: "M202.204 222.593C198.915 229.571 186.691 228.924 172.96 224.585C162.142 221.09 151.816 216.223 142.235 210.104C129.995 202.203 121.714 193.187 125.004 186.208C128.293 179.229 140.517 179.877 154.324 184.252C152.053 185.295 149.975 186.714 148.176 188.449C130.975 183.909 127.92 189.47 141.924 199.674C153.814 208.014 167.048 214.251 181.049 218.113C197.125 222.199 200.227 217.019 186.907 207.005L189.396 201.724C199.097 208.806 205.115 216.417 202.204 222.593Z",
                              fill: "#F9EAB0",
                            }),
                            (0, d.jsx)("path", {
                              d: "M194.227 191.472C186.492 207.885 186.787 207.779 185.319 208.974C184.1 209.982 182.528 210.462 180.954 210.305C179.38 210.148 177.934 209.367 176.938 208.137C175.487 206.357 175.178 203.904 176.142 201.818L174.76 204.752C173.573 207.363 170.722 208.788 167.922 208.171C166.163 207.766 164.684 206.585 163.898 204.96C163.112 203.336 163.105 201.443 163.879 199.813L168.609 189.777C168.973 189.06 168.787 188.186 168.163 187.68C161.252 182.045 161.829 182.543 161.563 182.267C159.747 180.488 159.23 177.768 160.266 175.448L168.22 158.572L193.4 168.325L194.549 187.227C194.97 188.633 194.855 190.145 194.227 191.472Z",
                              fill: "#35495E",
                            }),
                            (0, d.jsx)("path", {
                              d: "M186.144 188.606L176.938 208.138C175.471 206.363 175.161 203.901 176.143 201.819C183.805 185.56 183.62 186.473 183.438 184.859C183.5 184.027 184.154 183.363 184.984 183.287C185.814 183.211 186.577 183.746 186.79 184.552C186.948 185.937 186.725 187.339 186.144 188.606Z",
                              fill: "#2C3E50",
                            }),
                            (0, d.jsx)("path", {
                              d: "M171.177 154.059C170.102 154.779 169.914 155.218 168.171 157.756C164.331 163.299 164.555 170.699 168.724 175.999C176.403 185.732 176.26 185.834 177.696 186.511C179.37 187.299 181.338 187.122 182.845 186.049C184.352 184.975 185.163 183.173 184.967 181.333C184.768 179.353 183.741 178.529 180.821 174.794L176.785 169.665C175.773 168.383 175.433 166.695 175.87 165.121L171.177 154.059Z",
                              fill: "#3F5C6C",
                            }),
                            (0, d.jsx)("path", {
                              d: "M188.606 171.369C188.461 181.207 184.673 180.837 184.649 184.731C184.585 189.871 194.076 194.835 198.007 179.328C198.757 176.417 199.62 172.182 198.34 169.333L188.606 171.369Z",
                              fill: "#3F5C6C",
                            }),
                            (0, d.jsx)("path", {
                              d: "M172.905 144.627C168.484 154.007 172.505 165.195 181.885 169.616C191.265 174.037 202.453 170.016 206.873 160.636C211.294 151.256 207.274 140.068 197.894 135.648C188.514 131.227 177.326 135.247 172.905 144.627Z",
                              fill: "#547580",
                            }),
                            (0, d.jsx)("path", {
                              d: "M200.834 167.885C192.603 168.855 183.378 163.564 180.584 156.36C176.437 145.782 188.158 138.607 200.387 144.37C203.73 145.888 206.582 148.311 208.62 151.364C209.059 157.848 206.113 164.097 200.834 167.885Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M201.514 159.997C200.661 159.595 200.295 158.578 200.697 157.725C202.88 153.093 196.951 150.299 196.704 150.183C195.852 149.781 195.486 148.764 195.888 147.911C196.29 147.058 197.307 146.693 198.16 147.095C201.371 148.608 206.696 153.005 203.785 159.181C203.383 160.034 202.366 160.399 201.514 159.997Z",
                              fill: "#F9EAB0",
                            }),
                            (0, d.jsx)("path", {
                              d: "M204.057 164.97C203.086 166.072 201.989 167.056 200.789 167.902C195.002 168.395 189.269 166.466 184.959 162.573C178.22 156.492 178.042 148.181 184.093 144.39C186.304 152.433 191.617 161.579 204.057 164.97Z",
                              fill: "#F29C1F",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          className: x().imaginationStars,
                          "data-pausable-animation": !0,
                          children: [
                            (0, d.jsx)("path", {
                              d: "M182.121 124.241C181.178 124.241 180.414 123.477 180.414 122.534V115.707C180.414 114.764 181.178 114 182.121 114C183.063 114 183.828 114.764 183.828 115.707V122.534C183.828 123.477 183.063 124.241 182.121 124.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M185.534 120.828H178.707C177.764 120.828 177 120.063 177 119.121C177 118.178 177.764 117.414 178.707 117.414H185.534C186.477 117.414 187.241 118.178 187.241 119.121C187.241 120.063 186.477 120.828 185.534 120.828Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M208.121 102.241C207.178 102.241 206.414 101.477 206.414 100.534V93.7069C206.414 92.7642 207.178 92 208.121 92C209.063 92 209.828 92.7642 209.828 93.7069V100.534C209.828 101.477 209.063 102.241 208.121 102.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M211.534 98.8276H204.707C203.764 98.8276 203 98.0634 203 97.1207C203 96.178 203.764 95.4138 204.707 95.4138H211.534C212.477 95.4138 213.241 96.178 213.241 97.1207C213.241 98.0634 212.477 98.8276 211.534 98.8276Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M209.121 114.241C208.178 114.241 207.414 113.477 207.414 112.534V105.707C207.414 104.764 208.178 104 209.121 104C210.063 104 210.828 104.764 210.828 105.707V112.534C210.828 113.477 210.063 114.241 209.121 114.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M212.534 110.828H205.707C204.764 110.828 204 110.063 204 109.121C204 108.178 204.764 107.414 205.707 107.414H212.534C213.477 107.414 214.241 108.178 214.241 109.121C214.241 110.063 213.477 110.828 212.534 110.828Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M200.121 122.241C199.178 122.241 198.414 121.477 198.414 120.534V113.707C198.414 112.764 199.178 112 200.121 112C201.063 112 201.828 112.764 201.828 113.707V120.534C201.828 121.477 201.063 122.241 200.121 122.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M203.534 118.828H196.707C195.764 118.828 195 118.063 195 117.121C195 116.178 195.764 115.414 196.707 115.414H203.534C204.477 115.414 205.241 116.178 205.241 117.121C205.241 118.063 204.477 118.828 203.534 118.828Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M191.121 116.241C190.178 116.241 189.414 115.477 189.414 114.534V107.707C189.414 106.764 190.178 106 191.121 106C192.063 106 192.828 106.764 192.828 107.707V114.534C192.828 115.477 192.063 116.241 191.121 116.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M194.534 112.828H187.707C186.764 112.828 186 112.063 186 111.121C186 110.178 186.764 109.414 187.707 109.414H194.534C195.477 109.414 196.241 110.178 196.241 111.121C196.241 112.063 195.477 112.828 194.534 112.828Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M198.121 106.241C197.178 106.241 196.414 105.477 196.414 104.534V97.7069C196.414 96.7642 197.178 96 198.121 96C199.063 96 199.828 96.7642 199.828 97.7069V104.534C199.828 105.477 199.063 106.241 198.121 106.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M201.534 102.828H194.707C193.764 102.828 193 102.063 193 101.121C193 100.178 193.764 99.4138 194.707 99.4138H201.534C202.477 99.4138 203.241 100.178 203.241 101.121C203.241 102.063 202.477 102.828 201.534 102.828Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M186.121 100.241C185.178 100.241 184.414 99.4772 184.414 98.5345V91.7069C184.414 90.7642 185.178 90 186.121 90C187.063 90 187.828 90.7642 187.828 91.7069V98.5345C187.828 99.4772 187.063 100.241 186.121 100.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M189.534 96.8276H182.707C181.764 96.8276 181 96.0634 181 95.1207C181 94.178 181.764 93.4138 182.707 93.4138H189.534C190.477 93.4138 191.241 94.178 191.241 95.1207C191.241 96.0634 190.477 96.8276 189.534 96.8276Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M180.121 110.241C179.178 110.241 178.414 109.477 178.414 108.534V101.707C178.414 100.764 179.178 100 180.121 100C181.063 100 181.828 100.764 181.828 101.707V108.534C181.828 109.477 181.063 110.241 180.121 110.241Z",
                              fill: "#F0C419",
                            }),
                            (0, d.jsx)("path", {
                              d: "M183.534 106.828H176.707C175.764 106.828 175 106.063 175 105.121C175 104.178 175.764 103.414 176.707 103.414H183.534C184.477 103.414 185.241 104.178 185.241 105.121C185.241 106.063 184.477 106.828 183.534 106.828Z",
                              fill: "#F0C419",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          className: x().imaginationPackages,
                          "data-pausable-animation": !0,
                          children: [
                            (0, d.jsx)("path", {
                              d: "M176 64.8765V78.436L187.743 85.2158V71.6562L176 64.8765Z",
                              fill: "#8D134D",
                            }),
                            (0, d.jsx)("path", {
                              d: "M176 64.8765L187.743 58.0967L199.486 64.8765L187.743 71.6562L176 64.8765Z",
                              fill: "#EC297A",
                            }),
                            (0, d.jsx)("path", {
                              d: "M199.486 64.8765V78.436L187.743 85.2158V71.6562L199.486 64.8765Z",
                              fill: "#6A1237",
                            }),
                            (0, d.jsx)("path", {
                              d: "M187.514 71.4558V85.0154L199.257 91.7951V78.2356L187.514 71.4558Z",
                              fill: "#165DAB",
                            }),
                            (0, d.jsx)("path", {
                              d: "M187.514 71.4558L199.257 64.676L211 71.4558L199.257 78.2356L187.514 71.4558Z",
                              fill: "#1C75DB",
                            }),
                            (0, d.jsx)("path", {
                              d: "M211 71.4558V85.0154L199.257 91.7951V78.2356L211 71.4558Z",
                              fill: "#092C54",
                            }),
                            (0, d.jsx)("path", {
                              d: "M194.094 61.8621V71.586L202.515 76.448V66.724L194.094 61.8621Z",
                              fill: "#8D134D",
                            }),
                            (0, d.jsx)("path", {
                              d: "M194.094 61.862L202.515 57L210.936 61.862L202.515 66.724L194.094 61.862Z",
                              fill: "#EC297A",
                            }),
                            (0, d.jsx)("path", {
                              d: "M210.936 61.8618V71.5858L202.515 76.4477V66.7238L210.936 61.8618Z",
                              fill: "#6A1237",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          className: x().imaginationThinking,
                          "data-pausable-animation": !0,
                          children: [
                            (0, d.jsxs)("g", {
                              clipPath: "url(#clip0_451:615)",
                              children: [
                                (0, d.jsx)("path", {
                                  d: "M178.855 38.5663L178.624 37.6063C178.497 37.0759 177.964 36.7499 177.433 36.8773L177.142 36.9476C176.033 37.214 175.052 36.1808 175.375 35.0876L175.46 34.7998C175.615 34.2766 175.316 33.7276 174.793 33.5729L173.846 33.293C173.323 33.1383 172.774 33.4367 172.619 33.9599L172.534 34.2478C172.211 35.341 170.825 35.6747 170.04 34.8479L169.834 34.6303C169.458 34.235 168.833 34.2186 168.438 34.5945L167.722 35.2745C167.326 35.6503 167.31 36.2751 167.686 36.6704L167.892 36.888C168.678 37.7148 168.274 39.0812 167.165 39.3481L166.874 39.4184C166.343 39.5457 166.017 40.079 166.145 40.6094L166.376 41.5694C166.503 42.0997 167.036 42.4257 167.567 42.2984L167.858 42.2281C168.967 41.9612 169.948 42.9948 169.625 44.088L169.54 44.3758C169.385 44.899 169.684 45.448 170.207 45.6027L171.154 45.8827C171.677 46.0374 172.226 45.7389 172.381 45.2157L172.466 44.9279C172.789 43.8347 174.175 43.501 174.96 44.3278L175.166 44.5453C175.542 44.9406 176.167 44.957 176.562 44.5812L177.278 43.9011C177.674 43.5253 177.69 42.9005 177.314 42.5052L177.108 42.2876C176.322 41.4608 176.726 40.0945 177.835 39.8276L178.127 39.7573C178.657 39.6299 178.983 39.0968 178.855 38.5663Z",
                                  fill: "#F0C419",
                                  stroke: "black",
                                  strokeWidth: "0.987423",
                                  strokeMiterlimit: "10",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M171.94 41.4818C172.986 41.791 174.085 41.1938 174.394 40.1479C174.703 39.102 174.106 38.0034 173.06 37.6942C172.014 37.385 170.915 37.9822 170.606 39.0281C170.297 40.074 170.894 41.1726 171.94 41.4818Z",
                                  stroke: "black",
                                  strokeWidth: "0.987423",
                                  strokeMiterlimit: "10",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("g", {
                              clipPath: "url(#clip1_451:615)",
                              children: [
                                (0, d.jsx)("path", {
                                  d: "M185.767 49.6254L185.536 48.6654C185.409 48.135 184.876 47.809 184.345 47.9364L184.054 48.0067C182.945 48.2731 181.964 47.2399 182.287 46.1467L182.372 45.8589C182.527 45.3357 182.228 44.7867 181.705 44.632L180.758 44.352C180.235 44.1974 179.686 44.4958 179.531 45.019L179.446 45.3068C179.123 46.4001 177.737 46.7338 176.952 45.907L176.746 45.6894C176.37 45.2941 175.745 45.2777 175.35 45.6536L174.634 46.3336C174.238 46.7094 174.222 47.3342 174.598 47.7295L174.804 47.9471C175.59 48.7739 175.186 50.1403 174.077 50.4071L173.785 50.4774C173.255 50.6048 172.929 51.1381 173.056 51.6684L173.287 52.6284C173.415 53.1588 173.948 53.4848 174.478 53.3574L174.77 53.2871C175.879 53.0203 176.86 54.0539 176.537 55.1471L176.452 55.4349C176.297 55.9581 176.596 56.5071 177.119 56.6618L178.066 56.9418C178.589 57.0964 179.138 56.798 179.293 56.2748L179.378 55.987C179.701 54.8938 181.087 54.56 181.872 55.3868L182.078 55.6044C182.454 55.9997 183.079 56.0161 183.474 55.6402L184.19 54.9602C184.585 54.5844 184.602 53.9596 184.226 53.5643L184.02 53.3467C183.234 52.5199 183.638 51.1535 184.747 50.8867L185.038 50.8164C185.569 50.689 185.895 50.1559 185.767 49.6254Z",
                                  fill: "#F0C419",
                                  stroke: "black",
                                  strokeWidth: "0.987423",
                                  strokeMiterlimit: "10",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M178.852 52.5409C179.898 52.8501 180.997 52.2529 181.306 51.207C181.615 50.1611 181.018 49.0625 179.972 48.7533C178.926 48.444 177.827 49.0412 177.518 50.0872C177.209 51.1331 177.806 52.2317 178.852 52.5409Z",
                                  stroke: "black",
                                  strokeWidth: "0.987423",
                                  strokeMiterlimit: "10",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("g", {
                              clipPath: "url(#clip2_451:615)",
                              children: [
                                (0, d.jsx)("path", {
                                  d: "M174.804 47.8416L174.113 46.6444C173.731 45.983 172.886 45.7569 172.224 46.1385L171.861 46.3486C170.478 47.1463 168.75 46.1489 168.75 44.5529V44.1326C168.75 43.3689 168.132 42.7502 167.368 42.7502H165.986C165.222 42.7502 164.603 43.3689 164.603 44.1326V44.5529C164.603 46.1489 162.875 47.1469 161.493 46.3486L161.129 46.1385C160.468 45.7569 159.622 45.983 159.241 46.6444L158.55 47.8416C158.168 48.5031 158.394 49.3484 159.056 49.7299L159.419 49.9401C160.802 50.7384 160.802 52.7332 159.419 53.5315L159.056 53.7416C158.394 54.1232 158.168 54.9685 158.55 55.63L159.241 56.8271C159.622 57.4886 160.468 57.7146 161.129 57.3331L161.493 57.123C162.875 56.3246 164.603 57.3227 164.603 58.9187V59.3389C164.603 60.1027 165.222 60.7213 165.986 60.7213H167.368C168.132 60.7213 168.75 60.1027 168.75 59.3389V58.9187C168.75 57.3227 170.478 56.3246 171.861 57.123L172.224 57.3331C172.886 57.7146 173.731 57.4886 174.113 56.8271L174.804 55.63C175.185 54.9685 174.959 54.1232 174.298 53.7416L173.934 53.5315C172.552 52.7332 172.552 50.7384 173.934 49.9401L174.298 49.7299C174.959 49.3484 175.186 48.5031 174.804 47.8416Z",
                                  fill: "#F0C419",
                                  stroke: "black",
                                  strokeWidth: "1.38239",
                                  strokeMiterlimit: "10",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                                (0, d.jsx)("path", {
                                  d: "M166.677 54.5008C168.204 54.5008 169.442 53.2629 169.442 51.736C169.442 50.209 168.204 48.9712 166.677 48.9712C165.15 48.9712 163.912 50.209 163.912 51.736C163.912 53.2629 165.15 54.5008 166.677 54.5008Z",
                                  stroke: "black",
                                  strokeWidth: "1.38239",
                                  strokeMiterlimit: "10",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "463",
                              y1: "343",
                              x2: "463",
                              y2: "351",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "459",
                              y1: "347",
                              x2: "467",
                              y2: "347",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "342",
                              y1: "236",
                              x2: "342",
                              y2: "244",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "338",
                              y1: "240",
                              x2: "346",
                              y2: "240",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "390",
                              y1: "74",
                              x2: "390",
                              y2: "82",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "386",
                              y1: "78",
                              x2: "394",
                              y2: "78",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "114",
                              y1: "326",
                              x2: "114",
                              y2: "334",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "110",
                              y1: "330",
                              x2: "118",
                              y2: "330",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("defs", {
                          children: [
                            (0, d.jsx)("pattern", {
                              id: "pattern0",
                              patternContentUnits: "objectBoundingBox",
                              width: "1",
                              height: "1",
                              children: (0, d.jsx)("use", {
                                xlinkHref: "#image0_451:615",
                                transform: "scale(0.00195312)",
                              }),
                            }),
                            (0, d.jsx)("clipPath", {
                              id: "clip0_451:615",
                              children: (0, d.jsx)("rect", {
                                width: "13.8239",
                                height: "13.8239",
                                fill: "white",
                                transform:
                                  "translate(167.831 31) rotate(16.4707)",
                              }),
                            }),
                            (0, d.jsx)("clipPath", {
                              id: "clip1_451:615",
                              children: (0, d.jsx)("rect", {
                                width: "13.8239",
                                height: "13.8239",
                                fill: "white",
                                transform:
                                  "translate(174.743 42.0591) rotate(16.4707)",
                              }),
                            }),
                            (0, d.jsx)("clipPath", {
                              id: "clip2_451:615",
                              children: (0, d.jsx)("rect", {
                                width: "19.3535",
                                height: "19.3535",
                                fill: "white",
                                transform: "translate(157 42.0591)",
                              }),
                            }),
                            (0, d.jsx)("image", {
                              id: "image0_451:615",
                              width: "512",
                              height: "512",
                              xlinkHref:
                                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d15vGRVfe/971pVdYYegQbpBhWOw+kDtkOCU/KopUkuRrodUAmamMcpiYlJHp88xqtG4xyH3OTeG4c8iQNGr0MSvU5wMA4JHDVPJOCECKcboXqe6Hk851TVXs8f+zQ00N2nqvZee+3h8369eGFC1/79GvrU+u61117LOOcEoCK++aiHqFP/PTk9SdIT5/+/t8joZtU7H9XlP98dsj0A2TEEAKAirr/kpXLuQ5JWnOZX7JUxf6wr7vh8lm0BCMOGbgBABiYveaec+5xOP/hL0go59zlNXvLOrNoCEA4zAEDZXXfpL8pEN0mq9/iJjpx9itbd/kOfbQEIixkAoPTcx9X74K/417qP++oGQD4wAwCU2dcee75q7Z0DfbbbWKnn/XRXyh0ByAlmAIAyq80+ceFf5OGzAHKPAACUmas9LshnAeQeAQAot+FAnwWQcwQAAAAqiAAAAEAFEQAAAKggAgAAABVEAAAAoIIIAAAAVBABAACACiIAAABQQQQAAAAqiAAAAEAFEQAAAKggAgAAABVEAAAAoIIIAAAAVBABAACACiIAAABQQQQAAAAqiAAAAEAFEQAAAKggAgAAABVEAAAAoIIIAAAAVBABAACACiIAAABQQQQAAAAqiAAAAEAFEQAAAKggAgAAABVEAAAAoIIIAAAAVBABAACACiIAAABQQQQAAAAqiAAAAEAFEQAAAKggAgAAABVEAAAAoIIIAAAAVBABAACACiIAAABQQQQAAAAqiAAAAEAFEQAAAKggAgAAABVEAAAAoIIIAECZ2WgmyGcB5B4BACizSLcG+SyA3CMAAGVWi24O8lkAuUcAAMrsOXfeI6P+B3Kjm/WcO+/x0BGAnCAAAKVnXi1pro8PzM1/BkCJEQCAsrvijp9K5i29f8C8Jf4MgDIzzrnQPQDIwvWXrJNzH5W06jS/YoeM+T1dccd1WbYFIAwCAFAl31hzjjrdV0nuSZKeOP//vUUyN6teu0bPvm1fyPYAZIcAAABABbEGAACACiIAAABQQQQAAAAqiAAAAEAFEQAAAKggAkAWJh93tm58Vj10GwCQezc+q67Jx50duo0q4DVAX65bfaWMfbXkniDpQkkzkm6T9D1p6F1ae+v+sA0CQE5MPu5sae5tkp4maY2kEUnbJPNjuegTWrf+y2EbLCcCQNq+seYcddoflsxLz/CrtkvR72nthsnM+gKAPJocXyvZj0q64PS/yH1e9cYfsVFVuggAafrCmiEt6vxAcYJdmHFv1hXr3++3KQDIqetXv0nOvK/HX32bjtUv01W39XOwFc6ANQBpWtx+h3od/CXJmffp+tVv8tYPAORVf4O/JK2Z/45FSpgBSMt1qydkzG2San1/lpkAAFXS/+B/QlfOrdG69dOp91RBzACkxdhnaJDBX2ImAEB1DD74S1Jt/rsWKSAApMY9IdnHCQEASi7Z4D8v4Xct7kUASItzD0t+DUIAgJJKZfBXOt+1kEQASI81t6dyHUIAgLJJa/CX0vuuBQEgPebHqV2KEACgLNIc/CWl+l1bcQSAtETRtyTtTe16hAAARZf64K8989+1SAEBIC3r1u+RMX+c6jUJAQCKKv3BXzL6Q61bvyfVa1YYASBNV9zxeUlfTPWahAAAReNj8Hf6nK6Y/udUr1lxBIC0LZ79bUnfSPWahAAAReHnzv9aHa+/MtVrggCQume2ZrR49gUiBACoGl+D/9H6izkDIH0EAB8IAQCqhsG/cAgAvhACAFQFg38hEQB8IgQAKDsG/8IiAPhGCABQVgz+hUYAyAIhAEDZeHnVz13H4J8dAkBWCAEAysLX4H+88SIG/+wQALJECABQdAz+pUEAyBohAEBRMfiXinHOhe6hmm4cG9HR4a9Ienaq1zXuzbpi/ftTvSbyrdU8S9K5Ljpyvuve8wS52UfKuXMkt3z+r6WSWywXLZLcqBQNO0VDcs4YYzuSbUtmTsbOSmZWMscle1wyx2TMUckckcwhyRyWzAEZ+yOp9l07vvFQ6N86MsTgXzoEgJAIAehVq1mX9AhJq0/6a2L+7+fd79e6rpw7LrkZKTp+7/920XHJzabXkxnuGDN0SKaxU6Z+l1S7VaZ203w4OJBeIQTnY/CXmdSx2gsZ/MMhAIRGCMDJ4rv5S/XgQf6RkhrJC0RSNDMfCo7LdQ/LRYfSDQbSiXBwWKaxQ6Z+t9T4lkz90wSDAmLwLy0CQB4QAqqr1Vwi6emSfmX+rycoxNocNyPXPRSHgeigXHTUQxEjYxcfkhm5XWboepn6NXZ80zYPhZAWBv9SIwDkBSGgGlrNYUm/rPsG/CdLqgft6VRcRy46EQgOyXUPSYrSr2MXHTdmdIPM0LdkGp+045tuT78IBsLgX3oEgDwhBJRP/Oz+SbpvwP9lSSNBexqIk4sOy3X3ynX2SO64nzJmZM7Y0ZbM8L/JDL3Pjm/a4qcQzojBvxIIAHlDCCi+eNC/XNJvS1oraWnYhtLnoiNy3Xv8hgFZGbt0u+yif5JpvMeOb9rnqRBO5mXw1/Wy3RfqOXemvNgESRAA8ogQUEyt5pMlvUzSS/TAlfkllk0YqDlTW7pRZtGnZBofsOMbZzwVqjYG/0ohAOQVIaAYWs1HSPotxQP/eOBugsskDJi6M3bZHTKjfydT/4gd3+hhcUIFMfhXDgEgzwgB+dRqrpD0G4oH/V8O3E1uueiQXHubXHePJE/fM2aoa+zSH8mM/o1dveUzfopUAIN/JREA8o4QkB+t5uWSXivpCqXyTn5FuFlFne1ynR2S63grY+ziI7LLPiIz9FY7vtFfobJh8K8sAkAREALCaTWNpCsl/ZmkywJ3U3CRXGeXos42KTrmr4wZmTO15f8sM/KHbFe8AAb/SiMAFIWvECC9Wmunr0n5msUXr+T/TUlvknRJ4G5Kx3X3y3W2yXU9Luw3jcjYs/5VdvQ1dnxTy1+hgpqceJWkT6R6Taevq9a9ksG/GAgAReInBByWq6/Ruts2p3jN4mo1RyS9StIbJF0ctpkKcMcVtbfJdXZJ6noqUnOmdtaPZRe91o5v/r6nIsVy3ZqHy3RuU5qvqDL4Fw4BoGh8hACjb+qK6bRnFoql1Vwq6Q8k/YmklYG7qR43p6i9Sa6zU94WDMrI1Ja3ZJf8Vzu+5YueihTD9RPfkNPlqV2Pwb+QCABFlH4IcOpquZ43fTil6xVHvKL/dZL+SNLZgbtBdFxR+2657l6vZYxdtku1Za+w41v+xWuhPPraxFLVdFCSSeV6DP6Flf2hI0juma0ZLZ59gaRvpHRFI+sen9K1iqHVrKvV/L8l3SXpz8Xgnw92VHb4MbIjT5Cxy7yVcdGh811729ej6XNviTZcdKG3QnkU/6wz+IMAUFhphwBjVqdynSJoNZ8p6UeS/oek5WGbwakYu0x25Amyw5dKZtRTFSfX3XuZ6+zYHK1f9Q/RhovzdyiTD+n9rP8Lg3+xEQCKLM0Q4NzGxNfIu1bzQrWa/yjpBklrQreDhZnauaqNPlF26FGS8bT1gmtb19n5cnXvORitf+hr/BTJkXR+1v9FtvsCBv9iYw1AGaSxJmDOnKsr7/D74DWUVnNI0v8j6a2SFgfuBgPrKmpvkWtvkb+FgpKpnbVRdumL7fjmH3grEtKXL1mhIbcnwRUY/EuCAFAWyULAD7V2upyb3LSavy7pb8Q+/aXhoqNyc+vloiMeq9Rkaud8W3bRVXZ84wGPhcKYnPiBpF8c4JMM/iXCI4CyGPxxQFu2+zs+Wgqq1RxTq/kVSV8Xg3+pGLtYduQXZBoXKa21bA/Wleve82uus/OeaP2F7/RUJJz4Z77d56cY/EuGGYCyuXFsREeGvySj5/T2Afd2rV3/Lr9NZajVtJL+q6S3SxoJ3A08c9GR+dmAo17rmNo5t8suebod3+Rx68KMTa5+m2R6Czes9i8lZgDK5pmtGf1g/TrJvEHSmc5M3y+ZV5Rs8F8p6ZuS3icG/0owdonsyC/KNB4uf7MBkuvuu9R17tkerX/YVd6KZG3t+ndJ5hWS9p/hV81I5g36wfp1DP7lwwxAmV1/ybhc9HoZ8wtyeqykjqSfyOgW1ewH9Ozbd4RuMTXxs/5PSXpI6FYQhosOK5pb7/egIVmZ+rlflRl9oR3fGHkslJ1vXLpK3eiNcnqipMdLqsvop3LuRzL2r3XFHRtCtwg/CABV8QVT01WKpJL9B281G5LeK+n18nkLiIKI4i2F21vl9U0Bu2yPast/1Y5vvtVbkSCM0RdkdZXzdTADcoQAgOJqNR8h6fOSnhy6FeSLiw4qmr1DcnP+iphGZGrnvduu3vYOf0UAfwgAKKZW82pJH5Xkb79YFJubVTR7u1zk94gLUzvnVtmlzVK+LohSIwCgWFrNRYrf6y/fq4vwIFI0d+f8ccMemdEZU1/xUju+5St+CwHpIQCgOFrNNZL+SdKloVtBsbjONkVzd8vnuoB4geD5f2FXb3+rxyJAaggAKIZW89ckfUnS0tCtoJhc94CiuTsk1+/+N/0wMvWH/LNdvfNqj0WAVBAAkH+t5m9L+oQkT6fBoDLczPy6AJ/bCEumtuJm2SVPLc2rgiglAgDyrdV8s6S/EK/4ITWRotn1ct17vFYxtbO2yi5/LIsDkVcEAORTvKXvhyX9QehWUE6uvUVRu+W1hrFLDql2zi/a8U13eS0EDIAAgPxpNUcVv9///NCtoNxcZ7uiuZ/7LWJG5kz9vMvt+OYpv4WA/nAWAPKl1Vwh6V/F4I8MmPoFskOeD4t0M0Ous/PfovUPfaXfQkB/CADIj1ZzTNL/J+mXQreC6jD1lbJDE/K6zMS1revsuCZaf8F7/RUB+sMjAORDq3mZpElJ54duBdXkunvi7YO97hUgmfrKv7erd/y+1yJAD5gBQHit5pMk3SAGfwRkaufKDj9Gvr8WXWfXa6L1F/yl1yJADwgACKvVvFTS18UGP8gBUzsngxDg5Do73xCtv5AdAxEUjwAQTqt5saTvSbowcCfA/bjooKKZ2yT5PBXXytRX/V929dYPeSwCnBYBAGG0mislfVfSo0K3ApyKiw4pmv2p5HyGgJoz9ZWvtKu3fspjEeCUeASA7LWaZ0n6hhj8kWPGLpMdulR+N6HsGtfd9clow8Ne4LEIcEoEAGQrPs53UtLjQrcCLMTUzpYd8pxTXce4zq7/HW14+H/xWwi4PwIAstNqDkn6sqRfDt0K0CtTXyXTeKjfIq5tXWf39dGGhz/VbyHgPgQAZCPe2/8zki4P3QrQL9t4hEztXL9F3Gzdde75TrThojV+CwExAgCy8veSrgrdBDAoOzwhY5f5LeJmGq675z+jDRd5ThsAAQBZaDXfKul3QrcBJGPjPQLMiN8y0bFRRYdv8lsEIADAt1bzVyW9M3QbQCpMQ7XhNZKpey3juvsfEa1f+Y9ei6DyCADwp9W8UNLnxJ8zlIldlMHrgZLr7L46Wv/QV3ktgkpjIyD40WrWJd0o6f8I3AnghevsVDS3wW8RM9Q19ZVr7Pimab+FUEXcmcGX94vBHyVm6itl6g/xW8TN1dTd/+/RhouH/BZCFREAkL5W80pJrw/dBuCbbTza+6JAFx0+R9HRKa9FUEkEAKSr1XykpE+GbgPIhKnJDk/I+3qA7p6nRusveK/XIqgc1gAgPa3miKT/kPSE0K0AWXLtzYraG/0WMTVn6hc8245v/pbfQqgKZgCQpg+LwR8VZBoPk7HL/RZxXeO6e77GJkFICwEA6Wg1Xy7p1aHbAMIw8aMAz/sDKDo+ougI6wGQCgIAkms1Hy7pI6HbAIIyw7JDj/ZexnX3XRqtf+jvey+E0iMAIA0fkbQ4dBNAaKZ2nkx9pfc6rrvvf0YbLl7ivRBKjQCAZFrNF0laF7oNIC/s0CMlM+q3iDs+rOjYV/0WQdkRADC4VnOZpA+GbgPIl5rs8Lj3Kq6791eiDQ/neG0MjACAJN4r6YLQTQB5Y+xymdp5nqtEUnf/P3kughIjAGAwreaTJf1B6DaAvLJDj5Dvr1gXHTkrWr/qGq9FUFpsBIT+xQf93CLp8aFbAfLMtTcpam/yW8TUnalfsMaOb7rdbyGUDTMAGMSfiMEfWJBpPMz7WQFyHaPo0PV+i6CMCADoT6t5saR3BO4CKAg7/yjAL9c9cFG0/sK3ei+EUiEAoF8fkbQodBNAUZjauTK1s7zXcd29b482XOy/EEqDAIDetZovlHRF6DaAojGNR8r3iYFys3W545zEiZ6xCBC9aTWNpJ9KekzoVoAiiuZ+LtfZ7reIaUSmvuo8O75pn99CKANmANCrF4nBHxiYbVwsmYbfIq5t5WY+4bcIyoIZACwsvvv/saTHhW4FKDLX3qqofbffIswCoEfMAKAXzxeDP5CYaazyf2QwswDoEQEAvXhb6AaAcqjJ1P3vnu26+58XbbjoHO+FUGgEAJxZq/lcSb8Qug2gLGz9Qnn/6mUWAD0gAGAh3P0DaTINmfpK72WYBcBCCAA4vVbzOZKeGLoNoGxs46Hyvy8AswA4MwIAzoS7f8AHMyJT931cMLMAODMCAE6t1bxc0lNDtwGUlak/zH+ReBbg4/4LoYgIADidPw/dAFBmxi6Wqfm/OXfdg+uiDRfzXY8H4Q8FHqzVfIykp4VuAyg708hiFmC2Idf5Q/+FUDQEAJzKK0I3AFSBsctl7DL/hdyx1/kvgqIhAOD+Ws26pN8O3QZQFdm8EnjokdGGi1Z5L4RCIQDggX5d0vmhmwCqwtTOlf+v4q7kZt/vuQgKhgCAB3pl6AaASjH1TBYDKjpypf8iKBICAO7Tap4raV3oNoCqMfWHeK/hoqNLow0Pu8J7IRQGAQAn+01JQ6GbAKrG1M7xf0qgJEUzbO6FexEAcLJXhG4AqCY7vxbALxcdfFK04eIR74VQCAQAxFrNx4tT/4BgTM3/Y4B4Z8C5t/gvhCIgAOAEFv8BAZnaWZLJ4AlcdOxV/ougCAgAkFrNhuLn/wACMrUMDgiKDl0Qbbho3Hsh5B4BAJJ0uST/3zwAziiLtwEkJ7m5P86gEHKOAAApDgAAAjN2qWRG/Rdys8/2XwR5RwCAJP1a6AYAxExthfcaLjr6CO9FkHsEgKprNVdJujR0GwBiprbcfxE3V4s2PJyZv4ojAOBXQzcA4D7GZhAAJMnNvTqbQsgrAgCY/gfyxNRl7BL/daKZp/svgjwjAIAZACBvamd5L+HckZXRhovZ+rvCCABV1mqulvTQ0G0AuD9j/QcAua6R6/yf/gshrwgA1cb0P5BD8ToA47+Qm3uJ/yLIKwJAtTH9D+SRqWWzDsAdf6L/IsgrAkBVtZo1Sc8K3QaA08jgdUAXHV0ebbgoi+0HkUMEgOq6TFIGDxoBDCKTdQBykuv8QQaFkEMEgOri7h/IsezWAbSb/osgjwgA1bUmdAMAzsDUZOziDAq12Ra4oggA1TURugEAC8ggADg3xxqAiiIAVBfngQM5Z7I4GTCaGY02XMxYUEH8R6+i+ACgZaHbALAAm0EAUCQpemoGhZAzBIBqYvofKIIsZgAkyXWfmU0h5AkBoJpWh24AwMJMJjMAktR5UkaFkCMEgGoiAACFUJPMsP8yrsOaoAoiAFQTjwCAgshkFsDNXeC/CPKGAFBNzAAARZHBOgDnZlkUXEEEgKppNUckXRS6DQC9MXaR/yKubaMNF435L4Q8IQBUz6PFf3egOLJ7E4DjwSuGgaB6mP4HCiS7NwG6T8moEHKCAFA9TP8DRWJGMioUsSVwxRAAqofFPkChGEk1/2Wc47uhYggA1bMkdAMA+mQyCACKlmZQBDlCAKgefsiBwskkAGRx9jByhABQPQQAoGBMJjMALoP3DZEnBIDqIQAAhZPFGoAoq9WGyAkCQPUQAICiyWYNQAaHDiBPCADVQwAACsd/AHDqDnkvglwhAFQPAQAomixmAFxU918EeUIAqB4CAFA4WTwC6GZRBDlCAKgeAgBQNJnMAHSN/yLIEwJAlbSaNUm86gMUjMlkBsAp2nAxuwFWCAGgWtgFECiiTN4CkCR3fkaFkAMEgGphkQ9QSC6rQnNZFUJ4BIBqORq6AQADcN2MCpl7MiqEHCAAVMnY1IykrL5JAKTEZfJja2THNx7LoBByggBQPcwCAEXjIv81jM3sOQPygQBQPQQAoHCymAGoEQAqhgBQPUdCNwCgT5msAbA8HqwYAkD1MAMAFE4GY7MxBICKIQBUDzMAQOH4XwNgZDveiyBXCADVwwwAUDTZPAJgD4CKIQBUDzMAQMFk9BpgO4MiyBECQPUcDt0AgD5lMQNg7HH/RZAnBIDq2Rq6AQD9cJLLYna+viODIsgRAkD1tEI3AKAPblaZnAVgaj/3XwR5QgCoHgIAUCAumsmoUu22jAohJwgA1UMAAIrEZRQATO3mbAohL9I5HvbLl6xQI3qhjLlM0hMlnZvKdbPnJN0l6RY5d5N+sOGrensWm3BnaoukjjgaGCgEl0kAMJLsTRkUytY7jdVl48+XMU9RPDY9UvFvtoj2KB6bfqC2/ZKuvGNv0gsa5xI+W7r+knVy7mOSViZtJoe+q0gv13Ony3XX3GreLWksdBsAFhbNTst1d/stYoY7tUtnGn6LZOzaiTFZfUrS00O34sFOGfO7uuKO65JcJNkjgOtXv13OXatyDv6S9HRZ3arrVj8tdCMpK1egAcosgxkAYxrl2h/kutVPk9WtKufgL0kr5dy1un7125NcZPAAcN0lvyRn3pakeEEskTGf1hfWLAndSIoIAEBBZPIIwDT2+C+SkS+sib+zpTJ9Z5+aM2/TdZf80qAfHywA3Pisuoz7h4E/XzxjGu2+P3QTKSIAAIUQZbUHwJYMimQj/q6uyiNOK+P+QTc+a6A1XYMN4Me2rZE0PtBni8q4F4ZuIUV3h24AQA+yegXQ1DZkUygD5fqu7sX4/Jjct8ECQGSeNNDnim2Vrl9TlrUOPw7dAICFOZfR2V2m/u1sCnkWf0evCt1G5gYckwcLAEaPHehzRWc6l4ZuISXTkg6GbgLAmbnuoQyq1JxU+1oGhfwrz3d0fwYckwcLAE4bB/pc0XVtOZ6TjU05SWz6AeRd5P/sLmMXHbDjG8txFHBZvqP7NeCYPFgAsO6WgT5XbIe17o4y7ZX9/dANADgTJxdl8HaeGV7vv0hG4u/o6p14OuCYPFgAODr0Q1XtX7LT96SkuyblSvl2/QJKJB78M9iI1DRu8F8kK87F39WVcnh+TO7bYAHgqtuOSOZPB/psMR2T7OtCN5EyAgCQZxlM/0uSTONz2RTKin2dpGOhu8iO+dN4TO7f4O/xr73jozL65sCfLxJn3qh1t98Zuo1UjU3dI14HBHLLRRksADTDHTu+qVynAK67/U4588bQbWTC6Jtae8dHB/14so18oiVXyumDyuSw6iD2yellWnfHh0M34gmzAEBOuW4WCwBHt3svEsK6Oz4sp5dJ2he6FU+cnD6oaMmVSS6SLACsu+WY1k2/TiZ6ppw+J6f1Kn4YmJHMTXL6oOp2jdZNfzZ0Qx6xEBDII9eR3HH/dczQD/wXCWTd9GdVt2vim1Rzk6SMdlXyxslpvZw+JxM9U+umX6d1tyR61JH8NMAH+trEUg2ZFeleNCORcVp0/jY984ZO6FYy0Wo+RYQAIHdcd5+iWf8z86Z+4avt6q3XeC+UBzc+q65juy6UdcU8DnjO7dXzplOdFko/AKA4Ws2apF2SihnYgJKK2nfLtbf6LWJqztQfusSOb6zQgjmcrCqH+eBUxqa6kr4eug0A9+e6e73XMHbpFgb/aiMAoBxbgAJlER2P//LNjFzrvwjyjACAb0hqh24CQMx192RQxUhm6K8zKIQcIwBU3djUIUlTodsAEMtm+n/Jfju+qeW9EHKNAACJxwBAPrh2NhsA2dHv+C+CvCMAQJJ4FgjkQBZ3/5IkM/w32RRCnvEaIGKt5k8lrQndBlBl0ezP/IcAMzpbu/TYiN8iKAJmAHACswBAUJFcd7/3KsYu/pH3IigEAgBO+FLoBoAqiwf/LI7/Ha7Gzn9YEAEAsbGpWyTdGroNoKpcZ7f/Ima4LVP/hP9CKAICAE72sdANAJXk2pm8/2/s8m/b8Y0ZTDOgCAgAONlnJGWwBRmAk7nOLvk/SNVIduRPPRdBgRAAcJ+xqQOSvhi6DaBqos4O7zVMbflWO77pdu+FUBgEADwQjwGADLnuAcllsff/It79x/0QAHB/Y1PflTQdug2gKlxnp/8iZqQt0/jv/guhSAgAOJWPh26g8Fxbio7JRUfj/51DcW9zods4PTcT95jFq3GhZLX4r7bsmyz+wwPVQzeAXPqUpPdKGgrdSKG4rlxnq1x3z/zAdR9jF0u1c2TrKyUzGqi/ObnuPXLdA3LRQcl15psbivuzy+b7Gw7XX2eXXHRQLjp8/+BkRmTrK2UaF0qqhenPA9fdJf8Bx0iGxX94MLYCxqm1mv8o6erQbRSF6+5WNHd3T3fUpnaWTH2VTO1cSSaD5tqKOlvk2tu18GBjZGorZOoXyNTO8t+bJBcdketsk+vcowX7Mw3ZxiNk6udn0ptv3ZlbpOiY1xqmdtZmO7H/Iq9FUEjMAOB0/lIEgJ64zg5Fc3f2/uu7B+KFX6YhUz9ftr7Kz6yA6yjqbJXrbJNct9cPxTMY3T0ydnEcBOoPkY+7btfdI9feFs9G9PyhtqK59bLqytQvSL2nLLnuAe+DvyTJLP5L/0VQRMwA4PRazeskrQ3dRp657n5Fsz9NfJ10ZwW6cu1tijpb75vmT9RcXaa2UrZxgWQSniHjunLdnYra2yQ3k+hSdniNTO2cZP0EFM38pL/wMwBjlxywlxw+22sRFBYzADiTd4sAcAZOrn1XOldKZVYgimcj2pvTXXjoOnKdrep2tsrUzpGpXyhT63NMcccVtbfLdXf2MRtxZlH7LtVqZyuTvEcv4gAAIABJREFUxygpu3cdhm922bv8F0FRMQOAM2s1vynpv4RuI49cd4+iWX/7qvQ+K+BOGvgzWtVvR2XrF8jUVkrm9I8HXPdA/Hzf0xG3dmhi/hFFsWR093/QXnI4m4UcKCRmALCQd4kAcEquu8/z9ReaFXBynV3zA3+y6fS+RccVzd0lmY0ytfNl6xdK9kRvkVxndzzwP+BtiLS5aJ+MihUAMrz7f4//IigyZgCwsFbzBknPDN1G3mSxgvuB4lmBlZKTovambHaQ65GpnS3ZxfG+9lntfWBGVBt9cja1UpLR3f8he8nh5V6LoPCYAUAv3i0CwIO57PdVuXdWIIdcd7/U3Z9x1WLtbZPh3f97/RdB0bETIBY2NvVvkv49dBtA0bn2Ju81jF182K7e9gHvhVB4BAD0itXED2BMI3QLlWdMcTarzO7uf/n7/RdBGRAA0JuxqW9Kuj50G7liA23pi/uE2lZ5ANnc/S85ZFdvY/ofPSEAoB+vk5Tj02OyZQo0+JRWQUKY6+7O4O7fSPas3/dcBCVCAEDvxqZ+LumvQ7eRGwUZfMqsECHMdeNzIjwztXN+Yldv+bz3QigNAgD69ReStoZuIhfMotAdwOb/v0HU3uh/gybTiGQXP9dvEZQNAQD9GZs6KomjRVWQu88zMHa5TOPh4Y7/TUHe/xu46KhcZ7v3Oqa24u/t+KYt3guhVNgICINhcyBJUvf497Pbfjclxi6VaVx80n7+8ycAtrdns0o9Laah2ugvhe7ijDjwB3nGRkAY1B9L+pEq/mfImFG5ggQAYxfPD/wrHvhPZGrnydTOm79j3SbX2a28b7KT+7v/zq5sFv7VznqZ5yIoKR4BYDBjU7dJ+tvQbQSXYCGgqZ0tU18l6fSH6aTCjsoOXyI7ctkpBv8H9GQXyw6Nqzb6VNnGWPLjf8/cWLLHD3lehOk6itpZLPxb8X07vmXSeyGUUqXv3pDY2yRdKelhoRsJxZhFSvIQzQ49Wmo8In5NrLNDLjqSWm8yI7KNi+ZPy+vzyFxTl2k8TLXGQ+W6++ZP9EtpC2IzHJ8kWF+laG69XHd2sMvkeAYgXvjn+TwEM9yRXfR8v0VQZgQADG5s6qBazZdL+lcV8VD2NCS4C3XR/EE+phYf+1tfJRcdiYNAd7fkuoNd2AzLNh4eHxqU+D+LkamtkKmtkIuOnfR4oP/e4rUHD73f8cYuyWFGOX0DwEWH5Do7vNcxtRXvseObdnsvhNJiESCSazX/StLrQ7cRRHQsPhVwQLVFT9epB+muXOee+VmBw71dzDTmB/5V8vp0z3XkursUtbf3cBqhkamdK9O4UMYue+CF1D32PWnAORQ7cpmMXTzQZ71xHXVnfuj9eGZTW/ETO7HnCV6LoPSYAUAa3iLpckmPDd1I5mzCZ+TR8dPcydZk6itl6ivnZwV2ynV3nXpW4MSUeuMCeV9PIMWPB+oXqla/cP7xwM44pLgTU/lGxi6RamfL1led/jm/m9Wgg78kmRyuAYjmfu598JcZnZFd8ky/RVAFBAAkNzY1q1bztyTdLKm4L5UPxMYL5Qb80nfuuIzOPJVt7BKZoUdJeoRcdEyKjsq5YzJmWMaeHXQxnKmdI1M7J/4/XFvOzc7flS/86MFFxxIUHlbe1jC7zq740Y1XVqa+4qV2fGM+z4RGoeTrJwjFNTb1U8UzAZWT6E406ucZuI3DQP182caYTP2CfK2EN434zr/XdQcJnv/n7u7fHY/v/j0z9fO+aMe3fMV7IVQCAQBp+u+SbgjdROYSbAnsXIK74IJzfYWfB8jVGwBO0ey0BlkY2Q9jl+22q3de5bUIKoUAgPSMTTlJL5dUqenJ7GYASibRDEB+3gCI2ht7X6g5KNOIVDvrWX6LoGoIAEjX2NQWSa8N3UamEtyNJnoNruDKMAPgugfk2v634De1895uxzfd7r0QKoUAgPSNTX1e0mdDt5GVRDMAbm7w9/0LLUq0Wj4XawBcW9Hceu9lTG3Fj+zqbe/xXgiVQwCAL6+VtCl0E5kwI0ryo1TFWQAXJXlVznjeorg30dyGk1599MQuOs4rf/CFAAA/xqYOSXqZ8n6iTFqS7AdQwQCQ6PdsRhR648l4t8a9nqtYmdo5V9vxjYc8F0JFEQDgz9jU9yS9L3QbWUi0L32S9+GLKsHvOfj0f3RM0dxd3suY+nmft+NbrvVeCJVFAIBv71C8QVC5JViVXslHAIlmAEIGAKdoblq+J7aMXb7Trt75m16LoPIIAPBrbKoj6bckHQ3dik/JZgCqFwCS/J5DzgBEc3ene2LjqZihrmrLn+G3CEAAQBbGpu6U9Ceh2/AqyamAzAD0J8HGS0m47n65zjbvdUzt3DfZ8U13ei+EyiMAIBtjUx+T9NXQbfiSaAbAdfyfHZ8nrhu//jigIDMAmb3yd+5/2tXb/sp7IUAEAGTrdyT5Pyg9BDMkmcFP4qvSLECy36s9/emCHkVz6xOFll4Yu+iY7GJ2+0NmCADIztjUHkmvVJIzYHOMdQA9SnD+QYi7f9fZJtfd57lKTaqtuNKOb6zgKyEIhQCAbI1NfUPSh0K34QWHAvWmQFsAu+ioormW9zqmft6n7Pjmb3ovBJyEAIAQ3ijpttBNpI5DgXqS6BFApjMAkVw2r/xttat3vMJrEeAUCADI3tjUjKTfVckeBSRbCFidAJDoFcAM3wCIX/nz/PYqr/whIAIAwhib+r6ka0K3kaokrwIyA9CbjGYAXHRIrrPdex1TW/Hf7Pgm/88YgFMgACCkN0ryvboqM4lmABT5P1gmD1w7fu1xQMn+HffKyc393HsVY5fdY1dvf7P3QsBpEAAQztjUXklvCt1GakxdMo2BP16FWYBEix0T/vvtlevs8L/bn6xUW36V5yLAGREAENrHJd0Uuom0JHpGXYU3ARI9/8/g7t+1FbU3ei9jaitutOObp7wXAs6AAICwxqacpNeqLMcGsw7gjPL+/D9q353oEUVPzHBbdtHz/RYBFkYAQHhjUz+U9P+GbiMNvAmwgBy/AeCig3KdXV5rSJKprXi3Hd94yHshYAEEAOTFWyXtDt1EYswAnFluZwCyWvi3fLtdve3d3gsBPSAAIB/Gpg5IekPoNhJLtAZgRiXbGuFBEoUcj2sAXGe7/3f+VZNqy17ouQjQMwIA8mNs6tOSvhu6jSSMHUnwaTcfAkrKzSrJUg9v5wC4uawW/n3djm8uzYJXFB8BAHnzWkmeV2H5ZCUzeAgo82MAFyV5BXBI0uCnLZ5JvPCv6+Xa9zKjs7KjL/ZbBOgPAQD5MjZ1m6QPhm4jiUR3qmV+FTDB839frwC67gG5jv+lJ6Z29ls46Q95QwBAHr1Dkv99WH1JMFiVewYgyQJAH28AOEXtDBb+1c7aZFdv+2vvhYA+EQCQP2NThyW9M3Qbg0o2A1DeAJC3GQDX2SYleSzRk5qTXfoCz0WAgRAAkFeflLQxdBMDYQbglJLNAKQdALqK2ltSvuaDmdrZN9nxzT/2XggYAAEA+TQ21Zb0ntBtDMIkma5OuFI+v5K94ZD2DIBrb48PJvKq5mQXvdxzEWBgBADk2ack3RW6ib6ZYUlm4I+XchYgSrLHgUl5BqCrqLM1xeudWnz3v2mD90LAgAgAyK+xqY6kAu6alnDAKuE6gGSnACYLVA/qhbt/QBIBAPn3GUl3hm6iX4mmrL0vTAsgyRkAqb4BwN0/cAIBAPk2NtWV9K7QbfQtyZkApZwByMcWwNz9A/chAKAIPidpOnQT/Ug2A1C+AJDoFcDUnv9z9w+cjACA/BubilS0fQESTFuXcgYgB4cAcfcP3B8BAEXxz5J+FrqJXiWaAXBtyRX4OIQH6c6/3jiYdGYAuPsHHogAgGIo2ixAwsNryjQL4KIkJxwmO1zp3h64+wcehACAIvmipFtDN9GrRHeuZXoTIMErgMmOVz6Bu3/gVAgAKI6xKaf4oKBiSLIlcIlmABItajTJXwHk7h84NQIAiuYrkm4L3URPEs0AlCcAJAoziZ//c/cPnA4BAMUSzwJ8JHQbvTBJ7l6ZAZCU/AwA19mVwd2/kezoazwXAVJHAEARfUbSodBNLCjJZkDMAMQSzgC4zvZEn++Fscu22vHNhVmbApxAAEDxjE0dkfTp0G0sJNnda1dyc6n1EozrJLoDT/Lv0EUH5bJYTGkX/0//RYD0EQBQVH8buoEFmbpkGgN/PJPBy7NkhwDV5l+nHLB2Z8fgtXtlRuZkGv/DfyEgfQQAFNPY1B2SbgjdxkKSbQhUgscAiZ7/J1lD0Zbr3DP453tkasu+bsc3Rt4LAR4QAFBk+Z8FqPihQKGe/7vOTklu8No9sZIZeb3nIoA3BAAU2Vck+V/llUCiu9gyLAQM9AZAlMH0v6ktv8uOb7rLeyHAEwIAimtsqiPpo6HbOKOKzwAkeowxYABw3f2SS7L9cI/Movf7LwL4QwBA0X1UUn5Pzkl8LLDvaWy/Er3OOGB4yuLVP9lFx+3qrR/3XwjwhwCAYhub2iHpy6HbOJ1kJ9m5bO5kfXGzkroDf3ygxyduVq67b+CavTJ26Ze8FwE8IwCgDHK8GNBKZnjgTxd5Q6BEvZuh+DXAPkWZLP6rOZlhFv+h8AgAKL6xqRsl3R66jdNJNAtQ5HUACXofbAGgy+Tdf1Nbfrsd37TLeyHAMwIAyiK/swAJ3gQo9AxAxq8Auu7ebHZPtIve4b8I4B8BAGXxvyTl8oF5ZWcAMn4FMJO7f7v4sB3f8kXvhYAMEABQDmNThyR9I3Qbp5RoP/viBoBE2wD3G5pcO379zze7JJ9/xoABEABQJl8I3cCpJJsBmJFUxJ1mnRQlmJDp87GJ6+4dvFY/zNBfZlMI8I8AgDK5VtJs6CYexIxIMgN/3CUZSENxM0qyGt/Ykf7KdfcMXKtXxi4+asc33+y9EJARAgDKI34M8M3QbTyYkfoc0O4nyVR6IMleARxRX19NrpPN9L9Z/B3/RYDsEABQNvl8DJB4R8CCSfIKYJ+PTOKNfzLYMdEOc+wvSoUAgLL5mqQM3gXrU5JXAQv4JkCyGYB+A4D/6X+Z0Rk7vvlb/gsB2SEAoFzGpg5Kyt0XdaKFgMwAnEGU0da/S/7TexEgYwQAlFH+HgMkeRWQGYDT1+nuVyZvSZjhD/svAmSLAIAy+qqkdugmTpbsVcA5yQ1+qE72okSHGBnb++OSbKb/h9t29Zb8hUogIQIAymds6oDy9hjADEvq/3CbExJtqpOxZJsXmT4OT3KZvP9v7JIfey8CBEAAQFnl7o6tMusAEp8B0NueCa57QHKdwWv1yox8zH8RIHsEAJRV7h4DJFkHUKgzATI6AyCb6f+hSKb+Cf+FgOwRAFBOY1P7Jf1r6DbuJ8EMQJEWAmZ1CmBG0/+32/GNRdyLGVgQAQBl9qXQDZysMpsBZTAD4KKD2Rz9a0Y+5b8IEAYBAGXGDEAAyU4B7O0NgEy2/pWVTOPvMigEBEEAQHmNTd0taWvoNk4wCXYDlOtkc8eblOtIbvClFz3PkkSHBq7RK2MXHbDjG494LwQEQgBA2U2FbuBepi6ZxsAfL8IsQLIea5IZ6qWKXNd/AJAZ+Zn/IkA4BACUXX4CgCqwDiDJ8/8eH5G46LCy2f1v6Hr/RYBwCAAou1wFgLKvA0jUY6/hKIu7fxnJ1D+ZQSEgmHroBuDR5ERD0nMlPVHSZYpPyfuBpJsk/YvWTmdwhmpgY1Mb1GrukLQqdCtSPAMw8L/0ks8A9BqOXHRw8Bq9sqPH7PimHf4L5cDkhJH065KerPi7Ykjx98Qtkq7V2ul87aeB1BAAympy4omSrpH02Af8k3Xzf/+OJid+R2un78y2sSCmJL0kdBOSEs0AqAjbASfosddFklkEAGNGN3gvkgeTE4+W9HFJz3jAP7l8/u8/1eTEq7R2+pZsG0MWeARQRpMTb5b0fT148D/ZMyTdqsmJ52XTVFD5eQyQ4E0AFw1+wE5WfG8C5KJjGW3/O5SvV0h9iH/2b9WDB/+TPVbS9+e/U1AyBICymZx4u6T3qreTZ0YkfVyTE+f6bSq43ASAROcBJDxlz7uEpxb2tEAyi+l/STKNf8imUCDxz/zHFX8HLKQm6b3z3y0oEQJAmcQ/oO/o81PnSfpQ+s3kyNjUHZJ2h24jZvs47e7Bkp2051eyBYCN+DXJhWpkEQDMSNuOb7rNf6GgPqT4Z78f7yAElAsBoCwGG/xPuEqTE0luTYvgO6EbOCHRLECe3wTIYgvgbgbP/+1oy3uRkOKf9asG/DQhoEQIAGWQbPCX4im+M60XKIMbQzdwrwR7AZR2BqCXUORmJDc7eI1emeHv+i8S1GPV2yPC0yEElAQBoOgmJ96mZIP/CWtSuEaelWMdQGlnABZeHJnJ7n+SZBqfzaZQMGn8rL9j/rsHBUYAKLL4B/CdKV1te0rXyaufSfJ/fmwvEr0JkOMAkOgQoF7eAMji+f9QZMc33+C/UFBp/ay/kxBQbASAokp38JekH6d4rfwZm3KSbg7dhpR0BmBGGnwrIa8SvabY0xsAGRwAZEZ3ei8SXpo/64SAAiMAFFH6g/96rZ2uwhdfPg53MSOSzIAfdvncEdDNKMn+/AuHIhfvAeCbadztv0hg8c/6+hSvSAgoKAJA0UxO/LnSHfydpNekeL08uz10AzEzHwIGk8czARI9mjDDWvCrKKuZD1P/if8iufAapfsv9J3z300oEAJAkcQ/YO9K+ap/q7XTuVkg51lOAkDCxwC5nAHwewpgJnf/kqT6v2dUKKz4Z/5vU77quwgBxUIAKAo/g/+/SHp9ytfMsztCN3CvJK8Clm4GoIdFkVkFAGO/lU2hXHi94u+ANBECCoQAUAT+Bv8XaO10Bi9W58TY1EFJ20K3IZXwVUDfMwBZHIRkhjt2fNMe/4VyIv7Zf4EIAZVFAMi7yYm3isE/Tfl4DJDoVcD8nQqYqKee3gDw/3s2ZviA9yJ54zcEvDXlayJlBIA8i3+A3p3yVas8+Es5CQDJZgDmJA1+6E76XKId+vIzA9DY7L9IDvkLAe8mBOTbwqdvIAwGf1+CB4DujHRsY13dYw/RoAuxTWNWJsGbBIPY0zqqzswpgofryHX7PVfmBKP66KwubA5r5OzT3I8kPGWw91bq+XhNNIS107OanHiBpK9I+vUUr/xuTU5Ia6ffk+I1kRLjXD43Fak0P4P/1yVdWfHBX2o1nyYp2F7vu77d0aGfdTM50j5trY07NDs75+Xa1hqdN7ZUT3njygf9M9c9oGj2Vi91T2bqF/6hXb017ZXxxTI5MSzpy5Kek/KV/5wQkD88AsibyYm3iMHfp2AzADM7nA7+pJiDv29R5LTrrkPacdMpFhNmMf0vSaZWpTcATi3+jrhS8XdGmt49/92GHCEA5En8A5J2SmbwP9nY1D5Ju0KUPnhbnp7b51Pr2w9eh5fRDoCRHd90p/9CBeAvBLyHEJAvBIC8YPDPUpBZgO4xHrctZO7oKaZHMpgBMGb4sPciRUIIqAQCQB4w+Gct+EJA9C6bGYChsp+G2T9CQOkRAEKbnPgzMfhnjQBQFK4z/9qjZ6ae5uE45eE3BPxZytdEnwgAIcU/AH+R8lWvF4P/Qqr5vncBOZfgiOG+1PKzTXTe3BcCrk/5yn9BCAiLABCKv8H/hQz+C9odugH0yLUzKmQ3ZVSomOLvlBeKEFAqBIAQGPxDuyd0A+hRVgHA2LuzKVRghIDSIQBkjcE/DwgAhZHVDIDZkFGhYiMElAoBIEuTE28Wg394Y1NHJOXwSD08kMtkBsDIjm/iEUCv/IaAN6d8TZwBASAr8R/s96Z9VTH4D4pZgCLIIgCYRuS/SMncFwImU77yewkB2SEAZMHf4P8iBv+BEQCKIJMAUMvgPcMSir97XiRCQGERAHzjzj+vCABFkEEAMKpndNhACTETUGgEAJ8mJ94kf4M/dy3J8CpgAThlsQlQ7Yj/IiUWfxf5CgFvSvmaOAkBwJf4D+770r6qGPzTwgxAEWSyCLC2P4Mi5eYvBLyPEOAPAcAHBv8iIADknlM2ZyfbvRkUKT9CQOEQANI2OfEnSn/wv04M/mnjEUDeZbcJUJDjoUvpvhBwXcpXft/8dytSRABI0+TEEyR9IOWrXqd4tT+Df7qYAci5bPYAkCS7LaNC1RB/V71I6YeAD8x/xyIlBIC0TE40JH1KUiPFqzL4+0MAyLvsAgCHQ6XNTwiIv2Pj71qkgACQnmdLelyK12Pw94tHALmX1SMAwzkAPvgJAY9T/F2LFBAA0pPm1BSDv3+bJR0K3QROz0VHM6hiJdW+m0GhavITAngMkBICQHrS+kN5rRj8/Rub6kriiz/Puge9lzB28X47vpEg6NN9IeDalK5IAEgJASA9aRwuc62kFzP4Z+Ydyu64OfTBdffLRb4DgJHssrd7LgLpRAh4sdIJARzklRICQHp+lPDzDP5ZG5u6RdIfSmJL5Rxx0VFFc9OeqxiZ+kO+YFdv/ZDnQjghvRCQ9LsW8wgA6bk5wWcZ/EMZm/qY4oVFn5X0c0kubEMV57qKZn7o7w0AM9wxdvl207jwRXb1zt/wUwSnlU4ISPJdi5MY5/i+S83kxFclPa/PTzH450mr2ZBUO+0/33N0WLuPDLRxjHNqyBU3dA/6VWGO75M5tifdZk7BXfCQNW5s5Ezv9M/Z8Y0c/JMHkxNDkr4o6bl9fvJrWjv9fA8dVRIBIE2TEysl/UzSOT1+4muSrmLwL5DJiRHxDLI/R/dJRzLYdmHxiot19Z5N/gshFXEI+IJ6v2naJ+kxWju9019T1VLYu5Fciv9grlM8lXwmkaS/EoM/gKqKv/uuUvxdGC3wq38uaR2Df7oIAGlbO/0fkh4v6YOSHnjMqJP0Y0lP09rpNzD4A6i0tdNzWjv9BklPU/zd+MAp6SOKv0sfP//dihTxCMCnyQkraVzxe6u7JP1Qa6f9v9wMf3gE0D8eAaBXkxPLJf2ipPMVB4INWju90OwABlQP3UCpxX9wp+f/AgCcSXyDdEPoNqqCRwAAAFQQAQAAgAoiAAAAUEEEAAAAKogAAABABREAAACoIAIAAAAVRAAAAKCCCAAAAFQQAQAAgAoiAAAAUEEEAAAAKogAAABABREAAACoIAIAAAAVRAAAAKCCCAAAAFQQAQAAgAoiAAAAUEH10A0AhXLocF2zs6G7KJb9R6UDGdS5YHZZBlWA0iAAAP2Yna1rz97QXRTLAUn7MqhzdndpBlWA0uARAAAAFUQAAACggggAAABUEAEAAIAKIgAAAFBBBAAAACqIAAAAQAURAAAAqCACAAAAFUQAAACggggAAABUEGcBAP0YHu5oxTmhuygWe0yyM/7rjNYO+y8ClAcBAOjHsqUdLePMmb4s3iedlUEAWDx8yH8RoDx4BAAAQAURAAAAqCACAAAAFUQAAACggggAAABUEAEAAIAKIgAAAFBBBAAAACqIAAAAQAURAAAAqCACAAAAFUQAAACggggAAABUEAEAAIAKIgAAAFBBBAAAACqIAAAAQAURAAAAqKB66AaAQtm1f0hHD0pzbUkudDfFcEDSPo/XN4q/ycZnzpO0yWMloFQIAEA/Ol2r2dnQXRSLk9+s5CTNSepGQx6rAKXDIwAAACqIAAAAQAURAAAAqCACAAAAFUQAAACggggAAABUEAEAAIAKIgAAAFBBBAAAACqIAAD0Y5Gi0C3gNDrqhG4BKBICANCPu/YeUY0fm75kcWSCldTtTGdQCSgN4xwHmgB9mZzYLhet4iygHh3cLR076O/6VlK95vSKDskM6AOHAQH92ytjV8mEbqMgTOT/m8bU2p4rAKVDYgb6tyt0A4USZfBo3tpj/osA5UIAAPp3c+gGisNJnQyOT641NvgvApQLAQDo37+HbqAw2rOSy+DFCVv/lv8iQLkQAID+/YeyWdtefO3j2dQx9tPZFALKgwAA9Gvt9F5Jt4RuoxDmjvqvUR8+qqv38AgA6BMBABjMx0I3kHvdjjSbQQBojHzNfxGgfAgAwGA+L+lI6CZybcbju/8nGCPZ+hv9FwLKhwAADGLt9BFJnw3dRn456fgB/2Uai+7S1Xu2+C8ElA8BABjcuyXx/vmpHDsQPwLwyRipMfJyv0WA8iIAAINaO71N0gdCt5E7UVc6utd/neEl39PVe3glExgQAQBI5r9J2hy6iVw5uicOAT7Zelf1kRf5LQKUGwEASGLt9HFJvyWJveileNX/Md/P/o00suz1+o3duz0XAkqNAAAktXb6e5L+JHQbwXXnpIPb/dcZWfpVvWTv3/gvBJQbxwEDaZmcuEbSK0O3EYSLpH2b/e/7P7Rok1529GK/RYBqYAYASM/vSqrelrRRV9q/JYvBf7Mao5f6LQJUBwEASMva6a6kV0j6SOBOshN14sG/PeO3ztDi9WqMPlJX7+G1SyAlPAIAfJiceJOkd0lqhG7Fm86sdGB7/Ozfp5GlN+g3D/2K3yJA9RAAAF8mJy6T9BlJE6FbSd3RffHrfj6/P2qNtoaX/L5esu8af0WA6iIAAD5NToxKeqekP5I0Grib5Noz0uHdfo/5NUYaWvwj1Yd/XVfv4VU/wBMCAJCFyYnzJf2ppD+QtDhwN/1rz8S7+816PP/o3oF/6FW6eu+P/RUCIBEAgGxNTpyreOOgl0p6SuBuzizqxAP+zGFpzuPau8bIYdWH/lW28RZdved2f4UAnIwAAIQyOTEm6SWKw8BjA3cTizrSzBFp1vegP3pE9eF/U33ofbpq1/f9FQJwOgQAIA8mJx6jOAi8RNIjM60ddeK7/NnD0pyvZ/tGGho9pvrIDWqMfEAv2vZdT4UA9IgAAOTN5MQvSHqWpGdIepqkFanX6Lbvm973taDPGKf6yC41Rm7Q8JK/05Wbv+OnEIBBEACAPJucMJIeozgMnPhrVV/X6Lbjd/bbM1JnJv572qf1GSuMivH6AAAAqklEQVTVh+Zk65tlazdLulazR7+qV7TZuAfIKQIAUDSTE4+W9CRJj5b0qJP+Ojce7Gek9kkDftqDva1Fqg0dUq2xTbXGHaoPf1/Di6/Tug3r0y0EwCcCAFAW/3j2mKRnyNgJSY+ScyvlomVy0RK5aJGiaEQuGpaLGoq6NTlnZKxkbSRjOjK2I2NnZcyMjD0uY49K5oiMdsu5jXJuvYz5tl564M7Qv1UAyf3/HlAg36WkzboAAAAASUVORK5CYII=",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, d.jsxs)("svg", {
                className: "backbone ".concat(x().backbone),
                viewBox: "0 0 749 298",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsx)("g", {
                    filter: "url(#filter0_d_43_25)",
                    children: (0, d.jsx)("path", {
                      d: "M13 11.5V113.5C13 131.173 27.3269 145.5 45 145.5H351H704C721.673 145.5 736 159.827 736 177.5V286.5",
                      stroke: "#B173FF",
                      strokeWidth: "1.5",
                    }),
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsxs)("filter", {
                      id: "filter0_d_43_25",
                      x: "0.5",
                      y: "0.5",
                      width: "748",
                      height: "297",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, d.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, d.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, d.jsx)("feOffset", {}),
                        (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                        (0, d.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_43_25",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_43_25",
                          result: "shape",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, d.jsx)("div", { className: x().earth }),
              (0, d.jsxs)("div", {
                className: x().ai,
                children: [
                  (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsx)("h2", { children: "Powered by AI" }),
                      (0, d.jsxs)("p", {
                        children: [
                          "Some ",
                          (0, d.jsx)("strong", { children: "AI" }),
                          " concepts are empowering Orion to ease the interaction with humans, such as ",
                          (0, d.jsx)("abbr", {
                            title: "Natural Language Processing",
                            children: "NLP",
                          }),
                          ", ",
                          (0, d.jsx)("abbr", {
                            title: "Text-to-Speech",
                            children: "TTS",
                          }),
                          ", ",
                          (0, d.jsx)("abbr", {
                            title: "Speech-to-Text",
                            children: "STT",
                          }),
                          ", and more in the future!",
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)("div", {
                    className: ""
                      .concat(x().animationContainer, " ")
                      .concat(x().aiAnimation),
                    children: (0, d.jsxs)("svg", {
                      viewBox: "0 0 788 1077",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      "data-pausable-animation": !0,
                      children: [
                        (0, d.jsx)("path", {
                          d: "M493.59 167.975L489.258 164.174L461.012 154.234L460.079 156.887L487.811 166.646L491.326 169.73L495.861 178.689L495.42 179.275L480.643 176.474L480.119 179.237L496.616 182.365L499.161 178.98L493.59 167.975Z",
                          fill: "#F1F1F4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M493.59 167.975L489.258 164.174L479 160.564V163.545L487.811 166.646L491.326 169.73L495.861 178.689L495.42 179.275L480.643 176.474L480.119 179.237L496.616 182.365L499.161 178.98L493.59 167.975Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M495.875 151.812H494.469V150.406C494.469 149.63 493.839 149 493.062 149C492.286 149 491.656 149.63 491.656 150.406V151.812H490.25C489.473 151.812 488.844 152.442 488.844 153.219C488.844 153.995 489.473 154.625 490.25 154.625H491.656V156.031C491.656 156.808 492.286 157.438 493.062 157.438C493.839 157.438 494.469 156.808 494.469 156.031V154.625H495.875C496.652 154.625 497.281 153.995 497.281 153.219C497.281 152.442 496.652 151.812 495.875 151.812Z",
                          fill: "#FFDE91",
                        }),
                        (0, d.jsx)("path", {
                          d: "M488.375 187.438H486.969V186.031C486.969 185.255 486.339 184.625 485.562 184.625C484.786 184.625 484.156 185.255 484.156 186.031V187.438H482.75C481.973 187.438 481.344 188.067 481.344 188.844C481.344 189.62 481.973 190.25 482.75 190.25H484.156V191.656C484.156 192.433 484.786 193.062 485.562 193.062C486.339 193.062 486.969 192.433 486.969 191.656V190.25H488.375C489.152 190.25 489.781 189.62 489.781 188.844C489.781 188.067 489.152 187.438 488.375 187.438Z",
                          fill: "#FFDE91",
                        }),
                        (0, d.jsx)("path", {
                          d: "M465.875 169.625C466.652 169.625 467.281 168.995 467.281 168.219C467.281 167.442 466.652 166.812 465.875 166.812H464.469V165.406C464.469 164.63 463.839 164 463.062 164C462.286 164 461.656 164.63 461.656 165.406V166.812H460.25C459.473 166.812 458.844 167.442 458.844 168.219C458.844 168.995 459.473 169.625 460.25 169.625H461.656V171.031C461.656 171.808 462.286 172.438 463.062 172.438C463.839 172.438 464.469 171.808 464.469 171.031V169.625H465.875Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M467.281 181.344C468.058 181.344 468.688 180.714 468.688 179.938C468.688 179.161 468.058 178.531 467.281 178.531C466.505 178.531 465.875 179.161 465.875 179.938C465.875 180.714 466.505 181.344 467.281 181.344Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M476.656 156.031C477.433 156.031 478.062 155.402 478.062 154.625C478.062 153.848 477.433 153.219 476.656 153.219C475.88 153.219 475.25 153.848 475.25 154.625C475.25 155.402 475.88 156.031 476.656 156.031Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M459.219 150.875C456.893 150.875 455 152.768 455 155.094C455 157.42 456.893 159.312 459.219 159.312C461.545 159.312 463.438 157.42 463.438 155.094C463.438 152.768 461.545 150.875 459.219 150.875Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M459.219 150.875V159.312C461.545 159.312 463.438 157.42 463.438 155.094C463.438 152.768 461.545 150.875 459.219 150.875Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M479 173.375C476.674 173.375 474.781 175.268 474.781 177.594C474.781 179.92 476.674 181.812 479 181.812C481.326 181.812 483.219 179.92 483.219 177.594C483.219 175.268 481.326 173.375 479 173.375Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M479 173.375V181.812C481.326 181.812 483.219 179.92 483.219 177.594C483.219 175.268 481.326 173.375 479 173.375Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M491.188 162.125C488.861 162.125 486.969 164.018 486.969 166.344C486.969 168.67 488.861 170.562 491.188 170.562C493.514 170.562 495.406 168.67 495.406 166.344C495.406 164.018 493.514 162.125 491.188 162.125Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M491.188 162.125V170.562C493.514 170.562 495.406 168.67 495.406 166.344C495.406 164.018 493.514 162.125 491.188 162.125Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M498.781 177.125C496.455 177.125 494.562 179.018 494.562 181.344C494.562 183.67 496.455 185.562 498.781 185.562C501.107 185.562 503 183.67 503 181.344C503 179.018 501.107 177.125 498.781 177.125Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M498.781 177.125V185.562C501.107 185.562 503 183.67 503 181.344C503 179.018 501.107 177.125 498.781 177.125Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M231.823 602.813L228.465 598.182L213.131 589.671L211.766 592.131L226.554 600.338L229.18 603.959L233.947 628.667L236.708 628.134L231.823 602.813Z",
                          fill: "#F1F1F4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M231.823 602.814L228.465 598.182L223.406 595.375V598.591L226.554 600.338L229.18 603.959L233.947 628.667L236.708 628.134L231.823 602.814Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M226.219 621.719H224.812V620.312C224.812 619.536 224.183 618.906 223.406 618.906C222.63 618.906 222 619.536 222 620.312V621.719H220.594C219.817 621.719 219.188 622.348 219.188 623.125C219.188 623.902 219.817 624.531 220.594 624.531H222V625.938C222 626.714 222.63 627.344 223.406 627.344C224.183 627.344 224.812 626.714 224.812 625.938V624.531H226.219C226.995 624.531 227.625 623.902 227.625 623.125C227.625 622.348 226.995 621.719 226.219 621.719Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M226.219 621.719H224.812V620.312C224.812 619.536 224.183 618.906 223.406 618.906V627.344C224.183 627.344 224.812 626.714 224.812 625.938V624.531H226.219C226.995 624.531 227.625 623.902 227.625 623.125C227.625 622.348 226.995 621.719 226.219 621.719Z",
                          fill: "#FFDE91",
                        }),
                        (0, d.jsx)("path", {
                          d: "M238.406 588.906H237V587.5C237 586.723 236.37 586.094 235.594 586.094C234.817 586.094 234.188 586.723 234.188 587.5V588.906H232.781C232.005 588.906 231.375 589.536 231.375 590.312C231.375 591.089 232.005 591.719 232.781 591.719H234.188V593.125C234.188 593.902 234.817 594.531 235.594 594.531C236.37 594.531 237 593.902 237 593.125V591.719H238.406C239.183 591.719 239.812 591.089 239.812 590.312C239.812 589.536 239.183 588.906 238.406 588.906Z",
                          fill: "#FFDE91",
                        }),
                        (0, d.jsx)("path", {
                          d: "M214.969 602.031H213.562V600.625C213.562 599.848 212.933 599.219 212.156 599.219C211.38 599.219 210.75 599.848 210.75 600.625V602.031H209.344C208.567 602.031 207.938 602.661 207.938 603.438C207.938 604.214 208.567 604.844 209.344 604.844H210.75V606.25C210.75 607.027 211.38 607.656 212.156 607.656C212.933 607.656 213.562 607.027 213.562 606.25V604.844H214.969C215.745 604.844 216.375 604.214 216.375 603.438C216.375 602.661 215.745 602.031 214.969 602.031Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M219.656 614.219C220.433 614.219 221.062 613.589 221.062 612.812C221.062 612.036 220.433 611.406 219.656 611.406C218.88 611.406 218.25 612.036 218.25 612.812C218.25 613.589 218.88 614.219 219.656 614.219Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M226.219 591.719C226.995 591.719 227.625 591.089 227.625 590.312C227.625 589.536 226.995 588.906 226.219 588.906C225.442 588.906 224.812 589.536 224.812 590.312C224.812 591.089 225.442 591.719 226.219 591.719Z",
                          fill: "#FFDE91",
                        }),
                        (0, d.jsx)("path", {
                          d: "M235.594 625.562C233.268 625.562 231.375 627.455 231.375 629.781C231.375 632.107 233.268 634 235.594 634C237.92 634 239.812 632.107 239.812 629.781C239.812 627.455 237.92 625.562 235.594 625.562Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M235.594 625.562V634C237.92 634 239.812 632.107 239.812 629.781C239.812 627.455 237.92 625.562 235.594 625.562Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M229.969 596.406C227.643 596.406 225.75 598.299 225.75 600.625C225.75 602.951 227.643 604.844 229.969 604.844C232.295 604.844 234.188 602.951 234.188 600.625C234.188 598.299 232.295 596.406 229.969 596.406Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M229.969 596.406V604.844C232.295 604.844 234.188 602.951 234.188 600.625C234.188 598.299 232.295 596.406 229.969 596.406Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M211.219 586C208.893 586 207 587.893 207 590.219C207 592.545 208.893 594.438 211.219 594.438C213.545 594.438 215.438 592.545 215.438 590.219C215.438 587.893 213.545 586 211.219 586Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M211.219 586V594.438C213.545 594.438 215.438 592.545 215.438 590.219C215.438 587.893 213.545 586 211.219 586Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M660.139 426.244L653.976 420.751L637.122 418.669L629.877 422.567L623.252 435.911L623.494 444.408L642.482 477.756L649.969 480.219L666.198 473.017L669.736 465.834L660.139 426.244ZM663.089 469.781L649.743 475.703L645.344 474.256L627.681 443.236L627.499 436.844L633.059 425.646L637.938 423.021L652.152 424.777L656.349 428.518L665.276 465.341L663.089 469.781Z",
                          fill: "#F1F1F4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M660.139 426.244L653.976 420.751L646 419.766V424.017L652.152 424.777L656.349 428.518L665.276 465.342L663.089 469.781L649.743 475.703L646 474.472V478.913L649.969 480.218L666.198 473.016L669.736 465.834L660.139 426.244Z",
                          fill: "#E2DFF4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M679.891 446.484H677.781V444.375C677.781 443.21 676.837 442.266 675.672 442.266C674.507 442.266 673.562 443.21 673.562 444.375V446.484H671.453C670.288 446.484 669.344 447.429 669.344 448.594C669.344 449.759 670.288 450.703 671.453 450.703H673.562V452.812C673.562 453.977 674.507 454.922 675.672 454.922C676.837 454.922 677.781 453.977 677.781 452.812V450.703H679.891C681.056 450.703 682 449.759 682 448.594C682 447.429 681.056 446.484 679.891 446.484Z",
                          fill: "#FFDE91",
                        }),
                        (0, d.jsx)("path", {
                          d: "M618.438 427.5V425.391H620.547C621.712 425.391 622.656 424.446 622.656 423.281C622.656 422.116 621.712 421.172 620.547 421.172H618.438V419.062C618.438 417.898 617.493 416.953 616.328 416.953C615.163 416.953 614.219 417.898 614.219 419.062V421.172H612.109C610.944 421.172 610 422.116 610 423.281C610 424.446 610.944 425.391 612.109 425.391H614.219V427.5C614.219 428.665 615.163 429.609 616.328 429.609C617.493 429.609 618.438 428.665 618.438 427.5Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M627.719 477.562H625.609V475.453C625.609 474.288 624.665 473.344 623.5 473.344C622.335 473.344 621.391 474.288 621.391 475.453V477.562H619.281C618.116 477.562 617.172 478.507 617.172 479.672C617.172 480.837 618.116 481.781 619.281 481.781H621.391V483.891C621.391 485.056 622.335 486 623.5 486C624.665 486 625.609 485.056 625.609 483.891V481.781H627.719C628.884 481.781 629.828 480.837 629.828 479.672C629.828 478.507 628.884 477.562 627.719 477.562Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M620.688 461.953C621.852 461.953 622.797 461.009 622.797 459.844C622.797 458.679 621.852 457.734 620.688 457.734C619.523 457.734 618.578 458.679 618.578 459.844C618.578 461.009 619.523 461.953 620.688 461.953Z",
                          fill: "#FCF2B6",
                        }),
                        (0, d.jsx)("path", {
                          d: "M668.5 463.359C665.011 463.359 662.172 466.198 662.172 469.688C662.172 473.177 665.011 476.016 668.5 476.016C671.989 476.016 674.828 473.177 674.828 469.688C674.828 466.198 671.989 463.359 668.5 463.359Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M668.5 463.359V476.016C671.989 476.016 674.828 473.177 674.828 469.688C674.828 466.198 671.989 463.359 668.5 463.359Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M657.25 416.953C653.761 416.953 650.922 419.792 650.922 423.281C650.922 426.771 653.761 429.609 657.25 429.609C660.739 429.609 663.578 426.771 663.578 423.281C663.578 419.792 660.739 416.953 657.25 416.953Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M657.25 416.953V429.609C660.739 429.609 663.578 426.771 663.578 423.281C663.578 419.792 660.739 416.953 657.25 416.953Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M633.344 414C629.854 414 627.016 416.839 627.016 420.328C627.016 423.817 629.854 426.656 633.344 426.656C636.833 426.656 639.672 423.817 639.672 420.328C639.672 416.839 636.833 414 633.344 414Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M633.344 414V426.656C636.833 426.656 639.672 423.817 639.672 420.328C639.672 416.839 636.833 414 633.344 414Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M623.5 433.828C620.011 433.828 617.172 436.667 617.172 440.156C617.172 443.646 620.011 446.484 623.5 446.484C626.989 446.484 629.828 443.646 629.828 440.156C629.828 436.667 626.989 433.828 623.5 433.828Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M623.5 433.828V446.484C626.989 446.484 629.828 443.646 629.828 440.156C629.828 436.667 626.989 433.828 623.5 433.828Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M646 473.344C642.511 473.344 639.672 476.183 639.672 479.672C639.672 483.161 642.511 486 646 486C649.489 486 652.328 483.161 652.328 479.672C652.328 476.183 649.489 473.344 646 473.344Z",
                          fill: "#8CBCFF",
                        }),
                        (0, d.jsx)("path", {
                          d: "M646 473.344V486C649.489 486 652.328 483.161 652.328 479.672C652.328 476.183 649.489 473.344 646 473.344Z",
                          fill: "#4895FF",
                        }),
                        (0, d.jsx)("g", {
                          className: x().aiWires,
                          "data-pausable-animation": !0,
                          filter: "url(#filter0_d_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M372 501H287.691C280.919 501 276.105 494.409 278.165 487.958L300.335 418.542C302.395 412.091 297.581 405.5 290.809 405.5H189.407C182.432 405.5 177.599 398.538 180.039 392.002L217 293",
                            stroke: "#B173FF",
                            strokeWidth: "2",
                          }),
                        }),
                        (0, d.jsx)("g", {
                          className: x().aiWires,
                          "data-pausable-animation": !0,
                          filter: "url(#filter1_d_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M466 501.5H519.5H549.211C558.236 501.5 566.143 495.456 568.511 486.746L603.068 359.623C604.797 353.264 600.009 347 593.419 347H498.395C491.564 347 486.743 340.302 488.913 333.824L517.214 249.324C518.58 245.248 522.398 242.5 526.697 242.5H590",
                            stroke: "#B173FF",
                            strokeWidth: "2",
                          }),
                        }),
                        (0, d.jsx)("g", {
                          className: x().aiWires,
                          "data-pausable-animation": !0,
                          filter: "url(#filter2_d_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M438.5 469L403.363 598.254C399.906 610.973 409.482 623.5 422.663 623.5H588",
                            stroke: "#B173FF",
                            strokeWidth: "2",
                          }),
                        }),
                        (0, d.jsx)("path", {
                          d: "M886.333 831.663C886.333 966.786 776.793 1076.33 641.67 1076.33C506.546 1076.33 397.007 966.786 397.007 831.663C397.007 696.539 506.546 587 641.67 587C776.793 587 886.333 696.539 886.333 831.663Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M793.479 639.873C793.479 640.531 793.529 641.182 793.529 641.84C793.512 826.432 659.32 983.632 477.02 1012.63C576.632 1103.93 731.393 1097.2 822.694 997.595C913.998 897.994 907.263 743.222 807.662 651.921C803.089 647.719 798.356 643.704 793.479 639.873Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M524.578 796.896C510.598 796.896 499.267 785.565 499.267 771.586C499.267 757.606 510.598 746.275 524.578 746.275C538.557 746.275 549.888 757.606 549.888 771.586C549.888 785.565 538.557 796.896 524.578 796.896ZM524.578 763.151C519.921 763.151 516.14 766.929 516.14 771.586C516.14 776.242 519.921 780.024 524.578 780.024C529.234 780.024 533.016 776.242 533.016 771.586C533.016 766.929 529.234 763.151 524.578 763.151Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M457.084 788.461H473.957V805.334H457.084V788.461Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M575.198 687.22H592.071V704.096H575.198V687.22Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M684.875 754.713H701.747V771.589H684.875V754.713Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M592.071 906.572C573.435 906.572 558.323 891.463 558.323 872.827C558.323 854.191 573.435 839.079 592.071 839.079C610.707 839.079 625.816 854.191 625.816 872.827C625.816 891.463 610.707 906.572 592.071 906.572ZM592.071 855.954C582.748 855.954 575.198 863.504 575.198 872.827C575.198 882.147 582.748 889.699 592.071 889.699C601.394 889.699 608.943 882.147 608.943 872.827C608.943 863.504 601.384 855.954 592.071 855.954Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M777.678 712.53H794.551V729.402H777.678V712.53Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M710.185 1016.25H727.058V1033.12H710.185V1016.25Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M516.14 974.065H533.016V990.941H516.14V974.065Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M718.62 889.7H735.496V906.575H718.62V889.7Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M408.271 823.961C434.54 785.853 466.651 752.115 503.416 723.995C529.301 704.203 553.001 681.702 574.099 656.873L598.829 627.794C602.38 623.625 606.001 619.527 609.695 615.485C619.913 604.525 631.545 594.974 644.285 587.088C642.598 587.088 641.012 586.994 639.358 587.001C630.743 587.088 622.148 587.625 613.593 588.614C607.821 593.414 602.373 598.585 597.269 604.087C593.427 608.269 589.666 612.532 585.988 616.858L561.242 645.949C540.919 669.85 518.097 691.523 493.184 710.597C456.68 738.539 424.595 771.823 398.019 809.323C397.284 817.467 396.947 825.681 397.007 833.975C397.007 835.816 397.14 837.636 397.201 839.467L403.858 830.331L408.271 823.961Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M720.975 974.513C746.86 954.714 770.55 932.203 791.665 907.384L816.394 878.292C829.993 862.315 844.707 847.313 860.431 833.417L885.42 811.313C884.883 804.709 884.138 798.162 883.086 791.715L875.306 797.758L849.21 820.773C832.886 835.207 817.617 850.774 803.493 867.369L778.801 896.457C758.468 920.368 735.646 942.034 710.726 961.108C672.542 990.29 639.198 1025.31 611.923 1064.88L605.68 1073.65C612.033 1074.59 618.477 1075.23 624.974 1075.67L625.819 1074.46C652.088 1036.35 684.207 1002.62 720.975 974.513Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M711.364 866.988C765.402 832.331 811.811 787.041 847.794 733.875L858.416 718.209C855.447 712.54 852.273 707.005 848.906 701.597L845.78 706.801L833.831 724.398C799.124 775.671 754.349 819.337 702.228 852.754C648.621 887.161 602.506 932.026 566.644 984.671L524.461 1046.43C529.421 1049.14 534.482 1051.68 539.646 1054.02L580.536 994.121C615.143 943.373 659.638 900.135 711.364 866.988Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M511.991 873.282C557.979 842.757 597.065 802.946 626.728 756.394C655.101 711.822 692.501 673.688 736.514 644.456L762.904 626.889L769.805 623.271C764.18 619.804 758.407 616.563 752.495 613.55L727.185 630.426C681.204 660.941 642.124 700.752 612.471 747.298C584.081 791.879 546.665 830.01 502.634 859.245C471.485 880.016 443.442 905.096 419.348 933.747C421.88 939.258 424.552 944.717 427.482 949.955L428.604 948.739C452.505 919.6 480.604 894.163 511.991 873.282Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M631.905 238.946C631.905 258.25 616.256 273.898 596.953 273.898C577.649 273.898 562.001 258.25 562.001 238.946C562.001 219.643 577.649 203.995 596.953 203.995C616.256 203.995 631.905 219.643 631.905 238.946Z",
                          fill: "#C3C9D1",
                        }),
                        (0, d.jsx)("path", {
                          d: "M618.64 211.548C618.64 211.642 618.647 211.735 618.647 211.829C618.645 238.199 599.474 260.656 573.431 264.799C587.662 277.842 609.77 276.88 622.813 262.651C635.857 248.422 634.895 226.312 620.666 213.269C620.013 212.669 619.336 212.095 618.64 211.548Z",
                          fill: "#B7BDC4",
                        }),
                        (0, d.jsx)("path", {
                          d: "M580.225 233.98C578.228 233.98 576.61 232.361 576.61 230.364C576.61 228.367 578.228 226.748 580.225 226.748C582.222 226.748 583.841 228.367 583.841 230.364C583.841 232.361 582.222 233.98 580.225 233.98ZM580.225 229.159C579.56 229.159 579.02 229.699 579.02 230.364C579.02 231.029 579.56 231.569 580.225 231.569C580.891 231.569 581.431 231.029 581.431 230.364C581.431 229.699 580.891 229.159 580.225 229.159Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M570.583 232.775H572.994V235.185H570.583V232.775Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M587.457 218.312H589.867V220.722H587.457V218.312Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M603.125 227.954H605.535V230.364H603.125V227.954Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M589.867 249.648C587.205 249.648 585.046 247.489 585.046 244.827C585.046 242.165 587.205 240.006 589.867 240.006C592.53 240.006 594.688 242.165 594.688 244.827C594.688 247.489 592.53 249.648 589.867 249.648ZM589.867 242.417C588.535 242.417 587.457 243.495 587.457 244.827C587.457 246.158 588.535 247.237 589.867 247.237C591.199 247.237 592.278 246.158 592.278 244.827C592.278 243.495 591.198 242.417 589.867 242.417Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M622.409 252.059H624.819V254.469H622.409V252.059Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M616.383 221.927H618.793V224.338H616.383V221.927Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M606.741 265.316H609.151V267.727H606.741V265.316Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M579.02 259.29H581.431V261.7H579.02V259.29Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M607.946 247.237H610.357V249.648H607.946V247.237Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M563.61 237.846C567.363 232.402 571.95 227.582 577.202 223.565C580.9 220.738 584.286 217.523 587.3 213.976L590.833 209.822C591.34 209.227 591.857 208.641 592.385 208.064C593.845 206.498 595.506 205.134 597.326 204.007C597.085 204.007 596.859 203.994 596.623 203.995C595.392 204.007 594.164 204.084 592.942 204.225C592.117 204.911 591.339 205.65 590.61 206.436C590.061 207.033 589.524 207.642 588.998 208.26L585.463 212.416C582.56 215.83 579.3 218.926 575.741 221.651C570.526 225.643 565.942 230.398 562.146 235.755C562.041 236.918 561.992 238.092 562.001 239.277C562.001 239.54 562.02 239.8 562.029 240.061L562.98 238.756L563.61 237.846Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M608.282 259.354C611.98 256.525 615.364 253.309 618.381 249.764L621.913 245.608C623.856 243.325 625.958 241.182 628.204 239.197L631.774 236.039C631.698 235.096 631.591 234.161 631.441 233.24L630.329 234.103L626.601 237.391C624.269 239.453 622.088 241.677 620.07 244.047L616.543 248.203C613.638 251.619 610.378 254.714 606.818 257.439C601.363 261.608 596.6 266.611 592.703 272.263L591.811 273.517C592.719 273.65 593.64 273.742 594.568 273.805L594.688 273.631C598.441 268.188 603.03 263.369 608.282 259.354Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M606.909 243.993C614.629 239.042 621.259 232.572 626.399 224.976L627.917 222.738C627.492 221.929 627.039 221.138 626.558 220.365L626.111 221.109L624.404 223.623C619.446 230.947 613.05 237.185 605.604 241.959C597.946 246.874 591.358 253.284 586.235 260.804L580.209 269.627C580.917 270.015 581.64 270.377 582.378 270.712L588.219 262.154C593.163 254.905 599.52 248.728 606.909 243.993Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M578.427 244.892C584.997 240.531 590.581 234.844 594.818 228.193C598.872 221.826 604.214 216.378 610.502 212.202L614.272 209.693L615.258 209.176C614.454 208.68 613.63 208.218 612.785 207.787L609.169 210.198C602.6 214.557 597.018 220.245 592.782 226.894C588.726 233.263 583.381 238.71 577.091 242.886C572.641 245.854 568.635 249.436 565.193 253.529C565.554 254.317 565.936 255.097 566.354 255.845L566.515 255.671C569.929 251.508 573.943 247.875 578.427 244.892Z",
                          fill: "#808B96",
                        }),
                        (0, d.jsx)("path", {
                          d: "M306.32 124.071C338.628 192.507 309.341 274.173 240.907 306.48C172.472 338.788 90.8052 309.502 58.4972 241.066C26.1901 172.632 55.4766 90.9657 123.912 58.6577C192.346 26.3506 274.013 55.6371 306.32 124.071Z",
                          fill: "#2A90DE",
                        }),
                        (0, d.jsx)("path", {
                          d: "M213.438 49.1383C213.595 49.4716 213.776 49.7878 213.933 50.1211C258.06 143.614 227.683 255.316 142.289 313.589C214.567 336.012 291.339 295.6 313.766 223.324C336.19 151.05 295.778 74.2691 223.5 51.8443C220.18 50.8128 216.823 49.911 213.438 49.1383Z",
                          fill: "#2683C9",
                        }),
                        (0, d.jsx)("path", {
                          d: "M183.472 229.092C177.902 217.294 159.996 214.05 143.477 221.848C126.957 229.647 118.083 245.534 123.652 257.332C129.222 269.131 147.128 272.375 163.649 264.576C180.167 256.777 189.042 240.891 183.472 229.092Z",
                          fill: "#2379BA",
                        }),
                        (0, d.jsx)("path", {
                          d: "M230.52 180.925C216.319 187.523 200.487 189.795 185.004 187.447C167.598 184.854 149.812 187.487 133.904 195.018L133.117 195.389C117.198 202.884 103.86 214.943 94.8004 230.031C88.0719 241.191 78.7132 250.531 67.5419 257.236C69.2653 259.892 71.0451 262.497 72.9184 264.997C85.1858 257.523 95.4697 247.199 102.901 234.902C110.996 221.413 122.92 210.636 137.151 203.935L137.938 203.563C152.243 196.81 168.239 194.468 183.879 196.838C201.106 199.407 218.711 196.854 234.498 189.496L314.405 152.263L315.884 151.565C315.154 148.446 314.308 145.339 313.35 142.237L230.52 180.925Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M208.497 249.506C200.402 262.995 188.477 273.77 174.247 280.473L173.46 280.845C159.242 287.573 143.344 289.932 127.784 287.61C117.807 286.134 107.652 286.36 97.7532 288.28L98.2188 290.673C100.863 292.733 103.562 294.708 106.34 296.552C113.018 295.847 119.751 295.984 126.393 296.972C143.805 299.564 161.589 296.926 177.494 289.39L178.281 289.018C194.273 281.469 207.657 269.331 216.724 254.15C224.734 240.812 236.485 230.117 250.517 223.398L319.158 191.129C319.384 187.626 319.451 184.104 319.397 180.567L246.459 214.854C230.674 222.426 217.473 234.473 208.497 249.506Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M170.062 319.025L295.613 259.753C298.786 255.094 301.665 250.244 304.24 245.23L153.368 316.456C158.874 317.651 164.448 318.51 170.062 319.025Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M185.183 147.113C220.297 139.392 253.471 124.608 282.691 103.656L290.3 98.1829L290.339 98.1645C288.387 95.6684 286.375 93.2438 284.297 90.9005L277.216 95.9685C249.039 116.179 217.037 130.44 183.166 137.886C148.328 145.551 115.394 160.162 86.3437 180.858L47.7775 208.245C48.4105 211.566 49.2211 214.878 50.1107 218.178L91.7974 188.572C119.819 168.614 151.582 154.512 185.183 147.113Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M68.6235 135.887C71.4754 135.079 74.3452 134.33 77.2446 133.64C92.2404 130.088 106.826 124.979 120.769 118.407C134.701 111.819 147.915 103.804 160.189 94.4823C181.886 78.0163 206.546 65.8736 232.832 58.721L237.816 57.287C233.037 55.1656 228.133 53.3159 223.142 51.7537C198.369 59.3773 175.129 71.2902 154.481 86.953C130.915 104.86 103.86 117.632 75.0587 124.447C72.0429 125.176 69.0393 125.957 66.053 126.792C62.5305 127.797 59.0702 129.012 55.6923 130.433C53.9998 134.561 52.509 138.765 51.2199 143.042C56.7459 140.036 62.5828 137.636 68.6235 135.887Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M183.472 229.092C177.902 217.294 159.996 214.05 143.477 221.848C126.957 229.647 118.083 245.534 123.652 257.332C129.222 269.131 147.128 272.375 163.649 264.576C180.167 256.777 189.042 240.891 183.472 229.092Z",
                          fill: "#2379BA",
                        }),
                        (0, d.jsx)("path", {
                          d: "M230.52 180.925C216.319 187.523 200.487 189.795 185.004 187.447C167.598 184.854 149.812 187.487 133.904 195.018L133.117 195.389C117.198 202.884 103.86 214.943 94.8004 230.031C88.0719 241.191 78.7132 250.531 67.5419 257.236C69.2653 259.892 71.0451 262.497 72.9184 264.997C85.1858 257.523 95.4697 247.199 102.901 234.902C110.996 221.413 122.92 210.636 137.151 203.935L137.938 203.563C152.243 196.81 168.239 194.468 183.879 196.838C201.106 199.407 218.711 196.854 234.498 189.496L314.405 152.263L315.884 151.565C315.154 148.446 314.308 145.339 313.35 142.237L230.52 180.925Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M208.497 249.506C200.402 262.995 188.477 273.77 174.247 280.473L173.46 280.845C159.242 287.573 143.344 289.932 127.784 287.61C117.807 286.134 107.652 286.36 97.7532 288.28L98.2188 290.673C100.863 292.733 103.562 294.708 106.34 296.552C113.018 295.847 119.751 295.984 126.393 296.972C143.805 299.564 161.589 296.926 177.494 289.39L178.281 289.018C194.273 281.469 207.657 269.331 216.724 254.15C224.734 240.812 236.485 230.117 250.517 223.398L319.158 191.129C319.384 187.626 319.451 184.104 319.397 180.567L246.459 214.854C230.674 222.426 217.473 234.473 208.497 249.506Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M170.062 319.025L295.613 259.753C298.786 255.094 301.665 250.244 304.24 245.23L153.368 316.456C158.874 317.651 164.448 318.51 170.062 319.025Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M185.183 147.113C220.297 139.392 253.471 124.608 282.691 103.656L290.3 98.1829L290.339 98.1645C288.387 95.6684 286.375 93.2438 284.297 90.9005L277.216 95.9685C249.039 116.179 217.037 130.44 183.166 137.886C148.328 145.551 115.394 160.162 86.3437 180.858L47.7775 208.245C48.4105 211.566 49.2211 214.878 50.1107 218.178L91.7974 188.572C119.819 168.614 151.582 154.512 185.183 147.113Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("path", {
                          d: "M68.6235 135.887C71.4754 135.079 74.3452 134.33 77.2446 133.64C92.2404 130.088 106.826 124.979 120.769 118.407C134.701 111.819 147.915 103.804 160.189 94.4823C181.886 78.0163 206.546 65.8736 232.832 58.721L237.816 57.287C233.037 55.1656 228.133 53.3159 223.142 51.7537C198.369 59.3773 175.129 71.2902 154.481 86.953C130.915 104.86 103.86 117.632 75.0587 124.447C72.0429 125.176 69.0393 125.957 66.053 126.792C62.5305 127.797 59.0702 129.012 55.6923 130.433C53.9998 134.561 52.509 138.765 51.2199 143.042C56.7459 140.036 62.5828 137.636 68.6235 135.887Z",
                          fill: "#2A669E",
                        }),
                        (0, d.jsx)("g", {
                          opacity: "0.601475",
                          filter: "url(#filter3_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M426.008 546.348C475.125 546.348 514.941 523.889 514.941 496.186C514.941 468.483 475.125 446.024 426.008 446.024C376.892 446.024 337.076 468.483 337.076 496.186C337.076 523.889 376.892 546.348 426.008 546.348Z",
                            stroke: "#00000F",
                            strokeWidth: "9.62882",
                          }),
                        }),
                        (0, d.jsx)("g", {
                          filter: "url(#filter4_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M426.996 540.447C471.998 540.447 508.479 519.384 508.479 493.402C508.479 467.42 471.998 446.357 426.996 446.357C381.993 446.357 345.512 467.42 345.512 493.402C345.512 519.384 381.993 540.447 426.996 540.447Z",
                            fill: "#F9FAFC",
                          }),
                        }),
                        (0, d.jsx)("path", {
                          d: "M426.996 527.915C476.749 527.915 517.082 505.44 517.082 477.717C517.082 449.993 476.749 427.519 426.996 427.519C377.242 427.519 336.909 449.993 336.909 477.717C336.909 505.44 377.242 527.915 426.996 527.915Z",
                          fill: "url(#paint0_linear_451:1043)",
                        }),
                        (0, d.jsx)("path", {
                          d: "M336.909 446.488H517.082V481.02H336.909V446.488Z",
                          fill: "url(#paint1_linear_451:1043)",
                        }),
                        (0, d.jsx)("path", {
                          d: "M426.996 500.007C476.749 500.007 517.082 476.721 517.082 447.996C517.082 419.27 476.749 395.984 426.996 395.984C377.242 395.984 336.909 419.27 336.909 447.996C336.909 476.721 377.242 500.007 426.996 500.007Z",
                          fill: "url(#paint2_linear_451:1043)",
                        }),
                        (0, d.jsx)("g", {
                          filter: "url(#filter5_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M426.996 494.56C471.538 494.56 507.647 473.712 507.647 447.996C507.647 422.279 471.538 401.432 426.996 401.432C382.453 401.432 346.344 422.279 346.344 447.996C346.344 473.712 382.453 494.56 426.996 494.56Z",
                            stroke: "#F9FAFC",
                            strokeWidth: "1.97845",
                          }),
                        }),
                        (0, d.jsx)("path", {
                          d: "M426.996 494.56C471.538 494.56 507.647 473.712 507.647 447.996C507.647 422.279 471.538 401.432 426.996 401.432C382.453 401.432 346.344 422.279 346.344 447.996C346.344 473.712 382.453 494.56 426.996 494.56Z",
                          stroke: "#F9FAFC",
                          strokeWidth: "1.97845",
                        }),
                        (0, d.jsx)("path", {
                          d: "M428.095 474.001C452.972 474.001 473.139 462.358 473.139 447.996C473.139 433.633 452.972 421.99 428.095 421.99C403.218 421.99 383.052 433.633 383.052 447.996C383.052 462.358 403.218 474.001 428.095 474.001Z",
                          fill: "#F9FCFB",
                        }),
                        (0, d.jsx)("g", {
                          filter: "url(#filter6_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M368.947 492.128L369.169 513.276C380.328 517.428 391.218 520.092 402.306 522.501L402.232 502.449C390.551 498.065 379.2 495.457 368.947 492.128Z",
                            fill: "#F9FAFC",
                          }),
                        }),
                        (0, d.jsx)("g", {
                          filter: "url(#filter7_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M474.119 498.82L474.301 515.957C483.614 512.263 493.02 508.039 501.385 501.509L501.325 485.169C491.454 488.539 482.124 493.808 474.119 498.82H474.119Z",
                            fill: "#F9FAFC",
                          }),
                        }),
                        (0, d.jsxs)("g", {
                          filter: "url(#filter8_f_451:1043)",
                          children: [
                            (0, d.jsx)("path", {
                              d: "M484.977 432.278C489.052 437.152 491.194 442.488 491.247 447.9C491.3 453.311 489.263 458.661 485.284 463.561",
                              stroke: "#F9FAFC",
                              strokeWidth: "7.3821",
                            }),
                            (0, d.jsx)("path", {
                              d: "M433.878 484.365C424.054 484.879 414.159 484.056 404.987 481.96",
                              stroke: "#F9FAFC",
                              strokeWidth: "7.3821",
                            }),
                            (0, d.jsx)("path", {
                              d: "M368.782 435.888C373.497 428.247 382.496 421.733 394.353 417.381",
                              stroke: "#F9FAFC",
                              strokeWidth: "7.3821",
                            }),
                            (0, d.jsx)("path", {
                              d: "M428.187 484.514C463.014 484.514 491.248 468.213 491.248 448.105C491.248 427.998 463.014 411.697 428.187 411.697C393.359 411.697 365.126 427.998 365.126 448.105C365.126 468.213 393.359 484.514 428.187 484.514Z",
                              stroke: "#F9FAFC",
                              strokeWidth: "2.68327",
                            }),
                          ],
                        }),
                        (0, d.jsx)("path", {
                          d: "M484.885 432.168C488.96 437.041 491.102 442.378 491.155 447.789C491.208 453.201 489.171 458.551 485.192 463.451",
                          stroke: "#F9FAFC",
                          strokeWidth: "7.3821",
                        }),
                        (0, d.jsx)("path", {
                          d: "M433.786 484.256C423.963 484.769 414.067 483.946 404.895 481.851",
                          stroke: "#F9FAFC",
                          strokeWidth: "7.3821",
                        }),
                        (0, d.jsx)("path", {
                          d: "M368.691 435.779C373.405 428.137 382.405 421.623 394.262 417.271",
                          stroke: "#F9FAFC",
                          strokeWidth: "7.3821",
                        }),
                        (0, d.jsx)("path", {
                          d: "M428.095 484.404C462.923 484.404 491.156 468.103 491.156 447.996C491.156 427.888 462.923 411.587 428.095 411.587C393.268 411.587 365.034 427.888 365.034 447.996C365.034 468.103 393.268 484.404 428.095 484.404Z",
                          stroke: "#F9FAFC",
                          strokeWidth: "2.68327",
                        }),
                        (0, d.jsx)("g", {
                          filter: "url(#filter9_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M428.095 474.001C452.972 474.001 473.139 462.358 473.139 447.996C473.139 433.633 452.972 421.99 428.095 421.99C403.218 421.99 383.052 433.633 383.052 447.996C383.052 462.358 403.218 474.001 428.095 474.001Z",
                            fill: "#F9FCFB",
                          }),
                        }),
                        (0, d.jsx)("g", {
                          filter: "url(#filter10_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M428.095 474.001C452.972 474.001 473.139 462.358 473.139 447.996C473.139 433.633 452.972 421.99 428.095 421.99C403.218 421.99 383.052 433.633 383.052 447.996C383.052 462.358 403.218 474.001 428.095 474.001Z",
                            fill: "#F9FCFB",
                          }),
                        }),
                        (0, d.jsx)("g", {
                          opacity: "0.586364",
                          filter: "url(#filter11_f_451:1043)",
                          children: (0, d.jsx)("path", {
                            d: "M383.052 447.995L334 306.011C368.608 277.299 492.845 261.336 520 299.542L473.139 447.995C474.005 480.975 384.841 484.348 383.052 447.995Z",
                            fill: "url(#paint3_linear_451:1043)",
                          }),
                        }),
                        ,
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "655",
                              y1: "297",
                              x2: "655",
                              y2: "305",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "651",
                              y1: "301",
                              x2: "659",
                              y2: "301",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "363",
                              y1: "254",
                              x2: "363",
                              y2: "262",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "359",
                              y1: "258",
                              x2: "367",
                              y2: "258",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "526",
                              y1: "574",
                              x2: "526",
                              y2: "582",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "522",
                              y1: "578",
                              x2: "530",
                              y2: "578",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("g", {
                          opacity: "0.5",
                          children: [
                            (0, d.jsx)("line", {
                              x1: "207",
                              y1: "462",
                              x2: "207",
                              y2: "470",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                            (0, d.jsx)("line", {
                              x1: "203",
                              y1: "466",
                              x2: "211",
                              y2: "466",
                              stroke: "#EDF046",
                              strokeWidth: "2",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("defs", {
                          children: [
                            (0, d.jsxs)("filter", {
                              id: "filter0_d_451:1043",
                              x: "167.398",
                              y: "281.65",
                              width: "215.602",
                              height: "231.35",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  in: "SourceAlpha",
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                  result: "hardAlpha",
                                }),
                                (0, d.jsx)("feOffset", {}),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "5.5",
                                }),
                                (0, d.jsx)("feComposite", {
                                  in2: "hardAlpha",
                                  operator: "out",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in2: "BackgroundImageFix",
                                  result: "effect1_dropShadow_451:1043",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "effect1_dropShadow_451:1043",
                                  result: "shape",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter1_d_451:1043",
                              x: "455",
                              y: "230.5",
                              width: "160.425",
                              height: "283",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  in: "SourceAlpha",
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                  result: "hardAlpha",
                                }),
                                (0, d.jsx)("feOffset", {}),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "5.5",
                                }),
                                (0, d.jsx)("feComposite", {
                                  in2: "hardAlpha",
                                  operator: "out",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in2: "BackgroundImageFix",
                                  result: "effect1_dropShadow_451:1043",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "effect1_dropShadow_451:1043",
                                  result: "shape",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter2_d_451:1043",
                              x: "390.651",
                              y: "457.738",
                              width: "208.349",
                              height: "177.762",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  in: "SourceAlpha",
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                  result: "hardAlpha",
                                }),
                                (0, d.jsx)("feOffset", {}),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "5.5",
                                }),
                                (0, d.jsx)("feComposite", {
                                  in2: "hardAlpha",
                                  operator: "out",
                                }),
                                (0, d.jsx)("feColorMatrix", {
                                  type: "matrix",
                                  values:
                                    "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in2: "BackgroundImageFix",
                                  result: "effect1_dropShadow_451:1043",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "effect1_dropShadow_451:1043",
                                  result: "shape",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter3_f_451:1043",
                              x: "324.065",
                              y: "433.014",
                              width: "203.886",
                              height: "126.344",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "4.09807",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter4_f_451:1043",
                              x: "340.173",
                              y: "441.018",
                              width: "173.645",
                              height: "104.768",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "2.66956",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter5_f_451:1043",
                              x: "337.891",
                              y: "392.978",
                              width: "178.209",
                              height: "110.035",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "3.73203",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter6_f_451:1043",
                              x: "365.446",
                              y: "488.628",
                              width: "40.3603",
                              height: "37.3738",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "1.75032",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter7_f_451:1043",
                              x: "470.93",
                              y: "481.98",
                              width: "33.6435",
                              height: "37.1656",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "1.59439",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter8_f_451:1043",
                              x: "357.928",
                              y: "404.499",
                              width: "142.867",
                              height: "89.5625",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "2.92822",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter9_f_451:1043",
                              x: "364.012",
                              y: "402.95",
                              width: "128.166",
                              height: "90.0908",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "9.51976",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter10_f_451:1043",
                              x: "364.012",
                              y: "402.95",
                              width: "128.166",
                              height: "90.0908",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "9.51976",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("filter", {
                              id: "filter11_f_451:1043",
                              x: "325.644",
                              y: "268.644",
                              width: "202.713",
                              height: "213.723",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                (0, d.jsx)("feFlood", {
                                  floodOpacity: "0",
                                  result: "BackgroundImageFix",
                                }),
                                (0, d.jsx)("feBlend", {
                                  mode: "normal",
                                  in: "SourceGraphic",
                                  in2: "BackgroundImageFix",
                                  result: "shape",
                                }),
                                (0, d.jsx)("feGaussianBlur", {
                                  stdDeviation: "4.17819",
                                  result: "effect1_foregroundBlur_451:1043",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("linearGradient", {
                              id: "paint0_linear_451:1043",
                              x1: "336.909",
                              y1: "477.717",
                              x2: "517.082",
                              y2: "477.717",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, d.jsx)("stop", { stopColor: "#092C54" }),
                                (0, d.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#6A1237",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("linearGradient", {
                              id: "paint1_linear_451:1043",
                              x1: "336.909",
                              y1: "477.717",
                              x2: "517.083",
                              y2: "477.717",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, d.jsx)("stop", { stopColor: "#092C54" }),
                                (0, d.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#6A1237",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("linearGradient", {
                              id: "paint2_linear_451:1043",
                              x1: "336.909",
                              y1: "395.984",
                              x2: "517.082",
                              y2: "500.007",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, d.jsx)("stop", { stopColor: "#1C75DB" }),
                                (0, d.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#EC297A",
                                }),
                              ],
                            }),
                            (0, d.jsxs)("linearGradient", {
                              id: "paint3_linear_451:1043",
                              x1: "426.995",
                              y1: "447.995",
                              x2: "428.649",
                              y2: "277.768",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, d.jsx)("stop", { stopColor: "#F9FAFC" }),
                                (0, d.jsx)("stop", {
                                  offset: "0.540196",
                                  stopColor: "#1C75DB",
                                  stopOpacity: "0.294521",
                                }),
                                (0, d.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#22222F",
                                  stopOpacity: "0",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, d.jsxs)("svg", {
                className: "backbone ".concat(x().backboneEnd),
                viewBox: "0 0 385 304",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsx)("g", {
                    filter: "url(#filter0_d_43_85)",
                    children: (0, d.jsx)("path", {
                      d: "M372 11V113C372 130.673 357.673 145 340 145H45C27.3269 145 13 159.327 13 177V293",
                      stroke: "#B173FF",
                      strokeWidth: "1.5",
                    }),
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsxs)("filter", {
                      id: "filter0_d_43_85",
                      x: "0.5",
                      y: "0",
                      width: "384",
                      height: "304",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, d.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, d.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, d.jsx)("feOffset", {}),
                        (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                        (0, d.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_43_85",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_43_85",
                          result: "shape",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        z = c(5675),
        A = c(5963),
        B = c.n(A),
        C = function (a) {
          var b = a.name,
            c = a.src,
            e = a.width,
            f = a.height,
            g = a.soon,
            h = g
              ? "".concat(B().solution, " ").concat(B().soon)
              : "".concat(B().solution),
            i = g
              ? (0, d.jsxs)("span", {
                  children: [b, (0, d.jsx)("br", {}), "(coming soon)"],
                })
              : (0, d.jsx)("span", { children: b });
          return (0, d.jsxs)("div", {
            className: h,
            children: [
              (0, d.jsx)("div", {
                children: (0, d.jsx)(z.default, {
                  src: c,
                  alt: b,
                  width: e,
                  height: f,
                }),
              }),
              i,
            ],
          });
        },
        D = function () {
          return (0, d.jsxs)("div", {
            className: B().container,
            children: [
              (0, d.jsxs)("div", {
                className: B().intro,
                children: [
                  (0, d.jsx)("h3", {
                    children: "Add ears and mouth to your Orion",
                  }),
                  (0, d.jsxs)("p", {
                    children: [
                      "Orion supports several ",
                      (0, d.jsx)("strong", { children: "text-to-speech" }),
                      " and ",
                      (0, d.jsx)("strong", { children: "speech-to-text" }),
                      " cloud solutions.",
                      (0, d.jsx)("br", {}),
                      "Or you can also go for the offline ones.",
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("div", {
                className: B().ttsStt,
                children: [
                  (0, d.jsxs)("div", {
                    className: B().tts,
                    children: [
                      (0, d.jsx)("h2", { children: "Text-to-Speech" }),
                      (0, d.jsxs)("div", {
                        className: B().ttsSolutions,
                        children: [
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/google-cloud.svg",
                            name: "Google Cloud",
                            width: 51,
                            height: 51,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/aws.svg",
                            name: "AWS",
                            width: 51,
                            height: 51,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/ibm-watson.png",
                            name: "IBM Watson",
                            width: 51,
                            height: 48,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/festvox.png",
                            name: "CMU Flite",
                            width: 51,
                            height: 27,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/aliyun.svg",
                            name: "Alibaba Cloud",
                            width: 51,
                            height: 51,
                            soon: !0,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/microsoft-azure.svg",
                            name: "Microsoft Azure",
                            width: 51,
                            height: 51,
                            soon: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: B().stt,
                    children: [
                      (0, d.jsx)("h2", { children: "Speech-to-Text" }),
                      (0, d.jsxs)("div", {
                        className: B().sttSolutions,
                        children: [
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/google-cloud.svg",
                            name: "Google Cloud",
                            width: 51,
                            height: 51,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/ibm-watson.png",
                            name: "IBM Watson",
                            width: 51,
                            height: 48,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/coqui.svg",
                            name: "Coqui STT",
                            width: 51,
                            height: 51,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/aliyun.svg",
                            name: "Alibaba Cloud",
                            width: 51,
                            height: 51,
                            soon: !0,
                          }),
                          (0, d.jsx)(C, {
                            src: "/img/tts-stt-solutions-logo/microsoft-azure.svg",
                            name: "Microsoft Azure",
                            width: 51,
                            height: 51,
                            soon: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("svg", {
                className: "backbone ".concat(B().backbone),
                viewBox: "0 0 749 176",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsx)("g", {
                    filter: "url(#filter0_d_543_189)",
                    children: (0, d.jsx)("path", {
                      d: "M375 165V75.5M375 75.5H45C27.3269 75.5 13 61.1731 13 43.5V11M375 75.5H704C721.673 75.5 736 61.1731 736 43.5V11",
                      stroke: "#B173FF",
                      strokeWidth: "1.5",
                    }),
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsxs)("filter", {
                      id: "filter0_d_543_189",
                      x: "0.5",
                      y: "0",
                      width: "748",
                      height: "176",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, d.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, d.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, d.jsx)("feOffset", {}),
                        (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                        (0, d.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_543_189",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_543_189",
                          result: "shape",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        E = c(5925),
        F = c.n(E),
        G = function () {
          var a = (0, e.useState)(!1),
            b = a[0],
            c = a[1],
            f = (0, e.useRef)(null),
            g = (0, e.useState)(null),
            h = g[0],
            i = g[1],
            j = (0, e.useState)(!1),
            k = j[0],
            l = j[1],
            m = (0, e.useCallback)(
              function (a) {
                a.forEach(function (a) {
                  if (!k && a.isIntersecting) {
                    l(!0);
                    var b = new Image();
                    (b.onload = function () {
                      c(!0);
                    }),
                      (b.onerror = function () {
                        c(!1);
                      }),
                      (b.src = "https://www.youtube.com/favicon.ico"),
                      i(b),
                      setTimeout(function () {
                        b.complete || ((b.src = ""), c(!1));
                      }, 3e3);
                  }
                });
              },
              [k]
            );
          return (
            (0, e.useEffect)(
              function () {
                var a = new IntersectionObserver(m, {
                    root: null,
                    rootMargin: "0px",
                    threshold: [0, 1],
                  }),
                  b = null == f ? void 0 : f.current;
                return (
                  b && a.observe(b),
                  function () {
                    b && a.unobserve(b);
                  }
                );
              },
              [m]
            ),
            (0, d.jsxs)("div", {
              ref: f,
              className: F().container,
              children: [
                (0, d.jsx)("h3", { children: "Aaaand action!" }),
                
                (0, d.jsxs)("svg", {
                  className: "backbone ".concat(F().backbone),
                  viewBox: "0 0 429 544",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, d.jsx)("g", {
                      filter: "url(#filter0_d_552_2)",
                      children: (0, d.jsx)("path", {
                        d: "M416 11V211.5C416 229.173 401.673 243.5 384 243.5H45C27.3269 243.5 13 257.827 13 275.5V533",
                        stroke: "#B173FF",
                        strokeWidth: "1.5",
                      }),
                    }),
                    (0, d.jsx)("defs", {
                      children: (0, d.jsxs)("filter", {
                        id: "filter0_d_552_2",
                        x: "0.5",
                        y: "0",
                        width: "428",
                        height: "544",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                          (0, d.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                          }),
                          (0, d.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                          }),
                          (0, d.jsx)("feOffset", {}),
                          (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                          (0, d.jsx)("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                          }),
                          (0, d.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_552_2",
                          }),
                          (0, d.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_552_2",
                            result: "shape",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        H = c(4300),
        I = c.n(H),
        J = c(8024),
        K = function (a) {
          var b = a.cards;
          return (0, d.jsxs)("div", {
            className: I().container,
            children: [
              (0, d.jsx)("h3", { children: "More to come..." }),
              (0, d.jsx)("div", { className: I().astronaut }),
              (0, d.jsx)("div", { className: I().saturne }),
              (0, d.jsxs)("div", {
                className: I().roadmap,
                children: [
                  (0, d.jsx)("div", {
                    className: I().cardsContainer,
                    children: b.map(function (a, b) {
                      return (0, d.jsx)(
                        "a",
                        {
                          href: a.url,
                          target: "_blank",
                          rel: "noreferrer",
                          className: I().cardContainer,
                          style: { top: a.top, left: a.left },
                          children: (0, d.jsxs)("div", {
                            className: I().cardInnerContainer,
                            children: [
                              (0, d.jsx)("div", {
                                className: I().typesContainer,
                                children: a.types.map(function (a, c) {
                                  return (0,
                                  d.jsx)("div", { className: I().type, children: a }, "card-".concat(b, "-type-").concat(c));
                                }),
                              }),
                              (0, d.jsxs)("div", {
                                children: [
                                  "" !== a.version &&
                                    (0, d.jsx)("div", {
                                      className: I().versionContainer,
                                      children: (0, d.jsx)("div", {
                                        className: I().version,
                                        children: a.version,
                                      }),
                                    }),
                                  (0, d.jsx)("span", {
                                    className: I().title,
                                    children: a.title,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        "card-".concat(b)
                      );
                    }),
                  }),
                  (0, d.jsxs)("svg", {
                    className: I().roadmapBg,
                    viewBox: "0 0 1395 772",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, d.jsx)("g", {
                        filter: "url(#filter0_i_505:290)",
                        children: (0, d.jsx)("path", {
                          d: "M189.765 46.6618C208.049 12.3775 532.467 216.614 570.441 137.107C608.415 57.6003 862.043 41.556 922.051 4.35663C982.059 -32.8427 1231.94 182.33 1251.63 114.496C1271.32 46.6618 1419.46 267.667 1390.4 344.257C1361.33 420.846 1277.41 465.337 1306.48 582.041C1335.54 698.745 1151.77 638.934 1151.77 743.967C1151.77 849.001 530.592 619.243 488.399 698.745C446.206 778.247 42.089 695.827 89.4392 638.934C136.789 582.041 5.99046 344.257 0.364702 312.893C-5.26105 281.528 55.2158 250.164 111.473 182.33C167.731 114.496 171.481 80.9461 189.765 46.6618Z",
                          fill: "url(#paint0_linear_505:290)",
                        }),
                      }),
                      (0, d.jsx)("g", {
                        filter: "url(#filter1_i_505:290)",
                        children: (0, d.jsx)("path", {
                          d: "M245.969 83.8179C262.225 53.3042 550.664 235.079 584.427 164.316C618.189 93.5534 843.689 79.2737 897.042 46.1656C950.394 13.0575 1172.56 204.565 1190.07 144.192C1207.57 83.8179 1339.29 280.517 1313.44 348.683C1287.6 416.849 1212.99 456.446 1238.83 560.315C1264.68 664.184 1101.28 610.951 1101.28 704.433C1101.28 797.914 548.997 593.425 511.483 664.184C473.97 734.942 114.671 661.587 156.77 610.951C198.869 560.315 82.5761 348.683 77.5743 320.768C72.5725 292.853 126.342 264.939 176.361 204.565C226.379 144.192 229.713 114.332 245.969 83.8179Z",
                          fill: "#222222",
                        }),
                      }),
                      (0, d.jsx)("g", {
                        filter: "url(#filter2_i_505:290)",
                        children: (0, d.jsx)("path", {
                          d: "M301.924 121.009C316.164 94.2529 568.82 253.643 598.395 191.594C627.969 129.546 825.494 117.024 872.228 87.9933C918.962 58.9622 1113.57 226.887 1128.9 173.948C1144.24 121.009 1259.61 293.486 1236.97 353.258C1214.34 413.03 1148.98 447.751 1171.62 538.829C1194.26 629.907 1051.13 583.23 1051.13 665.2C1051.13 747.17 567.36 567.862 534.5 629.907C501.64 691.952 186.914 627.63 223.791 583.23C260.667 538.829 158.801 353.258 154.419 328.781C150.038 304.303 197.137 279.826 240.951 226.887C284.764 173.948 287.685 147.765 301.924 121.009Z",
                          fill: "black",
                        }),
                      }),
                      (0, d.jsxs)("defs", {
                        children: [
                          (0, d.jsxs)("filter", {
                            id: "filter0_i_505:290",
                            x: "0",
                            y: "0",
                            width: "1394.16",
                            height: "776",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                              (0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix",
                              }),
                              (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape",
                              }),
                              (0, d.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values:
                                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha",
                              }),
                              (0, d.jsx)("feOffset", { dy: "4" }),
                              (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "5",
                              }),
                              (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1",
                              }),
                              (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values:
                                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0",
                              }),
                              (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_505:290",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("filter", {
                            id: "filter1_i_505:290",
                            x: "77.25",
                            y: "42.2881",
                            width: "1239.54",
                            height: "691.094",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                              (0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix",
                              }),
                              (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape",
                              }),
                              (0, d.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values:
                                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha",
                              }),
                              (0, d.jsx)("feOffset", { dy: "4" }),
                              (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "5",
                              }),
                              (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1",
                              }),
                              (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values:
                                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0",
                              }),
                              (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_505:290",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("filter", {
                            id: "filter2_i_505:290",
                            x: "154.135",
                            y: "84.5933",
                            width: "1085.77",
                            height: "604.484",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                              (0, d.jsx)("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix",
                              }),
                              (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "BackgroundImageFix",
                                result: "shape",
                              }),
                              (0, d.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values:
                                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha",
                              }),
                              (0, d.jsx)("feOffset", { dy: "2" }),
                              (0, d.jsx)("feGaussianBlur", {
                                stdDeviation: "15",
                              }),
                              (0, d.jsx)("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1",
                              }),
                              (0, d.jsx)("feColorMatrix", {
                                type: "matrix",
                                values:
                                  "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0",
                              }),
                              (0, d.jsx)("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect1_innerShadow_505:290",
                              }),
                            ],
                          }),
                          (0, d.jsxs)("linearGradient", {
                            id: "paint0_linear_505:290",
                            x1: "0",
                            y1: "0",
                            x2: "1394",
                            y2: "772",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              (0, d.jsx)("stop", { stopColor: "#1C75DB" }),
                              (0, d.jsx)("stop", {
                                offset: "1",
                                stopColor: "#ED297A",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsx)("div", {
                className: I().footer,
                children: (0, d.jsxs)("a", {
                  className: "arrow-link",
                  href: "http://roadmap.getOrion.ai",
                  target: "_blank",
                  rel: "noreferrer",
                  children: [
                    "Browse the roadmap ",
                    (0, d.jsx)(J.Z, { name: "arrow-right" }),
                  ],
                }),
              }),
              (0, d.jsxs)("svg", {
                className: "backbone ".concat(I().backbone),
                viewBox: "0 0 302 232",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsx)("g", {
                    filter: "url(#filter0_d_552_3)",
                    children: (0, d.jsx)("path", {
                      d: "M13 11V100C13 117.673 27.3269 132 45 132L257 132C274.673 132 289 146.327 289 164L289 220.5",
                      stroke: "#B173FF",
                      strokeWidth: "1.5",
                    }),
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsxs)("filter", {
                      id: "filter0_d_552_3",
                      x: "0.5",
                      y: "0",
                      width: "301",
                      height: "231.5",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, d.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, d.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, d.jsx)("feOffset", {}),
                        (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                        (0, d.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_552_3",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_552_3",
                          result: "shape",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        L = c(570),
        M = c.n(L),
        N = function () {
          return (0, d.jsxs)("div", {
            className: M().container,
            children: [
              (0, d.jsx)("div", {
                className: M().astronaut,
                children: (0, d.jsx)(z.default, {
                  src: "/img/astronaut-2.svg",
                  width: 285,
                  height: 132,
                  alt: "Astronaut",
                }),
              }),
              (0, d.jsx)("h3", { children: "Become a sponsor" }),
              (0, d.jsxs)("div", {
                className: M().sponsor,
                children: [
                  (0, d.jsxs)("p", {
                    children: [
                      "Hi 👋,",
                      (0, d.jsx)("br", {}),
                      "thanks for stopping by!",
                      (0, d.jsx)("br", {}),
                      (0, d.jsx)("br", {}),
                      "Such project needs time and energy to become possible.",
                      (0, d.jsx)("br", {}),
                      (0, d.jsx)("br", {}),
                      "I dedicate most of my free time to Orion. The focus is not only limited to the activity you see on GitHub but also requires a lot of thinking about the direction of the project. Which is naturally related to the overall design, architecture, vision, learning process and so on...",
                      (0, d.jsx)("br", {}),
                      (0, d.jsx)("br", {}),
                      "If you already benefit from Orion, or you'd love to see the upcoming features happening faster, please consider to sponsor the project.",
                      (0, d.jsx)("br", {}),
                      (0, d.jsx)("br", {}),
                      (0, d.jsx)("em", { children: "John" }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: M().right,
                    children: [
                      
                      (0, d.jsx)("a", {
                        href: "https://orionai-2.gitbook.io/orionai-docs",
                        "aria-label": "Sponsor Orion",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "heartbeat-button ".concat(M().button),
                        children: (0, d.jsxs)("div", {
                          className: M().buttonInnerContainer,
                          children: [
                            (0, d.jsx)(J.Z, {
                              name: "heart",
                              stroke: "none",
                              fill: "#FF0000",
                              width: 18,
                              style: { marginRight: "4px" },
                            }),
                            "Sponsor @Orion on GitHub",
                          ],
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: M().rightArrow,
                        children: (0, d.jsx)(z.default, {
                          src: "/img/arrow.svg",
                          width: 53,
                          height: 22,
                          alt: "Arrow",
                        }),
                      }),
                      (0, d.jsx)("div", {
                        className: M().leftArrow,
                        children: (0, d.jsx)(z.default, {
                          src: "/img/arrow.svg",
                          width: 53,
                          height: 22,
                          alt: "Arrow",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)("svg", {
                className: "backbone ".concat(M().backbone),
                viewBox: "0 0 645 260",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, d.jsx)("g", {
                    filter: "url(#filter0_d_552_4)",
                    children: (0, d.jsx)("path", {
                      d: "M632 11V125C632 142.673 617.673 157 600 157L45 157C27.3269 157 13 171.327 13 189V248.5",
                      stroke: "#B173FF",
                      strokeWidth: "1.5",
                    }),
                  }),
                  (0, d.jsx)("defs", {
                    children: (0, d.jsxs)("filter", {
                      id: "filter0_d_552_4",
                      x: "0.5",
                      y: "0",
                      width: "644",
                      height: "259.5",
                      filterUnits: "userSpaceOnUse",
                      colorInterpolationFilters: "sRGB",
                      children: [
                        (0, d.jsx)("feFlood", {
                          floodOpacity: "0",
                          result: "BackgroundImageFix",
                        }),
                        (0, d.jsx)("feColorMatrix", {
                          in: "SourceAlpha",
                          type: "matrix",
                          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          result: "hardAlpha",
                        }),
                        (0, d.jsx)("feOffset", {}),
                        (0, d.jsx)("feGaussianBlur", { stdDeviation: "5.5" }),
                        (0, d.jsx)("feColorMatrix", {
                          type: "matrix",
                          values:
                            "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in2: "BackgroundImageFix",
                          result: "effect1_dropShadow_552_4",
                        }),
                        (0, d.jsx)("feBlend", {
                          mode: "normal",
                          in: "SourceGraphic",
                          in2: "effect1_dropShadow_552_4",
                          result: "shape",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        O = c(1082),
        P = c.n(O),
        Q = function () {
          return (0, d.jsxs)("div", {
            id: "get-started",
            className: P().container,
            children: [
              (0, d.jsx)("h3", {
                children: "Be the owner of your Orion, today",
              }),
              (0, d.jsxs)("div", {
                className: P().getStarted,
                children: [
                  (0, d.jsx)("a", {
                    href: "https://orionai-2.gitbook.io/orionai-docs",
                    "aria-label": "Sponsor Orion",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "button",
                    children: "Explore the docs",
                  }),
                  (0, d.jsxs)("div", {
                    className: P().terminal,
                    children: [
                      (0, d.jsx)("div", {
                        className: P().header,
                        children: (0, d.jsxs)("div", {
                          className: P().innerHeader,
                          children: [
                            (0, d.jsxs)("div", {
                              className: P().actions,
                              children: [
                                (0, d.jsx)("div", {}),
                                (0, d.jsx)("div", {}),
                                (0, d.jsx)("div", {}),
                              ],
                            }),
                            (0, d.jsx)("div", {
                              className: P().titleContainer,
                              children: "~/workspace/Orion",
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)("div", {
                        className: P().body,
                        children: [
                          (0, d.jsxs)("div", {
                            className: P().chunk,
                            children: [
                              (0, d.jsx)("span", {
                                className: P().comment,
                                children: "Install Orion CLI",
                              }),
                              (0, d.jsx)("span", {
                                className: P().line,
                                children: "npm install --global @Orion-ai/cli",
                              }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: P().placeholder,
                            children: (0, d.jsx)(z.default, {
                              src: "/img/terminal-placeholder.svg",
                              width: 416,
                              height: 62,
                              alt: "Terminal placeholder",
                            }),
                          }),
                          (0, d.jsxs)("div", {
                            className: P().chunk,
                            children: [
                              (0, d.jsx)("span", {
                                className: P().comment,
                                children: "Install Orion",
                              }),
                              (0, d.jsx)("span", {
                                className: P().line,
                                children: "Orion create birth",
                              }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            className: P().placeholder,
                            children: (0, d.jsx)(z.default, {
                              src: "/img/terminal-placeholder.svg",
                              width: 416,
                              height: 62,
                              alt: "Terminal placeholder",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)("svg", {
                    className: "backbone ".concat(P().backbone),
                    viewBox: "0 0 256 557",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, d.jsx)("g", {
                        filter: "url(#filter0_d_552_7)",
                        children: (0, d.jsx)("path", {
                          d: "M243 11V105.5L243 512.5C243 530.173 228.673 544.5 211 544.5H11",
                          stroke: "#B173FF",
                          strokeWidth: "1.5",
                        }),
                      }),
                      (0, d.jsx)("defs", {
                        children: (0, d.jsxs)("filter", {
                          id: "filter0_d_552_7",
                          x: "0",
                          y: "0",
                          width: "255.5",
                          height: "557",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feColorMatrix", {
                              in: "SourceAlpha",
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                              result: "hardAlpha",
                            }),
                            (0, d.jsx)("feOffset", {}),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "5.5",
                            }),
                            (0, d.jsx)("feColorMatrix", {
                              type: "matrix",
                              values:
                                "0 0 0 0 0.694118 0 0 0 0 0.45098 0 0 0 0 1 0 0 0 1 0",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in2: "BackgroundImageFix",
                              result: "effect1_dropShadow_552_7",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect1_dropShadow_552_7",
                              result: "shape",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsx)("div", {
                className: P().generator,
                children: (0, d.jsxs)("svg", {
                  viewBox: "0 0 428 593",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  "data-pausable-animation": !0,
                  children: [
                    (0, d.jsx)("g", {
                      filter: "url(#filter0_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M174.46 587.223C175.656 589.31 178.695 590.262 181.248 589.352C183.802 588.441 184.903 586.012 183.707 583.925C182.512 581.839 179.473 580.887 176.919 581.797C174.366 582.708 173.265 585.137 174.46 587.223Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.991074",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter1_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M145.422 581.827C147.096 583.817 150.284 584.508 152.544 583.371C154.803 582.234 155.278 579.699 153.604 577.71C151.93 575.72 148.742 575.029 146.483 576.166C144.223 577.303 143.748 579.838 145.422 581.827Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.995498",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter2_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M86.7939 584.393C88.6708 582.624 88.4877 580.015 86.3851 578.566C84.2824 577.116 81.0563 577.376 79.1794 579.145C77.3026 580.914 77.4857 583.523 79.5884 584.972C81.691 586.421 84.917 586.162 86.7939 584.393Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.996266",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter3_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M33.6924 551.591C36.1457 550.795 37.0965 548.359 35.8161 546.149C34.5357 543.939 31.509 542.793 29.0557 543.589C26.6024 544.385 25.6516 546.821 26.932 549.031C28.2124 551.241 31.2391 552.387 33.6924 551.591Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.996266",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter4_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M19.4143 511.178C21.2912 509.409 21.1081 506.8 19.0055 505.351C16.9028 503.902 13.6767 504.161 11.7998 505.93C9.92297 507.699 10.1061 510.308 12.2088 511.757C14.3115 513.206 17.5375 512.947 19.4143 511.178Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.996266",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter5_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M4.83623 466.811C6.51001 468.8 9.69848 469.491 11.958 468.354C14.2175 467.217 14.6922 464.682 13.0185 462.693C11.3447 460.704 8.15618 460.013 5.89669 461.15C3.63719 462.287 3.16246 464.821 4.83623 466.811Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.995498",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter6_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M3.1645 446.075C4.35992 448.161 7.39902 449.114 9.95249 448.203C12.5059 447.292 13.6069 444.863 12.4115 442.777C11.2161 440.691 8.17695 439.738 5.62349 440.649C3.07003 441.56 1.96908 443.989 3.1645 446.075Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.991074",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter7_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M174.46 587.223C175.656 589.31 178.695 590.262 181.248 589.352C183.802 588.441 184.903 586.012 183.707 583.925C182.512 581.839 179.473 580.887 176.919 581.797C174.366 582.708 173.265 585.137 174.46 587.223Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.991074",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter8_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M145.422 581.827C147.096 583.817 150.284 584.508 152.544 583.371C154.803 582.234 155.278 579.699 153.604 577.71C151.93 575.72 148.742 575.029 146.483 576.166C144.223 577.303 143.748 579.838 145.422 581.827Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.995498",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter9_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M86.7939 584.393C88.6708 582.624 88.4877 580.015 86.3851 578.566C84.2824 577.116 81.0563 577.376 79.1794 579.145C77.3026 580.914 77.4857 583.523 79.5884 584.972C81.691 586.421 84.917 586.162 86.7939 584.393Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.996266",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter10_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M33.6924 551.591C36.1457 550.795 37.0965 548.359 35.8161 546.149C34.5357 543.939 31.509 542.793 29.0557 543.589C26.6024 544.385 25.6516 546.821 26.932 549.031C28.2124 551.241 31.2391 552.387 33.6924 551.591Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.996266",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter11_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M19.4143 511.178C21.2912 509.409 21.1081 506.8 19.0055 505.351C16.9028 503.902 13.6767 504.161 11.7998 505.93C9.92297 507.699 10.1061 510.308 12.2088 511.757C14.3115 513.206 17.5375 512.947 19.4143 511.178Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.996266",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter12_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M4.83623 466.811C6.51001 468.8 9.69848 469.491 11.958 468.354C14.2175 467.217 14.6922 464.682 13.0185 462.693C11.3447 460.704 8.15618 460.013 5.89669 461.15C3.63719 462.287 3.16246 464.821 4.83623 466.811Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.995498",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter13_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M3.1645 446.075C4.35992 448.161 7.39902 449.114 9.95249 448.203C12.5059 447.292 13.6069 444.863 12.4115 442.777C11.2161 440.691 8.17695 439.738 5.62349 440.649C3.07003 441.56 1.96908 443.989 3.1645 446.075Z",
                        stroke: "#CDA5FF",
                        strokeWidth: "0.991074",
                      }),
                    }),
                    (0, d.jsx)("path", {
                      d: "M143.467 478.086L72.0271 515.392L21.0921 508.649",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M19.4145 511.178C21.2913 509.409 21.1083 506.8 19.0056 505.351C16.9029 503.901 13.6769 504.161 11.8 505.93C9.92317 507.699 10.1062 510.308 12.2089 511.757C14.3116 513.206 17.5376 512.947 19.4145 511.178Z",
                      stroke: "#CDA5FF",
                      strokeWidth: "0.996266",
                    }),
                    (0, d.jsx)("path", {
                      d: "M135.418 472.026L69.0327 506.222L58.392 504.208L13.1383 467.416",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M4.83649 466.811C6.51027 468.8 9.69873 469.491 11.9582 468.354C14.2177 467.217 14.6925 464.682 13.0187 462.693C11.3449 460.704 8.15644 460.013 5.89694 461.15C3.63744 462.287 3.16271 464.821 4.83649 466.811Z",
                      stroke: "#CDA5FF",
                      strokeWidth: "0.995498",
                    }),
                    (0, d.jsx)("path", {
                      d: "M128.067 462.984L69.3272 495.682L11.3319 447.436",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M3.1645 446.075C4.35992 448.161 7.39902 449.114 9.95249 448.203C12.5059 447.292 13.6069 444.863 12.4115 442.777C11.2161 440.691 8.17695 439.738 5.62349 440.649C3.07003 441.56 1.96908 443.989 3.1645 446.075Z",
                      stroke: "#CDA5FF",
                      strokeWidth: "0.991074",
                    }),
                    (0, d.jsx)("path", {
                      d: "M152.548 484.042L35.4815 545.658",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M33.6925 551.59C36.1458 550.794 37.0966 548.358 35.8161 546.148C34.5357 543.938 31.509 542.792 29.0557 543.588C26.6024 544.384 25.6516 546.82 26.932 549.03C28.2124 551.24 31.2392 552.386 33.6925 551.59Z",
                      stroke: "#CDA5FF",
                      strokeWidth: "0.996266",
                    }),
                    (0, d.jsx)("path", {
                      d: "M176.291 501.744L117.213 534.62L176.291 501.744ZM117.865 534.668L175.861 582.914L117.865 534.668Z",
                      stroke: "#B173FF",
                      strokeWidth: "1.18225",
                    }),
                    (0, d.jsx)("path", {
                      d: "M174.46 587.223C175.656 589.31 178.695 590.262 181.248 589.352C183.802 588.441 184.903 586.012 183.707 583.925C182.512 581.839 179.473 580.887 176.919 581.797C174.366 582.708 173.265 585.137 174.46 587.223Z",
                      stroke: "#CDA5FF",
                      strokeWidth: "0.991074",
                    }),
                    (0, d.jsx)("path", {
                      d: "M170.188 495.48L103.803 529.676",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M104.116 529.254L102.103 539.895",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M146.08 576.886L101.964 539.359",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M145.422 581.828C147.096 583.818 150.284 584.509 152.544 583.372C154.803 582.234 155.278 579.7 153.604 577.711C151.93 575.721 148.742 575.03 146.482 576.167C144.223 577.304 143.748 579.839 145.422 581.828Z",
                      stroke: "#CDA5FF",
                      strokeWidth: "0.995498",
                    }),
                    (0, d.jsx)("path", {
                      d: "M161.135 489.597L89.6951 526.903",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M90.0086 526.458L83.2649 577.393",
                      stroke: "#B173FF",
                      strokeWidth: "1.18224",
                    }),
                    (0, d.jsx)("path", {
                      d: "M86.794 584.393C88.6708 582.624 88.4877 580.015 86.385 578.566C84.2823 577.116 81.0563 577.376 79.1795 579.145C77.3026 580.914 77.4857 583.522 79.5883 584.972C81.691 586.421 84.9171 586.162 86.794 584.393Z",
                      stroke: "#CDA5FF",
                      strokeWidth: "0.996266",
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter14_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M143.467 478.086L72.0269 515.392L21.0919 508.649",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter15_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M135.417 472.025L69.0326 506.221L58.3917 504.207L13.1381 467.415",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter16_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M128.067 462.984L69.3272 495.682L11.3319 447.436",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter17_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M152.547 484.042L35.4813 545.658",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter18_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M176.291 501.744L117.213 534.62L176.291 501.744ZM117.865 534.668L175.86 582.914L117.865 534.668Z",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter19_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M170.188 495.48L103.803 529.676",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter20_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M104.118 529.253L102.105 539.894",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter21_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M146.08 576.887L101.964 539.36",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter22_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M161.135 489.597L89.6951 526.903",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter23_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M90.0086 526.458L83.2649 577.393",
                        stroke: "#B173FF",
                        strokeWidth: "2.47785",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      opacity: "0.601475",
                      filter: "url(#filter24_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M237.102 526.524C331.109 526.524 407.317 483.54 407.317 430.516C407.317 377.492 331.109 334.508 237.102 334.508C143.095 334.508 66.8869 377.492 66.8869 430.516C66.8869 483.54 143.095 526.524 237.102 526.524Z",
                        stroke: "#00000F",
                        strokeWidth: "12.6508",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter25_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M238.992 515.229C325.125 515.229 394.949 474.916 394.949 425.187C394.949 375.458 325.125 335.145 238.992 335.145C152.858 335.145 83.0337 375.458 83.0337 425.187C83.0337 474.916 152.858 515.229 238.992 515.229Z",
                        fill: "#F9FAFC",
                      }),
                    }),
                    (0, d.jsx)("path", {
                      d: "M238.992 491.244C334.219 491.244 411.416 448.229 411.416 395.166C411.416 342.104 334.219 299.088 238.992 299.088C143.764 299.088 66.5673 342.104 66.5673 395.166C66.5673 448.229 143.764 491.244 238.992 491.244Z",
                      fill: "url(#paint0_linear_541:133)",
                    }),
                    (0, d.jsx)("path", {
                      d: "M66.5673 335.396H411.416V401.488H66.5673V335.396Z",
                      fill: "url(#paint1_linear_541:133)",
                    }),
                    (0, d.jsx)("path", {
                      d: "M238.992 437.831C334.219 437.831 411.416 393.261 411.416 338.282C411.416 283.302 334.219 238.732 238.992 238.732C143.764 238.732 66.5673 283.302 66.5673 338.282C66.5673 393.261 143.764 437.831 238.992 437.831Z",
                      fill: "url(#paint2_linear_541:133)",
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter26_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M238.992 427.403C324.245 427.403 393.357 387.501 393.357 338.28C393.357 289.059 324.245 249.157 238.992 249.157C153.738 249.157 84.6266 289.059 84.6266 338.28C84.6266 387.501 153.738 427.403 238.992 427.403Z",
                        stroke: "#F9FAFC",
                        strokeWidth: "2.59939",
                      }),
                    }),
                    (0, d.jsx)("path", {
                      d: "M238.992 427.403C324.245 427.403 393.357 387.501 393.357 338.28C393.357 289.059 324.245 249.157 238.992 249.157C153.738 249.157 84.6266 289.059 84.6266 338.28C84.6266 387.501 153.738 427.403 238.992 427.403Z",
                      stroke: "#F9FAFC",
                      strokeWidth: "2.59939",
                    }),
                    (0, d.jsx)("path", {
                      d: "M241.096 388.055C288.71 388.055 327.308 365.77 327.308 338.28C327.308 310.791 288.71 288.506 241.096 288.506C193.483 288.506 154.884 310.791 154.884 338.28C154.884 365.77 193.483 388.055 241.096 388.055Z",
                      fill: "#F9FCFB",
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter27_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M127.888 422.75L128.313 463.225C149.67 471.173 170.515 476.273 191.736 480.882L191.594 442.504C169.237 434.113 147.512 429.12 127.888 422.75Z",
                        fill: "#F9FAFC",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter28_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M329.185 435.556L329.533 468.356C347.359 461.285 365.362 453.201 381.372 440.703L381.256 409.429C362.364 415.878 344.506 425.964 329.186 435.556H329.185Z",
                        fill: "#F9FAFC",
                      }),
                    }),
                    (0, d.jsxs)("g", {
                      filter: "url(#filter29_f_541:133)",
                      children: [
                        (0, d.jsx)("path", {
                          d: "M349.967 308.197C357.766 317.525 361.865 327.739 361.967 338.096C362.068 348.454 358.169 358.694 350.554 368.072",
                          stroke: "#F9FAFC",
                          strokeWidth: "9.69897",
                        }),
                        (0, d.jsx)("path", {
                          d: "M252.164 407.89C233.362 408.874 214.422 407.297 196.867 403.287",
                          stroke: "#F9FAFC",
                          strokeWidth: "9.69897",
                        }),
                        (0, d.jsx)("path", {
                          d: "M127.572 315.108C136.596 300.482 153.821 288.015 176.515 279.685",
                          stroke: "#F9FAFC",
                          strokeWidth: "9.69897",
                        }),
                        (0, d.jsx)("path", {
                          d: "M241.272 408.176C307.931 408.176 361.969 376.977 361.969 338.491C361.969 300.005 307.931 268.807 241.272 268.807C174.612 268.807 120.574 300.005 120.574 338.491C120.574 376.977 174.612 408.176 241.272 408.176Z",
                          stroke: "#F9FAFC",
                          strokeWidth: "3.52542",
                        }),
                      ],
                    }),
                    (0, d.jsx)("path", {
                      d: "M349.792 307.987C357.59 317.315 361.69 327.529 361.791 337.886C361.893 348.244 357.994 358.484 350.379 367.862",
                      stroke: "#F9FAFC",
                      strokeWidth: "9.69897",
                    }),
                    (0, d.jsx)("path", {
                      d: "M251.989 407.68C233.186 408.664 214.247 407.087 196.692 403.077",
                      stroke: "#F9FAFC",
                      strokeWidth: "9.69897",
                    }),
                    (0, d.jsx)("path", {
                      d: "M127.397 314.897C136.421 300.271 153.646 287.804 176.339 279.474",
                      stroke: "#F9FAFC",
                      strokeWidth: "9.69897",
                    }),
                    (0, d.jsx)("path", {
                      d: "M241.096 407.965C307.755 407.965 361.793 376.766 361.793 338.28C361.793 299.795 307.755 268.596 241.096 268.596C174.437 268.596 120.399 299.795 120.399 338.28C120.399 376.766 174.437 407.965 241.096 407.965Z",
                      stroke: "#F9FAFC",
                      strokeWidth: "3.52542",
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter30_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M241.096 388.055C288.71 388.055 327.308 365.77 327.308 338.28C327.308 310.791 288.71 288.506 241.096 288.506C193.483 288.506 154.884 310.791 154.884 338.28C154.884 365.77 193.483 388.055 241.096 388.055Z",
                        fill: "#F9FCFB",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      filter: "url(#filter31_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M241.096 388.055C288.71 388.055 327.308 365.77 327.308 338.28C327.308 310.791 288.71 288.506 241.096 288.506C193.483 288.506 154.884 310.791 154.884 338.28C154.884 365.77 193.483 388.055 241.096 388.055Z",
                        fill: "#F9FCFB",
                      }),
                    }),
                    (0, d.jsx)("g", {
                      opacity: "0.586364",
                      filter: "url(#filter32_f_541:133)",
                      children: (0, d.jsx)("path", {
                        d: "M154.884 338.28L61 66.5267C127.24 11.573 365.027 -18.9812 417 54.1456L327.308 338.28C328.967 401.404 158.309 407.86 154.884 338.28Z",
                        fill: "url(#paint3_linear_541:133)",
                      }),
                    }),
                    ,
                    (0, d.jsxs)("defs", {
                      children: [
                        (0, d.jsxs)("filter", {
                          id: "filter0_f_541:133",
                          x: "171.957",
                          y: "579.502",
                          width: "14.2533",
                          height: "12.1446",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.745134",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter1_f_541:133",
                          x: "142.379",
                          y: "573.682",
                          width: "14.2677",
                          height: "12.1723",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.747188",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter2_f_541:133",
                          x: "75.8406",
                          y: "575.689",
                          width: "14.2922",
                          height: "12.1588",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.7477",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter3_f_541:133",
                          x: "24.3311",
                          y: "541.384",
                          width: "14.086",
                          height: "12.4127",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.7477",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter4_f_541:133",
                          x: "8.46098",
                          y: "502.474",
                          width: "14.2922",
                          height: "12.1588",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.7477",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter5_f_541:133",
                          x: "1.79348",
                          y: "458.666",
                          width: "14.2677",
                          height: "12.1723",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.747188",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter6_f_541:133",
                          x: "0.661351",
                          y: "438.353",
                          width: "14.2533",
                          height: "12.1446",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.745134",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter7_f_541:133",
                          x: "171.517",
                          y: "579.062",
                          width: "15.1327",
                          height: "13.024",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.96499",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter8_f_541:133",
                          x: "141.938",
                          y: "573.241",
                          width: "15.1496",
                          height: "13.0542",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.96765",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter9_f_541:133",
                          x: "75.3993",
                          y: "575.248",
                          width: "15.1747",
                          height: "13.0412",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.968313",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter10_f_541:133",
                          x: "23.8898",
                          y: "540.942",
                          width: "14.9684",
                          height: "13.2951",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.968313",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter11_f_541:133",
                          x: "8.01976",
                          y: "502.033",
                          width: "15.1747",
                          height: "13.0412",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.968313",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter12_f_541:133",
                          x: "1.35256",
                          y: "458.225",
                          width: "15.1496",
                          height: "13.0542",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.96765",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter13_f_541:133",
                          x: "0.221639",
                          y: "437.914",
                          width: "15.1327",
                          height: "13.024",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "0.96499",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter14_f_541:133",
                          x: "17.058",
                          y: "473.116",
                          width: "130.853",
                          height: "47.4272",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter15_f_541:133",
                          x: "8.48521",
                          y: "462.583",
                          width: "131.371",
                          height: "48.8061",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter16_f_541:133",
                          x: "6.66829",
                          y: "442.612",
                          width: "125.873",
                          height: "58.437",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter17_f_541:133",
                          x: "31.033",
                          y: "479.074",
                          width: "125.963",
                          height: "71.5512",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter18_f_541:133",
                          x: "112.739",
                          y: "496.79",
                          width: "68.025",
                          height: "90.9477",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter19_f_541:133",
                          x: "99.3647",
                          y: "490.508",
                          width: "75.2623",
                          height: "44.1411",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter20_f_541:133",
                          x: "97.016",
                          y: "525.151",
                          width: "12.1908",
                          height: "18.8442",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter21_f_541:133",
                          x: "97.2903",
                          y: "534.546",
                          width: "53.4638",
                          height: "47.1567",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter22_f_541:133",
                          x: "85.2502",
                          y: "484.627",
                          width: "80.3293",
                          height: "47.2456",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter23_f_541:133",
                          x: "78.1653",
                          y: "522.424",
                          width: "16.9428",
                          height: "59.0034",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "1.93566",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter24_f_541:133",
                          x: "49.793",
                          y: "317.414",
                          width: "374.618",
                          height: "226.204",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "5.38424",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter25_f_541:133",
                          x: "76.0189",
                          y: "328.13",
                          width: "325.945",
                          height: "194.115",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "3.5074",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter26_f_541:133",
                          x: "73.5202",
                          y: "238.051",
                          width: "330.943",
                          height: "200.458",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "4.90333",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter27_f_541:133",
                          x: "123.288",
                          y: "418.151",
                          width: "73.0472",
                          height: "67.3314",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "2.29965",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter28_f_541:133",
                          x: "324.995",
                          y: "405.239",
                          width: "60.5657",
                          height: "67.3069",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "2.09479",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter29_f_541:133",
                          x: "111.117",
                          y: "259.349",
                          width: "263.395",
                          height: "161.369",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "3.84724",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter30_f_541:133",
                          x: "129.869",
                          y: "263.491",
                          width: "222.454",
                          height: "149.579",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "12.5075",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter31_f_541:133",
                          x: "129.869",
                          y: "263.491",
                          width: "222.454",
                          height: "149.579",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "12.5075",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("filter", {
                          id: "filter32_f_541:133",
                          x: "50.021",
                          y: "0.0209608",
                          width: "377.958",
                          height: "399.031",
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                          children: [
                            (0, d.jsx)("feFlood", {
                              floodOpacity: "0",
                              result: "BackgroundImageFix",
                            }),
                            (0, d.jsx)("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "BackgroundImageFix",
                              result: "shape",
                            }),
                            (0, d.jsx)("feGaussianBlur", {
                              stdDeviation: "5.48952",
                              result: "effect1_foregroundBlur_541:133",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "paint0_linear_541:133",
                          x1: "66.5673",
                          y1: "395.166",
                          x2: "411.416",
                          y2: "395.166",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", { stopColor: "#092C54" }),
                            (0, d.jsx)("stop", {
                              offset: "1",
                              stopColor: "#6A1237",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "paint1_linear_541:133",
                          x1: "66.5673",
                          y1: "395.167",
                          x2: "411.416",
                          y2: "395.167",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", { stopColor: "#092C54" }),
                            (0, d.jsx)("stop", {
                              offset: "1",
                              stopColor: "#6A1237",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "paint2_linear_541:133",
                          x1: "66.5673",
                          y1: "238.732",
                          x2: "411.416",
                          y2: "437.831",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", { stopColor: "#1C75DB" }),
                            (0, d.jsx)("stop", {
                              offset: "1",
                              stopColor: "#EC297A",
                            }),
                          ],
                        }),
                        (0, d.jsxs)("linearGradient", {
                          id: "paint3_linear_541:133",
                          x1: "238.991",
                          y1: "338.28",
                          x2: "242.156",
                          y2: "12.4693",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, d.jsx)("stop", { stopColor: "#F9FAFC" }),
                            (0, d.jsx)("stop", {
                              offset: "0.540196",
                              stopColor: "#1C75DB",
                              stopOpacity: "0.294521",
                            }),
                            (0, d.jsx)("stop", {
                              offset: "1",
                              stopColor: "#22222F",
                              stopOpacity: "0",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        R = "Orion - Your Open-Source Personal Assistant",
        S = !0,
        T = function (a) {
          var b = a.cards,
            c = "animation-running",
            g = function (a) {
              a.forEach(function (a) {
                a.isIntersecting
                  ? a.target.classList.add(c)
                  : a.target.classList.remove(c);
              });
            };
          return (
            (0, e.useEffect)(function () {
              var a = new IntersectionObserver(g, {
                  root: null,
                  rootMargin: "0px",
                  threshold: [0, 1],
                }),
                b = document.querySelector("body"),
                c = document.querySelectorAll("[data-pausable-animation]");
              return (
                document.addEventListener("visibilitychange", function () {
                  document.hidden
                    ? null == b || b.classList.add("page-hidden")
                    : null == b || b.classList.remove("page-hidden");
                }),
                c.forEach(function (b) {
                  a.observe(b);
                }),
                function () {
                  c.forEach(function (b) {
                    a.unobserve(b);
                  });
                }
              );
            }, []),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsxs)(f.default, {
                  children: [
                    (0, d.jsx)("title", { children: R }),
                    (0, d.jsx)("meta", {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1",
                    }),
                    (0, d.jsx)("meta", { name: "og:title", content: R }),
                    (0, d.jsx)("meta", { name: "twitter:title", content: R }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  className: "".concat(h().pageContainer, " container"),
                  children: [
                    (0, d.jsxs)("section", {
                      children: [
                        (0, d.jsx)(k, {}),
                        (0, d.jsx)(r, {}),
                        (0, d.jsx)(v, {}),
                      ],
                    }),
                    (0, d.jsx)("section", { children: (0, d.jsx)(y, {}) }),
                    (0, d.jsx)("section", { children: (0, d.jsx)(D, {}) }),
                    (0, d.jsx)("section", { children: (0, d.jsx)(G, {}) }),
                    (0, d.jsx)("section", {
                      children: (0, d.jsx)(K, { cards: b }),
                    }),
                    (0, d.jsx)("section", { children: (0, d.jsx)(N, {}) }),
                    (0, d.jsx)("section", { children: (0, d.jsx)(Q, {}) }),
                  ],
                }),
              ],
            })
          );
        };
    },
    5925: function (a) {
      a.exports = {
        container: "Demo_container__BVK_k",
        ytPreview: "Demo_ytPreview__5XJKq",
        backbone: "Demo_backbone__Hxpvd",
      };
    },
    7390: function (a) {
      a.exports = {
        container: "Features_container__c9Va2",
        backbone: "Features_backbone__pkbdX",
        backboneEnd: "Features_backboneEnd__GTsBH",
        asteroid: "Features_asteroid__l_UbZ",
        earth: "Features_earth__DZEdE",
        horizContainer: "Features_horizContainer__xadTJ",
        automate: "Features_automate__jSSGp",
        imagination: "Features_imagination__qiTU6",
        ai: "Features_ai__97u04",
        animationContainer: "Features_animationContainer__NmhzR",
        openSourceAnimation: "Features_openSourceAnimation__LeUV2",
        privacyAnimation: "Features_privacyAnimation__COA2_",
        automateAnimation: "Features_automateAnimation__iqBp_",
        imaginationAnimation: "Features_imaginationAnimation__KZiGD",
        aiAnimation: "Features_aiAnimation__dNeCI",
        privacyRays: "Features_privacyRays__M1Qgg",
        blinkPrivacyRays: "Features_blinkPrivacyRays__hI13m",
        privacySatellite: "Features_privacySatellite__TyznZ",
        movePrivacySatellite: "Features_movePrivacySatellite__u_8WW",
        privacyShield: "Features_privacyShield__dNjZY",
        blinkPrivacyShield: "Features_blinkPrivacyShield__Z66ti",
        aiLogo: "Features_aiLogo__H5FHX",
        rotateAiLogo: "Features_rotateAiLogo__OWRk2",
        aiWires: "Features_aiWires__oKVaf",
        blinkAiWires: "Features_blinkAiWires__UMvjc",
        imaginationStars: "Features_imaginationStars__sLuB2",
        imaginationMoveItems: "Features_imaginationMoveItems__n4CFd",
        imaginationIdea: "Features_imaginationIdea__VIHAt",
        imaginationPackages: "Features_imaginationPackages__6Oi28",
        imaginationRocket: "Features_imaginationRocket__agNqB",
        imaginationThinking: "Features_imaginationThinking__bnKp5",
        imaginationAstronaut: "Features_imaginationAstronaut__V1Yae",
        imaginationMoveAstronaut: "Features_imaginationMoveAstronaut___WKa8",
        automateWires: "Features_automateWires__gxv0a",
        blinkAutomateWires: "Features_blinkAutomateWires__a2VQI",
        automateLogo: "Features_automateLogo__tDCYm",
        automateMoveLogo: "Features_automateMoveLogo__SagsY",
        automateRocket: "Features_automateRocket__2svJb",
        automateMoveRocket: "Features_automateMoveRocket__4_Nhj",
        automateLeft1stWave: "Features_automateLeft1stWave__SerpX",
        automateMoveLeft1stWave: "Features_automateMoveLeft1stWave__7GvSM",
        automateLeft2ndWave: "Features_automateLeft2ndWave__a0bp_",
        automateMoveLeft2ndWave: "Features_automateMoveLeft2ndWave__xa375",
        automateLeft3rdWave: "Features_automateLeft3rdWave__MBDJh",
        automateMoveLeft3rdWave: "Features_automateMoveLeft3rdWave__uwUPt",
        automateRight1stWave: "Features_automateRight1stWave__c0QMv",
        automateMoveRight1stWave: "Features_automateMoveRight1stWave__i_MaD",
        automateRight2ndWave: "Features_automateRight2ndWave__wF0_a",
        automateMoveRight2ndWave: "Features_automateMoveRight2ndWave__gQ0CS",
        automateRight3rdWave: "Features_automateRight3rdWave__f8B1U",
        automateMoveRight3rdWave: "Features_automateMoveRight3rdWave__V2dOZ",
        osText: "Features_osText__O_1pp",
        osText1to21: "Features_osText1to21__I0Dji",
        osMoveText1to2: "Features_osMoveText1to2__1Hsah",
        osText1to22: "Features_osText1to22__1Avzg",
        osText1to23: "Features_osText1to23__acaph",
        osText1to24: "Features_osText1to24__plDjl",
        osText1to25: "Features_osText1to25__ta50R",
        osText1to26: "Features_osText1to26__NegfP",
        osText2to31: "Features_osText2to31__pqRCR",
        osMoveText2to3: "Features_osMoveText2to3__YiCZY",
        osText2to32: "Features_osText2to32__dWd6W",
        osText2to33: "Features_osText2to33__ZnYWh",
        osText2to34: "Features_osText2to34___OIYP",
        osText2to35: "Features_osText2to35__4ER0J",
        osText2to36: "Features_osText2to36__AwL2r",
        osText3toTop1: "Features_osText3toTop1__W7glm",
        osMoveText3toTop: "Features_osMoveText3toTop__Qu1xo",
        osText3toTop2: "Features_osText3toTop2__PlIRT",
        osText3toTop3: "Features_osText3toTop3__D1ALq",
        osText3toTop4: "Features_osText3toTop4__i1A_v",
        osText3toTop5: "Features_osText3toTop5___L3Pw",
        osText3toTop6: "Features_osText3toTop6__9LYE3",
      };
    },
    1082: function (a) {
      a.exports = {
        container: "GetStarted_container__R6O0W",
        getStarted: "GetStarted_getStarted__ujVtX",
        terminal: "GetStarted_terminal__qfkL_",
        header: "GetStarted_header__cfwFo",
        innerHeader: "GetStarted_innerHeader__AM_Wv",
        actions: "GetStarted_actions__Grp_7",
        titleContainer: "GetStarted_titleContainer__ByoSf",
        body: "GetStarted_body__GChgt",
        chunk: "GetStarted_chunk__cEKa5",
        comment: "GetStarted_comment__LbBEm",
        line: "GetStarted_line__nWfXU",
        placeholder: "GetStarted_placeholder__cAemc",
        generator: "GetStarted_generator__ZJy8h",
        logo: "GetStarted_logo__W_XF_",
        rotateLogo: "GetStarted_rotateLogo__BV3dH",
        backbone: "GetStarted_backbone__4Yapn",
      };
    },
    8814: function (a) {
      a.exports = {
        container: "Hero_container__mzSxI",
        screenStrokeLogo: "Hero_screenStrokeLogo___KSmP",
        displayScreenStrokeLogo: "Hero_displayScreenStrokeLogo__0IMQy",
        staticPkg1: "Hero_staticPkg1__je37M",
        floatStaticPkg1: "Hero_floatStaticPkg1__AdXkm",
        staticPkg2: "Hero_staticPkg2__rrua7",
        floatStaticPkg2: "Hero_floatStaticPkg2__9N8gE",
        pkg1: "Hero_pkg1__4YXnw",
        movePkg1: "Hero_movePkg1__IPnzp",
        pkg2: "Hero_pkg2__osxiM",
        movePkg2: "Hero_movePkg2__O8hgC",
        pkg3: "Hero_pkg3__eo6nw",
        movePkg3: "Hero_movePkg3__buiKY",
        pkg4: "Hero_pkg4__OqJ5U",
        movePkg4: "Hero_movePkg4__YzG9w",
        pkg5: "Hero_pkg5__8x2Q6",
        movePkg5: "Hero_movePkg5__XGWF9",
        pkg6: "Hero_pkg6__V7cjZ",
        movePkg6: "Hero_movePkg6__0mBu7",
        screenMailIcon: "Hero_screenMailIcon__jSJ9V",
        moveEmailSkill: "Hero_moveEmailSkill__ePTij",
        screenMusicIcon: "Hero_screenMusicIcon__VwOSQ",
        moveMusicSkill: "Hero_moveMusicSkill__20ZpC",
        screenChatIcon: "Hero_screenChatIcon__4Zw0I",
        moveChatSkill: "Hero_moveChatSkill__G0dgS",
        screenVideoIcon: "Hero_screenVideoIcon__7Ro0N",
        moveVideoSkill: "Hero_moveVideoSkill__x9zx3",
        screenForecastIcon: "Hero_screenForecastIcon__GmcLD",
        moveForecastSkill: "Hero_moveForecastSkill__87G2V",
        screenCheckIcon: "Hero_screenCheckIcon__CzO_r",
        moveCheckSkill: "Hero_moveCheckSkill__3OaM1",
        turnedOff: "Hero_turnedOff__4accP",
        haloHidden: "Hero_haloHidden____24W",
        energyTurnedOff: "Hero_energyTurnedOff__di0K_",
        energyTurnedOffStrokeOnly: "Hero_energyTurnedOffStrokeOnly__kbnxQ",
        backbone: "Hero_backbone__yM3UP",
        hero: "Hero_hero__0NmXV",
        displayHero: "Hero_displayHero__eC1WU",
        halo: "Hero_halo__plyzO",
        blinkHalo: "Hero_blinkHalo__u9zEE",
        logo: "Hero_logo__LXIo7",
        rotateLogo: "Hero_rotateLogo__VAgLt",
        nodeJsLogo: "Hero_nodeJsLogo__udYZ3",
        floatNodeJsLogo: "Hero_floatNodeJsLogo__9zF8Q",
        pythonLogo: "Hero_pythonLogo__Z_m0F",
        floatPythonLogo: "Hero_floatPythonLogo__bnCXn",
        voiceWaves: "Hero_voiceWaves__lC4Jg",
        voiceWaveMove: "Hero_voiceWaveMove__A_req",
      };
    },
    6988: function (a) {
      a.exports = { container: "Introduction_container__jtsWL" };
    },
    502: function (a) {
      a.exports = {
        container: "Newsletter_container__eQnuw",
        inputContainer: "Newsletter_inputContainer__AzX_c",
        title: "Newsletter_title____hR9",
      };
    },
    4300: function (a) {
      a.exports = {
        container: "Roadmap_container__61ohK",
        footer: "Roadmap_footer__TjFfN",
        astronaut: "Roadmap_astronaut__nTNRZ",
        saturne: "Roadmap_saturne__ALSRn",
        roadmap: "Roadmap_roadmap__fUm4Z",
        cardsContainer: "Roadmap_cardsContainer__bxO7w",
        cardContainer: "Roadmap_cardContainer__qbbrO",
        cardInnerContainer: "Roadmap_cardInnerContainer__DlihX",
        typesContainer: "Roadmap_typesContainer__kiUMp",
        type: "Roadmap_type__RqeST",
        version: "Roadmap_version__ZXkA6",
        title: "Roadmap_title__WmPbc",
        backbone: "Roadmap_backbone__OBQI7",
        roadmapBg: "Roadmap_roadmapBg__mTdsW",
      };
    },
    570: function (a) {
      a.exports = {
        container: "Sponsor_container__gcRU0",
        astronaut: "Sponsor_astronaut__eyBX8",
        sponsor: "Sponsor_sponsor__aaRpz",
        right: "Sponsor_right__k4w_c",
        button: "Sponsor_button__TzJtj",
        buttonInnerContainer: "Sponsor_buttonInnerContainer__E4dwL",
        rightArrow: "Sponsor_rightArrow__zAYqj",
        leftArrow: "Sponsor_leftArrow__IE69X",
        backbone: "Sponsor_backbone__9nseC",
      };
    },
    5963: function (a) {
      a.exports = {
        container: "TtsStt_container__Q_Iz_",
        intro: "TtsStt_intro__3AcrY",
        ttsStt: "TtsStt_ttsStt__D9h_K",
        ttsSolutions: "TtsStt_ttsSolutions__6y2i_",
        sttSolutions: "TtsStt_sttSolutions__uZDtW",
        solution: "TtsStt_solution__VwLQ4",
        soon: "TtsStt_soon__wd5IL",
        backbone: "TtsStt_backbone__2_8_n",
      };
    },
    9222: function (a) {
      a.exports = { pageContainer: "HomePage_pageContainer__nj0rL" };
    },
    9008: function (a, b, c) {
      a.exports = c(5443);
    },
  },
  function (a) {
    a.O(0, [774, 888, 179], function () {
      return a((a.s = 5301));
    }),
      (_N_E = a.O());
  },
]);
