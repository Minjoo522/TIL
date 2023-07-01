# Flask

## 기본 실행 구문

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World!'

app.run()
```

## port 변경

- run 함수에 파라미터로 port=를 넘겨준다
- 단, 6000번 포트는 크롬에서 보안상 이유로 사용 불가

```python
app.run(port=5001)
```

## 디버그 모드

- 코드변경을 감지하고 자동으로 리로드
- 실제 운영 서버에서는 사용 ❌

```python
app.run(port=5001, debug=True)
```
