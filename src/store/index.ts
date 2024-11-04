import { createStore } from "vuex";
import Todos from '@/store/modules/Todos/Todo'

export default createStore({
  modules: { Todos },
});