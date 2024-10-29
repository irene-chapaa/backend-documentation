---
sidebar_label: "Delete User"
title: "Delete User Endpoint"
---

# Delete User

**Endpoint:**

```
DELETE {{Url}}/api/v1/users/:id
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Path Variables**:

```json
id
```

**Request Body**:

```json
none
```

**Response**:

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
