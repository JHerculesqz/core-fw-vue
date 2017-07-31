echo off

echo xcopy package.json
xcopy %~dp0..\1.platform\package.json %~dp0..\2.creative-cloud\package.json /y /i
xcopy %~dp0..\1.platform\package.json %~dp0..\2.creative-cloud-ins\package.json /y /i

echo xcopy index.html
xcopy %~dp0..\1.platform\index.html %~dp0..\2.creative-cloud\index.html /y /i
xcopy %~dp0..\1.platform\index.html %~dp0..\2.creative-cloud-ins\index.html /y /i

echo xcopy static
xcopy %~dp0..\1.platform\static %~dp0..\2.creative-cloud\static\ /s /y
xcopy %~dp0..\1.platform\static %~dp0..\2.creative-cloud-ins\static\ /s /y 

echo xcopy walle
xcopy %~dp0..\1.platform\src\walle %~dp0..\2.creative-cloud\src\walle\ /s /y
xcopy %~dp0..\1.platform\src\walle %~dp0..\2.creative-cloud-ins\src\walle\ /s /y 

pause>null