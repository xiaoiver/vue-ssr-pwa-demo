<template>
    <div>
        <h2>LAVAS</h2>
        <h4>[ˈlɑ:vəz]</h4>
    </div>
</template>

<script>
function setState(store) {}

export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    async asyncData({store, route}) {
        setState(store);
    }
};
</script>

<style lang="stylus" scoped>
h2
    margin-top 70%
    font-size 46px
    font-weight 500
</style>
