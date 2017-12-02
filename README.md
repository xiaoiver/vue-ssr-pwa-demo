# vue-ssr-pwa-demo

使用 Vue SSR + Workbox 实现离线可用。
[文章](https://zhuanlan.zhihu.com/p/31630322)

## 安装 & 运行

安装依赖
``` bash
npm install
```

构建
``` bash
npm run build
```

启动服务器
``` bash
npm run start
```

此时访问 localhost:3000，可以看到 ServiceWorker 预缓存的资源：
[预缓存资源列表](./example/img/cache.png)

切换到离线状态，可以看到 App Shell 已经被缓存：
[离线状态](./example/img/offline.png)
