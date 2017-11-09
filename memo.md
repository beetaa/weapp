> 箭头表达式更为简练，且内部执行时的this 与外侧一致，不再需要每次都额外增加变量引用了。微信小程序里，对每个页面编写的代码逻辑，都作为生命周期钩子函数（如：, onShow, onUnload）和自定义函数（如：各类组件回调函数）写在 AppService 内。这两种函数内，this 都指向当前 Page 对象，在这些函数里做的各种异步操作，回调内的this 基本都应该仍然保持为当前 Page 对象。在这个情况下，使用箭头表达式可以减少重复的工作、也减少遗漏 this 时出错的几率。

> Array .forEach .map .reduce .filter .copyWithin .concat .push .pop .shift .unshift .keys .values .fill .find .findIndex .indexOf .some .reduceRight .entries .join .slice .reverse .sort .splice .lastIndexOf .toString .toLocalString .every .length

> String .startsWith .endsWith .charAt .charCodeAt .codePointAt

> Object 

> setData() 中的数据字段名与变量名一致时，不需要重复写两遍，可以这样简写：this.setData({data1, data2, ...})

> 使用 for 对数据做迭代遍历时，语句中声明的 var 型变量名作用域其实提升到了函数顶部，不同迭代间忘记处理的话，可能会导致数据污染。改为使用 let/const 可避免这一情况，放心使用块级作用域。

> 字符串模板：var muban = data => `${data.prop1}haha${data.prop2}`

> for...of 循环作为遍历所有数据结构的统一的方法，可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象、Generator 对象以及字符串。