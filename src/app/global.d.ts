/* eslint-disable no-unused-vars */
import en from '~/messages/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
