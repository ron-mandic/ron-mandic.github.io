import"./modulepreload-polyfill-3cfb730f.js";import{T as x,P as S,S as y,a as z,O as b,W as M,V as p,L,M as D,b as A}from"./three.module-fe8d8457.js";import{g as d}from"./index-7127c1b0.js";const s={ww:window.innerWidth,wh:window.innerHeight,aw:window.screen.availWidth,ah:window.screen.availHeight,isDevice:navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i),name:"Doaa"};class C{constructor(e,i={}){this.bindAll(),this.el=e,this.opts=Object.assign({speed:2,threshold:50,ease:.075},i),this.ui={items:this.el.querySelectorAll(".js-slide"),titles:document.querySelectorAll(".js-title"),lines:document.querySelectorAll(".js-progress-line")},this.state={target:0,current:0,currentRounded:0,y:0,on:{x:0,y:0},off:0,progress:0,diff:0,max:0,min:0,snap:{points:[]},flags:{dragging:!1}},this.items=[],this.events={move:s.isDevice?"touchmove":"mousemove",up:s.isDevice?"touchend":"mouseup",down:s.isDevice?"touchstart":"mousedown"},this.init()}bindAll(){["onDown","onMove","onUp"].forEach(e=>this[e]=this[e].bind(this))}init(){return d.utils.pipe(this.setup(),this.on())}destroy(){this.off(),this.state=null,this.items=null,this.opts=null,this.ui=null}on(){const{move:e,up:i,down:t}=this.events;window.addEventListener(t,this.onDown),window.addEventListener(e,this.onMove),window.addEventListener(i,this.onUp)}off(){const{move:e,up:i,down:t}=this.events;window.removeEventListener(t,this.onDown),window.removeEventListener(e,this.onMove),window.removeEventListener(i,this.onUp)}setup(){const{ww:e}=s,i=this.state,{items:t,titles:n}=this.ui,{width:a,left:r}=this.el.getBoundingClientRect();i.max=-(t[t.length-1].getBoundingClientRect().right-a-r),i.min=0,this.tl=d.timeline({paused:!0,defaults:{duration:1,ease:"linear"}}).fromTo(".js-progress-line-2",{scaleX:1},{scaleX:0,duration:.5,ease:"power3"},0).fromTo(".js-progress-line",{scaleX:0},{scaleX:1},0);for(let u=0;u<t.length;u++){const l=t[u],{left:c,right:h,width:o}=l.getBoundingClientRect(),m=new X;m.init(l);const v=d.timeline({paused:!0}).fromTo(m.mat.uniforms.uScale,{value:.65},{value:1,duration:1,ease:"linear"});this.items.push({el:l,plane:m,left:c,right:h,width:o,min:c<e?e*.775:-(e*.225-a*.2),max:c>e?i.max-e*.775:i.max+(e*.225-a*.2),tl:v,out:!1})}}calc(){const e=this.state;e.current+=(e.target-e.current)*this.opts.ease,e.currentRounded=Math.round(e.current*100)/100,e.diff=(e.target-e.current)*5e-4,e.progress=d.utils.wrap(0,1,e.currentRounded/e.max),this.tl&&this.tl.progress(e.progress)}render(){this.calc(),this.transformItems()}transformItems(){const{flags:e}=this.state;for(let i=0;i<this.items.length;i++){const t=this.items[i],{translate:n,isVisible:a,progress:r}=this.isVisible(t);t.plane.updateX(n),t.plane.mat.uniforms.uVelo.value=this.state.diff,!t.out&&t.tl&&t.tl.progress(r),a||e.resize?t.out=!1:t.out||(t.out=!0)}}isVisible({left:e,right:i,width:t,min:n,max:a}){const{ww:r}=s,{currentRounded:u}=this.state,l=d.utils.wrap(n,a,u),c=this.opts.threshold,h=e+l,o=i+l,m=h<c+r&&o>-c,v=d.utils.clamp(0,1,1-(l+e+t)/(r+t));return{translate:l,isVisible:m,progress:v}}clampTarget(){const e=this.state;e.target=d.utils.clamp(e.max,0,e.target)}getPos({changedTouches:e,clientX:i,clientY:t,target:n}){const a=e?e[0].clientX:i,r=e?e[0].clientY:t;return{x:a,y:r,target:n}}onDown(e){const{x:i,y:t}=this.getPos(e),{flags:n,on:a}=this.state;n.dragging=!0,a.x=i,a.y=t}onUp(){const e=this.state;e.flags.dragging=!1,e.off=e.target}onMove(e){const{x:i,y:t}=this.getPos(e),n=this.state;if(!n.flags.dragging)return;const{off:a,on:r}=n,u=i-r.x,l=t-r.y;Math.abs(u)>Math.abs(l)&&e.cancelable&&(e.preventDefault(),e.stopPropagation()),n.target=a+u*this.opts.speed;const c=document.querySelector("h1"),h=document.querySelector("a");let o=Math.abs(n.target)/2%window.innerWidth+window.innerWidth/4;o/innerWidth>=0&&o/innerWidth<=.33?s.name!=="Doaa"&&(s.name="Doaa",c.innerHTML=s.name,h.setAttribute("data-suffix",s.name),h.classList.remove("disabled")):o/innerWidth>.33&&o/innerWidth<=.66?s.name!=="Lava"&&(s.name="Lava",c.innerHTML=s.name,h.setAttribute("data-suffix",s.name),h.classList.add("disabled")):o/innerWidth>.66&&o/innerWidth<=1&&s.name!=="Maya"&&(s.name="Maya",c.innerHTML=s.name,h.setAttribute("data-suffix",s.name),h.classList.add("disabled")),console.log(o,s.name)}}const R=`
vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
  float screenRatio = screenSize.x / screenSize.y;
  float imageRatio = imageSize.x / imageSize.y;

  vec2 newSize = screenRatio < imageRatio
      ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
      : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);

  vec2 newOffset = (screenRatio < imageRatio
      ? vec2((newSize.x - screenSize.x) / 4.0, 0.0)
      : vec2(0.0, (newSize.y - screenSize.y) / 4.0)) / newSize;

  return uv * screenSize / newSize + newOffset;
}
`,W=`
precision mediump float;

uniform float uVelo;

varying vec2 vUv;

#define M_PI 3.1415926535897932384626433832795

void main(){
  vec3 pos = position;
  pos.x = pos.x + ((sin(uv.y * M_PI) * uVelo) * 0.075);

  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}
`,P=`
precision mediump float;

${R}

uniform sampler2D uTexture;

uniform vec2 uMeshSize;
uniform vec2 uImageSize;

uniform float uVelo;
uniform float uScale;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  vec2 texCenter = vec2(0.15);
  vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
  vec2 texScale = (texUv - texCenter) * uScale + texCenter;
  vec4 _texture = texture2D(uTexture, texScale);

  texScale.x += 0.015 * uVelo;
  if(uv.x < 1.) _texture.g = texture2D(uTexture, texScale).g;

  texScale.x += 0.010 * uVelo;
  if(uv.x < 1.) _texture.b = texture2D(uTexture, texScale).b;

  gl_FragColor = _texture;
}
`,f=new x;f.crossOrigin="anonymous";class V{constructor(){this.scene=new z,this.camera=new b(s.ww/-2,s.ww/2,s.wh/2,s.wh/-2,1,10),this.camera.lookAt(this.scene.position),this.camera.position.z=1,this.renderer=new M({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(1.5),this.renderer.setSize(s.ww,s.wh),this.renderer.setClearColor(16777215,0),this.init()}render(){this.renderer.render(this.scene,this.camera)}init(){const e=this.renderer.domElement;e.classList.add("dom-gl"),document.querySelector("#renderer").appendChild(e)}}class T extends A{init(e){this.el=e,this.resize()}resize(){this.rect=this.el.getBoundingClientRect();const{left:e,top:i,width:t,height:n}=this.rect;this.pos={x:e+t/2-s.ww/2,y:i+n/2-s.wh/2},this.position.y=this.pos.y,this.position.x=this.pos.x,this.updateX()}updateX(e){e&&(this.position.x=e+this.pos.x)}}const U=new S(1,1,32,32),j=new y({transparent:!0,fragmentShader:P,vertexShader:W});class X extends T{init(e){super.init(e),this.geo=U,this.mat=j.clone(),this.mat.uniforms={uTime:{value:0},uTexture:{value:0},uMeshSize:{value:new p(this.rect.width,this.rect.height)},uImageSize:{value:new p(0,0)},uScale:{value:.75},uVelo:{value:0}},this.img=this.el.querySelector("img"),this._texture=f.load(this.img.src,i=>{i.minFilter=L,i.generateMipmaps=!1,this.mat.uniforms.uTexture.value=i,this.mat.uniforms.uImageSize.value=[this.img.naturalWidth,this.img.naturalHeight]}),this.mesh=new D(this.geo,this.mat),this.mesh.scale.set(this.rect.width,this.rect.height,1),this.add(this.mesh),w.scene.add(this)}}const w=new V,E=new C(document.querySelector(".js-slider")),O=()=>{w.render(),E.render()};d.ticker.add(O);
