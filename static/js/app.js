(function() {
    var getTodo = function()
    {
        $.ajax({
            url: '/todo',
        }).done(function(data){
            advent.todo = data.todo;
        }).error(function(data) {
            console.log(data);
        });
    };

    var advent  = new Vue({
        el: "#advent",
        data: {
            todo: [],
            title:"",
            description : "",
        },
        methods: {
            add: function() {
                $.ajax({
                    url: '/add',
                    type:'post',
                    data:{
                        title:this.title,
                        description: this.description
                    }
                }).done(function(data){
                    getTodo();
                    advent.title = '';
                    advent.description = '';
                }).error(function(data) {
                    console.log(data);
                });
            }
        }
    });
    getTodo();

    return advent;
}).call(this);
