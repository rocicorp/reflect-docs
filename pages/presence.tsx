import { Callout } from "nextra/components";

# Presence

Use the `subscribeToPresence` method of Reflect to watch for changes to the set of clients connected to the room.

```ts
r.subsribeToPresence((presentClientIDs) => {
  myElm.textContent = `Active Users: ${presentClientIDs.size}`;
});
```

## Combining presence with data about clients


```ts
let presentClientIDs: ReadonlySet<ClientID> = new Set<ClientID>();
r.subsribeToPresence((clientIDs) => {
 presentClientIDs = clientIDs;
 render();
});

let clients: Record<ClientID, Client> = {};
r.subscribe(
  async (tx) => {
    const clientEntries = (await listClients(tx)).map(c => [c.id, c]);
    return Object.fromEntries(clientEntries);
  }, 
  (result) => {
    clients = result;
    render();
  },
);

function render() {
  for (const presentClientID of presentClientIDs) {
    const presentClient = clients[presentClientId];
    if (presentClient) {
      // render the present client's cursor, presence indicator, etc
    }
  }
}
```

## React

In React you can use the `usePrescense` hook in combination with the `useSubscribe`` hook.

```ts
import { usePrescence, useSubscribe } from "@rocicorp/reflect/react";

const presentClientIDs = usePresence(r);
const presentClients = useSubscribe(r, 
  async (tx) => {
    const result = [];
    for (const clientID of presentClientIDs) {
      const presentClient = await getClient(tx, clientID);
      if (presentClient) {
        result.push(presentClient);
      }
    }
    return result;
  },
  [],
  [presentClientIDs]
);

return ( 
  <div>
    {[...presentClients].map(presentClient => (
      <Cursor
        key={presentClient.id}
        client={presentClient}
      />
    ))}
  </div>
);

```
