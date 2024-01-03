# HTTP Methods

- 기본값은 'GET'
- 다른 방식을 허용하기 위해서는 라우트에 methods 값을 주어야 한다

```python
@app.route('/login', methods=['GET', 'POST'])
```

- request.method로 사용자가 요청한 메소드 방식을 확인 할 수 있음
- [request object](https://flask.palletsprojects.com/en/2.3.x/quickstart/#the-request-object)
