@echo off
chcp 65001 > nul
title سرور محلی وب‌سایت اسکیل‌دد (SkillDad Local Server)
color 0b
echo ========================================================
echo   🚀 در حال راه‌اندازی سرور محلی وب‌سایت اسکیل‌دد...
echo   🌐 آدرس: http://localhost:8080
echo ========================================================
echo.
start http://localhost:8080
python serve_local.py
pause
