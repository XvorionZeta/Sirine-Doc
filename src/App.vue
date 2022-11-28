<script setup>
import SideNav from "./components/layouts/SideNav.vue"
</script>
<template>
    <div class="">
        <!-- Navbar -->
        <div class="w-full p-2 px-4 py-2 border border-slate-900">
            <h4>SIRINE UI</h4>
        </div>
    </div>
    <!-- Wrapper -->
    <div class="grid grid-cols-1">
        <main>
            <div class="flex flex-1 min-h-screen gap-2">
                <!-- Side Nav -->
                <SideNav></SideNav>
                <!-- Content -->
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>