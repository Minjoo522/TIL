# branch

- 기본 branch : main
- 기능, 버그, fix 등 다수의 branch 생성하여 작업 ➡️ 병렬적으로 작업 가능
- main에 merge가 완료된 branch는 삭제

## branch 목록 보기

```bash
git branch # 내 컴퓨터 only
git branch --all # 서버에 있는 모든 branch 목록
```

## branch 새로 만들기

- 만들어지기만하고 이동은 하지 않음

```bash
git branch {branch 이름}
```

## 새로 만든 branch로 이동하기

```bash
git switch {branch 이름}
```

## branch 새로 만듦과 동시에 이동

```bash
git switch -C {branch 이동}
```

## branch의 간단한 최신 commit 정보까지 확인하기

```bash
git branch -v
```

## 현재 branch에 merge된 merge안 된 branch들 확인하기

```bash
# merge된 branch
git branch --merged

# merge안 된 branch
git branch --no-merged
```

## branch 삭제하기

```bash
git branch -d {branch 이름}

# 원격에도 삭제
git push origin --delete {branch 이름}
```

## branch 명 변경하기

```bash
git branch --move {원래 branch 이름} {변경할 이름}

# 원격에도 업데이트
git push --set-upstream origin {변경한 branch 이름}
```

## 두 브랜치 사이의 commit만 확인하기

- {branch1 이름}..{branch2 이름} 이 방식은 diff 등에서도 이용 가능

```bash
git log {branch1 이름}..{branch2 이름}
```

## `checkout`

- switch와 비슷

### 특정 커밋으로 HEAD 이동

```bash
git checkout {commit hash}
```

### 특정 branch로 HEAD 이동

```bash
git checkout {branch 이름}
```

### branch 새로 만듦과 동시에 이동

```bash
git checkout -b {branch 이름}
```
