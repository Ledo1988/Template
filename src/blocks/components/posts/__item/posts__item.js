modules.define('posts__item', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('posts', 'item', {
    onSetMod: {
        js: {
            inited: function() {
                
            }
        }
    }
}));

});
