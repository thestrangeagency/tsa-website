var Detector={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(t){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var e=document.createElement("div");return e.id="webgl-error-message",e.style.fontFamily="monospace",e.style.fontSize="13px",e.style.fontWeight="normal",e.style.textAlign="center",e.style.background="#fff",e.style.color="#000",e.style.padding="1.5em",e.style.width="400px",e.style.margin="5em auto 0",this.webgl||(e.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),e},addGetWebGLMessage:function(e){var t,n,i;e=e||{},t=void 0!==e.parent?e.parent:document.body,n=void 0!==e.id?e.id:"oldie",i=Detector.getWebGLErrorMessage(),i.id=n,t.appendChild(i)}};"object"==typeof module&&(module.exports=Detector);var Stats=function(){function e(e,t,n){return e=document.createElement(e),e.id=t,e.style.cssText=n,e}function t(t,n,i){var o=e("div",t,"padding:0 0 3px 3px;text-align:left;background:"+i),r=e("div",t+"Text","font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:"+n);for(r.innerHTML=t.toUpperCase(),o.appendChild(r),t=e("div",t+"Graph","width:74px;height:30px;background:"+n),o.appendChild(t),n=0;74>n;n++)t.appendChild(e("span","","width:1px;height:30px;float:left;opacity:0.9;background:"+i));return o}function n(e){for(var t=c.children,n=0;n<t.length;n++)t[n].style.display=n===e?"block":"none";l=e}function i(e,t){e.appendChild(e.firstChild).style.height=Math.min(30,30-30*t)+"px"}var o=self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now,r=o(),a=r,d=0,l=0,c=e("div","stats","width:80px;opacity:0.9;cursor:pointer");c.addEventListener("mousedown",function(e){e.preventDefault(),n(++l%c.children.length)},!1);var s=0,m=1/0,p=0,h=t("fps","#0ff","#002"),w=h.children[0],u=h.children[1];c.appendChild(h);var f=0,g=1/0,v=0,h=t("ms","#0f0","#020"),y=h.children[0],b=h.children[1];if(c.appendChild(h),self.performance&&self.performance.memory){var E=0,x=1/0,L=0,h=t("mb","#f08","#201"),M=h.children[0],C=h.children[1];c.appendChild(h)}return n(l),{REVISION:14,domElement:c,setMode:n,begin:function(){r=o()},end:function(){var e=o();if(f=e-r,g=Math.min(g,f),v=Math.max(v,f),y.textContent=(0|f)+" MS ("+(0|g)+"-"+(0|v)+")",i(b,f/200),d++,e>a+1e3&&(s=Math.round(1e3*d/(e-a)),m=Math.min(m,s),p=Math.max(p,s),w.textContent=s+" FPS ("+m+"-"+p+")",i(u,s/100),a=e,d=0,void 0!==E)){var t=performance.memory.usedJSHeapSize,n=performance.memory.jsHeapSizeLimit;E=Math.round(9.54e-7*t),x=Math.min(x,E),L=Math.max(L,E),M.textContent=E+" MB ("+x+"-"+L+")",i(C,t/n)}return e},update:function(){r=this.end()}}};"object"==typeof module&&(module.exports=Stats),function(){function e(){t(),n(),r()}function t(){function e(){t.classList.remove("animating"),n.removeEventListener("webkitAnimationEnd",e),n.removeEventListener("animationend",e)}var t=document.querySelector(".logo-tsa"),n=document.querySelector(".logo-star");t.addEventListener("mouseover",function(){t.classList.add("animating"),n.addEventListener("webkitAnimationEnd",e),n.addEventListener("animationend",e)})}function n(){d=document.getElementById("container"),l=new THREE.PerspectiveCamera(135,window.innerWidth/window.innerHeight,1,2e3),l.position.y=100,g=-l.rotation.x,c=new THREE.Scene,p=new THREE.PlaneGeometry(1e3,2e3,w,w),p.rotateX(-Math.PI/2),h=new THREE.MeshPhongMaterial({color:14755697}),m=new THREE.Mesh(p,h),c.add(m);var e=new THREE.AmbientLight(16777215);c.add(e);var t=new THREE.PointLight(16777215,1,0);t.position.set(0,200,-2e3),c.add(t),s=new THREE.WebGLRenderer,s.setClearColor(4767212),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,document.querySelector("body").scrollHeight),d=document.createElement("div"),document.body.appendChild(d),d.appendChild(s.domElement),window.addEventListener("resize",i,!1),window.DeviceMotionEvent&&window.addEventListener("devicemotion",o,!1)}function i(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function o(e){f=.99*f+e.accelerationIncludingGravity.x/2*.01,g=.99*g+e.accelerationIncludingGravity.y/20*.01,l.rotation.y=f,l.rotation.x=Math.max(-.7,Math.min(.3,-g))}function r(){requestAnimationFrame(r),a()}function a(){for(var e=(u.getDelta(),u.getElapsedTime()),t=0,n=p.vertices.length;n>t;t+=4)p.vertices[t].y=64*Math.sin(t+e/2);m.geometry.verticesNeedUpdate=!0,s.render(c,l)}var d,l,c,s,m,p,h,w=64,u=new THREE.Clock,f=0,g=0;e()}();