# GIT commands
## Srart a new reposotory (repo)
```bash
git init
```
## Register your name at local GIT
```bash
git config --global user.name your_name
```
## Register your email at local GIT
```bash
git config --global user.email your_email
```
## Add a file to the tracking system
```bash
git add file_path
```
***Example: git add src/App.jsx***

## Add all files to the tracking system
```bash
git add .
```
## Save current changes as a commit
```bash
git commit -m "YOUR MESSAGE"
```
## Check the repo status
```bash
git status
```
## Check all commits
```bash
git log
```
***For long log***
- To see next logs (space)
- To exit the log (q)

## To go to previous commit
```bash
git checkout COMMIT_ID
```
## to undo all changes made to a file, and return to last commit
```bash
git restore file_path
```
## to undo all changes made to a repo, and return to last commit
```bash
git restore .
```
## show the remote origin url
```bash
git remote show origin
```

## change the remote origin url
```bash
git remote set-url origin REPO_URL
```

## add remote origin 
```bash
git remote add origin REPO_URL
```

## add remote upstream 
```bash
git remote add upstream REPO_URL
```

## download updates from remote repo
```bash
git pull origin main
```

## upload updates to remote repo
```bash
git push origin main
```