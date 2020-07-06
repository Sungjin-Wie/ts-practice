export type IndexState = {
  server: string;
  name: string;
};

export const server = "index/server";
export const name = "index/name";

export type Input = typeof server | typeof name;

type InputServerAction = {
  type: typeof server;
  payload: string;
};

type InputNameAction = {
  type: typeof name;
  payload: string;
};

export type IndexAction = InputNameAction | InputServerAction;
