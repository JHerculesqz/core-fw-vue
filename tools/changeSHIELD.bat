echo off

echo copy App.vue
copy "%~dp0..\src\AppSHIELD.vue" "%~dp0..\src\App.vue"

echo copy index.js
copy "%~dp0..\src\router\indexSHIELD.js" "%~dp0..\src\router\index.js"

pause>null