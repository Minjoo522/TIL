# git command

> https://git-scm.com/docs

- **git init** : 저장소 생성하기
- **git clone <github 주소>** : 원격 git 저장소 복제
- **git add 파일명** : 작업 디렉토리(working directory) 상의 변경 내용을 스테이징 영역(staging area)에 특정 파일 추가
- **git add .** : 모든 파일 add
- **git commit -m "\<commit description>"** : commit
- **git push** : push
- **git status** : 깃 상태 확인
- **git log** : 깃 히스토리 조회
- **git pull** : 원격 저장소에서 로컬 저장소로 가져옴
- **git branch <브랜치 이름>** : 브랜치 생성하기
- **git checkout <브랜치 이름>** : 브랜치 없는 경우 생성과 동시에 이동, 있는 경우 이동
- **git switch <브랜치 이름>** : 브랜치 이동
- **git merge <브랜치 이름>** : 브랜치 병합
- **git seset <커밋 해시 값>** : 특정 커밋으로 돌아가기
  - 바로 이전 상황 : HEAD^
  - 여러 개 전 상황 : HEAD~2
- **git revert <커밋 해시 값>** : 특정 커밋 취소하기
- **git branch -d <브랜치 이름>** : 로컬 저장소에서 브랜치 삭제
- **git push origin --delete <브랜치 이름>** : 원격 저장소에서 브랜치 삭제

# git 초기화

```zsh
git init
```

# git 삭제

```zsh
rm -rf .git
```

# 단축어 생성

```zsh
git config --global alias.사용하고싶은단축어 원래명령어
```

# 명령어 속성값 확인

```zsh
git 명령어 --h
```
