(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{254:function(o,e,t){"use strict";t.r(e);var a=t(4),n=Object(a.a)({},function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"数据库背景知识以及-mongodb-入门简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库背景知识以及-mongodb-入门简介","aria-hidden":"true"}},[o._v("#")]),o._v(" 数据库背景知识以及 MongoDB 入门简介")]),o._v(" "),t("blockquote",[t("p",[o._v("最近在给团队内的前端同学准备一期关于 MongoDB 的分享，详细了解了下一些背景知识和基本概念，整理为本文。")])]),o._v(" "),t("p",[o._v("了解数据库的同学应该都知道 MongoDB 是文档型数据库，MongoDB 官网的第一句话也明确说明了这一点，摘录如下：")]),o._v(" "),t("blockquote",[t("p",[o._v("MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.")])]),o._v(" "),t("p",[o._v("那么，什么是文档型数据库呢？这要从数据库的发展过程说起。")]),o._v(" "),t("h2",{attrs:{id:"背景知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景知识","aria-hidden":"true"}},[o._v("#")]),o._v(" 背景知识")]),o._v(" "),t("p",[o._v("以前，我们听到数据库一般都是说的 MySQL，Oracle，SQL Server 这样的词，这些都是数据库的具体实现，在数据库类型上属于关系型数据库（Relational Database Management System， RDBMS）。")]),o._v(" "),t("p",[o._v("关系关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。简单说，关系型数据库是由多张能互相联接的二维行列表格组成的数据库。关系型数据库的一个特点是使用 SQL（Structured Query Language）语言来处理数据。")]),o._v(" "),t("p",[o._v("为保证数据的有效性，关系型数据库的设计基本原则是 ACID 原则，即满足原子性、一致性、隔离性和持久性原则。")]),o._v(" "),t("ul",[t("li",[o._v("Atomicity（原子性），一个数据库事务（transaction）中的所有操作，或者全部完成，或者全部不完成，不完成需要回滚。")]),o._v(" "),t("li",[o._v("Consistency（一致性），在事务开始之前和事务结束以后，数据库的完整性没有被破坏。")]),o._v(" "),t("li",[o._v("Isolation（隔离性），允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。")]),o._v(" "),t("li",[o._v("Durability（持久性），事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。")])]),o._v(" "),t("blockquote",[t("p",[o._v("所谓数据库事务（transaction），可以简单理解为针对数据库的一组任务，这组任务是连贯可靠的，运行结束后，不管成功还是失败，都可以保证数据库的完整性。比如，A 向 B 汇了 1000 块钱，此时银行数据库事务会从 A 的账户中扣除 1000，并在 B 的账户中增加 1000。如果向 B 账户汇款失败，那么这个数据库事务会进行回滚，将 1000 重新汇入 A 的账户。这样数据库事务运行完成后，数据库是完整的。")])]),o._v(" "),t("p",[o._v("除了关系型数据库以外，近年来，另一种数据库逐步兴起并得到大规模运用，那就是 NoSQL，Not ony SQL，意即“不仅仅是 SQL”，是对不同于传统的关系型数据库的数据库管理系统的统称。NoSQL 不使用 SQL 作为查询语言，其数据存储可以不需要固定的表格模式。常见的 NoSQL 有 MongoDB（文档型）、Redis（Key-Value 型）等。")]),o._v(" "),t("p",[o._v("与关系型数据库类似，NoSQL 也遵循一个设计基本原则，BASE 原则，即基本可用、软事务和最终一致性原则。")]),o._v(" "),t("ul",[t("li",[o._v("Basically Availble，基本可用（绝大部分时间可用）。")]),o._v(" "),t("li",[o._v("Soft-state，软事务，不保证数据总是一致的。")]),o._v(" "),t("li",[o._v("Eventually Consistent，最终一致性，在将来的某个时间点数据将会是一致的。")])]),o._v(" "),t("p",[o._v("看起来 BASE 原则并没有 ACID 原则来的严谨可靠，为什么近年来 NoSQL 还得到了极大的发展和运用呢？这要从近年来网络的发展说起了。")]),o._v(" "),t("p",[o._v("2000 年以后，从 Web 2.0（ajax）的兴起，到移动互联网（mobile phone）的蓬勃发展，再到万物互联的物联网（things），大数据 + 分布式已经是标准配置。技术的复杂度在越变越高，这仅仅是表象，技术的变化背后是数据的快速变化。")]),o._v(" "),t("p",[o._v("可以从以下四个维度考量数据的变化：")]),o._v(" "),t("ol",[t("li",[o._v("Data Volume，数据量的变化")])]),o._v(" "),t("p",[o._v("随着 PC 互联网的普及，人们可以通过 PC 访问网络，网络服务提供者有了迫切的数据存储与处理的需求。随着移动互联网的发展，人们上网的方式有了极大的改变，可以通过智能手机上网了，上网时长也得到极大的增加，产生的数据量也指数级的增加。")]),o._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[o._v("Data Velocity，数据变化的速度")])]),o._v(" "),t("p",[o._v("随着网络、技术的发展，各种新事物层出不穷，业务形态在快速的变化，对应的数据模型也在频繁的变化，对应到数据库里，可能就是字段的变更十分频繁。")]),o._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[o._v("Data Variety，数据的种类")])]),o._v(" "),t("p",[o._v("技术的发展导致数据种类得到极大的丰富。以前无法采集的数据可以采集到了，以前拥有的数据更加精细和准确了。比如针对社交应用来说，以前可能只有用户发表的内容，现在可以搜集到用户的地理位置、使用时长、应用打开时间段、打开频次等各种数据。")]),o._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[o._v("Data Valence，数据价，数据的连接")])]),o._v(" "),t("p",[o._v("所谓数据价，就是数据的连接能力，与其他数据间发生反应的能力。这个不用多说，很多大数据公司的核心价值就是数据和数据的连接能力。")]),o._v(" "),t("p",[o._v("前面说到，目前大数据 + 分布式已经是标配，用于存储数据的数据库也需要进行分布式部署。对于一个分布式系统来说，CAP 定理是一个不可能三角。所谓 CAP 定理，即对于一个分布式计算系统来说，不可能同时满足以下三点：")]),o._v(" "),t("ul",[t("li",[o._v("一致性（Consistency），等同于所有节点访问同一份最新的数据副本。")]),o._v(" "),t("li",[o._v("可用性（Availability），每次请求都能获取到非错的响应，但是不保证获取的数据为最新数据。")]),o._v(" "),t("li",[o._v("分区容错性（Partition tolerance），以实际效果而言，分区相当于对通信的时限要求。系统如果不能在时限内达成数据一致性，就意味着发生了分区的情况，必须就当前操作在C和A之间做出选择。")])]),o._v(" "),t("p",[o._v("想象两个节点分处分区两侧，允许至少一个节点更新状态会导致数据不一致，即丧失了C性质。如果为了保证数据一致性，将分区一侧的节点设置为不可用，那么又丧失了A性质。除非两个节点可以互相通信，才能既保证C又保证A，这又会导致丧失P性质。")]),o._v(" "),t("p",[o._v("传统的 RDBMS 更多的聚焦在数据一致性和可用性方面，即满足 CA，而 NoSQL 更多的是聚焦在 AP、CP 方面，以更好的满足分布式诉求。"),t("br"),o._v("\n各个数据库的侧重点不同，因此适合的使用场景也不同，开发者应该根据业务的实际需要仔细考量，比如银行类的应用需要更多的考虑到数据的一致性和可用性，因此采用 RDBMS 比较合理。")]),o._v(" "),t("h2",{attrs:{id:"mongodb-基本概念和-mongoose-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-基本概念和-mongoose-简介","aria-hidden":"true"}},[o._v("#")]),o._v(" MongoDB 基本概念和 Mongoose 简介")]),o._v(" "),t("p",[o._v("MongoDB 是一个文档型的数据库，即以文档的形式保存数据，非常适合无结构或者半结构化的数据存储。")]),o._v(" "),t("blockquote",[t("p",[o._v("A database has many collections, a collection has many documents.")])]),o._v(" "),t("p",[o._v("上面这句话摘自 MongoDB 的官方文档，清晰的描述了 MongoDB 的基本结构，即一个数据库里有很多集合，一个集合中有很多文档，如下图。")]),o._v(" "),t("p",[t("img",{attrs:{src:"/images/2018/db-background-and-mongo-introduction/document.png",alt:""}}),o._v(" "),t("img",{attrs:{src:"/images/2018/db-background-and-mongo-introduction/collection.png",alt:""}})]),o._v(" "),t("blockquote",[t("p",[o._v("可以将此处的集合和文档类比关系型数据库中的表和行。")])]),o._v(" "),t("p",[o._v("MongoDB 本身提供了一套数据 CRUD 的 API("),t("code",[o._v("db.[collectionName].[apiName]")]),o._v(")，比如 "),t("code",[o._v("db.users.find({ id: 123 })")]),o._v("。具体不做赘述，可以参考官方文档说明。")]),o._v(" "),t("p",[o._v("这里介绍一下 Mongoose，它是一个针对 MongoDB 的对象建模工具，可以让我们更方便的使用 MongoDB。在 Mongoose 中，需要理解四个基本概念：")]),o._v(" "),t("ul",[t("li",[o._v("Schema：定义文档有哪些字段")]),o._v(" "),t("li",[o._v("Model：文档的构造器，由 Schema 编译而来，用法上类似于 MongoDB 的 Collection")]),o._v(" "),t("li",[o._v("Document：具体的文档，是 Model 的实例，与 MongoDB 的 document 一一对应")]),o._v(" "),t("li",[o._v("Connection：数据库连接")])]),o._v(" "),t("p",[o._v("在定义 Schema 的时候，我们可以定义文档的结构，字段的类型，以及相关的校验。这样，在写入数据的时候，Mongoose 会自动帮助我们进行数据校验。具体用法上可以参考官方文档，此处也不再赘述了。")]),o._v(" "),t("h2",{attrs:{id:"其他概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他概念","aria-hidden":"true"}},[o._v("#")]),o._v(" 其他概念")]),o._v(" "),t("p",[t("strong",[o._v("索引")]),t("br"),o._v("\n索引就像书的目录，通过书的目录就准确、快速的定位到书籍具体的内容。可以参考这篇"),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/23624390",target:"_blank",rel:"noopener noreferrer"}},[o._v("文章"),t("OutboundLink")],1),o._v("理解。")]),o._v(" "),t("p",[t("strong",[o._v("事务")]),t("br"),o._v("\n前面已经简单描述过，更多细节可以参考阅读"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Database_transaction",target:"_blank",rel:"noopener noreferrer"}},[o._v("这里"),t("OutboundLink")],1),o._v("。")]),o._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接","aria-hidden":"true"}},[o._v("#")]),o._v(" 参考链接")]),o._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://neo4j.com/blog/why-nosql-databases/?ref=blog",target:"_blank",rel:"noopener noreferrer"}},[o._v("Why We Need NoSQL Databases"),t("OutboundLink")],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://neo4j.com/blog/acid-vs-base-consistency-models-explained/?ref=blog",target:"_blank",rel:"noopener noreferrer"}},[o._v("ACID vs. BASE Explained"),t("OutboundLink")],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CAP%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[o._v("维基百科：CAP定理"),t("OutboundLink")],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"http://www.julianbrowne.com/article/brewers-cap-theorem",target:"_blank",rel:"noopener noreferrer"}},[o._v("Brewer's CAP Theorem"),t("OutboundLink")],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://docs.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[o._v("MongoDB 官方文档"),t("OutboundLink")],1)]),o._v(" "),t("li",[t("a",{attrs:{href:"https://mongoosejs.com/docs//",target:"_blank",rel:"noopener noreferrer"}},[o._v("Mongoose 官方文档"),t("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=n.exports}}]);