---
sidebar_label: "Update Password"
title: "Update Password Endpoint"
description: "Update Password API endpoint description"
---

# Update Password API

**Endpoint:**

```
PUT {{Url}}/auth/me/password
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "current": "Ouda@1234",
  "password": "Ouda@12345"
}
```
