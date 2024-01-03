# 컬렉션 프레임워크

- 자료구조를 사용해 객체들을 효율적으로 추가, 삭제, 검색
- 컬렉션 : 객체의 저장
- 프레임워크 : 사용 방법을 정해놓은 라이브러리
- List, Set, Map...

## List 컬렉션

- 객체를 인덱스로 관리
- 저장 용량이 자동으로 증가
- 객체를 저장할 때 자동 인덱스가 부여 됨
- 객체의 번지를 참조 ➡️ 동일한 객체 중복 저장 가능 ➡️ 동일한 번지 참조
- null 저장 가능 ➡️ 객체 참조 ❌
<table>
  <tr>
    <th>기능</th>
    <th>메소드</th>
    <th>📝</th>
  </tr>
  <tr>
    <td rowspan="3">추가</td>
    <td>boolean add(E e)</td>
    <td>객체 맨 끝에 추가</td>
  </tr>
  <tr>
    <td>void add(int index, E element)</td>
    <td>인덱스에 객체 추가</td>
  </tr>
  <tr>
    <td>E set(int index, E element)</td>
    <td>주어진 인덱스에 저장된 객체를 주어진 객체로 바꿈</td>
  </tr>
  <tr>
    <td rowspan="4">검색</td>
    <td>boolean contains(Object o)</td>
    <td>객체가 저장되어 있는지 조사</td>
  </tr>
  <tr>
    <td>E get(int index)</td>
    <td>주어진 인덱스에 저장된 객체 리턴</td>
  </tr>
  <tr>
    <td>boolean isEmpty()</td>
    <td>컬렉션이 비어있는지 조사</td>
  </tr>
  <tr>
    <td>int size()</td>
    <td>저장되어 있는 전체 객체 수 리턴</td>
  </tr>
  <tr>
    <td rowspan="3">삭제</td>
    <td>void clear()</td>
    <td>저장된 모든 객체 삭제</td>
  </tr>
  <tr>
    <td>E remove(int index)</td>
    <td>주어진 인덱스에 저장된 객체 삭제</td>
  </tr>
  <tr>
    <td>boolean remove(Object o)</td>
    <td>주어진 객체 삭제</td>
  </tr>
</table>

### ArrayList

- List 인터페이스의 대표적인 구현 클래스
- 내부에 10개의 객체를 저장할 수 있는 초기 용량을 가짐
- ✅ 빈번한 객체 삭제와 삽입이 일어나는 곳에서는 ArrayList를 사용하지 않는 것이 좋음
- ✅ 인덱스를 이용해 객체 검삭, 맨 마지막에 객체 추가 ➡️ 좋은 성능

```java
List<E> list = new ArrayList<E>();

List<String> list = new ArrayList<String>();
List<String> list = new ArrayList(); // 우측 E 파라미터 생략 ➡️ 왼쪽 따라감
```

```java
public static void main(String[] args) {
    List<String> list = new ArrayList<String>();

    // 객체 추가
    list.add("JAVA");
    list.add("Python");
    list.add("JavaScript");

    // 총 객체 수
    int size = list.size();
    System.out.println("총 객체 수 : " + size);

    String skill = list.get(0);
    System.out.println("첫번째 : " + skill);

    for(int i=0; i<list.size(); i++) {
        // 인덱스에 해당하는 객체
        String str = list.get(i);
        System.out.println(i + " : " + str);
    }

    // 객체 삭제 - 인덱스, 값
    list.remove(2);
    list.remove("Python");

    for(int i=0; i<list.size(); i++) {
        String str = list.get(i);
        System.out.println(i + " : " + str);
    }
}

/*
총 객체 수 : 3
첫번째 : JAVA
0 : JAVA
1 : Python
2 : JavaScript
0 : JAVA
*/
```

### Vector

- ArrayList와 동일한 내부 구조
- 동기화된 메소드로 구성 : 멀티스레드가 동시에 Vector의 메소드를 실행할 수 없음
- 멀티 스레드 환경에서 안전하게 추가, 삭제 가능 ➡️ **스레드에 안전(thread safe)**

```java
List<E> list = new Vector<E>();
List<E> list = new Vector();
```

### LinkedList

- 인접 참조를 링크해서 체인처럼 관리
- 특정 인덱스의 객체를 제거 or 삽입 ➡️ 앞뒤 링크만 변경, 나머지 링크는 변경되지 않음

```java
List<E> list = new LinkedList<E>();
List<E> list = new LinkedList<>();
```

- 순차적으로 추가, 삭제하거나 검색은 느리지만 **중간에 추가/삭는 빠르다**

## Set 컬렉션

- 저장 순서가 유지되지 않음
- 객체 중복 저장 ❌
- 하나의 null만 저장 가능
- HashSet, LinkedHashSet, TreeSet...

