(() => {
    var __webpack_modules__ = {
        63: module => {
            "use strict";
            module.exports = function equal(a, b) {
                if (a === b) return true;
                if (a && b && "object" == typeof a && "object" == typeof b) {
                    if (a.constructor !== b.constructor) return false;
                    var length, i, keys;
                    if (Array.isArray(a)) {
                        length = a.length;
                        if (length != b.length) return false;
                        for (i = length; 0 !== i--; ) if (!equal(a[i], b[i])) return false;
                        return true;
                    }
                    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
                    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
                    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
                    keys = Object.keys(a);
                    length = keys.length;
                    if (length !== Object.keys(b).length) return false;
                    for (i = length; 0 !== i--; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
                    for (i = length; 0 !== i--; ) {
                        var key = keys[i];
                        if (!equal(a[key], b[key])) return false;
                    }
                    return true;
                }
                return a !== a && b !== b;
            };
        },
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        function fullVHfix() {
            const fullScreens = document.querySelectorAll("[data-fullscreen]");
            if (fullScreens.length && isMobile.any()) {
                window.addEventListener("resize", fixHeight);
                function fixHeight() {
                    let vh = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", `${vh}px`);
                }
                fixHeight();
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }));
                }));
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function functions_extractVideoID(url) {
            let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            if (!url) return;
            let match = url.match(regExp);
            if (match && 11 == match[7].length) return match[7]; else alert("Could not extract video ID.");
        }
        async function getResource(url) {
            const _apiBase = "https://kvartirivdubai.ru/api";
            const res = await fetch(`${_apiBase}${url}`);
            if (!res.ok) throw new Error(`Could not fetch ${url} , received ${res.status}`);
            const body = await res.json();
            return body;
        }
        async function getResource2(url) {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Could not fetch ${url} , received ${res.status}`);
            const body = await res.json();
            return body;
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if ("error" !== this._dataValue) {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") ? true : false;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && 0 === focusedIndex) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if ("INPUT" === targetElement.tagName || "TEXTAREA" === targetElement.tagName) {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((null !== formRequiredItem.offsetParent || "SELECT" === formRequiredItem.tagName) && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if ("email" === formRequiredItem.dataset.required) {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if ("checkbox" === formRequiredItem.type && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit(options = {
            validate: true
        }) {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (0 === error) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            await response.json();
                            form.classList.remove("_sending");
                            formSent(form);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    const formError = form.querySelector("._form-error");
                    if (formError && form.hasAttribute("data-goto-error")) gotoBlock(formError, true, 1e3);
                }
            }
            function formSent(form) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        function isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (void 0 === delay) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (void 0 === axis) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = void 0 === _temp ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (void 0 === overrides) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (void 0 === options) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate) {
            if (void 0 === translate) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (void 0 === axis) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (void 0 === translate) translate = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === translateBounds) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            const translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (void 0 === index) index = 0;
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (void 0 === speed) speed = this.params.speed;
            if (void 0 === runCallbacks) runCallbacks = true;
            if (void 0 === threshold) threshold = .5;
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                if (index < swiper.loopedSlides) appendSlides.push(el);
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (void 0 === base) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = dom(event.path[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (void 0 === base) base = "window";
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
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
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (void 0 === obj) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (void 0 === view) view = "current";
                if (void 0 === exact) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (void 0 === needUpdate) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (void 0 === deleteInstance) deleteInstance = true;
                if (void 0 === cleanStyles) cleanStyles = true;
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (void 0 === classes) classes = "";
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                if (false === swiper.params.pagination.enabled) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function Thumb(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let initialized = false;
            let swiperCreated = false;
            swiper.thumbs = {
                swiper: null
            };
            function onThumbClick() {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                const clickedIndex = thumbsSwiper.clickedIndex;
                const clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && dom(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                if ("undefined" === typeof clickedIndex || null === clickedIndex) return;
                let slideToIndex;
                if (thumbsSwiper.params.loop) slideToIndex = parseInt(dom(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10); else slideToIndex = clickedIndex;
                if (swiper.params.loop) {
                    let currentIndex = swiper.activeIndex;
                    if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                        swiper.loopFix();
                        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                        currentIndex = swiper.activeIndex;
                    }
                    const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                    const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                    if ("undefined" === typeof prevIndex) slideToIndex = nextIndex; else if ("undefined" === typeof nextIndex) slideToIndex = prevIndex; else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex; else slideToIndex = prevIndex;
                }
                swiper.slideTo(slideToIndex);
            }
            function init() {
                const {thumbs: thumbsParams} = swiper.params;
                if (initialized) return false;
                initialized = true;
                const SwiperClass = swiper.constructor;
                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    Object.assign(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    Object.assign(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                } else if (utils_isObject(thumbsParams.swiper)) {
                    const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                    Object.assign(thumbsSwiperParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                    swiperCreated = true;
                }
                swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
                swiper.thumbs.swiper.on("tap", onThumbClick);
                return true;
            }
            function update(initial) {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                const slidesPerView = "auto" === thumbsSwiper.params.slidesPerView ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
                if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                    let currentThumbsIndex = thumbsSwiper.activeIndex;
                    let newThumbsIndex;
                    let direction;
                    if (thumbsSwiper.params.loop) {
                        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                            thumbsSwiper.loopFix();
                            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                            currentThumbsIndex = thumbsSwiper.activeIndex;
                        }
                        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                        if ("undefined" === typeof prevThumbsIndex) newThumbsIndex = nextThumbsIndex; else if ("undefined" === typeof nextThumbsIndex) newThumbsIndex = prevThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex; else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex; else newThumbsIndex = prevThumbsIndex;
                        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                    } else {
                        newThumbsIndex = swiper.realIndex;
                        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                    }
                    if (useOffset) newThumbsIndex += "next" === direction ? autoScrollOffset : -1 * autoScrollOffset;
                    if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                        if (thumbsSwiper.params.centeredSlides) if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1; else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1; else if (newThumbsIndex > currentThumbsIndex && 1 === thumbsSwiper.params.slidesPerGroup) ;
                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
                    }
                }
                let thumbsToActivate = 1;
                const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
                if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
                thumbsToActivate = Math.floor(thumbsToActivate);
                thumbsSwiper.slides.removeClass(thumbActiveClass);
                if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for (let i = 0; i < thumbsToActivate; i += 1) thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass); else for (let i = 0; i < thumbsToActivate; i += 1) thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
            }
            on("beforeInit", (() => {
                const {thumbs} = swiper.params;
                if (!thumbs || !thumbs.swiper) return;
                init();
                update(true);
            }));
            on("slideChange update resize observerUpdate", (() => {
                update();
            }));
            on("setTransition", ((_s, duration) => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                thumbsSwiper.setTransition(duration);
            }));
            on("beforeDestroy", (() => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                if (swiperCreated) thumbsSwiper.destroy();
            }));
            Object.assign(swiper.thumbs, {
                init,
                update
            });
        }
        function initSliders() {
            if (document.querySelector(".overviews-slider__body")) new core(".overviews-slider__body", {
                modules: [ Navigation, Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 32,
                watchOverflow: true,
                loop: true,
                loopAdditionalSlides: 5,
                preloadImages: false,
                speed: 800,
                navigation: {
                    prevEl: ".overviews-slider .slider-arrow_prev",
                    nextEl: ".overviews-slider .slider-arrow_next"
                },
                breakpoints: {
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                },
                on: {}
            });
            if (document.querySelector(".lead__body")) new core(".lead__body", {
                modules: [ Pagination, Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 20,
                watchOverflow: true,
                loop: true,
                loopAdditionalSlides: 5,
                preloadImages: false,
                speed: 800,
                navigation: {
                    prevEl: ".lead .slider-arrow_prev",
                    nextEl: ".lead .slider-arrow_next"
                },
                pagination: {
                    el: ".lead__pagination",
                    clickable: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    991.98: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }
            });
            if (document.querySelector(".apartments-slider__body")) new core(".apartments-slider__body", {
                modules: [ Navigation, Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 10,
                watchOverflow: true,
                loop: false,
                navigation: {
                    prevEl: ".apartments .apartments-slider-controls_prev",
                    nextEl: ".apartments .apartments-slider-controls_next"
                }
            });
            if (document.querySelector(".gallery-interier__content")) {
                const thumbsInterier = new core(".thumbs-interier", {
                    modules: [ Navigation, Pagination, Thumb ],
                    watchOverflow: true,
                    observer: true,
                    observeParents: true,
                    spaceBetween: 10,
                    slidesPerView: 2,
                    watchSlidesProgress: true,
                    loop: true,
                    speed: 800,
                    breakpoints: {
                        991.98: {
                            slidesPerView: 4
                        },
                        768.98: {
                            slidesPerView: 3
                        }
                    }
                });
                new core(".gallery-interier__content", {
                    modules: [ Navigation, Pagination, Thumb ],
                    spaceBetween: 10,
                    loop: true,
                    watchOverflow: true,
                    observer: true,
                    observeParents: true,
                    speed: 800,
                    navigation: {
                        nextEl: ".inline-gallery-slider__arrows .slider-arrow_next",
                        prevEl: ".inline-gallery-slider__arrows .slider-arrow_prev"
                    },
                    thumbs: {
                        swiper: thumbsInterier
                    }
                });
            }
            if (document.querySelector(".gallery-exterier__content")) {
                const thumbsInterier = new core(".thumbs-exterier", {
                    modules: [ Navigation, Pagination, Thumb ],
                    watchOverflow: true,
                    observer: true,
                    observeParents: true,
                    spaceBetween: 10,
                    slidesPerView: 2,
                    watchSlidesProgress: true,
                    loop: true,
                    speed: 800,
                    breakpoints: {
                        991.98: {
                            slidesPerView: 4
                        },
                        768.98: {
                            slidesPerView: 3
                        }
                    }
                });
                new core(".gallery-exterier__content", {
                    modules: [ Navigation, Pagination, Thumb ],
                    spaceBetween: 10,
                    loop: true,
                    watchOverflow: true,
                    observer: true,
                    observeParents: true,
                    speed: 800,
                    navigation: {
                        nextEl: ".inline-gallery-slider__arrows .slider-arrow_next",
                        prevEl: ".inline-gallery-slider__arrows .slider-arrow_prev"
                    },
                    thumbs: {
                        swiper: thumbsInterier
                    }
                });
            }
            if (document.querySelector(".bedroom-tabs__content")) new core(".bedroom-tabs__content", {
                modules: [ Navigation, Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 20,
                watchOverflow: false,
                loop: true,
                preloadImages: false,
                speed: 800,
                navigation: {
                    prevEl: ".bedroom-tabs__content .slider-arrow_prev",
                    nextEl: ".bedroom-tabs__content .slider-arrow_next"
                },
                pagination: {
                    el: ".bedroom-tabs__content .bedroom-tabs-pagination",
                    clickable: true,
                    renderBullet: function(index, className) {
                        return `\n\t\t\t\t\t\t<span class="${className} bedroom-tabs-pagination__item">Plan ${index + 1}</span>\n\t\t\t\t\t`;
                    }
                }
            });
            if (document.querySelector(".trusted-slider__body")) new core(".trusted-slider__body", {
                modules: [ Navigation, Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 20,
                watchOverflow: false,
                loop: true,
                preloadImages: false,
                speed: 800,
                navigation: {
                    prevEl: ".trusted-slider__body .slider-arrow_prev",
                    nextEl: ".trusted-slider__body .slider-arrow_next"
                },
                pagination: {
                    el: ".trusted-slider__body .trusted-slider__pagination",
                    clickable: true
                }
            });
        }
        window.addEventListener("load", (function(e) {
            setTimeout((function() {
                initSliders();
            }), 1500);
        }));
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if ("last" === place || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if ("first" === place) {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (void 0 !== parent.children[index]) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if ("min" === this.type) Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if ("first" === a.place || "last" === b.place) return -1;
                    if ("last" === a.place || "first" === b.place) return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return 1;
                        if ("last" === a.place || "first" === b.place) return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        /*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
        !function(t, e) {
            "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", [ "jquery" ], (function(i) {
                return e(t, i);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
        }(window, (function(t, e) {
            "use strict";
            function i(i, s, a) {
                function u(t, e, o) {
                    var n, s = "$()." + i + '("' + e + '")';
                    return t.each((function(t, u) {
                        var h = a.data(u, i);
                        if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                        var d = h[e];
                        if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                        var l = d.apply(h, o);
                        n = void 0 === n ? l : n;
                    })), void 0 !== n ? n : t;
                }
                function h(t, e) {
                    t.each((function(t, o) {
                        var n = a.data(o, i);
                        n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
                    }));
                }
                a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
                    a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                }), a.fn[i] = function(t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }, o(a));
            }
            function o(t) {
                !t || t && t.bridget || (t.bridget = i);
            }
            var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function() {} : function(t) {
                s.error(t);
            };
            return o(e || t.jQuery), i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
        }("undefined" != typeof window ? window : void 0, (function() {
            function t() {}
            var e = t.prototype;
            return e.on = function(t, e) {
                if (t && e) {
                    var i = this._events = this._events || {}, o = i[t] = i[t] || [];
                    return -1 == o.indexOf(e) && o.push(e), this;
                }
            }, e.once = function(t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {};
                    return o[e] = !0, this;
                }
            }, e.off = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return -1 != o && i.splice(o, 1), this;
                }
            }, e.emitEvent = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    i = i.slice(0), e = e || [];
                    for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                        var s = i[n], r = o && o[s];
                        r && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }, e.allOff = function() {
                delete this._events, delete this._onceEvents;
            }, t;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
        }(window, (function() {
            "use strict";
            function t(t) {
                var e = parseFloat(t), i = -1 == t.indexOf("%") && !isNaN(e);
                return i && e;
            }
            function e() {}
            function i() {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < h; e++) {
                    var i = u[e];
                    t[i] = 0;
                }
                return t;
            }
            function o(t) {
                var e = getComputedStyle(t);
                return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), 
                e;
            }
            function n() {
                if (!d) {
                    d = !0;
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", 
                    e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(e);
                    var n = o(e);
                    r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
                }
            }
            function s(e) {
                if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var s = o(e);
                    if ("none" == s.display) return i();
                    var a = {};
                    a.width = e.offsetWidth, a.height = e.offsetHeight;
                    for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                        var f = u[l], c = s[f], m = parseFloat(c);
                        a[f] = isNaN(m) ? 0 : m;
                    }
                    var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth, z = a.borderTopWidth + a.borderBottomWidth, I = d && r, x = t(s.width);
                    !1 !== x && (a.width = x + (I ? 0 : p + _));
                    var S = t(s.height);
                    return !1 !== S && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), 
                    a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, 
                    a;
                }
            }
            var r, a = "undefined" == typeof console ? e : function(t) {
                console.error(t);
            }, u = [ "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth" ], h = u.length, d = !1;
            return s;
        })), function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
        }(window, (function() {
            "use strict";
            var t = function() {
                var t = window.Element.prototype;
                if (t.matches) return "matches";
                if (t.matchesSelector) return "matchesSelector";
                for (var e = [ "webkit", "moz", "ms", "o" ], i = 0; i < e.length; i++) {
                    var o = e[i], n = o + "MatchesSelector";
                    if (t[n]) return n;
                }
            }();
            return function(e, i) {
                return e[t](i);
            };
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", [ "desandro-matches-selector/matches-selector" ], (function(i) {
                return e(t, i);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
        }(window, (function(t, e) {
            var i = {};
            i.extend = function(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }, i.modulo = function(t, e) {
                return (t % e + e) % e;
            };
            var o = Array.prototype.slice;
            i.makeArray = function(t) {
                if (Array.isArray(t)) return t;
                if (null === t || void 0 === t) return [];
                var e = "object" == typeof t && "number" == typeof t.length;
                return e ? o.call(t) : [ t ];
            }, i.removeFrom = function(t, e) {
                var i = t.indexOf(e);
                -1 != i && t.splice(i, 1);
            }, i.getParent = function(t, i) {
                for (;t.parentNode && t != document.body; ) if (t = t.parentNode, e(t, i)) return t;
            }, i.getQueryElement = function(t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }, i.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }, i.filterFindElements = function(t, o) {
                t = i.makeArray(t);
                var n = [];
                return t.forEach((function(t) {
                    if (t instanceof HTMLElement) {
                        if (!o) return void n.push(t);
                        e(t, o) && n.push(t);
                        for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
                    }
                })), n;
            }, i.debounceMethod = function(t, e, i) {
                i = i || 100;
                var o = t.prototype[e], n = e + "Timeout";
                t.prototype[e] = function() {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments, s = this;
                    this[n] = setTimeout((function() {
                        o.apply(s, e), delete s[n];
                    }), i);
                };
            }, i.docReady = function(t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }, i.toDashed = function(t) {
                return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                    return e + "-" + i;
                })).toLowerCase();
            };
            var n = t.console;
            return i.htmlInit = function(e, o) {
                i.docReady((function() {
                    var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)), d = r + "-options", l = t.jQuery;
                    h.forEach((function(t) {
                        var i, s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                        }
                        var u = new e(t, i);
                        l && l.data(t, o, u);
                    }));
                }));
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("outlayer/item", [ "ev-emitter/ev-emitter", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, 
            t.Outlayer.Item = e(t.EvEmitter, t.getSize));
        }(window, (function(t, e) {
            "use strict";
            function i(t) {
                for (var e in t) return !1;
                return null, !0;
            }
            function o(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create());
            }
            function n(t) {
                return t.replace(/([A-Z])/g, (function(t) {
                    return "-" + t.toLowerCase();
                }));
            }
            var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition", a = "string" == typeof s.transform ? "transform" : "WebkitTransform", u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[r], h = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            }, d = o.prototype = Object.create(t.prototype);
            d.constructor = o, d._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                });
            }, d.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }, d.getSize = function() {
                this.size = e(this.element);
            }, d.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }, d.getPosition = function() {
                var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"], s = parseFloat(o), r = parseFloat(n), a = this.layout.size;
                -1 != o.indexOf("%") && (s = s / 100 * a.width), -1 != n.indexOf("%") && (r = r / 100 * a.height), 
                s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, 
                r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
            }, d.layoutPosition = function() {
                var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", r = i ? "right" : "left", a = this.position.x + t[n];
                e[s] = this.getXValue(a), e[r] = "";
                var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top", l = this.position.y + t[u];
                e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [ this ]);
            }, d.getXValue = function(t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
            }, d.getYValue = function(t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
            }, d._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y;
                if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
                var s = t - i, r = e - o, a = {};
                a.transform = this.getTranslate(s, r), this.transition({
                    to: a,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                });
            }, d.getTranslate = function(t, e) {
                var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop");
                return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
            }, d.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
                this.position.x = parseFloat(t), this.position.y = parseFloat(e);
            }, d._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }, d.transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null;
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
            };
            var l = "opacity," + n(a);
            d.enableTransition = function() {
                if (!this.isTransitioning) {
                    var t = this.layout.options.transitionDuration;
                    t = "number" == typeof t ? t + "ms" : t, this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0
                    }), this.element.addEventListener(u, this, !1);
                }
            }, d.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t);
            }, d.onotransitionend = function(t) {
                this.ontransitionend(t);
            };
            var f = {
                "-webkit-transform": "transform"
            };
            d.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn, o = f[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", 
                    delete e.clean[o]), o in e.onEnd) {
                        var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o];
                    }
                    this.emitEvent("transitionEnd", [ this ]);
                }
            }, d.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
            }, d._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            };
            var c = {
                transitionProperty: "",
                transitionDuration: "",
                transitionDelay: ""
            };
            return d.removeTransitionStyles = function() {
                this.css(c);
            }, d.stagger = function(t) {
                t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
            }, d.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.css({
                    display: ""
                }), this.emitEvent("remove", [ this ]);
            }, d.remove = function() {
                return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
                    this.removeElem();
                })), void this.hide()) : void this.removeElem();
            }, d.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
                e[i] = this.onRevealTransitionEnd, this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                });
            }, d.onRevealTransitionEnd = function() {
                this.isHidden || this.emitEvent("reveal");
            }, d.getHideRevealTransitionEndProperty = function(t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }, d.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                e[i] = this.onHideTransitionEnd, this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: e
                });
            }, d.onHideTransitionEnd = function() {
                this.isHidden && (this.css({
                    display: "none"
                }), this.emitEvent("hide"));
            }, d.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                });
            }, o;
        })), function(t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("outlayer/outlayer", [ "ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item" ], (function(i, o, n, s) {
                return e(t, i, o, n, s);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
        }(window, (function(t, e, i, o, n) {
            "use strict";
            function s(t, e) {
                var i = o.getQueryElement(t);
                if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
                this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), 
                this.option(e);
                var n = ++l;
                this.element.outlayerGUID = n, f[n] = this, this._create();
                var s = this._getOption("initLayout");
                s && this.layout();
            }
            function r(t) {
                function e() {
                    t.apply(this, arguments);
                }
                return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
            }
            function a(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
                if (!i.length) return 0;
                i = parseFloat(i);
                var n = m[o] || 1;
                return i * n;
            }
            var u = t.console, h = t.jQuery, d = function() {}, l = 0, f = {};
            s.namespace = "outlayer", s.Item = n, s.defaults = {
                containerStyle: {
                    position: "relative"
                },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            };
            var c = s.prototype;
            o.extend(c, e.prototype), c.option = function(t) {
                o.extend(this.options, t);
            }, c._getOption = function(t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }, s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            }, c._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }, c.reloadItems = function() {
                this.items = this._itemize(this.element.children);
            }, c._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                    var s = e[n], r = new i(s, this);
                    o.push(r);
                }
                return o;
            }, c._filterFindItemElements = function(t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }, c.getItemElements = function() {
                return this.items.map((function(t) {
                    return t.element;
                }));
            }, c.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0;
            }, c._init = c.layout, c._resetLayout = function() {
                this.getSize();
            }, c.getSize = function() {
                this.size = i(this.element);
            }, c._getMeasurement = function(t, e) {
                var o, n = this.options[t];
                n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), 
                this[t] = o ? i(o)[e] : n) : this[t] = 0;
            }, c.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
            }, c._getItemsForLayout = function(t) {
                return t.filter((function(t) {
                    return !t.isIgnored;
                }));
            }, c._layoutItems = function(t, e) {
                if (this._emitCompleteOnItems("layout", t), t && t.length) {
                    var i = [];
                    t.forEach((function(t) {
                        var o = this._getItemLayoutPosition(t);
                        o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
                    }), this), this._processLayoutQueue(i);
                }
            }, c._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                };
            }, c._processLayoutQueue = function(t) {
                this.updateStagger(), t.forEach((function(t, e) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                }), this);
            }, c.updateStagger = function() {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), 
                this.stagger);
            }, c._positionItem = function(t, e, i, o, n) {
                o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }, c._postLayout = function() {
                this.resizeContainer();
            }, c.resizeContainer = function() {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }, c._getContainerSize = d, c._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), 
                    t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
                }
            }, c._emitCompleteOnItems = function(t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [ e ]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this, s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach((function(e) {
                    e.once(t, o);
                }));
            }, c.dispatchEvent = function(t, e, i) {
                var o = e ? [ e ].concat(i) : i;
                if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), 
                e) {
                    var n = h.Event(e);
                    n.type = t, this.$element.trigger(n, i);
                } else this.$element.trigger(t, i);
            }, c.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }, c.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }, c.stamp = function(t) {
                t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
            }, c.unstamp = function(t) {
                t = this._find(t), t && t.forEach((function(t) {
                    o.removeFrom(this.stamps, t), this.unignore(t);
                }), this);
            }, c._find = function(t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
            }, c._manageStamps = function() {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }, c._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(), e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                };
            }, c._manageStamp = d, c._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t), s = {
                    left: e.left - o.left - n.marginLeft,
                    top: e.top - o.top - n.marginTop,
                    right: o.right - e.right - n.marginRight,
                    bottom: o.bottom - e.bottom - n.marginBottom
                };
                return s;
            }, c.handleEvent = o.handleEvent, c.bindResize = function() {
                t.addEventListener("resize", this), this.isResizeBound = !0;
            }, c.unbindResize = function() {
                t.removeEventListener("resize", this), this.isResizeBound = !1;
            }, c.onresize = function() {
                this.resize();
            }, o.debounceMethod(s, "onresize", 100), c.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }, c.needsResizeLayout = function() {
                var t = i(this.element), e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }, c.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }, c.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }, c.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), 
                    this.reveal(e), this.layoutItems(i);
                }
            }, c.reveal = function(t) {
                if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                    var e = this.updateStagger();
                    t.forEach((function(t, i) {
                        t.stagger(i * e), t.reveal();
                    }));
                }
            }, c.hide = function(t) {
                if (this._emitCompleteOnItems("hide", t), t && t.length) {
                    var e = this.updateStagger();
                    t.forEach((function(t, i) {
                        t.stagger(i * e), t.hide();
                    }));
                }
            }, c.revealItemElements = function(t) {
                var e = this.getItems(t);
                this.reveal(e);
            }, c.hideItemElements = function(t) {
                var e = this.getItems(t);
                this.hide(e);
            }, c.getItem = function(t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }, c.getItems = function(t) {
                t = o.makeArray(t);
                var e = [];
                return t.forEach((function(t) {
                    var i = this.getItem(t);
                    i && e.push(i);
                }), this), e;
            }, c.remove = function(t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e), e && e.length && e.forEach((function(t) {
                    t.remove(), o.removeFrom(this.items, t);
                }), this);
            }, c.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "", this.items.forEach((function(t) {
                    t.destroy();
                })), this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
            }, s.data = function(t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }, s.create = function(t, e) {
                var i = r(s);
                return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), 
                i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), 
                i;
            };
            var m = {
                ms: 1,
                s: 1e3
            };
            return s.Item = n, s;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/item", [ "outlayer/outlayer" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, 
            t.Isotope.Item = e(t.Outlayer));
        }(window, (function(t) {
            "use strict";
            function e() {
                t.Item.apply(this, arguments);
            }
            var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
            i._create = function() {
                this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
            }, i.updateSortData = function() {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData, e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            };
            var n = i.destroy;
            return i.destroy = function() {
                n.apply(this, arguments), this.css({
                    display: ""
                });
            }, e;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", [ "get-size/get-size", "outlayer/outlayer" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, 
            t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
        }(window, (function(t, e) {
            "use strict";
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, 
                this.items = t.filteredItems, this.size = t.size);
            }
            var o = i.prototype, n = [ "_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption" ];
            return n.forEach((function(t) {
                o[t] = function() {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            })), o.needsVerticalResizeLayout = function() {
                var e = t(this.isotope.element), i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }, o._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments);
            }, o.getColumnWidth = function() {
                this.getSegmentSize("column", "Width");
            }, o.getRowHeight = function() {
                this.getSegmentSize("row", "Height");
            }, o.getSegmentSize = function(t, e) {
                var i = t + e, o = "outer" + e;
                if (this._getMeasurement(i, o), !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e];
                }
            }, o.getFirstItemSize = function() {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }, o.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments);
            }, o.getSize = function() {
                this.isotope.getSize(), this.size = this.isotope.size;
            }, i.modes = {}, i.create = function(t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), 
                n.prototype.namespace = t, i.modes[t] = n, n;
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("masonry-layout/masonry", [ "outlayer/outlayer", "get-size/get-size" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
        }(window, (function(t, e) {
            var i = t.create("masonry");
            i.compatOptions.fitWidth = "isFitWidth";
            var o = i.prototype;
            return o._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), 
                this.measureColumns(), this.colYs = [];
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                this.maxY = 0, this.horizontalColIndex = 0;
            }, o.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0], i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth;
                }
                var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o, a = r && r < 1 ? "round" : "floor";
                s = Math[a](s), this.cols = Math.max(s, 1);
            }, o.getContainerWidth = function() {
                var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i);
                this.containerWidth = o && o.innerWidth;
            }, o._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil", o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
                    x: this.columnWidth * s.col,
                    y: s.y
                }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
                return r;
            }, o._getTopColPosition = function(t) {
                var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
                return {
                    col: e.indexOf(i),
                    y: i
                };
            }, o._getTopColGroup = function(t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
                return e;
            }, o._getColGroupY = function(t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }, o._getHorizontalColPosition = function(t, e) {
                var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
                    col: i,
                    y: this._getColGroupY(i, t)
                };
            }, o._manageStamp = function(t) {
                var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right, r = s + i.outerWidth, a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
                for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
            }, o._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), 
                t;
            }, o._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }, o.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", [ "../layout-mode", "masonry-layout/masonry" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
        }(window, (function(t, e) {
            "use strict";
            var i = t.create("masonry"), o = i.prototype, n = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
            for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
            var r = o.measureColumns;
            o.measureColumns = function() {
                this.items = this.isotope.filteredItems, r.call(this);
            };
            var a = o._getOption;
            return o._getOption = function(t) {
                return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
            }, i;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", [ "../layout-mode" ], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
        }(window, (function(t) {
            "use strict";
            var e = t.create("fitRows"), i = e.prototype;
            return i._resetLayout = function() {
                this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
            }, i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
                var o = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, 
                o;
            }, i._getContainerSize = function() {
                return {
                    height: this.maxY
                };
            }, e;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", [ "../layout-mode" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
        }(window, (function(t) {
            "use strict";
            var e = t.create("vertical", {
                horizontalAlignment: 0
            }), i = e.prototype;
            return i._resetLayout = function() {
                this.y = 0;
            }, i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                };
            }, i._getContainerSize = function() {
                return {
                    height: this.y
                };
            }, e;
        })), function(t, e) {
            "function" == typeof define && define.amd ? define([ "outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical" ], (function(i, o, n, s, r, a) {
                return e(t, i, o, n, s, r, a);
            })) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
        }(window, (function(t, e, i, o, n, s, r) {
            function a(t, e) {
                return function(i, o) {
                    for (var n = 0; n < t.length; n++) {
                        var s = t[n], r = i.sortData[s], a = o.sortData[s];
                        if (r > a || r < a) {
                            var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1;
                            return (r > a ? 1 : -1) * h;
                        }
                    }
                    return 0;
                };
            }
            var u = t.jQuery, h = String.prototype.trim ? function(t) {
                return t.trim();
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "");
            }, d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            d.Item = s, d.LayoutMode = r;
            var l = d.prototype;
            l._create = function() {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), 
                this.modes = {}, this.filteredItems = this.items, this.sortHistory = [ "original-order" ];
                for (var t in r.modes) this._initLayoutMode(t);
            }, l.reloadItems = function() {
                this.itemGUID = 0, e.prototype.reloadItems.call(this);
            }, l._itemize = function() {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }, l._initLayoutMode = function(t) {
                var e = r.modes[t], i = this.options[t] || {};
                this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
            }, l.layout = function() {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
            }, l._layout = function() {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), 
                this._isLayoutInited = !0;
            }, l.arrange = function(t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [ e ]) : this._hideReveal(e), 
                this._sort(), this._layout();
            }, l._init = l.arrange, l._hideReveal = function(t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }, l._getIsInstant = function() {
                var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
                return this._isInstant = e, e;
            }, l._bindArrangeComplete = function() {
                function t() {
                    e && i && o && n.dispatchEvent("arrangeComplete", null, [ n.filteredItems ]);
                }
                var e, i, o, n = this;
                this.once("layoutComplete", (function() {
                    e = !0, t();
                })), this.once("hideComplete", (function() {
                    i = !0, t();
                })), this.once("revealComplete", (function() {
                    o = !0, t();
                }));
            }, l._filter = function(t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
                    }
                }
                return {
                    matches: i,
                    needReveal: o,
                    needHide: n
                };
            }, l._getFilterTest = function(t) {
                return u && this.options.isJQueryFiltering ? function(e) {
                    return u(e.element).is(t);
                } : "function" == typeof t ? function(e) {
                    return t(e.element);
                } : function(e) {
                    return o(e.element, t);
                };
            }, l.updateSortData = function(t) {
                var e;
                t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), 
                this._updateItemsSortData(e);
            }, l._getSorters = function() {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }, l._updateItemsSortData = function(t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            };
            var f = function() {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o), a = d.sortDataParsers[i[1]];
                    return t = a ? function(t) {
                        return t && a(r(t));
                    } : function(t) {
                        return t && r(t);
                    };
                }
                function e(t, e) {
                    return t ? function(e) {
                        return e.getAttribute(t);
                    } : function(t) {
                        var i = t.querySelector(e);
                        return i && i.textContent;
                    };
                }
                return t;
            }();
            d.sortDataParsers = {
                parseInt: function(t) {
                    return parseInt(t, 10);
                },
                parseFloat: function(t) {
                    return parseFloat(t);
                }
            }, l._sort = function() {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }, l._getIsSameSortBy = function(t) {
                for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }, l._mode = function() {
                var t = this.options.layoutMode, e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return e.options = this.options[t], e;
            }, l._resetLayout = function() {
                e.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }, l._getItemLayoutPosition = function(t) {
                return this._mode()._getItemLayoutPosition(t);
            }, l._manageStamp = function(t) {
                this._mode()._manageStamp(t);
            }, l._getContainerSize = function() {
                return this._mode()._getContainerSize();
            }, l.needsResizeLayout = function() {
                return this._mode().needsResizeLayout();
            }, l.appended = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }, l.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), 
                    this.items = e.concat(this.items);
                }
            }, l._filterRevealAdded = function(t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), 
                e.matches;
            }, l.insert = function(t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, o, n = e.length;
                    for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            };
            var c = l.remove;
            return l.remove = function(t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }, l.shuffle = function() {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                this.options.sortBy = "random", this._sort(), this._layout();
            }, l._noTransition = function(t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return this.options.transitionDuration = i, o;
            }, l.getFilteredItemElements = function() {
                return this.filteredItems.map((function(t) {
                    return t.element;
                }));
            }, d;
        }));
        window.onload = function() {
            const headerElement = document.querySelector(".header");
            const callback = function(entries, observer) {
                if (entries[0].isIntersecting) headerElement.classList.remove("_scroll"); else headerElement.classList.add("_scroll");
            };
            const headerObserver = new IntersectionObserver(callback);
            headerObserver.observe(headerElement);
            const developerCards = document.querySelectorAll(".developers__card");
            function liveSearch() {
                let searchQuery = document.querySelector(".developers__input").value;
                for (let i = 0; i < developerCards.length; i++) if (developerCards[i].querySelector(".lead-card__title").textContent.toLowerCase().includes(searchQuery.toLowerCase())) developerCards[i].classList.remove("is-hidden"); else developerCards[i].classList.add("is-hidden");
            }
            let typingTimer;
            let typeInterval = 100;
            let searchInput = document.querySelector(".developers__input");
            if (developerCards.length > 0) searchInput.addEventListener("keyup", (() => {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(liveSearch, typeInterval);
            }));
            const areasCards = document.querySelectorAll(".areas-city__city-area");
            function liveSearchAres() {
                let searchQuery = document.querySelector(".areas-city__input").value;
                for (let i = 0; i < areasCards.length; i++) if (areasCards[i].querySelector(".city-area__title").textContent.toLowerCase().includes(searchQuery.toLowerCase())) areasCards[i].classList.remove("is-hidden"); else areasCards[i].classList.add("is-hidden");
            }
            let typingTimerAreas;
            let typeIntervalAreas = 100;
            let searchInputAreas = document.querySelector(".areas-city__input");
            if (areasCards.length > 0) searchInputAreas.addEventListener("keyup", (() => {
                clearTimeout(typingTimerAreas);
                typingTimerAreas = setTimeout(liveSearchAres, typeIntervalAreas);
            }));
            const quizButton = document.querySelector(".quiz__button");
            if (quizButton) quizButton.addEventListener("click", (e => {
                e.preventDefault();
                Marquiz.showModal("62a9d7fb7cd214004ab0c35a");
            }));
        };
        async function pageMore() {
            document.body;
            if ("/project.html" === location.pathname) {
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("project.html");
                }), 5e3);
                const dataCurrentObject = await getResource(`/an_object/${getHash()}`);
                const dataAllObject = await getResource("/an_object/");
                document.title = dataCurrentObject.title;
                document.querySelector("meta[name='description']").setAttribute("content", dataCurrentObject.description);
                const apartmentPrice = document.querySelector(".apartments__info-number");
                const apartmentPrice2 = document.createElement("div");
                apartmentPrice2.className = "apartments__info-number";
                apartmentPrice2.innerHTML = `<p>${dataCurrentObject.starting_price}</p>`;
                apartmentPrice.appendChild(apartmentPrice2);
                const apartmentHandover = document.querySelector(".apartments__info-number2");
                const apartmentHandover2 = document.createElement("div");
                apartmentHandover2.className = "apartments__info-number";
                apartmentHandover2.innerHTML = `<h4>${dataCurrentObject.post_handover}</h4>`;
                apartmentHandover.appendChild(apartmentHandover2);
                const apartmentBooking = document.querySelector(".apartments__info-number3");
                const apartmentBooking2 = document.createElement("div");
                apartmentBooking2.className = "apartments__info-number";
                apartmentBooking2.innerHTML = `<h4>${dataCurrentObject.booking}</h4>`;
                apartmentBooking.appendChild(apartmentBooking2);
                const apartmentTitle = document.querySelector(".apartments__title");
                apartmentTitle.textContent = dataCurrentObject.title;
                const apartmentSafe = document.querySelector(".apartments__safe");
                apartmentSafe.style.marginTop = apartmentTitle.offsetHeight + 20 + "px";
                const apartmentText = document.querySelector(".apartments__text");
                apartmentText.innerHTML = dataCurrentObject.description;
                const apartmentWrapper = document.querySelector(".apartments-slider__wrapper");
                dataCurrentObject.object_gallery.unshift({
                    id: 0,
                    image: dataCurrentObject.mainphoto,
                    object_gallery: 1
                });
                dataCurrentObject.object_gallery.forEach((item => {
                    const div = document.createElement("div");
                    div.className = "apartments-slider__slide swiper-slide";
                    div.innerHTML = `\n                <div object-plan="${item.object_gallery}" class="apartments-slider__image-ibg">\n                    <img src="${item.image}" alt="">\n                </div>`;
                    apartmentWrapper.appendChild(div);
                }));
                const discoverTitle = document.querySelector(".discover-content-image__title");
                discoverTitle.textContent = dataCurrentObject?.title_two_ru_ru ? dataCurrentObject.title_two : dataCurrentObject.title_en_us;
                const discoverImage = document.querySelector(".discover-content-image__image-ibg img");
                const discoverImageSmall = document.querySelector(".discover-content-image__image-small");
                discoverImage.src = dataCurrentObject.photo;
                discoverImageSmall.src = dataCurrentObject.photo_two;
                const discoverText = document.querySelector(".discover__text");
                discoverText.innerHTML = dataCurrentObject.text_ru_ru;
                const features = document.querySelector(".advantages__body");
                dataCurrentObject.object_gallery.forEach((item => {
                    const div = document.createElement("div");
                    div.className = "advantages__card advantages-card";
                    div.innerHTML = `\n             <div class="advantages-card__content">\n             <div class="advantages-card__image">\n                                    <img src="${item.image}" alt="">\n                                </div>\n                              \n                            </div>\n                            </div>\n            `;
                    features.appendChild(div);
                }));
                const galleryInterier = document.querySelector(".gallery-interier__wrapper");
                const galleryInterierThumbs = document.querySelector(".thumbs-interier__wrapper");
                dataCurrentObject.interier_gallery.forEach((item => {
                    const div = document.createElement("div");
                    const divThumb = document.createElement("div");
                    div.className = "gallery-interier__slide swiper-slide";
                    divThumb.className = "thumbs-interier__slide swiper-slide";
                    divThumb.innerHTML = `\n                <div data-exterior="${item.interior_gallery}" class="thumbs-interier__image-ibg"><img src="${item.exterior}" alt=""></div>\n             `;
                    div.innerHTML = `\n                <div data-exterior="${item.interior_gallery}" class="gallery-interier__image-ibg"><img src="${item.exterior}" alt=""></div>\n            `;
                    galleryInterier.appendChild(div);
                    galleryInterierThumbs.appendChild(divThumb);
                }));
                const galleryExterier = document.querySelector(".gallery-exterier__wrapper");
                const galleryExterierThumbs = document.querySelector(".thumbs-exterier__wrapper");
                dataCurrentObject.exterior_gallery.forEach((item => {
                    const div = document.createElement("div");
                    const divThumb = document.createElement("div");
                    div.className = "gallery-exterier__slide swiper-slide";
                    divThumb.className = "thumbs-exterier__slide swiper-slide";
                    divThumb.innerHTML = `\n                <div data-exterior="${item.exterior_gallery}" class="thumbs-interier__image-ibg"><img src="${item.exterior}" alt=""></div>\n             `;
                    div.innerHTML = `\n                <div data-exterior="${item.exterior_gallery}" class="gallery-interier__image-ibg"><img src="${item.exterior}" alt=""></div>\n            `;
                    galleryExterier.appendChild(div);
                    galleryExterierThumbs.appendChild(divThumb);
                }));
                const locatedTopLeft = document.querySelector(".located-top__image-1-ibg img");
                const locatedTopRight = document.querySelector(".located-top__image-2-ibg img");
                const locatedBottomImage = document.querySelector(".located-bottom__image-ibg img");
                const locatedTopTitle = document.querySelector(".located-top__title");
                const locatedBottomText = document.querySelector(".located-bottom__text");
                locatedTopLeft.src = dataCurrentObject.photo_three;
                locatedTopRight.src = dataCurrentObject.photo_four;
                locatedBottomImage.src = dataCurrentObject.mainphoto_two;
                locatedTopTitle.textContent = dataCurrentObject.title_three;
                locatedBottomText.innerHTML = dataCurrentObject.content;
                const advantagesBody = document.querySelector(".advantages-time__body");
                dataCurrentObject.object_logo_gallery.forEach((item => {
                    const div = document.createElement("div");
                    div.className = "advantages__card advantages-card";
                    div.innerHTML = `\n                <div class="advantages-card__content">\n                    <div class="advantages-card__image">\n                        <img src="${item.logo}" alt="">\n                    </div>\n               \n                </div>\n            `;
                    advantagesBody.appendChild(div);
                }));
                const bedroomTabsContent = document.querySelector(".bedroom-tabs__wrapper");
                dataCurrentObject.object_plan.forEach(((item, index) => {
                    const div = document.createElement("div");
                    div.setAttribute("object-plan", item.object_plan);
                    div.className = "bedroom-tabs-content__body swiper-slide";
                    div.innerHTML = `\n                    <div class="bedroom-tabs-content__content">\n                        <div class="bedroom-tabs-content__title">${item.name}</div>\n                        <div class="bedroom-tabs-content__area-info">\n                            <div class="bedroom-tabs-content__area">\n                                <span class="_icon-suite-area"></span>\n                                Suite Area: ${item.suite_area} sqft\n                            </div>\n                            <div class="bedroom-tabs-content__area">\n                                <span class="_icon-total-area"></span>\n                                Total Area: ${item.total_area} sqft\n                            </div>\n                        </div>\n                        <a href="" class="bedroom-tabs-content__button button button_small-large" onclick="Marquiz.showModal('62a9d7fb7cd214004ab0c35a')">Получить всю планировку</a>\n                        <br>\n                        <a href="" class="bedroom-tabs-content__button button button_small-large-transparent" onclick="Marquiz.showModal('62a9d7fb7cd214004ab0c35a')">Скачать брошюру</a>\n                    </div>\n                    <div class="bedroom-tabs-content__image">\n                        <div class="bedroom-tabs-content__image-ibg"><img src="${item.plan}" alt=""></div>\n                    </div>\n                `;
                    bedroomTabsContent.appendChild(div);
                }));
                const paymentTitle = document.querySelector(".payment__title");
                paymentTitle.textContent = dataCurrentObject.booking;
                const paymentContent = document.querySelector(".payment__content");
                dataCurrentObject.second_object_logo_gallery.forEach((item => {
                    const div = document.createElement("div");
                    div.className = "payment__item item-payment";
                    div.innerHTML = `\n                <div second-object-logo-gallery="${item.second_object_logo_gallery}" class="item-payment__body">\n                    <div class="item-payment__image-ibg"><img src="${item.second_logo}" alt=""></div>\n                    <div class="item-payment__text">On Booking</div>\n                </div>`;
                    paymentContent.appendChild(div);
                }));
                const propertiesFilterContent = document.querySelector(".properties-filter .properties__content");
                dataAllObject.forEach(((char, index) => {
                    const div = document.createElement("div");
                    div.className = `properties__item item-properties ${char.properties.join(" ")}`;
                    div.innerHTML = `\n                <a href="/project.html" class="item-properties__image-ibg">\n                    <img src="${char.mainphoto}" alt="">\n                </a>\n                <div class="item-properties__content">\n                    <div class="item-properties__body">\n                        <div class="item-properties__title">${char.area}</div>\n                        <div class="item-properties__subtitle">\n                            Area: <span class="item-properties__value">\n                                ${char.area}\n                            </span>\n                        </div>\n                        <div class="item-properties__position">\n                            <img src="./img/icons/building.svg" class="item-properties__icon" alt="Building icon">\n                            <span class="item-properties__value">${char.developer}</span>\n                        </div>\n                        <div class="item-properties__info">\n                            <a href="${char.video_link}" class="item-properties__col">\n                                <img src="./img/icons/youtube.svg" class="item-properties__icon" alt="Youtube icon">\n                                <span class="item-properties__subtitle">\n                                    Посмотреть видео\n                                </span>\n                            </a>\n                            <a href="${char.tour_360}" class="item-properties__col">\n                                <img src="./img/icons/360.svg" class="item-properties__icon" alt="360deg icon">\n                                <span class="item-properties__subtitle">\n                                    Open 3600 Tour\n                                </span>\n                            </a>\n                        </div>\n                        <div class="item-properties__subtitle">\n                            <span class="item-properties__price">\n                                ${char.starting_price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, ",")}\n                            </span>\n                        </div>\n                    </div>\n                    <a href="/project.html#${char.id}" class="item-properties__next">\n                        <span class="_icon-arrow-right"></span>\n                    </a>\n                </div>`;
                    propertiesFilterContent.appendChild(div);
                }));
                const $filterContent = $(".properties-filter .properties__content").isotope({
                    itemSelector: ".properties__item"
                });
                $(".properties-filter__actions").on("click", "button", (function() {
                    var sortValue = $(this).attr("data-filter");
                    $filterContent.isotope({
                        filter: sortValue
                    });
                }));
                $(".properties-filter__actions").each((function(i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on("click", "button", (function() {
                        $buttonGroup.find(".is-checked").removeClass("is-checked");
                        $(this).addClass("is-checked");
                    }));
                }));
            }
        }
        async function pageHome() {
            document.body;
            if ("/" === location.pathname) {
                const data = await getResource("/an_object/");
                const developers = await getResource("/an_object/");
                const area = await getResource("/an_object/");
                const type = await getResource("/an_object/");
                const data_developer = await getResource("/developer/");
                const dataArea = await getResource("/area/");
                const dataBlog = await getResource("/blog/");
                var projectData = [];
                var start = 0;
                var end = 10;
                let pageSize = 10;
                let currentPage = 1;
                async function getResourceHere() {
                    const _apiBase = "https://kvartirivdubai.ru/api/an_object/";
                    const res = await fetch(`${_apiBase}`);
                    const body = await res.json();
                    projectData = body;
                    start = (currentPage - 1) * pageSize;
                    end = currentPage * pageSize;
                }
                async function renderProjects(page = 1, first, last) {
                    setTimeout((function() {
                        $("body").addClass("loaded");
                    }), 0);
                    await getResourceHere();
                    if (page == numPages()) nextButton.style.visibility = "hidden"; else nextButton.style.visibility = "visible";
                    projectData.filter(((row, index) => {
                        start = first;
                        end = last;
                        if (index >= start && index < end) return true;
                    })).forEach((char => {
                        const propertyContent = document.querySelector(".properties__content");
                        const propertyItem = document.createElement("div");
                        propertyItem.className = "properties__item item-properties ";
                        propertyItem.setAttribute("data-index", char.id);
                        propertyItem.setAttribute("data-tabs-title", "");
                        propertyItem.innerHTML = `\n                <a href="/project.html#${char.id}" class="item-properties__image-ibg">\n                    <img src="${char.mainphoto}" alt="">\n                </a>\n                <div class="item-properties__content">\n                    <div class="item-properties__body">\n                        <div class="item-properties__title">${char.title}</div>\n                        <div class="item-properties__subtitle">\n                            Area: <span class="item-properties__value">\n                                ${char.area}\n                            </span>\n                        </div>\n                        <div class="item-properties__position">\n                            <img src="./img/icons/building.svg" class="item-properties__icon" alt="Building icon">\n                            <span class="item-properties__value"> ${char.developer}</span>\n                        </div>\n                        <div class="item-properties__info">\n                            <a href="${char.video_link}" class="item-properties__col">\n                                <img src="./img/icons/youtube.svg" class="item-properties__icon" alt="Youtube icon">\n                                <span class="item-properties__subtitle">\n                                    Play Video Overview\n                                </span>\n                            </a>\n                            <a href="${char.tour_360}" class="item-properties__col">\n                                <img src="./img/icons/360.svg" class="item-properties__icon" alt="360deg icon">\n                                <span class="item-properties__subtitle">\n                                    Open 3600 Tour\n                                </span>\n                            </a>\n                        </div>\n                        <div class="item-properties__subtitle">\n                             \n                            <span class="item-properties__price">\n                                 ${char.starting_price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, ",")}\n                            </span>\n                        </div>\n                    </div>\n                    <a href="/project.html#${char.id}" class="item-properties__next">\n                        <span class="_icon-arrow-right"></span>\n                    </a>\n                </div>`;
                        propertyContent.appendChild(propertyItem);
                    }));
                }
                renderProjects(1, start, end);
                function numPages() {
                    return Math.ceil(projectData.length / pageSize);
                }
                function nextPage() {
                    start += 10;
                    end += 10;
                    renderProjects(currentPage, start, end);
                }
                document.querySelector("#nextButton").addEventListener("click", nextPage, false);
                let developerArray = [];
                var developerTitle;
                let developerObject = {};
                for (let i in developers) {
                    developerTitle = developers[i]["developer"];
                    developerObject[developerTitle] = developers[i];
                }
                for (let x in developerObject) developerArray.push(developerObject[x]);
                developerArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-developer");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.developer}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let areaArray = [];
                var areaTitle;
                let areaObject = {};
                for (let i in area) {
                    areaTitle = area[i]["area"];
                    areaObject[areaTitle] = area[i];
                }
                for (let x in areaObject) areaArray.push(areaObject[x]);
                areaArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-area");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.area}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let typeArray = [];
                var typeTitle;
                let typeObject = {};
                for (let i in type) {
                    typeTitle = type[i]["type"];
                    typeObject[typeTitle] = type[i];
                }
                for (let x in typeObject) typeArray.push(typeObject[x]);
                typeArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-type");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.type}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                const bestAreaBody = document.querySelector(".best-area__body");
                var BreakException2 = {};
                var aar2 = 0;
                try {
                    dataArea.forEach(((char, index) => {
                        if (4 === aar2) throw BreakException2;
                        aar2 += 1;
                        const a = document.createElement("a");
                        let hrefLabel = char.name.replace(/\s/g, "+");
                        a.setAttribute("href", `https://kvartirivdubai.ru/search.html?types=Type&search=&developer=&area=${hrefLabel}&lifestyle=&min=&max=`);
                        a.className = "best-area__item item-area";
                        a.innerHTML = `\n                    <div class="item-area__image-ibg"><img src="${char.mainphoto}" alt=""></div>\n                    <div class="item-area__content">\n                        <div class="item-area__message">От AED ${char.starting_price}</div>\n                        <div class="item-area__info">\n                            <div class="item-area__title title title_w">${char.name}</div>\n                            <div class="item-area__text">${char.description}</div>\n                        </div>\n                    </div>`;
                        bestAreaBody.appendChild(a);
                    }));
                } catch (e) {
                    if (e !== BreakException2) throw e;
                }
                const areaBody = document.querySelector(".area__body");
                var BreakException = {};
                var aar = 0;
                try {
                    dataArea.forEach(((char, index) => {
                        console.log(index);
                        if (index >= 4) {
                            console.log("if 2");
                            return;
                        }
                        if (5 === aar) throw BreakException;
                        aar += 1;
                        let hrefLabel = char.name.replace(/\s/g, "+");
                        const a = document.createElement("a");
                        a.setAttribute("href", `https://kvartirivdubai.ru/search.html?types=Type&search=&developer=&area=${hrefLabel}&lifestyle=&min=&max=`);
                        a.className = "area__item";
                        a.innerHTML = `\n                    <div class="area__image-ibg"><img src="${char.mainphoto}" alt="Dubai island buildings"></div>\n                    <div class="area__title">\n                        ${char.name}\n                    </div>`;
                        areaBody.appendChild(a);
                    }));
                } catch (e) {
                    if (e !== BreakException) throw e;
                }
                const overviewsWrapper = document.querySelector(".overviews-slider__wrapper");
                data_developer.forEach(((char, index) => {
                    const div = document.createElement("div");
                    div.className = "swiper-slide overviews-slider__slide";
                    div.innerHTML = `\n            <div class="swiper-slide overviews-slider__slide">\n                <a href="${char.link}" class="overviews-slider__image-ibg"><img src="${char.mainphoto}" alt=""></a>\n                <div class="overviews-slider__subtitle">${char.name}</div>\n                <a href="${char.link}" class="button button_small overviews-slider__button">Video Overview</a>\n            </div>`;
                    overviewsWrapper.appendChild(div);
                }));
                const leadWrapper = document.querySelector(".lead__wrapper");
                data_developer.forEach(((char, index) => {
                    const a = document.createElement("a");
                    a.className = "lead__card lead-card swiper-slide";
                    a.innerHTML = `\n                <div class="lead-card__body">\n                    <div class="lead-card__image-ibg"><img src="${char.mainphoto}" alt=""></div>\n                    <div class="lead-card__company-logo">\n                        <img src="${char.logo}" alt="">\n                    </div>\n                    <div class="lead-card__content">\n                        <div class="lead-card__title title" style=" display: -webkit-box;max-width: 450px;-webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;">${char.title}</div>\n                        <div class="lead-card__text" style=" display: -webkit-box;max-width: 450px;-webkit-line-clamp: 4;-webkit-box-orient: vertical;overflow: hidden;">${char.text}</div>\n                    </div>\n                </div>`;
                    leadWrapper.appendChild(a);
                }));
                const newsWrapper = document.querySelector(".news__body");
                dataBlog.forEach(((char, index) => {
                    const div = document.createElement("div");
                    div.className = "news__card card-news";
                    const dateArr = char.created.split("-");
                    const getMonth = new Date(dateArr[1]).toLocaleDateString("en", {
                        month: "long"
                    });
                    div.innerHTML = `\n                <div class="card-news__body">\n                    <a href="${char.link}" class="card-news__image-ibg"><img src="${char.mainphoto}" alt=""></a>\n                    <div class="card-news__date">\n                        <span class="card-news__icon _icon-calendar"></span>\n                        <span class="card-news__date-text">\n                            ${dateArr[2]} <sup>th</sup> ${getMonth} ${dateArr[0]}\n                        </span>\n                    </div>\n                    <div class="card-news__content">\n                        <div class="card-news__type-projects">\n                            NEW PROJECTS \n                        </div>\n                        <div class="card-news__title">${char.title}</div>\n                        <div class="card-news__text">${char.description}</div>\n                        <a href="${char.link}" class="card-news__button button button_small">\n                            Video Overview\n                        </a>\n                    </div>\n                </div>`;
                    newsWrapper.appendChild(div);
                }));
                var locations = [];
                data.forEach(((char, index) => {
                    locations[index] = [ char.title, char.latitude, char.longitude, index ];
                }));
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 12,
                    center: new google.maps.LatLng(25.0617177, 55.312431),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                var infowindow = new google.maps.InfoWindow;
                var marker, i;
                for (i = 0; i < locations.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map
                    });
                    google.maps.event.addListener(marker, "click", function(marker, i) {
                        return function() {
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                        };
                    }(marker, i));
                }
            }
        }
        async function pageSearch() {
            if ("/search.html" === location.pathname) {
                const params = new URLSearchParams(window.location.search);
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("search.html");
                }), 5e3);
                const developers = await getResource("/an_object/");
                const area = await getResource("/an_object/");
                const data = await getResource2("https://kvartirivdubai.ru/api/an_object/?developer=" + params.get("developer") + "&area=" + params.get("area") + "&properties=" + params.get("type") + "&type=" + params.get("lifestyle") + "&search=" + params.get("search"));
                const type = await getResource("/an_object/");
                console.log(params);
                const formInput = document.querySelector(".form-find__input");
                formInput.value = params.get("search");
                let developerArray = [];
                var developerTitle;
                let developerObject = {};
                for (let i in developers) {
                    developerTitle = developers[i]["developer"];
                    developerObject[developerTitle] = developers[i];
                }
                for (let x in developerObject) developerArray.push(developerObject[x]);
                console.log(developerArray);
                developerArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-developer");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    console.log(developerArray[index], "developerArray");
                    if (params.get("developer") === developerArray[index].developer) selectItem.setAttribute("selected", "");
                    selectItem.setAttribute("value", char2.developer);
                    selectItem.textContent = `${char2.developer}`;
                    selectContent.appendChild(selectItem);
                }));
                let areaArray = [];
                var areaTitle;
                let areaObject = {};
                for (let i in area) {
                    areaTitle = area[i]["area"];
                    areaObject[areaTitle] = area[i];
                }
                for (let x in areaObject) areaArray.push(areaObject[x]);
                areaArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-area");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    if (params.get("area") === areaArray[index].area) selectItem.setAttribute("selected", "");
                    selectItem.textContent = `${char2.area}`;
                    selectContent.appendChild(selectItem);
                }));
                let typeArray = [];
                var typeTitle;
                let typeObject = {};
                for (let i in type) {
                    typeTitle = type[i]["type"];
                    typeObject[typeTitle] = type[i];
                }
                for (let x in typeObject) typeArray.push(typeObject[x]);
                typeArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-type");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    console.log(typeArray[index], "typeArray");
                    if (params.get("lifestyle") === typeArray[index].area) {
                        console.log(params.get("lifestyle") === typeArray[index].area, "select-type");
                        selectItem.setAttribute("selected", "");
                    }
                    selectItem.setAttribute("value", char2.area);
                    selectItem.textContent = `${char2.type}`;
                    selectContent.appendChild(selectItem);
                }));
                const selectTypes = document.querySelectorAll('.form-find__select[name="types"] .select__option');
                selectTypes.forEach(((char, index) => {
                    console.log(char.getAttribute("value"), params.get("types"), char.getAttribute("value") === params.get("types"), "types");
                    if (char.getAttribute("value") === params.get("types")) char.setAttribute("selected", "");
                }));
                const selectMinPrice = document.querySelectorAll('.form-find__select[name="min"] .select__option');
                selectMinPrice.forEach(((char, index) => {
                    if (char.getAttribute("value") === params.get("min")) char.setAttribute("selected", "");
                }));
                const selectMaxPrice = document.querySelectorAll(".form-find__select[name='max'] .select__option");
                selectMaxPrice.forEach(((char, index) => {
                    if (char.getAttribute("value") === params.get("max")) char.setAttribute("selected", "");
                }));
                data.forEach(((char, index) => {
                    const propertyContent = document.querySelector(".best-properties__content");
                    const propertyItem = document.createElement("div");
                    propertyItem.className = "best-properties__item-propertie item-propertie";
                    propertyItem.setAttribute("data-index", char.id);
                    propertyItem.setAttribute("data-tabs-title", "");
                    const videoLink = functions_extractVideoID(char.video_link);
                    propertyItem.innerHTML = `\n                                           <div class="best-properties__item-propertie item-propertie">\n                                <div class="item-propertie__body">\n                                    <a href="project.html#${char.id}" class="item-propertie__image-ibg">\n                                        <img src="${char.mainphoto}" alt="">\n                                        <div class="item-propertie__types">\n                                            <span>${char.properties}</span>\n                                        </div>\n                                        <div class="item-propertie__stickers">\n                                            \n                                        </div>\n                                    </a>\n                                    <div class="item-propertie__content">\n                                        <a href="project.html#${char.id}" class="item-propertie__title">${char.title}</a>\n                                        <div class="item-propertie__location">\n                                           <a href = "search.html?types=Type&developer=&area=${char.area}&lifestyle=&min=&max=&search=">${char.area}</a>\n                                        </div>\n                                        <div class="item-propertie__developer">\n                                            <img src="img/icons/building.svg" alt="Building icon">\n                                            <a href = "search.html?types=Type&developer=${char.developer}&area=&lifestyle=&min=&max=&search=">${char.developer}</a>\n                                        </div>\n\t\t\t\t\t\t\t\t        <button type="button" data-popup="#video" data-popup-youtube="${videoLink}" class="item-propertie__video-play _icon-play">\n                                            Посмотреть видео\n                                        </button>\n                                        <div class="item-propertie__price">\n                                            \n                                            <span class="item-propertie__value">${char.starting_price}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>`;
                    propertyContent.appendChild(propertyItem);
                }));
            }
        }
        async function pageBlog() {
            document.body;
            if ("/blog.html" === location.pathname) {
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("blog.html");
                }), 5e3);
                const blog = await getResource("/blog/");
                const overviewsWrapper = document.querySelector(".news-blog__body");
                blog.forEach(((char, index) => {
                    const div = document.createElement("div");
                    div.className = "news-blog__card card-news";
                    div.innerHTML = `\n               <div class="card-news__body">\n                                <a href="/sub-blog.html#${char.id}" class="card-news__image-ibg"><img src="${char.mainphoto}" alt=""></a>\n                                <div class="card-news__date">\n                                    <span class="card-news__icon _icon-calendar"></span>\n                                    <span class="card-news__date-text">\n                                        ${char.created}\n                                    </span>\n                                </div>\n                                <div class="card-news__content">\n                                    <div class="card-news__type-projects">\n                                        \n                                    </div>\n                                    <div class="card-news__title">${char.title}</div>\n                                    <div class="card-news__text">${char.description_ru_ru}</div>\n                                    <a href="${char.link}" class="card-news__button button button_small">\n                                        Посмотреть видео\n                                    </a>\n                                </div>\n                            </div>`;
                    overviewsWrapper.appendChild(div);
                }));
                var modal = document.getElementById("myModal");
                modal.style.display = "none";
                document.getElementById("myBtn");
                document.getElementsByClassName("close")[0];
                window.onclick = function(event) {
                    if (event.target == modal) modal.style.display = "none";
                };
            }
        }
        function sortKD(ids, coords, nodeSize, left, right, depth) {
            if (right - left <= nodeSize) return;
            const m = left + right >> 1;
            sort_select(ids, coords, m, left, right, depth % 2);
            sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
            sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
        }
        function sort_select(ids, coords, k, left, right, inc) {
            while (right > left) {
                if (right - left > 600) {
                    const n = right - left + 1;
                    const m = k - left + 1;
                    const z = Math.log(n);
                    const s = .5 * Math.exp(2 * z / 3);
                    const sd = .5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
                    const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
                    const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
                    sort_select(ids, coords, k, newLeft, newRight, inc);
                }
                const t = coords[2 * k + inc];
                let i = left;
                let j = right;
                swapItem(ids, coords, left, k);
                if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);
                while (i < j) {
                    swapItem(ids, coords, i, j);
                    i++;
                    j--;
                    while (coords[2 * i + inc] < t) i++;
                    while (coords[2 * j + inc] > t) j--;
                }
                if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j); else {
                    j++;
                    swapItem(ids, coords, j, right);
                }
                if (j <= k) left = j + 1;
                if (k <= j) right = j - 1;
            }
        }
        function swapItem(ids, coords, i, j) {
            swap(ids, i, j);
            swap(coords, 2 * i, 2 * j);
            swap(coords, 2 * i + 1, 2 * j + 1);
        }
        function swap(arr, i, j) {
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
            const stack = [ 0, ids.length - 1, 0 ];
            const result = [];
            let x, y;
            while (stack.length) {
                const axis = stack.pop();
                const right = stack.pop();
                const left = stack.pop();
                if (right - left <= nodeSize) {
                    for (let i = left; i <= right; i++) {
                        x = coords[2 * i];
                        y = coords[2 * i + 1];
                        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
                    }
                    continue;
                }
                const m = Math.floor((left + right) / 2);
                x = coords[2 * m];
                y = coords[2 * m + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);
                const nextAxis = (axis + 1) % 2;
                if (0 === axis ? minX <= x : minY <= y) {
                    stack.push(left);
                    stack.push(m - 1);
                    stack.push(nextAxis);
                }
                if (0 === axis ? maxX >= x : maxY >= y) {
                    stack.push(m + 1);
                    stack.push(right);
                    stack.push(nextAxis);
                }
            }
            return result;
        }
        function within(ids, coords, qx, qy, r, nodeSize) {
            const stack = [ 0, ids.length - 1, 0 ];
            const result = [];
            const r2 = r * r;
            while (stack.length) {
                const axis = stack.pop();
                const right = stack.pop();
                const left = stack.pop();
                if (right - left <= nodeSize) {
                    for (let i = left; i <= right; i++) if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
                    continue;
                }
                const m = Math.floor((left + right) / 2);
                const x = coords[2 * m];
                const y = coords[2 * m + 1];
                if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);
                const nextAxis = (axis + 1) % 2;
                if (0 === axis ? qx - r <= x : qy - r <= y) {
                    stack.push(left);
                    stack.push(m - 1);
                    stack.push(nextAxis);
                }
                if (0 === axis ? qx + r >= x : qy + r >= y) {
                    stack.push(m + 1);
                    stack.push(right);
                    stack.push(nextAxis);
                }
            }
            return result;
        }
        function sqDist(ax, ay, bx, by) {
            const dx = ax - bx;
            const dy = ay - by;
            return dx * dx + dy * dy;
        }
        const defaultGetX = p => p[0];
        const defaultGetY = p => p[1];
        class KDBush {
            constructor(points, getX = defaultGetX, getY = defaultGetY, nodeSize = 64, ArrayType = Float64Array) {
                this.nodeSize = nodeSize;
                this.points = points;
                const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;
                const ids = this.ids = new IndexArrayType(points.length);
                const coords = this.coords = new ArrayType(2 * points.length);
                for (let i = 0; i < points.length; i++) {
                    ids[i] = i;
                    coords[2 * i] = getX(points[i]);
                    coords[2 * i + 1] = getY(points[i]);
                }
                sortKD(ids, coords, nodeSize, 0, ids.length - 1, 0);
            }
            range(minX, minY, maxX, maxY) {
                return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
            }
            within(x, y, r) {
                return within(this.ids, this.coords, x, y, r, this.nodeSize);
            }
        }
        const defaultOptions = {
            minZoom: 0,
            maxZoom: 16,
            minPoints: 2,
            radius: 40,
            extent: 512,
            nodeSize: 64,
            log: false,
            generateId: false,
            reduce: null,
            map: props => props
        };
        const fround = Math.fround || (tmp => x => {
            tmp[0] = +x;
            return tmp[0];
        })(new Float32Array(1));
        class Supercluster {
            constructor(options) {
                this.options = supercluster_extend(Object.create(defaultOptions), options);
                this.trees = new Array(this.options.maxZoom + 1);
            }
            load(points) {
                const {log, minZoom, maxZoom, nodeSize} = this.options;
                if (log) console.time("total time");
                const timerId = `prepare ${points.length} points`;
                if (log) console.time(timerId);
                this.points = points;
                let clusters = [];
                for (let i = 0; i < points.length; i++) {
                    if (!points[i].geometry) continue;
                    clusters.push(createPointCluster(points[i], i));
                }
                this.trees[maxZoom + 1] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
                if (log) console.timeEnd(timerId);
                for (let z = maxZoom; z >= minZoom; z--) {
                    const now = +Date.now();
                    clusters = this._cluster(clusters, z);
                    this.trees[z] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
                    if (log) console.log("z%d: %d clusters in %dms", z, clusters.length, +Date.now() - now);
                }
                if (log) console.timeEnd("total time");
                return this;
            }
            getClusters(bbox, zoom) {
                let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
                const minLat = Math.max(-90, Math.min(90, bbox[1]));
                let maxLng = 180 === bbox[2] ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
                const maxLat = Math.max(-90, Math.min(90, bbox[3]));
                if (bbox[2] - bbox[0] >= 360) {
                    minLng = -180;
                    maxLng = 180;
                } else if (minLng > maxLng) {
                    const easternHem = this.getClusters([ minLng, minLat, 180, maxLat ], zoom);
                    const westernHem = this.getClusters([ -180, minLat, maxLng, maxLat ], zoom);
                    return easternHem.concat(westernHem);
                }
                const tree = this.trees[this._limitZoom(zoom)];
                const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
                const clusters = [];
                for (const id of ids) {
                    const c = tree.points[id];
                    clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
                }
                return clusters;
            }
            getChildren(clusterId) {
                const originId = this._getOriginId(clusterId);
                const originZoom = this._getOriginZoom(clusterId);
                const errorMsg = "No cluster with the specified id.";
                const index = this.trees[originZoom];
                if (!index) throw new Error(errorMsg);
                const origin = index.points[originId];
                if (!origin) throw new Error(errorMsg);
                const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
                const ids = index.within(origin.x, origin.y, r);
                const children = [];
                for (const id of ids) {
                    const c = index.points[id];
                    if (c.parentId === clusterId) children.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
                }
                if (0 === children.length) throw new Error(errorMsg);
                return children;
            }
            getLeaves(clusterId, limit, offset) {
                limit = limit || 10;
                offset = offset || 0;
                const leaves = [];
                this._appendLeaves(leaves, clusterId, limit, offset, 0);
                return leaves;
            }
            getTile(z, x, y) {
                const tree = this.trees[this._limitZoom(z)];
                const z2 = Math.pow(2, z);
                const {extent, radius} = this.options;
                const p = radius / extent;
                const top = (y - p) / z2;
                const bottom = (y + 1 + p) / z2;
                const tile = {
                    features: []
                };
                this._addTileFeatures(tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom), tree.points, x, y, z2, tile);
                if (0 === x) this._addTileFeatures(tree.range(1 - p / z2, top, 1, bottom), tree.points, z2, y, z2, tile);
                if (x === z2 - 1) this._addTileFeatures(tree.range(0, top, p / z2, bottom), tree.points, -1, y, z2, tile);
                return tile.features.length ? tile : null;
            }
            getClusterExpansionZoom(clusterId) {
                let expansionZoom = this._getOriginZoom(clusterId) - 1;
                while (expansionZoom <= this.options.maxZoom) {
                    const children = this.getChildren(clusterId);
                    expansionZoom++;
                    if (1 !== children.length) break;
                    clusterId = children[0].properties.cluster_id;
                }
                return expansionZoom;
            }
            _appendLeaves(result, clusterId, limit, offset, skipped) {
                const children = this.getChildren(clusterId);
                for (const child of children) {
                    const props = child.properties;
                    if (props && props.cluster) if (skipped + props.point_count <= offset) skipped += props.point_count; else skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped); else if (skipped < offset) skipped++; else result.push(child);
                    if (result.length === limit) break;
                }
                return skipped;
            }
            _addTileFeatures(ids, points, x, y, z2, tile) {
                for (const i of ids) {
                    const c = points[i];
                    const isCluster = c.numPoints;
                    let tags, px, py;
                    if (isCluster) {
                        tags = getClusterProperties(c);
                        px = c.x;
                        py = c.y;
                    } else {
                        const p = this.points[c.index];
                        tags = p.properties;
                        px = lngX(p.geometry.coordinates[0]);
                        py = latY(p.geometry.coordinates[1]);
                    }
                    const f = {
                        type: 1,
                        geometry: [ [ Math.round(this.options.extent * (px * z2 - x)), Math.round(this.options.extent * (py * z2 - y)) ] ],
                        tags
                    };
                    let id;
                    if (isCluster) id = c.id; else if (this.options.generateId) id = c.index; else if (this.points[c.index].id) id = this.points[c.index].id;
                    if (void 0 !== id) f.id = id;
                    tile.features.push(f);
                }
            }
            _limitZoom(z) {
                return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
            }
            _cluster(points, zoom) {
                const clusters = [];
                const {radius, extent, reduce, minPoints} = this.options;
                const r = radius / (extent * Math.pow(2, zoom));
                for (let i = 0; i < points.length; i++) {
                    const p = points[i];
                    if (p.zoom <= zoom) continue;
                    p.zoom = zoom;
                    const tree = this.trees[zoom + 1];
                    const neighborIds = tree.within(p.x, p.y, r);
                    const numPointsOrigin = p.numPoints || 1;
                    let numPoints = numPointsOrigin;
                    for (const neighborId of neighborIds) {
                        const b = tree.points[neighborId];
                        if (b.zoom > zoom) numPoints += b.numPoints || 1;
                    }
                    if (numPoints > numPointsOrigin && numPoints >= minPoints) {
                        let wx = p.x * numPointsOrigin;
                        let wy = p.y * numPointsOrigin;
                        let clusterProperties = reduce && numPointsOrigin > 1 ? this._map(p, true) : null;
                        const id = (i << 5) + (zoom + 1) + this.points.length;
                        for (const neighborId of neighborIds) {
                            const b = tree.points[neighborId];
                            if (b.zoom <= zoom) continue;
                            b.zoom = zoom;
                            const numPoints2 = b.numPoints || 1;
                            wx += b.x * numPoints2;
                            wy += b.y * numPoints2;
                            b.parentId = id;
                            if (reduce) {
                                if (!clusterProperties) clusterProperties = this._map(p, true);
                                reduce(clusterProperties, this._map(b));
                            }
                        }
                        p.parentId = id;
                        clusters.push(createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));
                    } else {
                        clusters.push(p);
                        if (numPoints > 1) for (const neighborId of neighborIds) {
                            const b = tree.points[neighborId];
                            if (b.zoom <= zoom) continue;
                            b.zoom = zoom;
                            clusters.push(b);
                        }
                    }
                }
                return clusters;
            }
            _getOriginId(clusterId) {
                return clusterId - this.points.length >> 5;
            }
            _getOriginZoom(clusterId) {
                return (clusterId - this.points.length) % 32;
            }
            _map(point, clone) {
                if (point.numPoints) return clone ? supercluster_extend({}, point.properties) : point.properties;
                const original = this.points[point.index].properties;
                const result = this.options.map(original);
                return clone && result === original ? supercluster_extend({}, result) : result;
            }
        }
        function createCluster(x, y, id, numPoints, properties) {
            return {
                x: fround(x),
                y: fround(y),
                zoom: 1 / 0,
                id,
                parentId: -1,
                numPoints,
                properties
            };
        }
        function createPointCluster(p, id) {
            const [x, y] = p.geometry.coordinates;
            return {
                x: fround(lngX(x)),
                y: fround(latY(y)),
                zoom: 1 / 0,
                index: id,
                parentId: -1
            };
        }
        function getClusterJSON(cluster) {
            return {
                type: "Feature",
                id: cluster.id,
                properties: getClusterProperties(cluster),
                geometry: {
                    type: "Point",
                    coordinates: [ xLng(cluster.x), yLat(cluster.y) ]
                }
            };
        }
        function getClusterProperties(cluster) {
            const count = cluster.numPoints;
            const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
            return supercluster_extend(supercluster_extend({}, cluster.properties), {
                cluster: true,
                cluster_id: cluster.id,
                point_count: count,
                point_count_abbreviated: abbrev
            });
        }
        function lngX(lng) {
            return lng / 360 + .5;
        }
        function latY(lat) {
            const sin = Math.sin(lat * Math.PI / 180);
            const y = .5 - .25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
            return y < 0 ? 0 : y > 1 ? 1 : y;
        }
        function xLng(x) {
            return 360 * (x - .5);
        }
        function yLat(y) {
            const y2 = (180 - 360 * y) * Math.PI / 180;
            return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
        }
        function supercluster_extend(dest, src) {
            for (const id in src) dest[id] = src[id];
            return dest;
        }
        function getX(p) {
            return p.x;
        }
        function getY(p) {
            return p.y;
        }
        var fast_deep_equal = __webpack_require__(63);
        var fast_deep_equal_default = __webpack_require__.n(fast_deep_equal);
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (null != s && "function" === typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        }
        class Cluster {
            constructor({markers, position}) {
                this.markers = markers;
                if (position) if (position instanceof google.maps.LatLng) this._position = position; else this._position = new google.maps.LatLng(position);
            }
            get bounds() {
                if (0 === this.markers.length && !this._position) return;
                return this.markers.reduce(((bounds, marker) => bounds.extend(marker.getPosition())), new google.maps.LatLngBounds(this._position, this._position));
            }
            get position() {
                return this._position || this.bounds.getCenter();
            }
            get count() {
                return this.markers.filter((m => m.getVisible())).length;
            }
            push(marker) {
                this.markers.push(marker);
            }
            delete() {
                if (this.marker) {
                    this.marker.setMap(null);
                    delete this.marker;
                }
                this.markers.length = 0;
            }
        }
        class AbstractAlgorithm {
            constructor({maxZoom = 16}) {
                this.maxZoom = maxZoom;
            }
            noop({markers}) {
                return noop(markers);
            }
        }
        const noop = markers => {
            const clusters = markers.map((marker => new Cluster({
                position: marker.getPosition(),
                markers: [ marker ]
            })));
            return clusters;
        };
        class SuperClusterAlgorithm extends AbstractAlgorithm {
            constructor(_a) {
                var {maxZoom, radius = 60} = _a, options = __rest(_a, [ "maxZoom", "radius" ]);
                super({
                    maxZoom
                });
                this.superCluster = new Supercluster(Object.assign({
                    maxZoom: this.maxZoom,
                    radius
                }, options));
                this.state = {
                    zoom: null
                };
            }
            calculate(input) {
                let changed = false;
                if (!fast_deep_equal_default()(input.markers, this.markers)) {
                    changed = true;
                    this.markers = [ ...input.markers ];
                    const points = this.markers.map((marker => ({
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [ marker.getPosition().lng(), marker.getPosition().lat() ]
                        },
                        properties: {
                            marker
                        }
                    })));
                    this.superCluster.load(points);
                }
                const state = {
                    zoom: input.map.getZoom()
                };
                if (!changed) if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom) ; else changed = changed || !fast_deep_equal_default()(this.state, state);
                this.state = state;
                if (changed) this.clusters = this.cluster(input);
                return {
                    clusters: this.clusters,
                    changed
                };
            }
            cluster({map}) {
                return this.superCluster.getClusters([ -180, -90, 180, 90 ], Math.round(map.getZoom())).map(this.transformCluster.bind(this));
            }
            transformCluster({geometry: {coordinates: [lng, lat]}, properties}) {
                if (properties.cluster) return new Cluster({
                    markers: this.superCluster.getLeaves(properties.cluster_id, 1 / 0).map((leaf => leaf.properties.marker)),
                    position: new google.maps.LatLng({
                        lat,
                        lng
                    })
                }); else {
                    const marker = properties.marker;
                    return new Cluster({
                        markers: [ marker ],
                        position: marker.getPosition()
                    });
                }
            }
        }
        class ClusterStats {
            constructor(markers, clusters) {
                this.markers = {
                    sum: markers.length
                };
                const clusterMarkerCounts = clusters.map((a => a.count));
                const clusterMarkerSum = clusterMarkerCounts.reduce(((a, b) => a + b), 0);
                this.clusters = {
                    count: clusters.length,
                    markers: {
                        mean: clusterMarkerSum / clusters.length,
                        sum: clusterMarkerSum,
                        min: Math.min(...clusterMarkerCounts),
                        max: Math.max(...clusterMarkerCounts)
                    }
                };
            }
        }
        class DefaultRenderer {
            render({count, position}, stats) {
                const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
                const svg = window.btoa(`\n  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>`);
                return new google.maps.Marker({
                    position,
                    icon: {
                        url: `data:image/svg+xml;base64,${svg}`,
                        scaledSize: new google.maps.Size(45, 45)
                    },
                    label: {
                        text: String(count),
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "12px"
                    },
                    title: `Cluster of ${count} markers`,
                    zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count
                });
            }
        }
        function index_esm_extend(type1, type2) {
            for (let property in type2.prototype) type1.prototype[property] = type2.prototype[property];
        }
        class OverlayViewSafe {
            constructor() {
                index_esm_extend(OverlayViewSafe, google.maps.OverlayView);
            }
        }
        var MarkerClustererEvents;
        (function(MarkerClustererEvents) {
            MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
            MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
            MarkerClustererEvents["CLUSTER_CLICK"] = "click";
        })(MarkerClustererEvents || (MarkerClustererEvents = {}));
        const defaultOnClusterClickHandler = (_, cluster, map) => {
            map.fitBounds(cluster.bounds);
        };
        class MarkerClusterer extends OverlayViewSafe {
            constructor({map, markers = [], algorithm = new SuperClusterAlgorithm({}), renderer = new DefaultRenderer, onClusterClick = defaultOnClusterClickHandler}) {
                super();
                this.markers = [ ...markers ];
                this.clusters = [];
                this.algorithm = algorithm;
                this.renderer = renderer;
                this.onClusterClick = onClusterClick;
                if (map) this.setMap(map);
            }
            addMarker(marker, noDraw) {
                if (this.markers.includes(marker)) return;
                this.markers.push(marker);
                if (!noDraw) this.render();
            }
            addMarkers(markers, noDraw) {
                markers.forEach((marker => {
                    this.addMarker(marker, true);
                }));
                if (!noDraw) this.render();
            }
            removeMarker(marker, noDraw) {
                const index = this.markers.indexOf(marker);
                if (-1 === index) return false;
                marker.setMap(null);
                this.markers.splice(index, 1);
                if (!noDraw) this.render();
                return true;
            }
            removeMarkers(markers, noDraw) {
                let removed = false;
                markers.forEach((marker => {
                    removed = this.removeMarker(marker, true) || removed;
                }));
                if (removed && !noDraw) this.render();
                return removed;
            }
            clearMarkers(noDraw) {
                this.markers.length = 0;
                if (!noDraw) this.render();
            }
            render() {
                const map = this.getMap();
                if (map instanceof google.maps.Map && this.getProjection()) {
                    google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
                    const {clusters, changed} = this.algorithm.calculate({
                        markers: this.markers,
                        map,
                        mapCanvasProjection: this.getProjection()
                    });
                    if (changed || void 0 == changed) {
                        this.reset();
                        this.clusters = clusters;
                        this.renderClusters();
                    }
                    google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
                }
            }
            onAdd() {
                this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
                this.render();
            }
            onRemove() {
                google.maps.event.removeListener(this.idleListener);
                this.reset();
            }
            reset() {
                this.markers.forEach((marker => marker.setMap(null)));
                this.clusters.forEach((cluster => cluster.delete()));
                this.clusters = [];
            }
            renderClusters() {
                const stats = new ClusterStats(this.markers, this.clusters);
                const map = this.getMap();
                this.clusters.forEach((cluster => {
                    if (1 === cluster.markers.length) cluster.marker = cluster.markers[0]; else {
                        cluster.marker = this.renderer.render(cluster, stats);
                        if (this.onClusterClick) cluster.marker.addListener("click", (event => {
                            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
                            this.onClusterClick(event, cluster, map);
                        }));
                    }
                    cluster.marker.setMap(map);
                }));
            }
        }
        async function pageMap() {
            document.body;
            if ("/map.html" === location.pathname) {
                const data = await getResource("/an_object/");
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("map.html");
                }), 5e3);
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 10,
                    center: {
                        lat: 25.0990514,
                        lng: 55.2840639
                    }
                });
                var locations = [];
                var markers = [];
                var marker1 = [];
                var title = [];
                var img = [];
                var infowindow = new google.maps.InfoWindow;
                for (var i = 0; i < data.length; i++) {
                    locations[i] = {
                        lat: parseFloat(data[i].latitude),
                        lng: parseFloat(data[i].longitude)
                    };
                    marker1[i] = new google.maps.Marker({
                        position: locations[i],
                        map
                    });
                    markers.push(marker1[i]);
                }
                for (i = 0; i < data.length; i++) {
                    title[i] = data[i].title;
                    img[i] = data[i].mainphoto;
                    google.maps.event.addListener(markers[i], "click", function(markers, i) {
                        return function() {
                            infowindow.setContent("<div style='float:left'><a href='/project.html#" + data[i].id + "'><img src='" + img[i] + "' width='200px' height='200px'></a></div><div style='float:right; padding: 10px;'><b>" + title[i] + "</b><br/>" + data[i].starting_price + "<br/>" + data[i].area + "</div>");
                            infowindow.open(map, markers[i]);
                        };
                    }(markers, i));
                }
                const clusterOptions = {
                    zoomOnClick: true
                };
                new MarkerClusterer({
                    markers,
                    map,
                    clusterOptions
                });
            }
        }
        async function pageDevelopers() {
            document.body;
            if ("/developers.html" === location.pathname) {
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("developers.html");
                }), 5e3);
                const data = await getResource("/an_object/");
                const developers = await getResource("/an_object/");
                const area = await getResource("/an_object/");
                const type = await getResource("/an_object/");
                var projectData = [];
                var projectData2 = [];
                var start = 0;
                var start2 = 0;
                var end = 10;
                var end2 = 10;
                let pageSize = 10;
                let pageSize2 = 10;
                let currentPage = 1;
                let currentPage2 = 1;
                async function getResourceHere() {
                    const _apiBase = "https://kvartirivdubai.ru/api/developer/";
                    const res = await fetch(`${_apiBase}`);
                    const body = await res.json();
                    projectData = body;
                    start = (currentPage - 1) * pageSize;
                    end = currentPage * pageSize;
                }
                async function renderProjects(page = 1, first, last) {
                    await getResourceHere();
                    if (page == numPages()) nextButton.style.visibility = "hidden"; else nextButton.style.visibility = "visible";
                    projectData.filter(((row, index) => {
                        start = first;
                        end = last;
                        if (index >= start && index < end) return true;
                    })).forEach((char => {
                        const overviewsWrapper = document.querySelector(".developers__content");
                        const div = document.createElement("a");
                        div.className = "developers__card lead-card";
                        div.innerHTML = `\n                    <div class="lead-card__body">\n                        <div class="lead-card__image-ibg"><img src="${char.mainphoto}" alt=""></div>\n                        <div class="lead-card__company-logo">\n                            <img src="${char.logo}" alt="">\n                        </div>\n                        <div class="lead-card__content">\n                            <div class="lead-card__title title">${char.name}</div>\n                            <p class="lead-card__text">${char.title_ru_ru}</p>\n                        </div>\n                    </div>`;
                        overviewsWrapper.appendChild(div);
                    }));
                }
                renderProjects(1, start, end);
                function numPages() {
                    return Math.ceil(projectData.length / pageSize);
                }
                function nextPage() {
                    start += 10;
                    end += 10;
                    renderProjects(currentPage, start, end);
                }
                document.querySelector("#nextButton").addEventListener("click", nextPage, false);
                async function getResourceHere2() {
                    const _apiBase2 = "https://kvartirivdubai.ru/api/an_object/";
                    const res2 = await fetch(`${_apiBase2}`);
                    const body2 = await res2.json();
                    projectData2 = body2;
                    start2 = (currentPage2 - 1) * pageSize2;
                    end2 = currentPage2 * pageSize2;
                }
                async function renderProjects2(page = 1, first, last) {
                    await getResourceHere2();
                    if (page == numPages2()) nextButton.style.visibility = "hidden"; else nextButton.style.visibility = "visible";
                    projectData2.filter(((row, index) => {
                        start2 = first;
                        end2 = last;
                        if (index >= start2 && index < end2) return true;
                    })).forEach((char => {
                        const propertyContent2 = document.querySelector(".best-properties__content");
                        const propertyItem2 = document.createElement("div");
                        propertyItem2.className = "best-properties__item-propertie item-propertie";
                        propertyItem2.setAttribute("data-index", char.id);
                        propertyItem2.setAttribute("data-tabs-title", "");
                        const videoLink = functions_extractVideoID(char.video_link);
                        propertyItem2.innerHTML = `\n                    <div class="best-properties__item-propertie item-propertie">\n                        <div class="item-propertie__body">\n                            <a href="project.html#${char.id}" class="item-propertie__image-ibg">\n                                <img src="${char.mainphoto}" alt="">\n                                <div class="item-propertie__types">\n                                    <span>${char.properties}</span>\n                                </div>\n                                <div class="item-propertie__stickers">\n                                    \n                                </div>\n                            </a>\n                            <div class="item-propertie__content">\n                                <a href="project.html#${char.id}" class="item-propertie__title">${char.title}</a>\n                                <div class="item-propertie__location">\n                                <a href = "search.html?types=Type&developer=&area=${char.area}&lifestyle=&min=&max=&search=">${char.area}</a>\n                                </div>\n                                <div class="item-propertie__developer">\n                                    <img src="img/icons/building.svg" alt="Building icon">\n                                    <a href = "search.html?types=Type&developer=${char.developer}&area=&lifestyle=&min=&max=&search=">${char.developer}</a>\n                                </div>\n                                <button type="button" data-popup="#video" data-popup-youtube="${videoLink}" class="item-propertie__video-play _icon-play">\n                                    Посмотреть видео\n                                </button>\n                                <div class="item-propertie__price">\n                                    \n                                    <span class="item-propertie__value">${char.starting_price}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>`;
                        propertyContent2.appendChild(propertyItem2);
                    }));
                }
                renderProjects2(1, start, end);
                function numPages2() {
                    return Math.ceil(projectData2.length / pageSize2);
                }
                function nextPage2() {
                    start2 += 10;
                    end2 += 10;
                    renderProjects2(currentPage2, start2, end2);
                }
                document.querySelector("#nextButton2").addEventListener("click", nextPage2, false);
                let developerArray = [];
                var developerTitle;
                let developerObject = {};
                for (let i in developers) {
                    developerTitle = developers[i]["developer"];
                    developerObject[developerTitle] = developers[i];
                }
                for (let x in developerObject) developerArray.push(developerObject[x]);
                developerArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-developer");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.developer}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let areaArray = [];
                var areaTitle;
                let areaObject = {};
                for (let i in area) {
                    areaTitle = area[i]["area"];
                    areaObject[areaTitle] = area[i];
                }
                for (let x in areaObject) areaArray.push(areaObject[x]);
                areaArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-area");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.area}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let typeArray = [];
                var typeTitle;
                let typeObject = {};
                for (let i in type) {
                    typeTitle = type[i]["type"];
                    typeObject[typeTitle] = type[i];
                }
                for (let x in typeObject) typeArray.push(typeObject[x]);
                typeArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-type");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.type}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                const trustedWrapper = document.querySelector(".trusted-slider__wrapper");
                data.forEach(((char, index) => {
                    const div = document.createElement("div");
                    div.className = "trusted-slider__slide swiper-slide";
                    div.innerHTML = `\n                <a href="/project.html#${char.id}" class="trusted-slider__item">\n                    <div class="trusted-slider__image-ibg"><img src="${char.photo}" alt=""></div>\n                    <div class="trusted-slider__content">\n                        <div class="trusted-slider__text-content">\n                            <h3 class="trusted-slider__title">\n                                ${char.title}\n                            </h3>\n                        </div>\n                        <div class="trusted-slider__icon">\n                            <img src="img/icons/right-arrow.svg" alt="">\n                        </div>\n                    </div>\n                </a>`;
                    trustedWrapper.appendChild(div);
                }));
            }
        }
        async function pageAreas() {
            document.body;
            if ("/areas.html" === location.pathname) {
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("areas.html");
                }), 5e3);
                const data = await getResource("/an_object/");
                const developers = await getResource("/an_object/");
                const area = await getResource("/an_object/");
                const type = await getResource("/an_object/");
                var projectData = [];
                var projectData2 = [];
                var start = 0;
                var start2 = 0;
                var end = 10;
                var end2 = 10;
                let pageSize = 10;
                let pageSize2 = 10;
                let currentPage = 1;
                let currentPage2 = 1;
                const overviewsWrapper = document.querySelector(".areas-city__content");
                async function getResourceHere() {
                    const _apiBase = "https://kvartirivdubai.ru/api/area/";
                    const res = await fetch(`${_apiBase}`);
                    const body = await res.json();
                    projectData = body;
                    start = (currentPage - 1) * pageSize;
                    end = currentPage * pageSize;
                }
                async function renderProjects(page = 1, first, last) {
                    await getResourceHere();
                    if (page == numPages()) nextButton.style.visibility = "hidden"; else nextButton.style.visibility = "visible";
                    projectData.filter(((row, index) => {
                        start = first;
                        end = last;
                        if (index >= start && index < end) return true;
                    })).forEach((char => {
                        const div = document.createElement("a");
                        div.className = "areas-city__city-area city-area";
                        div.innerHTML = `\n                    <div class="city-area__body">\n                        <a href = "search.html?types=Type&developer=&area=${char.name}&lifestyle=&min=&max=&search=" class="city-area__image-ibg"><img src="${char.mainphoto}" alt=""></a>\n                        <div class="city-area__content">\n                            <h3 class="city-area__title">\n                                ${char.name_ru_ru}\n                            </h3>\n                        </div>\n                    </div>`;
                        overviewsWrapper.appendChild(div);
                    }));
                }
                renderProjects(1, start, end);
                function numPages() {
                    return Math.ceil(projectData.length / pageSize);
                }
                function nextPage() {
                    start += 10;
                    end += 10;
                    renderProjects(currentPage, start, end);
                }
                document.querySelector("#nextButton").addEventListener("click", nextPage, false);
                async function getResourceHere2() {
                    const _apiBase2 = "https://kvartirivdubai.ru/api/an_object/";
                    const res2 = await fetch(`${_apiBase2}`);
                    const body2 = await res2.json();
                    projectData2 = body2;
                    start2 = (currentPage2 - 1) * pageSize2;
                    end2 = currentPage2 * pageSize2;
                }
                async function renderProjects2(page = 1, first, last) {
                    await getResourceHere2();
                    if (page == numPages2()) nextButton.style.visibility = "hidden"; else nextButton.style.visibility = "visible";
                    projectData2.filter(((row, index) => {
                        start2 = first;
                        end2 = last;
                        if (index >= start2 && index < end2) return true;
                    })).forEach((char => {
                        const propertyContent2 = document.querySelector(".best-properties__content");
                        const propertyItem2 = document.createElement("div");
                        propertyItem2.className = "best-properties__item-propertie item-propertie";
                        propertyItem2.setAttribute("data-index", char.id);
                        propertyItem2.setAttribute("data-tabs-title", "");
                        const videoLink = functions_extractVideoID(char.video_link);
                        propertyItem2.innerHTML = `\n                    <div class="best-properties__item-propertie item-propertie">\n                        <div class="item-propertie__body">\n                            <a href="project.html#${char.id}" class="item-propertie__image-ibg">\n                                <img src="${char.mainphoto}" alt="">\n                                <div class="item-propertie__types">\n                                    <span>${char.properties}</span>\n                                </div>\n                                <div class="item-propertie__stickers">\n                                    \n                                </div>\n                            </a>\n                            <div class="item-propertie__content">\n                                <a href="project.html#${char.id}" class="item-propertie__title">${char.title}</a>\n                                <div class="item-propertie__location">\n                                    <a href = "search.html?types=Type&developer=&area=${char.area}&lifestyle=&min=&max=&search=">${char.area}</a>\n                                </div>\n                                <div class="item-propertie__developer">\n                                    <img src="img/icons/building.svg" alt="Building icon">\n                                    <a href = "search.html?types=Type&developer=${char.developer}&area=&lifestyle=&min=&max=&search=">${char.developer}</a>\n                                </div>\n                                <button type="button" data-popup="#video" data-popup-youtube="${videoLink}" class="item-propertie__video-play _icon-play">\n                                    Воспроизвести видео обзор\n                                </button>\n                                <div class="item-propertie__price">\n                                    \n                                    <span class="item-propertie__value">${char.starting_price}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>`;
                        propertyContent2.appendChild(propertyItem2);
                    }));
                }
                renderProjects2(1, start, end);
                function numPages2() {
                    return Math.ceil(projectData2.length / pageSize2);
                }
                function nextPage2() {
                    start2 += 10;
                    end2 += 10;
                    renderProjects2(currentPage2, start2, end2);
                }
                document.querySelector("#nextButton2").addEventListener("click", nextPage2, false);
                let developerArray = [];
                var developerTitle;
                let developerObject = {};
                for (let i in developers) {
                    developerTitle = developers[i]["developer"];
                    developerObject[developerTitle] = developers[i];
                }
                for (let x in developerObject) developerArray.push(developerObject[x]);
                developerArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-developer");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.developer}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let areaArray = [];
                var areaTitle;
                let areaObject = {};
                for (let i in area) {
                    areaTitle = area[i]["area"];
                    areaObject[areaTitle] = area[i];
                }
                for (let x in areaObject) areaArray.push(areaObject[x]);
                areaArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-area");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.area}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let typeArray = [];
                var typeTitle;
                let typeObject = {};
                for (let i in type) {
                    typeTitle = type[i]["type"];
                    typeObject[typeTitle] = type[i];
                }
                for (let x in typeObject) typeArray.push(typeObject[x]);
                typeArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-type");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.type}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                const trustedWrapper = document.querySelector(".trusted-slider__wrapper");
                data.forEach(((char, index) => {
                    const div = document.createElement("div");
                    div.className = "trusted-slider__slide swiper-slide";
                    div.innerHTML = `\n                <a href="/project.html#${char.id}" class="trusted-slider__item">\n                    <div class="trusted-slider__image-ibg"><img src="${char.photo}" alt=""></div>\n                    <div class="trusted-slider__content">\n                        <div class="trusted-slider__text-content">\n                            <h3 class="trusted-slider__title">\n                                ${char.title}\n                            </h3>\n                        </div>\n                        <div class="trusted-slider__icon">\n                            <img src="img/icons/right-arrow.svg" alt="">\n                        </div>\n                    </div>\n                </a>`;
                    trustedWrapper.appendChild(div);
                }));
            }
        }
        async function pageFaq() {
            document.body;
            if ("/faq.html" === location.pathname) {
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("faq.html");
                }), 5e3);
                const developers = await getResource("/an_object/");
                const area = await getResource("/an_object/");
                const type = await getResource("/an_object/");
                var projectData2 = [];
                var start = 0;
                var start2 = 0;
                var end = 10;
                var end2 = 10;
                let pageSize2 = 10;
                let currentPage2 = 1;
                async function getResourceHere2() {
                    const _apiBase2 = "https://kvartirivdubai.ru/api/an_object/";
                    const res2 = await fetch(`${_apiBase2}`);
                    const body2 = await res2.json();
                    projectData2 = body2;
                    start2 = (currentPage2 - 1) * pageSize2;
                    end2 = currentPage2 * pageSize2;
                }
                async function renderProjects2(page = 1, first, last) {
                    await getResourceHere2();
                    if (page == numPages2()) nextButton2.style.visibility = "hidden"; else nextButton2.style.visibility = "visible";
                    projectData2.filter(((row, index) => {
                        start2 = first;
                        end2 = last;
                        if (index >= start2 && index < end2) return true;
                    })).forEach((char => {
                        const propertyContent2 = document.querySelector(".best-properties__content");
                        const propertyItem2 = document.createElement("div");
                        propertyItem2.className = "best-properties__item-propertie item-propertie";
                        propertyItem2.setAttribute("data-index", char.id);
                        propertyItem2.setAttribute("data-tabs-title", "");
                        const videoLink = extractVideoID(char.video_link);
                        propertyItem2.innerHTML = `\n                                           <div class="best-properties__item-propertie item-propertie">\n                                <div class="item-propertie__body">\n                                    <a href="project.html#${char.id}" class="item-propertie__image-ibg">\n                                        <img src="${char.mainphoto}" alt="">\n                                        <div class="item-propertie__types">\n                                            <span>${char.properties}</span>\n                                        </div>\n                                        <div class="item-propertie__stickers">\n                                            \n                                        </div>\n                                    </a>\n                                    <div class="item-propertie__content">\n                                        <a href="project.html#${char.id}" class="item-propertie__title">${char.title}</a>\n                                        <div class="item-propertie__location">\n                                           <a href = "search.html?types=Type&developer=&area=${char.area}&lifestyle=&min=&max=">${char.area}</a>\n                                        </div>\n                                        <div class="item-propertie__developer">\n                                            <img src="img/icons/building.svg" alt="Building icon">\n                                            <a href = "search.html?types=Type&developer=${char.developer}&area=&lifestyle=&min=&max=">${char.developer}</a>\n                                        </div>\n\t\t\t\t\t\t\t\t        <button type="button" data-popup="#video" data-popup-youtube="${videoLink}" class="item-propertie__video-play _icon-play">\n                                            Посмотреть видео\n                                        </button>\n                                        <div class="item-propertie__price">\n                                            \n                                            <span class="item-propertie__value">${char.starting_price}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>`;
                        propertyContent2.appendChild(propertyItem2);
                    }));
                }
                renderProjects2(1, start, end);
                function numPages2() {
                    return Math.ceil(projectData2.length / pageSize2);
                }
                function nextPage2() {
                    start2 += 10;
                    end2 += 10;
                    renderProjects2(currentPage2, start2, end2);
                }
                document.querySelector("#nextButton2").addEventListener("click", nextPage2, false);
                let developerArray = [];
                var developerTitle;
                let developerObject = {};
                for (let i in developers) {
                    developerTitle = developers[i]["developer"];
                    developerObject[developerTitle] = developers[i];
                }
                for (let x in developerObject) developerArray.push(developerObject[x]);
                developerArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-developer");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.developer}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let areaArray = [];
                var areaTitle;
                let areaObject = {};
                for (let i in area) {
                    areaTitle = area[i]["area"];
                    areaObject[areaTitle] = area[i];
                }
                for (let x in areaObject) areaArray.push(areaObject[x]);
                areaArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-area");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.area}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let typeArray = [];
                var typeTitle;
                let typeObject = {};
                for (let i in type) {
                    typeTitle = type[i]["type"];
                    typeObject[typeTitle] = type[i];
                }
                for (let x in typeObject) typeArray.push(typeObject[x]);
                typeArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-type");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.type}</option>`;
                    selectContent.appendChild(selectItem);
                }));
            }
        }
        async function pageSubBlog() {
            document.body;
            if ("/sub-blog.html" === location.pathname) {
                setTimeout((function() {
                    $("body").addClass("loaded");
                    console.log("sub-blog.html");
                }), 5e3);
                const dataCurrentObject = await getResource(`/blog/${getHash()}`);
                await getResource("/developer/");
                await getResource("/an_object/");
                const developers = await getResource("/an_object/");
                const area = await getResource("/an_object/");
                const type = await getResource("/an_object/");
                document.title = dataCurrentObject.title;
                document.querySelector("meta[name='description']").setAttribute("content", dataCurrentObject.description);
                var projectData2 = [];
                var start = 0;
                var start2 = 0;
                var end = 9;
                var end2 = 9;
                let pageSize2 = 9;
                let currentPage2 = 1;
                document.querySelector(".areas-city__content");
                async function getResourceHere2() {
                    const _apiBase2 = "https://kvartirivdubai.ru/api/an_object/";
                    const res2 = await fetch(`${_apiBase2}`);
                    const body2 = await res2.json();
                    projectData2 = body2;
                    start2 = (currentPage2 - 1) * pageSize2;
                    end2 = currentPage2 * pageSize2;
                }
                async function renderProjects2(page = 1, first, last) {
                    await getResourceHere2();
                    if (page == numPages2()) nextButton2.style.visibility = "hidden"; else nextButton2.style.visibility = "visible";
                    projectData2.filter(((row, index) => {
                        start2 = first;
                        end2 = last;
                        if (index >= start2 && index < end2) return true;
                    })).forEach((char => {
                        const propertyContent2 = document.querySelector(".best-properties__content");
                        const propertyItem2 = document.createElement("div");
                        propertyItem2.className = "best-properties__item-propertie item-propertie";
                        propertyItem2.setAttribute("data-index", char.id);
                        propertyItem2.setAttribute("data-tabs-title", "");
                        const videoLink = functions_extractVideoID(char.video_link);
                        propertyItem2.innerHTML = `\n                                           <div class="best-properties__item-propertie item-propertie">\n                                <div class="item-propertie__body">\n                                    <a href="project.html#${char.id}" class="item-propertie__image-ibg">\n                                        <img src="${char.mainphoto}" alt="">\n                                        <div class="item-propertie__types">\n                                            <span>${char.properties}</span>\n                                        </div>\n                                        <div class="item-propertie__stickers">\n                                            \n                                        </div>\n                                    </a>\n                                    <div class="item-propertie__content">\n                                        <a href="project.html#${char.id}" class="item-propertie__title">${char.title}</a>\n                                        <div class="item-propertie__location">\n                                           <a href = "search.html?types=Type&developer=&area=${char.area}&lifestyle=&min=&max=&search=">${char.area}</a>\n                                        </div>\n                                        <div class="item-propertie__developer">\n                                            <img src="img/icons/building.svg" alt="Building icon">\n                                            <a href = "search.html?types=Type&developer=${char.developer}&area=&lifestyle=&min=&max=&search=">${char.developer}</a>\n                                        </div>\n\t\t\t\t\t\t\t\t        <button type="button" data-popup="#video" data-popup-youtube="${videoLink}" class="item-propertie__video-play _icon-play">\n                                            Посмотреть видео\n                                        </button>\n                                        <div class="item-propertie__price">\n                                            \n                                            <span class="item-propertie__value">${char.starting_price}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>`;
                        propertyContent2.appendChild(propertyItem2);
                    }));
                }
                renderProjects2(1, start, end);
                function numPages2() {
                    return Math.ceil(projectData2.length / pageSize2);
                }
                function nextPage2() {
                    start2 += 10;
                    end2 += 10;
                    renderProjects2(currentPage2, start2, end2);
                }
                document.querySelector("#nextButton2").addEventListener("click", nextPage2, false);
                let developerArray = [];
                var developerTitle;
                let developerObject = {};
                for (let i in developers) {
                    developerTitle = developers[i]["developer"];
                    developerObject[developerTitle] = developers[i];
                }
                for (let x in developerObject) developerArray.push(developerObject[x]);
                developerArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-developer");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.developer}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let areaArray = [];
                var areaTitle;
                let areaObject = {};
                for (let i in area) {
                    areaTitle = area[i]["area"];
                    areaObject[areaTitle] = area[i];
                }
                for (let x in areaObject) areaArray.push(areaObject[x]);
                areaArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-area");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.area}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                let typeArray = [];
                var typeTitle;
                let typeObject = {};
                for (let i in type) {
                    typeTitle = type[i]["type"];
                    typeObject[typeTitle] = type[i];
                }
                for (let x in typeObject) typeArray.push(typeObject[x]);
                typeArray.forEach(((char2, index) => {
                    const selectContent = document.querySelector(".form-find__select-type");
                    const selectItem = document.createElement("option");
                    selectItem.className = "";
                    selectItem.innerHTML = `<option selected="">${char2.type}</option>`;
                    selectContent.appendChild(selectItem);
                }));
                const mainTitle = document.querySelector(".main-blog-sub__title");
                mainTitle.textContent = dataCurrentObject.title;
                const mainImage = document.querySelector(".main-blog-sub__image");
                mainImage.src = dataCurrentObject.mainphoto;
                const mainDate = document.querySelector(".main-blog-sub__date-text");
                const mainDateMonth = document.querySelector(".main-blog-sub__date-month");
                const mainDateWeek = document.querySelector(".main-blog-sub__date sup");
                const splitDate = dataCurrentObject.created.split("-");
                const getWeek = new Date(splitDate).toLocaleDateString("ru", {
                    weekday: "short"
                });
                mainDateWeek.textContent = getWeek;
                mainDateMonth.textContent = splitDate[0];
                mainDate.textContent = splitDate[2];
                const buttonVideo = document.querySelector(".main-blog-sub__button-quiz");
                const videoId = functions_extractVideoID(dataCurrentObject.link);
                buttonVideo.dataset.popupYoutube = videoId;
                const galleryInterier = document.querySelector(".gallery-interier__wrapper");
                const galleryInterierThumbs = document.querySelector(".thumbs-interier__wrapper");
                dataCurrentObject.blog_gallery.forEach((item => {
                    const div = document.createElement("div");
                    const divThumb = document.createElement("div");
                    div.className = "gallery-interier__slide swiper-slide";
                    divThumb.className = "thumbs-interier__slide swiper-slide";
                    divThumb.innerHTML = `\n                <div data-exterior="${item.blog_gallery}" class="thumbs-interier__image-ibg"><img src="${item.image}" alt=""></div>\n             `;
                    div.innerHTML = `\n                <div data-exterior="${item.blog_gallery}" class="gallery-interier__image-ibg"><img src="${item.image}" alt=""></div>\n            `;
                    galleryInterier.appendChild(div);
                    galleryInterierThumbs.appendChild(divThumb);
                }));
                const contentText = document.querySelector(".content-text__text");
                contentText.innerHTML = dataCurrentObject.description;
            }
        }
        window["FLS"] = true;
        isWebp();
        menuInit();
        fullVHfix();
        spollers();
        tabs();
        formFieldsInit({
            viewPass: false
        });
        formSubmit();
        pageMore();
        pageHome();
        pageSearch();
        pageBlog();
        pageMap();
        pageDevelopers();
        pageAreas();
        pageFaq();
        pageSubBlog();
    })();
})();