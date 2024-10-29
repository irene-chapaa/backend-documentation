---
sidebar_label: "Delete FAQ"
title: "Delete FAQ Endpoint"
---

# Delete FAQ

**Endpoint:**

```
DELETE {{Url}}/api/v1/faqs/delete/:id
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
none
```

**Path Variables**:

```json
id
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
