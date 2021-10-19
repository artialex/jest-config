# jest-config

My TypeScript configuration

1. Install

```bash
npx install-peerdeps @alextheartisan/jest-config
```

2. Include "jest" key in package.json

```json
{
  ...,
  "jest": {
    "preset": "@alextheartisan/jest-config"
  },
  ...
}
```

3. Include "test" scripts

```json
{
  ...,
  "scripts": {
    ...
    "test": "jest",
    "test:watch": "jest --watchAll",
    ...
  },
  ...
}
```
