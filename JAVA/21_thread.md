# 스레드

- 프로세스 : 실행 중인 하나의 에플리케이션
  - 애플리케이션 실행 ➡️ 실행에 필요한 메모리 할당 ➡️ 애플리케이션 코드 실행
  - 하나의 애플리케이션은 멀티 프로세스를 만들기도 함
  - 멀티 프로세스 : 각 프로세스는 서로 독립적 / 하나의 프로세스에서 오류가 발생해도 다른 프로세스에 영향을 미치지 않음
- 스레드 : 프로세스 내부에서 코드의 실행 흐름 / 한 가지 작업을 실행하기 위해 순차적으로 시랭할 코드를 실처럼 이어놓았다.

## 멀티 스레드

- 하나의 프로세스가 두 가지 이상의 작업을 처리
- 한 프로세스 내에 스레드가 2개 == 2개의 코드 실행 흐름이 생긴다
- 하나의 스레드가 예외를 발생 ➡️ 프로세스 자체가 종료될 수 있음

## 메인 스레드

- main() 메소드의 첫 코드부터 아래로 순차적으로 실행
- 종료 : main() 메소드의 마지막 코드 실행 / return문
- 멀티 스레드 애플리케이션 : 실행 중인 스레드가 있다면 프로세스는 종료되지 않음

## 작업 스레드

- 작업 스레드도 객체로 생성 : 클래스 필요
  - java.lang.Thread 클래스 객체화
  - Thread 클래스 상속받는 하위 클래스 생성
- start() 메소드 호출해야 실행됨

### Thread 클래스 객체화

- Runnable을 매개값으로 갖는 생성자 호출
  - Thread thread = new Thread(Runnable target);
- Runnable
  - 인터페이스
  - 작업 스레드가 실행할 수 있는 코드를 가지고 있는 객체
  - run() 메소드 재정의 ➡️ 작업 스레드가 실행할 코드 작성
  - 실제 스레드 아님! ➡️ Runnable 구현 객체를 매개값으로 Thread 생성자 호출 필요
  - Runnable 익명 객체 매개값으로 사용하는 방법이 많이 사용됨

```java
public class BeepTask implements Runnable{
    public void run() {
        Toolkit toolkit = Toolkit.getDefaultToolkit();

        for(int i=0; i<5; i++) {
            // 비프음 내는 메소드
            toolkit.beep();

            // Thread가 들어간 문장은 반드시 예외처리 해야 함!
            try { Thread.sleep(500); } catch (Exception e) {}
        }
    }
}
```

```java
Runnable beepTask = new BeepTask();
Thread thread = new Thread(beepTask);
// start() 메소드 이용해서 시작
thread.start();

for(int i=0; i<5; i++) {
    System.out.println("띵");
    try { Thread.sleep(500); } catch (Exception e) {}
}
```

```java
// ✅ 익명 구현 객체 이용
public static void main(String[] args) {
    Thread thread = new Thread(new Runnable() {
        @Override
        public void run() {
            Toolkit toolkit = Toolkit.getDefaultToolkit();
            for (int i=0; i<5; i++) {
                toolkit.beep();
                try { Thread.sleep(500); } catch (Exception e) {}
            }
        }
    });
    thread.start();

    for (int i=0; i<5; i++) {
        System.out.println("띵");
        try { Thread.sleep(500); } catch (Exception e) {}
    }
}
```

### Thread 하위 클래스 생성

- Thread 상속 후 run() 메소드 재정의
- 익명 객체로 작업 스레드 객체 생성 가능

```java
public class BeepThread extends Thread{
    @Override
    public void run() {
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        for (int i=0; i<5; i++) {
            toolkit.beep();
            try { Thread.sleep(500); } catch (Exception e) {}
        }
    }
}
```

```java
public static void main(String[] args) {
    Thread thread = new BeepThread(); // Thread 상속 받은 자식 클래스 객체
    thread.start(); // BeepThread의 run이 호출됨

    for (int i=0; i<5; i++) {
        System.out.println("띵");
        try { Thread.sleep(500); } catch (Exception e) {}
    }
}
```

```java
// ✅ 익명 자식 객체 이용
public static void main(String[] args) {
    Thread thread = new Thread() {
        @Override
        public void run() {
            Toolkit toolkit = Toolkit.getDefaultToolkit();
            for(int i=0; i<5; i++) {
                toolkit.beep();
                try { Thread.sleep(500); } catch (Exception e) {}
            }
        }
    };
    thread.start();

    for(int i=0; i<5; i++) {
        System.out.println("띵");
        try { Thread.sleep(500); } catch (Exception e) {}
    }
}
```

## 스레드 이름

- 메인 스레드 : main
- 'Thread-n'으로 자동 설정
- 변경 : setName() ➡️ 객체 참조 필요
- 이름 확인 : getName() ➡️ 객체 참조 필요
- 정적 메소드 : currentThread()

```java
public class ThreadA extends Thread{
    public ThreadA() {
        setName("ThreadA"); // 이름 설정
    }

    public void run() {
        for(int i=0; i<2; i++) {
            System.out.println("스레드 이름 : " + getName());
        }
    }
}
```

```java
public class ThreadB extends Thread{
    public void run() {
        for(int i=0; i<2; i++) {
            System.out.println("스레드 이름 : " + getName());
        }
    }
}
```

