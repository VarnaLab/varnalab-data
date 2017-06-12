
# varnalab.org

```bash
# org-events.json
mongoexport --db varnalab-production --collection events --jsonArray --out org-events.json
# org-articles.json
mongoexport --db varnalab-production --collection blogposts --jsonArray --out org-articles.json
```

# facebook

```bash
# fb-group.json
node scripts/facebook.js --config /path/to/config.json --type group
# fb-page.json
node scripts/facebook.js --config /path/to/config.json --type page
```

### config.json

```json
{
  "facebook": {
    "group": "",
    "page": "",
    "token": ""
  }
}
```

# finance

https://docs.google.com/spreadsheets/d/14z48BCI1EKQvvtBV47PRq9I3r9lVL5IQbdTsKXcf25w/pub
