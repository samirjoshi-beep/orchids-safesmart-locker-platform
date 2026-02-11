# MongoDB Schema Design: SafeSmart.in

## Collections & Documents

### 1. `admins`
Stores administrative users with RBAC.
```json
{
  "_id": "ObjectId",
  "username": "admin_user",
  "password": "hashed_password",
  "email": "admin@safesmart.in",
  "role": "SUPER_ADMIN", // ADMIN, EDITOR
  "permissions": ["PRODUCT_MANAGE", "CMS_EDIT", "INQUIRY_VIEW"],
  "lastLogin": "ISODate",
  "createdAt": "ISODate"
}
```

### 2. `categories`
Hierarchical product categorization.
```json
{
  "_id": "ObjectId",
  "name": "Fire Resistant Safes",
  "slug": "fire-resistant-safes",
  "description": "Premium protection against fire hazards.",
  "image": "url_to_image",
  "parentId": "ObjectId", // For sub-categories
  "order": 1,
  "isActive": true
}
```

### 3. `products`
The core locker entity.
```json
{
  "_id": "ObjectId",
  "name": "SafeX-2000 Pro",
  "slug": "safex-2000-pro",
  "sku": "SS-L-2000",
  "categoryId": "ObjectId",
  "shortDescription": "High-security digital locker.",
  "longDescription": "Full HTML/Markdown content from CMS.",
  "basePrice": 0.0, // Future use for online ordering
  "mainImage": "url_to_image",
  "gallery": ["url1", "url2"],
  "specifications": [
    { "key": "Dimensions", "value": "400x500x600 mm" },
    { "key": "Weight", "value": "120 kg" },
    { "key": "Lock Type", "value": "Biometric + Digital" }
  ],
  "industries": ["Banking", "Jewelry", "Home"],
  "isFeatured": true,
  "seo": {
    "title": "...",
    "description": "...",
    "keywords": ["locker", "safe"]
  },
  "isActive": true,
  "createdAt": "ISODate"
}
```

### 4. `cmsPages`
Dynamic content for Home, About, Industries, etc.
```json
{
  "_id": "ObjectId",
  "pageKey": "HOME", // ABOUT, INDUSTRIES, etc
  "sections": [
    {
      "sectionId": "hero",
      "content": { "title": "Secure Your Future", "image": "..." },
      "isActive": true
    }
  ],
  "seo": { "title": "...", "description": "..." }
}
```

### 5. `contactInquiries`
Inquiries submitted by users.
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-XXXXXXXXXX",
  "subject": "Quote for SafeX-2000",
  "message": "Interested in bulk purchase.",
  "productId": "ObjectId", // Optional reference
  "status": "NEW", // READ, REPLIED, ARCHIVED
  "createdAt": "ISODate"
}
```

### 6. `mediaAssets`
Managed gallery and assets.
```json
{
  "_id": "ObjectId",
  "url": "url",
  "altText": "SafeX Display",
  "fileSize": 102450,
  "mimeType": "image/webp",
  "tags": ["gallery", "product"]
}
```

## Indexing Strategy
- `products`: `slug: 1` (Unique), `categoryId: 1`, `isActive: 1`
- `categories`: `slug: 1` (Unique), `isActive: 1`
- `admins`: `email: 1` (Unique)
- `cmsPages`: `pageKey: 1` (Unique)
- `contactInquiries`: `createdAt: -1`, `status: 1`

## Design Decisions
- **Embedded Specifications:** Specifications are small and fixed per product, so they are embedded in `products` for fast retrieval.
- **Reference for Categories:** Products reference `categoryId` to allow easy moving between categories and top-level listing.
- **CMS Page Keys:** Uses a `pageKey` string for easy lookup in the frontend.
