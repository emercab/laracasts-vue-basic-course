import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList
  },

  template: /*html*/`
    <assignment-list
      title="In Progress Assignments"
      :assignments="filters.inProgress"
    />

    <assignment-list
      title="Completed Assignments"
      :assignments="filters.completed"
    />
  `,

  data() {
    return {
      assignments: [
        { id: 1, name: 'Finish project', complete: false },
        { id: 2, name: 'Read chapter 4', complete: true },
        { id: 3, name: 'Turn in homework', complete: false },
      ]
    }
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete),
      }
    }
  }

}
