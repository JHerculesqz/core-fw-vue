echo off

echo STEP1.xcopy 1.platform.gis
xcopy %~dp0..\1.platform.gis %~dp0..\1.platform\static\gis\ /s /y

echo STEP2.xcopy 1.platform.topo
xcopy %~dp0..\1.platform.topo %~dp0..\1.platform\static\topo\ /s /y

echo STEP3.xcopy 1.platform.devPanel
xcopy %~dp0..\1.platform.devPanel %~dp0..\1.platform\static\devPanel\ /s /y

pause>null