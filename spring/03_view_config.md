# view 환경 설정

- `main/resources/static`에 `index.html` 파일 생성 : 제일 기본 페이지(Welcome page)로 설정됨(정적 페이지)

## thymeleaf 템플릿 엔진

```java
package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {
    @GetMapping("hello")
    public String hello(Model model) {
        model.addAttribute("data", "hello!!");
        // (name: 템플릿에서 사용할 이름, value: 값)
        return "hello"; // 사용할 html 템플릿 파일 명
    }
}
```

```html
<!DOCTYPE html>
<!--타임리프 템플릿 사용-->
<html xmlns:th="http://www.thymeleaf.org">
  <head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    <p th:text="'안녕하세요. ' + ${data}">안녕하세요. 손님</p>
  </body>
</html>
```

1. 웹 브라우저에서 실행
2. 톰캣 내장 서버를 통해 매칭되는 mapping(GetMapping ...) 찾고 실행
   - spring이 model을 만들어서 메서드에 넣어줌
   - model에 필요한 attribute 넣음
3. resource에서 return 값과 매칭되는 html 파일을 찾아서 렌더링
   - 컨트롤러에서 리턴 값으로 문자 반환 ➡️ viewResolver가 화면 찾아 처리
   - `resources:templates/` + {ViewName} + `.html`
