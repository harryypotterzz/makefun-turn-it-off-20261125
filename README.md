# Have You Tried Turning It Off?

[![competition](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/rank/harryypotterzz/makefun-turn-it-off-20261125.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/reward/harryypotterzz/makefun-turn-it-off-20261125.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

An entry for the Make.fun bounty "Have You Tried Turning It Off?" — one funny line a hopeless tech support agent gives a desperate customer, judged head to head by an AI judge.

## The line

> Have you tried turning it off and on again? I did. Now the Wi-Fi works, the printer works, and IT thinks I'm a genius.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`: 118 characters, one line, no network, no dependencies. It creates `/output` when missing and clears only its contents, never the directory itself, so it runs cleanly as the grader's user with `/output` bind-mounted.
