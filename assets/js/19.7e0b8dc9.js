(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{282:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("blockquote",[e("p",[t._v("所有内容均来自"),e("a",{attrs:{href:"http://getgauge.io/documentation/user/current/advanced_readings/step_alias.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gauge官网文档"),e("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"gauge-中-step-使用别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gauge-中-step-使用别名","aria-hidden":"true"}},[this._v("#")]),this._v(" Gauge 中 Step 使用别名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在执行的过程中，可能需要使用不同的名称来执行同样的操作，所以使用别名来区分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在执行的过程中，可能需要使用不同的名称来执行同样的操作，所以使用别名来区分","aria-hidden":"true"}},[this._v("#")]),this._v(" 在执行的过程中，可能需要使用不同的名称来执行同样的操作，所以使用别名来区分")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在这个Scenario中，第一步和第三步是相同的操作，但是表示的方式不同")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-Markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    User Creation")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    =============")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    Multiple Users")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    --------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v('    * Create a user "user 1"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v('    * Verify "user 1" has access to dashboard')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v('    * Create another user "user 2"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v('    * Verify "user 2" has access to dashboard')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用别名即可解决这个问题：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Users")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Step")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Create a user <user_name>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Create another user <user_name>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String user_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create user user_name")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在这个两个Scenario中，发送邮件的操作是相同的")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-Markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    User Creation")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    -------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    * User creates a new account")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v('    * A "welcome" email is sent to the user')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    Shopping Cart")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    -------------")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    * User checks out the shopping cart")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    * Payment is successfully received")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v('    * An email confirming the "order" is sent')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用别名：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Users")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Step")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A <email_type> email is sent to the user"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"An email confirming the <email_type> is sent"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendEmail")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String email_type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send email of email_type")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="Gauge-中Step使用别名.md";s.default=n.exports}}]);