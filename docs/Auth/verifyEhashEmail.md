---
sidebar_label: "Verify Ehash Email"
title: "Verify Ehash Email Endpoint"
description: "Verify Ehash Email API endpoint description"
---

# Verify Ehash Email

**Endpoint:**

```
POST {{Url}}/auth/verify-ehash-email
```

**Authorization:** Bearer Token

```
{{Token}}
```

**Request Body**:

```json
{
    "email": "johndoe@gmail.com",
    "ehash": "380055c2f073b15d89140b06262ba55020abb2a6ed62ff68e0f79eefbfe030c0"
}
```
