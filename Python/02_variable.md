# 변수

```python
UserName = '🐼'
# 변수 선언, 할당
print(UserName)
# 참조 = 값을 꺼내는 것
```

## 복합 대입 연산자

+=, -=, \*=, /=, %=, \*\*=

```python
# += : 더하고 할당
num = 10
num += 1
print(num) # 11

# -= : 빼고 할당
num -= 2
print(num)# 9

# *= : 곱하고 할당
num *= 3
print(num) # 27

# /= : 나누고 할당
num /= 3
print(num) # 9.0

# %= : 나머지 구하고 할당
num %= 5
print(num) # 4.0

# **= : 제곱 후 할당
num **= 2
print(num) # 16.0
```

문자열도 사용 가능 (+=, \*=)

```python
# += : 연결 후 할당
string = "Hello"
string += "👋" # Hello👋
print(string)
# *= : 반복 후 할당
string *= 2
print(string) # Hello👋Hello👋
```
