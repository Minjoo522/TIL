# Data Type

- [문자열](#문자열string)

> **기본적인 자료형**<br>
> 자료 형식 확인 : type()
>
> - **_문자열(string)_**
> - **_숫자형(number)_**
> - **_불리언(boolean)_** : True, False<br>

```python
print(type("Hello! 👋"))
# <class 'str'>
print(type(1))
# <class 'int'>
print(type(1.5))
# <class 'float'>
print(type(True))
# <class 'bool'>
```

## 문자열(string)

### 이스케이프 문자

- \\" : 큰 따옴표
- \\' : 작은 따옴표
- \\n : 줄바꿈
- \\t : 탭
- \\\ : 백슬래시

```python
print("\"Hello!\"\n👋\t🐼")
# "Hello!"
# 👋      🐼
```

### 여러줄 문자열

```python
print("""Hello!
My name is Minjoo.
Nice to meet you!""")
# Hello!
# My name is Minjoo.
# Nice to meet you!
```

- 의도하지 않은 줄바꿈이 있는 경우 : \ 표시

```python
# \ 사용 전
print("""
Hello!
My name is Minjoo.
Nice to meet you!
""")
#
# Hello!
# My name is Minjoo.
# Nice to meet you!
#

# \ 사용 후
print("""\
Hello!
My name is Minjoo.
Nice to meet you!\
""")
# Hello!
# My name is Minjoo.
# Nice to meet you!
```

### 문자열 연산자

```python
# + : 연결, "문자열" + 숫자 => TypeError
print("Hello"+"👋") # Hello👋

# * : 반복, 문자열 앞, 뒤 다 가능
print(3*"🐼"+"Hello"+"👋"*3) # 🐼🐼🐼Hello👋👋👋

# [] : 선택(인덱싱), 0부터 시작
print("Hello"[0]) # H

# [:] : 슬라이싱, [a:b] 인덱스 a번 부터 b번 전까지
print("Hello"[0:2]) # He
print("Hello"[:2]) # He
print("Hello"[3:]) # lo
```

### len() : 문자열 길이 확인 함수

```python
print(len("Hello")) # 5
```

## 숫자(number)

- 정수(integer)
- 부동 소수점(floating point)
- 0과 0.0은 같지 않다

### 숫자 연산자
