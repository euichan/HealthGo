!function(){function t(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent&&t.attachEvent("on"+e,n)}function e(t){t=t||window.event;var e=t.target||t.srcElement;if(e&&(e.getAttribute("action")||e.getAttribute("href")))try{if(e.id.options)var n=e.id.options[e.id.selectedIndex];else var n=e.id;var r=n.getAttribute("data-sku")||n.value,i=e.quantity?e.quantity.value:1;window.ShopifyAnalytics.lib.track("Added Product",{currency:window.ShopifyAnalytics.meta.currency,sku:r,quantity:i})}catch(o){console&&console.warn&&console.warn("[shop_events_listener] Error in handleSubmitCartAdd: "+o.message)}}t(window,"load",function(){for(var n=0;n<document.forms.length;n++){var r=document.forms[n].getAttribute("action");r&&r.indexOf("/cart/add")>=0&&t(document.forms[n],"submit",e)}})}(),function(t){"use strict";function e(t){}function n(t){try{switch(t.url){case"/cart/add.js":t.xhr.responseText&&""!=t.xhr.responseText&&r(JSON.parse(t.xhr.responseText));break;case"/cart/change.js":case"/cart/clear.js":case"/cart.js":}}catch(e){console&&console.warn&&console.warn("[shop_events_listener] Error in handleXhrDone: "+e.message)}}function r(t){window.ShopifyAnalytics.lib.track("Added Product",{currency:window.ShopifyAnalytics.meta.currency,id:t.id,quantity:t.quantity,price:t.price/100,name:t.title,sku:t.sku,brand:t.vendor,category:t.product_type})}var i=t.prototype.open,o=t.prototype.send;t.prototype.open=function(t,n,r,o,a){this._url=n,this._method=t,e({method:t,url:n,xhr:this}),i.apply(this,arguments)},t.prototype.send=function(t){function e(){i.readyState==i.DONE&&n({method:s,url:a,body:u,xhr:i}),r&&r()}var r,i=this,a=this._url,s=this._method,u=t;this.addEventListener?this.addEventListener("readystatechange",e,!1):(r=this.onreadystatechange,this.onreadystatechange=e),o.call(this,t)}}(XMLHttpRequest);
