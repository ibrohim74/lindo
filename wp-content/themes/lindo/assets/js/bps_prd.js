void 0===window.__bpsConf&&(window.__bpsConf={}),void 0===window.__bpsConf.env&&(window.__bpsConf.env="prd");var scriptsToLoad=["bower.js","library.min.js"],bps=bps||function(){return{init:function(t){console.log(this),void 0!==t.env&&"prd"==t.env?this.basePath="https://bps-it.bauligroup.com/screenset/src/prd/":this.basePath=window.location.protocol+"//bps-it.stage.bauligroup.com/screenset/src/stg/",void 0!==t.kiwariUrl&&(this.kiwariUrl=t.kiwariUrl),loadScripts(scriptsToLoad,0)},basePath:this.basePath,kiwariUrl:this.kiwariUrl}}();function loadScript(t,i){var o=document.getElementsByTagName("head")[0],e=document.createElement("script");e.type="text/javascript",e.src=t,document.all&&document.querySelector&&!document.addEventListener?e.onreadystatechange=function(){"loaded"==this.readyState&&i()}:e.onload=i,o.appendChild(e)}function loadScripts(t,i){if(i<t.length){loadScript(bps.basePath+t[i],(function(){loadScripts(t,i+1)}))}else initialize()}bps.init(window.__bpsConf);