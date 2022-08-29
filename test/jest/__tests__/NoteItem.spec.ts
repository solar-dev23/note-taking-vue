import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { DOMWrapper, mount } from '@vue/test-utils';

import NoteItem from 'src/components/NoteItem.vue';

installQuasarPlugin();

const mockNoteItem = {
  id: 1,
  content: 'Test Note',
};

describe('NoteItem', () => {
  it('renders component', () => {
    const wrapper = mount(NoteItem, {
      props: {
        note: mockNoteItem,
      },
    });
    const { vm } = wrapper;

    expect(wrapper.find('.note-title').text()).toBe('Note 2');
    expect(vm.content).toBe('Test Note');
    expect(vm.confirmModal).toBeFalsy();
    expect(typeof vm.handleUpdate).toBe('function');
    expect(typeof vm.handleRemove).toBe('function');
    expect(wrapper.find('.q-dialog-modal').exists()).toBe(false);
  });

  it('updates note', async () => {
    const wrapper = mount(NoteItem, {
      props: {
        note: mockNoteItem,
      },
    });

    await wrapper.find('textarea').setValue('Updated Test Note');
    await wrapper.find('textarea').trigger('keyup');
    expect(wrapper.emitted()).toHaveProperty('updateNote');
    expect(wrapper.vm.content).toBe('Updated Test Note');
  });

  it('removes note', async () => {
    const wrapper = mount(NoteItem, {
      props: {
        note: mockNoteItem,
      },
      data: () => ({
        confirmModal: true,
      }),
    });

    await wrapper.find('.q-btn-item').trigger('click');
    const domWrapper = new DOMWrapper(document.body);
    expect(domWrapper.find('.q-menu').exists()).toBeTruthy();
    await domWrapper.find('.q-item__section').trigger('click');
    expect(domWrapper.find('.q-dialog').exists()).toBeTruthy();
    expect(domWrapper.find('.q-card').html()).toContain(
      'Are you sure to remove this note?'
    );
    await domWrapper.findAll('.q-btn')[1].trigger('click');
    expect(wrapper.emitted()).toHaveProperty('removeNote');
  });
});
