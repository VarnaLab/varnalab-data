
var argv = require('minimist')(process.argv.slice(2))

if (!argv.config) {
  console.log('Specify --config /path/to/config.json')
  process.exit()
}

if (!argv.type) {
  console.log('Specify --type group|page')
  process.exit()
}

var fs = require('fs')
var path = require('path')

var config = require(path.resolve(process.cwd(), argv.config)).facebook

var request = require('@request/client')
var purest = require('purest')({request})
var facebook = purest({provider: 'facebook', config: {
  "facebook": {
    "https://graph.facebook.com": {
      "__domain": {
        "auth": {
          "auth": {"bearer": "[0]"}
        }
      },
      "[version]/{endpoint}": {
        "__path": {
          "alias": "__default",
          "version": "v2.7"
        }
      },
      "oauth/access_{endpoint}": {
        "__path": {
          "alias": "oauth"
        }
      }
    }
  }
}})

var events = []

var get = (cursor, done) =>
  facebook
    .get(config[argv.type] + '/events')
    .qs({
      // limit: 1000,

      after: cursor || '',

      fields: [
        'id',
        'cover',
        'description',
        'start_time',
        'name',
        'place',
        'timezone',
        'updated_time',
        'owner'
      ].join(',')
    })
    .auth(config.token)
    .request((err, res, body) => {
      if (err) {
        console.log(err)
        return
      }
      if (body.data.length) {
        events = events.concat(body.data)
        get(body.paging.cursors.after, done)
      }
      else {
        done()
      }
    })

get('', () => {
  fs.writeFileSync('fb-' + argv.type + '.json', JSON.stringify(events), 'utf8')
})
