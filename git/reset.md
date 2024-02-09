# reset

## 커밋 취소(mixed)

- head 바꿔주기
- 작업하던 내용은 `working directory`에 남아 있음

```bash
git reset HEAD~2
# git reset --mixed와 동일함
# history에서 commit 삭제 되지만 작업하던 내용들은 working directory로 옮겨짐
```

## staging area로 취소(soft)

```bash
git reset --soft HEAD~1
```

## 작업하던 내용 완전 삭제(hard)

```bash
git reset --hard HEAD
```

## 다시 예전으로 돌아가기

- git reflog
- 이전 히스토리를 기억하고 있음
- 커밋이 된 상태에서만 가능

```bash
git reflog
git reset --hard <reflog를 통해 찾은 해시코드>
```
