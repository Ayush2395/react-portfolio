import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spinner, Container } from "react-bootstrap";
import { useAppState } from "../api/ContextApi";

export default function ProjectDisplay() {
  // const projectData = [
  //   {
  //     project: "React Portfolio",
  //     link: "https://github.com/Ayush2395/react-portfolio",
  //     img: "https://user-images.githubusercontent.com/37956873/182311874-2ea5a05b-c696-4ff4-9543-b59571ce2441.png",
  //   },
  //   {
  //     project: "Web Tools",
  //     link: "https://github.com/Ayush2395/webtools",
  //     img: "https://user-images.githubusercontent.com/37956873/182526315-bfb76127-1d7f-4342-b966-54a975890b9f.png",
  //   },
  //   {
  //     project: "Speedmil",
  //     link: "https://github.com/Ayush2395/speedmil",
  //     img: "https://user-images.githubusercontent.com/37956873/182526690-f74a5034-af56-45a1-9a50-7b6257af3a18.png",
  //   },
  //   {
  //     project: "Shoe Love",
  //     link: "https://github.com/Ayush2395/shoe-love",
  //     img: "https://user-images.githubusercontent.com/37956873/182311874-2ea5a05b-c696-4ff4-9543-b59571ce2441.png",
  //   },
  // ];

  const { searchTerm, projectCollection } = useAppState();

  const [projects, setProjects] = useState([]);

  // loading setup
  const [loading, setLoading] = useState(true);

  const fetchProjectDetails = async () => {
    await getDocs(projectCollection)
      .then((projects) => {
        setProjects(
          projects.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setLoading(false);
      })
      .catch((err) => console.log(err.code));
  };

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  return (
    <>
      <section className="project-display">
        <div className="main container mb-5">
          {loading ? (
            <Container
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "90vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Spinner className="m-auto d-block" animation="grow" />
                <p className="fs-4 d-block text-center w-100 m-auto">Loading...</p>
                <p className="fs-4 d-block text-center w-100 m-auto">Please wait</p>
              </div>
            </Container>
          ) : (
            <div>
              <h1 className="display-5 mb-3">My projects 😊</h1>
              <Row>
                {projects
                  .filter((project) => {
                    return project.project
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                  })
                  .map((item, id) => {
                    return (
                      <Col
                        key={id + 1}
                        className="mb-3"
                        xs="12"
                        sm="12"
                        md="3"
                        lg="4"
                      >
                        <Card className="bg-dark">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-${item.text_color}`}
                          >
                            <Card.Img src={item.img} alt="laptop" />
                            <Card.ImgOverlay>
                              <Card.Title className="position-absolute bottom-0">
                                {item.project}
                              </Card.Title>
                            </Card.ImgOverlay>
                          </a>
                        </Card>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
