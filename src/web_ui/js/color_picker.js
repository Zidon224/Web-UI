/*
Component: Alwan color picker js utils
Date created: 15.07.2023
Original source: https://github.com/SofianChouaib/alwan
Original author: Sefiane Chouaib
Date created (original): March 3, 2023
Modified: no
*/




!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define("Alwan", [], e) : "object" == typeof exports ? (exports.Alwan = e()) : (t.Alwan = e());
})(self, function () {
    return (function () {
        "use strict";
        var t = {
                d: function (e, s) {
                    for (var n in s) t.o(s, n) && !t.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: s[n] });
                },
                o: function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                },
            },
            e = {};
        t.d(e, {
            default: function () {
                return Jt;
            },
        });
        const s = "alwan",
            n = `${s}__container`,
            r = `${s}__palette`,
            o = `${s}__marker`,
            i = `${s}__preview`,
            l = `${s}__button`,
            a = `${s}__copy-button`,
            h = `${s}__slider`,
            p = `${s}__sliders`,
            c = `${s}__slider--hue`,
            u = `${s}__slider--alpha`,
            _ = `${s}__input`,
            d = `${s}__inputs`,
            g = `${s}__swatch`,
            f = `${s}__swatches`,
            b = `${s}__preset-button`,
            m = `${s}__backdrop`,
            w = `${s}__toggle-button`,
            y = `${s}--popup`,
            v = `${s}--open`,
            $ = `${s}--collapse`,
            x = document,
            L = x.documentElement,
            A = "#000",
            S = "button",
            H = "open",
            O = "close",
            M = "color",
            j = "click",
            k = "pointerdown",
            V = "pointermove",
            z = "pointerup",
            B = "keydown",
            C = "input",
            E = "change",
            F = "rgb",
            I = "hsl",
            D = ["hex", F, I],
            P = "afterbegin",
            Z = "afterend",
            q = "beforeend",
            K = { ArrowRight: 1, ArrowLeft: -1 },
            N = { ArrowDown: 1, ArrowUp: -1 },
            R = (t, e, s) => {
                t.addEventListener(e, s);
            },
            T = (t, e, s) => {
                t.removeEventListener(e, s);
            },
            { keys: U, assign: G, setPrototypeOf: J, prototype: Q } = Object,
            { from: W, isArray: X } = Array,
            Y = (t, e) => {
                let s = U(t);
                for (const n of s) e(t[n], n);
            },
            tt = (t) => "string" == typeof t,
            et = (t) => null != t,
            st = ({ shared: t, toggle: e }) => t || e,
            nt = () => x.body,
            rt = (t, e = nt(), s = !1) => (tt(t) && t.trim() ? e["querySelector" + (s ? "All" : "")](t) : t instanceof Element && nt().contains(t) && t !== nt() ? t : null),
            ot = (t, e, s = q) => {
                t && e && e.insertAdjacentElement(s, t);
            },
            it = (t, e) => {
                t.innerHTML = e;
            },
            lt = (t, e, s, n, r) => {
                const o = x.createElement(t || "div");
                return (
                    e && (o.className = e),
                    Y(n || {}, (t, e) => {
                        "html" === e ? it(o, t) : t && o.setAttribute(e, t);
                    }),
                    s && ot(o, s, r),
                    o
                );
            },
            at = (t) => {
                let e, s, n, r, o, i;
                return t === x ? ((e = s = 0), (n = o = L.clientWidth), (r = i = L.clientHeight)) : ({ x: e, y: s, width: n, height: r, right: o, bottom: i } = t.getBoundingClientRect()), [e, s, n, r, o, i];
            },
            ht = (t, e) => (t.replaceWith(e), e),
            pt = (t) => (t && t.remove(), null),
            ct = (t, e = [x]) => (t && (t = t.parentElement), t && t !== nt() ? (/auto|scroll|overflow|clip|hidden/.test(getComputedStyle(t).overflow) && e.push(t), ct(t, e)) : e),
            ut = (t, e, s) => (t ? t.style[et(s) ? "setProperty" : "getPropertyValue"]("--alwan-" + e, s) : ""),
            _t = (t, e, s) => {
                tt(e) && (e = [e]),
                    e.forEach((e) => {
                        e && t.classList.toggle(e, s);
                    });
            },
            dt = (t, e, s, n) => lt(S, l + " " + t, e, G({ type: S }, s), n),
            gt = (t, e, s) => {
                t.style.transform = `translate(${e}px,${s}px)`;
            },
            ft = (t, e, s, n) => lt(C, h + " " + t, e, { type: "range", max: s, step: n }),
            bt = (t, e) => lt("", n, t, {}, e),
            mt = (t, e) => {
                let s = t || dt(b, nt()),
                    n = [],
                    r = () => {
                        e.toggle();
                    };
                return {
                    t: () => s,
                    i({ preset: e, classname: o }) {
                        t && e !== (t !== s) && (s = e ? ht(t, dt(b, null, { id: t.id })) : ht(s, t)), R(s, j, r), (t && !e) || !tt(o) || (_t(s, n, !1), (n = o.split(/\s+/)), _t(s, n, !0));
                    },
                    p(t) {
                        if (et(t)) {
                            const { config: n, u: r } = e,
                                o = r.m._;
                            (n.disabled = s.disabled = !!t), t ? o(e, !1, !0) : st(n) || o(e, !0, !0);
                        }
                    },
                    v() {
                        t ? (this.i({ preset: !1 }), T(s, j, r)) : (s = pt(s));
                    },
                };
            },
            { parseFloat: wt, parseInt: yt, isFinite: vt } = Number,
            { min: $t, max: xt, abs: Lt, round: At, PI: St } = Math,
            Ht = (t, e = 100, s = 0) => $t(xt(t, s), e),
            Ot = (t) => ((At(t) % 360) + 360) % 360,
            Mt = { top: [1, 5, 4, 0], bottom: [5, 1, 4, 0], right: [4, 0, 1, 5], left: [0, 4, 1, 5] },
            jt = { start: [0, 1, 2], center: [1, 0, 2], end: [2, 1, 0] },
            kt = (t, e) => {
                let s = null,
                    n = !1;
                const r = (n, r = e) => {
                        const a = (e = r).u,
                            { theme: h, popover: p, target: c, position: u, margin: _, id: d } = n,
                            g = e.$.t(),
                            f = rt(c) || g,
                            b = st(n);
                        tt(d) && !Kt(a) && (t.id = d),
                            Y(a, ({ i: t }) => {
                                t && t(n, e);
                            }),
                            (t.dataset.theme = h),
                            b || l(e, !0, !0),
                            (g.style.display = p || b ? "" : "none"),
                            _t(t, y, p),
                            s && (s.v(), (s = null)),
                            p
                                ? (s = ((t, e, { A: s, H: n }, r, o) => {
                                      tt(s) && (s = wt(s));
                                      const i = vt(s) ? s : 0,
                                          [l, a] = tt(n) ? n.split("-") : [],
                                          h = Mt[l] || Mt.bottom,
                                          p = jt[a] || jt.center,
                                          c = ct(t),
                                          u = () => {
                                              const s = at(x),
                                                  n = at(t),
                                                  r = at(e),
                                                  o = [];
                                              h.some((t) => {
                                                  let e = t % 2;
                                                  const l = s[t],
                                                      a = n[t],
                                                      h = i + r[e + 2];
                                                  if (h <= Lt(l - a)) {
                                                      (o[e] = a + (t <= 1 ? -h : i)), (e = (e + 1) % 2);
                                                      const l = r[e + 2],
                                                          c = n[e],
                                                          u = n[e + 4],
                                                          _ = s[e + 4] - c,
                                                          d = (l + n[e + 2]) / 2;
                                                      return p.some((t) => (0 === t && l <= _ ? ((o[e] = c), !0) : 1 === t && d <= u && d <= _ ? ((o[e] = u - d), !0) : 2 === t && l <= u && ((o[e] = u - l), !0))), !0;
                                                  }
                                              }),
                                                  gt(e, ...o.map((t, e) => At(et(t) ? t : (s[e + 4] - r[e + 2]) / 2)));
                                          },
                                          _ = () =>
                                              c.every((e) => {
                                                  const [s, n, , , r, o] = at(t),
                                                      [i, l, , , a, h] = at(e);
                                                  return n < h && o > l && s < a && r > i;
                                              }),
                                          d = () => {
                                              r(u, _);
                                          },
                                          g = (t) => {
                                              c.forEach((e) => {
                                                  t(e, "scroll", d);
                                              }),
                                                  t(window, "resize", d),
                                                  t(x, B, o),
                                                  t(x, k, o);
                                          };
                                      return (
                                          u(),
                                          g(R),
                                          {
                                              O: u,
                                              v() {
                                                  g(T), (e.style.transform = "");
                                              },
                                          }
                                      );
                                  })(f, t, { A: _, H: u }, o, i))
                                : ot(t, f, f === g ? Z : q),
                            e.M.O({}, null, !0);
                    },
                    o = (t, s) => {
                        (!n && st(e.config)) || (s() ? (n ? (t(), e.config.closeOnScroll && l(e, !1)) : l(e, !0, !0)) : l(e, !1, !0));
                    },
                    i = (s) => {
                        if (n) {
                            let n,
                                r,
                                o,
                                i,
                                { target: a, key: h, shiftKey: p } = s,
                                c = e.$.t();
                            "Escape" === h || (a !== c && !t.contains(a) && !W(c.labels || []).some((t) => t.contains(a)))
                                ? l(e, !1)
                                : "Tab" === h && ((n = W(rt("button,input,[tabindex]", t, !0))), (r = n[0]), (o = n.pop()), a !== c || p ? ((p && a === r) || (!p && a === o)) && (i = c) : (i = r), i && (s.preventDefault(), i.focus()));
                        }
                    },
                    l = (s, o, i) => {
                        const h = (s = s || e).config;
                        (h.disabled && !i) || (et(o) || (n && s !== e && l(e, !1), (o = !n)), o !== n && (st(h) || i) && (o && (s !== e && r(h, s), o && a()), s === e && ((n = o), _t(t, v, o), e.k.j(o ? H : O, t))));
                    },
                    a = () => {
                        s && s.O();
                    };
                return {
                    V: r,
                    B: a,
                    _: l,
                    C: () => n,
                    v: () => {
                        s && s.v(), pt(t);
                    },
                };
            },
            Vt = '<svg width="18" height="18" viewBox="0 0 24 24" aria-role="none"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg>',
            zt = (t, e) => {
                let s = "",
                    n = t.a,
                    r = e;
                return n < 1 && ((r += "a"), (s = ", " + n)), e === F ? r + `(${t.r}, ${t.g}, ${t.b + s})` : r + `(${t.h}, ${t.s}%, ${t.l}%${s})`;
            },
            Bt = lt("canvas").getContext("2d"),
            Ct = /^hsla?\(\s*([+-]?\d*\.?\d+)(\w*)?\s*[\s,]\s*([+-]?\d*\.?\d+)%?\s*,?\s*([+-]?\d*\.?\d+)%?(?:\s*[\/,]\s*([+-]?\d*\.?\d+)(%)?)?\s*\)?$/,
            Et = /^#[0-9a-f]{6}$/i,
            Ft = { deg: 1, turn: 360, rad: 180 / St, grad: 0.9 },
            It = (t = "", e) => {
                let s,
                    n,
                    r = "";
                tt(t) ? (r = t.trim()) : ((t = t || {}), (n = [F, I].find((e) => e.split("").every((e) => vt(wt(t[e]))))), n && (r = zt(t, n)));
                let [o, i, l, a, h, p = 1, c] = Ct.exec(r) || [];
                if (o) (s = { h: Ot(i * (Ft[l] ? Ft[l] : 1)), s: At(Ht(a)), l: At(Ht(h)), a: Ht(c ? p / 100 : p, 1) }), (n = I);
                else if (((n = F), (Bt.fillStyle = A), (Bt.fillStyle = r), (r = Bt.fillStyle), Et.test(r))) s = { r: yt(r.slice(1, 3), 16), g: yt(r.slice(3, 5), 16), b: yt(r.slice(5, 7), 16), a: 1 };
                else {
                    const [t, e, n, o] = /\((.+)\)/
                        .exec(r)[1]
                        .split(",")
                        .map((t) => wt(t));
                    s = { r: t, g: e, b: n, a: o };
                }
                return (s.a = At(100 * s.a) / 100), (r = zt(s, n)), e ? r : [s, n, r];
            },
            Dt = (t, e) => {
                let s, n, r;
                return {
                    i({ swatches: o, toggleSwatches: i }, l) {
                        (e = l || e),
                            (n = []),
                            X(o) &&
                                ((n = o),
                                (s = pt(s)),
                                (r = pt(r)),
                                o.length &&
                                    ((s = lt("", f, t)),
                                    o.forEach((t) => {
                                        ut(dt(g, s), M, It(t, !0));
                                    }),
                                    i && ((r = dt(w, t, { html: '<svg width="20" height="20" viewBox="0 0 24 24" aria-role="none"><path d="M6.984 14.016l5.016-5.016 5.016 5.016h-10.031z"></path></svg>' })), R(r, j, () => _t(s, $))),
                                    R(s, j, ({ target: t }) => {
                                        t !== s && e.M.F(ut(t, M), t, !0);
                                    })));
                    },
                    I(t) {
                        (e.config.swatches = [...n, ...t]), this.i(e.config);
                    },
                    D(t) {
                        (e.config.swatches = n.filter((e, s) => !t.some((t) => t === e || yt(t) === s))), this.i(e.config);
                    },
                };
            };
        let Pt = null,
            Zt = 0;
        const qt = (t) => {
                const e = lt("", s, nt()),
                    n = kt(e, t),
                    l = ((t, e) => {
                        let s,
                            n,
                            i,
                            l,
                            a = !1;
                        const h = lt("", r, t, { tabindex: "0" }),
                            p = lt("", o, h),
                            c = (t, r) => {
                                let o,
                                    l,
                                    [a, c, u, _] = i;
                                t ? ((a = t.clientX - a), (c = t.clientY - c)) : ((a = s + (r.x * u) / 100), (c = n + (r.y * _) / 100)),
                                    (a = Ht(a, u)),
                                    (c = Ht(c, _)),
                                    (a === s && c === n) || ((s = a), (n = c), gt(p, s, n), (o = 1 - c / _), (l = o * (1 - a / (2 * u))), e.M.O({ S: 1 === l || 0 === l ? 0 : (o - l) / $t(l, 1 - l), L: l }, h));
                            },
                            u = (t) => {
                                a && c(t);
                            },
                            _ = (t) => {
                                a && (e.M.P(h, !0), (l = pt(l)), (a = !1));
                            };
                        return (
                            R(h, k, (t) => {
                                l || (l = lt("", m, L)), e.M.Z(), (i = at(h)), (a = !0), c(t);
                            }),
                            R(x, V, u),
                            R(x, z, _),
                            R(h, B, (t) => {
                                const s = t.key,
                                    n = K[s] || 0,
                                    r = N[s] || 0,
                                    o = e.M;
                                (n || r) && (t.preventDefault(), (i = at(h)), o.Z(), c(null, { x: n, y: r }), o.P(h, !0));
                            }),
                            {
                                i(t, s) {
                                    e = s || e;
                                },
                                O({ h: t, S: e, L: r }, o) {
                                    ut(h, "h", t), o && ((i = at(h)), (n = r + e * $t(r, 1 - r)), (s = (n ? 2 * (1 - r / n) : 0) * i[2]), (n = (1 - n) * i[3]), gt(p, s, n));
                                },
                                v() {
                                    T(x, V, u), T(x, z, _);
                                },
                            }
                        );
                    })(e, t),
                    h = bt(e),
                    g = ((t, e) => {
                        let s, n, r;
                        const o = (t) => {
                                (r = t), it(n, t ? '<svg width="18" height="18" viewBox="0 0 24 24" aria-role="none"><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"></path></svg>' : Vt);
                            },
                            l = (t) => {
                                let e = lt(C, "", L, { value: t });
                                e.select(), x.execCommand("copy"), (e = pt(e)), o(!0);
                            },
                            h = () => {
                                if (!r && !e.config.disabled) {
                                    const t = navigator.clipboard,
                                        s = e.M.q(!0);
                                    t
                                        ? t
                                              .writeText(s)
                                              .then(() => o(!0))
                                              .catch(() => l(s))
                                        : l(s);
                                }
                            };
                        return {
                            i({ preview: l, copy: p }, c) {
                                (e = c), (s = pt(s)), (n = pt(n)), l && (s = lt("", i, t, {}, P)), p && ((n = dt(a, s || t, { html: Vt }, P)), R(n, j, h), R(n, "blur", () => r && o(!1)), R(n, "mouseout", () => n.blur()));
                            },
                            K(t) {
                                ut(s, M, t);
                            },
                        };
                    })(h, t),
                    f = ((t, e) => {
                        let s;
                        const n = lt("", p, t),
                            r = ft(c, n, 360),
                            o = ({ target: t, type: s, target: { value: n } }) => {
                                s === E ? e.M.P(t) : e.M.O(t === r ? { h: 360 - n } : { a: 1 * n }, t);
                            };
                        return (
                            R(n, C, o),
                            R(n, E, o),
                            {
                                i({ opacity: t }, r) {
                                    (e = r || e), (s = pt(s)), t ? (s = ft(u, n, 1, 0.01)) : e.M.O({ a: 1 });
                                },
                                O({ h: t, a: e }, n, o) {
                                    ut(s, F, n), o && ((r.value = 360 - t), s && (s.value = e));
                                },
                            }
                        );
                    })(h, t),
                    b = ((t, e) => {
                        let s,
                            n,
                            r,
                            o,
                            i,
                            l = [],
                            a = !1;
                        const h = () => e.config.singleInput || "hex" === l[o],
                            p = () => {
                                (i = {}), pt(n), (n = lt("", d, s, {}, P));
                                const t = e.M.q(),
                                    r = l[o];
                                (h() ? [r] : (r + (e.config.opacity ? "a" : "")).split("")).forEach((e) => {
                                    const s = lt("label", "", n);
                                    (i[e] = lt(C, _, s, { type: "text", value: t[e] + "" })), lt("span", "", s, { html: e });
                                }),
                                    R(n, C, u),
                                    R(n, E, u),
                                    R(n, "focusin", (t) => {
                                        t.target.select();
                                    }),
                                    R(n, B, (t) => {
                                        "Enter" === t.key && e.close();
                                    });
                            },
                            c = () => {
                                (o = (o + 1) % l.length), e.M.N(l[o]), p();
                            },
                            u = ({ target: t, type: s }) => {
                                if (s === E) e.M.P(t, !0), (a = !1);
                                else {
                                    a || (e.M.Z(), (a = !0));
                                    let s = t.value,
                                        n = {};
                                    h() ||
                                        (Y(i, (t, e) => {
                                            n[e] = wt(t.value);
                                        }),
                                        (s = zt(n, l[o]))),
                                        e.M.F(s, t);
                                }
                            };
                        return {
                            i({ inputs: n, format: i }, a) {
                                (e = a || e), (l = D), !0 !== (n = n || {}) && (l = l.filter((t) => n[t]));
                                const h = l.length;
                                h || (l = D),
                                    (o = xt(l.indexOf(i), 0)),
                                    e.M.N(l[o]),
                                    (s = pt(s)),
                                    (r = pt(r)),
                                    h && ((s = bt(t, Z)), p(), h > 1 && ((r = dt("", s, { html: '<svg width="15" height="15" viewBox="0 0 20 20" aria-role="none"><path d="M10 1L5 8h10l-5-7zm0 18l5-7H5l5 7z"></path></svg>' })), R(r, j, c)));
                            },
                            R(t) {
                                a ||
                                    Y(i || {}, (e, s) => {
                                        e.value = t[s];
                                    });
                            },
                        };
                    })(h, t);
                return { m: n, T: l, U: g, G: f, J: b, W: Dt(e, t) };
            },
            Kt = (t) => !!Pt && t === Pt,
            Nt = (t) => {
                if (Kt(t)) {
                    if ((Zt--, Zt > 0)) return;
                    Pt = null;
                }
                t.m.v(), t.T.v(), (t = {});
            },
            Rt = (t) => (t < 16 ? "0" : "") + t.toString(16),
            Tt = (t, e, s) => ((t %= 12), At(255 * (s - e * $t(s, 1 - s) * xt(-1, $t(t - 3, 9 - t, 1))))),
            Ut = (t) => {
                let e, s;
                const n = { h: 0, S: 0, L: 0, s: 0, l: 0, r: 0, g: 0, b: 0, a: 1, rgb: "", hex: "", hsl: "" },
                    r = t.config;
                return {
                    O(e, s, o = !1, i) {
                        if (!r.disabled) {
                            const { r: r, g: l, b: a, a: h } = n;
                            G(n, e), G(n, { s: At(100 * n.S), l: At(100 * n.L) }, i || (({ h: t, S: e, L: s }) => ({ r: Tt((t /= 30), e, s), g: Tt(t + 8, e, s), b: Tt(t + 4, e, s) }))(n));
                            const { J: p, T: c, G: u, U: _ } = t.u,
                                d = zt(n, F),
                                [g, f] = (({ r: t, g: e, b: s, a: n }) => ["#" + Rt(t) + Rt(e) + Rt(s), n < 1 ? Rt(At(255 * n)) : ""])(n);
                            (n.hsl = zt(n, I)), (n.hex = g + f), (n.rgb = d), ut(t.$.t(), M, d), c.O(n, o), _.K(d), u.O(n, g, o), p.R(n), !s || (n.r === r && n.g === l && n.b === a && n.a === h) || t.k.j(M, s);
                        }
                    },
                    Z() {
                        e = n[s];
                    },
                    P(r, o) {
                        (!o || (o && e !== n[s])) && t.k.j(E, r);
                    },
                    F(t, e, s) {
                        let r,
                            o,
                            [i, l, a] = It(t);
                        n[l] !== a &&
                            (l === F
                                ? ((r = i),
                                  (o = (({ r: t, g: e, b: s, a: n }) => {
                                      const r = xt((t /= 255), (e /= 255), (s /= 255)),
                                          o = $t(t, e, s),
                                          i = r - o,
                                          l = (r + o) / 2;
                                      return { h: Ot(60 * (0 === i ? 0 : r === t ? ((e - s) / i) % 6 : r === e ? (s - t) / i + 2 : r === s ? (t - e) / i + 4 : 0)), S: i ? i / (1 - Lt(2 * l - 1)) : 0, L: l, a: n };
                                  })(r)))
                                : ((o = i), (o.S = i.s / 100), (o.L = i.l / 100)),
                            this.O(o, e, !0, r),
                            s && this.P(e));
                    },
                    X: () => ({ h: n.h, s: n.s, l: n.l, r: n.r, g: n.g, b: n.b, a: n.a, hex: n.hex, rgb: n.rgb, hsl: n.hsl }),
                    N(t) {
                        s = r.format = t;
                    },
                    q: (t) => (t ? n[s] : n),
                };
            },
            Gt = {
                id: "",
                classname: "",
                theme: "light",
                toggle: !0,
                popover: !0,
                position: "bottom-start",
                margin: 0,
                preset: !0,
                color: A,
                default: A,
                target: "",
                disabled: !1,
                format: "rgb",
                singleInput: !1,
                inputs: { rgb: !0, hex: !0, hsl: !0 },
                opacity: !0,
                preview: !0,
                copy: !0,
                swatches: [],
                shared: !1,
                toggleSwatches: !1,
                closeOnScroll: !1,
            };
        class Jt {
            static version = "1.2.1";
            static defaults = Gt;
            constructor(t, e) {
                const s = this;
                (s.config = G({}, Jt.defaults)),
                    (s.k = ((t) => {
                        const e = { [H]: [], [O]: [], [E]: [], [M]: [] };
                        return {
                            j(s, n) {
                                t.config.disabled ||
                                    (e[s] || []).forEach((e) => {
                                        e(G({ type: s, source: n }, t.M.X()));
                                    });
                            },
                            Y(t, s) {
                                e[t] && !e[t].includes(s) && e[t].push(s);
                            },
                            tt(t, s) {
                                et(t)
                                    ? e[t] && (et(s) ? (e[t] = e[t].filter((t) => t !== s)) : (e[t] = []))
                                    : Y(e, (t, s) => {
                                          e[s] = [];
                                      });
                            },
                        };
                    })(s)),
                    (s.M = Ut(s)),
                    (s.$ = mt(rt(t), s)),
                    s.setOptions(e);
            }
            setOptions(t) {
                t = t || {};
                let e,
                    s,
                    n = this,
                    r = n.config,
                    { color: o, disabled: i } = t,
                    l = n.M;
                n.$.p(i),
                    r.disabled ||
                        (G(r, t),
                        (n.u = e = ((t) => {
                            let {
                                u: e,
                                config: { shared: s },
                            } = t;
                            if (e) {
                                if (Kt(e) === s) return e;
                                e.m._(t, !1, !0), Nt(e);
                            }
                            return s ? (Pt || (Pt = qt(t)), Zt++, Pt) : qt(t);
                        })(n)),
                        n.$.i(r),
                        (s = e.m),
                        Kt(e) && s._(null, !1),
                        s.V(r, n),
                        et(o) && l.F(o));
            }
            isOpen() {
                return this.u.m.C();
            }
            open() {
                this.u.m._(this, !0);
            }
            close() {
                this.u.m._(this, !1);
            }
            toggle() {
                this.u.m._(this);
            }
            on(t, e) {
                this.k.Y(t, e);
            }
            off(t, e) {
                this.k.tt(t, e);
            }
            setColor(t) {
                return this.M.F(t), this;
            }
            getColor() {
                return this.M.X();
            }
            addSwatches(...t) {
                this.u.W.I(t);
            }
            removeSwatches(...t) {
                this.u.W.D(t);
            }
            enable() {
                this.$.p(!1);
            }
            disable() {
                this.$.p(!0);
            }
            reset() {
                this.M.F(this.config.default);
            }
            reposition() {
                this.u.m.B();
            }
            trigger(t) {
                this.k.j(t);
            }
            destroy() {
                const t = this;
                t.$.v(),
                    Nt(t.u),
                    Y(t, (e, s) => {
                        delete t[s];
                    }),
                    J(t, Q);
            }
        }
        return (e = e.default);
    })();
});
//# sourceMappingURL=alwan.min.js.map