# AGENTS.md

## Build/Lint/Test Commands
- No build commands needed (static site)
- No linting configured
- No tests configured
- To add tests later: `npm test -- --testNamePattern="test-name"`

## Code Style Guidelines
- Use descriptive variable and function names
- Follow existing CSS naming conventions (kebab-case for classes)
- Maintain consistent indentation (4 spaces)
- Use semantic HTML elements
- Group related CSS properties
- Comment complex JavaScript logic
- Keep functions small and focused
- Use const/let instead of var
- Prefer arrow functions for callbacks
- Use template literals for string interpolation

## Error Handling
- Handle form submission errors gracefully
- Validate user inputs on both client and server sides
- Use try/catch blocks for async operations

## Import Guidelines
- Load CSS before JavaScript
- Use relative paths for local assets
- Load external fonts early in head section

## Naming Conventions
- CSS classes: kebab-case
- JavaScript variables: camelCase
- JavaScript functions: camelCase
- Constants: UPPER_SNAKE_CASE