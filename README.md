
# varnalab.org

```bash
# events.json
mongoexport --db varnalab-production --collection events --jsonArray --out events.json
# articles.json
mongoexport --db varnalab-production --collection blogposts --jsonArray --out articles.json
```

# facebook

```bash
# group.json
node scripts/facebook.js --config /path/to/config.json --type group
# page.json
node scripts/facebook.js --config /path/to/config.json --type page
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
