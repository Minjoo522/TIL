# API

- 데이터 바로 전달

```java
@GetMapping("hello-string")
@ResponseBody // 🚨 http의 body에 데이터 삽입
public String helloString(@RequestParam("name") String name) {
    return "hello " + name;
}
```

## JSON 전송

- @ResponseBody 어노테이션 사용 + 객체 반환
- HttpMessageConverter 동작
  - 기본 문자 처리 : StringHttpMessageConverter(단순 문자)
  - 기본 객체 처리 : MappingJackson2HttpMessageConverter(객체 ➡️ JSON)

```java
@GetMapping("hello-api")
@ResponseBody
public Hello helloAPi(@RequestParam("name") String name) {
    Hello hello = new Hello();
    hello.setName(name);
    return hello;
}

// getter-setter : 자바 빈 규약, 표준, 프로퍼티 접근 방식
static class Hello {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```
