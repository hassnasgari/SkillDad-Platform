@echo off
chcp 65001 >nul
title SkillDad.ir - Local Web Server
cd /d "%~dp0"

echo ================================================================
echo                    SkillDad.ir Launcher
echo ================================================================
echo.
echo [1/2] Opening default browser at http://localhost:8000 ...
start "" http://localhost:8000

echo [2/2] Starting local web server...
echo.
echo Server is running at http://localhost:8000
echo Close this window or press Ctrl+C to stop the server.
echo ================================================================
echo.

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    if exist "server.py" (
        python server.py
    ) else (
        python -m http.server 8000
    )
) else (
    echo [WARNING] Python not found in PATH!
    echo Opening index.html directly as fallback...
    start "" "index.html"
)

pause
