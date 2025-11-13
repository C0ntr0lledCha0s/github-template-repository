# Contributing to This Project

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Setting Up Your Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/original-org/repository-name.git
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Create a new branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

1. **Keep your fork synchronized** with the upstream repository:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Make your changes** in your feature branch

3. **Test your changes** thoroughly:
   ```bash
   npm test
   npm run lint
   npm run format:fix
   ```

4. **Commit your changes** using conventional commits (see below)

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. This allows us to automatically generate changelogs and version numbers.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Examples

```bash
feat(auth): Add user authentication system
fix(api): Resolve null pointer exception in user service
docs(readme): Update installation instructions
test(auth): Add unit tests for login function
```

### Using Commitizen (Optional)

For an interactive commit experience:

```bash
npm run commit
```

This will guide you through creating a proper conventional commit.

## Pull Request Process

1. **Ensure all tests pass** and there are no linting errors
2. **Update documentation** if needed
3. **Fill out the PR template** completely
4. **Link related issues** using keywords like "Closes #123"
5. **Request review** from maintainers
6. **Address feedback** promptly and professionally
7. **Keep your PR focused** - one feature or fix per PR
8. **Rebase if needed** to keep history clean

### PR Checklist

Before submitting your PR, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Comments added to complex code
- [ ] Documentation updated
- [ ] No new warnings introduced
- [ ] Tests added/updated
- [ ] All tests pass locally
- [ ] Commits follow conventional commit format

## Coding Standards

### JavaScript/TypeScript

- Use ES6+ features
- Follow ESLint configuration
- Use async/await over promises when possible
- Prefer const over let, avoid var
- Use meaningful variable and function names

### Formatting

- This project uses Prettier for code formatting
- Run `npm run format:fix` before committing
- Formatting is automatically checked in CI

### Linting

- Follow ESLint rules configured in the project
- Run `npm run lint` to check for issues
- Run `npm run lint:fix` to auto-fix issues

## Testing

### Writing Tests

- Write unit tests for all new features
- Maintain or improve code coverage
- Use descriptive test names
- Follow the Arrange-Act-Assert pattern

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

- Aim for at least 80% code coverage
- Coverage reports are generated in the `coverage/` directory
- CI will fail if coverage drops below the threshold

## Documentation

### Code Documentation

- Add JSDoc comments for public APIs
- Document complex algorithms
- Keep comments up-to-date with code changes

### README Updates

- Update README.md if you add new features
- Include usage examples
- Update configuration documentation

### Changelog

- Don't manually update CHANGELOG.md
- It's automatically generated from conventional commits
- Focus on writing good commit messages

## Questions?

If you have questions about contributing:

1. Check existing [documentation](./docs/)
2. Search [existing issues](https://github.com/your-org/your-repo/issues)
3. Ask in [GitHub Discussions](https://github.com/your-org/your-repo/discussions)
4. Reach out to maintainers

## Recognition

Contributors will be recognized in:

- GitHub contributors page
- Release notes (for significant contributions)
- CONTRIBUTORS.md file (if applicable)

Thank you for contributing! 🎉
