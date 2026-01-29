# Boozang Terminology

Quick reference for consistent language. Full dictionary in `chatgpt/boozang_dictionary.csv`.

## Foundational Concepts

These terms reflect Boozang's core philosophy (see [Testing Philosophy](./testing-philosophy.md)):

| Term | Description |
|------|-------------|
| State machine | The mental model - every web app is a state machine |
| State | A configuration of data/UI in the application |
| Operation | A transition between states (Create, Edit, Delete, etc.) |
| Interdependency | How operations in one module affect states in another |
| Model | The mapped representation of application behavior |

## Core Terms

| Term | Use | Don't Use |
|------|-----|-----------|
| Test | A single test case | Test case, scenario |
| Module | Container for tests | Folder, directory, suite |
| Action | Single step in a test | Step, command, instruction |
| Element | UI component to interact with | DOM node, HTML element |
| Version | Branch-like container | Branch (unless comparing to git) |

## Action Types

| Term | Description |
|------|-------------|
| Click | Click an element |
| Set | Enter text into a field |
| Validate | Assert a condition |
| Script | Execute JavaScript |
| Call | Invoke another test |
| Extract | Get data from page |

## Testing Terms

| Term | Description |
|------|-------------|
| Loop data | Test data for parameterization |
| Template | Reusable action sequence |
| Natural selector | AI-powered element identification |
| DOM picker | Manual element selection tool |

## Platform Terms

| Term | Description |
|------|-------------|
| IDE | The browser-based test editor |
| Runner | CLI tool for executing tests |
| CI mode | Non-interactive execution |
| Root cause analysis | Failure diagnostics |

## Avoid These

| Don't Say | Say Instead |
|-----------|-------------|
| Codeless testing | Test automation (Boozang handles the "codeless" part) |
| Record and playback | Record and refine |
| Selenium | (Don't compare unless specifically discussing) |
| Script | Test or action (unless referring to JavaScript) |
| Click here, click there | Define operations, map behavior |
| Test steps | Operations, transitions |
| Automated clicking | State machine modeling |
| Write tests | Model application behavior |
