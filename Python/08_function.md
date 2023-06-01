# 함수

## 함수 정의

```python
def 함수명(매개변수1, 매개변수2):
    # 코드
```

## 함수 호출

```python
def sum(a, b):
    return a + b

c = sum(1, 2) # 함수 호출
print(c) # 3
```

## 매개변수

### 가변 매개변수

- 매개변수 앞에 \* 를 붙임
- 매개변수의 개수가 변할 수 있을 때 사용
- 뒤에는 일반 매개변수가 올 수 없음
- 하나만 사용 가능

```python
def sum(string, *numbers):
    result = 0
    for i in numbers:
        result += i
    print(string, ':', result)

sum('결과', 1, 2, 3, 4, 5)
# 결과 : 15
```

### 기본 매개변수

- '매개변수명 = 값' 으로 표시
- 뒤에는 일반 매개변수가 올 수 없음

```python
def sum(a, b, c=10):
    return a + b + c

c = sum(1, 2)
print(c) # 13
# c 값을 입력하지 않으면 기본값 = 10으로 계산 됨
```

```python
def sum(a, b, c=10):
    return a + b + c

c = sum(1, 2, 3)
print(c) # 6
# c 값을 입력하면 새로운 값으로 업데이트 됨
```

### 키워드 매개변수

- 함수 호출할 때 매개변수명을 직접 지정해서 값을 입력하는 것
- 필요한 매개변수에만 값을 전달 할 수 있음

```python
def sum(a, b, c=10):
    return a + b + c

c = sum(1, 2, c=20)
print(c) # 23
c = sum(a=1, b=2, c=3)
print(c) # 6
c = sum(b=1, c=2, a=3)
print(c) # 6, 순서 다르게도 입력 가능
```

## return

- '함수를 끝냄'을 의미함
- return 뒤에 자료를 입력시, 해당 자료를 가지고 리턴

```python
def print_number():
    print("1️⃣")
    return
    print("2️⃣")

print_number() # 1️⃣만 출력됨, return = 함수를 끝내는 것이기 때문에
```

```python
def sum(a, b):
    result = a + b
    return result # result를 리턴

c = sum(1, 2)
print(c) # c
```

```python
def sum(a, b):
    result = a + b
    return # 아무 것도 리턴하지 않음

c = sum(1, 2)
print(c) # None
```

## 람다(lambda)

- 함수를 간결하게 작성할 때 사용

```python
lambda 매개변수1, 매개변수2 : 리턴값
```

```python
def double(a):
    return a * 2

c = double(2)
print(c) # 4

# 위와 아래는 동일한 일을 함

double_lambda = lambda a : a * 2
c = double_lambda(2)
print(c) # 4
```

- 함수의 매개변수에 직접 넣을 수 있음(콜백함수)

```python
numbers = [1, 20, 3, 6, 10]
over_five = filter(lambda a : a > 5, numbers)

print(list(over_five)) # [20, 6, 10]
```
