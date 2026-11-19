# One Day of World News: Thursday 19 November 2026

An entry for the make.fun bounty [news-image-20261119](https://make.fun/bounty/news-image-20261119).

The entry is a single image that sums up the world news of Thursday 19 November 2026. It names the day it covers and shows six of the day's biggest stories from around the world, across politics, science, weather, faith and entertainment, so a viewer who missed the day can tell what happened from the image alone.

## The six stories

1. Grand Theft Auto VI launches worldwide after a 13 year wait.
2. Hakeem Jeffries is set to become the first Black Speaker of the United States House of Representatives.
3. The European Union proposes a 45 billion euro loan for Ukraine, to be repaid after Russia pays reparations.
4. Severe Cyclone Akvan nears the coasts of India.
5. NASA Voyager 1 reaches one light day from Earth, almost 50 years after launch.
6. Islam is projected to become the world's largest faith by 2035.

## How it works

The image is `entry.png` in this repository, 1024 by 1024 pixels. The program `main.ts` (Node 22, standard library only) copies it to the output directory. It runs with no network and writes the same bytes on every run.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`, byte identical to `entry.png` in this repository.

## Why these stories

The six stories were picked for breadth: they span North America, Europe, Asia and the wider world, and they cover politics, science, weather, faith and entertainment. Each one was among the most widely reported stories of the day, and each is recognisable from its picture and its short headline on the image.

## Verify the output

The program only copies the image, so the output must match the file in this repository byte for byte. Check it with:

```sh
sha256sum out/entry.png entry.png
```

Both lines must show the same hash. The image is 1024 by 1024 pixels and under 1 MiB, within the bounty limits.

## License

MIT, see `LICENSE`.
