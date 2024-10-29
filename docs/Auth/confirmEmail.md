---
sidebar_label: "Confirm Email"
title: "Confirm Email Endpoint"
description: "Confirm Email API endpoint description"
---

# Confirm Email

**Endpoint:**

```
POST {{Url}}/auth/confirmEmail
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
  "email": "johndoe@gmail.com",
  "otp": "639055"
}
```
