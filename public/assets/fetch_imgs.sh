#!/usr/bin/env bash
set -u
gen () {
  local name="$1"; local w="$2"; local h="$3"; local seed="$4"; local prompt="$5"
  local url="https://image.pollinations.ai/prompt/$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$prompt")?width=$w&height=$h&nologo=true&model=flux&seed=$seed&enhance=true"
  echo "fetching $name ..."
  curl -sS -L -m 150 --retry 3 --retry-delay 4 -o "$name" "$url" && echo "  -> $name $(wc -c < "$name") bytes"
}
gen hero.jpg 1280 720 717 "professional photograph of a local roofing crew installing dark architectural asphalt shingles on a beautiful suburban two story home, golden hour sunlight, blue sky with clouds, workers wearing tool belts and safety gear, crisp realistic real estate photography, high detail"
gen service-repair.jpg 1200 800 929 "photograph of two professional roofers repairing a roof leak on a suburban house, daytime, ladder against the gutter, fixing shingles and flashing, warm sunlight, realistic documentary photography"
gen service-replacement.jpg 1200 800 333 "photograph of a full roof replacement on a ranch style home, brand new architectural shingles just installed, clean dump trailer in the driveway, blue sky, professional roofing crew, southern suburb, realistic"
gen service-newconstruction.jpg 1200 800 545 "photograph of a new construction home with a freshly installed roof, residential build site, daytime, clean modern suburban neighborhood, realistic architectural photography"
gen team.jpg 800 1000 161 "friendly local roofing business owner smiling in a branded polo shirt, arms crossed, standing in front of a home with a new roof, daytime, trustworthy small business, realistic portrait photography"
echo "DONE"
