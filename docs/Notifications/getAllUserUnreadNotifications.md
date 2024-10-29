---
sidebar_label: "Get All User Unread Notifications"
title: "Get All User Unread Notifications Endpoint"
description: "Get All User Unread Notifications API endpoint description"
---

# Get All User Unread Notifications

**Endpoint:**

```
GET {{Url}}/api/v1/notification/unread-count
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
{
  "count": 13
}
```

**Status Codes**:

```json
{
  "200": "Success",
  "401": "Unauthorized",
  "400": "Bad Request",
  "404": "Not Found",
  "500": "Internal Server Error"
}
```