<table>
  <tr>
    <th>기능</th>
    <th>메소드</th>
    <th>📝</th>
  </tr>
  <tr>
    <td>추가</td>
    <td>boolean add(E e)</td>
    <td>주어진 객체 저장<br />true: 성공적으로 저장<br />false: 중복 객체</td>
  </tr>
  <tr>
    <td rowspan="4">검색</td>
    <td>boolean contains(Object o)</td>
    <td>주어진 객체가 저장되어 있는지 조사</td>
  </tr>
  <tr>
    <td>boolean isEmpty()</td>
    <td>컬렉션 비어 있는지 조사</td>
  </tr>
  <tr>
    <td>Iterator<E> iterator()</td>
    <td>저장된 객체를 한 번씩 가져오는 반복자 리턴</td>
  </tr>
  <tr>
    <td>int size()</td>
    <td>저장되어 있는 전체 객체 수 리턴</td>
  </tr>
  <tr>
    <td rowspan="2">삭제</td>
    <td>void clear()</td>
    <td>저장된 모든 객체 삭제</td>
  </tr>
  <tr>
    <td>boolean remove(Object o)</td>
    <td>주어진 객체 삭제</td>
  </tr>
</table>

### Iterator 인터페이스 메소드

| 리턴 타입 |  메소드   | 📝                                                  |
| :-------: | :-------: | --------------------------------------------------- |
|  boolean  | hasNext() | true: 가져올 객체 있음<br />false: 가져올 객체 없음 |
|     E     |  next()   | 컬렉션에서 객체 하나 가져옴                         |
|   void    | remove()  | 객체 제거                                           |

```java
Set<String> set = ...;
Iterator<String> iterator = set.iterator();
while(iterator.hasNext()) { // 저장된 객체 수만큼 반복
  String str = iterator.next(); // 저장된 객체 가져옴
}

// ✨ 향상된 for문
Set<String> set = ...;
for(String str : set) { // 저장된 객체 수만큼 반복
  // ...
}
```

### HashSet

```java
Set<E> set = new HashSet<E>();
```

- 객체들을 순서 없이 저장
- 동일한 객체는 중복 저장하지 않음
  - 동일한 객체 : HashCode() 리턴값 동일 ➡️ equals()리턴값 true

```java
public static void main(String[] args) {
    Set<String> set = new HashSet<>();

    set.add("JAVA");
    set.add("Python");
    set.add("JavaScript");

    int size = set.size();
    System.out.println("총 객체 수 : " + size);

    Iterator<String> iterator = set.iterator(); // 반복자 get
    while (iterator.hasNext()) {
        String str = iterator.next();
        System.out.println(str);
    }

    set.remove("JavaScript");

    System.out.println("총 객체 수 : " + set.size());

    iterator = set.iterator(); // 반복자 get : 다시 가져와야 함
    for(String str : set) {
        System.out.println(str);
    }

    set.clear();
    if(set.isEmpty()) {
        System.out.println("set이 비어 있습니다");
    }
}
/*
총 객체 수 : 3
JAVA
JavaScript
Python
총 객체 수 : 2
JAVA
Python
set이 비어 있습니다
*/
```

## Map 컬렉션

- key, value로 구성된 Map.Entry 객체를 저장
- Entry : Map 인터페이스 내부에 선언된 중첩 인터페이스
- key : 중복 저장 ❌
  - 기존 저장된 키와 동일한 키로 값 저장 : 대체됨
- value : 중복 저장 👌
- HashMap, Hashtable, LinkedHashMap, Properties, TreeMap...

<table>
  <tr>
    <th>기능</th>
    <th>메소드</th>
    <th>📝</th>
  </tr>
  <tr>
    <td>추가</td>
    <td>V put(K key, V value)</td>
    <td>주어진 키로 값 저장<br />새로운 키 : null 리턴<br />동일한 키 있을 때 : 값 대체 후 이전 값 리턴</td>
  </tr>
  <tr>
    <td rowspan="8">검색</td>
    <td>boolean containsKey(Object key)</td>
    <td>주어진 키가 있는지 확인</td>
  </tr>
  <tr>
    <td>boolean containsValue(Object value)</td>
    <td>주어진 값이 있는지 확인</td>
  </tr>
  <tr>
    <td>Set<\Map.Entry<\K,V>> entrySet()</td>
    <td>키와 값의 쌍으로 구성된 모든 Map.Entry 객체를 Set에 담아서 리턴</td>
  </tr>
  <tr>
    <td>V get(Object key)</td>
    <td>주어진 키가 있는 값을 리턴</td>
  </tr>
  <tr>
    <td>boolean isEmpty()</td>
    <td>컬렉션이 비어있는지 확인</td>
  </tr>
  <tr>
    <td>Set<\K> keySet()</td>
    <td>모든 키를 Set 객체에 담아서 리턴</td>
  </tr>
  <tr>
    <td>int size()</td>
    <td>저장된 키의 총 수</td>
  </tr>
  <tr>
    <td>Collection<\V> values()</td>
    <td>저장된 모든 값을 Collection에 담아서 리턴</td>
  </tr>
  <tr>
    <td rowspan="2">삭제</td>
    <td>void clear()</td>
    <td>모든 Map.Entry(키와 값)를 삭제</td>
  </tr>
  <tr>
    <td>V remove(Object key)</td>
    <td>주어진 키와 일치하는 Map.Entry를 삭제하고 값을 리턴</td>
  </tr>
