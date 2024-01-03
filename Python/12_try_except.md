# 예외 처리(try...except)

```python
try:
    # 예외 발생 가능성 있는 코드
except:
    # 예외 발생시 실행할 코드
else:
    # 예외 발생하지 않고 try 구문이 모두 실행 되었을 때 실행할 코드
finally:
    # 예외 발생 여부와 관계 없이 무조건 실행할 코드
```

```python
try:
    number = int(input("정수를 입력해 주세요: "))
except:
    print("에러 발생!")
else:
    print(2 * number)
finally:
    print("오류 발생 여부와 관계 없이 실행됩니다.")
```

- try 구문에서 에러가 발생하면 except 구문이 실행 됨
- try 구문에서 에러가 발생하지 않으면 else 구문이 실행 됨
- 에러 발생 여부와 관계 없이 finally 구문은 실행 됨

```python
# 에러 발생하지 않는 경우 결과

# 정수를 입력해 주세요: 5
# 10
# 오류 발생 여부와 관계 없이 실행됩니다.
```

```python
# 에러 발생하는 경우 결과

# 정수를 입력해 주세요:  안녕
# 에러 발생!
# 오류 발생 여부와 관계 없이 실행됩니다.
```

## 예외 객체

```python
try:
    # 예외 발생 가능성 있는 코드
except 예외 종류 as 예외 객체 변수 이름:
    # 예외 발생시 실행할 코드
```

```python
try:
    number = int(input("정수를 입력해 주세요: "))
except Exception as exception:
    print("예외 내용:", exception)
else:
    print(2 * number)

# 정수를 입력해 주세요: 안녕
# 예외 내용: invalid literal for int() with base 10: '안녕'
# 예외 종류: <class 'ValueError'>
```

- 예외 객체를 사용하면 예외 내용을 확인 할 수 있고, type() 함수로 에러 종류도 확인 가능

```python
try:
    number = int(input("인덱스를 입력해 주세요: "))
    print(f'인덱스 {number}의 값은 {numbers[number]} 입니다.')
except IndexError:
    print("해당 인덱스가 없습니다.")
except ValueError:
    print("정수를 입력하지 않았습니다.")

# 인덱스를 입력해 주세요: 5
# 해당 인덱스가 없습니다.

# 인덱스를 입력해 주세요: 안녕
# 정수를 입력하지 않았습니다.
```

- 예외 종류 별로 구분하여 처리 가능
- except로 처리되지 않은 에러가 발생 할 수 있음 ➡️ 마지막에 Exception으로 처리해주는 것이 좋음

## raise 예외 객체

- 예외를 강제로 발생 시킴
