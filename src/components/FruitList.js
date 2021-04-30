import React from "react";

export default class FruitList extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                fruit : [
                    {
                        name: "pomme",
                        quantity : 0,
                        price : 2
                    },
                    {
                        name: "raisins",
                        quantity : 0,
                        price : 2
                    },
                    {
                        name: "kiwi",
                        quantity : 0,
                        price : 2
                    },
            ]
        }
    }
}
