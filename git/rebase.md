# rebase

- merge commit 생기지 않도록 fast-foward 가능하도록 만들 때
- commit이 비슷해 보이지만 새로 만들어지는 것
  - 이미 서버에 commit이 올라가 있는 상황이라면 조심해야 함

```bash
# merge할 branch에서
git rebase main
```

## rebase --onto

- 브랜치들을 체이닝해서 만드는 경우

```bash
# main
# feature-a(main에서 파생)
# feature-a-1(feature-a에서 파생)
git rebase --onto main feature-a feature-a-1
```
