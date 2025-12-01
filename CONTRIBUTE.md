# Contributing to RigCrafter

Thank you for your interest in contributing to RigCrafter! This guide will help you get started with contributing to our PC building tool.

## 🚀 Quick Start

### 1. Fork the Repository

1. Navigate to the [RigCrafter repository](https://github.com/SamXop123/RigCrafter)
2. Click the "Fork" button in the top-right corner
3. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/RigCrafter.git
   cd RigCrafter
   ```

### 2. Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```
   - Use `npm install --force` if above not working.

2. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Edit .env.local with your configuration
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open Your Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
RigCrafter/
├── app/                    # Next.js 13+ App Router
│   ├── components/         # Page-specific components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility functions and data
│   ├── data.ts          # Component database
│   ├── compatibility.ts # Compatibility logic
│   ├── suggestions.ts   # Build suggestions
│   └── types.ts         # TypeScript types
├── hooks/               # Custom React hooks
├── public/              # Static assets
└── styles/              # Additional stylesheets
```

## 🔧 Development Guidelines

### Code Style

- **TypeScript**: All new code should be written in TypeScript
- **ESLint**: Follow the existing ESLint configuration
- **Prettier**: Code is automatically formatted with Prettier
- **Naming Conventions**:
  - Components: PascalCase (`ComponentName.tsx`)
  - Files: kebab-case (`component-name.tsx`)
  - Variables: camelCase (`variableName`)

### Component Development

1. **UI Components**: Use shadcn/ui components when possible
2. **Styling**: Use Tailwind CSS for styling
3. **Animations**: Use Framer Motion for animations
4. **Icons**: Use Lucide React for icons

### Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📊 Contributing Component Data

### Adding New Components

Component data is stored in `lib/data.ts`. To add new components:

1. **Follow the existing structure**:
   ```typescript
   {
     id: "unique-id",
     name: "Component Name",
     brand: "Brand Name",
     price: 299.99,
     category: "gpu" | "cpu" | "motherboard" | "ram" | "storage" | "case" | "psu",
     specs: {
       // Component-specific specifications
     },
     compatibility: {
       // Compatibility requirements
     }
   }
   ```

2. **Ensure data accuracy**:
   - Verify specifications from official sources
   - Include accurate pricing (preferably MSRP)
   - Add proper compatibility constraints

3. **Update compatibility logic** in `lib/compatibility.ts` if needed

### Data Sources

- Official manufacturer websites
- Reputable tech review sites
- Current market pricing from major retailers

## 🔄 Pull Request Process

### Before Submitting

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**:
   - Write clean, readable code
   - Add tests for new functionality
   - Update documentation if necessary

3. **Test thoroughly**:
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### Commit Message Convention

Use conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Submitting Your PR

1. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**:
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

3. **PR Requirements**:
   - Clear description of changes
   - Screenshots for UI changes
   - Tests pass
   - No conflicts with main branch

## 🎯 Contribution Areas

### High Priority
- **Component Database**: Adding new or updated component data
- **Bug Fixes**: Resolving issues in the issue tracker
- **Performance**: Improving app performance and load times
- **Accessibility**: Making the app more accessible

### Medium Priority
- **Features**: New functionality and improvements
- **Documentation**: Improving guides and documentation
- **Testing**: Adding test coverage
- **UI/UX**: Design improvements and user experience

### Good First Issues
Look for issues labeled `good first issue` in the GitHub repository.

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs actual behavior
4. **Screenshots** if applicable
5. **Environment details**:
   - Browser and version
   - Operating system
   - Screen resolution (for UI issues)

## 💡 Feature Requests

When suggesting features:

1. **Describe the problem** the feature would solve
2. **Explain the proposed solution**
3. **Consider alternatives** you've thought of
4. **Provide mockups** or examples if helpful

## 📞 Getting Help

- **Discord**: Join our community discord (link coming soon)
- **GitHub Issues**: Ask questions in the issue tracker
- **Discussions**: Use GitHub Discussions for general questions

## 🏆 Recognition

Contributors will be:
- Listed in the README contributors section
- Acknowledged in release notes for significant contributions
- Invited to the contributors team for sustained contributions

## 📄 License

By contributing to RigCrafter, you agree that your contributions will be licensed under the same license as the project.

---

**Happy Contributing! 🚀**

Thank you for helping make RigCrafter better for the PC building community!
