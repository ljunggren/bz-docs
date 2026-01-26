import fs from "fs";
const raw   = fs.readFileSync("boozang-dictionary-dirty.js","utf8")
                .replace(/^var\s+_bzMessage\s*=\s*/,"")
                .replace(/;?\s*$/, "");          // crude unwrap
const obj   = JSON.parse(raw);

function* walk(o, path=[]) {
  for (const [k,v] of Object.entries(o)) {
    const p = [...path,k];
    if (typeof v === "string") yield [p.join("."), v];
    else if (typeof v === "object") yield* walk(v, p);
  }
}

const rows = [...walk(obj)]
  .filter(([p]) =>
      p.startsWith("_root._dictionary") ||
      p.startsWith("_model") ||
      p.startsWith("_module") ||
      p.startsWith("_setting"))
  .map(([p,v]) => `"${p.replace(/^_root\._dictionary\._options\./,"")}","${v
      .replace(/\{[0-9]+\}/g,"")          // drop placeholders
      .replace(/<[^>]+>/g,"")             // drop HTML
      .trim()}"`)
  .join("\n");

fs.writeFileSync("boozang_dictionary.csv", "term,definition\n"+rows);
