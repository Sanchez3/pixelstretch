(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{c0Aq:function(n,e,i){},dO7Y:function(n,e,i){"use strict";i.r(e);i("c0Aq");var t=i("IqKQ"),r="// precision highp float;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform float boundary;\nuniform bool verticalDir;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n//direction\nuniform float sinDir;\nuniform float cosDir;\n\n\n\nvec4 stretch(sampler2D tex, float boundary, bool verticalDir){\n    vec4 color = texture2D(tex, vTextureCoord);\n    vec2 p = vTextureCoord;\n    float zero = 0.0;\n    vec2 n = vec2(vTextureCoord.x, vTextureCoord.y);\n    if(verticalDir){\n        float areaY = boundary * dimensions.y / filterArea.y;\n        if(areaY > zero){\n            float b = areaY;\n            if (p.y < b){\n                n.y = n.y;\n            }else{\n                n.y = b;\n            }\n        }else{\n            float b = -areaY;\n            if (p.y > b){\n                n.y = n.y;\n            }else{\n                n.y = b;\n            }\n        }\n    }else{\n        float areaX = boundary * dimensions.x / filterArea.x;\n        if(areaX > zero){\n            float b = areaX;\n            if (p.x < b){\n                n.x = n.x;\n            }else{\n                n.x = b;\n            }\n        }else{\n            float b = -areaX;\n            if (p.x > b){\n                n.x = n.x;\n            }else{\n                n.x = b;\n            }\n        }\n\n    }\n    color = texture2D(tex, n);\n    return color;\n}\n\nvoid main(void) {\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n    vec4 color;\n    color=stretch(uSampler, boundary, verticalDir);\n\n    gl_FragColor = color;\n}";var o=class extends t.b{constructor(n,e){super(t.d,r),this.boundary=n||0,this.verticalDir=null!==e&&void 0!==e&&e,this.uniforms.dimensions=new Float32Array(2)}apply(n,e,i,t){this.uniforms.dimensions[0]=e.filterFrame.width,this.uniforms.dimensions[1]=e.filterFrame.height,n.applyFilter(this,e,i,t)}set boundary(n){this.uniforms.boundary=n}get boundary(){return this.uniforms.boundary}set verticalDir(n){this.uniforms.verticalDir=n}get verticalDir(){return this.uniforms.verticalDir}},a=i("iZKT");var s=class{constructor(){this.init()}init(){var n=new t.a({width:window.innerWidth,height:window.innerHeight,resolution:window.devicePixelRatio,autoDensity:true,antialias:true,preserveDrawingBuffer:true});this.app=n,document.body.appendChild(n.view),n.loader.add("pic1",`./assets/img/pic${Math.floor(5*Math.random()+1)}.jpg`),n.loader.load(function(e,i){this.pic=new t.c(i.pic1.texture),n.stage.addChild(this.pic),this.picT=i.pic1.texture;var r=new o(0,false);n.stage.filters=[r];var s=new a.a;s.add(r,"boundary").min(-1).max(1).step(.01),s.add(r,"verticalDir").name("verticalDir"),window.addEventListener("resize",this.handleResize.bind(this)),this.handleResize()}.bind(this))}handleResize(){var n=window.innerWidth,e=window.innerHeight,i=this.pic,t=this.picT.width,r=this.picT.height;t/r>n/e?n>t?i.scale.set(t/n/window.devicePixelRatio):i.scale.set(n/t/window.devicePixelRatio):e>r?i.scale.set(r/e/window.devicePixelRatio):i.scale.set(e/r/window.devicePixelRatio),this.app.renderer.resize(n,e)}};window.h5={isPc:function(){for(var n=navigator.userAgent,e=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"),i=true,t=0;t<e.length;t++)if(n.indexOf(e[t])>0){i=false;break}return i},rootResize:function(){var n,e=document.documentElement.clientWidth||window.innerWidth,i=document.documentElement.clientHeight||window.innerHeight;n=e>i?i/750*100:e/750*100,document.getElementsByTagName("html")[0].style.fontSize=n+"px"},eventInit:function(){return document.addEventListener("touchstart",function(n){},{passive:false}),document.addEventListener("touchmove",function(n){n.preventDefault()},{passive:false}),this},cssInit:function(){var n=this;return n.rootResize(),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){var e,i,t,r,o,a;t=function(){clearInterval(e),clearTimeout(i),e=null,i=null,n.rootResize()},e=setInterval(function(){window.innerWidth===r&&window.innerHeight===o?100===++a&&t():(r=window.innerWidth,o=window.innerHeight,a=0)}),i=setTimeout(function(){t()},1e3)}),n},init:function(){this.cssInit().eventInit()}},window.onload=function(){window.h5.init();new s}}},[["dO7Y",1,2]]]);
//# sourceMappingURL=main.3858b4ecc42f9a60284e.js.map