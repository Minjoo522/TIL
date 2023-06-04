# Set(집합)

- [set 특징](#set-특징)
- [set 선언](#set-선언)
- [요소 추가](#요소-추가)
  - [add()](#add)
  - [update()](#update--여러-데이터를-한-번에-추가)
- [요소 삭제](#요소-삭제)
  - [remove()](#remove값)
  - [discard()](#discard값)
- [연산자](#연산자)
- [연산 메소드](#연산-메소드)
- [기타 메소드](#기타-메소드)

## set 특징

1. 순서가 없음 : for문 돌리면 어떤 값이 나올지 알 수 없음
2. unique한 값을 가짐 => 중복을 허용하지 않음
3. {} 사용, 딕셔너리와 다르게 key가 없음
4. 내부 요소로 mutable한 값을 가질 수 없음

## set 선언

- {}로 선언 불가하여 set 생성자를 사용함

```python
a = {}
print(type(a)) # <class 'dict'>
b = set()
print(type(b)) # <class 'set'>
```

- iterable한 객체를 넣으면 set으로 변환해 줌

```python
a = set([1, 2, 3, 4])
print(a) # {1, 2, 3, 4}

# 이 경우, set 생성자 없이도 만들 수 있음
a = {1, 2, 3, 4}
print(type(a)) # <class 'set'>
```

## 요소 추가

### add()

```python
# 세트이름.add(값)
a = set()
a.add(1)
a.add(2)
print(a) # {1, 2}
```

### update() : 여러 데이터를 한 번에 추가

```python
# 세트이름.update([요소, 요소])
a = set()
a.update([1,2])
print(a) # {1, 2}
```

## 요소 삭제

### remove(값)

- 제거, 세트에 해당 값이 없는 경우 KeyError 발생

```python
a = {1, 2, 3}
a.remove(1)
print(a) # {2, 3}
a.remove(1)
# KeyError: 1 발생
```

### discard(값)

- 제거, 세트에 해당 값이 없어도 에러 발생하지 않음

```python
a = {1, 2, 3}
a.discard(1)
print(a) # {2, 3}
a.discard(1)
# 없는 값을 제거하였으나 아무 에러 발생하지 않음
```

## 연산자

| 연산자 | 📝                                                                      |
| :----: | :---------------------------------------------------------------------- |
| **\|** | 합집합, 두 세트의 모든 요소를 합치는데 중복되는 요소는 한 번만 추출된다 |
| **&**  | 교집합, 두 세트에 둘 다 들어있는 요소 추출                              |
| **-**  | 차집합, 왼쪽에 있는 요소에서 오른쪽에 있는 요소 제외                    |
| **^**  | 대칭 차집합, 한쪽에만 존재하는 요소 추출 (합집합 - 교집합)              |

```python
a = {1, 2, 3}
b = {2, 3, 4}

print(a | b) # {1, 2, 3, 4}
print(a & b) # {2, 3}
print(a - b) # {1}
print(b - a) # {4}
print(a ^ b) # {1, 4}
```

- |=, &=, -=, ^=로 연산과 동시에 할당이 가능함

```python
a |= b
print(a) # {1, 2, 3, 4}
```

## 연산 메소드

| 메소드                     | 📝          |
| :------------------------- | :---------- |
| **union()**                | 합집합      |
| **intersection()**         | 교집합      |
| **difference()**           | 차집합      |
| **symmetric_difference()** | 대칭 차집합 |

```python
a = {1, 2, 3}
b = {2, 3, 4}

c = a.union(b)
print(c) # {1, 2, 3, 4}
c = a.intersection(b)
print(c) # {2, 3}
c = a.difference(b)
print(c) # {1}
c = a.symmetric_difference(b)
print(c) # {1, 4}
```

## 기타 메소드

| 메소드           | 📝                                            |
| :--------------- | :-------------------------------------------- |
| **issubset()**   | 부분집합 여부 확인, 불리언 값 반환            |
| **issuperset()** | issubset()과 반대                             |
| **isdisjoint()** | 교집합이 **_없으면_** True, 있으면 False 반환 |

```python
a = {1, 2, 3}
b = {2, 3}
c = {4, 5}

print(a.issubset(b)) # False, a가 b의 부분집합인지
print(b.issubset(a)) # True
print(a.issuperset(b)) # True
print(a.isdisjoint(b)) # False, 교집합이 있음
print(a.isdisjoint(c)) # True, 교집합이 없음
```
