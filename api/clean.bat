@echo off
taskkill /F /IM node.exe /T
timeout /t 2 /nobreak
rmdir /s /q "src\generated"
echo Folder deleted.
