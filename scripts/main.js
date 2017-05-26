function init(){container=document.getElementById("container"),camera=new THREE.PerspectiveCamera(135,window.innerWidth/window.innerHeight,1,2e3),camera.position.y=100,scene=new THREE.Scene,geometry=new THREE.PlaneGeometry(1e3,2e3,segments,segments),geometry.rotateX(-Math.PI/2),material=new THREE.MeshPhongMaterial({color:14755697}),mesh=new THREE.Mesh(geometry,material),scene.add(mesh);var e=new THREE.AmbientLight(16777215);scene.add(e);var t=new THREE.PointLight(16777215,1,0);t.position.set(0,200,-2e3),scene.add(t),renderer=new THREE.WebGLRenderer,renderer.setClearColor(4767212),renderer.setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,document.querySelector("body").scrollHeight),container=document.createElement("div"),document.body.appendChild(container),container.appendChild(renderer.domElement),window.addEventListener("resize",onWindowResize,!1)}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function animate(){requestAnimationFrame(animate),render()}function render(){for(var e=(clock.getDelta(),clock.getElapsedTime()),t=0,n=geometry.vertices.length;n>t;t+=4)geometry.vertices[t].y=64*Math.sin(t+e/2);mesh.geometry.verticesNeedUpdate=!0,renderer.render(scene,camera)}var Detector={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(t){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var e=document.createElement("div");return e.id="webgl-error-message",e.style.fontFamily="monospace",e.style.fontSize="13px",e.style.fontWeight="normal",e.style.textAlign="center",e.style.background="#fff",e.style.color="#000",e.style.padding="1.5em",e.style.width="400px",e.style.margin="5em auto 0",this.webgl||(e.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),e},addGetWebGLMessage:function(e){var t,n,r;e=e||{},t=void 0!==e.parent?e.parent:document.body,n=void 0!==e.id?e.id:"oldie",r=Detector.getWebGLErrorMessage(),r.id=n,t.appendChild(r)}};"object"==typeof module&&(module.exports=Detector);var Stats=function(){function e(e,t,n){return e=document.createElement(e),e.id=t,e.style.cssText=n,e}function t(t,n,r){var o=e("div",t,"padding:0 0 3px 3px;text-align:left;background:"+r),i=e("div",t+"Text","font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:"+n);for(i.innerHTML=t.toUpperCase(),o.appendChild(i),t=e("div",t+"Graph","width:74px;height:30px;background:"+n),o.appendChild(t),n=0;74>n;n++)t.appendChild(e("span","","width:1px;height:30px;float:left;opacity:0.9;background:"+r));return o}function n(e){for(var t=s.children,n=0;n<t.length;n++)t[n].style.display=n===e?"block":"none";l=e}function r(e,t){e.appendChild(e.firstChild).style.height=Math.min(30,30-30*t)+"px"}var o=self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now,i=o(),a=i,d=0,l=0,s=e("div","stats","width:80px;opacity:0.9;cursor:pointer");s.addEventListener("mousedown",function(e){e.preventDefault(),n(++l%s.children.length)},!1);var c=0,m=1/0,h=0,p=t("fps","#0ff","#002"),g=p.children[0],w=p.children[1];s.appendChild(p);var f=0,u=1/0,y=0,p=t("ms","#0f0","#020"),b=p.children[0],v=p.children[1];if(s.appendChild(p),self.performance&&self.performance.memory){var x=0,E=1/0,C=0,p=t("mb","#f08","#201"),M=p.children[0],L=p.children[1];s.appendChild(p)}return n(l),{REVISION:14,domElement:s,setMode:n,begin:function(){i=o()},end:function(){var e=o();if(f=e-i,u=Math.min(u,f),y=Math.max(y,f),b.textContent=(0|f)+" MS ("+(0|u)+"-"+(0|y)+")",r(v,f/200),d++,e>a+1e3&&(c=Math.round(1e3*d/(e-a)),m=Math.min(m,c),h=Math.max(h,c),g.textContent=c+" FPS ("+m+"-"+h+")",r(w,c/100),a=e,d=0,void 0!==x)){var t=performance.memory.usedJSHeapSize,n=performance.memory.jsHeapSizeLimit;x=Math.round(9.54e-7*t),E=Math.min(E,x),C=Math.max(C,x),M.textContent=x+" MB ("+E+"-"+C+")",r(L,t/n)}return e},update:function(){i=this.end()}}};"object"==typeof module&&(module.exports=Stats),Detector.webgl||Detector.addGetWebGLMessage();var container,stats,camera,scene,renderer,mesh,texture,geometry,material,segments=64,clock=new THREE.Clock;init(),animate();