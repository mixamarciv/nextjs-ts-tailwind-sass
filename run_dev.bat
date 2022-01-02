::получаем curpath:
SET thisBatPath=%~dp0
SET thisBatDisk=%thisBatPath:~0,2%

CALL %thisBatPath%\..\set_env.bat

@TITLE clientApp

@CLS


:: переходим в текущий каталог с большой буквы (нужно для нормальной сборки nextjs) 
@C:
@CD %thisBatPath%
@%thisBatDisk%

@echo run command to start: 
@echo npm run dev
@echo .
@cmd
