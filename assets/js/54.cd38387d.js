(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{286:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"使用-github-作为-helm-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-github-作为-helm-仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 GitHub 作为 Helm 仓库")]),a._v(" "),s("blockquote",[s("p",[a._v("使用 GitHub 作为 Helm 的仓库；在创建前需要按照 Helm，以 Helm3 为例")])]),a._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),s("ul",[s("li",[a._v("创建仓库")])]),a._v(" "),s("p",[a._v("在 GitHub 上创建名为 "),s("code",[a._v("helm-chart")]),a._v("的仓库")]),a._v(" "),s("ul",[s("li",[a._v("本地创建 "),s("code",[a._v("helm-chart")]),a._v("文件夹")])]),a._v(" "),s("h2",{attrs:{id:"创建并配置仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建并配置仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建并配置仓库")]),a._v(" "),s("ul",[s("li",[a._v("进入文件夹，并执行以下命令创建 Helm 包")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" helm-chart-sources\n\nhelm create helm-chart-sources/helloworld\n")])])]),s("p",[a._v("此时，已经在 "),s("code",[a._v("helm-chart-resources")]),a._v("目录下创建出了 "),s("code",[a._v("helloworld")]),a._v("这个包的配置文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n└── helm-chart-sources\n    └── helloworld\n        ├── Chart.yaml\n        ├── charts\n        ├── templates\n        │   ├── NOTES.txt\n        │   ├── _helpers.tpl\n        │   ├── deployment.yaml\n        │   ├── ingress.yaml\n        │   ├── service.yaml\n        │   ├── serviceaccount.yaml\n        │   └── tests\n        │       └── test-connection.yaml\n        └── values.yaml\n\n5 directories, 9 files\n")])])]),s("p",[a._v("修改为自己的相应的配置")]),a._v(" "),s("ul",[s("li",[a._v("检查配置")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm lint helm-chart-sources/*\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("==> Linting helm-chart-sources/helloworld\n[INFO] Chart.yaml: icon is recommended\n\n1 chart(s) linted, 0 chart(s) failed\n")])])]),s("h2",{attrs:{id:"打包发布应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包发布应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 打包发布应用")]),a._v(" "),s("ul",[s("li",[a._v("打包应用")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm package helm-chart-sources/*\n")])])]),s("ul",[s("li",[a._v("添加描述文件 index.yaml")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm repo index --url https://helloworlde.github.io/helm-chart/ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("对应的 url 即为 repo 的 url")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" index.yaml\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("helloworld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("appVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1.16.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2019-12-07T17:55:16.095749+08:00"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" A Helm chart for Kubernetes\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("digest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 5909523dffde5b12f3c589bcea2d31a5785aa437dc8ea6ed147fcbf57b13a671\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" helloworld\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" application\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("urls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//helloworlde.github.io/helm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("chart/helloworld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("0.1.0.tgz\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0.1.0\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("generated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2019-12-07T17:55:16.092676+08:00"')]),a._v("\n")])])]),s("ul",[s("li",[s("p",[a._v("提交并推送到仓库中")])]),a._v(" "),s("li",[s("p",[a._v("配置仓库开启 GitHub Pages")])])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://hellowoodes.oss-cn-beijing.aliyuncs.com/picture/helm-chart-github-page.png",alt:"helm-chart-github-page.png"}})]),a._v(" "),s("h2",{attrs:{id:"客户端添加安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端添加安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 客户端添加安装")]),a._v(" "),s("ul",[s("li",[a._v("添加仓库到 Helm 客户端")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm repo add myrepo https://helloworlde.github.io/helm-chart\n")])])]),s("ul",[s("li",[a._v("查找应用")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm search repo seata\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("NAME              \tCHART VERSION\tAPP VERSION\tDESCRIPTION\nmyrepo/helloworlde\t0.1.0        \t1.0        \tA Helm chart for Kubernetes\n")])])]),s("ul",[s("li",[a._v("安装应用")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("helm install helloworld helloworld\n")])])]),s("h2",{attrs:{id:"升级-helm-版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级-helm-版本","aria-hidden":"true"}},[a._v("#")]),a._v(" 升级 Helm 版本")]),a._v(" "),s("p",[a._v("修改版本号为 "),s("code",[a._v("0.1.1")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vi helm-chart-sources/helloworld/Chart.yaml\n")])])]),s("ul",[s("li",[a._v("打包")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm package helm-chart-sources/*\n")])])]),s("ul",[s("li",[a._v("修改描述文件 index.yaml")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("helm repo index --url https://helloworlde.github.io/helm-chart/ --merge index.yaml "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("此时 index.yaml 内容变为")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("entries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("helloworld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("appVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1.16.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2019-12-07T18:08:17.053158+08:00"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" A Helm chart for Kubernetes\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("digest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" aca5feeb8137addab872a98e5da5e4e4aa57d5523faeeedf1cd5c672b26c1274\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" helloworld\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" application\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("urls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//helloworlde.github.io/helm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("chart/helloworld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("0.1.1.tgz\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0.1.1\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("appVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1.16.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2019-12-07T18:08:17.052134+08:00"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" A Helm chart for Kubernetes\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("digest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 5909523dffde5b12f3c589bcea2d31a5785aa437dc8ea6ed147fcbf57b13a671\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" helloworld\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" application\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("urls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//helloworlde.github.io/helm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("chart/helloworld"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("0.1.0.tgz\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 0.1.0\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("generated")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2019-12-07T18:08:17.050373+08:00"')]),a._v("\n")])])]),s("p",[a._v("再次提交，即完成 Helm 包的升级")])])}],!1,null,null,null);n.options.__file="使用-GitHub-作为-Helm-仓库.md";t.default=n.exports}}]);