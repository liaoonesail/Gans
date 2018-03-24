"use strict";

var Ajax = {
    type: '',
    url: '',
    data: '',
    dataType: '',
    success: '',
    init: function(opts){
        opts = opts || {};
        this.type = opts.type || 'get';
        this.url = opts.url || '';
        this.data = opts.data || '';
        this.dataType = opts.dataType || 'text';
        this.success = opts.success || null;
    },
    ajax: function(opts){
        var self = this;
        this.init(opts);
        var xhr = new XMLHttpRequest();
        xhr.open(this.type, this.url, true);
        if(this.type == 'GET' || this.type == 'get'){
            xhr.send(this.data);
        }else if(this.type == 'POST' || this.type == 'post'){
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xhr.send(this.data);
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                if(self.dataType == 'text' || self.dataType == 'TEXT'){
                    if(self.success != null){
                        self.success(xhr.responseText);
                    }
                }else if(self.dataType == 'xml' || self.dataType == 'XML'){
                    if(self.success != null){
                        self.success(xhr.responseXML);
                    }
                }else if(self.dataType == 'json' || self.dataType == 'JSON'){
                    if(self.success != null){
                        self.success(JSON.parse(xhr.responseText));
                    }
                }
            }
        }
    }
}