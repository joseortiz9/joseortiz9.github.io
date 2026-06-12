import{g as Ad,c as Ld}from"./index-C9673elR.js";function Rd(ii,si){for(var v=0;v<si.length;v++){const gt=si[v];if(typeof gt!="string"&&!Array.isArray(gt)){for(const Un in gt)if(Un!=="default"&&!(Un in ii)){const ai=Object.getOwnPropertyDescriptor(gt,Un);ai&&Object.defineProperty(ii,Un,ai.get?ai:{enumerable:!0,get:()=>gt[Un]})}}}return Object.freeze(Object.defineProperty(ii,Symbol.toStringTag,{value:"Module"}))}var eo={exports:{}};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */(function(ii,si){(function(v,gt){gt(si)})(Ld,function(v){const gt="134",_s="300 es";class Xt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let r=0,i=n.length;r<i;r++)n[r].call(this,e);e.target=null}}}let oi=1234567;const un=Math.PI/180,Mr=180/Math.PI,Ze=[];for(let s=0;s<256;s++)Ze[s]=(s<16?"0":"")+s.toString(16);const Qc=typeof crypto<"u"&&"randomUUID"in crypto;function at(){if(Qc)return crypto.randomUUID().toUpperCase();const s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Ze[255&s]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[255&e]+Ze[e>>8&255]+"-"+Ze[e>>16&15|64]+Ze[e>>24&255]+"-"+Ze[63&t|128]+Ze[t>>8&255]+"-"+Ze[t>>16&255]+Ze[t>>24&255]+Ze[255&n]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toUpperCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function Ms(s,e){return(s%e+e)%e}function br(s,e,t){return(1-t)*s+t*e}function bs(s){return(s&s-1)==0&&s!==0}function to(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function no(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}var ro=Object.freeze({__proto__:null,DEG2RAD:un,RAD2DEG:Mr,generateUUID:at,clamp:Qe,euclideanModulo:Ms,mapLinear:function(s,e,t,n,r){return n+(s-e)*(r-n)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:br,damp:function(s,e,t,n){return br(s,e,1-Math.exp(-t*n))},pingpong:function(s,e=1){return e-Math.abs(Ms(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){return s!==void 0&&(oi=s%2147483647),oi=16807*oi%2147483647,(oi-1)/2147483646},degToRad:function(s){return s*un},radToDeg:function(s){return s*Mr},isPowerOfTwo:bs,ceilPowerOfTwo:to,floorPowerOfTwo:no,setQuaternionFromProperEuler:function(s,e,t,n,r){const i=Math.cos,a=Math.sin,o=i(t/2),l=a(t/2),c=i((e+n)/2),h=a((e+n)/2),u=i((e-n)/2),d=a((e-n)/2),p=i((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*f,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*f,o*c);break;case"ZYZ":s.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}});class X{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}X.prototype.isVector2=!0;class He{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,i,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=i,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=r[0],y=r[3],m=r[6],_=r[1],x=r[4],M=r[7],w=r[2],T=r[5],R=r[8];return i[0]=a*g+o*_+l*w,i[3]=a*y+o*x+l*T,i[6]=a*m+o*M+l*R,i[1]=c*g+h*_+u*w,i[4]=c*y+h*x+u*T,i[7]=c*m+h*M+u*R,i[2]=d*g+p*_+f*w,i[5]=d*y+p*x+f*T,i[8]=d*m+p*M+f*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*i*h+n*o*l+r*i*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*i,p=c*i-a*l,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/f;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*i-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*i)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){const l=Math.cos(i),c=Math.sin(i);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,i=r[0],a=r[3],o=r[6],l=r[1],c=r[4],h=r[7];return r[0]=t*i+n*l,r[3]=t*a+n*c,r[6]=t*o+n*h,r[1]=-n*i+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function io(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}He.prototype.isMatrix3=!0;const Kc={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Hn(s,e){return new Kc[s](e)}function li(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function so(s,e=0){let t=3735928559^e,n=1103547991^e;for(let r,i=0;i<s.length;i++)r=s.charCodeAt(i),t=Math.imul(t^r,2654435761),n=Math.imul(n^r,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let Gn;class dn{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=li("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let $c=0;class Ge extends Xt{constructor(e=Ge.DEFAULT_IMAGE,t=Ge.DEFAULT_MAPPING,n=1001,r=1001,i=1006,a=1008,o=1023,l=1009,c=1,h=3e3){super(),Object.defineProperty(this,"id",{value:$c++}),this.uuid=at(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=at()),!t&&e.images[r.uuid]===void 0){let i;if(Array.isArray(r)){i=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?i.push(ws(r[a].image)):i.push(ws(r[a]))}else i=ws(r);e.images[r.uuid]={uuid:r.uuid,url:i}}n.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}function ws(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dn.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Ge.DEFAULT_IMAGE=void 0,Ge.DEFAULT_MAPPING=300,Ge.prototype.isTexture=!0;class Ae{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],y=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+y)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(p+1)/2,w=(m+1)/2,T=(h+d)/4,R=(u+g)/4,C=(f+y)/4;return x>M&&x>w?x<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(x),r=T/n,i=R/n):M>w?M<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(M),n=T/r,i=C/r):w<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(w),n=R/i,r=C/i),this.set(n,r,i,t),this}let _=Math.sqrt((y-f)*(y-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(y-f)/_,this.y=(u-g)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ae.prototype.isVector4=!0;class vt extends Xt{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ae(0,0,e,t),this.scissorTest=!1,this.viewport=new Ae(0,0,e,t),this.texture=new Ge(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}vt.prototype.isWebGLRenderTarget=!0;class ao extends vt{constructor(e,t,n){super(e,t);const r=this.texture;this.texture=[];for(let i=0;i<n;i++)this.texture[i]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.texture.length;r<i;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}ao.prototype.isWebGLMultipleRenderTargets=!0;class Ss extends vt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Ss.prototype.isWebGLMultisampleRenderTarget=!0;class Ke{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,i,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=i[a+0],p=i[a+1],f=i[a+2],g=i[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==p||h!==f){let y=1-o;const m=l*d+c*p+h*f+u*g,_=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,m*_);y=Math.sin(y*T)/w,o=Math.sin(o*T)/w}const M=o*_;if(l=l*y+d*M,c=c*y+p*M,h=h*y+f*M,u=u*y+g*M,y===1-o){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=i[a],d=i[a+1],p=i[a+2],f=i[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!e||!e.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(i/2),d=l(n/2),p=l(r/2),f=l(i/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(i-c)*p,this._z=(a-r)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(i+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(i-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(i+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-i*l,this._y=r*h+a*l+i*o-n*c,this._z=i*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ke.prototype.isQuaternion=!0;class b{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,h=l*n+o*t-i*r,u=l*r+i*n-a*t,d=-i*t-a*n-o*r;return this.x=c*l+d*-i+h*-o-u*-a,this.y=h*l+d*-a+u*-i-c*-o,this.z=u*l+d*-o+c*-a-h*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-i*o,this.y=i*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ts.copy(this).projectOnVector(e),this.sub(Ts)}reflect(e){return this.sub(Ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}b.prototype.isVector3=!0;const Ts=new b,oo=new Ke;class ot{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<r&&(r=d),h>i&&(i=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,r),this.max.set(i,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<r&&(r=d),h>i&&(i=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,r),this.max.set(i,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox),Es.applyMatrix4(e.matrixWorld),this.union(Es));const n=e.children;for(let r=0,i=n.length;r<i;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),ci.subVectors(this.max,Sr),kn.subVectors(e.a,Sr),Vn.subVectors(e.b,Sr),Wn.subVectors(e.c,Sr),Yt.subVectors(Vn,kn),Jt.subVectors(Wn,Vn),pn.subVectors(kn,Wn);let t=[0,-Yt.z,Yt.y,0,-Jt.z,Jt.y,0,-pn.z,pn.y,Yt.z,0,-Yt.x,Jt.z,0,-Jt.x,pn.z,0,-pn.x,-Yt.y,Yt.x,0,-Jt.y,Jt.x,0,-pn.y,pn.x,0];return!!As(t,kn,Vn,Wn,ci)&&(t=[1,0,0,0,1,0,0,0,1],!!As(t,kn,Vn,Wn,ci)&&(hi.crossVectors(Yt,Jt),t=[hi.x,hi.y,hi.z],As(t,kn,Vn,Wn,ci)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(wr).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}ot.prototype.isBox3=!0;const zt=[new b,new b,new b,new b,new b,new b,new b,new b],wr=new b,Es=new ot,kn=new b,Vn=new b,Wn=new b,Yt=new b,Jt=new b,pn=new b,Sr=new b,ci=new b,hi=new b,fn=new b;function As(s,e,t,n,r){for(let i=0,a=s.length-3;i<=a;i+=3){fn.fromArray(s,i);const o=r.x*Math.abs(fn.x)+r.y*Math.abs(fn.y)+r.z*Math.abs(fn.z),l=e.dot(fn),c=t.dot(fn),h=n.dot(fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const eh=new ot,lo=new b,Ls=new b,Rs=new b;class Zt{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):eh.setFromPoints(e).getCenter(n);let r=0;for(let i=0,a=e.length;i<a;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=.5*(n-this.radius);this.center.add(Rs.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return Ls.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(lo.copy(e.center).add(Ls)),this.expandByPoint(lo.copy(e.center).sub(Ls)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bt=new b,Cs=new b,ui=new b,Qt=new b,Ps=new b,di=new b,Is=new b;class Kt{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bt.copy(this.direction).multiplyScalar(t).add(this.origin),Bt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cs.copy(e).add(t).multiplyScalar(.5),ui.copy(t).sub(e).normalize(),Qt.copy(this.origin).sub(Cs);const i=.5*e.distanceTo(t),a=-this.direction.dot(ui),o=Qt.dot(this.direction),l=-Qt.dot(ui),c=Qt.lengthSq(),h=Math.abs(1-a*a);let u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=i*h,u>=0)if(d>=-f)if(d<=f){const g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=i,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-i,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-l),i),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-i,-l),i),p=d*(d+2*l)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-l),i),p=-u*u+d*(d+2*l)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(ui).multiplyScalar(d).add(Cs),p}intersectSphere(e,t){Bt.subVectors(e.center,this.origin);const n=Bt.dot(this.direction),r=Bt.dot(Bt)-n*n,i=e.radius*e.radius;if(r>i)return null;const a=Math.sqrt(i-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(i=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(i=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||i>r?null:((i>n||n!=n)&&(n=i),(a<r||r!=r)&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r?null:((o>n||n!=n)&&(n=o),(l<r||r!=r)&&(r=l),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Bt)!==null}intersectTriangle(e,t,n,r,i){Ps.subVectors(t,e),di.subVectors(n,e),Is.crossVectors(Ps,di);let a,o=this.direction.dot(Is);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Qt.subVectors(this.origin,e);const l=a*this.direction.dot(di.crossVectors(Qt,di));if(l<0)return null;const c=a*this.direction.dot(Ps.cross(Qt));if(c<0||l+c>o)return null;const h=-a*Qt.dot(Is);return h<0?null:this.at(h/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,i,a,o,l,c,h,u,d,p,f,g,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=i,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=f,m[11]=g,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/jn.setFromMatrixColumn(e,0).length(),i=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(th,e,nh)}lookAt(e,t,n){const r=this.elements;return lt.subVectors(e,t),lt.lengthSq()===0&&(lt.z=1),lt.normalize(),$t.crossVectors(n,lt),$t.lengthSq()===0&&(Math.abs(n.z)===1?lt.x+=1e-4:lt.z+=1e-4,lt.normalize(),$t.crossVectors(n,lt)),$t.normalize(),pi.crossVectors(lt,$t),r[0]=$t.x,r[4]=pi.x,r[8]=lt.x,r[1]=$t.y,r[5]=pi.y,r[9]=lt.y,r[2]=$t.z,r[6]=pi.z,r[10]=lt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],y=n[10],m=n[14],_=n[3],x=n[7],M=n[11],w=n[15],T=r[0],R=r[4],C=r[8],N=r[12],I=r[1],z=r[5],K=r[9],V=r[13],F=r[2],j=r[6],te=r[10],ie=r[14],oe=r[3],ue=r[7],de=r[11],Y=r[15];return i[0]=a*T+o*I+l*F+c*oe,i[4]=a*R+o*z+l*j+c*ue,i[8]=a*C+o*K+l*te+c*de,i[12]=a*N+o*V+l*ie+c*Y,i[1]=h*T+u*I+d*F+p*oe,i[5]=h*R+u*z+d*j+p*ue,i[9]=h*C+u*K+d*te+p*de,i[13]=h*N+u*V+d*ie+p*Y,i[2]=f*T+g*I+y*F+m*oe,i[6]=f*R+g*z+y*j+m*ue,i[10]=f*C+g*K+y*te+m*de,i[14]=f*N+g*V+y*ie+m*Y,i[3]=_*T+x*I+M*F+w*oe,i[7]=_*R+x*z+M*j+w*ue,i[11]=_*C+x*K+M*te+w*de,i[15]=_*N+x*V+M*ie+w*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+i*l*u-r*c*u-i*o*d+n*c*d+r*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+i*a*d-r*a*p+r*c*h-i*l*h)+e[11]*(+t*c*u-t*o*p-i*a*u+n*a*p+i*o*h-n*c*h)+e[15]*(-r*o*h-t*l*u+t*o*d+r*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],y=e[14],m=e[15],_=u*y*c-g*d*c+g*l*p-o*y*p-u*l*m+o*d*m,x=f*d*c-h*y*c-f*l*p+a*y*p+h*l*m-a*d*m,M=h*g*c-f*u*c+f*o*p-a*g*p-h*o*m+a*u*m,w=f*u*l-h*g*l-f*o*d+a*g*d+h*o*y-a*u*y,T=t*_+n*x+r*M+i*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=_*R,e[1]=(g*d*i-u*y*i-g*r*p+n*y*p+u*r*m-n*d*m)*R,e[2]=(o*y*i-g*l*i+g*r*c-n*y*c-o*r*m+n*l*m)*R,e[3]=(u*l*i-o*d*i-u*r*c+n*d*c+o*r*p-n*l*p)*R,e[4]=x*R,e[5]=(h*y*i-f*d*i+f*r*p-t*y*p-h*r*m+t*d*m)*R,e[6]=(f*l*i-a*y*i-f*r*c+t*y*c+a*r*m-t*l*m)*R,e[7]=(a*d*i-h*l*i+h*r*c-t*d*c-a*r*p+t*l*p)*R,e[8]=M*R,e[9]=(f*u*i-h*g*i-f*n*p+t*g*p+h*n*m-t*u*m)*R,e[10]=(a*g*i-f*o*i+f*n*c-t*g*c-a*n*m+t*o*m)*R,e[11]=(h*o*i-a*u*i-h*n*c+t*u*c+a*n*p-t*o*p)*R,e[12]=w*R,e[13]=(h*g*r-f*u*r+f*n*d-t*g*d-h*n*y+t*u*y)*R,e[14]=(f*o*r-a*g*r-f*n*l+t*g*l+a*n*y-t*o*y)*R,e[15]=(a*u*r-h*o*r+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,l=e.z,c=i*a,h=i*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,h=a+a,u=o+o,d=i*c,p=i*h,f=i*u,g=a*h,y=a*u,m=o*u,_=l*c,x=l*h,M=l*u,w=n.x,T=n.y,R=n.z;return r[0]=(1-(g+m))*w,r[1]=(p+M)*w,r[2]=(f-x)*w,r[3]=0,r[4]=(p-M)*T,r[5]=(1-(d+m))*T,r[6]=(y+_)*T,r[7]=0,r[8]=(f+x)*R,r[9]=(y-_)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=jn.set(r[0],r[1],r[2]).length();const a=jn.set(r[4],r[5],r[6]).length(),o=jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],yt.copy(this);const l=1/i,c=1/a,h=1/o;return yt.elements[0]*=l,yt.elements[1]*=l,yt.elements[2]*=l,yt.elements[4]*=c,yt.elements[5]*=c,yt.elements[6]*=c,yt.elements[8]*=h,yt.elements[9]*=h,yt.elements[10]*=h,t.setFromRotationMatrix(yt),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*i/(t-e),c=2*i/(n-r),h=(t+e)/(t-e),u=(n+r)/(n-r),d=-(a+i)/(a-i),p=-2*a*i/(a-i);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,i,a){const o=this.elements,l=1/(t-e),c=1/(n-r),h=1/(a-i),u=(t+e)*l,d=(n+r)*c,p=(a+i)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}ce.prototype.isMatrix4=!0;const jn=new b,yt=new ce,th=new b(0,0,0),nh=new b(1,1,1),$t=new b,pi=new b,lt=new b,co=new ce,ho=new Ke;class mn{constructor(e=0,t=0,n=0,r=mn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ho.setFromEuler(this),this.setFromQuaternion(ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}mn.prototype.isEuler=!0,mn.DefaultOrder="XYZ",mn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ds{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let rh=0;const uo=new b,qn=new Ke,Ft=new ce,fi=new b,Tr=new b,ih=new b,sh=new Ke,po=new b(1,0,0),fo=new b(0,1,0),mo=new b(0,0,1),ah={type:"added"},go={type:"removed"};class Me extends Xt{constructor(){super(),Object.defineProperty(this,"id",{value:rh++}),this.uuid=at(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DefaultUp.clone();const e=new b,t=new mn,n=new Ke,r=new b(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ce},normalMatrix:{value:new He}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Me.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(fo,e)}rotateZ(e){return this.rotateOnAxis(mo,e)}translateOnAxis(e,t){return uo.copy(e).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(fo,e)}translateZ(e){return this.translateOnAxis(mo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ft.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fi.copy(e):fi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ft.lookAt(Tr,fi,this.up):Ft.lookAt(fi,Tr,this.up),this.quaternion.setFromRotationMatrix(Ft),r&&(Ft.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Ft),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ah)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(go)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(go)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ft.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ft.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ft),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const i=this.children[n].getObjectByProperty(e,t);if(i!==void 0)return i}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(i(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Me.DefaultUp=new b(0,1,0),Me.DefaultMatrixAutoUpdate=!0,Me.prototype.isObject3D=!0;const xt=new b,Ot=new b,Ns=new b,Ut=new b,Xn=new b,Yn=new b,vo=new b,zs=new b,Bs=new b,Fs=new b;class Be{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xt.subVectors(e,t),r.cross(xt);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){xt.subVectors(r,t),Ot.subVectors(n,t),Ns.subVectors(e,t);const a=xt.dot(xt),o=xt.dot(Ot),l=xt.dot(Ns),c=Ot.dot(Ot),h=Ot.dot(Ns),u=a*c-o*o;if(u===0)return i.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return i.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ut),Ut.x>=0&&Ut.y>=0&&Ut.x+Ut.y<=1}static getUV(e,t,n,r,i,a,o,l){return this.getBarycoord(e,t,n,r,Ut),l.set(0,0),l.addScaledVector(i,Ut.x),l.addScaledVector(a,Ut.y),l.addScaledVector(o,Ut.z),l}static isFrontFacing(e,t,n,r){return xt.subVectors(n,t),Ot.subVectors(e,t),xt.cross(Ot).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xt.subVectors(this.c,this.b),Ot.subVectors(this.a,this.b),.5*xt.cross(Ot).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Be.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Be.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return Be.getUV(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return Be.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Be.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let a,o;Xn.subVectors(r,n),Yn.subVectors(i,n),zs.subVectors(e,n);const l=Xn.dot(zs),c=Yn.dot(zs);if(l<=0&&c<=0)return t.copy(n);Bs.subVectors(e,r);const h=Xn.dot(Bs),u=Yn.dot(Bs);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Xn,a);Fs.subVectors(e,i);const p=Xn.dot(Fs),f=Yn.dot(Fs);if(f>=0&&p<=f)return t.copy(i);const g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Yn,o);const y=h*f-p*u;if(y<=0&&u-h>=0&&p-f>=0)return vo.subVectors(i,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(vo,o);const m=1/(y+g+d);return a=g*m,o=d*m,t.copy(n).addScaledVector(Xn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let oh=0;class ke extends Xt{constructor(){super(),Object.defineProperty(this,"id",{value:oh++}),this.uuid=at(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.format=1023,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===1;continue}const r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function r(i){const a=[];for(const o in i){const l=i[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==1023&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t){const i=r(e.textures),a=r(e.images);i.length>0&&(n.textures=i),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ke.prototype.isMaterial=!0;const yo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={h:0,s:0,l:0},mi={h:0,s:0,l:0};function Os(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}function Us(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Hs(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}class re{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Ms(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Os(i,r,e+1/3),this.g=Os(i,r,e),this.b=Os(i,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const i=n[1],a=n[2];switch(i){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(o,l,c)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],i=r.length;if(i===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(i===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=yo[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,i=Math.max(t,n,r),a=Math.min(t,n,r);let o,l;const c=(a+i)/2;if(a===i)o=0,l=0;else{const h=i-a;switch(l=c<=.5?h/(i+a):h/(2-i-a),i){case t:o=(n-r)/h+(n<r?6:0);break;case n:o=(r-t)/h+2;break;case r:o=(t-n)/h+4}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(e,t,n){return this.getHSL(_t),_t.h+=e,_t.s+=t,_t.l+=n,this.setHSL(_t.h,_t.s,_t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_t),e.getHSL(mi);const n=br(_t.h,mi.h,t),r=br(_t.s,mi.s,t),i=br(_t.l,mi.l,t);return this.setHSL(n,r,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}re.NAMES=yo,re.prototype.isColor=!0,re.prototype.r=1,re.prototype.g=1,re.prototype.b=1;class Ht extends ke{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ht.prototype.isMeshBasicMaterial=!0;const Ce=new b,gi=new X;class we{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new re),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new X),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new b),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,i=e.length;r<i;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new Ae),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gi.fromBufferAttribute(this,t),gi.applyMatrix3(e),this.setXY(t,gi.x,gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ce.fromBufferAttribute(this,t),Ce.applyMatrix3(e),this.setXYZ(t,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ce.x=this.getX(t),Ce.y=this.getY(t),Ce.z=this.getZ(t),Ce.applyMatrix4(e),this.setXYZ(t,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ce.x=this.getX(t),Ce.y=this.getY(t),Ce.z=this.getZ(t),Ce.applyNormalMatrix(e),this.setXYZ(t,Ce.x,Ce.y,Ce.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ce.x=this.getX(t),Ce.y=this.getY(t),Ce.z=this.getZ(t),Ce.transformDirection(e),this.setXYZ(t,Ce.x,Ce.y,Ce.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}}we.prototype.isBufferAttribute=!0;class xo extends we{constructor(e,t,n){super(new Int8Array(e),t,n)}}class _o extends we{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class Mo extends we{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class bo extends we{constructor(e,t,n){super(new Int16Array(e),t,n)}}class vi extends we{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wo extends we{constructor(e,t,n){super(new Int32Array(e),t,n)}}class yi extends we{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class So extends we{constructor(e,t,n){super(new Uint16Array(e),t,n)}}So.prototype.isFloat16BufferAttribute=!0;class le extends we{constructor(e,t,n){super(new Float32Array(e),t,n)}}class To extends we{constructor(e,t,n){super(new Float64Array(e),t,n)}}let lh=0;const pt=new ce,Gs=new Me,Jn=new b,ct=new ot,Er=new ot,Ve=new b;class fe extends Xt{constructor(){super(),Object.defineProperty(this,"id",{value:lh++}),this.uuid=at(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(io(e)>65535?yi:vi)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new He().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pt.makeRotationFromQuaternion(e),this.applyMatrix4(pt),this}rotateX(e){return pt.makeRotationX(e),this.applyMatrix4(pt),this}rotateY(e){return pt.makeRotationY(e),this.applyMatrix4(pt),this}rotateZ(e){return pt.makeRotationZ(e),this.applyMatrix4(pt),this}translate(e,t,n){return pt.makeTranslation(e,t,n),this.applyMatrix4(pt),this}scale(e,t,n){return pt.makeScale(e,t,n),this.applyMatrix4(pt),this}lookAt(e){return Gs.lookAt(e),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];ct.setFromBufferAttribute(i),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,ct.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,ct.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(ct.min),this.boundingBox.expandByPoint(ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(e){const n=this.boundingSphere.center;if(ct.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(ct.min,Er.min),ct.expandByPoint(Ve),Ve.addVectors(ct.max,Er.max),ct.expandByPoint(Ve)):(ct.expandByPoint(Er.min),ct.expandByPoint(Er.max))}ct.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Ve.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Ve));if(t)for(let i=0,a=t.length;i<a;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ve.fromBufferAttribute(o,c),l&&(Jn.fromBufferAttribute(e,c),Ve.add(Jn)),r=Math.max(r,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new we(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let I=0;I<o;I++)c[I]=new b,h[I]=new b;const u=new b,d=new b,p=new b,f=new X,g=new X,y=new X,m=new b,_=new b;function x(I,z,K){u.fromArray(r,3*I),d.fromArray(r,3*z),p.fromArray(r,3*K),f.fromArray(a,2*I),g.fromArray(a,2*z),y.fromArray(a,2*K),d.sub(u),p.sub(u),g.sub(f),y.sub(f);const V=1/(g.x*y.y-y.x*g.y);isFinite(V)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(V),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(V),c[I].add(m),c[z].add(m),c[K].add(m),h[I].add(_),h[z].add(_),h[K].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let I=0,z=M.length;I<z;++I){const K=M[I],V=K.start;for(let F=V,j=V+K.count;F<j;F+=3)x(n[F+0],n[F+1],n[F+2])}const w=new b,T=new b,R=new b,C=new b;function N(I){R.fromArray(i,3*I),C.copy(R);const z=c[I];w.copy(z),w.sub(R.multiplyScalar(R.dot(z))).normalize(),T.crossVectors(C,z);const K=T.dot(h[I])<0?-1:1;l[4*I]=w.x,l[4*I+1]=w.y,l[4*I+2]=w.z,l[4*I+3]=K}for(let I=0,z=M.length;I<z;++I){const K=M[I],V=K.start;for(let F=V,j=V+K.count;F<j;F+=3)N(n[F+0]),N(n[F+1]),N(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new b,i=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,p=e.count;d<p;d+=3){const f=e.getX(d+0),g=e.getX(d+1),y=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,y),h.subVectors(a,i),u.subVectors(r,i),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),i.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,i),u.subVectors(r,i),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!e||!e.isBufferGeometry)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const i=n[r].array,a=e.attributes[r],o=a.array,l=a.itemSize*t,c=Math.min(o.length,i.length-l);for(let h=0,u=l;h<c;h++,u++)i[u]=o[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ve.fromBufferAttribute(e,t),Ve.normalize(),e.setXYZ(t,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,f=0;for(let g=0,y=l.length;g<y;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let m=0;m<h;m++)d[f++]=c[p++]}return new we(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fe,n=this.index.array,r=this.attributes;for(const o in r){const l=e(r[o],n);t.setAttribute(o,l)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let h=0,u=c.length;h<u;h++){const d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const i=e.morphAttributes;for(const c in i){const h=[],u=i[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}fe.prototype.isBufferGeometry=!0;const Eo=new ce,Zn=new Kt,ks=new Zt,en=new b,tn=new b,nn=new b,Vs=new b,Ws=new b,js=new b,xi=new b,_i=new b,Mi=new b,bi=new X,wi=new X,Si=new X,qs=new b,Ti=new b;class Ue extends Me{constructor(e=new fe,t=new Ht){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),e.ray.intersectsSphere(ks)===!1)||(Eo.copy(i).invert(),Zn.copy(e.ray).applyMatrix4(Eo),n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,y=p.length;g<y;g++){const m=p[g],_=r[m.materialIndex];for(let x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));x<M;x+=3){const w=o.getX(x),T=o.getX(x+1),R=o.getX(x+2);a=Ei(this,_,e,Zn,l,c,h,u,d,w,T,R),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else for(let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);g<y;g+=3){const m=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);a=Ei(this,r,e,Zn,l,c,h,u,d,m,_,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=p.length;g<y;g++){const m=p[g],_=r[m.materialIndex];for(let x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));x<M;x+=3)a=Ei(this,_,e,Zn,l,c,h,u,d,x,x+1,x+2),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}else for(let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);g<y;g+=3)a=Ei(this,r,e,Zn,l,c,h,u,d,g,g+1,g+2),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}function Ei(s,e,t,n,r,i,a,o,l,c,h,u){en.fromBufferAttribute(r,c),tn.fromBufferAttribute(r,h),nn.fromBufferAttribute(r,u);const d=s.morphTargetInfluences;if(i&&d){xi.set(0,0,0),_i.set(0,0,0),Mi.set(0,0,0);for(let f=0,g=i.length;f<g;f++){const y=d[f],m=i[f];y!==0&&(Vs.fromBufferAttribute(m,c),Ws.fromBufferAttribute(m,h),js.fromBufferAttribute(m,u),a?(xi.addScaledVector(Vs,y),_i.addScaledVector(Ws,y),Mi.addScaledVector(js,y)):(xi.addScaledVector(Vs.sub(en),y),_i.addScaledVector(Ws.sub(tn),y),Mi.addScaledVector(js.sub(nn),y)))}en.add(xi),tn.add(_i),nn.add(Mi)}s.isSkinnedMesh&&(s.boneTransform(c,en),s.boneTransform(h,tn),s.boneTransform(u,nn));const p=function(f,g,y,m,_,x,M,w){let T;if(T=g.side===1?m.intersectTriangle(M,x,_,!0,w):m.intersectTriangle(_,x,M,g.side!==2,w),T===null)return null;Ti.copy(w),Ti.applyMatrix4(f.matrixWorld);const R=y.ray.origin.distanceTo(Ti);return R<y.near||R>y.far?null:{distance:R,point:Ti.clone(),object:f}}(s,e,t,n,en,tn,nn,qs);if(p){o&&(bi.fromBufferAttribute(o,c),wi.fromBufferAttribute(o,h),Si.fromBufferAttribute(o,u),p.uv=Be.getUV(qs,en,tn,nn,bi,wi,Si,new X)),l&&(bi.fromBufferAttribute(l,c),wi.fromBufferAttribute(l,h),Si.fromBufferAttribute(l,u),p.uv2=Be.getUV(qs,en,tn,nn,bi,wi,Si,new X));const f={a:c,b:h,c:u,normal:new b,materialIndex:0};Be.getNormal(en,tn,nn,f.normal),p.face=f}return p}Ue.prototype.isMesh=!0;class Gt extends fe{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};const o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;function f(g,y,m,_,x,M,w,T,R,C,N){const I=M/R,z=w/C,K=M/2,V=w/2,F=T/2,j=R+1,te=C+1;let ie=0,oe=0;const ue=new b;for(let de=0;de<te;de++){const Y=de*z-V;for(let E=0;E<j;E++){const A=E*I-K;ue[g]=A*_,ue[y]=Y*x,ue[m]=F,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[y]=0,ue[m]=T>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(E/R),u.push(1-de/C),ie+=1}}for(let de=0;de<C;de++)for(let Y=0;Y<R;Y++){const E=d+Y+j*de,A=d+Y+j*(de+1),U=d+(Y+1)+j*(de+1),O=d+(Y+1)+j*de;l.push(E,A,O),l.push(A,U,O),oe+=6}o.addGroup(p,oe,N),p+=oe,d+=ie}f("z","y","x",-1,-1,n,t,e,a,i,0),f("z","y","x",1,-1,n,t,-e,a,i,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,i,4),f("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2))}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qn(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function et(s){const e={};for(let t=0;t<s.length;t++){const n=Qn(s[t]);for(const r in n)e[r]=n[r]}return e}const Ao={clone:Qn,merge:et};class kt extends ke{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const i=this.uniforms[r].value;i&&i.isTexture?t.uniforms[r]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[r]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[r]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[r]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[r]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[r]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[r]={type:"m4",value:i.toArray()}:t.uniforms[r]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}kt.prototype.isShaderMaterial=!0;class Ar extends Me{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ar.prototype.isCamera=!0;class We extends Ar{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Mr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*un*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Mr*Math.atan(Math.tan(.5*un*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*un*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}We.prototype.isPerspectiveCamera=!0;const Kn=90;class Ai extends Me{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0)return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");this.renderTarget=n;const r=new We(Kn,1,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(1,0,0)),this.add(r);const i=new We(Kn,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new b(-1,0,0)),this.add(i);const a=new We(Kn,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new b(0,1,0)),this.add(a);const o=new We(Kn,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new b(0,-1,0)),this.add(o);const l=new We(Kn,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,1)),this.add(l);const c=new We(Kn,1,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,i,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class $n extends Ge{constructor(e,t,n,r,i,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:301,n,r,i,a,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}$n.prototype.isCubeTexture=!0;class Li extends vt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new $n(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=1023,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gt(5,5,5),i=new kt({name:"CubemapFromEquirect",uniforms:Qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;const a=new Ue(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Ai(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(i)}}Li.prototype.isWebGLCubeRenderTarget=!0;const Xs=new b,ch=new b,hh=new He;class At{constructor(e=new b(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Xs.subVectors(n,t).cross(ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Xs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(n).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hh.getNormalMatrix(e),r=this.coplanarPoint(Xs).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}At.prototype.isPlane=!0;const er=new Zt,Ri=new b;class Lr{constructor(e=new At,t=new At,n=new At,r=new At,i=new At,a=new At){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],i=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],f=n[10],g=n[11],y=n[12],m=n[13],_=n[14],x=n[15];return t[0].setComponents(o-r,u-l,g-d,x-y).normalize(),t[1].setComponents(o+r,u+l,g+d,x+y).normalize(),t[2].setComponents(o+i,u+c,g+p,x+m).normalize(),t[3].setComponents(o-i,u-c,g-p,x-m).normalize(),t[4].setComponents(o-a,u-h,g-f,x-_).normalize(),t[5].setComponents(o+a,u+h,g+f,x+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ri.x=r.normal.x>0?e.max.x:e.min.x,Ri.y=r.normal.y>0?e.max.y:e.min.y,Ri.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ri)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lo(){let s=null,e=!1,t=null,n=null;function r(i,a){t(i,a),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function uh(s,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(r){return r.isInterleavedBufferAttribute&&(r=r.data),n.get(r)},remove:function(r){r.isInterleavedBufferAttribute&&(r=r.data);const i=n.get(r);i&&(s.deleteBuffer(i.buffer),n.delete(r))},update:function(r,i){if(r.isGLBufferAttribute){const o=n.get(r);return void((!o||o.version<r.version)&&n.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version}))}r.isInterleavedBufferAttribute&&(r=r.data);const a=n.get(r);a===void 0?n.set(r,function(o,l){const c=o.array,h=o.usage,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d=5126;return c instanceof Float32Array?d=5126:c instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):c instanceof Uint16Array?o.isFloat16BufferAttribute?t?d=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):d=5123:c instanceof Int16Array?d=5122:c instanceof Uint32Array?d=5125:c instanceof Int32Array?d=5124:c instanceof Int8Array?d=5120:(c instanceof Uint8Array||c instanceof Uint8ClampedArray)&&(d=5121),{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version}}(r,i)):a.version<r.version&&(function(o,l,c){const h=l.array,u=l.updateRange;s.bindBuffer(c,o),u.count===-1?s.bufferSubData(c,0,h):(t?s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1)}(a.buffer,r,i),a.version=r.version)}}}class gn extends fe{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],g=[],y=[];for(let m=0;m<h;m++){const _=m*d-a;for(let x=0;x<c;x++){const M=x*u-i;f.push(M,-_,0),g.push(0,0,1),y.push(x/o),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const x=_+c*m,M=_+c*(m+1),w=_+1+c*(m+1),T=_+1+c*m;p.push(x,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(g,3)),this.setAttribute("uv",new le(y,2))}static fromJSON(e){return new gn(e.width,e.height,e.widthSegments,e.heightSegments)}}const _e={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(		0, 1,		0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
							f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
							f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},ne={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new He},uv2Transform:{value:new He},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}}},Mt={basic:{uniforms:et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.fog,ne.lights,{emissive:{value:new re(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:et([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:et([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new re(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:et([ne.points,ne.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:et([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:et([ne.common,ne.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:et([ne.sprite,ne.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},cube:{uniforms:et([ne.envmap,{opacity:{value:1}}]),vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:et([ne.common,ne.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:et([ne.lights,ne.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};function dh(s,e,t,n,r){const i=new re(0);let a,o,l=0,c=null,h=0,u=null;function d(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,r)}return{getClearColor:function(){return i},setClearColor:function(p,f=1){i.set(p),l=f,d(i,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(i,l)},render:function(p,f){let g=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=e.get(y));const m=s.xr,_=m.getSession&&m.getSession();_&&_.environmentBlendMode==="additive"&&(y=null),y===null?d(i,l):y&&y.isColor&&(d(y,1),g=!0),(s.autoClear||g)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===306)?(o===void 0&&(o=new Ue(new Gt(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:Qn(Mt.cube.uniforms),vertexShader:Mt.cube.vertexShader,fragmentShader:Mt.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(x,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(o)),o.material.uniforms.envMap.value=y,o.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c===y&&h===y.version&&u===s.toneMapping||(o.material.needsUpdate=!0,c=y,h=y.version,u=s.toneMapping),p.unshift(o,o.geometry,o.material,0,0,null)):y&&y.isTexture&&(a===void 0&&(a=new Ue(new gn(2,2),new kt({name:"BackgroundMaterial",uniforms:Qn(Mt.background.uniforms),vertexShader:Mt.background.vertexShader,fragmentShader:Mt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),a.material.uniforms.uvTransform.value.copy(y.matrix),c===y&&h===y.version&&u===s.toneMapping||(a.material.needsUpdate=!0,c=y,h=y.version,u=s.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}}}function ph(s,e,t,n){const r=s.getParameter(34921),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||i!==null,o={},l=d(null);let c=l;function h(M){return n.isWebGL2?s.bindVertexArray(M):i.bindVertexArrayOES(M)}function u(M){return n.isWebGL2?s.deleteVertexArray(M):i.deleteVertexArrayOES(M)}function d(M){const w=[],T=[],R=[];for(let C=0;C<r;C++)w[C]=0,T[C]=0,R[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:T,attributeDivisors:R,object:M,attributes:{},index:null}}function p(){const M=c.newAttributes;for(let w=0,T=M.length;w<T;w++)M[w]=0}function f(M){g(M,0)}function g(M,w){const T=c.newAttributes,R=c.enabledAttributes,C=c.attributeDivisors;T[M]=1,R[M]===0&&(s.enableVertexAttribArray(M),R[M]=1),C[M]!==w&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,w),C[M]=w)}function y(){const M=c.newAttributes,w=c.enabledAttributes;for(let T=0,R=w.length;T<R;T++)w[T]!==M[T]&&(s.disableVertexAttribArray(T),w[T]=0)}function m(M,w,T,R,C,N){n.isWebGL2!==!0||T!==5124&&T!==5125?s.vertexAttribPointer(M,w,T,R,C,N):s.vertexAttribIPointer(M,w,T,C,N)}function _(){x(),c!==l&&(c=l,h(c.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(M,w,T,R,C){let N=!1;if(a){const I=function(z,K,V){const F=V.wireframe===!0;let j=o[z.id];j===void 0&&(j={},o[z.id]=j);let te=j[K.id];te===void 0&&(te={},j[K.id]=te);let ie=te[F];return ie===void 0&&(ie=d(n.isWebGL2?s.createVertexArray():i.createVertexArrayOES()),te[F]=ie),ie}(R,T,w);c!==I&&(c=I,h(c.object)),N=function(z,K){const V=c.attributes,F=z.attributes;let j=0;for(const te in F){const ie=V[te],oe=F[te];if(ie===void 0||ie.attribute!==oe||ie.data!==oe.data)return!0;j++}return c.attributesNum!==j||c.index!==K}(R,C),N&&function(z,K){const V={},F=z.attributes;let j=0;for(const te in F){const ie=F[te],oe={};oe.attribute=ie,ie.data&&(oe.data=ie.data),V[te]=oe,j++}c.attributes=V,c.attributesNum=j,c.index=K}(R,C)}else{const I=w.wireframe===!0;c.geometry===R.id&&c.program===T.id&&c.wireframe===I||(c.geometry=R.id,c.program=T.id,c.wireframe=I,N=!0)}M.isInstancedMesh===!0&&(N=!0),C!==null&&t.update(C,34963),N&&(function(I,z,K,V){if(n.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const F=V.attributes,j=K.getAttributes(),te=z.defaultAttributeValues;for(const ie in j){const oe=j[ie];if(oe.location>=0){let ue=F[ie];if(ue===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ue!==void 0){const de=ue.normalized,Y=ue.itemSize,E=t.get(ue);if(E===void 0)continue;const A=E.buffer,U=E.type,O=E.bytesPerElement;if(ue.isInterleavedBufferAttribute){const P=ue.data,J=P.stride,$=ue.offset;if(P&&P.isInstancedInterleavedBuffer){for(let B=0;B<oe.locationSize;B++)g(oe.location+B,P.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let B=0;B<oe.locationSize;B++)f(oe.location+B);s.bindBuffer(34962,A);for(let B=0;B<oe.locationSize;B++)m(oe.location+B,Y/oe.locationSize,U,de,J*O,($+Y/oe.locationSize*B)*O)}else{if(ue.isInstancedBufferAttribute){for(let P=0;P<oe.locationSize;P++)g(oe.location+P,ue.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let P=0;P<oe.locationSize;P++)f(oe.location+P);s.bindBuffer(34962,A);for(let P=0;P<oe.locationSize;P++)m(oe.location+P,Y/oe.locationSize,U,de,Y*O,Y/oe.locationSize*P*O)}}else if(te!==void 0){const de=te[ie];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(oe.location,de);break;case 3:s.vertexAttrib3fv(oe.location,de);break;case 4:s.vertexAttrib4fv(oe.location,de);break;default:s.vertexAttrib1fv(oe.location,de)}}}}y()}(M,w,T,R),C!==null&&s.bindBuffer(34963,t.get(C).buffer))},reset:_,resetDefaultState:x,dispose:function(){_();for(const M in o){const w=o[M];for(const T in w){const R=w[T];for(const C in R)u(R[C].object),delete R[C];delete w[T]}delete o[M]}},releaseStatesOfGeometry:function(M){if(o[M.id]===void 0)return;const w=o[M.id];for(const T in w){const R=w[T];for(const C in R)u(R[C].object),delete R[C];delete w[T]}delete o[M.id]},releaseStatesOfProgram:function(M){for(const w in o){const T=o[w];if(T[M.id]===void 0)continue;const R=T[M.id];for(const C in R)u(R[C].object),delete R[C];delete T[M.id]}},initAttributes:p,enableAttribute:f,disableUnusedAttributes:y}}function fh(s,e,t,n){const r=n.isWebGL2;let i;this.setMode=function(a){i=a},this.render=function(a,o){s.drawArrays(i,a,o),t.update(o,i,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(r)c=s,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](i,a,o,l),t.update(o,i,l)}}function mh(s,e,t){let n;function r(M){if(M==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const i=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=i||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),d=s.getParameter(3379),p=s.getParameter(34076),f=s.getParameter(34921),g=s.getParameter(36347),y=s.getParameter(36348),m=s.getParameter(36349),_=u>0,x=i||e.has("OES_texture_float");return{isWebGL2:i,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:_&&x,maxSamples:i?s.getParameter(36183):0}}function gh(s){const e=this;let t=null,n=0,r=!1,i=!1;const a=new At,o=new He,l={value:null,needsUpdate:!1};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,f){const g=u!==null?u.length:0;let y=null;if(g!==0){if(y=l.value,f!==!0||y===null){const m=p+4*g,_=d.matrixWorldInverse;o.getNormalMatrix(_),(y===null||y.length<m)&&(y=new Float32Array(m));for(let x=0,M=p;x!==g;++x,M+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(y,M),y[M+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const f=u.length!==0||d||n!==0||r;return r=d,t=h(u,p,0),n=u.length,f},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1,c()},this.setState=function(u,d,p){const f=u.clippingPlanes,g=u.clipIntersection,y=u.clipShadows,m=s.get(u);if(!r||f===null||f.length===0||i&&!y)i?h(null):c();else{const _=i?0:n,x=4*_;let M=m.clippingState||null;l.value=M,M=h(f,d,x,p);for(let w=0;w!==x;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}}}function vh(s){let e=new WeakMap;function t(r,i){return i===303?r.mapping=301:i===304&&(r.mapping=302),r}function n(r){const i=r.target;i.removeEventListener("dispose",n);const a=e.get(i);a!==void 0&&(e.delete(i),a.dispose())}return{get:function(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const i=r.mapping;if(i===303||i===304){if(e.has(r))return t(e.get(r).texture,r.mapping);{const a=r.image;if(a&&a.height>0){const o=s.getRenderTarget(),l=new Li(a.height/2);return l.fromEquirectangularTexture(s,r),e.set(r,l),s.setRenderTarget(o),r.addEventListener("dispose",n),t(l.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}Mt.physical={uniforms:et([Mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new X(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};class Rr extends Ar{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Rr.prototype.isOrthographicCamera=!0;class tr extends kt{constructor(e){super(e),this.type="RawShaderMaterial"}}tr.prototype.isRawShaderMaterial=!0;const Lt=Math.pow(2,8),Ro=[.125,.215,.35,.446,.526,.582],Co=5+Ro.length,Ci=20,rn={3e3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},Ys=new Rr,{_lodPlanes:Cr,_sizeLods:Po,_sigmas:Pi}=xh(),Io=new re;let Js=null;const vn=(1+Math.sqrt(5))/2,nr=1/vn,Do=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,vn,nr),new b(0,vn,-nr),new b(nr,0,vn),new b(-nr,0,vn),new b(vn,nr,0),new b(-vn,nr,0)];class No{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=function(t){const n=new Float32Array(t),r=new b(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r},inputEncoding:{value:rn[3e3]},outputEncoding:{value:rn[3e3]}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Qs()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(Ci),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Js=this._renderer.getRenderTarget();const i=this._allocateTargets();return this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Fo(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Bo(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Cr.length;e++)Cr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Js),e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e){Js=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:1009,format:1023,encoding:yh(e)?e.encoding:3002,depthBuffer:!1},n=zo(t);return n.depthBuffer=!e,this._pingPongRenderTarget=zo(t),n}_compileMaterial(e){const t=new Ue(Cr[0],e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,r){const i=new We(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.outputEncoding,u=l.toneMapping;l.getClearColor(Io),l.toneMapping=0,l.outputEncoding=3e3,l.autoClear=!1;const d=new Ht({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Ue(new Gt,d);let f=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,f=!0):(d.color.copy(Io),f=!0);for(let y=0;y<6;y++){const m=y%3;m==0?(i.up.set(0,a[y],0),i.lookAt(o[y],0,0)):m==1?(i.up.set(0,0,a[y]),i.lookAt(0,o[y],0)):(i.up.set(0,a[y],0),i.lookAt(0,0,o[y])),Ii(r,m*Lt,y>2?Lt:0,Lt,Lt),l.setRenderTarget(r),f&&l.render(p,i),l.render(e,i)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=u,l.outputEncoding=h,l.autoClear=c,e.background=g}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===1023&&t.type===1009&&t.encoding===3001?e.value=rn[3e3]:e.value=rn[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?this._cubemapShader==null&&(this._cubemapShader=Fo()):this._equirectShader==null&&(this._equirectShader=Bo());const i=r?this._cubemapShader:this._equirectShader,a=new Ue(Cr[0],i),o=i.uniforms;o.envMap.value=e,r||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),Ii(t,0,0,3*Lt,2*Lt),n.setRenderTarget(t),n.render(a,Ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<Co;r++){const i=Math.sqrt(Pi[r]*Pi[r]-Pi[r-1]*Pi[r-1]),a=Do[(r-1)%Do.length];this._blur(e,r-1,r,i,a)}t.autoClear=n}_blur(e,t,n,r,i){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",i),this._halfBlur(a,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=new Ue(Cr[r],c),u=c.uniforms,d=Po[n]-1,p=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,f=i/p,g=isFinite(i)?1+Math.floor(3*f):Ci;g>Ci&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);const y=[];let m=0;for(let x=0;x<Ci;++x){const M=x/f,w=Math.exp(-M*M/2);y.push(w),x==0?m+=w:x<g&&(m+=2*w)}for(let x=0;x<y.length;x++)y[x]=y[x]/m;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=y,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o),u.dTheta.value=p,u.mipInt.value=8-n,this._setEncoding(u.inputEncoding,e.texture),this._setEncoding(u.outputEncoding,e.texture);const _=Po[r];Ii(t,3*Math.max(0,Lt-2*_),(r===0?0:2*Lt)+2*_*(r>4?r-8+4:0),3*_,2*_),l.setRenderTarget(t),l.render(h,Ys)}}function yh(s){return s!==void 0&&s.type===1009&&(s.encoding===3e3||s.encoding===3001||s.encoding===3007)}function xh(){const s=[],e=[],t=[];let n=8;for(let r=0;r<Co;r++){const i=Math.pow(2,n);e.push(i);let a=1/i;r>4?a=Ro[r-8+4-1]:r==0&&(a=0),t.push(a);const o=1/(i-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,p=3,f=2,g=1,y=new Float32Array(p*d*u),m=new Float32Array(f*d*u),_=new Float32Array(g*d*u);for(let M=0;M<u;M++){const w=M%3*2/3-1,T=M>2?0:-1,R=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];y.set(R,p*d*M),m.set(h,f*d*M);const C=[M,M,M,M,M,M];_.set(C,g*d*M)}const x=new fe;x.setAttribute("position",new we(y,p)),x.setAttribute("uv",new we(m,f)),x.setAttribute("faceIndex",new we(_,g)),s.push(x),n>4&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function zo(s){const e=new vt(3*Lt,3*Lt,s);return e.texture.mapping=306,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Ii(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function Bo(){const s=new X(1,1);return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:rn[3e3]},outputEncoding:{value:rn[3e3]}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Qs()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fo(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:rn[3e3]},outputEncoding:{value:rn[3e3]}},vertexShader:Zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Qs()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qs(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function _h(s){let e=new WeakMap,t=null;function n(r){const i=r.target;i.removeEventListener("dispose",n);const a=e.get(i);a!==void 0&&(e.delete(i),a.dispose())}return{get:function(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const i=r.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){if(e.has(r))return e.get(r).texture;{const l=r.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0;const u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){const c=s.getRenderTarget();t===null&&(t=new No(s));const h=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,h),s.setRenderTarget(c),r.addEventListener("dispose",n),h.texture}return null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Mh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bh(s,e,t,n){const r={},i=new WeakMap;function a(l){const c=l.target;c.index!==null&&e.remove(c.index);for(const u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete r[c.id];const h=i.get(c);h&&(e.remove(h),i.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){const c=[],h=l.index,u=l.attributes.position;let d=0;if(h!==null){const g=h.array;d=h.version;for(let y=0,m=g.length;y<m;y+=3){const _=g[y+0],x=g[y+1],M=g[y+2];c.push(_,x,x,M,M,_)}}else{const g=u.array;d=u.version;for(let y=0,m=g.length/3-1;y<m;y+=3){const _=y+0,x=y+1,M=y+2;c.push(_,x,x,M,M,_)}}const p=new(io(c)>65535?yi:vi)(c,1);p.version=d;const f=i.get(l);f&&e.remove(f),i.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c},update:function(l){const c=l.attributes;for(const u in c)e.update(c[u],34962);const h=l.morphAttributes;for(const u in h){const d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){const c=i.get(l);if(c){const h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return i.get(l)}}}function wh(s,e,t,n){const r=n.isWebGL2;let i,a,o;this.setMode=function(l){i=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){s.drawElements(i,c,a,l*o),t.update(c,i,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(r)u=s,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](i,c,a,l*o,h),t.update(c,i,h)}}function Sh(s){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case 4:e.triangles+=r*(t/3);break;case 1:e.lines+=r*(t/2);break;case 3:e.lines+=r*(t-1);break;case 2:e.lines+=r*t;break;case 0:e.points+=r*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}class Di extends Ge{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}function Th(s,e){return s[0]-e[0]}function Eh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Oo(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Ah(s,e,t){const n={},r=new Float32Array(8),i=new WeakMap,a=new b,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position.length;let f=i.get(c);if(f===void 0||f.count!==p){f!==void 0&&f.texture.dispose();const m=c.morphAttributes.normal!==void 0,_=c.morphAttributes.position,x=c.morphAttributes.normal||[],M=m===!0?2:1;let w=c.attributes.position.count*M,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*T*4*p),C=new Di(R,w,T,p);C.format=1023,C.type=1015;const N=4*M;for(let I=0;I<p;I++){const z=_[I],K=x[I],V=w*T*4*I;for(let F=0;F<z.count;F++){a.fromBufferAttribute(z,F),z.normalized===!0&&Oo(a,z);const j=F*N;R[V+j+0]=a.x,R[V+j+1]=a.y,R[V+j+2]=a.z,R[V+j+3]=0,m===!0&&(a.fromBufferAttribute(K,F),K.normalized===!0&&Oo(a,K),R[V+j+4]=a.x,R[V+j+5]=a.y,R[V+j+6]=a.z,R[V+j+7]=0)}}f={count:p,texture:C,size:new X(w,T)},i.set(c,f)}let g=0;for(let m=0;m<d.length;m++)g+=d[m];const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const p=d===void 0?0:d.length;let f=n[c.id];if(f===void 0||f.length!==p){f=[];for(let x=0;x<p;x++)f[x]=[x,0];n[c.id]=f}for(let x=0;x<p;x++){const M=f[x];M[0]=x,M[1]=d[x]}f.sort(Eh);for(let x=0;x<8;x++)x<p&&f[x][1]?(o[x][0]=f[x][0],o[x][1]=f[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Th);const g=c.morphAttributes.position,y=c.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const M=o[x],w=M[0],T=M[1];w!==Number.MAX_SAFE_INTEGER&&T?(g&&c.getAttribute("morphTarget"+x)!==g[w]&&c.setAttribute("morphTarget"+x,g[w]),y&&c.getAttribute("morphNormal"+x)!==y[w]&&c.setAttribute("morphNormal"+x,y[w]),r[x]=T,m+=T):(g&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),y&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const _=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",r)}}}}function Lh(s,e,t,n){let r=new WeakMap;function i(a){const o=a.target;o.removeEventListener("dispose",i),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){const o=n.render.frame,l=a.geometry,c=e.get(a,l);return r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",i)===!1&&a.addEventListener("dispose",i),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),c},dispose:function(){r=new WeakMap}}}Di.prototype.isDataTexture2DArray=!0;class Ks extends Ge{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ks.prototype.isDataTexture3D=!0;const Uo=new Ge,Rh=new Di,Ch=new Ks,Ho=new $n,Go=[],ko=[],Vo=new Float32Array(16),Wo=new Float32Array(9),jo=new Float32Array(4);function rr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let i=Go[r];if(i===void 0&&(i=new Float32Array(r),Go[r]=i),e!==0){n.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qo(s,e){let t=ko[e];t===void 0&&(t=new Int32Array(e),ko[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ph(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ih(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;s.uniform2fv(this.addr,e),tt(t,e)}}function Dh(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;s.uniform3fv(this.addr,e),tt(t,e)}}function Nh(s,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;s.uniform4fv(this.addr,e),tt(t,e)}}function zh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(rt(t,n))return;jo.set(n),s.uniformMatrix2fv(this.addr,!1,jo),tt(t,n)}}function Bh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(rt(t,n))return;Wo.set(n),s.uniformMatrix3fv(this.addr,!1,Wo),tt(t,n)}}function Fh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(rt(t,n))return;Vo.set(n),s.uniformMatrix4fv(this.addr,!1,Vo),tt(t,n)}}function Oh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Uh(s,e){const t=this.cache;rt(t,e)||(s.uniform2iv(this.addr,e),tt(t,e))}function Hh(s,e){const t=this.cache;rt(t,e)||(s.uniform3iv(this.addr,e),tt(t,e))}function Gh(s,e){const t=this.cache;rt(t,e)||(s.uniform4iv(this.addr,e),tt(t,e))}function kh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Vh(s,e){const t=this.cache;rt(t,e)||(s.uniform2uiv(this.addr,e),tt(t,e))}function Wh(s,e){const t=this.cache;rt(t,e)||(s.uniform3uiv(this.addr,e),tt(t,e))}function jh(s,e){const t=this.cache;rt(t,e)||(s.uniform4uiv(this.addr,e),tt(t,e))}function qh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||Uo,r)}function Xh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ch,r)}function Yh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||Ho,r)}function Jh(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rh,r)}function Zh(s,e){s.uniform1fv(this.addr,e)}function Qh(s,e){const t=rr(e,this.size,2);s.uniform2fv(this.addr,t)}function Kh(s,e){const t=rr(e,this.size,3);s.uniform3fv(this.addr,t)}function $h(s,e){const t=rr(e,this.size,4);s.uniform4fv(this.addr,t)}function eu(s,e){const t=rr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tu(s,e){const t=rr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nu(s,e){const t=rr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ru(s,e){s.uniform1iv(this.addr,e)}function iu(s,e){s.uniform2iv(this.addr,e)}function su(s,e){s.uniform3iv(this.addr,e)}function au(s,e){s.uniform4iv(this.addr,e)}function ou(s,e){s.uniform1uiv(this.addr,e)}function lu(s,e){s.uniform2uiv(this.addr,e)}function cu(s,e){s.uniform3uiv(this.addr,e)}function hu(s,e){s.uniform4uiv(this.addr,e)}function uu(s,e,t){const n=e.length,r=qo(t,n);s.uniform1iv(this.addr,r);for(let i=0;i!==n;++i)t.safeSetTexture2D(e[i]||Uo,r[i])}function du(s,e,t){const n=e.length,r=qo(t,n);s.uniform1iv(this.addr,r);for(let i=0;i!==n;++i)t.safeSetTextureCube(e[i]||Ho,r[i])}function pu(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=function(n){switch(n){case 5126:return Ph;case 35664:return Ih;case 35665:return Dh;case 35666:return Nh;case 35674:return zh;case 35675:return Bh;case 35676:return Fh;case 5124:case 35670:return Oh;case 35667:case 35671:return Uh;case 35668:case 35672:return Hh;case 35669:case 35673:return Gh;case 5125:return kh;case 36294:return Vh;case 36295:return Wh;case 36296:return jh;case 35678:case 36198:case 36298:case 36306:case 35682:return qh;case 35679:case 36299:case 36307:return Xh;case 35680:case 36300:case 36308:case 36293:return Yh;case 36289:case 36303:case 36311:case 36292:return Jh}}(e.type)}function Xo(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(n){switch(n){case 5126:return Zh;case 35664:return Qh;case 35665:return Kh;case 35666:return $h;case 35674:return eu;case 35675:return tu;case 35676:return nu;case 5124:case 35670:return ru;case 35667:case 35671:return iu;case 35668:case 35672:return su;case 35669:case 35673:return au;case 5125:return ou;case 36294:return lu;case 36295:return cu;case 36296:return hu;case 35678:case 36198:case 36298:case 36306:case 35682:return uu;case 35680:case 36300:case 36308:case 36293:return du}}(e.type)}function Yo(s){this.id=s,this.seq=[],this.map={}}Xo.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),tt(e,s)},Yo.prototype.setValue=function(s,e,t){const n=this.seq;for(let r=0,i=n.length;r!==i;++r){const a=n[r];a.setValue(s,e[a.id],t)}};const $s=/(\w+)(\])?(\[|\.)?/g;function Jo(s,e){s.seq.push(e),s.map[e.id]=e}function fu(s,e,t){const n=s.name,r=n.length;for($s.lastIndex=0;;){const i=$s.exec(n),a=$s.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){Jo(t,c===void 0?new pu(o,s,e):new Xo(o,s,e));break}{let h=t.map[o];h===void 0&&(h=new Yo(o),Jo(t,h)),t=h}}}function sn(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=s.getActiveUniform(e,n);fu(r,s.getUniformLocation(e,r.name),this)}}function Zo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}sn.prototype.setValue=function(s,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(s,t,n)},sn.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)},sn.upload=function(s,e,t,n){for(let r=0,i=e.length;r!==i;++r){const a=e[r],o=t[a.id];o.needsUpdate!==!1&&a.setValue(s,o.value,n)}},sn.seqWithValue=function(s,e){const t=[];for(let n=0,r=s.length;n!==r;++n){const i=s[n];i.id in e&&t.push(i)}return t};let mu=0;function Qo(s){switch(s){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ko(s,e,t){const n=s.getShaderParameter(e,35713),r=s.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+function(i){const a=i.split(`
`);for(let o=0;o<a.length;o++)a[o]=o+1+": "+a[o];return a.join(`
`)}(s.getShaderSource(e))}function yn(s,e){const t=Qo(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function gu(s,e){const t=Qo(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vu(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pr(s){return s!==""}function $o(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(s){return s.replace(yu,xu)}function xu(s,e){const t=_e[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ea(t)}const _u=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Mu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(s){return s.replace(Mu,nl).replace(_u,bu)}function bu(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),nl(s,e,t,n)}function nl(s,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function rl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wu(s,e,t,n){const r=s.getContext(),i=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(C){let N="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===1?N="SHADOWMAP_TYPE_PCF":C.shadowMapType===2?N="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===3&&(N="SHADOWMAP_TYPE_VSM"),N}(t),c=function(C){let N="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case 301:case 302:N="ENVMAP_TYPE_CUBE";break;case 306:case 307:N="ENVMAP_TYPE_CUBE_UV"}return N}(t),h=function(C){let N="ENVMAP_MODE_REFLECTION";if(C.envMap)switch(C.envMapMode){case 302:case 307:N="ENVMAP_MODE_REFRACTION"}return N}(t),u=function(C){let N="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case 0:N="ENVMAP_BLENDING_MULTIPLY";break;case 1:N="ENVMAP_BLENDING_MIX";break;case 2:N="ENVMAP_BLENDING_ADD"}return N}(t),d=s.gammaFactor>0?s.gammaFactor:1,p=t.isWebGL2?"":function(C){return[C.extensionDerivatives||C.envMapCubeUV||C.bumpMap||C.tangentSpaceNormalMap||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pr).join(`
`)}(t),f=function(C){const N=[];for(const I in C){const z=C[I];z!==!1&&N.push("#define "+I+" "+z)}return N.join(`
`)}(i),g=r.createProgram();let y,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[f].filter(Pr).join(`
`),y.length>0&&(y+=`
`),m=[p,f].filter(Pr).join(`
`),m.length>0&&(m+=`
`)):(y=[rl(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),m=[p,rl(t),"#define SHADER_NAME "+t.shaderName,f,"#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?_e.tonemapping_pars_fragment:"",t.toneMapping!==0?vu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===1022?"#define OPAQUE":"",_e.encodings_pars_fragment,t.map?yn("mapTexelToLinear",t.mapEncoding):"",t.matcap?yn("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?yn("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?yn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?yn("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?yn("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?yn("lightMapTexelToLinear",t.lightMapEncoding):"",gu("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),a=ea(a),a=$o(a,t),a=el(a,t),o=ea(o),o=$o(o,t),o=el(o,t),a=tl(a),o=tl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===_s?"":"out highp vec4 pc_fragColor;",t.glslVersion===_s?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=_+m+o,M=Zo(r,35633,_+y+a),w=Zo(r,35632,x);if(r.attachShader(g,M),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),s.debug.checkShaderErrors){const C=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(M).trim(),I=r.getShaderInfoLog(w).trim();let z=!0,K=!0;if(r.getProgramParameter(g,35714)===!1){z=!1;const V=Ko(r,M,"vertex"),F=Ko(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+C+`
`+V+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):N!==""&&I!==""||(K=!1);K&&(this.diagnostics={runnable:z,programLog:C,vertexShader:{log:N,prefix:y},fragmentShader:{log:I,prefix:m}})}let T,R;return r.deleteShader(M),r.deleteShader(w),this.getUniforms=function(){return T===void 0&&(T=new sn(r,g)),T},this.getAttributes=function(){return R===void 0&&(R=function(C,N){const I={},z=C.getProgramParameter(N,35721);for(let K=0;K<z;K++){const V=C.getActiveAttrib(N,K),F=V.name;let j=1;V.type===35674&&(j=2),V.type===35675&&(j=3),V.type===35676&&(j=4),I[F]={type:V.type,location:C.getAttribLocation(N,F),locationSize:j}}return I}(r,g)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=mu++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}function Su(s,e,t,n,r,i,a){const o=[],l=r.isWebGL2,c=r.logarithmicDepthBuffer,h=r.floatVertexTextures,u=r.maxVertexUniforms,d=r.vertexTextures;let p=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},g=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function y(m){let _;return m&&m.isTexture?_=m.encoding:m&&m.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),_=m.texture.encoding):_=3e3,l&&m&&m.isTexture&&m.format===1023&&m.type===1009&&m.encoding===3001&&(_=3e3),_}return{getParameters:function(m,_,x,M,w){const T=M.fog,R=m.isMeshStandardMaterial?M.environment:null,C=(m.isMeshStandardMaterial?t:e).get(m.envMap||R),N=f[m.type],I=w.isSkinnedMesh?function(te){const ie=te.skeleton.bones;if(h)return 1024;{const oe=u,ue=Math.floor((oe-20)/4),de=Math.min(ue,ie.length);return de<ie.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+ie.length+" bones. This GPU supports "+de+"."),0):de}}(w):0;let z,K;if(m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead.")),N){const te=Mt[N];z=te.vertexShader,K=te.fragmentShader}else z=m.vertexShader,K=m.fragmentShader;const V=s.getRenderTarget(),F=m.alphaTest>0,j=m.clearcoat>0;return{isWebGL2:l,shaderID:N,shaderName:m.type,vertexShader:z,fragmentShader:K,defines:m.defines,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,instancing:w.isInstancedMesh===!0,instancingColor:w.isInstancedMesh===!0&&w.instanceColor!==null,supportsVertexTextures:d,outputEncoding:V!==null?y(V.texture):s.outputEncoding,map:!!m.map,mapEncoding:y(m.map),matcap:!!m.matcap,matcapEncoding:y(m.matcap),envMap:!!C,envMapMode:C&&C.mapping,envMapEncoding:y(C),envMapCubeUV:!!C&&(C.mapping===306||C.mapping===307),lightMap:!!m.lightMap,lightMapEncoding:y(m.lightMap),aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,emissiveMapEncoding:y(m.emissiveMap),bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,clearcoat:j,clearcoatMap:j&&!!m.clearcoatMap,clearcoatRoughnessMap:j&&!!m.clearcoatRoughnessMap,clearcoatNormalMap:j&&!!m.clearcoatNormalMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,specularIntensityMap:!!m.specularIntensityMap,specularColorMap:!!m.specularColorMap,specularColorMapEncoding:y(m.specularColorMap),alphaMap:!!m.alphaMap,alphaTest:F,gradientMap:!!m.gradientMap,sheen:m.sheen>0,sheenColorMap:!!m.sheenColorMap,sheenColorMapEncoding:y(m.sheenColorMap),sheenRoughnessMap:!!m.sheenRoughnessMap,transmission:m.transmission>0,transmissionMap:!!m.transmissionMap,thicknessMap:!!m.thicknessMap,combine:m.combine,vertexTangents:!!m.normalMap&&!!w.geometry&&!!w.geometry.attributes.tangent,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.geometry&&!!w.geometry.attributes.color&&w.geometry.attributes.color.itemSize===4,vertexUvs:!!m.map||!!m.bumpMap||!!m.normalMap||!!m.specularMap||!!m.alphaMap||!!m.emissiveMap||!!m.roughnessMap||!!m.metalnessMap||!!m.clearcoatMap||!!m.clearcoatRoughnessMap||!!m.clearcoatNormalMap||!!m.displacementMap||!!m.transmissionMap||!!m.thicknessMap||!!m.specularIntensityMap||!!m.specularColorMap||!!m.sheenColorMap||m.sheenRoughnessMap,uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.transmission>0||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||!!m.sheen>0||m.sheenColorMap||m.sheenRoughnessMap||!m.displacementMap),fog:!!T,useFog:m.fog,fogExp2:T&&T.isFogExp2,flatShading:!!m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:c,skinning:w.isSkinnedMesh===!0&&I>0,maxBones:I,useVertexTexture:h,morphTargets:!!w.geometry&&!!w.geometry.morphAttributes.position,morphNormals:!!w.geometry&&!!w.geometry.morphAttributes.normal,morphTargetsCount:w.geometry&&w.geometry.morphAttributes.position?w.geometry.morphAttributes.position.length:0,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,format:m.format,dithering:m.dithering,shadowMapEnabled:s.shadowMap.enabled&&x.length>0,shadowMapType:s.shadowMap.type,toneMapping:m.toneMapped?s.toneMapping:0,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,depthPacking:m.depthPacking!==void 0&&m.depthPacking,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){const _=[];if(m.shaderID?_.push(m.shaderID):(_.push(so(m.fragmentShader)),_.push(so(m.vertexShader))),m.defines!==void 0)for(const x in m.defines)_.push(x),_.push(m.defines[x]);if(m.isRawShaderMaterial===!1){for(let x=0;x<g.length;x++)_.push(m[g[x]]);_.push(s.outputEncoding),_.push(s.gammaFactor)}return _.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){const _=f[m.type];let x;if(_){const M=Mt[_];x=Ao.clone(M.uniforms)}else x=m.uniforms;return x},acquireProgram:function(m,_){let x;for(let M=0,w=o.length;M<w;M++){const T=o[M];if(T.cacheKey===_){x=T,++x.usedTimes;break}}return x===void 0&&(x=new wu(s,_,m,i),o.push(x)),x},releaseProgram:function(m){if(--m.usedTimes==0){const _=o.indexOf(m);o[_]=o[o.length-1],o.pop(),m.destroy()}},programs:o}}function Tu(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,n){s.get(e)[t]=n},dispose:function(){s=new WeakMap}}}function Eu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function il(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function sl(s){const e=[];let t=0;const n=[],r=[],i=[],a={id:-1};function o(l,c,h,u,d,p){let f=e[t];const g=s.get(h);return f===void 0?(f={id:l.id,object:l,geometry:c,material:h,program:g.program||a,groupOrder:u,renderOrder:l.renderOrder,z:d,group:p},e[t]=f):(f.id=l.id,f.object=l,f.geometry=c,f.material=h,f.program=g.program||a,f.groupOrder=u,f.renderOrder=l.renderOrder,f.z=d,f.group=p),t++,f}return{opaque:n,transmissive:r,transparent:i,init:function(){t=0,n.length=0,r.length=0,i.length=0},push:function(l,c,h,u,d,p){const f=o(l,c,h,u,d,p);h.transmission>0?r.push(f):h.transparent===!0?i.push(f):n.push(f)},unshift:function(l,c,h,u,d,p){const f=o(l,c,h,u,d,p);h.transmission>0?r.unshift(f):h.transparent===!0?i.unshift(f):n.unshift(f)},finish:function(){for(let l=t,c=e.length;l<c;l++){const h=e[l];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.program=null,h.group=null}},sort:function(l,c){n.length>1&&n.sort(l||Eu),r.length>1&&r.sort(c||il),i.length>1&&i.sort(c||il)}}}function Au(s){let e=new WeakMap;return{get:function(t,n){let r;return e.has(t)===!1?(r=new sl(s),e.set(t,[r])):n>=e.get(t).length?(r=new sl(s),e.get(t).push(r)):r=e.get(t)[n],r},dispose:function(){e=new WeakMap}}}function Lu(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new re};break;case"SpotLight":t={position:new b,direction:new b,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new b,halfWidth:new b,halfHeight:new b}}return s[e.id]=t,t}}}let Ru=0;function Cu(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Pu(s,e){const t=new Lu,n=function(){const l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let l=0;l<9;l++)r.probe.push(new b);const i=new b,a=new ce,o=new ce;return{setup:function(l,c){let h=0,u=0,d=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let p=0,f=0,g=0,y=0,m=0,_=0,x=0,M=0;l.sort(Cu);const w=c!==!0?Math.PI:1;for(let R=0,C=l.length;R<C;R++){const N=l[R],I=N.color,z=N.intensity,K=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=I.r*z*w,u+=I.g*z*w,d+=I.b*z*w;else if(N.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(N.sh.coefficients[F],z);else if(N.isDirectionalLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const j=N.shadow,te=n.get(N);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.directionalShadow[p]=te,r.directionalShadowMap[p]=V,r.directionalShadowMatrix[p]=N.shadow.matrix,_++}r.directional[p]=F,p++}else if(N.isSpotLight){const F=t.get(N);if(F.position.setFromMatrixPosition(N.matrixWorld),F.color.copy(I).multiplyScalar(z*w),F.distance=K,F.coneCos=Math.cos(N.angle),F.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),F.decay=N.decay,N.castShadow){const j=N.shadow,te=n.get(N);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,r.spotShadow[g]=te,r.spotShadowMap[g]=V,r.spotShadowMatrix[g]=N.shadow.matrix,M++}r.spot[g]=F,g++}else if(N.isRectAreaLight){const F=t.get(N);F.color.copy(I).multiplyScalar(z),F.halfWidth.set(.5*N.width,0,0),F.halfHeight.set(0,.5*N.height,0),r.rectArea[y]=F,y++}else if(N.isPointLight){const F=t.get(N);if(F.color.copy(N.color).multiplyScalar(N.intensity*w),F.distance=N.distance,F.decay=N.decay,N.castShadow){const j=N.shadow,te=n.get(N);te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,r.pointShadow[f]=te,r.pointShadowMap[f]=V,r.pointShadowMatrix[f]=N.shadow.matrix,x++}r.point[f]=F,f++}else if(N.isHemisphereLight){const F=t.get(N);F.skyColor.copy(N.color).multiplyScalar(z*w),F.groundColor.copy(N.groundColor).multiplyScalar(z*w),r.hemi[m]=F,m++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=u,r.ambient[2]=d;const T=r.hash;T.directionalLength===p&&T.pointLength===f&&T.spotLength===g&&T.rectAreaLength===y&&T.hemiLength===m&&T.numDirectionalShadows===_&&T.numPointShadows===x&&T.numSpotShadows===M||(r.directional.length=p,r.spot.length=g,r.rectArea.length=y,r.point.length=f,r.hemi.length=m,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=x,r.spotShadowMatrix.length=M,T.directionalLength=p,T.pointLength=f,T.spotLength=g,T.rectAreaLength=y,T.hemiLength=m,T.numDirectionalShadows=_,T.numPointShadows=x,T.numSpotShadows=M,r.version=Ru++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,f=0;const g=c.matrixWorldInverse;for(let y=0,m=l.length;y<m;y++){const _=l[y];if(_.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(_.isSpotLight){const x=r.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const x=r.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(_.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(.5*_.width,0,0),x.halfHeight.set(0,.5*_.height,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const x=r.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const x=r.hemi[f];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),x.direction.normalize(),f++}}},state:r}}function al(s,e){const t=new Pu(s,e),n=[],r=[];return{init:function(){n.length=0,r.length=0},state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:function(i){t.setup(n,i)},setupLightsView:function(i){t.setupView(n,i)},pushLight:function(i){n.push(i)},pushShadow:function(i){r.push(i)}}}function Iu(s,e){let t=new WeakMap;return{get:function(n,r=0){let i;return t.has(n)===!1?(i=new al(s,e),t.set(n,[i])):r>=t.get(n).length?(i=new al(s,e),t.get(n).push(i)):i=t.get(n)[r],i},dispose:function(){t=new WeakMap}}}class Ni extends ke{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Ni.prototype.isMeshDepthMaterial=!0;class zi extends ke{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}zi.prototype.isMeshDistanceMaterial=!0;function ol(s,e,t){let n=new Lr;const r=new X,i=new X,a=new Ae,o=new Ni({depthPacking:3201}),l=new zi,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new fe;f.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ue(f,d),y=this;function m(M,w){const T=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,T,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,T,p,g,null)}function _(M,w,T,R,C,N,I){let z=null;const K=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z=K!==void 0?K:R.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const V=z.uuid,F=T.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let te=j[F];te===void 0&&(te=z.clone(),j[F]=te),z=te}return z.visible=T.visible,z.wireframe=T.wireframe,z.side=I===3?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],z.alphaMap=T.alphaMap,z.alphaTest=T.alphaTest,z.clipShadows=T.clipShadows,z.clippingPlanes=T.clippingPlanes,z.clipIntersection=T.clipIntersection,z.displacementMap=T.displacementMap,z.displacementScale=T.displacementScale,z.displacementBias=T.displacementBias,z.wireframeLinewidth=T.wireframeLinewidth,z.linewidth=T.linewidth,R.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(R.matrixWorld),z.nearDistance=C,z.farDistance=N),z}function x(M,w,T,R,C){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===3)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const I=e.update(M),z=M.material;if(Array.isArray(z)){const K=I.groups;for(let V=0,F=K.length;V<F;V++){const j=K[V],te=z[j.materialIndex];if(te&&te.visible){const ie=_(M,0,te,R,T.near,T.far,C);s.renderBufferDirect(T,null,I,ie,M,j)}}}else if(z.visible){const K=_(M,0,z,R,T.near,T.far,C);s.renderBufferDirect(T,null,I,K,M,null)}}const N=M.children;for(let I=0,z=N.length;I<z;I++)x(N[I],w,T,R,C)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(M,w,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||M.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),I=s.state;I.setBlending(0),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let z=0,K=M.length;z<K;z++){const V=M[z],F=V.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),i.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(i.x=Math.floor(h/j.x),r.x=i.x*j.x,F.mapSize.x=i.x),r.y>h&&(i.y=Math.floor(h/j.y),r.y=i.y*j.y,F.mapSize.y=i.y)),F.map===null&&!F.isPointLightShadow&&this.type===3){const ie={minFilter:1006,magFilter:1006,format:1023};F.map=new vt(r.x,r.y,ie),F.map.texture.name=V.name+".shadowMap",F.mapPass=new vt(r.x,r.y,ie),F.camera.updateProjectionMatrix()}if(F.map===null){const ie={minFilter:1003,magFilter:1003,format:1023};F.map=new vt(r.x,r.y,ie),F.map.texture.name=V.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const te=F.getViewportCount();for(let ie=0;ie<te;ie++){const oe=F.getViewport(ie);a.set(i.x*oe.x,i.y*oe.y,i.x*oe.z,i.y*oe.w),I.viewport(a),F.updateMatrices(V,ie),n=F.getFrustum(),x(w,T,F.camera,V,this.type)}F.isPointLightShadow||this.type!==3||m(F,T),F.needsUpdate=!1}y.needsUpdate=!1,s.setRenderTarget(R,C,N)}}function Du(s,e,t){const n=t.isWebGL2,r=new function(){let S=!1;const D=new Ae;let k=null;const W=new Ae(0,0,0,0);return{setMask:function(H){k===H||S||(s.colorMask(H,H,H,H),k=H)},setLocked:function(H){S=H},setClear:function(H,se,he,ae,ve){ve===!0&&(H*=ae,se*=ae,he*=ae),D.set(H,se,he,ae),W.equals(D)===!1&&(s.clearColor(H,se,he,ae),W.copy(D))},reset:function(){S=!1,k=null,W.set(-1,0,0,0)}}},i=new function(){let S=!1,D=null,k=null,W=null;return{setTest:function(H){H?Y(2929):E(2929)},setMask:function(H){D===H||S||(s.depthMask(H),D=H)},setFunc:function(H){if(k!==H){if(H)switch(H){case 0:s.depthFunc(512);break;case 1:s.depthFunc(519);break;case 2:s.depthFunc(513);break;default:s.depthFunc(515);break;case 4:s.depthFunc(514);break;case 5:s.depthFunc(518);break;case 6:s.depthFunc(516);break;case 7:s.depthFunc(517)}else s.depthFunc(515);k=H}},setLocked:function(H){S=H},setClear:function(H){W!==H&&(s.clearDepth(H),W=H)},reset:function(){S=!1,D=null,k=null,W=null}}},a=new function(){let S=!1,D=null,k=null,W=null,H=null,se=null,he=null,ae=null,ve=null;return{setTest:function(me){S||(me?Y(2960):E(2960))},setMask:function(me){D===me||S||(s.stencilMask(me),D=me)},setFunc:function(me,qe,Re){k===me&&W===qe&&H===Re||(s.stencilFunc(me,qe,Re),k=me,W=qe,H=Re)},setOp:function(me,qe,Re){se===me&&he===qe&&ae===Re||(s.stencilOp(me,qe,Re),se=me,he=qe,ae=Re)},setLocked:function(me){S=me},setClear:function(me){ve!==me&&(s.clearStencil(me),ve=me)},reset:function(){S=!1,D=null,k=null,W=null,H=null,se=null,he=null,ae=null,ve=null}}};let o={},l=null,c={},h=null,u=!1,d=null,p=null,f=null,g=null,y=null,m=null,_=null,x=!1,M=null,w=null,T=null,R=null,C=null;const N=s.getParameter(35661);let I=!1,z=0;const K=s.getParameter(7938);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),I=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),I=z>=2);let V=null,F={};const j=s.getParameter(3088),te=s.getParameter(2978),ie=new Ae().fromArray(j),oe=new Ae().fromArray(te);function ue(S,D,k){const W=new Uint8Array(4),H=s.createTexture();s.bindTexture(S,H),s.texParameteri(S,10241,9728),s.texParameteri(S,10240,9728);for(let se=0;se<k;se++)s.texImage2D(D+se,0,6408,1,1,0,6408,5121,W);return H}const de={};function Y(S){o[S]!==!0&&(s.enable(S),o[S]=!0)}function E(S){o[S]!==!1&&(s.disable(S),o[S]=!1)}de[3553]=ue(3553,3553,1),de[34067]=ue(34067,34069,6),r.setClear(0,0,0,1),i.setClear(1),a.setClear(0),Y(2929),i.setFunc(3),P(!1),J(1),Y(2884),O(0);const A={100:32774,101:32778,102:32779};if(n)A[103]=32775,A[104]=32776;else{const S=e.get("EXT_blend_minmax");S!==null&&(A[103]=S.MIN_EXT,A[104]=S.MAX_EXT)}const U={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function O(S,D,k,W,H,se,he,ae){if(S!==0){if(u===!1&&(Y(3042),u=!0),S===5)H=H||D,se=se||k,he=he||W,D===p&&H===y||(s.blendEquationSeparate(A[D],A[H]),p=D,y=H),k===f&&W===g&&se===m&&he===_||(s.blendFuncSeparate(U[k],U[W],U[se],U[he]),f=k,g=W,m=se,_=he),d=S,x=null;else if(S!==d||ae!==x){if(p===100&&y===100||(s.blendEquation(32774),p=100,y=100),ae)switch(S){case 1:s.blendFuncSeparate(1,771,1,771);break;case 2:s.blendFunc(1,1);break;case 3:s.blendFuncSeparate(0,0,769,771);break;case 4:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:s.blendFuncSeparate(770,771,1,771);break;case 2:s.blendFunc(770,1);break;case 3:s.blendFunc(0,769);break;case 4:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}f=null,g=null,m=null,_=null,d=S,x=ae}}else u===!0&&(E(3042),u=!1)}function P(S){M!==S&&(S?s.frontFace(2304):s.frontFace(2305),M=S)}function J(S){S!==0?(Y(2884),S!==w&&(S===1?s.cullFace(1029):S===2?s.cullFace(1028):s.cullFace(1032))):E(2884),w=S}function $(S,D,k){S?(Y(32823),R===D&&C===k||(s.polygonOffset(D,k),R=D,C=k)):E(32823)}function B(S){S===void 0&&(S=33984+N-1),V!==S&&(s.activeTexture(S),V=S)}return{buffers:{color:r,depth:i,stencil:a},enable:Y,disable:E,bindFramebuffer:function(S,D){return D===null&&l!==null&&(D=l),c[S]!==D&&(s.bindFramebuffer(S,D),c[S]=D,n&&(S===36009&&(c[36160]=D),S===36160&&(c[36009]=D)),!0)},bindXRFramebuffer:function(S){S!==l&&(s.bindFramebuffer(36160,S),l=S)},useProgram:function(S){return h!==S&&(s.useProgram(S),h=S,!0)},setBlending:O,setMaterial:function(S,D){S.side===2?E(2884):Y(2884);let k=S.side===1;D&&(k=!k),P(k),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),i.setFunc(S.depthFunc),i.setTest(S.depthTest),i.setMask(S.depthWrite),r.setMask(S.colorWrite);const W=S.stencilWrite;a.setTest(W),W&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),$(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Y(32926):E(32926)},setFlipSided:P,setCullFace:J,setLineWidth:function(S){S!==T&&(I&&s.lineWidth(S),T=S)},setPolygonOffset:$,setScissorTest:function(S){S?Y(3089):E(3089)},activeTexture:B,bindTexture:function(S,D){V===null&&B();let k=F[V];k===void 0&&(k={type:void 0,texture:void 0},F[V]=k),k.type===S&&k.texture===D||(s.bindTexture(S,D||de[S]),k.type=S,k.texture=D)},unbindTexture:function(){const S=F[V];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){ie.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),ie.copy(S))},viewport:function(S){oe.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),oe.copy(S))},reset:function(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},V=null,F={},l=null,c={},h=null,u=!1,d=null,p=null,f=null,g=null,y=null,m=null,_=null,x=!1,M=null,w=null,T=null,R=null,C=null,ie.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),i.reset(),a.reset()}}}function Nu(s,e,t,n,r,i,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=new WeakMap;let p,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,A){return f?new OffscreenCanvas(E,A):li("canvas")}function y(E,A,U,O){let P=1;if((E.width>O||E.height>O)&&(P=O/Math.max(E.width,E.height)),P<1||A===!0){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const J=A?no:Math.floor,$=J(P*E.width),B=J(P*E.height);p===void 0&&(p=g($,B));const S=U?g($,B):p;return S.width=$,S.height=B,S.getContext("2d").drawImage(E,0,0,$,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+$+"x"+B+")."),S}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E}return E}function m(E){return bs(E.width)&&bs(E.height)}function _(E,A){return E.generateMipmaps&&A&&E.minFilter!==1003&&E.minFilter!==1006}function x(E,A,U,O,P=1){s.generateMipmap(E),n.get(A).__maxMipLevel=Math.log2(Math.max(U,O,P))}function M(E,A,U,O){if(o===!1)return A;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let P=A;return A===6403&&(U===5126&&(P=33326),U===5131&&(P=33325),U===5121&&(P=33321)),A===6407&&(U===5126&&(P=34837),U===5131&&(P=34843),U===5121&&(P=32849)),A===6408&&(U===5126&&(P=34836),U===5131&&(P=34842),U===5121&&(P=O===3001?35907:32856)),P!==33325&&P!==33326&&P!==34842&&P!==34836||e.get("EXT_color_buffer_float"),P}function w(E){return E===1003||E===1004||E===1005?9728:9729}function T(E){const A=E.target;A.removeEventListener("dispose",T),function(U){const O=n.get(U);O.__webglInit!==void 0&&(s.deleteTexture(O.__webglTexture),n.remove(U))}(A),A.isVideoTexture&&d.delete(A),a.memory.textures--}function R(E){const A=E.target;A.removeEventListener("dispose",R),function(U){const O=U.texture,P=n.get(U),J=n.get(O);if(U){if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)s.deleteFramebuffer(P.__webglFramebuffer[$]),P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer[$]);else s.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&s.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&s.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer&&s.deleteRenderbuffer(P.__webglColorRenderbuffer),P.__webglDepthRenderbuffer&&s.deleteRenderbuffer(P.__webglDepthRenderbuffer);if(U.isWebGLMultipleRenderTargets)for(let $=0,B=O.length;$<B;$++){const S=n.get(O[$]);S.__webglTexture&&(s.deleteTexture(S.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(O),n.remove(U)}}(A)}let C=0;function N(E,A){const U=n.get(E);if(E.isVideoTexture&&function(O){const P=a.render.frame;d.get(O)!==P&&(d.set(O,P),O.update())}(E),E.version>0&&U.__version!==E.version){const O=E.image;if(O===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else{if(O.complete!==!1)return void j(U,E,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.activeTexture(33984+A),t.bindTexture(3553,U.__webglTexture)}function I(E,A){const U=n.get(E);E.version>0&&U.__version!==E.version?function(O,P,J){if(P.image.length!==6)return;F(O,P),t.activeTexture(33984+J),t.bindTexture(34067,O.__webglTexture),s.pixelStorei(37440,P.flipY),s.pixelStorei(37441,P.premultiplyAlpha),s.pixelStorei(3317,P.unpackAlignment),s.pixelStorei(37443,0);const $=P&&(P.isCompressedTexture||P.image[0].isCompressedTexture),B=P.image[0]&&P.image[0].isDataTexture,S=[];for(let ae=0;ae<6;ae++)S[ae]=$||B?B?P.image[ae].image:P.image[ae]:y(P.image[ae],!1,!0,c);const D=S[0],k=m(D)||o,W=i.convert(P.format),H=i.convert(P.type),se=M(P.internalFormat,W,H,P.encoding);let he;if(V(34067,P,k),$){for(let ae=0;ae<6;ae++){he=S[ae].mipmaps;for(let ve=0;ve<he.length;ve++){const me=he[ve];P.format!==1023&&P.format!==1022?W!==null?t.compressedTexImage2D(34069+ae,ve,se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+ae,ve,se,me.width,me.height,0,W,H,me.data)}}O.__maxMipLevel=he.length-1}else{he=P.mipmaps;for(let ae=0;ae<6;ae++)if(B){t.texImage2D(34069+ae,0,se,S[ae].width,S[ae].height,0,W,H,S[ae].data);for(let ve=0;ve<he.length;ve++){const me=he[ve].image[ae].image;t.texImage2D(34069+ae,ve+1,se,me.width,me.height,0,W,H,me.data)}}else{t.texImage2D(34069+ae,0,se,W,H,S[ae]);for(let ve=0;ve<he.length;ve++){const me=he[ve];t.texImage2D(34069+ae,ve+1,se,W,H,me.image[ae])}}O.__maxMipLevel=he.length}_(P,k)&&x(34067,P,D.width,D.height),O.__version=P.version,P.onUpdate&&P.onUpdate(P)}(U,E,A):(t.activeTexture(33984+A),t.bindTexture(34067,U.__webglTexture))}const z={1e3:10497,1001:33071,1002:33648},K={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function V(E,A,U){if(U?(s.texParameteri(E,10242,z[A.wrapS]),s.texParameteri(E,10243,z[A.wrapT]),E!==32879&&E!==35866||s.texParameteri(E,32882,z[A.wrapR]),s.texParameteri(E,10240,K[A.magFilter]),s.texParameteri(E,10241,K[A.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),E!==32879&&E!==35866||s.texParameteri(E,32882,33071),A.wrapS===1001&&A.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,w(A.magFilter)),s.texParameteri(E,10241,w(A.minFilter)),A.minFilter!==1003&&A.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");if(A.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function F(E,A){E.__webglInit===void 0&&(E.__webglInit=!0,A.addEventListener("dispose",T),E.__webglTexture=s.createTexture(),a.memory.textures++)}function j(E,A,U){let O=3553;A.isDataTexture2DArray&&(O=35866),A.isDataTexture3D&&(O=32879),F(E,A),t.activeTexture(33984+U),t.bindTexture(O,E.__webglTexture),s.pixelStorei(37440,A.flipY),s.pixelStorei(37441,A.premultiplyAlpha),s.pixelStorei(3317,A.unpackAlignment),s.pixelStorei(37443,0);const P=function(H){return!o&&(H.wrapS!==1001||H.wrapT!==1001||H.minFilter!==1003&&H.minFilter!==1006)}(A)&&m(A.image)===!1,J=y(A.image,P,!1,h),$=m(J)||o,B=i.convert(A.format);let S,D=i.convert(A.type),k=M(A.internalFormat,B,D,A.encoding);V(O,A,$);const W=A.mipmaps;if(A.isDepthTexture)k=6402,o?k=A.type===1015?36012:A.type===1014?33190:A.type===1020?35056:33189:A.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===1026&&k===6402&&A.type!==1012&&A.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=1012,D=i.convert(A.type)),A.format===1027&&k===6402&&(k=34041,A.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=1020,D=i.convert(A.type))),t.texImage2D(3553,0,k,J.width,J.height,0,B,D,null);else if(A.isDataTexture)if(W.length>0&&$){for(let H=0,se=W.length;H<se;H++)S=W[H],t.texImage2D(3553,H,k,S.width,S.height,0,B,D,S.data);A.generateMipmaps=!1,E.__maxMipLevel=W.length-1}else t.texImage2D(3553,0,k,J.width,J.height,0,B,D,J.data),E.__maxMipLevel=0;else if(A.isCompressedTexture){for(let H=0,se=W.length;H<se;H++)S=W[H],A.format!==1023&&A.format!==1022?B!==null?t.compressedTexImage2D(3553,H,k,S.width,S.height,0,S.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,H,k,S.width,S.height,0,B,D,S.data);E.__maxMipLevel=W.length-1}else if(A.isDataTexture2DArray)t.texImage3D(35866,0,k,J.width,J.height,J.depth,0,B,D,J.data),E.__maxMipLevel=0;else if(A.isDataTexture3D)t.texImage3D(32879,0,k,J.width,J.height,J.depth,0,B,D,J.data),E.__maxMipLevel=0;else if(W.length>0&&$){for(let H=0,se=W.length;H<se;H++)S=W[H],t.texImage2D(3553,H,k,B,D,S);A.generateMipmaps=!1,E.__maxMipLevel=W.length-1}else t.texImage2D(3553,0,k,B,D,J),E.__maxMipLevel=0;_(A,$)&&x(O,A,J.width,J.height),E.__version=A.version,A.onUpdate&&A.onUpdate(A)}function te(E,A,U,O,P){const J=i.convert(U.format),$=i.convert(U.type),B=M(U.internalFormat,J,$,U.encoding);P===32879||P===35866?t.texImage3D(P,0,B,A.width,A.height,A.depth,0,J,$,null):t.texImage2D(P,0,B,A.width,A.height,0,J,$,null),t.bindFramebuffer(36160,E),s.framebufferTexture2D(36160,O,P,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function ie(E,A,U){if(s.bindRenderbuffer(36161,E),A.depthBuffer&&!A.stencilBuffer){let O=33189;if(U){const P=A.depthTexture;P&&P.isDepthTexture&&(P.type===1015?O=36012:P.type===1014&&(O=33190));const J=ue(A);s.renderbufferStorageMultisample(36161,J,O,A.width,A.height)}else s.renderbufferStorage(36161,O,A.width,A.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(A.depthBuffer&&A.stencilBuffer){if(U){const O=ue(A);s.renderbufferStorageMultisample(36161,O,35056,A.width,A.height)}else s.renderbufferStorage(36161,34041,A.width,A.height);s.framebufferRenderbuffer(36160,33306,36161,E)}else{const O=A.isWebGLMultipleRenderTargets===!0?A.texture[0]:A.texture,P=i.convert(O.format),J=i.convert(O.type),$=M(O.internalFormat,P,J,O.encoding);if(U){const B=ue(A);s.renderbufferStorageMultisample(36161,B,$,A.width,A.height)}else s.renderbufferStorage(36161,$,A.width,A.height)}s.bindRenderbuffer(36161,null)}function oe(E){const A=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(U)throw new Error("target.depthTexture not supported in Cube render targets");(function(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,O),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(P.depthTexture).__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),N(P.depthTexture,0);const J=n.get(P.depthTexture).__webglTexture;if(P.depthTexture.format===1026)s.framebufferTexture2D(36160,36096,3553,J,0);else{if(P.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");s.framebufferTexture2D(36160,33306,3553,J,0)}})(A.__webglFramebuffer,E)}else if(U){A.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(36160,A.__webglFramebuffer[O]),A.__webglDepthbuffer[O]=s.createRenderbuffer(),ie(A.__webglDepthbuffer[O],E,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),ie(A.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function ue(E){return o&&E.isWebGLMultisampleRenderTarget?Math.min(u,E.samples):0}let de=!1,Y=!1;this.allocateTextureUnit=function(){const E=C;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),C+=1,E},this.resetTextureUnits=function(){C=0},this.setTexture2D=N,this.setTexture2DArray=function(E,A){const U=n.get(E);E.version>0&&U.__version!==E.version?j(U,E,A):(t.activeTexture(33984+A),t.bindTexture(35866,U.__webglTexture))},this.setTexture3D=function(E,A){const U=n.get(E);E.version>0&&U.__version!==E.version?j(U,E,A):(t.activeTexture(33984+A),t.bindTexture(32879,U.__webglTexture))},this.setTextureCube=I,this.setupRenderTarget=function(E){const A=E.texture,U=n.get(E),O=n.get(A);E.addEventListener("dispose",R),E.isWebGLMultipleRenderTargets!==!0&&(O.__webglTexture=s.createTexture(),O.__version=A.version,a.memory.textures++);const P=E.isWebGLCubeRenderTarget===!0,J=E.isWebGLMultipleRenderTargets===!0,$=E.isWebGLMultisampleRenderTarget===!0,B=A.isDataTexture3D||A.isDataTexture2DArray,S=m(E)||o;if(!o||A.format!==1022||A.type!==1015&&A.type!==1016||(A.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),P){U.__webglFramebuffer=[];for(let D=0;D<6;D++)U.__webglFramebuffer[D]=s.createFramebuffer()}else if(U.__webglFramebuffer=s.createFramebuffer(),J)if(r.drawBuffers){const D=E.texture;for(let k=0,W=D.length;k<W;k++){const H=n.get(D[k]);H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if($)if(o){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,U.__webglColorRenderbuffer);const D=i.convert(A.format),k=i.convert(A.type),W=M(A.internalFormat,D,k,A.encoding),H=ue(E);s.renderbufferStorageMultisample(36161,H,W,E.width,E.height),t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,U.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(P){t.bindTexture(34067,O.__webglTexture),V(34067,A,S);for(let D=0;D<6;D++)te(U.__webglFramebuffer[D],E,A,36064,34069+D);_(A,S)&&x(34067,A,E.width,E.height),t.unbindTexture()}else if(J){const D=E.texture;for(let k=0,W=D.length;k<W;k++){const H=D[k],se=n.get(H);t.bindTexture(3553,se.__webglTexture),V(3553,H,S),te(U.__webglFramebuffer,E,H,36064+k,3553),_(H,S)&&x(3553,H,E.width,E.height)}t.unbindTexture()}else{let D=3553;B&&(o?D=A.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(D,O.__webglTexture),V(D,A,S),te(U.__webglFramebuffer,E,A,36064,D),_(A,S)&&x(D,A,E.width,E.height,E.depth),t.unbindTexture()}E.depthBuffer&&oe(E)},this.updateRenderTargetMipmap=function(E){const A=m(E)||o,U=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let O=0,P=U.length;O<P;O++){const J=U[O];if(_(J,A)){const $=E.isWebGLCubeRenderTarget?34067:3553,B=n.get(J).__webglTexture;t.bindTexture($,B),x($,J,E.width,E.height),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(E.isWebGLMultisampleRenderTarget)if(o){const A=E.width,U=E.height;let O=16384;E.depthBuffer&&(O|=256),E.stencilBuffer&&(O|=1024);const P=n.get(E);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer),s.blitFramebuffer(0,0,A,U,0,0,A,U,O,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")},this.safeSetTexture2D=function(E,A){E&&E.isWebGLRenderTarget&&(de===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),de=!0),E=E.texture),N(E,A)},this.safeSetTextureCube=function(E,A){E&&E.isWebGLCubeRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Y=!0),E=E.texture),I(E,A)}}function ll(s,e,t){const n=t.isWebGL2;return{convert:function(r){let i;if(r===1009)return 5121;if(r===1017)return 32819;if(r===1018)return 32820;if(r===1019)return 33635;if(r===1010)return 5120;if(r===1011)return 5122;if(r===1012)return 5123;if(r===1013)return 5124;if(r===1014)return 5125;if(r===1015)return 5126;if(r===1016)return n?5131:(i=e.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(r===1021)return 6406;if(r===1022)return 6407;if(r===1023)return 6408;if(r===1024)return 6409;if(r===1025)return 6410;if(r===1026)return 6402;if(r===1027)return 34041;if(r===1028)return 6403;if(r===1029)return 36244;if(r===1030)return 33319;if(r===1031)return 33320;if(r===1032)return 36248;if(r===1033)return 36249;if(r===33776||r===33777||r===33778||r===33779){if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(r===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(r===35840||r===35841||r===35842||r===35843){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(r===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(r===36196)return i=e.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===37492||r===37496)&&(i=e.get("WEBGL_compressed_texture_etc"),i!==null)){if(r===37492)return i.COMPRESSED_RGB8_ETC2;if(r===37496)return i.COMPRESSED_RGBA8_ETC2_EAC}return r===37808||r===37809||r===37810||r===37811||r===37812||r===37813||r===37814||r===37815||r===37816||r===37817||r===37818||r===37819||r===37820||r===37821||r===37840||r===37841||r===37842||r===37843||r===37844||r===37845||r===37846||r===37847||r===37848||r===37849||r===37850||r===37851||r===37852||r===37853?(i=e.get("WEBGL_compressed_texture_astc"),i!==null?r:null):r===36492?(i=e.get("EXT_texture_compression_bptc"),i!==null?r:null):r===1020?n?34042:(i=e.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):void 0}}}class ta extends We{constructor(e=[]){super(),this.cameras=e}}ta.prototype.isArrayCamera=!0;class xn extends Me{constructor(){super(),this.type="Group"}}xn.prototype.isGroup=!0;const zu={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zu))),c&&e.hand){a=!0;for(const g of e.hand.values()){const y=t.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const _=new xn;_.matrixAutoUpdate=!1,_.visible=!1,c.joints[g.jointName]=_,c.add(_)}const m=c.joints[g.jointName];y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=y.radius),m.visible=y!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}}class Bu extends Xt{constructor(e,t){super();const n=this,r=e.state;let i=null,a=1,o=null,l="local-floor",c=null,h=null,u=null,d=null,p=null,f=!1,g=null,y=null,m=null,_=null,x=null,M=null;const w=[],T=new Map,R=new We;R.layers.enable(1),R.viewport=new Ae;const C=new We;C.layers.enable(2),C.viewport=new Ae;const N=[R,C],I=new ta;I.layers.enable(1),I.layers.enable(2);let z=null,K=null;function V(Y){const E=T.get(Y.inputSource);E&&E.dispatchEvent({type:Y.type,data:Y.inputSource})}function F(){T.forEach(function(Y,E){Y.disconnect(E)}),T.clear(),z=null,K=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),u&&t.deleteFramebuffer(u),g&&t.deleteFramebuffer(g),y&&t.deleteRenderbuffer(y),m&&t.deleteRenderbuffer(m),u=null,g=null,y=null,m=null,p=null,d=null,h=null,i=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function j(Y){const E=i.inputSources;for(let A=0;A<w.length;A++)T.set(E[A],w[A]);for(let A=0;A<Y.removed.length;A++){const U=Y.removed[A],O=T.get(U);O&&(O.dispatchEvent({type:"disconnected",data:U}),T.delete(U))}for(let A=0;A<Y.added.length;A++){const U=Y.added[A],O=T.get(U);O&&O.dispatchEvent({type:"connected",data:U})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let E=w[Y];return E===void 0&&(E=new na,w[Y]=E),E.getTargetRaySpace()},this.getControllerGrip=function(Y){let E=w[Y];return E===void 0&&(E=new na,w[Y]=E),E.getGripSpace()},this.getHand=function(Y){let E=w[Y];return E===void 0&&(E=new na,w[Y]=E),E.getHandSpace()},this.setFramebufferScaleFactor=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",F),i.addEventListener("inputsourceschange",j);const E=t.getContextAttributes();if(E.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0){const A={antialias:E.antialias,alpha:E.alpha,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,A),i.updateRenderState({baseLayer:p})}else if(t instanceof WebGLRenderingContext){const A={antialias:!0,alpha:E.alpha,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,A),i.updateRenderState({layers:[p]})}else{f=E.antialias;let A=null;E.depth&&(M=256,E.stencil&&(M|=1024),x=E.stencil?33306:36096,A=E.stencil?35056:33190);const U={colorFormat:E.alpha?32856:32849,depthFormat:A,scaleFactor:a};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(U),u=t.createFramebuffer(),i.updateRenderState({layers:[d]}),f&&(g=t.createFramebuffer(),y=t.createRenderbuffer(),t.bindRenderbuffer(36161,y),t.renderbufferStorageMultisample(36161,4,32856,d.textureWidth,d.textureHeight),r.bindFramebuffer(36160,g),t.framebufferRenderbuffer(36160,36064,36161,y),t.bindRenderbuffer(36161,null),A!==null&&(m=t.createRenderbuffer(),t.bindRenderbuffer(36161,m),t.renderbufferStorageMultisample(36161,4,A,d.textureWidth,d.textureHeight),t.framebufferRenderbuffer(36160,x,36161,m),t.bindRenderbuffer(36161,null)),r.bindFramebuffer(36160,null))}o=await i.requestReferenceSpace(l),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};const te=new b,ie=new b;function oe(Y,E){E===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(E.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;I.near=C.near=R.near=Y.near,I.far=C.far=R.far=Y.far,z===I.near&&K===I.far||(i.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,K=I.far);const E=Y.parent,A=I.cameras;oe(I,E);for(let O=0;O<A.length;O++)oe(A[O],E);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),Y.position.copy(I.position),Y.quaternion.copy(I.quaternion),Y.scale.copy(I.scale),Y.matrix.copy(I.matrix),Y.matrixWorld.copy(I.matrixWorld);const U=Y.children;for(let O=0,P=U.length;O<P;O++)U[O].updateMatrixWorld(!0);A.length===2?function(O,P,J){te.setFromMatrixPosition(P.matrixWorld),ie.setFromMatrixPosition(J.matrixWorld);const $=te.distanceTo(ie),B=P.projectionMatrix.elements,S=J.projectionMatrix.elements,D=B[14]/(B[10]-1),k=B[14]/(B[10]+1),W=(B[9]+1)/B[5],H=(B[9]-1)/B[5],se=(B[8]-1)/B[0],he=(S[8]+1)/S[0],ae=D*se,ve=D*he,me=$/(-se+he),qe=me*-se;P.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(qe),O.translateZ(me),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Re=D+me,Xe=k+me,ut=ae-qe,Nn=ve+($-qe),zn=W*k/Xe*Re,Bn=H*k/Xe*Re;O.projectionMatrix.makePerspective(ut,Nn,zn,Bn,Re,Xe)}(I,R,C):I.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){return d!==null?d.fixedFoveation:p!==null?p.fixedFoveation:void 0},this.setFoveation=function(Y){d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let ue=null;const de=new Lo;de.setAnimationLoop(function(Y,E){if(c=E.getViewerPose(o),_=E,c!==null){const U=c.views;p!==null&&r.bindXRFramebuffer(p.framebuffer);let O=!1;U.length!==I.cameras.length&&(I.cameras.length=0,O=!0);for(let P=0;P<U.length;P++){const J=U[P];let $=null;if(p!==null)$=p.getViewport(J);else{const S=h.getViewSubImage(d,J);r.bindXRFramebuffer(u),S.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,x,3553,S.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,S.colorTexture,0),$=S.viewport}const B=N[P];B.matrix.fromArray(J.transform.matrix),B.projectionMatrix.fromArray(J.projectionMatrix),B.viewport.set($.x,$.y,$.width,$.height),P===0&&I.matrix.copy(B.matrix),O===!0&&I.cameras.push(B)}f&&(r.bindXRFramebuffer(g),M!==null&&t.clear(M))}const A=i.inputSources;for(let U=0;U<w.length;U++){const O=w[U],P=A[U];O.update(P,E,o)}if(ue&&ue(Y,E),f){const U=d.textureWidth,O=d.textureHeight;r.bindFramebuffer(36008,g),r.bindFramebuffer(36009,u),t.invalidateFramebuffer(36008,[x]),t.invalidateFramebuffer(36009,[x]),t.blitFramebuffer(0,0,U,O,0,0,U,O,16384,9728),t.invalidateFramebuffer(36008,[36064]),r.bindFramebuffer(36008,null),r.bindFramebuffer(36009,null),r.bindFramebuffer(36160,g)}_=null}),this.setAnimationLoop=function(Y){ue=Y},this.dispose=function(){}}}function Fu(s){function e(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map),r.alphaMap&&(n.alphaMap.value=r.alphaMap),r.specularMap&&(n.specularMap.value=r.specularMap),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);const i=s.get(r).envMap;if(i){n.envMap.value=i,n.flipEnvMap.value=i.isCubeTexture&&i.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio;const l=s.get(i).__maxMipLevel;l!==void 0&&(n.maxMipLevel.value=l)}let a,o;r.lightMap&&(n.lightMap.value=r.lightMap,n.lightMapIntensity.value=r.lightMapIntensity),r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity),r.map?a=r.map:r.specularMap?a=r.specularMap:r.displacementMap?a=r.displacementMap:r.normalMap?a=r.normalMap:r.bumpMap?a=r.bumpMap:r.roughnessMap?a=r.roughnessMap:r.metalnessMap?a=r.metalnessMap:r.alphaMap?a=r.alphaMap:r.emissiveMap?a=r.emissiveMap:r.clearcoatMap?a=r.clearcoatMap:r.clearcoatNormalMap?a=r.clearcoatNormalMap:r.clearcoatRoughnessMap?a=r.clearcoatRoughnessMap:r.specularIntensityMap?a=r.specularIntensityMap:r.specularColorMap?a=r.specularColorMap:r.transmissionMap?a=r.transmissionMap:r.thicknessMap?a=r.thicknessMap:r.sheenColorMap?a=r.sheenColorMap:r.sheenRoughnessMap&&(a=r.sheenRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),r.aoMap?o=r.aoMap:r.lightMap&&(o=r.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}function t(n,r){n.roughness.value=r.roughness,n.metalness.value=r.metalness,r.roughnessMap&&(n.roughnessMap.value=r.roughnessMap),r.metalnessMap&&(n.metalnessMap.value=r.metalnessMap),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap),r.bumpMap&&(n.bumpMap.value=r.bumpMap,n.bumpScale.value=r.bumpScale,r.side===1&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,n.normalScale.value.copy(r.normalScale),r.side===1&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),s.get(r).envMap&&(n.envMapIntensity.value=r.envMapIntensity)}return{refreshFogUniforms:function(n,r){n.fogColor.value.copy(r.color),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,i,a,o){r.isMeshBasicMaterial?e(n,r):r.isMeshLambertMaterial?(e(n,r),function(l,c){c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap)}(n,r)):r.isMeshToonMaterial?(e(n,r),function(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshPhongMaterial?(e(n,r),function(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4),c.emissiveMap&&(l.emissiveMap.value=c.emissiveMap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshStandardMaterial?(e(n,r),r.isMeshPhysicalMaterial?function(l,c,h){t(l,c),l.ior.value=c.ior,c.sheen>0&&(l.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(l.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(l.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),l.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===1&&l.clearcoatNormalScale.value.negate())),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=h.texture,l.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap),l.attenuationDistance.value=c.attenuationDistance,l.attenuationColor.value.copy(c.attenuationColor)),l.specularIntensity.value=c.specularIntensity,l.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(l.specularColorMap.value=c.specularColorMap)}(n,r,o):t(n,r)):r.isMeshMatcapMaterial?(e(n,r),function(l,c){c.matcap&&(l.matcap.value=c.matcap),c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshDepthMaterial?(e(n,r),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,r)):r.isMeshDistanceMaterial?(e(n,r),function(l,c){c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias),l.referencePosition.value.copy(c.referencePosition),l.nearDistance.value=c.nearDistance,l.farDistance.value=c.farDistance}(n,r)):r.isMeshNormalMaterial?(e(n,r),function(l,c){c.bumpMap&&(l.bumpMap.value=c.bumpMap,l.bumpScale.value=c.bumpScale,c.side===1&&(l.bumpScale.value*=-1)),c.normalMap&&(l.normalMap.value=c.normalMap,l.normalScale.value.copy(c.normalScale),c.side===1&&l.normalScale.value.negate()),c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias)}(n,r)):r.isLineBasicMaterial?(function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity}(n,r),r.isLineDashedMaterial&&function(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}(n,r)):r.isPointsMaterial?function(l,c,h,u){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*h,l.scale.value=.5*u,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let d;c.map?d=c.map:c.alphaMap&&(d=c.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),l.uvTransform.value.copy(d.matrix))}(n,r,i,a):r.isSpriteMaterial?function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let h;c.map?h=c.map:c.alphaMap&&(h=c.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),l.uvTransform.value.copy(h.matrix))}(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Le(s={}){const e=s.canvas!==void 0?s.canvas:function(){const L=li("canvas");return L.style.display="block",L}(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0&&s.alpha,r=s.depth===void 0||s.depth,i=s.stencil===void 0||s.stencil,a=s.antialias!==void 0&&s.antialias,o=s.premultipliedAlpha===void 0||s.premultipliedAlpha,l=s.preserveDrawingBuffer!==void 0&&s.preserveDrawingBuffer,c=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0&&s.failIfMajorPerformanceCaveat;let u=null,d=null;const p=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const g=this;let y=!1,m=0,_=0,x=null,M=-1,w=null;const T=new Ae,R=new Ae;let C=null,N=e.width,I=e.height,z=1,K=null,V=null;const F=new Ae(0,0,N,I),j=new Ae(0,0,N,I);let te=!1;const ie=[],oe=new Lr;let ue=!1,de=!1,Y=null;const E=new ce,A=new b,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function O(){return x===null?z:1}let P,J,$,B,S,D,k,W,H,se,he,ae,ve,me,qe,Re,Xe,ut,Nn,zn,Bn,ft,Fn,ee=t;function Uc(L,G){for(let q=0;q<L.length;q++){const Z=L[q],Q=e.getContext(Z,G);if(Q!==null)return Q}return null}try{const L={alpha:n,depth:r,stencil:i,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",Gc,!1),e.addEventListener("webglcontextrestored",kc,!1),ee===null){const G=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&G.shift(),ee=Uc(G,L),ee===null)throw Uc(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ee.getShaderPrecisionFormat===void 0&&(ee.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function Hc(){P=new Mh(ee),J=new mh(ee,P,s),P.init(J),ft=new ll(ee,P,J),$=new Du(ee,P,J),ie[0]=1029,B=new Sh,S=new Tu,D=new Nu(ee,P,$,S,J,ft,B),k=new vh(g),W=new _h(g),H=new uh(ee,J),Fn=new ph(ee,P,H,J),se=new bh(ee,H,B,Fn),he=new Lh(ee,se,H,B),Nn=new Ah(ee,J,D),Re=new gh(S),ae=new Su(g,k,W,P,J,Fn,Re),ve=new Fu(S),me=new Au(S),qe=new Iu(P,J),ut=new dh(g,k,$,he,o),Xe=new ol(g,he,J),zn=new fh(ee,P,B,J),Bn=new wh(ee,P,B,J),B.programs=ae.programs,g.capabilities=J,g.extensions=P,g.properties=S,g.renderLists=me,g.shadowMap=Xe,g.state=$,g.info=B}Hc();const dt=new Bu(g,ee);function Gc(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function kc(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const L=B.autoReset,G=Xe.enabled,q=Xe.autoUpdate,Z=Xe.needsUpdate,Q=Xe.type;Hc(),B.autoReset=L,Xe.enabled=G,Xe.autoUpdate=q,Xe.needsUpdate=Z,Xe.type=Q}function Vc(L){const G=L.target;G.removeEventListener("dispose",Vc),function(q){(function(Z){const Q=S.get(Z).programs;Q!==void 0&&Q.forEach(function(ge){ae.releaseProgram(ge)})})(q),S.remove(q)}(G)}this.xr=dt,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const L=P.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=P.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(N,I,!1))},this.getSize=function(L){return L.set(N,I)},this.setSize=function(L,G,q){dt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(N=L,I=G,e.width=Math.floor(L*z),e.height=Math.floor(G*z),q!==!1&&(e.style.width=L+"px",e.style.height=G+"px"),this.setViewport(0,0,L,G))},this.getDrawingBufferSize=function(L){return L.set(N*z,I*z).floor()},this.setDrawingBufferSize=function(L,G,q){N=L,I=G,z=q,e.width=Math.floor(L*q),e.height=Math.floor(G*q),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(F)},this.setViewport=function(L,G,q,Z){L.isVector4?F.set(L.x,L.y,L.z,L.w):F.set(L,G,q,Z),$.viewport(T.copy(F).multiplyScalar(z).floor())},this.getScissor=function(L){return L.copy(j)},this.setScissor=function(L,G,q,Z){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,G,q,Z),$.scissor(R.copy(j).multiplyScalar(z).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(L){$.setScissorTest(te=L)},this.setOpaqueSort=function(L){K=L},this.setTransparentSort=function(L){V=L},this.getClearColor=function(L){return L.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(L,G,q){let Z=0;(L===void 0||L)&&(Z|=16384),(G===void 0||G)&&(Z|=256),(q===void 0||q)&&(Z|=1024),ee.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Gc,!1),e.removeEventListener("webglcontextrestored",kc,!1),me.dispose(),qe.dispose(),S.dispose(),k.dispose(),W.dispose(),he.dispose(),Fn.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Wc),dt.removeEventListener("sessionend",jc),Y&&(Y.dispose(),Y=null),On.stop()},this.renderBufferDirect=function(L,G,q,Z,Q,ge){G===null&&(G=U);const pe=Q.isMesh&&Q.matrixWorld.determinant()<0,ye=function($e,ei,St,xe,Je){ei.isScene!==!0&&(ei=U),D.resetTextureUnits();const Ka=ei.fog,yd=xe.isMeshStandardMaterial?ei.environment:null,xd=x===null?g.outputEncoding:x.texture.encoding,_d=(xe.isMeshStandardMaterial?W:k).get(xe.envMap||yd),Md=xe.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,bd=!!xe.normalMap&&!!St.attributes.tangent,wd=!!St.morphAttributes.position,Sd=!!St.morphAttributes.normal,Td=St.morphAttributes.position?St.morphAttributes.position.length:0,Pe=S.get(xe),Ed=d.state.lights;if(ue===!0&&(de===!0||$e!==w)){const Et=$e===w&&xe.id===M;Re.setState(xe,$e,Et)}let qt=!1;xe.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==Ed.state.version||Pe.outputEncoding!==xd||Je.isInstancedMesh&&Pe.instancing===!1?qt=!0:Je.isInstancedMesh||Pe.instancing!==!0?Je.isSkinnedMesh&&Pe.skinning===!1?qt=!0:Je.isSkinnedMesh||Pe.skinning!==!0?Pe.envMap!==_d||xe.fog&&Pe.fog!==Ka?qt=!0:Pe.numClippingPlanes===void 0||Pe.numClippingPlanes===Re.numPlanes&&Pe.numIntersection===Re.numIntersection?(Pe.vertexAlphas!==Md||Pe.vertexTangents!==bd||Pe.morphTargets!==wd||Pe.morphNormals!==Sd||J.isWebGL2===!0&&Pe.morphTargetsCount!==Td)&&(qt=!0):qt=!0:qt=!0:qt=!0:(qt=!0,Pe.__version=xe.version);let ti=Pe.currentProgram;qt===!0&&(ti=Za(xe,ei,Je));let Jc=!1,ni=!1,$a=!1;const nt=ti.getUniforms(),ri=Pe.uniforms;if($.useProgram(ti.program)&&(Jc=!0,ni=!0,$a=!0),xe.id!==M&&(M=xe.id,ni=!0),Jc||w!==$e){if(nt.setValue(ee,"projectionMatrix",$e.projectionMatrix),J.logarithmicDepthBuffer&&nt.setValue(ee,"logDepthBufFC",2/(Math.log($e.far+1)/Math.LN2)),w!==$e&&(w=$e,ni=!0,$a=!0),xe.isShaderMaterial||xe.isMeshPhongMaterial||xe.isMeshToonMaterial||xe.isMeshStandardMaterial||xe.envMap){const Et=nt.map.cameraPosition;Et!==void 0&&Et.setValue(ee,A.setFromMatrixPosition($e.matrixWorld))}(xe.isMeshPhongMaterial||xe.isMeshToonMaterial||xe.isMeshLambertMaterial||xe.isMeshBasicMaterial||xe.isMeshStandardMaterial||xe.isShaderMaterial)&&nt.setValue(ee,"isOrthographic",$e.isOrthographicCamera===!0),(xe.isMeshPhongMaterial||xe.isMeshToonMaterial||xe.isMeshLambertMaterial||xe.isMeshBasicMaterial||xe.isMeshStandardMaterial||xe.isShaderMaterial||xe.isShadowMaterial||Je.isSkinnedMesh)&&nt.setValue(ee,"viewMatrix",$e.matrixWorldInverse)}if(Je.isSkinnedMesh){nt.setOptional(ee,Je,"bindMatrix"),nt.setOptional(ee,Je,"bindMatrixInverse");const Et=Je.skeleton;Et&&(J.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),nt.setValue(ee,"boneTexture",Et.boneTexture,D),nt.setValue(ee,"boneTextureSize",Et.boneTextureSize)):nt.setOptional(ee,Et,"boneMatrices"))}!St||St.morphAttributes.position===void 0&&St.morphAttributes.normal===void 0||Nn.update(Je,St,xe,ti),(ni||Pe.receiveShadow!==Je.receiveShadow)&&(Pe.receiveShadow=Je.receiveShadow,nt.setValue(ee,"receiveShadow",Je.receiveShadow)),ni&&(nt.setValue(ee,"toneMappingExposure",g.toneMappingExposure),Pe.needsLights&&(Tt=$a,(Nt=ri).ambientLightColor.needsUpdate=Tt,Nt.lightProbe.needsUpdate=Tt,Nt.directionalLights.needsUpdate=Tt,Nt.directionalLightShadows.needsUpdate=Tt,Nt.pointLights.needsUpdate=Tt,Nt.pointLightShadows.needsUpdate=Tt,Nt.spotLights.needsUpdate=Tt,Nt.spotLightShadows.needsUpdate=Tt,Nt.rectAreaLights.needsUpdate=Tt,Nt.hemisphereLights.needsUpdate=Tt),Ka&&xe.fog&&ve.refreshFogUniforms(ri,Ka),ve.refreshMaterialUniforms(ri,xe,z,I,Y),sn.upload(ee,Pe.uniformsList,ri,D));var Nt,Tt;return xe.isShaderMaterial&&xe.uniformsNeedUpdate===!0&&(sn.upload(ee,Pe.uniformsList,ri,D),xe.uniformsNeedUpdate=!1),xe.isSpriteMaterial&&nt.setValue(ee,"center",Je.center),nt.setValue(ee,"modelViewMatrix",Je.modelViewMatrix),nt.setValue(ee,"normalMatrix",Je.normalMatrix),nt.setValue(ee,"modelMatrix",Je.matrixWorld),ti}(L,G,q,Z,Q);$.setMaterial(Z,pe);let Se=q.index;const De=q.attributes.position;if(Se===null){if(De===void 0||De.count===0)return}else if(Se.count===0)return;let Ee,be=1;Z.wireframe===!0&&(Se=se.getWireframeAttribute(q),be=2),Fn.setup(Q,Z,ye,q,Se);let Ye=zn;Se!==null&&(Ee=H.get(Se),Ye=Bn,Ye.setIndex(Ee));const $r=Se!==null?Se.count:De.count,mt=q.drawRange.start*be,Qa=q.drawRange.count*be,hn=ge!==null?ge.start*be:0,gd=ge!==null?ge.count*be:1/0,ys=Math.max(mt,hn),vd=Math.min($r,mt+Qa,hn+gd)-1,xs=Math.max(0,vd-ys+1);if(xs!==0){if(Q.isMesh)Z.wireframe===!0?($.setLineWidth(Z.wireframeLinewidth*O()),Ye.setMode(1)):Ye.setMode(4);else if(Q.isLine){let $e=Z.linewidth;$e===void 0&&($e=1),$.setLineWidth($e*O()),Q.isLineSegments?Ye.setMode(1):Q.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else Q.isPoints?Ye.setMode(0):Q.isSprite&&Ye.setMode(4);if(Q.isInstancedMesh)Ye.renderInstances(ys,xs,Q.count);else if(q.isInstancedBufferGeometry){const $e=Math.min(q.instanceCount,q._maxInstanceCount);Ye.renderInstances(ys,xs,$e)}else Ye.render(ys,xs)}},this.compile=function(L,G){d=qe.get(L),d.init(),f.push(d),L.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights(g.physicallyCorrectLights),L.traverse(function(q){const Z=q.material;if(Z)if(Array.isArray(Z))for(let Q=0;Q<Z.length;Q++)Za(Z[Q],L,q);else Za(Z,L,q)}),f.pop(),d=null};let Ja=null;function Wc(){On.stop()}function jc(){On.start()}const On=new Lo;function qc(L,G,q,Z){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||oe.intersectsSprite(L)){Z&&A.setFromMatrixPosition(L.matrixWorld).applyMatrix4(E);const ge=he.update(L),pe=L.material;pe.visible&&u.push(L,ge,pe,q,A.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==B.render.frame&&(L.skeleton.update(),L.skeleton.frame=B.render.frame),!L.frustumCulled||oe.intersectsObject(L))){Z&&A.setFromMatrixPosition(L.matrixWorld).applyMatrix4(E);const ge=he.update(L),pe=L.material;if(Array.isArray(pe)){const ye=ge.groups;for(let Se=0,De=ye.length;Se<De;Se++){const Ee=ye[Se],be=pe[Ee.materialIndex];be&&be.visible&&u.push(L,ge,be,q,A.z,Ee)}}else pe.visible&&u.push(L,ge,pe,q,A.z,null)}}const Q=L.children;for(let ge=0,pe=Q.length;ge<pe;ge++)qc(Q[ge],G,q,Z)}function Xc(L,G,q,Z){const Q=L.opaque,ge=L.transmissive,pe=L.transparent;d.setupLightsView(q),ge.length>0&&function(ye,Se,De){if(Y===null){const Ye=a===!0&&J.isWebGL2===!0;Y=new(Ye?Ss:vt)(1024,1024,{generateMipmaps:!0,type:ft.convert(1016)!==null?1016:1009,minFilter:1008,magFilter:1003,wrapS:1001,wrapT:1001})}const Ee=g.getRenderTarget();g.setRenderTarget(Y),g.clear();const be=g.toneMapping;g.toneMapping=0,vs(ye,Se,De),g.toneMapping=be,D.updateMultisampleRenderTarget(Y),D.updateRenderTargetMipmap(Y),g.setRenderTarget(Ee)}(Q,G,q),Z&&$.viewport(T.copy(Z)),Q.length>0&&vs(Q,G,q),ge.length>0&&vs(ge,G,q),pe.length>0&&vs(pe,G,q)}function vs(L,G,q){const Z=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,ge=L.length;Q<ge;Q++){const pe=L[Q],ye=pe.object,Se=pe.geometry,De=Z===null?pe.material:Z,Ee=pe.group;ye.layers.test(q.layers)&&md(ye,G,q,Se,De,Ee)}}function md(L,G,q,Z,Q,ge){L.onBeforeRender(g,G,q,Z,Q,ge),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(g,G,q,Z,L,ge),Q.transparent===!0&&Q.side===2?(Q.side=1,Q.needsUpdate=!0,g.renderBufferDirect(q,G,Z,Q,L,ge),Q.side=0,Q.needsUpdate=!0,g.renderBufferDirect(q,G,Z,Q,L,ge),Q.side=2):g.renderBufferDirect(q,G,Z,Q,L,ge),L.onAfterRender(g,G,q,Z,Q,ge)}function Za(L,G,q){G.isScene!==!0&&(G=U);const Z=S.get(L),Q=d.state.lights,ge=d.state.shadowsArray,pe=Q.state.version,ye=ae.getParameters(L,Q.state,ge,G,q),Se=ae.getProgramCacheKey(ye);let De=Z.programs;Z.environment=L.isMeshStandardMaterial?G.environment:null,Z.fog=G.fog,Z.envMap=(L.isMeshStandardMaterial?W:k).get(L.envMap||Z.environment),De===void 0&&(L.addEventListener("dispose",Vc),De=new Map,Z.programs=De);let Ee=De.get(Se);if(Ee!==void 0){if(Z.currentProgram===Ee&&Z.lightsStateVersion===pe)return Yc(L,ye),Ee}else ye.uniforms=ae.getUniforms(L),L.onBuild(q,ye,g),L.onBeforeCompile(ye,g),Ee=ae.acquireProgram(ye,Se),De.set(Se,Ee),Z.uniforms=ye.uniforms;const be=Z.uniforms;(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(be.clippingPlanes=Re.uniform),Yc(L,ye),Z.needsLights=function(mt){return mt.isMeshLambertMaterial||mt.isMeshToonMaterial||mt.isMeshPhongMaterial||mt.isMeshStandardMaterial||mt.isShadowMaterial||mt.isShaderMaterial&&mt.lights===!0}(L),Z.lightsStateVersion=pe,Z.needsLights&&(be.ambientLightColor.value=Q.state.ambient,be.lightProbe.value=Q.state.probe,be.directionalLights.value=Q.state.directional,be.directionalLightShadows.value=Q.state.directionalShadow,be.spotLights.value=Q.state.spot,be.spotLightShadows.value=Q.state.spotShadow,be.rectAreaLights.value=Q.state.rectArea,be.ltc_1.value=Q.state.rectAreaLTC1,be.ltc_2.value=Q.state.rectAreaLTC2,be.pointLights.value=Q.state.point,be.pointLightShadows.value=Q.state.pointShadow,be.hemisphereLights.value=Q.state.hemi,be.directionalShadowMap.value=Q.state.directionalShadowMap,be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,be.spotShadowMap.value=Q.state.spotShadowMap,be.spotShadowMatrix.value=Q.state.spotShadowMatrix,be.pointShadowMap.value=Q.state.pointShadowMap,be.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Ye=Ee.getUniforms(),$r=sn.seqWithValue(Ye.seq,be);return Z.currentProgram=Ee,Z.uniformsList=$r,Ee}function Yc(L,G){const q=S.get(L);q.outputEncoding=G.outputEncoding,q.instancing=G.instancing,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents}On.setAnimationLoop(function(L){Ja&&Ja(L)}),typeof window<"u"&&On.setContext(window),this.setAnimationLoop=function(L){Ja=L,dt.setAnimationLoop(L),L===null?On.stop():On.start()},dt.addEventListener("sessionstart",Wc),dt.addEventListener("sessionend",jc),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(y===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(G),G=dt.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,G,x),d=qe.get(L,f.length),d.init(),f.push(d),E.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(E),de=this.localClippingEnabled,ue=Re.init(this.clippingPlanes,de,G),u=me.get(L,p.length),u.init(),p.push(u),qc(L,G,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(K,V),ue===!0&&Re.beginShadows();const q=d.state.shadowsArray;if(Xe.render(q,L,G),ue===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(u,L),d.setupLights(g.physicallyCorrectLights),G.isArrayCamera){const Z=G.cameras;for(let Q=0,ge=Z.length;Q<ge;Q++){const pe=Z[Q];Xc(u,L,pe,pe.viewport)}}else Xc(u,L,G);x!==null&&(D.updateMultisampleRenderTarget(x),D.updateRenderTargetMipmap(x)),L.isScene===!0&&L.onAfterRender(g,L,G),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1),Fn.resetDefaultState(),M=-1,w=null,f.pop(),d=f.length>0?f[f.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return x},this.setRenderTarget=function(L,G=0,q=0){x=L,m=G,_=q,L&&S.get(L).__webglFramebuffer===void 0&&D.setupRenderTarget(L);let Z=null,Q=!1,ge=!1;if(L){const pe=L.texture;(pe.isDataTexture3D||pe.isDataTexture2DArray)&&(ge=!0);const ye=S.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Z=ye[G],Q=!0):Z=L.isWebGLMultisampleRenderTarget?S.get(L).__webglMultisampledFramebuffer:ye,T.copy(L.viewport),R.copy(L.scissor),C=L.scissorTest}else T.copy(F).multiplyScalar(z).floor(),R.copy(j).multiplyScalar(z).floor(),C=te;if($.bindFramebuffer(36160,Z)&&J.drawBuffers){let pe=!1;if(L)if(L.isWebGLMultipleRenderTargets){const ye=L.texture;if(ie.length!==ye.length||ie[0]!==36064){for(let Se=0,De=ye.length;Se<De;Se++)ie[Se]=36064+Se;ie.length=ye.length,pe=!0}}else ie.length===1&&ie[0]===36064||(ie[0]=36064,ie.length=1,pe=!0);else ie.length===1&&ie[0]===1029||(ie[0]=1029,ie.length=1,pe=!0);pe&&(J.isWebGL2?ee.drawBuffers(ie):P.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}if($.viewport(T),$.scissor(R),$.setScissorTest(C),Q){const pe=S.get(L.texture);ee.framebufferTexture2D(36160,36064,34069+G,pe.__webglTexture,q)}else if(ge){const pe=S.get(L.texture),ye=G||0;ee.framebufferTextureLayer(36160,36064,pe.__webglTexture,q||0,ye)}M=-1},this.readRenderTargetPixels=function(L,G,q,Z,Q,ge,pe){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=S.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){$.bindFramebuffer(36160,ye);try{const Se=L.texture,De=Se.format,Ee=Se.type;if(De!==1023&&ft.convert(De)!==ee.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const be=Ee===1016&&(P.has("EXT_color_buffer_half_float")||J.isWebGL2&&P.has("EXT_color_buffer_float"));if(!(Ee===1009||ft.convert(Ee)===ee.getParameter(35738)||Ee===1015&&(J.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float"))||be))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");ee.checkFramebufferStatus(36160)===36053?G>=0&&G<=L.width-Z&&q>=0&&q<=L.height-Q&&ee.readPixels(G,q,Z,Q,ft.convert(De),ft.convert(Ee),ge):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Se=x!==null?S.get(x).__webglFramebuffer:null;$.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(L,G,q=0){const Z=Math.pow(2,-q),Q=Math.floor(G.image.width*Z),ge=Math.floor(G.image.height*Z);let pe=ft.convert(G.format);J.isWebGL2&&(pe===6407&&(pe=32849),pe===6408&&(pe=32856)),D.setTexture2D(G,0),ee.copyTexImage2D(3553,q,pe,L.x,L.y,Q,ge,0),$.unbindTexture()},this.copyTextureToTexture=function(L,G,q,Z=0){const Q=G.image.width,ge=G.image.height,pe=ft.convert(q.format),ye=ft.convert(q.type);D.setTexture2D(q,0),ee.pixelStorei(37440,q.flipY),ee.pixelStorei(37441,q.premultiplyAlpha),ee.pixelStorei(3317,q.unpackAlignment),G.isDataTexture?ee.texSubImage2D(3553,Z,L.x,L.y,Q,ge,pe,ye,G.image.data):G.isCompressedTexture?ee.compressedTexSubImage2D(3553,Z,L.x,L.y,G.mipmaps[0].width,G.mipmaps[0].height,pe,G.mipmaps[0].data):ee.texSubImage2D(3553,Z,L.x,L.y,pe,ye,G.image),Z===0&&q.generateMipmaps&&ee.generateMipmap(3553),$.unbindTexture()},this.copyTextureToTexture3D=function(L,G,q,Z,Q=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const ge=L.max.x-L.min.x+1,pe=L.max.y-L.min.y+1,ye=L.max.z-L.min.z+1,Se=ft.convert(Z.format),De=ft.convert(Z.type);let Ee;if(Z.isDataTexture3D)D.setTexture3D(Z,0),Ee=32879;else{if(!Z.isDataTexture2DArray)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");D.setTexture2DArray(Z,0),Ee=35866}ee.pixelStorei(37440,Z.flipY),ee.pixelStorei(37441,Z.premultiplyAlpha),ee.pixelStorei(3317,Z.unpackAlignment);const be=ee.getParameter(3314),Ye=ee.getParameter(32878),$r=ee.getParameter(3316),mt=ee.getParameter(3315),Qa=ee.getParameter(32877),hn=q.isCompressedTexture?q.mipmaps[0]:q.image;ee.pixelStorei(3314,hn.width),ee.pixelStorei(32878,hn.height),ee.pixelStorei(3316,L.min.x),ee.pixelStorei(3315,L.min.y),ee.pixelStorei(32877,L.min.z),q.isDataTexture||q.isDataTexture3D?ee.texSubImage3D(Ee,Q,G.x,G.y,G.z,ge,pe,ye,Se,De,hn.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ee.compressedTexSubImage3D(Ee,Q,G.x,G.y,G.z,ge,pe,ye,Se,hn.data)):ee.texSubImage3D(Ee,Q,G.x,G.y,G.z,ge,pe,ye,Se,De,hn),ee.pixelStorei(3314,be),ee.pixelStorei(32878,Ye),ee.pixelStorei(3316,$r),ee.pixelStorei(3315,mt),ee.pixelStorei(32877,Qa),Q===0&&Z.generateMipmaps&&ee.generateMipmap(Ee),$.unbindTexture()},this.initTexture=function(L){D.setTexture2D(L,0),$.unbindTexture()},this.resetState=function(){m=0,_=0,x=null,$.reset(),Fn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Le.prototype.isWebGLRenderer=!0;class cl extends Le{}cl.prototype.isWebGL1Renderer=!0;class Ir{constructor(e,t=25e-5){this.name="",this.color=new re(e),this.density=t}clone(){return new Ir(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}Ir.prototype.isFogExp2=!0;class Dr{constructor(e,t=1,n=1e3){this.name="",this.color=new re(e),this.near=t,this.far=n}clone(){return new Dr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Dr.prototype.isFog=!0;class Bi extends Me{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Bi.prototype.isScene=!0;class _n{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=at()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=at()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=at()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}_n.prototype.isInterleavedBuffer=!0;const Fe=new b;class an{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.applyMatrix4(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.applyNormalMatrix(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fe.x=this.getX(t),Fe.y=this.getY(t),Fe.z=this.getZ(t),Fe.transformDirection(e),this.setXYZ(t,Fe.x,Fe.y,Fe.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return new we(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new an(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}an.prototype.isInterleavedBufferAttribute=!0;class Fi extends ke{constructor(e){super(),this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}let ir;Fi.prototype.isSpriteMaterial=!0;const Nr=new b,sr=new b,ar=new b,or=new X,zr=new X,hl=new ce,Oi=new b,Br=new b,Ui=new b,ul=new X,ra=new X,dl=new X;class Hi extends Me{constructor(e){if(super(),this.type="Sprite",ir===void 0){ir=new fe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _n(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new an(n,3,0,!1)),ir.setAttribute("uv",new an(n,2,3,!1))}this.geometry=ir,this.material=e!==void 0?e:new Fi,this.center=new X(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),hl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-ar.z);const n=this.material.rotation;let r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));const a=this.center;Gi(Oi.set(-.5,-.5,0),ar,a,sr,r,i),Gi(Br.set(.5,-.5,0),ar,a,sr,r,i),Gi(Ui.set(.5,.5,0),ar,a,sr,r,i),ul.set(0,0),ra.set(1,0),dl.set(1,1);let o=e.ray.intersectTriangle(Oi,Br,Ui,!1,Nr);if(o===null&&(Gi(Br.set(-.5,.5,0),ar,a,sr,r,i),ra.set(0,1),o=e.ray.intersectTriangle(Oi,Ui,Br,!1,Nr),o===null))return;const l=e.ray.origin.distanceTo(Nr);l<e.near||l>e.far||t.push({distance:l,point:Nr.clone(),uv:Be.getUV(Nr,Oi,Br,Ui,ul,ra,dl,new X),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gi(s,e,t,n,r,i){or.subVectors(s,t).addScalar(.5).multiply(n),r!==void 0?(zr.x=i*or.x-r*or.y,zr.y=r*or.x+i*or.y):zr.copy(or),s.copy(e),s.x+=zr.x,s.y+=zr.y,s.applyMatrix4(hl)}Hi.prototype.isSprite=!0;const ki=new b,pl=new b;class fl extends Me{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const i=t[n];this.addLevel(i.object.clone(),i.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){ki.setFromMatrixPosition(this.matrixWorld);const n=e.ray.origin.distanceTo(ki);this.getObjectForDistance(n).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ki.setFromMatrixPosition(e.matrixWorld),pl.setFromMatrixPosition(this.matrixWorld);const n=ki.distanceTo(pl)/e.zoom;let r,i;for(t[0].object.visible=!0,r=1,i=t.length;r<i&&n>=t[r].distance;r++)t[r-1].object.visible=!1,t[r].object.visible=!0;for(this._currentLevel=r-1;r<i;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,i=n.length;r<i;r++){const a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}}const ml=new b,gl=new Ae,vl=new Ae,Ou=new b,yl=new ce;class Vi extends Ue{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ce,this.bindMatrixInverse=new ce}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ae,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;gl.fromBufferAttribute(r.attributes.skinIndex,e),vl.fromBufferAttribute(r.attributes.skinWeight,e),ml.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const a=vl.getComponent(i);if(a!==0){const o=gl.getComponent(i);yl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ou.copy(ml).applyMatrix4(yl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Vi.prototype.isSkinnedMesh=!0;class Wi extends Me{constructor(){super(),this.type="Bone"}}Wi.prototype.isBone=!0;class Mn extends Ge{constructor(e=null,t=1,n=1,r,i,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,r,i,u,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Mn.prototype.isDataTexture=!0;const xl=new ce,Uu=new ce;class ji{constructor(e=[],t=[]){this.uuid=at(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let i=0,a=e.length;i<a;i++){const o=e[i]?e[i].matrixWorld:Uu;xl.multiplyMatrices(o,t[i]),xl.toArray(n,16*i)}r!==null&&(r.needsUpdate=!0)}clone(){return new ji(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=to(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Mn(t,e,e,1023,1015);return this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const i=e.bones[n];let a=t[i];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),a=new Wi),this.bones.push(a),this.boneInverses.push(new ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class bn extends we{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}bn.prototype.isInstancedBufferAttribute=!0;const _l=new ce,Ml=new ce,qi=[],Fr=new Ue;class ia extends Ue{constructor(e,t,n){super(e,t),this.instanceMatrix=new bn(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0)for(let i=0;i<r;i++){this.getMatrixAt(i,_l),Ml.multiplyMatrices(n,_l),Fr.matrixWorld=Ml,Fr.raycast(e,qi);for(let a=0,o=qi.length;a<o;a++){const l=qi[a];l.instanceId=i,l.object=this,t.push(l)}qi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bn(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}ia.prototype.isInstancedMesh=!0;class je extends ke{constructor(e){super(),this.type="LineBasicMaterial",this.color=new re(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}je.prototype.isLineBasicMaterial=!0;const bl=new b,wl=new b,Sl=new ce,sa=new Kt,Xi=new Zt;class Vt extends Me{constructor(e=new fe,t=new je){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)bl.fromBufferAttribute(t,r-1),wl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=bl.distanceTo(wl);e.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xi.copy(n.boundingSphere),Xi.applyMatrix4(r),Xi.radius+=i,e.ray.intersectsSphere(Xi)===!1)return;Sl.copy(r).invert(),sa.copy(e.ray).applyMatrix4(Sl);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new b,h=new b,u=new b,d=new b,p=this.isLineSegments?2:1;if(n.isBufferGeometry){const f=n.index,g=n.attributes.position;if(f!==null)for(let y=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count)-1;y<m;y+=p){const _=f.getX(y),x=f.getX(y+1);if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,x),sa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}else for(let y=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count)-1;y<m;y+=p){if(c.fromBufferAttribute(g,y),h.fromBufferAttribute(g,y+1),sa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Vt.prototype.isLine=!0;const Tl=new b,El=new b;class st extends Vt{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,i=t.count;r<i;r+=2)Tl.fromBufferAttribute(t,r),El.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Tl.distanceTo(El);e.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}st.prototype.isLineSegments=!0;class aa extends Vt{constructor(e,t){super(e,t),this.type="LineLoop"}}aa.prototype.isLineLoop=!0;class wn extends ke{constructor(e){super(),this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}wn.prototype.isPointsMaterial=!0;const Al=new ce,oa=new Kt,Yi=new Zt,Ji=new b;class Or extends Me{constructor(e=new fe,t=new wn){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(r),Yi.radius+=i,e.ray.intersectsSphere(Yi)===!1)return;Al.copy(r).invert(),oa.copy(e.ray).applyMatrix4(Al);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){const p=c.getX(u);Ji.fromBufferAttribute(h,p),Ll(Ji,p,l,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Ji.fromBufferAttribute(h,u),Ll(Ji,u,l,r,e,t,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=r.length;i<a;i++){const o=r[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}function Ll(s,e,t,n,r,i,a){const o=oa.distanceSqToPoint(s);if(o<t){const l=new b;oa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;i.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}Or.prototype.isPoints=!0;class Rl extends Ge{constructor(e,t,n,r,i,a,o,l,c){super(e,t,n,r,i,a,o,l,c),this.format=o!==void 0?o:1022,this.minFilter=a!==void 0?a:1006,this.magFilter=i!==void 0?i:1006,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)})}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Rl.prototype.isVideoTexture=!0;class la extends Ge{constructor(e,t,n,r,i,a,o,l,c,h,u,d){super(null,a,o,l,c,h,r,i,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}la.prototype.isCompressedTexture=!0;class Cl extends Ge{constructor(e,t,n,r,i,a,o,l,c){super(e,t,n,r,i,a,o,l,c),this.needsUpdate=!0}}Cl.prototype.isCanvasTexture=!0;class Pl extends Ge{constructor(e,t,n,r,i,a,o,l,c,h){if((h=h!==void 0?h:1026)!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1012),n===void 0&&h===1027&&(n=1020),super(null,r,i,a,o,l,h,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}Pl.prototype.isDepthTexture=!0;class lr extends fe{constructor(e=1,t=8,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const i=[],a=[],o=[],l=[],c=new b,h=new X;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)i.push(u,u+1,0);this.setIndex(i),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}static fromJSON(e){return new lr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class on extends fe{constructor(e=1,t=1,n=1,r=8,i=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),i=Math.floor(i);const h=[],u=[],d=[],p=[];let f=0;const g=[],y=n/2;let m=0;function _(x){const M=f,w=new X,T=new b;let R=0;const C=x===!0?e:t,N=x===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,y*N,0),d.push(0,N,0),p.push(.5,.5),f++;const I=f;for(let z=0;z<=r;z++){const K=z/r*l+o,V=Math.cos(K),F=Math.sin(K);T.x=C*F,T.y=y*N,T.z=C*V,u.push(T.x,T.y,T.z),d.push(0,N,0),w.x=.5*V+.5,w.y=.5*F*N+.5,p.push(w.x,w.y),f++}for(let z=0;z<r;z++){const K=M+z,V=I+z;x===!0?h.push(V,V+1,K):h.push(V+1,V,K),R+=3}c.addGroup(m,R,x===!0?1:2),m+=R}(function(){const x=new b,M=new b;let w=0;const T=(t-e)/n;for(let R=0;R<=i;R++){const C=[],N=R/i,I=N*(t-e)+e;for(let z=0;z<=r;z++){const K=z/r,V=K*l+o,F=Math.sin(V),j=Math.cos(V);M.x=I*F,M.y=-N*n+y,M.z=I*j,u.push(M.x,M.y,M.z),x.set(F,T,j).normalize(),d.push(x.x,x.y,x.z),p.push(K,1-N),C.push(f++)}g.push(C)}for(let R=0;R<r;R++)for(let C=0;C<i;C++){const N=g[C][R],I=g[C+1][R],z=g[C+1][R+1],K=g[C][R+1];h.push(N,I,K),h.push(I,z,K),w+=6}c.addGroup(m,w,0),m+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2))}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cr extends on{constructor(e=1,t=1,n=8,r=1,i=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,i,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(e){return new cr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rt extends fe{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const i=[],a=[];function o(d,p,f,g){const y=g+1,m=[];for(let _=0;_<=y;_++){m[_]=[];const x=d.clone().lerp(f,_/y),M=p.clone().lerp(f,_/y),w=y-_;for(let T=0;T<=w;T++)m[_][T]=T===0&&_===y?x:x.clone().lerp(M,T/w)}for(let _=0;_<y;_++)for(let x=0;x<2*(y-_)-1;x++){const M=Math.floor(x/2);x%2==0?(l(m[_][M+1]),l(m[_+1][M]),l(m[_][M])):(l(m[_][M+1]),l(m[_+1][M+1]),l(m[_+1][M]))}}function l(d){i.push(d.x,d.y,d.z)}function c(d,p){const f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){const p=new b,f=new b,g=new b;for(let y=0;y<t.length;y+=3)c(t[y+0],p),c(t[y+1],f),c(t[y+2],g),o(p,f,g,d)})(r),function(d){const p=new b;for(let f=0;f<i.length;f+=3)p.x=i[f+0],p.y=i[f+1],p.z=i[f+2],p.normalize().multiplyScalar(d),i[f+0]=p.x,i[f+1]=p.y,i[f+2]=p.z}(n),function(){const d=new b;for(let f=0;f<i.length;f+=3){d.x=i[f+0],d.y=i[f+1],d.z=i[f+2];const g=u(d)/2/Math.PI+.5,y=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-y)}var p;(function(){const f=new b,g=new b,y=new b,m=new b,_=new X,x=new X,M=new X;for(let w=0,T=0;w<i.length;w+=9,T+=6){f.set(i[w+0],i[w+1],i[w+2]),g.set(i[w+3],i[w+4],i[w+5]),y.set(i[w+6],i[w+7],i[w+8]),_.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),m.copy(f).add(g).add(y).divideScalar(3);const R=u(m);h(_,T+0,f,R),h(x,T+2,g,R),h(M,T+4,y,R)}})(),function(){for(let f=0;f<a.length;f+=6){const g=a[f+0],y=a[f+2],m=a[f+4],_=Math.max(g,y,m),x=Math.min(g,y,m);_>.9&&x<.1&&(g<.2&&(a[f+0]+=1),y<.2&&(a[f+2]+=1),m<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new le(i,3)),this.setAttribute("normal",new le(i.slice(),3)),this.setAttribute("uv",new le(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(e){return new Rt(e.vertices,e.indices,e.radius,e.details)}}class hr extends Rt{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hr(e.radius,e.detail)}}const Zi=new b,Qi=new b,ca=new b,Ki=new Be;class ha extends fe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),i=Math.cos(un*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);const{a:g,b:y,c:m}=Ki;if(g.fromBufferAttribute(o,c[0]),y.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Ki.getNormal(ca),u[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,u[1]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,u[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){const x=(_+1)%3,M=u[_],w=u[x],T=Ki[h[_]],R=Ki[h[x]],C=`${M}_${w}`,N=`${w}_${M}`;N in d&&d[N]?(ca.dot(d[N].normal)<=i&&(p.push(T.x,T.y,T.z),p.push(R.x,R.y,R.z)),d[N]=null):C in d||(d[C]={index0:c[_],index1:c[x],normal:ca.clone()})}}for(const f in d)if(d[f]){const{index0:g,index1:y}=d[f];Zi.fromBufferAttribute(o,g),Qi.fromBufferAttribute(o,y),p.push(Zi.x,Zi.y,Zi.z),p.push(Qi.x,Qi.y,Qi.z)}this.setAttribute("position",new le(p,3))}}}class ht{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const i=n.length;let a;a=t||e*n[i-1];let o,l=0,c=i-1;for(;l<=c;)if(r=Math.floor(l+(c-l)/2),o=n[r]-a,o<0)l=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(i-1);const h=n[r];return(r+(a-h)/(n[r+1]-h))/(i-1)}getTangent(e,t){let r=e-1e-4,i=e+1e-4;r<0&&(r=0),i>1&&(i=1);const a=this.getPoint(r),o=this.getPoint(i),l=t||(a.isVector2?new X:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,r=[],i=[],a=[],o=new b,l=new ce;for(let p=0;p<=e;p++){const f=p/e;r[p]=this.getTangentAt(f,new b)}i[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let p=1;p<=e;p++){if(i[p]=i[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(Qe(r[p-1].dot(r[p]),-1,1));i[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(r[p],i[p])}if(t===!0){let p=Math.acos(Qe(i[0].dot(i[e]),-1,1));p/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(p=-p);for(let f=1;f<=e;f++)i[f].applyMatrix4(l.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],i[f])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ur extends ht{constructor(e=0,t=0,n=1,r=1,i=0,a=2*Math.PI,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new X,r=2*Math.PI;let i=this.aEndAngle-this.aStartAngle;const a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=r;for(;i>r;)i-=r;i<Number.EPSILON&&(i=a?0:r),this.aClockwise!==!0||a||(i===r?i=-r:i-=r);const o=this.aStartAngle+e*i;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ur.prototype.isEllipseCurve=!0;class ua extends Ur{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.type="ArcCurve"}}function da(){let s=0,e=0,t=0,n=0;function r(i,a,o,l){s=i,e=o,t=-3*i+3*a-2*o-l,n=2*i-2*a+o+l}return{initCatmullRom:function(i,a,o,l,c){r(a,o,c*(o-i),c*(l-a))},initNonuniformCatmullRom:function(i,a,o,l,c,h,u){let d=(a-i)/c-(o-i)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(i){const a=i*i;return s+e*i+t*a+n*(a*i)}}}ua.prototype.isArcCurve=!0;const $i=new b,pa=new da,fa=new da,ma=new da;class ga extends ht{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new b){const n=t,r=this.points,i=r.length,a=(i-(this.closed?0:1))*e;let o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/i)+1)*i:h===0&&c===i-1&&(c=i-2,h=1),this.closed||c>0?o=r[(c-1)%i]:($i.subVectors(r[0],r[1]).add(r[0]),o=$i);const u=r[c%i],d=r[(c+1)%i];if(this.closed||c+2<i?l=r[(c+2)%i]:($i.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=$i),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),y<1e-4&&(y=g),pa.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,y),fa.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,y),ma.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,y)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),fa.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),ma.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(pa.calc(h),fa.calc(h),ma.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Il(s,e,t,n,r){const i=.5*(n-e),a=.5*(r-t),o=s*s;return(2*t-2*n+i+a)*(s*o)+(-3*t+3*n-2*i-a)*o+i*s+t}function Hr(s,e,t,n){return function(r,i){const a=1-r;return a*a*i}(s,e)+function(r,i){return 2*(1-r)*r*i}(s,t)+function(r,i){return r*r*i}(s,n)}function Gr(s,e,t,n,r){return function(i,a){const o=1-i;return o*o*o*a}(s,e)+function(i,a){const o=1-i;return 3*o*o*i*a}(s,t)+function(i,a){return 3*(1-i)*i*i*a}(s,n)+function(i,a){return i*i*i*a}(s,r)}ga.prototype.isCatmullRomCurve3=!0;class es extends ht{constructor(e=new X,t=new X,n=new X,r=new X){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new X){const n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,r.x,i.x,a.x,o.x),Gr(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}es.prototype.isCubicBezierCurve=!0;class va extends ht{constructor(e=new b,t=new b,n=new b,r=new b){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new b){const n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,r.x,i.x,a.x,o.x),Gr(e,r.y,i.y,a.y,o.y),Gr(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}va.prototype.isCubicBezierCurve3=!0;class kr extends ht{constructor(e=new X,t=new X){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new X){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new X;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}kr.prototype.isLineCurve=!0;class Dl extends ht{constructor(e=new b,t=new b){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ts extends ht{constructor(e=new X,t=new X,n=new X){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){const n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Hr(e,r.x,i.x,a.x),Hr(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ts.prototype.isQuadraticBezierCurve=!0;class ns extends ht{constructor(e=new b,t=new b,n=new b){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Hr(e,r.x,i.x,a.x),Hr(e,r.y,i.y,a.y),Hr(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ns.prototype.isQuadraticBezierCurve3=!0;class rs extends ht{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new X){const n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Il(o,l.x,c.x,h.x,u.x),Il(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new X().fromArray(r))}return this}}rs.prototype.isSplineCurve=!0;var ya=Object.freeze({__proto__:null,ArcCurve:ua,CatmullRomCurve3:ga,CubicBezierCurve:es,CubicBezierCurve3:va,EllipseCurve:Ur,LineCurve:kr,LineCurve3:Dl,QuadraticBezierCurve:ts,QuadraticBezierCurve3:ns,SplineCurve:rs});class Nl extends ht{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new kr(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let i=0;for(;i<r.length;){if(r[i]>=n){const a=r[i]-n,o=this.curves[i],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,i=this.curves;r<i.length;r++){const a=i[r],o=a&&a.isEllipseCurve?2*e:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new ya[r.type]().fromJSON(r))}return this}}class Vr extends Nl{constructor(e){super(),this.type="Path",this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new kr(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const i=new ts(this.currentPoint.clone(),new X(e,t),new X(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){const o=new es(this.currentPoint.clone(),new X(e,t),new X(n,r),new X(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,r,i,a,o,l),this}absellipse(e,t,n,r,i,a,o,l){const c=new Ur(e,t,n,r,i,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ct extends Vr{constructor(e){super(e),this.uuid=at(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Vr().fromJSON(r))}return this}}const Hu=function(s,e,t=2){const n=e&&e.length,r=n?e[0]*t:s.length;let i=zl(s,0,r,t,!0);const a=[];if(!i||i.next===i.prev)return a;let o,l,c,h,u,d,p;if(n&&(i=function(f,g,y,m){const _=[];let x,M,w,T,R;for(x=0,M=g.length;x<M;x++)w=g[x]*m,T=x<M-1?g[x+1]*m:f.length,R=zl(f,w,T,m,!1),R===R.next&&(R.steiner=!0),_.push(Yu(R));for(_.sort(ju),x=0;x<_.length;x++)qu(_[x],y),y=ln(y,y.next);return y}(s,e,i,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let f=t;f<r;f+=t)u=s[f],d=s[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return Wr(i,a,t,o,l,p),a};function zl(s,e,t,n,r){let i,a;if(r===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(s,e,t,n)>0)for(i=e;i<t;i+=n)a=Ol(i,s[i],s[i+1],a);else for(i=t-n;i>=e;i-=n)a=Ol(i,s[i],s[i+1],a);return a&&is(a,a.next)&&(qr(a),a=a.next),a}function ln(s,e){if(!s)return s;e||(e=s);let t,n=s;do if(t=!1,n.steiner||!is(n,n.next)&&Ne(n.prev,n,n.next)!==0)n=n.next;else{if(qr(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Wr(s,e,t,n,r,i,a){if(!s)return;!a&&i&&function(h,u,d,p){let f=h;do f.z===null&&(f.z=xa(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(g){let y,m,_,x,M,w,T,R,C=1;do{for(m=g,g=null,M=null,w=0;m;){for(w++,_=m,T=0,y=0;y<C&&(T++,_=_.nextZ,_);y++);for(R=C;T>0||R>0&&_;)T!==0&&(R===0||!_||m.z<=_.z)?(x=m,m=m.nextZ,T--):(x=_,_=_.nextZ,R--),M?M.nextZ=x:g=x,x.prevZ=M,M=x;m=_}M.nextZ=null,C*=2}while(w>1)}(f)}(s,n,r,i);let o,l,c=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,i?ku(s,n,r,i):Gu(s))e.push(o.i/t),e.push(s.i/t),e.push(l.i/t),qr(s),s=l.next,c=l.next;else if((s=l)===c){a?a===1?Wr(s=Vu(ln(s),e,t),e,t,n,r,i,2):a===2&&Wu(s,e,t,n,r,i):Wr(ln(s),e,t,n,r,i,1);break}}function Gu(s){const e=s.prev,t=s,n=s.next;if(Ne(e,t,n)>=0)return!1;let r=s.next.next;for(;r!==s.prev;){if(ur(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&Ne(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function ku(s,e,t,n){const r=s.prev,i=s,a=s.next;if(Ne(r,i,a)>=0)return!1;const o=r.x<i.x?r.x<a.x?r.x:a.x:i.x<a.x?i.x:a.x,l=r.y<i.y?r.y<a.y?r.y:a.y:i.y<a.y?i.y:a.y,c=r.x>i.x?r.x>a.x?r.x:a.x:i.x>a.x?i.x:a.x,h=r.y>i.y?r.y>a.y?r.y:a.y:i.y>a.y?i.y:a.y,u=xa(o,l,e,t,n),d=xa(c,h,e,t,n);let p=s.prevZ,f=s.nextZ;for(;p&&p.z>=u&&f&&f.z<=d;){if(p!==s.prev&&p!==s.next&&ur(r.x,r.y,i.x,i.y,a.x,a.y,p.x,p.y)&&Ne(p.prev,p,p.next)>=0||(p=p.prevZ,f!==s.prev&&f!==s.next&&ur(r.x,r.y,i.x,i.y,a.x,a.y,f.x,f.y)&&Ne(f.prev,f,f.next)>=0))return!1;f=f.nextZ}for(;p&&p.z>=u;){if(p!==s.prev&&p!==s.next&&ur(r.x,r.y,i.x,i.y,a.x,a.y,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;f&&f.z<=d;){if(f!==s.prev&&f!==s.next&&ur(r.x,r.y,i.x,i.y,a.x,a.y,f.x,f.y)&&Ne(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function Vu(s,e,t){let n=s;do{const r=n.prev,i=n.next.next;!is(r,i)&&Bl(r,n,n.next,i)&&jr(r,i)&&jr(i,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(i.i/t),qr(n),qr(n.next),n=s=i),n=n.next}while(n!==s);return ln(n)}function Wu(s,e,t,n,r,i){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ju(a,o)){let l=Fl(a,o);return a=ln(a,a.next),l=ln(l,l.next),Wr(a,e,t,n,r,i),void Wr(l,e,t,n,r,i)}o=o.next}a=a.next}while(a!==s)}function ju(s,e){return s.x-e.x}function qu(s,e){if(e=function(t,n){let r=n;const i=t.x,a=t.y;let o,l=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){const f=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(f<=i&&f>l){if(l=f,f===i){if(a===r.y)return r;if(a===r.next.y)return r.next}o=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!o)return null;if(i===l)return o;const c=o,h=o.x,u=o.y;let d,p=1/0;r=o;do i>=r.x&&r.x>=h&&i!==r.x&&ur(a<u?i:l,a,h,u,a<u?l:i,a,r.x,r.y)&&(d=Math.abs(a-r.y)/(i-r.x),jr(r,t)&&(d<p||d===p&&(r.x>o.x||r.x===o.x&&Xu(o,r)))&&(o=r,p=d)),r=r.next;while(r!==c);return o}(s,e),e){const t=Fl(e,s);ln(e,e.next),ln(t,t.next)}}function Xu(s,e){return Ne(s.prev,s,e.prev)<0&&Ne(e.next,s,s.next)<0}function xa(s,e,t,n,r){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=32767*(s-t)*r)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*r)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Yu(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ur(s,e,t,n,r,i,a,o){return(r-a)*(e-o)-(s-a)*(i-o)>=0&&(s-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(i-o)-(r-a)*(n-o)>=0}function Ju(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Bl(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1}(s,e)&&(jr(s,e)&&jr(e,s)&&function(t,n){let r=t,i=!1;const a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next;while(r!==t);return i}(s,e)&&(Ne(s.prev,s,e.prev)||Ne(s,e.prev,e))||is(s,e)&&Ne(s.prev,s,s.next)>0&&Ne(e.prev,e,e.next)>0)}function Ne(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function is(s,e){return s.x===e.x&&s.y===e.y}function Bl(s,e,t,n){const r=as(Ne(s,e,t)),i=as(Ne(s,e,n)),a=as(Ne(t,n,s)),o=as(Ne(t,n,e));return r!==i&&a!==o||!(r!==0||!ss(s,t,e))||!(i!==0||!ss(s,n,e))||!(a!==0||!ss(t,s,n))||!(o!==0||!ss(t,e,n))}function ss(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function as(s){return s>0?1:s<0?-1:0}function jr(s,e){return Ne(s.prev,s,s.next)<0?Ne(s,e,s.next)>=0&&Ne(s,s.prev,e)>=0:Ne(s,e,s.prev)<0||Ne(s,s.next,e)<0}function Fl(s,e){const t=new _a(s.i,s.x,s.y),n=new _a(e.i,e.x,e.y),r=s.next,i=e.prev;return s.next=e,e.prev=s,t.next=r,r.prev=t,n.next=t,t.prev=n,i.next=n,n.prev=i,n}function Ol(s,e,t,n){const r=new _a(s,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _a(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}class Pt{static area(e){const t=e.length;let n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return .5*n}static isClockWise(e){return Pt.area(e)<0}static triangulateShape(e,t){const n=[],r=[],i=[];Ul(e),Hl(n,e);let a=e.length;t.forEach(Ul);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Hl(n,t[l]);const o=Hu(n,r);for(let l=0;l<o.length;l+=3)i.push(o.slice(l,l+3));return i}}function Ul(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Hl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class It extends fe{constructor(e=new Ct([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],i=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Zu;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let x,M,w,T,R,C=!1;m&&(x=m.getSpacedPoints(h),C=!0,d=!1,M=m.computeFrenetFrames(h,!1),w=new b,T=new b,R=new b),d||(y=0,p=0,f=0,g=0);const N=o.extractPoints(c);let I=N.shape;const z=N.holes;if(!Pt.isClockWise(I)){I=I.reverse();for(let B=0,S=z.length;B<S;B++){const D=z[B];Pt.isClockWise(D)&&(z[B]=D.reverse())}}const K=Pt.triangulateShape(I,z),V=I;for(let B=0,S=z.length;B<S;B++){const D=z[B];I=I.concat(D)}function F(B,S,D){return S||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().multiplyScalar(D).add(B)}const j=I.length,te=K.length;function ie(B,S,D){let k,W,H;const se=B.x-S.x,he=B.y-S.y,ae=D.x-B.x,ve=D.y-B.y,me=se*se+he*he,qe=se*ve-he*ae;if(Math.abs(qe)>Number.EPSILON){const Re=Math.sqrt(me),Xe=Math.sqrt(ae*ae+ve*ve),ut=S.x-he/Re,Nn=S.y+se/Re,zn=((D.x-ve/Xe-ut)*ve-(D.y+ae/Xe-Nn)*ae)/(se*ve-he*ae);k=ut+se*zn-B.x,W=Nn+he*zn-B.y;const Bn=k*k+W*W;if(Bn<=2)return new X(k,W);H=Math.sqrt(Bn/2)}else{let Re=!1;se>Number.EPSILON?ae>Number.EPSILON&&(Re=!0):se<-Number.EPSILON?ae<-Number.EPSILON&&(Re=!0):Math.sign(he)===Math.sign(ve)&&(Re=!0),Re?(k=-he,W=se,H=Math.sqrt(me)):(k=se,W=he,H=Math.sqrt(me/2))}return new X(k/H,W/H)}const oe=[];for(let B=0,S=V.length,D=S-1,k=B+1;B<S;B++,D++,k++)D===S&&(D=0),k===S&&(k=0),oe[B]=ie(V[B],V[D],V[k]);const ue=[];let de,Y=oe.concat();for(let B=0,S=z.length;B<S;B++){const D=z[B];de=[];for(let k=0,W=D.length,H=W-1,se=k+1;k<W;k++,H++,se++)H===W&&(H=0),se===W&&(se=0),de[k]=ie(D[k],D[H],D[se]);ue.push(de),Y=Y.concat(de)}for(let B=0;B<y;B++){const S=B/y,D=p*Math.cos(S*Math.PI/2),k=f*Math.sin(S*Math.PI/2)+g;for(let W=0,H=V.length;W<H;W++){const se=F(V[W],oe[W],k);U(se.x,se.y,-D)}for(let W=0,H=z.length;W<H;W++){const se=z[W];de=ue[W];for(let he=0,ae=se.length;he<ae;he++){const ve=F(se[he],de[he],k);U(ve.x,ve.y,-D)}}}const E=f+g;for(let B=0;B<j;B++){const S=d?F(I[B],Y[B],E):I[B];C?(T.copy(M.normals[0]).multiplyScalar(S.x),w.copy(M.binormals[0]).multiplyScalar(S.y),R.copy(x[0]).add(T).add(w),U(R.x,R.y,R.z)):U(S.x,S.y,0)}for(let B=1;B<=h;B++)for(let S=0;S<j;S++){const D=d?F(I[S],Y[S],E):I[S];C?(T.copy(M.normals[B]).multiplyScalar(D.x),w.copy(M.binormals[B]).multiplyScalar(D.y),R.copy(x[B]).add(T).add(w),U(R.x,R.y,R.z)):U(D.x,D.y,u/h*B)}for(let B=y-1;B>=0;B--){const S=B/y,D=p*Math.cos(S*Math.PI/2),k=f*Math.sin(S*Math.PI/2)+g;for(let W=0,H=V.length;W<H;W++){const se=F(V[W],oe[W],k);U(se.x,se.y,u+D)}for(let W=0,H=z.length;W<H;W++){const se=z[W];de=ue[W];for(let he=0,ae=se.length;he<ae;he++){const ve=F(se[he],de[he],k);C?U(ve.x,ve.y+x[h-1].y,x[h-1].x+D):U(ve.x,ve.y,u+D)}}}function A(B,S){let D=B.length;for(;--D>=0;){const k=D;let W=D-1;W<0&&(W=B.length-1);for(let H=0,se=h+2*y;H<se;H++){const he=j*H,ae=j*(H+1);P(S+k+he,S+W+he,S+W+ae,S+k+ae)}}}function U(B,S,D){l.push(B),l.push(S),l.push(D)}function O(B,S,D){J(B),J(S),J(D);const k=r.length/3,W=_.generateTopUV(n,r,k-3,k-2,k-1);$(W[0]),$(W[1]),$(W[2])}function P(B,S,D,k){J(B),J(S),J(k),J(S),J(D),J(k);const W=r.length/3,H=_.generateSideWallUV(n,r,W-6,W-3,W-2,W-1);$(H[0]),$(H[1]),$(H[3]),$(H[1]),$(H[2]),$(H[3])}function J(B){r.push(l[3*B+0]),r.push(l[3*B+1]),r.push(l[3*B+2])}function $(B){i.push(B.x),i.push(B.y)}(function(){const B=r.length/3;if(d){let S=0,D=j*S;for(let k=0;k<te;k++){const W=K[k];O(W[2]+D,W[1]+D,W[0]+D)}S=h+2*y,D=j*S;for(let k=0;k<te;k++){const W=K[k];O(W[0]+D,W[1]+D,W[2]+D)}}else{for(let S=0;S<te;S++){const D=K[S];O(D[2],D[1],D[0])}for(let S=0;S<te;S++){const D=K[S];O(D[0]+j*h,D[1]+j*h,D[2]+j*h)}}n.addGroup(B,r.length/3-B,0)})(),function(){const B=r.length/3;let S=0;A(V,S),S+=V.length;for(let D=0,k=z.length;D<k;D++){const W=z[D];A(W,S),S+=W.length}n.addGroup(B,r.length/3-B,1)}()}this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(i,2)),this.computeVertexNormals()}toJSON(){const e=super.toJSON();return function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let i=0,a=t.length;i<a;i++){const o=t[i];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const n=[];for(let i=0,a=e.shapes.length;i<a;i++){const o=t[e.shapes[i]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ya[r.type]().fromJSON(r)),new It(n,e.options)}}const Zu={generateTopUV:function(s,e,t,n,r){const i=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new X(i,a),new X(o,l),new X(c,h)]},generateSideWallUV:function(s,e,t,n,r,i){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],g=e[3*i],y=e[3*i+1],m=e[3*i+2];return Math.abs(o-h)<Math.abs(a-c)?[new X(a,1-l),new X(c,1-u),new X(d,1-f),new X(g,1-m)]:[new X(o,1-l),new X(h,1-u),new X(p,1-f),new X(y,1-m)]}};class dr extends Rt{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dr(e.radius,e.detail)}}class pr extends fe{constructor(e=[new X(0,.5),new X(.5,0),new X(0,-.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Qe(r,0,2*Math.PI);const i=[],a=[],o=[],l=1/t,c=new b,h=new X;for(let u=0;u<=t;u++){const d=n+u*l*r,p=Math.sin(d),f=Math.cos(d);for(let g=0;g<=e.length-1;g++)c.x=e[g].x*p,c.y=e[g].y,c.z=e[g].x*f,a.push(c.x,c.y,c.z),h.x=u/t,h.y=g/(e.length-1),o.push(h.x,h.y)}for(let u=0;u<t;u++)for(let d=0;d<e.length-1;d++){const p=d+u*e.length,f=p,g=p+e.length,y=p+e.length+1,m=p+1;i.push(f,g,m),i.push(g,y,m)}if(this.setIndex(i),this.setAttribute("position",new le(a,3)),this.setAttribute("uv",new le(o,2)),this.computeVertexNormals(),r===2*Math.PI){const u=this.attributes.normal.array,d=new b,p=new b,f=new b,g=t*e.length*3;for(let y=0,m=0;y<e.length;y++,m+=3)d.x=u[m+0],d.y=u[m+1],d.z=u[m+2],p.x=u[g+m+0],p.y=u[g+m+1],p.z=u[g+m+2],f.addVectors(d,p).normalize(),u[m+0]=u[g+m+0]=f.x,u[m+1]=u[g+m+1]=f.y,u[m+2]=u[g+m+2]=f.z}}static fromJSON(e){return new pr(e.points,e.segments,e.phiStart,e.phiLength)}}class Sn extends Rt{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sn(e.radius,e.detail)}}class fr extends fe{constructor(e=.5,t=1,n=8,r=1,i=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/(r=Math.max(1,r)),p=new b,f=new X;for(let g=0;g<=r;g++){for(let y=0;y<=n;y++){const m=i+y/n*a;p.x=u*Math.cos(m),p.y=u*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<r;g++){const y=g*(n+1);for(let m=0;m<n;m++){const _=m+y,x=_,M=_+n+1,w=_+n+2,T=_+1;o.push(x,M,T),o.push(M,w,T)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}static fromJSON(e){return new fr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Tn extends fe{constructor(e=new Ct([new X(0,.5),new X(-.5,-.5),new X(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],i=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){const u=r.length/3,d=h.extractPoints(t);let p=d.shape;const f=d.holes;Pt.isClockWise(p)===!1&&(p=p.reverse());for(let y=0,m=f.length;y<m;y++){const _=f[y];Pt.isClockWise(_)===!0&&(f[y]=_.reverse())}const g=Pt.triangulateShape(p,f);for(let y=0,m=f.length;y<m;y++){const _=f[y];p=p.concat(_)}for(let y=0,m=p.length;y<m;y++){const _=p[y];r.push(_.x,_.y,0),i.push(0,0,1),a.push(_.x,_.y)}for(let y=0,m=g.length;y<m;y++){const _=g[y],x=_[0]+u,M=_[1]+u,w=_[2]+u;n.push(x,M,w),l+=3}}this.setIndex(n),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(i,3)),this.setAttribute("uv",new le(a,2))}toJSON(){const e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,i=t.length;r<i;r++){const a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){const n=[];for(let r=0,i=e.shapes.length;r<i;r++){const a=t[e.shapes[r]];n.push(a)}return new Tn(n,e.curveSegments)}}class En extends fe{constructor(e=1,t=32,n=16,r=0,i=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new b,d=new b,p=[],f=[],g=[],y=[];for(let m=0;m<=n;m++){const _=[],x=m/n;let M=0;m==0&&a==0?M=.5/t:m==n&&l==Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(r+T*i)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(r+T*i)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),y.push(T+M,1-x),_.push(c++)}h.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const x=h[m][_+1],M=h[m][_],w=h[m+1][_],T=h[m+1][_+1];(m!==0||a>0)&&p.push(x,M,T),(m!==n-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(g,3)),this.setAttribute("uv",new le(y,2))}static fromJSON(e){return new En(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mr extends Rt{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mr(e.radius,e.detail)}}class gr extends fe{constructor(e=1,t=.4,n=8,r=6,i=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new b,u=new b,d=new b;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){const g=f/r*i,y=p/n*Math.PI*2;u.x=(e+t*Math.cos(y))*Math.cos(g),u.y=(e+t*Math.cos(y))*Math.sin(g),u.z=t*Math.sin(y),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){const g=(r+1)*p+f-1,y=(r+1)*(p-1)+f-1,m=(r+1)*(p-1)+f,_=(r+1)*p+f;a.push(g,y,_),a.push(y,m,_)}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}static fromJSON(e){return new gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vr extends fe{constructor(e=1,t=.4,n=64,r=8,i=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:i,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],h=[],u=new b,d=new b,p=new b,f=new b,g=new b,y=new b,m=new b;for(let x=0;x<=n;++x){const M=x/n*i*Math.PI*2;_(M,i,a,e,p),_(M+.01,i,a,e,f),y.subVectors(f,p),m.addVectors(f,p),g.crossVectors(y,m),m.crossVectors(g,y),g.normalize(),m.normalize();for(let w=0;w<=r;++w){const T=w/r*Math.PI*2,R=-t*Math.cos(T),C=t*Math.sin(T);u.x=p.x+(R*m.x+C*g.x),u.y=p.y+(R*m.y+C*g.y),u.z=p.z+(R*m.z+C*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(w/r)}}for(let x=1;x<=n;x++)for(let M=1;M<=r;M++){const w=(r+1)*(x-1)+(M-1),T=(r+1)*x+(M-1),R=(r+1)*x+M,C=(r+1)*(x-1)+M;o.push(w,T,C),o.push(T,R,C)}function _(x,M,w,T,R){const C=Math.cos(x),N=Math.sin(x),I=w/M*x,z=Math.cos(I);R.x=T*(2+z)*.5*C,R.y=T*(2+z)*N*.5,R.z=T*Math.sin(I)*.5}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}static fromJSON(e){return new vr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class yr extends fe{constructor(e=new ns(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};const a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new b,l=new b,c=new X;let h=new b;const u=[],d=[],p=[],f=[];function g(y){h=e.getPointAt(y/t,h);const m=a.normals[y],_=a.binormals[y];for(let x=0;x<=r;x++){const M=x/r*Math.PI*2,w=Math.sin(M),T=-Math.cos(M);l.x=T*m.x+w*_.x,l.y=T*m.y+w*_.y,l.z=T*m.z+w*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let y=0;y<t;y++)g(y);g(i===!1?t:0),function(){for(let y=0;y<=t;y++)for(let m=0;m<=r;m++)c.x=y/t,c.y=m/r,p.push(c.x,c.y)}(),function(){for(let y=1;y<=t;y++)for(let m=1;m<=r;m++){const _=(r+1)*(y-1)+(m-1),x=(r+1)*y+(m-1),M=(r+1)*y+m,w=(r+1)*(y-1)+m;f.push(_,x,w),f.push(x,M,w)}}()})(),this.setIndex(f),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(p,2))}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new yr(new ya[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ma extends fe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new b,i=new b;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){const y=o.getX(p+g),m=o.getX(p+(g+1)%3);r.fromBufferAttribute(a,y),i.fromBufferAttribute(a,m),Gl(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;r.fromBufferAttribute(a,h),i.fromBufferAttribute(a,u),Gl(r,i,n)===!0&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute("position",new le(t,3))}}}function Gl(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n,r),!0)}var kl=Object.freeze({__proto__:null,BoxGeometry:Gt,BoxBufferGeometry:Gt,CircleGeometry:lr,CircleBufferGeometry:lr,ConeGeometry:cr,ConeBufferGeometry:cr,CylinderGeometry:on,CylinderBufferGeometry:on,DodecahedronGeometry:hr,DodecahedronBufferGeometry:hr,EdgesGeometry:ha,ExtrudeGeometry:It,ExtrudeBufferGeometry:It,IcosahedronGeometry:dr,IcosahedronBufferGeometry:dr,LatheGeometry:pr,LatheBufferGeometry:pr,OctahedronGeometry:Sn,OctahedronBufferGeometry:Sn,PlaneGeometry:gn,PlaneBufferGeometry:gn,PolyhedronGeometry:Rt,PolyhedronBufferGeometry:Rt,RingGeometry:fr,RingBufferGeometry:fr,ShapeGeometry:Tn,ShapeBufferGeometry:Tn,SphereGeometry:En,SphereBufferGeometry:En,TetrahedronGeometry:mr,TetrahedronBufferGeometry:mr,TorusGeometry:gr,TorusBufferGeometry:gr,TorusKnotGeometry:vr,TorusKnotBufferGeometry:vr,TubeGeometry:yr,TubeBufferGeometry:yr,WireframeGeometry:Ma});class ba extends ke{constructor(e){super(),this.type="ShadowMaterial",this.color=new re(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}ba.prototype.isShadowMaterial=!0;class os extends ke{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}os.prototype.isMeshStandardMaterial=!0;class wa extends os{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}wa.prototype.isMeshPhysicalMaterial=!0;class Sa extends ke{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Sa.prototype.isMeshPhongMaterial=!0;class Ta extends ke{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ta.prototype.isMeshToonMaterial=!0;class Ea extends ke{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Ea.prototype.isMeshNormalMaterial=!0;class Aa extends ke{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Aa.prototype.isMeshLambertMaterial=!0;class La extends ke{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}La.prototype.isMeshMatcapMaterial=!0;class Ra extends je{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Ra.prototype.isLineDashedMaterial=!0;var Qu=Object.freeze({__proto__:null,ShadowMaterial:ba,SpriteMaterial:Fi,RawShaderMaterial:tr,ShaderMaterial:kt,PointsMaterial:wn,MeshPhysicalMaterial:wa,MeshStandardMaterial:os,MeshPhongMaterial:Sa,MeshToonMaterial:Ta,MeshNormalMaterial:Ea,MeshLambertMaterial:Aa,MeshDepthMaterial:Ni,MeshDistanceMaterial:zi,MeshBasicMaterial:Ht,MeshMatcapMaterial:La,LineDashedMaterial:Ra,LineBasicMaterial:je,Material:ke});const Ie={arraySlice:function(s,e,t){return Ie.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){const e=s.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,r){return s[n]-s[r]}),t},sortedArray:function(s,e,t){const n=s.length,r=new s.constructor(n);for(let i=0,a=0;a!==n;++i){const o=t[i]*e;for(let l=0;l!==e;++l)r[a++]=s[o+l]}return r},flattenJSON:function(s,e,t,n){let r=1,i=s[0];for(;i!==void 0&&i[n]===void 0;)i=s[r++];if(i===void 0)return;let a=i[n];if(a!==void 0)if(Array.isArray(a))do a=i[n],a!==void 0&&(e.push(i.time),t.push.apply(t,a)),i=s[r++];while(i!==void 0);else if(a.toArray!==void 0)do a=i[n],a!==void 0&&(e.push(i.time),a.toArray(t,t.length)),i=s[r++];while(i!==void 0);else do a=i[n],a!==void 0&&(e.push(i.time),t.push(a)),i=s[r++];while(i!==void 0)},subclip:function(s,e,t,n,r=30){const i=s.clone();i.name=e;const a=[];for(let l=0;l<i.tracks.length;++l){const c=i.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){const f=c.times[p]*r;if(!(f<t||f>=n)){u.push(c.times[p]);for(let g=0;g<h;++g)d.push(c.values[p*h+g])}}u.length!==0&&(c.times=Ie.convertArray(u,c.times.constructor),c.values=Ie.convertArray(d,c.values.constructor),a.push(c))}i.tracks=a;let o=1/0;for(let l=0;l<i.tracks.length;++l)o>i.tracks[l].times[0]&&(o=i.tracks[l].times[0]);for(let l=0;l<i.tracks.length;++l)i.tracks[l].shift(-1*o);return i.resetDuration(),i},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const r=t.tracks.length,i=e/n;for(let a=0;a<r;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const f=o.times.length-1;let g;if(i<=o.times[0]){const m=h,_=u-h;g=Ie.arraySlice(o.values,m,_)}else if(i>=o.times[f]){const m=f*u+h,_=m+u-h;g=Ie.arraySlice(o.values,m,_)}else{const m=o.createInterpolant(),_=h,x=u-h;m.evaluate(i),g=Ie.arraySlice(m.resultBuffer,_,x)}l==="quaternion"&&new Ke().fromArray(g).normalize().conjugate().toArray(g);const y=c.times.length;for(let m=0;m<y;++m){const _=m*p+d;if(l==="quaternion")Ke.multiplyQuaternionsFlat(c.values,_,g,0,c.values,_);else{const x=p-2*d;for(let M=0;M<x;++M)c.values[_+M]-=g[M]}}}return s.blendMode=2501,s}};class Wt{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],i=t[n-1];e:{t:{let a;n:{r:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<i)break r;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,i)}if(n===o)break;if(i=r,r=t[++n],e<r)break t}a=t.length;break n}if(e>=i)break e;{const o=t[1];e<o&&(n=2,i=o);for(let l=n-2;;){if(i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=i,i=t[--n-1],e>=i)break t}a=n,n=0}}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,i,e)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let a=0;a!==r;++a)t[a]=n[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Wt.prototype.beforeStart_=Wt.prototype.copySampleValue_,Wt.prototype.afterEnd_=Wt.prototype.copySampleValue_;class Vl extends Wt{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const r=this.parameterPositions;let i=e-2,a=e+1,o=r[i],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:i=e,o=2*t-n;break;case 2402:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=i*h,this._offsetNext=a*h}interpolate_(e,t,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),g=f*f,y=g*f,m=-d*y+2*d*g-d*f,_=(1+d)*y+(-1.5-2*d)*g+(-.5+d)*f+1,x=(-1-p)*y+(1.5+p)*g+.5*f,M=p*y-p*g;for(let w=0;w!==o;++w)i[w]=m*a[h+w]+_*a[c+w]+x*a[l+w]+M*a[u+w];return i}}class Ca extends Wt{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)i[d]=a[c+d]*u+a[l+d]*h;return i}}class Wl extends Wt{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class bt{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ie.convertArray(t,this.TimeBufferType),this.values=Ie.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ie.convertArray(e.times,Array),values:Ie.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);const o=this.getValueSize();this.times=Ie.arraySlice(n,i,a),this.values=Ie.arraySlice(this.values,i*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==i;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ie.isTypedArray(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ie.arraySlice(this.times),t=Ie.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===2302,i=e.length-1;let a=1;for(let o=1;o<i;++o){let l=!1;const c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){const f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(i>0){e[a]=e[i];for(let o=i*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ie.arraySlice(e,0,a),this.values=Ie.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=Ie.arraySlice(this.times,0),t=Ie.arraySlice(this.values,0),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}bt.prototype.TimeBufferType=Float32Array,bt.prototype.ValueBufferType=Float32Array,bt.prototype.DefaultInterpolation=2301;class An extends bt{}An.prototype.ValueTypeName="bool",An.prototype.ValueBufferType=Array,An.prototype.DefaultInterpolation=2300,An.prototype.InterpolantFactoryMethodLinear=void 0,An.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends bt{}Pa.prototype.ValueTypeName="color";class Xr extends bt{}Xr.prototype.ValueTypeName="number";class jl extends Wt{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Ke.slerpFlat(i,0,a,c-o,a,c,l);return i}}class xr extends bt{InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}}xr.prototype.ValueTypeName="quaternion",xr.prototype.DefaultInterpolation=2301,xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ln extends bt{}Ln.prototype.ValueTypeName="string",Ln.prototype.ValueBufferType=Array,Ln.prototype.DefaultInterpolation=2300,Ln.prototype.InterpolantFactoryMethodLinear=void 0,Ln.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends bt{}Yr.prototype.ValueTypeName="vector";class Jr{constructor(e,t=-1,n,r=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=at(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ku(n[a]).scale(r));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,a=n.length;i!==a;++i)t.push(bt.toJSON(n[i]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const i=t.length,a=[];for(let o=0;o<i;o++){let l=[],c=[];l.push((o+i-1)%i,o,(o+1)%i),c.push(0,1,0);const h=Ie.getKeyframeOrder(l);l=Ie.sortedArray(l,1,h),c=Ie.sortedArray(c,1,h),r||l[0]!==0||(l.push(i),c.push(c[0])),a.push(new Xr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(i);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,d,p,f){if(d.length!==0){const g=[],y=[];Ie.flattenJSON(d,g,y,p),g.length!==0&&f.push(new h(u,g,y))}},r=[],i=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(const f in d){const g=[],y=[];for(let m=0;m!==u[p].morphTargets.length;++m){const _=u[p];g.push(_.time),y.push(_.morphTarget===f?1:0)}r.push(new Xr(".morphTargetInfluence["+f+"]",g,y))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(Yr,d+".position",u,"pos",r),n(xr,d+".quaternion",u,"rot",r),n(Yr,d+".scale",u,"scl",r)}}return r.length===0?null:new this(i,l,r,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const r=this.tracks[t];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ku(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return Yr;case"color":return Pa;case"quaternion":return xr;case"bool":case"boolean":return An;case"string":return Ln}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(s.type);if(s.times===void 0){const t=[],n=[];Ie.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Rn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ia{constructor(e,t,n){const r=this;let i,a=!1,o=0,l=0;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return i?i(h):h},this.setURLModifier=function(h){return i=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}}const ql=new Ia;class it{constructor(e){this.manager=e!==void 0?e:ql,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const jt={};class Dt extends it{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Rn.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(jt[e]!==void 0)return void jt[e].push({onLoad:t,onProgress:n,onError:r});jt[e]=[],jt[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(a).then(o=>{if(o.status===200||o.status===0){o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=jt[e],c=o.body.getReader(),h=o.headers.get("Content-Length"),u=h?parseInt(h):0,d=u!==0;let p=0;return new ReadableStream({start(f){(function g(){c.read().then(({done:y,value:m})=>{if(y)f.close();else{p+=m.byteLength;const _=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:u});for(let x=0,M=l.length;x<M;x++){const w=l[x];w.onProgress&&w.onProgress(_)}f.enqueue(m),g()}})})()}})}throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{const l=new Response(o);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(o=>{Rn.add(e,o);const l=jt[e];delete jt[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onLoad&&u.onLoad(o)}this.manager.itemEnd(e)}).catch(o=>{const l=jt[e];delete jt[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onError&&u.onError(o)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zr extends it{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Rn.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o=li("img");function l(){h(),Rn.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(u){h(),r&&r(u),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class Xl extends it{constructor(e){super(e)}load(e,t,n,r){const i=new $n,a=new Zr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){i.images[c]=h,o++,o===6&&(i.needsUpdate=!0,t&&t(i))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return i}}class Yl extends it{constructor(e){super(e)}load(e,t,n,r){const i=this,a=new Mn,o=new Dt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(i.withCredentials),o.load(e,function(l){const c=i.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:1001,a.wrapT=c.wrapT!==void 0?c.wrapT:1001,a.magFilter=c.magFilter!==void 0?c.magFilter:1006,a.minFilter=c.minFilter!==void 0?c.minFilter:1006,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=1008),c.mipmapCount===1&&(a.minFilter=1006),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,r),a}}class Jl extends it{constructor(e){super(e)}load(e,t,n,r){const i=new Ge,a=new Zr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}}class wt extends Me{constructor(e,t=1){super(),this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}wt.prototype.isLight=!0;class Da extends wt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.groundColor=new re(t)}copy(e){return wt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Da.prototype.isHemisphereLight=!0;const Zl=new ce,Ql=new b,Kl=new b;class Na{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ql.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ql),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),Zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $l extends Na{constructor(){super(new We(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=2*Mr*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;n===t.fov&&r===t.aspect&&i===t.far||(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}$l.prototype.isSpotLightShadow=!0;class za extends wt{constructor(e,t,n=0,r=Math.PI/3,i=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.target=new Me,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.shadow=new $l}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}za.prototype.isSpotLight=!0;const ec=new ce,Qr=new b,Ba=new b;class tc extends Na{constructor(){super(new We(90,1,.5,500)),this._frameExtents=new X(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qr),Ba.copy(n.position),Ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ba),n.updateMatrixWorld(),r.makeTranslation(-Qr.x,-Qr.y,-Qr.z),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}tc.prototype.isPointLightShadow=!0;class Fa extends wt{constructor(e,t,n=0,r=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new tc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Fa.prototype.isPointLight=!0;class nc extends Na{constructor(){super(new Rr(-5,5,5,-5,.5,500))}}nc.prototype.isDirectionalLightShadow=!0;class Oa extends wt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Me.DefaultUp),this.updateMatrix(),this.target=new Me,this.shadow=new nc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Oa.prototype.isDirectionalLight=!0;class Ua extends wt{constructor(e,t){super(e,t),this.type="AmbientLight"}}Ua.prototype.isAmbientLight=!0;class Ha extends wt{constructor(e,t,n=10,r=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Ha.prototype.isRectAreaLight=!0;class Ga{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*i),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*r*1.092548),t.addScaledVector(a[5],r*i*1.092548),t.addScaledVector(a[6],.315392*(3*i*i-1)),t.addScaledVector(a[7],n*i*1.092548),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*r),t.addScaledVector(a[2],1.023328*i),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*r),t.addScaledVector(a[5],.858086*r*i),t.addScaledVector(a[6],.743125*i*i-.247708),t.addScaledVector(a[7],.858086*n*i),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+3*r);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+3*r);return e}static getBasisAt(e,t){const n=e.x,r=e.y,i=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*i,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*i,t[6]=.315392*(3*i*i-1),t[7]=1.092548*n*i,t[8]=.546274*(n*n-r*r)}}Ga.prototype.isSphericalHarmonics3=!0;class Kr extends wt{constructor(e=new Ga,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Kr.prototype.isLightProbe=!0;class rc extends it{constructor(e){super(e),this.textures={}}load(e,t,n,r){const i=this,a=new Dt(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(o){try{t(i.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),i.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(i){return t[i]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",i),t[i]}const r=new Qu[e.type];if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.format!==void 0&&(r.format=e.format),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(r.uniforms[i]={},a.type){case"t":r.uniforms[i].value=n(a.value);break;case"c":r.uniforms[i].value=new re().setHex(a.value);break;case"v2":r.uniforms[i].value=new X().fromArray(a.value);break;case"v3":r.uniforms[i].value=new b().fromArray(a.value);break;case"v4":r.uniforms[i].value=new Ae().fromArray(a.value);break;case"m3":r.uniforms[i].value=new He().fromArray(a.value);break;case"m4":r.uniforms[i].value=new ce().fromArray(a.value);break;default:r.uniforms[i].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const i in e.extensions)r.extensions[i]=e.extensions[i];if(e.shading!==void 0&&(r.flatShading=e.shading===1),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),r.normalScale=new X().fromArray(i)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}}class ls{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ka extends fe{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}ka.prototype.isInstancedBufferGeometry=!0;class ic extends it{constructor(e){super(e)}load(e,t,n,r){const i=this,a=new Dt(i.manager);a.setPath(i.path),a.setRequestHeader(i.requestHeader),a.setWithCredentials(i.withCredentials),a.load(e,function(o){try{t(i.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),i.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(u,d){if(t[d]!==void 0)return t[d];const p=u.interleavedBuffers[d],f=function(m,_){if(n[_]!==void 0)return n[_];const x=m.arrayBuffers[_],M=new Uint32Array(x).buffer;return n[_]=M,M}(u,p.buffer),g=Hn(p.type,f),y=new _n(g,p.stride);return y.uuid=p.uuid,t[d]=y,y}const i=e.isInstancedBufferGeometry?new ka:new fe,a=e.data.index;if(a!==void 0){const u=Hn(a.type,a.array);i.setIndex(new we(u,1))}const o=e.data.attributes;for(const u in o){const d=o[u];let p;if(d.isInterleavedBufferAttribute){const f=r(e.data,d.data);p=new an(f,d.itemSize,d.offset,d.normalized)}else{const f=Hn(d.type,d.array);p=new(d.isInstancedBufferAttribute?bn:we)(f,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),d.usage!==void 0&&p.setUsage(d.usage),d.updateRange!==void 0&&(p.updateRange.offset=d.updateRange.offset,p.updateRange.count=d.updateRange.count),i.setAttribute(u,p)}const l=e.data.morphAttributes;if(l)for(const u in l){const d=l[u],p=[];for(let f=0,g=d.length;f<g;f++){const y=d[f];let m;if(y.isInterleavedBufferAttribute){const _=r(e.data,y.data);m=new an(_,y.itemSize,y.offset,y.normalized)}else{const _=Hn(y.type,y.array);m=new we(_,y.itemSize,y.normalized)}y.name!==void 0&&(m.name=y.name),p.push(m)}i.morphAttributes[u]=p}e.data.morphTargetsRelative&&(i.morphTargetsRelative=!0);const c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let u=0,d=c.length;u!==d;++u){const p=c[u];i.addGroup(p.start,p.count,p.materialIndex)}const h=e.data.boundingSphere;if(h!==void 0){const u=new b;h.center!==void 0&&u.fromArray(h.center),i.boundingSphere=new Zt(u,h.radius)}return e.name&&(i.name=e.name),e.userData&&(i.userData=e.userData),i}}const $u={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},sc={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},ac={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};class oc extends it{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Rn.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(l){Rn.add(e,l),t&&t(l),i.manager.itemEnd(e)}).catch(function(l){r&&r(l),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}let cs;oc.prototype.isImageBitmapLoader=!0;const Va={getContext:function(){return cs===void 0&&(cs=new(window.AudioContext||window.webkitAudioContext)),cs},setContext:function(s){cs=s}};class lc extends it{constructor(e){super(e)}load(e,t,n,r){const i=this,a=new Dt(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);Va.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){r?r(l):console.error(l),i.manager.itemError(e)}},n,r)}}class cc extends Kr{constructor(e,t,n=1){super(void 0,n);const r=new re().set(e),i=new re().set(t),a=new b(r.r,r.g,r.b),o=new b(i.r,i.g,i.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}cc.prototype.isHemisphereLightProbe=!0;class hc extends Kr{constructor(e,t=1){super(void 0,t);const n=new re().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}hc.prototype.isAmbientLightProbe=!0;const uc=new ce,dc=new ce;class pc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fc(){return(typeof performance>"u"?Date:performance).now()}const Cn=new b,mc=new Ke,ed=new b,Pn=new b;class Wa extends Me{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const In=new b,gc=new Ke,td=new b,Dn=new b;class vc{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class yc{constructor(e,t,n){let r,i,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,i=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[i+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,i,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let i=n,a=r;i!==a;++i)t[i]=t[r+i%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let a=0;a!==i;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Ke.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){const a=this._workIndex*i;Ke.multiplyQuaternionsFlat(e,a,e,t,e,n),Ke.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){const a=1-r;for(let o=0;o!==i;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const nd="\\[\\]\\.:\\/",rd=new RegExp("[\\[\\]\\.:\\/]","g"),ja="[^\\[\\]\\.:\\/]",id="[^"+nd.replace("\\.","")+"]",sd=/((?:WC+[\/:])*)/.source.replace("WC",ja),ad=/(WCOD+)?/.source.replace("WCOD",id),od=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ja),ld=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ja),cd=new RegExp("^"+sd+ad+od+ld+"$"),hd=["material","materials","bones"];class Te{constructor(e,t,n){this.path=t,this.parsedPath=n||Te.parseTrackName(t),this.node=Te.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Te.Composite(e,t,n):new Te(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rd,"")}static parseTrackName(e){const t=cd.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const i=n.nodeName.substring(r+1);hd.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let a=0;a<i.length;a++){const o=i[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let i=t.propertyIndex;if(e||(e=Te.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.isBufferGeometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=class{constructor(s,e,t){const n=t||Te.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,n)}getValue(s,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(s,e)}setValue(s,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(s,e)}bind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){const s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray],Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xc{constructor(){this.uuid=at(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,i=this._bindings,a=i.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],p=d.uuid;let f=t[p];if(f===void 0){f=l++,t[p]=f,e.push(d);for(let g=0,y=a;g!==y;++g)i[g].push(new Te(d,n[g],r[g]))}else if(f<c){o=e[f];const g=--c,y=e[g];t[y.uuid]=f,e[f]=y,t[p]=g,e[g]=d;for(let m=0,_=a;m!==_;++m){const x=i[m],M=x[g];let w=x[f];x[f]=M,w===void 0&&(w=new Te(d,n[m],r[m])),x[g]=w}}else e[f]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let i=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=i){const u=i++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let p=0,f=r;p!==f;++p){const g=n[p],y=g[u],m=g[h];g[h]=y,g[u]=m}}}this.nCachedObjects_=i}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let i=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o].uuid,h=t[c];if(h!==void 0)if(delete t[c],h<i){const u=--i,d=e[u],p=--a,f=e[p];t[d.uuid]=h,e[h]=d,t[f.uuid]=u,e[u]=f,e.pop();for(let g=0,y=r;g!==y;++g){const m=n[g],_=m[u],x=m[p];m[h]=_,m[u]=x,m.pop()}}else{const u=--a,d=e[u];u>0&&(t[d.uuid]=h),e[h]=d,e.pop();for(let p=0,f=r;p!==f;++p){const g=n[p];g[h]=g[u],g.pop()}}}this.nCachedObjects_=i}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const i=this._bindings;if(r!==void 0)return i[r];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);r=i.length,n[e]=r,a.push(e),o.push(t),i.push(u);for(let d=h,p=l.length;d!==p;++d){const f=l[d];u[d]=new Te(f,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,i=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o];t[e[o]]=n,a[n]=l,a.pop(),i[n]=i[o],i.pop(),r[n]=r[o],r.pop()}}}xc.prototype.isAnimationObjectGroup=!0;class ud{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const i=t.tracks,a=i.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){const h=i[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,i=e._clip.duration,a=i/r,o=r/i;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,i=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=i,l[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled)return void this._updateWeight(e);const i=this._startTime;if(i!==null){const l=(e-i)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(r,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,i=this._loopCount;const a=n===2202;if(e===0)return i===-1?r:a&&(1&i)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else{if(!(r<0)){this.time=r;break e}r=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,i+=Math.abs(o);const l=this.repetitions-i;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(1&i)==1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=2401,r.endingEnd=2401):(r.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,r.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,n){const r=this._mixer,i=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=i,l[0]=t,o[1]=i+e,l[1]=n,this}}class _c extends Xt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==i;++u){const d=r[u],p=d.name;let f=h[p];if(f!==void 0)a[u]=f;else{if(f=a[u],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,l,p));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;f=new yc(Te.create(n,p,g),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,l,p),a[u]=f}o[u].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,i=this._actionsByClip[r];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const i=t[n];i.useCount++==0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const i=t[n];--i.useCount==0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,i=this._actionsByClip;let a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const i=e._clip.uuid,a=this._actionsByClip,o=a[i],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const i=t[n];--i.referenceCount==0&&this._removeInactiveBinding(i)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,i=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ca(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){const r=t||this._root,i=r.uuid;let a=typeof e=="string"?Jr.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(n=a!==null?a.blendMode:2500),l!==void 0){const u=l.actionByRoot[i];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new ud(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,i),h}existingAction(e,t){const n=t||this._root,r=n.uuid,i=typeof e=="string"?Jr.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,i,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){const a=i.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const i in n){const a=n[i].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}const r=this._bindingsByRootAndName[t];if(r!==void 0)for(const i in r){const a=r[i];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}_c.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class hs{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new hs(this.value.clone===void 0?this.value:this.value.clone())}}class Mc extends _n{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}Mc.prototype.isInstancedInterleavedBuffer=!0;class bc{constructor(e,t,n,r,i){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=i,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}bc.prototype.isGLBufferAttribute=!0;function wc(s,e){return s.distance-e.distance}function qa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const r=s.children;for(let i=0,a=r.length;i<a;i++)qa(r[i],e,t,!0)}}const Sc=new X;class _r{constructor(e=new X(1/0,1/0),t=new X(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Sc.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}_r.prototype.isBox2=!0;const Tc=new b,us=new b;class Ec{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Tc.subVectors(e,this.start),us.subVectors(this.end,this.start);const n=us.dot(us);let r=us.dot(Tc)/n;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ac=new b,cn=new b,ds=new ce,Xa=new ce;class Lc extends st{constructor(e){const t=Rc(e),n=new fe,r=[],i=[],a=new re(0,0,1),o=new re(0,1,0);for(let l=0;l<t.length;l++){const c=t[l];c.parent&&c.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(a.r,a.g,a.b),i.push(o.r,o.g,o.b))}n.setAttribute("position",new le(r,3)),n.setAttribute("color",new le(i,3)),super(n,new je({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Xa.copy(this.root.matrixWorld).invert();for(let i=0,a=0;i<t.length;i++){const o=t[i];o.parent&&o.parent.isBone&&(ds.multiplyMatrices(Xa,o.matrixWorld),cn.setFromMatrixPosition(ds),r.setXYZ(a,cn.x,cn.y,cn.z),ds.multiplyMatrices(Xa,o.parent.matrixWorld),cn.setFromMatrixPosition(ds),r.setXYZ(a+1,cn.x,cn.y,cn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Rc(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Rc(s.children[t]));return e}const dd=new b,Cc=new re,Pc=new re;class Ic extends st{constructor(e=10,t=10,n=4473924,r=8947848){n=new re(n),r=new re(r);const i=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,d=0,p=-o;u<=t;u++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const f=u===i?n:r;f.toArray(c,d),d+=3,f.toArray(c,d),d+=3,f.toArray(c,d),d+=3,f.toArray(c,d),d+=3}const h=new fe;h.setAttribute("position",new le(l,3)),h.setAttribute("color",new le(c,3)),super(h,new je({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}}const Dc=new b,ps=new b,Nc=new b,fs=new b,ze=new Ar;function Oe(s,e,t,n,r,i,a){fs.set(r,i,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],fs.x,fs.y,fs.z)}}const ms=new ot;class zc extends st{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),i=new fe;i.setIndex(new we(n,1)),i.setAttribute("position",new we(r,3)),super(i,new je({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ms.setFromObject(this.object),ms.isEmpty())return;const t=ms.min,n=ms.max,r=this.geometry.attributes.position,i=r.array;i[0]=n.x,i[1]=n.y,i[2]=n.z,i[3]=t.x,i[4]=n.y,i[5]=n.z,i[6]=t.x,i[7]=t.y,i[8]=n.z,i[9]=n.x,i[10]=t.y,i[11]=n.z,i[12]=n.x,i[13]=n.y,i[14]=t.z,i[15]=t.x,i[16]=n.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=n.x,i[22]=t.y,i[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return st.prototype.copy.call(this,e),this.object=e.object,this}}const Bc=new b;let gs,Ya;class Fc extends st{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=new fe;n.setAttribute("position",new le(t,3)),n.setAttribute("color",new le([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(n,new je({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,n){const r=new re,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const Oc=new Float32Array(1),pd=new Int32Array(Oc.buffer);ht.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(ht.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s},Vr.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)},Ic.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Lc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")},it.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ls.extractUrlBase(s)},it.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}},_r.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)},_r.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},_r.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},_r.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)},ot.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)},ot.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},ot.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},ot.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},ot.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)},Zt.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Lr.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)},Ec.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)},He.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},He.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},He.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},He.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)},He.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},He.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},ce.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)},ce.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)},ce.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)},ce.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)},ce.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ce.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ce.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)},ce.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ce.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ce.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ce.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ce.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ce.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)},ce.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ce.prototype.makeFrustum=function(s,e,t,n,r,i){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,r,i)},ce.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()},At.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)},Ke.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)},Ke.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},Kt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)},Kt.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)},Kt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)},Be.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},Be.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)},Be.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)},Be.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)},Be.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)},Be.barycoordFromPoint=function(s,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Be.getBarycoord(s,e,t,n,r)},Be.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Be.getNormal(s,e,t,n)},Ct.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)},Ct.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new It(this,s)},Ct.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Tn(this,s)},X.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},X.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},X.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},b.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},b.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},b.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)},b.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)},b.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)},b.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)},b.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},b.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)},b.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Ae.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)},Ae.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Me.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)},Me.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Me.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)},Me.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Me.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(Me.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Ue.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Ue.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Vi.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},We.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)},Object.defineProperties(wt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}}),Object.defineProperties(we.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}}),we.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this},we.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},we.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},fe.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)},fe.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),e&&e.isBufferAttribute||e&&e.isInterleavedBufferAttribute?s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new we(arguments[1],arguments[2])))},fe.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)},fe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},fe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},fe.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)},fe.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)},Object.defineProperties(fe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),_n.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?35048:35044),this},_n.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},It.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},It.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},It.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},Bi.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},hs.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this},Object.defineProperties(ke.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new re}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties(kt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}}),Le.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)},Le.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)},Le.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Le.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Le.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Le.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Le.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Le.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Le.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Le.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Le.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Le.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Le.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Le.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Le.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)},Le.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Le.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Le.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Le.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Le.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Le.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Le.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Le.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Le.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Le.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Le.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(ol.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}}),Object.defineProperties(vt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}}),Wa.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new lc().load(s,function(t){e.setBuffer(t)}),this},vc.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},Ai.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)},Ai.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)},dn.crossOrigin=void 0,dn.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Jl;r.setCrossOrigin(this.crossOrigin);const i=r.load(s,t,void 0,n);return e&&(i.mapping=e),i},dn.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Xl;r.setCrossOrigin(this.crossOrigin);const i=r.load(s,t,void 0,n);return e&&(i.mapping=e),i},dn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},dn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};const fd={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gt}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gt),v.ACESFilmicToneMapping=4,v.AddEquation=100,v.AddOperation=2,v.AdditiveAnimationBlendMode=2501,v.AdditiveBlending=2,v.AlphaFormat=1021,v.AlwaysDepth=1,v.AlwaysStencilFunc=519,v.AmbientLight=Ua,v.AmbientLightProbe=hc,v.AnimationClip=Jr,v.AnimationLoader=class extends it{constructor(s){super(s)}load(s,e,t,n){const r=this,i=new Dt(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(s,function(a){try{e(r.parse(JSON.parse(a)))}catch(o){n?n(o):console.error(o),r.manager.itemError(s)}},t,n)}parse(s){const e=[];for(let t=0;t<s.length;t++){const n=Jr.parse(s[t]);e.push(n)}return e}},v.AnimationMixer=_c,v.AnimationObjectGroup=xc,v.AnimationUtils=Ie,v.ArcCurve=ua,v.ArrayCamera=ta,v.ArrowHelper=class extends Me{constructor(s=new b(0,0,1),e=new b(0,0,0),t=1,n=16776960,r=.2*t,i=.2*r){super(),this.type="ArrowHelper",gs===void 0&&(gs=new fe,gs.setAttribute("position",new le([0,0,0,0,1,0],3)),Ya=new on(0,.5,1,5,1),Ya.translate(0,-.5,0)),this.position.copy(e),this.line=new Vt(gs,new je({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ue(Ya,new Ht({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(s),this.setLength(t,r,i)}setDirection(s){if(s.y>.99999)this.quaternion.set(0,0,0,1);else if(s.y<-.99999)this.quaternion.set(1,0,0,0);else{Bc.set(s.z,0,-s.x).normalize();const e=Math.acos(s.y);this.quaternion.setFromAxisAngle(Bc,e)}}setLength(s,e=.2*s,t=.2*e){this.line.scale.set(1,Math.max(1e-4,s-e),1),this.line.updateMatrix(),this.cone.scale.set(t,e,t),this.cone.position.y=s,this.cone.updateMatrix()}setColor(s){this.line.material.color.set(s),this.cone.material.color.set(s)}copy(s){return super.copy(s,!1),this.line.copy(s.line),this.cone.copy(s.cone),this}},v.Audio=Wa,v.AudioAnalyser=vc,v.AudioContext=Va,v.AudioListener=class extends Me{constructor(){super(),this.type="AudioListener",this.context=Va.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new pc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(s){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=s,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(s){return this.gain.gain.setTargetAtTime(s,this.context.currentTime,.01),this}updateMatrixWorld(s){super.updateMatrixWorld(s);const e=this.context.listener,t=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Cn,mc,ed),Pn.set(0,0,-1).applyQuaternion(mc),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Cn.x,n),e.positionY.linearRampToValueAtTime(Cn.y,n),e.positionZ.linearRampToValueAtTime(Cn.z,n),e.forwardX.linearRampToValueAtTime(Pn.x,n),e.forwardY.linearRampToValueAtTime(Pn.y,n),e.forwardZ.linearRampToValueAtTime(Pn.z,n),e.upX.linearRampToValueAtTime(t.x,n),e.upY.linearRampToValueAtTime(t.y,n),e.upZ.linearRampToValueAtTime(t.z,n)}else e.setPosition(Cn.x,Cn.y,Cn.z),e.setOrientation(Pn.x,Pn.y,Pn.z,t.x,t.y,t.z)}},v.AudioLoader=lc,v.AxesHelper=Fc,v.AxisHelper=function(s){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Fc(s)},v.BackSide=1,v.BasicDepthPacking=3200,v.BasicShadowMap=0,v.BinaryTextureLoader=function(s){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Yl(s)},v.Bone=Wi,v.BooleanKeyframeTrack=An,v.BoundingBoxHelper=function(s,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new zc(s,e)},v.Box2=_r,v.Box3=ot,v.Box3Helper=class extends st{constructor(s,e=16776960){const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new fe;n.setIndex(new we(t,1)),n.setAttribute("position",new le([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(n,new je({color:e,toneMapped:!1})),this.box=s,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(s){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(s))}},v.BoxBufferGeometry=Gt,v.BoxGeometry=Gt,v.BoxHelper=zc,v.BufferAttribute=we,v.BufferGeometry=fe,v.BufferGeometryLoader=ic,v.ByteType=1010,v.Cache=Rn,v.Camera=Ar,v.CameraHelper=class extends st{constructor(s){const e=new fe,t=new je({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],i={},a=new re(16755200),o=new re(16711680),l=new re(43775),c=new re(16777215),h=new re(3355443);function u(p,f,g){d(p,g),d(f,g)}function d(p,f){n.push(0,0,0),r.push(f.r,f.g,f.b),i[p]===void 0&&(i[p]=[]),i[p].push(n.length/3-1)}u("n1","n2",a),u("n2","n4",a),u("n4","n3",a),u("n3","n1",a),u("f1","f2",a),u("f2","f4",a),u("f4","f3",a),u("f3","f1",a),u("n1","f1",a),u("n2","f2",a),u("n3","f3",a),u("n4","f4",a),u("p","n1",o),u("p","n2",o),u("p","n3",o),u("p","n4",o),u("u1","u2",l),u("u2","u3",l),u("u3","u1",l),u("c","t",c),u("p","c",h),u("cn1","cn2",h),u("cn3","cn4",h),u("cf1","cf2",h),u("cf3","cf4",h),e.setAttribute("position",new le(n,3)),e.setAttribute("color",new le(r,3)),super(e,t),this.type="CameraHelper",this.camera=s,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=i,this.update()}update(){const s=this.geometry,e=this.pointMap;ze.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Oe("c",e,s,ze,0,0,-1),Oe("t",e,s,ze,0,0,1),Oe("n1",e,s,ze,-1,-1,-1),Oe("n2",e,s,ze,1,-1,-1),Oe("n3",e,s,ze,-1,1,-1),Oe("n4",e,s,ze,1,1,-1),Oe("f1",e,s,ze,-1,-1,1),Oe("f2",e,s,ze,1,-1,1),Oe("f3",e,s,ze,-1,1,1),Oe("f4",e,s,ze,1,1,1),Oe("u1",e,s,ze,.7,1.1,-1),Oe("u2",e,s,ze,-.7,1.1,-1),Oe("u3",e,s,ze,0,2,-1),Oe("cf1",e,s,ze,-1,0,1),Oe("cf2",e,s,ze,1,0,1),Oe("cf3",e,s,ze,0,-1,1),Oe("cf4",e,s,ze,0,1,1),Oe("cn1",e,s,ze,-1,0,-1),Oe("cn2",e,s,ze,1,0,-1),Oe("cn3",e,s,ze,0,-1,-1),Oe("cn4",e,s,ze,0,1,-1),s.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},v.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")},v.CanvasTexture=Cl,v.CatmullRomCurve3=ga,v.CineonToneMapping=3,v.CircleBufferGeometry=lr,v.CircleGeometry=lr,v.ClampToEdgeWrapping=1001,v.Clock=pc,v.Color=re,v.ColorKeyframeTrack=Pa,v.CompressedTexture=la,v.CompressedTextureLoader=class extends it{constructor(s){super(s)}load(s,e,t,n){const r=this,i=[],a=new la,o=new Dt(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(h){o.load(s[h],function(u){const d=r.parse(u,!0);i[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=1006),a.image=i,a.format=d.format,a.needsUpdate=!0,e&&e(a))},t,n)}if(Array.isArray(s))for(let h=0,u=s.length;h<u;++h)c(h);else o.load(s,function(h){const u=r.parse(h,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){i[p]={mipmaps:[]};for(let f=0;f<u.mipmapCount;f++)i[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+f]),i[p].format=u.format,i[p].width=u.width,i[p].height=u.height}a.image=i}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=1006),a.format=u.format,a.needsUpdate=!0,e&&e(a)},t,n);return a}},v.ConeBufferGeometry=cr,v.ConeGeometry=cr,v.CubeCamera=Ai,v.CubeReflectionMapping=301,v.CubeRefractionMapping=302,v.CubeTexture=$n,v.CubeTextureLoader=Xl,v.CubeUVReflectionMapping=306,v.CubeUVRefractionMapping=307,v.CubicBezierCurve=es,v.CubicBezierCurve3=va,v.CubicInterpolant=Vl,v.CullFaceBack=1,v.CullFaceFront=2,v.CullFaceFrontBack=3,v.CullFaceNone=0,v.Curve=ht,v.CurvePath=Nl,v.CustomBlending=5,v.CustomToneMapping=5,v.CylinderBufferGeometry=on,v.CylinderGeometry=on,v.Cylindrical=class{constructor(s=1,e=0,t=0){return this.radius=s,this.theta=e,this.y=t,this}set(s,e,t){return this.radius=s,this.theta=e,this.y=t,this}copy(s){return this.radius=s.radius,this.theta=s.theta,this.y=s.y,this}setFromVector3(s){return this.setFromCartesianCoords(s.x,s.y,s.z)}setFromCartesianCoords(s,e,t){return this.radius=Math.sqrt(s*s+t*t),this.theta=Math.atan2(s,t),this.y=e,this}clone(){return new this.constructor().copy(this)}},v.DataTexture=Mn,v.DataTexture2DArray=Di,v.DataTexture3D=Ks,v.DataTextureLoader=Yl,v.DataUtils=class{static toHalfFloat(s){s>65504&&(console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."),s=65504),Oc[0]=s;const e=pd[0];let t=e>>16&32768,n=e>>12&2047;const r=e>>23&255;return r<103?t:r>142?(t|=31744,t|=(r==255?0:1)&&8388607&e,t):r<113?(n|=2048,t|=(n>>114-r)+(n>>113-r&1),t):(t|=r-112<<10|n>>1,t+=1&n,t)}},v.DecrementStencilOp=7683,v.DecrementWrapStencilOp=34056,v.DefaultLoadingManager=ql,v.DepthFormat=1026,v.DepthStencilFormat=1027,v.DepthTexture=Pl,v.DirectionalLight=Oa,v.DirectionalLightHelper=class extends Me{constructor(s,e,t){super(),this.light=s,this.light.updateMatrixWorld(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,e===void 0&&(e=1);let n=new fe;n.setAttribute("position",new le([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new je({fog:!1,toneMapped:!1});this.lightPlane=new Vt(n,r),this.add(this.lightPlane),n=new fe,n.setAttribute("position",new le([0,0,0,0,0,1],3)),this.targetLine=new Vt(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Dc.setFromMatrixPosition(this.light.matrixWorld),ps.setFromMatrixPosition(this.light.target.matrixWorld),Nc.subVectors(ps,Dc),this.lightPlane.lookAt(ps),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ps),this.targetLine.scale.z=Nc.length()}},v.DiscreteInterpolant=Wl,v.DodecahedronBufferGeometry=hr,v.DodecahedronGeometry=hr,v.DoubleSide=2,v.DstAlphaFactor=206,v.DstColorFactor=208,v.DynamicBufferAttribute=function(s,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new we(s,e).setUsage(35048)},v.DynamicCopyUsage=35050,v.DynamicDrawUsage=35048,v.DynamicReadUsage=35049,v.EdgesGeometry=ha,v.EdgesHelper=function(s,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new st(new ha(s.geometry),new je({color:e!==void 0?e:16777215}))},v.EllipseCurve=Ur,v.EqualDepth=4,v.EqualStencilFunc=514,v.EquirectangularReflectionMapping=303,v.EquirectangularRefractionMapping=304,v.Euler=mn,v.EventDispatcher=Xt,v.ExtrudeBufferGeometry=It,v.ExtrudeGeometry=It,v.FaceColors=1,v.FileLoader=Dt,v.FlatShading=1,v.Float16BufferAttribute=So,v.Float32Attribute=function(s,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new le(s,e)},v.Float32BufferAttribute=le,v.Float64Attribute=function(s,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new To(s,e)},v.Float64BufferAttribute=To,v.FloatType=1015,v.Fog=Dr,v.FogExp2=Ir,v.Font=function(){console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js")},v.FontLoader=function(){console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js")},v.FrontSide=0,v.Frustum=Lr,v.GLBufferAttribute=bc,v.GLSL1="100",v.GLSL3=_s,v.GammaEncoding=3007,v.GreaterDepth=6,v.GreaterEqualDepth=5,v.GreaterEqualStencilFunc=518,v.GreaterStencilFunc=516,v.GridHelper=Ic,v.Group=xn,v.HalfFloatType=1016,v.HemisphereLight=Da,v.HemisphereLightHelper=class extends Me{constructor(s,e,t){super(),this.light=s,this.light.updateMatrixWorld(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new Sn(e);n.rotateY(.5*Math.PI),this.material=new Ht({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),i=new Float32Array(3*r.count);n.setAttribute("color",new we(i,3)),this.add(new Ue(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const s=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=s.geometry.getAttribute("color");Cc.copy(this.light.color),Pc.copy(this.light.groundColor);for(let t=0,n=e.count;t<n;t++){const r=t<n/2?Cc:Pc;e.setXYZ(t,r.r,r.g,r.b)}e.needsUpdate=!0}s.lookAt(dd.setFromMatrixPosition(this.light.matrixWorld).negate())}},v.HemisphereLightProbe=cc,v.IcosahedronBufferGeometry=dr,v.IcosahedronGeometry=dr,v.ImageBitmapLoader=oc,v.ImageLoader=Zr,v.ImageUtils=dn,v.ImmediateRenderObject=function(){console.error("THREE.ImmediateRenderObject has been removed.")},v.IncrementStencilOp=7682,v.IncrementWrapStencilOp=34055,v.InstancedBufferAttribute=bn,v.InstancedBufferGeometry=ka,v.InstancedInterleavedBuffer=Mc,v.InstancedMesh=ia,v.Int16Attribute=function(s,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new bo(s,e)},v.Int16BufferAttribute=bo,v.Int32Attribute=function(s,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new wo(s,e)},v.Int32BufferAttribute=wo,v.Int8Attribute=function(s,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new xo(s,e)},v.Int8BufferAttribute=xo,v.IntType=1013,v.InterleavedBuffer=_n,v.InterleavedBufferAttribute=an,v.Interpolant=Wt,v.InterpolateDiscrete=2300,v.InterpolateLinear=2301,v.InterpolateSmooth=2302,v.InvertStencilOp=5386,v.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")},v.KeepStencilOp=7680,v.KeyframeTrack=bt,v.LOD=fl,v.LatheBufferGeometry=pr,v.LatheGeometry=pr,v.Layers=Ds,v.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")},v.LessDepth=2,v.LessEqualDepth=3,v.LessEqualStencilFunc=515,v.LessStencilFunc=513,v.Light=wt,v.LightProbe=Kr,v.Line=Vt,v.Line3=Ec,v.LineBasicMaterial=je,v.LineCurve=kr,v.LineCurve3=Dl,v.LineDashedMaterial=Ra,v.LineLoop=aa,v.LinePieces=1,v.LineSegments=st,v.LineStrip=0,v.LinearEncoding=3e3,v.LinearFilter=1006,v.LinearInterpolant=Ca,v.LinearMipMapLinearFilter=1008,v.LinearMipMapNearestFilter=1007,v.LinearMipmapLinearFilter=1008,v.LinearMipmapNearestFilter=1007,v.LinearToneMapping=1,v.Loader=it,v.LoaderUtils=ls,v.LoadingManager=Ia,v.LogLuvEncoding=3003,v.LoopOnce=2200,v.LoopPingPong=2202,v.LoopRepeat=2201,v.LuminanceAlphaFormat=1025,v.LuminanceFormat=1024,v.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},v.Material=ke,v.MaterialLoader=rc,v.Math=ro,v.MathUtils=ro,v.Matrix3=He,v.Matrix4=ce,v.MaxEquation=104,v.Mesh=Ue,v.MeshBasicMaterial=Ht,v.MeshDepthMaterial=Ni,v.MeshDistanceMaterial=zi,v.MeshFaceMaterial=function(s){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),s},v.MeshLambertMaterial=Aa,v.MeshMatcapMaterial=La,v.MeshNormalMaterial=Ea,v.MeshPhongMaterial=Sa,v.MeshPhysicalMaterial=wa,v.MeshStandardMaterial=os,v.MeshToonMaterial=Ta,v.MinEquation=103,v.MirroredRepeatWrapping=1002,v.MixOperation=1,v.MultiMaterial=function(s=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),s.isMultiMaterial=!0,s.materials=s,s.clone=function(){return s.slice()},s},v.MultiplyBlending=4,v.MultiplyOperation=0,v.NearestFilter=1003,v.NearestMipMapLinearFilter=1005,v.NearestMipMapNearestFilter=1004,v.NearestMipmapLinearFilter=1005,v.NearestMipmapNearestFilter=1004,v.NeverDepth=0,v.NeverStencilFunc=512,v.NoBlending=0,v.NoColors=0,v.NoToneMapping=0,v.NormalAnimationBlendMode=2500,v.NormalBlending=1,v.NotEqualDepth=7,v.NotEqualStencilFunc=517,v.NumberKeyframeTrack=Xr,v.Object3D=Me,v.ObjectLoader=class extends it{constructor(s){super(s)}load(s,e,t,n){const r=this,i=this.path===""?ls.extractUrlBase(s):this.path;this.resourcePath=this.resourcePath||i;const a=new Dt(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(s,function(o){let l=null;try{l=JSON.parse(o)}catch(h){return n!==void 0&&n(h),void console.error("THREE:ObjectLoader: Can't parse "+s+".",h.message)}const c=l.metadata;c!==void 0&&c.type!==void 0&&c.type.toLowerCase()!=="geometry"?r.parse(l,e):console.error("THREE.ObjectLoader: Can't load "+s)},t,n)}async loadAsync(s,e){const t=this.path===""?ls.extractUrlBase(s):this.path;this.resourcePath=this.resourcePath||t;const n=new Dt(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);const r=await n.loadAsync(s,e),i=JSON.parse(r),a=i.metadata;if(a===void 0||a.type===void 0||a.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+s);return await this.parseAsync(i)}parse(s,e){const t=this.parseAnimations(s.animations),n=this.parseShapes(s.shapes),r=this.parseGeometries(s.geometries,n),i=this.parseImages(s.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(s.textures,i),o=this.parseMaterials(s.materials,a),l=this.parseObject(s.object,r,o,a,t),c=this.parseSkeletons(s.skeletons,l);if(this.bindSkeletons(l,c),e!==void 0){let h=!1;for(const u in i)if(i[u]instanceof HTMLImageElement){h=!0;break}h===!1&&e(l)}return l}async parseAsync(s){const e=this.parseAnimations(s.animations),t=this.parseShapes(s.shapes),n=this.parseGeometries(s.geometries,t),r=await this.parseImagesAsync(s.images),i=this.parseTextures(s.textures,r),a=this.parseMaterials(s.materials,i),o=this.parseObject(s.object,n,a,i,e),l=this.parseSkeletons(s.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(s){const e={};if(s!==void 0)for(let t=0,n=s.length;t<n;t++){const r=new Ct().fromJSON(s[t]);e[r.uuid]=r}return e}parseSkeletons(s,e){const t={},n={};if(e.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),s!==void 0)for(let r=0,i=s.length;r<i;r++){const a=new ji().fromJSON(s[r],n);t[a.uuid]=a}return t}parseGeometries(s,e){const t={};if(s!==void 0){const n=new ic;for(let r=0,i=s.length;r<i;r++){let a;const o=s[r];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=n.parse(o);break;case"Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");break;default:o.type in kl?a=kl[o.type].fromJSON(o,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),a.isBufferGeometry===!0&&o.userData!==void 0&&(a.userData=o.userData),t[o.uuid]=a}}return t}parseMaterials(s,e){const t={},n={};if(s!==void 0){const r=new rc;r.setTextures(e);for(let i=0,a=s.length;i<a;i++){const o=s[i];if(o.type==="MultiMaterial"){const l=[];for(let c=0;c<o.materials.length;c++){const h=o.materials[c];t[h.uuid]===void 0&&(t[h.uuid]=r.parse(h)),l.push(t[h.uuid])}n[o.uuid]=l}else t[o.uuid]===void 0&&(t[o.uuid]=r.parse(o)),n[o.uuid]=t[o.uuid]}}return n}parseAnimations(s){const e={};if(s!==void 0)for(let t=0;t<s.length;t++){const n=s[t],r=Jr.parse(n);e[r.uuid]=r}return e}parseImages(s,e){const t=this,n={};let r;function i(a){if(typeof a=="string"){const o=a;return function(l){return t.manager.itemStart(l),r.load(l,function(){t.manager.itemEnd(l)},void 0,function(){t.manager.itemError(l),t.manager.itemEnd(l)})}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o)}return a.data?{data:Hn(a.type,a.data),width:a.width,height:a.height}:null}if(s!==void 0&&s.length>0){const a=new Ia(e);r=new Zr(a),r.setCrossOrigin(this.crossOrigin);for(let o=0,l=s.length;o<l;o++){const c=s[o],h=c.url;if(Array.isArray(h)){n[c.uuid]=[];for(let u=0,d=h.length;u<d;u++){const p=i(h[u]);p!==null&&(p instanceof HTMLImageElement?n[c.uuid].push(p):n[c.uuid].push(new Mn(p.data,p.width,p.height)))}}else{const u=i(c.url);u!==null&&(n[c.uuid]=u)}}}return n}async parseImagesAsync(s){const e=this,t={};let n;async function r(i){if(typeof i=="string"){const a=i,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await n.loadAsync(o)}return i.data?{data:Hn(i.type,i.data),width:i.width,height:i.height}:null}if(s!==void 0&&s.length>0){n=new Zr(this.manager),n.setCrossOrigin(this.crossOrigin);for(let i=0,a=s.length;i<a;i++){const o=s[i],l=o.url;if(Array.isArray(l)){t[o.uuid]=[];for(let c=0,h=l.length;c<h;c++){const u=l[c],d=await r(u);d!==null&&(d instanceof HTMLImageElement?t[o.uuid].push(d):t[o.uuid].push(new Mn(d.data,d.width,d.height)))}}else{const c=await r(o.url);c!==null&&(t[o.uuid]=c)}}}return t}parseTextures(s,e){function t(r,i){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),i[r])}const n={};if(s!==void 0)for(let r=0,i=s.length;r<i;r++){const a=s[r];let o;a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const l=e[a.image];Array.isArray(l)?(o=new $n(l),l.length===6&&(o.needsUpdate=!0)):(o=l&&l.data?new Mn(l.data,l.width,l.height):new Ge(l),l&&(o.needsUpdate=!0)),o.uuid=a.uuid,a.name!==void 0&&(o.name=a.name),a.mapping!==void 0&&(o.mapping=t(a.mapping,$u)),a.offset!==void 0&&o.offset.fromArray(a.offset),a.repeat!==void 0&&o.repeat.fromArray(a.repeat),a.center!==void 0&&o.center.fromArray(a.center),a.rotation!==void 0&&(o.rotation=a.rotation),a.wrap!==void 0&&(o.wrapS=t(a.wrap[0],sc),o.wrapT=t(a.wrap[1],sc)),a.format!==void 0&&(o.format=a.format),a.type!==void 0&&(o.type=a.type),a.encoding!==void 0&&(o.encoding=a.encoding),a.minFilter!==void 0&&(o.minFilter=t(a.minFilter,ac)),a.magFilter!==void 0&&(o.magFilter=t(a.magFilter,ac)),a.anisotropy!==void 0&&(o.anisotropy=a.anisotropy),a.flipY!==void 0&&(o.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(o.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(o.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(o.userData=a.userData),n[a.uuid]=o}return n}parseObject(s,e,t,n,r){let i,a,o;function l(u){return e[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),e[u]}function c(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let p=0,f=u.length;p<f;p++){const g=u[p];t[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(t[g])}return d}return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),t[u]}}function h(u){return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),n[u]}switch(s.type){case"Scene":i=new Bi,s.background!==void 0&&(Number.isInteger(s.background)?i.background=new re(s.background):i.background=h(s.background)),s.environment!==void 0&&(i.environment=h(s.environment)),s.fog!==void 0&&(s.fog.type==="Fog"?i.fog=new Dr(s.fog.color,s.fog.near,s.fog.far):s.fog.type==="FogExp2"&&(i.fog=new Ir(s.fog.color,s.fog.density)));break;case"PerspectiveCamera":i=new We(s.fov,s.aspect,s.near,s.far),s.focus!==void 0&&(i.focus=s.focus),s.zoom!==void 0&&(i.zoom=s.zoom),s.filmGauge!==void 0&&(i.filmGauge=s.filmGauge),s.filmOffset!==void 0&&(i.filmOffset=s.filmOffset),s.view!==void 0&&(i.view=Object.assign({},s.view));break;case"OrthographicCamera":i=new Rr(s.left,s.right,s.top,s.bottom,s.near,s.far),s.zoom!==void 0&&(i.zoom=s.zoom),s.view!==void 0&&(i.view=Object.assign({},s.view));break;case"AmbientLight":i=new Ua(s.color,s.intensity);break;case"DirectionalLight":i=new Oa(s.color,s.intensity);break;case"PointLight":i=new Fa(s.color,s.intensity,s.distance,s.decay);break;case"RectAreaLight":i=new Ha(s.color,s.intensity,s.width,s.height);break;case"SpotLight":i=new za(s.color,s.intensity,s.distance,s.angle,s.penumbra,s.decay);break;case"HemisphereLight":i=new Da(s.color,s.groundColor,s.intensity);break;case"LightProbe":i=new Kr().fromJSON(s);break;case"SkinnedMesh":a=l(s.geometry),o=c(s.material),i=new Vi(a,o),s.bindMode!==void 0&&(i.bindMode=s.bindMode),s.bindMatrix!==void 0&&i.bindMatrix.fromArray(s.bindMatrix),s.skeleton!==void 0&&(i.skeleton=s.skeleton);break;case"Mesh":a=l(s.geometry),o=c(s.material),i=new Ue(a,o);break;case"InstancedMesh":a=l(s.geometry),o=c(s.material);const u=s.count,d=s.instanceMatrix,p=s.instanceColor;i=new ia(a,o,u),i.instanceMatrix=new bn(new Float32Array(d.array),16),p!==void 0&&(i.instanceColor=new bn(new Float32Array(p.array),p.itemSize));break;case"LOD":i=new fl;break;case"Line":i=new Vt(l(s.geometry),c(s.material));break;case"LineLoop":i=new aa(l(s.geometry),c(s.material));break;case"LineSegments":i=new st(l(s.geometry),c(s.material));break;case"PointCloud":case"Points":i=new Or(l(s.geometry),c(s.material));break;case"Sprite":i=new Hi(c(s.material));break;case"Group":i=new xn;break;case"Bone":i=new Wi;break;default:i=new Me}if(i.uuid=s.uuid,s.name!==void 0&&(i.name=s.name),s.matrix!==void 0?(i.matrix.fromArray(s.matrix),s.matrixAutoUpdate!==void 0&&(i.matrixAutoUpdate=s.matrixAutoUpdate),i.matrixAutoUpdate&&i.matrix.decompose(i.position,i.quaternion,i.scale)):(s.position!==void 0&&i.position.fromArray(s.position),s.rotation!==void 0&&i.rotation.fromArray(s.rotation),s.quaternion!==void 0&&i.quaternion.fromArray(s.quaternion),s.scale!==void 0&&i.scale.fromArray(s.scale)),s.castShadow!==void 0&&(i.castShadow=s.castShadow),s.receiveShadow!==void 0&&(i.receiveShadow=s.receiveShadow),s.shadow&&(s.shadow.bias!==void 0&&(i.shadow.bias=s.shadow.bias),s.shadow.normalBias!==void 0&&(i.shadow.normalBias=s.shadow.normalBias),s.shadow.radius!==void 0&&(i.shadow.radius=s.shadow.radius),s.shadow.mapSize!==void 0&&i.shadow.mapSize.fromArray(s.shadow.mapSize),s.shadow.camera!==void 0&&(i.shadow.camera=this.parseObject(s.shadow.camera))),s.visible!==void 0&&(i.visible=s.visible),s.frustumCulled!==void 0&&(i.frustumCulled=s.frustumCulled),s.renderOrder!==void 0&&(i.renderOrder=s.renderOrder),s.userData!==void 0&&(i.userData=s.userData),s.layers!==void 0&&(i.layers.mask=s.layers),s.children!==void 0){const u=s.children;for(let d=0;d<u.length;d++)i.add(this.parseObject(u[d],e,t,n,r))}if(s.animations!==void 0){const u=s.animations;for(let d=0;d<u.length;d++){const p=u[d];i.animations.push(r[p])}}if(s.type==="LOD"){s.autoUpdate!==void 0&&(i.autoUpdate=s.autoUpdate);const u=s.levels;for(let d=0;d<u.length;d++){const p=u[d],f=i.getObjectByProperty("uuid",p.object);f!==void 0&&i.addLevel(f,p.distance)}}return i}bindSkeletons(s,e){Object.keys(e).length!==0&&s.traverse(function(t){if(t.isSkinnedMesh===!0&&t.skeleton!==void 0){const n=e[t.skeleton];n===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix)}})}setTexturePath(s){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(s)}},v.ObjectSpaceNormalMap=1,v.OctahedronBufferGeometry=Sn,v.OctahedronGeometry=Sn,v.OneFactor=201,v.OneMinusDstAlphaFactor=207,v.OneMinusDstColorFactor=209,v.OneMinusSrcAlphaFactor=205,v.OneMinusSrcColorFactor=203,v.OrthographicCamera=Rr,v.PCFShadowMap=1,v.PCFSoftShadowMap=2,v.PMREMGenerator=No,v.ParametricGeometry=function(){return console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"),new fe},v.Particle=function(s){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Hi(s)},v.ParticleBasicMaterial=function(s){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new wn(s)},v.ParticleSystem=function(s,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Or(s,e)},v.ParticleSystemMaterial=function(s){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new wn(s)},v.Path=Vr,v.PerspectiveCamera=We,v.Plane=At,v.PlaneBufferGeometry=gn,v.PlaneGeometry=gn,v.PlaneHelper=class extends Vt{constructor(s,e=1,t=16776960){const n=t,r=new fe;r.setAttribute("position",new le([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3)),r.computeBoundingSphere(),super(r,new je({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=s,this.size=e;const i=new fe;i.setAttribute("position",new le([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3)),i.computeBoundingSphere(),this.add(new Ue(i,new Ht({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(s){let e=-this.plane.constant;Math.abs(e)<1e-8&&(e=1e-8),this.scale.set(.5*this.size,.5*this.size,e),this.children[0].material.side=e<0?1:0,this.lookAt(this.plane.normal),super.updateMatrixWorld(s)}},v.PointCloud=function(s,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Or(s,e)},v.PointCloudMaterial=function(s){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new wn(s)},v.PointLight=Fa,v.PointLightHelper=class extends Ue{constructor(s,e,t){super(new En(e,4,2),new Ht({wireframe:!0,fog:!1,toneMapped:!1})),this.light=s,this.light.updateMatrixWorld(),this.color=t,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},v.Points=Or,v.PointsMaterial=wn,v.PolarGridHelper=class extends st{constructor(s=10,e=16,t=8,n=64,r=4473924,i=8947848){r=new re(r),i=new re(i);const a=[],o=[];for(let c=0;c<=e;c++){const h=c/e*(2*Math.PI),u=Math.sin(h)*s,d=Math.cos(h)*s;a.push(0,0,0),a.push(u,0,d);const p=1&c?r:i;o.push(p.r,p.g,p.b),o.push(p.r,p.g,p.b)}for(let c=0;c<=t;c++){const h=1&c?r:i,u=s-s/t*c;for(let d=0;d<n;d++){let p=d/n*(2*Math.PI),f=Math.sin(p)*u,g=Math.cos(p)*u;a.push(f,0,g),o.push(h.r,h.g,h.b),p=(d+1)/n*(2*Math.PI),f=Math.sin(p)*u,g=Math.cos(p)*u,a.push(f,0,g),o.push(h.r,h.g,h.b)}}const l=new fe;l.setAttribute("position",new le(a,3)),l.setAttribute("color",new le(o,3)),super(l,new je({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}},v.PolyhedronBufferGeometry=Rt,v.PolyhedronGeometry=Rt,v.PositionalAudio=class extends Wa{constructor(s){super(s),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(s){return this.panner.refDistance=s,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(s){return this.panner.rolloffFactor=s,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(s){return this.panner.distanceModel=s,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(s){return this.panner.maxDistance=s,this}setDirectionalCone(s,e,t){return this.panner.coneInnerAngle=s,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=t,this}updateMatrixWorld(s){if(super.updateMatrixWorld(s),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(In,gc,td),Dn.set(0,0,1).applyQuaternion(gc);const e=this.panner;if(e.positionX){const t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(In.x,t),e.positionY.linearRampToValueAtTime(In.y,t),e.positionZ.linearRampToValueAtTime(In.z,t),e.orientationX.linearRampToValueAtTime(Dn.x,t),e.orientationY.linearRampToValueAtTime(Dn.y,t),e.orientationZ.linearRampToValueAtTime(Dn.z,t)}else e.setPosition(In.x,In.y,In.z),e.setOrientation(Dn.x,Dn.y,Dn.z)}},v.PropertyBinding=Te,v.PropertyMixer=yc,v.QuadraticBezierCurve=ts,v.QuadraticBezierCurve3=ns,v.Quaternion=Ke,v.QuaternionKeyframeTrack=xr,v.QuaternionLinearInterpolant=jl,v.REVISION=gt,v.RGBADepthPacking=3201,v.RGBAFormat=1023,v.RGBAIntegerFormat=1033,v.RGBA_ASTC_10x10_Format=37819,v.RGBA_ASTC_10x5_Format=37816,v.RGBA_ASTC_10x6_Format=37817,v.RGBA_ASTC_10x8_Format=37818,v.RGBA_ASTC_12x10_Format=37820,v.RGBA_ASTC_12x12_Format=37821,v.RGBA_ASTC_4x4_Format=37808,v.RGBA_ASTC_5x4_Format=37809,v.RGBA_ASTC_5x5_Format=37810,v.RGBA_ASTC_6x5_Format=37811,v.RGBA_ASTC_6x6_Format=37812,v.RGBA_ASTC_8x5_Format=37813,v.RGBA_ASTC_8x6_Format=37814,v.RGBA_ASTC_8x8_Format=37815,v.RGBA_BPTC_Format=36492,v.RGBA_ETC2_EAC_Format=37496,v.RGBA_PVRTC_2BPPV1_Format=35843,v.RGBA_PVRTC_4BPPV1_Format=35842,v.RGBA_S3TC_DXT1_Format=33777,v.RGBA_S3TC_DXT3_Format=33778,v.RGBA_S3TC_DXT5_Format=33779,v.RGBDEncoding=3006,v.RGBEEncoding=3002,v.RGBEFormat=1023,v.RGBFormat=1022,v.RGBIntegerFormat=1032,v.RGBM16Encoding=3005,v.RGBM7Encoding=3004,v.RGB_ETC1_Format=36196,v.RGB_ETC2_Format=37492,v.RGB_PVRTC_2BPPV1_Format=35841,v.RGB_PVRTC_4BPPV1_Format=35840,v.RGB_S3TC_DXT1_Format=33776,v.RGFormat=1030,v.RGIntegerFormat=1031,v.RawShaderMaterial=tr,v.Ray=Kt,v.Raycaster=class{constructor(s,e,t=0,n=1/0){this.ray=new Kt(s,e),this.near=t,this.far=n,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(s,e){this.ray.set(s,e)}setFromCamera(s,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(s.x,s.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(s.x,s.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(s,e=!0,t=[]){return qa(s,this,t,e),t.sort(wc),t}intersectObjects(s,e=!0,t=[]){for(let n=0,r=s.length;n<r;n++)qa(s[n],this,t,e);return t.sort(wc),t}},v.RectAreaLight=Ha,v.RedFormat=1028,v.RedIntegerFormat=1029,v.ReinhardToneMapping=2,v.RepeatWrapping=1e3,v.ReplaceStencilOp=7681,v.ReverseSubtractEquation=102,v.RingBufferGeometry=fr,v.RingGeometry=fr,v.SRGB8_ALPHA8_ASTC_10x10_Format=37851,v.SRGB8_ALPHA8_ASTC_10x5_Format=37848,v.SRGB8_ALPHA8_ASTC_10x6_Format=37849,v.SRGB8_ALPHA8_ASTC_10x8_Format=37850,v.SRGB8_ALPHA8_ASTC_12x10_Format=37852,v.SRGB8_ALPHA8_ASTC_12x12_Format=37853,v.SRGB8_ALPHA8_ASTC_4x4_Format=37840,v.SRGB8_ALPHA8_ASTC_5x4_Format=37841,v.SRGB8_ALPHA8_ASTC_5x5_Format=37842,v.SRGB8_ALPHA8_ASTC_6x5_Format=37843,v.SRGB8_ALPHA8_ASTC_6x6_Format=37844,v.SRGB8_ALPHA8_ASTC_8x5_Format=37845,v.SRGB8_ALPHA8_ASTC_8x6_Format=37846,v.SRGB8_ALPHA8_ASTC_8x8_Format=37847,v.Scene=Bi,v.SceneUtils=fd,v.ShaderChunk=_e,v.ShaderLib=Mt,v.ShaderMaterial=kt,v.ShadowMaterial=ba,v.Shape=Ct,v.ShapeBufferGeometry=Tn,v.ShapeGeometry=Tn,v.ShapePath=class{constructor(){this.type="ShapePath",this.color=new re,this.subPaths=[],this.currentPath=null}moveTo(s,e){return this.currentPath=new Vr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(s,e),this}lineTo(s,e){return this.currentPath.lineTo(s,e),this}quadraticCurveTo(s,e,t,n){return this.currentPath.quadraticCurveTo(s,e,t,n),this}bezierCurveTo(s,e,t,n,r,i){return this.currentPath.bezierCurveTo(s,e,t,n,r,i),this}splineThru(s){return this.currentPath.splineThru(s),this}toShapes(s,e){function t(m){const _=[];for(let x=0,M=m.length;x<M;x++){const w=m[x],T=new Ct;T.curves=w.curves,_.push(T)}return _}function n(m,_){const x=_.length;let M=!1;for(let w=x-1,T=0;T<x;w=T++){let R=_[w],C=_[T],N=C.x-R.x,I=C.y-R.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(R=_[T],N=-N,C=_[w],I=-I),m.y<R.y||m.y>C.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const z=I*(m.x-R.x)-N*(m.y-R.y);if(z===0)return!0;if(z<0)continue;M=!M}}else{if(m.y!==R.y)continue;if(C.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=C.x)return!0}}return M}const r=Pt.isClockWise,i=this.subPaths;if(i.length===0)return[];if(e===!0)return t(i);let a,o,l;const c=[];if(i.length===1)return o=i[0],l=new Ct,l.curves=o.curves,c.push(l),c;let h=!r(i[0].getPoints());h=s?!h:h;const u=[],d=[];let p,f,g=[],y=0;d[y]=void 0,g[y]=[];for(let m=0,_=i.length;m<_;m++)o=i[m],p=o.getPoints(),a=r(p),a=s?!a:a,a?(!h&&d[y]&&y++,d[y]={s:new Ct,p},d[y].s.curves=o.curves,h&&y++,g[y]=[]):g[y].push({h:o,p:p[0]});if(!d[0])return t(i);if(d.length>1){let m=!1;const _=[];for(let x=0,M=d.length;x<M;x++)u[x]=[];for(let x=0,M=d.length;x<M;x++){const w=g[x];for(let T=0;T<w.length;T++){const R=w[T];let C=!0;for(let N=0;N<d.length;N++)n(R.p,d[N].p)&&(x!==N&&_.push({froms:x,tos:N,hole:T}),C?(C=!1,u[N].push(R)):m=!0);C&&u[x].push(R)}}_.length>0&&(m||(g=u))}for(let m=0,_=d.length;m<_;m++){l=d[m].s,c.push(l),f=g[m];for(let x=0,M=f.length;x<M;x++)l.holes.push(f[x].h)}return c}},v.ShapeUtils=Pt,v.ShortType=1011,v.Skeleton=ji,v.SkeletonHelper=Lc,v.SkinnedMesh=Vi,v.SmoothShading=2,v.Sphere=Zt,v.SphereBufferGeometry=En,v.SphereGeometry=En,v.Spherical=class{constructor(s=1,e=0,t=0){return this.radius=s,this.phi=e,this.theta=t,this}set(s,e,t){return this.radius=s,this.phi=e,this.theta=t,this}copy(s){return this.radius=s.radius,this.phi=s.phi,this.theta=s.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(s){return this.setFromCartesianCoords(s.x,s.y,s.z)}setFromCartesianCoords(s,e,t){return this.radius=Math.sqrt(s*s+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(s,t),this.phi=Math.acos(Qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},v.SphericalHarmonics3=Ga,v.SplineCurve=rs,v.SpotLight=za,v.SpotLightHelper=class extends Me{constructor(s,e){super(),this.light=s,this.light.updateMatrixWorld(),this.matrix=s.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;const t=new fe,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let i=0,a=1,o=32;i<o;i++,a++){const l=i/o*Math.PI*2,c=a/o*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}t.setAttribute("position",new le(n,3));const r=new je({fog:!1,toneMapped:!1});this.cone=new st(t,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const s=this.light.distance?this.light.distance:1e3,e=s*Math.tan(this.light.angle);this.cone.scale.set(e,e,s),Ac.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ac),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},v.Sprite=Hi,v.SpriteMaterial=Fi,v.SrcAlphaFactor=204,v.SrcAlphaSaturateFactor=210,v.SrcColorFactor=202,v.StaticCopyUsage=35046,v.StaticDrawUsage=35044,v.StaticReadUsage=35045,v.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new We,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new We,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(s){const e=this._cache;if(e.focus!==s.focus||e.fov!==s.fov||e.aspect!==s.aspect*this.aspect||e.near!==s.near||e.far!==s.far||e.zoom!==s.zoom||e.eyeSep!==this.eyeSep){e.focus=s.focus,e.fov=s.fov,e.aspect=s.aspect*this.aspect,e.near=s.near,e.far=s.far,e.zoom=s.zoom,e.eyeSep=this.eyeSep;const t=s.projectionMatrix.clone(),n=e.eyeSep/2,r=n*e.near/e.focus,i=e.near*Math.tan(un*e.fov*.5)/e.zoom;let a,o;dc.elements[12]=-n,uc.elements[12]=n,a=-i*e.aspect+r,o=i*e.aspect+r,t.elements[0]=2*e.near/(o-a),t.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(t),a=-i*e.aspect-r,o=i*e.aspect-r,t.elements[0]=2*e.near/(o-a),t.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(t)}this.cameraL.matrixWorld.copy(s.matrixWorld).multiply(dc),this.cameraR.matrixWorld.copy(s.matrixWorld).multiply(uc)}},v.StreamCopyUsage=35042,v.StreamDrawUsage=35040,v.StreamReadUsage=35041,v.StringKeyframeTrack=Ln,v.SubtractEquation=101,v.SubtractiveBlending=3,v.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v.TangentSpaceNormalMap=0,v.TetrahedronBufferGeometry=mr,v.TetrahedronGeometry=mr,v.TextGeometry=function(){return console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"),new fe},v.Texture=Ge,v.TextureLoader=Jl,v.TorusBufferGeometry=gr,v.TorusGeometry=gr,v.TorusKnotBufferGeometry=vr,v.TorusKnotGeometry=vr,v.Triangle=Be,v.TriangleFanDrawMode=2,v.TriangleStripDrawMode=1,v.TrianglesDrawMode=0,v.TubeBufferGeometry=yr,v.TubeGeometry=yr,v.UVMapping=300,v.Uint16Attribute=function(s,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new vi(s,e)},v.Uint16BufferAttribute=vi,v.Uint32Attribute=function(s,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new yi(s,e)},v.Uint32BufferAttribute=yi,v.Uint8Attribute=function(s,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new _o(s,e)},v.Uint8BufferAttribute=_o,v.Uint8ClampedAttribute=function(s,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new Mo(s,e)},v.Uint8ClampedBufferAttribute=Mo,v.Uniform=hs,v.UniformsLib=ne,v.UniformsUtils=Ao,v.UnsignedByteType=1009,v.UnsignedInt248Type=1020,v.UnsignedIntType=1014,v.UnsignedShort4444Type=1017,v.UnsignedShort5551Type=1018,v.UnsignedShort565Type=1019,v.UnsignedShortType=1012,v.VSMShadowMap=3,v.Vector2=X,v.Vector3=b,v.Vector4=Ae,v.VectorKeyframeTrack=Yr,v.Vertex=function(s,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new b(s,e,t)},v.VertexColors=2,v.VideoTexture=Rl,v.WebGL1Renderer=cl,v.WebGLCubeRenderTarget=Li,v.WebGLMultipleRenderTargets=ao,v.WebGLMultisampleRenderTarget=Ss,v.WebGLRenderTarget=vt,v.WebGLRenderTargetCube=function(s,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Li(s,t)},v.WebGLRenderer=Le,v.WebGLUtils=ll,v.WireframeGeometry=Ma,v.WireframeHelper=function(s,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new st(new Ma(s.geometry),new je({color:e!==void 0?e:16777215}))},v.WrapAroundEnding=2402,v.XHRLoader=function(s){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Dt(s)},v.ZeroCurvatureEnding=2400,v.ZeroFactor=200,v.ZeroSlopeEnding=2401,v.ZeroStencilOp=0,v.sRGBEncoding=3001,Object.defineProperty(v,"__esModule",{value:!0})})})(eo,eo.exports);var Zc=eo.exports;const Cd=Ad(Zc),Pp=Rd({__proto__:null,default:Cd},[Zc]);export{Pp as t};
