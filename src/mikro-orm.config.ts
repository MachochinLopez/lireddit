import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
  entities: [Post],
  dbName: 'lireddit',
  user: 'root',
  password: '1234',
  debug: !__prod__,
  type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];