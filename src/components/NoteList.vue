<template>
  <div class="row wrap">
    <div v-for="note in notes" :key="note.id" class="col-3">
      <note-item
        :note="note"
        @update-note="updateNote"
        @remove-note="removeNote"
      ></note-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import NoteItem from './NoteItem.vue';
import { Note } from './models';

export default defineComponent({
  name: 'NoteList',
  components: { NoteItem },
  props: {
    notes: {
      type: Array as PropType<Note[]>,
      default: () => [],
    },
  },
  emits: ['updateNote', 'removeNote'],
  setup(props, { emit }) {
    const updateNote = (note: Note) => {
      emit('updateNote', note);
    };

    const removeNote = (id: number) => {
      emit('removeNote', id);
    };

    return {
      updateNote,
      removeNote,
    };
  },
});
</script>
