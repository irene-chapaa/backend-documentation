---
sidebar_label: "Create FAQ"
title: "Create FAQ Endpoint"
description: "Create FAQ API endpoint description"
---

# Create FAQ

**Endpoint:**

```
POST {{Url}}api/v1/faqs/create
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "question": "Test Question",
  "answer": "Test FAQ response in details."
}
```

**Response Body**:

````json
{
    "id": "4652dc20-da06-4f28-988d-c951d2f0ceeb",
    "question": "Test Question",
    "answer": "Test FAQ response in details.",
    "updatedAt": "2024-10-28T14:55:49.337Z",
    "createdAt": "2024-10-28T14:55:49.337Z",
    "deletedAt": null
}```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
````
