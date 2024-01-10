# 환경 설정 확인

```zsh
git config --list # 터미널에서 설정 확인
git config --global -e # 파일로 열어보기
```

# 환경 설정 파일 에디터에서 열기 설정

```zsh
git config --global core.editor "code"
git config --global core.editor "code --wait" # 에디터에서 파일이 꺼지기 전까지는 다른 명령어 수행 ❌
```

# 사용자 정보 설정

```zsh
git config --global user.name "이름"
git config --global user.email "메일주소"

# 확인
git config user.name
git config user.email
```

# 줄바꿈 문자열 관련 설정

```zsh
# mac
git config --global core.autocrlf input

# windows
git config --global core.autocrlf true
```

# 기타 설정

```
// .gitconfig

[push]
	default = current // 로컬 브랜치 이름 항상 remote와 동일
[pull]
	rebase = true
```
