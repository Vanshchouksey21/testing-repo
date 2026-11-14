import { describe, it, expect } from "vitest";
import { isValidEmail, formatFullName, parsePrice } from "../../src/utils/data-helpers.js";

describe("Unit Tests - Live Site Data Helpers", () => {
  // Unit Test 1: Email validation
  it("Unit-1: should properly validate email formats", () => {
    expect(isValidEmail("george.bluth@reqres.in")).toBe(true);
    expect(isValidEmail("user.name+tag@example.co.uk")).toBe(true);
    expect(isValidEmail("invalid-email-string")).toBe(false);
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail(null as unknown as string)).toBe(false);
  });

  // Unit Test 2: Full name formatting
  it("Unit-2: should format full name and fallback gracefully", () => {
    expect(formatFullName("George", "Bluth")).toBe("George Bluth");
    expect(formatFullName(" Janet  ", "Weaver")).toBe("Janet Weaver");
    expect(formatFullName("OnlyFirst", "")).toBe("OnlyFirst");
    expect(formatFullName("", "OnlyLast")).toBe("OnlyLast");
    expect(formatFullName("", "")).toBe("Anonymous User");
  });

  // Unit Test 3: Price extraction from currency string
  it("Unit-3: should parse numeric currency values from live web elements", () => {
    expect(parsePrice("£51.77")).toBe(51.77);
    expect(parsePrice("$129.99")).toBe(129.99);
    expect(parsePrice("€ 0.95")).toBe(0.95);
    expect(parsePrice("Free")).toBe(0);
    expect(parsePrice("")).toBe(0);
  });
});

