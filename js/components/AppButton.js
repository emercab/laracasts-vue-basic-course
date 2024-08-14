export default {
  template: `
    <button 
      :class="{
        'relative py-2 px-4 m-2 rounded font-bold duration-300 disabled:cursor-not-allowed' : true,
        'bg-blue-600 hover:bg-blue-800 text-white' : type === 'primary',
        'bg-gray-400 hover:bg-gray-600 text-white' : type === 'secondary',
        'bg-sky-400 hover:bg-sky-600 text-white' : type === 'info',
        'bg-emerald-600 hover:bg-emerald-800 text-white' : type === 'success',
        'bg-amber-600 hover:bg-amber-800 text-white' : type === 'warning',
        'bg-red-600 hover:bg-red-800 text-white' : type === 'danger',
        'bg-slate-100 hover:bg-slate-200 text-slate-700' : type === 'muted',
        'bg-slate-700 hover:bg-slate-900 text-white' : type === 'dark',
        'is-loading' : processing,
      }"
      :disabled="proccessing"
    >
       <slot />
    </button>
  `,
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    processing: {
      type: Boolean,
      default: false,
    },
  }
}

