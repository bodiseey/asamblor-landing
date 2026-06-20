#!/usr/bin/env node
// IndexNow ping — submits all sitemap URLs to Bing/Yandex/etc.
// Run after deploy:  node scripts/indexnow.mjs
//
// Vercel: add as a deploy hook or run from a GitHub Action after each prod deploy.

import { setTimeout as sleep } from "node:timers/promises";

const HOST = "www.asamblor.com";
const KEY = "9f0b3c4594b670912d08f4926eca54e8";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const BATCH = 10000; // IndexNow max per request

async function main() {
  console.log(`▸ Fetching sitemap from ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    console.error(`sitemap fetch failed: ${res.status}`);
    process.exit(1);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`▸ Found ${urls.length} URLs`);

  const endpoints = [
    "https://api.indexnow.org/IndexNow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    console.log(`\n▸ Submitting to ${endpoint}`);
    for (let i = 0; i < urls.length; i += BATCH) {
      const slice = urls.slice(i, i + BATCH);
      const body = {
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: slice,
      };
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      console.log(`  batch ${Math.floor(i / BATCH) + 1}: ${slice.length} URLs → ${r.status} ${r.statusText}`);
      await sleep(500);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
