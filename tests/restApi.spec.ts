import { test, expect } from "@playwright/test";

test("return updated user", async ({ request }) => {
    let response = await request.put(`https://reqres.in/api/users/2`, {
        data: {
            "name": "Test",
            "job": "programmer"
        }
    });
    expect(response.status()).toBe(200);
    let responseJson = await response.json();
    expect(responseJson.name).toBe("Test");
    expect(responseJson.job).toBe("programmer");
});

test("return updated user (Patch request)", async ({ request }) => {
    let response = await request.patch(`https://reqres.in/api/users/2`, {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    expect(response.status()).toBe(200);
    let responseJson = await response.json();
    expect(responseJson.name).toEqual("morpheus");
    expect(responseJson.job).toEqual("zion resident");
});

test("delete user", async ({ request }) => {
    let response = await request.delete(`https://reqres.in/api/users/2`, {
        
    });
    expect(response.status()).toBe(204);
});