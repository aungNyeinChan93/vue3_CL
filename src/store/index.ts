import { createStore } from "vuex";
import Todos from '@/store/modules/Todos/Todo'
import Test from "./modules/Test"

export default createStore({
  modules: { Todos, Test },
});