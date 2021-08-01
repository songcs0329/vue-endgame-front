import { shallowMount } from '@vue/test-utils';
import SignupForm from './SignupForm.vue';

describe('SignupForm.vue', () => {
  test('Show warningText if username is not E-mail form', () => {
    const wrapper = shallowMount(SignupForm, {
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

  test('If ID, PASSWORD, NICKNAME is not insert, LoginButton is disabled', () => {
    const wrapper = shallowMount(SignupForm, {
      data() {
        // 고의 error case
        return {
          username: 'abc@abc.com',
          password: '1234',
          nickname: 'abc',
        };
      },
    });
    const loginButton = wrapper.find('.btn');
    expect(loginButton.element.disabled).toBeTruthy();
  });
});
