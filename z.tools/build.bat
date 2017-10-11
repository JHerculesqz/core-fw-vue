echo off

echo STEP1.xcopy walle.gis
xcopy %~dp0..\1.platform.gis %~dp0..\1.platform\static\gis\ /s /y

pause>null