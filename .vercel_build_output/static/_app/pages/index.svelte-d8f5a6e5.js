import {
	S as N,
	i as R,
	s as U,
	j as k,
	e as c,
	t as I,
	J as w,
	d as t,
	l as j,
	c as h,
	a as d,
	g as A,
	b as a,
	f as J,
	H as e,
	I as L
} from '../chunks/vendor-808be89d.js'
function B(M) {
	let i, r, u, b, v, n, f, s, x, y, m, l, E
	return {
		c() {
			;(i = k()),
				(r = c('main')),
				(u = c('h1')),
				(b = I(
					'\u041C\u0430\u043A\u0441\u0438\u043C \u0422\u0435\u0440\u0435\u0448\u043A\u043E \u26C4\uFE0F'
				)),
				(v = k()),
				(n = c('ul')),
				(f = c('li')),
				(s = c('a')),
				(x = I('telegram')),
				(y = k()),
				(m = c('li')),
				(l = c('a')),
				(E = I('hey@tereshko.net')),
				this.h()
		},
		l(o) {
			w('[data-svelte="svelte-lpszgj"]', document.head).forEach(t),
				(i = j(o)),
				(r = h(o, 'MAIN', { class: !0 }))
			var _ = d(r)
			u = h(_, 'H1', { class: !0 })
			var q = d(u)
			;(b = A(
				q,
				'\u041C\u0430\u043A\u0441\u0438\u043C \u0422\u0435\u0440\u0435\u0448\u043A\u043E \u26C4\uFE0F'
			)),
				q.forEach(t),
				(v = j(_)),
				(n = h(_, 'UL', {}))
			var p = d(n)
			f = h(p, 'LI', { class: !0 })
			var H = d(f)
			s = h(H, 'A', { class: !0, href: !0, rel: !0 })
			var S = d(s)
			;(x = A(S, 'telegram')),
				S.forEach(t),
				H.forEach(t),
				(y = j(p)),
				(m = h(p, 'LI', { class: !0 }))
			var z = d(m)
			l = h(z, 'A', { class: !0, href: !0, rel: !0 })
			var C = d(l)
			;(E = A(C, 'hey@tereshko.net')),
				C.forEach(t),
				z.forEach(t),
				p.forEach(t),
				_.forEach(t),
				this.h()
		},
		h() {
			;(document.title =
				'\u041C\u0430\u043A\u0441\u0438\u043C \u0422\u0435\u0440\u0435\u0448\u043A\u043E'),
				a(u, 'class', 'mb-8'),
				a(s, 'class', 'border-b-2 border-gray'),
				a(s, 'href', 'https://t.me/xxtereshko'),
				a(s, 'rel', 'noopener noreferrer'),
				a(f, 'class', 'mb-4'),
				a(l, 'class', 'border-b-2 border-gray'),
				a(l, 'href', 'mailto:hey@tereshko.net'),
				a(l, 'rel', 'noopener noreferrer'),
				a(m, 'class', 'mb-4'),
				a(r, 'class', 'p-8 text-xl')
		},
		m(o, g) {
			J(o, i, g),
				J(o, r, g),
				e(r, u),
				e(u, b),
				e(r, v),
				e(r, n),
				e(n, f),
				e(f, s),
				e(s, x),
				e(n, y),
				e(n, m),
				e(m, l),
				e(l, E)
		},
		p: L,
		i: L,
		o: L,
		d(o) {
			o && t(i), o && t(r)
		}
	}
}
class F extends N {
	constructor(i) {
		super()
		R(this, i, null, B, U, {})
	}
}
export { F as default }
