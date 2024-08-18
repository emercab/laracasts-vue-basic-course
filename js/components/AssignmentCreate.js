export default {
  template: /*html*/ `
    <form class="mt-8 border border-gray-600 rounded-md p-4" @submit.prevent="add">
      
      <label class="block text-center" for="assignment">
        <span>Add new assignment...</span>
      </label>
      
      <div class="flex justify-between items-center gap-2">
        <input type="text" v-model="newAssignment" class="mt-1 text-gray-900 p-2 rounded-md" id="assignment" />
        <button type="submit" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          Add
        </button>
      </div>
    
    </form>
  `,

  data() {
    return {
      newAssignment: '',
    }
  },

  methods: {
    add() {
      this.$emit('add', this.newAssignment);
      this.newAssignment = '';
    }
  }
}