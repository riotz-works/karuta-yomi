<template>
  <Layout>
    <v-container>

      <section class="contents">
        <v-list shaped color="transparent" height="0">
          <v-list-item-group>
            <v-list-item v-for="game in $page.games.edges" :key="game.node.id">
              <v-list-item-icon><v-icon large>$cards</v-icon></v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ game.node.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </section>

    </v-container>
  </Layout>
</template>


<page-query>
  query {
    games: allGame(sortBy: "no", order: ASC) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
</page-query>
