# 크립토랩 과제 테스트

## 실행 전 필수 확인 사항

1. **Node.js 버전 확인**: `Node.js` 버전이 `18.12.0` 이상인지 확인합니다.
2. **Extension 설치**: Visual Studio Code의 Extension에서 `zipFS`를 설치합니다.

## 프로젝트 실행 방법

1. 저장소 클론: `git clone https://github.com/GeonwooShin/programming-test.git`
2. 프로젝트 루트 폴더에 `.env` 파일을 추가하여 메일에 첨부된 내용을 복사하여 붙여넣습니다.
3. 의존성 설치: `yarn install`
4. VSCode SDK 설치: `yarn dlx @yarnpkg/sdks vscode`
5. TypeScript 버전 설정: 아무 TypeScript 파일에 들어가서 `cmd + shift + p`를 눌러서 명령 팔레트를 열고 "typescript"를 검색합니다. 그리고 "select typescript version"을 선택하여 `Use Workspace Version` 버전을 선택합니다.
6. 프로젝트 실행: `yarn dev`
