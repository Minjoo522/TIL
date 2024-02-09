## add하지 않은(staging area에 있는) 변경사항 취소

```bash
(use "git restore <file>..." to discard changes in working directory)
```

## working directory로 옮겨오기

```bash
(use "git restore --staged <file>..." to unstage)
```

## reset

- 내가 가고자하는 포인터로 가르키기

```bash
git reset HEAD .
```

## 특정 커밋에서 특정 파일 되돌리기

```bash
git restore --source=HEAD~2 <file명>
```

## 커밋 메시지 변경

```bash
git commit --amend -m "변경할 메시지"
```

## 최신 커밋 수정하기(내용)

- 서버에 업로드 되지 않았을 때

```bash
git show HEAD
```

## clean

- add하지 않은 새로 추가한 파일 삭제하기

```bash
git clean -fd
# force directory
```
