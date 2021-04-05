import React from "react";
import { Card, Button } from "react-bootstrap";
import "./MovieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    console.log({ movie });
    return (
        <div className=" MovieCard">
            <Card>
                <Card.Img
                    className="Movieimg"
                    style={{ height: "450px" }}
                    variant="top"
                    src={movie.posterUrl}
                    alt="mlovie"
                />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.desciption}</Card.Text>
                    <h2>{"⭐".repeat(movie.rate)}</h2>

                    {/* <Card.Text>{movie.filter}</Card.Text> */}
                </Card.Body>
                <Card.Footer>
                    <Link to={`/moviepage/${movie.id}`}>
                        <Button variant="primary">Go to see</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MovieCard;
