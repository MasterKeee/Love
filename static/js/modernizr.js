window.Modernizr=function(F,H,J){function ah(b){T.cssText=b}function ai(c,d){return ah(prefixes.join(c+";")+(d||""))}function aj(c,d){return typeof c===d}function G(c,d){return !!~(""+c).indexOf(d)}function I(c,f){for(var g in c){var h=c[g];if(!G(h,"-")&&T[h]!==J){return f=="pfx"?h:!0}}return !1}function K(c,g,h){for(var i in c){var j=g[c[i]];if(j!==J){return h===!1?c[i]:aj(j,"function")?j.bind(h||g):j}}return !1}function M(f,g,h){var i=f.charAt(0).toUpperCase()+f.slice(1),j=(f+" "+X.join(i+" ")+i).split(" ");return aj(g,"string")||aj(g,"undefined")?I(j,g):(j=(f+" "+Y.join(i+" ")+i).split(" "),K(j,g,h))}var L="2.7.1",N={},P=!0,Q=H.documentElement,R="modernizr",S=H.createElement(R),T=S.style,U,V={}.toString,W="Webkit Moz O ms",X=W.split(" "),Y=W.toLowerCase().split(" "),Z={},aa={},ab={},ac=[],ad=ac.slice,ae,af={}.hasOwnProperty,ag;!aj(af,"undefined")&&!aj(af.call,"undefined")?ag=function(c,d){return af.call(c,d)}:ag=function(c,d){return d in c&&aj(c.constructor.prototype[d],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(a){var f=this;if(typeof f!="function"){throw new TypeError}var g=ad.call(arguments,1),h=function(){if(this instanceof h){var b=function(){};b.prototype=f.prototype;var c=new b,d=f.apply(c,g.concat(ad.call(arguments)));return Object(d)===d?d:c}return f.apply(a,g.concat(ad.call(arguments)))};return h}),Z.backgroundsize=function(){return M("backgroundSize")},Z.cssanimations=function(){return M("animationName")},Z.csstransitions=function(){return M("transition")};for(var O in Z){ag(Z,O)&&(ae=O.toLowerCase(),N[ae]=Z[O](),ac.push((N[ae]?"":"no-")+ae))}return N.addTest=function(c,e){if(typeof c=="object"){for(var f in c){ag(c,f)&&N.addTest(f,c[f])}}else{c=c.toLowerCase();if(N[c]!==J){return N}e=typeof e=="function"?e():e,typeof P!="undefined"&&P&&(Q.className+=" "+(e?"":"no-")+c),N[c]=e}return N},ah(""),S=U=null,N._version=L,N._domPrefixes=Y,N._cssomPrefixes=X,N.testProp=function(b){return I([b])},N.testAllProps=M,Q.className=Q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(P?" js "+ac.join(" "):""),N}(this,this.document);