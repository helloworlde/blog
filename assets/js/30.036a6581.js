(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{265:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"gradle-添加-jacoco-分析单元测试覆盖率工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-添加-jacoco-分析单元测试覆盖率工具","aria-hidden":"true"}},[t._v("#")]),t._v(" Gradle 添加 Jacoco 分析单元测试覆盖率工具")]),t._v(" "),s("blockquote",[s("p",[t._v("Jacoco  是一个免费的 Java 单元测试覆盖率分析工具，在 Gradle 中添加插件，在编译的同事进行单元测试覆盖率分析")])]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-groovy extra-class"},[s("pre",{pre:!0,attrs:{class:"language-groovy"}},[s("code",[t._v("buildscript "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"https://plugins.gradle.org/m2/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\napply plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'java'")]),t._v("\napply plugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jacoco'")]),t._v("\n\n\ngroup "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cn.com.hellowood'")]),t._v("\nversion "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.1-SNAPSHOT'")]),t._v("\nsourceCompatibility "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("\n\nrepositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token string gstring"}},[t._v('"https://plugins.gradle.org/m2/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nwar "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    baseName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Security'")]),t._v("\n    version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\njacocoTestReport "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reports "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        xml"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("enabled "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("enabled "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ncheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("dependsOn jacocoTestReport\n")])])]),s("h2",{attrs:{id:"生成结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成结果","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成结果")]),t._v(" "),s("blockquote",[s("p",[t._v("编译完成后会在 "),s("code",[t._v("${buildDir}/build/reports/jacoco/")]),t._v(" 下会生成报告")])])])}],!1,null,null,null);r.options.__file="Gradle 使用-Jacoco-分析单元测试覆盖率工具.md";a.default=r.exports}}]);