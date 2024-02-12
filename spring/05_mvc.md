# MVC & 템플릿 엔진

## Controller

```java
@GetMapping("hello-mvc")
public String helloMvc(@RequestParam("name") String name, Model model) {
    model.addAttribute("name", name);
    return "hello-template";
}
```

- @RequestParam : ?name= 파라미터 전달 받음
- model에 담으면 view에서 렌더링할 때 사용

## View

```html
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <p th:text="'hello ' + ${name}">hello! empty</p>
    <!-- hello! empty : 서버 없이 동작할 때 출력됨 -->
  </body>
</html>
```
