# 수정된 내용 확인

## working directory에 있는 것만 확인

```zsh
git diff
```

```vim
diff --git a/hello.txt b/hello.txt
" a/이전 버전  b/지금 버전
index ce01362..317e967 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1,2 @@
" -이전 버전  +지금 버전(첫 번째 줄에서 두 번째 줄까지 확인)
 hello
+hello
" +추가  -삭제
```

## staging area에 있는 것도 확인

```zsh
# 둘 다 동일
git diff --staged
git diff --cached
```

```vim
❯ git status -s
A  a.txt
A  b.txt
A  c.txt
?? .gitignore
❯ echo hello > hello.txt
❯ git add hello.txt
diff --git a/a.txt b/a.txt
new file mode 100644
index 0000000..80a3f13
--- /dev/null
+++ b/a.txt
@@ -0,0 +1,2 @@
+hello world!
+ellie
diff --git a/b.txt b/b.txt
new file mode 100644
index 0000000..a042389
--- /dev/null
+++ b/b.txt
@@ -0,0 +1 @@
+hello world!
diff --git a/c.txt b/c.txt
new file mode 100644
index 0000000..a042389
--- /dev/null
+++ b/c.txt
@@ -0,0 +1 @@
+hello world!
diff --git a/hello.txt b/hello.txt
new file mode 100644
```

## editor 설정하기

```
// .gitignore

[diff]
	tool = vscode
[difftool "vscode"]
	cmd = code --wait --diff $LOCAL $REMOTE
```

```zsh
git difftool
```

## 두 개의 commit 비교하기

```zsh
git diff 해시코드1 해시코드2

# 두 커밋의 특정파일만 비교하기
git diff 해시코드1 해시코드2 파일명.확장자
```
