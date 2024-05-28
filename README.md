# Node module to fetch stock prices from yahoo finance.

The module can be run locally with

`cd price-fetcher`

`npm install`

`node getprices.mjs`


This will print the prices to the console, and write them to a file in a folder called `prices-undefined`.

If you add a prefix to the call, that's used for the folder name, e.g. 

`node getprices.mjs ci`

will write the prices to a folder called prices-ci.

This means you can run it on a couple of machines, without the written files conflicting. 

There's a github action included for running on github, and in the *units* folder there's a systemd service and timer for running on a Linux system (I run it on a raspberry pi)
