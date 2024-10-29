---
sidebar_label: "Read Notification"
title: "Read Notification Endpoint"
description: "Read Notification API endpoint description"
---

# Read Notification

**Endpoint:**

```
PUT {{Url}}/api/v1/notification/read/:id
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Path Variables**:

```
id
```

**Request Body**:

```
{}
```

**Response Body**:

```json
{
  "success": true
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
