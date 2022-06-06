<template>
    <v-footer dark padless>
        <v-card flat tile class="teal lighten-1 white--text text-center">
            <v-card-text>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur quidem pariatur odit voluptate recusandae ipsum et a est? Minus cum facilis dolorem? Rem ab facilis possimus maiores porro sequi.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: "FooterComp",
};
</script>
