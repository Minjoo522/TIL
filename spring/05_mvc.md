# MVC & 템플릿 엔진

- MVC : Model, View, Controller
- Controller나 Model은 비즈니스 로직에 집중

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

- 화면을 그리는 데 집중

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
