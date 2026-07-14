import { describe, it, expect, vi } from "vitest";
import { POST } from "./route";


describe("Chat API", () => {

  it("accepts POST request", async () => {

    const request = new Request(
      "http://localhost/api/chat",
      {
        method: "POST",
        body: JSON.stringify({
          message: "Where is Gate A?"
        }),
      }
    );


    const response = await POST(request);

    expect(response).toBeDefined();

  });


  it("returns response data", async () => {

    const request = new Request(
      "http://localhost/api/chat",
      {
        method: "POST",
        body: JSON.stringify({
          message: "Hello"
        }),
      }
    );


    const response = await POST(request);

    const data = await response.json();

    expect(data).toBeDefined();

  });

});