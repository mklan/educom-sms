# xoxo-sms

send xoxo websms via nodejs api.

## install

`npm install educom-sms`

## api

```javascript
const sendText = require('educom-sms');

await sendText({
  user: 'your educom login (phone)', 
  password: 'educom password', 
  recipient: '0043123456789',  // international notation
  text: 'hello, how are you?',
});

```

## help

if puppeteer fails to run, due to sandbox errors, try to run:

`sudo sysctl -w kernel.unprivileged_userns_clone=1`
