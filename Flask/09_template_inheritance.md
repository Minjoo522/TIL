# 템플릿 상속(Template Inheritance), include

- Base가 되는 HTML 템플릿을 만들어서 자식 HTML에 상속시킬 수 있음

## 부모 템플릿

- {% block content %} {% endblock %} 사용하여 자식 템플릿의 내용이 들어가야 할 부분을 지정
- {% block title %}, {% block head %}도 사용 가능

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../static/css/style.css" />
    <title>Customer Management System</title>
  </head>
  <body>
    <!-- Header -->
    <!-- <header>
      <h1>Customer Management System</h1>
    </header> -->
    <!-- Nav bar -->
    <nav class="max-width">
      <ul class="menu">
        <li><a class="menu__item" href="/users">User</a></li>
        <li><a class="menu__item" href="/orders">Order</a></li>
        <li><a class="menu__item" href="/order_items">Order Item</a></li>
        <li><a class="menu__item" href="/items">Item</a></li>
        <li><a class="menu__item" href="/stores">Store</a></li>
      </ul>
      <button type="button" onclick="location.href='/login'">LOGOUT</button>
    </nav>
    <!-- Main -->
    <main class="max-width">{% block content %} {% endblock %}</main>
  </body>
</html>
```

## 자식 템플릿

- {% extends 'layout.html' %} 로 부모 템플릿 상속 받음
- {% block content %} {% endblock %} 로 해당 내용 감싸주면 됨

```html
{% extends 'layout.html' %} {% block content %}
<!-- Stores Table -->
<table>
  <tr>
    <th align="left">id</th>
    <th>type</th>
    <th>name</th>
    <th>unit_price</th>
  </tr>
  {% for item in items %}
  <tr class="table__item hover">
    <td>
      <a class="table__item id" href="item_detail/{{item['Id']}}"
        >{{ item['Id'] }}
      </a>
    </td>
    <td align="center">{{ item['Type'] }}</td>
    <td align="center">{{ item['Name'] }}</td>
    <td align="center">{{ item['UnitPrice'] }}</td>
  </tr>
  {% endfor %}
</table>
{% endblock %}
```

## include

- {% include "navbar.html" %} 사용해 필요한 부분 삽입해 줄 수 있음
- 특정 영역을 중복, 반복해서 사용할 때 include 기능을 사용하면 유지 보수하는데 유리하다
