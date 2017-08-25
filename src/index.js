export default function({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        const { node: { operator, left, right } } = path;
        if (operator !== '|>') return;

        path.replaceWith(
          t.callExpression(right, [left])
        );
      }
    }
  };
}
