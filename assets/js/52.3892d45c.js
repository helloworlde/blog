(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{228:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("在 Kubernetes 中通过yaml 配置文件预先声明部署 SpringBoot 应用")]),t._v(" "),a("p",[t._v("代码地址 "),a("a",{attrs:{href:"https://github.com/helloworlde/k8s-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/helloworlde/k8s-service"),a("OutboundLink")],1)])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"kubernetes-中部署-springboot-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-中部署-springboot-应用","aria-hidden":"true"}},[this._v("#")]),this._v(" Kubernetes 中部署 SpringBoot 应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"创建-springboot-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-springboot-应用","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建 SpringBoot 应用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建名为  k8s-service 的 SpringBoot 应用")]),this._v(" "),s("li",[this._v("添加 REST API\n"),s("ul",[s("li",[this._v("K8sController.java")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hellowood"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("k8sservice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetMapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestMapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RestController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RestController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@RequestMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K8sController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Kubernetes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@GetMapping")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/healthz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" String "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("healthz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ok"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("添加 Dockerfile")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-dockerfile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('FROM openjdk:8-jdk-alpine\nVOLUME /tmp\nENV TZ=Asia/Shanghai\nRUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone\nARG JAR_FILE\nADD ${JAR_FILE} app.jar\nENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", "-Duser.timezone=GMT+08", "-jar","/app.jar"]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("编译打包")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("./gradlew clean build -x "),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("test")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("生成并推送镜像")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("./gradlew dockerPush -i\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在-kubernetes-中添加服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-kubernetes-中添加服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 在  Kubernetes 中添加服务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("添加 k8s-demo.yaml")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" default\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30002")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" registry.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("qingdao.aliyuncs.com/hellowoodes/k8s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("livenessProbe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpGet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /healthz\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HTTP\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("periodSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("initialDelaySeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("创建服务")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("kubectl apply -f k8s-service.yaml\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("等待服务启动之后访问 "),s("code",[this._v("${NodeIP}:30090")]),this._v("，会返回 "),s("code",[this._v("Hello Kubernetes")]),this._v("，部署完成")])])}],!1,null,null,null);e.options.__file="Kubernetes-中部署-SpringBoot-应用.md";s.default=e.exports}}]);