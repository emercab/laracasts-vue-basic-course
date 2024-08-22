import AssignmentItem from "./AssignmentItem.js"
import AssignmentTags from "./AssignmentTags.js"

export default {
  components: {
    AssignmentItem,
    AssignmentTags,
  },

  template: /*html*/ `
    <section v-show="assignments.length" class="mb-8">

      <h2 class="font-bold text-2xl mb-2 text-center">
        {{ title }}
        <span class="text-gray-500">({{ assignments.length }})</span>
      </h2>

      <assignment-tags
        :tags="assignments.map(a => a.tag)"
        :currentTag
        @changeTag="currentTag = $event"
      />

      <ul class="border border-gray-600 rounded-md divide-y divide-gray-600 max-w-60 mt-4 mx-auto">
        <assignment-item
          v-for="assignment in filteredAssignments"
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
      return this.assignments.filter( assignment => assignment.tag === this.currentTag )
    },
  },

}