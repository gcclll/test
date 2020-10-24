#!/usr/bin/env python3
import subprocess
import re
import sys
import os


def cmd_popen(cmd):
    "执行 shell 命令并返回结果"
    proc = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE,)
    result, err = proc.communicate()
    if err:
        print("excute command {} failed".format(cmd), err)
        sys.exit(1)

    result = result.decode("utf-8")
    return result


def input_yes_or_not(msg):
    "输入 yes or not 决定继续或退出"
    decision = input("y(yes) or n(not)>>>")
    if decision in ("n", "not"):
        print("exit process.")
        sys.exit(0)
    elif decision in ("y", "yes"):
        print(msg or "go on...")
    else:
        print("输入错误。")
        sys.exit(1)


def update_or_create_branch(tag):
    "处理分支"
    if not tag:
        print("invalid tag.")
        sys.exit(1)

    cmd = "git branch -a | grep {}$".format(tag)
    result = cmd_popen(cmd)
    found = re.search(tag, result)
    # 保存当前工作分支名称
    branch_name = cmd_popen("git symbolic-ref --short -q HEAD")
    print("current branch name: " + branch_name + "\n\n")

    if found:  # 分支存在合并当前工作分支的修改
        # found, to delete this branch to make it newest always
        print("{tag} 分支已经存在，请慎重决定是否需要合并当前修改到 {tag} 分支下".format(tag=tag))
        input_yes_or_not("go merging...")

        print("merging dev to {}.".format(tag))
        os.system("git checkout {}".format(tag))
        # 合并当前分支
        os.system("git merge {}".format(branch_name))
        # 合并完成后回到当前工作分支
        os.system("git checkout {}".format(branch_name))
        print("merge finished.")
    else:  # 分支不存在就闯闯分支
        # not found, to git new branch with tag
        print("adding branch {}".format(tag))
        os.system("git branch {}".format(tag))  # local
        os.system("git push origin {tag}:{tag}".format(tag=tag))  # remote
        print("add branch finished.")

    print(cmd_popen("git branch -a"))


def test():
    tag = "3.7.10"
    update_or_create_branch(tag)


if __name__ == "__main__":
    test()
