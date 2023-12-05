# gulp

## Initial Setup

1. node.js 설치 : [node.js]https://nodejs.org/en/download/
2. gulp-cli 터미널 설치 : npm install -g gulp-cli

- 회사 방화벽 / 프록시 인증서 오류
  npm config set strict-ssl false

3. package.json(node module) 터미널 설치 : npm install
4. gulpfile.js 작업환경 터널 실행 : gulp dev

- "src폴더"는 작업용폴더 이고 'bulid'는 배포폴더입니다.
- (\*용량이 큰 관계로 원본 파일은 https://github.com/abbeyroad-2022/abbeyroad 에 넣었습니다. )

## local (작업자 서버)

- `gulp dev`
- http://localhost:8000/

## deploy (gh page 적용)

- `gulp deploy`
- https://abbeyroad-2022.github.io/abbeyroad-renew/index.html

## git (작업완료 후 git push)

- https://github.com/abbeyroad-2022/abbeyroad-renew
