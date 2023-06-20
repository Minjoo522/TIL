# 이터레이터(iterator)

- next 함수 호출 시 계속 그 다음 값을 리턴하는 객체
- 반복 가능하다고하여 이터레이터 객체는 아니다

## lter() 함수

- 이터레이터를 만드는 함수

```python
animals = ["🐼", "🦁", "🐰", "🐶"]
iterator_animals = iter(animals)
print(type(iterator_animals)) # <class 'list_iterator'>

# 이터레이터로 next 함수 호출 가능
print(next(iterator_animals))
print(next(iterator_animals))
print(next(iterator_animals))
print(next(iterator_animals))
# 🐼, 🦁, 🐰, 🐶 순서대로 반환

# 더는 호출할 값이 없는 경우 StopIteration 예외 발생
print(next(iterator_animals))
# Traceback (most recent call last):
#   File "iterator_practice.py", line 10, in <module>
#     print(next(iterator_animals))
#           ^^^^^^^^^^^^^^^^^^^^^^
# StopIteration
```

- 이터레이터는 값을 한 번 읽으면 다시는 그 값을 읽을 수 없음

```python
animals = ["🐼", "🦁", "🐰", "🐶"]
iterator_animals = iter(animals)
print(type(iterator_animals)) # <class 'list_iterator'>

for animal in iterator_animals:
    print(animal)
# 🐼, 🦁, 🐰, 🐶 순서대로 반환

for animal in iterator_animals:
    print(animal)
# 아무 것도 반환 되지 않음
```
