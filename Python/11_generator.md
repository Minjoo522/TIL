# 제너레이터(Generator)

- 이터레이터를 생성할 때 사용하는 코드
- 함수 내부에 yield 키워드 사용
- next() 함수를 사용하여 내부의 코드를 차례대로 실행
- 메모리 효율성을 위해 함수의 코드를 조금씩 실행할 때 사용

```python
def gen():
    yield 1
    yield 2
    yield 3

result = gen()

a = next(result)
print(a) # 1
b = next(result)
print(b) # 2
c = next(result)
print(c) # 3
```

### 더이상 리턴 할 값이 없는 경우 StopIteration 예외 발생

```python
d = next(result) # StopIteration
```

### for문과 활용

```python
def double(start, end):
    for i in range(start, end + 1):
        result = i * 2
        yield result

output = double(1, 3)

print(next(output)) # 2
print(next(output)) # 4
print(next(output)) # 6
```
