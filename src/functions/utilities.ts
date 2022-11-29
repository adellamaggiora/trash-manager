const _join = (joiner = "") => (...elements: string[]) => elements.join(joiner);
const logger = (index: number) => (element: any) => {console.log(`Log${index}: ${JSON.stringify(element)}`); return element};

export default {
  join: _join,
  logger,
};
