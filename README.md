# Svelte Route Protection with Unkey

This project demonstrates how you can protect your Svelte API Routes with [Unkey](https://app.unkey.com/)

![image](https://github.com/user-attachments/assets/87b99876-b066-4c23-993e-c4787c356e9b)


## Prerequisites

[Unkey](https://app.unkey.com/) account


## Setup Unkey

1. Create an [unkey account](http://app.unkey.com/)
2. Create a new [API](https://app.unkey.com/apis). Copy the `API ID`.
3. Go to [permissions](https://app.unkey.com/authorization/permissions) and create a new permission named `access-unkeyed-route`
4. Now go to roles and create a new role and select the `withAuth` permission for the role.
5. Go to [apis](https://app.unkey.com/apis) again and create a new key
6. Click on the **"Keys"** tab.
7. Select the key you created.
8. Click on the **"Permissions"** tab.
9. Check the role's checkbox to assign the role and permission to the key.
10. Create a new root key from the [settings/root-key](https://app.unkey.com/settings/root-keys/) with permission to create and read keys.
11. You can follow this link to create the root key on the workspace level.
[https://app.unkey.com/settings/root-keys/new?permissions=api.*.create_key,api.*.read_key](https://app.unkey.com/settings/root-keys/new?permissions=api.*.create_key,api.*.read_key)
12. Alternatively, follow this link to create the root key on the API level. Replace the API id with your API id. 
[https://app.unkey.com/settings/root-keys/new?permissions=api.api_id.create_key,api.api_id.read_key](https://app.unkey.com/settings/root-keys/new?permissions=api.api_id.create_key,api.api_id.read_key)

## Setup Environment Variables 

**`cp env.example .env` and add the following variables:**

```bash
UNKEY_API_ID=""
UNKEY_ROOT_KEY=""
```

## Quickstart

**Install all the dependencies**

```bash
pnpm install
```

**Run the app. It should start at port `5173`**

```bash
pnpm dev
```

## Usage

**Create a key using the following api/createKey route**

```bash
curl http://localhost:5173/api/createKey
```

**Now access the protected route which verifies the key**

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" http://localhost:5173/api/protected
```
