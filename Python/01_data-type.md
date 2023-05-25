# Data Type

- [문자열](#문자열string)
- [숫자](#숫자number)

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

```python
# +, -, *, / : 사칙 연산자
print(1 + 2) # 3
print(1 - 2) # -1
print(1 * 2) # 2
print(1 / 2) # 0.5

# // : 정수 나누기 연산자, 숫자를 나누고 정수만 남김
print(3 // 2) # 1

# ** : 제곱 연산자
print(3 ** 2) # 9
print(4 ** (1/2)) # 2.0 제곱근 구하기
```

## 문자열을 숫자로, 숫자를 문자열로(cast)

### 문자열 ➡️ 숫자

```python
# int() : 문자열 ➡️ 정수형
string = '2'
StringCast = int(string)
print(StringCast) # 2
print(type(StringCast)) # <class 'int'>

# float() : 문자열 ➡️ 부동 소수점
string2 = '1'
StringCast2 = float(string2)
print(StringCast2) # 1.0
print(type(StringCast2)) # <class 'float'>
```

### 숫자 ➡️ 문자열

```python
# str()
number = 123
numberCast = str(number)

print(type(numberCast)) # <class 'str'>
```

## 관련 함수

| 함수                                                  | 📝                     |
| :---------------------------------------------------- | :--------------------- |
| [format()](#format--숫자열을-문자열로-변환)           | 숫자를 문자열로 변환   |
| [upper(),<br>lower()](#upper-lower--대소문자-변환)    | 대소문자 변환          |
| [strip](#strip--문자열-양-옆-공백-제거)               | 문자열 양 옆 공백 제거 |
| [isOO()](#isoo--문자열-구성-파악)                     | 문자열 구성 파악       |
| [find(),<br>rfind()](#find-rfind--문자열-인덱스-찾기) | 문자열 인덱스 찾기     |
| [split()](#split--문자열-자르기)                      | 문자열 자르기          |

### format() : 숫자를 문자열로 변환

- {} 기호 개수가 매개변수 개수보다 많으면 IndexError

```python
a = "숫자 : {}".format(1)
print(a) # 숫자 : 1
print(type(a)) # <class 'str'>

# 매개변수 = 정수만
b = "{:d}".format(2)
print(b) # 2

# 특정 칸에 출력
c = "{:3d}".format(3)
print(c) #   3, 총 3칸 만들고 끝에

# 빈 칸 0으로 채움
d = "{:03d}".format(3)
print(d) # 003

# 기호 붙여서 출력
e = "{:+d}".format(3)
print(e) # +3
f = "{:+d}".format(-3)
print(f) # -3
g = "{: d}".format(3)
print(g) #  3
h = "{: d}".format(-3)
print(h) # -3

# 기호 맨 앞에 출력
i = "{:=+4d}".format(3)
print(i) # +  3
```

- 부동 소수점

```python
a = "{:f}".format(1.23)
print(a) # 1.230000

# 특정 칸에 출력
b = "{:11f}".format(1.23)
print(b) #    1.230000, 총 11 칸 만들고 뒤에

# 0으로 채우기
c = "{:011f}".format(1.23)
print(c) # 0001.230000

# 부호 추가
d = "{:+11f}".format(1.23)
print(d) #   +1.230000

# 소수점 아래 자릿수 지정
e = "{:11.2f}".format(2.345)
print(e) #        2.35, 자동 반올림 됨
```

### upper(), lower() : 대소문자 변환

```python
string = "Hello World!"
print(string.upper()) # HELLO WORLD!
print(string.lower()) # hello world!
```

### strip() : 문자열 양 옆 공백 제거

```python
string = "    Hello World!   "
print(string.strip()) # Hello World!
print(string.rstrip()) #     Hello World!
```

### isOO() : 문자열 구성 파악

```python
# isalnum() : 알파벳, 숫자로만 구성
print("Hello123".isalnum()) # True

# isalpha() : 알파벳으로만 구성
print("Hello".isalpha()) # True

# isidentifier() : 식별자로 사용 가능한지
print("000".isidentifier()) # False

# isspace() : 공백으로만 구성
print("  ".isspace()) # True

# islower() : 소문자로만 구성
print("hello".islower()) # True

# isupper() : 대문자로만 구성
print("HELLO".isupper()) # True

# isdecimal() : 정수 형태인지, int형으로 변환 가능한지 확인
print("123".isdecimal()) # True

# isdigit() : 숫자 모양인지
print("123".isdigit()) # True

# isnumeric() : 숫자인지, 숫자값 표현에 해당하는 문자열까지 인정(제곱근, 분수, 거듭제곱)
print("123".isnumeric()) # True
```

### find(), rfind() : 문자열 인덱스 찾기

- find() : 왼쪽부터 처음 나오는 인덱스
- rfind() : 오른쪽부터 처음 나오는 인덱스
- 대소문자 반환, 없으면 -1 반환

```python
print("HelloHello".find("He")) # 0
print("HelloHello".rfind("He")) # 5
```

### split() : 문자열 자르기

- 리스트 형식으로 반환

```python
string = "Hello! My Name is Minjoo Kim"
print(string.split(" "))
# ['Hello!', 'My', 'Name', 'is', 'Minjoo', 'Kim']
```
