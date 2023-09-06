<script setup>
import {EyeIcon,PencilIcon,TrashIcon,}from '@heroicons/vue/24/solid'
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import useStudent from "../../composables/studentApi"

const {studentData,getAllStudent,destroyStudent} = useStudent();
onMounted(getAllStudent)

const deleteStudent = async(id) => {
    if(!window.confirm("Are you sure ?")) {
        return ;
    }
    await destroyStudent(id)
    await getAllStudent()
}
</script>

<template>
  <div class="bg-emerald-100 p-4 grid grid-cols-9">
    <div class="col-span-6 md:col-span-8">
        <h1 className="text-3xl font-bold underline">List  All Student</h1>
    </div>
    <RouterLink :to="{name:'add'}">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Add
      </button>
      </RouterLink>
  </div>
  

  <table class="table-auto w-full">
<thead class="bg-slate-600 text-white">
    <tr>
        <th class="py-1">No</th>
        <th class="py-1">Name</th>
        <th class="py-1">Email</th>
        <th class="py-1">Action</th>
    </tr>
</thead>
<tbody class="text-center">
<tr v-for="({id,stuname,email},i) in studentData" :key="id">
    <td class="py-2">{{ id }}</td>
    <td class="py-2">{{ stuname }}</td>
    <td class="py-2">{{email}}</td>
    <td class="flex py-2 justify-center">
        <RouterLink :to="{name:'view',params:{id:id}}">
            <EyeIcon class="text-blue-500 h-6 w-6 m-4"/>
        </RouterLink>
        <RouterLink :to="{name:'edit',params:{id:id}}">
            <PencilIcon class="text-emerald-500 h-6 w-6 m-4"/>
        </RouterLink>
        <TrashIcon @click="deleteStudent(id)" class="text-red-500 h-6 w-6 m-4 cursor-pointer"/>
    </td>
</tr>

</tbody>
  </table>
  
  
</template>

<style scoped>

</style>
