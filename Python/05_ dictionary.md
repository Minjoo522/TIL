# Dictionary

딕셔너리 : 키를 기반으로 값을 저장하는 데이터 타입

```python
a = {
    "key1": "value1",
    "key2": "value2"
}
```

- 키와 값에는 다양한 자료형을 사용 할 수 있음

## 딕셔너리 값에 접근

```python
panda = {
    "name" : "🐼",
    "age" : 5
}

# 딕셔너리명[키]
print(panda["name"]) # 🐼
```

### 딕셔너리 안의 리스트에 접근

```python
panda = {
    "name" : "🐼",
    "age" : 5,
    "food" : ["🎋", "🥕"]
}

# 딕셔너리명[키][인덱스]
print(panda["food"][1]) # 🥕
```

## 딕셔너리 키-값 추가

```python
panda = {
    "name" : "🐼",
    "age" : 5,
    "food" : ["🎋", "🥕"]
}

# 딕셔너리명[새로운 키] = 새로운 값
panda["toy"] = "🪜"
print(panda)
# {'name': '🐼', 'age': 5, 'food': ['🎋', '🥕'], 'toy': '🪜'}

# 이미 존재하는 키를 넣으면 값이 업데이트 됨
panda["age"] = 10
print(panda)
# {'name': '🐼', 'age': 10, 'food': ['🎋', '🥕'], 'toy': '🪜'}
```

## 딕셔너리 삭제 : del

```python
panda = {
    "name" : "🐼",
    "age" : 5,
    "food" : ["🎋", "🥕"]
}

# del 딕셔너리명[삭제할 키]
del panda["food"]
print(panda) # {'name': '🐼', 'age': 5}
```

## 키 존재여부 확인 : in / get()

```python
panda = {
    "name" : "🐼",
    "age" : 5,
    "food" : ["🎋", "🥕"]
}

# 키 in 딕셔너리명
# 불리언 값 반환
print("name" in panda) # True

# 딕셔너리명.get(키)
# 키의 값 반환, 존재하지 않는 경우 None 반환
print(panda.get("name")) # 🐼
print(panda.get("home")) # None
```
