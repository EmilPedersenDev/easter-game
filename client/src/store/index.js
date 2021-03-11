import Vue from "vue";
import Vuex from "vuex";
import api from "../service/api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: localStorage.getItem("userId") || "",
    users: [],
  },
  actions: {
    setUser: ({ commit }, model) => {
      return api
        .post("/users", model)
        .then((result) => {
          commit("setUser", result.data);
          return result.data;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
    getUsers: ({ commit }) => {
      return api
        .get("/users/score")
        .then((result) => {
          commit("setUsers", result.data);
          return;
        })
        .catch((err) => {
          throw new Error(err);
        });
    },
  },
  mutations: {
    setUser: (state, payload) => {
      localStorage.setItem("userId", payload._id);
      state.userId = payload._id;
    },
    setUsers: (state, payload) => {
      state.users = payload;
    },
  },
  getters: {
    getUser: (state) => {
      return state.userId;
    },
    getUsers: (state) => {
      return state.users;
    },
  },
});
