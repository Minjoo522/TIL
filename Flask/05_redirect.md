# [redirect](https://flask.palletsprojects.com/en/2.3.x/quickstart/#redirects-and-errors)

## 웹 브라우저에 이동하라는 명령을 내릴 수 있음

- import redirect
- reidrect() 함수 안에 url 주소를 기입하면 해당 url로 이동

## url_for()

- url 주소 값을 가져옴
- 괄호 안에 route 함수 명을 넣으면 해당 route가 가지는 url 주소를 가져옴
- 유지, 보수하기 쉬워짐 : URL 구성 방식이 변경되면 하드코딩된 코드는 쉽게 대응하기 어렵다

```python
from flask import Flask, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return 'Hello World'

with app.test_request_context():
    print(url_for('home'))
# 프린트 값 : /
```