```java
public static void main(String[] args) {
    Thread mainThread = Thread.currentThread(); // 정적 메소드 활용(이 코드 실행하는 스레드 객체)
    System.out.println("시작 스레드 : " + mainThread);

    ThreadA threadA = new ThreadA();
    System.out.println("작업 스레드 : " + threadA.getName());
    threadA.start();

    ThreadB threadB = new ThreadB();
    System.out.println("작업 스레드 : " + threadB.getName());
    threadB.start();
}
/*
시작 스레드 : Thread[main,5,main]
작업 스레드 : ThreadA
스레드 이름 : ThreadA
스레드 이름 : ThreadA
작업 스레드 : Thread-1
스레드 이름 : Thread-1
스레드 이름 : Thread-1
*/
```

## 동기화 메소드

### 공유 객체 사용 시 : 다른 스레드가 상태를 변경할 수 있기 때문에 의도와 다른 결과 산출 가능성 있음

- 스레드 작업이 끝날 때까지 객체에 잠금
- 임계 영역(critical section) : 단 하나의 스레드만 실행할 수 있는 코드 영역
- 동기화 메소드 : 임계 영역 지정 / 내부 동기화 메소드 실행 ➡️ 객체에 잠금을 걸어 다른 스레드가 동기화 메소드를 실행하지 못하도록 함
  - synchronized 키워드
  - 동기화 메소드가 여러개 : 하나의 동기화 메소드가 실행 중이면 다른 동기화 메소드도 실행할 수 없음

```java
public synchronized void method() {
  // 임계 영역
}
```

## 스레드 제어

- start()메소드 호출 : 바로 실행 ❌ / **실행 대기 상태** 👌
  - 운영 체제가 실행 대기 상태에 있는 스레드 중 하나를 선택 ➡️ CPU가 run() 메소드 실행 ➡️ **실행 상태**
- 실행 상태의 스레드 : run() 메소드 모두 실행하기 전에 다시 실행 대기 상태로 돌아갈 수 있음
  - run() 메소드 내용 모두 실행 ➡️ **종료 상태**
- 실행 대기 상태 🔁 실행 상태 번가아각며 run() 메소드 조금씩 실행
- **일시 정지 상태** : 스레드가 실행할 수 없는 상태 / 바로 실행 상태로 돌아갈 수 없음 / 일시 정지 상태 ➡️ 실행 대기 상태

## 스레드 상태 제어

| 메소드             | 📝                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| interrupt()        | 일시 정지 상태 스레드 ➡️ InterruptedException ➡️ 예외 처리 코드(catch)에서 실행 대기 상태 or 종료 상태로 갈 수 있게 함 |
| sleep(long millis) | 주어진 시간 동안 일시 정지 상태로 만듦 ➡️ 주어진 시간 지나면 실행 대기 상태                                            |

## 스레드 종료

### stop 플래그 이용

- run() 메소드의 종료 유도

```java
public class PrintThread extends Thread{
    private boolean stop; // stop 플래그

    public void setStop(boolean stop) {
        this.stop = stop;
    }

    public void run() {
        while (!stop) {
            System.out.println("실행 중");
        }
        System.out.println("실행 종료");
    }
}
```

```java
PrintThread printThread = new PrintThread();
printThread.start();

try { Thread.sleep(1); } catch (Exception e) {}

printThread.setStop(true); // 스레드 종료
```

### interrupt() 메소드 이용

- 일시 정지 상태가 되면 : InterruptedException이 발생
  - 스레드가 일시 정지 상태가 되지 않으면 interrupt() 메소드 호출은 의미 ❌
- interrupt() 호출 여부 확인 : interrupted()(정적 메소드), isInterrupted()(인스턴스 메소드) ➡️ true 리턴

```java
public class ThreadA extends Thread{
    @Override
    public void run() {
        try {
            while (true) {
                System.out.println("실행 중");
                Thread.sleep(1); // 일시 정지 상태
            }
        } catch (InterruptedException e) {}

        System.out.println("실행 종료");
    }
}
```

```java
Thread thread = new ThreadA();
thread.start();

try { Thread.sleep(1000); } catch (InterruptedException e) {}

thread.interrupt(); // thread가 일시 정지 상태 ➡️ interruptedException 발생 try문 빠져나옴
```

```java
// ✅ Thread.interrupted() 이용
public class ThreadA extends Thread{
    @Override
    public void run() {
        while (true) {
            System.out.println("실행 중");
            if (Thread.interrupted()) { // 일시 정지 상태이면 while문 빠져나옴
                break;
            }
        }
        System.out.println("실행 종료");
    }
}
```

## 데몬 스레드

- 주 스레드의 작업을 돕는 보조적인 역할을 수행하는 스레드
- 주 스레드가 종료되면 강제적으로 자동 종료
- 주 스레드가 데몬이 될 스레드의 setDaemon(true)를 호출
  - ✅ start() 메소드 호출 전에 호출❗️
  - isDaemon() : 현재 진행 중인 스레드 데몬인지 아닌지 구별

```java
public static void main(String[] args) {
  AutoSaveThread thread = new AutoSaveThread();
  thread.setDaemon(true);
  thread.start();
}
```
