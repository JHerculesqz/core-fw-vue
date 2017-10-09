echo off

echo STEP1.xcopy walle
xcopy %~dp0..\1.platform\src\walle %~dp0..\0.core\src\walle\ /s /y

pause>null