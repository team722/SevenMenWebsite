import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-115e9cbf/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-115e9cbf/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !service || !message) {
      console.log("Contact form validation error: Missing required fields");
      return c.json({ error: "All fields are required" }, 400);
    }

    // Create a unique key for this submission using timestamp and email
    const timestamp = new Date().toISOString();
    const key = `contact_${Date.now()}_${email}`;

    // Store the contact message
    await kv.set(key, {
      name,
      phone,
      email,
      service,
      message,
      submittedAt: timestamp,
    });

    console.log(`Contact form submission stored successfully: ${key}`);
    return c.json({ 
      success: true, 
      message: "Your message has been submitted successfully!" 
    });
  } catch (error) {
    console.log(`Error storing contact form submission: ${error}`);
    return c.json({ 
      error: "Failed to submit message. Please try again." 
    }, 500);
  }
});

// Get all contact messages (for admin purposes)
app.get("/make-server-115e9cbf/contact-messages", async (c) => {
  try {
    const messages = await kv.getByPrefix("contact_");
    console.log(`Retrieved ${messages.length} contact messages`);
    return c.json({ messages });
  } catch (error) {
    console.log(`Error retrieving contact messages: ${error}`);
    return c.json({ 
      error: "Failed to retrieve messages" 
    }, 500);
  }
});

Deno.serve(app.fetch);