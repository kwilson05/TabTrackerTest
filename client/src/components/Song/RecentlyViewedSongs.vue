<template>
  <panel title="Recently Viewed Songs">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="history">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">
          {{props.item.title}}
        </td>
        <td class="text-xs-right">
          {{props.item.artist}}
        </td>
      </template>
    </v-data-table>
  </panel>
</template>
<script>
import { mapState } from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'

export default {
  name: 'RecentlyViewedSongs',
  props: [],
  data() {
    return {
      headers: [{
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      history: [
      ]
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.history = (await SongHistoryService.getAllSongHistory({
      })).data
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
