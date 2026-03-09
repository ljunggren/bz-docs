# Read-Only Directory

This directory contains core specifications, architectural decisions, and critical design documents that define the foundational goals of the project.

## Purpose

Files in this directory serve as authoritative references that should not be modified by automated tools or AI agents without explicit human approval.

## Suggested Structure

- `specs/` — Core specifications and requirements
- `architecture/` — Architectural Decision Records (ADRs) and design documents
- `reports/` — Analysis and evaluation reports

## Policy

1. **No automated modifications**: AI agents must never create, modify, or delete files in this directory.
2. **Reference before changes**: Consult these documents before proposing significant architectural changes.
3. **Report discrepancies**: If implementation contradicts a spec, notify the maintainer rather than changing the spec.
