var app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        searchText: ''
    },
    watch: {
        tasks: {
            deep: true,
            handler: function() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks))
            }
        }
    },
    methods: {
        addTask: function() {
            this.tasks.unshift({
                title: 'Новая задача',
                date: '',
                time: '',
                completed: false
            })
        },
        deleteTask: function(index) {
            this.tasks.splice(index, 1)
        },
        checkTime: function(task) {
            if(task.completed) return false
            let taskDate = task.date || 
            (
                new Date().getFullYear() + '-' + 
                (new Date().getMonth() + 1) + '-' + 
                new Date().getDate()
            )
            let dateStr = (taskDate + ' ' + task.time).trim()
            return new Date(dateStr).getTime() < Date.now()
        }
    },
    mounted() {
        if(localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    }
})