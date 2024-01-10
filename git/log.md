```zsh
# 로그 확인
git log
# 제일 위에 있는 게 최신 commit
```

# 달라진 내용까지 확인

```zsh
git log --patch
git log -p
```

# 간단하게 한 줄로 보기

- hash code와 commit message 확인 가능

```zsh
git log --oneline
```

# 예전 커밋부터 보기

```zsh
git log --reverse
```

# git log formatting

```zsh
git log --pretty=oneline
git log --pretty=format:"%h %an"
# 해시코드, author name, commit 날짜, message
```

# 어느 브랜치에서 commit 했는지 그래프로 보기

```zsh
git log --graph --all
```

# commit 몇 개만 일부 확인하기

```zsh
git log -숫자
```

# 작성자로 검색하기

```zsh
git log --author="작성자"
```

# 특정 날짜 이전 commit 확인하기

```zsh
git log --before="2023-01-11"
```

# commit title로 검색하기

```zsh
git log --grep="커밋타이틀"
# 커밋 타이틀에 해당 내용이 "포함된" 커밋이 검색됨
```

# source code 내용으로 검색하기

```zsh
git log -S "내용"
git log -S "내용" -p # patch, 더 자세히 보기(diff까지 나옴)
```

# 해당 파일만 보기

```zsh
git log 파일명.확장자
git log -p 파일명.확장자 # 더 자세히 보기
git log -s 파일명.확장자 # 간단하게 보기
```

# head 옮겨서 보기

```zsh
git log HEAD~1
git log HEAD~2
```

# commit 하나만 보기

```zsh
git show 해시코드
# 해당 commit에서 특정 파일만 보기
git show 해시코드:파일
```
