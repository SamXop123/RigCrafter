# Security Policy

## Our Commitment
At RigCrafter, the safety of our users' hardware configurations and build data is paramount. While this is a client-side focused application, we take potential vulnerabilities in our logic engines and dependencies seriously.

## Supported Versions
We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | Active Support   |
| < 1.0.0 | End of Life      |

## Reporting a Vulnerability
**Please do not open public GitHub issues for security vulnerabilities.**

If you discover a security flaw in RigCrafter (e.g., a bypass in the `lib/compatibility.ts` logic, data injection, or a vulnerable dependency), please report it privately via:

* **Subject:** `[SECURITY REPORT] RigCrafter Vulnerability`

Please include:
1. A description of the vulnerability.
2. Steps to reproduce the issue.
3. Potential impact on the user or the platform.

## Our Process
1. **Acknowledgment:** We will acknowledge your report within 48–72 hours.
2. **Investigation:** Our team will verify the vulnerability and assess its severity.
3. **Patching:** We aim to release a fix within 7–14 days for critical issues.
4. **Disclosure:** Once a patch is live, we will publicly disclose the fix in our Release Notes, crediting the researcher if requested.

## Safe Harbor
Any researcher who conducts security research in good faith and follows this policy will be considered "authorized." We will not pursue legal action against you as long as you provide us a reasonable amount of time to fix the issue before public disclosure.

## Out of Scope
* Security issues in third-party providers (GitHub, Vercel).
* Social engineering or physical attacks.

---
*Thank you for helping keep the RigCrafter community safe!*
