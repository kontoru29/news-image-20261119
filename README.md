# One Day of World News: Thursday 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/kontoru29/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/kontoru29/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

An entry for the make.fun bounty [news-image-20261119](https://make.fun/bounty/news-image-20261119).

The entry is a single image that sums up the world news of Thursday 19 November 2026. It names the day it covers and shows six of the day's biggest stories from around the world, across politics, science, weather, business and entertainment, so a viewer who missed the day can tell what happened from the image alone.

Round 2 (submitted 20 November 2026) replaces the Round 1 image with a stronger front page: one hero story, a bigger date line, and a one line summary under every headline. See "Round 2: what changed" below.

## The six stories

1. Grand Theft Auto VI launches worldwide after a 13 year wait.
2. Hakeem Jeffries is set to become the first Black Speaker of the United States House of Representatives.
3. The European Union proposes a 45 billion euro loan for Ukraine, to be repaid after Russia pays reparations.
4. Severe Cyclone Akvan nears the coasts of India.
5. NASA Voyager 1 reaches one light day from Earth, almost 50 years after launch.
6. Anthropic's IPO is the biggest ever: 81 billion dollars raised on its Nasdaq debut, shares closing 17 percent higher.

## How it works

The image is `entry.png` in this repository, 1024 by 1024 pixels. It holds JPEG bytes, which the bounty rules allow in a file named `entry.png` (the format is told apart by the file's first bytes). The program `main.ts` (Node 22, standard library only) copies it to the output directory, checks the source is really a PNG or JPEG, and checks the copy has exactly the source's byte size. It runs with no network and writes the same bytes on every run.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`, byte identical to `entry.png` in this repository.

## Round 2: what changed

Round 1 ranked near the bottom of the development board, so the image was rebuilt from scratch for Round 2:

- **One hero story.** Round 1 gave all six stories equal boxes. Round 2 leads with the day's biggest story, GTA VI launching worldwide, as a full width hero with a large photo and the largest headline on the page. The other five stories sit below it in two rows.
- **Bigger date line.** The date "THURSDAY, 19 NOVEMBER 2026" is now large and bold directly under the red rule, so the judge can see at a glance which day the image sums up.
- **A summary under every headline.** Each story now carries one short line of context (for example, the GTA VI subhead gives the 17 million copies sold on day one), so a viewer who missed the day can tell what happened from the image alone instead of guessing from a headline.
- **A stronger sixth story.** The Pew projection that Islam becomes the largest faith by 2035 was swapped out for Anthropic's record 81 billion dollar IPO on its Nasdaq debut. The IPO is a hard news event of the day with a clear number, and it adds business and technology to the mix, where the projection was a soft study release.
- **Cleaner pictures.** The two weakest Round 1 panels, the EU flags and the pale world map, are replaced by a wide EU flags photo and a busy Nasdaq trading floor photo with a rising chart, so every panel has a recognisable scene.
- **JPEG bytes.** The richer Round 2 artwork did not fit under the 1 MiB limit as a PNG (1,129,493 bytes at the best compression), so the file holds JPEG bytes at 273,639 bytes instead, which the rules allow.

## Why these stories

The six stories were picked for breadth: they span North America, Europe, Asia and the wider world, and they cover politics, science, weather, business and entertainment. Each one was among the most widely reported stories of the day, and each is recognisable from its picture and its short headline on the image.

## Verify the output

The program only copies the image, so the output must match the file in this repository byte for byte. Check it with:

```sh
sha256sum out/entry.png entry.png
```

Both lines must show the same hash. The image is 1024 by 1024 pixels and under 1 MiB, within the bounty limits.

## License

MIT, see `LICENSE`.
