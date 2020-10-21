(this.webpackJsonpi = this.webpackJsonpi || []).push([
  [2],
  [
    ,
    ,
    ,
    ,
    function(t, n, e) {
      'use strict';
      e.d(n, 'e', function() {
        return r;
      }),
        e.d(n, 'h', function() {
          return a;
        }),
        e.d(n, 'b', function() {
          return o;
        }),
        e.d(n, 'd', function() {
          return i;
        }),
        e.d(n, 'g', function() {
          return c;
        }),
        e.d(n, 'a', function() {
          return u;
        }),
        e.d(n, 'f', function() {
          return l;
        }),
        e.d(n, 'i', function() {
          return s;
        }),
        e.d(n, 'c', function() {
          return d;
        }),
        e.d(n, 'l', function() {
          return f;
        }),
        e.d(n, 'k', function() {
          return m;
        }),
        e.d(n, 'j', function() {
          return p;
        });
      var r = 'START_FETCH_FORM',
        a = 'SUCCESS_FETCH_FORM',
        o = 'FAILURE_FETCH_QTY_FORM',
        i = 'START_FETCH_CARDS_LIST',
        c = 'SUCCESS_FETCH_CARDS_LIST',
        u = 'FAILURE_FETCH_CARDS_LIST',
        l = 'START_FETCH_TOTAL_MONTHS',
        s = 'SUCCESS_FETCH_TOTAL_MONTHS',
        d = 'FAILURE_FETCH_TOTAL_MONTHS',
        f = 'SUCCESS_SET_QTY',
        m = 'SUCCESS_SET_IS_MOBILE',
        p = 'SUCCESS_SET_IS_DETAILS_STAGE';
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return a;
      }),
        e.d(n, 'b', function() {
          return o;
        });
      var r = { HOME: '/', PAYMENT: '/payment' },
        a =
          (Object.keys(r).reduce(function(t, n) {
            return (t[n] = n), t;
          }, {}),
          r.HOME),
        o = r.PAYMENT;
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/trophies-mobile.8e62dba6.svg';
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      }),
        e.d(n, 'b', function() {
          return i;
        }),
        e.d(n, 'e', function() {
          return c;
        }),
        e.d(n, 'd', function() {
          return u;
        }),
        e.d(n, 'c', function() {
          return l;
        });
      var r = e(4),
        a = e(38),
        o = function(t) {
          return function(n) {
            return (
              n({ type: r.d }),
              Object(a.a)(t)
                .then(function(t) {
                  return n({ type: r.g, payload: t.body });
                })
                .catch(function(t) {
                  return n({
                    type: r.a,
                    payload: t,
                    notification: { type: 'error', text: 'Fetch form has failure' },
                  });
                })
            );
          };
        },
        i = function(t) {
          return function(n) {
            return (
              n({ type: r.f }),
              Object(a.b)(t)
                .then(function(t) {
                  return n({ type: r.i, payload: t.body });
                })
                .catch(function(t) {
                  return n({
                    type: r.c,
                    payload: t,
                    notification: { type: 'error', text: 'Fetch form has failure' },
                  });
                })
            );
          };
        },
        c = function(t) {
          var n = t.qty;
          return function(t) {
            t({ type: r.l, payload: n });
          };
        },
        u = function(t) {
          return function(n) {
            n({ type: r.k, payload: t });
          };
        },
        l = function(t) {
          return function(n) {
            n({ type: r.j, payload: t });
          };
        };
    },
    ,
    ,
    function(t, n, e) {
      t.exports = e.p + 'static/media/trophies-desktop.9d46077b.svg';
    },
    ,
    function(t, n, e) {
      'use strict';
      e.d(n, 'j', function() {
        return r;
      }),
        e.d(n, 'i', function() {
          return a;
        }),
        e.d(n, 'K', function() {
          return o;
        }),
        e.d(n, 'L', function() {
          return i;
        }),
        e.d(n, 'N', function() {
          return c;
        }),
        e.d(n, 'M', function() {
          return u;
        }),
        e.d(n, 'J', function() {
          return l;
        }),
        e.d(n, 'I', function() {
          return s;
        }),
        e.d(n, 's', function() {
          return d;
        }),
        e.d(n, 'u', function() {
          return f;
        }),
        e.d(n, 't', function() {
          return m;
        }),
        e.d(n, 'a', function() {
          return p;
        }),
        e.d(n, 'd', function() {
          return b;
        }),
        e.d(n, 'e', function() {
          return g;
        }),
        e.d(n, 'b', function() {
          return h;
        }),
        e.d(n, 'c', function() {
          return y;
        }),
        e.d(n, 'v', function() {
          return v;
        }),
        e.d(n, 'F', function() {
          return E;
        }),
        e.d(n, 'G', function() {
          return O;
        }),
        e.d(n, 'A', function() {
          return w;
        }),
        e.d(n, 'y', function() {
          return j;
        }),
        e.d(n, 'x', function() {
          return k;
        }),
        e.d(n, 'z', function() {
          return S;
        }),
        e.d(n, 'w', function() {
          return x;
        }),
        e.d(n, 'D', function() {
          return _;
        }),
        e.d(n, 'B', function() {
          return T;
        }),
        e.d(n, 'E', function() {
          return C;
        }),
        e.d(n, 'C', function() {
          return M;
        }),
        e.d(n, 'p', function() {
          return A;
        }),
        e.d(n, 'k', function() {
          return I;
        }),
        e.d(n, 'l', function() {
          return F;
        }),
        e.d(n, 'm', function() {
          return L;
        }),
        e.d(n, 'n', function() {
          return z;
        }),
        e.d(n, 'o', function() {
          return R;
        }),
        e.d(n, 'q', function() {
          return U;
        }),
        e.d(n, 'r', function() {
          return D;
        }),
        e.d(n, 'f', function() {
          return H;
        }),
        e.d(n, 'g', function() {
          return P;
        }),
        e.d(n, 'H', function() {
          return q;
        }),
        e.d(n, 'h', function() {
          return N;
        });
      var r = 'Galatasaray\nSUBSCRIPTION on the\nshelf',
        a = 'Months donated',
        o = '4.49 US$ = 1 monthly subscription',
        i = 'donate a subscription a fellow galatasaray fan',
        c = 'Your details',
        u = 'Please keep my donation anonymous',
        l = 'all done!',
        s = 'Your gift is received by galatasaray!\nThank you for being a fan!',
        d = "Need more? Let's talk!",
        f = 'Let us know your phone\nnumber or email and we will\ncontact you',
        m = 'Payment',
        p = 'Donate again',
        b = 'Next',
        g = 'Send',
        h = 'Back',
        y = 'Complete donation',
        v = 'Address',
        E = 'Other amount',
        O = 'Your phone number',
        w = 'Your email',
        j = 'MonthItem number',
        k = 'MM',
        S = 'YY',
        x = 'CVV',
        _ = 'Display name (optional)',
        T = 'First name',
        C = 'National ID',
        M = 'Last name',
        A = 'I\u2019m a Turkish resident',
        I = 'Ayd\u0131nlatma Metni\u2019ni',
        F = 'okudum, anlad\u0131m.',
        L = 'Sat\u0131\u015f S\xf6zle\u015fmesi\u2019ni',
        z = 'okudum, kabul ediyorum.',
        R =
          "Galatasaray'\u0131n kampanyalar\u0131ndan ve Galatasaray ile ilgili yeniliklerden email vas\u0131tas\u0131yla haberdar olmak istiyorum.\n",
        U = 'Month',
        D = 'Months',
        H = 'Card',
        P = 'Card info',
        q = 'Premium member',
        N = 'Contact me';
    },
    ,
    ,
    function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      }),
        e.d(n, 'b', function() {
          return i;
        }),
        e.d(n, 'e', function() {
          return c;
        }),
        e.d(n, 'd', function() {
          return u;
        }),
        e.d(n, 'c', function() {
          return l;
        });
      e(81);
      var r = [
          {
            title: 'Most donated',
            list: Array(50).fill({
              title: '0from Ultraslan community',
              date: ' 2 September 2020',
              qty: 230,
            }),
          },
          {
            title: 'Most recent',
            list: Array(10).fill({
              title: '0from Ultraslan community',
              date: ' 2 September 2020',
              qty: 320,
            }),
          },
        ],
        a = function(t, n) {
          return (
            console.log('Sent:', t, n),
            n ? Promise.reject({ status: 400 }) : Promise.resolve({ status: 200, body: t })
          );
        },
        o = function() {
          return a(r);
        },
        i = function() {
          return a(127680);
        },
        c = function(t) {
          return a(t);
        },
        u = function(t) {
          return a(t);
        },
        l = function(t) {
          return a(t);
        };
    },
    ,
    ,
    ,
    ,
    ,
    function(t, n, e) {
      'use strict';
      e.d(n, 'd', function() {
        return r;
      }),
        e.d(n, 'a', function() {
          return a;
        }),
        e.d(n, 'b', function() {
          return o;
        }),
        e.d(n, 'c', function() {
          return i;
        });
      var r = '#ffffff',
        a = '#161617',
        o = '#333333',
        i = '#A90533';
    },
    function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return u;
      }),
        e.d(n, 'b', function() {
          return l;
        });
      var r = e(10),
        a = e(6),
        o = { phone: 768, tablet: 1024, desktop: 1200 };
      function i() {
        var t = Object(r.a)(['\n      @media (min-width: ', 'px) {\n        ', ';\n      }\n    ']);
        return (
          (i = function() {
            return t;
          }),
          t
        );
      }
      function c() {
        var t = Object(r.a)(['\n      @media (max-width: ', 'px) {\n        ', ';\n      }\n    ']);
        return (
          (c = function() {
            return t;
          }),
          t
        );
      }
      var u = Object.keys(o).reduce(function(t, n) {
          return (
            (t[n] = function() {
              return Object(a.a)(c(), o[n] - 1, a.a.apply(void 0, arguments));
            }),
            t
          );
        }, {}),
        l = Object.keys(o).reduce(function(t, n) {
          return (
            (t[n] = function() {
              return Object(a.a)(i(), o[n], a.a.apply(void 0, arguments));
            }),
            t
          );
        }, {});
    },
    function(t, n, e) {
      'use strict';
      e.d(n, 'a', function() {
        return o;
      });
      var r = e(0),
        a = e.n(r),
        o = function(t) {
          return t.split('\n').map(function(t, n, e) {
            return a.a.createElement(
              a.a.Fragment,
              { key: ''.concat(t, '-').concat(n) },
              t,
              n === e.length - 1
                ? a.a.createElement(a.a.Fragment, null)
                : a.a.createElement('br', null),
            );
          });
        };
    },
    ,
    ,
    ,
    function(t, n, e) {
      'use strict';
      var r = e(0),
        a = e(22),
        o = Object(r.lazy)(function() {
          return Promise.all([e.e(0), e.e(1), e.e(5)]).then(e.bind(null, 88));
        }),
        i = Object(r.lazy)(function() {
          return Promise.all([e.e(0), e.e(1)]).then(e.bind(null, 87));
        }),
        c = [
          { path: a.a, component: o, exact: !0 },
          { path: a.b, component: i, exact: !0 },
        ],
        u = [].concat(c);
      n.a = u;
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/logo.aca6e2e4.svg';
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-cards-1.3e9dd3cb.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-cards-5.09005d88.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-cards-10.f17127e6.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-cards-100.cffa9416.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-stage-1a.23f7fe6c.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-stage-1b.c5f68b1e.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-stage-1c.d24cebe9.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-stage-2.b0414c16.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-stage-3.ddd94dbf.png';
    },
    function(t, n, e) {
      t.exports = e.p + 'static/media/bg-stage-4.0410fb0b.png';
    },
    ,
    ,
    ,
    ,
    function(t, n, e) {
      t.exports = e(86);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, n, e) {},
    function(t, n, e) {},
    function(t, n, e) {
      'use strict';
      e.r(n);
      var r = e(0),
        a = e.n(r),
        o = e(17),
        i = e.n(o),
        c = e(29),
        u = e(3),
        l = e(50),
        s = e(18),
        d = e(14),
        f = e(12),
        m = e(2),
        p = e(4),
        b = { isLoading: !1, error: '', qty: {}, payment: {}, contact: {} };
      var g = { totalMonths: '', cards: [], qty: 0, isMobile: null, isDetailsStage: !1 };
      var h = {};
      var y = Object(d.c)({
          form: function() {
            var t,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
              case p.e:
                return Object(m.a)(Object(m.a)({}, n), {}, { isLoading: !0 });
              case p.b:
                return Object(m.a)(Object(m.a)({}, n), {}, { isLoading: !1 });
              case p.h:
                return Object(m.a)(
                  Object(m.a)({}, n),
                  {},
                  ((t = {}),
                  Object(f.a)(
                    t,
                    e.payload.formType,
                    Object(m.a)(Object(m.a)({}, n[e.payload.formType]), e.payload),
                  ),
                  Object(f.a)(t, 'isLoading', !1),
                  t),
                );
              default:
                return n;
            }
          },
          basic: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (n.type) {
              case p.g:
                return Object(m.a)(Object(m.a)({}, t), {}, { cards: n.payload });
              case p.i:
                return Object(m.a)(Object(m.a)({}, t), {}, { totalMonths: n.payload });
              case p.l:
                return Object(m.a)(Object(m.a)({}, t), {}, { qty: n.payload });
              case p.k:
                return Object(m.a)(Object(m.a)({}, t), {}, { isMobile: n.payload });
              case p.j:
                return Object(m.a)(Object(m.a)({}, t), {}, { isDetailsStage: n.payload });
              default:
                return t;
            }
          },
          network: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              e = n.type.replace(/SUCCESS_|FAILURE_/g, 'START_'),
              r = n.type.startsWith('START_'),
              a = n.type.startsWith('SUCCESS_') || n.type.startsWith('FAILURE_');
            return r || a ? Object(m.a)(Object(m.a)({}, t), {}, Object(f.a)({}, e, r)) : t;
          },
        }),
        v = e(53),
        E = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || d.d,
        O = Object(d.e)(y, E(Object(d.a)(v.a))),
        w = function(t) {
          var n = t.children;
          return a.a.createElement(s.a, { store: O }, n);
        },
        j = e(28),
        k = e(54),
        S = e(46),
        x = e(51),
        _ = e.n(x),
        T = e(10),
        C = e(6),
        M = e(44),
        A = e(23),
        I = e.n(A);
      function F() {
        var t = Object(T.a)(['\n  font-size: 16px;\n  line-height: 1;\n  margin-bottom: 24px;\n']);
        return (
          (F = function() {
            return t;
          }),
          t
        );
      }
      function L() {
        var t = Object(T.a)([
          "\n  font-size: 60px;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 16px;\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(331.38deg, #e82a00 49.87%, #0f0004 62.54%, #fdb913 67.52%);\n    filter: blur(23px);\n    border-radius: 19px;\n    //transform: rotate(-90deg);\n  }\n",
        ]);
        return (
          (L = function() {
            return t;
          }),
          t
        );
      }
      function z() {
        var t = Object(T.a)([
          '\n  font-size: 30px;\n  line-height: 1.2;\n  font-weight: 700;\n  margin-bottom: 24px;\n',
        ]);
        return (
          (z = function() {
            return t;
          }),
          t
        );
      }
      function R() {
        var t = Object(T.a)(['\n  width: 100px;\n  margin: 40px auto 20px;\n']);
        return (
          (R = function() {
            return t;
          }),
          t
        );
      }
      function U() {
        var t = Object(T.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  text-transform: uppercase;\n  color: ',
          ';\n  overflow-y: visible;\n  padding: 0 8px;\n',
        ]);
        return (
          (U = function() {
            return t;
          }),
          t
        );
      }
      var D = C.b.div(U(), M.d),
        H = C.b.img(R()),
        P = C.b.div(z()),
        q = C.b.div(L()),
        N = C.b.div(F()),
        Y = e(35),
        G = e(22),
        B = e(30),
        W = { getDonatedMonths: B.b },
        J = Object(s.b)(function(t) {
          return { totalMonths: t.basic.totalMonths };
        }, W)(
          Object(u.g)(function(t) {
            var n = t.getDonatedMonths,
              e = t.totalMonths,
              o = t.history;
            return (
              Object(r.useEffect)(
                function() {
                  e || n();
                },
                [e],
              ),
              a.a.createElement(
                D,
                null,
                a.a.createElement(H, {
                  src: _.a,
                  onClick: function() {
                    return o.push(G.a);
                  },
                }),
                a.a.createElement(P, null, Object(S.a)(Y.j)),
                a.a.createElement(q, null, e || '...'),
                a.a.createElement(N, null, Y.i),
              )
            );
          }),
        ),
        V = e(45),
        Q = e(33),
        X = e.n(Q);
      function $() {
        var t = Object(T.a)([
          '\n      background: url(',
          ') center top no-repeat;\n      top: 0;\n    ',
        ]);
        return (
          ($ = function() {
            return t;
          }),
          t
        );
      }
      function K() {
        var t = Object(T.a)([
          "\n  position: relative;\n\n  &:before {\n    content: '';\n    position: absolute;\n    z-index: -2;\n    top: -100px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background: url(",
          ') center top no-repeat;\n\n    ',
          '\n  }\n',
        ]);
        return (
          (K = function() {
            return t;
          }),
          t
        );
      }
      var Z = C.b.div(K(), I.a, V.b.tablet($(), X.a)),
        tt = document.head,
        nt = function(t) {
          var n = t.children;
          return o.createPortal(n, tt);
        },
        et = function(t) {
          var n = t.title,
            e = void 0 === n ? 'Galatasaray' : n,
            r = t.description,
            o = void 0 === r ? 'Galatasaray subscription on the shelf' : r,
            i = t.image,
            c = void 0 === i ? '' : i,
            u = t.url,
            l = void 0 === u ? '' : u;
          return a.a.createElement(
            nt,
            null,
            a.a.createElement('link', {
              href:
                'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap',
              rel: 'stylesheet',
            }),
            a.a.createElement('link', {
              href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
              rel: 'stylesheet',
            }),
            a.a.createElement('meta', {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            }),
            a.a.createElement('meta', { name: 'theme-color', content: '#111111' }),
            a.a.createElement('meta', { property: 'og:title', content: e }),
            a.a.createElement('meta', { property: 'og:url', content: l }),
            a.a.createElement('meta', { property: 'og:image', content: c }),
            a.a.createElement('meta', { property: 'og:description', content: o }),
            a.a.createElement('meta', { property: 'og:type', content: 'article' }),
            a.a.createElement('meta', { name: 'twitter:card', content: c }),
            a.a.createElement('meta', { name: 'twitter:title', content: e }),
            a.a.createElement('meta', { name: 'twitter:description', content: o }),
            a.a.createElement('meta', { name: 'twitter:image', content: c }),
            a.a.createElement('title', null, e),
            a.a.createElement('meta', { name: 'description', content: o }),
          );
        },
        rt = e(58),
        at = e.n(rt),
        ot = e(59),
        it = e.n(ot),
        ct = e(60),
        ut = e.n(ct),
        lt = e(61),
        st = e.n(lt),
        dt = e(62),
        ft = e.n(dt),
        mt = e(63),
        pt = e.n(mt),
        bt = e(64),
        gt = e.n(bt),
        ht = e(65),
        yt = e.n(ht),
        vt = e(66),
        Et = e.n(vt),
        Ot = e(67),
        wt = e.n(Ot),
        jt = [at.a, it.a, ut.a, st.a, ft.a, pt.a, gt.a, yt.a, Et.a, wt.a, I.a, X.a],
        kt = { setIsMobile: B.d },
        St = Object(s.b)(function(t) {
          return { isMobile: t.basic.isMobile };
        }, kt)(function(t) {
          var n = t.setIsMobile,
            e = t.isMobile,
            o = t.component,
            i = Object(j.a)(t, ['setIsMobile', 'isMobile', 'component']),
            c = Object(r.useCallback)(
              function() {
                return n(
                  (function() {
                    var t,
                      n = !1;
                    return (
                      (t = navigator.userAgent || navigator.vendor || window.opera),
                      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                        t,
                      ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                          t.substr(0, 4),
                        )) &&
                        (n = !0),
                      n
                    );
                  })(),
                );
              },
              [n],
            ),
            u = Object(r.useCallback)(
              function() {
                null !== e &&
                  (function(t) {
                    var n = t.isMobile;
                    jt.forEach(function(t) {
                      new window.Image().src = n ? t : t.replace(/mobile/i, 'desktop');
                    });
                  })({ isMobile: e });
              },
              [e],
            );
          return (
            Object(r.useEffect)(u, [e]),
            Object(r.useEffect)(
              function() {
                return (
                  null === e && c(),
                  window.addEventListener('resize', c),
                  function() {
                    return window.removeEventListener('resize', c);
                  }
                );
              },
              [c, e],
            ),
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(et, null),
              a.a.createElement(J, null),
              a.a.createElement(
                Z,
                { flexDirection: 'column', alignItems: 'center' },
                a.a.createElement(o, i),
              ),
            )
          );
        });
      var xt = function(t) {
        var n = t.middleware,
          e = t.component,
          r = Object(j.a)(t, ['middleware', 'component']);
        return a.a.createElement(
          u.b,
          Object.assign({}, r, {
            render: function(t) {
              var o = (function(t, n) {
                var e = Object(m.a)({}, n.location),
                  r = function(t) {
                    e = Object(m.a)({}, t);
                  };
                if (t) {
                  if ('function' === typeof t) return t(n, r), e;
                  if (Array.isArray(t)) {
                    var a,
                      o = Object(k.a)(t);
                    try {
                      for (o.s(); !(a = o.n()).done; ) {
                        (0, a.value)(n, r);
                      }
                    } catch (i) {
                      o.e(i);
                    } finally {
                      o.f();
                    }
                    return e;
                  }
                }
                return e;
              })(n, t);
              return o.pathname !== t.location.pathname
                ? a.a.createElement(u.a, { to: o })
                : a.a.createElement(St, Object.assign({}, r, t, { component: e }));
            },
          }),
        );
      };
      xt.defaultProps = { location: { pathname: '' } };
      var _t = xt,
        Tt = e(68),
        Ct = function(t) {
          Object(Tt.a)(t);
          var n = Object(r.useCallback)(function() {}, []);
          return Object(r.useEffect)(n, []), null;
        };
      e(83), e(84), e(85);
      var Mt = function() {
        return a.a.createElement(
          w,
          null,
          a.a.createElement(
            c.a,
            null,
            a.a.createElement(Ct, null),
            a.a.createElement(
              r.Suspense,
              { fallback: '...loading' },
              a.a.createElement(
                u.d,
                null,
                l.a.map(function(t) {
                  return a.a.createElement(_t, {
                    key: t.path,
                    path: t.path,
                    component: t.component,
                    exact: t.exact,
                  });
                }),
              ),
            ),
          ),
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
      );
      i.a.render(a.a.createElement(Mt, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function(t) {
              t.unregister();
            })
            .catch(function(t) {
              console.error(t.message);
            });
    },
  ],
  [[72, 3, 4]],
]);
//# sourceMappingURL=main.e21123ce.chunk.js.map
