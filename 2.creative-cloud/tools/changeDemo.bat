echo off

echo copy App.vue
copy "%~dp0..\src\AppDemo.vue" "%~dp0..\src\App.vue"

echo copy index.js
copy "%~dp0..\src\router\indexDemo.js" "%~dp0..\src\router\index.js"

echo copy index.html
copy "%~dp0..\indexDemo.html" "%~dp0..\index.html"

pause>null