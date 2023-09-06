<script setup>
import useStudent from '../../composables/studentApi';
import {onMounted} from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';

const {studentData,getSingleStudent} = useStudent()
const route = useRoute();
onMounted(() => {
  getSingleStudent(route.params.id)
})

</script>

<template>
  
  <table class="table-auto w-full">
<thead class="bg-slate-600 text-white">
    <tr>
        <th class="py-1">No</th>
        <th class="py-1">Name</th>
        <th class="py-1">Email</th>

    </tr>
</thead>
<tbody class="text-center">
<tr>
    <td class="py-2">{{ studentData.id }}</td>
    <td class="py-2">{{studentData.stuname}}</td>
    <td class="py-2">{{studentData.email}}</td>
   
</tr>

</tbody>
  </table>
  <div class="flex justify-center">
      <RouterLink :to="{name:'List'}">
        <button class="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Back
      </button>
      </RouterLink>
      
    </div>
</template>

<style scoped>

</style>
