<script setup>
import {reactive} from 'vue'
import { RouterLink } from 'vue-router';
import useStudent from '../../composables/studentApi'

const {createStudent} = useStudent()

const formData = reactive({
    stuname: "",
    email: "",
})
const handleAddStudentForm = async () => {
    await createStudent(formData)
}
</script>

<template>
  <div>
  <h1 className="flex justify-center text-3xl font-bold underline">
      ADD Student
    </h1>

    <div class=" flex justify-center h-full">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"  @submit.prevent="handleAddStudentForm"  >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Name
      </label>
      <input v-model.trim="formData.stuname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="stuname" type="text" placeholder="Name" required>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input v-model.trim="formData.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
     
    </div>
    <div class="flex gap-5 justify-center">
        <div >
          <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
      
    </div>
    <div >
      <RouterLink :to="{name:'List'}">
        <button class="bg-emerald-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Back
      </button>
      </RouterLink>
      
    </div>
    </div>
  </form>
 
</div>
</div>
</template>

<style scoped>

</style>
