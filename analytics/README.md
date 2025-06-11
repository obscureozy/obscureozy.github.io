# Website Analytics

This directory contains daily analytics reports for the website. Reports are automatically generated using GitHub Actions and GoatCounter analytics.

## Reports

- [Daily Stats](daily-stats.md) - Contains daily visitor statistics and weekly summaries

## How it works

1. GoatCounter tracks visitor data on the website
2. GitHub Actions runs daily at midnight UTC
3. The workflow fetches the latest stats and updates the report
4. Changes are automatically committed to this directory

## Metrics Tracked

- Total Visitors
- Unique Visitors
- Pageviews
- Weekly summaries 