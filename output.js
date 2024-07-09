//Tue Jul 09 2024 09:43:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  "use strict";
  const q = window,
    R = q.document,
    P = q.navigator;
  var H, M;
  function S(j) {
    function y(O) {
      return O ? 1 : 0;
    }
    var w = "";
    try {
      w = R.documentElement.getAttribute && R.documentElement.getAttribute("webdriver");
    } catch (O) {}
    var g,
      N = 0,
      U = (q.hasOwnProperty && Object.keys(R).forEach(function (K) {
        var X = q.document[K];
        (0 == K.indexOf("$cdc_asdjflasutopfhvcZLmcfl_") || X && X.hasOwnProperty("idPrefix_") && X.hasOwnProperty("cache_") && X.hasOwnProperty("nextId_")) && (N = 1);
      }), 1 != N && (g = new RegExp("^cdc_[a-zA-Z0-9]{22}_"), Object.keys(q).forEach(function (K) {
        "$chrome_asyncScriptInfo" != K && !g.test(K) || (N = 1);
      })), new Date()),
      A = 0;
    U.toString = function () {
      if (2 == ++A) {
        return "";
      }
    };
    H && H(U);
    var Z = 0,
      Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z = (Z |= y(1 < A ? 1 : 0) << 0) | y(P.webdriver) << 1) | y(N) << 2) | y(q._phantom) << 3) | y(q.callPhantom) << 4) | y(q.phantom) << 5) | y(q.spawn) << 6) | y(q.emit) << 7) | y(w) << 8) | y(q.Buffer) << 9) | y(q.domAutomation) << 10) | y(q.webdriver) << 11) | y(R.__webdriver_script_fn) << 12) | y(q.fxdriver_id) << 13) | y(q.__fxdriver_unwrapped) << 14) | y(q.ClientUtils) << 15) | y(q.__nightmare) << 16;
    S = function () {
      return Z;
    };
    return Z;
  }
  q.console && (H = q.console.log.bind(q.console), q.console.debug.bind(q.console));
  M = {
    ua: function (j, W) {
      if (null == j) {
        return "";
      }
      var y = M.uu(j, 6, function (w) {
        return "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ".charAt(w);
      });
      if (W) {
        return y;
      }
      switch (y.length % 4) {
        default:
        case 0:
          return y;
        case 1:
          return y + "===";
        case 2:
          return y + "==";
        case 3:
          return y + "=";
      }
    },
    uu: function (j, W, y) {
      if (null == j) {
        return "";
      }
      for (var w, N, U, A, Z = {}, O = {}, K = "", X = 2, V = 3, v = 2, E = [], B = 0, b = 0, a0 = 0; a0 < j.length; a0 += 1) {
        if (U = j.charAt(a0), Object.prototype.hasOwnProperty.call(Z, U) || (Z[U] = V++, O[U] = !0), A = K + U, Object.prototype.hasOwnProperty.call(Z, A)) {
          K = A;
        } else {
          if (Object.prototype.hasOwnProperty.call(O, K)) {
            if (K.charCodeAt(0) < 256) {
              for (w = 0; w < v; w++) {
                B <<= 1;
                b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
              }
              for (N = K.charCodeAt(0), w = 0; w < 8; w++) {
                B = B << 1 | 1 & N;
                b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
                N >>= 1;
              }
            } else {
              for (N = 1, w = 0; w < v; w++) {
                B = B << 1 | N;
                b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
                N = 0;
              }
              for (N = K.charCodeAt(0), w = 0; w < 16; w++) {
                B = B << 1 | 1 & N;
                b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
                N >>= 1;
              }
            }
            0 == --X && (X = Math.pow(2, v), v++);
            delete O[K];
          } else {
            for (N = Z[K], w = 0; w < v; w++) {
              B = B << 1 | 1 & N;
              b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
              N >>= 1;
            }
          }
          0 == --X && (X = Math.pow(2, v), v++);
          Z[A] = V++;
          K = String(U);
        }
      }
      if ("" !== K) {
        if (Object.prototype.hasOwnProperty.call(O, K)) {
          if (K.charCodeAt(0) < 256) {
            for (w = 0; w < v; w++) {
              B <<= 1;
              b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
            }
            for (N = K.charCodeAt(0), w = 0; w < 8; w++) {
              B = B << 1 | 1 & N;
              b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
              N >>= 1;
            }
          } else {
            for (N = 1, w = 0; w < v; w++) {
              B = B << 1 | N;
              b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
              N = 0;
            }
            for (N = K.charCodeAt(0), w = 0; w < 16; w++) {
              B = B << 1 | 1 & N;
              b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
              N >>= 1;
            }
          }
          0 == --X && (X = Math.pow(2, v), v++);
          delete O[K];
        } else {
          for (N = Z[K], w = 0; w < v; w++) {
            B = B << 1 | 1 & N;
            b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
            N >>= 1;
          }
        }
        0 == --X && (X = Math.pow(2, v), v++);
      }
      for (N = 2, w = 0; w < v; w++) {
        B = B << 1 | 1 & N;
        b == W - 1 ? (b = 0, E.push(y(B)), B = 0) : b++;
        N >>= 1;
      }
      for (;;) {
        if (B <<= 1, b == W - 1) {
          E.push(y(B));
          break;
        }
        b++;
      }
      return E.join("");
    }
  };
  const F = M;
  function I(j) {
    var g = R.createElement("div");
    g.innerHTML = "<a></a>";
    g.firstChild.href = j;
    g.innerHTML = g.innerHTML;
    (j = g.firstChild).href = g.firstChild.href;
    return {
      protocol: j.protocol,
      host: j.host,
      hostname: j.hostname,
      port: j.port,
      pathname: "/" === j.pathname.substr(0, 1) ? j.pathname : "/" + j.pathname,
      search: j.search,
      hash: j.hash,
      G: j.href
    };
  }
  function x(j, W) {
    return j.protocol + "//" + j.host + j.pathname + j.search + (W ? "" : j.hash);
  }
  const t = ["type__", "refer__", "ipcity__", "md5__", "decode__", "encode__", "time__", "timestamp__", "type__"],
    C = {},
    D = {
      un: function (j) {
        return !(!j.protocol || 0 == j.protocol.indexOf("data") || j.host.match(/(cloudauth-device|captcha-(pro-)?open).*?\.aliyuncs\.com$/));
      },
      sig: function (j) {
        for (var W = 0, y = encodeURIComponent(j), w = 0; w < y.length; w++) {
          W = (W << 7) - W + 398 + y.charCodeAt(w);
          W |= 0;
        }
        return W;
      },
      uf: function (j, W) {
        return !!D.un(j) && D.z(j, W);
      },
      Y: function (j) {
        if (C[j]) {
          return C[j];
        }
        for (var W = 0, y = 0; y < j.length; y++) {
          W += j[y].charCodeAt();
        }
        var w = t[W % t.length] + W % 10000;
        return C[j] = w;
      },
      Q: function (j) {
        var N = I(j).host,
          N = D.Y(N),
          U = N;
        if (-1 == j.indexOf(U + "=")) {
          return j;
        }
        N = I(j);
        if (!N.search) {
          return j;
        }
        var A = N.search.slice(1).split("&");
        if (0 == A.length) {
          return j;
        }
        var w,
          g = [];
        for (w in A) 0 != A[w].indexOf(U + "=") && g.push(A[w]);
        N.search = 0 == g.length ? "" : "?" + g.join("&");
        return x(N);
      },
      z: function (j, W) {
        var y = x(j, !0);
        W && (y += W);
        W = D.sig(y) + "|" + S() + "|" + new Date().getTime() + "|1";
        y = F.ua(W, !0);
        W = {};
        W[D.Y(j.host)] = y;
        j.search = function (w, g) {
          if (0 != Object.keys(g).length) {
            var N,
              U = "";
            for (N in g) U += encodeURIComponent(N) + "=" + encodeURIComponent(g[N]) + "&";
            if (U = U.slice(0, U.length - 1), 0 == w.length) {
              w = "?" + U;
            } else {
              for (var A = w.slice(1).split("&"), Z = [], O = Object.keys(g), K = 0; K < A.length; K++) {
                N = decodeURIComponent(A[K].split("=", 1)[0]);
                -1 == O.indexOf(N) && Z.push(A[K]);
              }
              w = "?" + (0 == Z.length ? "" : Z.join("&") + "&") + U;
            }
          }
          return w;
        }(j.search, W);
        return x(j);
      }
    };
  D.uf;
  const m = D.z;
  D.Q;
  R.location.href = m(I(R.location.href));
}();