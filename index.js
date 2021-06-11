import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  // typeDefs = 사용할 타입들에 대한 정의
  typeDefs: "graphql/schema.graphql",
  // resolvers = typeDefs에 의해 지정된 필드에 대한 resolver(해결?)를 정의한다.
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));

// Schema: 사용자에게  보내거나 사용자로부터 받을 data에 대한 설명
