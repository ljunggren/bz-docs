cat ../transcripts/*.txt > all.txt

node index.js https://boozang.com 2
node index.js https://docs.boozang.com/docs/overview/why-boozang 2

cat ./pages/*.md > all-crawled.md


