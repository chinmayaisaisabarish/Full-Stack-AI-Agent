# Git & GitHub Quick Reference Guide

## 🚀 Daily Workflow (Most Common)

### When you make changes to your code:

```bash
# 1. Check what files changed
git status

# 2. Add files to staging (choose one)
git add .                    # Add all changed files
git add filename.js          # Add specific file
git add folder/              # Add entire folder

# 3. Commit with a message
git commit -m "Your descriptive message here"

# 4. Push to GitHub
git push
```

## 📝 Writing Good Commit Messages

### ✅ Good Examples:
- `"Add user authentication feature"`
- `"Fix login bug when email is empty"`
- `"Update README with installation instructions"`
- `"Remove unused dependencies"`

### ❌ Bad Examples:
- `"stuff"`
- `"changes"`
- `"fix"`
- `"update"`

## 🔧 Essential Git Commands

### Checking Status & History
```bash
git status                   # See what files changed
git log                      # See commit history
git log --oneline           # Compact commit history
```

### Adding & Committing
```bash
git add filename.js         # Stage specific file
git add .                   # Stage all changes
git commit -m "message"     # Commit staged changes
git commit -am "message"    # Add all + commit (shortcuts)
```

### Working with Remote (GitHub)
```bash
git push                    # Send commits to GitHub
git pull                    # Get latest changes from GitHub
git clone <url>             # Download repository from GitHub
```

### Branch Operations
```bash
git branch                  # List all branches
git branch feature-name     # Create new branch
git checkout feature-name   # Switch to branch
git checkout -b feature-name # Create and switch to new branch
git merge feature-name      # Merge branch into current branch
```

## 🛠️ Setup Commands (One-time only)

### Initial Git Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Connect Local Project to GitHub
```bash
# If starting from scratch
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo-name.git
git push -u origin main

# If cloning existing repo
git clone https://github.com/username/repo-name.git
```

## 🚨 Common Scenarios & Solutions

### Scenario 1: First time pushing to new repo
```bash
git add .
git commit -m "Initial commit"
git push -u origin main     # -u sets upstream for future pushes
```

### Scenario 2: Regular updates after initial setup
```bash
git add .
git commit -m "Add new feature"
git push                    # No need for -u origin main anymore
```

### Scenario 3: You made changes but want to see what changed
```bash
git status                  # See which files changed
git diff                    # See exact changes made
git diff filename.js        # See changes in specific file
```

### Scenario 4: Undo last commit (but keep changes)
```bash
git reset --soft HEAD~1     # Undo commit, keep files staged
git reset HEAD~1            # Undo commit and staging, keep file changes
```

### Scenario 5: Completely discard changes to a file
```bash
git checkout -- filename.js    # ⚠️ This permanently deletes your changes!
```

## 📂 Working with .gitignore

### Common .gitignore entries for Node.js:
```
node_modules/
.env
*.log
.DS_Store
dist/
build/
```

### Adding .gitignore after files are already tracked:
```bash
# 1. Add patterns to .gitignore file
# 2. Remove from Git tracking (but keep local files)
git rm -r --cached node_modules
git commit -m "Remove node_modules from tracking"
```

## 🔄 Collaboration Workflow

### Before starting work:
```bash
git pull                    # Get latest changes from team
```

### After finishing work:
```bash
git add .
git commit -m "Descriptive message"
git pull                    # Get any new changes first
git push                    # Send your changes
```

## 🆘 Emergency Commands

### Completely reset to last commit (⚠️ DANGER: Loses all changes!)
```bash
git reset --hard HEAD       # Reset to last commit
git clean -fd               # Remove untracked files
```

### See what you're about to push:
```bash
git diff origin/main        # Compare local vs GitHub
```

### Undo last push (if no one else pulled yet):
```bash
git reset --hard HEAD~1     # Reset locally
git push --force            # ⚠️ Force push (dangerous!)
```

## 📊 Checking Your Repository

### View your GitHub repository:
- **Your repo:** https://github.com/chinmayaisaisabarish/omni-capable-AI-agent
- **Local folder:** e:\Full Stack AI Agent with inngest and Gemini

### Quick Status Check:
```bash
git remote -v               # See connected GitHub repo
git branch                  # See current branch
git status                  # See current changes
```

## 💡 Pro Tips

1. **Commit early and often** - Small commits are better than big ones
2. **Always check `git status`** before committing
3. **Pull before pushing** when working with others
4. **Use meaningful commit messages** - your future self will thank you
5. **Don't commit sensitive data** (API keys, passwords) - use .env files
6. **Test your code** before committing

## 🎯 Your Project Specific Commands

For your AI Agent project:

```bash
# Navigate to your project
cd "e:\Full Stack AI Agent with inngest and Gemini"

# Daily workflow
git status
git add .
git commit -m "Add ticket processing feature"
git push

# Start development server
npm run dev

# Install new packages
npm install package-name
git add package.json package-lock.json
git commit -m "Add package-name dependency"
git push
```

---

## 📱 Quick Reference Card

| Command | What it does |
|---------|-------------|
| `git status` | Check what changed |
| `git add .` | Stage all changes |
| `git commit -m "msg"` | Save changes with message |
| `git push` | Upload to GitHub |
| `git pull` | Download from GitHub |
| `git log` | See history |
| `git diff` | See exact changes |

---

**Remember:** Git is like a save system for your code, and GitHub is like cloud storage for your Git saves!

**🔗 Your Repository:** https://github.com/chinmayaisaisabarish/omni-capable-AI-agent
