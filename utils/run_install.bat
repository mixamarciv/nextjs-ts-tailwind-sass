::получаем curpath:
SET thisBatPath=%~dp0
SET thisBatDisk=%thisBatPath:~0,2%

CALL %thisBatPath%\..\..\set_env.bat

@TITLE install utils

@CLS

@CD %thisBatPath%
@%thisBatDisk%

git clone https://github.com/mixamarciv/myJsUtils.git
git clone https://github.com/mixamarciv/myNodeJsUtils.git
cd ..
npm install @types/crypto-js crypto-js dayjs nanoid
npm install @types/express @types/node @types/pg express html-entities node-html-parser pg


cmd
