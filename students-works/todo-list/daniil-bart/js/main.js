var app = new Vue({
    el: '#root',
    data: {
        boards: []
    },
    watch: {
        boards: {
            deep: true,
            handler: function() {
                localStorage.setItem('boards', JSON.stringify(this.boards))
            }
        }
    },
    methods: {
        addTask: function(board) {
            this.boards[board].tasks.unshift({
                title: `Задача #${this.boards[board].tasks.length + 1}`,
                date: "",
                time: "",
                color: '#FFFFFF',
                completed: false
            })
        },
        deleteTask: function(index, board) {
            this.boards[board].tasks.splice(index, 1)
            if (this.boards[board].tasks.length == 0) {
                this.boards.splice(board, 1)
            }
        },
        addCollumn: function() {
            this.boards.unshift({
                title: 'Новый список',
                tasks: [{
                    title: `Задача #1`,
                    date: "",
                    time: "",
                    color: '#FFFFFF',
                    completed: false
                }]
            })
        }
    },
    mounted() {
        if (localStorage.getItem('boards')) {
            this.boards = JSON.parse(localStorage.getItem('boards'))
        }
    }
})