# revert

- 커밋에서 변경했던 내용을 모두 취소
- 취소 커밋 생성됨
- 서버에 이미 업로드가 된 사항이라면 revert를 사용하는 것이 좋음

```bash
git revert <해시코드 or HEAD>
```

## commit 만들지 않고 revert하기

```bash
git revert --no-commit <해시코드 op HEAD>
# staging area에 추가됨
```
