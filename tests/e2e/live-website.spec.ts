import { test, expect } from "@playwright/test";

test.describe("E2E Tests - Books to Scrape Live Store", () => {
  // E2E Test 1: Homepage loading, title and header elements
  test("E2E-1: Home page loads with valid title and book catalogue header", async ({ page }) => {
    await page.goto("http://books.toscrape.com/", { waitUntil: "domcontentloaded", timeout: 25000 });

    // Verify Title
    await expect(page).toHaveTitle(/All products | Books to Scrape - Sandbox/i);

    // Verify Navigation & Header brand
    const brand = page.locator("a", { hasText: "Books to Scrape" });
    await expect(brand).toBeVisible();

    // Verify products list is rendered
    const products = page.locator("article.product_pod");
    await expect(products.first()).toBeVisible();
    const count = await products.count();
    expect(count).toBeGreaterThan(0);
  });

  // E2E Test 2: Category navigation and product detail view
  test("E2E-2: Navigate to a category and verify product pricing details", async ({ page }) => {
    await page.goto("http://books.toscrape.com/", { waitUntil: "domcontentloaded", timeout: 25000 });

    // Click on "Travel" category in the sidebar
    const travelCategory = page.locator(".side_categories ul li ul li a", { hasText: "Travel" });
    await travelCategory.click();

    // Verify URL contains category
    await expect(page).toHaveURL(/catalogue\/category\/books\/travel_2/);

    // Verify the page header shows Travel
    const pageHeader = page.locator(".page-header h1");
    await expect(pageHeader).toHaveText("Travel");

    // Click first product in Travel category
    const firstProductLink = page.locator("article.product_pod h3 a").first();
    await firstProductLink.click();

    // Verify Product details page elements (Stock availability and price)
    const priceElement = page.locator("p.price_color").first();
    await expect(priceElement).toBeVisible();

    const availability = page.locator("p.instock.availability").first();
    await expect(availability).toBeVisible();
    await expect(availability).toContainText("In stock");
  });
});

