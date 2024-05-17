import GallerySlider from "./GallerySlider";
import fs from 'fs/promises';
import path from 'path';

export default async function GalleryFetch() {
    const imageDirectory = path.join(process.cwd(), '/public/gallery');
    const imageFilenames = await fs.readdir(imageDirectory)
    return (
        <GallerySlider images={imageFilenames}/>
    )
}