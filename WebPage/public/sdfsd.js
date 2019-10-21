! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = e || self).firebase) }(this, function(Ze) { "use strict"; try {
        (function() {
            function e(r, n) { var o, i, a, e, s = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] }; return e = { next: t(0), throw: t(1), return: t(2) }, "function" == typeof Symbol && (e[Symbol.iterator] = function() { return this }), e;

                function t(t) { return function(e) { return function(t) { if (o) throw new TypeError("Generator is already executing."); for (; s;) try { if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a; switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t; break;
                                    case 4:
                                        return s.label++, { value: t[1], done: !1 };
                                    case 5:
                                        s.label++, i = t[1], t = [0]; continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop(); continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) { s = 0; continue } if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) { s.label = t[1]; break } if (6 === t[0] && s.label < a[1]) { s.label = a[1], a = t; break } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(t); break }
                                        a[2] && s.ops.pop(), s.trys.pop(); continue }
                                t = n.call(r, s) } catch (e) { t = [6, e], i = 0 } finally { o = a = 0 }
                            if (5 & t[0]) throw t[1]; return { value: t[0] ? t[1] : void 0, done: !0 } }([t, e]) } } }
            Ze = Ze && Ze.hasOwnProperty("default") ? Ze.default : Ze; var f = "firebasestorage.googleapis.com",
                p = "storageBucket",
                b = function() {
                    function e(e, t) { this.code_ = r(e), this.message_ = "Firebase Storage: " + t, this.serverResponse_ = null, this.name_ = "FirebaseError" } return e.prototype.codeProp = function() { return this.code }, e.prototype.codeEquals = function(e) { return r(e) === this.codeProp() }, e.prototype.serverResponseProp = function() { return this.serverResponse_ }, e.prototype.setServerResponseProp = function(e) { this.serverResponse_ = e }, Object.defineProperty(e.prototype, "name", { get: function() { return this.name_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "code", { get: function() { return this.code_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "message", { get: function() { return this.message_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "serverResponse", { get: function() { return this.serverResponse_ }, enumerable: !0, configurable: !0 }), e }(),
                m = { UNKNOWN: "unknown", OBJECT_NOT_FOUND: "object-not-found", BUCKET_NOT_FOUND: "bucket-not-found", PROJECT_NOT_FOUND: "project-not-found", QUOTA_EXCEEDED: "quota-exceeded", UNAUTHENTICATED: "unauthenticated", UNAUTHORIZED: "unauthorized", RETRY_LIMIT_EXCEEDED: "retry-limit-exceeded", INVALID_CHECKSUM: "invalid-checksum", CANCELED: "canceled", INVALID_EVENT_NAME: "invalid-event-name", INVALID_URL: "invalid-url", INVALID_DEFAULT_BUCKET: "invalid-default-bucket", NO_DEFAULT_BUCKET: "no-default-bucket", CANNOT_SLICE_BLOB: "cannot-slice-blob", SERVER_FILE_WRONG_SIZE: "server-file-wrong-size", NO_DOWNLOAD_URL: "no-download-url", INVALID_ARGUMENT: "invalid-argument", INVALID_ARGUMENT_COUNT: "invalid-argument-count", APP_DELETED: "app-deleted", INVALID_ROOT_OPERATION: "invalid-root-operation", INVALID_FORMAT: "invalid-format", INTERNAL_ERROR: "internal-error" };

            function r(e) { return "storage/" + e }

            function u() { return new b(m.UNKNOWN, "An unknown error occurred, please check the error payload for server response.") }

            function l() { return new b(m.CANCELED, "User canceled the upload/download.") }

            function y() { return new b(m.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.") }

            function h(e, t, r) { return new b(m.INVALID_ARGUMENT, "Invalid argument in `" + t + "` at index " + e + ": " + r) }

            function c() { return new b(m.APP_DELETED, "The Firebase app was deleted.") }

            function d(e, t) { return new b(m.INVALID_FORMAT, "String does not match format '" + e + "': " + t) }

            function i(e) { throw new b(m.INTERNAL_ERROR, "Internal error: " + e) } var _ = { RAW: "raw", BASE64: "base64", BASE64URL: "base64url", DATA_URL: "data_url" };

            function a(e) { switch (e) {
                    case _.RAW:
                    case _.BASE64:
                    case _.BASE64URL:
                    case _.DATA_URL:
                        return;
                    default:
                        throw "Expected one of the event types: [" + _.RAW + ", " + _.BASE64 + ", " + _.BASE64URL + ", " + _.DATA_URL + "]." } } var n = function(e, t) { this.data = e, this.contentType = t || null };

            function v(e, t) { switch (e) {
                    case _.RAW:
                        return new n(o(t));
                    case _.BASE64:
                    case _.BASE64URL:
                        return new n(s(e, t));
                    case _.DATA_URL:
                        return new n((r = new g(t)).base64 ? s(_.BASE64, r.rest) : function(e) { var t; try { t = decodeURIComponent(e) } catch (e) { throw d(_.DATA_URL, "Malformed data URL.") } return o(t) }(r.rest), new g(t).contentType) } var r; throw u() }

            function o(e) { for (var t = [], r = 0; r < e.length; r++) { var n = e.charCodeAt(r); if (n <= 127) t.push(n);
                    else if (n <= 2047) t.push(192 | n >> 6, 128 | 63 & n);
                    else if (55296 == (64512 & n))
                        if (r < e.length - 1 && 56320 == (64512 & e.charCodeAt(r + 1))) n = 65536 | (1023 & n) << 10 | 1023 & e.charCodeAt(++r), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n);
                        else t.push(239, 191, 189);
                    else 56320 == (64512 & n) ? t.push(239, 191, 189) : t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) } return new Uint8Array(t) }

            function s(t, e) { switch (t) {
                    case _.BASE64:
                        var r = -1 !== e.indexOf("-"),
                            n = -1 !== e.indexOf("_"); if (r || n) throw d(t, "Invalid character '" + (r ? "-" : "_") + "' found: is it base64url encoded?"); break;
                    case _.BASE64URL:
                        var o = -1 !== e.indexOf("+"),
                            i = -1 !== e.indexOf("/"); if (o || i) throw d(t, "Invalid character '" + (o ? "+" : "/") + "' found: is it base64 encoded?");
                        e = e.replace(/-/g, "+").replace(/_/g, "/") } var a; try { a = atob(e) } catch (e) { throw d(t, "Invalid character found") } for (var s = new Uint8Array(a.length), u = 0; u < a.length; u++) s[u] = a.charCodeAt(u); return s } var g = function(e) { this.base64 = !1, this.contentType = null; var t = e.match(/^data:([^,]+)?,/); if (null === t) throw d(_.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>"); var r, n, o = t[1] || null;
                null != o && (this.base64 = (n = ";base64", (r = o).length >= n.length && r.substring(r.length - n.length) === n), this.contentType = this.base64 ? o.substring(0, o.length - ";base64".length) : o), this.rest = e.substring(e.indexOf(",") + 1) }; var R, t, w = { STATE_CHANGED: "state_changed" },
                T = "running",
                E = "pausing",
                k = "paused",
                A = "success",
                U = "canceling",
                O = "canceled",
                x = "error",
                S = { RUNNING: "running", PAUSED: "paused", SUCCESS: "success", CANCELED: "canceled", ERROR: "error" };

            function C(e) { switch (e) {
                    case T:
                    case E:
                    case U:
                        return S.RUNNING;
                    case k:
                        return S.PAUSED;
                    case A:
                        return S.SUCCESS;
                    case O:
                        return S.CANCELED;
                    case x:
                    default:
                        return S.ERROR } }

            function N(e, t) { for (var r in e) n = e, o = r, Object.prototype.hasOwnProperty.call(n, o) && t(r, e[r]); var n, o }

            function P(e) { if (null == e) return {}; var r = {}; return N(e, function(e, t) { r[e] = t }), r }

            function L(e) { return new Promise(e) }

            function I(e) { return Promise.resolve(e) }

            function D(e) { return null != e }

            function M(e) { return void 0 !== e }

            function W(e) { return "function" == typeof e }

            function B(e) { return "object" == typeof e }

            function j(e) { return "string" == typeof e || e instanceof String }

            function q(e) { return "number" == typeof e || e instanceof Number }

            function F(e) { return H() && e instanceof Blob }

            function H() { return "undefined" != typeof Blob }(t = R || (R = {}))[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT"; var z = function() {
                    function e() { var r = this;
                        this.sent_ = !1, this.xhr_ = new XMLHttpRequest, this.errorCode_ = R.NO_ERROR, this.sendPromise_ = L(function(t, e) { r.xhr_.addEventListener("abort", function(e) { r.errorCode_ = R.ABORT, t(r) }), r.xhr_.addEventListener("error", function(e) { r.errorCode_ = R.NETWORK_ERROR, t(r) }), r.xhr_.addEventListener("load", function(e) { t(r) }) }) } return e.prototype.send = function(e, t, r, n) { var o = this; if (this.sent_) throw i("cannot .send() more than once");
                        (this.sent_ = !0, this.xhr_.open(t, e, !0), D(n)) && N(n, function(e, t) { o.xhr_.setRequestHeader(e, t.toString()) }); return D(r) ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_ }, e.prototype.getErrorCode = function() { if (!this.sent_) throw i("cannot .getErrorCode() before sending"); return this.errorCode_ }, e.prototype.getStatus = function() { if (!this.sent_) throw i("cannot .getStatus() before sending"); try { return this.xhr_.status } catch (e) { return -1 } }, e.prototype.getResponseText = function() { if (!this.sent_) throw i("cannot .getResponseText() before sending"); return this.xhr_.responseText }, e.prototype.abort = function() { this.xhr_.abort() }, e.prototype.getResponseHeader = function(e) { return this.xhr_.getResponseHeader(e) }, e.prototype.addUploadProgressListener = function(e) { D(this.xhr_.upload) && this.xhr_.upload.addEventListener("progress", e) }, e.prototype.removeUploadProgressListener = function(e) { D(this.xhr_.upload) && this.xhr_.upload.removeEventListener("progress", e) }, e }(),
                G = function() {
                    function e() {} return e.prototype.createXhrIo = function() { return new z }, e }();

            function X(e) { var t, r; try { t = JSON.parse(e) } catch (e) { return null } return B(r = t) && !Array.isArray(r) ? t : null } var V = function() {
                function h(e, t) { this.bucket = e, this.path_ = t } return Object.defineProperty(h.prototype, "path", { get: function() { return this.path_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(h.prototype, "isRoot", { get: function() { return 0 === this.path.length }, enumerable: !0, configurable: !0 }), h.prototype.fullServerUrl = function() { var e = encodeURIComponent; return "/b/" + e(this.bucket) + "/o/" + e(this.path) }, h.prototype.bucketOnlyServerUrl = function() { return "/b/" + encodeURIComponent(this.bucket) + "/o" }, h.makeFromBucketSpec = function(t) { var e, r; try { e = h.makeFromUrl(t) } catch (e) { return new h(t, "") } if ("" === e.path) return e; throw r = t, new b(m.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + r + "'.") }, h.makeFromUrl = function(e) { var t = null,
                        r = "([A-Za-z0-9.\\-_]+)"; var n = new RegExp("^gs://" + r + "(/(.*))?$", "i"); for (var o, i = f.replace(/[.]/g, "\\."), a = [{ regex: n, indices: { bucket: 1, path: 3 }, postModify: function(e) { "/" === e.path.charAt(e.path.length - 1) && (e.path_ = e.path_.slice(0, -1)) } }, { regex: new RegExp("^https?://" + i + "/v[A-Za-z0-9_]+/b/" + r + "/o(/([^?#]*).*)?$", "i"), indices: { bucket: 1, path: 3 }, postModify: function(e) { e.path_ = decodeURIComponent(e.path) } }], s = 0; s < a.length; s++) { var u = a[s],
                            l = u.regex.exec(e); if (l) { var c = l[u.indices.bucket],
                                p = l[u.indices.path];
                            p || (p = ""), t = new h(c, p), u.postModify(t); break } } if (null == t) throw o = e, new b(m.INVALID_URL, "Invalid URL '" + o + "'."); return t }, h }();

            function K(e) { var t = e.lastIndexOf("/", e.length - 2); return -1 === t ? e : e.slice(t + 1) }

            function Z(e) { return "https://" + f + "/v0" + e }

            function J(e) { var n = encodeURIComponent,
                    o = "?"; return N(e, function(e, t) { var r = n(e) + "=" + n(t.toString());
                    o = o + r + "&" }), o = o.slice(0, -1) }

            function Q(e, t) { return t } var $ = function(e, t, r, n) { this.server = e, this.local = t || e, this.writable = !!r, this.xform = n || Q },
                Y = null;

            function ee() { if (Y) return Y; var e = [];
                e.push(new $("bucket")), e.push(new $("generation")), e.push(new $("metageneration")), e.push(new $("name", "fullPath", !0)); var t = new $("name");
                t.xform = function(e, t) { return !j(r = t) || r.length < 2 ? r : K(r = r); var r }, e.push(t); var r = new $("size"); return r.xform = function(e, t) { return D(t) ? +t : t }, e.push(r), e.push(new $("timeCreated")), e.push(new $("updated")), e.push(new $("md5Hash", null, !0)), e.push(new $("cacheControl", null, !0)), e.push(new $("contentDisposition", null, !0)), e.push(new $("contentEncoding", null, !0)), e.push(new $("contentLanguage", null, !0)), e.push(new $("contentType", null, !0)), e.push(new $("metadata", "customMetadata", !0)), Y = e }

            function te(e, t, r) { for (var n, o, i = { type: "file" }, a = r.length, s = 0; s < a; s++) { var u = r[s];
                    i[u.local] = u.xform(i, t[u.server]) } return n = i, o = e, Object.defineProperty(n, "ref", { get: function() { var e = n.bucket,
                            t = n.fullPath,
                            r = new V(e, t); return o.makeStorageReference(r) } }), i }

            function re(e, t, r) { var n = X(t); return null === n ? null : te(e, n, r) }

            function ne(e, t) { for (var r = {}, n = t.length, o = 0; o < n; o++) { var i = t[o];
                    i.writable && (r[i.server] = e[i.local]) } return JSON.stringify(r) }

            function oe(e) { var t; if (!(e && B(e))) throw "Expected Metadata object."; for (var r in e) { var n = e[r]; if ("customMetadata" === r) { if (!B(n)) throw "Expected object for 'customMetadata' mapping." } else if (B(t = n) && null !== t) throw "Mapping for '" + r + "' cannot be an object." } } var ie = "maxResults",
                ae = 1e3,
                se = "pageToken",
                ue = "prefixes",
                le = "items";

            function ce(e, t) { var r = { prefixes: [], items: [], nextPageToken: t.nextPageToken },
                    n = e.bucket(); if (null === n) throw new b(m.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + p + "' property when initializing the app?"); if (t[ue])
                    for (var o = 0, i = t[ue]; o < i.length; o++) { var a = i[o].replace(/\/$/, ""),
                            s = e.makeStorageReference(new V(n, a));
                        r.prefixes.push(s) }
                if (t[le])
                    for (var u = 0, l = t[le]; u < l.length; u++) { var c = l[u];
                        s = e.makeStorageReference(new V(n, c.name));
                        r.items.push(s) }
                return r }

            function pe(e) { var t; if (!(e && B(e))) throw "Expected ListOptions object."; for (var r in e)
                    if (r === ie) { if (!q(t = e[ie]) || !Number.isInteger(t) || e[ie] <= 0) throw "Expected maxResults to be a positive number."; if (1e3 < e[ie]) throw "Expected maxResults to be less than or equal to " + ae + "." } else { if (r !== se) throw "Unknown option: " + r; if (e[se] && !j(e[se])) throw "Expected pageToken to be string." } }

            function he(t, e, r) { for (var n = e.length, o = e.length, i = 0; i < e.length; i++)
                    if (e[i].optional) { n = i; break }
                var a, s, u, l, c, p; if (!(n <= r.length && r.length <= o)) throw a = n, s = o, u = t, l = r.length, p = a === s ? 1 === (c = a) ? "argument" : "arguments" : (c = "between " + a + " and " + s, "arguments"), new b(m.INVALID_ARGUMENT_COUNT, "Invalid argument count in `" + u + "`: Expected " + c + " " + p + ", received " + l + "."); for (i = 0; i < r.length; i++) try { e[i].validator(r[i]) } catch (e) { throw e instanceof Error ? h(i, t, e.message) : h(i, t, e) } } var fe = function(t, e) { var r = this;
                this.validator = function(e) { r.optional && !M(e) || t(e) }, this.optional = !!e };

            function de(e, t) {
                function r(e) { if (!j(e)) throw "Expected string." } var n, o, i; return n = e ? (o = r, i = e, function(e) { o(e), i(e) }) : r, new fe(n, t) }

            function _e(e) { return new fe(oe, e) }

            function ve() { return new fe(function(e) { if (!(q(e) && 0 <= e)) throw "Expected a number 0 or greater." }) }

            function be(t, e) { return new fe(function(e) { if (!(null === e || D(e) && e instanceof Object)) throw "Expected an Object.";
                    null != t && t(e) }, e) }

            function me(e) { return new fe(function(e) { if (null !== e && !W(e)) throw "Expected a Function." }, e) }

            function ye() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var r = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : void 0; if (void 0 !== r) { for (var n = new r, o = 0; o < e.length; o++) n.append(e[o]); return n.getBlob() } if (H()) return new Blob(e); throw Error("This browser doesn't seem to support creating Blobs") } var ge = function() {
                function s(e, t) { var r = 0,
                        n = "";
                    F(e) ? (r = (this.data_ = e).size, n = e.type) : e instanceof ArrayBuffer ? (t ? this.data_ = new Uint8Array(e) : (this.data_ = new Uint8Array(e.byteLength), this.data_.set(new Uint8Array(e))), r = this.data_.length) : e instanceof Uint8Array && (t ? this.data_ = e : (this.data_ = new Uint8Array(e.length), this.data_.set(e)), r = e.length), this.size_ = r, this.type_ = n } return s.prototype.size = function() { return this.size_ }, s.prototype.type = function() { return this.type_ }, s.prototype.slice = function(e, t) { if (F(this.data_)) { var r = this.data_,
                            n = (i = e, a = t, (o = r).webkitSlice ? o.webkitSlice(i, a) : o.mozSlice ? o.mozSlice(i, a) : o.slice ? o.slice(i, a) : null); return null === n ? null : new s(n) } var o, i, a; return new s(new Uint8Array(this.data_.buffer, e, t - e), !0) }, s.getBlob = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; if (H()) { var r = e.map(function(e) { return e instanceof s ? e.data_ : e }); return new s(ye.apply(null, r)) } var n = e.map(function(e) { return j(e) ? v(_.RAW, e).data : e.data_ }),
                        o = 0;
                    n.forEach(function(e) { o += e.byteLength }); var i = new Uint8Array(o),
                        a = 0; return n.forEach(function(e) { for (var t = 0; t < e.length; t++) i[a++] = e[t] }), new s(i, !0) }, s.prototype.uploadData = function() { return this.data_ }, s }();

            function Re(e, t) { return -1 !== e.indexOf(t) } var we = function(e, t, r, n) { this.url = e, this.method = t, this.handler = r, this.timeout = n, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = [] };

            function Te(e) { if (!e) throw u() }

            function Ee(n, o) { return function(e, t) { var r = re(n, t, o); return Te(null !== r), r } }

            function ke(i) { return function(e, t) { var r, n, o = (r = i, null === (n = X(t)) ? null : ce(r, n)); return Te(null !== o), o } }

            function Ae(n, o) { return function(e, t) { var r = re(n, t, o); return Te(null !== r),
                        function(n, e) { var t = X(e); if (null === t) return null; if (!j(t.downloadTokens)) return null; var r = t.downloadTokens; if (0 === r.length) return null; var o = encodeURIComponent; return r.split(",").map(function(e) { var t = n.bucket,
                                    r = n.fullPath; return Z("/b/" + o(t) + "/o/" + o(r)) + J({ alt: "media", token: e }) })[0] }(r, t) } }

            function Ue(i) { return function(e, t) { var r, n, o; return (r = 401 === e.getStatus() ? new b(m.UNAUTHENTICATED, "User is not authenticated, please authenticate using Firebase Authentication and try again.") : 402 === e.getStatus() ? (o = i.bucket, new b(m.QUOTA_EXCEEDED, "Quota for bucket '" + o + "' exceeded, please view quota on https://firebase.google.com/pricing/.")) : 403 === e.getStatus() ? (n = i.path, new b(m.UNAUTHORIZED, "User does not have permission to access '" + n + "'.")) : t).setServerResponseProp(t.serverResponseProp()), r } }

            function Oe(o) { var i = Ue(o); return function(e, t) { var r, n = i(e, t); return 404 === e.getStatus() && (r = o.path, n = new b(m.OBJECT_NOT_FOUND, "Object '" + r + "' does not exist.")), n.setServerResponseProp(t.serverResponseProp()), n } }

            function xe(e, t, r) { var n = Z(t.fullServerUrl()),
                    o = e.maxOperationRetryTime(),
                    i = new we(n, "GET", Ee(e, r), o); return i.errorHandler = Oe(t), i }

            function Se(e, t, r) { var n, o, i = P(r); return i.fullPath = e.path, i.size = t.size(), i.contentType || (i.contentType = (o = t, (n = null) && n.contentType || o && o.type() || "application/octet-stream")), i } var Ce = function(e, t, r, n) { this.current = e, this.total = t, this.finalized = !!r, this.metadata = n || null };

            function Ne(e, t) { var r; try { r = e.getResponseHeader("X-Goog-Upload-Status") } catch (e) { Te(!1) } return Te(Re(t || ["active"], r)), r }

            function Pe(e, a, t, s, r, u, n, o) { var l = new Ce(0, 0); if (l.total = n ? (l.current = n.current, n.total) : (l.current = 0, s.size()), s.size() !== l.total) throw new b(m.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload."); var i = l.total - l.current,
                    c = i;
                0 < r && (c = Math.min(c, r)); var p = l.current,
                    h = p + c,
                    f = { "X-Goog-Upload-Command": c === i ? "upload, finalize" : "upload", "X-Goog-Upload-Offset": l.current },
                    d = s.slice(p, h); if (null === d) throw y(); var _ = a.maxUploadRetryTime(),
                    v = new we(t, "POST", function(e, t) { var r, n = Ne(e, ["active", "final"]),
                            o = l.current + c,
                            i = s.size(); return r = "final" === n ? Ee(a, u)(e, t) : null, new Ce(o, i, "final" === n, r) }, _); return v.headers = f, v.body = d.uploadData(), v.progressCallback = o || null, v.errorHandler = Ue(e), v } var Le = function(e, t, r) { if (W(e) || D(t) || D(r)) this.next = e, this.error = t || null, this.complete = r || null;
                    else { var n = e;
                        this.next = n.next || null, this.error = n.error || null, this.complete = n.complete || null } },
                Ie = function(e, t, r, n, o, i) { this.bytesTransferred = e, this.totalBytes = t, this.state = r, this.metadata = n, this.task = o, this.ref = i };

            function De(r) { return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    I(!0).then(function() { r.apply(null, e) }) } } var Me = function() {
                    function e(e, t, r, n, o, i) { var a = this;
                        void 0 === i && (i = null), this.transferred_ = 0, this.needToFetchStatus_ = !1, this.needToFetchMetadata_ = !1, this.observers_ = [], this.error_ = null, this.uploadUrl_ = null, this.request_ = null, this.chunkMultiplier_ = 1, this.resolve_ = null, this.reject_ = null, this.ref_ = e, this.authWrapper_ = t, this.location_ = r, this.blob_ = o, this.metadata_ = i, this.mappings_ = n, this.resumable_ = this.shouldDoResumable_(this.blob_), this.state_ = T, this.errorHandler_ = function(e) { a.request_ = null, a.chunkMultiplier_ = 1, e.codeEquals(m.CANCELED) ? (a.needToFetchStatus_ = !0, a.completeTransitions_()) : (a.error_ = e, a.transition_(x)) }, this.metadataErrorHandler_ = function(e) { a.request_ = null, e.codeEquals(m.CANCELED) ? a.completeTransitions_() : (a.error_ = e, a.transition_(x)) }, this.promise_ = L(function(e, t) { a.resolve_ = e, a.reject_ = t, a.start_() }), this.promise_.then(null, function() {}) } return e.prototype.makeProgressCallback_ = function() { var r = this,
                            n = this.transferred_; return function(e, t) { r.updateProgress_(n + e) } }, e.prototype.shouldDoResumable_ = function(e) { return 262144 < e.size() }, e.prototype.start_ = function() { this.state_ === T && null === this.request_ && (this.resumable_ ? null === this.uploadUrl_ ? this.createResumable_() : this.needToFetchStatus_ ? this.fetchStatus_() : this.needToFetchMetadata_ ? this.fetchMetadata_() : this.continueUpload_() : this.oneShotUpload_()) }, e.prototype.resolveToken_ = function(t) { var r = this;
                        this.authWrapper_.getAuthToken().then(function(e) { switch (r.state_) {
                                case T:
                                    t(e); break;
                                case U:
                                    r.transition_(O); break;
                                case E:
                                    r.transition_(k) } }) }, e.prototype.createResumable_ = function() { var v = this;
                        this.resolveToken_(function(e) { var t, r, n, o, i, a, s, u, l, c, p, h, f, d = (t = v.authWrapper_, r = v.location_, n = v.mappings_, o = v.blob_, i = v.metadata_, a = r.bucketOnlyServerUrl(), s = Se(r, o, i), u = { name: s.fullPath }, l = Z(a), c = { "X-Goog-Upload-Protocol": "resumable", "X-Goog-Upload-Command": "start", "X-Goog-Upload-Header-Content-Length": o.size(), "X-Goog-Upload-Header-Content-Type": s.contentType, "Content-Type": "application/json; charset=utf-8" }, p = ne(s, n), h = t.maxUploadRetryTime(), (f = new we(l, "POST", function(e, t) { var r;
                                    Ne(e); try { r = e.getResponseHeader("X-Goog-Upload-URL") } catch (e) { Te(!1) } return Te(j(r)), r }, h)).urlParams = u, f.headers = c, f.body = p, f.errorHandler = Ue(r), f),
                                _ = v.authWrapper_.makeRequest(d, e);
                            (v.request_ = _).getPromise().then(function(e) { v.request_ = null, v.uploadUrl_ = e, v.needToFetchStatus_ = !1, v.completeTransitions_() }, v.errorHandler_) }) }, e.prototype.fetchStatus_ = function() { var l = this,
                            c = this.uploadUrl_;
                        this.resolveToken_(function(e) { var t, r, n, i, o, a, s = (t = l.authWrapper_, r = l.location_, n = c, i = l.blob_, o = t.maxUploadRetryTime(), (a = new we(n, "POST", function(e, t) { var r = Ne(e, ["active", "final"]),
                                        n = null; try { n = e.getResponseHeader("X-Goog-Upload-Size-Received") } catch (e) { Te(!1) } var o = parseInt(n, 10); return Te(!isNaN(o)), new Ce(o, i.size(), "final" === r) }, o)).headers = { "X-Goog-Upload-Command": "query" }, a.errorHandler = Ue(r), a),
                                u = l.authWrapper_.makeRequest(s, e);
                            (l.request_ = u).getPromise().then(function(e) { e = e, l.request_ = null, l.updateProgress_(e.current), l.needToFetchStatus_ = !1, e.finalized && (l.needToFetchMetadata_ = !0), l.completeTransitions_() }, l.errorHandler_) }) }, e.prototype.continueUpload_ = function() { var n = this,
                            o = 262144 * this.chunkMultiplier_,
                            i = new Ce(this.transferred_, this.blob_.size()),
                            a = this.uploadUrl_;
                        this.resolveToken_(function(e) { var t; try { t = Pe(n.location_, n.authWrapper_, a, n.blob_, o, n.mappings_, i, n.makeProgressCallback_()) } catch (e) { return n.error_ = e, void n.transition_(x) } var r = n.authWrapper_.makeRequest(t, e);
                            (n.request_ = r).getPromise().then(function(e) { n.increaseMultiplier_(), n.request_ = null, n.updateProgress_(e.current), e.finalized ? (n.metadata_ = e.metadata, n.transition_(A)) : n.completeTransitions_() }, n.errorHandler_) }) }, e.prototype.increaseMultiplier_ = function() { 262144 * this.chunkMultiplier_ < 33554432 && (this.chunkMultiplier_ *= 2) }, e.prototype.fetchMetadata_ = function() { var n = this;
                        this.resolveToken_(function(e) { var t = xe(n.authWrapper_, n.location_, n.mappings_),
                                r = n.authWrapper_.makeRequest(t, e);
                            (n.request_ = r).getPromise().then(function(e) { n.request_ = null, n.metadata_ = e, n.transition_(A) }, n.metadataErrorHandler_) }) }, e.prototype.oneShotUpload_ = function() { var n = this;
                        this.resolveToken_(function(e) { var t = function(e, t, r, n, o) { var i = t.bucketOnlyServerUrl(),
                                        a = { "X-Goog-Upload-Protocol": "multipart" },
                                        s = function() { for (var e = "", t = 0; t < 2; t++) e += Math.random().toString().slice(2); return e }();
                                    a["Content-Type"] = "multipart/related; boundary=" + s; var u = Se(t, n, o),
                                        l = "--" + s + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + ne(u, r) + "\r\n--" + s + "\r\nContent-Type: " + u.contentType + "\r\n\r\n",
                                        c = "\r\n--" + s + "--",
                                        p = ge.getBlob(l, n, c); if (null === p) throw y(); var h = { name: u.fullPath },
                                        f = Z(i),
                                        d = e.maxUploadRetryTime(),
                                        _ = new we(f, "POST", Ee(e, r), d); return _.urlParams = h, _.headers = a, _.body = p.uploadData(), _.errorHandler = Ue(t), _ }(n.authWrapper_, n.location_, n.mappings_, n.blob_, n.metadata_),
                                r = n.authWrapper_.makeRequest(t, e);
                            (n.request_ = r).getPromise().then(function(e) { n.request_ = null, n.metadata_ = e, n.updateProgress_(n.blob_.size()), n.transition_(A) }, n.errorHandler_) }) }, e.prototype.updateProgress_ = function(e) { var t = this.transferred_;
                        this.transferred_ = e, this.transferred_ !== t && this.notifyObservers_() }, e.prototype.transition_ = function(e) { if (this.state_ !== e) switch (e) {
                            case U:
                            case E:
                                this.state_ = e, null !== this.request_ && this.request_.cancel(); break;
                            case T:
                                var t = this.state_ === k;
                                this.state_ = e, t && (this.notifyObservers_(), this.start_()); break;
                            case k:
                                this.state_ = e, this.notifyObservers_(); break;
                            case O:
                                this.error_ = l(), this.state_ = e, this.notifyObservers_(); break;
                            case x:
                            case A:
                                this.state_ = e, this.notifyObservers_() } }, e.prototype.completeTransitions_ = function() { switch (this.state_) {
                            case E:
                                this.transition_(k); break;
                            case U:
                                this.transition_(O); break;
                            case T:
                                this.start_() } }, Object.defineProperty(e.prototype, "snapshot", { get: function() { var e = C(this.state_); return new Ie(this.transferred_, this.blob_.size(), e, this.metadata_, this, this.ref_) }, enumerable: !0, configurable: !0 }), e.prototype.on = function(t, e, r, i) { var n = "Expected a function or an Object with one of `next`, `error`, `complete` properties.",
                            o = me(!0).validator,
                            a = be(null, !0).validator;

                        function s(e) { try { return void o(e) } catch (e) {} try { if (a(e), !(M(e.next) || M(e.error) || M(e.complete))) throw ""; return } catch (e) { throw n } }
                        he("on", [de(function(e) { if (t !== w.STATE_CHANGED) throw "Expected one of the event types: [" + w.STATE_CHANGED + "]." }), be(s, !0), me(!0), me(!0)], arguments); var u = this;

                        function l(o) { return function(e, t, r) { null !== o && he("on", o, arguments); var n = new Le(e, t, i); return u.addObserver_(n),
                                    function() { u.removeObserver_(n) } } } var c = [be(function(e) { if (null === e) throw n;
                            s(e) }), me(!0), me(!0)]; return !(M(e) || M(r) || M(i)) ? l(c) : l(null)(e, r, i) }, e.prototype.then = function(e, t) { return this.promise_.then(e, t) }, e.prototype.catch = function(e) { return this.then(null, e) }, e.prototype.addObserver_ = function(e) { this.observers_.push(e), this.notifyObserver_(e) }, e.prototype.removeObserver_ = function(e) { var t, r, n;
                        t = this.observers_, r = e, -1 !== (n = t.indexOf(r)) && t.splice(n, 1) }, e.prototype.notifyObservers_ = function() { var e, t = this;
                        this.finishPromise_(), (e = this.observers_, Array.prototype.slice.call(e)).forEach(function(e) { t.notifyObserver_(e) }) }, e.prototype.finishPromise_ = function() { if (null !== this.resolve_) { var e = !0; switch (C(this.state_)) {
                                case S.SUCCESS:
                                    De(this.resolve_.bind(null, this.snapshot))(); break;
                                case S.CANCELED:
                                case S.ERROR:
                                    De(this.reject_.bind(null, this.error_))(); break;
                                default:
                                    e = !1 }
                            e && (this.resolve_ = null, this.reject_ = null) } }, e.prototype.notifyObserver_ = function(e) { switch (C(this.state_)) {
                            case S.RUNNING:
                            case S.PAUSED:
                                e.next && De(e.next.bind(e, this.snapshot))(); break;
                            case S.SUCCESS:
                                e.complete && De(e.complete.bind(e))(); break;
                            case S.CANCELED:
                            case S.ERROR:
                                e.error && De(e.error.bind(e, this.error_))(); break;
                            default:
                                e.error && De(e.error.bind(e, this.error_))() } }, e.prototype.resume = function() { he("resume", [], arguments); var e = this.state_ === k || this.state_ === E; return e && this.transition_(T), e }, e.prototype.pause = function() { he("pause", [], arguments); var e = this.state_ === T; return e && this.transition_(E), e }, e.prototype.cancel = function() { he("cancel", [], arguments); var e = this.state_ === T || this.state_ === E; return e && this.transition_(U), e }, e }(),
                We = function() {
                    function r(e, t) { this.authWrapper = e, this.location = t instanceof V ? t : V.makeFromUrl(t) } return r.prototype.toString = function() { return he("toString", [], arguments), "gs://" + this.location.bucket + "/" + this.location.path }, r.prototype.newRef = function(e, t) { return new r(e, t) }, r.prototype.mappings = function() { return ee() }, r.prototype.child = function(e) { he("child", [de()], arguments); var t, r, n = (t = this.location.path, r = e.split("/").filter(function(e) { return 0 < e.length }).join("/"), 0 === t.length ? r : t + "/" + r),
                            o = new V(this.location.bucket, n); return this.newRef(this.authWrapper, o) }, Object.defineProperty(r.prototype, "parent", { get: function() { var e = function(e) { if (0 == e.length) return null; var t = e.lastIndexOf("/"); return -1 === t ? "" : e.slice(0, t) }(this.location.path); if (null === e) return null; var t = new V(this.location.bucket, e); return this.newRef(this.authWrapper, t) }, enumerable: !0, configurable: !0 }), Object.defineProperty(r.prototype, "root", { get: function() { var e = new V(this.location.bucket, ""); return this.newRef(this.authWrapper, e) }, enumerable: !0, configurable: !0 }), Object.defineProperty(r.prototype, "bucket", { get: function() { return this.location.bucket }, enumerable: !0, configurable: !0 }), Object.defineProperty(r.prototype, "fullPath", { get: function() { return this.location.path }, enumerable: !0, configurable: !0 }), Object.defineProperty(r.prototype, "name", { get: function() { return K(this.location.path) }, enumerable: !0, configurable: !0 }), Object.defineProperty(r.prototype, "storage", { get: function() { return this.authWrapper.service() }, enumerable: !0, configurable: !0 }), r.prototype.put = function(e, t) { return void 0 === t && (t = null), he("put", [new fe(function(e) { if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || H() && e instanceof Blob)) throw "Expected Blob or File." }), _e(!0)], arguments), this.throwIfRoot_("put"), new Me(this, this.authWrapper, this.location, this.mappings(), new ge(e), t) }, r.prototype.putString = function(e, t, r) { void 0 === t && (t = _.RAW), he("putString", [de(), de(a, !0), _e(!0)], arguments), this.throwIfRoot_("putString"); var n = v(t, e),
                            o = P(r); return !D(o.contentType) && D(n.contentType) && (o.contentType = n.contentType), new Me(this, this.authWrapper, this.location, this.mappings(), new ge(n.data, !0), o) }, r.prototype.delete = function() { he("delete", [], arguments), this.throwIfRoot_("delete"); var s = this; return this.authWrapper.getAuthToken().then(function(e) { var t, r, n, o, i, a = (t = s.authWrapper, r = s.location, n = Z(r.fullServerUrl()), o = t.maxOperationRetryTime(), (i = new we(n, "DELETE", function(e, t) {}, o)).successCodes = [200, 204], i.errorHandler = Oe(r), i); return s.authWrapper.makeRequest(a, e).getPromise() }) }, r.prototype.listAll = function() { he("listAll", [], arguments); var e = { prefixes: [], items: [] }; return this.listAllHelper(e).then(function() { return e }) }, r.prototype.listAllHelper = function(i, a) { return s = this, c = function() { var t, r, n, o; return e(this, function(e) { switch (e.label) {
                                    case 0:
                                        return n = { pageToken: a }, [4, this.list(n)];
                                    case 1:
                                        return o = e.sent(), (t = i.prefixes).push.apply(t, o.prefixes), (r = i.items).push.apply(r, o.items), null == o.nextPageToken ? [3, 3] : [4, this.listAllHelper(i, o.nextPageToken)];
                                    case 2:
                                        e.sent(), e.label = 3;
                                    case 3:
                                        return [2] } }) }, new((l = u = void 0) || (l = Promise))(function(e, t) {
                            function r(e) { try { o(c.next(e)) } catch (e) { t(e) } }

                            function n(e) { try { o(c.throw(e)) } catch (e) { t(e) } }

                            function o(t) { t.done ? e(t.value) : new l(function(e) { e(t.value) }).then(r, n) }
                            o((c = c.apply(s, u || [])).next()) }); var s, u, l, c }, r.prototype.list = function(n) { var e;
                        he("list", [(e = !0, new fe(pe, e))], arguments); var o = this; return this.authWrapper.getAuthToken().then(function(e) { var t = n || {},
                                r = function(e, t, r, n, o) { var i = {};
                                    t.isRoot ? i.prefix = "" : i.prefix = t.path + "/", r && 0 < r.length && (i.delimiter = r), n && (i.pageToken = n), o && (i.maxResults = o); var a = Z(t.bucketOnlyServerUrl()),
                                        s = e.maxOperationRetryTime(),
                                        u = new we(a, "GET", ke(e), s); return u.urlParams = i, u.errorHandler = Ue(t), u }(o.authWrapper, o.location, "/", t.pageToken, t.maxResults); return o.authWrapper.makeRequest(r, e).getPromise() }) }, r.prototype.getMetadata = function() { he("getMetadata", [], arguments), this.throwIfRoot_("getMetadata"); var r = this; return this.authWrapper.getAuthToken().then(function(e) { var t = xe(r.authWrapper, r.location, r.mappings()); return r.authWrapper.makeRequest(t, e).getPromise() }) }, r.prototype.updateMetadata = function(c) { he("updateMetadata", [_e()], arguments), this.throwIfRoot_("updateMetadata"); var p = this; return this.authWrapper.getAuthToken().then(function(e) { var t, r, n, o, i, a, s, u, l = (t = p.authWrapper, r = p.location, n = c, o = p.mappings(), i = Z(r.fullServerUrl()), a = ne(n, o), s = t.maxOperationRetryTime(), (u = new we(i, "PATCH", Ee(t, o), s)).headers = { "Content-Type": "application/json; charset=utf-8" }, u.body = a, u.errorHandler = Oe(r), u); return p.authWrapper.makeRequest(l, e).getPromise() }) }, r.prototype.getDownloadURL = function() { he("getDownloadURL", [], arguments), this.throwIfRoot_("getDownloadURL"); var u = this; return this.authWrapper.getAuthToken().then(function(e) { var t, r, n, o, i, a, s = (t = u.authWrapper, r = u.location, n = u.mappings(), o = Z(r.fullServerUrl()), i = t.maxOperationRetryTime(), (a = new we(o, "GET", Ae(t, n), i)).errorHandler = Oe(r), a); return u.authWrapper.makeRequest(s, e).getPromise().then(function(e) { if (null === e) throw new b(m.NO_DOWNLOAD_URL, "The given file does not have any download URLs."); return e }) }) }, r.prototype.throwIfRoot_ = function(e) { if ("" === this.location.path) throw t = e, new b(m.INVALID_ROOT_OPERATION, "The operation '" + t + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."); var t }, r }(),
                Be = function() {
                    function e(e) { var t;
                        this.promise_ = (t = e, Promise.reject(t)) } return e.prototype.getPromise = function() { return this.promise_ }, e.prototype.cancel = function(e) { void 0 === e && (e = !1) }, e }(),
                je = function() {
                    function e() { this.map_ = {}, this.id_ = -9007199254740991 } return e.prototype.addRequest = function(e) { var t = this.id_;
                        this.id_++, this.map_[t] = e; var r = this;

                        function n() { delete r.map_[t] }
                        e.getPromise().then(n, n) }, e.prototype.clear = function() { N(this.map_, function(e, t) { t && t.cancel(!0) }), this.map_ = {} }, e }(),
                qe = function() {
                    function a(e, t, r, n, o) { if (this.bucket_ = null, this.deleted_ = !1, this.app_ = e, null !== this.app_) { var i = this.app_.options;
                            D(i) && (this.bucket_ = a.extractBucket_(i)) }
                        this.storageRefMaker_ = t, this.requestMaker_ = r, this.pool_ = o, this.service_ = n, this.maxOperationRetryTime_ = 12e4, this.maxUploadRetryTime_ = 6e4, this.requestMap_ = new je } return a.extractBucket_ = function(e) { var t = e[p] || null; return null == t ? null : V.makeFromBucketSpec(t).bucket }, a.prototype.getAuthToken = function() { return null !== this.app_ && D(this.app_.INTERNAL) && D(this.app_.INTERNAL.getToken) ? this.app_.INTERNAL.getToken().then(function(e) { return null !== e ? e.accessToken : null }, function(e) { return null }) : I(null) }, a.prototype.bucket = function() { if (this.deleted_) throw c(); return this.bucket_ }, a.prototype.service = function() { return this.service_ }, a.prototype.makeStorageReference = function(e) { return this.storageRefMaker_(this, e) }, a.prototype.makeRequest = function(e, t) { if (this.deleted_) return new Be(c()); var r = this.requestMaker_(e, t, this.pool_); return this.requestMap_.addRequest(r), r }, a.prototype.deleteApp = function() { this.deleted_ = !0, this.app_ = null, this.requestMap_.clear() }, a.prototype.maxUploadRetryTime = function() { return this.maxUploadRetryTime_ }, a.prototype.setMaxUploadRetryTime = function(e) { this.maxUploadRetryTime_ = e }, a.prototype.maxOperationRetryTime = function() { return this.maxOperationRetryTime_ }, a.prototype.setMaxOperationRetryTime = function(e) { this.maxOperationRetryTime_ = e }, a }(); var Fe = function() {
                    function e(e, t, r, n, o, i, a, s, u, l, c) { this.pendingXhr_ = null, this.backoffId_ = null, this.resolve_ = null, this.reject_ = null, this.canceled_ = !1, this.appDelete_ = !1, this.url_ = e, this.method_ = t, this.headers_ = r, this.body_ = n, this.successCodes_ = o.slice(), this.additionalRetryCodes_ = i.slice(), this.callback_ = a, this.errorCallback_ = s, this.progressCallback_ = l, this.timeout_ = u, this.pool_ = c; var p = this;
                        this.promise_ = L(function(e, t) { p.resolve_ = e, p.reject_ = t, p.start_() }) } return e.prototype.start_ = function() { var s = this;

                        function e(e, t) { var r, n = s.resolve_,
                                o = s.reject_,
                                i = t.xhr; if (t.wasSuccessCode) try { var a = s.callback_(i, i.getResponseText());
                                M(a) ? n(a) : n() } catch (e) { o(e) } else null !== i ? ((r = u()).setServerResponseProp(i.getResponseText()), s.errorCallback_ ? o(s.errorCallback_(i, r)) : o(r)) : t.canceled ? o(r = s.appDelete_ ? c() : l()) : o(r = new b(m.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.")) }
                        this.canceled_ ? e(0, new He(!1, null, !0)) : this.backoffId_ = function(t, e, r) { var n = 1,
                                o = null,
                                i = !1,
                                a = 0;

                            function s() { return 2 === a } var u = !1;

                            function l() { u || (u = !0, e.apply(null, arguments)) }

                            function c(e) { o = setTimeout(function() { o = null, t(p, s()) }, e) }

                            function p(e) { for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                u || (e ? l.apply(null, arguments) : s() || i ? l.apply(null, arguments) : (n < 64 && (n *= 2), c(1 === a ? (a = 2, 0) : 1e3 * (n + Math.random())))) } var h = !1;

                            function f(e) { h || (h = !0, u || (null !== o ? (e || (a = 2), clearTimeout(o), c(0)) : e || (a = 1))) } return c(0), setTimeout(function() { f(i = !0) }, r), f }(function(i, e) { if (e) i(!1, new He(!1, null, !0));
                            else { var t = s.pool_.createXhrIo();
                                s.pendingXhr_ = t, null !== s.progressCallback_ && t.addUploadProgressListener(a), t.send(s.url_, s.method_, s.body_, s.headers_).then(function(e) { null !== s.progressCallback_ && e.removeUploadProgressListener(a), s.pendingXhr_ = null; var t = (e = e).getErrorCode() === R.NO_ERROR,
                                        r = e.getStatus(); if (t && !s.isRetryStatusCode_(r)) { var n = Re(s.successCodes_, r);
                                        i(!0, new He(n, e)) } else { var o = e.getErrorCode() === R.ABORT;
                                        i(!1, new He(!1, null, o)) } }) }

                            function a(e) { var t = e.loaded,
                                    r = e.lengthComputable ? e.total : -1;
                                null !== s.progressCallback_ && s.progressCallback_(t, r) } }, e, this.timeout_) }, e.prototype.getPromise = function() { return this.promise_ }, e.prototype.cancel = function(e) { this.canceled_ = !0, this.appDelete_ = e || !1, null !== this.backoffId_ && (0, this.backoffId_)(!1), null !== this.pendingXhr_ && this.pendingXhr_.abort() }, e.prototype.isRetryStatusCode_ = function(e) { var t = 500 <= e && e < 600,
                            r = Re([408, 429], e),
                            n = Re(this.additionalRetryCodes_, e); return t || r || n }, e }(),
                He = function(e, t, r) { this.wasSuccessCode = e, this.xhr = t, this.canceled = !!r };

            function ze(e, t, r) { var n, o, i, a, s = J(e.urlParams),
                    u = e.url + s,
                    l = P(e.headers); return n = l, null !== (o = t) && 0 < o.length && (n.Authorization = "Firebase " + o), i = l, a = void 0 !== Ze ? Ze.SDK_VERSION : "AppManager", i["X-Firebase-Storage-Version"] = "webjs/" + a, new Fe(u, e.method, l, e.body, e.successCodes, e.additionalRetryCodes, e.handler, e.errorHandler, e.timeout, e.progressCallback, r) } var Ge, Xe = function() {
                    function e(e, t, r) { if (this.bucket_ = null, this.authWrapper_ = new qe(e, function(e, t) { return new We(e, t) }, ze, this, t), this.app_ = e, null != r) this.bucket_ = V.makeFromBucketSpec(r);
                        else { var n = this.authWrapper_.bucket();
                            null != n && (this.bucket_ = new V(n, "")) }
                        this.internals_ = new Ve(this) } return e.prototype.ref = function(e) { if (he("ref", [de(function(e) { if (/^[A-Za-z]+:\/\//.test(e)) throw "Expected child path but got a URL, use refFromURL instead." }, !0)], arguments), null == this.bucket_) throw new Error("No Storage Bucket defined in Firebase Options."); var t = new We(this.authWrapper_, this.bucket_); return null != e ? t.child(e) : t }, e.prototype.refFromURL = function(e) { return he("refFromURL", [de(function(e) { if (!/^[A-Za-z]+:\/\//.test(e)) throw "Expected full URL but got a child path, use ref instead."; try { V.makeFromUrl(e) } catch (e) { throw "Expected valid full URL but got an invalid one." } }, !1)], arguments), new We(this.authWrapper_, e) }, Object.defineProperty(e.prototype, "maxUploadRetryTime", { get: function() { return this.authWrapper_.maxUploadRetryTime() }, enumerable: !0, configurable: !0 }), e.prototype.setMaxUploadRetryTime = function(e) { he("setMaxUploadRetryTime", [ve()], arguments), this.authWrapper_.setMaxUploadRetryTime(e) }, e.prototype.setMaxOperationRetryTime = function(e) { he("setMaxOperationRetryTime", [ve()], arguments), this.authWrapper_.setMaxOperationRetryTime(e) }, Object.defineProperty(e.prototype, "app", { get: function() { return this.app_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "INTERNAL", { get: function() { return this.internals_ }, enumerable: !0, configurable: !0 }), e }(),
                Ve = function() {
                    function e(e) { this.service_ = e } return e.prototype.delete = function() { return this.service_.authWrapper_.deleteApp(), I(void 0) }, e }();

            function Ke(e, t, r) { return new Xe(e, new G, r) }
            Ge = { TaskState: S, TaskEvent: w, StringFormat: _, Storage: Xe, Reference: We }, Ze.INTERNAL.registerService("storage", Ke, Ge, void 0, !0) }).apply(this, arguments) } catch (e) { throw console.error(e), new Error("Cannot instantiate firebase-storage - be sure to load firebase-app.js first.") } });
//# sourceMappingURL=firebase-storage.js.map