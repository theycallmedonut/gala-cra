(this.webpackJsonpi = this.webpackJsonpi || []).push([
  [5],
  {
    316: function(e, n, t) {
      e.exports = t.p + 'static/media/gold-label.bb046078.svg';
    },
    317: function(e, n, t) {
      e.exports = t.p + 'static/media/card-bg-xs.d88ad510.png';
    },
    88: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(24),
        r = t(0),
        i = t.n(r),
        c = t(3),
        u = t(325),
        l = t(18),
        o = t(35),
        s = t(38),
        b = t(113),
        m = t(10),
        f = t(6),
        d = t(44),
        g = t(45);
      function p() {
        var e = Object(m.a)([
          '\n  width: 92px;\n  height: 66px;\n  margin: 6px;\n  border-radius: 10px;\n  background: ',
          ';\n  color: ',
          ';\n  text-transform: uppercase;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 14px;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));\n\n  b {\n    display: block;\n    font-size: 25px;\n    line-height: 1;\n  }\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(m.a)(['\n    padding-right: 0;\n    padding-left: 0;\n  ']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = Object(m.a)([
          '\n  display: flex;\n  flex-flow: wrap;\n  padding: 18px 36px;\n\n  ',
          '\n',
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      var j = f.b.div(v(), g.b.tablet(x())),
        h = f.b.div(
          p(),
          function(e) {
            return e.isActive ? d.c : d.d;
          },
          function(e) {
            return e.isActive ? d.d : d.a;
          },
        ),
        y = function(e) {
          var n = e.qty,
            t = e.current,
            a = e.text,
            c = e.bindedInputFunctions,
            l = Object(r.useRef)();
          return i.a.createElement(
            u.a.Item,
            { style: { margin: 0 } },
            i.a.createElement(
              h,
              {
                isActive: t === n,
                onClick: function() {
                  return l.current.click();
                },
              },
              i.a.createElement(
                'input',
                Object.assign(
                  { ref: l, type: 'radio', name: 'qty', value: n, style: { display: 'none' } },
                  c,
                ),
              ),
              'more' !== n && i.a.createElement('b', null, n),
              a,
            ),
          );
        },
        E = function(e) {
          var n = e.bindedInputFunctions,
            t = e.current,
            a = [
              { qty: '5', text: o.r },
              { qty: '10', text: o.r },
              { qty: '100', text: o.r },
              { qty: 'more', text: o.s },
            ];
          return i.a.createElement(
            j,
            null,
            a.map(function(e) {
              return i.a.createElement(
                y,
                Object.assign({}, e, { key: e.qty, current: t, bindedInputFunctions: n }),
              );
            }),
          );
        },
        O = t(46),
        S = t(141),
        k = t(126),
        w = t(180),
        q = (t(127), t(185)),
        F = function(e) {
          var n = e.errors,
            t = e.currentForm,
            a = e.bindedSubmit,
            r = e.bindedInputFunctions,
            c = e.title,
            l = e.onCancel;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(b.b, null, Object(O.a)(c)),
            i.a.createElement(
              u.a.Item,
              Object.assign({}, n.phone, { label: '' }),
              i.a.createElement(
                S.a,
                Object.assign(
                  { type: 'text', name: 'phone', placeholder: o.G, defaultValue: t.phone },
                  r,
                ),
              ),
            ),
            i.a.createElement(
              u.a.Item,
              Object.assign({}, n.name, { label: '' }),
              i.a.createElement(
                S.a,
                Object.assign(
                  { type: 'text', name: 'name', placeholder: o.D, defaultValue: t.name },
                  r,
                ),
              ),
            ),
            i.a.createElement(
              u.a.Item,
              Object.assign({}, n.isAnonymous, { label: '' }),
              i.a.createElement(
                q.a,
                Object.assign(
                  { label: o.M, name: 'isAnonymous', defaultChecked: t.isAnonymous },
                  r,
                ),
              ),
            ),
            i.a.createElement(k.a, { onSubmit: a, submitTitle: o.e, onCancel: l }),
          );
        },
        I = t(30),
        z = { setQty: I.e, setIsDetailsStage: I.c },
        D = Object(l.b)(function(e) {
          return { isDetailsStage: e.basic.isDetailsStage };
        }, z)(function(e) {
          var n = e.bindedInputFunctions,
            t = e.setIsDetailsStage,
            a = e.goToNextStage,
            c = e.isDetailsStage,
            l = e.currentForm,
            s = e.errors,
            m = e.setQty,
            f = e.title,
            d = l.qty,
            g = 'more' === d,
            p = Object(r.useCallback)(
              function() {
                m({ qty: d });
              },
              [d],
            );
          return (
            Object(r.useEffect)(p, [d]),
            c
              ? i.a.createElement(
                  F,
                  Object.assign(
                    {
                      title: o.N,
                      onCancel: function() {
                        return t(!1);
                      },
                    },
                    e,
                  ),
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(b.b, null, Object(O.a)(f)),
                  i.a.createElement(b.a, null, Object(O.a)(o.K)),
                  i.a.createElement(E, { current: d, bindedInputFunctions: n }),
                  g
                    ? i.a.createElement(w.a, Object.assign({ afterSubmitAction: a }, e))
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          u.a.Item,
                          Object.assign({}, s.qty, { label: '' }),
                          i.a.createElement(
                            S.a,
                            Object.assign({ name: 'qty', placeholder: o.F, value: l.qty }, n),
                          ),
                        ),
                        i.a.createElement(k.a, {
                          onSubmit: function() {
                            return t(!0);
                          },
                          submitTitle: o.d,
                          style: { margin: 0 },
                        }),
                      ),
                )
          );
        }),
        M = t(87),
        A = t(181),
        C = { text: 'Field must be filled', regexp: new RegExp('^.+$', 'gm') },
        N = { text: 'Must be number', regexp: new RegExp('^[0-9]+$', 'g') },
        T =
          (new RegExp(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'gm',
          ),
          t(316)),
        R = t.n(T);
      function J() {
        var e = Object(m.a)(['\n  font-size: 14px;\n']);
        return (
          (J = function() {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = Object(m.a)(['\n  font-size: 16px;\n']);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = Object(m.a)([
          "\n  background: url('",
          "');\n  width: 265px;\n  height: 61px;\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.2;\n",
        ]);
        return (
          ($ = function() {
            return e;
          }),
          e
        );
      }
      var Q = f.b.div($(), R.a),
        V = f.b.div(P()),
        W = f.b.div(J()),
        Z = function(e) {
          var n = e.className,
            t = e.title,
            a = e.date,
            r = e.style;
          return i.a.createElement(
            Q,
            { className: n, style: r },
            i.a.createElement(V, null, t),
            i.a.createElement(W, null, a),
          );
        };
      t(50), t(22);
      function G() {
        var e = Object(m.a)([
          '\n  margin: 30px 0;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  text-transform: uppercase;\n',
        ]);
        return (
          (G = function() {
            return e;
          }),
          e
        );
      }
      function H() {
        var e = Object(m.a)(['\n  margin-bottom: 50px;\n']);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }
      var K = Object(f.b)(b.b)(H()),
        L = f.b.div(G()),
        U = function(e) {
          var n = e.title,
            t = e.date,
            a = e.onSubmit,
            r = e.beforeSubmit;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(K, null, o.J),
            i.a.createElement(Z, { title: n, date: t, style: { margin: '0 auto' } }),
            i.a.createElement(L, null, Object(O.a)(o.I)),
            i.a.createElement(k.a, {
              onSubmit: function() {
                r(), a();
              },
              submitTitle: o.a,
            }),
          );
        },
        Y = t(326),
        B = t(142),
        X = t(317),
        _ = t.n(X);
      function ee() {
        var e = Object(m.a)([
          '\n  background-size: cover;\n  width: 138px;\n  height: 31px;\n  margin: 0 auto;\n  > * {\n    font-size: 10px;\n    line-height: 1.2;\n  }\n',
        ]);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = Object(m.a)([
          '\n  font-size: 14px;\n  line-height: 1;\n  color: ',
          ';\n  opacity: 0.5;\n  text-transform: uppercase;\n  text-align: center;\n',
        ]);
        return (
          (ne = function() {
            return e;
          }),
          e
        );
      }
      function te() {
        var e = Object(m.a)([
          '\n  font-size: 52px;\n  text-align: center;\n  line-height: 1;\n  font-weight: bold;\n  color: ',
          ';\n',
        ]);
        return (
          (te = function() {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = Object(m.a)([
          '\n  text-transform: uppercase;\n  color: ',
          ';\n  text-align: right;\n  opacity: 0.5;\n  font-weight: bold;\n  font-size: 11px;\n  margin: 5px 8px 0 0;\n  padding-top: 5px;\n',
        ]);
        return (
          (ae = function() {
            return e;
          }),
          e
        );
      }
      function re() {
        var e = Object(m.a)([
          '\n  position: relative;\n  margin-bottom: 10px;\n  margin-top: 42px;\n  width: 155px;\n  height: 100px;\n  background: url(',
          ') center center no-repeat;\n',
        ]);
        return (
          (re = function() {
            return e;
          }),
          e
        );
      }
      function ie() {
        var e = Object(m.a)(['\n  justify-content: center;\n  text-align: center;\n']);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function ce() {
        var e = Object(m.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n',
        ]);
        return (
          (ce = function() {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(m.a)(['\n    margin-top: 50px;\n  ']);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(m.a)([
          '\n  position: relative;\n  margin: 30px auto;\n\n  ',
          ";\n\n  .ant-row {\n    background: linear-gradient(0deg, #979797 -2.35%, rgba(151, 151, 151, 0) 97.83%);\n    background-position: 0 10px;\n    background-size: 100% 130px;\n    background-repeat: no-repeat;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .ant-tabs-content {\n    position: relative;\n    z-index: 0;\n\n    &:after {\n      content: '';\n      position: absolute;\n      top: 0px;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      //box-shadow: inset 0 0 70px 40px rgba(0, 0, 0, 0.5);\n      background: linear-gradient(\n        90deg,\n        #111111 0.04%,\n        rgba(17, 17, 17, 0) 35.39%,\n        rgba(17, 17, 17, 0) 64.48%,\n        #111111 99.96%\n      );\n    }\n  }\n  .ant-tabs-nav-list {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 45px;\n    background: rgba(224, 225, 228, 0.9);\n\n    .ant-tabs-tab {\n      margin: 0;\n      padding: 20px;\n      border-radius: 45px;\n      background: none;\n      border: 0;\n\n      &.ant-tabs-tab-active {\n        background: ",
          ';\n        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n        border-radius: 45px;\n\n        > .ant-tabs-tab-btn {\n          color: ',
          ';\n        }\n      }\n\n      > .ant-tabs-tab-btn {\n        font-size: 16px;\n        line-height: 1;\n        font-weight: bold;\n        color: ',
          ';\n        font-family: ',
          ';\n      }\n    }\n  }\n\n  .ant-tabs-nav:before {\n    content: none;\n  }\n\n  .ant-tabs-nav-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:before,\n    &:after {\n      content: none;\n    }\n  }\n',
        ]);
        return (
          (le = function() {
            return e;
          }),
          e
        );
      }
      var oe = Object(f.b)(Y.a)(le(), g.b.desktop(ue()), d.d, d.c, d.b, B.b),
        se = f.b.div(ce()),
        be = f.b.div(ie()),
        me = f.b.div(re(), _.a),
        fe = f.b.div(ae(), d.c),
        de = f.b.div(te(), d.c),
        ge = f.b.div(ne(), d.c),
        pe = Object(f.b)(Z)(ee()),
        xe = t(323),
        ve = t(324),
        je = function(e) {
          var n = e.title,
            t = e.date,
            a = e.qty;
          return i.a.createElement(
            be,
            null,
            i.a.createElement(
              me,
              null,
              i.a.createElement(fe, null, o.H),
              i.a.createElement(de, null, a),
              i.a.createElement(ge, null, 1 === a ? o.q : o.r),
            ),
            i.a.createElement(pe, { title: n, date: t }),
          );
        },
        he = Object(l.b)(function(e) {
          return { isMobile: e.basic.isMobile };
        }, {})(function(e) {
          var n = e.title,
            t = e.list,
            a = e.isMobile,
            c = Object(r.useCallback)(
              function() {
                var e = window.innerWidth - 30,
                  n = a ? 166 : 190;
                return Math.floor(e / n);
              },
              [a, window.innerWidth],
            ),
            u = Object(r.useMemo)(
              function() {
                for (var e = c(), n = [], a = 0, r = t.length; a < r; a += e)
                  n.push(t.slice(a, a + e));
                return n;
              },
              [t, a],
            );
          return i.a.createElement(
            se,
            { tab: n },
            u.map(function(e, n) {
              return i.a.createElement(
                xe.a,
                { key: n, gutter: 10 },
                e.map(function(e, n) {
                  return i.a.createElement(ve.a, { key: n }, i.a.createElement(je, e));
                }),
              );
            }),
          );
        }),
        ye = Y.a.TabPane,
        Ee = { getCards: I.a },
        Oe = Object(l.b)(function(e) {
          return { cards: e.basic.cards };
        }, Ee)(function(e) {
          var n = e.getCards,
            t = e.cards;
          return (
            Object(r.useEffect)(
              function() {
                t.length || n();
              },
              [t],
            ),
            i.a.createElement(
              oe,
              { type: 'card' },
              t.map(function(e) {
                return i.a.createElement(
                  ye,
                  { key: e.title, tab: e.title },
                  i.a.createElement(he, e),
                );
              }),
            )
          );
        }),
        Se = {
          1: {
            qty: { value: '', rules: [C, N] },
            phone: { value: '', rules: [C] },
            name: { value: '', rules: [] },
            isAnonymous: { value: !0, rules: [] },
          },
          2: {
            firstName: { value: '', rules: [C] },
            lastName: { value: '', rules: [] },
            cardNumber: { value: '', rules: [] },
            cardMonth: { value: '', rules: [] },
            cardYear: { value: '', rules: [] },
            card: { value: '', rules: [] },
            email: { value: '', rules: [] },
            address: { value: '', rules: [] },
            isResident: { value: !0, rules: [] },
            nationalId: { value: '', rules: [] },
            check1: { value: !0, rules: [] },
            check2: { value: !0, rules: [] },
            check3: { value: !0, rules: [] },
          },
          4: { phone: { value: '', rules: [C] }, email: { value: '', rules: [] } },
        },
        ke = { setIsDetailsStage: I.c };
      n.default = Object(r.memo)(
        Object(l.b)(function(e) {
          var n = e.basic;
          return { qty: n.qty, isMobile: n.isMobile, isDetailsStage: n.isDetailsStage };
        }, ke)(
          Object(c.g)(function(e) {
            var n = e.qty,
              t = e.isMobile,
              c = e.isDetailsStage,
              l = e.setIsDetailsStage,
              m = Object(r.useState)(1),
              f = Object(a.a)(m, 2),
              d = f[0],
              g = f[1],
              p = Object(r.useState)({}),
              x = Object(a.a)(p, 2),
              v = x[0],
              j = x[1],
              h = function() {
                return g(d + 1);
              },
              y = function() {
                return g(d - 1);
              },
              E = {
                1: function() {
                  return Object(s.e)(v).then(h);
                },
                2: function() {
                  return Object(s.d)(v).then(h);
                },
                3: function() {
                  return g(1);
                },
                4: function() {
                  return Object(s.c)(v).then(y);
                },
              },
              O = Object(A.a)(E[d], Se[d]),
              S = O.onClearForm,
              k = O.bindedSubmit;
            return (
              Object(r.useEffect)(
                function() {
                  j(O.currentForm);
                },
                [O.currentForm],
              ),
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  b.c,
                  {
                    direction: 'column',
                    qty: n,
                    className: 'form-qty form-qty--'
                      .concat(t ? 'mobile' : 'desktop', ' form-qty--')
                      .concat(n, ' form-stage--')
                      .concat(d, ' ')
                      .concat(c && 'form-details'),
                  },
                  i.a.createElement(
                    u.a,
                    null,
                    1 === d &&
                      i.a.createElement(
                        D,
                        Object.assign({ title: o.L, goToNextStage: h, goToPrevStage: y }, O),
                      ),
                    (2 === d || 4 === d) &&
                      i.a.createElement(
                        M.default,
                        Object.assign(
                          {
                            onSubmit: k,
                            stage: d,
                            goToPrevStage: y,
                            goToNextStage: h,
                            goToStage: function(e) {
                              return g(e);
                            },
                          },
                          O,
                        ),
                      ),
                    3 === d &&
                      i.a.createElement(U, {
                        title: 'from Ultraslan community',
                        date: '2 September 2020',
                        beforeSubmit: function() {
                          S(), l(!1);
                        },
                        onSubmit: k,
                      }),
                  ),
                ),
                i.a.createElement(Oe, null),
              )
            );
          }),
        ),
      );
    },
  },
]);
//# sourceMappingURL=5.7989e537.chunk.js.map
