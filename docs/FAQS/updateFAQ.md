---
sidebar_label: "Update FAQ"
title: "Update FAQ Endpoint"
description: "Update FAQ API endpoint description"
---

# Update FAQ

**Endpoint:**

```
PUT {{Url}}/api/v1/faqs/update/:id
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "question": "Test Question updated",
  "answer": "Test FAQ response in details."
}
```

**Resposne**:

```json
{
  "id": "621f8605-71cc-4f72-9a57-be0496577531",
  "question": "Test Question updated",
  "answer": "Test FAQ response in details.",
  "createdAt": "2024-05-23T20:40:30.216Z",
  "updatedAt": "2024-10-28T14:56:53.237Z",
  "deletedAt": null
}
```

**Status Codes:**

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "404": "Not Found"
}
```
