import AssignmentItem from "./AssignmentItem.js"
import AssignmentTags from "./AssignmentTags.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
  components: {
    AssignmentItem,
    AssignmentTags,
    AssignmentCreate,
  },

  template: /*html*/ `
    <div v-show="assignments.length" class="mb-8 w-100 bg-gray-700 border border-gray-600 p-4 rounded-2xl">

      <div class="flex justify-between items-start">
        <h2 class="font-bold text-2xl mb-2 text-center">
          {{ title }}
          <span class="text-gray-500">({{ assignments.length }})</span>
        </h2>

        <button v-show="canHide" @click="$emit('hide')" class="ml-4">&times;</button>
      </div>

      <assignment-tags
        v-model:currentTag="currentTag"
        :tags="assignments.map(a => a.tag)"
      />

      <ul class="border border-gray-600 rounded-md divide-y divide-gray-600 max-w-72 mt-4 mx-auto">
        <assignment-item
          v-for="assignment in filteredAssignments"
          :key="assignment.id"
          :assignment="assignment"
        />
      </ul>

      <slot></slot>

    </div>
  `,

  props: {
    assignments: Array,
    title: String,
    canHide: { type: Boolean, default: false, },
  },

  data() {
    return {
      currentTag: 'all',
    }
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments
      }
      return this.assignments.filter(assignment => assignment.tag === this.currentTag)
    },
  },

}