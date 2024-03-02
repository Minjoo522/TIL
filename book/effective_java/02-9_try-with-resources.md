## try-finally보다는 try-with-resources를 사용하라

- 전통적으로 자원이 제대로 닫힘을 보장하는 수단으로 `try-finally`가 쓰였다
  - 자원이 둘 이상이면 `try-finally` 방식은 너무 지저분하다

```java
static void copy(String src, String dst) throws IOException {
    InputStream in = new FileInputStream(src);
    try {
        OutputStream out = new FileOutputStream(dst);
        try {
            byte[] buf = new byte[BUFFER_SIZE];
            int n;
            while ((n = in.read(buf)) >= 0) {
                out.write(buf, 0, n);
            }
        } finally {
            out.close();
        }
    } finally {
        in.close();
    }
}
```

### try-with-resources

- 자원이 `AutoCloseable` 인터페이스를 구현해야 함
  - void를 반환하는 close 메서드 하나만 덩그러니 정의한 인터페이스
- 코드가 더 짧고 분명해지고, 만들어지는 예외 정보도 훨씬 유용하다

```java
static void copy(String src, String dst) throws IOException {
    try (InputStream in = new FileInputStream(src);
         OutputStream out = new FileOutputStream(dst)) {
        byte[] buf = new byte[BUFFER_SIZE];
        int n;
        while ((n = in.read(buf)) >= 0) {
            out.write(buf, 0, n);
        }
    }
}
```

- `catch` 절도 사용 가능

```java
static String firstLineOfFile(String path, String defaultValue) {
    try (BufferedReader br = new BufferedReader(new FileReader(path))) {
        return br.readLine();
    } catch (IOException e) {
        return defaultValue;
    }
}
```
