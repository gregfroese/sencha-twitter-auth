sencha-twitter-auth
===================

A sencha touch 2 application demonstrating how to integrate with basic Twitter auth.

Just a quick and dirty proof of concept to show how to authenticate through Twitter.
If you decide to build on this and put it into production, please change the Twitter consumer key  in the script tag including the Twitter library (<a href="https://github.com/gregfroese/sencha-twitter-auth/blob/master/sencha/index.html#L69">here</a>)

Install
=======

1. Clone this repo
2. Setup t.example.com in your hosts file to point to your webserver's ip address (this is necessary for the auth to work as the API key used in this example is setup for that specific domain)
3. Setup your webserver to point to the sencha directory of this repo. Make sure to use the fake domain name of t.example.com as the server name
4. Point your webrowser (Chrome / Safari only) at the new site and voila, start logging in and out of Twitter

