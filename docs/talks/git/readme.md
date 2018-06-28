## git terminal workshop

install git
sourcetree gui (git)

```
git config user.name <name>
git config user.email <email>
```

### init (start a new project)
```
git init
```
### clone (download a remote repo to your local machine)
```
git clone https://github.com/energbox/eb-workshops
```

## show stats/logs

### status (show status)
```
git status
```

### remote (anything to do with remote info)
```
git remote -v
```

add
```
git remote add <name> 
```

e.g.
```
git remote add https://github.com/energybox/eb-workshops
```

remove
```
git remote remove <name>  (removes remote url on your local repo)
```
## add work

### add (add to commit, but not committed)
```
git add .  (add all files)
```

### commit (commit, adds to commit tree)

```
git commit -m "Init Commit"
```
```
git commit --amend (amend current commit, good when you want to want to change the commit message)
```

### reset (there's soft/hard resets)
// when you do `git add` but want to reset the files added
```
git reset 
```

```
undo last commit
$ git commit -m "Something terribly misguided"              (1)
$ git reset HEAD~                                           (2)
<< edit files as necessary >>                               (3)
$ git add ...                                               (4)
$ git commit -c ORIG_HEAD                                   (5)
```

```
discards all history and changes back to commit
$ git reset --hard <commit>
```

### push (pushes commits to remote)
```
git push origin master
```

### tag (when you want to add a tag to a commit, good for releases)

```
git tag -a <version number> -m <version message/name>
```

e.g. 
```
git tag -a 0.1.0 -m "Version 0.1.0" (semver)
```

### log (show logs)
```
git log
```

### stash (dont commit but save for later, useful when swtiching branches)

```
git stash

```
```
git stash pop (pop out)
```

```
git stash drop (dont want anymore)
```

### fetch (fetch don't merge)
```
git fetch 
```

## more intermediate techniques

### pull (fetch + merge)
```
git pull origin master 
```

### merge (merge two branches together)
```
git merge develop master
```

### rebase (put local changes above another branch, could be remote)
```
git merge origin/develop
```

### checkout (when you want to switch branch)
```
git checkout branch 
```

### branch (when you want to create or delete branch)
```
git branch <new branch name>
git branch -D <branch name> (delete branch)
```


### diff (show differences)

```
shows file differences not yet staged
git diff
```

```
between two branches
git diff <branch> <branch2>
```

### cherrypick (select one commit from another branch and add to current branch)

```
git cherrypick <commitmessage> 
```

## submodules (advanced topic)


## cheats
```
[alias]
	l = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
	amend = commit --amend
	sh = stash
	pop = stash pop
	drop = stash drop
	st = status
	co = checkout
	c = config
	p = push origin develop
	rb = rebase origin/develop
	f = fetch
```

## todos
- gifs `git.md`
- submodules
- other stuff I missed

## further materials

- https://try.github.io/levels/1/challenges/1  
- https://github.com/pcottle/learnGitBranching  
- see `git-cheatsheet.pdf` for cheatsheet  

## author
Denis Tsoi <denistsoi@gmail.com>