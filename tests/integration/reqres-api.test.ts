import { describe, it, expect } from "vitest";

const REQRES_BASE_URL = "https://reqres.in/api";

describe("Integration Tests - ReqRes Live Public API", () => {
  // Integration Test 1: Fetch paginated users from live API and verify response structure
  it("Integration-1: GET /api/users?page=2 returns status 200 with valid schema", async () => {
    const response = await fetch(`${REQRES_BASE_URL}/users?page=2`, {
      headers: {
        "Accept": "application/json",
      },
    });

    expect(response.status).toBe(200);
    const body = await response.json();

    expect(body).toHaveProperty("page", 2);
    expect(body).toHaveProperty("per_page");
    expect(body).toHaveProperty("total");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);

    const firstUser = body.data[0];
    expect(firstUser).toHaveProperty("id");
    expect(firstUser).toHaveProperty("email");
    expect(firstUser).toHaveProperty("first_name");
    expect(firstUser).toHaveProperty("last_name");
  });

  // Integration Test 2: Error handling test on non-existent resource (HTTP 404)
  it("Integration-2: GET /api/users/23 returns 404 Not Found for non-existing resource", async () => {
    const response = await fetch(`${REQRES_BASE_URL}/users/23`, {
      headers: {
        "Accept": "application/json",
      },
    });

    expect(response.status).toBe(404);
    const body = await response.json();
    expect(body).toEqual({});
  });
});

