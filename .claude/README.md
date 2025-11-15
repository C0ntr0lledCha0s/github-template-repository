# Claude Code Configuration

This directory contains configuration files for Claude Code integration and plugin marketplace.

## Settings Overview

The `settings.json` file configures Claude Code to use skills and agents from the C0ntr0lledCha0s plugin marketplace.

### Configuration Details

```json
{
  "skills": {
    "marketplace": {
      "enabled": true,
      "sources": [
        {
          "name": "C0ntr0lledCha0s Marketplace",
          "owner": "C0ntr0lledCha0s",
          "repository": "claude-skills-marketplace",
          "type": "github",
          "url": "https://github.com/C0ntr0lledCha0s/claude-skills-marketplace"
        }
      ]
    }
  }
}
```

## Available Skills

The configuration enables the following skills by default:

- **code-review** - Automated code review assistance
- **documentation-generator** - Generate comprehensive documentation
- **test-generator** - Create unit and integration tests
- **refactor-assistant** - Code refactoring suggestions

## Customization

### Adding Custom Skills

To add custom skills from the marketplace, update the `enabled_skills` array:

```json
{
  "skills": {
    "enabled_skills": [
      "your-custom-skill",
      "another-skill"
    ]
  }
}
```

### Disabling Marketplace

To disable the marketplace integration:

```json
{
  "skills": {
    "marketplace": {
      "enabled": false
    }
  }
}
```

### Using Different Marketplace

To use a different marketplace source:

```json
{
  "skills": {
    "marketplace": {
      "sources": [
        {
          "name": "Your Marketplace",
          "owner": "your-org",
          "repository": "your-skills-repo",
          "type": "github",
          "url": "https://github.com/your-org/your-skills-repo"
        }
      ]
    }
  }
}
```

## Auto-Update

Skills are configured to auto-update by default. To disable:

```json
{
  "skills": {
    "auto_update": false
  }
}
```

## Workspace Settings

- **auto_load_skills**: Automatically loads skills when opening the workspace
- **skill_discovery**: Enables automatic discovery of new skills from the marketplace

## Learn More

- [Claude Code Documentation](https://docs.claude.com/claude-code)
- [C0ntr0lledCha0s Marketplace](https://github.com/C0ntr0lledCha0s/claude-skills-marketplace)
- [Creating Custom Skills](https://docs.claude.com/claude-code/skills)

## Troubleshooting

### Skills Not Loading

1. Verify internet connection
2. Check marketplace URL is accessible
3. Ensure `enabled: true` in settings
4. Restart Claude Code

### Marketplace Authentication

If the marketplace requires authentication:

```json
{
  "skills": {
    "marketplace": {
      "auth": {
        "type": "github",
        "token": "${GITHUB_TOKEN}"
      }
    }
  }
}
```

Use environment variables for sensitive tokens.

## Contributing

To contribute skills to the C0ntr0lledCha0s marketplace, visit:
https://github.com/C0ntr0lledCha0s/claude-skills-marketplace
