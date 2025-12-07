Place the original PNG assets exported from Figma in this folder.

Each component imports them via `figma:asset/<hash>.png`. When a matching file
exists here, the Vite plugin will serve `/figma-assets/<hash>.png`.

Without the real files the build falls back to a transparent placeholder, so
drop the actual images back in to restore the intended visuals.



