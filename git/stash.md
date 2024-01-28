# stash

- 작업 중인 내용을 잠시 저장해 둘 수 있음

```bash
git stash # git stash push와 동일
git stash push -m "{message}"
```

## 파일 유지하면서 stash `--keep-index`

```bash
git stash push -m "{message}" --keep-index
```

## tracking되지 않는 파일도 stash

```bash
git stash -u
```

## stash한 list 확인하기

```bash
git stash list
```

## stash 내용 확인하기

```bash
git stash show stash@{번호}
git stash show stash@{번호} -p # 더 자세하게 확인 가능
```

## stash한 파일 다시 불러오기 `apply`

- list에서 목록 유지 됨

```bash
git stash apply # 제일 나중에 stash한 파일이 불러와짐
git stash apply stash@{번호} # 해당하는 내역이 불러와짐
```

## stash한 파일 다시 불러오면서 list에서 없애기 `pop`

```bash
git stash pop
```

## stash한 목록 지우기

```bash
git stash drop stash@{번호} # 하나만
git stash clear # 전부 다
```

## stash한 내용을 적용하면서 새로운 branch 만들기

```bash
git stash branch {새로운 branch 이름}
```