</table>

### 저장된 전체 객체 얻기

1. keySet() ➡️ key Set 컬렉션 : 반복자 ➡️ get()

   ```java
   Map<K, V> map = ...;
   Set<K> keySet = map.keySet();
   Iterator<K> keyIterator = keySet.iterator();
   while(keyIterator.hasNext()) {
    K key = keyIterator.next();
    V value = map.get(key);
   }
   ```

2. entrySet() ➡️ Map.Entry Set 컬렉션 : 반복자 ➡️ getKey(), getValue()
   ```java
   Set<Map.Entry<K, V>> entrySet = map.entrySet();
   Iterator<Map.Entry<K, V>> entryIterator = entrySet.iterator();
   while(entryIterator.hasNext()) {
    Map.Entry<K, V> entry = entryIterator.next();
    K key = entry.getKey();
    V value = entry.getValue();
   }
   ```

### HashMap

```java
Map<K, V> map = new HashMap<K, V>();
```

- 키와 값의 타입은 기본 타입(byte, short, int, float, double, boolean, char) 사용 ❌
- 클래스, 인터페이스 타입만 사용 가능 ➡️ String, Integer...

```java
public static void main(String[] args) {
    Map<String, Integer> map = new HashMap<String, Integer>();

    // 추가
    map.put("A", 1);
    map.put("B", 2);
    map.put("C", 3);
    System.out.println("총 Entry 수 : " + map.size());

    // 검색
    System.out.println("A : " + map.get("A"));

    // 객체 하나씩 얻기 1
    Set<String> keySet = map.keySet();
    Iterator<String> keyIterator = keySet.iterator();
    while (keyIterator.hasNext()) {
        String key = keyIterator.next();
        Integer value = map.get(key);
        System.out.println("Key : " + key + " Value : " + value);
    }

    map.remove("A");
    System.out.println("총 Entry 수 : " + map.size());

    // 객체 하나씩 얻기 2
    Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
    Iterator<Map.Entry<String, Integer>> entryIterator = entrySet.iterator();
    while (entryIterator.hasNext()) {
        Map.Entry<String, Integer> entry = entryIterator.next();
        String key = entry.getKey();
        Integer value = entry.getValue();
        System.out.println("Key : " + key + " Value : " + value);
    }

    // 전체 삭제
    map.clear();
    System.out.println("총 Entry 수 : " + map.size());
}
/*
총 Entry 수 : 3
A : 1
Key : A Value : 1
Key : B Value : 2
Key : C Value : 3
총 Entry 수 : 2
Key : B Value : 2
Key : C Value : 3
총 Entry 수 : 0
*/
```

### Hashtable

- 동기화된 메소드로 구성
- **thread safe**

```java
Map<K, V> map = new Hashtable<K, V>();
```

## LIFO, FIFO

- LIFO(Last In First Out, 후입선출) : Stack 클래스
- FIFO(First In First Out, 선입선출) : Queue 인터페이스

### Stack

| 리턴 타입 |    메소드    | 📝                                           |
| :-------: | :----------: | -------------------------------------------- |
|     E     | push(E item) | 주어진 객체를 스택에 넣음                    |
|     E     |    peek()    | 스택의 맨 위 객체를 가져옴. 스택에서 제거 ❌ |
|     E     |    pop()     | 스택의 맨 위 객체 가져옴. 스택에서 제거      |

```java
Stack<E> stack = new Stack<E>();
```

### Queue

| 리턴 타입 |   메소드   | 📝                                 |
| :-------: | :--------: | ---------------------------------- |
|  boolean  | offer(E e) | 주어진 객체를 넣음                 |
|     E     |   peek()   | 객체 하나를 가져옴. 큐에서 제거 ❌ |
|     E     |   poll()   | 객체 하나를 가져옴. 큐에서 제거    |

- Queue 인터페이스를 구현한 대표적 클래스 : LinkedList

```java
Queue<E> queue = new LinkedList<E>();
```
