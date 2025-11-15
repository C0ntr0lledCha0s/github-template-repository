# GitHub Template Repository

A modern, production-ready GitHub template repository with automated workflows, conventional commits, and DevOps best practices built-in.

## Features

- **Automated Commit Validation** - Conventional commits enforced with Commitlint and Husky
- **Automated Releases** - Release Please automatically generates changelogs and creates releases
- **CI/CD Pipelines** - GitHub Actions workflows for testing, linting, and security scanning
- **Code Quality Tools** - ESLint, Prettier, and lint-staged configured
- **Security Scanning** - Trivy vulnerability scanner and CodeQL integration
- **Issue & PR Templates** - Structured templates for bug reports and feature requests
- **Code Ownership** - CODEOWNERS file for automatic review requests
- **Comprehensive Documentation** - Contributing guidelines, Code of Conduct, and Security Policy
- **Claude Code Integration** - Pre-configured for C0ntr0lledCha0s plugin marketplace with AI-assisted development

## Quick Start

### Using This Template

1. Click the "Use this template" button on GitHub
2. Clone your new repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Customize the template:
   - Update `package.json` with your project details
   - Modify `.github/CODEOWNERS` with your team information
   - Update contact information in `SECURITY.md`
   - Customize `.claude/settings.json` for your plugin preferences
   - Customize `README.md` for your project

5. Start developing!

## Project Structure

```
.
├── .github/
│   ├── workflows/              # GitHub Actions workflows
│   │   ├── ci.yml             # Continuous Integration
│   │   └── release-please.yml # Automated releases
│   ├── actions/               # Custom composite actions
│   │   └── setup-project/     # Project setup action
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   │   ├── bug_report.yml     # Bug report template
│   │   ├── feature_request.yml # Feature request template
│   │   └── config.yml         # Template configuration
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── CODEOWNERS             # Code ownership definitions
├── .claude/                   # Claude Code configuration
│   ├── settings.json          # Plugin marketplace settings
│   └── README.md              # Claude Code documentation
├── .husky/                    # Git hooks
│   ├── commit-msg             # Commit message validation
│   └── pre-commit             # Pre-commit linting
├── .gitignore
├── .lintstagedrc.json        # Lint-staged configuration
├── .prettierrc.json          # Prettier configuration
├── commitlint.config.js      # Commitlint configuration
├── package.json
├── CHANGELOG.md              # Auto-generated changelog
├── CODE_OF_CONDUCT.md        # Code of Conduct
├── CONTRIBUTING.md           # Contribution guidelines
├── LICENSE                   # MIT License
├── README.md                 # This file
└── SECURITY.md               # Security policy
```

## Development Workflow

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit using conventional commits:
   ```bash
   git add .
   npm run commit  # Interactive commit with Commitizen
   # OR
   git commit -m "feat: Add new feature"
   ```

3. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request on GitHub

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Your commit messages should follow this format:

```
<type>(<scope>): <subject>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI configuration changes
- `chore`: Other changes that don't modify src or test files

**Examples:**
```bash
feat(auth): Add user authentication
fix(api): Resolve null pointer exception
docs(readme): Update installation instructions
test(auth): Add unit tests for login
```

### Available Scripts

```bash
# Interactive commit helper
npm run commit

# Linting
npm run lint          # Check for linting errors
npm run lint:fix      # Fix linting errors automatically

# Formatting
npm run format        # Check code formatting
npm run format:fix    # Fix formatting issues

# Testing
npm test              # Run tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report

# Build
npm run build         # Build the project

