# Plink_FE
🔗 창업과 투자를 연결하는 가장 빠른 연결고리, Plink

## 개발 환경 세팅
Node.js 18+를 설치합니다. <br />
터미널을 열고 npm install을 입력하여 패키지를 모두 설치합니다. <br />
npm run dev 명령어로 개발 서버를 실행합니다. <br />

## 🎯 Git Convention
{이모지} {접두사}: [#이슈번호] {작업 내용} 형식으로 작성합니다.
ex) ✨Feat: [#20] 로그인 기능 개발

- 🎉 **Start:** Start New Project [:tada]
- ✨ **Feat:** 새로운 기능을 추가 [:sparkles]
- 🐛 **Fix:** 버그 수정 [:bug]
- 🎨 **Design:** CSS 등 사용자 UI 디자인 변경 [:art]
- ♻️ **Refactor:** 코드 리팩토링 [:recycle]
- 🔧 **Settings:** Changing configuration files [:wrench]
- 🗃️ **Comment:** 필요한 주석 추가 및 변경 [:card_file_box]
- ➕ **Dependency/Plugin:** Add a dependency/plugin [:heavy_plus_sign]
- 📝 **Docs:** 문서 수정 [:memo]
- 🔀 **Merge:** Merge branches [:twisted_rightwards_arrows:]
- 🚀 **Deploy:** Deploying stuff [:rocket]
- 🚚 **Rename:** 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck]
- 🔥 **Remove:** 파일을 삭제하는 작업만 수행한 경우 [:fire]
- ⏪️ **Revert:** 전 버전으로 롤백 [:rewind]

## 🪴 Branch Convention (GitHub Flow)
- `main`: 배포 가능한 브랜치, 항상 배포 가능한 상태를 유지
- `hotfix`: 디버깅 브랜치
- `release`: 배포하기 위한 브랜치
- `dev`: 배포에 적용되기 전 코드들을 테스트해보는 브랜치
- `feature-{이슈번호}-{기능내용}`: 새로운 기능을 개발하는 브랜치
  - 예: `feature-#20-login`

### 브랜치 및 이슈 네이밍 컨벤션 (이슈제목으로 브랜치명을 만들 것이기 때문)
- 소문자 사용: 브랜치 이름은 항상 소문자로 작성한다.
- 하이픈(-) 사용: 단어 사이는 하이픈으로 구분한다.
- 간결성: 브랜치 이름은 간결하면서도 의미를 명확히 전달해야 한다.
- 영문 사용: 가능한 영어로 작성하여 국제적인 협업에 대비한다.
 
### Flow
1️⃣ 이슈 생성 <br/>
2️⃣ dev 최신화 → 이슈에서 **Development-create a branch** 버튼으로 브랜치 생성 <br/>
3️⃣ 기능 개발 → 커밋 & 푸시 <br/>
4️⃣ GitHub에서 PR 생성 (`dev <- 본인 브랜치`) <br/>
5️⃣ 팀장 코드 리뷰 후 본인이 머지 <br/>
6️⃣ 브랜치 삭제(로컬, 원격 둘 다) <br/>
📍 (팀장) <br/>
7️⃣ dev 최신화 <br/>
8️⃣ dev → master 반영 (PR 작성 후 머지) <br/>

**예시**:
```bash
# 새로운 기능 개발
git switch dev
git pull upstream dev
git switch -c 브랜치명 (ex. feature/{issue-number}-{feature-name})
열심히 기능 개발~!

# 작업 완료 후
git add .
gitmoji -c "{이모지} {접두사}: [#이슈번호] {작업 내용}" (깃 컨벤션에 따름)
git push origin 브랜치명
feature-{이슈번호}-{기능몀} → dev 로 Pull Request 생성
코드 리뷰 후 피드백 적용
본인이 PR 머지
git branch -d 브랜치명
git push origin --delete 브랜치명

# 팀장 추가
git switch dev
git pull upstream dev
git add .
gitmoji -c "{이모지} {접두사}: [#이슈번호] {작업 내용}" (해당작업 내용)
git push origin dev
```
