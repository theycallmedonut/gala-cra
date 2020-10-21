(this.webpackJsonpi = this.webpackJsonpi || []).push([
  [1],
  {
    113: function(e, n, t) {
      'use strict';
      t.d(n, 'c', function() {
        return R;
      }),
        t.d(n, 'b', function() {
          return A;
        }),
        t.d(n, 'a', function() {
          return M;
        });
      var a = t(10),
        r = t(6),
        c = t(51),
        i = t.n(c),
        o = t(142),
        u = t(45);
      function l() {
        var e = Object(a.a)(['\n    position: static;\n  ']);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = Object(a.a)(['\n  position: sticky;\n  top: ', ';\n\n  ', '\n']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = Object(a.a)(['\n        order: -1;\n      ']);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = Object(a.a)(['\n        display: none;\n      ']);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = Object(a.a)(['\n    ', '\n\n    ', '\n  ']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = Object(a.a)(['\n         display: none;\n       ']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = Object(a.a)([
          '\n    width: ',
          ';\n    padding-left: 24px;\n    padding-right: 24px;\n\n     ',
          '\n  ',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = Object(a.a)([
          '\n  width: 100%;\n  padding-left: 10px;\n  padding-right: 10px;\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(a.a)(['\n    flex-wrap: wrap;\n  ']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = Object(a.a)(['\n    margin-left: -24px;\n    margin-right: -24px;\n  ']);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = Object(a.a)([
          '\n  display: flex;\n  margin-left: -10px;\n  margin-right: -10px;\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = Object(a.a)([
          '\n  display: flex;\n  flex-direction: ',
          ';\n  align-items: ',
          ';\n  justify-content: ',
          ';\n',
        ]);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(a.a)(['\n    padding-bottom: 0;\n  ']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = Object(a.a)(['\n    padding-top: 15px;\n    padding-bottom: 15px;\n  ']);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = Object(a.a)([
          '\n  padding-top: 5px;\n  padding-bottom: 15px;\n  background-color: ',
          ';\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = Object(a.a)([
          '\n  min-width: 320px;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: ',
          ';\n  flex-direction: ',
          ';\n  align-items: ',
          ';\n  justify-content: ',
          ';\n',
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      var w = r.b.div(
        E(),
        function(e) {
          return e.display || 'flex';
        },
        function(e) {
          return e.flexDirection || 'row';
        },
        function(e) {
          return e.alignItems || 'flex-start';
        },
        function(e) {
          return e.justifyContent || 'flex-start';
        },
      );
      r.b.div(
        y(),
        function(e) {
          return e.pageBackgroundColor || 'transparent';
        },
        u.b.phone(k()),
        u.a.tablet(x()),
      ),
        r.b.div(
          O(),
          function(e) {
            return e.flexDirection || 'row';
          },
          function(e) {
            return e.alignItems || 'flex-start';
          },
          function(e) {
            return e.justifyContent || 'flex-start';
          },
        ),
        r.b.div(v(), u.b.tablet(j()), u.a.tablet(h())),
        r.b.div(
          g(),
          u.b.tablet(
            p(),
            function(e) {
              return e.width || '50%';
            },
            function(e) {
              return e.hideOnDesktop && Object(r.a)(m());
            },
          ),
          u.a.tablet(
            d(),
            function(e) {
              return e.hideOnMobile && Object(r.a)(f());
            },
            function(e) {
              return e.mobileFirst && Object(r.a)(s());
            },
          ),
        ),
        r.b.div(
          b(),
          function(e) {
            return e.top || '15px';
          },
          u.a.phone(l()),
        );
      function C() {
        var e = Object(a.a)(['\n  font-weight: bold;\n  margin-bottom: 0;\n']);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = Object(a.a)(['\n    width: calc(100% + 60px);\n    margin: 0 -30px 10px;\n  ']);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = Object(a.a)([
          '\n  ',
          ';\n  font-size: 20px;\n  margin: 0 auto 10px;\n  width: 230px;\n\n  ',
          ';\n',
        ]);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = Object(a.a)(['\n    width: 460px;\n  ']);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = Object(a.a)(['\n    width: 320px;\n  ']);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = Object(a.a)([
          '\n  position: relative;\n  display: flex;\n  flex-direction: ',
          ';\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 auto 20px;\n  padding: 48px 20px 90px;\n  box-sizing: border-box;\n  min-height: 530px;\n  \n  ',
          '\n  ',
          "\n  \n  .ant-form {\n    width: 100%;\n  }\n  .ant-form-item {\n    margin-bottom: 12px;\n  }\n  \n  \n  \n  \n  // &:after {\n  //   content: '';\n  //   position: absolute;\n  //   bottom: 20px;\n  //   right: 20px;\n  //   width: 45px;\n  //   height: 60px;\n  //   background: url('",
          "') center center/60px auto no-repeat;\n  // }\n\n  > * {\n    position:relative;\n    box-sizing: border-box;\n    font-family: ",
          ';\n  }\n',
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function V() {
        var e = Object(a.a)([
          '\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n',
        ]);
        return (
          (V = function() {
            return e;
          }),
          e
        );
      }
      var T = Object(r.a)(V()),
        R = Object(r.b)(w)(
          S(),
          function(e) {
            return e.direction || 'row';
          },
          u.a.tablet(N()),
          u.b.tablet(F()),
          i.a,
          o.a,
        ),
        A = r.b.div(z(), T, u.b.tablet(I())),
        M = Object(r.b)(A)(C());
    },
    126: function(e, n, t) {
      'use strict';
      var a = t(0),
        r = t.n(a),
        c = t(127),
        i = t(35),
        o = t(10),
        u = t(6);
      function l() {
        var e = Object(o.a)(['']);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = Object(o.a)(['\n  width: 100%;\n']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = Object(o.a)(['\n  margin-top: 24px;\n  width: 100%;\n  text-align: center;\n']);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      var f = u.b.div(s()),
        d = Object(u.b)(c.a)(b()),
        m = Object(u.b)(c.a)(l());
      n.a = function(e) {
        var n = e.onSubmit,
          t = e.onCancel,
          a = e.submitTitle,
          c = void 0 === a ? 'send' : a,
          o = e.style,
          u = void 0 === o ? {} : o;
        return r.a.createElement(
          f,
          { style: u },
          r.a.createElement(d, { type: 'primary', onClick: n }, c),
          t && r.a.createElement(m, { style: { marginTop: '12px' }, onClick: t }, i.b),
        );
      };
    },
    127: function(e, n, t) {
      'use strict';
      var a = t(28),
        r = t(0),
        c = t.n(r),
        i = t(10),
        o = t(6),
        u = t(44),
        l = t(319);
      function b() {
        var e = Object(i.a)([
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
          (b = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(o.b)(l.a)(
        b(),
        function(e) {
          return 'primary' === e.type ? u.c : u.b;
        },
        function(e) {
          return 'primary' === e.type ? u.c : u.b;
        },
        u.d,
        function(e) {
          return 'primary' === e.type ? '100%' : 'auto';
        },
        u.d,
        function(e) {
          return 'primary' === e.type ? u.c : u.b;
        },
        function(e) {
          return 'primary' === e.type ? u.c : u.b;
        },
      );
      n.a = function(e) {
        var n = e.children,
          t = Object(a.a)(e, ['children']);
        return c.a.createElement(s, t, n);
      };
    },
    141: function(e, n, t) {
      'use strict';
      var a = t(28),
        r = t(0),
        c = t.n(r),
        i = t(10),
        o = t(6),
        u = t(44),
        l = t(327);
      function b() {
        var e = Object(i.a)([
          '\n  width: 100%;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 14px 10px;\n  background: ',
          ';\n  color: ',
          ';\n  border-radius: 10px;\n  border-color: transparent;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));\n',
        ]);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      var s = Object(o.b)(l.a)(b(), u.d, u.a);
      n.a = function(e) {
        var n = e.type,
          t = void 0 === n ? 'text' : n,
          r = Object(a.a)(e, ['type']);
        return c.a.createElement(s, Object.assign({ type: t }, r));
      };
    },
    142: function(e, n, t) {
      'use strict';
      t.d(n, 'a', function() {
        return a;
      }),
        t.d(n, 'b', function() {
          return r;
        });
      var a = 'Roboto Condensed, sans-serif',
        r = 'Roboto, sans-serif';
    },
    180: function(e, n, t) {
      'use strict';
      var a = t(0),
        r = t.n(a),
        c = t(113),
        i = t(35),
        o = t(141),
        u = t(325),
        l = (t(181), t(126));
      t(38);
      n.a = function(e) {
        var n = e.errors,
          t = e.currentForm,
          a = e.bindedInputFunctions,
          b = e.bindedSubmit,
          s = e.onCancel;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(c.b, null, i.u),
          r.a.createElement(
            u.a.Item,
            Object.assign({}, n.phone, { label: '' }),
            r.a.createElement(
              o.a,
              Object.assign(
                {
                  name: 'phone',
                  size: 'large',
                  placeholder: i.G,
                  defaultValue: t.phone,
                  style: { margin: '12px 0 0' },
                },
                a,
              ),
            ),
          ),
          r.a.createElement(
            u.a.Item,
            Object.assign({}, n.email, { label: '' }),
            r.a.createElement(
              o.a,
              Object.assign(
                {
                  name: 'email',
                  size: 'large',
                  placeholder: i.A,
                  defaultValue: t.email,
                  style: { marginBottom: 0 },
                },
                a,
              ),
            ),
          ),
          r.a.createElement(l.a, { onCancel: s, onSubmit: b, style: { margin: 0 } }),
        );
      };
    },
    181: function(e, n, t) {
      'use strict';
      var a = t(28),
        r = t(12),
        c = t(24),
        i = t(2),
        o = t(0),
        u = t(304);
      function l(e) {
        var n = {};
        return (
          Object.keys(e).forEach(function(t) {
            e[t] && (n[t] = e[t].value || (!1 !== e[t].value && ''));
          }),
          Object(i.a)({}, n)
        );
      }
      n.a = function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          b = Object(o.useState)(Object(i.a)(Object(i.a)({}, l(n)), t)),
          s = Object(c.a)(b, 2),
          f = s[0],
          d = s[1],
          m = Object(o.useState)({}),
          p = Object(c.a)(m, 2),
          g = p[0],
          h = p[1],
          j = function() {
            var e = {};
            Object.keys(n).forEach(function(t) {
              n[t] && (e[t] = '');
            }),
              d(e),
              h({});
          },
          v = function(e) {
            var n = e.name,
              t = e.value;
            return d(function() {
              return Object(i.a)(Object(i.a)({}, f), {}, Object(r.a)({}, n, t));
            });
          },
          O = function(e, n) {
            var t = e.name,
              a = e.value,
              r = e.rules,
              c = void 0 === r ? [] : r,
              o = {},
              u = { length: null !== a && a.length ? a.length : 0 };
            return (
              c.forEach(function(e) {
                var n = e.regexp,
                  r = e.text,
                  c = e.param,
                  i = e.confirmField,
                  l = i ? f[i] : n,
                  b = c ? u[c] : a,
                  s = null === a || !new RegExp(l).test(b),
                  d = s ? 'error' : null,
                  m = s ? r : null;
                s && (o[t] = { validateStatus: d, help: m });
              }),
              n ||
                h(function(e) {
                  var n = Object(i.a)({}, e),
                    a = !Object.keys(o).length,
                    r = e[t];
                  return a && r && delete n[t], Object(i.a)(Object(i.a)({}, n), o);
                }),
              o
            );
          },
          x = function() {
            var e = {};
            return (
              Object.entries(f).forEach(function(t) {
                var a = Object(c.a)(t, 2),
                  r = a[0],
                  o = a[1],
                  u = n[r] && 'rules' in n[r] && n[r].rules;
                u && (e = Object(i.a)(Object(i.a)({}, e), O({ name: r, value: o, rules: u }, !0)));
              }),
              h(e),
              0 === Object.keys(e).length
            );
          },
          k = function(e) {
            var t = e.name,
              a = e.value,
              r = n[t] && 'rules' in n[t] && n[t].rules;
            r && O({ name: t, value: a, rules: r });
          },
          y = function() {
            e && x() && e(f, j);
          },
          E = function(e, n, t) {
            var a;
            if (!e) return !1;
            e && e.persist && e.persist();
            var c = (function() {
                var t = 'string' === typeof n && u.isMoment(e),
                  a = !!n && !u.isMoment(e),
                  r = a && Array.isArray(e),
                  c = !n && (e.target.checked || e.target.defaultChecked),
                  i = e.target && 'radio' === e.target.type;
                return t
                  ? 'datepicker'
                  : i
                  ? 'radio'
                  : c
                  ? 'checkbox'
                  : r
                  ? 'multiselect'
                  : a
                  ? 'select'
                  : 'input';
              })(),
              i = ((a = {}),
              Object(r.a)(a, 'datepicker', { name: n, value: t ? e.valueOf() : u(e).format() }),
              Object(r.a)(a, 'radio', e.target),
              Object(r.a)(a, 'checkbox', e.target),
              Object(r.a)(a, 'select', n && n.props),
              Object(r.a)(a, 'multiselect', {
                name: 'multiselect' === c && n[0] && n[0].props.name,
                value: e,
              }),
              Object(r.a)(a, 'input', e.target),
              a)[c];
            return { name: i.name, value: i.value, checked: i.checked, type: c };
          },
          w = function(e, n, t) {
            var a,
              c = E(e, n, t),
              i = c.name,
              o = c.value,
              u = c.checked,
              l = c.type,
              b =
                ((a = {}),
                Object(r.a)(a, 'datepicker', { name: i, value: o }),
                Object(r.a)(a, 'radio', { name: i, value: o }),
                Object(r.a)(a, 'checkbox', { name: i, value: u }),
                Object(r.a)(a, 'select', { name: i, value: o }),
                Object(r.a)(a, 'multiselect', { name: i, value: o }),
                Object(r.a)(a, 'input', { name: i, value: o }),
                a);
            v(b[l]), k(b[l]);
          },
          C = function(e, n) {
            var t = E(e, n).name,
              r = !!n ? n.props.name : t;
            if (g && g[r]) {
              g.name;
              var c = Object(a.a)(g, ['name']);
              h(c);
            }
          },
          I = function(e) {
            if (e) {
              var n = 13 === e.keyCode,
                t = 'textarea' === e.target.type;
              e && n && !t && y();
            }
          },
          z = function(e) {
            e && e.target && 'number' !== typeof e && k(e.target);
          },
          F = function(e) {
            e && e.preventDefault(), y();
          },
          N = Object(o.useCallback)(
            function() {
              Object.keys(f)[0] !== Object.keys(n)[0] && d(Object(i.a)(Object(i.a)({}, l(n)), t));
            },
            [n],
          );
        return (
          Object(o.useEffect)(N, [n]),
          {
            bindedInputFunctions: { onChange: w, onFocus: C, onBlur: z, onKeyDown: I },
            bindedSubmit: F,
            onClearForm: j,
            errors: g,
            currentForm: f,
            formLength: Object.keys(f).length,
          }
        );
      };
    },
    185: function(e, n, t) {
      'use strict';
      var a = t(28),
        r = t(0),
        c = t.n(r),
        i = t(10),
        o = t(6),
        u = t(305),
        l = t.n(u),
        b = t(44),
        s = t(329),
        f = t(142);
      function d() {
        var e = Object(i.a)(['\n  line-height: 1.2;\n  margin-top: 3px;\n  font-family: ', ';\n']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = Object(i.a)([
          '\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n    \n  .ant-checkbox-wrapper:hover .ant-checkbox-inner, \n  .ant-checkbox:hover .ant-checkbox-inner, \n  .ant-checkbox-input:focus + .ant-checkbox-inner {\n    border-color: ',
          ";\n  }\n    \n  .ant-checkbox-checked {\n    position:relative;\n    \n    &:after {\n      border-color: transparent;\n    }\n    \n    .ant-checkbox-inner {\n      border-color: transparent!important;\n    \n      &:after {\n        content: '';\n        position: absolute;\n        top: -2px;\n        left: 1px;\n        width: 31px;\n        height: 24px;\n        background: url('",
          "');\n        border: 0;\n        transform: none;\n      }\n    }\n  }\n  \n  .ant-checkbox-inner {\n    background: ",
          ';\n    border-color: transparent;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    position:relative;\n    width: 22px;\n    height: 24px;\n    margin-right: 10px;\n  }\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = Object(i.a)(['']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      o.b.div(p());
      var g = Object(o.b)(s.a)(m(), b.c, l.a, b.d),
        h = o.b.div(d(), f.b);
      n.a = function(e) {
        var n = e.label,
          t = Object(a.a)(e, ['label']);
        return c.a.createElement(
          g,
          Object.assign({}, t, { className: 'checkbox' }),
          c.a.createElement(h, null, n),
        );
      };
    },
    305: function(e, n, t) {
      e.exports = t.p + 'static/media/checkbox.afe5a233.svg';
    },
    87: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        c = t(35),
        i = t(113),
        o = (t(127), t(141)),
        u = t(2),
        l = t(28),
        b = t(10),
        s = t(6),
        f = t(44),
        d = t(330);
      function m() {
        var e = Object(b.a)([
          '\n  background: ',
          ';\n  height: 32px;\n  line-height: 32px;\n  min-width: 54px;\n  margin-right: 10px;\n',
        ]);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = Object(b.a)([
          '\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  .ant-switch-handle {\n    width: 28px;\n    height: 28px;\n    left: ',
          ';\n\n    &:before {\n      border-radius: 50%;\n    }\n  }\n',
        ]);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      var g = s.b.div(p(), function(e) {
          return e.checked ? 'calc(100% - 28px - 2px)' : '2px';
        }),
        h = Object(s.b)(d.a)(m(), function(e) {
          return e.checked ? f.c : 'rgba(0, 0, 0, 0.125)';
        }),
        j = function(e) {
          e.children, e.className;
          var n = e.name,
            t = e.label,
            a = e.checked,
            c = Object(l.a)(e, ['children', 'className', 'name', 'label', 'checked']),
            i = c.onChange;
          return r.a.createElement(
            g,
            { checked: a },
            r.a.createElement(
              h,
              Object.assign({}, c, {
                onClick: function() {},
                checked: a,
                onChange: function(e, t) {
                  i(
                    Object(u.a)(
                      Object(u.a)({}, t),
                      {},
                      {
                        target: Object(u.a)(
                          Object(u.a)({}, t.target),
                          {},
                          { checked: e, name: n, value: '' },
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
        v = t(185),
        O = t(325),
        x = t(323),
        k = t(324),
        y = t(29),
        E = t(126),
        w = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(y.b, { to: '/1.pdf' }, c.k),
            ' \xa0',
            c.l,
          );
        },
        C = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(y.b, { to: '/2.pdf' }, c.m),
            ' \xa0',
            c.n,
          );
        },
        I = function(e) {
          var n = e.errors,
            t = e.currentForm,
            a = e.bindedSubmit,
            u = e.bindedInputFunctions,
            l = e.goToPrevStage;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(i.b, { style: { textAlign: 'left' } }, c.g),
            r.a.createElement(
              O.a.Item,
              Object.assign({}, n.firstName, { label: '' }),
              r.a.createElement(
                o.a,
                Object.assign(
                  { name: 'firstName', size: 'large', placeholder: c.B, defaultValue: t.firstName },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              O.a.Item,
              Object.assign({}, n.lastName, { label: '' }),
              r.a.createElement(
                o.a,
                Object.assign(
                  { name: 'lastName', size: 'large', placeholder: c.C, defaultValue: t.lastName },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              O.a.Item,
              Object.assign({}, n.cardNumber, { label: '' }),
              r.a.createElement(
                o.a,
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
              x.a,
              { gutter: '12', style: { flexWrap: 'nowrap' } },
              r.a.createElement(
                k.a,
                null,
                r.a.createElement(
                  O.a.Item,
                  Object.assign({}, n.cardMonth, { label: '' }),
                  r.a.createElement(
                    o.a,
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
                k.a,
                null,
                r.a.createElement(
                  O.a.Item,
                  Object.assign({}, n.cardYear, { label: '' }),
                  r.a.createElement(
                    o.a,
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
                k.a,
                null,
                r.a.createElement(
                  O.a.Item,
                  Object.assign({}, n.card, { label: '' }),
                  r.a.createElement(
                    o.a,
                    Object.assign(
                      { name: 'card', size: 'large', placeholder: c.w, defaultValue: t.card },
                      u,
                    ),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              O.a.Item,
              Object.assign({}, n.email, { label: '' }),
              r.a.createElement(
                o.a,
                Object.assign(
                  { name: 'email', size: 'large', placeholder: c.A, defaultValue: t.email },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              O.a.Item,
              Object.assign({}, n.address, { label: '' }),
              r.a.createElement(
                o.a,
                Object.assign(
                  { name: 'address', size: 'large', placeholder: c.v, defaultValue: t.address },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              O.a.Item,
              Object.assign({}, n.isResident, { label: '', style: { marginTop: '10px' } }),
              r.a.createElement(
                j,
                Object.assign(
                  { name: 'isResident', size: 'large', label: c.p, checked: t.isResident },
                  u,
                ),
              ),
            ),
            t.isResident &&
              r.a.createElement(
                O.a.Item,
                Object.assign({}, n.nationalId, { label: '' }),
                r.a.createElement(
                  o.a,
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
              O.a.Item,
              Object.assign({}, n.check1, { label: '' }),
              r.a.createElement(
                v.a,
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
              O.a.Item,
              Object.assign({}, n.check2, { label: '' }),
              r.a.createElement(
                v.a,
                Object.assign(
                  {
                    name: 'check2',
                    size: 'large',
                    label: r.a.createElement(C, null),
                    defaultChecked: t.check2,
                  },
                  u,
                ),
              ),
            ),
            r.a.createElement(
              O.a.Item,
              Object.assign({}, n.check3, { label: '' }),
              r.a.createElement(
                v.a,
                Object.assign(
                  { name: 'check3', size: 'large', label: c.o, defaultChecked: t.check3 },
                  u,
                ),
              ),
            ),
            r.a.createElement(E.a, { onCancel: l, onSubmit: a, submitTitle: c.c }),
          );
        },
        z = t(326);
      function F() {
        var e = Object(b.a)(['\n  width: 50%;\n']);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = Object(b.a)([
          '\n  width: 100%;\n  overflow-x: visible;\n  overflow-y: visible;\n\n  .ant-tabs-nav-list {\n    width: 100%;\n  }\n\n  .ant-tabs-tabpane {\n    width: 100%;\n  }\n\n  .ant-tabs-tab {\n    width: 50%;\n    margin: 0;\n    justify-content: center;\n    text-transform: uppercase;\n    color: ',
          ';\n    font-size: 16px;\n  }\n\n  .ant-tabs-tab-active .ant-tabs-tab-btn {\n    color: ',
          ';\n  }\n\n  .ant-tabs-nav::before,\n  .ant-tabs-nav::after {\n    border-color: ',
          ';\n  }\n\n  .ant-tabs-ink-bar {\n    background: ',
          ';\n  }\n',
        ]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      var S = z.a.TabPane,
        V = Object(s.b)(z.a)(N(), f.a, f.c, f.a, f.c),
        T = Object(s.b)(S)(F()),
        R = t(180);
      n.default = function(e) {
        var n = e.stage,
          t = e.goToStage;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(i.b, null, c.t),
          r.a.createElement(
            V,
            {
              defaultActiveKey: n,
              onChange: function(e) {
                return t(Number(e));
              },
              style: { marginTop: '30px' },
            },
            r.a.createElement(T, { tab: c.f, key: 2 }, r.a.createElement(I, e)),
            r.a.createElement(T, { tab: c.h, key: 4 }, r.a.createElement(R.a, e)),
          ),
        );
      };
    },
  },
]);
//# sourceMappingURL=1.5f5e546b.chunk.js.map
