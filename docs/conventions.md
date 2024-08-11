# Conventions

## Naming conventions

### Elements

- `*.component.*`
  - Simple element that communicates with props with its parent components and only has local state.
- `*.container.*`
  - Smart element that doesn’t use props to communicate but consumes different state sources within itself.
- `*.provider.*`
  - Wrapper element to provide context to children.

### Common

- `*.types.ts`
  - Contains types, interfaces, etc.
- `*.config.ts`
  - Contains configuration for a specific module.
- `*.functions.ts`
  - Contains pure functions related to the module.
- `*.service.ts`
  - Singleton object to access remote module related resources, eg.: make HTTP calls.
