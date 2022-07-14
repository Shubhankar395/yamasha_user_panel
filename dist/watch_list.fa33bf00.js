/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ !function(a1, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a1.document ? b(a1, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a1);
}("undefined" != typeof window ? window : this, function(a2, b1) {
    "use strict";
    var c1 = [], d1 = a2.document, e1 = Object.getPrototypeOf, f1 = c1.slice, g1 = c1.concat, h1 = c1.push, i1 = c1.indexOf, j1 = {}, k1 = j1.toString, l1 = j1.hasOwnProperty, m1 = l1.toString, n1 = m1.call(Object), o1 = {};
    function p1(a, b) {
        b = b || d1;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }
    var q1 = "3.2.1", r1 = function(a, b) {
        return new r1.fn.init(a, b);
    }, s1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t1 = /^-ms-/, u1 = /-([a-z])/g, v1 = function(a, b) {
        return b.toUpperCase();
    };
    r1.fn = r1.prototype = {
        jquery: q1,
        constructor: r1,
        length: 0,
        toArray: function() {
            return f1.call(this);
        },
        get: function(a) {
            return null == a ? f1.call(this) : a < 0 ? this[a + this.length] : this[a];
        },
        pushStack: function(a) {
            var b = r1.merge(this.constructor(), a);
            return b.prevObject = this, b;
        },
        each: function(a) {
            return r1.each(this, a);
        },
        map: function(a) {
            return this.pushStack(r1.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(f1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [
                this[c]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: h1,
        sort: c1.sort,
        splice: c1.splice
    }, r1.extend = r1.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r1.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h])) for(b in a)c = g[b], d = a[b], g !== d && (j && d && (r1.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r1.isPlainObject(c) ? c : {}, g[b] = r1.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, r1.extend({
        expando: "jQuery" + (q1 + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r1.type(a);
        },
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = r1.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k1.call(a)) && (!(b = e1(a)) || (c = l1.call(b, "constructor") && b.constructor, "function" == typeof c && m1.call(c) === n1));
        },
        isEmptyObject: function(a) {
            var b;
            for(b in a)return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j1[k1.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            p1(a);
        },
        camelCase: function(a) {
            return a.replace(t1, "ms-").replace(u1, v1);
        },
        each: function(a, b) {
            var c, d = 0;
            if (w1(a)) {
                for(c = a.length; d < c; d++)if (b.call(a[d], d, a[d]) === !1) break;
            } else for(d in a)if (b.call(a[d], d, a[d]) === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s1, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w1(Object(a)) ? r1.merge(c, "string" == typeof a ? [
                a
            ] : a) : h1.call(c, a)), c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i1.call(b, a, c);
        },
        merge: function(a, b) {
            for(var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for(var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e, f = 0, h = [];
            if (w1(a)) for(d = a.length; f < d; f++)e = b(a[f], f, c), null != e && h.push(e);
            else for(f in a)e = b(a[f], f, c), null != e && h.push(e);
            return g1.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r1.isFunction(a)) return d = f1.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f1.call(arguments)));
            }, e.guid = a.guid = a.guid || r1.guid++, e;
        },
        now: Date.now,
        support: o1
    }), "function" == typeof Symbol && (r1.fn[Symbol.iterator] = c1[Symbol.iterator]), r1.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j1["[object " + b + "]"] = b.toLowerCase();
    });
    function w1(a) {
        var b = !!a && "length" in a && a.length, c = r1.type(a);
        return "function" !== c && !r1.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    var x1 = function(a3) {
        var b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2, q2, r2, s2, t2, u2 = "sizzle" + 1 * new Date, v2 = a3.document, w2 = 0, x2 = 0, y2 = ha(), z2 = ha(), A = ha(), B = function(a, b) {
            return a === b && (l2 = !0), 0;
        }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) {
            for(var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function(a, b) {
            return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        }, da = function() {
            m2();
        }, ea = ta(function(a) {
            return a.disabled === !0 && ("form" in a || "label" in a);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v2.childNodes), v2.childNodes), D[v2.childNodes.length].nodeType;
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while(a[c++] = b[d++]);
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v2) !== n2 && m2(b), b = b || n2, p2)) {
                if (11 !== w && (l = Z.exec(a))) {
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d;
                        } else if (s && (j = s.getElementById(f)) && t2(b, j) && j.id === f) return d.push(j), d;
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c2.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                    }
                }
                if (c2.qsa && !A[a + " "] && (!q2 || !q2.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u2), o = g2(a), h = o.length;
                        while(h--)o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally{
                        k === u2 && b.removeAttribute("id");
                    }
                }
            }
            return i2(a.replace(P, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d2.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u2] = !0, a;
        }
        function ja(a) {
            var b = n2.createElement("fieldset");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally{
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = c.length;
            while(e--)d2.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) {
                while(c = c.nextSibling)if (c === b) return -1;
            }
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
            };
        }
        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while(g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c2 = ga.support = {}, f2 = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName;
        }, m2 = ga.setDocument = function(a4) {
            var b3, e3, g3 = a4 ? a4.ownerDocument || a4 : v2;
            return g3 !== n2 && 9 === g3.nodeType && g3.documentElement ? (n2 = g3, o2 = n2.documentElement, p2 = !f2(n2), v2 !== n2 && (e3 = n2.defaultView) && e3.top !== e3 && (e3.addEventListener ? e3.addEventListener("unload", da, !1) : e3.attachEvent && e3.attachEvent("onunload", da)), c2.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c2.getElementsByTagName = ja(function(a) {
                return a.appendChild(n2.createComment("")), !a.getElementsByTagName("*").length;
            }), c2.getElementsByClassName = Y.test(n2.getElementsByClassName), c2.getById = ja(function(a) {
                return o2.appendChild(a).id = u2, !n2.getElementsByName || !n2.getElementsByName(u2).length;
            }), c2.getById ? (d2.filter.ID = function(a5) {
                var b = a5.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }, d2.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p2) {
                    var c = b.getElementById(a);
                    return c ? [
                        c
                    ] : [];
                }
            }) : (d2.filter.ID = function(a6) {
                var b = a6.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }, d2.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p2) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [
                            f
                        ];
                        e = b.getElementsByName(a), d = 0;
                        while(f = e[d++])if (c = f.getAttributeNode("id"), c && c.value === a) return [
                            f
                        ];
                    }
                    return [];
                }
            }), d2.find.TAG = c2.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c2.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while(c = f[e++])1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d2.find.CLASS = c2.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p2) return b.getElementsByClassName(a);
            }, r2 = [], q2 = [], (c2.qsa = Y.test(n2.querySelectorAll)) && (ja(function(a) {
                o2.appendChild(a).innerHTML = "<a id='" + u2 + "'></a><select id='" + u2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q2.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q2.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u2 + "-]").length || q2.push("~="), a.querySelectorAll(":checked").length || q2.push(":checked"), a.querySelectorAll("a#" + u2 + "+*").length || q2.push(".#.+[+~]");
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n2.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q2.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q2.push(":enabled", ":disabled"), o2.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q2.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q2.push(",.*:");
            })), (c2.matchesSelector = Y.test(s2 = o2.matches || o2.webkitMatchesSelector || o2.mozMatchesSelector || o2.oMatchesSelector || o2.msMatchesSelector)) && ja(function(a) {
                c2.disconnectedMatch = s2.call(a, "*"), s2.call(a, "[s!='']:x"), r2.push("!=", N);
            }), q2 = q2.length && new RegExp(q2.join("|")), r2 = r2.length && new RegExp(r2.join("|")), b3 = Y.test(o2.compareDocumentPosition), t2 = b3 || Y.test(o2.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) {
                    while(b = b.parentNode)if (b === a) return !0;
                }
                return !1;
            }, B = b3 ? function(a, b) {
                if (a === b) return l2 = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c2.sortDetached && b.compareDocumentPosition(a) === d ? a === n2 || a.ownerDocument === v2 && t2(v2, a) ? -1 : b === n2 || b.ownerDocument === v2 && t2(v2, b) ? 1 : k2 ? I(k2, a) - I(k2, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l2 = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [
                    a
                ], h = [
                    b
                ];
                if (!e || !f) return a === n2 ? -1 : b === n2 ? 1 : e ? -1 : f ? 1 : k2 ? I(k2, a) - I(k2, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while(c = c.parentNode)g.unshift(c);
                c = b;
                while(c = c.parentNode)h.unshift(c);
                while(g[d] === h[d])d++;
                return d ? la(g[d], h[d]) : g[d] === v2 ? -1 : h[d] === v2 ? 1 : 0;
            }, n2) : n2;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n2 && m2(a), b = b.replace(S, "='$1']"), c2.matchesSelector && p2 && !A[b + " "] && (!r2 || !r2.test(b)) && (!q2 || !q2.test(b))) try {
                var d = s2.call(a, b);
                if (d || c2.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n2, null, [
                a
            ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n2 && m2(a), t2(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n2 && m2(a);
            var e = d2.attrHandle[b.toLowerCase()], f = e && C.call(d2.attrHandle, b.toLowerCase()) ? e(a, b, !p2) : void 0;
            return void 0 !== f ? f : c2.attributes || !p2 ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l2 = !c2.detectDuplicates, k2 = !c2.sortStable && a.slice(0), a.sort(B), l2) {
                while(b = a[f++])b === a[f] && (e = d.push(f));
                while(e--)a.splice(d[e], 1);
            }
            return k2 = null, a;
        }, e2 = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for(a = a.firstChild; a; a = a.nextSibling)c += e2(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while(b = a[d++])c += e2(b);
            return c;
        }, d2 = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g2(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a7) {
                    var b = a7.replace(_, aa).toLowerCase();
                    return "*" === a7 ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a8) {
                    var b = y2[a8 + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a8 + "(" + K + "|$)"), y2(a8, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    }));
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
                    };
                },
                CHILD: function(a9, b4, c, d, e) {
                    var f = "nth" !== a9.slice(0, 3), g = "last" !== a9.slice(-4), h = "of-type" === b4;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while(p){
                                    m = b;
                                    while(m = m[p])if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a9 && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [
                                g ? q.firstChild : q.lastChild
                            ], g && s) {
                                m = q, l = m[u2] || (m[u2] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a9] || [], n = j[0] === w2 && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while(m = ++n && m && m[p] || (t = n = 0) || o.pop())if (1 === m.nodeType && ++t && m === b) {
                                    k[a9] = [
                                        w2,
                                        n,
                                        t
                                    ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[u2] || (m[u2] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a9] || [], n = j[0] === w2 && j[1], t = n), t === !1) {
                                while(m = ++n && m && m[p] || (t = n = 0) || o.pop())if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u2] || (m[u2] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a9] = [
                                    w2,
                                    t
                                ]), m === b)) break;
                            }
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a10, b) {
                    var c3, e = d2.pseudos[a10] || d2.setFilters[a10.toLowerCase()] || ga.error("unsupported pseudo: " + a10);
                    return e[u2] ? e(b) : e.length > 1 ? (c3 = [
                        a10,
                        a10,
                        "",
                        b
                    ], d2.setFilters.hasOwnProperty(a10.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while(g--)d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c3);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a11) {
                    var b5 = [], c = [], d = h2(a11.replace(P, "$1"));
                    return d[u2] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while(h--)(f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b5[0] = a, d(b5, null, f, c), b5[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa), function(b) {
                        return (b.textContent || b.innerText || e2(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function(b) {
                        var c;
                        do if (c = p2 ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a3.location && a3.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o2;
                },
                focus: function(a) {
                    return a === n2.activeElement && (!n2.hasFocus || n2.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for(a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d2.pseudos.empty(a);
                },
                header: function(a) {
                    return X.test(a.nodeName);
                },
                input: function(a) {
                    return W.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: pa(function() {
                    return [
                        0
                    ];
                }),
                last: pa(function(a, b) {
                    return [
                        b - 1
                    ];
                }),
                eq: pa(function(a, b, c) {
                    return [
                        c < 0 ? c + b : c
                    ];
                }),
                even: pa(function(a, b) {
                    for(var c = 0; c < b; c += 2)a.push(c);
                    return a;
                }),
                odd: pa(function(a, b) {
                    for(var c = 1; c < b; c += 2)a.push(c);
                    return a;
                }),
                lt: pa(function(a, b, c) {
                    for(var d = c < 0 ? c + b : c; --d >= 0;)a.push(d);
                    return a;
                }),
                gt: pa(function(a, b, c) {
                    for(var d = c < 0 ? c + b : c; ++d < b;)a.push(d);
                    return a;
                })
            }
        }, d2.pseudos.nth = d2.pseudos.eq;
        for(b2 in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })d2.pseudos[b2] = ma(b2);
        for(b2 in {
            submit: !0,
            reset: !0
        })d2.pseudos[b2] = na(b2);
        function ra() {}
        ra.prototype = d2.filters = d2.pseudos, d2.setFilters = new ra, g2 = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z2[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d2.preFilter;
            while(h){
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for(g in d2.filter)!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z2(a, i).slice(0);
        };
        function sa(a) {
            for(var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value;
            return d;
        }
        function ta(a, b6, c4) {
            var d = b6.dir, e4 = b6.next, f = e4 || d, g = c4 && "parentNode" === f, h = x2++;
            return b6.first ? function(b, c, e) {
                while(b = b[d])if (1 === b.nodeType || g) return a(b, c, e);
                return !1;
            } : function(b, c, i) {
                var j, k, l, m = [
                    w2,
                    h
                ];
                if (i) {
                    while(b = b[d])if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                } else while(b = b[d])if (1 === b.nodeType || g) {
                    if (l = b[u2] || (b[u2] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e4 && e4 === b.nodeName.toLowerCase()) b = b[d] || b;
                    else {
                        if ((j = k[f]) && j[0] === w2 && j[1] === h) return m[2] = j[2];
                        if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }
                return !1;
            };
        }
        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while(e--)if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function va(a, b, c) {
            for(var d = 0, e = b.length; d < e; d++)ga(a, b[d], c);
            return c;
        }
        function wa(a, b, c, d, e) {
            for(var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g;
        }
        function xa(a, b, c, d, e, f3) {
            return d && !d[u2] && (d = xa(d)), e && !e[u2] && (e = xa(e, f3)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [
                    h
                ] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while(k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while(k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while(k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }
        function ya(a12) {
            for(var b, c5, e5, f = a12.length, g = d2.relative[a12[0].type], h = g || d2.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b;
            }, h, !0), l = ta(function(a) {
                return I(b, a) > -1;
            }, h, !0), m = [
                function(a, c, d) {
                    var e = !g && (d || c !== j2) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e;
                }
            ]; i < f; i++)if (c5 = d2.relative[a12[i].type]) m = [
                ta(ua(m), c5)
            ];
            else {
                if (c5 = d2.filter[a12[i].type].apply(null, a12[i].matches), c5[u2]) {
                    for(e5 = ++i; e5 < f; e5++)if (d2.relative[a12[e5].type]) break;
                    return xa(i > 1 && ua(m), i > 1 && sa(a12.slice(0, i - 1).concat({
                        value: " " === a12[i - 2].type ? "*" : ""
                    })).replace(P, "$1"), c5, i < e5 && ya(a12.slice(i, e5)), e5 < f && ya(a12 = a12.slice(e5)), e5 < f && sa(a12));
                }
                m.push(c5);
            }
            return ua(m);
        }
        function za(a, b) {
            var c = b.length > 0, e = a.length > 0, f4 = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j2, x = f || e && d2.find.TAG("*", k), y = w2 += null == v ? 1 : Math.random() || .1, z = x.length;
                for(k && (j2 = g === n2 || g || k); s !== z && null != (l = x[s]); s++){
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n2 || (m2(l), h = !p2);
                        while(q = a[o++])if (q(l, g || n2, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w2 = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while(q = b[o++])q(t, u, g, h);
                    if (f) {
                        if (r > 0) while(s--)t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u);
                    }
                    G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w2 = y, j2 = v), t;
            };
            return c ? ia(f4) : f4;
        }
        return h2 = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g2(a)), c = b.length;
                while(c--)f = ya(b[c]), f[u2] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a;
            }
            return f;
        }, i2 = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g2(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p2 && d2.relative[i[1].type]) {
                    if (b = (d2.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length);
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while(f--){
                    if (j = i[f], d2.relative[k = j.type]) break;
                    if ((l = d2.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break;
                    }
                }
            }
            return (m || h2(a, n))(e, b, !p2, c, !b || $.test(a) && qa(b.parentNode) || b), c;
        }, c2.sortStable = u2.split("").sort(B).join("") === u2, c2.detectDuplicates = !!l2, m2(), c2.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n2.createElement("fieldset"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c2.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a2);
    r1.find = x1, r1.expr = x1.selectors, r1.expr[":"] = r1.expr.pseudos, r1.uniqueSort = r1.unique = x1.uniqueSort, r1.text = x1.getText, r1.isXMLDoc = x1.isXML, r1.contains = x1.contains, r1.escapeSelector = x1.escape;
    var y1 = function(a, b, c) {
        var d = [], e = void 0 !== c;
        while((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
            if (e && r1(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, z1 = function(a, b) {
        for(var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, A1 = r1.expr.match.needsContext;
    function B1(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    var C1 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D1 = /^.[^:#\[\.,]*$/;
    function E1(a13, b, c) {
        return r1.isFunction(b) ? r1.grep(a13, function(a, d) {
            return !!b.call(a, d, a) !== c;
        }) : b.nodeType ? r1.grep(a13, function(a) {
            return a === b !== c;
        }) : "string" != typeof b ? r1.grep(a13, function(a) {
            return i1.call(b, a) > -1 !== c;
        }) : D1.test(b) ? r1.filter(b, a13, c) : (b = r1.filter(b, a13), r1.grep(a13, function(a) {
            return i1.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
    }
    r1.filter = function(a14, b, c) {
        var d = b[0];
        return c && (a14 = ":not(" + a14 + ")"), 1 === b.length && 1 === d.nodeType ? r1.find.matchesSelector(d, a14) ? [
            d
        ] : [] : r1.find.matches(a14, r1.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, r1.fn.extend({
        find: function(a) {
            var b, c, d = this.length, e = this;
            if ("string" != typeof a) return this.pushStack(r1(a).filter(function() {
                for(b = 0; b < d; b++)if (r1.contains(e[b], this)) return !0;
            }));
            for(c = this.pushStack([]), b = 0; b < d; b++)r1.find(a, e[b], c);
            return d > 1 ? r1.uniqueSort(c) : c;
        },
        filter: function(a) {
            return this.pushStack(E1(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(E1(this, a || [], !0));
        },
        is: function(a) {
            return !!E1(this, "string" == typeof a && A1.test(a) ? r1(a) : a || [], !1).length;
        }
    });
    var F1, G1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H1 = r1.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || F1, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [
                null,
                a,
                null
            ] : G1.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r1 ? b[0] : b, r1.merge(this, r1.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d1, !0)), C1.test(e[1]) && r1.isPlainObject(b)) for(e in b)r1.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return f = d1.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r1.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r1) : r1.makeArray(a, this);
    };
    H1.prototype = r1.fn, F1 = r1(d1);
    var I1 = /^(?:parents|prev(?:Until|All))/, J1 = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    r1.fn.extend({
        has: function(a15) {
            var b = r1(a15, this), c = b.length;
            return this.filter(function() {
                for(var a = 0; a < c; a++)if (r1.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r1(a);
            if (!A1.test(a)) {
                for(; d < e; d++)for(c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r1.find.matchesSelector(c, a))) {
                    f.push(c);
                    break;
                }
            }
            return this.pushStack(f.length > 1 ? r1.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? i1.call(r1(a), this[0]) : i1.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(r1.uniqueSort(r1.merge(this.get(), r1(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function K1(a, b) {
        while((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    r1.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return y1(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return y1(a, "parentNode", c);
        },
        next: function(a) {
            return K1(a, "nextSibling");
        },
        prev: function(a) {
            return K1(a, "previousSibling");
        },
        nextAll: function(a) {
            return y1(a, "nextSibling");
        },
        prevAll: function(a) {
            return y1(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return y1(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return y1(a, "previousSibling", c);
        },
        siblings: function(a) {
            return z1((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return z1(a.firstChild);
        },
        contents: function(a) {
            return B1(a, "iframe") ? a.contentDocument : (B1(a, "template") && (a = a.content || a), r1.merge([], a.childNodes));
        }
    }, function(a, b) {
        r1.fn[a] = function(c, d) {
            var e = r1.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r1.filter(d, e)), this.length > 1 && (J1[a] || r1.uniqueSort(e), I1.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var L1 = /[^\x20\t\r\n\f]+/g;
    function M1(a) {
        var b = {};
        return r1.each(a.match(L1) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    r1.Callbacks = function(a16) {
        a16 = "string" == typeof a16 ? M1(a16) : r1.extend({}, a16);
        var b7, c6, d3, e, f = [], g = [], h = -1, i = function() {
            for(e = e || a16.once, d3 = b7 = !0; g.length; h = -1){
                c6 = g.shift();
                while(++h < f.length)f[h].apply(c6[0], c6[1]) === !1 && a16.stopOnFalse && (h = f.length, c6 = !1);
            }
            a16.memory || (c6 = !1), b7 = !1, e && (f = c6 ? [] : "");
        }, j = {
            add: function() {
                return f && (c6 && !b7 && (h = f.length - 1, g.push(c6)), function d(b) {
                    r1.each(b, function(b, c) {
                        r1.isFunction(c) ? a16.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r1.type(c) && d(c);
                    });
                }(arguments), c6 && !b7 && i()), this;
            },
            remove: function() {
                return r1.each(arguments, function(a, b) {
                    var c;
                    while((c = r1.inArray(b, f, c)) > -1)f.splice(c, 1), c <= h && h--;
                }), this;
            },
            has: function(a) {
                return a ? r1.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c6 = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c6 || b7 || (f = c6 = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [
                    a,
                    c.slice ? c.slice() : c
                ], g.push(c), b7 || i()), this;
            },
            fire: function() {
                return j.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d3;
            }
        };
        return j;
    };
    function N1(a) {
        return a;
    }
    function O1(a) {
        throw a;
    }
    function P1(a, b, c, d) {
        var e;
        try {
            a && r1.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r1.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [
                a
            ].slice(d));
        } catch (a17) {
            c.apply(void 0, [
                a17
            ]);
        }
    }
    r1.extend({
        Deferred: function(b8) {
            var c7 = [
                [
                    "notify",
                    "progress",
                    r1.Callbacks("memory"),
                    r1.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    r1.Callbacks("once memory"),
                    r1.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    r1.Callbacks("once memory"),
                    r1.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], d4 = "pending", e6 = {
                state: function() {
                    return d4;
                },
                always: function() {
                    return f5.done(arguments).fail(arguments), this;
                },
                "catch": function(a) {
                    return e6.then(null, a);
                },
                pipe: function() {
                    var a18 = arguments;
                    return r1.Deferred(function(b) {
                        r1.each(c7, function(c, d) {
                            var e = r1.isFunction(a18[d[4]]) && a18[d[4]];
                            f5[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && r1.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [
                                    a
                                ] : arguments);
                            });
                        }), a18 = null;
                    }).promise();
                },
                then: function(b9, d5, e7) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this, i = arguments, j3 = function() {
                                var a, j;
                                if (!(b < f)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then, r1.isFunction(j) ? e ? j.call(a, g(f, c, N1, e), g(f, c, O1, e)) : (f++, j.call(a, g(f, c, N1, e), g(f, c, O1, e), g(f, c, N1, c.notifyWith))) : (d !== N1 && (h = void 0, i = [
                                        a
                                    ]), (e || c.resolveWith)(h, i));
                                }
                            }, k = e ? j3 : function() {
                                try {
                                    j3();
                                } catch (a) {
                                    r1.Deferred.exceptionHook && r1.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O1 && (h = void 0, i = [
                                        a
                                    ]), c.rejectWith(h, i));
                                }
                            };
                            b ? k() : (r1.Deferred.getStackHook && (k.stackTrace = r1.Deferred.getStackHook()), a2.setTimeout(k));
                        };
                    }
                    return r1.Deferred(function(a) {
                        c7[0][3].add(g(0, a, r1.isFunction(e7) ? e7 : N1, a.notifyWith)), c7[1][3].add(g(0, a, r1.isFunction(b9) ? b9 : N1)), c7[2][3].add(g(0, a, r1.isFunction(d5) ? d5 : O1));
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? r1.extend(a, e6) : e6;
                }
            }, f5 = {};
            return r1.each(c7, function(a, b) {
                var g = b[2], h = b[5];
                e6[b[1]] = g.add, h && g.add(function() {
                    d4 = h;
                }, c7[3 - a][2].disable, c7[0][2].lock), g.add(b[3].fire), f5[b[0]] = function() {
                    return f5[b[0] + "With"](this === f5 ? void 0 : this, arguments), this;
                }, f5[b[0] + "With"] = g.fireWith;
            }), e6.promise(f5), b8 && b8.call(f5, f5), f5;
        },
        when: function(a19) {
            var b = arguments.length, c8 = b, d = Array(c8), e = f1.call(arguments), g = r1.Deferred(), h = function(a) {
                return function(c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f1.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };
            if (b <= 1 && (P1(a19, g.done(h(c8)).resolve, g.reject, !b), "pending" === g.state() || r1.isFunction(e[c8] && e[c8].then))) return g.then();
            while(c8--)P1(e[c8], h(c8), g.reject);
            return g.promise();
        }
    });
    var Q1 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r1.Deferred.exceptionHook = function(b, c) {
        a2.console && a2.console.warn && b && Q1.test(b.name) && a2.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    }, r1.readyException = function(b) {
        a2.setTimeout(function() {
            throw b;
        });
    };
    var R1 = r1.Deferred();
    r1.fn.ready = function(a20) {
        return R1.then(a20)["catch"](function(a) {
            r1.readyException(a);
        }), this;
    }, r1.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (a === !0 ? --r1.readyWait : r1.isReady) || (r1.isReady = !0, a !== !0 && --r1.readyWait > 0 || R1.resolveWith(d1, [
                r1
            ]));
        }
    }), r1.ready.then = R1.then;
    function S1() {
        d1.removeEventListener("DOMContentLoaded", S1), a2.removeEventListener("load", S1), r1.ready();
    }
    "complete" === d1.readyState || "loading" !== d1.readyState && !d1.documentElement.doScroll ? a2.setTimeout(r1.ready) : (d1.addEventListener("DOMContentLoaded", S1), a2.addEventListener("load", S1));
    var T1 = function(a21, b, c9, d, e, f, g) {
        var h = 0, i = a21.length, j = null == c9;
        if ("object" === r1.type(c9)) {
            e = !0;
            for(h in c9)T1(a21, b, h, c9[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, r1.isFunction(d) || (g = !0), j && (g ? (b.call(a21, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(r1(a), c);
        })), b)) for(; h < i; h++)b(a21[h], c9, g ? d : d.call(a21[h], h, b(a21[h], c9)));
        return e ? a21 : j ? b.call(a21) : i ? b(a21[0], c9) : f;
    }, U1 = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function V1() {
        this.expando = r1.expando + V1.uid++;
    }
    V1.uid = 1, V1.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, U1(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r1.camelCase(b)] = c;
            else for(d in b)e[r1.camelCase(d)] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r1.camelCase(b)];
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    Array.isArray(b) ? b = b.map(r1.camelCase) : (b = r1.camelCase(b), b = b in d ? [
                        b
                    ] : b.match(L1) || []), c = b.length;
                    while(c--)delete d[b[c]];
                }
                (void 0 === b || r1.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r1.isEmptyObject(b);
        }
    };
    var W1 = new V1, X1 = new V1, Y1 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z1 = /[A-Z]/g;
    function $1(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y1.test(a) ? JSON.parse(a) : a);
    }
    function _1(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) {
            if (d = "data-" + b.replace(Z1, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = $1(c);
                } catch (e) {}
                X1.set(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    r1.extend({
        hasData: function(a) {
            return X1.hasData(a) || W1.hasData(a);
        },
        data: function(a, b, c) {
            return X1.access(a, b, c);
        },
        removeData: function(a, b) {
            X1.remove(a, b);
        },
        _data: function(a, b, c) {
            return W1.access(a, b, c);
        },
        _removeData: function(a, b) {
            W1.remove(a, b);
        }
    }), r1.fn.extend({
        data: function(a, b10) {
            var c10, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = X1.get(f), 1 === f.nodeType && !W1.get(f, "hasDataAttrs"))) {
                    c10 = g.length;
                    while(c10--)g[c10] && (d = g[c10].name, 0 === d.indexOf("data-") && (d = r1.camelCase(d.slice(5)), _1(f, d, e[d])));
                    W1.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                X1.set(this, a);
            }) : T1(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = X1.get(f, a), void 0 !== c) return c;
                    if (c = _1(f, a), void 0 !== c) return c;
                } else this.each(function() {
                    X1.set(this, a, b);
                });
            }, null, b10, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                X1.remove(this, a);
            });
        }
    }), r1.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = W1.get(a, b), c && (!d || Array.isArray(c) ? d = W1.access(a, b, r1.makeArray(c)) : d.push(c)), d || [];
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r1.queue(a, b), d = c.length, e = c.shift(), f = r1._queueHooks(a, b), g = function() {
                r1.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return W1.get(a, c) || W1.access(a, c, {
                empty: r1.Callbacks("once memory").add(function() {
                    W1.remove(a, [
                        b + "queue",
                        c
                    ]);
                })
            });
        }
    }), r1.fn.extend({
        queue: function(a, b) {
            var c11 = 2;
            return "string" != typeof a && (b = a, a = "fx", c11--), arguments.length < c11 ? r1.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r1.queue(this, a, b);
                r1._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r1.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                r1.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = r1.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [
                    f
                ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while(g--)c = W1.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var aa1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba1 = new RegExp("^(?:([+-])=|)(" + aa1 + ")([a-z%]*)$", "i"), ca1 = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ], da1 = function(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r1.contains(a.ownerDocument, a) && "none" === r1.css(a, "display");
    }, ea1 = function(a, b, c, d) {
        var e, f, g = {};
        for(f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for(f in b)a.style[f] = g[f];
        return e;
    };
    function fa(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return r1.css(a, b, "");
        }, i = h(), j = c && c[3] || (r1.cssNumber[b] ? "" : "px"), k = (r1.cssNumber[b] || "px" !== j && +i) && ba1.exec(r1.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r1.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }
    var ga1 = {};
    function ha1(a) {
        var b, c = a.ownerDocument, d = a.nodeName, e = ga1[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r1.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga1[d] = e, e);
    }
    function ia1(a, b) {
        for(var c, d, e = [], f = 0, g = a.length; f < g; f++)d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W1.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da1(d) && (e[f] = ha1(d))) : "none" !== c && (e[f] = "none", W1.set(d, "display", c)));
        for(f = 0; f < g; f++)null != e[f] && (a[f].style.display = e[f]);
        return a;
    }
    r1.fn.extend({
        show: function() {
            return ia1(this, !0);
        },
        hide: function() {
            return ia1(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                da1(this) ? r1(this).show() : r1(this).hide();
            });
        }
    });
    var ja1 = /^(?:checkbox|radio)$/i, ka1 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la1 = /^$|\/(?:java|ecma)script/i, ma1 = {
        option: [
            1,
            "<select multiple='multiple'>",
            "</select>"
        ],
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    ma1.optgroup = ma1.option, ma1.tbody = ma1.tfoot = ma1.colgroup = ma1.caption = ma1.thead, ma1.th = ma1.td;
    function na1(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B1(a, b) ? r1.merge([
            a
        ], c) : c;
    }
    function oa1(a, b) {
        for(var c = 0, d = a.length; c < d; c++)W1.set(a[c], "globalEval", !b || W1.get(b[c], "globalEval"));
    }
    var pa1 = /<|&#?\w+;/;
    function qa1(a, b, c, d, e) {
        for(var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)if (f = a[n], f || 0 === f) {
            if ("object" === r1.type(f)) r1.merge(m, f.nodeType ? [
                f
            ] : f);
            else if (pa1.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ka1.exec(f) || [
                    "",
                    ""
                ])[1].toLowerCase(), i = ma1[h] || ma1._default, g.innerHTML = i[1] + r1.htmlPrefilter(f) + i[2], k = i[0];
                while(k--)g = g.lastChild;
                r1.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }
        l.textContent = "", n = 0;
        while(f = m[n++])if (d && r1.inArray(f, d) > -1) e && e.push(f);
        else if (j = r1.contains(f.ownerDocument, f), g = na1(l.appendChild(f), "script"), j && oa1(g), c) {
            k = 0;
            while(f = g[k++])la1.test(f.type || "") && c.push(f);
        }
        return l;
    }
    !function() {
        var a = d1.createDocumentFragment(), b = a.appendChild(d1.createElement("div")), c = d1.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o1.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o1.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var ra1 = d1.documentElement, sa1 = /^key/, ta1 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua1 = /^([^.]*)(?:\.(.+)|)/;
    function va1() {
        return !0;
    }
    function wa1() {
        return !1;
    }
    function xa1() {
        try {
            return d1.activeElement;
        } catch (a) {}
    }
    function ya1(a22, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for(h in b)ya1(a22, h, c, d, b[h], f);
            return a22;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa1;
        else if (!e) return a22;
        return 1 === f && (g = e, e = function(a) {
            return r1().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r1.guid++)), a22.each(function() {
            r1.event.add(this, b, e, d, c);
        });
    }
    r1.event = {
        global: {},
        add: function(a, b11, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W1.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r1.find.matchesSelector(ra1, e), c.guid || (c.guid = r1.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r1 && r1.event.triggered !== b.type ? r1.event.dispatch.apply(a, arguments) : void 0;
                }), b11 = (b11 || "").match(L1) || [
                    ""
                ], j = b11.length;
                while(j--)h = ua1.exec(b11[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r1.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r1.event.special[n] || {}, k = r1.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r1.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r1.event.global[n] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = W1.hasData(a) && W1.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(L1) || [
                    ""
                ], j = b.length;
                while(j--)if (h = ua1.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = r1.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while(f--)k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r1.removeEvent(a, n, q.handle), delete i[n]);
                } else for(n in i)r1.event.remove(a, n + b[j], c, d, !0);
                r1.isEmptyObject(i) && W1.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            var b = r1.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W1.get(this, "events") || {})[b.type] || [], k = r1.event.special[b.type] || {};
            for(i[0] = b, c = 1; c < arguments.length; c++)i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r1.event.handlers.call(this, b, j), c = 0;
                while((f = h[c++]) && !b.isPropagationStopped()){
                    b.currentTarget = f.elem, d = 0;
                    while((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r1.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) {
                for(; j !== this; j = j.parentNode || this)if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                    for(f = [], g = {}, c = 0; c < i; c++)d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r1(e, this).index(j) > -1 : r1.find(e, this, null, [
                        j
                    ]).length), g[e] && f.push(d);
                    f.length && h.push({
                        elem: j,
                        handlers: f
                    });
                }
            }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h;
        },
        addProp: function(a, b12) {
            Object.defineProperty(r1.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r1.isFunction(b12) ? function() {
                    if (this.originalEvent) return b12(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a];
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    });
                }
            });
        },
        fix: function(a) {
            return a[r1.expando] ? a : new r1.Event(a);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== xa1() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === xa1() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && B1(this, "input")) return this.click(), !1;
                },
                _default: function(a) {
                    return B1(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, r1.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r1.Event = function(a, b) {
        return this instanceof r1.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va1 : wa1, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r1.extend(this, b), this.timeStamp = a && a.timeStamp || r1.now(), void (this[r1.expando] = !0)) : new r1.Event(a, b);
    }, r1.Event.prototype = {
        constructor: r1.Event,
        isDefaultPrevented: wa1,
        isPropagationStopped: wa1,
        isImmediatePropagationStopped: wa1,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = va1, a && !this.isSimulated && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = va1, a && !this.isSimulated && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = va1, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, r1.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && sa1.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta1.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        }
    }, r1.event.addProp), r1.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a23, b) {
        r1.event.special[a23] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || r1.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            }
        };
    }), r1.fn.extend({
        on: function(a, b, c, d) {
            return ya1(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return ya1(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r1(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for(e in a)this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa1), this.each(function() {
                r1.event.remove(this, a, c, b);
            });
        }
    });
    var za1 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ea(a, b) {
        return B1(a, "table") && B1(11 !== b.nodeType ? b : b.firstChild, "tr") ? r1(">tbody", a)[0] || a : a;
    }
    function Fa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function Ga(a) {
        var b = Ca.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function Ha(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (W1.hasData(a) && (f = W1.access(a), g = W1.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for(e in j)for(c = 0, d = j[e].length; c < d; c++)r1.event.add(b, e, j[e][c]);
            }
            X1.hasData(a) && (h = X1.access(a), i = r1.extend({}, h), X1.set(b, i));
        }
    }
    function Ia(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ja1.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function Ja(a, b, c, d) {
        b = g1.apply([], b);
        var e8, f6, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r1.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o1.checkClone && Ba.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
        });
        if (m && (e8 = qa1(b, a[0].ownerDocument, !1, a, d), f6 = e8.firstChild, 1 === e8.childNodes.length && (e8 = f6), f6 || d)) {
            for(h = r1.map(na1(e8, "script"), Fa), i = h.length; l < m; l++)j = e8, l !== n && (j = r1.clone(j, !0, !0), i && r1.merge(h, na1(j, "script"))), c.call(a[l], j, l);
            if (i) for(k = h[h.length - 1].ownerDocument, r1.map(h, Ga), l = 0; l < i; l++)j = h[l], la1.test(j.type || "") && !W1.access(j, "globalEval") && r1.contains(k, j) && (j.src ? r1._evalUrl && r1._evalUrl(j.src) : p1(j.textContent.replace(Da, ""), k));
        }
        return a;
    }
    function Ka(a, b, c) {
        for(var d, e = b ? r1.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || r1.cleanData(na1(d)), d.parentNode && (c && r1.contains(d.ownerDocument, d) && oa1(na1(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    r1.extend({
        htmlPrefilter: function(a) {
            return a.replace(za1, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = r1.contains(a.ownerDocument, a);
            if (!(o1.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r1.isXMLDoc(a))) for(g = na1(h), f = na1(a), d = 0, e = f.length; d < e; d++)Ia(f[d], g[d]);
            if (b) {
                if (c) for(f = f || na1(a), g = g || na1(h), d = 0, e = f.length; d < e; d++)Ha(f[d], g[d]);
                else Ha(a, h);
            }
            return g = na1(h, "script"), g.length > 0 && oa1(g, !i && na1(a, "script")), h;
        },
        cleanData: function(a) {
            for(var b, c, d, e = r1.event.special, f = 0; void 0 !== (c = a[f]); f++)if (U1(c)) {
                if (b = c[W1.expando]) {
                    if (b.events) for(d in b.events)e[d] ? r1.event.remove(c, d) : r1.removeEvent(c, d, b.handle);
                    c[W1.expando] = void 0;
                }
                c[X1.expando] && (c[X1.expando] = void 0);
            }
        }
    }), r1.fn.extend({
        detach: function(a) {
            return Ka(this, a, !0);
        },
        remove: function(a) {
            return Ka(this, a);
        },
        text: function(a24) {
            return T1(this, function(a) {
                return void 0 === a ? r1.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a24, arguments.length);
        },
        append: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return Ja(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ea(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return Ja(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for(var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (r1.cleanData(na1(a, !1)), a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r1.clone(this, a, b);
            });
        },
        html: function(a25) {
            return T1(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Aa.test(a) && !ma1[(ka1.exec(a) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    a = r1.htmlPrefilter(a);
                    try {
                        for(; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (r1.cleanData(na1(b, !1)), b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a25, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return Ja(this, arguments, function(b) {
                var c = this.parentNode;
                r1.inArray(this, a) < 0 && (r1.cleanData(na1(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), r1.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a26, b) {
        r1.fn[a26] = function(a) {
            for(var c, d = [], e = r1(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), r1(e[g])[b](c), h1.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var La = /^margin/, Ma = new RegExp("^(" + aa1 + ")(?!px)[a-z%]+$", "i"), Na = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a2), c.getComputedStyle(b);
    };
    !function() {
        function b13() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra1.appendChild(h);
                var b = a2.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra1.removeChild(h), i = null;
            }
        }
        var c, e, f, g, h = d1.createElement("div"), i = d1.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o1.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r1.extend(o1, {
            pixelPosition: function() {
                return b13(), c;
            },
            boxSizingReliable: function() {
                return b13(), e;
            },
            pixelMarginRight: function() {
                return b13(), f;
            },
            reliableMarginLeft: function() {
                return b13(), g;
            }
        }));
    }();
    function Oa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r1.contains(a.ownerDocument, a) || (g = r1.style(a, b)), !o1.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function Pa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ta = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ua = [
        "Webkit",
        "Moz",
        "ms"
    ], Va = d1.createElement("div").style;
    function Wa(a) {
        if (a in Va) return a;
        var b = a[0].toUpperCase() + a.slice(1), c = Ua.length;
        while(c--)if (a = Ua[c] + b, a in Va) return a;
    }
    function Xa(a) {
        var b = r1.cssProps[a];
        return b || (b = r1.cssProps[a] = Wa(a) || a), b;
    }
    function Ya(a, b, c) {
        var d = ba1.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Za(a, b, c, d, e) {
        var f, g = 0;
        for(f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)"margin" === c && (g += r1.css(a, c + ca1[f], !0, e)), d ? ("content" === c && (g -= r1.css(a, "padding" + ca1[f], !0, e)), "margin" !== c && (g -= r1.css(a, "border" + ca1[f] + "Width", !0, e))) : (g += r1.css(a, "padding" + ca1[f], !0, e), "padding" !== c && (g += r1.css(a, "border" + ca1[f] + "Width", !0, e)));
        return g;
    }
    function $a(a, b, c) {
        var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r1.css(a, "boxSizing", !1, e);
        return Ma.test(f) ? f : (d = g && (o1.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
    }
    r1.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Oa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
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
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r1.camelCase(b), i = Ra.test(b), j = a.style;
                return i || (b = Xa(h)), g = r1.cssHooks[b] || r1.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba1.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r1.cssNumber[h] ? "" : "px")), o1.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r1.camelCase(b), i = Ra.test(b);
            return i || (b = Xa(h)), g = r1.cssHooks[b] || r1.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), r1.each([
        "height",
        "width"
    ], function(a27, b) {
        r1.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Qa.test(r1.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea1(a, Sa, function() {
                    return $a(a, b, d);
                });
            },
            set: function(a, c, d) {
                var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r1.css(a, "boxSizing", !1, f), f);
                return g && (e = ba1.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r1.css(a, b)), Ya(a, c, g);
            }
        };
    }), r1.cssHooks.marginLeft = Pa(o1.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea1(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px";
    }), r1.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r1.cssHooks[a + b] = {
            expand: function(c) {
                for(var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [
                    c
                ]; d < 4; d++)e[a + ca1[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, La.test(a) || (r1.cssHooks[a + b].set = Ya);
    }), r1.fn.extend({
        css: function(a28, b14) {
            return T1(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (Array.isArray(b)) {
                    for(d = Na(a), e = b.length; g < e; g++)f[b[g]] = r1.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? r1.style(a, b, c) : r1.css(a, b);
            }, a28, b14, arguments.length > 1);
        }
    });
    function _a(a, b, c, d, e) {
        return new _a.prototype.init(a, b, c, d, e);
    }
    r1.Tween = _a, _a.prototype = {
        constructor: _a,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r1.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r1.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = _a.propHooks[this.prop];
            return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = _a.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r1.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
        }
    }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r1.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                r1.fx.step[a.prop] ? r1.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r1.cssProps[a.prop]] && !r1.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r1.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, r1.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, r1.fx = _a.prototype.init, r1.fx.step = {};
    var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/;
    function eb() {
        bb && (d1.hidden === !1 && a2.requestAnimationFrame ? a2.requestAnimationFrame(eb) : a2.setTimeout(eb, r1.fx.interval), r1.fx.tick());
    }
    function fb() {
        return a2.setTimeout(function() {
            ab = void 0;
        }), ab = r1.now();
    }
    function gb(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for(b = b ? 1 : 0; d < 4; d += 2 - b)c = ca1[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function hb(a, b, c) {
        for(var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a)) return d;
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && da1(a), q = W1.get(a, "fxshow");
        c.queue || (g = r1._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h();
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r1.queue(a, "fx").length || g.empty.fire();
            });
        }));
        for(d in b)if (e = b[d], cb.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            n[d] = q && q[d] || r1.style(a, d);
        }
        if (i = !r1.isEmptyObject(b), i || !r1.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [
                o.overflow,
                o.overflowX,
                o.overflowY
            ], j = q && q.display, null == j && (j = W1.get(a, "display")), k = r1.css(a, "display"), "none" === k && (j ? k = j : (ia1([
                a
            ], !0), j = a.style.display || j, k = r1.css(a, "display"), ia1([
                a
            ]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r1.css(a, "float") && (i || (m.done(function() {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;
            for(d in n)i || (q ? "hidden" in q && (p = q.hidden) : q = W1.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ia1([
                a
            ], !0), m.done(function() {
                p || ia1([
                    a
                ]), W1.remove(a, "fxshow");
                for(d in n)r1.style(a, d, n[d]);
            })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for(c in a)if (d = r1.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r1.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for(c in f)c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function kb(a, b15, c12) {
        var d6, e, f7 = 0, g4 = kb.prefilters.length, h = r1.Deferred().always(function() {
            delete i3.elem;
        }), i3 = function() {
            if (e) return !1;
            for(var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [
                j,
                f,
                c
            ]), f < 1 && i ? c : (i || h.notifyWith(a, [
                j,
                1,
                0
            ]), h.resolveWith(a, [
                j
            ]), !1);
        }, j = h.promise({
            elem: a,
            props: r1.extend({}, b15),
            opts: r1.extend(!0, {
                specialEasing: {},
                easing: r1.easing._default
            }, c12),
            originalProperties: b15,
            originalOptions: c12,
            startTime: ab || fb(),
            duration: c12.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = r1.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for(e = !0; c < d; c++)j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [
                    j,
                    1,
                    0
                ]), h.resolveWith(a, [
                    j,
                    b
                ])) : h.rejectWith(a, [
                    j,
                    b
                ]), this;
            }
        }), k = j.props;
        for(jb(k, j.opts.specialEasing); f7 < g4; f7++)if (d6 = kb.prefilters[f7].call(j, a, k, j.opts)) return r1.isFunction(d6.stop) && (r1._queueHooks(j.elem, j.opts.queue).stop = r1.proxy(d6.stop, d6)), d6;
        return r1.map(k, hb, j), r1.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r1.fx.timer(r1.extend(i3, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j;
    }
    r1.Animation = r1.extend(kb, {
        tweeners: {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b);
                    return fa(c.elem, a, ba1.exec(b), c), c;
                }
            ]
        },
        tweener: function(a, b) {
            r1.isFunction(a) ? (b = a, a = [
                "*"
            ]) : a = a.match(L1);
            for(var c, d = 0, e = a.length; d < e; d++)c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
        },
        prefilters: [
            ib
        ],
        prefilter: function(a, b) {
            b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
        }
    }), r1.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? r1.extend({}, a) : {
            complete: c || !c && b || r1.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r1.isFunction(b) && b
        };
        return r1.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r1.fx.speeds ? d.duration = r1.fx.speeds[d.duration] : d.duration = r1.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            r1.isFunction(d.old) && d.old.call(this), d.queue && r1.dequeue(this, d.queue);
        }, d;
    }, r1.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(da1).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b16, c, d) {
            var e = r1.isEmptyObject(a), f = r1.speed(b16, c, d), g = function() {
                var b = kb(this, r1.extend({}, a), f);
                (e || W1.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a29, b17, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a29 && (c = b17, b17 = a29, a29 = void 0), b17 && a29 !== !1 && this.queue(a29 || "fx", []), this.each(function() {
                var b = !0, e = null != a29 && a29 + "queueHooks", f = r1.timers, g = W1.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for(e in g)g[e] && g[e].stop && db.test(e) && d(g[e]);
                for(e = f.length; e--;)f[e].elem !== this || null != a29 && f[e].queue !== a29 || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || r1.dequeue(this, a29);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = W1.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r1.timers, g = d ? d.length : 0;
                for(c.finish = !0, r1.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for(b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), r1.each([
        "toggle",
        "show",
        "hide"
    ], function(a30, b) {
        var c = r1.fn[b];
        r1.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), r1.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a31, b) {
        r1.fn[a31] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r1.timers = [], r1.fx.tick = function() {
        var a, b = 0, c = r1.timers;
        for(ab = r1.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || r1.fx.stop(), ab = void 0;
    }, r1.fx.timer = function(a) {
        r1.timers.push(a), r1.fx.start();
    }, r1.fx.interval = 13, r1.fx.start = function() {
        bb || (bb = !0, eb());
    }, r1.fx.stop = function() {
        bb = null;
    }, r1.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, r1.fn.delay = function(b, c13) {
        return b = r1.fx ? r1.fx.speeds[b] || b : b, c13 = c13 || "fx", this.queue(c13, function(c, d) {
            var e = a2.setTimeout(c, b);
            d.stop = function() {
                a2.clearTimeout(e);
            };
        });
    }, function() {
        var a = d1.createElement("input"), b = d1.createElement("select"), c = b.appendChild(d1.createElement("option"));
        a.type = "checkbox", o1.checkOn = "" !== a.value, o1.optSelected = c.selected, a = d1.createElement("input"), a.value = "t", a.type = "radio", o1.radioValue = "t" === a.value;
    }();
    var lb, mb = r1.expr.attrHandle;
    r1.fn.extend({
        attr: function(a, b) {
            return T1(this, r1.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                r1.removeAttr(this, a);
            });
        }
    }), r1.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r1.prop(a, b, c) : (1 === f && r1.isXMLDoc(a) || (e = r1.attrHooks[b.toLowerCase()] || (r1.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r1.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r1.find.attr(a, b), null == d ? void 0 : d));
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o1.radioValue && "radio" === b && B1(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0, e = b && b.match(L1);
            if (e && 1 === a.nodeType) while(c = e[d++])a.removeAttribute(c);
        }
    }), lb = {
        set: function(a, b, c) {
            return b === !1 ? r1.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, r1.each(r1.expr.match.bool.source.match(/\w+/g), function(a32, b18) {
        var c = mb[b18] || r1.find.attr;
        mb[b18] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
        };
    });
    var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i;
    r1.fn.extend({
        prop: function(a, b) {
            return T1(this, r1.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r1.propFix[a] || a];
            });
        }
    }), r1.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r1.isXMLDoc(a) || (b = r1.propFix[b] || b, e = r1.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r1.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o1.optSelected || (r1.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), r1.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        r1.propFix[this.toLowerCase()] = this;
    });
    function pb(a) {
        var b = a.match(L1) || [];
        return b.join(" ");
    }
    function qb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    r1.fn.extend({
        addClass: function(a) {
            var b19, c, d, e, f, g, h, i = 0;
            if (r1.isFunction(a)) return this.each(function(b) {
                r1(this).addClass(a.call(this, b, qb(this)));
            });
            if ("string" == typeof a && a) {
                b19 = a.match(L1) || [];
                while(c = this[i++])if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while(f = b19[g++])d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        removeClass: function(a) {
            var b20, c, d, e, f, g, h, i = 0;
            if (r1.isFunction(a)) return this.each(function(b) {
                r1(this).removeClass(a.call(this, b, qb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b20 = a.match(L1) || [];
                while(c = this[i++])if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
                    g = 0;
                    while(f = b20[g++])while(d.indexOf(" " + f + " ") > -1)d = d.replace(" " + f + " ", " ");
                    h = pb(d), e !== h && c.setAttribute("class", h);
                }
            }
            return this;
        },
        toggleClass: function(a, b21) {
            var c14 = typeof a;
            return "boolean" == typeof b21 && "string" === c14 ? b21 ? this.addClass(a) : this.removeClass(a) : r1.isFunction(a) ? this.each(function(c) {
                r1(this).toggleClass(a.call(this, c, qb(this), b21), b21);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c14) {
                    d = 0, e = r1(this), f = a.match(L1) || [];
                    while(b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else void 0 !== a && "boolean" !== c14 || (b = qb(this), b && W1.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W1.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while(c = this[d++])if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var rb = /\r/g;
    r1.fn.extend({
        val: function(a33) {
            var b, c15, d, e9 = this[0];
            if (arguments.length) return d = r1.isFunction(a33), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a33.call(this, c, r1(this).val()) : a33, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r1.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = r1.valHooks[this.type] || r1.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            });
            if (e9) return b = r1.valHooks[e9.type] || r1.valHooks[e9.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c15 = b.get(e9, "value")) ? c15 : (c15 = e9.value, "string" == typeof c15 ? c15.replace(rb, "") : null == c15 ? "" : c15);
        }
    }), r1.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r1.find.attr(a, "value");
                    return null != b ? b : pb(r1.text(a));
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length;
                    for(d = f < 0 ? i : g ? f : 0; d < i; d++)if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B1(c.parentNode, "optgroup"))) {
                        if (b = r1(c).val(), g) return b;
                        h.push(b);
                    }
                    return h;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = r1.makeArray(b), g = e.length;
                    while(g--)d = e[g], (d.selected = r1.inArray(r1.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), r1.each([
        "radio",
        "checkbox"
    ], function() {
        r1.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = r1.inArray(r1(a).val(), b) > -1;
            }
        }, o1.checkOn || (r1.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var sb = /^(?:focusinfocus|focusoutblur)$/;
    r1.extend(r1.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [
                e || d1
            ], p = l1.call(b, "type") ? b.type : b, q = l1.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d1, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r1.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r1.expando] ? b : new r1.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [
                b
            ] : r1.makeArray(c, [
                b
            ]), n = r1.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r1.isWindow(e)) {
                    for(j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), i = h;
                    i === (e.ownerDocument || d1) && o.push(i.defaultView || i.parentWindow || a2);
                }
                g = 0;
                while((h = o[g++]) && !b.isPropagationStopped())b.type = g > 1 ? j : n.bindType || p, m = (W1.get(h, "events") || {})[b.type] && W1.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U1(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U1(e) || k && r1.isFunction(e[p]) && !r1.isWindow(e) && (i = e[k], i && (e[k] = null), r1.event.triggered = p, e[p](), r1.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = r1.extend(new r1.Event, c, {
                type: a,
                isSimulated: !0
            });
            r1.event.trigger(d, null, b);
        }
    }), r1.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r1.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r1.event.trigger(a, b, c, !0);
        }
    }), r1.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a34, b) {
        r1.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r1.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), o1.focusin = "onfocusin" in a2, o1.focusin || r1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a35, b) {
        var c = function(a) {
            r1.event.simulate(b, a.target, r1.event.fix(a));
        };
        r1.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = W1.access(d, b);
                e || d.addEventListener(a35, c, !0), W1.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = W1.access(d, b) - 1;
                e ? W1.access(d, b, e) : (d.removeEventListener(a35, c, !0), W1.remove(d, b));
            }
        };
    });
    var tb = a2.location, ub = r1.now(), vb = /\?/;
    r1.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a2.DOMParser).parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || r1.error("Invalid XML: " + b), c;
    };
    var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b22, c, d) {
        var e10;
        if (Array.isArray(b22)) r1.each(b22, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        });
        else if (c || "object" !== r1.type(b22)) d(a, b22);
        else for(e10 in b22)Ab(a + "[" + e10 + "]", b22[e10], c, d);
    }
    r1.param = function(a36, b23) {
        var c16, d = [], e = function(a, b) {
            var c = r1.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };
        if (Array.isArray(a36) || a36.jquery && !r1.isPlainObject(a36)) r1.each(a36, function() {
            e(this.name, this.value);
        });
        else for(c16 in a36)Ab(c16, a36[c16], b23, e);
        return d.join("&");
    }, r1.fn.extend({
        serialize: function() {
            return r1.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r1.prop(this, "elements");
                return a ? r1.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !r1(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja1.test(a));
            }).map(function(a37, b) {
                var c = r1(this).val();
                return null == c ? null : Array.isArray(c) ? r1.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                };
            }).get();
        }
    });
    var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {}, Jb = {}, Kb = "*/".concat("*"), Lb = d1.createElement("a");
    Lb.href = tb.href;
    function Mb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(L1) || [];
            if (r1.isFunction(c)) while(d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Nb(a, b, c, d) {
        var e = {}, f = a === Jb;
        function g(h3) {
            var i;
            return e[h3] = !0, r1.each(a[h3] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Ob(a, b) {
        var c, d, e = r1.ajaxSettings.flatOptions || {};
        for(c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r1.extend(!0, a, d), a;
    }
    function Pb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) {
            for(e in h)if (h[e] && h[e].test(d)) {
                i.unshift(e);
                break;
            }
        }
        if (i[0] in c) f = i[0];
        else {
            for(e in c){
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function Qb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for(g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while(f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
            if ("*" === f) f = i;
            else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) {
                    for(e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break;
                    }
                }
                if (g !== !0) {
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b);
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        };
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    r1.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tb.href,
            type: "GET",
            isLocal: Fb.test(tb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r1.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Ob(Ob(a, r1.ajaxSettings), b) : Ob(r1.ajaxSettings, a);
        },
        ajaxPrefilter: Mb(Ib),
        ajaxTransport: Mb(Jb),
        ajax: function(b24, c17) {
            "object" == typeof b24 && (c17 = b24, b24 = void 0), c17 = c17 || {};
            var e, f, g, h4, i, j4, k, l, m3, n3, o = r1.ajaxSetup({}, c17), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r1(p) : r1.event, s = r1.Deferred(), t = r1.Callbacks("once memory"), u = o.statusCode || {}, v3 = {}, w3 = {}, x3 = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h4) {
                            h4 = {};
                            while(b = Eb.exec(g))h4[b[1].toLowerCase()] = b[2];
                        }
                        b = h4[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return k ? g : null;
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = w3[a.toLowerCase()] = w3[a.toLowerCase()] || a, v3[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) {
                        if (k) y.always(a[y.status]);
                        else for(b in a)u[b] = [
                            u[b],
                            a[b]
                        ];
                    }
                    return this;
                },
                abort: function(a) {
                    var b = a || x3;
                    return e && e.abort(b), A(0, b), this;
                }
            };
            if (s.promise(y), o.url = ((b24 || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c17.method || c17.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L1) || [
                ""
            ], null == o.crossDomain) {
                j4 = d1.createElement("a");
                try {
                    j4.href = o.url, j4.href = j4.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j4.protocol + "//" + j4.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r1.param(o.data, o.traditional)), Nb(Ib, o, c17, y), k) return y;
            l = r1.event && o.global, l && 0 === r1.active++ && r1.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n3 = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n3 = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n3), o.url = f + n3), o.ifModified && (r1.lastModified[f] && y.setRequestHeader("If-Modified-Since", r1.lastModified[f]), r1.etag[f] && y.setRequestHeader("If-None-Match", r1.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c17.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);
            for(m3 in o.headers)y.setRequestHeader(m3, o.headers[m3]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x3 = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c17, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [
                    y,
                    o
                ]), k) return y;
                o.async && o.timeout > 0 && (i = a2.setTimeout(function() {
                    y.abort("timeout");
                }, o.timeout));
                try {
                    k = !1, e.send(v3, A);
                } catch (z) {
                    if (k) throw z;
                    A(-1, z);
                }
            } else A(-1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a2.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r1.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r1.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [
                    m,
                    x,
                    y
                ]) : s.rejectWith(p, [
                    y,
                    x,
                    n
                ]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [
                    y,
                    o,
                    j ? m : n
                ]), t.fireWith(p, [
                    y,
                    x
                ]), l && (q.trigger("ajaxComplete", [
                    y,
                    o
                ]), --r1.active || r1.event.trigger("ajaxStop")));
            }
            return y;
        },
        getJSON: function(a, b, c) {
            return r1.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return r1.get(a, void 0, b, "script");
        }
    }), r1.each([
        "get",
        "post"
    ], function(a38, b) {
        r1[b] = function(a, c, d, e) {
            return r1.isFunction(c) && (e = e || d, d = c, c = void 0), r1.ajax(r1.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r1.isPlainObject(a) && a));
        };
    }), r1._evalUrl = function(a) {
        return r1.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        });
    }, r1.fn.extend({
        wrapAll: function(a39) {
            var b;
            return this[0] && (r1.isFunction(a39) && (a39 = a39.call(this[0])), b = r1(a39, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while(a.firstElementChild)a = a.firstElementChild;
                return a;
            }).append(this)), this;
        },
        wrapInner: function(a) {
            return r1.isFunction(a) ? this.each(function(b) {
                r1(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = r1(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = r1.isFunction(a);
            return this.each(function(c) {
                r1(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r1(this).replaceWith(this.childNodes);
            }), this;
        }
    }), r1.expr.pseudos.hidden = function(a) {
        return !r1.expr.pseudos.visible(a);
    }, r1.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r1.ajaxSettings.xhr = function() {
        try {
            return new a2.XMLHttpRequest;
        } catch (b) {}
    };
    var Rb = {
        0: 200,
        1223: 204
    }, Sb = r1.ajaxSettings.xhr();
    o1.cors = !!Sb && "withCredentials" in Sb, o1.ajax = Sb = !!Sb, r1.ajaxTransport(function(b) {
        var c, d;
        if (o1.cors || Sb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for(g in b.xhrFields)h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for(g in e)h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a2.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        };
    }), r1.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1);
    }), r1.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r1.globalEval(a), a;
            }
        }
    }), r1.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r1.ajaxTransport("script", function(a40) {
        if (a40.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r1("<script>").prop({
                        charset: a40.scriptCharset,
                        src: a40.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d1.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/;
    r1.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Tb.pop() || r1.expando + "_" + ub++;
            return this[a] = !0, a;
        }
    }), r1.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r1.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r1.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a2[e], a2[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? r1(a2).removeProp(e) : a2[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r1.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script";
    }), o1.createHTMLDocument = function() {
        var a = d1.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r1.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o1.createHTMLDocument ? (b = d1.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d1.location.href, b.head.appendChild(e)) : b = d1), f = C1.exec(a), g = !c && [], f ? [
            b.createElement(f[1])
        ] : (f = qa1([
            a
        ], b, g), g && g.length && r1(g).remove(), r1.merge([], f.childNodes));
    }, r1.fn.load = function(a41, b25, c) {
        var d, e, f, g = this, h = a41.indexOf(" ");
        return h > -1 && (d = pb(a41.slice(h)), a41 = a41.slice(0, h)), r1.isFunction(b25) ? (c = b25, b25 = void 0) : b25 && "object" == typeof b25 && (e = "POST"), g.length > 0 && r1.ajax({
            url: a41,
            type: e || "GET",
            dataType: "html",
            data: b25
        }).done(function(a) {
            f = arguments, g.html(d ? r1("<div>").append(r1.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [
                    a.responseText,
                    b,
                    a
                ]);
            });
        }), this;
    }, r1.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(a42, b) {
        r1.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), r1.expr.pseudos.animated = function(a) {
        return r1.grep(r1.timers, function(b) {
            return a === b.elem;
        }).length;
    }, r1.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r1.css(a, "position"), l = r1(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r1.css(a, "top"), i = r1.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r1.isFunction(b) && (b = b.call(a, c, r1.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, r1.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r1.offset.setOffset(this, a, b);
            });
            var b26, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b26 = f.ownerDocument, c = b26.documentElement, e = b26.defaultView, {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r1.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B1(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r1.css(a[0], "borderTopWidth", !0),
                    left: d.left + r1.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r1.css(c, "marginTop", !0),
                    left: b.left - d.left - r1.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while(a && "static" === r1.css(a, "position"))a = a.offsetParent;
                return a || ra1;
            });
        }
    }), r1.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a43, b) {
        var c = "pageYOffset" === b;
        r1.fn[a43] = function(d7) {
            return T1(this, function(a, d, e) {
                var f;
                return r1.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a43, d7, arguments.length);
        };
    }), r1.each([
        "top",
        "left"
    ], function(a44, b) {
        r1.cssHooks[b] = Pa(o1.pixelPosition, function(a, c) {
            if (c) return c = Oa(a, b), Ma.test(c) ? r1(a).position()[b] + "px" : c;
        });
    }), r1.each({
        Height: "height",
        Width: "width"
    }, function(a, b27) {
        r1.each({
            padding: "inner" + a,
            content: b27,
            "": "outer" + a
        }, function(c18, d) {
            r1.fn[d] = function(e11, f8) {
                var g = arguments.length && (c18 || "boolean" != typeof e11), h = c18 || (e11 === !0 || f8 === !0 ? "margin" : "border");
                return T1(this, function(b, c, e) {
                    var f;
                    return r1.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r1.css(b, c, h) : r1.style(b, c, e, h);
                }, b27, g ? e11 : void 0, g);
            };
        });
    }), r1.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    }), r1.holdReady = function(a) {
        a ? r1.readyWait++ : r1.ready(!0);
    }, r1.isArray = Array.isArray, r1.parseJSON = JSON.parse, r1.nodeName = B1, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r1;
    });
    var Vb = a2.jQuery, Wb = a2.$;
    return r1.noConflict = function(b) {
        return a2.$ === r1 && (a2.$ = Wb), b && a2.jQuery === r1 && (a2.jQuery = Vb), r1;
    }, b1 || (a2.jQuery = a2.$ = r1), r1;
});

//# sourceMappingURL=watch_list.fa33bf00.js.map
