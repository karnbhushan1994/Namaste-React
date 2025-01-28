Props is argument : pass to component


A Config-Driven UI means building a user interface based on settings or instructions (config) stored in a file or object. Instead of writing code for every part of the UI, you create a configuration (like a JSON file) that describes what the UI should look like and how it should behave.

For example:
```json
{
  "title": "User Form",
  "fields": [
    { "type": "text", "label": "Name", "placeholder": "Enter your name" },
    { "type": "email", "label": "Email", "placeholder": "Enter your email" },
    { "type": "button", "label": "Submit", "action": "submitForm" }
  ]
}
```

The system reads this configuration and automatically creates a form with:
- A text input for the name
- An email input for the email
- A submit button

### Why Use Config-Driven UI?
- Flexibility: Update the UI by editing the config instead of writing new code.
- Reusability: Use the same system for different UIs by changing the config.
- Speed: Quickly create and modify UIs without deep coding changes.

### Example Use Cases
- Dynamic forms
- Dashboards
- Customizable components in apps

join  =  join with , comma