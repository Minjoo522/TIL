# html 실행

```python
# 리턴 값에 직접 입력
@app.route('/')
def index():
    return '''<!doctype html>
    <html>
        <body>
            <h1><a href="/">Home<a/></h1>
            <ol>
                <li>python</li>
                <li>flask</li>
            </ol>
        </body>
    </html>
    '''
```
