# 클래스

- [생성자 : **init**](#생성자--__init__)
- [클래스 메소드](#메소드--클래스가-가지고-있는-함수)
- [isinstance()](#isinstance)
- [특별 메소드 = 매직 메소드](#특별-메소드--매직-메소드)
- [클래스 변수](#클래스-변수)
- [클래스 함수](#클래스-함수)
- [프라이빗 변수](#프라이빗-변수)
- [getter & setter](#getter--setter)
- [상속](#상속)

> 클래스 : 객체를 효율적으로 만들기 위한 구문<br>
> 인스턴스 : 클래스를 기반으로 만들어진 객체

```python
class 클래스이름:
    def __init__(self, 추가매개변수):
        self.추가매개변수 = 추가매개변수
    def 메소드이름(self, 추가매개변수):
        문장
```

## 생성자 : \_\_init\_\_

### 클래스 만들고 인스턴스 생성

```python
class Fruit:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

fruits = [
    Fruit("사과", 5, 20),
    Fruit("바나나", 6, 10),
    Fruit("딸기", 3, 15)
]
```

## 메소드 : 클래스가 가지고 있는 함수

### 메소드 만들기

```python
class Fruit:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_price(self):
        return self.price * self.quantity

    def to_string(self):
        return "{}\t{}".format(self.name, self.total_price())

fruits = [
    Fruit("사과", 5, 20),
    Fruit("바나나", 6, 10),
    Fruit("딸기", 3, 15)
]

print("이름", "총 가격", sep="\t")
for fruit in fruits:
    print(fruit.to_string())

# 결과

# 이름    총 가격
# 사과    100
# 바나나  60
# 딸기   45
```

## isinstance()

- 어떤 클래스의 인스턴스인지 확인
- 불리언 값 반환
- 상속관계까지 확인 가능

```python
print(isinstance(fruits[0], Fruit))
# True
```

## 특별 메소드 = 매직 메소드

- 기존에 사용하던 형태로 메소드를 사용할 수 있음

### \_\_str\_\_

```python
class Fruit:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_price(self):
        return self.price * self.quantity

    # 원하는 기능을 정의
    def __str__(self):
        return "{}\t{}".format(self.name, self.total_price())

fruits = [
    Fruit("사과", 5, 20),
    Fruit("바나나", 6, 10),
    Fruit("딸기", 3, 15)
]

print("이름", "총 가격", sep="\t")
for fruit in fruits:
    # 인스턴스.메소드() 형태가 아닌, str(객체) 형태로 사용 가능
    print(str(fruit))
```

### 비교 매직 메소드

| 메소드 | 📝                    |
| :----- | :-------------------- |
| **eq** | equal                 |
| **ne** | not equal             |
| **gt** | greater than          |
| **ge** | greater than or equal |
| **lt** | less than             |
| **le** | less than or equal    |

```python
class Fruit:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def __eq__(self, value):
        return self.price == value.price

    def __ne__(self, value):
        return self.price != value.price

fruit_a = Fruit("사과", 5, 20)
fruit_b = Fruit("바나나", 6, 10)

print(fruit_a == fruit_b) # False
print(fruit_a != fruit_b) # True
```

## 클래스 변수

```python
# class 구문 바로 아래에 변수 선언
class 클래스이름:
    변수이름 = 값

# 클래스 변수에 접근
클래스이름.변수이름
```

```python
class Fruit:
    packaging_fee = 3

print(Fruit.packaging_fee) # 3
```

## 클래스 함수

```python
# 클래스 함수 정의
class 클래스이름:
    @classmethod # 데코레이터
    def 함수이름(cls, 매개변수): # cls : 클래스 자체
        내용

# 클래스 함수 호출
클래스이름.함수이름(매개변수)
```

```python
class Fruit:
    packaging_fee = 3
    fruits = []

    # 클래스 함수 정의
    @classmethod
    def print(cls):
        print("이름\t총 가격")
        for fruit in cls.fruits:
            print(str(fruit))

    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity
        Fruit.fruits.append(self)

    def total_price(self):
        return self.price * self.quantity

    def __str__(self):
        return "{}\t{}".format(self.name, self.total_price())


Fruit("사과", 5, 20),
Fruit("바나나", 6, 10),
Fruit("딸기", 3, 15)

# 클래스 함수 호출
Fruit.print()
```

## 프라이빗 변수

- 클래스 내부의 변수를 외부에서 사용하는 것을 막고싶을 때
- \_\_변수 이름

```python
class User:
    def __init__(self, first_name, last_name):
        self.__first_name = first_name
        self.__last_name = last_name
    def __str__(self):
        return "{} {}".format(self.__first_name, self.__last_name)

user = User("민주", "김")
print(user.__first_name) # 접근 불가
```

## getter & setter

- 프라이빗 변수의 값을 추출하거나 변경할 때 간접적으로 속성에 접근

```python
# 게터, 세터 정의
@property
def 변수이름과동일(self):
    return 프라이빗변수
@게터함수이름.setter
def 변수이름과동일(self, value):
    내용

# 게터, 세터 호출
인스턴스명.변수이름 = value
```

```python
class User:
    def __init__(self, first_name, last_name):
        self.__first_name = first_name
        self.__last_name = last_name

    def __str__(self):
        return "{} {}".format(self.__first_name, self.__last_name)

    # 게터, 세터 정의
    @property
    def first_name(self):
        return self.__first_name
    @first_name.setter
    def first_name(self, value):
        # 문자열이 아닌 경우 에러를 일으키게 함
        if type(value) != str:
            raise TypeError("문자열을 입력해주세요.")
        # 문자열이면 first_name에 value 할당
        self.__first_name = value

user = User("민주", "김")
print(str(user))

# user.first_name = 0
# TypeError: 문자열을 입력해주세요.

user.first_name = "유진"
print(str(user)) # 유진 김
```

## 상속

- 부모 클래스의 속성, 메소드를 자식 클래스에게 물려주는 것

```python
class 부모클래스:
    내용

class 자식클래스(부모클래스):
    내용
```

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def drink(self):
        if self.age > 19:
            return "🍺"
        return "🧃"

class Student(User):
    def __init__(self, name, age):
        # 부모의 속성 상속 : super()
        super().__init__(name, age)

student = Student("민주", 20)
print(student.drink()) # 🍺
```

### 오버라이드 = 재정의

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def drink(self):
        if self.age > 19:
            return "🍺"
        return "🧃"

    def print(self):
        print("{} : {}".format(self.name, self.drink()))

class Student(User):
    def __init__(self, name, age):
        super().__init__(name, age)

# 오버라이드 = 재정의 : 부모에 정의된 함수를 자식에서 다시 정의
    def print(self):
        super().print()
        print("맛있게 드세요")

student = Student("민주", 20)

student.print()
# 민주 : 🍺
# 맛있게 드세요
```
