(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{275:function(e,a,r){"use strict";r.r(a);var s=r(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"docker-容器中运行-docker-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器中运行-docker-命令","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker 容器中运行 Docker 命令")]),e._v(" "),r("blockquote",[r("p",[e._v("在使用 GitLab/Jenkins 等 CI 软件的时候需要使用 Docker 命令来构建镜像，需要在容器中使用 Docker 命令；通过将宿主机的 Docker 共享给容器即可")])]),e._v(" "),r("ul",[r("li",[e._v("在启动容器时添加以下命令：")])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("--privileged \\\n-v /var/run/docker.sock:/var/run/docker.sock \\\n-v "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" docker"),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("r:/bin/docker \\\n")])])]),r("blockquote",[r("ul",[r("li",[r("code",[e._v("--privileged")]),e._v(" 表示该容器真正启用 root 权限")]),e._v(" "),r("li",[r("code",[e._v("-v /var/run/docker.sock:/var/run/docker.sock")]),e._v("和"),r("code",[e._v("-v $(which docker)r:/bin/docker")]),e._v("命令将相关的 Docker 文件挂载到容器")])])]),e._v(" "),r("hr"),e._v(" "),r("ul",[r("li",[e._v("Demo: 启动 GitLab")])]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("docker run --name gitlab-ee \\\n    -d -p 443:443 -p 80:80 -p 22:22 \\\n    --privileged \\\n    --restart always \\\n    --hostname 10.0.0.24 \\\n    -v /Users/hellowood/gitlab/logs:/var/log/gitlab \\\n    -v /Users/hellowood/gitlab/data:/var/opt/gitlab \\\n    -v /Users/hellowood/.m2:/root/.m2 \\\n    -v /Users/hellowood/.gradle:/root/.gradle \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    -v "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" docker"),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":/bin/docker \\\n    gitlab/gitlab-ee:latest\n")])])])])}],!1,null,null,null);t.options.__file="Docker-容器中运行-Docker-命令.md";a.default=t.exports}}]);