import { shallowMount } from '@vue/test-utils';
import LoginForm from './LoginForm.vue';

describe('LoginForm.vue', () => {
  test('Show warningText if username is not E-mail form', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'test',
        };
      },
    });
    const warningText = wrapper.find('.warning');
    // console.log(warningText.html());
    expect(warningText.exists()).toBeTruthy();
  });

  test('If ID, PASSWORD is not insert, LoginButton is disabled', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: '',
          password: '',
        };
      },
    });
    const loginButton = wrapper.find('.btn');
    expect(loginButton.element.disabled).toBeTruthy();
  });
});
