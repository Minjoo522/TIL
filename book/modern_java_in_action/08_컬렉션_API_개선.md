# 컬렉션 API 개선

# 컬렉션 팩토리

- 작은 컬렉션 객체를 쉽게 만들 수 있는 방법
- `Arrays.asList()`
  - 고정 크기 리스트 생성
  - 새 요소를 추가하거나 삭제할 수 없음

```java
List<String> friends = Arrays.asList("Raphael, Olivia, Thibaut");
friends.set(0, "Richard"); // 갱신 가능
friends.add("Thibaut"); // 불가 ❌ / UnsupportedOperationException
```

```java
Set<String> friends = new HashSet<>(Arrays.asList("Raphael", "Olivia", "Thibaut"));
Set<String> friends2 = Stream.of("Raphael", "Olivia", "Thibaut")
        .collect(Collectors.toSet());
```

- 위 방법 모두 매끄럽지 못하며 내부적으로 불필요한 객체 할당이 필요
- 결과는 변환할 수 있는 집합

## 리스트 팩토리

- `List.of`
- 변경 할 수 없는 리스트 생성
- null 요소 금지

```java
List<String> friends = List.of("Raphael", "Olivia", "Thibaut");
friends.add("May"); // UnsupportedOperationException
```

- 데이터 처리 형식을 설정하거나 데이터를 변환할 필요가 없다면 팩토리 메서드 이용할 것을 권장

## 집합 팩토리

- `Set.of`
- 중복된 요소를 제공하는 경우 IlligalArgumentException 발생

```java
Set<String> friends = Set.of("Raphael", "Olivia", "Thibaut");
```

## 맵 팩토리

- `Map.of`, `Map.ofEntries` + `Map.entry`

```java
Map<String, Integer> ageOfFriends = Map.of("Raphael", 30, "Olivia", 25, "Thibaut", 26);
Map<String, Integer> ageOfFriends2 = Map.ofEntries(Map.entry("Raphael", 30),
        Map.entry("Olivia", 25),
        Map.entry("Thibaut", 26));
```

# 리스트와 집합 처리

### **기존 컬렉션을 바꾸는** 기능들

- `romoveIf` : 프레디케이트를 만족하는 요소를 제거 / `List, Set` 구현하거나 구현을 상속받은 모든 클래스
- `replaceAll` : UnaryOperator 함수를 이용해 요소를 바꿈 / `List`에서 이용할 수 있는 기능
- `sort` : 리스트 정렬 / `List` 인터페이스에서 제공

## removeIf

- 삭제할 요소를 가리키는 프레디케이트를 인수로 받는다

```java
List<String> friendsList = new ArrayList<>(List.of("Raphael", "Olivia", "Thibaut"));

// ConcurrentModificationException 발생
for (String friend : friendsList) {
    if (friend.startsWith("R")) {
        friendsList.remove(friend);
    }
}

// for-each는 내부적으로 Iterator 객체 사용
for (Iterator<String> iterator = friendsList.iterator(); iterator.hasNext();) {
    String friend = iterator.next();
    if (friend.startsWith("R")) {
        friendsList.remove(friend);
        // iterator.remove();로 바꾸면 해결되지만 복잡함
    }
}
// 반복자의 상태는 컬렉션의 상태와 동기화되지 않음
```

```java
friendsList.removeIf(friend -> friend.startsWith("R"));
```

## replaceAll

- 리스트의 각 요소를 새로운 요소로 바꿀 수 있음

```java
// stream의 map으로 변경할 수 있지만 새로운 리스트를 만듦
friendsList.stream()
        .map(String::toUpperCase)
        .toList()
        .forEach(System.out::println);
```

```java
friendsList.replaceAll(String::toUpperCase);
```

# 맵 처리

## forEach

- BiConsumer(키와 값을 인수로 받음)를 인수로 받음

```java
// jva 8 이전 방법
for (Map.Entry<String, Integer> entry: ageOfFriends.entrySet()) {
    String friend = entry.getKey();
    Integer age = entry.getValue();
    System.out.println(friend + " is " + age + " years old");
}
```

```java
Map<String, Integer> ageOfFriends = Map.of("Raphael", 30, "Olivia", 25, "Thibaut", 26);
ageOfFriends.forEach((friend, age) -> System.out.println(friend + " is " + age + " years old"));
```

## 정렬 메서드

- `Entry.comparingByValue`
- `Entry.comparingByKey`

