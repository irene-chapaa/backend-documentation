---
sidebar_label: "Delete Withdrawal Request"
title: "Delete Withdrawal Request Endpoint"
---

# Delete Withdrawal Request

**Endpoint:**

```
DELETE {{Url}}/api/v1/withdrawal-request/delete/:id
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
