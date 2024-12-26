---
title: Installing PL/v8 on Postgres 9.5
excerpt: Quickly install and verify the PL/v8 Postgres Extension
authors:
  - nronnei
published: 2016-10-04
tags:
  - database
  - postgres
  - plv8
---
<!-- Post Content -->

## Goal
This is a very straightforward entry. Our only goal in this post is to make sure we have installed PostgreSQL’s [PL/V8](https://plv8.github.io/).

**Full Disclosure:** Most of this was straight off [the GitHub page](https://github.com/plv8/plv8) in 2016. Things have changed since then.

## Purpose

Install PL/V8 so that we can use JavaScript to write functions for Postgres and PostGIS. This entry assumes you have a working PostgreSQL v9.2+ installation. If you don’t, check out this tutorial.

## Solution
### System Info

I’m using…
```
    OS: Ubuntu 16.04
    PostgreSQL Server 9.5
    PostGIS 2.2 (Not relevant for this process, as long as your version supports PL/v8)
```
### Process

Thanks to apt this installation is very easy! Just run:

```sudo apt install postgresql-9.5-plv8```

Check GitHub to see if your PostgreSQL version works with PL/V8. I was able to successfully install PL/V8 for PostgreSQL 9.6 by simply tweaking the version number:
```
sudo apt install postgresql-9.6-plv8
```

After a successful installation, we’ll need to add the language to your database:

```
psql -d <database name> -c 'CREATE EXTENSION plv8'
```

If you use CoffeeScript and LiveScript, you can use `plcoffee` and `plls` respectively in place of `plv8`.

Okay. PL/V8 installed? Check! Language added to the database? Check. Let’s move on to making sure it works.

GitHub says you can use psql -c 'SELECT plv8_version()' to check your version with PL/V8 as of 2.0.0. This did not work for me because at the time of writing the the version in the apt repo is 1:1.4.6.ds-1.

Another method, and perhaps a more direct one, is to 1.) define a simple function and 2.) pass it some dummy data.

First we define a test function:
```
CREATE OR REPLACE FUNCTION plv8_test(keys text[], vals text[])
RETURNS text AS $$
  var o = {};
  for(var i=0; i<keys.length; i++){
    o[keys[i]] = vals[i];
  }
  return JSON.stringify(o);
$$ LANGUAGE plv8 IMMUTABLE STRICT;
```

Second we pass it some dummy data:
```
SELECT plv8_test(ARRAY['name', 'age'], ARRAY['Tom', '29']);
```
If successful, you should see this response:
```
         plv8_test
---------------------------
 {"name":"Tom","age":"29"}
(1 row)
```

## Conclusions

According to this post from Regina Obe, PL/V8 is great for Map Algebra. Unfortunately, as with most posts I’ve found about the PostGIS Raster Module, fails to use a geographically relevant example of raster analysis. I attempt to remedy that with this series of posts on writing ST_MapAlgebra callback functions, but I’m yet to try any with PL/V8 yet.