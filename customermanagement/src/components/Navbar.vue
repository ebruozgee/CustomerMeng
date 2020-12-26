<template>
    <div>
        <v-toolbar
                light
                prominent
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-spacer></v-spacer>

            <v-toolbar-title>
                <v-btn to="/">CUSTOMER SUPPORT MANAGEMENT</v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat to="/ticets" color="#CD5C5C" class="mr-2">
                    Ticets
                </v-btn>
                <v-btn flat to="/employee" color="#CD5C5C">
                    Employee
                </v-btn>
            </v-toolbar-items>

        </v-toolbar>
    </div>
</template>