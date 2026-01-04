"use server";

import fs from "fs";
import path from "path";

export async function subscribeUser(formData: FormData) {
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
        return { success: false, message: "Invalid email address." };
    }

    try {
        const filePath = path.join(process.cwd(), "subscribers.csv");
        const date = new Date().toISOString();
        const csvLine = `${email},${date}\n`;

        // Check if file exists to add header
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "email,date\n");
        }

        // Append the new subscriber
        fs.appendFileSync(filePath, csvLine);

        // Simulate network delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return { success: true, message: "Successfully subscribed!" };
    } catch (error) {
        console.error("Subscription error:", error);
        return { success: false, message: "Failed to save subscription. Please try again." };
    }
}
