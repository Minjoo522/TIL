# AOP(Aspect Oriented Programming)

## AOP가 필요한 상황

- 모든 메소드의 호출 시간 측정
- 공통 관심 사항(cross-cutting concern) vs 핵심 관심 사항(core concern)
- 회원 가입 시간, 회원 조회 시간을 측정

## AOP를 사용해서 공통 관심 사항과 핵심 관심 사항을 분리할 수 있다.

```java
@Aspect
public class TimeTraceAop {

    @Around("execution(* hello.hellospring..*(..))") // 타겟팅 - 전부 적용
    public Object execute(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();
        System.out.println("START: " + joinPoint.toString());
        try {
            return joinPoint.proceed(); // 다음 메서드로 진입

        } finally {
            long finish = System.currentTimeMillis();
            long timeMs = finish - start;
            System.out.println("END: " + joinPoint.toString() + " " + timeMs + "ms");
        }
    }
}
```

- AOP 생성 후 스프링 빈으로 등록

```java
// 📁 config
@Bean
public TimeTraceAop timeTraceAop() {
    return new TimeTraceAop();
}
```
