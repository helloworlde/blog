(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{167:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"ubuntu-docker-配置-tomcat-和-nginx-使用-https-访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-docker-配置-tomcat-和-nginx-使用-https-访问","aria-hidden":"true"}},[t._v("#")]),t._v(" Ubuntu Docker 配置 Tomcat 和 Nginx 使用 HTTPS 访问")]),t._v(" "),s("h2",{attrs:{id:"安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 Docker")]),t._v(" "),s("h3",{attrs:{id:"使用脚本自动安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用脚本自动安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL get.docker.com -o get-docker.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" sh get-docker.sh --mirror Aliyun\n")])])]),s("h3",{attrs:{id:"更改镜像地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改镜像地址","aria-hidden":"true"}},[t._v("#")]),t._v(" 更改镜像地址")]),t._v(" "),s("ul",[s("li",[t._v("修改或新建 "),s("code",[t._v("/etc/docker/daemon.json")])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"启动-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动 Docker")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),t._v(" docker\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start docker\n")])])]),s("h2",{attrs:{id:"配置-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-tomcat","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 Tomcat")]),t._v(" "),s("h3",{attrs:{id:"启动-tomcat-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-tomcat-容器","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动 Tomcat 容器")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker pull tomcat\ndocker run --name tomcat -d -p 8080:8080 tomcat\n")])])]),s("h3",{attrs:{id:"修改-tomcat-manager-应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改-tomcat-manager-应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 Tomcat Manager 应用")]),t._v(" "),s("ul",[s("li",[t._v("修改 "),s("code",[t._v("webapps/manager/META-INF/content.xml")]),t._v("，允许需要的IP访问，这里运行所有的IP访问")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Context")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("antiResourceLocking")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("privileged")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Valve")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("org.apache.catalina.valves.RemoteAddrValve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("^.*$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Manager")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sessionAttributeValueClassNameFilter")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("java\\.lang\\.(?:Boolean|Integer|Long|Number|String)|org\\.apache\\.catalina\\.filters\\.CsrfPreventionFilter\\$LruCache(?:\\$1)?|java\\.util\\.(?:Linked)?HashMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"配置-tomcat-用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-tomcat-用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 Tomcat 用户")]),t._v(" "),s("ul",[s("li",[t._v("修改 "),s("code",[t._v("conf/tomcat-user.xml")]),t._v("，添加用户")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("role")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("admin-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("role")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manager-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tomcat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("roles")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manager-gui,admin-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"配置-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 Nginx")]),t._v(" "),s("h3",{attrs:{id:"配置目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置目录")]),t._v(" "),s("ul",[s("li",[t._v("新建目录 "),s("code",[t._v("/home/ubuntu/hellowood/dev/nginx/conf")]),t._v(", "),s("code",[t._v("/home/ubuntu/hellowood/dev/nginx/log")]),t._v(", "),s("code",[t._v("/home/ubuntu/hellowood/dev/nginx/certs")])]),t._v(" "),s("li",[t._v("下载并解压相应的Nginx证书文件到 "),s("code",[t._v("/home/ubuntu/hellowood/dev/nginx/conf")])])]),t._v(" "),s("h3",{attrs:{id:"添加-nginx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-nginx-配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加 Nginx 配置")]),t._v(" "),s("ul",[s("li",[t._v("nginx.conf")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      listen 80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      listen 443 ssl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      server_name hellowood.com.cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ssl_certificate /etc/nginx/certs/hellowood.com.cn_bundle.crt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ssl_certificate_key /etc/nginx/certs/hellowood.com.cn.key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass http://tomcat:8080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("http://tomcat:8080")]),t._v(": 将所有请求都转发到 "),s("code",[t._v("tomcat")]),t._v(" 容器的 "),s("code",[t._v("8080")]),t._v("端口(不是映射端口)")]),t._v(" "),s("h3",{attrs:{id:"启动-nginx-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-nginx-容器","aria-hidden":"true"}},[t._v("#")]),t._v(" 启动 Nginx 容器")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker pull nginx\ndocker run --name nginx -d -p 80:80 -p 443:443 \\\n  --link tomcat:tomcat \\\n  -v /home/ubuntu/hellowood/dev/nginx/conf:/etc/nginx/conf.d \\ \n  -v /home/ubuntu/hellowood/dev/nginx/log:/var/log/nginx \\ \n  -v /home/ubuntu/hellowood/dev/nginx/certs:/etc/nginx/certs nginx\n")])])]),s("p",[t._v("此时，访问相应的域名："),s("code",[t._v("http://hellowood.com.cn")]),t._v("和"),s("code",[t._v("https://hellowood.com.cn")]),t._v("会显示"),s("code",[t._v("Tomcat")]),t._v(" 的首页，配置完成")])])}],!1,null,null,null);e.options.__file="Docker-配置Ubuntu-下-Tomcat-和-Nginx-使用-HTTPS-访问.md";a.default=e.exports}}]);