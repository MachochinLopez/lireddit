import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
export default {
    entities: [Post],
    dbName: 'lireddit',
    user: 'root',
    password: '1234',
    debug: !__prod__,
    type: 'postgresql'
};
//# sourceMappingURL=mikro-orm.config.js.map