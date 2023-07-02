# [폼 모듈](https://wtforms.readthedocs.io/en/2.3.x/fields/#basic-fields)

- flask-wtf 라이브러리 설치 필요
- 사용시 플라스크의 환경변수 SECRET_KEY(CSRF(cross-site request forgery) 웹 사이트 취약점 공격을 방지하는 데 사용)가 필요
  - config.py 파일에 SECRET_KEY 변수 선언
- FlaskForm 상속 받아 class 선언
- 폼을 자동으로 만드는 모듈은 폼을 빠르게 만드는데 도움은 되지만, 원하는 디자인을 적용하기 어렵다

```python
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
# StringField : 글자수 제한이 있는 제목
# TextAreaField : 글자수 제한이 없는 내용

class QuestionForm(FlaskForm):
    subject = StringField('제목', validators=[DataRequired()])
    # 제목 : 폼 라벨
    # validators : 검증을 위해 사용되는 도구 -> DataRequired(필수 항목), Email, Length -> 여러개 같이 사용 가능
    content = TextAreaField('내용', validators=[DataRequired()])
    # DataRequired('제목은 필수입력 항목입니다') 이런식으로 하면 에러를 한국어로 띄우기 가능
```

```python
@bp.route('/create/')
def create():
    form = QuestionForm()
    # forms.py에서 QuestionForm class import해서 form으로 받은 후 html에 넘겨줌
    return render_template('question/question_form.html', form=form)
```
