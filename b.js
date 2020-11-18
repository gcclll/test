var a = {
  type: 11, // FOR
  codegenNode: {
    type: 13, // VNODE_CALL
    children: {
      type: 14, // JS_CALL_EXPRESSION
      arguments: [
        // 将作为 callee: _renderList 的参数
        {
          type: 4,
          isConstant: false,
          content: 'users',
          isStatic: false,
        },
        {
          // 用来生成函数的 (user) => { retrun `解析后的returns` }
          type: 18, // JS_FUNCTION_EXPRESSION
          params: [
            // 这个作为 _renderList 第二个函数的参数
            {
              type: 4,
              isConstant: false,
              content: 'user',
              isStatic: false,
            },
          ],
          returns: {
            // _renderList 第二个参数函数的返回值
            type: 13,
            tag: '"li"',
            children: {
              type: 5, // INTERPOLATION
              content: {
                type: 4,
                isStatic: false,
                isConstant: false,
                content: 'user.name',
              },
            },
            patchFlag: '1 /* TEXT */',
            isBlock: true,
            disableTracking: false,
          },
          newline: true, // 这个结合 body 决定是否是 (user) => xx 还是 (user) => { return xxx }
          isSlot: false,
        },
      ],
    },
    patchFlag: '256 /* UNKEYED_FRAGMENT */',
    isBlock: true,
    disableTracking: true,
  },
}
