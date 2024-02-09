# interactive rebasing

- 지정한 해시코드부터 뒤의 커밋들까지 rebase
- 서버에 올라가지 않았을 경우에 사용

```bash
git rebase -i <해시코드>

# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message - 메세지 변경
# e, edit <commit> = use commit, but stop for amending - 커밋 그대로, 내용 변경
# s, squash <commit> = use commit, but meld into previous commit - 여러개의 커밋 하나로 묶어줌
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# - sqush와 비슷하지만 메시지 남기지 않음
# x, exec <command> = run command (the rest of the line) using shell - execute, shell 명령어 직접적으로 이용
# b, break = stop here (continue rebase later with 'git rebase --continue') - 멈춤
# d, drop <commit> = remove commit - 해당하는 커밋 제거
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
#         create a merge commit using the original merge commit's
#         message (or the oneline, if no original merge commit was
#         specified); use -c <commit> to reword the commit message
# u, update-ref <ref> = track a placeholder for the <ref> to be updated
#                       to this position in the new commits. The <ref> is
#                       updated at the end of the rebase
```
