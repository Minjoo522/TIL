# list

리스트 : 여러가지 자료를 저장할 수 있는 데이터 타입

```python
a = [요소1, 요소2, 요소3, element4, elemen5]
```

## 리스트 선언과 접근

- 리스트의 요소로는 여러 자료형을 혼합해서 넣을 수 있음
- 인덱스로 요소들에 접근 할 수 있음

```python
a = [1, 2, 3, 4, 5]
print(a[0]) # 1
print(a[0:3]) # [1, 2, 3]

# 뒤에서부터 접근
print(a[-1])

# 중첩된 리스트의 요소에 접근
b = [1, 2, [3, 4], 5]
print(b[2][0]) # 3
```

## 리스트 요소 수정

- 인덱스 접근 방법으로 요소를 업데이트 할 수 있음

```python
a = [1, 2, 3, 4, 5]

# 리스트명[인덱스] = 업데이트 값

a[0] = 10
print(a) # [10, 2, 3, 4, 5]
```

## 리스트 연산자 (+ : 연결, \* : 반복, len() : 길이)

```python
a = [1, 2, 3]
b = [4, 5, 6]

# + : 리스트끼리 연결하기
c = a + b
print(c) # [1, 2, 3, 4, 5, 6]

# * : 리스트 반복하기
c = a * 3
print(c) # [1, 2, 3, 1, 2, 3, 1, 2, 3]

# len() : 요소 개수 확인
print(len(c)) # 9
```

## 리스트 추가, 삭제, 정렬

### 리스트 추가(append(), insert(), extend())

```python
a = [1, 2, 3]

# 리스트명.append(추가할 요소) : 맨 뒤에 추가
a.append(4)
print(a) # [1, 2, 3, 4]

# 리스트명.insert(위치, 요소) : 특정 위치에 추가
a.insert(1, 5)
print(a) # [1, 5, 2, 3, 4]

# 리스트명.extend([요소1, 요소2]) : 여러 요소 한 번에 추가
a.extend([1, 2, 3])
print(a) # [1, 5, 2, 3, 4, 1, 2, 3]
```

### 리스트 삭제(del, pop(), romove(), clear())

- 인덱스로 삭제하거나 요소를 찾아서 삭제할 수 있음

#### 1. 인덱스로 삭제

```python
a = [1, 2, 3, 4, 5]

# del 리스트명[인덱스]
del a[0]
print(a) # [2, 3, 4, 5]

# 리스트명.pop[인덱스]
print(a.pop(0)) # 2 => 제거할 요소를 반환하고 삭제
print(a) # [3, 4, 5]
```

#### 2. 요소로 삭제

- 가장 먼저 발견되는 요소 하나만 삭제 함
- 중복 요소 다 삭제할 때는 반복문 사용

```python
# 리스트명.remove(요소)

animals = ['🐼', '🐼', '🐶', '🐰']

animals.remove('🐼')
print(animals) # ['🐼', '🐶', '🐰']
```

#### 3. 전부 삭제

```python
# 리스트명.clear()

animals = ['🐼', '🐼', '🐶', '🐰']

animals.clear()
print(animals) # []
```

### 리스트 정렬(sort())

- 기본 값 : 오름차순

```python
# 리스트명.sort()

a = [10, 2, 30, 100, 1, 55]
a.sort()
print(a) # [1, 2, 10, 30, 55, 100]

# 내림차순 : reverse=True
a.sort(reverse=True)
print(a) # [100, 55, 30, 10, 2, 1]
```

## 요소의 존재 여부 확인하기

```python
# 요소 in 리스트명
# 요소 not in 리스트명

animals = ['🐼', '🐼', '🐶', '🐰']

print('🐼' in animals) # True
print('🍓' in animals) # False

print('🐶' not in animals) # False
print('🍑' not in animals) # True
```

## 함수

| 함수      | 📝                                |
| :-------- | :-------------------------------- |
| **min()** | 리스트 요소들 중에서 최소 값 찾기 |
| **max()** | 리스트 요소들 중에서 최대 값 찾기 |
| **sum()** | 리스트 요소 다 더하기             |

```python
numbers = [1, 2, 3, 4, 5]

print(min(numbers)) # 1
print(max(numbers)) # 5
print(sum(numbers)) # 15
```

### 리스트 뒤집기 : reverse()

```python
# 리스트명.reverse()
numbers = [1, 2, 3, 4, 5]

numbers.reverse()
print(numbers)
```

### 요소로 인덱스 찾기 : index()

```python
# 인덱스명.index(요소)
animals = ['🐼', '🐼', '🐶', '🐰']

print(animals.index('🐼')) # 0
```

### 해당 요소가 몇 개 있는지 확인 : count()

```python
# 인덱스명.count(요소)
animals = ['🐼', '🐼', '🐶', '🐰']

print(animals.count('🐼')) # 2
```
