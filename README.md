# call yo rep

Calling your representative is a powerful thing, especially when it happens in
bulk. After I read [this
tweetstorm](https://storify.com/editoremilye/i-worked-for-congress-for-six-years)
from [@editoremilye](https://twitter.com/editoremilye), I was inspired to try
and make it an easier task to accomplish. That's what this project is about.

## getting started

To run this project locally, clone down the repo, `cd` into the diretory and..

```
$ npm i
$ DEBUG=callyorep:server node bin/www
```

Then visit http://localhost:3000.

## civic info api!

This is powered mostly by the [Google Civic Info
API](https://developers.google.com/civic-information). Here I'm going to drop
some notes about it's usage.

We're using the portion that queries for representatives, here's an example:

```
https://www.googleapis.com/civicinfo/v2/representatives\?address\=123+Main+St+12345\&key\=yourgoogleapikey
```

This returns some crazy JSON, the top levels are `divisions`, `offices`, and
`officials`.

All `divisions` records have an `officeIndices` attribute to match offices to
divisions.

All `offices` records have an `officalIndices` attribute to match officials to
offices.

We want to keep this thing dead simple, so the default offices will be..

* **City Council Rep** for **local**
* **State Legislative Rep** for **state**
* **House Representative** for **national**

But it would be good to just normalize all this data and show them all of it.
