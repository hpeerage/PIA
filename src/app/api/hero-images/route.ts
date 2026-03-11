import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        // Read from the root /images directory
        const imagesDirectory = path.join(process.cwd(), 'images');
        
        // Wait for directory read
        const files = await fs.readdir(imagesDirectory);

        // Filter out non-image files (e.g., .DS_Store)
        const imageFiles = files.filter(file => {
            return /\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file);
        });

        // Map to paths accessible via the public/images symlink
        const imageUrls = imageFiles.map(file => `/images/${file}`);

        // Shuffle the images array
        for (let i = imageUrls.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
        }

        return NextResponse.json({ images: imageUrls });
    } catch (error) {
        console.error('Failed to read images directory:', error);
        return NextResponse.json({ images: [] }, { status: 500 });
    }
}
