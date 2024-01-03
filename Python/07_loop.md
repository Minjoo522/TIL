# 반복문 for, while

- [range()](#반복문과-같이-사용하는-범위-자료형--range)
- [for](#for)
- [while](#while)
- [break, continue](#break-continue)
- [list comprehensions](#list-comprehensions)

## 반복문과 같이 사용하는 범위 자료형 : range()

- range(a) : 0부터 a - 1 까지
- range(a, b) : a부터 b - 1 까지
- range(a, b ,c) : a부터 b - 1까지인데 c만큼 증가하면서

```python
a = range(5)
print(list(a)) # [0, 1, 2, 3, 4]

b = range(5, 10)
print(list(b)) # [5, 6, 7, 8, 9]

c = range(0, 10, 2)
print(list(c)) # [0, 2, 4, 6, 8]

d = range(5, 0 - 1, -1)
print(list(d)) # [5, 4, 3, 2, 1, 0]
```

## for

```python
animals = ['🐼', '🐵', '🐰', '🐭']

for animal in animals:
    print(animal)
# 🐼, 🐵, 🐰 ,🐭 순서대로 출력

user = {
    "name" : "Minjoo",
    "age" : 25,
}

for key in user:
    print(key, ":", user[key])
# name : Minjoo, age : 25 순서대로 출력

for i in range(5):
    print(i)
# 0, 1, 2, 3, 4 순서대로 출력
```

### for문과 리스트 함수 reversed(), enumerate() 사용하기

```python
# reversed
numbers = [1, 2, 3, 4, 5]

for i in reversed(numbers):
    print(i)
# 5, 4, 3, 2, 1 순서대로 출력
```

```python
# enumerate : (인덱스, 요소) 조합 출력
numbers = [1, 2, 3, 4, 5]

for index, value in enumerate(numbers):
    print(f'{index} : {value}')
# 0 : 1, 1 : 2, 2 : 3, 3 : 4, 4 : 5 순서대로 출력
```

### for문과 딕셔너리 함수 items() 사용하기

```python
user = {
    "name" : "minjoo",
    "age" : 20
}

for key, value in user.items():
    print(key, ":", value)
# name : minjoo, age : 20 순서대로 출력
```

## while

- 조건이 참인 동안 계속 반복 됨
- for문으로는 무한 반복을 구현할 수 없으나 while은 가능
- 상태, 시간 등을 기반으로 반복해야 할 때 while문을 쓰는 것이 좋다

> while 불리언 표현식:<br> > &nbsp;&nbsp;&nbsp;&nbsp;참일 때 실행할 문장

```python
# while문을 for문 처럼 구현하기
i = 0

while i < 5:
    print(i)
    i += 1
# 0, 1, 2, 3, 4 순서대로 출력
```

```python
fruits = ['🍓', '🍎', '🍇', '🍓', '🍓']
strawberry = '🍓'

# 리스트의 '🍓'를 모두 삭제하는 반복문
while strawberry in fruits:
    fruits.remove(strawberry)

print(fruits) # ['🍎', '🍇']
```

## break, continue

- break : 반복을 강제로 종료할 때
- continue : 현재 반복을 종료하고 다음 반복으로 넘어갈 때

```python
# break
i = 0

while i < 10:
    if i == 5:
        print('5️⃣')
        break
    print(i)
    i += 1
# 0, 1, 2, 3, 4, 5️⃣ 순서대로 출력 되고 반복문 종료
~~~

~~~python
# continue
fruits = ['🍓', '🍎', '🍇', '🍓', '🍓']

for fruit in fruits:
    if fruit == '🍓':
        continue
    print(fruit)
# 🍎, 🍇 순서대로 출력

for i in range(0, 10 + 1):
    if i == 5:
        print('5️⃣')
        continue
    print(i)
# 0, 1, 2, 3, 4, 5️⃣, 6, 7, 8, 9, 10이 순서대로 출력
```

## list comprehensions

- 리스트 반복문을 조금 더 직관적으로 작성할 수 있음

> 리스트 이름 = [표현식 for 반복자 in 반복할 수 있는 것 if 조건문]

```python
# 일반 반복문 사용
numbers = [1, 2, 3 ,4]
double = []

for i in numbers:
    double.append(i * 2)

print(double) # [2, 4, 6, 8]

# list comprehensions 사용
numbers = [1, 2, 3 ,4]
double = [i * 2 for i in numbers]

print(double) # [2, 4, 6, 8]
```

```python
# 조건문 있는 경우
numbers = [1, 2, 3 ,4]
double = [i * 2 for i in numbers if i > 2]

print(double) # [6, 8]
```
