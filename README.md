
# varnalab.org

```bash
# events
mongoexport --db varnalab-production --collection events --jsonArray --out events.json
# articles
mongoexport --db varnalab-production --collection blogposts --jsonArray --out articles.json
```

# facebook

```bash
node scripts/facebook.js --config /path/to/config.json --type group|page
```

## config.json

```json
{
  "facebook": {
    "group": "",
    "page": "",
    "token": ""
  }
}
```
