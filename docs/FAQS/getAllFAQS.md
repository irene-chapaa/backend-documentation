---
sidebar_label: "Get All FAQS"
title: "Get All FAQS Endpoint"
description: "Get All FAQS API endpoint description"
---

# Get All FAQS

**Endpoint:**

```
GET {{Url}}/api/v1/faqs/all
```

**Authorization:** Bearer Token

```
{{Token}}
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
