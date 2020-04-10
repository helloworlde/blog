(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{181:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),s("blockquote",[s("p",[t._v("数据库配置和默认配置基本一样，按照正常配置就可以，具体可以参考"),s("a",{attrs:{href:"https://github.com/alibaba/druid/blob/master/druid-spring-boot-starter/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/alibaba/druid/blob/master/druid-spring-boot-starter/README.md"),s("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"springboot中配置使用druid数据库连接池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot中配置使用druid数据库连接池","aria-hidden":"true"}},[this._v("#")]),this._v(" SpringBoot中配置使用Druid数据库连接池")])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("Druid 是阿里巴巴开源的Java数据库连接池插件，Druid能够提供强大的监控和扩展功能")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"配置使用druid数据库连接池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置使用druid数据库连接池","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置使用Druid数据库连接池")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加依赖")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Gradle")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[this._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[this._v("'com.alibaba:druid-spring-boot-starter:${version}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Maven")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alibaba"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("druid"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"配置数据库连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库连接","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置数据库连接")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("JDBC 配置")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("# 或spring.datasource.url= ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("# 或spring.datasource.username=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("# 或spring.datasource.password=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.driver-class-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#或 spring.datasource.driver-class-name=")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("连接池配置")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.initial-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.min-idle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.pool-prepared-statements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-pool-prepared-statement-per-connection-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v(" ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-open-prepared-statements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#和上面的等价")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.validation-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.validation-query-timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.test-on-borrow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.test-on-return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.test-while-idle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.time-between-eviction-runs-millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.min-evictable-idle-time-millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-evictable-idle-time-millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#配置多个英文逗号分隔")]),t._v("\n....//more\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("监控配置")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WebStatFilter配置，说明请参考Druid Wiki，配置_配置WebStatFilter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#是否启用StatFilter默认值true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.exclusions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.session-stat-enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.session-stat-max-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.principal-session-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.principal-cookie-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.profile-enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# StatViewServlet配置，说明请参考Druid Wiki，配置_StatViewServlet配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("#是否启用StatViewServlet默认值true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.reset-enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.login-username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.login-password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.deny")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Spring监控配置，说明请参考Druid Github Wiki，配置_Druid和Spring关联监控配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.aop-patterns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("# Spring监控AOP切入点，如x.y.z.service.*,配置多个英文逗号分隔")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果spring.datasource.druid.aop-patterns要代理的类没有定义interface请设置spring.aop.proxy-target-class=true")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("blockquote",[a("p",[this._v("配置好了之后启动应用就可以正常使用了，查看统计信息可以访问 http://localhost:8080/druid/index.html")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"参考模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考模板","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考模板")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("jdbc:mysql://localhost:3306/db?useSSL=false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.slave.username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("root")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.slave.password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Druid dataSource config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("com.alibaba.druid.pool.DruidDataSource")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.initial-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.min-idle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("60000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.pool-prepared-statements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-pool-prepared-statement-per-connection-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.max-open-prepared-statements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("20")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.validation-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("SELECT 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.validation-query-timeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("30000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.test-on-borrow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.test-on-return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.test-while-idle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.time-between-eviction-runs-millis=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.min-evictable-idle-time-millis=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.max-evictable-idle-time-millis=10000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Druid stat filter config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("stat,wall,log4j")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/druid/*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.web-stat-filter.exclusions=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.session-stat-enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.session-stat-max-count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.web-stat-filter.principal-session-name=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.web-stat-filter.principal-cookie-name=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.profile-enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.web-stat-filter.exclusions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("*.js,*.gif,*.jpg,*.bmp,*.png,*.css,*.ico,/druid/*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.stat.db-type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.stat.log-slow-sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.stat.slow-sql-millis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.stat.merge-sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.wall.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.wall.db-type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("mysql")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.wall.config.delete-allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.filter.wall.config.drop-table-allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Druid manage page config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.url-pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/druid/*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.reset-enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.login-username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("admin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("spring.datasource.druid.stat-view-servlet.login-password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("admin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.stat-view-servlet.allow=")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#spring.datasource.druid.stat-view-servlet.deny=")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="SpringBoot中配置使用Druid数据库连接池.md";a.default=r.exports}}]);