```java
ageOfFriends.entrySet().stream()
        .sorted(Entry.comparingByKey())
        .forEachOrdered(System.out::println);
```

## getOrDefault

- 찾으려는 키가 존재하지 않으면 `NullPointerException` 발생을 방지하고 기본값을 반환
- 첫 번째 인수 : 키
- 두 번째 인수 : 기본값

```java
System.out.println(ageOfFriends.getOrDefault("Olivia", 0));
System.out.println(ageOfFriends.getOrDefault("May", 0)); // May가 없으므로 0 리턴
```

## 계산 패턴

- `computeIfAbent` : 제공된 키에 해당하는 값이 없으면 키를 이용해 새 값을 계산하고 맵에 추가
- `computeIfPresent` : 제공된 키가 존재하면 새 값을 계산하고 맵에 추가
- `compute` : 제공된 키로 새 값을 계산하고 맵에 저장

```java
// 이전 사용 방법
Map<String, List<String>> favoriteFruits = new HashMap<>(Map.ofEntries(Map.entry("Raphael", List.of("🍓", "🍎")),
        Map.entry("Olivia", List.of("🍌", "🍒")),
        Map.entry("Thibaut", List.of("🍊", "🍑"))));

String friend = "May";
List<String> fruits = favoriteFruits.get(friend);
if(fruits == null) {
    fruits = new ArrayList<>();
    favoriteFruits.put(friend, fruits);
}
fruits.add("🥭");
```

```java
favoriteFruits.computeIfAbsent("May", fruits -> new ArrayList<>())
        .add("🥭");
```

- `computeIfPresent`
  - 키가 존재하고 널이 아닐 때만 새 값을 계산
  - 키가 존재하지 않으면 아무 작업도 수행하지 않고 null 반환
  - 키가 존재하고 null이면 key 제거 후 null 반환 ➡️ 제거하고 싶은 경우 `remove` 메서드 오버라이드가 더 효과적

```java
Map<String, List<String>> favoriteFruits = new HashMap<>();
favoriteFruits.put("Raphael", new ArrayList<>(List.of("🍓", "🍎")));
favoriteFruits.put("Olivia", new ArrayList<>(List.of("🍌", "🍒")));
favoriteFruits.put("Thibaut", new ArrayList<>(List.of("🍊", "🍑")));

favoriteFruits.computeIfPresent("Olivia", (key, value) -> {
    value.add("🥭");
    return value;
});
```

- `compute`
  - 키의 존재 유무와 상관 없이 람다식(remappingFunction)수행
  - 키가 존재하지 않을 때 새로운 값을 추가, 키가 존재할 때 기존 값을 변경

```java
favoriteFruits.computeIfPresent("May", (key, value) -> {
    value.add("🥭");
    return value;
});
// May가 없으므로 아무 행동도 하지 않음
// {Olivia=[🍌, 🍒], Raphael=[🍓, 🍎], Thibaut=[🍊, 🍑]}

System.out.println(favoriteFruits);

favoriteFruits.compute("May", (key, value) -> {
    value = new ArrayList<>();
    value.add("🥭");
    return value;
});
// May가 없어도 람다식이 수행됨
```

## 삭제 패턴

- `remove`
- 키가 특정한 값과 연관되었을 때만 항목을 제거하는 오버로드 버전 메서드

```java
// 이전 버전
Map<String, Integer> ageOfFriends = new HashMap<>();
ageOfFriends.put("Raphael", 30);
ageOfFriends.put("Olivia", 25);
ageOfFriends.put("Thibaut", 26);

String key = "Raphael";
int value = 30;
if (ageOfFriends.containsKey(key) && ageOfFriends.get(key) == value) {
    ageOfFriends.remove(key);
}
```

```java
ageOfFriends.remove("Raphael", 30);
```

## 교체 패턴

- `replaceAll` : BiFunction을 적용한 결과로 각 항목의 값을 교체
- `replace` : 키가 존재하면 맵의 값을 바꾼다

```java
Map<String, String> favoriteMovies = new HashMap<>();
favoriteMovies.put("Raphael", "Star Wars");
favoriteMovies.put("Olivia", "james bond");
favoriteMovies.replaceAll((friend, movie) -> movie.toUpperCase());
// {Olivia=JAMES BOND, Raphael=STAR WARS}
```

