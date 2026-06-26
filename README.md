# Komuhn's website

```sh
# Develop
deno x @11ty/eleventy --serve

# Deploy
rm -r _site/
deno x @11ty/eleventy
rsync --recursive --delete _site/ levanter:/srv/komuhn-website/
```
