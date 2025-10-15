#!/usr/bin/env node

/**
 * SEO Testing Script for Escalade4lax
 *
 * This script helps test various SEO components of the application
 */

const https = require("https");
const http = require("http");

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// Colors for console output
const colors = {
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;

    client
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, data }));
      })
      .on("error", reject);
  });
}

async function testSitemap() {
  log("\n🔍 Testing Sitemap...", "blue");

  try {
    const response = await makeRequest(`${BASE_URL}/sitemap.xml`);

    if (response.status === 200) {
      log("✅ Sitemap is accessible", "green");

      // Basic validation
      if (response.data.includes("<?xml")) {
        log("✅ Sitemap has valid XML structure", "green");
      } else {
        log("❌ Sitemap missing XML declaration", "red");
      }

      if (response.data.includes("<urlset")) {
        log("✅ Sitemap has valid urlset structure", "green");
      } else {
        log("❌ Sitemap missing urlset element", "red");
      }

      // Count URLs
      const urlCount = (response.data.match(/<url>/g) || []).length;
      log(`📊 Found ${urlCount} URLs in sitemap`, "blue");
    } else {
      log(`❌ Sitemap returned status ${response.status}`, "red");
    }
  } catch (error) {
    log(`❌ Error testing sitemap: ${error.message}`, "red");
  }
}

async function testRobots() {
  log("\n🤖 Testing Robots.txt...", "blue");

  try {
    const response = await makeRequest(`${BASE_URL}/robots.txt`);

    if (response.status === 200) {
      log("✅ Robots.txt is accessible", "green");

      if (
        response.data.includes("User-Agent:") ||
        response.data.includes("User-agent:") ||
        response.data.includes("userAgent:")
      ) {
        log("✅ Robots.txt has user-agent rules", "green");
      } else {
        log("❌ Robots.txt missing user-agent rules", "red");
      }

      if (response.data.includes("Sitemap:")) {
        log("✅ Robots.txt references sitemap", "green");
      } else {
        log("❌ Robots.txt missing sitemap reference", "red");
      }
    } else {
      log(`❌ Robots.txt returned status ${response.status}`, "red");
    }
  } catch (error) {
    log(`❌ Error testing robots.txt: ${error.message}`, "red");
  }
}

async function testPages() {
  log("\n📄 Testing Page Metadata...", "blue");

  const pages = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "About Us" },
    { path: "/privacy-policy", name: "Privacy Policy" },
    { path: "/terms-of-service", name: "Terms of Service" },
    { path: "/auth/sign-in", name: "Sign In" },
    { path: "/auth/sign-up", name: "Sign Up" },
  ];

  for (const page of pages) {
    try {
      const response = await makeRequest(`${BASE_URL}${page.path}`);

      if (response.status === 200) {
        log(`✅ ${page.name} page is accessible`, "green");

        // Check for basic meta tags
        if (response.data.includes("<title>")) {
          log(`  ✅ ${page.name} has title tag`, "green");
        } else {
          log(`  ❌ ${page.name} missing title tag`, "red");
        }

        if (response.data.includes('name="description"')) {
          log(`  ✅ ${page.name} has meta description`, "green");
        } else {
          log(`  ❌ ${page.name} missing meta description`, "red");
        }

        if (response.data.includes('property="og:title"')) {
          log(`  ✅ ${page.name} has Open Graph title`, "green");
        } else {
          log(`  ❌ ${page.name} missing Open Graph title`, "red");
        }
      } else {
        log(`❌ ${page.name} page returned status ${response.status}`, "red");
      }
    } catch (error) {
      log(`❌ Error testing ${page.name}: ${error.message}`, "red");
    }
  }
}

async function testStructuredData() {
  log("\n🏗️ Testing Structured Data...", "blue");

  try {
    const response = await makeRequest(`${BASE_URL}/`);

    if (response.status === 200) {
      if (response.data.includes("application/ld+json")) {
        log("✅ Home page has structured data", "green");

        if (
          response.data.includes('"@type":"CarRental"') ||
          response.data.includes('"@type": "CarRental"')
        ) {
          log("✅ Car rental business schema found", "green");
        } else {
          log("❌ Car rental business schema missing", "red");
        }

        if (
          response.data.includes('"@type":"FAQPage"') ||
          response.data.includes('"@type": "FAQPage"')
        ) {
          log("✅ FAQ schema found", "green");
        } else {
          log("❌ FAQ schema missing", "red");
        }
      } else {
        log("❌ Home page missing structured data", "red");
      }
    } else {
      log(`❌ Home page returned status ${response.status}`, "red");
    }
  } catch (error) {
    log(`❌ Error testing structured data: ${error.message}`, "red");
  }
}

async function main() {
  log(`${colors.bold}🚀 SEO Testing Script for Escalade4lax${colors.reset}`);
  log(`Testing against: ${BASE_URL}\n`);

  await testSitemap();
  await testRobots();
  await testPages();
  await testStructuredData();

  log("\n✨ SEO testing completed!", "green");
  log("\nNext steps:", "blue");
  log("1. Update environment variables in .env.local", "yellow");
  log("2. Submit sitemap to Google Search Console", "yellow");
  log("3. Test with Google Rich Results Test tool", "yellow");
  log("4. Monitor performance in Search Console", "yellow");
}

// Run the tests
main().catch(console.error);

// "scripts": {
//   "dev": "next dev --turbopack",
//   "build": "prisma generate && next build",
//   "start": "next start",
//   "lint": "next lint",
//   "test:seo": "node scripts/test-seo.js",
//   "postinstall": "prisma generate"
// },
