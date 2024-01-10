# commit 북마크

```zsh
# commit
git tag 태그이름

# 특정 commit
git tag 태그이름 해시코드
```

# message 추가하기

```zsh
# a : annotation
git tag 태그이름 해시코드 -am "message"

# message 확인하기
git show 태그이름
```

# repository의 모든 태그 확인

```zsh
git tag
```

# 검색

```zsh
git tag -l "태그이름"
# version 2를 확인하고 싶은 경우 : v2.*
```

# 태그 삭제

```zsh
git tag -d 태그이름
```

## checkout 태그이름을 통해 이동 가능

# branch를 만들면서 태그 추가

```zsh
git checkout -b 브랜치명 태그이름
```

# 특정 태그 push

```zsh
git push origin 태그이름
```

# 모든 태그 push

```zsh
git push origin --tags
```

# 특정 태그 리모트에서 삭제

```zsh
git push origin --delete 태그이름
```
