# merge

```bash
git merge {merge할 branch 이름}
```

# fast-forward merge

- main에서 새로운 branch가 생성된 후 main branch에 변경된 사항이 없다면 포인터만 이동
- history에 merge가 되었다는 기록이 남지 않음

## fast-forward 상황에서 merge commit 남기기

```bash
git merge --no-ff {merge할 branch 이름}
```

# three-way merge

- merge commit 남기면서 commit
- fast-forward가 불가능한 상황
  - main에서 branch가 파생된 후 main에 변경 사항이 있는 경우
- 변동 사항을 모두 합쳐서 merge commit을 만든 후 merge

# merge 취소

```bash
git merge --abort
```

<br />

---

<br />

# confilct

- 다른 branch에서 동일한 파일을 수정한 경우 conflict 발생
- confilct를 해결할 때는 conflict만 해결해야 함!

```bash
# confllict 수정 후
git add {파일 이름}
git merge --continue
```

## merge tool 설정

```bash
[merge]
	tool = vscode
[mergetool "vscode"]
	cmd = code --wait $MERGED
```

```bash
# conflict 발생한 상황에서
git mergetool
```

## conflict 발생시 생기는 .orig 파일 생성하지 않도록하기

```bash
git config --global mergetool.keepBackup false
```
