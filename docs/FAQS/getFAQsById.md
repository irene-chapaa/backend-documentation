---
sidebar_label: "Get FAQs By Id"
title: "Get FAQs By Id Endpoint"
description: "Get FAQs By Id API endpoint description"
---

# Get FAQs By Id

**Endpoint:**

```
GET {{Url}}/api/v1/faqs/byId/:id
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Path Variables:**

```
id
```

**Request Body**:

```
none
```

**Response Body:**

```json
[
  {
    "id": "621f8605-71cc-4f72-9a57-be0496577531",
    "question": "This is material ui",
    "answer": "Users might have a preference for light or dark mode that they've set through their operating system—either systemwide, or for a single user agent.  You can make use of this preference with the useMediaQuery hook and the prefers-color-scheme media query.  The following demo shows how to enable dark mode automatically by checking for the user's preference in their OS or browser settings:",
    "createdAt": "2024-05-23T20:40:30.216Z",
    "updatedAt": "2024-05-23T20:40:30.216Z",
    "deletedAt": null
  }
]
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
