<template>
  <q-card square class="note-card bg-yellow-4 q-mx-sm q-my-sm column">
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">Note {{ note ? note.id + 1 : '' }}</div>
        </div>

        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section @click="confirmModal = true"
                    >Remove</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none col column">
      <q-input
        v-model="content"
        borderless
        standout="bg-none"
        rows="8"
        type="textarea"
        autofocus
        @keyup="handleUpdate"
      />
    </q-card-section>
  </q-card>
  <q-dialog v-model="confirmModal" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <span class="q-ml-sm">Are you sure to remove this note?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn
          flat
          label="Confirm"
          color="primary"
          v-close-popup
          @click="handleRemove"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.note-card {
  height: 250px;
}
.note-text {
  white-space: pre-wrap;
  overflow: auto;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Note } from './models';

export default defineComponent({
  name: 'NoteItem',
  props: {
    note: Object as () => Note,
  },
  emits: ['updateNote', 'removeNote'],
  setup(props, { emit }) {
    const content = ref(props.note?.content || '');
    const confirmModal = ref(false);

    const handleUpdate = () => {
      emit('updateNote', {
        ...props.note,
        content: content.value,
      });
    };

    const handleRemove = () => {
      emit('removeNote', (props.note as Note).id);
    };

    return {
      content,
      confirmModal,
      handleUpdate,
      handleRemove,
    };
  },
});
</script>
