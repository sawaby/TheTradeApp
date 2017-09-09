var React = require("react");

//create saved component
var Modal = React.createClass({

    render: function () {

        return (
             <div>
                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

                
                <div id="modal1" class="modal">
                    <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                    </div>
                    <div class="modal-footer">
                    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">OK</a>
                    </div>
                </div>
            </div>
   
        );
    }
});

// export component for use in other files
module.exports = Modal;