# Method

- [swapcase()](#swapcase)

## swapcase()

- 영문 대소문자 상호 전환 메드
- 대문자 ➡️ 소문자, 소문자 ➡️ 대문자

```python
str = "aBcDeFg"
print(str.swapcase()) # AbCdEfG
```

## eval()

- 문자열로 표현된 표현식을 실행 후 결과 값 리턴
- 입력을 받아서 eval() 함수로 실행 할 수 있음
  - 사용자가 입력한 문자열 그대로 실행 : 파이썬이 예상 못한 동작을 할 수도 있음

```python
str = "1 + 2"
print(eval(str)) # 3
```
