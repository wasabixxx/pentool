!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var r = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 0));
})([
  function (t, e, i) {
    "use strict";
    i(1), i(2), i(3);
    i(4);
    i(6), i(7), i(8), i(9), i(10), i(11), i(12), i(13), i(14), i(15);
  },
  function (t, e) {
    !(function () {
      function t(t) {
        var e = [],
          i = Math.pow(t + 16, 3) / 1560896;
        i = i > O ? i : t / G;
        for (var n = 0; 3 > n; ) {
          var r = n++,
            s = P[r][0],
            a = P[r][1];
          r = P[r][2];
          for (var o = 0; 2 > o; ) {
            var h = o++,
              l = (632260 * r - 126452 * a) * i + 126452 * h;
            e.push({ b: ((284517 * s - 94839 * r) * i) / l, a: ((838422 * r + 769860 * a + 731718 * s) * t * i - 769860 * h * t) / l });
          }
        }
        return e;
      }
      function e(e) {
        e = t(e);
        for (var i = 1 / 0, n = 0; n < e.length; ) {
          var r = e[n];
          ++n, (i = Math.min(i, Math.abs(r.a) / Math.sqrt(Math.pow(r.b, 2) + 1)));
        }
        return i;
      }
      function i(e, i) {
        (i = (i / 360) * Math.PI * 2), (e = t(e));
        for (var n = 1 / 0, r = 0; r < e.length; ) {
          var s = e[r];
          ++r, 0 <= (s = s.a / (Math.sin(i) - s.b * Math.cos(i))) && (n = Math.min(n, s));
        }
        return n;
      }
      function n(t, e) {
        for (var i = 0, n = 0, r = t.length; n < r; ) {
          var s = n++;
          i += t[s] * e[s];
        }
        return i;
      }
      function r(t) {
        return 0.0031308 >= t ? 12.92 * t : 1.055 * Math.pow(t, 0.4166666666666667) - 0.055;
      }
      function s(t) {
        return 0.04045 < t ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
      }
      function a(t) {
        return [r(n(P[0], t)), r(n(P[1], t)), r(n(P[2], t))];
      }
      function o(t) {
        return (t = [s(t[0]), s(t[1]), s(t[2])]), [n(T[0], t), n(T[1], t), n(T[2], t)];
      }
      function h(t) {
        var e = t[0],
          i = t[1];
        return (
          0 != (t = e + 15 * i + 3 * t[2]) ? ((e = (4 * e) / t), (t = (9 * i) / t)) : (t = e = NaN), 0 == (i = i <= O ? (i / C) * G : 116 * Math.pow(i / C, 0.3333333333333333) - 16) ? [0, 0, 0] : [i, 13 * i * (e - A), 13 * i * (t - V)]
        );
      }
      function l(t) {
        var e = t[0];
        if (0 == e) return [0, 0, 0];
        var i = t[1] / (13 * e) + A;
        return (t = t[2] / (13 * e) + V), [(i = 0 - (9 * (e = 8 >= e ? (C * e) / G : C * Math.pow((e + 16) / 116, 3)) * i) / ((i - 4) * t - i * t)), e, (9 * e - 15 * t * e - t * i) / (3 * t)];
      }
      function u(t) {
        var e = t[0],
          i = t[1],
          n = t[2];
        return 1e-8 > (t = Math.sqrt(i * i + n * n)) ? (i = 0) : 0 > (i = (180 * Math.atan2(n, i)) / Math.PI) && (i = 360 + i), [e, t, i];
      }
      function c(t) {
        var e = t[1],
          i = (t[2] / 360) * 2 * Math.PI;
        return [t[0], Math.cos(i) * e, Math.sin(i) * e];
      }
      function d(t) {
        var e = t[0],
          n = t[1];
        return 99.9999999 < (t = t[2]) ? [100, 0, e] : 1e-8 > t ? [0, 0, e] : [t, (n = (i(t, e) / 100) * n), e];
      }
      function _(t) {
        var e = t[0],
          n = t[1];
        return (t = t[2]), 99.9999999 < e ? [t, 0, 100] : 1e-8 > e ? [t, 0, 0] : [t, (n / i(e, t)) * 100, e];
      }
      function p(t) {
        var i = t[0],
          n = t[1];
        return 99.9999999 < (t = t[2]) ? [100, 0, i] : 1e-8 > t ? [0, 0, i] : [t, (n = (e(t) / 100) * n), i];
      }
      function f(t) {
        var i = t[0],
          n = t[1];
        return (t = t[2]), 99.9999999 < i ? [t, 0, 100] : 1e-8 > i ? [t, 0, 0] : [t, (n / e(i)) * 100, i];
      }
      function m(t) {
        for (var e = "#", i = 0; 3 > i; ) {
          var n = i++,
            r = (n = Math.round(255 * t[n])) % 16;
          e += E.charAt(((n - r) / 16) | 0) + E.charAt(r);
        }
        return e;
      }
      function g(t) {
        t = t.toLowerCase();
        for (var e = [], i = 0; 3 > i; ) {
          var n = i++;
          e.push((16 * E.indexOf(t.charAt(2 * n + 1)) + E.indexOf(t.charAt(2 * n + 2))) / 255);
        }
        return e;
      }
      function y(t) {
        return a(l(c(t)));
      }
      function v(t) {
        return u(h(o(t)));
      }
      function w(t) {
        return y(d(t));
      }
      function S(t) {
        return _(v(t));
      }
      function x(t) {
        return y(p(t));
      }
      function b(t) {
        return f(v(t));
      }
      var P = [
          [3.240969941904521, -1.537383177570093, -0.498610760293],
          [-0.96924363628087, 1.87596750150772, 0.041555057407175],
          [0.055630079696993, -0.20397695888897, 1.056971514242878],
        ],
        T = [
          [0.41239079926595, 0.35758433938387, 0.18048078840183],
          [0.21263900587151, 0.71516867876775, 0.072192315360733],
          [0.019330818715591, 0.11919477979462, 0.95053215224966],
        ],
        C = 1,
        A = 0.19783000664283,
        V = 0.46831999493879,
        G = 903.2962962,
        O = 0.0088564516,
        E = "0123456789abcdef";
      window.hsluv = {
        hsluvToRgb: w,
        rgbToHsluv: S,
        hpluvToRgb: x,
        rgbToHpluv: b,
        hsluvToHex: function (t) {
          return m(w(t));
        },
        hexToHsluv: function (t) {
          return S(g(t));
        },
        hpluvToHex: function (t) {
          return m(x(t));
        },
        hexToHpluv: function (t) {
          return b(g(t));
        },
        lchToHpluv: f,
        hpluvToLch: p,
        lchToHsluv: _,
        hsluvToLch: d,
        lchToLuv: c,
        luvToLch: u,
        xyzToLuv: h,
        luvToXyz: l,
        xyzToRgb: a,
        rgbToXyz: o,
        lchToRgb: y,
        rgbToLch: v,
      };
    })();
  },
  function (t, e) {
    (SVGPathElement.prototype.getPathData && SVGPathElement.prototype.setPathData) ||
      (function () {
        var t = { Z: "Z", M: "M", L: "L", C: "C", Q: "Q", A: "A", H: "H", V: "V", S: "S", T: "T", z: "Z", m: "m", l: "l", c: "c", q: "q", a: "a", h: "h", v: "v", s: "s", t: "t" },
          e = function (t) {
            (this._string = t), (this._currentIndex = 0), (this._endIndex = this._string.length), (this._prevCommand = null), this._skipOptionalSpaces();
          },
          i = -1 !== window.navigator.userAgent.indexOf("MSIE ");
        e.prototype = {
          parseSegment: function () {
            var e = this._string[this._currentIndex],
              i = t[e] ? t[e] : null;
            if (null === i) {
              if (null === this._prevCommand) return null;
              if (null === (i = ("+" === e || "-" === e || "." === e || (e >= "0" && e <= "9")) && "Z" !== this._prevCommand ? ("M" === this._prevCommand ? "L" : "m" === this._prevCommand ? "l" : this._prevCommand) : null)) return null;
            } else this._currentIndex += 1;
            this._prevCommand = i;
            var n = null,
              r = i.toUpperCase();
            return (
              "H" === r || "V" === r
                ? (n = [this._parseNumber()])
                : "M" === r || "L" === r || "T" === r
                ? (n = [this._parseNumber(), this._parseNumber()])
                : "S" === r || "Q" === r
                ? (n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()])
                : "C" === r
                ? (n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseNumber()])
                : "A" === r
                ? (n = [this._parseNumber(), this._parseNumber(), this._parseNumber(), this._parseArcFlag(), this._parseArcFlag(), this._parseNumber(), this._parseNumber()])
                : "Z" === r && (this._skipOptionalSpaces(), (n = [])),
              null === n || n.indexOf(null) >= 0 ? null : { type: i, values: n }
            );
          },
          hasMoreData: function () {
            return this._currentIndex < this._endIndex;
          },
          peekSegmentType: function () {
            var e = this._string[this._currentIndex];
            return t[e] ? t[e] : null;
          },
          initialCommandIsMoveTo: function () {
            if (!this.hasMoreData()) return !0;
            var t = this.peekSegmentType();
            return "M" === t || "m" === t;
          },
          _isCurrentSpace: function () {
            var t = this._string[this._currentIndex];
            return t <= " " && (" " === t || "\n" === t || "\t" === t || "\r" === t || "\f" === t);
          },
          _skipOptionalSpaces: function () {
            for (; this._currentIndex < this._endIndex && this._isCurrentSpace(); ) this._currentIndex += 1;
            return this._currentIndex < this._endIndex;
          },
          _skipOptionalSpacesOrDelimiter: function () {
            return (
              !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," !== this._string[this._currentIndex]) &&
              (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," === this._string[this._currentIndex] && ((this._currentIndex += 1), this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
            );
          },
          _parseNumber: function () {
            var t = 0,
              e = 0,
              i = 1,
              n = 0,
              r = 1,
              s = 1,
              a = this._currentIndex;
            if (
              (this._skipOptionalSpaces(),
              this._currentIndex < this._endIndex && "+" === this._string[this._currentIndex]
                ? (this._currentIndex += 1)
                : this._currentIndex < this._endIndex && "-" === this._string[this._currentIndex] && ((this._currentIndex += 1), (r = -1)),
              this._currentIndex === this._endIndex || ((this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9") && "." !== this._string[this._currentIndex]))
            )
              return null;
            for (var o = this._currentIndex; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9"; ) this._currentIndex += 1;
            if (this._currentIndex !== o) for (var h = this._currentIndex - 1, l = 1; h >= o; ) (e += l * (this._string[h] - "0")), (h -= 1), (l *= 10);
            if (this._currentIndex < this._endIndex && "." === this._string[this._currentIndex]) {
              if (((this._currentIndex += 1), this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9")) return null;
              for (; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9"; )
                (i *= 10), (n += (this._string.charAt(this._currentIndex) - "0") / i), (this._currentIndex += 1);
            }
            if (
              this._currentIndex !== a &&
              this._currentIndex + 1 < this._endIndex &&
              ("e" === this._string[this._currentIndex] || "E" === this._string[this._currentIndex]) &&
              "x" !== this._string[this._currentIndex + 1] &&
              "m" !== this._string[this._currentIndex + 1]
            ) {
              if (
                ((this._currentIndex += 1),
                "+" === this._string[this._currentIndex] ? (this._currentIndex += 1) : "-" === this._string[this._currentIndex] && ((this._currentIndex += 1), (s = -1)),
                this._currentIndex >= this._endIndex || this._string[this._currentIndex] < "0" || this._string[this._currentIndex] > "9")
              )
                return null;
              for (; this._currentIndex < this._endIndex && this._string[this._currentIndex] >= "0" && this._string[this._currentIndex] <= "9"; ) (t *= 10), (t += this._string[this._currentIndex] - "0"), (this._currentIndex += 1);
            }
            var u = e + n;
            return (u *= r), t && (u *= Math.pow(10, s * t)), a === this._currentIndex ? null : (this._skipOptionalSpacesOrDelimiter(), u);
          },
          _parseArcFlag: function () {
            if (this._currentIndex >= this._endIndex) return null;
            var t = null,
              e = this._string[this._currentIndex];
            if (((this._currentIndex += 1), "0" === e)) t = 0;
            else {
              if ("1" !== e) return null;
              t = 1;
            }
            return this._skipOptionalSpacesOrDelimiter(), t;
          },
        };
        var n = function (t) {
            if (!t || 0 === t.length) return [];
            var i = new e(t),
              n = [];
            if (i.initialCommandIsMoveTo())
              for (; i.hasMoreData(); ) {
                var r = i.parseSegment();
                if (null === r) break;
                n.push(r);
              }
            return n;
          },
          r = SVGPathElement.prototype.setAttribute,
          s = SVGPathElement.prototype.removeAttribute,
          a = window.Symbol ? Symbol() : "__cachedPathData",
          o = window.Symbol ? Symbol() : "__cachedNormalizedPathData",
          h = function (t) {
            return t.map(function (t) {
              return { type: t.type, values: Array.prototype.slice.call(t.values) };
            });
          },
          l = function (t) {
            var e = [],
              i = null,
              n = null,
              r = null,
              s = null,
              a = null,
              o = null,
              h = null;
            return (
              t.forEach(function (t) {
                if ("M" === t.type) {
                  var l = t.values[0],
                    u = t.values[1];
                  e.push({ type: "M", values: [l, u] }), (o = l), (h = u), (s = l), (a = u);
                } else if ("C" === t.type) {
                  var c = t.values[0],
                    d = t.values[1],
                    _ = t.values[2],
                    p = t.values[3];
                  (l = t.values[4]), (u = t.values[5]);
                  e.push({ type: "C", values: [c, d, _, p, l, u] }), (n = _), (r = p), (s = l), (a = u);
                } else if ("L" === t.type) {
                  (l = t.values[0]), (u = t.values[1]);
                  e.push({ type: "L", values: [l, u] }), (s = l), (a = u);
                } else if ("H" === t.type) {
                  l = t.values[0];
                  e.push({ type: "L", values: [l, a] }), (s = l);
                } else if ("V" === t.type) {
                  u = t.values[0];
                  e.push({ type: "L", values: [s, u] }), (a = u);
                } else if ("S" === t.type) {
                  (_ = t.values[0]), (p = t.values[1]), (l = t.values[2]), (u = t.values[3]);
                  "C" === i || "S" === i ? ((f = s + (s - n)), (m = a + (a - r))) : ((f = s), (m = a)), e.push({ type: "C", values: [f, m, _, p, l, u] }), (n = _), (r = p), (s = l), (a = u);
                } else if ("T" === t.type) {
                  (l = t.values[0]), (u = t.values[1]);
                  "Q" === i || "T" === i ? ((c = s + (s - n)), (d = a + (a - r))) : ((c = s), (d = a));
                  var f = s + (2 * (c - s)) / 3,
                    m = a + (2 * (d - a)) / 3,
                    g = l + (2 * (c - l)) / 3,
                    y = u + (2 * (d - u)) / 3;
                  e.push({ type: "C", values: [f, m, g, y, l, u] }), (n = c), (r = d), (s = l), (a = u);
                } else if ("Q" === t.type) {
                  (c = t.values[0]), (d = t.values[1]), (l = t.values[2]), (u = t.values[3]), (f = s + (2 * (c - s)) / 3), (m = a + (2 * (d - a)) / 3), (g = l + (2 * (c - l)) / 3), (y = u + (2 * (d - u)) / 3);
                  e.push({ type: "C", values: [f, m, g, y, l, u] }), (n = c), (r = d), (s = l), (a = u);
                } else if ("A" === t.type) {
                  var v = Math.abs(t.values[0]),
                    w = Math.abs(t.values[1]),
                    S = t.values[2],
                    x = t.values[3],
                    b = t.values[4];
                  (l = t.values[5]), (u = t.values[6]);
                  if (0 === v || 0 === w) e.push({ type: "C", values: [s, a, l, u, l, u] }), (s = l), (a = u);
                  else if (s !== l || a !== u)
                    (function t(e, i, n, r, s, a, o, h, l, u) {
                      var c,
                        d,
                        _,
                        p,
                        f,
                        m = function (t, e, i) {
                          return { x: t * Math.cos(i) - e * Math.sin(i), y: t * Math.sin(i) + e * Math.cos(i) };
                        },
                        g = ((c = o), (Math.PI * c) / 180),
                        y = [];
                      if (u) (d = u[0]), (_ = u[1]), (p = u[2]), (f = u[3]);
                      else {
                        var v = m(e, i, -g);
                        (e = v.x), (i = v.y);
                        var w = m(n, r, -g),
                          S = (e - (n = w.x)) / 2,
                          x = (i - (r = w.y)) / 2,
                          b = (S * S) / (s * s) + (x * x) / (a * a);
                        b > 1 && ((s *= b = Math.sqrt(b)), (a *= b));
                        var P = s * s,
                          T = a * a,
                          C = P * T - P * x * x - T * S * S,
                          A = P * x * x + T * S * S,
                          V = (h === l ? -1 : 1) * Math.sqrt(Math.abs(C / A));
                        (p = (V * s * x) / a + (e + n) / 2),
                          (f = (V * -a * S) / s + (i + r) / 2),
                          (d = Math.asin(parseFloat(((i - f) / a).toFixed(9)))),
                          (_ = Math.asin(parseFloat(((r - f) / a).toFixed(9)))),
                          e < p && (d = Math.PI - d),
                          n < p && (_ = Math.PI - _),
                          d < 0 && (d = 2 * Math.PI + d),
                          _ < 0 && (_ = 2 * Math.PI + _),
                          l && d > _ && (d -= 2 * Math.PI),
                          !l && _ > d && (_ -= 2 * Math.PI);
                      }
                      var G = _ - d;
                      if (Math.abs(G) > (120 * Math.PI) / 180) {
                        var O = _,
                          E = n,
                          R = r;
                        (_ = l && _ > d ? d + ((120 * Math.PI) / 180) * 1 : d + ((120 * Math.PI) / 180) * -1), (y = t((n = p + s * Math.cos(_)), (r = f + a * Math.sin(_)), E, R, s, a, o, 0, l, [_, O, p, f]));
                      }
                      G = _ - d;
                      var L = Math.cos(d),
                        I = Math.sin(d),
                        M = Math.cos(_),
                        k = Math.sin(_),
                        N = Math.tan(G / 4),
                        D = (4 / 3) * s * N,
                        H = (4 / 3) * a * N,
                        B = [e, i],
                        z = [e + D * I, i - H * L],
                        F = [n + D * k, r - H * M],
                        j = [n, r];
                      if (((z[0] = 2 * B[0] - z[0]), (z[1] = 2 * B[1] - z[1]), u)) return [z, F, j].concat(y);
                      y = [z, F, j].concat(y);
                      for (var U = [], Q = 0; Q < y.length; Q += 3) {
                        (s = m(y[Q][0], y[Q][1], g)), (a = m(y[Q + 1][0], y[Q + 1][1], g));
                        var X = m(y[Q + 2][0], y[Q + 2][1], g);
                        U.push([s.x, s.y, a.x, a.y, X.x, X.y]);
                      }
                      return U;
                    })(s, a, l, u, v, w, S, x, b).forEach(function (t) {
                      e.push({ type: "C", values: t });
                    }),
                      (s = l),
                      (a = u);
                } else "Z" === t.type && (e.push(t), (s = o), (a = h));
                i = t.type;
              }),
              e
            );
          };
        (SVGPathElement.prototype.setAttribute = function (t, e) {
          "d" === t && ((this[a] = null), (this[o] = null)), r.call(this, t, e);
        }),
          (SVGPathElement.prototype.removeAttribute = function (t, e) {
            "d" === t && ((this[a] = null), (this[o] = null)), s.call(this, t);
          }),
          (SVGPathElement.prototype.getPathData = function (t) {
            if (t && t.normalize) {
              if (this[o]) return h(this[o]);
              this[a] ? (i = h(this[a])) : ((i = n(this.getAttribute("d") || "")), (this[a] = h(i)));
              var e = l(
                (function (t) {
                  var e = [],
                    i = null,
                    n = null,
                    r = null,
                    s = null;
                  return (
                    t.forEach(function (t) {
                      var a = t.type;
                      if ("M" === a) {
                        var o = t.values[0],
                          h = t.values[1];
                        e.push({ type: "M", values: [o, h] }), (r = o), (s = h), (i = o), (n = h);
                      } else if ("m" === a) (o = i + t.values[0]), (h = n + t.values[1]), e.push({ type: "M", values: [o, h] }), (r = o), (s = h), (i = o), (n = h);
                      else if ("L" === a) (o = t.values[0]), (h = t.values[1]), e.push({ type: "L", values: [o, h] }), (i = o), (n = h);
                      else if ("l" === a) (o = i + t.values[0]), (h = n + t.values[1]), e.push({ type: "L", values: [o, h] }), (i = o), (n = h);
                      else if ("C" === a) {
                        var l = t.values[0],
                          u = t.values[1],
                          c = t.values[2],
                          d = t.values[3];
                        (o = t.values[4]), (h = t.values[5]), e.push({ type: "C", values: [l, u, c, d, o, h] }), (i = o), (n = h);
                      } else
                        "c" === a
                          ? ((l = i + t.values[0]), (u = n + t.values[1]), (c = i + t.values[2]), (d = n + t.values[3]), (o = i + t.values[4]), (h = n + t.values[5]), e.push({ type: "C", values: [l, u, c, d, o, h] }), (i = o), (n = h))
                          : "Q" === a
                          ? ((l = t.values[0]), (u = t.values[1]), (o = t.values[2]), (h = t.values[3]), e.push({ type: "Q", values: [l, u, o, h] }), (i = o), (n = h))
                          : "q" === a
                          ? ((l = i + t.values[0]), (u = n + t.values[1]), (o = i + t.values[2]), (h = n + t.values[3]), e.push({ type: "Q", values: [l, u, o, h] }), (i = o), (n = h))
                          : "A" === a
                          ? ((o = t.values[5]), (h = t.values[6]), e.push({ type: "A", values: [t.values[0], t.values[1], t.values[2], t.values[3], t.values[4], o, h] }), (i = o), (n = h))
                          : "a" === a
                          ? ((o = i + t.values[5]), (h = n + t.values[6]), e.push({ type: "A", values: [t.values[0], t.values[1], t.values[2], t.values[3], t.values[4], o, h] }), (i = o), (n = h))
                          : "H" === a
                          ? ((o = t.values[0]), e.push({ type: "H", values: [o] }), (i = o))
                          : "h" === a
                          ? ((o = i + t.values[0]), e.push({ type: "H", values: [o] }), (i = o))
                          : "V" === a
                          ? ((h = t.values[0]), e.push({ type: "V", values: [h] }), (n = h))
                          : "v" === a
                          ? ((h = n + t.values[0]), e.push({ type: "V", values: [h] }), (n = h))
                          : "S" === a
                          ? ((c = t.values[0]), (d = t.values[1]), (o = t.values[2]), (h = t.values[3]), e.push({ type: "S", values: [c, d, o, h] }), (i = o), (n = h))
                          : "s" === a
                          ? ((c = i + t.values[0]), (d = n + t.values[1]), (o = i + t.values[2]), (h = n + t.values[3]), e.push({ type: "S", values: [c, d, o, h] }), (i = o), (n = h))
                          : "T" === a
                          ? ((o = t.values[0]), (h = t.values[1]), e.push({ type: "T", values: [o, h] }), (i = o), (n = h))
                          : "t" === a
                          ? ((o = i + t.values[0]), (h = n + t.values[1]), e.push({ type: "T", values: [o, h] }), (i = o), (n = h))
                          : ("Z" !== a && "z" !== a) || (e.push({ type: "Z", values: [] }), (i = r), (n = s));
                    }),
                    e
                  );
                })(i)
              );
              return (this[o] = h(e)), e;
            }
            if (this[a]) return h(this[a]);
            var i = n(this.getAttribute("d") || "");
            return (this[a] = h(i)), i;
          }),
          (SVGPathElement.prototype.setPathData = function (t) {
            if (0 === t.length) i ? this.setAttribute("d", "") : this.removeAttribute("d");
            else {
              for (var e = "", n = 0, r = t.length; n < r; n += 1) {
                var s = t[n];
                n > 0 && (e += " "), (e += s.type), s.values && s.values.length > 0 && (e += " " + s.values.join(" "));
              }
              this.setAttribute("d", e);
            }
          }),
          (SVGRectElement.prototype.getPathData = function (t) {
            var e = this.x.baseVal.value,
              i = this.y.baseVal.value,
              n = this.width.baseVal.value,
              r = this.height.baseVal.value,
              s = this.hasAttribute("rx") ? this.rx.baseVal.value : this.ry.baseVal.value,
              a = this.hasAttribute("ry") ? this.ry.baseVal.value : this.rx.baseVal.value;
            s > n / 2 && (s = n / 2), a > r / 2 && (a = r / 2);
            var o = [
              { type: "M", values: [e + s, i] },
              { type: "H", values: [e + n - s] },
              { type: "A", values: [s, a, 0, 0, 1, e + n, i + a] },
              { type: "V", values: [i + r - a] },
              { type: "A", values: [s, a, 0, 0, 1, e + n - s, i + r] },
              { type: "H", values: [e + s] },
              { type: "A", values: [s, a, 0, 0, 1, e, i + r - a] },
              { type: "V", values: [i + a] },
              { type: "A", values: [s, a, 0, 0, 1, e + s, i] },
              { type: "Z", values: [] },
            ];
            return (
              (o = o.filter(function (t) {
                return "A" !== t.type || (0 !== t.values[0] && 0 !== t.values[1]);
              })),
              t && !0 === t.normalize && (o = l(o)),
              o
            );
          }),
          (SVGCircleElement.prototype.getPathData = function (t) {
            var e = this.cx.baseVal.value,
              i = this.cy.baseVal.value,
              n = this.r.baseVal.value,
              r = [
                { type: "M", values: [e + n, i] },
                { type: "A", values: [n, n, 0, 0, 1, e, i + n] },
                { type: "A", values: [n, n, 0, 0, 1, e - n, i] },
                { type: "A", values: [n, n, 0, 0, 1, e, i - n] },
                { type: "A", values: [n, n, 0, 0, 1, e + n, i] },
                { type: "Z", values: [] },
              ];
            return t && !0 === t.normalize && (r = l(r)), r;
          }),
          (SVGEllipseElement.prototype.getPathData = function (t) {
            var e = this.cx.baseVal.value,
              i = this.cy.baseVal.value,
              n = this.rx.baseVal.value,
              r = this.ry.baseVal.value,
              s = [
                { type: "M", values: [e + n, i] },
                { type: "A", values: [n, r, 0, 0, 1, e, i + r] },
                { type: "A", values: [n, r, 0, 0, 1, e - n, i] },
                { type: "A", values: [n, r, 0, 0, 1, e, i - r] },
                { type: "A", values: [n, r, 0, 0, 1, e + n, i] },
                { type: "Z", values: [] },
              ];
            return t && !0 === t.normalize && (s = l(s)), s;
          }),
          (SVGLineElement.prototype.getPathData = function () {
            return [
              { type: "M", values: [this.x1.baseVal.value, this.y1.baseVal.value] },
              { type: "L", values: [this.x2.baseVal.value, this.y2.baseVal.value] },
            ];
          }),
          (SVGPolylineElement.prototype.getPathData = function () {
            for (var t = [], e = 0; e < this.points.numberOfItems; e += 1) {
              var i = this.points.getItem(e);
              t.push({ type: 0 === e ? "M" : "L", values: [i.x, i.y] });
            }
            return t;
          }),
          (SVGPolygonElement.prototype.getPathData = function () {
            for (var t = [], e = 0; e < this.points.numberOfItems; e += 1) {
              var i = this.points.getItem(e);
              t.push({ type: 0 === e ? "M" : "L", values: [i.x, i.y] });
            }
            return t.push({ type: "Z", values: [] }), t;
          });
      })();
  },
  function (t, e) {
    var i;
    ((i = function (t, e) {
      var i;
      return (e = e || { bubbles: !1, cancelable: !1, detail: void 0 }), (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
    }).prototype = window.Event.prototype),
      (window.CustomEvent = i);
  },
  function (t, e, i) {
    (function (i) {
      var n,
        r = void 0 !== t && t.exports && void 0 !== i ? i : this || window;
      (r._gsQueue || (r._gsQueue = [])).push(function () {
        "use strict";
        var t, e, i, n, s, a, o, h, l, u, c, d, _, p;
        r._gsDefine(
          "TweenMax",
          ["core.Animation", "core.SimpleTimeline", "TweenLite"],
          function (t, e, i) {
            var n = function (t) {
                var e,
                  i = [],
                  n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i;
              },
              r = function (t, e, i) {
                var n,
                  r,
                  s = t.cycle;
                for (n in s) (r = s[n]), (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
                delete t.cycle;
              },
              s = function (t, e, n) {
                i.call(this, t, e, n),
                  (this._cycle = 0),
                  (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                  (this._repeat = this.vars.repeat || 0),
                  (this._repeatDelay = this.vars.repeatDelay || 0),
                  this._repeat && this._uncache(!0),
                  (this.render = s.prototype.render);
              },
              a = i._internals,
              o = a.isSelector,
              h = a.isArray,
              l = (s.prototype = i.to({}, 0.1, {})),
              u = [];
            (s.version = "1.20.3"),
              (l.constructor = s),
              (l.kill()._gc = !1),
              (s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf),
              (s.getTweensOf = i.getTweensOf),
              (s.lagSmoothing = i.lagSmoothing),
              (s.ticker = i.ticker),
              (s.render = i.render),
              (l.invalidate = function () {
                return (
                  (this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
                  (this._repeat = this.vars.repeat || 0),
                  (this._repeatDelay = this.vars.repeatDelay || 0),
                  (this._yoyoEase = null),
                  this._uncache(!0),
                  i.prototype.invalidate.call(this)
                );
              }),
              (l.updateTo = function (t, e) {
                var n,
                  r = this.ratio,
                  s = this.vars.immediateRender || t.immediateRender;
                for (n in (e && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t))
                  this.vars[n] = t[n];
                if (this._initted || s)
                  if (e) (this._initted = !1), s && this.render(0, !0, !0);
                  else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                    var a = this._totalTime;
                    this.render(0, !0, !1), (this._initted = !1), this.render(a, !0, !1);
                  } else if (((this._initted = !1), this._init(), this._time > 0 || s)) for (var o, h = 1 / (1 - r), l = this._firstPT; l; ) (o = l.s + l.c), (l.c *= h), (l.s = o - l.c), (l = l._next);
                return this;
              }),
              (l.render = function (t, e, n) {
                this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                var r,
                  s,
                  o,
                  h,
                  l,
                  u,
                  c,
                  d,
                  _,
                  p = this._dirty ? this.totalDuration() : this._totalDuration,
                  f = this._time,
                  m = this._totalTime,
                  g = this._cycle,
                  y = this._duration,
                  v = this._rawPrevTime;
                if (
                  (t >= p - 1e-7 && t >= 0
                    ? ((this._totalTime = p),
                      (this._cycle = this._repeat),
                      this._yoyo && 0 != (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = y), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                      this._reversed || ((r = !0), (s = "onComplete"), (n = n || this._timeline.autoRemoveChildren)),
                      0 === y &&
                        (this._initted || !this.vars.lazy || n) &&
                        (this._startTime === this._timeline._duration && (t = 0),
                        (v < 0 || (t <= 0 && t >= -1e-7) || (1e-10 === v && "isPause" !== this.data)) && v !== t && ((n = !0), v > 1e-10 && (s = "onReverseComplete")),
                        (this._rawPrevTime = d = !e || t || v === t ? t : 1e-10)))
                    : t < 1e-7
                    ? ((this._totalTime = this._time = this._cycle = 0),
                      (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                      (0 !== m || (0 === y && v > 0)) && ((s = "onReverseComplete"), (r = this._reversed)),
                      t < 0 && ((this._active = !1), 0 === y && (this._initted || !this.vars.lazy || n) && (v >= 0 && (n = !0), (this._rawPrevTime = d = !e || t || v === t ? t : 1e-10))),
                      this._initted || (n = !0))
                    : ((this._totalTime = this._time = t),
                      0 !== this._repeat &&
                        ((h = y + this._repeatDelay),
                        (this._cycle = (this._totalTime / h) >> 0),
                        0 !== this._cycle && this._cycle === this._totalTime / h && m <= t && this._cycle--,
                        (this._time = this._totalTime - this._cycle * h),
                        this._yoyo &&
                          0 != (1 & this._cycle) &&
                          ((this._time = y - this._time),
                          (_ = this._yoyoEase || this.vars.yoyoEase) &&
                            (this._yoyoEase ||
                              (!0 !== _ || this._initted
                                ? (this._yoyoEase = _ = !0 === _ ? this._ease : _ instanceof Ease ? _ : Ease.map[_])
                                : ((_ = this.vars.ease), (this._yoyoEase = _ = _ ? (_ instanceof Ease ? _ : "function" == typeof _ ? new Ease(_, this.vars.easeParams) : Ease.map[_] || i.defaultEase) : i.defaultEase))),
                            (this.ratio = _ ? 1 - _.getRatio((y - this._time) / y) : 0))),
                        this._time > y ? (this._time = y) : this._time < 0 && (this._time = 0)),
                      this._easeType && !_
                        ? ((l = this._time / y),
                          (u = this._easeType),
                          (c = this._easePower),
                          (1 === u || (3 === u && l >= 0.5)) && (l = 1 - l),
                          3 === u && (l *= 2),
                          1 === c ? (l *= l) : 2 === c ? (l *= l * l) : 3 === c ? (l *= l * l * l) : 4 === c && (l *= l * l * l * l),
                          1 === u ? (this.ratio = 1 - l) : 2 === u ? (this.ratio = l) : this._time / y < 0.5 ? (this.ratio = l / 2) : (this.ratio = 1 - l / 2))
                        : _ || (this.ratio = this._ease.getRatio(this._time / y))),
                  f !== this._time || n || g !== this._cycle)
                ) {
                  if (!this._initted) {
                    if ((this._init(), !this._initted || this._gc)) return;
                    if (!n && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                      return (this._time = f), (this._totalTime = m), (this._rawPrevTime = v), (this._cycle = g), a.lazyTweens.push(this), void (this._lazy = [t, e]);
                    !this._time || r || _ ? r && this._ease._calcEnd && !_ && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : (this.ratio = this._ease.getRatio(this._time / y));
                  }
                  for (
                    !1 !== this._lazy && (this._lazy = !1),
                      this._active || (!this._paused && this._time !== f && t >= 0 && (this._active = !0)),
                      0 === m &&
                        (2 === this._initted && t > 0 && this._init(),
                        this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")),
                        this.vars.onStart && ((0 === this._totalTime && 0 !== y) || e || this._callback("onStart"))),
                      o = this._firstPT;
                    o;

                  )
                    o.f ? o.t[o.p](o.c * this.ratio + o.s) : (o.t[o.p] = o.c * this.ratio + o.s), (o = o._next);
                  this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || ((this._totalTime !== m || s) && this._callback("onUpdate"))),
                    this._cycle !== g && (e || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                    s &&
                      ((this._gc && !n) ||
                        (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n),
                        r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                        !e && this.vars[s] && this._callback(s),
                        0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== d && (this._rawPrevTime = 0)));
                } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
              }),
              (s.to = function (t, e, i) {
                return new s(t, e, i);
              }),
              (s.from = function (t, e, i) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new s(t, e, i);
              }),
              (s.fromTo = function (t, e, i, n) {
                return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new s(t, e, n);
              }),
              (s.staggerTo = s.allTo = function (t, e, a, l, c, d, _) {
                l = l || 0;
                var p,
                  f,
                  m,
                  g,
                  y = 0,
                  v = [],
                  w = function () {
                    a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), c.apply(_ || a.callbackScope || this, d || u);
                  },
                  S = a.cycle,
                  x = a.startAt && a.startAt.cycle;
                for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t))), t = t || [], l < 0 && ((t = n(t)).reverse(), (l *= -1)), p = t.length - 1, m = 0; m <= p; m++) {
                  for (g in ((f = {}), a)) f[g] = a[g];
                  if ((S && (r(f, t, m), null != f.duration && ((e = f.duration), delete f.duration)), x)) {
                    for (g in ((x = f.startAt = {}), a.startAt)) x[g] = a.startAt[g];
                    r(f.startAt, t, m);
                  }
                  (f.delay = y + (f.delay || 0)), m === p && c && (f.onComplete = w), (v[m] = new s(t[m], e, f)), (y += l);
                }
                return v;
              }),
              (s.staggerFrom = s.allFrom = function (t, e, i, n, r, a, o) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), s.staggerTo(t, e, i, n, r, a, o);
              }),
              (s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, a, o, h) {
                return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), s.staggerTo(t, e, n, r, a, o, h);
              }),
              (s.delayedCall = function (t, e, i, n, r) {
                return new s(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0 });
              }),
              (s.set = function (t, e) {
                return new s(t, 0, e);
              }),
              (s.isTweening = function (t) {
                return i.getTweensOf(t, !0).length > 0;
              });
            var c = function (t, e) {
                for (var n = [], r = 0, s = t._first; s; ) s instanceof i ? (n[r++] = s) : (e && (n[r++] = s), (r = (n = n.concat(c(s, e))).length)), (s = s._next);
                return n;
              },
              d = (s.getAllTweens = function (e) {
                return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e));
              });
            (s.killAll = function (t, i, n, r) {
              null == i && (i = !0), null == n && (n = !0);
              var s,
                a,
                o,
                h = d(0 != r),
                l = h.length,
                u = i && n && r;
              for (o = 0; o < l; o++) (a = h[o]), (u || a instanceof e || ((s = a.target === a.vars.onComplete) && n) || (i && !s)) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
            }),
              (s.killChildTweensOf = function (t, e) {
                if (null != t) {
                  var r,
                    l,
                    u,
                    c,
                    d,
                    _ = a.tweenLookup;
                  if (("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t)), h(t))) for (c = t.length; --c > -1; ) s.killChildTweensOf(t[c], e);
                  else {
                    for (u in ((r = []), _)) for (l = _[u].target.parentNode; l; ) l === t && (r = r.concat(_[u].tweens)), (l = l.parentNode);
                    for (d = r.length, c = 0; c < d; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1);
                  }
                }
              });
            var _ = function (t, i, n, r) {
              (i = !1 !== i), (n = !1 !== n);
              for (var s, a, o = d((r = !1 !== r)), h = i && n && r, l = o.length; --l > -1; ) (a = o[l]), (h || a instanceof e || ((s = a.target === a.vars.onComplete) && n) || (i && !s)) && a.paused(t);
            };
            return (
              (s.pauseAll = function (t, e, i) {
                _(!0, t, e, i);
              }),
              (s.resumeAll = function (t, e, i) {
                _(!1, t, e, i);
              }),
              (s.globalTimeScale = function (e) {
                var n = t._rootTimeline,
                  r = i.ticker.time;
                return arguments.length
                  ? ((e = e || 1e-10),
                    (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
                    (n = t._rootFramesTimeline),
                    (r = i.ticker.frame),
                    (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
                    (n._timeScale = t._rootTimeline._timeScale = e),
                    e)
                  : n._timeScale;
              }),
              (l.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
              }),
              (l.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
              }),
              (l.time = function (t, e) {
                return arguments.length
                  ? (this._dirty && this.totalDuration(),
                    t > this._duration && (t = this._duration),
                    this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                    this.totalTime(t, e))
                  : this._time;
              }),
              (l.duration = function (e) {
                return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
              }),
              (l.totalDuration = function (t) {
                return arguments.length
                  ? -1 === this._repeat
                    ? this
                    : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
                  : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
              }),
              (l.repeat = function (t) {
                return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
              }),
              (l.repeatDelay = function (t) {
                return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
              }),
              (l.yoyo = function (t) {
                return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              s
            );
          },
          !0
        ),
          r._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (t, e, i) {
              var n = function (t) {
                  e.call(this, t),
                    (this._labels = {}),
                    (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                    (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                    (this._sortChildren = !0),
                    (this._onUpdate = this.vars.onUpdate);
                  var i,
                    n,
                    r = this.vars;
                  for (n in r) (i = r[n]), h(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                  h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
                },
                s = i._internals,
                a = (n._internals = {}),
                o = s.isSelector,
                h = s.isArray,
                l = s.lazyTweens,
                u = s.lazyRender,
                c = r._gsDefine.globals,
                d = function (t) {
                  var e,
                    i = {};
                  for (e in t) i[e] = t[e];
                  return i;
                },
                _ = function (t, e, i) {
                  var n,
                    r,
                    s = t.cycle;
                  for (n in s) (r = s[n]), (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
                  delete t.cycle;
                },
                p = (a.pauseCallback = function () {}),
                f = function (t) {
                  var e,
                    i = [],
                    n = t.length;
                  for (e = 0; e !== n; i.push(t[e++]));
                  return i;
                },
                m = (n.prototype = new e());
              return (
                (n.version = "1.20.3"),
                (m.constructor = n),
                (m.kill()._gc = m._forcingPlayhead = m._hasPause = !1),
                (m.to = function (t, e, n, r) {
                  var s = (n.repeat && c.TweenMax) || i;
                  return e ? this.add(new s(t, e, n), r) : this.set(t, n, r);
                }),
                (m.from = function (t, e, n, r) {
                  return this.add(((n.repeat && c.TweenMax) || i).from(t, e, n), r);
                }),
                (m.fromTo = function (t, e, n, r, s) {
                  var a = (r.repeat && c.TweenMax) || i;
                  return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s);
                }),
                (m.staggerTo = function (t, e, r, s, a, h, l, u) {
                  var c,
                    p,
                    m = new n({ onComplete: h, onCompleteParams: l, callbackScope: u, smoothChildTiming: this.smoothChildTiming }),
                    g = r.cycle;
                  for ("string" == typeof t && (t = i.selector(t) || t), o((t = t || [])) && (t = f(t)), (s = s || 0) < 0 && ((t = f(t)).reverse(), (s *= -1)), p = 0; p < t.length; p++)
                    (c = d(r)).startAt && ((c.startAt = d(c.startAt)), c.startAt.cycle && _(c.startAt, t, p)), g && (_(c, t, p), null != c.duration && ((e = c.duration), delete c.duration)), m.to(t[p], e, c, p * s);
                  return this.add(m, a);
                }),
                (m.staggerFrom = function (t, e, i, n, r, s, a, o) {
                  return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(t, e, i, n, r, s, a, o);
                }),
                (m.staggerFromTo = function (t, e, i, n, r, s, a, o, h) {
                  return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), this.staggerTo(t, e, n, r, s, a, o, h);
                }),
                (m.call = function (t, e, n, r) {
                  return this.add(i.delayedCall(0, t, e, n), r);
                }),
                (m.set = function (t, e, n) {
                  return (n = this._parseTimeOrLabel(n, 0, !0)), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n);
                }),
                (n.exportRoot = function (t, e) {
                  null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                  var r,
                    s,
                    a,
                    o,
                    h = new n(t),
                    l = h._timeline;
                  for (null == e && (e = !0), l._remove(h, !0), h._startTime = 0, h._rawPrevTime = h._time = h._totalTime = l._time, a = l._first; a; )
                    (o = a._next), (e && a instanceof i && a.target === a.vars.onComplete) || ((s = a._startTime - a._delay) < 0 && (r = 1), h.add(a, s)), (a = o);
                  return l.add(h, 0), r && h.totalDuration(), h;
                }),
                (m.add = function (r, s, a, o) {
                  var l, u, c, d, _, p;
                  if (("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t))) {
                    if (r instanceof Array || (r && r.push && h(r))) {
                      for (a = a || "normal", o = o || 0, l = s, u = r.length, c = 0; c < u; c++)
                        h((d = r[c])) && (d = new n({ tweens: d })),
                          this.add(d, l),
                          "string" != typeof d && "function" != typeof d && ("sequence" === a ? (l = d._startTime + d.totalDuration() / d._timeScale) : "start" === a && (d._startTime -= d.delay())),
                          (l += o);
                      return this._uncache(!0);
                    }
                    if ("string" == typeof r) return this.addLabel(r, s);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r);
                  }
                  if ((e.prototype.add.call(this, r, s), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
                    for (p = (_ = this).rawTime() > r._startTime; _._timeline; ) p && _._timeline.smoothChildTiming ? _.totalTime(_._totalTime, !0) : _._gc && _._enabled(!0, !1), (_ = _._timeline);
                  return this;
                }),
                (m.remove = function (e) {
                  if (e instanceof t) {
                    this._remove(e, !1);
                    var i = (e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline);
                    return (e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale), this;
                  }
                  if (e instanceof Array || (e && e.push && h(e))) {
                    for (var n = e.length; --n > -1; ) this.remove(e[n]);
                    return this;
                  }
                  return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
                }),
                (m._remove = function (t, i) {
                  return (
                    e.prototype._remove.call(this, t, i),
                    this._last ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0),
                    this
                  );
                }),
                (m.append = function (t, e) {
                  return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                }),
                (m.insert = m.insertMultiple = function (t, e, i, n) {
                  return this.add(t, e || 0, i, n);
                }),
                (m.appendMultiple = function (t, e, i, n) {
                  return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
                }),
                (m.addLabel = function (t, e) {
                  return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                }),
                (m.addPause = function (t, e, n, r) {
                  var s = i.delayedCall(0, p, n, r || this);
                  return (s.vars.onComplete = s.vars.onReverseComplete = e), (s.data = "isPause"), (this._hasPause = !0), this.add(s, t);
                }),
                (m.removeLabel = function (t) {
                  return delete this._labels[t], this;
                }),
                (m.getLabelTime = function (t) {
                  return null != this._labels[t] ? this._labels[t] : -1;
                }),
                (m._parseTimeOrLabel = function (e, i, n, r) {
                  var s, a;
                  if (r instanceof t && r.timeline === this) this.remove(r);
                  else if (r && (r instanceof Array || (r.push && h(r)))) for (a = r.length; --a > -1; ) r[a] instanceof t && r[a].timeline === this && this.remove(r[a]);
                  if (((s = "number" != typeof e || i ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof i))
                    return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                  if (((i = i || 0), "string" != typeof e || (!isNaN(e) && null == this._labels[e]))) null == e && (e = s);
                  else {
                    if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? (n ? (this._labels[e] = s + i) : i) : this._labels[e] + i;
                    (i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1))), (e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, n) : s);
                  }
                  return Number(e) + i;
                }),
                (m.seek = function (t, e) {
                  return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
                }),
                (m.stop = function () {
                  return this.paused(!0);
                }),
                (m.gotoAndPlay = function (t, e) {
                  return this.play(t, e);
                }),
                (m.gotoAndStop = function (t, e) {
                  return this.pause(t, e);
                }),
                (m.render = function (t, e, i) {
                  this._gc && this._enabled(!0, !1);
                  var n,
                    r,
                    s,
                    a,
                    o,
                    h,
                    c,
                    d = this._time,
                    _ = this._dirty ? this.totalDuration() : this._totalDuration,
                    p = this._startTime,
                    f = this._timeScale,
                    m = this._paused;
                  if ((d !== this._time && (t += this._time - d), t >= _ - 1e-7 && t >= 0))
                    (this._totalTime = this._time = _),
                      this._reversed ||
                        this._hasPausedChild() ||
                        ((r = !0),
                        (a = "onComplete"),
                        (o = !!this._timeline.autoRemoveChildren),
                        0 === this._duration &&
                          ((t <= 0 && t >= -1e-7) || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) &&
                          this._rawPrevTime !== t &&
                          this._first &&
                          ((o = !0), this._rawPrevTime > 1e-10 && (a = "onReverseComplete"))),
                      (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10),
                      (t = _ + 1e-4);
                  else if (t < 1e-7)
                    if (
                      ((this._totalTime = this._time = 0),
                      (0 !== d || (0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || (t < 0 && this._rawPrevTime >= 0)))) && ((a = "onReverseComplete"), (r = this._reversed)),
                      t < 0)
                    )
                      (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((o = r = !0), (a = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (o = !0), (this._rawPrevTime = t);
                    else {
                      if (((this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10), 0 === t && r)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                      (t = 0), this._initted || (o = !0);
                    }
                  else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                      if (t >= d) for (n = this._first; n && n._startTime <= t && !h; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (h = n), (n = n._next);
                      else for (n = this._last; n && n._startTime >= t && !h; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (h = n)), (n = n._prev);
                      h && ((this._time = t = h._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                    }
                    this._totalTime = this._time = this._rawPrevTime = t;
                  }
                  if ((this._time !== d && this._first) || i || o || h) {
                    if (
                      (this._initted || (this._initted = !0),
                      this._active || (!this._paused && this._time !== d && t > 0 && (this._active = !0)),
                      0 === d && this.vars.onStart && ((0 === this._time && this._duration) || e || this._callback("onStart")),
                      (c = this._time) >= d)
                    )
                      for (n = this._first; n && ((s = n._next), c === this._time && (!this._paused || m)); )
                        (n._active || (n._startTime <= c && !n._paused && !n._gc)) &&
                          (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                          (n = s);
                    else
                      for (n = this._last; n && ((s = n._prev), c === this._time && (!this._paused || m)); ) {
                        if (n._active || (n._startTime <= d && !n._paused && !n._gc)) {
                          if (h === n) {
                            for (h = n._prev; h && h.endTime() > this._time; ) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), (h = h._prev);
                            (h = null), this.pause();
                          }
                          n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i);
                        }
                        n = s;
                      }
                    this._onUpdate && (e || (l.length && u(), this._callback("onUpdate"))),
                      a &&
                        (this._gc ||
                          (p !== this._startTime && f === this._timeScale) ||
                          ((0 === this._time || _ >= this.totalDuration()) && (r && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[a] && this._callback(a))));
                  }
                }),
                (m._hasPausedChild = function () {
                  for (var t = this._first; t; ) {
                    if (t._paused || (t instanceof n && t._hasPausedChild())) return !0;
                    t = t._next;
                  }
                  return !1;
                }),
                (m.getChildren = function (t, e, n, r) {
                  r = r || -9999999999;
                  for (var s = [], a = this._first, o = 0; a; ) a._startTime < r || (a instanceof i ? !1 !== e && (s[o++] = a) : (!1 !== n && (s[o++] = a), !1 !== t && (o = (s = s.concat(a.getChildren(!0, e, n))).length))), (a = a._next);
                  return s;
                }),
                (m.getTweensOf = function (t, e) {
                  var n,
                    r,
                    s = this._gc,
                    a = [],
                    o = 0;
                  for (s && this._enabled(!0, !0), r = (n = i.getTweensOf(t)).length; --r > -1; ) (n[r].timeline === this || (e && this._contains(n[r]))) && (a[o++] = n[r]);
                  return s && this._enabled(!1, !0), a;
                }),
                (m.recent = function () {
                  return this._recent;
                }),
                (m._contains = function (t) {
                  for (var e = t.timeline; e; ) {
                    if (e === this) return !0;
                    e = e.timeline;
                  }
                  return !1;
                }),
                (m.shiftChildren = function (t, e, i) {
                  i = i || 0;
                  for (var n, r = this._first, s = this._labels; r; ) r._startTime >= i && (r._startTime += t), (r = r._next);
                  if (e) for (n in s) s[n] >= i && (s[n] += t);
                  return this._uncache(!0);
                }),
                (m._kill = function (t, e) {
                  if (!t && !e) return this._enabled(!1, !1);
                  for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1; ) i[n]._kill(t, e) && (r = !0);
                  return r;
                }),
                (m.clear = function (t) {
                  var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                  for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
                  return !1 !== t && (this._labels = {}), this._uncache(!0);
                }),
                (m.invalidate = function () {
                  for (var e = this._first; e; ) e.invalidate(), (e = e._next);
                  return t.prototype.invalidate.call(this);
                }),
                (m._enabled = function (t, i) {
                  if (t === this._gc) for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
                  return e.prototype._enabled.call(this, t, i);
                }),
                (m.totalTime = function (e, i, n) {
                  this._forcingPlayhead = !0;
                  var r = t.prototype.totalTime.apply(this, arguments);
                  return (this._forcingPlayhead = !1), r;
                }),
                (m.duration = function (t) {
                  return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                }),
                (m.totalDuration = function (t) {
                  if (!arguments.length) {
                    if (this._dirty) {
                      for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                        (e = r._prev),
                          r._dirty && r.totalDuration(),
                          r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? ((this._calculatingDuration = 1), this.add(r, r._startTime - r._delay), (this._calculatingDuration = 0)) : (s = r._startTime),
                          r._startTime < 0 &&
                            !r._paused &&
                            ((n -= r._startTime),
                            this._timeline.smoothChildTiming && ((this._startTime += r._startTime / this._timeScale), (this._time -= r._startTime), (this._totalTime -= r._startTime), (this._rawPrevTime -= r._startTime)),
                            this.shiftChildren(-r._startTime, !1, -9999999999),
                            (s = 0)),
                          (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i),
                          (r = e);
                      (this._duration = this._totalDuration = n), (this._dirty = !1);
                    }
                    return this._totalDuration;
                  }
                  return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
                }),
                (m.paused = function (e) {
                  if (!e) for (var i = this._first, n = this._time; i; ) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), (i = i._next);
                  return t.prototype.paused.apply(this, arguments);
                }),
                (m.usesFrames = function () {
                  for (var e = this._timeline; e._timeline; ) e = e._timeline;
                  return e === t._rootFramesTimeline;
                }),
                (m.rawTime = function (t) {
                  return t && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                    ? this._totalTime % (this._duration + this._repeatDelay)
                    : this._paused
                    ? this._totalTime
                    : (this._timeline.rawTime(t) - this._startTime) * this._timeScale;
                }),
                n
              );
            },
            !0
          ),
          r._gsDefine(
            "TimelineMax",
            ["TimelineLite", "TweenLite", "easing.Ease"],
            function (t, e, i) {
              var n = function (e) {
                  t.call(this, e), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._dirty = !0);
                },
                s = e._internals,
                a = s.lazyTweens,
                o = s.lazyRender,
                h = r._gsDefine.globals,
                l = new i(null, null, 1, 0),
                u = (n.prototype = new t());
              return (
                (u.constructor = n),
                (u.kill()._gc = !1),
                (n.version = "1.20.3"),
                (u.invalidate = function () {
                  return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), t.prototype.invalidate.call(this);
                }),
                (u.addCallback = function (t, i, n, r) {
                  return this.add(e.delayedCall(0, t, n, r), i);
                }),
                (u.removeCallback = function (t, e) {
                  if (t)
                    if (null == e) this._kill(null, t);
                    else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1; ) i[n]._startTime === r && i[n]._enabled(!1, !1);
                  return this;
                }),
                (u.removePause = function (e) {
                  return this.removeCallback(t._internals.pauseCallback, e);
                }),
                (u.tweenTo = function (t, i) {
                  i = i || {};
                  var n,
                    r,
                    s,
                    a = { ease: l, useFrames: this.usesFrames(), immediateRender: !1 },
                    o = (i.repeat && h.TweenMax) || e;
                  for (r in i) a[r] = i[r];
                  return (
                    (a.time = this._parseTimeOrLabel(t)),
                    (n = Math.abs(Number(a.time) - this._time) / this._timeScale || 0.001),
                    (s = new o(this, n, a)),
                    (a.onStart = function () {
                      s.target.paused(!0),
                        s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale),
                        i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || []);
                    }),
                    s
                  );
                }),
                (u.tweenFromTo = function (t, e, i) {
                  (i = i || {}), (t = this._parseTimeOrLabel(t)), (i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }), (i.immediateRender = !1 !== i.immediateRender);
                  var n = this.tweenTo(e, i);
                  return n.duration(Math.abs(n.vars.time - t) / this._timeScale || 0.001);
                }),
                (u.render = function (t, e, i) {
                  this._gc && this._enabled(!0, !1);
                  var n,
                    r,
                    s,
                    h,
                    l,
                    u,
                    c,
                    d,
                    _ = this._time,
                    p = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._duration,
                    m = this._totalTime,
                    g = this._startTime,
                    y = this._timeScale,
                    v = this._rawPrevTime,
                    w = this._paused,
                    S = this._cycle;
                  if ((_ !== this._time && (t += this._time - _), t >= p - 1e-7 && t >= 0))
                    this._locked || ((this._totalTime = p), (this._cycle = this._repeat)),
                      this._reversed ||
                        this._hasPausedChild() ||
                        ((r = !0),
                        (h = "onComplete"),
                        (l = !!this._timeline.autoRemoveChildren),
                        0 === this._duration && ((t <= 0 && t >= -1e-7) || v < 0 || 1e-10 === v) && v !== t && this._first && ((l = !0), v > 1e-10 && (h = "onReverseComplete"))),
                      (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10),
                      this._yoyo && 0 != (1 & this._cycle) ? (this._time = t = 0) : ((this._time = f), (t = f + 1e-4));
                  else if (t < 1e-7)
                    if (
                      (this._locked || (this._totalTime = this._cycle = 0),
                      (this._time = 0),
                      (0 !== _ || (0 === f && 1e-10 !== v && (v > 0 || (t < 0 && v >= 0)) && !this._locked)) && ((h = "onReverseComplete"), (r = this._reversed)),
                      t < 0)
                    )
                      (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((l = r = !0), (h = "onReverseComplete")) : v >= 0 && this._first && (l = !0), (this._rawPrevTime = t);
                    else {
                      if (((this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : 1e-10), 0 === t && r)) for (n = this._first; n && 0 === n._startTime; ) n._duration || (r = !1), (n = n._next);
                      (t = 0), this._initted || (l = !0);
                    }
                  else if (
                    (0 === f && v < 0 && (l = !0),
                    (this._time = this._rawPrevTime = t),
                    this._locked ||
                      ((this._totalTime = t),
                      0 !== this._repeat &&
                        ((u = f + this._repeatDelay),
                        (this._cycle = (this._totalTime / u) >> 0),
                        0 !== this._cycle && this._cycle === this._totalTime / u && m <= t && this._cycle--,
                        (this._time = this._totalTime - this._cycle * u),
                        this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time),
                        this._time > f ? ((this._time = f), (t = f + 1e-4)) : this._time < 0 ? (this._time = t = 0) : (t = this._time))),
                    this._hasPause && !this._forcingPlayhead && !e)
                  ) {
                    if ((t = this._time) >= _ || (this._repeat && S !== this._cycle))
                      for (n = this._first; n && n._startTime <= t && !c; ) n._duration || "isPause" !== n.data || n.ratio || (0 === n._startTime && 0 === this._rawPrevTime) || (c = n), (n = n._next);
                    else for (n = this._last; n && n._startTime >= t && !c; ) n._duration || ("isPause" === n.data && n._rawPrevTime > 0 && (c = n)), (n = n._prev);
                    c && c._startTime < f && ((this._time = t = c._startTime), (this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)));
                  }
                  if (this._cycle !== S && !this._locked) {
                    var x = this._yoyo && 0 != (1 & S),
                      b = x === (this._yoyo && 0 != (1 & this._cycle)),
                      P = this._totalTime,
                      T = this._cycle,
                      C = this._rawPrevTime,
                      A = this._time;
                    if (
                      ((this._totalTime = S * f),
                      this._cycle < S ? (x = !x) : (this._totalTime += f),
                      (this._time = _),
                      (this._rawPrevTime = 0 === f ? v - 1e-4 : v),
                      (this._cycle = S),
                      (this._locked = !0),
                      (_ = x ? 0 : f),
                      this.render(_, e, 0 === f),
                      e || this._gc || (this.vars.onRepeat && ((this._cycle = T), (this._locked = !1), this._callback("onRepeat"))),
                      _ !== this._time)
                    )
                      return;
                    if ((b && ((this._cycle = S), (this._locked = !0), (_ = x ? f + 1e-4 : -1e-4), this.render(_, !0, !1)), (this._locked = !1), this._paused && !w)) return;
                    (this._time = A), (this._totalTime = P), (this._cycle = T), (this._rawPrevTime = C);
                  }
                  if ((this._time !== _ && this._first) || i || l || c) {
                    if (
                      (this._initted || (this._initted = !0),
                      this._active || (!this._paused && this._totalTime !== m && t > 0 && (this._active = !0)),
                      0 === m && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || e || this._callback("onStart")),
                      (d = this._time) >= _)
                    )
                      for (n = this._first; n && ((s = n._next), d === this._time && (!this._paused || w)); )
                        (n._active || (n._startTime <= this._time && !n._paused && !n._gc)) &&
                          (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                          (n = s);
                    else
                      for (n = this._last; n && ((s = n._prev), d === this._time && (!this._paused || w)); ) {
                        if (n._active || (n._startTime <= _ && !n._paused && !n._gc)) {
                          if (c === n) {
                            for (c = n._prev; c && c.endTime() > this._time; ) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), (c = c._prev);
                            (c = null), this.pause();
                          }
                          n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i);
                        }
                        n = s;
                      }
                    this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))),
                      h &&
                        (this._locked ||
                          this._gc ||
                          (g !== this._startTime && y === this._timeScale) ||
                          ((0 === this._time || p >= this.totalDuration()) && (r && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[h] && this._callback(h))));
                  } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"));
                }),
                (u.getActive = function (t, e, i) {
                  null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                  var n,
                    r,
                    s = [],
                    a = this.getChildren(t, e, i),
                    o = 0,
                    h = a.length;
                  for (n = 0; n < h; n++) (r = a[n]).isActive() && (s[o++] = r);
                  return s;
                }),
                (u.getLabelAfter = function (t) {
                  t || (0 !== t && (t = this._time));
                  var e,
                    i = this.getLabelsArray(),
                    n = i.length;
                  for (e = 0; e < n; e++) if (i[e].time > t) return i[e].name;
                  return null;
                }),
                (u.getLabelBefore = function (t) {
                  null == t && (t = this._time);
                  for (var e = this.getLabelsArray(), i = e.length; --i > -1; ) if (e[i].time < t) return e[i].name;
                  return null;
                }),
                (u.getLabelsArray = function () {
                  var t,
                    e = [],
                    i = 0;
                  for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                  return (
                    e.sort(function (t, e) {
                      return t.time - e.time;
                    }),
                    e
                  );
                }),
                (u.invalidate = function () {
                  return (this._locked = !1), t.prototype.invalidate.call(this);
                }),
                (u.progress = function (t, e) {
                  return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0;
                }),
                (u.totalProgress = function (t, e) {
                  return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0;
                }),
                (u.totalDuration = function (e) {
                  return arguments.length
                    ? -1 !== this._repeat && e
                      ? this.timeScale(this.totalDuration() / e)
                      : this
                    : (this._dirty && (t.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
                }),
                (u.time = function (t, e) {
                  return arguments.length
                    ? (this._dirty && this.totalDuration(),
                      t > this._duration && (t = this._duration),
                      this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                      this.totalTime(t, e))
                    : this._time;
                }),
                (u.repeat = function (t) {
                  return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                }),
                (u.repeatDelay = function (t) {
                  return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                }),
                (u.yoyo = function (t) {
                  return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                }),
                (u.currentLabel = function (t) {
                  return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
                }),
                n
              );
            },
            !0
          ),
          (t = 180 / Math.PI),
          (e = []),
          (i = []),
          (n = []),
          (s = {}),
          (a = r._gsDefine.globals),
          (o = function (t, e, i, n) {
            i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), (this.a = t), (this.b = e), (this.c = i), (this.d = n), (this.da = n - t), (this.ca = i - t), (this.ba = e - t);
          }),
          (h = function (t, e, i, n) {
            var r = { a: t },
              s = {},
              a = {},
              o = { c: n },
              h = (t + e) / 2,
              l = (e + i) / 2,
              u = (i + n) / 2,
              c = (h + l) / 2,
              d = (l + u) / 2,
              _ = (d - c) / 8;
            return (r.b = h + (t - h) / 4), (s.b = c + _), (r.c = s.a = (r.b + s.b) / 2), (s.c = a.a = (c + d) / 2), (a.b = d - _), (o.b = u + (n - u) / 4), (a.c = o.a = (a.b + o.b) / 2), [r, s, a, o];
          }),
          (l = function (t, r, s, a, o) {
            var l,
              u,
              c,
              d,
              _,
              p,
              f,
              m,
              g,
              y,
              v,
              w,
              S,
              x = t.length - 1,
              b = 0,
              P = t[0].a;
            for (l = 0; l < x; l++)
              (u = (_ = t[b]).a),
                (c = _.d),
                (d = t[b + 1].d),
                o
                  ? ((v = e[l]),
                    (S = (((w = i[l]) + v) * r * 0.25) / (a ? 0.5 : n[l] || 0.5)),
                    (m = c - ((p = c - (c - u) * (a ? 0.5 * r : 0 !== v ? S / v : 0)) + ((((f = c + (d - c) * (a ? 0.5 * r : 0 !== w ? S / w : 0)) - p) * ((3 * v) / (v + w) + 0.5)) / 4 || 0))))
                  : (m = c - ((p = c - (c - u) * r * 0.5) + (f = c + (d - c) * r * 0.5)) / 2),
                (p += m),
                (f += m),
                (_.c = g = p),
                (_.b = 0 !== l ? P : (P = _.a + 0.6 * (_.c - _.a))),
                (_.da = c - u),
                (_.ca = g - u),
                (_.ba = P - u),
                s ? ((y = h(u, P, g, c)), t.splice(b, 1, y[0], y[1], y[2], y[3]), (b += 4)) : b++,
                (P = f);
            ((_ = t[b]).b = P), (_.c = P + 0.4 * (_.d - P)), (_.da = _.d - _.a), (_.ca = _.c - _.a), (_.ba = P - _.a), s && ((y = h(_.a, P, _.c, _.d)), t.splice(b, 1, y[0], y[1], y[2], y[3]));
          }),
          (u = function (t, n, r, s) {
            var a,
              h,
              l,
              u,
              c,
              d,
              _ = [];
            if (s) for (h = (t = [s].concat(t)).length; --h > -1; ) "string" == typeof (d = t[h][n]) && "=" === d.charAt(1) && (t[h][n] = s[n] + Number(d.charAt(0) + d.substr(2)));
            if ((a = t.length - 2) < 0) return (_[0] = new o(t[0][n], 0, 0, t[0][n])), _;
            for (h = 0; h < a; h++) (l = t[h][n]), (u = t[h + 1][n]), (_[h] = new o(l, 0, 0, u)), r && ((c = t[h + 2][n]), (e[h] = (e[h] || 0) + (u - l) * (u - l)), (i[h] = (i[h] || 0) + (c - u) * (c - u)));
            return (_[h] = new o(t[h][n], 0, 0, t[h + 1][n])), _;
          }),
          (c = function (t, r, a, o, h, c) {
            var d,
              _,
              p,
              f,
              m,
              g,
              y,
              v,
              w = {},
              S = [],
              x = c || t[0];
            for (_ in ((h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
            null == r && (r = 1),
            t[0]))
              S.push(_);
            if (t.length > 1) {
              for (v = t[t.length - 1], y = !0, d = S.length; --d > -1; )
                if (((_ = S[d]), Math.abs(x[_] - v[_]) > 0.05)) {
                  y = !1;
                  break;
                }
              y && ((t = t.concat()), c && t.unshift(c), t.push(t[1]), (c = t[t.length - 3]));
            }
            for (e.length = i.length = n.length = 0, d = S.length; --d > -1; ) (_ = S[d]), (s[_] = -1 !== h.indexOf("," + _ + ",")), (w[_] = u(t, _, s[_], c));
            for (d = e.length; --d > -1; ) (e[d] = Math.sqrt(e[d])), (i[d] = Math.sqrt(i[d]));
            if (!o) {
              for (d = S.length; --d > -1; ) if (s[_]) for (g = (p = w[S[d]]).length - 1, f = 0; f < g; f++) (m = p[f + 1].da / i[f] + p[f].da / e[f] || 0), (n[f] = (n[f] || 0) + m * m);
              for (d = n.length; --d > -1; ) n[d] = Math.sqrt(n[d]);
            }
            for (d = S.length, f = a ? 4 : 1; --d > -1; ) (p = w[(_ = S[d])]), l(p, r, a, o, s[_]), y && (p.splice(0, f), p.splice(p.length - f, f));
            return w;
          }),
          (d = function (t, e, i) {
            for (var n, r, s, a, o, h, l, u, c, d, _, p = 1 / i, f = t.length; --f > -1; )
              for (s = (d = t[f]).a, a = d.d - s, o = d.c - s, h = d.b - s, n = r = 0, u = 1; u <= i; u++) (n = r - (r = ((l = p * u) * l * a + 3 * (c = 1 - l) * (l * o + c * h)) * l)), (e[(_ = f * i + u - 1)] = (e[_] || 0) + n * n);
          }),
          (_ = r._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.8",
            API: 2,
            global: !0,
            init: function (t, e, i) {
              (this._target = t), e instanceof Array && (e = { values: e }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
              var n,
                r,
                s,
                a,
                h,
                l = e.values || [],
                u = {},
                _ = l[0],
                p = e.autoRotate || i.vars.orientToBezier;
              for (n in ((this._autoRotate = p ? (p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]]) : null), _)) this._props.push(n);
              for (s = this._props.length; --s > -1; )
                (n = this._props[s]),
                  this._overwriteProps.push(n),
                  (r = this._func[n] = "function" == typeof t[n]),
                  (u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n])),
                  h || (u[n] !== l[0][n] && (h = u));
              if (
                ((this._beziers =
                  "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type
                    ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, h)
                    : (function (t, e, i) {
                        var n,
                          r,
                          s,
                          a,
                          h,
                          l,
                          u,
                          c,
                          d,
                          _,
                          p,
                          f = {},
                          m = "cubic" === (e = e || "soft") ? 3 : 2,
                          g = "soft" === e,
                          y = [];
                        if ((g && i && (t = [i].concat(t)), null == t || t.length < m + 1)) throw "invalid Bezier data";
                        for (d in t[0]) y.push(d);
                        for (l = y.length; --l > -1; ) {
                          for (f[(d = y[l])] = h = [], _ = 0, c = t.length, u = 0; u < c; u++)
                            (n = null == i ? t[u][d] : "string" == typeof (p = t[u][d]) && "=" === p.charAt(1) ? i[d] + Number(p.charAt(0) + p.substr(2)) : Number(p)), g && u > 1 && u < c - 1 && (h[_++] = (n + h[_ - 2]) / 2), (h[_++] = n);
                          for (c = _ - m + 1, _ = 0, u = 0; u < c; u += m) (n = h[u]), (r = h[u + 1]), (s = h[u + 2]), (a = 2 === m ? 0 : h[u + 3]), (h[_++] = p = 3 === m ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s));
                          h.length = _;
                        }
                        return f;
                      })(l, e.type, u)),
                (this._segCount = this._beziers[n].length),
                this._timeRes)
              ) {
                var f = (function (t, e) {
                  var i,
                    n,
                    r,
                    s,
                    a = [],
                    o = [],
                    h = 0,
                    l = 0,
                    u = (e = e >> 0 || 6) - 1,
                    c = [],
                    _ = [];
                  for (i in t) d(t[i], a, e);
                  for (r = a.length, n = 0; n < r; n++) (h += Math.sqrt(a[n])), (_[(s = n % e)] = h), s === u && ((l += h), (c[(s = (n / e) >> 0)] = _), (o[s] = l), (h = 0), (_ = []));
                  return { length: l, lengths: o, segments: c };
                })(this._beziers, this._timeRes);
                (this._length = f.length),
                  (this._lengths = f.lengths),
                  (this._segments = f.segments),
                  (this._l1 = this._li = this._s1 = this._si = 0),
                  (this._l2 = this._lengths[0]),
                  (this._curSeg = this._segments[0]),
                  (this._s2 = this._curSeg[0]),
                  (this._prec = 1 / this._curSeg.length);
              }
              if ((p = this._autoRotate))
                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1; ) {
                  for (a = 0; a < 3; a++) (n = p[s][a]), (this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]);
                  (n = p[s][2]), (this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0), this._overwriteProps.push(n);
                }
              return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
            },
            set: function (e) {
              var i,
                n,
                r,
                s,
                a,
                o,
                h,
                l,
                u,
                c,
                d = this._segCount,
                _ = this._func,
                p = this._target,
                f = e !== this._startRatio;
              if (this._timeRes) {
                if (((u = this._lengths), (c = this._curSeg), (e *= this._length), (r = this._li), e > this._l2 && r < d - 1)) {
                  for (l = d - 1; r < l && (this._l2 = u[++r]) <= e; );
                  (this._l1 = u[r - 1]), (this._li = r), (this._curSeg = c = this._segments[r]), (this._s2 = c[(this._s1 = this._si = 0)]);
                } else if (e < this._l1 && r > 0) {
                  for (; r > 0 && (this._l1 = u[--r]) >= e; );
                  0 === r && e < this._l1 ? (this._l1 = 0) : r++, (this._l2 = u[r]), (this._li = r), (this._curSeg = c = this._segments[r]), (this._s1 = c[(this._si = c.length - 1) - 1] || 0), (this._s2 = c[this._si]);
                }
                if (((i = r), (e -= this._l1), (r = this._si), e > this._s2 && r < c.length - 1)) {
                  for (l = c.length - 1; r < l && (this._s2 = c[++r]) <= e; );
                  (this._s1 = c[r - 1]), (this._si = r);
                } else if (e < this._s1 && r > 0) {
                  for (; r > 0 && (this._s1 = c[--r]) >= e; );
                  0 === r && e < this._s1 ? (this._s1 = 0) : r++, (this._s2 = c[r]), (this._si = r);
                }
                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
              } else o = (e - (i = e < 0 ? 0 : e >= 1 ? d - 1 : (d * e) >> 0) * (1 / d)) * d;
              for (n = 1 - o, r = this._props.length; --r > -1; )
                (s = this._props[r]), (h = (o * o * (a = this._beziers[s][i]).da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a), this._mod[s] && (h = this._mod[s](h, p)), _[s] ? p[s](h) : (p[s] = h);
              if (this._autoRotate) {
                var m,
                  g,
                  y,
                  v,
                  w,
                  S,
                  x,
                  b = this._autoRotate;
                for (r = b.length; --r > -1; )
                  (s = b[r][2]),
                    (S = b[r][3] || 0),
                    (x = !0 === b[r][4] ? 1 : t),
                    (a = this._beziers[b[r][0]]),
                    (m = this._beziers[b[r][1]]),
                    a &&
                      m &&
                      ((a = a[i]),
                      (m = m[i]),
                      (g = a.a + (a.b - a.a) * o),
                      (g += ((v = a.b + (a.c - a.b) * o) - g) * o),
                      (v += (a.c + (a.d - a.c) * o - v) * o),
                      (y = m.a + (m.b - m.a) * o),
                      (y += ((w = m.b + (m.c - m.b) * o) - y) * o),
                      (w += (m.c + (m.d - m.c) * o - w) * o),
                      (h = f ? Math.atan2(w - y, v - g) * x + S : this._initialRotations[r]),
                      this._mod[s] && (h = this._mod[s](h, p)),
                      _[s] ? p[s](h) : (p[s] = h));
              }
            },
          })),
          (p = _.prototype),
          (_.bezierThrough = c),
          (_.cubicToQuadratic = h),
          (_._autoCSS = !0),
          (_.quadraticToCubic = function (t, e, i) {
            return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
          }),
          (_._cssRegister = function () {
            var t = a.CSSPlugin;
            if (t) {
              var e = t._internals,
                i = e._parseToProxy,
                n = e._setPluginRatio,
                r = e.CSSPropTween;
              e._registerComplexSpecialProp("bezier", {
                parser: function (t, e, s, a, o, h) {
                  e instanceof Array && (e = { values: e }), (h = new _());
                  var l,
                    u,
                    c,
                    d = e.values,
                    p = d.length - 1,
                    f = [],
                    m = {};
                  if (p < 0) return o;
                  for (l = 0; l <= p; l++) (c = i(t, d[l], a, o, h, p !== l)), (f[l] = c.end);
                  for (u in e) m[u] = e[u];
                  return (
                    (m.values = f),
                    ((o = new r(t, "bezier", 0, 0, c.pt, 2)).data = c),
                    (o.plugin = h),
                    (o.setRatio = n),
                    0 === m.autoRotate && (m.autoRotate = !0),
                    !m.autoRotate ||
                      m.autoRotate instanceof Array ||
                      ((l = !0 === m.autoRotate ? 0 : Number(m.autoRotate)), (m.autoRotate = null != c.end.left ? [["left", "top", "rotation", l, !1]] : null != c.end.x && [["x", "y", "rotation", l, !1]])),
                    m.autoRotate && (a._transform || a._enableTransforms(!1), (c.autoRotate = a._target._gsTransform), (c.proxy.rotation = c.autoRotate.rotation || 0), a._overwriteProps.push("rotation")),
                    h._onInitTween(c.proxy, m, a._tween),
                    o
                  );
                },
              });
            }
          }),
          (p._mod = function (t) {
            for (var e, i = this._overwriteProps, n = i.length; --n > -1; ) (e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e);
          }),
          (p._kill = function (t) {
            var e,
              i,
              n = this._props;
            for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1; ) n[i] === e && n.splice(i, 1);
            if ((n = this._autoRotate)) for (i = n.length; --i > -1; ) t[n[i][2]] && n.splice(i, 1);
            return this._super._kill.call(this, t);
          }),
          r._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (t, e) {
              var i,
                n,
                s,
                a,
                o = function () {
                  t.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = o.prototype.setRatio);
                },
                h = r._gsDefine.globals,
                l = {},
                u = (o.prototype = new t("css"));
              (u.constructor = o),
                (o.version = "1.20.3"),
                (o.API = 2),
                (o.defaultTransformPerspective = 0),
                (o.defaultSkewType = "compensated"),
                (o.defaultSmoothOrigin = !0),
                (u = "px"),
                (o.suffixMap = { top: u, right: u, bottom: u, left: u, width: u, height: u, fontSize: u, padding: u, margin: u, perspective: u, lineHeight: "" });
              var c,
                d,
                _,
                p,
                f,
                m,
                g,
                y,
                v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                S = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                P = /opacity *= *([^)]*)/i,
                T = /opacity:([^;]*)/i,
                C = /alpha\(opacity *=.+?\)/i,
                A = /^(rgb|hsl)/,
                V = /([A-Z])/g,
                G = /-([a-z])/gi,
                O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                E = function (t, e) {
                  return e.toUpperCase();
                },
                R = /(?:Left|Right|Width)/i,
                L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                M = /,(?=[^\)]*(?:\(|$))/gi,
                k = /[\s,\(]/i,
                N = Math.PI / 180,
                D = 180 / Math.PI,
                H = {},
                B = { style: {} },
                z = r.document || {
                  createElement: function () {
                    return B;
                  },
                },
                F = function (t, e) {
                  return z.createElementNS ? z.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : z.createElement(t);
                },
                j = F("div"),
                U = F("img"),
                Q = (o._internals = { _specialProps: l }),
                X = (r.navigator || {}).userAgent || "",
                q = (function () {
                  var t = X.indexOf("Android"),
                    e = F("a");
                  return (
                    (_ = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3)),
                    (f = _ && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6),
                    (p = -1 !== X.indexOf("Firefox")),
                    (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (m = parseFloat(RegExp.$1)),
                    !!e && ((e.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(e.style.opacity))
                  );
                })(),
                Y = function (t) {
                  return P.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                },
                Z = function (t) {
                  r.console && console.log(t);
                },
                K = "",
                W = "",
                $ = function (t, e) {
                  var i,
                    n,
                    r = (e = e || j).style;
                  if (void 0 !== r[t]) return t;
                  for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t]; );
                  return n >= 0 ? ((K = "-" + (W = 3 === n ? "ms" : i[n]).toLowerCase() + "-"), W + t) : null;
                },
                J = z.defaultView ? z.defaultView.getComputedStyle : function () {},
                tt = (o.getStyle = function (t, e, i, n, r) {
                  var s;
                  return q || "opacity" !== e
                    ? (!n && t.style[e] ? (s = t.style[e]) : (i = i || J(t)) ? (s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(V, "-$1").toLowerCase())) : t.currentStyle && (s = t.currentStyle[e]),
                      null == r || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : r)
                    : Y(t);
                }),
                et = (Q.convertToPixels = function (t, i, n, r, s) {
                  if ("px" === r || (!r && "lineHeight" !== i)) return n;
                  if ("auto" === r || !n) return 0;
                  var a,
                    h,
                    l,
                    u = R.test(i),
                    c = t,
                    d = j.style,
                    _ = n < 0,
                    p = 1 === n;
                  if ((_ && (n = -n), p && (n *= 100), "lineHeight" !== i || r))
                    if ("%" === r && -1 !== i.indexOf("border")) a = (n / 100) * (u ? t.clientWidth : t.clientHeight);
                    else {
                      if (((d.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;"), "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r)) d[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                      else {
                        if (((c = t.parentNode || z.body), -1 !== tt(c, "display").indexOf("flex") && (d.position = "absolute"), (h = c._gsCache), (l = e.ticker.frame), h && u && h.time === l)) return (h.width * n) / 100;
                        d[u ? "width" : "height"] = n + r;
                      }
                      c.appendChild(j),
                        (a = parseFloat(j[u ? "offsetWidth" : "offsetHeight"])),
                        c.removeChild(j),
                        u && "%" === r && !1 !== o.cacheWidths && (((h = c._gsCache = c._gsCache || {}).time = l), (h.width = (a / n) * 100)),
                        0 !== a || s || (a = et(t, i, n, r, !0));
                    }
                  else (h = J(t).lineHeight), (t.style.lineHeight = n), (a = parseFloat(J(t).lineHeight)), (t.style.lineHeight = h);
                  return p && (a /= 100), _ ? -a : a;
                }),
                it = (Q.calculateOffset = function (t, e, i) {
                  if ("absolute" !== tt(t, "position", i)) return 0;
                  var n = "left" === e ? "Left" : "Top",
                    r = tt(t, "margin" + n, i);
                  return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(b, "")) || 0);
                }),
                nt = function (t, e) {
                  var i,
                    n,
                    r,
                    s = {};
                  if ((e = e || J(t, null)))
                    if ((i = e.length)) for (; --i > -1; ) (-1 !== (r = e[i]).indexOf("-transform") && It !== r) || (s[r.replace(G, E)] = e.getPropertyValue(r));
                    else for (i in e) (-1 !== i.indexOf("Transform") && Lt !== i) || (s[i] = e[i]);
                  else if ((e = t.currentStyle || t.style)) for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(G, E)] = e[i]);
                  return (
                    q || (s.opacity = Y(t)),
                    (n = qt(t, e, !1)),
                    (s.rotation = n.rotation),
                    (s.skewX = n.skewX),
                    (s.scaleX = n.scaleX),
                    (s.scaleY = n.scaleY),
                    (s.x = n.x),
                    (s.y = n.y),
                    kt && ((s.z = n.z), (s.rotationX = n.rotationX), (s.rotationY = n.rotationY), (s.scaleZ = n.scaleZ)),
                    s.filters && delete s.filters,
                    s
                  );
                },
                rt = function (t, e, i, n, r) {
                  var s,
                    a,
                    o,
                    h = {},
                    l = t.style;
                  for (a in i)
                    "cssText" !== a &&
                      "length" !== a &&
                      isNaN(a) &&
                      (e[a] !== (s = i[a]) || (r && r[a])) &&
                      -1 === a.indexOf("Origin") &&
                      (("number" != typeof s && "string" != typeof s) ||
                        ((h[a] = "auto" !== s || ("left" !== a && "top" !== a) ? (("" !== s && "auto" !== s && "none" !== s) || "string" != typeof e[a] || "" === e[a].replace(x, "") ? s : 0) : it(t, a)),
                        void 0 !== l[a] && (o = new vt(l, a, l[a], o))));
                  if (n) for (a in n) "className" !== a && (h[a] = n[a]);
                  return { difs: h, firstMPT: o };
                },
                st = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ot = function (t, e, i) {
                  if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                  if (t.getCTM && Ut(t)) return t.getBBox()[e] || 0;
                  var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = st[e],
                    s = r.length;
                  for (i = i || J(t, null); --s > -1; ) (n -= parseFloat(tt(t, "padding" + r[s], i, !0)) || 0), (n -= parseFloat(tt(t, "border" + r[s] + "Width", i, !0)) || 0);
                  return n;
                },
                ht = function (t, e) {
                  if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                  (null != t && "" !== t) || (t = "0 0");
                  var i,
                    n = t.split(" "),
                    r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                    s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                  if (n.length > 3 && !e) {
                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ht(n[i]));
                    return t.join(",");
                  }
                  return (
                    null == s ? (s = "center" === r ? "50%" : "0") : "center" === s && (s = "50%"),
                    ("center" === r || (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) && (r = "50%"),
                    (t = r + " " + s + (n.length > 2 ? " " + n[2] : "")),
                    e &&
                      ((e.oxp = -1 !== r.indexOf("%")), (e.oyp = -1 !== s.indexOf("%")), (e.oxr = "=" === r.charAt(1)), (e.oyr = "=" === s.charAt(1)), (e.ox = parseFloat(r.replace(x, ""))), (e.oy = parseFloat(s.replace(x, ""))), (e.v = t)),
                    e || t
                  );
                },
                lt = function (t, e) {
                  return "function" == typeof t && (t = t(y, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0;
                },
                ut = function (t, e) {
                  return "function" == typeof t && (t = t(y, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0;
                },
                ct = function (t, e, i, n) {
                  var r, s, a, o, h;
                  return (
                    "function" == typeof t && (t = t(y, g)),
                    null == t
                      ? (o = e)
                      : "number" == typeof t
                      ? (o = t)
                      : ((r = 360),
                        (s = t.split("_")),
                        (a = ((h = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (h ? 0 : e)),
                        s.length &&
                          (n && (n[i] = e + a),
                          -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = a < 0 ? a + r : a - r),
                          -1 !== t.indexOf("_cw") && a < 0 ? (a = ((a + 9999999999 * r) % r) - ((a / r) | 0) * r) : -1 !== t.indexOf("ccw") && a > 0 && (a = ((a - 9999999999 * r) % r) - ((a / r) | 0) * r)),
                        (o = e + a)),
                    o < 1e-6 && o > -1e-6 && (o = 0),
                    o
                  );
                },
                dt = {
                  aqua: [0, 255, 255],
                  lime: [0, 255, 0],
                  silver: [192, 192, 192],
                  black: [0, 0, 0],
                  maroon: [128, 0, 0],
                  teal: [0, 128, 128],
                  blue: [0, 0, 255],
                  navy: [0, 0, 128],
                  white: [255, 255, 255],
                  fuchsia: [255, 0, 255],
                  olive: [128, 128, 0],
                  yellow: [255, 255, 0],
                  orange: [255, 165, 0],
                  gray: [128, 128, 128],
                  purple: [128, 0, 128],
                  green: [0, 128, 0],
                  red: [255, 0, 0],
                  pink: [255, 192, 203],
                  cyan: [0, 255, 255],
                  transparent: [255, 255, 255, 0],
                },
                _t = function (t, e, i) {
                  return (255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + 0.5) | 0;
                },
                pt = (o.parseColor = function (t, e) {
                  var i, n, r, s, a, o, h, l, u, c, d;
                  if (t)
                    if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
                    else {
                      if (("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t])) i = dt[t];
                      else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s), (i = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t]);
                      else if ("hsl" === t.substr(0, 3))
                        if (((i = d = t.match(v)), e)) {
                          if (-1 !== t.indexOf("=")) return t.match(w);
                        } else
                          (a = (Number(i[0]) % 360) / 360),
                            (o = Number(i[1]) / 100),
                            (n = 2 * (h = Number(i[2]) / 100) - (r = h <= 0.5 ? h * (o + 1) : h + o - h * o)),
                            i.length > 3 && (i[3] = Number(i[3])),
                            (i[0] = _t(a + 1 / 3, n, r)),
                            (i[1] = _t(a, n, r)),
                            (i[2] = _t(a - 1 / 3, n, r));
                      else i = t.match(v) || dt.transparent;
                      (i[0] = Number(i[0])), (i[1] = Number(i[1])), (i[2] = Number(i[2])), i.length > 3 && (i[3] = Number(i[3]));
                    }
                  else i = dt.black;
                  return (
                    e &&
                      !d &&
                      ((n = i[0] / 255),
                      (r = i[1] / 255),
                      (s = i[2] / 255),
                      (h = ((l = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2),
                      l === u ? (a = o = 0) : ((c = l - u), (o = h > 0.5 ? c / (2 - l - u) : c / (l + u)), (a = l === n ? (r - s) / c + (r < s ? 6 : 0) : l === r ? (s - n) / c + 2 : (n - r) / c + 4), (a *= 60)),
                      (i[0] = (a + 0.5) | 0),
                      (i[1] = (100 * o + 0.5) | 0),
                      (i[2] = (100 * h + 0.5) | 0)),
                    i
                  );
                }),
                ft = function (t, e) {
                  var i,
                    n,
                    r,
                    s = t.match(mt) || [],
                    a = 0,
                    o = "";
                  if (!s.length) return t;
                  for (i = 0; i < s.length; i++)
                    (n = s[i]),
                      (a += (r = t.substr(a, t.indexOf(n, a) - a)).length + n.length),
                      3 === (n = pt(n, e)).length && n.push(1),
                      (o += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")");
                  return o + t.substr(a);
                },
                mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
              for (u in dt) mt += "|" + u + "\\b";
              (mt = new RegExp(mt + ")", "gi")),
                (o.colorStringFilter = function (t) {
                  var e,
                    i = t[0] + " " + t[1];
                  mt.test(i) && ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")), (t[0] = ft(t[0], e)), (t[1] = ft(t[1], e))), (mt.lastIndex = 0);
                }),
                e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
              var gt = function (t, e, i, n) {
                  if (null == t)
                    return function (t) {
                      return t;
                    };
                  var r,
                    s = e ? (t.match(mt) || [""])[0] : "",
                    a = t.split(s).join("").match(S) || [],
                    o = t.substr(0, t.indexOf(a[0])),
                    h = ")" === t.charAt(t.length - 1) ? ")" : "",
                    l = -1 !== t.indexOf(" ") ? " " : ",",
                    u = a.length,
                    c = u > 0 ? a[0].replace(v, "") : "";
                  return u
                    ? (r = e
                        ? function (t) {
                            var e, d, _, p;
                            if ("number" == typeof t) t += c;
                            else if (n && M.test(t)) {
                              for (p = t.replace(M, "|").split("|"), _ = 0; _ < p.length; _++) p[_] = r(p[_]);
                              return p.join(",");
                            }
                            if (((e = (t.match(mt) || [s])[0]), (_ = (d = t.split(e).join("").match(S) || []).length), u > _--)) for (; ++_ < u; ) d[_] = i ? d[((_ - 1) / 2) | 0] : a[_];
                            return o + d.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "");
                          }
                        : function (t) {
                            var e, s, d;
                            if ("number" == typeof t) t += c;
                            else if (n && M.test(t)) {
                              for (s = t.replace(M, "|").split("|"), d = 0; d < s.length; d++) s[d] = r(s[d]);
                              return s.join(",");
                            }
                            if (((d = (e = t.match(S) || []).length), u > d--)) for (; ++d < u; ) e[d] = i ? e[((d - 1) / 2) | 0] : a[d];
                            return o + e.join(l) + h;
                          })
                    : function (t) {
                        return t;
                      };
                },
                yt = function (t) {
                  return (
                    (t = t.split(",")),
                    function (e, i, n, r, s, a, o) {
                      var h,
                        l = (i + "").split(" ");
                      for (o = {}, h = 0; h < 4; h++) o[t[h]] = l[h] = l[h] || l[((h - 1) / 2) >> 0];
                      return r.parse(e, o, s, a);
                    }
                  );
                },
                vt =
                  ((Q._setPluginRatio = function (t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, r, s, a = this.data, o = a.proxy, h = a.firstMPT; h; ) (e = o[h.v]), h.r ? (e = Math.round(e)) : e < 1e-6 && e > -1e-6 && (e = 0), (h.t[h.p] = e), (h = h._next);
                    if ((a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t))
                      for (h = a.firstMPT, s = 1 === t ? "e" : "b"; h; ) {
                        if ((i = h.t).type) {
                          if (1 === i.type) {
                            for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                            i[s] = r;
                          }
                        } else i[s] = i.s + i.xs0;
                        h = h._next;
                      }
                  }),
                  function (t, e, i, n, r) {
                    (this.t = t), (this.p = e), (this.v = i), (this.r = r), n && ((n._prev = this), (this._next = n));
                  }),
                wt =
                  ((Q._parseToProxy = function (t, e, i, n, r, s) {
                    var a,
                      o,
                      h,
                      l,
                      u,
                      c = n,
                      d = {},
                      _ = {},
                      p = i._transform,
                      f = H;
                    for (i._transform = null, H = e, n = u = i.parse(t, e, n, r), H = f, s && ((i._transform = p), c && ((c._prev = null), c._prev && (c._prev._next = null))); n && n !== c; ) {
                      if (n.type <= 1 && ((_[(o = n.p)] = n.s + n.c), (d[o] = n.s), s || ((l = new vt(n, "s", o, l, n.r)), (n.c = 0)), 1 === n.type))
                        for (a = n.l; --a > 0; ) (h = "xn" + a), (_[(o = n.p + "_" + h)] = n.data[h]), (d[o] = n[h]), s || (l = new vt(n, h, o, l, n.rxp[h]));
                      n = n._next;
                    }
                    return { proxy: d, end: _, firstMPT: l, pt: u };
                  }),
                  (Q.CSSPropTween = function (t, e, n, r, s, o, h, l, u, c, d) {
                    (this.t = t),
                      (this.p = e),
                      (this.s = n),
                      (this.c = r),
                      (this.n = h || e),
                      t instanceof wt || a.push(this.n),
                      (this.r = l),
                      (this.type = o || 0),
                      u && ((this.pr = u), (i = !0)),
                      (this.b = void 0 === c ? n : c),
                      (this.e = void 0 === d ? n + r : d),
                      s && ((this._next = s), (s._prev = this));
                  })),
                St = function (t, e, i, n, r, s) {
                  var a = new wt(t, e, i, n - i, r, -1, s);
                  return (a.b = i), (a.e = a.xs0 = n), a;
                },
                xt = (o.parseComplex = function (t, e, i, n, r, s, a, h, l, u) {
                  (i = i || s || ""), "function" == typeof n && (n = n(y, g)), (a = new wt(t, e, 0, 0, a, u ? 2 : 1, null, !1, h, i, n)), (n += ""), r && mt.test(n + i) && ((n = [i, n]), o.colorStringFilter(n), (i = n[0]), (n = n[1]));
                  var d,
                    _,
                    p,
                    f,
                    m,
                    S,
                    x,
                    b,
                    P,
                    T,
                    C,
                    A,
                    V,
                    G = i.split(", ").join(",").split(" "),
                    O = n.split(", ").join(",").split(" "),
                    E = G.length,
                    R = !1 !== c;
                  for (
                    (-1 === n.indexOf(",") && -1 === i.indexOf(",")) ||
                      (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl")
                        ? ((G = G.join(" ").replace(M, ", ").split(" ")), (O = O.join(" ").replace(M, ", ").split(" ")))
                        : ((G = G.join(" ").split(",").join(", ").split(" ")), (O = O.join(" ").split(",").join(", ").split(" "))),
                      (E = G.length)),
                      E !== O.length && (E = (G = (s || "").split(" ")).length),
                      a.plugin = l,
                      a.setRatio = u,
                      mt.lastIndex = 0,
                      d = 0;
                    d < E;
                    d++
                  )
                    if (((f = G[d]), (m = O[d]), (b = parseFloat(f)) || 0 === b)) a.appendXtra("", b, lt(m, b), m.replace(w, ""), R && -1 !== m.indexOf("px"), !0);
                    else if (r && mt.test(f))
                      (A = ")" + ((A = m.indexOf(")") + 1) ? m.substr(A) : "")),
                        (V = -1 !== m.indexOf("hsl") && q),
                        (T = m),
                        (f = pt(f, V)),
                        (m = pt(m, V)),
                        (P = f.length + m.length > 6) && !q && 0 === m[3]
                          ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(O[d]).join("transparent")))
                          : (q || (P = !1),
                            V
                              ? a
                                  .appendXtra(T.substr(0, T.indexOf("hsl")) + (P ? "hsla(" : "hsl("), f[0], lt(m[0], f[0]), ",", !1, !0)
                                  .appendXtra("", f[1], lt(m[1], f[1]), "%,", !1)
                                  .appendXtra("", f[2], lt(m[2], f[2]), P ? "%," : "%" + A, !1)
                              : a
                                  .appendXtra(T.substr(0, T.indexOf("rgb")) + (P ? "rgba(" : "rgb("), f[0], m[0] - f[0], ",", !0, !0)
                                  .appendXtra("", f[1], m[1] - f[1], ",", !0)
                                  .appendXtra("", f[2], m[2] - f[2], P ? "," : A, !0),
                            P && ((f = f.length < 4 ? 1 : f[3]), a.appendXtra("", f, (m.length < 4 ? 1 : m[3]) - f, A, !1))),
                        (mt.lastIndex = 0);
                    else if ((S = f.match(v))) {
                      if (!(x = m.match(w)) || x.length !== S.length) return a;
                      for (p = 0, _ = 0; _ < S.length; _++) (C = S[_]), (T = f.indexOf(C, p)), a.appendXtra(f.substr(p, T - p), Number(C), lt(x[_], C), "", R && "px" === f.substr(T + C.length, 2), 0 === _), (p = T + C.length);
                      a["xs" + a.l] += f.substr(p);
                    } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + m : m;
                  if (-1 !== n.indexOf("=") && a.data) {
                    for (A = a.xs0 + a.data.s, d = 1; d < a.l; d++) A += a["xs" + d] + a.data["xn" + d];
                    a.e = A + a["xs" + d];
                  }
                  return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                }),
                bt = 9;
              for ((u = wt.prototype).l = u.pr = 0; --bt > 0; ) (u["xn" + bt] = 0), (u["xs" + bt] = "");
              (u.xs0 = ""),
                (u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null),
                (u.appendXtra = function (t, e, i, n, r, s) {
                  var a = this,
                    o = a.l;
                  return (
                    (a["xs" + o] += s && (o || a["xs" + o]) ? " " + t : t || ""),
                    i || 0 === o || a.plugin
                      ? (a.l++,
                        (a.type = a.setRatio ? 2 : 1),
                        (a["xs" + a.l] = n || ""),
                        o > 0
                          ? ((a.data["xn" + o] = e + i), (a.rxp["xn" + o] = r), (a["xn" + o] = e), a.plugin || ((a.xfirst = new wt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr)), (a.xfirst.xs0 = 0)), a)
                          : ((a.data = { s: e + i }), (a.rxp = {}), (a.s = e), (a.c = i), (a.r = r), a))
                      : ((a["xs" + o] += e + (n || "")), a)
                  );
                });
              var Pt = function (t, e) {
                  (e = e || {}),
                    (this.p = (e.prefix && $(t)) || t),
                    (l[t] = l[this.p] = this),
                    (this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi)),
                    e.parser && (this.parse = e.parser),
                    (this.clrs = e.color),
                    (this.multi = e.multi),
                    (this.keyword = e.keyword),
                    (this.dflt = e.defaultValue),
                    (this.pr = e.priority || 0);
                },
                Tt = (Q._registerComplexSpecialProp = function (t, e, i) {
                  "object" != typeof e && (e = { parser: i });
                  var n,
                    r = t.split(","),
                    s = e.defaultValue;
                  for (i = i || [s], n = 0; n < r.length; n++) (e.prefix = 0 === n && e.prefix), (e.defaultValue = i[n] || s), new Pt(r[n], e);
                }),
                Ct = (Q._registerPluginProp = function (t) {
                  if (!l[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    Tt(t, {
                      parser: function (t, i, n, r, s, a, o) {
                        var u = h.com.greensock.plugins[e];
                        return u ? (u._cssRegister(), l[n].parse(t, i, n, r, s, a, o)) : (Z("Error: " + e + " js file not loaded."), s);
                      },
                    });
                  }
                });
              ((u = Pt.prototype).parseComplex = function (t, e, i, n, r, s) {
                var a,
                  o,
                  h,
                  l,
                  u,
                  c,
                  d = this.keyword;
                if ((this.multi && (M.test(i) || M.test(e) ? ((o = e.replace(M, "|").split("|")), (h = i.replace(M, "|").split("|"))) : d && ((o = [e]), (h = [i]))), h)) {
                  for (l = h.length > o.length ? h.length : o.length, a = 0; a < l; a++)
                    (e = o[a] = o[a] || this.dflt), (i = h[a] = h[a] || this.dflt), d && (u = e.indexOf(d)) !== (c = i.indexOf(d)) && (-1 === c ? (o[a] = o[a].split(d).join("")) : -1 === u && (o[a] += " " + d));
                  (e = o.join(", ")), (i = h.join(", "));
                }
                return xt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s);
              }),
                (u.parse = function (t, e, i, n, r, a, o) {
                  return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), r, a);
                }),
                (o.registerSpecialProp = function (t, e, i) {
                  Tt(t, {
                    parser: function (t, n, r, s, a, o, h) {
                      var l = new wt(t, r, 0, 0, a, 2, r, !1, i);
                      return (l.plugin = o), (l.setRatio = e(t, n, s._tween, r)), l;
                    },
                    priority: i,
                  });
                }),
                (o.useSVGTransformAttr = !0);
              var At,
                Vt,
                Gt,
                Ot,
                Et,
                Rt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Lt = $("transform"),
                It = K + "transform",
                Mt = $("transformOrigin"),
                kt = null !== $("perspective"),
                Nt = (Q.Transform = function () {
                  (this.perspective = parseFloat(o.defaultTransformPerspective) || 0), (this.force3D = !(!1 === o.defaultForce3D || !kt) && (o.defaultForce3D || "auto"));
                }),
                Dt = r.SVGElement,
                Ht = function (t, e, i) {
                  var n,
                    r = z.createElementNS("http://www.w3.org/2000/svg", t),
                    s = /([a-z])([A-Z])/g;
                  for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                  return e.appendChild(r), r;
                },
                Bt = z.documentElement || {},
                zt =
                  ((Et = m || (/Android/i.test(X) && !r.chrome)),
                  z.createElementNS &&
                    !Et &&
                    ((Vt = Ht("svg", Bt)),
                    (Ot = (Gt = Ht("rect", Vt, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                    (Gt.style[Mt] = "50% 50%"),
                    (Gt.style[Lt] = "scaleX(0.5)"),
                    (Et = Ot === Gt.getBoundingClientRect().width && !(p && kt)),
                    Bt.removeChild(Vt)),
                  Et),
                Ft = function (t, e, i, n, r, s) {
                  var a,
                    h,
                    l,
                    u,
                    c,
                    d,
                    _,
                    p,
                    f,
                    m,
                    g,
                    y,
                    v,
                    w,
                    S = t._gsTransform,
                    x = Xt(t, !0);
                  S && ((v = S.xOrigin), (w = S.yOrigin)),
                    (!n || (a = n.split(" ")).length < 2) &&
                      (0 === (_ = t.getBBox()).x &&
                        0 === _.y &&
                        _.width + _.height === 0 &&
                        (_ = {
                          x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                          y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                          width: 0,
                          height: 0,
                        }),
                      (a = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? (parseFloat(e[0]) / 100) * _.width : parseFloat(e[0])) + _.x, (-1 !== e[1].indexOf("%") ? (parseFloat(e[1]) / 100) * _.height : parseFloat(e[1])) + _.y])),
                    (i.xOrigin = u = parseFloat(a[0])),
                    (i.yOrigin = c = parseFloat(a[1])),
                    n &&
                      x !== Qt &&
                      ((d = x[0]),
                      (_ = x[1]),
                      (p = x[2]),
                      (f = x[3]),
                      (m = x[4]),
                      (g = x[5]),
                      (y = d * f - _ * p) && ((h = u * (f / y) + c * (-p / y) + (p * g - f * m) / y), (l = u * (-_ / y) + c * (d / y) - (d * g - _ * m) / y), (u = i.xOrigin = a[0] = h), (c = i.yOrigin = a[1] = l))),
                    S &&
                      (s && ((i.xOffset = S.xOffset), (i.yOffset = S.yOffset), (S = i)),
                      r || (!1 !== r && !1 !== o.defaultSmoothOrigin) ? ((h = u - v), (l = c - w), (S.xOffset += h * x[0] + l * x[2] - h), (S.yOffset += h * x[1] + l * x[3] - l)) : (S.xOffset = S.yOffset = 0)),
                    s || t.setAttribute("data-svg-origin", a.join(" "));
                },
                jt = function (t) {
                  var e,
                    i = F("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    r = this.nextSibling,
                    s = this.style.cssText;
                  if ((Bt.appendChild(i), i.appendChild(this), (this.style.display = "block"), t))
                    try {
                      (e = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = jt);
                    } catch (t) {}
                  else this._originalGetBBox && (e = this._originalGetBBox());
                  return r ? n.insertBefore(this, r) : n.appendChild(this), Bt.removeChild(i), (this.style.cssText = s), e;
                },
                Ut = function (t) {
                  return !(
                    !Dt ||
                    !t.getCTM ||
                    (t.parentNode && !t.ownerSVGElement) ||
                    !(function (t) {
                      try {
                        return t.getBBox();
                      } catch (e) {
                        return jt.call(t, !0);
                      }
                    })(t)
                  );
                },
                Qt = [1, 0, 0, 1, 0, 0],
                Xt = function (t, e) {
                  var i,
                    n,
                    r,
                    s,
                    a,
                    o,
                    h = t._gsTransform || new Nt(),
                    l = t.style;
                  if (
                    (Lt
                      ? (n = tt(t, It, null, !0))
                      : t.currentStyle && (n = (n = t.currentStyle.filter.match(L)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), h.x || 0, h.y || 0].join(",") : ""),
                    (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                    !Lt ||
                      (!(o = !J(t) || "none" === J(t).display) && t.parentNode) ||
                      (o && ((s = l.display), (l.display = "block")),
                      t.parentNode || ((a = 1), Bt.appendChild(t)),
                      (i = !(n = tt(t, It, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                      s ? (l.display = s) : o && Wt(l, "display"),
                      a && Bt.removeChild(t)),
                    (h.svg || (t.getCTM && Ut(t))) &&
                      (i && -1 !== (l[Lt] + "").indexOf("matrix") && ((n = l[Lt]), (i = 0)),
                      (r = t.getAttribute("transform")),
                      i && r && (-1 !== r.indexOf("matrix") ? ((n = r), (i = 0)) : -1 !== r.indexOf("translate") && ((n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (i = 0)))),
                    i)
                  )
                    return Qt;
                  for (r = (n || "").match(v) || [], bt = r.length; --bt > -1; ) (s = Number(r[bt])), (r[bt] = (a = s - (s |= 0)) ? ((1e5 * a + (a < 0 ? -0.5 : 0.5)) | 0) / 1e5 + s : s);
                  return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r;
                },
                qt = (Q.getTransform = function (t, i, n, r) {
                  if (t._gsTransform && n && !r) return t._gsTransform;
                  var s,
                    a,
                    h,
                    l,
                    u,
                    c,
                    d = (n && t._gsTransform) || new Nt(),
                    _ = d.scaleX < 0,
                    p = (kt && (parseFloat(tt(t, Mt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin)) || 0,
                    f = parseFloat(o.defaultTransformPerspective) || 0;
                  if (((d.svg = !(!t.getCTM || !Ut(t))), d.svg && (Ft(t, tt(t, Mt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), (At = o.useSVGTransformAttr || zt)), (s = Xt(t)) !== Qt)) {
                    if (16 === s.length) {
                      var m,
                        g,
                        y,
                        v,
                        w,
                        S = s[0],
                        x = s[1],
                        b = s[2],
                        P = s[3],
                        T = s[4],
                        C = s[5],
                        A = s[6],
                        V = s[7],
                        G = s[8],
                        O = s[9],
                        E = s[10],
                        R = s[12],
                        L = s[13],
                        I = s[14],
                        M = s[11],
                        k = Math.atan2(A, E);
                      d.zOrigin && ((R = G * (I = -d.zOrigin) - s[12]), (L = O * I - s[13]), (I = E * I + d.zOrigin - s[14])),
                        (d.rotationX = k * D),
                        k &&
                          ((m = T * (v = Math.cos(-k)) + G * (w = Math.sin(-k))), (g = C * v + O * w), (y = A * v + E * w), (G = T * -w + G * v), (O = C * -w + O * v), (E = A * -w + E * v), (M = V * -w + M * v), (T = m), (C = g), (A = y)),
                        (k = Math.atan2(-b, E)),
                        (d.rotationY = k * D),
                        k && ((g = x * (v = Math.cos(-k)) - O * (w = Math.sin(-k))), (y = b * v - E * w), (O = x * w + O * v), (E = b * w + E * v), (M = P * w + M * v), (S = m = S * v - G * w), (x = g), (b = y)),
                        (k = Math.atan2(x, S)),
                        (d.rotation = k * D),
                        k && ((m = S * (v = Math.cos(k)) + x * (w = Math.sin(k))), (g = T * v + C * w), (y = G * v + O * w), (x = x * v - S * w), (C = C * v - T * w), (O = O * v - G * w), (S = m), (T = g), (G = y)),
                        d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && ((d.rotationX = d.rotation = 0), (d.rotationY = 180 - d.rotationY)),
                        (k = Math.atan2(T, C)),
                        (d.scaleX = ((1e5 * Math.sqrt(S * S + x * x + b * b) + 0.5) | 0) / 1e5),
                        (d.scaleY = ((1e5 * Math.sqrt(C * C + A * A) + 0.5) | 0) / 1e5),
                        (d.scaleZ = ((1e5 * Math.sqrt(G * G + O * O + E * E) + 0.5) | 0) / 1e5),
                        (S /= d.scaleX),
                        (T /= d.scaleY),
                        (x /= d.scaleX),
                        (C /= d.scaleY),
                        Math.abs(k) > 2e-5 ? ((d.skewX = k * D), (T = 0), "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(k))) : (d.skewX = 0),
                        (d.perspective = M ? 1 / (M < 0 ? -M : M) : 0),
                        (d.x = R),
                        (d.y = L),
                        (d.z = I),
                        d.svg && ((d.x -= d.xOrigin - (d.xOrigin * S - d.yOrigin * T)), (d.y -= d.yOrigin - (d.yOrigin * x - d.xOrigin * C)));
                    } else if (!kt || r || !s.length || d.x !== s[4] || d.y !== s[5] || (!d.rotationX && !d.rotationY)) {
                      var N = s.length >= 6,
                        H = N ? s[0] : 1,
                        B = s[1] || 0,
                        z = s[2] || 0,
                        F = N ? s[3] : 1;
                      (d.x = s[4] || 0),
                        (d.y = s[5] || 0),
                        (h = Math.sqrt(H * H + B * B)),
                        (l = Math.sqrt(F * F + z * z)),
                        (u = H || B ? Math.atan2(B, H) * D : d.rotation || 0),
                        (c = z || F ? Math.atan2(z, F) * D + u : d.skewX || 0),
                        (d.scaleX = h),
                        (d.scaleY = l),
                        (d.rotation = u),
                        (d.skewX = c),
                        kt && ((d.rotationX = d.rotationY = d.z = 0), (d.perspective = f), (d.scaleZ = 1)),
                        d.svg && ((d.x -= d.xOrigin - (d.xOrigin * H + d.yOrigin * z)), (d.y -= d.yOrigin - (d.xOrigin * B + d.yOrigin * F)));
                    }
                    for (a in (Math.abs(d.skewX) > 90 &&
                      Math.abs(d.skewX) < 270 &&
                      (_ ? ((d.scaleX *= -1), (d.skewX += d.rotation <= 0 ? 180 : -180), (d.rotation += d.rotation <= 0 ? 180 : -180)) : ((d.scaleY *= -1), (d.skewX += d.skewX <= 0 ? 180 : -180))),
                    (d.zOrigin = p),
                    d))
                      d[a] < 2e-5 && d[a] > -2e-5 && (d[a] = 0);
                  }
                  return (
                    n &&
                      ((t._gsTransform = d),
                      d.svg &&
                        (At && t.style[Lt]
                          ? e.delayedCall(0.001, function () {
                              Wt(t.style, Lt);
                            })
                          : !At &&
                            t.getAttribute("transform") &&
                            e.delayedCall(0.001, function () {
                              t.removeAttribute("transform");
                            }))),
                    d
                  );
                }),
                Yt = function (t) {
                  var e,
                    i,
                    n = this.data,
                    r = -n.rotation * N,
                    s = r + n.skewX * N,
                    a = ((Math.cos(r) * n.scaleX * 1e5) | 0) / 1e5,
                    o = ((Math.sin(r) * n.scaleX * 1e5) | 0) / 1e5,
                    h = ((Math.sin(s) * -n.scaleY * 1e5) | 0) / 1e5,
                    l = ((Math.cos(s) * n.scaleY * 1e5) | 0) / 1e5,
                    u = this.t.style,
                    c = this.t.currentStyle;
                  if (c) {
                    (i = o), (o = -h), (h = -i), (e = c.filter), (u.filter = "");
                    var d,
                      _,
                      p = this.t.offsetWidth,
                      f = this.t.offsetHeight,
                      g = "absolute" !== c.position,
                      y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + h + ", M22=" + l,
                      v = n.x + (p * n.xPercent) / 100,
                      w = n.y + (f * n.yPercent) / 100;
                    if (
                      (null != n.ox && ((v += (d = (n.oxp ? p * n.ox * 0.01 : n.ox) - p / 2) - (d * a + (_ = (n.oyp ? f * n.oy * 0.01 : n.oy) - f / 2) * o)), (w += _ - (d * h + _ * l))),
                      (y += g ? ", Dx=" + ((d = p / 2) - (d * a + (_ = f / 2) * o) + v) + ", Dy=" + (_ - (d * h + _ * l) + w) + ")" : ", sizingMethod='auto expand')"),
                      -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? (u.filter = e.replace(I, y)) : (u.filter = y + " " + e),
                      (0 !== t && 1 !== t) ||
                        (1 === a && 0 === o && 0 === h && 1 === l && ((g && -1 === y.indexOf("Dx=0, Dy=0")) || (P.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")))),
                      !g)
                    ) {
                      var S,
                        x,
                        T,
                        C = m < 8 ? 1 : -1;
                      for (
                        d = n.ieOffsetX || 0,
                          _ = n.ieOffsetY || 0,
                          n.ieOffsetX = Math.round((p - ((a < 0 ? -a : a) * p + (o < 0 ? -o : o) * f)) / 2 + v),
                          n.ieOffsetY = Math.round((f - ((l < 0 ? -l : l) * f + (h < 0 ? -h : h) * p)) / 2 + w),
                          bt = 0;
                        bt < 4;
                        bt++
                      )
                        (T =
                          (i = -1 !== (S = c[(x = at[bt])]).indexOf("px") ? parseFloat(S) : et(this.t, x, parseFloat(S), S.replace(b, "")) || 0) !== n[x]
                            ? bt < 2
                              ? -n.ieOffsetX
                              : -n.ieOffsetY
                            : bt < 2
                            ? d - n.ieOffsetX
                            : _ - n.ieOffsetY),
                          (u[x] = (n[x] = Math.round(i - T * (0 === bt || 2 === bt ? 1 : C))) + "px");
                    }
                  }
                },
                Zt = (Q.set3DTransformRatio = Q.setTransformRatio = function (t) {
                  var e,
                    i,
                    n,
                    r,
                    s,
                    a,
                    o,
                    h,
                    l,
                    u,
                    c,
                    d,
                    _,
                    f,
                    m,
                    g,
                    y,
                    v,
                    w,
                    S,
                    x,
                    b = this.data,
                    P = this.t.style,
                    T = b.rotation,
                    C = b.rotationX,
                    A = b.rotationY,
                    V = b.scaleX,
                    G = b.scaleY,
                    O = b.scaleZ,
                    E = b.x,
                    R = b.y,
                    L = b.z,
                    I = b.svg,
                    M = b.perspective,
                    k = b.force3D,
                    D = b.skewY,
                    H = b.skewX;
                  if ((D && ((H += D), (T += D)), !((((1 !== t && 0 !== t) || "auto" !== k || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && k) || L || M || A || C || 1 !== O) || (At && I) || !kt))
                    T || H || I
                      ? ((T *= N),
                        (S = H * N),
                        (x = 1e5),
                        (i = Math.cos(T) * V),
                        (s = Math.sin(T) * V),
                        (n = Math.sin(T - S) * -G),
                        (a = Math.cos(T - S) * G),
                        S && "simple" === b.skewType && ((e = Math.tan(S - D * N)), (n *= e = Math.sqrt(1 + e * e)), (a *= e), D && ((e = Math.tan(D * N)), (i *= e = Math.sqrt(1 + e * e)), (s *= e))),
                        I &&
                          ((E += b.xOrigin - (b.xOrigin * i + b.yOrigin * n) + b.xOffset),
                          (R += b.yOrigin - (b.xOrigin * s + b.yOrigin * a) + b.yOffset),
                          At && (b.xPercent || b.yPercent) && ((m = this.t.getBBox()), (E += 0.01 * b.xPercent * m.width), (R += 0.01 * b.yPercent * m.height)),
                          E < (m = 1e-6) && E > -m && (E = 0),
                          R < m && R > -m && (R = 0)),
                        (w = ((i * x) | 0) / x + "," + ((s * x) | 0) / x + "," + ((n * x) | 0) / x + "," + ((a * x) | 0) / x + "," + E + "," + R + ")"),
                        I && At ? this.t.setAttribute("transform", "matrix(" + w) : (P[Lt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + w))
                      : (P[Lt] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix(" : "matrix(") + V + ",0,0," + G + "," + E + "," + R + ")");
                  else {
                    if ((p && (V < (m = 1e-4) && V > -m && (V = O = 2e-5), G < m && G > -m && (G = O = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), T || H))
                      (T *= N),
                        (g = i = Math.cos(T)),
                        (y = s = Math.sin(T)),
                        H &&
                          ((T -= H * N),
                          (g = Math.cos(T)),
                          (y = Math.sin(T)),
                          "simple" === b.skewType && ((e = Math.tan((H - D) * N)), (g *= e = Math.sqrt(1 + e * e)), (y *= e), b.skewY && ((e = Math.tan(D * N)), (i *= e = Math.sqrt(1 + e * e)), (s *= e)))),
                        (n = -y),
                        (a = g);
                    else {
                      if (!(A || C || 1 !== O || M || I))
                        return void (P[Lt] =
                          (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + R + "px," + L + "px)" + (1 !== V || 1 !== G ? " scale(" + V + "," + G + ")" : ""));
                      (i = a = 1), (n = s = 0);
                    }
                    (u = 1),
                      (r = o = h = l = c = d = 0),
                      (_ = M ? -1 / M : 0),
                      (f = b.zOrigin),
                      (m = 1e-6),
                      ",",
                      "0",
                      (T = A * N) && ((g = Math.cos(T)), (h = -(y = Math.sin(T))), (c = _ * -y), (r = i * y), (o = s * y), (u = g), (_ *= g), (i *= g), (s *= g)),
                      (T = C * N) && ((e = n * (g = Math.cos(T)) + r * (y = Math.sin(T))), (v = a * g + o * y), (l = u * y), (d = _ * y), (r = n * -y + r * g), (o = a * -y + o * g), (u *= g), (_ *= g), (n = e), (a = v)),
                      1 !== O && ((r *= O), (o *= O), (u *= O), (_ *= O)),
                      1 !== G && ((n *= G), (a *= G), (l *= G), (d *= G)),
                      1 !== V && ((i *= V), (s *= V), (h *= V), (c *= V)),
                      (f || I) &&
                        (f && ((E += r * -f), (R += o * -f), (L += u * -f + f)),
                        I && ((E += b.xOrigin - (b.xOrigin * i + b.yOrigin * n) + b.xOffset), (R += b.yOrigin - (b.xOrigin * s + b.yOrigin * a) + b.yOffset)),
                        E < m && E > -m && (E = "0"),
                        R < m && R > -m && (R = "0"),
                        L < m && L > -m && (L = 0)),
                      (w = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d("),
                      (w += (i < m && i > -m ? "0" : i) + "," + (s < m && s > -m ? "0" : s) + "," + (h < m && h > -m ? "0" : h)),
                      (w += "," + (c < m && c > -m ? "0" : c) + "," + (n < m && n > -m ? "0" : n) + "," + (a < m && a > -m ? "0" : a)),
                      C || A || 1 !== O
                        ? ((w += "," + (l < m && l > -m ? "0" : l) + "," + (d < m && d > -m ? "0" : d) + "," + (r < m && r > -m ? "0" : r)),
                          (w += "," + (o < m && o > -m ? "0" : o) + "," + (u < m && u > -m ? "0" : u) + "," + (_ < m && _ > -m ? "0" : _) + ","))
                        : (w += ",0,0,0,0,1,0,"),
                      (w += E + "," + R + "," + L + "," + (M ? 1 + -L / M : 1) + ")"),
                      (P[Lt] = w);
                  }
                });
              ((u = Nt.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0),
                (u.scaleX = u.scaleY = u.scaleZ = 1),
                Tt(
                  "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                  {
                    parser: function (t, e, i, n, r, a, h) {
                      if (n._lastParsedTransform === h) return r;
                      n._lastParsedTransform = h;
                      var l,
                        u = h.scale && "function" == typeof h.scale ? h.scale : 0;
                      "function" == typeof h[i] && ((l = h[i]), (h[i] = e)), u && (h.scale = u(y, t));
                      var c,
                        d,
                        _,
                        p,
                        f,
                        m,
                        v,
                        w,
                        S,
                        x = t._gsTransform,
                        b = t.style,
                        P = Rt.length,
                        T = h,
                        C = {},
                        A = qt(t, s, !0, T.parseTransform),
                        V = T.transform && ("function" == typeof T.transform ? T.transform(y, g) : T.transform);
                      if (((A.skewType = T.skewType || A.skewType || o.defaultSkewType), (n._transform = A), V && "string" == typeof V && Lt))
                        ((d = j.style)[Lt] = V),
                          (d.display = "block"),
                          (d.position = "absolute"),
                          z.body.appendChild(j),
                          (c = qt(j, null, !1)),
                          "simple" === A.skewType && (c.scaleY *= Math.cos(c.skewX * N)),
                          A.svg &&
                            ((m = A.xOrigin),
                            (v = A.yOrigin),
                            (c.x -= A.xOffset),
                            (c.y -= A.yOffset),
                            (T.transformOrigin || T.svgOrigin) &&
                              ((V = {}), Ft(t, ht(T.transformOrigin), V, T.svgOrigin, T.smoothOrigin, !0), (m = V.xOrigin), (v = V.yOrigin), (c.x -= V.xOffset - A.xOffset), (c.y -= V.yOffset - A.yOffset)),
                            (m || v) && ((w = Xt(j, !0)), (c.x -= m - (m * w[0] + v * w[2])), (c.y -= v - (m * w[1] + v * w[3])))),
                          z.body.removeChild(j),
                          c.perspective || (c.perspective = A.perspective),
                          null != T.xPercent && (c.xPercent = ut(T.xPercent, A.xPercent)),
                          null != T.yPercent && (c.yPercent = ut(T.yPercent, A.yPercent));
                      else if ("object" == typeof T) {
                        if (
                          ((c = {
                            scaleX: ut(null != T.scaleX ? T.scaleX : T.scale, A.scaleX),
                            scaleY: ut(null != T.scaleY ? T.scaleY : T.scale, A.scaleY),
                            scaleZ: ut(T.scaleZ, A.scaleZ),
                            x: ut(T.x, A.x),
                            y: ut(T.y, A.y),
                            z: ut(T.z, A.z),
                            xPercent: ut(T.xPercent, A.xPercent),
                            yPercent: ut(T.yPercent, A.yPercent),
                            perspective: ut(T.transformPerspective, A.perspective),
                          }),
                          null != (f = T.directionalRotation))
                        )
                          if ("object" == typeof f) for (d in f) T[d] = f[d];
                          else T.rotation = f;
                        "string" == typeof T.x && -1 !== T.x.indexOf("%") && ((c.x = 0), (c.xPercent = ut(T.x, A.xPercent))),
                          "string" == typeof T.y && -1 !== T.y.indexOf("%") && ((c.y = 0), (c.yPercent = ut(T.y, A.yPercent))),
                          (c.rotation = ct("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : A.rotation, A.rotation, "rotation", C)),
                          kt &&
                            ((c.rotationX = ct("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", C)),
                            (c.rotationY = ct("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", C))),
                          (c.skewX = ct(T.skewX, A.skewX)),
                          (c.skewY = ct(T.skewY, A.skewY));
                      }
                      for (
                        kt && null != T.force3D && ((A.force3D = T.force3D), (p = !0)), (_ = A.force3D || A.z || A.rotationX || A.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == T.scale || (c.scaleZ = 1);
                        --P > -1;

                      )
                        ((V = c[(S = Rt[P])] - A[S]) > 1e-6 || V < -1e-6 || null != T[S] || null != H[S]) && ((p = !0), (r = new wt(A, S, A[S], V, r)), S in C && (r.e = C[S]), (r.xs0 = 0), (r.plugin = a), n._overwriteProps.push(r.n));
                      return (
                        (V = T.transformOrigin),
                        A.svg &&
                          (V || T.svgOrigin) &&
                          ((m = A.xOffset),
                          (v = A.yOffset),
                          Ft(t, ht(V), c, T.svgOrigin, T.smoothOrigin),
                          (r = St(A, "xOrigin", (x ? A : c).xOrigin, c.xOrigin, r, "transformOrigin")),
                          (r = St(A, "yOrigin", (x ? A : c).yOrigin, c.yOrigin, r, "transformOrigin")),
                          (m === A.xOffset && v === A.yOffset) || ((r = St(A, "xOffset", x ? m : A.xOffset, A.xOffset, r, "transformOrigin")), (r = St(A, "yOffset", x ? v : A.yOffset, A.yOffset, r, "transformOrigin"))),
                          (V = "0px 0px")),
                        (V || (kt && _ && A.zOrigin)) &&
                          (Lt
                            ? ((p = !0),
                              (S = Mt),
                              (V = (V || tt(t, S, s, !1, "50% 50%")) + ""),
                              ((r = new wt(b, S, 0, 0, r, -1, "transformOrigin")).b = b[S]),
                              (r.plugin = a),
                              kt
                                ? ((d = A.zOrigin),
                                  (V = V.split(" ")),
                                  (A.zOrigin = (V.length > 2 && (0 === d || "0px" !== V[2]) ? parseFloat(V[2]) : d) || 0),
                                  (r.xs0 = r.e = V[0] + " " + (V[1] || "50%") + " 0px"),
                                  ((r = new wt(A, "zOrigin", 0, 0, r, -1, r.n)).b = d),
                                  (r.xs0 = r.e = A.zOrigin))
                                : (r.xs0 = r.e = V))
                            : ht(V + "", A)),
                        p && (n._transformType = (A.svg && At) || (!_ && 3 !== this._transformType) ? 2 : 3),
                        l && (h[i] = l),
                        u && (h.scale = u),
                        r
                      );
                    },
                    prefix: !0,
                  }
                ),
                Tt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                Tt("borderRadius", {
                  defaultValue: "0px",
                  parser: function (t, e, i, r, a, o) {
                    e = this.format(e);
                    var h,
                      l,
                      u,
                      c,
                      d,
                      _,
                      p,
                      f,
                      m,
                      g,
                      y,
                      v,
                      w,
                      S,
                      x,
                      b,
                      P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                      T = t.style;
                    for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), h = e.split(" "), l = 0; l < P.length; l++)
                      this.p.indexOf("border") && (P[l] = $(P[l])),
                        -1 !== (d = c = tt(t, P[l], s, !1, "0px")).indexOf(" ") && ((d = (c = d.split(" "))[0]), (c = c[1])),
                        (_ = u = h[l]),
                        (p = parseFloat(d)),
                        (v = d.substr((p + "").length)),
                        (w = "=" === _.charAt(1))
                          ? ((f = parseInt(_.charAt(0) + "1", 10)), (_ = _.substr(2)), (f *= parseFloat(_)), (y = _.substr((f + "").length - (f < 0 ? 1 : 0)) || ""))
                          : ((f = parseFloat(_)), (y = _.substr((f + "").length))),
                        "" === y && (y = n[i] || v),
                        y !== v &&
                          ((S = et(t, "borderLeft", p, v)),
                          (x = et(t, "borderTop", p, v)),
                          "%" === y ? ((d = (S / m) * 100 + "%"), (c = (x / g) * 100 + "%")) : "em" === y ? ((d = S / (b = et(t, "borderLeft", 1, "em")) + "em"), (c = x / b + "em")) : ((d = S + "px"), (c = x + "px")),
                          w && ((_ = parseFloat(d) + f + y), (u = parseFloat(c) + f + y))),
                        (a = xt(T, P[l], d + " " + c, _ + " " + u, !1, "0px", a));
                    return a;
                  },
                  prefix: !0,
                  formatter: gt("0px 0px 0px 0px", !1, !0),
                }),
                Tt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                  defaultValue: "0px",
                  parser: function (t, e, i, n, r, a) {
                    return xt(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r);
                  },
                  prefix: !0,
                  formatter: gt("0px 0px", !1, !0),
                }),
                Tt("backgroundPosition", {
                  defaultValue: "0 0",
                  parser: function (t, e, i, n, r, a) {
                    var o,
                      h,
                      l,
                      u,
                      c,
                      d,
                      _ = "background-position",
                      p = s || J(t, null),
                      f = this.format((p ? (m ? p.getPropertyValue(_ + "-x") + " " + p.getPropertyValue(_ + "-y") : p.getPropertyValue(_)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                      g = this.format(e);
                    if ((-1 !== f.indexOf("%")) != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (d = tt(t, "backgroundImage").replace(O, "")) && "none" !== d) {
                      for (o = f.split(" "), h = g.split(" "), U.setAttribute("src", d), l = 2; --l > -1; )
                        (u = -1 !== (f = o[l]).indexOf("%")) !== (-1 !== h[l].indexOf("%")) &&
                          ((c = 0 === l ? t.offsetWidth - U.width : t.offsetHeight - U.height), (o[l] = u ? (parseFloat(f) / 100) * c + "px" : (parseFloat(f) / c) * 100 + "%"));
                      f = o.join(" ");
                    }
                    return this.parseComplex(t.style, f, g, r, a);
                  },
                  formatter: ht,
                }),
                Tt("backgroundSize", {
                  defaultValue: "0 0",
                  formatter: function (t) {
                    return ht(-1 === (t += "").indexOf(" ") ? t + " " + t : t);
                  },
                }),
                Tt("perspective", { defaultValue: "0px", prefix: !0 }),
                Tt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                Tt("transformStyle", { prefix: !0 }),
                Tt("backfaceVisibility", { prefix: !0 }),
                Tt("userSelect", { prefix: !0 }),
                Tt("margin", { parser: yt("marginTop,marginRight,marginBottom,marginLeft") }),
                Tt("padding", { parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                Tt("clip", {
                  defaultValue: "rect(0px,0px,0px,0px)",
                  parser: function (t, e, i, n, r, a) {
                    var o, h, l;
                    return (
                      m < 9
                        ? ((h = t.currentStyle), (l = m < 8 ? " " : ","), (o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")"), (e = this.format(e).split(",").join(l)))
                        : ((o = this.format(tt(t, this.p, s, !1, this.dflt))), (e = this.format(e))),
                      this.parseComplex(t.style, o, e, r, a)
                    );
                  },
                }),
                Tt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                Tt("autoRound,strictUnits", {
                  parser: function (t, e, i, n, r) {
                    return r;
                  },
                }),
                Tt("border", {
                  defaultValue: "0px solid #000",
                  parser: function (t, e, i, n, r, a) {
                    var o = tt(t, "borderTopWidth", s, !1, "0px"),
                      h = this.format(e).split(" "),
                      l = h[0].replace(b, "");
                    return (
                      "px" !== l && (o = parseFloat(o) / et(t, "borderTopWidth", 1, l) + l),
                      this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), h.join(" "), r, a)
                    );
                  },
                  color: !0,
                  formatter: function (t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0];
                  },
                }),
                Tt("borderWidth", { parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                Tt("float,cssFloat,styleFloat", {
                  parser: function (t, e, i, n, r, s) {
                    var a = t.style,
                      o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                    return new wt(a, o, 0, 0, r, -1, i, !1, 0, a[o], e);
                  },
                });
              var Kt = function (t) {
                var e,
                  i = this.t,
                  n = i.filter || tt(this.data, "filter") || "",
                  r = (this.s + this.c * t) | 0;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), (e = !tt(this.data, "filter"))) : ((i.filter = n.replace(C, "")), (e = !0))),
                  e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? (0 === r && this.xn1) || (i.filter = n + " alpha(opacity=" + r + ")") : (i.filter = n.replace(P, "opacity=" + r)));
              };
              Tt("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (t, e, i, n, r, a) {
                  var o = parseFloat(tt(t, "opacity", s, !1, "1")),
                    h = t.style,
                    l = "autoAlpha" === i;
                  return (
                    "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                    l && 1 === o && "hidden" === tt(t, "visibility", s) && 0 !== e && (o = 0),
                    q
                      ? (r = new wt(h, "opacity", o, e - o, r))
                      : (((r = new wt(h, "opacity", 100 * o, 100 * (e - o), r)).xn1 = l ? 1 : 0),
                        (h.zoom = 1),
                        (r.type = 2),
                        (r.b = "alpha(opacity=" + r.s + ")"),
                        (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                        (r.data = t),
                        (r.plugin = a),
                        (r.setRatio = Kt)),
                    l && (((r = new wt(h, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit"), n._overwriteProps.push(r.n), n._overwriteProps.push(i)),
                    r
                  );
                },
              });
              var Wt = function (t, e) {
                  e && (t.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), t.removeProperty(e.replace(V, "-$1").toLowerCase())) : t.removeAttribute(e));
                },
                $t = function (t) {
                  if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e; ) e.v ? (i[e.p] = e.v) : Wt(i, e.p), (e = e._next);
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                  } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                };
              Tt("className", {
                parser: function (t, e, n, r, a, o, h) {
                  var l,
                    u,
                    c,
                    d,
                    _,
                    p = t.getAttribute("class") || "",
                    f = t.style.cssText;
                  if ((((a = r._classNamePT = new wt(t, n, 0, 0, a, 2)).setRatio = $t), (a.pr = -11), (i = !0), (a.b = p), (u = nt(t, s)), (c = t._gsClassPT))) {
                    for (d = {}, _ = c.data; _; ) (d[_.p] = 1), (_ = _._next);
                    c.setRatio(1);
                  }
                  return (
                    (t._gsClassPT = a),
                    (a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                    t.setAttribute("class", a.e),
                    (l = rt(t, u, nt(t), h, d)),
                    t.setAttribute("class", p),
                    (a.data = l.firstMPT),
                    (t.style.cssText = f),
                    (a = a.xfirst = r.parse(t, l.difs, a, o))
                  );
                },
              });
              var Jt = function (t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                  var e,
                    i,
                    n,
                    r,
                    s,
                    a = this.t.style,
                    o = l.transform.parse;
                  if ("all" === this.e) (a.cssText = ""), (r = !0);
                  else for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1; ) (i = e[n]), l[i] && (l[i].parse === o ? (r = !0) : (i = "transformOrigin" === i ? Mt : l[i].p)), Wt(a, i);
                  r && (Wt(a, Lt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                }
              };
              for (
                Tt("clearProps", {
                  parser: function (t, e, n, r, s) {
                    return ((s = new wt(t, n, 0, 0, s, 2)).setRatio = Jt), (s.e = e), (s.pr = -10), (s.data = r._tween), (i = !0), s;
                  },
                }),
                  u = "bezier,throwProps,physicsProps,physics2D".split(","),
                  bt = u.length;
                bt--;

              )
                Ct(u[bt]);
              ((u = o.prototype)._firstPT = u._lastParsedTransform = u._transform = null),
                (u._onInitTween = function (t, e, r, h) {
                  if (!t.nodeType) return !1;
                  (this._target = g = t), (this._tween = r), (this._vars = e), (y = h), (c = e.autoRound), (i = !1), (n = e.suffixMap || o.suffixMap), (s = J(t, "")), (a = this._overwriteProps);
                  var u,
                    p,
                    m,
                    v,
                    w,
                    S,
                    x,
                    b,
                    P,
                    C = t.style;
                  if (
                    (d && "" === C.zIndex && (("auto" !== (u = tt(t, "zIndex", s)) && "" !== u) || this._addLazySet(C, "zIndex", 0)),
                    "string" == typeof e && ((v = C.cssText), (u = nt(t, s)), (C.cssText = v + ";" + e), (u = rt(t, u, nt(t)).difs), !q && T.test(e) && (u.opacity = parseFloat(RegExp.$1)), (e = u), (C.cssText = v)),
                    e.className ? (this._firstPT = p = l.className.parse(t, e.className, "className", this, null, null, e)) : (this._firstPT = p = this.parse(t, e, null)),
                    this._transformType)
                  ) {
                    for (
                      P = 3 === this._transformType,
                        Lt
                          ? _ &&
                            ((d = !0),
                            "" === C.zIndex && (("auto" !== (x = tt(t, "zIndex", s)) && "" !== x) || this._addLazySet(C, "zIndex", 0)),
                            f && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden")))
                          : (C.zoom = 1),
                        m = p;
                      m && m._next;

                    )
                      m = m._next;
                    (b = new wt(t, "transform", 0, 0, null, 2)), this._linkCSSP(b, null, m), (b.setRatio = Lt ? Zt : Yt), (b.data = this._transform || qt(t, s, !0)), (b.tween = r), (b.pr = -1), a.pop();
                  }
                  if (i) {
                    for (; p; ) {
                      for (S = p._next, m = v; m && m.pr > p.pr; ) m = m._next;
                      (p._prev = m ? m._prev : w) ? (p._prev._next = p) : (v = p), (p._next = m) ? (m._prev = p) : (w = p), (p = S);
                    }
                    this._firstPT = v;
                  }
                  return !0;
                }),
                (u.parse = function (t, e, i, r) {
                  var a,
                    o,
                    h,
                    u,
                    d,
                    _,
                    p,
                    f,
                    m,
                    v,
                    w = t.style;
                  for (a in e) {
                    if (("function" == typeof (_ = e[a]) && (_ = _(y, g)), (o = l[a]))) i = o.parse(t, _, a, this, i, r, e);
                    else {
                      if ("--" === a.substr(0, 2)) {
                        this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(a) + "", _ + "", a, !1, a);
                        continue;
                      }
                      (d = tt(t, a, s) + ""),
                        (m = "string" == typeof _),
                        "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || (m && A.test(_))
                          ? (m || (_ = ((_ = pt(_)).length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), (i = xt(w, a, d, _, !0, "transparent", i, 0, r)))
                          : m && k.test(_)
                          ? (i = xt(w, a, d, _, !0, null, i, 0, r))
                          : ((p = (h = parseFloat(d)) || 0 === h ? d.substr((h + "").length) : ""),
                            ("" !== d && "auto" !== d) || ("width" === a || "height" === a ? ((h = ot(t, a, s)), (p = "px")) : "left" === a || "top" === a ? ((h = it(t, a, s)), (p = "px")) : ((h = "opacity" !== a ? 0 : 1), (p = ""))),
                            (v = m && "=" === _.charAt(1)) ? ((u = parseInt(_.charAt(0) + "1", 10)), (_ = _.substr(2)), (u *= parseFloat(_)), (f = _.replace(b, ""))) : ((u = parseFloat(_)), (f = m ? _.replace(b, "") : "")),
                            "" === f && (f = a in n ? n[a] : p),
                            (_ = u || 0 === u ? (v ? u + h : u) + f : e[a]),
                            p !== f &&
                              (("" === f && "lineHeight" !== a) ||
                                ((u || 0 === u) &&
                                  h &&
                                  ((h = et(t, a, h, p)),
                                  "%" === f
                                    ? ((h /= et(t, a, 100, "%") / 100), !0 !== e.strictUnits && (d = h + "%"))
                                    : "em" === f || "rem" === f || "vw" === f || "vh" === f
                                    ? (h /= et(t, a, 1, f))
                                    : "px" !== f && ((u = et(t, a, u, f)), (f = "px")),
                                  v && (u || 0 === u) && (_ = u + h + f)))),
                            v && (u += h),
                            (!h && 0 !== h) || (!u && 0 !== u)
                              ? void 0 !== w[a] && (_ || (_ + "" != "NaN" && null != _))
                                ? ((i = new wt(w, a, u || h || 0, 0, i, -1, a, !1, 0, d, _)).xs0 = "none" !== _ || ("display" !== a && -1 === a.indexOf("Style")) ? _ : d)
                                : Z("invalid " + a + " tween value: " + e[a])
                              : ((i = new wt(w, a, h, u - h, i, 0, a, !1 !== c && ("px" === f || "zIndex" === a), 0, d, _)).xs0 = f));
                    }
                    r && i && !i.plugin && (i.plugin = r);
                  }
                  return i;
                }),
                (u.setRatio = function (t) {
                  var e,
                    i,
                    n,
                    r = this._firstPT;
                  if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                    if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                      for (; r; ) {
                        if (((e = r.c * t + r.s), r.r ? (e = Math.round(e)) : e < 1e-6 && e > -1e-6 && (e = 0), r.type))
                          if (1 === r.type)
                            if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                            else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                              for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                              r.t[r.p] = i;
                            }
                          else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next;
                      }
                    else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t), (r = r._next);
                  else
                    for (; r; ) {
                      if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                          if (((e = Math.round(r.s + r.c)), r.type)) {
                            if (1 === r.type) {
                              for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                              r.t[r.p] = i;
                            }
                          } else r.t[r.p] = e + r.xs0;
                        else r.t[r.p] = r.e;
                      else r.setRatio(t);
                      r = r._next;
                    }
                }),
                (u._enableTransforms = function (t) {
                  (this._transform = this._transform || qt(this._target, s, !0)), (this._transformType = (this._transform.svg && At) || (!t && 3 !== this._transformType) ? 2 : 3);
                });
              var te = function (t) {
                (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
              };
              (u._addLazySet = function (t, e, i) {
                var n = (this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2));
                (n.e = i), (n.setRatio = te), (n.data = this);
              }),
                (u._linkCSSP = function (t, e, i, n) {
                  return (
                    t &&
                      (e && (e._prev = t),
                      t._next && (t._next._prev = t._prev),
                      t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (n = !0)),
                      i ? (i._next = t) : n || null !== this._firstPT || (this._firstPT = t),
                      (t._next = e),
                      (t._prev = i)),
                    t
                  );
                }),
                (u._mod = function (t) {
                  for (var e = this._firstPT; e; ) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), (e = e._next);
                }),
                (u._kill = function (e) {
                  var i,
                    n,
                    r,
                    s = e;
                  if (e.autoAlpha || e.alpha) {
                    for (n in ((s = {}), e)) s[n] = e[n];
                    (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
                  }
                  for (
                    e.className &&
                      (i = this._classNamePT) &&
                      ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), (this._classNamePT = null)),
                      i = this._firstPT;
                    i;

                  )
                    i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), (n = i.plugin)), (i = i._next);
                  return t.prototype._kill.call(this, s);
                });
              var ee = function (t, e, i) {
                var n, r, s, a;
                if (t.slice) for (r = t.length; --r > -1; ) ee(t[r], e, i);
                else for (r = (n = t.childNodes).length; --r > -1; ) (a = (s = n[r]).type), s.style && (e.push(nt(s)), i && i.push(s)), (1 !== a && 9 !== a && 11 !== a) || !s.childNodes.length || ee(s, e, i);
              };
              return (
                (o.cascadeTo = function (t, i, n) {
                  var r,
                    s,
                    a,
                    o,
                    h = e.to(t, i, n),
                    l = [h],
                    u = [],
                    c = [],
                    d = [],
                    _ = e._internals.reservedProps;
                  for (t = h._targets || h.target, ee(t, u, d), h.render(i, !0, !0), ee(t, c), h.render(0, !0, !0), h._enabled(!0), r = d.length; --r > -1; )
                    if ((s = rt(d[r], u[r], c[r])).firstMPT) {
                      for (a in ((s = s.difs), n)) _[a] && (s[a] = n[a]);
                      for (a in ((o = {}), s)) o[a] = u[r][a];
                      l.push(e.fromTo(d[r], i, o, s));
                    }
                  return l;
                }),
                t.activate([o]),
                o
              );
            },
            !0
          ),
          (function () {
            var t = function (t) {
                for (; t; ) t.f || t.blob || (t.m = Math.round), (t = t._next);
              },
              e = r._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function (t, e, i) {
                  return (this._tween = i), !0;
                },
              }).prototype;
            (e._onInitAllProps = function () {
              for (var e, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = s.length, o = {}, h = r._propLookup.roundProps; --a > -1; ) o[s[a]] = Math.round;
              for (a = s.length; --a > -1; )
                for (e = s[a], i = r._firstPT; i; )
                  (n = i._next),
                    i.pg
                      ? i.t._mod(o)
                      : i.n === e &&
                        (2 === i.f && i.t
                          ? t(i.t._firstPT)
                          : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? (i._prev._next = n) : r._firstPT === i && (r._firstPT = n), (i._next = i._prev = null), (r._propLookup[e] = h))),
                    (i = n);
              return !1;
            }),
              (e._add = function (t, e, i, n) {
                this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e);
              });
          })(),
          r._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",
            init: function (t, e, i, n) {
              var r, s;
              if ("function" != typeof t.setAttribute) return !1;
              for (r in e) "function" == typeof (s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
              return !0;
            },
          }),
          (r._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, i, n) {
              "object" != typeof e && (e = { rotation: e }), (this.finals = {});
              var r,
                s,
                a,
                o,
                h,
                l,
                u = !0 === e.useRadians ? 2 * Math.PI : 360;
              for (r in e)
                "useRadians" !== r &&
                  ("function" == typeof (o = e[r]) && (o = o(n, t)),
                  (s = (l = (o + "").split("_"))[0]),
                  (a = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]())),
                  (h = (o = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? a + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - a),
                  l.length &&
                    (-1 !== (s = l.join("_")).indexOf("short") && (h %= u) !== h % (u / 2) && (h = h < 0 ? h + u : h - u),
                    -1 !== s.indexOf("_cw") && h < 0 ? (h = ((h + 9999999999 * u) % u) - ((h / u) | 0) * u) : -1 !== s.indexOf("ccw") && h > 0 && (h = ((h - 9999999999 * u) % u) - ((h / u) | 0) * u)),
                  (h > 1e-6 || h < -1e-6) && (this._addTween(t, r, a, a + h, r), this._overwriteProps.push(r)));
              return !0;
            },
            set: function (t) {
              var e;
              if (1 !== t) this._super.setRatio.call(this, t);
              else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]), (e = e._next);
            },
          })._autoCSS = !0),
          r._gsDefine(
            "easing.Back",
            ["easing.Ease"],
            function (t) {
              var e,
                i,
                n,
                s = r.GreenSockGlobals || r,
                a = s.com.greensock,
                o = 2 * Math.PI,
                h = Math.PI / 2,
                l = a._class,
                u = function (e, i) {
                  var n = l("easing." + e, function () {}, !0),
                    r = (n.prototype = new t());
                  return (r.constructor = n), (r.getRatio = i), n;
                },
                c = t.register || function () {},
                d = function (t, e, i, n, r) {
                  var s = l("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new n() }, !0);
                  return c(s, t), s;
                },
                _ = function (t, e, i) {
                  (this.t = t), (this.v = e), i && ((this.next = i), (i.prev = this), (this.c = i.v - e), (this.gap = i.t - t));
                },
                p = function (e, i) {
                  var n = l(
                      "easing." + e,
                      function (t) {
                        (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                      },
                      !0
                    ),
                    r = (n.prototype = new t());
                  return (
                    (r.constructor = n),
                    (r.getRatio = i),
                    (r.config = function (t) {
                      return new n(t);
                    }),
                    n
                  );
                },
                f = d(
                  "Back",
                  p("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                  }),
                  p("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1);
                  }),
                  p("BackInOut", function (t) {
                    return (t *= 2) < 1 ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                  })
                ),
                m = l(
                  "easing.SlowMo",
                  function (t, e, i) {
                    (e = e || 0 === e ? e : 0.7), null == t ? (t = 0.7) : t > 1 && (t = 1), (this._p = 1 !== t ? e : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === i);
                  },
                  !0
                ),
                g = (m.prototype = new t());
              return (
                (g.constructor = m),
                (g.getRatio = function (t) {
                  var e = t + (0.5 - t) * this._p;
                  return t < this._p1
                    ? this._calcEnd
                      ? 1 - (t = 1 - t / this._p1) * t
                      : e - (t = 1 - t / this._p1) * t * t * t * e
                    : t > this._p3
                    ? this._calcEnd
                      ? 1 === t
                        ? 0
                        : 1 - (t = (t - this._p3) / this._p1) * t
                      : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                    : this._calcEnd
                    ? 1
                    : e;
                }),
                (m.ease = new m(0.7, 0.7)),
                (g.config = m.config = function (t, e, i) {
                  return new m(t, e, i);
                }),
                ((g = (e = l(
                  "easing.SteppedEase",
                  function (t, e) {
                    (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + (e ? 0 : 1)), (this._p3 = e ? 1 : 0);
                  },
                  !0
                )).prototype = new t()).constructor = e),
                (g.getRatio = function (t) {
                  return t < 0 ? (t = 0) : t >= 1 && (t = 0.999999999), (((this._p2 * t) | 0) + this._p3) * this._p1;
                }),
                (g.config = e.config = function (t, i) {
                  return new e(t, i);
                }),
                ((g = (i = l(
                  "easing.RoughEase",
                  function (e) {
                    for (
                      var i,
                        n,
                        r,
                        s,
                        a,
                        o,
                        h = (e = e || {}).taper || "none",
                        l = [],
                        u = 0,
                        c = 0 | (e.points || 20),
                        d = c,
                        p = !1 !== e.randomize,
                        f = !0 === e.clamp,
                        m = e.template instanceof t ? e.template : null,
                        g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                      --d > -1;

                    )
                      (i = p ? Math.random() : (1 / c) * d),
                        (n = m ? m.getRatio(i) : i),
                        (r = "none" === h ? g : "out" === h ? (s = 1 - i) * s * g : "in" === h ? i * i * g : i < 0.5 ? (s = 2 * i) * s * 0.5 * g : (s = 2 * (1 - i)) * s * 0.5 * g),
                        p ? (n += Math.random() * r - 0.5 * r) : d % 2 ? (n += 0.5 * r) : (n -= 0.5 * r),
                        f && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                        (l[u++] = { x: i, y: n });
                    for (
                      l.sort(function (t, e) {
                        return t.x - e.x;
                      }),
                        o = new _(1, 1, null),
                        d = c;
                      --d > -1;

                    )
                      (a = l[d]), (o = new _(a.x, a.y, o));
                    this._prev = new _(0, 0, 0 !== o.t ? o : o.next);
                  },
                  !0
                )).prototype = new t()).constructor = i),
                (g.getRatio = function (t) {
                  var e = this._prev;
                  if (t > e.t) {
                    for (; e.next && t >= e.t; ) e = e.next;
                    e = e.prev;
                  } else for (; e.prev && t <= e.t; ) e = e.prev;
                  return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
                }),
                (g.config = function (t) {
                  return new i(t);
                }),
                (i.ease = new i()),
                d(
                  "Bounce",
                  u("BounceOut", function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                  }),
                  u("BounceIn", function (t) {
                    return (t = 1 - t) < 1 / 2.75
                      ? 1 - 7.5625 * t * t
                      : t < 2 / 2.75
                      ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                      : t < 2.5 / 2.75
                      ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                      : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                  }),
                  u("BounceInOut", function (t) {
                    var e = t < 0.5;
                    return (
                      (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75
                        ? (t *= 7.5625 * t)
                        : (t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                      e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                    );
                  })
                ),
                d(
                  "Circ",
                  u("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t);
                  }),
                  u("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1);
                  }),
                  u("CircInOut", function (t) {
                    return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                  })
                ),
                d(
                  "Elastic",
                  (n = function (e, i, n) {
                    var r = l(
                        "easing." + e,
                        function (t, e) {
                          (this._p1 = t >= 1 ? t : 1), (this._p2 = (e || n) / (t < 1 ? t : 1)), (this._p3 = (this._p2 / o) * (Math.asin(1 / this._p1) || 0)), (this._p2 = o / this._p2);
                        },
                        !0
                      ),
                      s = (r.prototype = new t());
                    return (
                      (s.constructor = r),
                      (s.getRatio = i),
                      (s.config = function (t, e) {
                        return new r(t, e);
                      }),
                      r
                    );
                  })(
                    "ElasticOut",
                    function (t) {
                      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
                    },
                    0.3
                  ),
                  n(
                    "ElasticIn",
                    function (t) {
                      return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2);
                    },
                    0.3
                  ),
                  n(
                    "ElasticInOut",
                    function (t) {
                      return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -0.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * 0.5 + 1;
                    },
                    0.45
                  )
                ),
                d(
                  "Expo",
                  u("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t);
                  }),
                  u("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - 0.001;
                  }),
                  u("ExpoInOut", function (t) {
                    return (t *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                  })
                ),
                d(
                  "Sine",
                  u("SineOut", function (t) {
                    return Math.sin(t * h);
                  }),
                  u("SineIn", function (t) {
                    return 1 - Math.cos(t * h);
                  }),
                  u("SineInOut", function (t) {
                    return -0.5 * (Math.cos(Math.PI * t) - 1);
                  })
                ),
                l(
                  "easing.EaseLookup",
                  {
                    find: function (e) {
                      return t.map[e];
                    },
                  },
                  !0
                ),
                c(s.SlowMo, "SlowMo", "ease,"),
                c(i, "RoughEase", "ease,"),
                c(e, "SteppedEase", "ease,"),
                f
              );
            },
            !0
          );
      }),
        r._gsDefine && r._gsQueue.pop()(),
        (function (i, r) {
          "use strict";
          var s = {},
            a = i.document,
            o = (i.GreenSockGlobals = i.GreenSockGlobals || i);
          if (!o.TweenLite) {
            var h,
              l,
              u,
              c,
              d,
              _,
              p,
              f = function (t) {
                var e,
                  i = t.split("."),
                  n = o;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n;
              },
              m = f("com.greensock"),
              g = function (t) {
                var e,
                  i = [],
                  n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i;
              },
              y = function () {},
              v =
                ((_ = Object.prototype.toString),
                (p = _.call([])),
                function (t) {
                  return null != t && (t instanceof Array || ("object" == typeof t && !!t.push && _.call(t) === p));
                }),
              w = {},
              S = function (i, r, a, h) {
                (this.sc = w[i] ? w[i].sc : []), (w[i] = this), (this.gsClass = null), (this.func = a);
                var l = [];
                (this.check = function (u) {
                  for (var c, d, _, p, m = r.length, g = m; --m > -1; ) (c = w[r[m]] || new S(r[m], [])).gsClass ? ((l[m] = c.gsClass), g--) : u && c.sc.push(this);
                  if (0 === g && a) {
                    if (((_ = (d = ("com.greensock." + i).split(".")).pop()), (p = f(d.join("."))[_] = this.gsClass = a.apply(a, l)), h))
                      if (((o[_] = s[_] = p), void 0 !== t && t.exports))
                        if ("TweenMax" === i) for (m in ((t.exports = s.TweenMax = p), s)) p[m] = s[m];
                        else s.TweenMax && (s.TweenMax[_] = p);
                      else
                        void 0 ===
                          (n = function () {
                            return p;
                          }.apply(e, [])) || (t.exports = n);
                    for (m = 0; m < this.sc.length; m++) this.sc[m].check();
                  }
                }),
                  this.check(!0);
              },
              x = (i._gsDefine = function (t, e, i, n) {
                return new S(t, e, i, n);
              }),
              b = (m._class = function (t, e, i) {
                return (
                  (e = e || function () {}),
                  x(
                    t,
                    [],
                    function () {
                      return e;
                    },
                    i
                  ),
                  e
                );
              });
            x.globals = o;
            var P = [0, 0, 1, 1],
              T = b(
                "easing.Ease",
                function (t, e, i, n) {
                  (this._func = t), (this._type = i || 0), (this._power = n || 0), (this._params = e ? P.concat(e) : P);
                },
                !0
              ),
              C = (T.map = {}),
              A = (T.register = function (t, e, i, n) {
                for (var r, s, a, o, h = e.split(","), l = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --l > -1; )
                  for (s = h[l], r = n ? b("easing." + s, null, !0) : m.easing[s] || {}, a = u.length; --a > -1; ) (o = u[a]), (C[s + "." + o] = C[o + s] = r[o] = t.getRatio ? t : t[o] || new t());
              });
            for (
              (u = T.prototype)._calcEnd = !1,
                u.getRatio = function (t) {
                  if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                  var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
                  return 1 === i ? (n *= n) : 2 === i ? (n *= n * n) : 3 === i ? (n *= n * n * n) : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < 0.5 ? n / 2 : 1 - n / 2;
                },
                l = (h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
              --l > -1;

            )
              (u = h[l] + ",Power" + l), A(new T(null, null, 1, l), u, "easeOut", !0), A(new T(null, null, 2, l), u, "easeIn" + (0 === l ? ",easeNone" : "")), A(new T(null, null, 3, l), u, "easeInOut");
            (C.linear = m.easing.Linear.easeIn), (C.swing = m.easing.Quad.easeInOut);
            var V = b("events.EventDispatcher", function (t) {
              (this._listeners = {}), (this._eventTarget = t || this);
            });
            ((u = V.prototype).addEventListener = function (t, e, i, n, r) {
              r = r || 0;
              var s,
                a,
                o = this._listeners[t],
                h = 0;
              for (this !== c || d || c.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1; ) (s = o[a]).c === e && s.s === i ? o.splice(a, 1) : 0 === h && s.pr < r && (h = a + 1);
              o.splice(h, 0, { c: e, s: i, up: n, pr: r });
            }),
              (u.removeEventListener = function (t, e) {
                var i,
                  n = this._listeners[t];
                if (n) for (i = n.length; --i > -1; ) if (n[i].c === e) return void n.splice(i, 1);
              }),
              (u.dispatchEvent = function (t) {
                var e,
                  i,
                  n,
                  r = this._listeners[t];
                if (r) for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1; ) (n = r[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i));
              });
            var G = i.requestAnimationFrame,
              O = i.cancelAnimationFrame,
              E =
                Date.now ||
                function () {
                  return new Date().getTime();
                },
              R = E();
            for (l = (h = ["ms", "moz", "webkit", "o"]).length; --l > -1 && !G; ) (G = i[h[l] + "RequestAnimationFrame"]), (O = i[h[l] + "CancelAnimationFrame"] || i[h[l] + "CancelRequestAnimationFrame"]);
            b("Ticker", function (t, e) {
              var i,
                n,
                r,
                s,
                o,
                h = this,
                l = E(),
                u = !(!1 === e || !G) && "auto",
                _ = 500,
                p = 33,
                f = function (t) {
                  var e,
                    a,
                    u = E() - R;
                  u > _ && (l += u - p), (R += u), (h.time = (R - l) / 1e3), (e = h.time - o), (!i || e > 0 || !0 === t) && (h.frame++, (o += e + (e >= s ? 0.004 : s - e)), (a = !0)), !0 !== t && (r = n(f)), a && h.dispatchEvent("tick");
                };
              V.call(h),
                (h.time = h.frame = 0),
                (h.tick = function () {
                  f(!0);
                }),
                (h.lagSmoothing = function (t, e) {
                  if (!arguments.length) return _ < 1e10;
                  (_ = t || 1e10), (p = Math.min(e, _, 0));
                }),
                (h.sleep = function () {
                  null != r && (u && O ? O(r) : clearTimeout(r), (n = y), (r = null), h === c && (d = !1));
                }),
                (h.wake = function (t) {
                  null !== r ? h.sleep() : t ? (l += -R + (R = E())) : h.frame > 10 && (R = E() - _ + 5),
                    (n =
                      0 === i
                        ? y
                        : u && G
                        ? G
                        : function (t) {
                            return setTimeout(t, (1e3 * (o - h.time) + 1) | 0);
                          }),
                    h === c && (d = !0),
                    f(2);
                }),
                (h.fps = function (t) {
                  if (!arguments.length) return i;
                  (s = 1 / ((i = t) || 60)), (o = this.time + s), h.wake();
                }),
                (h.useRAF = function (t) {
                  if (!arguments.length) return u;
                  h.sleep(), (u = t), h.fps(i);
                }),
                h.fps(t),
                setTimeout(function () {
                  "auto" === u && h.frame < 5 && "hidden" !== a.visibilityState && h.useRAF(!1);
                }, 1500);
            }),
              ((u = m.Ticker.prototype = new m.events.EventDispatcher()).constructor = m.Ticker);
            var L = b("core.Animation", function (t, e) {
              if (
                ((this.vars = e = e || {}),
                (this._duration = this._totalDuration = t || 0),
                (this._delay = Number(e.delay) || 0),
                (this._timeScale = 1),
                (this._active = !0 === e.immediateRender),
                (this.data = e.data),
                (this._reversed = !0 === e.reversed),
                $)
              ) {
                d || c.wake();
                var i = this.vars.useFrames ? W : $;
                i.add(this, i._time), this.vars.paused && this.paused(!0);
              }
            });
            (c = L.ticker = new m.Ticker()),
              ((u = L.prototype)._dirty = u._gc = u._initted = u._paused = !1),
              (u._totalTime = u._time = 0),
              (u._rawPrevTime = -1),
              (u._next = u._last = u._onUpdate = u._timeline = u.timeline = null),
              (u._paused = !1);
            var I = function () {
              d && E() - R > 2e3 && ("hidden" !== a.visibilityState || !c.lagSmoothing()) && c.wake();
              var t = setTimeout(I, 2e3);
              t.unref && t.unref();
            };
            I(),
              (u.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
              }),
              (u.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0);
              }),
              (u.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1);
              }),
              (u.seek = function (t, e) {
                return this.totalTime(Number(t), !1 !== e);
              }),
              (u.restart = function (t, e) {
                return this.reversed(!1)
                  .paused(!1)
                  .totalTime(t ? -this._delay : 0, !1 !== e, !0);
              }),
              (u.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
              }),
              (u.render = function (t, e, i) {}),
              (u.invalidate = function () {
                return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this;
              }),
              (u.isActive = function () {
                var t,
                  e = this._timeline,
                  i = this._startTime;
                return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7);
              }),
              (u._enabled = function (t, e) {
                return (
                  d || c.wake(), (this._gc = !t), (this._active = this.isActive()), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                );
              }),
              (u._kill = function (t, e) {
                return this._enabled(!1, !1);
              }),
              (u.kill = function (t, e) {
                return this._kill(t, e), this;
              }),
              (u._uncache = function (t) {
                for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                return this;
              }),
              (u._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
                return i;
              }),
              (u._callback = function (t) {
                var e = this.vars,
                  i = e[t],
                  n = e[t + "Params"],
                  r = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                  case 0:
                    i.call(r);
                    break;
                  case 1:
                    i.call(r, n[0]);
                    break;
                  case 2:
                    i.call(r, n[0], n[1]);
                    break;
                  default:
                    i.apply(r, n);
                }
              }),
              (u.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                  var r = this.vars;
                  if (1 === arguments.length) return r[t];
                  null == e ? delete r[t] : ((r[t] = e), (r[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (r[t + "Scope"] = n)), "onUpdate" === t && (this._onUpdate = e);
                }
                return this;
              }),
              (u.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
              }),
              (u.duration = function (t) {
                return arguments.length
                  ? ((this._duration = this._totalDuration = t),
                    this._uncache(!0),
                    this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                    this)
                  : ((this._dirty = !1), this._duration);
              }),
              (u.totalDuration = function (t) {
                return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
              }),
              (u.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
              }),
              (u.totalTime = function (t, e, i) {
                if ((d || c.wake(), !arguments.length)) return this._totalTime;
                if (this._timeline) {
                  if ((t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                      r = this._timeline;
                    if ((t > n && !i && (t = n), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                      for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
                  }
                  this._gc && this._enabled(!0, !1), (this._totalTime === t && 0 !== this._duration) || (D.length && tt(), this.render(t, e, !1), D.length && tt());
                }
                return this;
              }),
              (u.progress = u.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
              }),
              (u.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
              }),
              (u.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
              }),
              (u.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                var e, i;
                for (
                  t = t || 1e-10,
                    this._timeline && this._timeline.smoothChildTiming && ((i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime()), (this._startTime = i - ((i - this._startTime) * this._timeScale) / t)),
                    this._timeScale = t,
                    i = this.timeline;
                  i && i.timeline;

                )
                  (i._dirty = !0), i.totalDuration(), (i = i.timeline);
                return this;
              }),
              (u.reversed = function (t) {
                return arguments.length
                  ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                  : this._reversed;
              }),
              (u.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e,
                  i,
                  n = this._timeline;
                return (
                  t != this._paused &&
                    n &&
                    (d || t || c.wake(),
                    (i = (e = n.rawTime()) - this._pauseTime),
                    !t && n.smoothChildTiming && ((this._startTime += i), this._uncache(!1)),
                    (this._pauseTime = t ? e : null),
                    (this._paused = t),
                    (this._active = this.isActive()),
                    !t && 0 !== i && this._initted && this.duration() && ((e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale), this.render(e, e === this._totalTime, !0))),
                  this._gc && !t && this._enabled(!0, !1),
                  this
                );
              });
            var M = b("core.SimpleTimeline", function (t) {
              L.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
            });
            ((u = M.prototype = new L()).constructor = M),
              (u.kill()._gc = !1),
              (u._first = u._last = u._recent = null),
              (u._sortChildren = !1),
              (u.add = u.insert = function (t, e, i, n) {
                var r, s;
                if (
                  ((t._startTime = Number(e || 0) + t._delay),
                  t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                  t.timeline && t.timeline._remove(t, !0),
                  (t.timeline = t._timeline = this),
                  t._gc && t._enabled(!0, !0),
                  (r = this._last),
                  this._sortChildren)
                )
                  for (s = t._startTime; r && r._startTime > s; ) r = r._prev;
                return r ? ((t._next = r._next), (r._next = t)) : ((t._next = this._first), (this._first = t)), t._next ? (t._next._prev = t) : (this._last = t), (t._prev = r), (this._recent = t), this._timeline && this._uncache(!0), this;
              }),
              (u._remove = function (t, e) {
                return (
                  t.timeline === this &&
                    (e || t._enabled(!1, !0),
                    t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                    t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                    (t._next = t._prev = t.timeline = null),
                    t === this._recent && (this._recent = this._last),
                    this._timeline && this._uncache(!0)),
                  this
                );
              }),
              (u.render = function (t, e, i) {
                var n,
                  r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                  (n = r._next),
                    (r._active || (t >= r._startTime && !r._paused && !r._gc)) &&
                      (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                    (r = n);
              }),
              (u.rawTime = function () {
                return d || c.wake(), this._totalTime;
              });
            var k = b(
                "TweenLite",
                function (t, e, n) {
                  if ((L.call(this, e, n), (this.render = k.prototype.render), null == t)) throw "Cannot tween a null target.";
                  this.target = t = "string" != typeof t ? t : k.selector(t) || t;
                  var r,
                    s,
                    a,
                    o = t.jquery || (t.length && t !== i && t[0] && (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType))),
                    h = this.vars.overwrite;
                  if (((this._overwrite = h = null == h ? K[k.defaultOverwrite] : "number" == typeof h ? h >> 0 : K[h]), (o || t instanceof Array || (t.push && v(t))) && "number" != typeof t[0]))
                    for (this._targets = a = g(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)
                      (s = a[r])
                        ? "string" != typeof s
                          ? s.length && s !== i && s[0] && (s[0] === i || (s[0].nodeType && s[0].style && !s.nodeType))
                            ? (a.splice(r--, 1), (this._targets = a = a.concat(g(s))))
                            : ((this._siblings[r] = et(s, this, !1)), 1 === h && this._siblings[r].length > 1 && nt(s, this, null, 1, this._siblings[r]))
                          : "string" == typeof (s = a[r--] = k.selector(s)) && a.splice(r + 1, 1)
                        : a.splice(r--, 1);
                  else (this._propLookup = {}), (this._siblings = et(t, this, !1)), 1 === h && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
                  (this.vars.immediateRender || (0 === e && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -1e-10), this.render(Math.min(0, -this._delay)));
                },
                !0
              ),
              N = function (t) {
                return t && t.length && t !== i && t[0] && (t[0] === i || (t[0].nodeType && t[0].style && !t.nodeType));
              };
            ((u = k.prototype = new L()).constructor = k),
              (u.kill()._gc = !1),
              (u.ratio = 0),
              (u._firstPT = u._targets = u._overwrittenProps = u._startAt = null),
              (u._notifyPluginsOfEnabled = u._lazy = !1),
              (k.version = "1.20.3"),
              (k.defaultEase = u._ease = new T(null, null, 1, 1)),
              (k.defaultOverwrite = "auto"),
              (k.ticker = c),
              (k.autoSleep = 120),
              (k.lagSmoothing = function (t, e) {
                c.lagSmoothing(t, e);
              }),
              (k.selector =
                i.$ ||
                i.jQuery ||
                function (t) {
                  var e = i.$ || i.jQuery;
                  return e ? ((k.selector = e), e(t)) : void 0 === a ? t : a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t);
                });
            var D = [],
              H = {},
              B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
              z = /[\+-]=-?[\.\d]/,
              F = function (t) {
                for (var e, i = this._firstPT; i; )
                  (e = i.blob ? (1 === t && null != this.end ? this.end : t ? this.join("") : this.start) : i.c * t + i.s),
                    i.m ? (e = i.m(e, this._target || i.t)) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                    i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
                    (i = i._next);
              },
              j = function (t, e, i, n) {
                var r,
                  s,
                  a,
                  o,
                  h,
                  l,
                  u,
                  c = [],
                  d = 0,
                  _ = "",
                  p = 0;
                for (
                  c.start = t,
                    c.end = e,
                    t = c[0] = t + "",
                    e = c[1] = e + "",
                    i && (i(c), (t = c[0]), (e = c[1])),
                    c.length = 0,
                    r = t.match(B) || [],
                    s = e.match(B) || [],
                    n && ((n._next = null), (n.blob = 1), (c._firstPT = c._applyPT = n)),
                    h = s.length,
                    o = 0;
                  o < h;
                  o++
                )
                  (u = s[o]),
                    (_ += (l = e.substr(d, e.indexOf(u, d) - d)) || !o ? l : ","),
                    (d += l.length),
                    p ? (p = (p + 1) % 5) : "rgba(" === l.substr(-5) && (p = 1),
                    u === r[o] || r.length <= o
                      ? (_ += u)
                      : (_ && (c.push(_), (_ = "")),
                        (a = parseFloat(r[o])),
                        c.push(a),
                        (c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: a, c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0, f: 0, m: p && p < 4 ? Math.round : 0 })),
                    (d += u.length);
                return (_ += e.substr(d)) && c.push(_), (c.setRatio = F), z.test(e) && (c.end = null), c;
              },
              U = function (t, e, i, n, r, s, a, o, h) {
                "function" == typeof n && (n = n(h || 0, t));
                var l = typeof t[e],
                  u = "function" !== l ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                  c = "get" !== i ? i : u ? (a ? t[u](a) : t[u]()) : t[e],
                  d = "string" == typeof n && "=" === n.charAt(1),
                  _ = { t: t, p: e, s: c, f: "function" === l, pg: 0, n: r || e, m: s ? ("function" == typeof s ? s : Math.round) : 0, pr: 0, c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0 };
                if (
                  (("number" != typeof c || ("number" != typeof n && !d)) &&
                    (a || isNaN(c) || (!d && isNaN(n)) || "boolean" == typeof c || "boolean" == typeof n
                      ? ((_.fp = a), (_ = { t: j(c, d ? parseFloat(_.s) + _.c : n, o || k.defaultStringFilter, _), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0, m: 0 }))
                      : ((_.s = parseFloat(c)), d || (_.c = parseFloat(n) - _.s || 0))),
                  _.c)
                )
                  return (_._next = this._firstPT) && (_._next._prev = _), (this._firstPT = _), _;
              },
              Q = (k._internals = { isArray: v, isSelector: N, lazyTweens: D, blobDif: j }),
              X = (k._plugins = {}),
              q = (Q.tweenLookup = {}),
              Y = 0,
              Z = (Q.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
              }),
              K = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
              W = (L._rootFramesTimeline = new M()),
              $ = (L._rootTimeline = new M()),
              J = 30,
              tt = (Q.lazyRender = function () {
                var t,
                  e = D.length;
                for (H = {}; --e > -1; ) (t = D[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
                D.length = 0;
              });
            ($._startTime = c.time),
              (W._startTime = c.frame),
              ($._active = W._active = !0),
              setTimeout(tt, 1),
              (L._updateRoot = k.render = function () {
                var t, e, i;
                if ((D.length && tt(), $.render((c.time - $._startTime) * $._timeScale, !1, !1), W.render((c.frame - W._startTime) * W._timeScale, !1, !1), D.length && tt(), c.frame >= J)) {
                  for (i in ((J = c.frame + (parseInt(k.autoSleep, 10) || 120)), q)) {
                    for (t = (e = q[i].tweens).length; --t > -1; ) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete q[i];
                  }
                  if ((!(i = $._first) || i._paused) && k.autoSleep && !W._first && 1 === c._listeners.tick.length) {
                    for (; i && i._paused; ) i = i._next;
                    i || c.sleep();
                  }
                }
              }),
              c.addEventListener("tick", L._updateRoot);
            var et = function (t, e, i) {
                var n,
                  r,
                  s = t._gsTweenID;
                if ((q[s || (t._gsTweenID = s = "t" + Y++)] || (q[s] = { target: t, tweens: [] }), e && (((n = q[s].tweens)[(r = n.length)] = e), i))) for (; --r > -1; ) n[r] === e && n.splice(r, 1);
                return q[s].tweens;
              },
              it = function (t, e, i, n) {
                var r,
                  s,
                  a = t.vars.onOverwrite;
                return a && (r = a(t, e, i, n)), (a = k.onOverwrite) && (s = a(t, e, i, n)), !1 !== r && !1 !== s;
              },
              nt = function (t, e, i, n, r) {
                var s, a, o, h;
                if (1 === n || n >= 4) {
                  for (h = r.length, s = 0; s < h; s++)
                    if ((o = r[s]) !== e) o._gc || (o._kill(null, t, e) && (a = !0));
                    else if (5 === n) break;
                  return a;
                }
                var l,
                  u = e._startTime + 1e-10,
                  c = [],
                  d = 0,
                  _ = 0 === e._duration;
                for (s = r.length; --s > -1; )
                  (o = r[s]) === e ||
                    o._gc ||
                    o._paused ||
                    (o._timeline !== e._timeline
                      ? ((l = l || rt(e, 0, _)), 0 === rt(o, l, _) && (c[d++] = o))
                      : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && (((_ || !o._initted) && u - o._startTime <= 2e-10) || (c[d++] = o)));
                for (s = d; --s > -1; )
                  if (((o = c[s]), 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || (!o._firstPT && o._initted))) {
                    if (2 !== n && !it(o, e)) continue;
                    o._enabled(!1, !1) && (a = !0);
                  }
                return a;
              },
              rt = function (t, e, i) {
                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline; ) {
                  if (((s += n._startTime), (r *= n._timeScale), n._paused)) return -100;
                  n = n._timeline;
                }
                return (s /= r) > e ? s - e : (i && s === e) || (!t._initted && s - e < 2e-10) ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10;
              };
            (u._init = function () {
              var t,
                e,
                i,
                n,
                r,
                s,
                a = this.vars,
                o = this._overwrittenProps,
                h = this._duration,
                l = !!a.immediateRender,
                u = a.ease;
              if (a.startAt) {
                for (n in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (r = {}), a.startAt)) r[n] = a.startAt[n];
                if (
                  ((r.data = "isStart"),
                  (r.overwrite = !1),
                  (r.immediateRender = !0),
                  (r.lazy = l && !1 !== a.lazy),
                  (r.startAt = r.delay = null),
                  (r.onUpdate = a.onUpdate),
                  (r.onUpdateParams = a.onUpdateParams),
                  (r.onUpdateScope = a.onUpdateScope || a.callbackScope || this),
                  (this._startAt = k.to(this.target, 0, r)),
                  l)
                )
                  if (this._time > 0) this._startAt = null;
                  else if (0 !== h) return;
              } else if (a.runBackwards && 0 !== h)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                else {
                  for (n in (0 !== this._time && (l = !1), (i = {}), a)) (Z[n] && "autoCSS" !== n) || (i[n] = a[n]);
                  if (((i.overwrite = 0), (i.data = "isFromStart"), (i.lazy = l && !1 !== a.lazy), (i.immediateRender = l), (this._startAt = k.to(this.target, 0, i)), l)) {
                    if (0 === this._time) return;
                  } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                }
              if (
                ((this._ease = u = u ? (u instanceof T ? u : "function" == typeof u ? new T(u, a.easeParams) : C[u] || k.defaultEase) : k.defaultEase),
                a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)),
                (this._easeType = this._ease._type),
                (this._easePower = this._ease._power),
                (this._firstPT = null),
                this._targets)
              )
                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], o ? o[t] : null, t) && (e = !0);
              else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
              if ((e && k._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), a.runBackwards)) for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
              (this._onUpdate = a.onUpdate), (this._initted = !0);
            }),
              (u._initProps = function (t, e, n, r, s) {
                var a, o, h, l, u, c;
                if (null == t) return !1;
                for (a in (H[t._gsTweenID] && tt(),
                this.vars.css ||
                  (t.style &&
                    t !== i &&
                    t.nodeType &&
                    X.css &&
                    !1 !== this.vars.autoCSS &&
                    (function (t, e) {
                      var i,
                        n = {};
                      for (i in t)
                        Z[i] || (i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) || !(!X[i] || (X[i] && X[i]._autoCSS)) || ((n[i] = t[i]), delete t[i]);
                      t.css = n;
                    })(this.vars, t)),
                this.vars))
                  if (((c = this.vars[a]), Z[a])) c && (c instanceof Array || (c.push && v(c))) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
                  else if (X[a] && (l = new X[a]())._onInitTween(t, this.vars[a], this, s)) {
                    for (this._firstPT = u = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: a, pg: 1, pr: l._priority, m: 0 }, o = l._overwriteProps.length; --o > -1; ) e[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (h = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u);
                  } else e[a] = U.call(this, t, a, "get", c, a, 0, null, this.vars.stringFilter, s);
                return r && this._kill(r, t)
                  ? this._initProps(t, e, n, r, s)
                  : this._overwrite > 1 && this._firstPT && n.length > 1 && nt(t, this, e, this._overwrite, n)
                  ? (this._kill(e, t), this._initProps(t, e, n, r, s))
                  : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (H[t._gsTweenID] = !0), h);
              }),
              (u.render = function (t, e, i) {
                var n,
                  r,
                  s,
                  a,
                  o = this._time,
                  h = this._duration,
                  l = this._rawPrevTime;
                if (t >= h - 1e-7 && t >= 0)
                  (this._totalTime = this._time = h),
                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                    this._reversed || ((n = !0), (r = "onComplete"), (i = i || this._timeline.autoRemoveChildren)),
                    0 === h &&
                      (this._initted || !this.vars.lazy || i) &&
                      (this._startTime === this._timeline._duration && (t = 0),
                      (l < 0 || (t <= 0 && t >= -1e-7) || (1e-10 === l && "isPause" !== this.data)) && l !== t && ((i = !0), l > 1e-10 && (r = "onReverseComplete")),
                      (this._rawPrevTime = a = !e || t || l === t ? t : 1e-10));
                else if (t < 1e-7)
                  (this._totalTime = this._time = 0),
                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                    (0 !== o || (0 === h && l > 0)) && ((r = "onReverseComplete"), (n = this._reversed)),
                    t < 0 && ((this._active = !1), 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (1e-10 !== l || "isPause" !== this.data) && (i = !0), (this._rawPrevTime = a = !e || t || l === t ? t : 1e-10))),
                    (!this._initted || (this._startAt && this._startAt.progress())) && (i = !0);
                else if (((this._totalTime = this._time = t), this._easeType)) {
                  var u = t / h,
                    c = this._easeType,
                    d = this._easePower;
                  (1 === c || (3 === c && u >= 0.5)) && (u = 1 - u),
                    3 === c && (u *= 2),
                    1 === d ? (u *= u) : 2 === d ? (u *= u * u) : 3 === d ? (u *= u * u * u) : 4 === d && (u *= u * u * u * u),
                    (this.ratio = 1 === c ? 1 - u : 2 === c ? u : t / h < 0.5 ? u / 2 : 1 - u / 2);
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                  if (!this._initted) {
                    if ((this._init(), !this._initted || this._gc)) return;
                    if (!i && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration))) return (this._time = this._totalTime = o), (this._rawPrevTime = l), D.push(this), void (this._lazy = [t, e]);
                    this._time && !n ? (this.ratio = this._ease.getRatio(this._time / h)) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                  }
                  for (
                    !1 !== this._lazy && (this._lazy = !1),
                      this._active || (!this._paused && this._time !== o && t >= 0 && (this._active = !0)),
                      0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== h) || e || this._callback("onStart"))),
                      s = this._firstPT;
                    s;

                  )
                    s.f ? s.t[s.p](s.c * this.ratio + s.s) : (s.t[s.p] = s.c * this.ratio + s.s), (s = s._next);
                  this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || ((this._time !== o || n || i) && this._callback("onUpdate"))),
                    r &&
                      ((this._gc && !i) ||
                        (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                        n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                        !e && this.vars[r] && this._callback(r),
                        0 === h && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)));
                }
              }),
              (u._kill = function (t, e, i) {
                if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : k.selector(e) || e;
                var n,
                  r,
                  s,
                  a,
                  o,
                  h,
                  l,
                  u,
                  c,
                  d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((v(e) || N(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1; ) this._kill(t, e[n], i) && (h = !0);
                else {
                  if (this._targets) {
                    for (n = this._targets.length; --n > -1; )
                      if (e === this._targets[n]) {
                        (o = this._propLookup[n] || {}), (this._overwrittenProps = this._overwrittenProps || []), (r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all");
                        break;
                      }
                  } else {
                    if (e !== this.target) return !1;
                    (o = this._propLookup), (r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                  }
                  if (o) {
                    if (((l = t || o), (u = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill)), i && (k.onOverwrite || this.vars.onOverwrite))) {
                      for (s in l) o[s] && (c || (c = []), c.push(s));
                      if ((c || !t) && !it(this, i, e, c)) return !1;
                    }
                    for (s in l)
                      (a = o[s]) &&
                        (d && (a.f ? a.t[a.p](a.s) : (a.t[a.p] = a.s), (h = !0)),
                        a.pg && a.t._kill(l) && (h = !0),
                        (a.pg && 0 !== a.t._overwriteProps.length) || (a._prev ? (a._prev._next = a._next) : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), (a._next = a._prev = null)),
                        delete o[s]),
                        u && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1);
                  }
                }
                return h;
              }),
              (u.invalidate = function () {
                return (
                  this._notifyPluginsOfEnabled && k._onPluginEvent("_onDisable", this),
                  (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                  (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                  (this._propLookup = this._targets ? {} : []),
                  L.prototype.invalidate.call(this),
                  this.vars.immediateRender && ((this._time = -1e-10), this.render(Math.min(0, -this._delay))),
                  this
                );
              }),
              (u._enabled = function (t, e) {
                if ((d || c.wake(), t && this._gc)) {
                  var i,
                    n = this._targets;
                  if (n) for (i = n.length; --i > -1; ) this._siblings[i] = et(n[i], this, !0);
                  else this._siblings = et(this.target, this, !0);
                }
                return L.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && k._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
              }),
              (k.to = function (t, e, i) {
                return new k(t, e, i);
              }),
              (k.from = function (t, e, i) {
                return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new k(t, e, i);
              }),
              (k.fromTo = function (t, e, i, n) {
                return (n.startAt = i), (n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender), new k(t, e, n);
              }),
              (k.delayedCall = function (t, e, i, n, r) {
                return new k(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 });
              }),
              (k.set = function (t, e) {
                return new k(t, 0, e);
              }),
              (k.getTweensOf = function (t, e) {
                if (null == t) return [];
                var i, n, r, s;
                if (((t = "string" != typeof t ? t : k.selector(t) || t), (v(t) || N(t)) && "number" != typeof t[0])) {
                  for (i = t.length, n = []; --i > -1; ) n = n.concat(k.getTweensOf(t[i], e));
                  for (i = n.length; --i > -1; ) for (s = n[i], r = i; --r > -1; ) s === n[r] && n.splice(i, 1);
                } else if (t._gsTweenID) for (i = (n = et(t).concat()).length; --i > -1; ) (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
                return n || [];
              }),
              (k.killTweensOf = k.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && ((i = e), (e = !1));
                for (var n = k.getTweensOf(t, e), r = n.length; --r > -1; ) n[r]._kill(i, t);
              });
            var st = b(
              "plugins.TweenPlugin",
              function (t, e) {
                (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = st.prototype);
              },
              !0
            );
            if (
              ((u = st.prototype),
              (st.version = "1.19.0"),
              (st.API = 2),
              (u._firstPT = null),
              (u._addTween = U),
              (u.setRatio = F),
              (u._kill = function (t) {
                var e,
                  i = this._overwriteProps,
                  n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
                for (; n; ) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next);
                return !1;
              }),
              (u._mod = u._roundProps = function (t) {
                for (var e, i = this._firstPT; i; ) (e = t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && "function" == typeof e && (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)), (i = i._next);
              }),
              (k._onPluginEvent = function (t, e) {
                var i,
                  n,
                  r,
                  s,
                  a,
                  o = e._firstPT;
                if ("_onInitAllProps" === t) {
                  for (; o; ) {
                    for (a = o._next, n = r; n && n.pr > o.pr; ) n = n._next;
                    (o._prev = n ? n._prev : s) ? (o._prev._next = o) : (r = o), (o._next = n) ? (n._prev = o) : (s = o), (o = a);
                  }
                  o = e._firstPT = r;
                }
                for (; o; ) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), (o = o._next);
                return i;
              }),
              (st.activate = function (t) {
                for (var e = t.length; --e > -1; ) t[e].API === st.API && (X[new t[e]()._propName] = t[e]);
                return !0;
              }),
              (x.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e,
                  i = t.propName,
                  n = t.priority || 0,
                  r = t.overwriteProps,
                  s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                  a = b(
                    "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                    function () {
                      st.call(this, i, n), (this._overwriteProps = r || []);
                    },
                    !0 === t.global
                  ),
                  o = (a.prototype = new st(i));
                for (e in ((o.constructor = a), (a.API = t.API), s)) "function" == typeof t[e] && (o[s[e]] = t[e]);
                return (a.version = t.version), st.activate([a]), a;
              }),
              (h = i._gsQueue))
            ) {
              for (l = 0; l < h.length; l++) h[l]();
              for (u in w) w[u].func || i.console.log("GSAP encountered missing dependency: " + u);
            }
            d = !1;
          }
        })(void 0 !== t && t.exports && void 0 !== i ? i : this || window);
    }.call(e, i(5)));
  },
  function (t, e) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (i = window);
    }
    t.exports = i;
  },
  function (t, e) {
    (window.CanvablePath = function (t) {
      (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/,/gm, " ")).replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2")).replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2")).replace(
        /([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,
        "$1 $2"
      )).replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2")).replace(/([0-9])([+\-])/gm, "$1 $2")).replace(/(\.[0-9]*)(\.)/gm, "$1 $2")).replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 ")),
        (t = CanvablePath.compressSpaces(t)),
        (t = CanvablePath.trim(t)),
        (this.PathParser = new (function (t) {
          (this.tokens = t.split(" ")),
            (this.reset = function () {
              (this.i = -1),
                (this.command = ""),
                (this.previousCommand = ""),
                (this.start = new CanvablePath.Point(0, 0)),
                (this.control = new CanvablePath.Point(0, 0)),
                (this.current = new CanvablePath.Point(0, 0)),
                (this.points = []),
                (this.angles = []);
            }),
            (this.isEnd = function () {
              return this.i >= this.tokens.length - 1;
            }),
            (this.isCommandOrEnd = function () {
              return !!this.isEnd() || null != this.tokens[this.i + 1].match(/^[A-Za-z]$/);
            }),
            (this.isRelativeCommand = function () {
              switch (this.command) {
                case "m":
                case "l":
                case "h":
                case "v":
                case "c":
                case "s":
                case "q":
                case "t":
                case "a":
                case "z":
                  return !0;
              }
              return !1;
            }),
            (this.getToken = function () {
              return this.i++, this.tokens[this.i];
            }),
            (this.getScalar = function () {
              return parseFloat(this.getToken());
            }),
            (this.nextCommand = function () {
              (this.previousCommand = this.command), (this.command = this.getToken());
            }),
            (this.getPoint = function () {
              var t = new CanvablePath.Point(this.getScalar(), this.getScalar());
              return this.makeAbsolute(t);
            }),
            (this.getAsControlPoint = function () {
              var t = this.getPoint();
              return (this.control = t), t;
            }),
            (this.getAsCurrentPoint = function () {
              var t = this.getPoint();
              return (this.current = t), t;
            }),
            (this.getReflectedControlPoint = function () {
              return "c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase() && "q" != this.previousCommand.toLowerCase() && "t" != this.previousCommand.toLowerCase()
                ? this.current
                : new CanvablePath.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
            }),
            (this.makeAbsolute = function (t) {
              return this.isRelativeCommand() && ((t.x += this.current.x), (t.y += this.current.y)), t;
            }),
            (this.addMarker = function (t, e, i) {
              null != i && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(i)),
                this.addMarkerAngle(t, null == e ? null : e.angleTo(t));
            }),
            (this.addMarkerAngle = function (t, e) {
              this.points.push(t), this.angles.push(e);
            }),
            (this.getMarkerPoints = function () {
              return this.points;
            }),
            (this.getMarkerAngles = function () {
              for (var t = 0; t < this.angles.length; t++)
                if (null == this.angles[t])
                  for (var e = t + 1; e < this.angles.length; e++)
                    if (null != this.angles[e]) {
                      this.angles[t] = this.angles[e];
                      break;
                    }
              return this.angles;
            });
        })(t)),
        (this.bounds = function () {
          return this.draw(null);
        }),
        (this.draw = function (t) {
          var e = this.PathParser;
          e.reset();
          var i = new CanvablePath.BoundingBox();
          for (null != t && t.beginPath(); !e.isEnd(); )
            switch ((e.nextCommand(), e.command)) {
              case "M":
              case "m":
                var n = e.getAsCurrentPoint();
                for (e.addMarker(n), i.addPoint(n.x, n.y), null != t && t.moveTo(n.x, n.y), e.start = e.current; !e.isCommandOrEnd(); ) {
                  n = e.getAsCurrentPoint();
                  e.addMarker(n, e.start), i.addPoint(n.x, n.y), null != t && t.lineTo(n.x, n.y);
                }
                break;
              case "L":
              case "l":
                for (; !e.isCommandOrEnd(); ) {
                  var r = e.current;
                  n = e.getAsCurrentPoint();
                  e.addMarker(n, r), i.addPoint(n.x, n.y), null != t && t.lineTo(n.x, n.y);
                }
                break;
              case "H":
              case "h":
                for (; !e.isCommandOrEnd(); ) {
                  var s = new CanvablePath.Point((e.isRelativeCommand() ? e.current.x : 0) + e.getScalar(), e.current.y);
                  e.addMarker(s, e.current), (e.current = s), i.addPoint(e.current.x, e.current.y), null != t && t.lineTo(e.current.x, e.current.y);
                }
                break;
              case "V":
              case "v":
                for (; !e.isCommandOrEnd(); ) {
                  s = new CanvablePath.Point(e.current.x, (e.isRelativeCommand() ? e.current.y : 0) + e.getScalar());
                  e.addMarker(s, e.current), (e.current = s), i.addPoint(e.current.x, e.current.y), null != t && t.lineTo(e.current.x, e.current.y);
                }
                break;
              case "C":
              case "c":
                for (; !e.isCommandOrEnd(); ) {
                  var a = e.current,
                    o = e.getPoint(),
                    h = e.getAsControlPoint(),
                    l = e.getAsCurrentPoint();
                  e.addMarker(l, h, o), i.addBezierCurve(a.x, a.y, o.x, o.y, h.x, h.y, l.x, l.y), null != t && t.bezierCurveTo(o.x, o.y, h.x, h.y, l.x, l.y);
                }
                break;
              case "S":
              case "s":
                for (; !e.isCommandOrEnd(); ) {
                  (a = e.current), (o = e.getReflectedControlPoint()), (h = e.getAsControlPoint()), (l = e.getAsCurrentPoint());
                  e.addMarker(l, h, o), i.addBezierCurve(a.x, a.y, o.x, o.y, h.x, h.y, l.x, l.y), null != t && t.bezierCurveTo(o.x, o.y, h.x, h.y, l.x, l.y);
                }
                break;
              case "Q":
              case "q":
                for (; !e.isCommandOrEnd(); ) {
                  (a = e.current), (h = e.getAsControlPoint()), (l = e.getAsCurrentPoint());
                  e.addMarker(l, h, h), i.addQuadraticCurve(a.x, a.y, h.x, h.y, l.x, l.y), null != t && t.quadraticCurveTo(h.x, h.y, l.x, l.y);
                }
                break;
              case "T":
              case "t":
                for (; !e.isCommandOrEnd(); ) {
                  (a = e.current), (h = e.getReflectedControlPoint());
                  e.control = h;
                  l = e.getAsCurrentPoint();
                  e.addMarker(l, h, h), i.addQuadraticCurve(a.x, a.y, h.x, h.y, l.x, l.y), null != t && t.quadraticCurveTo(h.x, h.y, l.x, l.y);
                }
                break;
              case "A":
              case "a":
                for (; !e.isCommandOrEnd(); ) {
                  a = e.current;
                  var u = e.getScalar(),
                    c = e.getScalar(),
                    d = e.getScalar() * (Math.PI / 180),
                    _ = e.getScalar(),
                    p = e.getScalar(),
                    f = ((l = e.getAsCurrentPoint()), new CanvablePath.Point((Math.cos(d) * (a.x - l.x)) / 2 + (Math.sin(d) * (a.y - l.y)) / 2, (-Math.sin(d) * (a.x - l.x)) / 2 + (Math.cos(d) * (a.y - l.y)) / 2)),
                    m = Math.pow(f.x, 2) / Math.pow(u, 2) + Math.pow(f.y, 2) / Math.pow(c, 2);
                  m > 1 && ((u *= Math.sqrt(m)), (c *= Math.sqrt(m)));
                  var g = (_ == p ? -1 : 1) * Math.sqrt((Math.pow(u, 2) * Math.pow(c, 2) - Math.pow(u, 2) * Math.pow(f.y, 2) - Math.pow(c, 2) * Math.pow(f.x, 2)) / (Math.pow(u, 2) * Math.pow(f.y, 2) + Math.pow(c, 2) * Math.pow(f.x, 2)));
                  isNaN(g) && (g = 0);
                  var y = new CanvablePath.Point((g * u * f.y) / c, (g * -c * f.x) / u),
                    v = new CanvablePath.Point((a.x + l.x) / 2 + Math.cos(d) * y.x - Math.sin(d) * y.y, (a.y + l.y) / 2 + Math.sin(d) * y.x + Math.cos(d) * y.y),
                    w = function (t) {
                      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
                    },
                    S = function (t, e) {
                      return (t[0] * e[0] + t[1] * e[1]) / (w(t) * w(e));
                    },
                    x = function (t, e) {
                      return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(S(t, e));
                    },
                    b = x([1, 0], [(f.x - y.x) / u, (f.y - y.y) / c]),
                    P = [(f.x - y.x) / u, (f.y - y.y) / c],
                    T = [(-f.x - y.x) / u, (-f.y - y.y) / c],
                    C = x(P, T);
                  S(P, T) <= -1 && (C = Math.PI), S(P, T) >= 1 && (C = 0);
                  var A = 1 - p ? 1 : -1,
                    V = b + A * (C / 2),
                    G = new CanvablePath.Point(v.x + u * Math.cos(V), v.y + c * Math.sin(V));
                  if ((e.addMarkerAngle(G, V - (A * Math.PI) / 2), e.addMarkerAngle(l, V - A * Math.PI), i.addPoint(l.x, l.y), null != t)) {
                    S = u > c ? u : c;
                    var O = u > c ? 1 : u / c,
                      E = u > c ? c / u : 1;
                    t.translate(v.x, v.y), t.rotate(d), t.scale(O, E), t.arc(0, 0, S, b, b + C, 1 - p), t.scale(1 / O, 1 / E), t.rotate(-d), t.translate(-v.x, -v.y);
                  }
                }
                break;
              case "Z":
              case "z":
                null != t && t.closePath(), (e.current = e.start);
            }
          return i;
        }),
        (this.getMarkers = function () {
          for (var t = this.PathParser.getMarkerPoints(), e = this.PathParser.getMarkerAngles(), i = [], n = 0; n < t.length; n++) i.push([t[n], e[n]]);
          return i;
        });
    }),
      (CanvablePath.trim = function (t) {
        return t.replace(/^\s+|\s+$/g, "");
      }),
      (CanvablePath.compressSpaces = function (t) {
        return t.replace(/[\s\r\t\n]+/gm, " ");
      }),
      (CanvablePath.Point = function (t, e) {
        (this.x = t), (this.y = e);
      }),
      (CanvablePath.Point.prototype.angleTo = function (t) {
        return Math.atan2(t.y - this.y, t.x - this.x);
      }),
      (CanvablePath.Point.prototype.applyTransform = function (t) {
        var e = this.x * t[0] + this.y * t[2] + t[4],
          i = this.x * t[1] + this.y * t[3] + t[5];
        (this.x = e), (this.y = i);
      }),
      (CanvablePath.BoundingBox = function (t, e, n, r) {
        (this.x1 = Number.NaN),
          (this.y1 = Number.NaN),
          (this.x2 = Number.NaN),
          (this.y2 = Number.NaN),
          (this.x = function () {
            return this.x1;
          }),
          (this.y = function () {
            return this.y1;
          }),
          (this.width = function () {
            return this.x2 - this.x1;
          }),
          (this.height = function () {
            return this.y2 - this.y1;
          }),
          (this.addPoint = function (t, e) {
            null != t && ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)),
              null != e && ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = e), (this.y2 = e)), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
          }),
          (this.addX = function (t) {
            this.addPoint(t, null);
          }),
          (this.addY = function (t) {
            this.addPoint(null, t);
          }),
          (this.addBoundingBox = function (t) {
            this.addPoint(t.x1, t.y1), this.addPoint(t.x2, t.y2);
          }),
          (this.addQuadraticCurve = function (t, e, i, n, r, s) {
            var a = t + (2 / 3) * (i - t),
              o = e + (2 / 3) * (n - e),
              h = a + (1 / 3) * (r - t),
              l = o + (1 / 3) * (s - e);
            this.addBezierCurve(t, e, a, h, o, l, r, s);
          }),
          (this.addBezierCurve = function (t, e, n, r, s, a, o, h) {
            var l = [t, e],
              u = [n, r],
              c = [s, a],
              d = [o, h];
            for (this.addPoint(l[0], l[1]), this.addPoint(d[0], d[1]), i = 0; i <= 1; i++) {
              var _ = function (t) {
                  return Math.pow(1 - t, 3) * l[i] + 3 * Math.pow(1 - t, 2) * t * u[i] + 3 * (1 - t) * Math.pow(t, 2) * c[i] + Math.pow(t, 3) * d[i];
                },
                p = 6 * l[i] - 12 * u[i] + 6 * c[i],
                f = -3 * l[i] + 9 * u[i] - 9 * c[i] + 3 * d[i],
                m = 3 * u[i] - 3 * l[i];
              if (0 != f) {
                var g = Math.pow(p, 2) - 4 * m * f;
                if (!(g < 0)) {
                  var y = (-p + Math.sqrt(g)) / (2 * f);
                  0 < y && y < 1 && (0 == i && this.addX(_(y)), 1 == i && this.addY(_(y)));
                  var v = (-p - Math.sqrt(g)) / (2 * f);
                  0 < v && v < 1 && (0 == i && this.addX(_(v)), 1 == i && this.addY(_(v)));
                }
              } else {
                if (0 == p) continue;
                var w = -m / p;
                0 < w && w < 1 && (0 == i && this.addX(_(w)), 1 == i && this.addY(_(w)));
              }
            }
          }),
          (this.isPointInBox = function (t, e) {
            return this.x1 <= t && t <= this.x2 && this.y1 <= e && e <= this.y2;
          }),
          this.addPoint(t, e),
          this.addPoint(n, r);
      });
  },
  function (t, e) {
    (window.dom = {}),
      (dom.body = document.body),
      (dom.svg = document.getElementById("workspace")),
      (dom.center = document.getElementById("center")),
      (dom.canvas = document.getElementById("canvas")),
      (dom.game = document.getElementById("game")),
      (dom.ui_controls = document.getElementById("ui_controls")),
      (dom.ui_play = document.getElementById("ui_play")),
      (dom.ui_undo = document.getElementById("ui_undo")),
      (dom.ui_redo = document.getElementById("ui_redo")),
      (dom.ui_reload = document.getElementById("ui_reload")),
      (dom.ui_next_stage = document.getElementById("ui_next_stage")),
      (dom.stage_score = document.getElementById("stage_score")),
      (dom.final_score = document.getElementById("final_score")),
      (dom.final_score_svg = document.getElementById("final_score_svg")),
      (dom.min_nodes = document.getElementById("min_nodes")),
      (dom.final_score_tweet = document.getElementById("final_score_tweet")),
      (dom.intro = document.getElementById("intro")),
      (dom.tooltip = document.getElementById("tooltip")),
      (dom.tooltip_text = document.getElementById("tooltip_text")),
      (dom.nodes_to_spare = document.getElementById("nodes_to_spare")),
      (dom.placeholder = document.getElementById("placeholder")),
      (dom.pulsator_start = document.getElementById("pulsator_start")),
      (dom.pulsator_end = document.getElementById("pulsator_end")),
      (dom.tut_skip = document.getElementById("tut_skip")),
      (dom.nodes_used = document.getElementById("nodes_used")),
      (dom.nodes_available = document.getElementById("nodes_available")),
      (dom.remaining_nodes = document.getElementById("remaining_nodes")),
      (dom.remaining_text = document.getElementById("remaining_text")),
      (dom.stage_try_again = document.getElementById("stage_try_again")),
      (dom.bbox = document.getElementById("bbox")),
      (dom.available_nodes = dom.svg.getElementById("available_nodes")),
      (dom.marker_circle = dom.svg.getElementById("marker_circle")),
      (dom.defs = dom.svg.querySelector("defs")),
      (dom.problem = dom.svg.getElementById("problem")),
      (dom.startpoint = dom.svg.getElementById("startpoint")),
      (dom.endpoint = dom.svg.getElementById("endpoint")),
      (dom.segments = dom.svg.getElementById("segments")),
      (dom.tutorial = dom.svg.getElementById("tutorial")),
      (dom.replay_tutorial = dom.svg.getElementById("replay_tutorial")),
      (dom.tut_cursor = dom.tutorial.querySelector("#tut_cursor")),
      (dom.tut_click = dom.tutorial.querySelector("#tut_click")),
      (dom.tut_segments = dom.tutorial.querySelector("#tut_segments")),
      (dom.tut_nodes = dom.tutorial.querySelector("#tut_nodes")),
      (dom.tut_key = dom.tutorial.querySelector("#tut_key")),
      (dom.tut_key_move = dom.tutorial.querySelector("#tut_key_move")),
      (dom.tut_key_text = dom.tutorial.querySelector("#tut_key_text")),
      (dom.toArray = function (t) {
        return Array.prototype.slice.call(t, 0);
      }),
      (dom.empty = function (t) {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
      }),
      (dom.remove = function (t) {
        dom.toArray(document.querySelectorAll(t)).forEach(function (t, e) {
          t.parentNode.removeChild(t);
        });
      }),
      (dom.clearPath = function (t) {
        t.setAttribute("d", "M 0 0");
      }),
      (dom.clearCanvas = function (t) {
        t.getContext("2d").clearRect(0, 0, t.width, t.height);
      }),
      (dom.createEl = function (t, e) {
        var i = document.createElementNS("http://www.w3.org/2000/svg", t);
        return (
          Object.keys(e).forEach(function (t) {
            return i.setAttribute(t, e[t]);
          }),
          i
        );
      });
  },
  function (t, e) {
    window.playTutorial = function (t) {
      var e = "http://www.w3.org/2000/svg";
      addRemoveListeners("remove"), (dom.tutorial.style.opacity = 1), (dom.tut_cursor.style.opacity = 1), dom.tut_cursor.setAttribute("x", t[0].coords.x), dom.tut_cursor.setAttribute("y", t[0].coords.y);
      var i = document.createElementNS(e, "path"),
        n = new TimelineMax(),
        r = [];
      function s(t, e) {
        dom.tut_key_text.textContent = t;
        var i = e.x - 50,
          r = e.y - 50;
        dom.tut_key.setAttribute("transform", "translate(" + i + "," + r + ")"),
          n.to(dom.tut_key_move, 0.3, {
            y: 5,
            onStart: function () {
              dom.tut_key.style.opacity = 1;
              var t = e.x - 100,
                i = e.y - 50;
              dom.tut_key.setAttribute("transform", "translate(" + t + "," + i + ")");
            },
          });
      }
      function a(t, e) {
        n.to(dom.tut_key_move, 0.3, { y: 0, delay: 0.5 }), n.to(dom.tut_key, 0.3, { opacity: 0 });
      }
      t.forEach(function (o, h) {
        var l = !!game.config.disconnectKey.match("alt|shift"),
          u = o.coords;
        "click" === o.action &&
          (function (t, s) {
            var a = Math.round(t.x) - 0.5,
              o = Math.round(t.y) - 0.5;
            n.to(dom.tut_click, 0.3, {
              attr: { r: 10 },
              opacity: 0,
              onStart: function () {
                var t = (function (t, i) {
                  var n = document.createElementNS(e, "g"),
                    r = document.createElementNS(e, "circle"),
                    s = document.createElementNS(e, "circle"),
                    a = document.createElementNS(e, "line"),
                    o = document.createElementNS(e, "line"),
                    h = document.createElementNS(e, "rect");
                  return (
                    r.setAttribute("r", 2),
                    r.setAttribute("cx", t),
                    r.setAttribute("cy", i),
                    s.setAttribute("r", 2),
                    s.setAttribute("cx", t),
                    s.setAttribute("cy", i),
                    a.setAttribute("x1", t),
                    a.setAttribute("x2", t),
                    a.setAttribute("y1", i),
                    a.setAttribute("y2", i),
                    o.setAttribute("x1", t),
                    o.setAttribute("x2", t),
                    o.setAttribute("y1", i),
                    o.setAttribute("y2", i),
                    h.setAttribute("width", 5),
                    h.setAttribute("height", 5),
                    h.setAttribute("x", t - 2.5),
                    h.setAttribute("y", i - 2.5),
                    n.appendChild(h),
                    n.appendChild(r),
                    n.appendChild(s),
                    n.appendChild(a),
                    n.appendChild(o),
                    dom.tut_nodes.appendChild(n),
                    { rect: h, cp1: r, cp2: s, li1: a, li2: o, g: n, x: t, y: i }
                  );
                })(a, o);
                r.push(t), 1 === r.length && (i.setAttribute("d", "M  " + a + " " + o), dom.tut_segments.appendChild(i)), dom.tut_click.setAttribute("cx", a), dom.tut_click.setAttribute("cy", o), (t.g.style.opacity = 1);
              },
              onComplete: function () {
                (dom.tut_click.style.opacity = 1), dom.tut_click.setAttribute("r", 0);
                var t = i.createSVGPathSegCurvetoCubicAbs(a, o, a, o, a, o);
                i.pathSegList.appendItem(t);
              },
            });
          })(u),
          "drag" === o.action &&
            (function (e, s, a, o) {
              t[s - 1].coords.x,
                t[s - 1].coords.y,
                n.to(tut_cursor, 0.5, {
                  attr: { x: e.x, y: e.y },
                  onUpdateParams: ["{self}"],
                  onUpdate: function (t) {
                    var e = r.length,
                      n = r[e - 1],
                      s = t.target.x.baseVal.value,
                      h = t.target.y.baseVal.value,
                      l = 2 * (n.x - s) + s,
                      u = 2 * (n.y - h) + h - 1;
                    if (e > 1) {
                      var c = i.pathSegList.getItem(e - 1);
                      a || ((c.x2 = l), (c.y2 = u)), (c.x1 = 2 == e ? r[0].cp2.getAttribute("cx") : r[e - 2].cp1.getAttribute("cx")), (c.y1 = 2 == e ? r[0].cp2.getAttribute("cy") : r[e - 2].cp1.getAttribute("cy"));
                    }
                    if (o) {
                      var d = l;
                      (l = s), (s = d), (d = u), (u = h), (h = d);
                    }
                    o && a
                      ? (n.cp2.setAttribute("cx", l), n.cp2.setAttribute("cy", u), n.li2.setAttribute("x2", l), n.li2.setAttribute("y2", u))
                      : (n.cp1.setAttribute("cx", s), n.cp1.setAttribute("cy", h), n.li1.setAttribute("x2", s), n.li1.setAttribute("y2", h)),
                      a || (n.cp2.setAttribute("cx", l), n.cp2.setAttribute("cy", u), n.li2.setAttribute("x2", l), n.li2.setAttribute("y2", u));
                  },
                });
            })(u, h, o.unMirror, o.isFirst),
          "move" === o.action &&
            (function (t, e, s) {
              n.to(tut_cursor, 1, {
                attr: { x: t.x, y: t.y },
                onUpdateParams: ["{self}"],
                onUpdate: function (t) {
                  var e = r.length,
                    n = r[e - 1],
                    a = t.target.x.baseVal.value,
                    o = t.target.y.baseVal.value,
                    h = i.pathSegList.getItem(e);
                  !s || this.progress() < 0.7
                    ? ((h.x = a), (h.y = o), (h.x2 = n[e > 1 ? "cp1" : "cp2"].getAttribute("cx")), (h.y2 = n[e > 1 ? "cp1" : "cp2"].getAttribute("cy")))
                    : ((h.x = r[0].x), (h.y = r[0].y), (h.x2 = r[0].cp1.getAttribute("cx")), (h.y2 = r[0].cp1.getAttribute("cy")), (h.x1 = n.cp1.getAttribute("cx")), (h.y1 = n.cp1.getAttribute("cy")));
                },
              });
            })(u, 0, o.close),
          "constrain" === o.action && s(game.config.snapAxisKey, u),
          "disconnect" === o.action && l && s(game.config.disconnectKey, u),
          "disconnect" !== o.action || l || game.config.disconnectKey,
          "unconstrain" === o.action && a(game.config.constrainKey),
          "undisconnect" === o.action && a(game.config.disconnectKey),
          "conclude" === o.action &&
            n.to(dom.tutorial, 1, {
              opacity: 0.2,
              onStart: function () {
                game.stage.isTutorial || n.stop(),
                  dom.replay_tutorial.setAttribute("x", game.width / 2),
                  dom.replay_tutorial.setAttribute("y", game.height - 100),
                  dom.replay_tutorial.removeAttribute("class"),
                  (dom.replay_tutorial.style.opacity = 0),
                  TweenMax.to(dom.replay_tutorial, 1, { opacity: 1 });
              },
              onComplete: function () {
                dom.tut_cursor.style.opacity = 0;
                var t = new CustomEvent("stageReady", { detail: {} });
                window.dispatchEvent(t), dom.replay_tutorial.removeAttribute("class");
              },
            });
      });
    };
  },
  function (t, e) {
    stages = [
      {
        name: "Line",
        path: "M 0 0 L 200 0 L 200 200",
        nodes: 3,
        script: [
          { action: "click", coords: { x: 0, y: 0 } },
          { action: "move", coords: { x: 200, y: 0 } },
          { action: "click", coords: { x: 200, y: 0 } },
          { action: "move", coords: { x: 200, y: 200 } },
          { action: "click", coords: { x: 200, y: 200 } },
          { action: "conclude", coords: { x: 200, y: 200 } },
        ],
      },
      {
        name: "Home",
        path: "M 150 0 L 300 150 L 300 400 L 0 400 L 0 150 L 150 0",
        nodes: 5,
        script: [
          { action: "click", coords: { x: 150, y: 0 } },
          { action: "constrain", coords: { x: 150, y: 0 } },
          { action: "move", coords: { x: 300, y: 150 } },
          { action: "click", coords: { x: 300, y: 150 } },
          { action: "move", coords: { x: 300, y: 400 } },
          { action: "click", coords: { x: 300, y: 400 } },
          { action: "move", coords: { x: 0, y: 400 } },
          { action: "click", coords: { x: 0, y: 400 } },
          { action: "move", coords: { x: 0, y: 150 } },
          { action: "click", coords: { x: 0, y: 150 } },
          { action: "move", coords: { x: 150, y: 0 } },
          { action: "click", coords: { x: 150, y: 0 } },
          { action: "unconstrain", coords: { x: 150, y: 0 } },
          { action: "conclude", coords: { x: 150, y: 0 } },
        ],
      },
      {
        name: "Circle",
        path: "M 0 110 C 0 50 50 0 110 0 C 170 0 220 50 220 110 C 220 170 170 220 110 220 C 50 220 0 170 0 110 Z",
        nodes: 4,
        script: [
          { action: "click", coords: { x: 0, y: 110 } },
          { action: "drag", coords: { x: 0, y: 50 }, isFirst: !0 },
          { action: "move", coords: { x: 110, y: 0 } },
          { action: "click", coords: { x: 110, y: 0 } },
          { action: "drag", coords: { x: 170, y: 0 } },
          { action: "move", coords: { x: 220, y: 110 } },
          { action: "click", coords: { x: 220, y: 110 } },
          { action: "drag", coords: { x: 220, y: 170 } },
          { action: "move", coords: { x: 110, y: 220 } },
          { action: "click", coords: { x: 110, y: 220 } },
          { action: "drag", coords: { x: 50, y: 220 } },
          { action: "move", coords: { x: 0, y: 110 }, close: !0 },
          { action: "click", coords: { x: 0, y: 110 } },
          { action: "conclude", coords: { x: 0, y: 110 } },
        ],
      },
      {
        name: "Heart",
        path: "M 150 60 C 0 -60 -100 200 150 300 C 400 200 300 -60 150 60 Z",
        nodes: 2,
        script: [
          { action: "click", coords: { x: 150, y: 60 } },
          { action: "drag", coords: { x: 300, y: 180 }, isFirst: !0 },
          { action: "disconnect", coords: { x: 200, y: 10 } },
          { action: "drag", coords: { x: 300, y: -60 }, unMirror: !0, isFirst: !0 },
          { action: "undisconnect", coords: { x: 300, y: -60 } },
          { action: "move", coords: { x: 150, y: 300 } },
          { action: "click", coords: { x: 150, y: 300 } },
          { action: "drag", coords: { x: -100, y: 400 } },
          { action: "disconnect", coords: { x: 200, y: 400 } },
          { action: "drag", coords: { x: -100, y: 200 }, unMirror: !0 },
          { action: "undisconnect", coords: { x: 150, y: 300 } },
          { action: "move", coords: { x: 150, y: 60 }, close: !0 },
          { action: "click", coords: { x: 150, y: 60 } },
          { action: "conclude", coords: { x: 150, y: 60 } },
        ],
      },
      {
        name: "VW Beetle",
        path:
          "M 602 163 C 595 128 560 69 414 69 C 413 70 381 18 381 18 C 376 7 308 1 253 1 C 138 1 41 101 17 163 L 1 163 L 1 188 L 45 188 C 45 217 69 241 98 241 C 127 241 150 217 150 188 L 440 188 C 440 217 463.5 241 493 241 C 522 241 545 217 545 188 L 619 188 L 619 163 Z",
        nodes: 15,
        minNodes: 9,
      },
      {
        name: "Plane",
        path:
          "M 152 0 L 117.5 10.28 L 189 97.76 L 98.23 127.41 L 14.88 85.90 L 0 97.76 L 47.62 154.84 C 47.62 154.84 70 190 124.34 175 C 124.34 175 469.55 58.47 471.78 57.72 C 531.32 21.40 508.25 2.12 455.41 8.79 C 454.67 9.53 305.10 59.21 305.10 59.21 L 151.95 0 Z",
        nodes: 12,
        minNodes: 10,
      },
      {
        name: "Clip",
        path:
          "M 14.00 194.15 C 14.00 194.15 131.09 77.31 167.21 41.18 C 242.85 -34.52 322.87 47.16 248.11 121.96 C 165.57 204.55 161.08 208.73 95.74 274.11 C 53.65 316.23 0.06 259.74 40.65 219.11 C 107.72 152.00 177.43 83.84 204.95 56.30 C 229.75 31.48 256.55 58.00 230.77 83.81 C 186.06 128.54 67.36 245.72 67.36 245.72",
        nodes: 10,
        minNodes: 8,
      },
      {
        name: "Wrench",
        path: "M 53 2 C 143 -9 179.56 51.84 157 115 C 152 129 240 191 261 212 C 282 233 279 255 265 269 C 251 283 231 287 211 266 C 191.28 245.29 127 161 117 162 C 37 177 1 158 0 55 L 57 111 C 84 105 105 87 110 60 C 109 59 52 2 53 2 Z",
        nodes: 10,
        minNodes: 8,
      },
      {
        name: "Cloud",
        path:
          "M 333 221.88 C 360.36 220 382 197.32 382 169.50 C 382 140.5 358.50 117 329.50 117 C 327.74 117 326 117 324.29 117.25 C 319 77 284.15 46 242 46 C 241.09 46 240.19 46.02 239.29 46.04 C 221 18.31 189.67 0 154 0 C 98.11 0 52.73 44.94 52.01 100.66 C 22.58 105 0 130.36 0 161 C 0 191.28 22 217.41 51 222.18 C 51 222.18 331.84 221.96 333 221.88 ZM 333 222 L 333 222 C 331.84 222 333 222 333 222 Z",
        nodes: 8,
        minNodes: 5,
      },
      {
        name: "Profile",
        path:
          "M 256.49 58.61 C 268.21 81.36 278.56 124.8 278.56 133.07 C 278.56 141.35 269.05 149.15 277.18 161.34 C 285.45 173.75 302 190.99 302 203.40 C 302 215.81 271.66 206.85 281.32 228.22 C 287.52 242.70 275.80 242.01 275.80 242.01 C 289.59 252.36 266.84 258.56 272.35 273.04 C 277.87 287.52 273.73 304.07 242.70 304.07 C 184.79 304.07 188.23 304.07 188.23 345.44 C 188.23 386.81 39.99 385.43 40 346.13 C 39.99 306.83 46.89 276.49 46.89 276.49 C 46.89 217.19 0 250.98 0 113.77 C 0 37.23 68.26 0 117.90 0 C 167.55 0 248.22 34.47 252.36 4.14 C 266.84 4.14 274.42 35.16 256.49 58.61 Z",
        nodes: 16,
        minNodes: 9,
      },
      {
        name: "Duck",
        path:
          "M 400 58.76 C 374.62 58.76 344.57 52.75 335.89 42.74 C 327.21 32.72 315.19 0 285.14 0 C 255.09 0 230.38 14.02 230.38 53.42 C 230.38 92.82 245.08 140.23 255.76 162.27 C 196.33 103.51 114.86 99.50 0 172.96 L 57.43 255.76 L 334.56 255.76 C 334.56 180.30 310.52 146.91 285.14 98.83 C 315.19 98.83 331.89 78.80 331.89 78.80 L 362.60 78.80 C 389.98 78.59 400 58.76 400 58.76 Z",
        nodes: 12,
        minNodes: 9,
      },
      {
        name: "Cap",
        path:
          "M 88 184 C 88 184 14.5 209 8 211 C 1.5 213 0.5 197.5 1 184 C 1.5 170.5 -7 46.5 112 10 C 103 1.5 138.5 -4.5 135 5 C 242 -7 278 64 303 136 C 303.5 136.5 371.5 172.5 372 173 C 394.5 187.5 396.5 225.5 361 209 C 325.5 192.5 311 180 311 180 C 260.5 189 212.5 274 139 225 C 93.65 194.77 88 184 88 184 Z",
        nodes: 11,
        minNodes: 9,
      },
      {
        name: "Letter",
        path:
          "M 71.29 326 C 123.62 326 170.94 290.45 171 230.67 C 170.94 190.06 146.92 152.50 142.42 143.31 C 137.92 132.58 115.69 100.39 115.69 72.04 C 115.69 44.45 137.17 23.76 152.18 23.76 C 167.19 23.76 167.94 36.02 171.70 45.22 C 177.01 58.24 188.39 63.61 197.49 63.61 C 208.87 63.61 221 52.88 221 39.08 C 221 9.20 189.90 0 167.19 0 C 114.17 0 72.48 49.05 72.48 93.50 C 71.73 128.75 89.16 155.57 94.46 168.60 C 103.90 193.12 126.66 224.54 126.66 257.49 C 126.66 284.32 106.18 304.24 84.19 304.24 C 65.22 304.24 61.43 295.81 56.88 282.78 C 52.33 269.76 42.47 258.26 25.79 258.26 C 9.86 258.26 0 272.82 0 283.55 C 0 308.74 27.30 326 71.29 326 L 71.29 326 Z",
        nodes: 12,
        minNodes: 6,
      },
      {
        name: "Flag",
        path:
          "M 274 26.50 C 274 100.81 6 -45.39 6 26.50 C 6 98.38 6 63.05 6 63.05 C 6 -8.84 274 137.36 274 63.05 L 274 99.60 C 274 173.91 6 27.71 6 99.60 C 6 171.48 6 136.15 6 136.15 C 6 64.26 274 210.46 274 136.15 C 274 136.15 274 173.30 274 173.91 C 274 248.23 7.22 100.81 7.22 172.70 L 7.22 286",
        nodes: 17,
        minNodes: 9,
      },
    ];
  },
  function (t, e) {
    var i = new (function () {
      var t = !1;
      function e(t, e) {
        window.addRemoveListeners("remove"), e || (e = {});
        var i = t.cloneNode(!0),
          n = t.getTotalLength();
        i.setAttribute("stroke-dashoffset", n),
          i.setAttribute("stroke-dasharray", n + " " + n),
          i.removeAttribute("class"),
          i.removeAttribute("id"),
          dom.segments.appendChild(i),
          TweenMax.to(i, n / 500, {
            attr: { "stroke-dashoffset": e.delete ? n / 2 : 0 },
            ease: e.delete ? Bounce.easeOut : Power2.easeOut,
            onComplete: function () {
              if ((t.parentNode.removeChild(t), e.delete))
                !(function (t, e) {
                  dom.placeholder.setAttribute("class", "hidden"),
                    TweenMax.to(t, e / 500 / 2, {
                      attr: { "stroke-dashoffset": e },
                      ease: Power2.easeIn,
                      onComplete: function () {
                        dom.placeholder.removeAttribute("class"), window.addRemoveListeners("add"), game.stage.removeLastNode();
                      },
                    });
                })(i, n);
              else {
                var r = new CustomEvent("nodeAdded", { detail: { isFinished: e.nextStage, node: game.stage.lastNode() } });
                window.dispatchEvent(r), window.addRemoveListeners("add"), (e.redo && 0 !== window.undoStack.length) || ((window.undoStack = []), dom.ui_redo.classList.remove("active"));
              }
              e.nextStage &&
                (addRemoveListeners("remove"),
                (function () {
                  if ((dom.body.classList.remove("disabled", "stageStarted"), game.stage.isTutorial)) return game.nextStage();
                  (dom.problem.style.opacity = 0.1),
                    dom.placeholder.setAttribute("d", "M 0 0"),
                    Array.from(dom.svg.querySelectorAll(".node_group")).forEach(function (t, e) {
                      TweenMax.to(t, 0.5, { opacity: 0.2 });
                    }),
                    (dom.ui_controls.style.display = "none");
                  var t = game.stage.pathIsOpen ? 0 : 1,
                    e = game.stage.nodes().length - t;
                  (dom.nodes_used.textContent = e), (game.score += game.stage.totalNodes - e), dom.stage_score.querySelector(".normal").classList.remove("hidden");
                  var i = new CustomEvent("scoreDisplayed", { detail: { logo: game.stage.logo } });
                  window.dispatchEvent(i), (dom.nodes_available.textContent = game.stage.totalNodes), dom.stage_score.classList.remove("slidden");
                })());
            },
          });
      }
      function i(t, e) {
        return hsluv.hsluvToHex([(360 / t) * e, 100, 60]);
      }
      (this.addNode = function (e, n) {
        (dom.pulsator_start.style.opacity = 0), (dom.placeholder.style.opacity = 1);
        var r = game.stage.totalNodes,
          s = game.stage.nodes(),
          a = s.length,
          o = i(a, r),
          h = e.x,
          l = e.y,
          u = dom.createEl("rect", { x: h - 2.5, y: l - 2.5, width: 5, height: 5, fill: o }),
          c = dom.createEl("circle", { cx: h, cy: l, r: 2.5, fill: o }),
          d = dom.createEl("circle", { cx: h, cy: l, r: 2.5, fill: o }),
          _ = dom.createEl("line", { x1: h, y1: l, x2: h, y2: l, stroke: o }),
          p = dom.createEl("line", { x1: h, y1: l, x2: h, y2: l, stroke: o }),
          f = dom.createEl("g", { class: "node_group" });
        if ((f.appendChild(u), f.appendChild(c), f.appendChild(d), f.appendChild(_), f.appendChild(p), dom.center.appendChild(f), a > 1)) {
          var m = s[a - 2],
            g = n.isEnded && !game.stage.pathIsOpen;
          dom.placeholder.setAttribute("d", "M " + m.x + " " + m.y + "C " + m.cx1 + " " + m.cy1 + " " + (g ? s[0].cx2 : e.x) + " " + (g ? s[0].cy2 : e.y) + " " + e.x + " " + e.y);
        }
        t = { start: e, square: u, circle1: c, circle2: d, line1: _, line2: p };
      }),
        (this.updateSegment = function (e, i) {
          if (
            (t.circle1.setAttribute("cx", e.cx1),
            t.circle1.setAttribute("cy", e.cy1),
            t.circle2.setAttribute("cx", e.cx2),
            t.circle2.setAttribute("cy", e.cy2),
            t.line1.setAttribute("x2", e.cx1),
            t.line1.setAttribute("y2", e.cy1),
            t.line2.setAttribute("x2", e.cx2),
            t.line2.setAttribute("y2", e.cy2),
            !(e.index < 1 || i.redo))
          ) {
            var n = dom.placeholder.getPathData()[0],
              r = dom.placeholder.getPathData()[1];
            if ("C" === r.type) {
              var s = [
                { type: "M", values: [n.values[0], n.values[1]] },
                { type: "C", values: [r.values[0], r.values[1], e.cx2, e.cy2, r.values[4], r.values[5]] },
              ];
              dom.placeholder.setPathData(s);
            }
          }
        }),
        (this.updatePlaceholder = function (e, i) {
          var n = t.gradient;
          n && (n.setAttribute("x2", i.x), n.setAttribute("y2", i.y));
          var r = " M " + e.x + " " + e.y + " C " + e.cx1 + " " + e.cy1 + " " + (i.cx2 ? i.cx2 : i.x) + " " + (i.cy2 ? i.cy2 : i.y) + " " + i.x + " " + i.y;
          dom.placeholder.setAttribute("d", r);
        }),
        (this.commitSegment = function (n, r) {
          var s = game.stage.nodes();
          if (s.length > 1) {
            var a = s[s.length - 2],
              o = s[s.length - 1],
              h = r.isEndpointClicked && !game.stage.pathIsOpen;
            dom.placeholder.setAttribute("d", "M " + a.x + " " + a.y + " C " + a.cx1 + " " + a.cy1 + " " + (h ? s[0].cx2 : o.cx2) + " " + (h ? s[0].cy2 : o.cy2) + " " + o.x + " " + o.y);
          }
          var l = dom.placeholder.cloneNode();
          l.removeAttribute("id"), l.setAttribute("class", "placeholder"), dom.segments.appendChild(l);
          var u = !(function (t) {
              var e = new CanvablePath(dom.problem.getAttribute("d")),
                i = new CanvablePath(t.getAttribute("d")),
                n = dom.canvas.getContext("2d"),
                r = dom.canvas.width,
                s = dom.canvas.height;
              n.clearRect(0, 0, r, s),
                (n.strokeStyle = "#f00"),
                (n.lineWidth = "10"),
                (n.lineCap = "round"),
                e.draw(n),
                n.stroke(),
                (n.globalCompositeOperation = "destination-over"),
                (n.strokeStyle = "#0f0"),
                (n.lineWidth = "1"),
                i.draw(n),
                n.stroke();
              for (var a = n.getImageData(0, 0, r, s).data, o = 1, h = a.length; o < h; o += 4) if (a[o] > 200) return !1;
              return !0;
            })(l),
            c = !1;
          if (
            (r.isEnded &&
              (c = (function () {
                for (var t = dom.problem.getTotalLength(), e = 0, i = dom.segments.querySelectorAll("path"), n = 0, r = i.length; n < r; n++) e += i[n].getTotalLength();
                return t / 2 > e;
              })()),
            u || c)
          )
            return e(l, { delete: !0 });
          if (!u && r.isEnded) return e(l, { nextStage: !0 });
          if ((s.length > 1 && e(l, { redo: r.redo }), 1 === s.length)) {
            var d = new CustomEvent("nodeAdded", { detail: { node: game.stage.lastNode() } });
            window.dispatchEvent(d);
          }
          var _ = game.stage.totalNodes,
            p = s.length,
            f = i(p, _),
            m = i(p + 1, _),
            g = (function () {
              function t() {
                return Math.floor(65536 * (1 + Math.random()))
                  .toString(16)
                  .substring(1);
              }
              return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
            })(),
            y = dom.createEl("linearGradient", { id: g, x1: n.x, y1: n.y, x2: n.x, y2: n.y, gradientUnits: "userSpaceOnUse", class: "gradient" });
          [f, m].forEach(function (t, e) {
            var i = dom.createEl("stop", { offset: e, "stop-color": t });
            y.appendChild(i);
          }),
            dom.defs.appendChild(y),
            (t.gradient = y),
            dom.placeholder.setAttribute("stroke", "url(#" + g);
        }),
        (this.drawProblem = function (t) {
          var e,
            i,
            n = dom.center.removeChild(dom.problem);
          n.setAttribute("d", t),
            (n.style.opacity = 1),
            dom.center.insertBefore(n, dom.placeholder),
            (e = dom.problem.getPointAtLength(0)),
            (i = dom.problem.getPointAtLength(dom.problem.getTotalLength())),
            dom.startpoint.setAttribute("cx", e.x),
            dom.startpoint.setAttribute("cy", e.y),
            dom.startpoint.removeAttribute("class"),
            dom.pulsator_start.setAttribute("cx", e.x),
            dom.pulsator_start.setAttribute("cy", e.y),
            dom.pulsator_end.setAttribute("cx", i.x),
            dom.pulsator_end.setAttribute("cy", i.y),
            dom.endpoint.setAttribute("cx", i.x),
            dom.endpoint.setAttribute("cy", i.y),
            dom.endpoint.removeAttribute("class");
        }),
        (this.clean = function () {
          dom.empty(dom.segments), dom.empty(dom.tut_segments), dom.empty(dom.tut_nodes), dom.remove(".node_group"), dom.clearPath(dom.placeholder), dom.clearCanvas(dom.canvas), dom.problem.setAttribute("opacity", 1);
        }),
        (this.removeLastNode = function () {
          var t = dom.center.querySelector(".node_group:last-child");
          dom.defs.querySelector(".gradient:last-child");
          t && dom.center.removeChild(t);
          var e = dom.segments.lastChild;
          e && dom.segments.removeChild(e);
          var i = dom.defs.querySelector(".gradient:last-child").id;
          dom.placeholder.setAttribute("d", "M 0 0"), dom.placeholder.setAttribute("stroke", "url(#" + i + ")");
        });
    })();
    window.Stage = function (t, e) {
      if (!t.path) throw "Path is required";
      var n = [],
        r = this,
        s = -1;
      (this.path = t.path), (this.totalNodes = t.nodes || 0), (this.started = !1), (this.isTutorial = void 0 !== t.script), (this.logo = t.logo), (this.stageIndex = e), (this.minNodes = t.minNodes || 0), (this.offset = { x: 0, y: 0 });
      r = this;
      function a(t, e) {
        var i = 180 / game.config.snapAxisAngle,
          n = Math.PI / i,
          r = e.x - t.x,
          s = e.y - t.y,
          a = Math.atan2(s, r),
          o = Math.sqrt(r * r + s * s),
          h = Math.round(a / n) * n;
        return { x: parseInt(t.x, 10) + o * Math.cos(h), y: parseInt(t.y, 10) + o * Math.sin(h) };
      }
      return (
        (this.pathIsOpen = "z" != t.path[t.path.length - 1].toLowerCase()),
        (this.center = function () {
          var t = dom.problem.getBBox(),
            e = window.innerWidth / 2 - t.width / 2,
            i = window.innerHeight / 2 - t.height / 2;
          dom.center.setAttribute("transform", "translate(" + e + "," + i + ")"), (r.offset = { x: e, y: i });
        }),
        (this.nodes = function (t) {
          return n;
        }),
        (this.remainingNodes = function () {
          return r.totalNodes - n.length;
        }),
        (this.addNode = function (t, e) {
          if (!e) return n.push(t), s++, i.addNode(t), i.updateSegment(t, { redo: !0 }), void i.commitSegment(t, { redo: !0 });
          e.snapAxis && s > -1 && (t = a(n[s], t)), s++;
          var r = { x: t.x, y: t.y, cx1: t.x, cy1: t.y, cx2: t.x, cy2: t.y, index: s };
          return n.push(r), i.addNode(r, e), r;
        }),
        (this.removeNode = function (t) {
          var e = null;
          (e = t ? n.splice(t, 1) : n.pop()), s--;
          var i = new CustomEvent("nodeRemoved", { detail: { node: e } });
          return window.dispatchEvent(i), e;
        }),
        (this.removeLastNode = function () {
          return n.length < 1 ? r.clean() : (i.removeLastNode(), r.removeNode());
        }),
        (this.clean = function (t) {
          i.clean();
          new CustomEvent("stagedCleaned");
          n = [];
        }),
        (this.isEmpty = function () {
          return Boolean(n.length);
        }),
        (this.updateNode = function (t, e) {
          var o = n[s];
          e.dragging
            ? (e.snapAxis && (t = a(o, t)), (o.cx1 = t.x), (o.cy1 = t.y), "mirrored" === e.type && ((o.cx2 = 2 * (o.x - t.x) + t.x), (o.cy2 = 2 * (o.y - t.y) + t.y)), i.updateSegment(o, { redo: !1 }))
            : -1 != s && (e.snapAxis && (t = a(o, t)), t.node && !r.pathIsOpen && ((t.cx2 = t.node.cx2), (t.cy2 = t.node.cy2)), i.updatePlaceholder(o, t));
        }),
        (this.commitNode = function (t, e) {
          i.commitSegment(t, e);
        }),
        (this.lastNode = function () {
          return n[s];
        }),
        (function (e) {
          dom.stage_score.classList.add("slidden"),
            dom.replay_tutorial.setAttribute("class", "hidden"),
            dom.intro.classList.toggle("hidden", e.stageIndex > 0),
            i.drawProblem(r.path),
            t.script
              ? playTutorial(t.script)
              : (function () {
                  (dom.tutorial.style.opacity = 0), (dom.replay_tutorial.style.display = "none"), (dom.tut_skip.style.display = "none");
                  var t = new CustomEvent("stageReady", { detail: {} });
                  window.dispatchEvent(t);
                })();
          var n = new CustomEvent("stageLoaded", { detail: { totalNodes: r.totalNodes, hasTutorial: r.isTutorial, minNodes: r.minNodes } });
          window.dispatchEvent(n), r.clean(), r.center();
        })(this),
        this
      );
    };
  },
  function (t, e) {
    window.Game = function () {
      (this.practiceApp = null),
        (this.browser = { isMac: -1 != navigator.platform.indexOf("Mac"), isIE: -1 != navigator.userAgent.indexOf("MSIE"), cmdKey: -1 != navigator.platform.indexOf("Mac") ? "metaKey" : "ctrlKey", isSupported: !!document.createElementNS });
      var t = { firstNodeIsMirrored: !0, snapAxisAngle: 45, snapAxisKey: "shift", disconnectKey: "alt", reconnectKey: null, mode: "mirrored" };
      (this.config = t), (this.currentStageIndex = 0), (this.width = window.innerWidth), (this.height = window.innerHeight), (this.score = 0);
      var e = this;
      window.addEventListener("load", function () {
        r(),
          e.browser.isMac &&
            [dom.ui_undo, dom.ui_redo, dom.ui_reload].forEach(function (t) {
              var e = t.querySelector("span"),
                i = e.textContent.replace("ctrl", "⌘");
              e.textContent = i.split(" ").join("");
            });
        e.browser.isIE && dom.marker_circle.setAttribute("r", 5);
        dom.tut_skip.addEventListener("click", function () {
          addRemoveListeners("remove"), e.play(4);
        });
      }),
        window.addEventListener("resize", r),
        window.addEventListener("stageLoaded", function (t) {
          (window.undoStack = []),
            dom.ui_redo.classList.remove("active"),
            dom.ui_reload.classList.remove("active"),
            dom.ui_undo.classList.remove("active"),
            dom.body.classList.remove("disabled"),
            Array.from(dom.stage_score.querySelectorAll(".message")).forEach(function (t) {
              t.classList.add("hidden");
            }),
            dom.empty(dom.available_nodes),
            (dom.min_nodes.textContent = t.detail.minNodes);
            dom.problem.style.opacity = .99;
        }),
        window.addEventListener("stageReady", function () {
          setTimeout(function () {
            dom.pulsator_start.style.opacity = 1;
          }, 0),
            i.play();
        }),
        window.addEventListener("nodeAdded", function (t) {
          if ((i.stop(), t.detail.isFinished)) return;
          dom.remaining_nodes.setAttribute("transform", "translate(" + (t.detail.node.x + 10) + "," + (t.detail.node.y - 10) + ")"),
            (dom.remaining_nodes.style.opacity = "1"),
            (dom.remaining_text.textContent = e.stage.remainingNodes()),
            e.stage.remainingNodes() < 1 ? dom.body.classList.add("disabled") : dom.body.classList.remove("disabled");
          TweenMax.to(dom.remaining_nodes, 0.5, { opacity: 0, delay: 1 }), dom.ui_undo.classList.add("active"), dom.ui_reload.classList.add("active");
        }),
        window.addEventListener("nodeRemoved", function (t) {
          var i = e.stage.remainingNodes();
          (dom.remaining_text.textContent = i), game.stage.nodes().length || dom.ui_reload.classList.add("active");
          i && dom.body.classList.remove("disabled");
        });
      var i = new TimelineMax()
        .repeat(-1)
        .to(dom.pulsator_start, 0.3, { attr: { r: 5 }, delay: 1 })
        .to(dom.pulsator_start, 0.3, { attr: { r: 0 } })
        .stop();
      function n() {
        if ((e.currentStageIndex++, e.currentStageIndex >= stages.length)) return e.showScore(e.score);
        (dom.ui_controls.style.display = "block"), e.play(e.currentStageIndex);
      }
      function r() {
        dom.canvas.setAttribute("width", window.innerWidth), dom.canvas.setAttribute("height", window.innerHeight), (e.width = window.innerWidth), (e.height = window.innerHeight);
      }
      dom.ui_next_stage.addEventListener("click", n),
        (this.play = function (t) {
          if (((dom.game.style.display = "block"), addRemoveListeners("add"), t || (t = 0), !stages[t])) throw "Stage not found";
          (e.currentStageIndex = t), (e.stage = new Stage(stages[t], t));
        }),
        (this.nextStage = n),
        (this.showScore = function (t) {
          function e(t, e) {
            return hsluv.hsluvToHex([(360 / t) * e, 100, 60]);
          }
          (dom.nodes_to_spare.textContent = t),
            dom.final_score.classList.remove("hidden"),
            dom.stage_score.classList.add("hidden"),
            TweenMax.fromTo(
              dom.final_score,
              1,
              { scale: 1.3 },
              {
                scale: 1,
                onComplete: function () {
                  for (var i = 0; i < t; i++) {
                    var n = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    n.setAttribute("stroke", e(i + 1, t)),
                      n.setAttribute("x1", 5 * i + 5.5),
                      n.setAttribute("x2", 5 * i + 5.5),
                      n.setAttribute("y1", 55),
                      n.setAttribute("y2", 55),
                      dom.final_score_svg.appendChild(n),
                      TweenMax.to(n, 1.5, { attr: { y1: 20 }, ease: Elastic.easeOut, delay: (10 * i) / 500 });
                  }
                },
              }
            ),
            dom.final_score_tweet.addEventListener("click", function () {
              var e = "text=I completed the Bezier Game with " + t + " nodes to spare",
                i = (game.width - 575) / 2,
                n = "status=1,width=575,height=400,top=" + (game.height - 400) / 2 + ",left=" + i;
              window.open("http://twitter.com/share?" + e + "&url=http://bezier.method.ac", "twitter", n);
            });
        });
    };
  },
  function (t, e) {
    window.game = new Game();
  },
  function (t, e) {
    !(function () {
      var t = dom.svg,
        e = t.createSVGPoint(),
        i = !1,
        n = !1,
        r = !1,
        s = !1;
      function a(e) {
        var i = "addEventListener";
        "add" != e && (i = "removeEventListener"),
          window[i]("keydown", h),
          window[i]("keyup", l),
          document[i]("contextmenu", g),
          t[i]("mousemove", p),
          t[i]("mousedown", _),
          t[i]("mouseup", f),
          t[i]("mouseleave", m),
          t[i]("mouseenter", y),
          dom.ui_undo[i]("click", u),
          dom.ui_redo[i]("click", c),
          dom.ui_reload[i]("click", d);
      }
      (window.undoStack = []),
        dom.startpoint.addEventListener("mousedown", function () {
          a("add");
        }),
        dom.stage_try_again.addEventListener("click", d),
        dom.replay_tutorial.addEventListener("click", d),
        window.addEventListener("resize", function () {
          game.stage.center();
        });
      var o = !!game.config.disconnectKey.match("alt|shift");
      function h(t) {
        90 === t.keyCode && t[game.browser.cmdKey] && !t.shiftKey && u(t), ((89 === t.keyCode && t[game.browser.cmdKey]) || (90 === t.keyCode && t[game.browser.cmdKey] && t.shiftKey)) && c(t);
      }
      function l() {
        return !1;
      }
      function u(t) {
        if ((t.preventDefault(), undoStack.push(game.stage.removeLastNode()), !game.stage.nodes().length)) return dom.startpoint.removeAttribute("class"), dom.ui_undo.classList.remove("active");
        dom.ui_redo.classList.add("active");
      }
      function c(t) {
        if ((t.preventDefault(), undoStack.length)) {
          var e = undoStack.pop();
          game.stage.addNode(e);
        }
        undoStack.length || dom.ui_redo.classList.remove("active");
      }
      function d(t) {
        t.preventDefault(), game.play(game.stage.stageIndex);
      }
      function _(t) {
        return (
          (i = !0),
          "startpoint" === t.target.id && (n = !0),
          (r = "endpoint" === t.target.id),
          !!n &&
            (dom.body.classList.contains("disabled") && !r
              ? (s = !0)
              : (dom.body.classList.contains("disabled") || (s = !1),
                r && dom.body.classList.remove("disabled"),
                dom.body.classList.add("stageStarted"),
                game.stage.addNode(v(t), { isEnded: r, isStarted: n, snapAxis: t[game.config.snapAxisKey + "Key"], type: game.config.mode, dragging: i }),
                void dom.startpoint.setAttribute("class", "hidden")))
        );
      }
      function p(t) {
        game.stage && n && (s && i && !r && (i = !1), game.stage.updateNode(v(t), { isEnded: r, isStarted: n, snapAxis: t[game.config.snapAxisKey + "Key"], type: game.config.mode, dragging: i }));
      }
      function f(t) {
        if (n) {
          if (s && !r)
            return (
              dom.pulsator_end.removeAttribute("class"),
              TweenMax.to(dom.pulsator_end, 0.3, { attr: { r: 5 } }),
              TweenMax.to(dom.pulsator_end, 0.3, { attr: { r: 0 }, delay: 0.3 }),
              dom.ui_reload.classList.add("suggested"),
              void setTimeout(function () {
                dom.ui_reload.classList.remove("suggested");
              }, 300)
            );
          (i = !1), game.stage.commitNode(v(t), { isEnded: r, isEndpointClicked: "endpoint" === t.target.id, isStarted: n, snapAxis: t[game.config.snapAxisKey + "Key"], type: game.config.mode, dragging: i });
        }
      }
      function m() {
        dom.placeholder.style.opacity = "0";
      }
      function g(t) {
        return t.preventDefault(), !1;
      }
      function y() {
        dom.placeholder.style.opacity = "1";
      }
      function v(i) {
        return "endpoint" === i.target.id || "startpoint" === i.target.id
          ? { x: parseInt(i.target.getAttribute("cx"), 10), y: parseInt(i.target.getAttribute("cy"), 10), node: game.stage.nodes()[0] }
          : (function (i) {
              var n = game.stage.offset;
              return (e.x = i.clientX - n.x), (e.y = i.clientY - n.y), e.matrixTransform(t.getScreenCTM().inverse());
            })(i);
      }
      window.addEventListener("keydown", function (t) {
        if (o) {
          var e = 18;
          "shift" === game.config.disconnectKey && (e = 16), e === t.keyCode && (game.config.mode = "disconnected");
        } else {
          game.config.mode;
          game.config.reconnectKey.charCodeAt(0) === t.keyCode && "mirrored", game.config.disconnectKey.charCodeAt(0) === t.keyCode && "disconnected";
          game.config.disconnectKey.charCodeAt(0);
          e === t.keyCode && (game.config.mode = "disconnected");
        }
      }),
        window.addEventListener("keyup", function (t) {
          if (o) {
            var e = 18;
            "shift" === game.config.disconnectKey && (e = 16), e === t.keyCode && (game.config.mode = "mirrored");
          } else {
            var i = game.config.reconnectKey,
              e = i.charCodeAt(0);
            e === t.keyCode && (game.config.mode = "mirrored");
          }
        }),
        (window.addRemoveListeners = a);
    })();
  },
  function (t, e) {
    window.addEventListener("keypress", function (t) {
      13 === t.keyCode && "" === window.location.hostname && game.nextStage();
    });
  },
  function (t, e) {
    game.play && game.play();
  },
]);