```java
Map<String, String> favoriteMovies = new HashMap<>();
favoriteMovies.put("Raphael", "Star Wars");
favoriteMovies.put("Olivia", "james bond");
favoriteMovies.replace("Olivia", "Harry Potter");
// {Olivia=Harry Potter, Raphael=Star Wars}
```

## 합침

- `putAll`
  - 두 개의 맵을 합침
  - `중복된 키가 없을 때` 잘 동작

```java
Map<String, String> family = Map.ofEntries(
        Map.entry("Mom", "Star Wars"),
        Map.entry("Dad", "James Bond")
);
Map<String, String> friends = Map.ofEntries(
        Map.entry("Raphael", "Harry Potter"),
        Map.entry("Olivia", "Inside Out")
);
Map<String, String> everyone = new HashMap<>(family);
everyone.putAll(friends);
// {Olivia=Inside Out, Raphael=Harry Potter, Mom=Star Wars, Dad=James Bond}
```

- `merge`
  - 중복된 키를 어떻게 합칠지 결정하는 BiFunction을 인수로 받음
  - null 값과 관련된 복잡한 상황도 처리

```java
Map<String, String> family = Map.ofEntries(
        Map.entry("Mom", "Star Wars"),
        Map.entry("Dad", "James Bond"),
        Map.entry("May", "Matrix")
);
Map<String, String> friends = Map.ofEntries(
        Map.entry("Raphael", "Harry Potter"),
        Map.entry("Olivia", "Inside Out"),
        Map.entry("May", "Parasite")
);
Map<String, String> everyone = new HashMap<>(family);
friends.forEach((key, value) -> everyone.merge(key, value, (movie1, movie2) -> movie1 + " & " + movie2));
// {Olivia=Inside Out, Raphael=Harry Potter, Mom=Star Wars, May=Matrix & Parasite, Dad=James Bond}
```

# 개선된 ConcurrentHashMap

- 내부 자료구조의 특정 부분만 잠궈 동시 추가, 갱신 작업을 허용
  - 동기화된 Hashtable 버전에 비해 읽기 쓰기 연산 성능이 월등함

## 리듀스와 검색

- `forEach` : 각 키, 값 쌍에 주어진 액션 실행
- `reduce` : 모든 키 값 쌍을 제공된 리듀스 함수를 이용해 결과로 합침
- `search` : 널이 아닌 값을 반환할 때까지 키, 값 쌍에 함수를 적용

### 키, 값, Map.Entry, (키, 값) 인수 이용한 연산 형태 지원

- 키, 값으로 연산 : forEach, reduce, search
- 키로 연산 : forEachKey, reduceKeys, searchKeys
- 값으로 연산 : forEachValue, reduceValues, searchValues
- Map.Entry 객체로 연산 : forEachEntry, reduceEntires, searchEntries

#### 이들 연산에 제공하는 함수는 계산이 진행되는 동안 바뀔 수 있는 객체, 값, 순서 등에 의존하지 않아야 한다

#### 병렬성 기준값을 지정해야 한다

- 맵의 크기가 주어진 기준값보다 작으면 순차적으로 연산 수행
- 1 : 공통 스레드 풀을 이용해 병렬성을 극대화
- Long.MAX_VALUE : 한 개의 스레드로 연산 실행

```java
ConcurrentHashMap<String, Integer> ageOfFriendsConcurrent = new ConcurrentHashMap<>();
ageOfFriendsConcurrent.put("Raphael", 30);
ageOfFriendsConcurrent.put("Olivia", 25);
ageOfFriendsConcurrent.put("Thibaut", 26);
System.out.println(ageOfFriendsConcurrent.reduceValues(1, Integer::max));
```

## 계수

- `mappingCount` : 맵의 매핑 개수를 반환 / long 반환
  - 매핑의 개수가 int 범위를 넘어서는 이후의 상황을 대처가능(size는 int)

## 집합뷰

- `KeySet` : ConcurrentHashMap을 집합 뷰로 반환
  - 맵을 바꾸면 집합도 바뀌고 반대로 집합을 바꾸면 맵도 영향을 받음
- `newKeySet` : ConcurrentHashMap으로 유지되는 집합

```java
Set<String> keySetView = ageOfFriendsConcurrent.keySet();
System.out.println(keySetView); // [Olivia, Raphael, Thibaut]
ageOfFriendsConcurrent.put("May", 10);
System.out.println(keySetView); // [Olivia, Raphael, May, Thibaut]
```
