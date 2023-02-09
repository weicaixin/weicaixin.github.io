# GPU

## 现代图形架构

### Pipeline

### Render Pass

VkRenderPass is a data oriented thing. It is necessitated by tiled architecture GPUs (mobile GPUs). On desktop GPUs it can still fill the role of being oracle for optimization and\or allow partially-tiled architecture (or any other architecture really that can use this).

Tiled-architecture GPUs need to "load" image\buffer from general-purpose RAM to "on-chip memory". When they are done they "store" their results back to RAM.
