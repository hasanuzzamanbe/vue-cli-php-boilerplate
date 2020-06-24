<template>
    <div id="myAdminPanel">
        <div class="authorbio_main_nav">
            <div class="topnav">
                <router-link
                    v-for="menuItem in topMenus"
                    :key="menuItem.route"
                    active-class="ninja-tab-active"
                    exact
                    :class="['ninja-tab']"
                    :to="{ name: menuItem.route }"
                >{{ menuItem.title }}</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "AdminApp",
    data() {
        return {
            topMenus: [
                {
                    route: "home",
                    title: "home"
                },
                {
                    route: "supports",
                    title: "Supports"
                }
            ],
            shamim: "is it working"
        };
    }
};
</script>

