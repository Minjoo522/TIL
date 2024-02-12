# build

## gradle

- 터미널 `./gradlew build`

```bash
❯ cd build
❯ cd libs
❯ ls -arlth
total 41528
-rw-r--r--@  1 minjoo  staff    20M Feb 12 21:51 hello-spring-0.0.1-SNAPSHOT.jar
drwxr-xr-x@  4 minjoo  staff   128B Feb 12 21:51 .
-rw-r--r--@  1 minjoo  staff   2.7K Feb 12 21:51 hello-spring-0.0.1-SNAPSHOT-plain.jar
drwxr-xr-x@ 10 minjoo  staff   320B Feb 12 21:52 ..
❯ java -jar hello-spring-0.0.1-SNAPSHOT.jar
```

## 서버 배포시

- `jar` 파일만 복사해서 서버에 넣어두고 실행해주면 됨

## 빌드 폴더 없애기

- `./gradlew clean`
