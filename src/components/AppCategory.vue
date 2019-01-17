<template>
  <v-navigation-drawer>
    <v-flex>
      <v-list class="transparent" permanent>
        <!-- eslint-disable-next-line vue/valid-v-for -->
        <v-list-group v-for="item in items" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.subItems" :key="subItem.title" @click>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-flex>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'app-category',
  data() {
    return {
      items: [
        {
          title: 'Shoes'
        },
        {
          title: 'Jean',
          subItems: [{ title: 'Skinny' }, { title: 'Broadcoat' }]
        },
        {
          title: 'Jacket'
        },
        {
          title: 'Gymswear'
        }
      ]
    };
  }
};
</script>
