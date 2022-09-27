# xoxo-sms

send xoxo / educom websms via nodejs api.

## Install

`yarn add educom-sms`

## Api

```javascript
import sendText from 'educom-sms';

await sendText({
  user: 'your educom login (phone)', 
  password: 'educom password', 
  recipient: '0043123456789',  // international notation
  text: 'hello, how are you?',
  provider: 'xoxo' // defaults to educom
});

```

## Help

If puppeteer fails to run (due to sandbox errors) run:

`sudo sysctl -w kernel.unprivileged_userns_clone=1`