# Releases (automated)
npm run release       # Trigger semantic release
npm run release:dry   # Dry run release
```

## Git Hooks

This repository uses Husky to manage git hooks:

- **pre-commit**: Runs lint-staged to check and fix linting/formatting issues
- **commit-msg**: Validates commit messages against conventional commit standards

## Automated Workflows

### Continuous Integration (CI)

Triggered on push and pull requests to `main` and `develop` branches:

- Runs on Node.js versions 18, 20, and 22
- Executes linting, formatting checks, and tests
- Uploads code coverage to Codecov
- Performs security vulnerability scanning with Trivy

### Release Please

Triggered on push to `main` branch:

- Automatically generates changelog from conventional commits
- Creates and maintains a Release PR
- Bumps version numbers following semantic versioning
- Creates GitHub releases when Release PR is merged
- (Optional) Publishes to npm registry

## Security

We take security seriously. Please see [SECURITY.md](SECURITY.md) for:

- How to report security vulnerabilities
- Supported versions
- Security best practices

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for:

- Development setup
- Coding standards
- Pull request process
- Testing requirements

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## Branch Protection Recommendations

When using this template, consider enabling these branch protection rules for `main`:

1. **Require pull request reviews before merging**
   - Required approvals: 1-2
   - Dismiss stale reviews when new commits are pushed
   - Require review from Code Owners

2. **Require status checks to pass before merging**
   - Require branches to be up to date
   - Required checks: CI, lint-and-test, security-scan

3. **Require conversation resolution before merging**

4. **Require signed commits** (recommended)

5. **Require linear history**

6. **Include administrators** (enforce rules for everyone)

## Customization Guide

### For Your Organization

1. **Update CODEOWNERS**:
   ```
   # Replace @your-org/team-name with your actual team
   *  @your-org/core-team
   ```

2. **Configure Issue Templates**:
   - Edit `.github/ISSUE_TEMPLATE/config.yml`
   - Update discussion and security advisory URLs

3. **Update Security Contacts**:
   - Add security team email in `SECURITY.md`
   - Configure security advisory notifications

4. **Customize Workflows**:
   - Adjust Node.js versions in `.github/workflows/ci.yml`
   - Configure npm publishing in `.github/workflows/release-please.yml`
   - Add organization-specific secrets to GitHub repository settings

5. **Brand the Documentation**:
   - Update README.md with your project description
   - Modify CODE_OF_CONDUCT.md with contact information
   - Add your organization's name to LICENSE

### For Different Project Types

**Python Project:**
- Update `.lintstagedrc.json` for Python files
- Replace ESLint with Flake8/Black
- Adjust `.github/workflows/release-please.yml` with `release-type: python`

**Go Project:**
- Configure golangci-lint
- Update workflows for Go testing
- Use `release-type: go` in Release Please

**Docker Project:**
- Add Dockerfile
- Include Docker build/push in CI workflow
- Add container scanning

## Troubleshooting

### Commit Hooks Not Working

If commit hooks aren't running:

```bash
# Reinstall Husky
rm -rf .husky
npm install
npx husky init
chmod +x .husky/commit-msg .husky/pre-commit
```

### Commitlint Errors

If commits are being rejected:

1. Ensure your commit message follows conventional commit format
2. Use `npm run commit` for interactive commit creation
3. Check `commitlint.config.js` for allowed types

### CI Failures

Common issues:

- **Linting failures**: Run `npm run lint:fix` locally
- **Formatting failures**: Run `npm run format:fix` locally
- **Test failures**: Run `npm test` locally
- **Security scan failures**: Review Trivy scan results and update dependencies

## Claude Code Integration

This template includes pre-configured Claude Code settings for enhanced AI-assisted development.

### Features

- **Plugin Marketplace**: Connected to C0ntr0lledCha0s plugin marketplace
- **AI-Assisted Code Review**: Automated code review suggestions
- **Documentation Generation**: AI-powered documentation creation
- **Test Generation**: Automatic test case generation
- **Refactoring Assistant**: Intelligent refactoring recommendations

### Configuration

Claude Code settings are located in `.claude/settings.json`. The template is configured to use:

- **Marketplace Source**: C0ntr0lledCha0s/claude-skills-marketplace
- **Auto-Update**: Skills automatically update to latest versions
- **Skill Discovery**: Automatic discovery of new marketplace skills

### Enabled Skills

The following skills are enabled by default:

1. **code-review** - Automated code review assistance
2. **documentation-generator** - Generate comprehensive documentation
3. **test-generator** - Create unit and integration tests
4. **refactor-assistant** - Code refactoring suggestions

### Customization

To customize Claude Code settings, edit `.claude/settings.json`:

```json
{
  "skills": {
    "enabled_skills": [
      "your-custom-skill"
    ]
  }
}
```

For detailed configuration options, see [`.claude/README.md`](.claude/README.md).

### Using Claude Code

1. Ensure Claude Code is installed and configured
2. Open the repository in your editor
3. Skills will automatically load from the marketplace
4. Use Claude Code commands to access AI-assisted features

For more information, visit the [C0ntr0lledCha0s Marketplace](https://github.com/C0ntr0lledCha0s/claude-skills-marketplace).

## Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Release Please](https://github.com/googleapis/release-please)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Commitlint](https://commitlint.js.org/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Semantic Versioning](https://semver.org/)
- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [C0ntr0lledCha0s Marketplace](https://github.com/C0ntr0lledCha0s/claude-skills-marketplace)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with modern DevOps best practices
- Inspired by open-source community standards
- Uses industry-standard tools and conventions

---

**Ready to build something amazing?** Start by customizing this template for your project and enjoy automated quality checks, releases, and professional workflows out of the box!
