(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{217:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("在树莓派官网的连接，找到 Ubuntu，根据指引，找到 Ubuntu 的镜像，即"),s("a",{attrs:{href:"https://ubuntu.com/download/raspberry-pi",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ubuntu.com/download/raspberry-pi"),s("OutboundLink")],1),t._v(" "),s("img",{attrs:{src:"https://hellowoodes.oss-cn-beijing.aliyuncs.com/picture/raspberrypi-ubuntu.png",alt:"raspberrypi-ubuntu.png"}})]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("点击下载 64 位镜像，随后会开始下载"),s("a",{attrs:{href:"http://cdimage.ubuntu.com/releases/19.10.1/release/ubuntu-19.10.1-preinstalled-server-arm64+raspi3.img.xz?_ga=2.165606655.1314896456.1576331584-894154124.1576331584",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu-19.10.1-preinstalled-server-arm64+raspi3.img.xz"),s("OutboundLink")],1),t._v("这个文件")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("但是这个文件下载很慢，也没有国内的镜像，可以使用迅雷下载，或者直接下载上传的镜像 "),s("a",{attrs:{href:"https://hellowoodes.oss-cn-beijing.aliyuncs.com/picture/ubuntu-19.10.1-preinstalled-server-arm64+raspi3.img.xz",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu-19.10.1-preinstalled-server-arm64+raspi3.img.xz"),s("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("刻录镜像前，要先将 SD 卡格式化，在 Mac 上，可以使用官方推荐的"),s("a",{attrs:{href:"https://www.sdcard.org/downloads/formatter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SD Card Formatter"),s("OutboundLink")],1),t._v(", 也可以用上传到地址进行下载Mac 版："),s("a",{attrs:{href:"https://hellowoodes.oss-cn-beijing.aliyuncs.com/picture/SDCardFormatterv5_Mac.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDCardFormatterv5_Mac.zip"),s("OutboundLink")],1)]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("刻录镜像有多种方式，不同平台操作不同，可以参考 "),s("a",{attrs:{href:"https://ubuntu.com/download/iot/installation-media",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ubuntu.com/download/iot/installation-media"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在 Mac 上，可以用官方推荐的软件"),s("a",{attrs:{href:"https://www.balena.io/etcher",target:"_blank",rel:"noopener noreferrer"}},[t._v("balenaEtcher"),s("OutboundLink")],1),t._v("，可以从上传的位置下载"),s("a",{attrs:{href:"https://hellowoodes.oss-cn-beijing.aliyuncs.com/picture/balenaEtcher-1.5.70.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("balenaEtcher-1.5.70.dmg"),s("OutboundLink")],1),t._v("，也可以直接用命令行执行")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._m(16),t._v(" "),t._m(17),s("p",[t._v("这个过程可能要十几分钟，取决于 SD 卡的速度，需要耐心等待，直到提示完成")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),s("p",[t._v("根据提示输入密码即可")]),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("默认的树莓派会使用网线，如果有可以用的网线，直接插入，更新 WiFi 配置即可，如果不能用，则需要手动配置 WiFi")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._m(28),t._v(" "),t._m(29),s("p",[t._v("此时的配置文件：")]),t._v(" "),t._m(30),s("p",[t._v("需要新加 WiFi 的配置")]),t._v(" "),t._m(31),s("p",[t._v("将无线网的名称和密码填写上")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),s("p",[t._v("如果检查结果中没有 error，则说明正常")]),t._v(" "),t._m(35),t._v(" "),t._m(36),s("p",[t._v("如果检查结果中没有 error，则说明正常")]),t._v(" "),t._m(37),t._v(" "),t._m(38),s("p",[t._v("设置完成后，重启树莓派")]),t._v(" "),t._m(39),s("p",[t._v("待重启完成后即可自动连接上 WiFi")]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),s("p",[t._v("获取 IP 可以从路由器的配置界面查看到；也可以使用在树莓派上通过命令找到")]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._m(44),t._v(" "),t._m(45),t._m(46),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),s("p",[t._v("默认的 22 端口是关闭的，需要手动打开")]),t._v(" "),t._m(50),t._m(51),t._v(" "),t._m(52),t._m(53),t._m(54),t._v(" "),s("p",[t._v("配置key 可以在开启了 ssh 后，通过账号密码，将 key 拷贝到树莓派")]),t._v(" "),t._m(55),s("p",[t._v("或者上传包含自己key 的文件，在树莓派上下载")]),t._v(" "),t._m(56),s("hr"),t._v(" "),t._m(57),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.raspberrypi.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RaspberryPi Downloads"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://ubuntu.com/download/raspberry-pi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Ubuntu Server on a Raspberry Pi 2, 3 or 4"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://ubuntu.com/download/iot/installation-media",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create installation media for Ubuntu"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"}},[t._v("balenaEtcher"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://raspberrypi.stackexchange.com/questions/98598/how-to-setup-the-raspberry-pi-3-onboard-wifi-for-ubuntu-server-18-04-with-netpla",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to setup the Raspberry Pi 3 onboard WiFi for Ubuntu Server 18.04 with netplan?"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"树莓派-4b-无网线安装-ubuntu-并初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#树莓派-4b-无网线安装-ubuntu-并初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" 树莓派 4b 无网线安装 Ubuntu 并初始化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("必需设备：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("树莓派 4b")]),t._v(" "),s("li",[t._v("SD 卡")]),t._v(" "),s("li",[t._v("HDMI 线")]),t._v(" "),s("li",[t._v("显示器")]),t._v(" "),s("li",[t._v("键盘")]),t._v(" "),s("li",[t._v("电源及数据线")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"设置镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://hellowoodes.oss-cn-beijing.aliyuncs.com/picture/raspberrypi-ubuntu-download.png",alt:"raspberrypi-ubuntu-download.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"刻录镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刻录镜像","aria-hidden":"true"}},[this._v("#")]),this._v(" 刻录镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"格式化-sd卡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#格式化-sd卡","aria-hidden":"true"}},[this._v("#")]),this._v(" 格式化 SD卡")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"刻录镜像-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刻录镜像-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 刻录镜像")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("查找 SD 卡挂载名称")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("diskutil list\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/dev/disk0 (internal, physical):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:      GUID_partition_scheme                        *500.3 GB   disk0\n   1:                        EFI EFI                     314.6 MB   disk0s1\n   2:                 Apple_APFS Container disk1         500.0 GB   disk0s2\n\n/dev/disk1 (synthesized):\n   #:                       TYPE NAME                    SIZE       IDENTIFIER\n   0:      APFS Container Scheme -                      +500.0 GB   disk1\n                                 Physical Store disk0s2\n   1:                APFS Volume Macintosh HD - 数据     280.9 GB   disk1s1\n   2:                APFS Volume Preboot                 82.4 MB    disk1s2\n   3:                APFS Volume Recovery                528.5 MB   disk1s3\n   4:                APFS Volume VM                      8.6 GB     disk1s4\n   5:                APFS Volume Macintosh HD            10.8 GB    disk1s5\n/dev/disk3\n#:                       TYPE NAME                    SIZE       IDENTIFIER\n0:     FDisk_partition_scheme                        *32.0 GB    disk3\n1:                 DOS_FAT_32 SD                      32.0 GB    disk3s1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其中的 "),e("code",[this._v("/dev/disk3")]),this._v("就是 SD卡")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("取消挂载")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("diskutil unmountDisk /dev/disk3\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Unmount of all volumes on /dev/disk3 was successful\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("复制镜像到 SD 卡")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" sh -c "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'gunzip -c /Users/xxx/Downloads/ubuntu-19.10.1-preinstalled-server-arm64+raspi3.img.xz | sudo dd of=/dev/disk3 bs=32m'")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("3719+1 records in\n3719+1 records out\n3899999744 bytes transferred in 642.512167 secs (6069924 bytes/sec)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"启动树莓派"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动树莓派","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动树莓派")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("将 SD 卡插入树莓派中，接通电源，连接 HDMI 线到显示器，并插入键盘；等待启动完成后会提示输入用户，默认的用户和密码都是"),e("code",[this._v("ubuntu")]),this._v("，进入后会要求修改密码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("修改 root 用户密码")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("passwd")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"设置-wifi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-wifi","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置 WiFi")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"查找可用的接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找可用的接口","aria-hidden":"true"}},[this._v("#")]),this._v(" 查找可用的接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("ip "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("link")]),this._v(" show \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n2: eth0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc mq state DOWN mode DEFAULT group default qlen 1000\n    link/ether dc:a6:32:5f:b4:3e brd ff:ff:ff:ff:ff:ff\n3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DORMANT group default qlen 1000\n    link/ether dc:a6:32:5f:b4:3f brd ff:ff:ff:ff:ff:ff\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"编辑配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 编辑配置文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cp")]),this._v(" /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.bk\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("vi")]),this._v(" /etc/netplan/50-cloud-init.yaml\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This file is generated from information provided by")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the datasource.  Changes to it will not persist across an instance.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To disable cloud-init's network configuration capabilities, write a file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# network: {config: disabled}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ethernets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eth0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dhcp4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("optional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ethernets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("eth0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dhcp4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("optional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wifis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wlan0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("optional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access-points")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v('"YOUR_NETWORK_SSID"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_PASSWORD"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dhcp4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"检查配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 检查配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("检查")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" netplan --debug try\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("生成配置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" netplan --debug generate\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("应用配置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" netplan --debug apply\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("reboot")]),this._v(" now\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置-ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 SSH")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"获取-ip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取-ip","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取 IP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("安装 "),e("code",[this._v("net-tools")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("apt update \napt "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" net-tools\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("待安装完成后，查找 IP")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("ifconfig")]),this._v(" \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("eth0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500\n        ether dc:a6:32:5f:b4:3e  txqueuelen 1000  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10<host>\n        loop  txqueuelen 1000  (Local Loopback)\n        RX packets 102  bytes 7390 (7.3 KB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 102  bytes 7390 (7.3 KB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nwlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.199.5  netmask 255.255.255.0  broadcast 192.168.199.255\n        inet6 fe80::dea6:32ff:fe5f:b43f  prefixlen 64  scopeid 0x20<link>\n        ether dc:a6:32:5f:b4:3f  txqueuelen 1000  (Ethernet)\n        RX packets 292  bytes 78773 (78.7 KB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 181  bytes 32959 (32.9 KB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其中的 "),e("code",[this._v("192.168.199.5")]),this._v("就是树莓派的 IP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置-ssh-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 SSH")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("开启远程登录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("vi")]),this._v(" /etc/ssh/sshd_config\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("需要将 "),e("code",[this._v("#Port 22")]),this._v("的注释去掉，然后重启 SSH")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("/etc/init.d/ssh restart\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[ ok ] Restarting ssh (via systemctl): ssh.service.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("配置登录的 key")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("scp")]),this._v(" ~/.ssh/id_rsa.pub ubuntu@192.168.199.5:/root/.ssh/authorized_keys\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("curl")]),this._v(" -O path/to/my/authorized_keys\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"参考内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考内容")])}],!1,null,null,null);r.options.__file="树莓派-4b-无网线安装-Ubuntu-并初始化.md";e.default=r.exports}}]);