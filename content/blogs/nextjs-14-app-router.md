---
title: "Next.js 14: App Router Deep Dive"
date: "2024-03-05"
excerpt: "Explore the powerful features of Next.js 14's App Router and learn how to build modern web applications."
author: "Surendra Kumar"
tags: ["Next.js", "React", "Web Development", "Server Components"]
coverImage: "/blog-images/nextjs-14.jpg"
---

# Next.js 14: App Router Deep Dive

Next.js 14 introduces significant improvements to the App Router. Let's explore its powerful features.

## What's New in Next.js 14?

- Improved performance with Turbopack
- Server Actions (Stable)
- Partial Prerendering
- Enhanced metadata API
- Better error handling

## File-based Routing

The App Router uses a file-system based routing:

```
app/
├── page.tsx          # Home page (/)
├── about/
│   └── page.tsx      # About page (/about)
└── blog/
    ├── page.tsx      # Blog list (/blog)
    └── [slug]/
        └── page.tsx  # Individual blog (/blog/[slug])
```

## Server Components by Default

All components in the app directory are Server Components by default:

```tsx
// This is a Server Component
async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
```

## Client Components

Use 'use client' directive for interactive components:

```tsx
'use client'

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Server Actions

Server Actions allow you to run server-side code directly from your components:

```tsx
async function createPost(formData: FormData) {
  'use server'
  
  const title = formData.get('title');
  // Save to database
}

export default function CreatePostForm() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}
```

## Loading and Error States

```tsx
// loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}

// error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

## Metadata API

```tsx
export const metadata = {
  title: 'My Blog Post',
  description: 'This is an amazing blog post',
  openGraph: {
    images: ['/og-image.jpg'],
  },
};
```

## Conclusion

Next.js 14's App Router brings powerful features that make building modern web applications easier and more efficient. The combination of Server and Client Components provides the best of both worlds.
