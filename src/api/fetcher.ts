import { Server_Address } from 'configs';
function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(Server_Address, {
      method: 'POST',
      ...{ headers: [['content-type', 'application/json']] },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}

export { fetcher };
