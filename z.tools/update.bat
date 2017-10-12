echo off

echo STEP1.xcopy walle
xcopy %~dp0..\1.platform\static %~dp0..\1.platformEx\static\ /s /y

pause>null