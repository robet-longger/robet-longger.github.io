/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4916c41fba39adfb8f368646bd4b9e9b"
  },
  {
    "url": "accumulate/git/handleGit.html",
    "revision": "db665d5bbc29d19b6d0913ee03f6a47e"
  },
  {
    "url": "accumulate/index.html",
    "revision": "eb443704943b6ce0a00c275792d12a84"
  },
  {
    "url": "accumulate/JS/A001.html",
    "revision": "ca087ef07a388ffe0ab2c6de986851d3"
  },
  {
    "url": "accumulate/JS/A002.html",
    "revision": "81be5d9b6a711bdacd8f70dc56f571ac"
  },
  {
    "url": "accumulate/JS/A003.html",
    "revision": "5b9cb4287555e62da1e28892412298df"
  },
  {
    "url": "accumulate/JS/A004.html",
    "revision": "9c5954334953291cd4e1b114730cad8c"
  },
  {
    "url": "accumulate/JS/A005.html",
    "revision": "ac0e2b952bb1793d17c273008c0b16b0"
  },
  {
    "url": "accumulate/JS/A006.html",
    "revision": "2cd7cfb275b1d619d328884c41b0cdf3"
  },
  {
    "url": "accumulate/JS/A007.html",
    "revision": "02c97feefb3c10b67b8142f40a8dbb72"
  },
  {
    "url": "accumulate/JS/Tools.html",
    "revision": "f328c0b4f411fa661d892b1aacf01d40"
  },
  {
    "url": "accumulate/Openlayers/O001.html",
    "revision": "8cb9f321c328d855f0901bf88591863b"
  },
  {
    "url": "accumulate/Openlayers/O002.html",
    "revision": "4d1a8b286f491597b6db2fccad2a5cca"
  },
  {
    "url": "accumulate/vue/V001.html",
    "revision": "c28784604200467a833a1eb8bfcf8b8c"
  },
  {
    "url": "accumulate/vue/V002.html",
    "revision": "b016e5b2200d9d90b2b1f672f12b68dd"
  },
  {
    "url": "accumulate/vue/V003.html",
    "revision": "456a4ea46265fbc050de9252d2bb90ce"
  },
  {
    "url": "accumulate/vue/V004.html",
    "revision": "99cb68e580486da5e2fdbca5351dca71"
  },
  {
    "url": "accumulate/vue/V005.html",
    "revision": "6af7dede21edbeec3078aa6664623223"
  },
  {
    "url": "accumulate/vue/V006.html",
    "revision": "e5ca4b376e04c705da5b73837361bd7f"
  },
  {
    "url": "accumulate/vue/V007.html",
    "revision": "1b4be7c5c3ed6154dd7867d56eadc51a"
  },
  {
    "url": "assets/css/0.styles.47c0e538.css",
    "revision": "da5bfe6ea8e10425ba83018df1b544f1"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cf1bc230.js",
    "revision": "e4c25df6f1945963643deeb0db983ec2"
  },
  {
    "url": "assets/js/11.2f5262be.js",
    "revision": "2977df7ca031f6be3493640499ede70d"
  },
  {
    "url": "assets/js/12.763b28b8.js",
    "revision": "652f4b3918d4b745c64931bc54f31ec5"
  },
  {
    "url": "assets/js/13.9640c310.js",
    "revision": "312463f0a1959464fb5762a957bbf0e1"
  },
  {
    "url": "assets/js/14.6a6b2539.js",
    "revision": "1756b846f4de72dbef3c68d446978cc3"
  },
  {
    "url": "assets/js/15.c91f14b9.js",
    "revision": "02f00284b1ef6c4ad56ca2a0d058ae1a"
  },
  {
    "url": "assets/js/16.8f7dfb98.js",
    "revision": "580baaff53df72a8302105ed2c2383e9"
  },
  {
    "url": "assets/js/17.16f901e2.js",
    "revision": "b851ecbaa0050a1679946b9043b8158a"
  },
  {
    "url": "assets/js/18.df3d5f02.js",
    "revision": "72be814c1a6bd3289339b24ffe3ca2df"
  },
  {
    "url": "assets/js/19.cc75ce38.js",
    "revision": "3b53f91a1157dd90bbd46f3f73afe4f5"
  },
  {
    "url": "assets/js/2.81770428.js",
    "revision": "9324a226609b5c0dc184e65e5c224a61"
  },
  {
    "url": "assets/js/20.f365b100.js",
    "revision": "334026f2dfacf5a888c34cc1e33caeb9"
  },
  {
    "url": "assets/js/21.64605176.js",
    "revision": "83260daf3073fc68f3996f8bf968ea83"
  },
  {
    "url": "assets/js/22.cf712662.js",
    "revision": "482b38d2296d90d562a694f22290dd3b"
  },
  {
    "url": "assets/js/23.0c81b9b2.js",
    "revision": "0fa0ae9d37584140da669a373c013e7d"
  },
  {
    "url": "assets/js/24.39e614db.js",
    "revision": "934441b7aca994e22a3956172970847f"
  },
  {
    "url": "assets/js/25.7fe0f933.js",
    "revision": "00334ee4bfcc6fe10f3ed4bd1f4352a5"
  },
  {
    "url": "assets/js/26.a9222ed5.js",
    "revision": "5edc15c52a2bf9d0067c7bcae58b8b57"
  },
  {
    "url": "assets/js/27.eb522861.js",
    "revision": "258089f7578732bb830030a5219eae52"
  },
  {
    "url": "assets/js/28.5b4d4f28.js",
    "revision": "3822bd83004c01ed8c781bb3b0a871d2"
  },
  {
    "url": "assets/js/29.1e90c05c.js",
    "revision": "e1db6579607b8fe848427f3a7d6e19d8"
  },
  {
    "url": "assets/js/3.e75cae9a.js",
    "revision": "dfe0066792c0eb8fcb2f4b3b35facfe2"
  },
  {
    "url": "assets/js/30.ecc167b6.js",
    "revision": "20397a1db2eaad4bea72f61bb7404a5a"
  },
  {
    "url": "assets/js/31.6b1a5bbc.js",
    "revision": "de00b172b9f5e147095b9b19aa47de01"
  },
  {
    "url": "assets/js/32.52bce39c.js",
    "revision": "d973bd919eca8210e6de5337d44818b6"
  },
  {
    "url": "assets/js/33.208f971b.js",
    "revision": "1d9fcd942fae14306b169cc11fbfef40"
  },
  {
    "url": "assets/js/4.20ce77fb.js",
    "revision": "9ceeed2b011c127cb6ae3359eec455a0"
  },
  {
    "url": "assets/js/5.5920e34d.js",
    "revision": "08a758edaf2290ddf090ba5584cc84e3"
  },
  {
    "url": "assets/js/6.224dfbe4.js",
    "revision": "c2519cc281f6d3e966595ae7c0faed9d"
  },
  {
    "url": "assets/js/7.d6765f0d.js",
    "revision": "8ac1575026d072a35e68305b46e7622a"
  },
  {
    "url": "assets/js/8.a144f217.js",
    "revision": "57b5e1d6926659ddce8eec6adc1d2a99"
  },
  {
    "url": "assets/js/9.b9252c8f.js",
    "revision": "40aa608e7e550e6aa906a0d6a9c977f8"
  },
  {
    "url": "assets/js/app.ddf169d8.js",
    "revision": "597eed8566ec8e4307ce23f819a130b4"
  },
  {
    "url": "baseComponents/index.html",
    "revision": "6a71f00824acf410b5e1102081021a8d"
  },
  {
    "url": "baseComponents/Layout/basicLayout.html",
    "revision": "981abcfa8ac50a33989468545149f899"
  },
  {
    "url": "css/aside.css",
    "revision": "ba348a3273c30940935080aeb5195e8e"
  },
  {
    "url": "css/button.css",
    "revision": "ad02a7437cd8e794f9e3bbb1103002ea"
  },
  {
    "url": "css/card.css",
    "revision": "28d8eaa05c023d2aa376fde298d7fa07"
  },
  {
    "url": "css/checkbox-group.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "css/checkbox.css",
    "revision": "49b52b03da227fefd6b35f675a29c1bf"
  },
  {
    "url": "css/container.css",
    "revision": "76e99f3597577c73add809dc432dbce6"
  },
  {
    "url": "css/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "css/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "css/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "css/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "css/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "css/footer.css",
    "revision": "e475d34da7e520a2767798e10f8ffe79"
  },
  {
    "url": "css/header.css",
    "revision": "fa1f40e162ba4c92fc8f1bbddd5353c1"
  },
  {
    "url": "css/icon.css",
    "revision": "513c9cd64c49e7fdb4e838d104b4fd54"
  },
  {
    "url": "css/iconfont.css",
    "revision": "932f42c7c9dd14bbcf5022abf0b6ce3d"
  },
  {
    "url": "css/index.css",
    "revision": "42c0c945e141221a3710f3a11cf2c861"
  },
  {
    "url": "css/main.css",
    "revision": "1784cb175f9a48243e33dad13b10fb2e"
  },
  {
    "url": "foo/index.html",
    "revision": "9c9bac97dfa8246d7acfe5fa31d7df96"
  },
  {
    "url": "foo/one.html",
    "revision": "4489dfd65a13c3be9f20e9f969f68a54"
  },
  {
    "url": "foo/two.html",
    "revision": "b93776021712deb4689e2ce4a35b9162"
  },
  {
    "url": "guide.html",
    "revision": "337b66e6870d42402655ba8db560b5bd"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "4a7b92ee2d335dfb01ae2d5319da2e73"
  },
  {
    "url": "others/index.html",
    "revision": "a9e98022b38b735e92c2e5e28dad76e3"
  },
  {
    "url": "util.js",
    "revision": "1c871916e08e3d4c465289191d717b42"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
