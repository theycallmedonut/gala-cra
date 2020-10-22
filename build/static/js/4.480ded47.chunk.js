(this.webpackJsonpi = this.webpackJsonpi || []).push([
  [4, 5],
  {
    101: function(e, n, t) {
      'use strict';
      var a = t(18),
        r = t(0),
        c = t.n(r),
        i = t(9),
        o = t(6),
        u = t(29),
        l = t(309);
      function s() {
        var e = Object(i.a)([
          '\n  width: 100%;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 14px 10px;\n  background: ',
          ';\n  color: ',
          ';\n  border-radius: 10px;\n  border-color: transparent;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));\n',
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      var b = Object(o.b)(l.a)(s(), u.d, u.a);
      n.a = function(e) {
        var n = e.type,
          t = void 0 === n ? 'text' : n,
          r = Object(a.a)(e, ['type']);
        return c.a.createElement(b, Object.assign({ type: t }, r));
      };
    },
    102: function(e, n, t) {
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
    121: function(e, n, t) {
      'use strict';
      var a = t(0),
        r = t.n(a),
        c = t(306),
        i = t(84),
        o = t(22),
        u = t(101),
        l = t(94);
      n.a = function(e) {
        var n = e.errors,
          t = e.currentForm,
          a = e.bindedInputFunctions,
          s = e.bindedSubmit,
          b = e.onCancel;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(i.b, null, o.u),
          r.a.createElement(
            c.a.Item,
            Object.assign({}, n.phone, { label: '' }),
            r.a.createElement(
              u.a,
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
            Object.assign({}, n.email, { label: '' }),
            r.a.createElement(
              u.a,
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
          r.a.createElement(l.a, { onCancel: b, onSubmit: s, style: { margin: 0 } }),
        );
      };
    },
    123: function(e, n, t) {
      'use strict';
      var a = t(18),
        r = t(0),
        c = t.n(r),
        i = t(9),
        o = t(6),
        u = t(311),
        l = t(134),
        s = t.n(l),
        b = t(29),
        f = t(102);
      function m() {
        var e = Object(i.a)(['\n  line-height: 1.2;\n  margin-top: 3px;\n  font-family: ', ';\n']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = Object(i.a)([
          '\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n    \n  .ant-checkbox-wrapper:hover .ant-checkbox-inner, \n  .ant-checkbox:hover .ant-checkbox-inner, \n  .ant-checkbox-input:focus + .ant-checkbox-inner {\n    border-color: ',
          ";\n  }\n    \n  .ant-checkbox-checked {\n    position:relative;\n    \n    &:after {\n      border-color: transparent;\n    }\n    \n    .ant-checkbox-inner {\n      border-color: transparent!important;\n    \n      &:after {\n        content: '';\n        position: absolute;\n        top: -2px;\n        left: 1px;\n        width: 31px;\n        height: 24px;\n        background: url('",
          "');\n        border: 0;\n        transform: none;\n      }\n    }\n  }\n  \n  .ant-checkbox-inner {\n    background: ",
          ';\n    border-color: transparent;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    position:relative;\n    width: 22px;\n    height: 24px;\n    margin-right: 10px;\n  }\n',
        ]);
        return (
          (d = function() {
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
      var g = Object(o.b)(u.a)(d(), b.c, s.a, b.d),
        x = o.b.div(m(), f.b);
      n.a = function(e) {
        var n = e.label,
          t = Object(a.a)(e, ['label']);
        return c.a.createElement(
          g,
          Object.assign({}, t, { className: 'checkbox' }),
          c.a.createElement(x, null, n),
        );
      };
    },
    134: function(e, n, t) {
      e.exports = t.p + 'static/media/checkbox.afe5a233.svg';
    },
    165: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(0),
        r = t.n(a),
        c = t(22),
        i = t(306),
        o = t(304),
        u = t(305),
        l = t(19),
        s = t(84),
        b = t(101),
        f = t(1),
        m = t(18),
        d = t(9),
        p = t(6),
        g = t(312),
        x = t(29);
      function v() {
        var e = Object(d.a)([
          '\n  background: ',
          ';\n  height: 32px;\n  line-height: 32px;\n  min-width: 54px;\n  margin-right: 10px;\n',
        ]);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(d.a)([
          '\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  .ant-switch-handle {\n    width: 28px;\n    height: 28px;\n    left: ',
          ';\n\n    &:before {\n      border-radius: 50%;\n    }\n  }\n',
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      var j = p.b.div(h(), function(e) {
          return e.checked ? 'calc(100% - 28px - 2px)' : '2px';
        }),
        O = Object(p.b)(g.a)(v(), function(e) {
          return e.checked ? x.c : 'rgba(0, 0, 0, 0.125)';
        }),
        y = function(e) {
          e.children, e.className;
          var n = e.name,
            t = e.label,
            a = e.checked,
            c = Object(m.a)(e, ['children', 'className', 'name', 'label', 'checked']),
            i = c.onChange;
          return r.a.createElement(
            j,
            { checked: a },
            r.a.createElement(
              O,
              Object.assign({}, c, {
                onClick: function() {},
                checked: a,
                onChange: function(e, t) {
                  i(
                    Object(f.a)(
                      Object(f.a)({}, t),
                      {},
                      {
                        target: Object(f.a)(
                          Object(f.a)({}, t.target),
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
        E = t(123),
        k = t(94),
        w = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(l.b, { to: '/1.pdf' }, c.k),
            ' \xa0',
            c.l,
          );
        },
        I = function() {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(l.b, { to: '/2.pdf' }, c.m),
            ' \xa0',
            c.n,
          );
        },
        S = function(e) {
          var n = e.errors,
            t = e.currentForm,
            a = e.bindedSubmit,
            l = e.bindedInputFunctions,
            f = e.goToPrevStage;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(s.b, { style: { textAlign: 'left', margin: '0 0 10px' } }, c.g),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.firstName, { label: '' }),
              r.a.createElement(
                b.a,
                Object.assign(
                  { name: 'firstName', size: 'large', placeholder: c.B, defaultValue: t.firstName },
                  l,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.lastName, { label: '' }),
              r.a.createElement(
                b.a,
                Object.assign(
                  { name: 'lastName', size: 'large', placeholder: c.C, defaultValue: t.lastName },
                  l,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.cardNumber, { label: '' }),
              r.a.createElement(
                b.a,
                Object.assign(
                  {
                    name: 'cardNumber',
                    size: 'large',
                    placeholder: c.y,
                    defaultValue: t.cardNumber,
                  },
                  l,
                ),
              ),
            ),
            r.a.createElement(
              o.a,
              { gutter: '12', style: { flexWrap: 'nowrap' } },
              r.a.createElement(
                u.a,
                null,
                r.a.createElement(
                  i.a.Item,
                  Object.assign({}, n.cardMonth, { label: '' }),
                  r.a.createElement(
                    b.a,
                    Object.assign(
                      {
                        name: 'cardMonth',
                        size: 'large',
                        placeholder: c.x,
                        defaultValue: t.cardMonth,
                      },
                      l,
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                u.a,
                null,
                r.a.createElement(
                  i.a.Item,
                  Object.assign({}, n.cardYear, { label: '' }),
                  r.a.createElement(
                    b.a,
                    Object.assign(
                      {
                        name: 'cardYear',
                        size: 'large',
                        placeholder: c.z,
                        defaultValue: t.cardYear,
                      },
                      l,
                    ),
                  ),
                ),
              ),
              r.a.createElement(
                u.a,
                null,
                r.a.createElement(
                  i.a.Item,
                  Object.assign({}, n.card, { label: '' }),
                  r.a.createElement(
                    b.a,
                    Object.assign(
                      { name: 'card', size: 'large', placeholder: c.w, defaultValue: t.card },
                      l,
                    ),
                  ),
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.email, { label: '' }),
              r.a.createElement(
                b.a,
                Object.assign(
                  { name: 'email', size: 'large', placeholder: c.A, defaultValue: t.email },
                  l,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.address, { label: '' }),
              r.a.createElement(
                b.a,
                Object.assign(
                  { name: 'address', size: 'large', placeholder: c.v, defaultValue: t.address },
                  l,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.isResident, { label: '', style: { marginTop: '10px' } }),
              r.a.createElement(
                y,
                Object.assign(
                  { name: 'isResident', size: 'large', label: c.p, checked: t.isResident },
                  l,
                ),
              ),
            ),
            t.isResident &&
              r.a.createElement(
                i.a.Item,
                Object.assign({}, n.nationalId, { label: '' }),
                r.a.createElement(
                  b.a,
                  Object.assign(
                    {
                      name: 'nationalId',
                      size: 'large',
                      placeholder: c.E,
                      defaultValue: t.nationalId,
                    },
                    l,
                  ),
                ),
              ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.check1, { label: '' }),
              r.a.createElement(
                E.a,
                Object.assign(
                  {
                    name: 'check1',
                    size: 'large',
                    label: r.a.createElement(w, null),
                    defaultChecked: t.check1,
                  },
                  l,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.check2, { label: '' }),
              r.a.createElement(
                E.a,
                Object.assign(
                  {
                    name: 'check2',
                    size: 'large',
                    label: r.a.createElement(I, null),
                    defaultChecked: t.check2,
                  },
                  l,
                ),
              ),
            ),
            r.a.createElement(
              i.a.Item,
              Object.assign({}, n.check3, { label: '' }),
              r.a.createElement(
                E.a,
                Object.assign(
                  { name: 'check3', size: 'large', label: c.o, defaultChecked: t.check3 },
                  l,
                ),
              ),
            ),
            r.a.createElement(k.a, { onCancel: f, onSubmit: a, submitTitle: c.c }),
          );
        },
        F = t(307);
      function z() {
        var e = Object(d.a)(['\n  width: 50%;\n']);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = Object(d.a)([
          '\n  width: 100%;\n  overflow-x: visible;\n  overflow-y: visible;\n\n  .ant-tabs-nav-list {\n    width: 100%;\n  }\n\n  .ant-tabs-tabpane {\n    width: 100%;\n  }\n\n  .ant-tabs-tab {\n    width: 50%;\n    margin: 0;\n    justify-content: center;\n    text-transform: uppercase;\n    color: ',
          ';\n    font-size: 16px;\n  }\n\n  .ant-tabs-tab-active .ant-tabs-tab-btn {\n    color: ',
          ';\n  }\n\n  .ant-tabs-nav::before,\n  .ant-tabs-nav::after {\n    border-color: ',
          ';\n  }\n\n  .ant-tabs-ink-bar {\n    background: ',
          ';\n  }\n',
        ]);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      var D = F.a.TabPane,
        N = Object(p.b)(F.a)(C(), x.a, x.c, x.a, x.c),
        M = Object(p.b)(D)(z()),
        q = t(121);
      n.default = function(e) {
        var n = e.stage,
          t = e.goToStage;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(s.b, null, c.t),
          r.a.createElement(
            N,
            {
              defaultActiveKey: n,
              onChange: function(e) {
                return t(Number(e));
              },
              style: { marginTop: '30px' },
            },
            r.a.createElement(M, { tab: c.f, key: 2 }, r.a.createElement(S, e)),
            r.a.createElement(M, { tab: c.h, key: 4 }, r.a.createElement(q.a, e)),
          ),
        );
      };
    },
    297: function(e, n, t) {
      e.exports = t.p + 'static/media/gold-label.bb046078.svg';
    },
    298: function(e, n, t) {
      e.exports = t.p + 'static/media/card-bg-xs.d88ad510.png';
    },
    308: function(e, n, t) {
      'use strict';
      t.r(n);
      var a = t(1),
        r = t(166),
        c = t(0),
        i = t.n(c),
        o = t(4),
        u = t(306),
        l = t(16),
        s = t(22),
        b = t(24),
        f = t(84),
        m = t(9),
        d = t(6),
        p = t(29),
        g = t(30);
      function x() {
        var e = Object(m.a)([
          '\n  width: 92px;\n  height: 66px;\n  margin: 6px;\n  border-radius: 10px;\n  background: ',
          ';\n  color: ',
          ';\n  text-transform: uppercase;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 14px;\n  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));\n\n  b {\n    display: block;\n    font-size: 25px;\n    line-height: 1;\n  }\n',
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = Object(m.a)(['\n    padding-right: 0;\n    padding-left: 0;\n  ']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(m.a)([
          '\n  display: flex;\n  flex-flow: wrap;\n  padding: 18px 36px;\n\n  ',
          '\n',
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      var j = d.b.div(h(), g.b.tablet(v())),
        O = d.b.div(
          x(),
          function(e) {
            return e.isActive ? p.c : p.d;
          },
          function(e) {
            return e.isActive ? p.d : p.a;
          },
        ),
        y = function(e) {
          var n = e.qty,
            t = e.current,
            a = e.text,
            r = e.bindedInputFunctions,
            o = Object(c.useRef)();
          return i.a.createElement(
            u.a.Item,
            { style: { margin: 0 } },
            i.a.createElement(
              O,
              {
                isActive: t === n,
                onClick: function() {
                  return o.current.click();
                },
              },
              i.a.createElement(
                'input',
                Object.assign(
                  { ref: o, type: 'radio', name: 'qty', value: n, style: { display: 'none' } },
                  r,
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
              { qty: '5', text: s.r },
              { qty: '10', text: s.r },
              { qty: '100', text: s.r },
              { qty: 'more', text: s.s },
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
        k = t(32),
        w = t(101),
        I = t(94),
        S = t(121),
        F = t(123),
        z = function(e) {
          var n = e.errors,
            t = e.currentForm,
            a = e.bindedSubmit,
            r = e.bindedInputFunctions,
            c = e.title,
            o = e.onCancel;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(f.b, null, Object(k.a)(c)),
            i.a.createElement(
              u.a.Item,
              Object.assign({}, n.phone, { label: '' }),
              i.a.createElement(
                w.a,
                Object.assign(
                  { type: 'text', name: 'phone', placeholder: s.G, defaultValue: t.phone },
                  r,
                ),
              ),
            ),
            i.a.createElement(
              u.a.Item,
              Object.assign({}, n.name, { label: '' }),
              i.a.createElement(
                w.a,
                Object.assign(
                  { type: 'text', name: 'name', placeholder: s.D, defaultValue: t.name },
                  r,
                ),
              ),
            ),
            i.a.createElement(
              u.a.Item,
              Object.assign({}, n.isAnonymous, { label: '' }),
              i.a.createElement(
                F.a,
                Object.assign(
                  { label: s.M, name: 'isAnonymous', defaultChecked: t.isAnonymous },
                  r,
                ),
              ),
            ),
            i.a.createElement(I.a, { onSubmit: a, submitTitle: s.e, onCancel: o }),
          );
        },
        C = t(20),
        D = { setQty: C.e, setIsDetailsStage: C.c },
        N = Object(l.b)(function(e) {
          return { isDetailsStage: e.basic.isDetailsStage };
        }, D)(function(e) {
          var n = e.bindedInputFunctions,
            t = e.setIsDetailsStage,
            a = e.goToNextStage,
            r = e.isDetailsStage,
            o = e.currentForm,
            l = e.errors,
            b = e.setQty,
            m = e.title,
            d = o.qty,
            p = 'more' === d,
            g = Object(c.useCallback)(
              function() {
                b({ qty: d });
              },
              [d],
            );
          return (
            Object(c.useEffect)(g, [d]),
            r
              ? i.a.createElement(
                  z,
                  Object.assign(
                    {
                      title: s.N,
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
                  i.a.createElement(f.b, null, Object(k.a)(m)),
                  i.a.createElement(f.a, null, Object(k.a)(s.K)),
                  i.a.createElement(E, { current: d, bindedInputFunctions: n }),
                  p
                    ? i.a.createElement(S.a, Object.assign({ afterSubmitAction: a }, e))
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          u.a.Item,
                          Object.assign({}, l.qty, { label: '' }),
                          i.a.createElement(
                            w.a,
                            Object.assign({ name: 'qty', placeholder: s.F, value: o.qty }, n),
                          ),
                        ),
                        i.a.createElement(I.a, {
                          onSubmit: function() {
                            return t(!0);
                          },
                          submitTitle: s.d,
                          style: { margin: 0 },
                        }),
                      ),
                )
          );
        }),
        M = t(165),
        q = t(18),
        T = t(14),
        A = t(163),
        V = t.n(A);
      function R(e) {
        var n = {};
        return (
          Object.keys(e).forEach(function(t) {
            e[t] && (n[t] = e[t].value || (!1 !== e[t].value && ''));
          }),
          Object(a.a)({}, n)
        );
      }
      var Y = function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = Object(c.useState)(Object(a.a)(Object(a.a)({}, R(n)), t)),
            o = Object(r.a)(i, 2),
            u = o[0],
            l = o[1],
            s = Object(c.useState)({}),
            b = Object(r.a)(s, 2),
            f = b[0],
            m = b[1],
            d = function() {
              var e = {};
              Object.keys(n).forEach(function(t) {
                n[t] && (e[t] = '');
              }),
                l(e),
                m({});
            },
            p = function(e) {
              var n = e.name,
                t = e.value;
              return l(function() {
                return Object(a.a)(Object(a.a)({}, u), {}, Object(T.a)({}, n, t));
              });
            },
            g = function(e, n) {
              var t = e.name,
                r = e.value,
                c = e.rules,
                i = void 0 === c ? [] : c,
                o = {},
                l = { length: null !== r && r.length ? r.length : 0 };
              return (
                i.forEach(function(e) {
                  var n = e.regexp,
                    a = e.text,
                    c = e.param,
                    i = e.confirmField,
                    s = i ? u[i] : n,
                    b = c ? l[c] : r,
                    f = null === r || !new RegExp(s).test(b),
                    m = f ? 'error' : null,
                    d = f ? a : null;
                  f && (o[t] = { validateStatus: m, help: d });
                }),
                n ||
                  m(function(e) {
                    var n = Object(a.a)({}, e),
                      r = !Object.keys(o).length,
                      c = e[t];
                    return r && c && delete n[t], Object(a.a)(Object(a.a)({}, n), o);
                  }),
                o
              );
            },
            x = function() {
              var e = {};
              return (
                Object.entries(u).forEach(function(t) {
                  var c = Object(r.a)(t, 2),
                    i = c[0],
                    o = c[1],
                    u = n[i] && 'rules' in n[i] && n[i].rules;
                  u &&
                    (e = Object(a.a)(Object(a.a)({}, e), g({ name: i, value: o, rules: u }, !0)));
                }),
                m(e),
                0 === Object.keys(e).length
              );
            },
            v = function(e) {
              var t = e.name,
                a = e.value,
                r = n[t] && 'rules' in n[t] && n[t].rules;
              r && g({ name: t, value: a, rules: r });
            },
            h = function() {
              e && x() && e(u, d);
            },
            j = function(e, n, t) {
              var a;
              if (!e) return !1;
              e && e.persist && e.persist();
              var r = (function() {
                  var t = 'string' === typeof n && A.isMoment(e),
                    a = !!n && !A.isMoment(e),
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
                c = ((a = {}),
                Object(T.a)(a, 'datepicker', { name: n, value: t ? e.valueOf() : A(e).format() }),
                Object(T.a)(a, 'radio', e.target),
                Object(T.a)(a, 'checkbox', e.target),
                Object(T.a)(a, 'select', n && n.props),
                Object(T.a)(a, 'multiselect', {
                  name: 'multiselect' === r && n[0] && n[0].props.name,
                  value: e,
                }),
                Object(T.a)(a, 'input', e.target),
                a)[r];
              return { name: c.name, value: c.value, checked: c.checked, type: r };
            },
            O = function(e, n, t) {
              var a,
                r = j(e, n, t),
                c = r.name,
                i = r.value,
                o = r.checked,
                u = r.type,
                l =
                  ((a = {}),
                  Object(T.a)(a, 'datepicker', { name: c, value: i }),
                  Object(T.a)(a, 'radio', { name: c, value: i }),
                  Object(T.a)(a, 'checkbox', { name: c, value: o }),
                  Object(T.a)(a, 'select', { name: c, value: i }),
                  Object(T.a)(a, 'multiselect', { name: c, value: i }),
                  Object(T.a)(a, 'input', { name: c, value: i }),
                  a);
              p(l[u]), v(l[u]);
            },
            y = function(e, n) {
              var t = j(e, n).name,
                a = !!n ? n.props.name : t;
              if (f && f[a]) {
                f.name;
                var r = Object(q.a)(f, ['name']);
                m(r);
              }
            },
            E = function(e) {
              if (e) {
                var n = 13 === e.keyCode,
                  t = 'textarea' === e.target.type;
                e && n && !t && h();
              }
            },
            k = function(e) {
              e && e.target && 'number' !== typeof e && v(e.target);
            },
            w = function(e) {
              e && e.preventDefault(), h();
            },
            I = Object(c.useCallback)(
              function() {
                Object.keys(u)[0] !== Object.keys(n)[0] && l(Object(a.a)(Object(a.a)({}, R(n)), t));
              },
              [n],
            );
          return (
            Object(c.useEffect)(I, [n]),
            {
              bindedInputFunctions: { onChange: O, onFocus: y, onBlur: k, onKeyDown: E },
              bindedSubmit: w,
              onClearForm: d,
              errors: f,
              currentForm: u,
              formLength: Object.keys(u).length,
            }
          );
        },
        B = { text: 'Field must be filled', regexp: new RegExp('^.+$', 'gm') },
        P = { text: 'Must be number', regexp: new RegExp('^[0-9]+$', 'g') },
        J =
          (new RegExp(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'gm',
          ),
          t(297)),
        K = t.n(J);
      function W() {
        var e = Object(m.a)(['\n  font-size: 14px;\n']);
        return (
          (W = function() {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = Object(m.a)(['\n  font-size: 16px;\n']);
        return (
          ($ = function() {
            return e;
          }),
          e
        );
      }
      function G() {
        var e = Object(m.a)([
          "\n  background: url('",
          "');\n  width: 265px;\n  height: 61px;\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.2;\n",
        ]);
        return (
          (G = function() {
            return e;
          }),
          e
        );
      }
      var L = d.b.div(G(), K.a),
        Q = d.b.div($()),
        Z = d.b.div(W()),
        H = Object(c.memo)(
          Object(l.b)(function(e) {
            return { formsData: e.form.formsData };
          }, {})(function(e) {
            var n = e.formsData,
              t = e.className,
              a = e.style,
              r = n.firstName,
              c = n.lastName,
              o = n.isAnonymous,
              u = V()().format('D MMMM YYYY'),
              l = !(o || (!r && !c));
            return (
              console.log(
                '%c::',
                'background: #F2BE22; color: #333; border-radius: 5px; padding: 2px 5px;',
                l,
                o,
                r,
                c,
              ),
              i.a.createElement(
                L,
                { className: t, style: a },
                l && i.a.createElement(Q, null, 'from '.concat(r, ' ').concat(c)),
                i.a.createElement(Z, null, u),
              )
            );
          }),
        );
      function U() {
        var e = Object(m.a)([
          '\n  margin: 30px 0;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 30px;\n  text-align: center;\n  text-transform: uppercase;\n',
        ]);
        return (
          (U = function() {
            return e;
          }),
          e
        );
      }
      function X() {
        var e = Object(m.a)(['\n  margin-bottom: 50px;\n']);
        return (
          (X = function() {
            return e;
          }),
          e
        );
      }
      var _ = Object(d.b)(f.b)(X()),
        ee = d.b.div(U()),
        ne = function(e) {
          var n = e.onSubmit,
            t = e.beforeSubmit;
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(_, null, s.J),
            i.a.createElement(H, { style: { margin: '0 auto' } }),
            i.a.createElement(ee, null, Object(k.a)(s.I)),
            i.a.createElement(I.a, {
              onSubmit: function() {
                t(), n();
              },
              submitTitle: s.a,
            }),
          );
        },
        te = t(307),
        ae = t(102),
        re = t(298),
        ce = t.n(re);
      function ie() {
        var e = Object(m.a)([
          '\n  background-size: cover;\n  width: 138px;\n  height: 31px;\n  margin: 0 auto;\n  > * {\n    font-size: 10px;\n    line-height: 1.2;\n  }\n',
        ]);
        return (
          (ie = function() {
            return e;
          }),
          e
        );
      }
      function oe() {
        var e = Object(m.a)([
          '\n  font-size: 14px;\n  line-height: 1;\n  color: ',
          ';\n  opacity: 0.5;\n  text-transform: uppercase;\n  text-align: center;\n',
        ]);
        return (
          (oe = function() {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(m.a)([
          '\n  font-size: 52px;\n  text-align: center;\n  line-height: 1;\n  font-weight: bold;\n  color: ',
          ';\n',
        ]);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(m.a)([
          '\n  text-transform: uppercase;\n  color: ',
          ';\n  text-align: right;\n  opacity: 0.5;\n  font-weight: bold;\n  font-size: 11px;\n  margin: 5px 8px 0 0;\n  padding-top: 5px;\n',
        ]);
        return (
          (le = function() {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = Object(m.a)([
          '\n  position: relative;\n  margin-bottom: 10px;\n  margin-top: 42px;\n  width: 155px;\n  height: 100px;\n  background: url(',
          ') center center no-repeat;\n',
        ]);
        return (
          (se = function() {
            return e;
          }),
          e
        );
      }
      function be() {
        var e = Object(m.a)(['\n  justify-content: center;\n  text-align: center;\n']);
        return (
          (be = function() {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(m.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n',
        ]);
        return (
          (fe = function() {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = Object(m.a)(['\n    margin-top: 50px;\n  ']);
        return (
          (me = function() {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = Object(m.a)([
          '\n  position: relative;\n  margin: 30px auto;\n\n  ',
          ";\n\n  .ant-row {\n    background: linear-gradient(0deg, #979797 -2.35%, rgba(151, 151, 151, 0) 97.83%);\n    background-position: 0 10px;\n    background-size: 100% 130px;\n    background-repeat: no-repeat;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .ant-tabs-content {\n    position: relative;\n    z-index: 0;\n\n    &:after {\n      content: '';\n      position: absolute;\n      top: 0px;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      //box-shadow: inset 0 0 70px 40px rgba(0, 0, 0, 0.5);\n      background: linear-gradient(\n        90deg,\n        #111111 0.04%,\n        rgba(17, 17, 17, 0) 35.39%,\n        rgba(17, 17, 17, 0) 64.48%,\n        #111111 99.96%\n      );\n    }\n  }\n  .ant-tabs-nav-list {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 45px;\n    background: rgba(224, 225, 228, 0.9);\n\n    .ant-tabs-tab {\n      margin: 0;\n      padding: 20px;\n      border-radius: 45px;\n      background: none;\n      border: 0;\n\n      &.ant-tabs-tab-active {\n        background: ",
          ';\n        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n        border-radius: 45px;\n\n        > .ant-tabs-tab-btn {\n          color: ',
          ';\n        }\n      }\n\n      > .ant-tabs-tab-btn {\n        font-size: 16px;\n        line-height: 1;\n        font-weight: bold;\n        color: ',
          ';\n        font-family: ',
          ';\n      }\n    }\n  }\n\n  .ant-tabs-nav:before {\n    content: none;\n  }\n\n  .ant-tabs-nav-wrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    &:before,\n    &:after {\n      content: none;\n    }\n  }\n',
        ]);
        return (
          (de = function() {
            return e;
          }),
          e
        );
      }
      var pe = Object(d.b)(te.a)(de(), g.b.desktop(me()), p.d, p.c, p.b, ae.b),
        ge = d.b.div(fe()),
        xe = d.b.div(be()),
        ve = d.b.div(se(), ce.a),
        he = d.b.div(le(), p.c),
        je = d.b.div(ue(), p.c),
        Oe = d.b.div(oe(), p.c),
        ye = Object(d.b)(H)(ie()),
        Ee = t(304),
        ke = t(305),
        we = function(e) {
          var n = e.title,
            t = e.date,
            a = e.qty;
          return i.a.createElement(
            xe,
            null,
            i.a.createElement(
              ve,
              null,
              i.a.createElement(he, null, s.H),
              i.a.createElement(je, null, Math.floor(55 * Math.random() + 5)),
              i.a.createElement(Oe, null, 1 === a ? s.q : s.r),
            ),
            i.a.createElement(ye, { title: n, date: t }),
          );
        },
        Ie = Object(l.b)(function(e) {
          return { isMobile: e.basic.isMobile };
        }, {})(function(e) {
          var n = e.title,
            t = e.list,
            a = e.isMobile,
            r = Object(c.useCallback)(
              function() {
                var e = window.innerWidth - 30,
                  n = a ? 166 : 190;
                return Math.floor(e / n);
              },
              [a, window.innerWidth],
            ),
            o = Object(c.useMemo)(
              function() {
                for (var e = r(), n = [], a = 0, c = t.length; a < c; a += e)
                  n.push(t.slice(a, a + e));
                return n;
              },
              [t, a],
            );
          return i.a.createElement(
            ge,
            { tab: n },
            o.map(function(e, n) {
              return i.a.createElement(
                Ee.a,
                { key: n, gutter: 10 },
                e.map(function(e, n) {
                  return i.a.createElement(ke.a, { key: n }, i.a.createElement(we, e));
                }),
              );
            }),
          );
        }),
        Se = te.a.TabPane,
        Fe = { getCards: C.a },
        ze = Object(l.b)(function(e) {
          return { cards: e.basic.cards };
        }, Fe)(function(e) {
          var n = e.getCards,
            t = e.cards;
          return (
            Object(c.useEffect)(
              function() {
                t.length || n();
              },
              [t],
            ),
            i.a.createElement(
              pe,
              { type: 'card' },
              t.map(function(e) {
                return i.a.createElement(
                  Se,
                  { key: e.title, tab: e.title },
                  i.a.createElement(Ie, e),
                );
              }),
            )
          );
        }),
        Ce = t(3),
        De = {
          1: {
            qty: { value: '', rules: [B, P] },
            phone: { value: '', rules: [B] },
            name: { value: '', rules: [] },
            isAnonymous: { value: !0, rules: [] },
          },
          2: {
            firstName: { value: '', rules: [B] },
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
          4: { phone: { value: '', rules: [B] }, email: { value: '', rules: [] } },
        },
        Ne = {
          saveFormsData: function(e) {
            return function(n) {
              return n({ type: Ce.l, payload: e });
            };
          },
          clearFormsData: function(e) {
            return function(n) {
              return n({ type: Ce.h, payload: e });
            };
          },
          setIsDetailsStage: C.c,
        };
      n.default = Object(c.memo)(
        Object(l.b)(function(e) {
          var n = e.basic,
            t = e.form;
          return {
            qty: n.qty,
            isMobile: n.isMobile,
            isDetailsStage: n.isDetailsStage,
            formsData: t.formsData,
          };
        }, Ne)(
          Object(o.g)(function(e) {
            var n = e.qty,
              t = e.isMobile,
              o = e.formsData,
              l = e.saveFormsData,
              m = e.clearFormsData,
              d = e.isDetailsStage,
              p = e.setIsDetailsStage,
              g = Object(c.useState)(1),
              x = Object(r.a)(g, 2),
              v = x[0],
              h = x[1],
              j = Object(c.useState)({}),
              O = Object(r.a)(j, 2),
              y = O[0],
              E = O[1],
              k = function() {
                return h(v + 1);
              },
              w = function() {
                return h(v - 1);
              },
              I = Y(
                {
                  1: function() {
                    return Object(b.e)(y).then(k);
                  },
                  2: function() {
                    return Object(b.d)(y).then(k);
                  },
                  3: function() {
                    return h(1);
                  },
                  4: function() {
                    return Object(b.c)(y).then(w);
                  },
                }[v],
                De[v],
              ),
              S = I.onClearForm,
              F = I.bindedSubmit;
            return (
              Object(c.useEffect)(
                function() {
                  E(I.currentForm), l(Object(a.a)(Object(a.a)({}, o), I.currentForm));
                },
                [I.currentForm],
              ),
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  f.c,
                  {
                    direction: 'column',
                    qty: n,
                    className: 'form-qty form-qty--'
                      .concat(t ? 'mobile' : 'desktop', ' form-qty--')
                      .concat(n, ' form-stage--')
                      .concat(v, ' ')
                      .concat(d && 'form-details'),
                  },
                  i.a.createElement(
                    u.a,
                    null,
                    1 === v &&
                      i.a.createElement(
                        N,
                        Object.assign({ title: s.L, goToNextStage: k, goToPrevStage: w }, I),
                      ),
                    (2 === v || 4 === v) &&
                      i.a.createElement(
                        M.default,
                        Object.assign(
                          {
                            onSubmit: F,
                            stage: v,
                            goToPrevStage: w,
                            goToNextStage: k,
                            goToStage: function(e) {
                              return h(e);
                            },
                          },
                          I,
                        ),
                      ),
                    3 === v &&
                      i.a.createElement(ne, {
                        beforeSubmit: function() {
                          S(), m(), p(!1);
                        },
                        onSubmit: F,
                      }),
                  ),
                ),
                i.a.createElement(ze, null),
              )
            );
          }),
        ),
      );
    },
    84: function(e, n, t) {
      'use strict';
      t.d(n, 'c', function() {
        return q;
      }),
        t.d(n, 'b', function() {
          return T;
        }),
        t.d(n, 'a', function() {
          return A;
        });
      var a = t(9),
        r = t(6),
        c = t(33),
        i = t.n(c),
        o = t(102),
        u = t(30);
      function l() {
        var e = Object(a.a)(['\n    position: static;\n  ']);
        return (
          (l = function() {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = Object(a.a)(['\n  position: sticky;\n  top: ', ';\n\n  ', '\n']);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = Object(a.a)(['\n        order: -1;\n      ']);
        return (
          (b = function() {
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
      function m() {
        var e = Object(a.a)(['\n    ', '\n\n    ', '\n  ']);
        return (
          (m = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = Object(a.a)(['\n         display: none;\n       ']);
        return (
          (d = function() {
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
      function x() {
        var e = Object(a.a)(['\n    flex-wrap: wrap;\n  ']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = Object(a.a)(['\n    margin-left: -24px;\n    margin-right: -24px;\n  ']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = Object(a.a)([
          '\n  display: flex;\n  margin-left: -10px;\n  margin-right: -10px;\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = Object(a.a)([
          '\n  display: flex;\n  flex-direction: ',
          ';\n  align-items: ',
          ';\n  justify-content: ',
          ';\n',
        ]);
        return (
          (j = function() {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = Object(a.a)(['\n    padding-bottom: 0;\n  ']);
        return (
          (O = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = Object(a.a)(['\n    padding-top: 15px;\n    padding-bottom: 15px;\n  ']);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = Object(a.a)([
          '\n  padding-top: 5px;\n  padding-bottom: 15px;\n  background-color: ',
          ';\n\n  ',
          '\n\n  ',
          '\n',
        ]);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function k() {
        var e = Object(a.a)([
          '\n  min-width: 320px;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: ',
          ';\n  flex-direction: ',
          ';\n  align-items: ',
          ';\n  justify-content: ',
          ';\n',
        ]);
        return (
          (k = function() {
            return e;
          }),
          e
        );
      }
      var w = r.b.div(
        k(),
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
        E(),
        function(e) {
          return e.pageBackgroundColor || 'transparent';
        },
        u.b.phone(y()),
        u.a.tablet(O()),
      ),
        r.b.div(
          j(),
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
        r.b.div(h(), u.b.tablet(v()), u.a.tablet(x())),
        r.b.div(
          g(),
          u.b.tablet(
            p(),
            function(e) {
              return e.width || '50%';
            },
            function(e) {
              return e.hideOnDesktop && Object(r.a)(d());
            },
          ),
          u.a.tablet(
            m(),
            function(e) {
              return e.hideOnMobile && Object(r.a)(f());
            },
            function(e) {
              return e.mobileFirst && Object(r.a)(b());
            },
          ),
        ),
        r.b.div(
          s(),
          function(e) {
            return e.top || '15px';
          },
          u.a.phone(l()),
        );
      function I() {
        var e = Object(a.a)(['\n  font-weight: bold;\n  margin-bottom: 0;\n']);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = Object(a.a)(['\n    width: calc(100% + 60px);\n    margin: 0 -30px 10px;\n  ']);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = Object(a.a)([
          '\n  ',
          ';\n  font-size: 20px;\n  margin: 0 auto 10px;\n  width: 230px;\n\n  ',
          ';\n',
        ]);
        return (
          (F = function() {
            return e;
          }),
          e
        );
      }
      function z() {
        var e = Object(a.a)(['\n    width: 460px;\n  ']);
        return (
          (z = function() {
            return e;
          }),
          e
        );
      }
      function C() {
        var e = Object(a.a)(['\n    width: 320px;\n  ']);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }
      function D() {
        var e = Object(a.a)([
          '\n  position: relative;\n  display: flex;\n  flex-direction: ',
          ';\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 auto 20px;\n  padding: 48px 20px 90px;\n  box-sizing: border-box;\n  min-height: 530px;\n  \n  ',
          '\n  ',
          "\n  \n  .ant-form {\n    width: 100%;\n  }\n  .ant-form-item {\n    margin-bottom: 12px;\n  }\n  \n  \n  \n  \n  // &:after {\n  //   content: '';\n  //   position: absolute;\n  //   bottom: 20px;\n  //   right: 20px;\n  //   width: 45px;\n  //   height: 60px;\n  //   background: url('",
          "') center center/60px auto no-repeat;\n  // }\n\n  > * {\n    position:relative;\n    box-sizing: border-box;\n    font-family: ",
          ';\n  }\n',
        ]);
        return (
          (D = function() {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = Object(a.a)([
          '\n  line-height: 1.2;\n  text-align: center;\n  text-transform: uppercase;\n',
        ]);
        return (
          (N = function() {
            return e;
          }),
          e
        );
      }
      var M = Object(r.a)(N()),
        q = Object(r.b)(w)(
          D(),
          function(e) {
            return e.direction || 'row';
          },
          u.a.tablet(C()),
          u.b.tablet(z()),
          i.a,
          o.a,
        ),
        T = r.b.div(F(), M, u.b.tablet(S())),
        A = Object(r.b)(T)(I());
    },
    94: function(e, n, t) {
      'use strict';
      var a = t(0),
        r = t.n(a),
        c = t(22),
        i = t(9),
        o = t(6),
        u = t(18),
        l = t(29),
        s = t(300);
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
      var f = Object(o.b)(s.a)(
          b(),
          function(e) {
            return 'primary' === e.type ? l.c : l.b;
          },
          function(e) {
            return 'primary' === e.type ? l.c : l.b;
          },
          l.d,
          function(e) {
            return 'primary' === e.type ? '100%' : 'auto';
          },
          l.d,
          function(e) {
            return 'primary' === e.type ? l.c : l.b;
          },
          function(e) {
            return 'primary' === e.type ? l.c : l.b;
          },
        ),
        m = function(e) {
          var n = e.children,
            t = Object(u.a)(e, ['children']);
          return r.a.createElement(f, t, n);
        };
      function d() {
        var e = Object(i.a)(['']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = Object(i.a)(['\n  width: 100%;\n']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = Object(i.a)(['\n  margin-top: 24px;\n  width: 100%;\n  text-align: center;\n']);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      var x = o.b.div(g()),
        v = Object(o.b)(m)(p()),
        h = Object(o.b)(m)(d());
      n.a = function(e) {
        var n = e.onSubmit,
          t = e.onCancel,
          a = e.submitTitle,
          i = void 0 === a ? 'send' : a,
          o = e.style,
          u = void 0 === o ? {} : o;
        return r.a.createElement(
          x,
          { style: u },
          r.a.createElement(v, { type: 'primary', onClick: n }, i),
          t && r.a.createElement(h, { style: { marginTop: '12px' }, onClick: t }, c.b),
        );
      };
    },
  },
]);
//# sourceMappingURL=4.480ded47.chunk.js.map
