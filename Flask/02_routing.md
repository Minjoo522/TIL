# Flask routing

- 데코레이터 : @app.route('/') = / 페이지, 혹은 / 생략하고 접속 했을 때 아래 함수를 실행하라

```python
@app.route('/hello')
def create():
    return 'Hello'
# /hello url로 접속시 'Hello'가 표시됨
```

## 변수 규칙

- route에 <variable_name> 값을 주면, 키워드 매개변수로 받음

```python
@app.route('/user/<name>/')
def user(name):
    print(name)
    return 'Hello, ' + name
# /user/minjoo로 접속시 화면에 Hello, minjoo가 표시됨
```

- <variable_name>에 \<str:variable_name>과 같은 식으로 타입을 지정 해주면 컨버팅 해준다<br>
<hr>

<span style="color:orange">**[converter type]**</span>

|  type  | 설명                                  |
| :----: | ------------------------------------- |
| string | 문자열                                |
|  int   | 자연수                                |
| float  | 부동소수점                            |
|  path  | string과 동일하지만, /(슬래시)도 받음 |
|  uuid  | UUID 문자열                           |
