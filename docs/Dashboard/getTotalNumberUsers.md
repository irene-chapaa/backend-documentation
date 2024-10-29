---
sidebar_label: "Get total number of users"
title: "Get total number of users Endpoint"
description: "Get total number of users API endpoint description"
---

# Get Total Number of Users

**Endpoint:**

```
GET {{Url}}/api/v1/dashboard/total-users
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Response Body**:

```json
{
  "totalUsers": 76
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
