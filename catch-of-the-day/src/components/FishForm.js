import React from "react";
class AddFishForm extends React.Component {

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = e => {
        e.preventDefault();
        console.log("this name ref", this.nameRef.value.value);
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            description: this.descRef.value.value,
            image: this.imageRef.value.value
        };
        this.props.addFish(fish);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
               <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
               <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
               <select name="status" ref={this.statusRef} placeholder="Status">
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
              </select>
               <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
               <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
               <button type="submit">Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;