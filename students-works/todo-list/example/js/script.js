var app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        searchText: ''
    },
    computed: {
        filteredTasks: function() {
            return this.tasks.filter(task => task.title.toLowerCase().includes(this.searchText.toLowerCase()))
        },
        activeTasks: function() {
            return this.filteredTasks.filter(task => !task.completed)
        },
        completedTasks: function() {
            return this.filteredTasks.filter(task => task.completed)
        }
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
                id: Date.now(),
                title: 'Новая задача',
                date: '',
                time: '',
                completed: false
            })
            this.searchText = ''
        },
        deleteTask: function(id) {
            let index = this.tasks.findIndex(task => task.id == id)
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