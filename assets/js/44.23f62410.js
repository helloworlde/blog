(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{236:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),s("blockquote",[s("p",[t._v("这三种方式对应的配置文件并不一样，需要特别注意\n另外"),s("code",[t._v("protocol")]),t._v("如果写成"),s("code",[t._v("HTTP/1.1")]),t._v("也会报错，应当使用以下三个中的一个，当使用APR的时候需要从"),s("a",{attrs:{href:"http://tomcat.apache.org/tomcat-7.0-doc/apr.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),s("code",[t._v("tcnative-1.dll")]),s("OutboundLink")],1),t._v("放到Tomcat的bin目录下，否则会报错")])]),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("详细配置请看官方文档 "),s("a",{attrs:{href:"http://tomcat.apache.org/tomcat-9.0-doc/ssl-howto.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://tomcat.apache.org/tomcat-9.0-doc/ssl-howto.html"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"tomcat9-配置https连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat9-配置https连接","aria-hidden":"true"}},[this._v("#")]),this._v(" Tomcat9 配置HTTPS连接")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("p",[t._v("Tomcat中配置HTTPS连接可以分为两步：")]),t._v(" "),s("ol",[s("li",[t._v("生成证书")]),t._v(" "),s("li",[t._v("配置Tomcat")])])]),t._v(" "),s("li",[s("p",[t._v("准备工作")]),t._v(" "),s("ul",[s("li",[t._v("JDK")]),t._v(" "),s("li",[t._v("Tomcat")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"_1-生成证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成证书","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 生成证书")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("证书可以使用Java来生成")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("直接使用命令生成证书")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("keytool -genkeypair -alias "),a("span",{pre:!0,attrs:{class:"token string"}},[this._v('"tomcat"')]),this._v(" -keyalg "),a("span",{pre:!0,attrs:{class:"token string"}},[this._v('"RSA"')]),this._v(" -keystore "),a("span",{pre:!0,attrs:{class:"token string"}},[this._v('"d:\\DevConfig\\tomcat.keystore"')]),this._v("  \n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20170424210011905?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzM2MDg1MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"生成Keystore"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("这样就会在"),a("code",[this._v("F:\\")]),this._v("下生成一个"),a("code",[this._v("tomcat.keystore")]),this._v(" 文件\n密码在配置tomcat的时候会用到")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"_2-配置tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置tomcat","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 配置Tomcat")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("修改"),a("code",[this._v("TOMCAT_HOME\\conf\\server.xml")]),this._v("文件，将以下内容粘贴到Tomcat配置文件中")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Connector")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.coyote.http11.Http11NioProtocol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8443"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxThreads")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("200"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scheme")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("secure")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("SSLEnabled")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keystoreFile")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("F:\\tomcat.keystore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("keystorePass")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("clientAuth")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sslProtocol")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("TLS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("保存后启动Tomcat，访问"),a("code",[this._v("https://localhost:8433")]),this._v("即可")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://img-blog.csdn.net/20170424211734554?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzM2MDg1MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"Tomcat Https"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("p",[this._v("因为CA证书是自己生成的，不被浏览器认可，所以会被当做不安全网站，但不影响使用")])]),this._v(" "),a("li",[a("p",[this._v("需要注意在配置文件有三种不同的实现方式")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("    - JSSE （作为Java运行部分）\n    - JSSE  （使用OpenSSL）\n    - APR （使用OpenSSL）\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("org.apache.coyote.http11.Http11NioProtocol\norg.apache.coyote.http11.Http11Nio2Protocol\norg.apache.coyote.http11.Http11AprProtocol\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("这里的配置是第一种方式，也是最简单的方式")])])}],!1,null,null,null);n.options.__file="Tomcat9-配置HTTPS连接.md";a.default=n.exports}}]);