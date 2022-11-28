<template>
    <div class="grid w-full grid-cols-2 gap-4 p-4 h-fit">
        <!-- Vertical Form -->
        <div class="h-full p-4 overflow-hidden rounded-md dark:bg-slate-800 dark:bg-opacity-60 dark:backdrop-blur dark:backdrop-filter">
            <h6 class="mb-2 font-bold">Vertical</h6>
            <div class="flex flex-col gap-1.5 mb-3 text-xs1">
                <label for="name" class="leading-tight">Name</label>
                <input type="text" class="px-2 py-[3px] leading-tight transition duration-300 ease-in-out border rounded text-xs2 dark:border-slate-600/50 dark:text-slate-100 dark:bg-slate-600/50 focus:outline-none focus:border-blue-500"/>
            </div>
            <div class="flex flex-col gap-1.5 mb-3 text-xs1">
                <label for="email" class="flex-none leading-tight">E-mail</label>
                <input type="text" class="px-2 py-[3px] leading-tight transition duration-300 ease-in-out border rounded text-xs2 dark:border-slate-600/50 dark:text-slate-100 dark:bg-slate-600/50 focus:outline-none focus:border-blue-500"/>
            </div>
            <div class="flex flex-col gap-1.5 mb-3 text-xs1">
                <label for="age" class="leading-tight">Age</label>
                <input type="text" class="px-2 py-[3px] leading-tight transition duration-300 ease-in-out border rounded text-xs2 dark:border-slate-600/50 dark:text-slate-100 dark:bg-slate-600/50 focus:outline-none focus:border-blue-500"/>
            </div>
        </div>
        <div class="flex flex-col flex-1 gap-4 h-fit">
            <!-- Horizontal Form -->
            <div class="p-4 rounded-md dark:bg-slate-800 dark:bg-opacity-60 dark:backdrop-blur dark:backdrop-filter">
                <h6 class="mb-2 font-bold">Horizontal</h6>
                <div class="flex flex-row w-full gap-4 mb-3 text-xs1">
                    <label for="name" class="flex-none my-auto leading-tight">Name</label>
                    <input type="text" class="px-2 py-[3px] w-full leading-tight transition duration-300 ease-in-out border rounded text-xs2 dark:border-slate-600/50 dark:text-slate-100 dark:bg-slate-600/50 focus:outline-none focus:border-blue-500"/>
                </div>
                <div class="flex flex-row w-full gap-4 mb-3 text-xs1">
                    <label for="email" class="flex-none my-1/2 w-max">E-mail</label>
                    <input type="text" class="px-2 py-[3px] w-full leading-tight transition duration-300 ease-in-out border rounded text-xs2 dark:border-slate-600/50 dark:text-slate-100 dark:bg-slate-600/50 focus:outline-none focus:border-blue-500"/>
                </div>
            </div>
            <!-- Inline Form -->
            <div class="p-4 rounded-md dark:bg-slate-800 dark:bg-opacity-60 dark:backdrop-blur dark:backdrop-filter">
                <h6 class="mb-2 font-bold">Inline</h6>
                <div class="flex flex-row gap-4 mb-3 text-xs1">
                    <input type="text" class="inline-block px-2 py-[3px] w-full leading-tight transition duration-300 ease-in-out border rounded text-xs2 dark:border-slate-600/50 dark:text-slate-100 dark:bg-slate-600/50 focus:outline-none focus:border-blue-500"/>
                    <input type="text" class="inline-block px-2 py-[3px] w-full leading-tight transition duration-300 ease-in-out border rounded text-xs2 dark:border-slate-600/50 dark:text-slate-100 dark:bg-slate-600/50 focus:outline-none focus:border-blue-500"/>
                    <button type="button" class="px-2 py-1 text-blue-100 bg-blue-600 rounded shadow-lg brightness-150 shadow-blue-600/25">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>