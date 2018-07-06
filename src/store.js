export default {
  modules: {
    navigator: {
      strict: true,
      namespaced: true,
      state: {
        stack: [],
        options: {},
        books: [{
          id: 1,
          name: 'はじめの一歩',
          borrower: '東崎',
          returnDate: '2018-07-05'
        }, {
          id: 2,
          name: 'ワンピース',
          borrower: '畔蒜',
          returnDate: '2018-07-06'
        }, {
          id: 3,
          name: 'キン肉マン',
          borrower: null,
          returnDate: null
        }, {
          id: 4,
          name: 'アジャイルサムライ',
          borrower: '森',
          returnDate: '2018-07-08'
        }, {
          id: 5,
          name: 'ピクサー流創造するちから',
          borrower: null,
          returnDate: null
        }, {
          id: 6,
          name: 'ドラえもん',
          borrower: null,
          returnDate: null
        }],
        selectedBook: {}
      },
      actions: {
        borrow({ commit, state }, data) {
          // TODO api request
          commit('borrow', data)
        },
        restore({ commit, state }, id) {
          // TODO api request
          commit('restore', id)
        }
      },
      mutations: {
        push(state, page) {
          state.stack.push(page);
        },
        pop(state) {
          if (state.stack.length > 1) {
            state.stack.pop();
          }
        },
        replace(state, page) {
          state.stack.pop();
          state.stack.push(page);
        },
        reset(state, page) {
          state.stack = [page || state.stack[0]];
        },
        options(state, newOptions = {}) {
          state.options = newOptions;
        },
        select(state, book) {
          state.selectedBook = book
        },
        borrow(state, data) {
          let books = state.books
          books.forEach((book) => {
            if (book.id === data.id) {
              book.borrower = '阿部'
              book.returnDate = data.returnDate
            }
          })
          state.selectedBook['isLending'] = true

        },
        restore(state, id) {
          let books = state.books
          let bookIdx = books.findIndex((book) => {
            return (book.id === id)
          })

          let targetBook = books[bookIdx]
          targetBook.borrower = null
          targetBook.returnDate = null
          books[bookIdx] = targetBook

          targetBook['isLending'] = false
          state.selectedBook = targetBook
        }
      }
    },

    splitter: {
      strict: true,
      namespaced: true,
      state: {
        open: false
      },
      mutations: {
        toggle(state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen;
          } else {
            state.open = !state.open;
          }
        }
      }
    },

    tabbar: {
      strict: true,
      namespaced: true,
      state: {
        index: 0
      },
      mutations: {
        set(state, index) {
          state.index = index;
        }
      }
    }
  }
};
