!function(){var t;document.getElementById("startButton").addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3),this.disabled=!0,document.getElementById("stopButton").disabled=!1})),document.getElementById("stopButton").addEventListener("click",(function(){clearInterval(t),this.disabled=!0,document.getElementById("startButton").disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.722ad876.js.map