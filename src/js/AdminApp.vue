<template>
    <div id="myAdminPanel">
        <div class="authorbio_main_nav">
            <div class="topnav">
                <router-link v-for="menuItem in topMenus" :key="menuItem.route" active-class="ninja-tab-active" exact :class="['ninja-tab']" :to="{ name: menuItem.route }">
                    {{ menuItem.title }}
                </router-link>
            </div>
        </div>

        <el-button type="warning">{{shamim}}</el-button>
       <router-view></router-view>
    </div>
</template>

<script>
  export default {
      name: 'AdminApp',
      data() {
          return {
              topMenus: [],
              shamim: "is it working"
          }
      },
      methods: {
          setTopmenu() {
              this.topMenus = this.applyFilters('authorbio_top_level_menu', [
                {
                    route: 'supports',
                    title: 'Supports'
                }
              ])
          }
      },
      mounted() {
        this.setTopmenu();
      }
  }
</script>

