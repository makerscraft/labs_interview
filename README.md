# DBC Labs Interview Challenge

## Introduction

Our interview process is designed to assess your fitness for the consulting
workflow.  We have identified three primary functions within this workflow:
decomposing client requirements into tasks, debugging, and contributing to an 
active codebase.

You will be given 2.5 hours to complete these challenges as best you can.
Budgeting the time you give each section is left solely to your discretion.
You may use the Internet to understand any vocabulary or to look up API
references.  Also an implicit test in this assignment is of whether you are
able to follow written directions.  Take your time and don't skim or skip 
over anything.

## Setup

So that we only evaluate your fitness **solely** based on the code, we have
assigned you a participant ID.  Within your git directory ensure you change
your git user name and git user email to be these anonymized data:

`git config user.email "PARTICIPANT_##@example.com"`  
`git config user.name "PARTICIPANT_##"`

You can verify these changes have been effective by using `git log` to show a
commit you made: it should have these two values set correctly.

## Decomposing Client Requirements

Please turn the following passage into a series of user stories.  Associated
with each story you should assign a point value of 1, 3, 5, 8.  1 represents a
"simple" story on this scale, 8 represents a "hard" problem on this scale.

We've given you a transcript from Joe Neckbeard, your stakeholder, about what
they need.

> We're a small shop and for years we've been using Majordomo mailing lists,
y'know listserv kinda things, to help our engineering teams communicate.  Well,
one of the engineers told his buddy in marketing - never tell marketing
anything (laughter) - about this and they really want it.  Thing is, those
Windows users (snorts) don't know crap about how to write an email in
text-plain so they can't actually get a list created or get signed up to it via
email!  Lulz.  Can't spell "luser" without "user," amirite? Anyway, so, right,
yeah, we need a web-driven interface for creating Majordomo lists.  I know
Majordomo is old school technology, but I don't want SMS updates about this
stuff, I don't want to tweet or twoot, just give me some simple email that I
can filter and read peacefully in emacs.  If you can't handle and filter your
inbox you should probably have it taken away from you - PEBKAC: Problem Exists
between Keyboard and Chair, y'know.  I will never forgive AOL for giving morons
an on-ramp onto the information superhighway.  Before 1997 the Internet was
smart people, teachers, professors, researchers, me.  Afterward it was a bunch
of lovesick puppies hoping for a "You Got Mail" happy ending.  What a bunch of
shlock.  *Another colleague coughs* Oh where was I?  OK, Right.  Basically
someone signs in, we verify they're OK (maybe we can expose an HTTP endpoint),
and then they can enter a new list name, add a few email addresses and the
KABOOM create.  Also, when they sign in maybe they get a list of the lists they
own and can go to some sort of management screen?  Ultimately this needs to
talk to the Unix (ah, beautiful Unix!) layer where we execute a bunch of
majordomo commands from the CLI.  Basically commands are of the form `majordomo
create, majordomo delete` y'know, CRUD stuff.  I'm sure if you checkout their
docs page you can get an idea of what that layer needs.  Oh wait, did I say
layer?  I didn't mean to tell you how to build your app, or did I? _laughs_

Add your breakdown to a file called `story_breakdown.md` in the root of this
repo.

## Debugging

Included in this repo is the codebase for "Noodle Skoodle," a slightly broken
but mostly functional Rails and JavaScript application.

* The instructor will demonstrate the bug at the beginning of this session.
* The instructor will remain silent except where the assignment is
  "unfairly" making solving the issue more difficult.
* You are expected to handle db setup, seeding, and debugging
* You are free to use as many tools as you like to help debug the issue.

Ideally you will find the issue, patch the issue, and possibly improve the
end-user experience so that the issue cannot be encountered again, time
permitting.

## Improving Existing Code

Analyze the existing code base.  Either:

Perform **and successfully finish** a refactor within the time allotted or add a
feature.  A refactor or feature that is incompletely executed **will merit no
consideration**.  The improvement should *not* be mere shuffling of lines
around, but it should measurably contribute to the improvement of the codebase.

This specification is unclear, but the consultant knows where value is to be
had in contribution. Welcome to the world of consulting :)

## Submission

5 minutes before time is up, the instructor will ask you to finish your work
and wrap things up.  Regardless of where you are in your effort, **stop** and
commit what you have.  You should push your branch to the `origin` repo using a
branch name based on your participant ID: e.g.  `participant_##-submission`.
You will be notified via email.  Thank you for your interest in DBC Labs.
