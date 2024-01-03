# 튜플(tuple)

- 리스트와 비슷한 데이터 타입
- 한 번 결정된 요소를 수정 할 수 없음
- () 괄호 사용, 생략 가능
- 요소를 하나만 갖는 경우에도 콤마 필요

```python
# 튜플 정의
tuple1 = (1, )
tuple2 = (1, 2, 3)
tuple3 = 1, 2, 3
```

```python
# 요소 변경이 불가능

# 삭제 불가
del tuple3[0]
# TypeError: 'tuple' object doesn't support item deletion

# 수정 불가
tuple3[0] = 4
# TypeError: 'tuple' object does not support item assignment
```

```python
# 변수 값 교환 가능
a, b = 1, 2
a, b = b, a
print(a) # 2
print(b) # 1
```

## 반복문 순회 가능

```python
numbers = (1, 2, 3, 4, 5)

for i in numbers:
    print(i) # 1, 2, 3, 4, 5
```
