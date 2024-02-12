# API

- 데이터 바로 전달

```java
@GetMapping("hello-string")
@ResponseBody // http의 body에 데이터 삽입
public String helloString(@RequestParam("name") String name) {
    return "hello " + name;
}
```

## JSON 전송

- @ResponseBody 어노테이션 사용 + 객체 반환
- HttpMessageConverter 동작
  - MappingJackson2HttpMessageConverter(객체 ➡️ JSON)
  - StringHttpMessageConverter(단순 문자)

```java
@GetMapping("hello-api")
@ResponseBody
public Hello helloAPi(@RequestParam("name") String name) {
    Hello hello = new Hello();
    hello.setName(name);
    return hello;
}

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
