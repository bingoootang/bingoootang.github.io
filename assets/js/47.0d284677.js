(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{269:function(v,_,e){"use strict";e.r(_);var d=e(4),a=Object(d.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"正则表达式常用知识点备查手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式常用知识点备查手册","aria-hidden":"true"}},[v._v("#")]),v._v(" 正则表达式常用知识点备查手册")]),v._v(" "),e("h2",{attrs:{id:"常用元字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用元字符","aria-hidden":"true"}},[v._v("#")]),v._v(" 常用元字符")]),v._v(" "),e("ul",[e("li",[e("code",[v._v(".")]),v._v("  匹配除换行符以外的任意字符")]),v._v(" "),e("li",[e("code",[v._v("\\w")]),v._v(" 匹配字母或数字或下划线或汉字")]),v._v(" "),e("li",[e("code",[v._v("\\s")]),v._v(" 匹配任意的空白符")]),v._v(" "),e("li",[e("code",[v._v("\\d")]),v._v(" 匹配数字")]),v._v(" "),e("li",[e("code",[v._v("\\b")]),v._v(" 匹配单词的开始或结束")]),v._v(" "),e("li",[e("code",[v._v("^")]),v._v("  匹配字符串的开始")]),v._v(" "),e("li",[e("code",[v._v("$")]),v._v("  匹配字符串的结束")])]),v._v(" "),e("h2",{attrs:{id:"常用限定符（重复）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用限定符（重复）","aria-hidden":"true"}},[v._v("#")]),v._v(" 常用限定符（重复）")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("*")]),v._v(" 重复零次或更多次")]),v._v(" "),e("li",[e("code",[v._v("*?")]),v._v(" 重复任意次，但尽可能少重复")]),v._v(" "),e("li",[e("code",[v._v("+")]),v._v(" 重复一次或更多次")]),v._v(" "),e("li",[e("code",[v._v("+?")]),v._v(" 重复1次或更多次，但尽可能少重复")]),v._v(" "),e("li",[e("code",[v._v("?")]),v._v(" 重复零次或一次")]),v._v(" "),e("li",[e("code",[v._v("??")]),v._v(" 重复0次或1次，但尽可能少重复")]),v._v(" "),e("li",[e("code",[v._v("{n}")]),v._v(" 重复n次")]),v._v(" "),e("li",[e("code",[v._v("{n,}")]),v._v(" 重复n次或更多次")]),v._v(" "),e("li",[e("code",[v._v("{n,}?")]),v._v(" 重复n次以上，但尽可能少重复")]),v._v(" "),e("li",[e("code",[v._v("{n,m}")]),v._v(" 重复n到m次")]),v._v(" "),e("li",[e("code",[v._v("{n,m}?")]),v._v(" 重复n到m次，但尽可能少重复")])]),v._v(" "),e("h2",{attrs:{id:"常用反义码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用反义码","aria-hidden":"true"}},[v._v("#")]),v._v(" 常用反义码")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("\\W")]),v._v(" 匹配任意不是字母，数字，下划线，汉字的字符")]),v._v(" "),e("li",[e("code",[v._v("\\S")]),v._v(" 匹配任意不是空白符的字符")]),v._v(" "),e("li",[e("code",[v._v("\\D")]),v._v(" 匹配任意非数字的字符")]),v._v(" "),e("li",[e("code",[v._v("\\B")]),v._v(" 匹配不是单词开头或结束的位置")]),v._v(" "),e("li",[e("code",[v._v("[^x]")]),v._v(" 匹配除了x以外的任意字符")]),v._v(" "),e("li",[e("code",[v._v("[^aeiou]")]),v._v(" 匹配除了aeiou这几个字母以外的任意字符")])]),v._v(" "),e("h2",{attrs:{id:"分支条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支条件","aria-hidden":"true"}},[v._v("#")]),v._v(" 分支条件")]),v._v(" "),e("p",[v._v("正则表达式中通过 "),e("code",[v._v("|")]),v._v(" 来表示分支条件。")]),v._v(" "),e("blockquote",[e("p",[v._v("例如，我们通过 "),e("code",[v._v("\\(?0\\d{2}[\\) -]?\\d{8}")]),v._v(" 从文本中查找电话号码，我们可以成功查找出如 (010)88886666，或022-22334455，或 02912345678 等格式的号码，也可以查找出 010)12345678 或 (022-87654321 等格式不正确的号码。为了解决这个问题，我们需要引入分支判断。修正后的正则表达式为 "),e("code",[v._v("\\(0\\d{2}\\)[- ]?\\d{8}|0\\d{2}[- ]?\\d{8}")]),v._v("。")])]),v._v(" "),e("h2",{attrs:{id:"分组（重复多个字符）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分组（重复多个字符）","aria-hidden":"true"}},[v._v("#")]),v._v(" 分组（重复多个字符）")]),v._v(" "),e("p",[v._v("通过限定符可以重复单个字符，通过小括号指定的子表达式（也叫做分组）可以重复多个字符。")]),v._v(" "),e("blockquote",[e("p",[v._v("比如，可以通过 "),e("code",[v._v("(\\d{1,3}\\.){3}\\d{1,3}")]),v._v(" 完成 IP 地址匹配。当然，这个规则有些缺陷，像 300.999.888.666 这样不可能存在的 IP 也会被匹配到，因此需要修正表达式为："),e("code",[v._v("^((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)$")]),v._v("。"),e("br"),v._v("\n笔者发现一个有趣的问题，"),e("code",[v._v("((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)")]),v._v(" 测试 111.111.111.999 这样的字符串可以通过，但是测试 111.111.999.999 却无法通过。此中原因是 "),e("code",[v._v("[01]?\\d\\d?")]),v._v(" 只能匹配 99 不能匹配 999。这也就是为什么上面修正后的正则表达式要严格限制开头和结尾匹配的原因。")])]),v._v(" "),e("h2",{attrs:{id:"后向引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后向引用","aria-hidden":"true"}},[v._v("#")]),v._v(" 后向引用")]),v._v(" "),e("p",[v._v("分组捕获的内容（子表达式匹配的内容）有时候需要进一步处理。默认情况下，每个分组会自动拥有一个组号，规则是：从左到右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推（注意，命名分组的组号要大于未命名分组的组号）。"),e("br"),v._v("\n反向引用用于重复搜索前面某个分组匹配的文本。")]),v._v(" "),e("blockquote",[e("p",[v._v("例如，"),e("code",[v._v("\\b(\\w+)\\b\\s+\\1\\b")]),v._v(" 可以用来匹配重复的单词，像 go go, 或者 kitty kitty。")])]),v._v(" "),e("p",[v._v("也可以通过 "),e("code",[v._v("(?<Name>\\w+)")]),v._v(" 或者 "),e("code",[v._v("(?'Name'\\w+)")]),v._v(" 的方式为分组指定组名，前面的 Name 就是分组的名称。要反向引用这个分组捕获的内容，可以使用 "),e("code",[v._v("\\k<Name>")]),v._v(" 来完成。")]),v._v(" "),e("blockquote",[e("p",[v._v("上面的例子可以改写为： "),e("code",[v._v("\\b(?<Word>\\w+)\\b\\s+\\k<Word>\\b")]),v._v("。")])]),v._v(" "),e("p",[v._v("也可以不指定分组的组号，不捕获分组匹配的文本，语法形式为： "),e("code",[v._v("(?:exp)")]),v._v("。")]),v._v(" "),e("h2",{attrs:{id:"零宽断言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#零宽断言","aria-hidden":"true"}},[v._v("#")]),v._v(" 零宽断言")]),v._v(" "),e("p",[v._v("断言用来声明一个应该为真的事实。正则表达式中只有当断言为真时才会继续进行匹配。零宽断言用来指定一个位置，这个位置应该满足一定的条件（即断言）。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("(?=exp)")]),v._v(" 断言自身出现的位置的后面能匹配表达式 exp。")])]),v._v(" "),e("blockquote",[e("p",[v._v("比如 "),e("code",[v._v("\\b\\w+(?=ing\\b)")]),v._v("，匹配以 ing 结尾的单词的前面部分(除了 ing 以外的部分)，如查找 I'm singing while you're dancing. 时，它会匹配 sing 和 danc。")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("(?<=exp)")]),v._v(" 断言自身出现的位置的前面能匹配表达式 exp。")])]),v._v(" "),e("blockquote",[e("p",[v._v("比如 "),e("code",[v._v("(?<=\\bre)\\w+\\b")]),v._v(" 会匹配以 re 开头的单词的后半部分(除了 re 以外的部分)，例如在查找 reading a book 时，它匹配 ading。")])]),v._v(" "),e("h2",{attrs:{id:"负向零宽断言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负向零宽断言","aria-hidden":"true"}},[v._v("#")]),v._v(" 负向零宽断言")]),v._v(" "),e("p",[v._v("负向零宽断言与零宽断言类似，也指定一个位置，这个位置满足断言条件（与零宽断言条件相反，即不能满足表达式）。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("(?!exp)")]),v._v(" 断言此位置的后面不能匹配表达式 exp。")])]),v._v(" "),e("blockquote",[e("p",[v._v("例如："),e("code",[v._v("\\d{3}(?!\\d)")]),v._v(" 匹配三位数字，而且这三位数字的后面不能是数字；"),e("code",[v._v("\\b((?!abc)\\w)+\\b")]),v._v(" 匹配不包含字符串 abc 的单词。")])]),v._v(" "),e("ul",[e("li",[e("code",[v._v("(?<!exp)")]),v._v(" 断言此位置的前面不能匹配表达式 exp。")])]),v._v(" "),e("blockquote",[e("p",[v._v("例如："),e("code",[v._v("(?<![a-z])\\d{7}")]),v._v(" 匹配前面不是小写字母的七位数字；"),e("code",[v._v("(?<=<(\\w+)>).*(?=<\\/\\1>)")]),v._v(" 匹配不包含属性的简单 HTML 标签内里的内容。")])]),v._v(" "),e("h2",{attrs:{id:"注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[v._v("#")]),v._v(" 注释")]),v._v(" "),e("p",[v._v("有时候正则表达式写的很复杂，可以通过 "),e("code",[v._v("(?#comment)")]),v._v(" 添加一些注释，来增加可读性。")]),v._v(" "),e("blockquote",[e("p",[v._v("比如，前面 IP 地址匹配的正则表达式添加如下注释： "),e("code",[v._v("2[0-4]\\d(?#200-249)|25[0-5](?#250-255)|[01]?\\d\\d?(?#0-199)")]),v._v("。")])])])},[],!1,null,null,null);_.default=a.exports}}]);