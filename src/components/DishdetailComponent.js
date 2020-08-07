import React, { Component } from 'react'
// import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignedDish: this.props.selectedDish
        };
    }

    renderComments(comments) {
        if (comments != null || comments != undefined) {
            var commentSubmitted = comments.map((comment) => {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li><br /></li>
                        <li>-- {comment.author}, {comment.date}<br /></li>
                    </ul>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {commentSubmitted}
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div >
                    {this.renderComments(dish.comments)}
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            this.renderDish(this.props.selectedDish)
        );
    }

}

export default Dishdetail;