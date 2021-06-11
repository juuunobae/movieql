 ### GraphQL로 해결할 수 있는 문제
 1. over-feching
    - endpoint로 요청하여 받은 정보가 사용자가 사용하지 않을 불필요한 데이터를 담고있는 경우
    - 요청한 영역의 정보보다 많은 정보를 서버에서 받는 것
    > over-feching 없이 코드를 짤 수 있고 개발자가 어떤 정보를 원하는지에 대해 통제할 수 있다.
    > 필요한 정보만 요청할 수 있는 것이다.
 2. under-feching
    - 하나의 endpoint로 필요한 모든 데이터 요청을 처리하지 못하는 것
    - 타임라인을 보여주기 위해 알림정보, 사용자 정보, 타임라인 등 각 정보를 가져올 수 있는 API를 여러 번 요청하는 것
    > 여러 정보들을 한 번의 요청으로 해결할 수 있다.

# Initialize
- 프로젝트 폴더에 `yarn init` 명령어를 사용해 초기화해준다.
- `package.json`파일이 생성된다.
- Github repositorie에 연결

## 모듈설치
`yarn add graphql-yoga`
```javascript
    // index.js
    import { GraphQLServer } from 'graphql-yoga';
    // 최신 문법이기 때문에 babel을 설치한 후 사용하여야 한다.
```

### babel
1. 관련 모듈 설치
   - `yarn add babel-node --dev`
   - `yarn global add babel-cli`
   - `yarn add babel-cli bable-preset-env babel-preset-stage-2 --dev`
  
2. .babelrc 생성
```javascript
    {
        "presets": ["env", "stage-3"]
    }
```
3. package.json 내용 수정
```javascript
    // package.json
    {
        ...

        "scripts": {
            "start": "nodemon --exec babel-node index.js"
        }
    }
```

# GraphQL 동작
- query를 보내면 graphql이 서버에서 `schema.graphql`파일에 있는 query가 정의되어 있는 `type Query`를 찾아 그 query에 맞는 Resolvers를 찾는다.

## 사용자가 요청하는 데이터를 응답하는 법
- GraphQL Resolvers는 GraphQLServer에서 요청을 받는다.
```javascript
    index.js
    const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
});
```
- GraphQLServer가 Query나 Mutation의 정의(graphql.schema.graphql)를 발견하면 Resolver(resolvers)를 찾을 것이고 해당 함수를 실행할 것이다.
```javascript
    // graphql/resolvers.js
    const getById = (id) => {
        const filteredPeople = people.filter((person) => String(id) === person.id);
        return filteredPeople[0]; 
    };

    const resolvers = {
        // resolver가 해당하는 데이터를 찾아 응답
        Query: {
            person: (_, { id }) => getById(id),
        }
    }
```

# Playground
- localhost:4000
- graphql-yoga를 설치하면 따라오는 것이다.
- Database를 테스트 할 수 있다.