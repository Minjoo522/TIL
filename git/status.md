```vim
    -v, --verbose         be verbose
    -s, --short           show status concisely " 간단하게 확인
    -b, --branch          show branch information " branch 정보 확인
    --show-stash          show stash information
    --ahead-behind        compute full ahead/behind values
    --porcelain[=<version>]
                          machine-readable output
    --long                show status in long format (default) " 기본 값
    -z, --null            terminate entries with NUL
    -u, --untracked-files[=<mode>]
                          show untracked files, optional modes: all, normal, no. (Default: all)
    --ignored[=<mode>]    show ignored files, optional modes: traditional, matching, no. (Default: traditional)
    --ignore-submodules[=<when>]
                          ignore changes to submodules, optional when: all, dirty, untracked. (Default: all)
    --column[=<style>]    list untracked files in columns
    --no-renames          do not detect renames
    -M, --find-renames[=<n>]
                          detect renames, optionally set similarity index
```

```zsh
❯ git status -s
A  a.txt # staging area에 추가된 정보
AM hello.txt # staging area에 있으면서 working directory에서 수정됨
?? .gitignore # 아직 tracking이 되지 않는 파일
```
