```zsh
# 파일 하나 staging area로 옮기기
git add 파일명.확장자

# 여러개
git add 파일명.확장자 파일명.확장자 ...

# 특정 확장자
git add *.확장자

# 전부
git add * # directory에 없는 파일은 추가 되지 않음
git add . # directory에 없는(삭제된) 파일도 추가됨
```

## staging area ➡️ working directory

```zsh
git rm --cached <file>...
```

## git rm

```zsh
git rm 파일명.확장자
# 자동으로 staging area에 추가되어서 git add 하지 않아도 됨
```

## git mv

```zsh
git mv 현재파일명.확장자 변경할파일명.확장자
# 자동으로 staging area에 추가
```
