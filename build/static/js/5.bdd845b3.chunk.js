(this.webpackJsonpi = this.webpackJsonpi || []).push([
  [5],
  {
    101: function(n, e, t) {
      'use strict';
      var a = t(18),
        r = t(0),
        c = t.n(r),
        i = t(9),
        o = t(6),
        l = t(29),
        u = t(309);
      function b() {
        var n = Object(i.a)([
          '\n  width: 100%;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 14px 10px;\n  background: ',
          ';\n  color: ',
          ';\n  border-radius: 10px;\n  border-color: transparent;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));\n',
        ]);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      var s = Object(o.b)(u.a)(b(), l.d, l.a);
      e.a = function(n) {
        var e = n.type,
          t = void 0 === e ? 'text' : e,
          r = Object(a.a)(n, ['type']);
        return c.a.createElement(s, Object.assign({ type: t }, r));
      };
    },
    102: function(n, e, t) {
      'use strict';
      t.d(e, 'a', function() {
        return a;
      }),
        t.d(e, 'b', function() {
          return r;
        });
      var a = 'Roboto Condensed, sans-serif',
        r = 'Roboto, sans-serif';
    },
    121: function(n, e, t) {
      'use strict';
      var a = t(0),
        r = t.n(a),
        c = t(306),
        i = t(84),
        o = t(22),
        l = t(101),
        u = t(94);
      e.a = function(n) {
        var e = n.errors,
          t = n.currentForm,
          a = n.bindedInputFunctions,
          b = n.bindedSubmit,
          s = n.onCancel;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(i.b, null, o.u),
          r.a.createElement(
            c.a.Item,
            Object.assign({}, e.phone, { label: '' }),
            r.a.createElement(
              l.a,
              Object.assign(
                {
                  name: 'phone',
                  size: 'large',
                  placeholder: o.G,
                  defaultValue: t.phone,
                  style: { margin: '12px 0 0' },
                },
                a,
              ),
            ),
          ),
          r.a.createElement(
            c.a.Item,
            Object.assign({}, e.email, { label: '' }),
            r.a.createElement(
              l.a,
              Object.assign(
                {
                  name: 'email',
                  size: 'large',
                  placeholder: o.A,
                  defaultValue: t.email,
                  style: { marginBottom: 0 },
                },
                a,
              ),
            ),
          ),
          r.a.createElement(u.a, { onCancel: s, onSubmit: b, style: { margin: 0 } }),
        );
      };
    },
    123: function(n, e, t) {
      'use strict';
      var a = t(18),
        r = t(0),
        c = t.n(r),
        i = t(9),
        o = t(6),
        l = t(311),
        u = t(134),
        b = t.n(u),
        s = t(29),
        d = t(102);
      function f() {
        var n = Object(i.a)(['\n  line-height: 1.2;\n  margin-top: 3px;\n  font-family: ', ';\n']);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = Object(i.a)([
          '\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n    \n  .ant-checkbox-wrapper:hover .ant-checkbox-inner, \n  .ant-checkbox:hover .ant-checkbox-inner, \n  .ant-checkbox-input:focus + .ant-checkbox-inner {\n    border-color: ',
          ";\n  }\n    \n  .ant-checkbox-checked {\n    position:relative;\n    \n    &:after {\n      border-color: transparent;\n    }\n    \n    .ant-checkbox-inner {\n      border-color: transparent!important;\n    \n      &:after {\n        content: '';\n        position: absolute;\n        top: -2px;\n        left: 1px;\n        width: 31px;\n        height: 24px;\n        background: url('",
          "');\n        border: 0;\n        transform: none;\n      }\n    }\n  }\n  \n  .ant-checkbox-inner {\n    background: ",
          ';\n    border-color: transparent;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    position:relative;\n    width: 22px;\n    height: 24px;\n    margin-right: 10px;\n  }\n',
        ]);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = Object(i.a)(['']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      o.b.div(p());
      var g = Object(o.b)(l.a)(m(), s.c, b.a, s.d),
        h = o.b.div(f(), d.b);
      e.a = function(n) {
        var e = n.label,
          t = Object(a.a)(n, ['label']);
        return c.a.createElement(
          g,
          Object.assign({}, t, { className: 'checkbox' }),
          c.a.createElement(h, null, e),
        );
      };
    },
    134: function(n, e, t) {
      n.exports = t.p + 'static/media/checkbox.afe5a233.svg';
    },
    165: function(n, e, t) {
      'use strict';
      t.r(e);
      var a = t(0),
        r = t.n(a),
        c = t(22),
        i = t(306),
        o = t(304),
        l = t(305),
        u = t(19),
        b = t(84),
        s = t(101),
        d = t(1),
        f = t(18),
        m = t(9),
        p = t(6),
        g = t(312),
        h = t(29);
      function x() {
        var n = Object(m.a)([
          '\n  background: ',
          ';\n  height: 32px;\n  line-height: 32px;\n  min-width: 54px;\n  margin-right: 10px;\n',
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = Object(m.a)([
          '\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  .ant-switch-handle {\n    width: 28px;\n    height: 28px;\n    left: ',
          ';\n\n    &:before {\n      border-radius: 50%;\n    }\n  }\n',
        ]);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      var v = p.b.div(j(), function(n) {
          return n.checked ? 'calc(100% - 28px - 2px)' : '2px';
        }),
        O = Object(p.b)(g.a)(x(), function(n) {
          return n.checked ? h.c : 'rgba(0, 0, 0, 0.125)';
        }),
        E = function(n) {
          n.children, n.className;
          var e = n.name,
            t = n.label,
            a = n.checked,
            c = Object(f.a)(n, ['children', 'className', 'name', 'label', 'checked']),
            i = c.onChange;
          return r.a.createElement(
            v,
            { checked: a },
            r.a.createElement(
              O,
              Object.assign({}, c, {
                onClick: function() {},
                checked: a,
                onChange: function(n, t) {
                  i(
                    Object(d.a)(
                      Object(d.a)({}, t),
                      {},
                      {
                        target: Object(d.a)(
                          Object(d.a)({}, t.target),
                          {},
                          { checked: n, name: e, value: '' },
                        ),
                      },
                    ),
                  );
                },
              }),
            ),
            t,
          );
        },
        k = t(123),
        y = t(94),
        w = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(u.b, { to: '/1.pdf' }, c.k),
            ' \xa0',
            c.l,
          );
        },
        z = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(u.b, { to: '/2.pdf' }, c.m),
            ' \xa0',
            c.n,
          );
        },
        I = function(n) {
          var e = n.errors,
            t = n.currentForm,
            a = n.bindedSubmit,
            u = n.bindedInputFunctions,
            d = n.goToPrevStage;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(b.b, { style: { textAlign: 'left', margin: '0 0 10px' } }, c.g),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.firstName, { label: '' }),
              r.a.createElement(
                s.a,
                Object.assign(
                  { name: 'firstName', size: 'large', placeholder: c.B, defaultValue: t.firstName },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.lastName, { label: '' }),
              r.a.createElement(
                s.a,
                Object.assign(
                  { name: 'lastName', size: 'large', placeholder: c.C, defaultValue: t.lastName },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.cardNumber, { label: '' }),
              r.a.createElement(
                s.a,
                Object.assign(
                  {
                    name: 'cardNumber',
                    size: 'large',
                    placeholder: c.y,
                    defaultValue: t.cardNumber,
                  },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              o.a,
              { gutter: '12', style: { flexWrap: 'nowrap' } },
              r.a.createElement(
                l.a,
                null,
                r.a.createElement(
                  i.a.Item,
                  Object.assign({}, e.cardMonth, { label: '' }),
                  r.a.createElement(
                    s.a,
                    Object.assign(
                      {
                        name: 'cardMonth',
                        size: 'large',
                        placeholder: c.x,
                        defaultValue: t.cardMonth,
                      },
                      u,
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                l.a,
                null,
                r.a.createElement(
                  i.a.Item,
                  Object.assign({}, e.cardYear, { label: '' }),
                  r.a.createElement(
                    s.a,
                    Object.assign(
                      {
                        name: 'cardYear',
                        size: 'large',
                        placeholder: c.z,
                        defaultValue: t.cardYear,
                      },
                      u,
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                l.a,
                null,
                r.a.createElement(
                  i.a.Item,
                  Object.assign({}, e.card, { label: '' }),
                  r.a.createElement(
                    s.a,
                    Object.assign(
                      { name: 'card', size: 'large', placeholder: c.w, defaultValue: t.card },
                      u,
                    ),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.email, { label: '' }),
              r.a.createElement(
                s.a,
                Object.assign(
                  { name: 'email', size: 'large', placeholder: c.A, defaultValue: t.email },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.address, { label: '' }),
              r.a.createElement(
                s.a,
                Object.assign(
                  { name: 'address', size: 'large', placeholder: c.v, defaultValue: t.address },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.isResident, { label: '', style: { marginTop: '10px' } }),
              r.a.createElement(
                E,
                Object.assign(
                  { name: 'isResident', size: 'large', label: c.p, checked: t.isResident },
                  u,
                ),
              ),
            ),
            t.isResident &&
              r.a.createElement(
                i.a.Item,
                Object.assign({}, e.nationalId, { label: '' }),
                r.a.createElement(
                  s.a,
                  Object.assign(
                    {
                      name: 'nationalId',
                      size: 'large',
                      placeholder: c.E,
                      defaultValue: t.nationalId,
                    },
                    u,
                  ),
                ),
              ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.check1, { label: '' }),
              r.a.createElement(
                k.a,
                Object.assign(
                  {
                    name: 'check1',
                    size: 'large',
                    label: r.a.createElement(w, null),
                    defaultChecked: t.check1,
                  },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.check2, { label: '' }),
              r.a.createElement(
                k.a,
                Object.assign(
                  {
                    name: 'check2',
                    size: 'large',
                    label: r.a.createElement(z, null),
                    defaultChecked: t.check2,
                  },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, e.check3, { label: '' }),
              r.a.createElement(
                k.a,
                Object.assign(
                  { name: 'check3', size: 'large', label: c.o, defaultChecked: t.check3 },
                  u,
                ),
              ),
            ),
            r.a.createElement(y.a, { onCancel: d, onSubmit: a, submitTitle: c.c }),
          );
        },
        C = t(307);
      function N() {
        var n = Object(m.a)(['\n  width: 50%;\n']);
        return (
          (N = function() {
            return n;
          }),
          n
        );
      }
      function V() {
        var n = Object(m.a)([
          '\n  width: 100%;\n  overflow-x: visible;\n  overflow-y: visible;\n\n  .ant-tabs-nav-list {\n    width: 100%;\n  }\n\n  .ant-tabs-tabpane {\n    width: 100%;\n  }\n\n  .ant-tabs-tab {\n    width: 50%;\n    margin: 0;\n    justify-content: center;\n    text-transform: uppercase;\n    color: ',
          ';\n    font-size: 16px;\n  }\n\n  .ant-tabs-tab-active .ant-tabs-tab-btn {\n    color: ',
          ';\n  }\n\n  .ant-tabs-nav::before,\n  .ant-tabs-nav::after {\n    border-color: ',
          ';\n  }\n\n  .ant-tabs-ink-bar {\n    background: ',
          ';\n  }\n',
        ]);
        return (
          (V = function() {
            return n;
          }),
          n
        );
      }
      var F = C.a.TabPane,
        T = Object(p.b)(C.a)(V(), h.a, h.c, h.a, h.c),
        S = Object(p.b)(F)(N()),
        R = t(121);
      e.default = function(n) {
        var e = n.stage,
          t = n.goToStage;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(b.b, null, c.t),
          r.a.createElement(
            T,
            {
              defaultActiveKey: e,
              onChange: function(n) {
                return t(Number(n));
              },
              style: { marginTop: '30px' },
            },
            r.a.createElement(S, { tab: c.f, key: 2 }, r.a.createElement(I, n)),
            r.a.createElement(S, { tab: c.h, key: 4 }, r.a.createElement(R.a, n)),
          ),
        );
      };
    },
    84: function(n, e, t) {
      'use strict';
      t.d(e, 'c', function() {
        return R;
      }),
        t.d(e, 'b', function() {
          return A;
        }),
        t.d(e, 'a', function() {
          return M;
        });
      var a = t(9),
        r = t(6),
        c = t(33),
        i = t.n(c),
        o = t(102),
        l = t(30);
      function u() {
        var n = Object(a.a)(['\n    position: static;\n  ']);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = Object(a.a)(['\n  position: sticky;\n  top: ', ';\n\n  ', '\n']);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = Object(a.a)(['\n        order: -1;\n      ']);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = Object(a.a)(['\n        display: none;\n      ']);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = Object(a.a)(['\n    ', '\n\n    ', '\n  ']);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = Object(a.a)(['\n         display: none;\n       ']);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = Object(a.a)([
          '\n    width: ',
          ';\n    padding-left: 24px;\n    padding-right: 24px;\n\n     ',
          '\n  ',
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = Object(a.a)([
          '\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = Object(a.a)(['\n    flex-wrap: wrap;\n  ']);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = Object(a.a)(['\n    margin-left: -24px;\n    margin-right: -24px;\n  ']);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function j() {
        var n = Object(a.a)([
          '\n  display: flex;\n  margin-left: -10px;\n  margin-right: -10px;\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (j = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = Object(a.a)([
          '\n  display: flex;\n  flex-direction: ',
          ';\n  align-items: ',
          ';\n  justify-content: ',
          ';\n',
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function O() {
        var n = Object(a.a)(['\n    padding-bottom: 0;\n  ']);
        return (
          (O = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = Object(a.a)(['\n    padding-top: 15px;\n    padding-bottom: 15px;\n  ']);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      function k() {
        var n = Object(a.a)([
          '\n  padding-top: 5px;\n  padding-bottom: 15px;\n  background-color: ',
          ';\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = Object(a.a)([
          '\n  min-width: 320px;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: ',
          ';\n  flex-direction: ',
          ';\n  align-items: ',
          ';\n  justify-content: ',
          ';\n',
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      var w = r.b.div(
        y(),
        function(n) {
          return n.display || 'flex';
        },
        function(n) {
          return n.flexDirection || 'row';
        },
        function(n) {
          return n.alignItems || 'flex-start';
        },
        function(n) {
          return n.justifyContent || 'flex-start';
        },
      );
      r.b.div(
        k(),
        function(n) {
          return n.pageBackgroundColor || 'transparent';
        },
        l.b.phone(E()),
        l.a.tablet(O()),
      ),
        r.b.div(
          v(),
          function(n) {
            return n.flexDirection || 'row';
          },
          function(n) {
            return n.alignItems || 'flex-start';
          },
          function(n) {
            return n.justifyContent || 'flex-start';
          },
        ),
        r.b.div(j(), l.b.tablet(x()), l.a.tablet(h())),
        r.b.div(
          g(),
          l.b.tablet(
            p(),
            function(n) {
              return n.width || '50%';
            },
            function(n) {
              return n.hideOnDesktop && Object(r.a)(m());
            },
          ),
          l.a.tablet(
            f(),
            function(n) {
              return n.hideOnMobile && Object(r.a)(d());
            },
            function(n) {
              return n.mobileFirst && Object(r.a)(s());
            },
          ),
        ),
        r.b.div(
          b(),
          function(n) {
            return n.top || '15px';
          },
          l.a.phone(u()),
        );
      function z() {
        var n = Object(a.a)(['\n  font-weight: bold;\n  margin-bottom: 0;\n']);
        return (
          (z = function() {
            return n;
          }),
          n
        );
      }
      function I() {
        var n = Object(a.a)(['\n    width: calc(100% + 60px);\n    margin: 0 -30px 10px;\n  ']);
        return (
          (I = function() {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = Object(a.a)([
          '\n  ',
          ';\n  font-size: 20px;\n  margin: 0 auto 10px;\n  width: 230px;\n\n  ',
          ';\n',
        ]);
        return (
          (C = function() {
            return n;
          }),
          n
        );
      }
      function N() {
        var n = Object(a.a)(['\n    width: 460px;\n  ']);
        return (
          (N = function() {
            return n;
          }),
          n
        );
      }
      function V() {
        var n = Object(a.a)(['\n    width: 320px;\n  ']);
        return (
          (V = function() {
            return n;
          }),
          n
        );
      }
      function F() {
        var n = Object(a.a)([
          '\n  position: relative;\n  display: flex;\n  flex-direction: ',
          ';\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 auto 20px;\n  padding: 48px 20px 90px;\n  box-sizing: border-box;\n  min-height: 530px;\n  \n  ',
          '\n  ',
          "\n  \n  .ant-form {\n    width: 100%;\n  }\n  .ant-form-item {\n    margin-bottom: 12px;\n  }\n  \n  \n  \n  \n  // &:after {\n  //   content: '';\n  //   position: absolute;\n  //   bottom: 20px;\n  //   right: 20px;\n  //   width: 45px;\n  //   height: 60px;\n  //   background: url('",
          "') center center/60px auto no-repeat;\n  // }\n\n  > * {\n    position:relative;\n    box-sizing: border-box;\n    font-family: ",
          ';\n  }\n',
        ]);
        return (
          (F = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = Object(a.a)([
          '\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n',
        ]);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      var S = Object(r.a)(T()),
        R = Object(r.b)(w)(
          F(),
          function(n) {
            return n.direction || 'row';
          },
          l.a.tablet(V()),
          l.b.tablet(N()),
          i.a,
          o.a,
        ),
        A = r.b.div(C(), S, l.b.tablet(I())),
        M = Object(r.b)(A)(z());
    },
    94: function(n, e, t) {
      'use strict';
      var a = t(0),
        r = t.n(a),
        c = t(22),
        i = t(9),
        o = t(6),
        l = t(18),
        u = t(29),
        b = t(300);
      function s() {
        var n = Object(i.a)([
          '\n  display: inline-block;\n  line-height: 1.2;\n  height: auto;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-bottom: 12px;\n  padding: 14px 30px;\n  font-weight: 700;\n  border-width: 2px;\n  border-style: solid;\n  border-color: ',
          ';\n  background: ',
          ';\n  color: ',
          ';\n  border-radius: 10px;\n  width: ',
          ';\n\n  &:active,\n  &:hover,\n  &:focus {\n    color: ',
          ';\n    border-color: ',
          ';\n    background: ',
          ';\n  }\n',
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      var d = Object(o.b)(b.a)(
          s(),
          function(n) {
            return 'primary' === n.type ? u.c : u.b;
          },
          function(n) {
            return 'primary' === n.type ? u.c : u.b;
          },
          u.d,
          function(n) {
            return 'primary' === n.type ? '100%' : 'auto';
          },
          u.d,
          function(n) {
            return 'primary' === n.type ? u.c : u.b;
          },
          function(n) {
            return 'primary' === n.type ? u.c : u.b;
          },
        ),
        f = function(n) {
          var e = n.children,
            t = Object(l.a)(n, ['children']);
          return r.a.createElement(d, t, e);
        };
      function m() {
        var n = Object(i.a)(['']);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = Object(i.a)(['\n  width: 100%;\n']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = Object(i.a)(['\n  margin-top: 24px;\n  width: 100%;\n  text-align: center;\n']);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      var h = o.b.div(g()),
        x = Object(o.b)(f)(p()),
        j = Object(o.b)(f)(m());
      e.a = function(n) {
        var e = n.onSubmit,
          t = n.onCancel,
          a = n.submitTitle,
          i = void 0 === a ? 'send' : a,
          o = n.style,
          l = void 0 === o ? {} : o;
        return r.a.createElement(
          h,
          { style: l },
          r.a.createElement(x, { type: 'primary', onClick: e }, i),
          t && r.a.createElement(j, { style: { marginTop: '12px' }, onClick: t }, c.b),
        );
      };
    },
  },
]);
//# sourceMappingURL=5.bdd845b3.chunk.js.map
