# Data Modeling

Reflect is a key/value store. Keys are strings and values are any JSON-compatible value.

Values can be up to 128KB in length, but ~1KB is best for performance. Each room can store up to 50MB of data. Writes are automatically persisted continuously.

To automate common data modeling tasks in the key/value store, we recommend the [rails helper library](https://www.npmjs.com/package/@rocicorp/rails).

For example to generate a Todo entity and common functions:

```ts
import { z } from "zod";
import { entitySchema, generate, Update } from "@rocicorp/rails";

// All entities must extend `entitySchema`.
export const todoSchema = entitySchema.extend({
  text: z.string(),
  completed: z.boolean(),
  sort: z.number(),
});

// Export generated interface.
export type Todo = z.infer<typeof todoSchema>;
export type TodoUpdate = Update<Todo>;
export const {
  put: putTodo,
  get: getTodo,
  update: updateTodo,
  delete: deleteTodo,
  list: listTodos,
} = generate("todo", todoSchema);
```

See the [library's README](https://github.com/rocicorp/rails) for more information.
