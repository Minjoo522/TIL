# 파일 읽고 쓰기

## open, close 키워드

- open()으로 열면 꼭❗️ close()로 닫아주기

```python
파일객체 = open("파일 경로", "모드")
파일객체.close()
```

## 모드

| 모드  | 📝                              |
| :---- | :------------------------------ |
| **w** | write, 쓰기 모드                |
| **a** | append, 뒤에 추가해서 쓰기 모드 |
| **r** | read, 읽기 모드                 |

### w 모드, 파일 쓰기

```python
📁 main.py
file = open("test.txt", "w")
# w 모드로 열었을 때, 만약 test.txt 파일이 없으면 새로 생성됨
file.write("Hello World!\n")
file.close()
```

```
📁 test.txt
Hello World!
```

### a 모드

```python
📁 main.py
file = open("test.txt", "a")
file.write("Python") # 원래 있던 내용의 제일 뒤에 추가 됨
file.close()
```

```
📁 test.txt
Hello World!
Python
```

### r 모드, 파일 읽기

```python
file = open("test.txt", "r")
read = file.read()
print(read)
file.close()

# Hello World!
# Python
```

## with 키워드

- 파일 열고 닫기 한번에 하기

```python
with open("파일 경로", "모드") as 파일 객체:
    문장
```

```python
with open("test.txt", "r") as file:
    print(file.read())

# Hello World!
# Python
```
