echo off

echo xcopy package.json
xcopy %~dp0..\1.platform\package.json %~dp0..\2.shield\package.json /y /i
xcopy %~dp0..\1.platform\package.json %~dp0..\2.shield-ins\package.json /y /i

echo xcopy index.html
xcopy %~dp0..\1.platform\index.html %~dp0..\2.shield\index.html /y /i
xcopy %~dp0..\1.platform\index.html %~dp0..\2.shield-ins\index.html /y /i

echo xcopy static
xcopy %~dp0..\1.platform\static %~dp0..\2.shield\static\ /s /y
xcopy %~dp0..\1.platform\static %~dp0..\2.shield-ins\static\ /s /y 

echo xcopy walle
xcopy %~dp0..\1.platform\src\walle %~dp0..\2.shield\src\walle\ /s /y
xcopy %~dp0..\1.platform\src\walle %~dp0..\2.shield-ins\src\walle\ /s /y 

pause>null