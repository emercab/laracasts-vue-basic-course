import AssignmentItem from "./AssignmentItem.js"

export default {
  components: {
    AssignmentItem,
  },

  template: /*html*/ `
    <section v-show="assignments.length" class="mb-8">

      <h2 class="font-bold text-2xl mb-2 text-center">{{ title }}</h2>

      <ul class="border border-gray-600 rounded-md divide-y divide-gray-600 max-w-60 mx-auto">
        
        <assignment-item
          v-for="assignment in assignments"
          :key="assignment.id"
          :assignment="assignment"
        />

      </ul>

    </section>
  `,

  props: {
    assignments: Array,
    title: String,
  },
}