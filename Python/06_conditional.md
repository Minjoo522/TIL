# 조건문 if elif else

> if 조건 1:<br> > &nbsp;&nbsp;&nbsp;&nbsp;조건 1이 참일 때 실행<br>
> elif 조건 2:<br> > &nbsp;&nbsp;&nbsp;&nbsp;조건 1이 거짓이고, 조건 2가 참일 때 실행<br>
> else:<br> > &nbsp;&nbsp;&nbsp;&nbsp;모든 조건이 거짓일 때 실행

- 조건문 뒤에는 무조건 ':' 입력 해야 함
- 실행되는 문장 앞에는 들여쓰기 해야 함(보통 4칸)

```python
animals = ['🐼', '🐶', '🐰']

if '🐵' not in animals:
    animals.append('🐵')
elif '🐱' not in animals:
    animals.append('🐱')
else:
    animals.append('👍')

print(animals) # ['🐼', '🐶', '🐰', '🐵']
```

## 비교 연산자와 사용하기

| 연산자 | 📝          |
| :----- | :---------- |
| ==     | 같다        |
| !=     | 다르다      |
| <      | 작다        |
| \>     | 크다        |
| <=     | 작거나 같다 |
| \>=    | 크거나 같다 |

```python
user = {
    "name" : "Minjoo",
    "age" : 25
}

if user["age"] > 20:
    print("🍺")
else:
    print("🧃")
# 결과 : 🍺
```

## 논리 연산자와 사용하기

| 연산자 | 📝                                |
| :----- | :-------------------------------- |
| not    | True➡️False, False➡️True          |
| and    | 피연산자가 모두 참일 때만 True    |
| or     | 피연산자 중 하나라도 참일 때 True |

```python
user = {
    "name" : "Minjoo",
    "age" : 25,
    "money" : 10
}

if user["age"] > 20 and user["money"] > 15:
    print("🍺")
else:
    print("🧃")
# 결과 : 🧃
```
