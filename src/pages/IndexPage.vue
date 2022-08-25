<template>
  <q-page class="row justify-evenly">
    <div class="column col-10 q-pa-md">
      <div class="row justify-between items-center">
        <p class="text-h6 q-ma-none">My Notes</p>
        <q-btn color="primary" label="Add Note" @click="addNote" />
      </div>
      <note-list
        :notes="notes"
        @update-note="handleUpdate"
        @remove-note="handleRemove"
      ></note-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Note } from 'components/models';
import NoteList from 'components/NoteList.vue';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { NoteList },
  setup() {
    const notes = ref<Note[]>(
      JSON.parse(localStorage.getItem('notes') as string) || []
    );

    const addNote = () => {
      const newId = parseInt(localStorage.getItem('id') as string) + 1 || 0;
      notes.value.push({
        id: newId,
        content: '',
      });
      localStorage.setItem('id', String(newId));
    };

    const handleUpdate = (updated: Note) => {
      notes.value = notes.value.map((note) =>
        note.id === updated.id ? updated : note
      );
    };

    const handleRemove = (id: number) => {
      notes.value = notes.value.filter((note) => note.id !== id);
    };

    watch(
      () => notes.value,
      (newNotes) => {
        localStorage.setItem('notes', JSON.stringify(newNotes));
      },
      {
        deep: true,
      }
    );

    return { notes, addNote, handleUpdate, handleRemove };
  },
});
</script>
